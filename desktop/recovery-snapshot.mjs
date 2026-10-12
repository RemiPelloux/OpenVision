import { copyFile, mkdir, readFile, writeFile, readdir, lstat, readlink, symlink, realpath, chmod } from 'node:fs/promises';
import { dirname, join, relative, resolve, extname } from 'node:path';
import { format } from '../tooling/formatter.mjs';
import { fileHash, inside } from './import-files.mjs';
import { platformLayout } from './platform.mjs';
import { nativeIdentity, assertNativeHost } from './native-identity.mjs';
import { enableLocalMode } from './source-branding.mjs';
import { localWorkbench } from './local-workbench.mjs';
import { disableCloudFeatures } from './cloud-features.mjs';
import { customModels } from './custom-models.mjs';

const slash = path => path.split('\\').join('/');
const required = new Set(['out/main.js', 'out/vs/workbench/workbench.desktop.main.js', 'out/vs/workbench/workbench.glass.main.js']);

async function captureFile(context, path) {
  const source = join(context.installation, path);
  const destination = join(context.snapshot, path);
  const before = await lstat(source);
  const sha256 = await fileHash(source);
  await mkdir(dirname(destination), { recursive: true });
  await copyFile(source, destination, 1);
  if (process.platform !== 'win32') await chmod(destination, before.mode & 0o7777);
  const after = await lstat(source);
  if (sha256 !== await fileHash(destination) || before.size !== after.size || before.mtimeMs !== after.mtimeMs)
    throw new Error(`Installation changed during snapshot: ${source}`);
  context.files.push({ path: slash(path), bytes: before.size, sha256, mode: before.mode & 0o7777 });
}

async function captureLink(context, path) {
  const source = join(context.installation, path);
  const original = await readlink(source);
  const target = resolve(dirname(source), original);
  if (!inside(context.installation, target) || !inside(context.installation, await realpath(source)))
    throw new Error(`Installation link points outside the selected directory: ${source}`);
  const relocated = relative(dirname(source), target);
  await mkdir(dirname(join(context.snapshot, path)), { recursive: true });
  await symlink(relocated, join(context.snapshot, path));
  context.files.push({ path: slash(path), type: 'symlink', target: relocated, original_target: original });
}

async function captureTree(context, directory = '') {
  for (const entry of await readdir(join(context.installation, directory), { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isSymbolicLink()) await captureLink(context, path);
    else if (entry.isDirectory()) {
      await mkdir(join(context.snapshot, path), { recursive: true });
      await captureTree(context, path);
    } else if (entry.isFile()) await captureFile(context, path);
    else throw new Error(`Unsupported installation entry: ${path}`);
  }
}

function verifyBundle(text, path) {
  const flagged = enableLocalMode(text, path);
  if (!flagged.patches.length) throw new Error(`Required local-mode initializer missing: ${path}`);
  if (path.includes('workbench.')) {
    const variant = path.includes('.desktop.') ? 'desktop' : 'glass';
    customModels(disableCloudFeatures(localWorkbench(flagged.text, variant).text).text, variant);
  }
}

async function recoverFile(context, file) {
  if (file.type === 'symlink' || !file.path.startsWith(context.layout.appPrefix)) return;
  const path = file.path.slice(context.layout.appPrefix.length);
  if (!['.js', '.mjs', '.cjs'].includes(extname(path))) return;
  const text = await readFile(join(context.snapshot, file.path), 'utf8');
  if (!required.has(path) && !text.includes('buildFlags.js')) return;
  const formatted = await format(path, text, { sortImports: false, sortPackageJson: false, embeddedLanguageFormatting: 'off' });
  if (formatted.errors.length) throw new Error(`Cannot format application bundle: ${path}`);
  if (required.has(path)) verifyBundle(formatted.code, path);
  const output = `readable/app/${path}`;
  const destination = join(context.recovery, output);
  await mkdir(dirname(destination), { recursive: true });
  await writeFile(destination, formatted.code, { flag: 'wx' });
  context.recovered.push({ input: file.path, input_sha256: file.sha256, output,
    output_sha256: await fileHash(destination), status: 'formatted' });
}

export async function prepareRecovery(options) {
  const installation = await realpath(resolve(options.installation));
  const recovery = resolve(options.recovery);
  if (inside(installation, recovery) || inside(recovery, installation)) throw new Error('Installation and recovery directories must be separate.');
  const layout = platformLayout(options.root);
  const identity = await nativeIdentity(join(installation, layout.installationExecutable));
  assertNativeHost(identity);
  const packageJson = JSON.parse(await readFile(join(installation, layout.appPrefix, 'package.json'), 'utf8'));
  const context = { installation, recovery, layout, snapshot: join(recovery, 'artifacts/installation'), files: [], recovered: [] };
  await mkdir(dirname(recovery), { recursive: true });
  await mkdir(recovery);
  await captureTree(context);
  console.log(`Captured ${context.files.length} native files and links for ${identity.platform}/${process.arch}`);
  for (const file of context.files) await recoverFile(context, file);
  for (const path of required)
    if (!context.recovered.some(file => file.input === layout.appPrefix + path)) throw new Error(`Required bundle missing: ${path}`);
  await mkdir(join(recovery, 'reports'));
  const inventory = { schema_version: 2, platform: identity.platform, arch: process.arch, native_architectures: identity.architectures,
    original_installation: installation, app_prefix: layout.appPrefix,
    application: { name: packageJson.name, version: packageJson.version, distro: packageJson.distro }, files: context.files };
  await writeFile(join(recovery, 'reports/installation-manifest.json'), JSON.stringify(inventory, null, 2));
  await writeFile(join(recovery, 'reports/readability.json'), JSON.stringify({ producer: 'oxfmt 0.72.0', files: context.recovered }, null, 2));
  return { recovery, platform: identity.platform, arch: process.arch, version: packageJson.version, recovered_bundles: context.recovered.length };
}
