import { copyFile, mkdir, readFile, writeFile, rename, lstat, symlink, chmod } from 'node:fs/promises';
import { join, dirname, resolve } from 'node:path';
import { platformLayout } from './platform.mjs';
import { nativeIdentity, assertNativeHost } from './native-identity.mjs';
import { fileHash, inside } from './import-files.mjs';
import { enableLocalMode, productBranding } from './source-branding.mjs';
import { sourceAssets } from './source-assets.mjs';

export const exists = path => lstat(path).then(() => true, error => { if (error.code === 'ENOENT') return false; throw error; });

function ownedPath(base, path) {
  if (typeof path !== 'string' || !path || !inside(base, resolve(base, path))) throw new Error('Recovery file escapes its selected directory.');
  return join(base, path);
}

export async function copyRecoveryFile(options) {
  const { input, output, file } = options;
  await mkdir(dirname(output), { recursive: true });
  if (file.type === 'symlink') {
    if (typeof file.target !== 'string' || !inside(options.owner, resolve(dirname(output), file.target)))
      throw new Error(`Native symlink escapes the runtime: ${file.path}`);
    await symlink(file.target, output);
  } else {
    await copyFile(input, output, 1);
    if (process.platform !== 'win32') await chmod(output, (await lstat(input)).mode & 0o7777);
  }
}

export async function readRecovery(root, recovery) {
  const inventory = JSON.parse(await readFile(join(recovery, 'reports/installation-manifest.json'), 'utf8'));
  const readable = JSON.parse(await readFile(join(recovery, 'reports/readability.json'), 'utf8'));
  const layout = platformLayout(root);
  const identity = await nativeIdentity(join(recovery, 'artifacts/installation', layout.installationExecutable));
  assertNativeHost(identity);
  if (inventory.platform && (inventory.platform !== process.platform || inventory.arch !== process.arch))
    throw new Error('Recovery manifest does not match this platform/architecture.');
  if (inventory.app_prefix && inventory.app_prefix !== layout.appPrefix) throw new Error('Recovery application layout does not match this platform.');
  if (!Array.isArray(inventory.files) || !Array.isArray(readable.files)) throw new Error('Invalid recovery manifests.');
  return { root, recovery, inventory, layout, identity, derived: new Map(readable.files.map(file => [file.input, file])) };
}

async function assembleFile(context, file) {
  const { root, recovery, layout, derived } = context;
  const applicationPath = file.path.startsWith(layout.appPrefix) ? file.path.slice(layout.appPrefix.length) : undefined;
  const record = derived.get(file.path);
  const input = record ? ownedPath(recovery, record.output) : ownedPath(join(recovery, 'artifacts/installation'), file.path);
  const owner = applicationPath ? join(root, 'source/app') : layout.bundle ?? layout.host;
  const output = ownedPath(owner, applicationPath ?? file.path);
  await copyRecoveryFile({ input, output, owner, file });
  if (!record || !/\.(js|mjs|cjs)$/.test(applicationPath)) return;
  if (record.output_sha256 !== await fileHash(output)) throw new Error(`Recovered source digest mismatch: ${file.path}`);
  const text = await readFile(output, 'utf8');
  if (!text.includes('buildFlags.js')) return;
  const transformed = enableLocalMode(text, applicationPath);
  if (!transformed.patches.length) return;
  await writeFile(output, transformed.text);
  context.records.push({ path: applicationPath, recovered_sha256: record.output_sha256,
    source_sha256: await fileHash(output), patches: transformed.patches });
}

export async function assembleSource(root, recovery) {
  const context = await readRecovery(root, recovery);
  const { layout, inventory, identity } = context;
  if (await exists(join(root, 'source/app')) || await exists(layout.host)) throw new Error('Incomplete source build exists; preserve it for inspection.');
  context.records = [];
  for (const [index, file] of inventory.files.entries()) {
    await assembleFile(context, file);
    if ((index + 1) % 2000 === 0) console.log(`Assembled ${index + 1}/${inventory.files.length} files`);
  }
  for (const path of ['out/main.js', 'out/vs/workbench/workbench.desktop.main.js', 'out/vs/workbench/workbench.glass.main.js'])
    if (!context.records.some(record => record.path === path)) throw new Error(`Local-mode ownership not found in ${path}`);
  const native = layout.bundle ?? layout.host;
  await rename(join(native, layout.installationExecutable), layout.executable);
  const app = join(root, 'source/app');
  await productBranding(app);
  await sourceAssets({ root, app, executable: layout.executable, layout });
  await mkdir(dirname(layout.appLink), { recursive: true });
  await symlink(app, layout.appLink, process.platform === 'win32' ? 'junction' : 'dir');
  return { name: 'OpenVision', mode: 'local', platform: process.platform, arch: process.arch,
    native_architectures: identity.architectures, application_source: app, native_host: layout.host,
    source_version: inventory.application.version, recovered_text_files: context.derived.size,
    input_manifest: join(recovery, 'reports/readability.json'), build_flags: context.records,
    executable_sha256: await fileHash(layout.executable), native_limit: 'Electron host, native addons and WASM retain shipped compiled implementations.',
    created_at: new Date().toISOString() };
}

export async function loadRuntime(root) {
  const manifest = JSON.parse(await readFile(join(root, 'build/source-build.json'), 'utf8'));
  if (manifest.name !== 'OpenVision' || (manifest.platform ?? 'win32') !== process.platform || (manifest.arch ?? 'x64') !== process.arch)
    throw new Error('This build belongs to a different platform or architecture. Prepare native Cursor files for this machine.');
  const layout = platformLayout(root);
  assertNativeHost(await nativeIdentity(layout.executable));
  return { manifest, layout };
}
