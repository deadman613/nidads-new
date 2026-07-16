import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const globalForPrisma = globalThis;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const envPath = path.resolve(__dirname, "..", "..", ".env.local");

dotenv.config({ path: envPath, override: true });

if (!process.env.DATABASE_URL && process.env.DIRECT_URL) {
  process.env.DATABASE_URL = process.env.DIRECT_URL;
}

const { PrismaClient } = await import("@prisma/client");

const normalizeDatabaseUrl = (rawUrl) => {
  if (!rawUrl || typeof rawUrl !== "string") return rawUrl;

  try {
    const url = new URL(rawUrl);

    const isSupabasePooler = url.hostname.endsWith("pooler.supabase.com");
    if (isSupabasePooler) {
      if (url.port === "5432") {
        url.port = "6543";
      }

      const params = url.searchParams;
      if (!params.has("sslmode")) params.set("sslmode", "require");
      if (!params.has("pgbouncer")) params.set("pgbouncer", "true");
      if (!params.has("connection_limit")) params.set("connection_limit", "1");
      if (!params.has("schema")) params.set("schema", "public");
    }

    // Re-serialize via URL to ensure user/pass are properly encoded.
    return url.toString();
  } catch {
    return rawUrl;
  }
};

const databaseUrl = normalizeDatabaseUrl(process.env.DATABASE_URL);

const prisma = globalForPrisma.prisma ?? new PrismaClient({
  datasources: databaseUrl ? { db: { url: databaseUrl } } : undefined,
  log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
});

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export default prisma;
