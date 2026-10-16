// Validate maintained documentation without scanning recovered source or private state.
import { readdir, readFile, stat } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const files = ['README.md', 'CONTRIBUTING.md', 'SECURITY.md', 'NOTICE.md', 'CHANGELOG.md',
  'downloads/README.md', 'curs_source/README.md', 'desktop/README.md', 'src/README.md',
  'test/README.md', 'tooling/README.md', 'examples/README.md'];
const failures = [];
const anchorCache = new Map();
let targets = 0;
let fragments = 0;
const withoutCode = text => text.replace(/^(```|~~~)[\s\S]*?^\1[^\n]*$/gm, '');

async function collect(directory) {
  for (const entry of await readdir(join(root, directory), { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) await collect(path);
    else if (entry.isFile() && entry.name.endsWith('.md'))
      files.push(path);
  }
}

async function anchors(path) {
  if (anchorCache.has(path)) return anchorCache.get(path);
  const values = new Set();
  const counts = new Map();
  const text = withoutCode(await readFile(path, 'utf8'));
  for (const match of text.matchAll(/^#{1,6}\s+(.+?)\s*#*\s*$/gm)) {
    const slug = match[1].toLowerCase().replace(/<[^>]*>/g, '')
      .replace(/!?\[([^\]]*)\]\([^)]*\)/g, '$1').replace(/&amp;/g, '')
      .replace(/[^\p{L}\p{N}\p{M}\s_-]/gu, '').replace(/ /g, '-');
    const count = counts.get(slug) ?? 0;
    counts.set(slug, count + 1);
    values.add(slug + (count ? '-' + count : ''));
  }
  for (const match of text.matchAll(/(?:id|name)=["']([^"']+)["']/g)) values.add(match[1]);
  anchorCache.set(path, values);
  return values;
}

async function check(file, value) {
  const target = value.replace(/^<([^>]+)>.*$/, '$1').replace(/\s+["'].*$/, '');
  if (/^[a-z][a-z0-9+.-]*:/i.test(target) || target.startsWith('/')) return;
  targets++;
  const [pathname, fragment] = target.split('#');
  const path = pathname ? resolve(root, dirname(file), decodeURIComponent(pathname.split('?')[0])) : join(root, file);
  try { await stat(path); }
  catch (error) {
    if (error.code !== 'ENOENT') throw error;
    failures.push({ file, target, reason: 'missing path' });
    return;
  }
  if (fragment && path.endsWith('.md')) {
    fragments++;
    if (!(await anchors(path)).has(decodeURIComponent(fragment)))
      failures.push({ file, target, reason: 'missing anchor' });
  }
}

await collect('docs');
await collect('scripts');
for (const file of files) {
  const text = withoutCode(await readFile(join(root, file), 'utf8'));
  const links = [...text.matchAll(/!?\[[^\]\n]*\]\(([^\n)]*)\)/g)].map(match => match[1]);
  links.push(...[...text.matchAll(/(?:href|src)="([^"]+)"/g)].map(match => match[1]));
  for (const link of links) await check(file, link);
}
console.log(JSON.stringify({ files: files.length, local_targets: targets, fragments, failures }, null, 2));
if (failures.length) process.exitCode = 1;
