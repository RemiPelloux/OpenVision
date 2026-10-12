import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, readFile, lstat, readlink, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { fileURLToPath } from 'node:url';
import { copyRecoveryFile, readRecovery, loadRuntime } from './source-assembly.mjs';
import { platformLayout } from './platform.mjs';
import { executableHeader } from './test-native-fixture.mjs';
import { nativeIdentity, assertNativeHost } from './native-identity.mjs';
import { prepareRecovery } from './recovery-snapshot.mjs';
import { projectPaths, projectWorkspace } from './project-workspace.mjs';

async function fixture(t) {
  const root = await mkdtemp(join(tmpdir(), 'openvision-platform-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  return root;
}

test('native copies preserve executable permissions on Unix and preserve framework symlinks', async t => {
  const root = await fixture(t);
  const input = join(root, 'original'); const output = join(root, 'runtime/bin/native');
  await writeFile(input, 'native fixture', { mode: 0o755 });
  await copyRecoveryFile({ input, output, owner: join(root, 'runtime'), file: {} });
  assert.equal(await readFile(output, 'utf8'), 'native fixture');
  if (process.platform !== 'win32') {
    assert.equal((await lstat(output)).mode & 0o777, 0o755);
    const link = join(root, 'runtime/bin/current');
    await copyRecoveryFile({ input, output: link, owner: join(root, 'runtime'), file: { type: 'symlink', target: 'native' } });
    assert.equal(await readlink(link), 'native');
    assert.equal(await readFile(link, 'utf8'), 'native fixture');
  }
  await assert.rejects(copyRecoveryFile({ input, output: join(root, 'runtime/escape'), owner: join(root, 'runtime'),
    file: { type: 'symlink', target: '../../outside' } }), /escapes/);
});

test('recovery and launch refuse mixed-platform or mixed-architecture native artifacts', async t => {
  const root = await fixture(t); const recovery = join(root, 'recovery');
  const layout = platformLayout(root);
  const executable = join(recovery, 'artifacts/installation', layout.installationExecutable);
  await mkdir(join(executable, '..'), { recursive: true });
  await mkdir(join(recovery, 'reports'), { recursive: true });
  await writeFile(executable, executableHeader());
  const inventory = { platform: process.platform, arch: process.arch, app_prefix: layout.appPrefix, files: [] };
  await writeFile(join(recovery, 'reports/installation-manifest.json'), JSON.stringify(inventory));
  await writeFile(join(recovery, 'reports/readability.json'), '{"files":[]}');
  assert.equal((await readRecovery(root, recovery)).layout.platform, process.platform);
  inventory.platform = process.platform === 'linux' ? 'win32' : 'linux';
  await writeFile(join(recovery, 'reports/installation-manifest.json'), JSON.stringify(inventory));
  await assert.rejects(readRecovery(root, recovery), /does not match/);
  await mkdir(join(root, 'build'));
  await writeFile(join(root, 'build/source-build.json'), JSON.stringify({ name: 'OpenVision', platform: inventory.platform, arch: process.arch }));
  await assert.rejects(loadRuntime(root), /different platform/);
});

test('copied real native Node executable keeps its host identity and runs on the current OS', async t => {
  const root = await fixture(t);
  const output = join(root, process.platform === 'win32' ? 'OpenVision-fixture.exe' : 'openvision-fixture');
  await copyRecoveryFile({ input: process.execPath, output, owner: root, file: {} });
  const identity = await nativeIdentity(output);
  assert.doesNotThrow(() => assertNativeHost(identity));
  const result = await promisify(execFile)(output, ['--version']);
  assert.equal(result.stdout.trim(), process.version);
});

test('preparation rejects wrong native architecture before making a recovery directory', async t => {
  const root = await fixture(t); const installation = join(root, 'installed');
  const layout = platformLayout(root);
  const executable = join(installation, layout.installationExecutable);
  await mkdir(join(executable, '..'), { recursive: true });
  await writeFile(executable, executableHeader(process.platform, process.arch === 'arm64' ? 'x64' : 'arm64'));
  const recovery = join(root, 'recovery');
  await assert.rejects(prepareRecovery({ root, installation, recovery }), /this machine/);
  await assert.rejects(lstat(recovery), { code: 'ENOENT' });
});

test('fresh checkout creates a writable sibling project and uses the active Node runtime in tasks', async t => {
  const base = await fixture(t); const root = join(base, 'checkout');
  await mkdir(join(root, 'data/local/User'), { recursive: true });
  const settings = join(root, 'data/local/User/settings.json');
  await writeFile(settings, '// Local preferences\n{}\n');
  const result = await projectWorkspace(root);
  assert.equal(result.project, join(base, 'OpenVision Projects/Playground'));
  const workspace = JSON.parse(await readFile(result.workspace, 'utf8'));
  assert.ok(workspace.tasks.tasks.every(task => task.command === process.execPath));
  assert.equal(workspace.launch.configurations[0].runtimeExecutable, process.execPath);
  assert.ok((await readFile(settings, 'utf8')).startsWith('// Local preferences'));
});

test('workspace-selected project paths remain the single source for build and launch', async t => {
  const root = await fixture(t);
  await writeFile(join(root, 'OpenVision.code-workspace'), '// Workspace\n{"folders":[{"name":"Playground","path":"custom/project"}]}');
  assert.equal((await projectPaths(root)).project, join(root, 'custom/project'));
});

test('platform shell wrappers locate the checkout from another working directory', async t => {
  const directory = await fixture(t);
  const root = fileURLToPath(new URL('../', import.meta.url));
  const environment = { ...process.env, OPENVISION_NODE_PATH: process.execPath };
  for (const name of ['start-openvision', 'import-cursor']) {
    const windows = process.platform === 'win32';
    const script = join(root, `${name}.${windows ? 'ps1' : 'sh'}`);
    const args = windows ? ['-NoProfile', '-ExecutionPolicy', 'Bypass', '-File', script, '--help'] : [script, '--help'];
    const result = await promisify(execFile)(windows ? 'powershell.exe' : 'sh', args, { cwd: directory, env: environment });
    assert.match(result.stdout, /Usage:/);
  }
});
