// ABI and behaviour check for the addons rebuilt by `npm run build:native:linux`: each one is
// loaded by the official Electron 42.10.0 binary (ELECTRON_RUN_AS_NODE) through its wrapper and
// exercised; the recovered addons run the same fixture as a control.
import assert from 'node:assert/strict';
import { mkdir, mkdtemp, readFile, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { spawnSync, execFileSync } from 'node:child_process';
import { fileHash } from './import-files.mjs';
import { elfAbi, nativeAddons, rustAddons } from './native-rebuild.mjs';
import { prepareUpstreamInputs } from './upstream-host.mjs';
import { nativeManifestPath } from './upstream-host-build.mjs';

const root = resolve(import.meta.dirname, '..');
await mkdir(join(root, 'logs'), { recursive: true });
const directory = await mkdtemp(join(root, 'logs/native-abi-'));
const result = { success: false, checkedAt: new Date().toISOString(),
  commit: execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim(), checks: {}, variants: {} };

function fixture(electron, packages) {
  const env = { PATH: process.env.PATH, HOME: process.env.HOME, DISPLAY: process.env.DISPLAY ?? '', ELECTRON_RUN_AS_NODE: '1' };
  const run = spawnSync(electron, [join(root, 'desktop/native-abi-fixture.cjs'), JSON.stringify(packages)], { env, encoding: 'utf8', timeout: 60000 });
  return { status: run.status, signal: run.signal, stderr: run.stderr.slice(-4000), report: (() => { try { return JSON.parse(run.stdout); } catch { return { raw: run.stdout.slice(-4000) }; } })() };
}

try {
  const manifest = JSON.parse(await readFile(join(root, nativeManifestPath), 'utf8'));
  const inputs = await prepareUpstreamInputs(root);
  const electron = join(inputs.electron.host, 'electron');
  result.checks.electron_sha256 = await fileHash(electron);
  assert.equal(result.checks.electron_sha256, inputs.electron.executableSha256, 'Extracted Electron executable differs from the pinned release file');
  const rebuilt = {}, recovered = {};
  for (const addon of nativeAddons) {
    const record = manifest.addons.find(entry => entry.package === addon.package);
    assert.ok(record, `${addon.package} is missing from ${nativeManifestPath}`);
    const packageDirectory = join(root, 'native/linux-x64/node_modules', addon.package);
    assert.equal(await fileHash(join(packageDirectory, addon.binary)), record.sha256, `${addon.package} in-place build differs from the manifest; rerun npm run build:native:linux`);
    const abi = elfAbi(join(packageDirectory, addon.binary));
    assert.equal(abi.api, record.recovered_abi.api, `${addon.package} registers ${abi.api}, recovered ${record.recovered_abi.api}`);
    if (abi.api.startsWith('node-module-')) assert.equal(abi.api, `node-module-${manifest.toolchain.node_module_version}`);
    result.checks[addon.package] = { abi, recovered_abi: record.recovered_abi };
    rebuilt[addon.package] = packageDirectory;
    recovered[addon.package] = join(root, 'source/app', addon.targets[0].replace(/\/build\/Release\/[^/]+$/, ''));
  }
  // Rust addons have no in-place package: the fixture loads the rebuilt and recovered .node files directly.
  for (const addon of rustAddons) {
    const record = manifest.addons.find(entry => entry.package === addon.package);
    assert.ok(record, `${addon.package} is missing from ${nativeManifestPath}`);
    assert.equal(await fileHash(join(root, record.output)), record.sha256, `${addon.package} output differs from the manifest`);
    assert.equal(record.abi.api, record.recovered_abi.api, `${addon.package} registers ${record.abi.api}, recovered ${record.recovered_abi.api}`);
    result.checks[addon.package] = { abi: record.abi, recovered_abi: record.recovered_abi };
    rebuilt[addon.package] = join(root, record.output);
    recovered[addon.package] = join(root, 'source/app', addon.targets[0]);
  }
  for (const [name, packages] of Object.entries({ rebuilt, recovered })) {
    result.variants[name] = fixture(electron, packages);
    console.log(`${name}: exit ${result.variants[name].status} ${JSON.stringify(Object.fromEntries(Object.entries(result.variants[name].report.addons ?? {}).map(([key, value]) => [key, value.ok])))}`);
  }
  // Every observable result other than timing must match the recovered control.
  const observed = report => Object.fromEntries(Object.entries(report.addons ?? {}).map(([name, { milliseconds, ...value }]) => [name, value]));
  result.parity = JSON.stringify(observed(result.variants.rebuilt.report)) === JSON.stringify(observed(result.variants.recovered.report));
  assert.deepEqual(observed(result.variants.rebuilt.report), observed(result.variants.recovered.report), 'Rebuilt addons must behave like the recovered ones');
  assert.equal(result.variants.rebuilt.report.versions?.modules, String(manifest.toolchain.node_module_version), 'Fixture must run on the Electron ABI');
  result.success = Object.values(result.variants).every(variant => variant.status === 0);
  if (!result.success) process.exitCode = 1;
} catch (error) { result.error = error.stack; process.exitCode = 1; }
finally {
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2) + '\n');
  console.log(JSON.stringify({ success: result.success, result: join(directory, 'result.json'), error: result.error }, null, 2));
}
