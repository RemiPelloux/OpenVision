import { readFile, writeFile, mkdir, rename } from 'node:fs/promises';
import { dirname } from 'node:path';
import { fileHash } from './import-files.mjs';

// Hash streams, rather than loading large bundles merely to check freshness.
export async function cachedFile(options, transform) {
  const { path, marker, recipe } = options;
  const before = await fileHash(path);
  if (!before) throw new Error(`Build input missing: ${path}`);
  let previous;
  try { previous = JSON.parse(await readFile(marker, 'utf8')); }
  catch (error) { if (error.code !== 'ENOENT' && !(error instanceof SyntaxError)) throw error; }
  if (previous?.recipe === recipe && previous.output === before) return false;
  await transform();
  const output = await fileHash(path);
  if (!output) throw new Error(`Build output missing: ${path}`);
  await mkdir(dirname(marker), { recursive: true });
  const temporary = `${marker}.${process.pid}.tmp`;
  await writeFile(temporary, JSON.stringify({ recipe, output }) + '\n');
  await rename(temporary, marker);
  return true;
}
