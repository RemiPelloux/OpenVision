import { copyFile, lstat, readFile, rename, rm, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';
import { exists, loadRuntime } from './source-assembly.mjs';
import { fileHash, inside } from './import-files.mjs';
import { prepareUpstreamInputs, stageUpstreamHost, substituteHelperNode } from './upstream-host.mjs';

export const upstreamPackageName = `OpenVision-${process.platform}-${process.arch}`;
export const upstreamManifestName = 'openvision-upstream-host.json';
export const nativeManifestPath = 'build/native/linux-x64/manifest.json';

// Replaces each rebuilt addon recorded by `npm run build:native:linux` in the packaged application.
async function substituteAddons(root, app) {
  const manifest = JSON.parse(await readFile(join(root, nativeManifestPath), 'utf8'));
  const records = [];
  for (const addon of manifest.addons) for (const target of addon.targets) {
    const output = resolve(root, addon.output);
    if (!inside(join(root, 'build/native'), output)) throw new Error(`Rebuilt addon escapes build/native: ${addon.output}`);
    if (await fileHash(output) !== addon.sha256) throw new Error(`Rebuilt ${addon.package} no longer matches its recorded digest.`);
    const destination = join(app, target);
    if (!inside(app, destination) || !await exists(destination)) throw new Error(`Recovered addon target is missing: ${target}`);
    const recoveredSha = await fileHash(destination);
    const partial = `${destination}.${process.pid}.partial`;
    await copyFile(output, partial, 1);
    await rename(partial, destination);
    records.push({ path: `resources/app/${target}`, package: addon.package, version: addon.version,
      origin: addon.source.resolved, sha256: addon.sha256, recovered_sha256: recoveredSha, status: 'rebuilt' });
  }
  return { records, toolchain: manifest.toolchain };
}

// Builds build/upstream-host/<package> from the official Electron and Node releases plus the
// current editable application. The default build host under electron-host/ is not modified.
export async function buildUpstreamHost(root, { addons = false } = {}) {
  const { layout } = await loadRuntime(root);
  const base = join(root, 'build/upstream-host');
  const inputs = await prepareUpstreamInputs(root);
  const staged = join(base, 'native-host');
  const host = await stageUpstreamHost(inputs, layout.host, staged);
  const destination = join(base, upstreamPackageName);
  if (await exists(destination)) {
    if (!await exists(join(destination, upstreamManifestName))) throw new Error(`${destination} is not an upstream-host package; preserve it for inspection.`);
    await rm(destination, { recursive: true });
  }
  const partial = `${destination}.partial`;
  await rm(partial, { recursive: true, force: true });
  const packaged = spawnSync(process.execPath, [join(root, 'desktop/package-portable.mjs'), partial, '--native-host', staged], { cwd: root, stdio: 'inherit' });
  if (packaged.error) throw packaged.error;
  if (packaged.status !== 0) throw new Error(`package-portable exited ${packaged.status}`);
  const app = join(partial, 'electron-host/resources/app');
  const helper = await substituteHelperNode(inputs, join(app, 'resources/helpers/node'));
  const rebuilt = addons ? await substituteAddons(root, app) : { records: [] };
  const record = { name: 'OpenVision upstream host', platform: process.platform, arch: process.arch,
    created_at: new Date().toISOString(),
    inputs: Object.fromEntries(Object.entries(inputs).map(([name, input]) =>
      [name, { version: input.version, url: input.url, shasums: input.shasums, sha256: input.sha256, bytes: input.bytes }])),
    executable: { path: 'electron-host/openvision', sha256: await fileHash(join(partial, 'electron-host/openvision')) },
    fuses: host.fuses, host_files: host.comparison.entries, recovered_only: host.comparison.recovered_only,
    omitted_release_files: host.comparison.omitted_release_files,
    substitutions: [
      ...host.comparison.entries.map(entry => ({ path: `electron-host/${entry.path}`, origin: `${inputs.electron.url}#${entry.release_path}`,
        sha256: entry.sha256, recovered_sha256: entry.recovered_sha256, status: entry.status })),
      { ...helper, path: `electron-host/${helper.path}` },
      ...rebuilt.records.map(entry => ({ ...entry, path: `electron-host/${entry.path}` })),
    ],
    addons: addons ? { toolchain: rebuilt.toolchain } : 'recovered' };
  await writeFile(join(partial, upstreamManifestName), JSON.stringify(record, null, 2) + '\n');
  await rename(partial, destination);
  console.log(`Upstream host package: ${destination} (${record.substitutions.length} substituted files, addons ${addons ? 'rebuilt' : 'recovered'})`);
  return { destination, executable: join(destination, 'electron-host/openvision'), record };
}

export async function readUpstreamManifest(directory) {
  if (!(await lstat(directory)).isDirectory()) throw new Error(`${directory} is not a package directory.`);
  return JSON.parse(await readFile(join(directory, upstreamManifestName), 'utf8'));
}
