// Recover a versioned, immutable local installation without executing target code.
// Uses the already installed REA and recovery tools in the parent checkout.
import { mkdir, readFile, writeFile, stat } from 'node:fs/promises';
import { spawn } from 'node:child_process';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { verifyStage } from './stage-verify.mjs';

const appRoot = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const repository = dirname(appRoot);
const installation = resolve(process.argv[2] ?? 'C:/Users/User/AppData/Local/Programs/cursor');
const pkg = JSON.parse(await readFile(join(installation, 'resources/app/package.json'), 'utf8'));
if (!/^[0-9]+\.[0-9]+\.[0-9]+$/.test(pkg.version)) throw new Error('Unexpected installation version');
const destination = join(appRoot, 'curs_source/snapshots', pkg.version);
const scripts = join(destination, 'scripts');
const originalScripts = join(repository, 'cursor/scripts');
const engine = join(repository, 'cursor/tooling/node_modules/@wakaru/cli-win32-x64/wakaru.exe');
await stat(engine);
await mkdir(scripts, { recursive: true });
const literal = value => JSON.stringify(value.replaceAll('\\', '/'));
const common = `import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
export const root = ${literal(destination)};
export const installation = ${literal(installation)};
export const snapshot = resolve(root, 'artifacts/installation');
export const app = resolve(snapshot, 'resources/app');
export async function digest(path) {
  const hash = createHash('sha256');
  for await (const chunk of createReadStream(path)) hash.update(chunk);
  return hash.digest('hex');
}
export async function json(path, value) {
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, JSON.stringify(value, null, 2) + '\\n', { flag: 'wx' });
}
export async function bytes(path, value) {
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, value, { flag: 'wx' });
}
`;
await writeFile(join(scripts, 'common.mjs'), common);
const names = ['snapshot', 'format-one', 'readable', 'recover-bundles', 'raw-recovery', 'source-maps', 'features', 'rea-analysis'];
for (const name of names) {
  let code = await readFile(join(originalScripts, name + '.mjs'), 'utf8');
  if (name === 'recover-bundles') {
    code = code.replace("join(root, 'tooling/node_modules/@wakaru/cli-win32-x64/wakaru.exe')", literal(engine));
    // Known large-bundle rewrite failures are avoided by structural raw extraction.
    code = code.replace("'--level=minimal', '--formatter',", "'--raw',");
    code = code.replace("'--emit-source-map',", '');
    code = code.replace("extraction: 'structural', rewrite: 'minimal'", "extraction: 'structural', rewrite: 'raw'");
  }
  if (name === 'rea-analysis') {
    code = code.replace("'../../dist/contracts/toolContracts.js'", JSON.stringify(pathToFileURL(join(repository, 'dist/contracts/toolContracts.js')).href));
    code = code.replace("const repository = join(root, '..');", 'const repository = ' + literal(repository) + ';');
  }
  await writeFile(join(scripts, name + '.mjs'), code);
}

async function run(name, report) {
  let retained = false;
  try {
    await stat(join(destination, report));
    retained = true;
  } catch (error) { if (error.code !== 'ENOENT') throw error; }
  if (retained) {
    await verifyStage(destination, name, report);
    console.log('Verified retained stage report and applicable file digests: ' + name);
    return;
  }
  console.log('Starting ' + name);
  const child = spawn(process.execPath, [join(scripts, name + '.mjs')], {
    cwd: repository, stdio: 'inherit', windowsHide: true,
  });
  await new Promise((yes, no) => {
    child.on('error', no);
    child.on('exit', code => code === 0 ? yes() : no(new Error(name + ' exited ' + code)));
  });
  await verifyStage(destination, name, report);
}

for (const [name, report] of [
  ['snapshot', 'reports/installation-manifest.json'],
  ['readable', 'reports/readability.json'],
  ['recover-bundles', 'reports/bundle-recovery.json'],
  ['raw-recovery', 'reports/raw-bundle-recovery.json'],
  ['source-maps', 'reports/source-maps-verified.json'],
  ['features', 'reports/extension-features.json'],
  ['rea-analysis', 'reports/rea-ledger.json'],
]) await run(name, report);
const ledger = JSON.parse(await readFile(join(destination, 'reports/rea-ledger.json'), 'utf8'));
const failed = ledger.tasks.filter(task => task.error || !task.bundle_exported);
console.log('REA records exported: ' + (ledger.tasks.length - failed.length) + '/' + ledger.tasks.length);
if (failed.length) process.exitCode = 1;
console.log('Recovery written to ' + destination);
console.log('Formatting and structural extraction do not establish original-source completeness or runtime parity.');
