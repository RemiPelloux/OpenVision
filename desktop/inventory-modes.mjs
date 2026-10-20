// npm run inventory:modes -- [--portable DIR] [--out FILE]
// Static, deterministic OV-704 specialized-mode inventory of the built runtime input.
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { inventoryModes, decisionFailures } from './specialized-modes.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const option = name => { const index = args.indexOf(name); return index < 0 ? undefined : args[index + 1]; };
const appRoot = option('--portable') ? join(resolve(option('--portable')), 'electron-host/resources/app') : join(root, 'source/app');
const out = resolve(option('--out') ?? join(root, 'logs/modes-inventory/inventory.json'));
const inventory = await inventoryModes(appRoot);
const failures = decisionFailures(inventory);
await mkdir(dirname(out), { recursive: true });
await writeFile(out, JSON.stringify({ ...inventory, failures }, null, 2) + '\n');
for (const mode of inventory.modes) {
  const gates = Object.entries(mode.gates).map(([name, value]) => `${name}=${value}`).join(', ');
  console.log(`${mode.id.padEnd(22)} ${mode.proposal.padEnd(28)} ${gates}`);
}
console.log(`Inventory written to ${out}`);
if (failures.length) { console.error(`Decision facts drifted:\n- ${failures.join('\n- ')}`); process.exitCode = 1; }
