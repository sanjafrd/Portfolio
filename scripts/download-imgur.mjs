#!/usr/bin/env node
// One-shot repatriation: detect i.imgur.com URLs inside MDX frontmatter,
// download them to src/assets/projects/{slug}/imgur-{hash}.{ext}, then
// rewrite the MDX references to use the local relative path.
//
// Idempotent: re-running skips already-downloaded files and re-applies
// rewrites only where a URL is still present.

import { createWriteStream } from 'node:fs';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { pipeline } from 'node:stream/promises';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const CONTENT_DIR = path.join(ROOT, 'src/content/projects');
const ASSETS_DIR = path.join(ROOT, 'src/assets/projects');

const IMGUR_REGEX = /https:\/\/i\.imgur\.com\/([A-Za-z0-9]+)\.(jpg|jpeg|png|gif|webp)/g;

async function downloadFile(url, destPath) {
  const res = await fetch(url);
  if (!res.ok || !res.body) {
    throw new Error(`HTTP ${res.status} for ${url}`);
  }
  await fs.mkdir(path.dirname(destPath), { recursive: true });
  const tmpPath = `${destPath}.part`;
  await pipeline(res.body, createWriteStream(tmpPath));
  await fs.rename(tmpPath, destPath);
}

async function fileExists(p) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

async function processMdx(mdxPath) {
  const slug = path.basename(mdxPath, '.mdx');
  const source = await fs.readFile(mdxPath, 'utf8');

  const matches = [...source.matchAll(IMGUR_REGEX)];
  if (matches.length === 0) {
    return { slug, downloaded: 0, rewritten: 0, skipped: 0 };
  }

  const unique = new Map();
  for (const m of matches) {
    const [fullUrl, hash, ext] = m;
    if (!unique.has(fullUrl)) {
      unique.set(fullUrl, { hash, ext: ext.toLowerCase() });
    }
  }

  let downloaded = 0;
  let skipped = 0;
  let rewritten = source;

  for (const [url, { hash, ext }] of unique) {
    const localName = `imgur-${hash}.${ext}`;
    const absPath = path.join(ASSETS_DIR, slug, localName);
    const relPath = `../../assets/projects/${slug}/${localName}`;

    if (await fileExists(absPath)) {
      skipped++;
    } else {
      process.stdout.write(`  ↓ ${url}\n`);
      await downloadFile(url, absPath);
      downloaded++;
    }
    rewritten = rewritten.replaceAll(url, relPath);
  }

  if (rewritten !== source) {
    await fs.writeFile(mdxPath, rewritten, 'utf8');
  }

  return {
    slug,
    downloaded,
    skipped,
    rewritten: unique.size,
  };
}

async function main() {
  const entries = await fs.readdir(CONTENT_DIR);
  const mdxFiles = entries.filter((e) => e.endsWith('.mdx')).sort();

  console.log(`Scanning ${mdxFiles.length} MDX files for Imgur URLs…\n`);

  let totalDown = 0;
  let totalSkip = 0;
  let totalRewrite = 0;
  const touched = [];

  for (const file of mdxFiles) {
    const abs = path.join(CONTENT_DIR, file);
    const result = await processMdx(abs);
    if (result.rewritten > 0) {
      touched.push(result);
      totalDown += result.downloaded;
      totalSkip += result.skipped;
      totalRewrite += result.rewritten;
      console.log(
        `${result.slug.padEnd(22)} — ${result.downloaded} downloaded, ${result.skipped} skipped`,
      );
    }
  }

  console.log(
    `\nDone. ${touched.length} project(s) touched. ${totalDown} downloaded, ${totalSkip} already present, ${totalRewrite} URLs rewritten.`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
