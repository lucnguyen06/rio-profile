#!/usr/bin/env node
/**
 * Scan data/music/ and generate data/music/tracks.json
 * Run this after adding or removing music files.
 */
import { readdirSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');
const musicDir = join(rootDir, 'data', 'music');
const outputPath = join(musicDir, 'tracks.json');

const EXT_REGEX = /\.(mp3|wav|ogg|flac|m4a)$/i;

const files = readdirSync(musicDir)
  .filter(f => EXT_REGEX.test(f))
  .sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));

const tracks = files.map(filename => {
  const fullPath = `./data/music/${filename}`;
  const title = filename.replace(EXT_REGEX, '');
  return { title, src: fullPath };
});

mkdirSync(musicDir, { recursive: true });
writeFileSync(outputPath, JSON.stringify({ tracks }, null, 2), 'utf8');

console.log(`Generated ${outputPath} — ${tracks.length} track(s)`);
tracks.forEach((t, i) => console.log(`  ${String(i + 1).padStart(2)} ${t.title}`));
