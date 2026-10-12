import { readdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const directory = dirname(fileURLToPath(import.meta.url));
for (const file of await readdir(directory)) {
  if (!/\.(mjs|cjs|js)$/.test(file)) continue;
  const result = spawnSync(process.execPath, ['--check', join(directory, file)], { stdio: 'inherit' });
  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status ?? 1);
}
console.log('Desktop JavaScript syntax checks passed.');
