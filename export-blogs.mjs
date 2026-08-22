/**
 * SAFE export script - reads ALL blog data from old DB and saves as JSON
 * Use this to migrate data to new DB
 * READ-ONLY - does NOT modify anything
 */
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { writeFileSync } from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '.env.local') });

console.log('=== BLOG DATA EXPORT (READ-ONLY) ===');
console.log('Connecting to:', new URL(process.env.DATABASE_URL || 'postgresql://x').hostname);

const prisma = new PrismaClient({
  datasources: { db: { url: process.env.DATABASE_URL } },
});

try {
  const blogs = await prisma.blog.findMany({
    select: {
      id: true,
      title: true,
      slug: true,
      content: true,
      coverImg: true,
      ogImage: true,
      metaTitle: true,
      metaDescription: true,
      publisher: true,
      category: true,
      tags: true,
      keywords: true,
      schema: true,
      faqSchema: true,
      schemas: true,
      createdAt: true,
      updatedAt: true,
    },
    orderBy: { createdAt: 'asc' },
  });

  const audits = await prisma.adminAudit.findMany({
    orderBy: { createdAt: 'asc' },
  });

  const exportData = {
    exportedAt: new Date().toISOString(),
    sourceHost: new URL(process.env.DATABASE_URL || 'postgresql://x').hostname,
    blogCount: blogs.length,
    auditCount: audits.length,
    blogs,
    audits,
  };

  const outPath = path.join(__dirname, 'blog-export.json');
  writeFileSync(outPath, JSON.stringify(exportData, null, 2), 'utf-8');

  console.log(`\n✅ Exported ${blogs.length} blogs and ${audits.length} audit records`);
  console.log(`   Saved to: blog-export.json`);
  console.log('\nBlog titles:');
  blogs.forEach((b, i) => console.log(`  [${i+1}] ${b.title}`));

} catch (e) {
  console.error('❌ Export failed:', e.message);
} finally {
  await prisma.$disconnect();
}
