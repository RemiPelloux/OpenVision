import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

// Deterministic synthetic project for retrieval workload baselines (OV-504).
// Content is generated, not copied; sizes approximate ordinary source files.
const words = ['order', 'invoice', 'customer', 'shipment', 'route', 'warehouse', 'token', 'session', 'payment', 'refund',
  'inventory', 'report', 'schedule', 'notify', 'cache', 'retry', 'queue', 'metric', 'parser', 'export'];
const languages = [
  ['ts', (name, n) => `export function ${name}(input: number): number {\n  const value = input * ${n};\n  return value + ${n % 7};\n}\n`],
  ['js', (name, n) => `export const ${name} = (items) => items.filter(item => item.id % ${n % 5 + 2} === 0);\n`],
  ['py', (name, n) => `def ${name.replace(/[A-Z]/g, c => `_${c.toLowerCase()}`)}(rows):\n    return [row for row in rows if row > ${n}]\n`],
  ['go', (name, n) => `func ${name[0].toUpperCase()}${name.slice(1)}(n int) int {\n\treturn n + ${n}\n}\n`],
  ['md', (name, n) => `## ${name}\n\nThe ${name} step handles ${words[n % words.length]} records.\n`],
];

function random(seed) {
  let state = seed >>> 0;
  return () => (state = (state * 1664525 + 1013904223) >>> 0) / 2 ** 32;
}

export async function createScaleFixture(root, { files = 10000, perDirectory = 50, functionsPerFile = 8, seed = 503 } = {}) {
  const next = random(seed);
  let bytes = 0;
  for (let index = 0; index < files; index++) {
    const [extension, render] = languages[index % languages.length];
    const directory = join(root, `pkg${Math.floor(index / (perDirectory * 20))}`, `mod${Math.floor(index / perDirectory)}`);
    if (index % perDirectory === 0) await mkdir(directory, { recursive: true });
    let text = extension === 'go' ? `package mod${Math.floor(index / perDirectory)}\n\n` : '';
    for (let fn = 0; fn < functionsPerFile; fn++) {
      const name = `${words[Math.floor(next() * words.length)]}${words[Math.floor(next() * words.length)].replace(/^./, c => c.toUpperCase())}${index}x${fn}`;
      text += render(name, index + fn) + '\n';
    }
    bytes += Buffer.byteLength(text);
    await writeFile(join(directory, `file${index}.${extension}`), text);
  }
  await writeFile(join(root, '.gitignore'), 'build/\n');
  return { files, bytes };
}
