/**
 * SAFE BLOG DATA IMPORT SCRIPT
 * ─────────────────────────────────────────────────────────────────
 * Reads blog-export.json (created by export-blogs.mjs from old DB)
 * and inserts all records into the NEW database (DATABASE_URL).
 *
 * Safety features:
 * - Uses upsert (createMany with skipDuplicates) → never overwrites existing data
 * - Logs every record imported
 * - Dry-run mode available (set DRY_RUN=true)
 * ─────────────────────────────────────────────────────────────────
 * Usage:
 *   1. Run export-blogs.mjs against the OLD DB first
 *   2. Update .env.local DATABASE_URL to NEW database
 *   3. Run: node import-blogs.mjs
 */
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { readFileSync, existsSync } from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '.env.local') });

const DRY_RUN = process.env.DRY_RUN === 'true';
const exportPath = path.join(__dirname, 'blog-export.json');

if (!existsSync(exportPath)) {
  console.error('❌ blog-export.json not found. Run export-blogs.mjs first.');
  process.exit(1);
}

const exportData = JSON.parse(readFileSync(exportPath, 'utf-8'));
const { blogs, audits, blogCount } = exportData;

console.log('=== BLOG DATA IMPORT ===');
console.log(`Source: ${exportData.sourceHost}`);
console.log(`Target: ${new URL(process.env.DATABASE_URL || 'postgresql://x').hostname}`);
console.log(`Blogs to import: ${blogCount}`);
console.log(`Dry run: ${DRY_RUN}`);
console.log('');

if (DRY_RUN) {
  console.log('[DRY RUN] Would import:');
  blogs.forEach((b, i) => console.log(`  [${i+1}] "${b.title}" (slug: ${b.slug})`));
  process.exit(0);
}

const prisma = new PrismaClient({
  datasources: { db: { url: process.env.DATABASE_URL } },
});

try {
  // Check connection
  const existingCount = await prisma.blog.count();
  console.log(`New DB currently has: ${existingCount} blogs`);

  // Import blogs using upsert to avoid duplicates
  let imported = 0;
  let skipped = 0;

  for (const blog of blogs) {
    try {
      await prisma.blog.upsert({
        where: { slug: blog.slug },
        update: {}, // Don't overwrite if already exists
        create: {
          id: blog.id,
          title: blog.title,
          slug: blog.slug,
          content: blog.content,
          coverImg: blog.coverImg || null,
          ogImage: blog.ogImage || null,
          metaTitle: blog.metaTitle || null,
          metaDescription: blog.metaDescription || null,
          publisher: blog.publisher || null,
          category: blog.category || null,
          tags: blog.tags || [],
          keywords: blog.keywords || [],
          schema: blog.schema || null,
          faqSchema: blog.faqSchema || null,
          schemas: blog.schemas || [],
          createdAt: new Date(blog.createdAt),
          updatedAt: new Date(blog.updatedAt),
        },
      });
      console.log(`✅ [${++imported}] Imported: "${blog.title}"`);
    } catch (e) {
      if (e.code === 'P2002') {
        console.log(`⏭️  [skip] Already exists: "${blog.title}"`);
        skipped++;
      } else {
        console.error(`❌ Failed: "${blog.title}" — ${e.message}`);
      }
    }
  }

  const finalCount = await prisma.blog.count();
  console.log(`\n✅ Import complete!`);
  console.log(`   Imported: ${imported} | Skipped (already existed): ${skipped}`);
  console.log(`   New DB now has: ${finalCount} blogs`);

} catch (e) {
  console.error('❌ Import failed:', e.message);
} finally {
  await prisma.$disconnect();
}
