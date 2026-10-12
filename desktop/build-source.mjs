import { copyFile, mkdir, readFile, rename, stat, symlink, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { enableLocalMode, productBranding } from './source-branding.mjs';
import { sourceAssets } from './source-assets.mjs';
import { customizeLocalWorkbench } from './local-workbench.mjs';
import { projectWorkspace } from './project-workspace.mjs';
import { installModelSettings } from './custom-models.mjs';
import { installCursorImport } from './install-import.mjs';
import { localSettings } from './import-json.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const investigation = resolve(root, '../cursor');
const app = join(root, 'source/app');
const host = join(root, 'electron-host');
const marker = join(root, 'build/source-build.json');
const exists = path => stat(path).then(() => true, () => false);
async function digest(path) {
  const hash = createHash('sha256');
  for await (const chunk of createReadStream(path)) hash.update(chunk);
  return hash.digest('hex');
}
async function copy(input, output) {
  await mkdir(dirname(output), { recursive: true });
  await copyFile(input, output, 1);
}
async function json(path, data) {
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, JSON.stringify(data, null, 2) + '\n', { flag: 'wx' });
}

if (await exists(marker)) {
  console.log('Using existing editable OpenVision source build');
} else {
  if (await exists(app) || await exists(host)) throw new Error('Incomplete source build exists; preserve it for inspection');
  const inventory = JSON.parse(await readFile(join(investigation, 'reports/installation-manifest.json'), 'utf8'));
  const readable = JSON.parse(await readFile(join(investigation, 'reports/readability.json'), 'utf8'));
  const derived = new Map(readable.files.map(file => [file.input, file]));
  const records = [];
  let count = 0;
  for (const file of inventory.files) {
    const prefix = 'resources/app/';
    const relative = file.path.startsWith(prefix) ? file.path.slice(prefix.length) : undefined;
    const record = derived.get(file.path);
    const input = record ? join(investigation, record.output) : join(investigation, 'artifacts/installation', file.path);
    const output = relative ? join(app, relative) : join(host, file.path);
    await copy(input, output);
    if (record && /\.(?:js|mjs|cjs)$/.test(relative)) {
      const text = await readFile(output, 'utf8');
      if (text.includes('buildFlags.js')) {
        const transformed = enableLocalMode(text, relative);
        if (transformed.patches.length) {
          await writeFile(output, transformed.text);
          records.push({ path: relative, recovered_sha256: record.output_sha256,
            source_sha256: await digest(output), patches: transformed.patches });
        }
      }
    }
    if (++count % 2000 === 0) console.log(`Assembled ${count}/${inventory.files.length} files`);
  }
  for (const required of ['out/main.js', 'out/vs/workbench/workbench.desktop.main.js', 'out/vs/workbench/workbench.glass.main.js'])
    if (!records.some(record => record.path === required)) throw new Error(`Local-mode ownership not found in ${required}`);
  await rename(join(host, 'Cursor.exe'), join(host, 'OpenVision.exe'));
  await productBranding(app);
  await sourceAssets({ root, app, executable: join(host, 'OpenVision.exe') });
  await symlink(app, join(host, 'resources/app'), 'junction');
  await json(marker, { name: 'OpenVision', mode: 'local', application_source: app, native_host: host,
    source_version: inventory.application.version, recovered_text_files: derived.size,
    input_manifest: join(investigation, 'reports/readability.json'), build_flags: records,
    executable_sha256: await digest(join(host, 'OpenVision.exe')),
    native_limit: 'Electron host, native addons and WASM retain shipped compiled implementations.',
    created_at: new Date().toISOString() });
  console.log(`OpenVision source build complete; ${derived.size} recovered text files; ${records.length} local-mode factories`);
}

await customizeLocalWorkbench(root);
await installModelSettings(root);
await installCursorImport(root);

const settings = join(root, 'data/local/User/settings.json');
if (!await exists(settings)) await json(settings, localSettings);
await mkdir(join(root, 'data/local-extensions'), { recursive: true });
await projectWorkspace(root);
