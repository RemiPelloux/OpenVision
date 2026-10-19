// Regenerate desktop/fixtures/linux-x64-addons-3.21.13.json (the known native
// addons and bundled shared objects) from a passing verify:data-destinations
// result. Usage: node desktop/addon-fixture.mjs logs/data-destinations-<id>/result.json
import { readFile, writeFile } from 'node:fs/promises';
import { basename, dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const [resultPath] = process.argv.slice(2);
if (!resultPath) throw new Error('Usage: addon-fixture.mjs <verify:data-destinations result.json>');
const result = JSON.parse(await readFile(resultPath, 'utf8'));
if (!result.success) throw new Error('Use a passing run');
const addons = result.addons.addons.filter(row => row.relative !== undefined && row.sha256)
  .map(({ relative, sha256, roles }) => ({ path: relative, sha256, roles })).sort((a, b) => a.path.localeCompare(b.path));
await writeFile(join(root, 'desktop/fixtures/linux-x64-addons-3.21.13.json'), JSON.stringify({
  scope: `Native addons and bundled shared objects mapped by the OpenVision 3.21.13 Linux x64 source build during verify:data-destinations (logs/${basename(dirname(resolve(resultPath)))}). An addon that is not listed, or has a different SHA-256, is unknown; an unknown addon in a process that makes a direct non-proxy connection fails noAddonDirectSockets.`,
  addons }, null, 1) + '\n');
console.log(`${addons.length} known addons`);
