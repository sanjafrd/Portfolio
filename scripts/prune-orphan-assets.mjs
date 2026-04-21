#!/usr/bin/env node
import { readdir, readFile, stat, unlink } from 'node:fs/promises';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const DIST = join(ROOT, 'dist');
const ASSETS = join(DIST, '_astro');
const PRUNABLE_EXT = /\.(png|jpe?g)$/i;

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(full)));
    else files.push(full);
  }
  return files;
}

async function main() {
  const distFiles = await walk(DIST);
  const assetFiles = distFiles.filter((f) => f.startsWith(ASSETS) && PRUNABLE_EXT.test(f));

  if (assetFiles.length === 0) {
    console.log('No prunable (png/jpg) assets in dist/_astro/.');
    return;
  }

  const textFiles = distFiles.filter((f) => /\.(html|css|js|xml|json|txt)$/i.test(f));
  const haystack = (
    await Promise.all(textFiles.map((f) => readFile(f, 'utf8').catch(() => '')))
  ).join('\n');

  let deleted = 0;
  let freed = 0;
  for (const asset of assetFiles) {
    const name = asset.slice(ASSETS.length + 1);
    if (haystack.includes(name)) continue;
    const { size } = await stat(asset);
    await unlink(asset);
    deleted += 1;
    freed += size;
    console.log(`  − ${relative(DIST, asset)} (${(size / 1024).toFixed(0)} KB)`);
  }

  console.log(
    `Pruned ${deleted}/${assetFiles.length} orphan originals — freed ${(freed / 1024 / 1024).toFixed(1)} MB.`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
