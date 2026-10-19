import assert from 'node:assert/strict';
import { execFileSync, spawn, spawnSync } from 'node:child_process';
import { once } from 'node:events';
import { lstat, mkdir, mkdtemp, open, readFile, readdir, realpath, rm, statfs, symlink, unlink, writeFile } from 'node:fs/promises';
import { release, tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { _electron } from '../tooling/browser.mjs';
import { verificationRuntime } from './verification-runtime.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { linuxSandboxArguments } from './platform.mjs';
import { fileHash } from './import-files.mjs';
import { createImportOverlay } from './verify-import-faults-overlay.mjs';
import { enterWorkspace } from './verification-workspace.mjs';

// Interrupted import/restore and physical I/O failure for settings import, Linux x64.
// 1. SIGKILL of the owned native app and of the CLI between file replacements. The
//    pause is deterministic: a verification-only probe in a disposable overlay copy
//    of desktop/import-transaction.mjs. Restart uses the production app and CLI.
// 2. ENOSPC (size-limited tmpfs) and EROFS (read-only remount) inside a disposable
//    user+mount namespace; the verifier and Electron run as the invoking uid.
// Fixtures are synthetic and controlled. No AI provider is called.
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const stageArgument = process.argv.indexOf('--stage'), stage = stageArgument < 0 ? undefined : process.argv[stageArgument + 1];
assert.equal(process.platform, 'linux', 'Import fault verification uses Linux namespaces and /proc');
const sha = data => execFileSync('sha256sum', { input: data }).toString().split(' ')[0];

// ---- shared fixture ---------------------------------------------------------
const extensionName = 'openvision.import-faults-1.0.0';
async function file(path, content) { await mkdir(dirname(path), { recursive: true }); await writeFile(path, content); }
async function writeSource(source) {
  await file(join(source, 'User/settings.json'), JSON.stringify({ 'editor.fontSize': 19, 'openvision.importFaults': true, 'window.title': 'Wrong title' }));
  await file(join(source, 'User/keybindings.json'), '[{"key":"ctrl+j","command":"new.command"}]');
  await file(join(source, 'User/tasks.json'), '{"version":"2.0.0","tasks":[{"label":"fixture","type":"shell","command":"echo fixture"}]}');
  await file(join(source, 'User/snippets/faults.code-snippets'), '{"new":{"prefix":"new","body":"imported"}}');
  const extension = join(source, 'extensions', extensionName);
  await file(join(extension, 'package.json'), JSON.stringify({ name: 'import-faults', publisher: 'openvision', version: '1.0.0', engines: { vscode: '^1.96.0' } }));
  // Inert payloads large enough that staging, not only the backup, meets a full volume.
  await file(join(extension, 'dist/payload.js'), `// inert fixture\n${'x'.repeat(384 * 1024)}\n`);
  await file(join(extension, 'media/data.bin'), Buffer.alloc(192 * 1024, 7));
  await file(join(source, 'extensions/extensions.json'), JSON.stringify([{ identifier: { id: 'openvision.import-faults' }, version: '1.0.0', relativeLocation: extensionName }]));
}
const changeCount = 8; // settings, keybindings, tasks, snippet, 3 extension files, registry
async function writeDestination(userData, extensions, settings = verificationSettings) {
  await file(join(userData, 'User/settings.json'), '// Original — 日本語\r\n' + JSON.stringify({ ...settings, 'editor.fontSize': 12 }, null, 2) + '\r\n');
  await file(join(userData, 'User/keybindings.json'), '// retain comment\r\n[{"key":"ctrl+j","command":"old.command"}]\r\n');
  await file(join(userData, 'User/snippets/faults.code-snippets'), '{"old":{"prefix":"old","body":"original"}}\r\n');
  await mkdir(extensions, { recursive: true });
}
// Full tree: path -> sha256 | 'directory'. `skip` excludes app-owned subtrees while an app runs.
async function tree(base, skip = () => false) {
  const entries = {};
  async function walk(path) {
    for (const entry of (await readdir(path, { withFileTypes: true })).sort((a, b) => a.name.localeCompare(b.name))) {
      const full = join(path, entry.name), key = full.slice(base.length + 1);
      if (skip(entry.isDirectory() ? `${key}/` : key)) continue;
      if (entry.isDirectory()) { entries[`${key}/`] = 'directory'; await walk(full); }
      else entries[key] = entry.isFile() ? sha(await readFile(full)) : 'other';
    }
  }
  await walk(base).catch(error => { if (error.code !== 'ENOENT') throw error; });
  return entries;
}
const temporaries = entries => Object.keys(entries).filter(path => /\.openvision-[0-9a-f-]{36}\.tmp$/.test(path));
function cli(args, cliPath = join(root, 'desktop/import-cli.mjs'), env = process.env) {
  const run = spawnSync(process.execPath, [cliPath, ...args], { encoding: 'utf8', timeout: 60000, env });
  return { status: run.status, stdout: run.stdout, stderr: run.stderr.trim(), json: run.status === 0 ? JSON.parse(run.stdout) : undefined };
}
const targetArgs = (userData, extensions) => ['--target-user-data', userData, '--target-extensions', extensions];
const importArgs = source => ['--apply', '--user', join(source, 'User'), '--extensions', join(source, 'extensions')];


// ---- outer process: native and CLI interruption, then the namespace stages -----
async function outer() {
  await mkdir(join(root, 'logs'), { recursive: true });
  const directory = await mkdtemp(join(root, 'logs/import-faults-verification-'));
  const result = { directory, checkedAt: new Date().toISOString(), success: false, interruptions: [], cli: [], namespace: {},
    scope: 'Linux x64: SIGKILL of the owned native host process group and of the CLI between import/restore file replacements (deterministic verification-only probe in a disposable overlay copy), restart with the production app/CLI; ENOSPC on size-limited tmpfs and EROFS on read-only remounts inside an unprivileged user+mount namespace, through the production CLI and the native import IPC. Synthetic controlled fixtures; no AI requests. Not power loss, EIO, Windows or macOS.' };
  const save = () => writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
  const { layout, appRoot } = await verificationRuntime(root);
  result.identity = { commit: execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim(),
    dirty: execFileSync('git', ['status', '--porcelain'], { cwd: root, encoding: 'utf8' }).split('\n').filter(Boolean).length,
    platform: process.platform, arch: process.arch, osRelease: release(), node: process.version, uid: process.getuid(),
    transaction: await fileHash(join(root, 'desktop/import-transaction.mjs')), main: await fileHash(join(appRoot, 'out/main.js')) };
  try {
    // Sources must be outside the installation (logs/ is inside it).
    const source = await mkdtemp(join(tmpdir(), 'openvision-import-faults-source-')); await writeSource(source);
    result.source = source;
    // Disposable overlay: hard-linked host and app, with desktop/ replaced by the instrumented copy.
    const overlay = await createImportOverlay(root, join(directory, 'overlay-root'));
    const overlayHost = join(directory, 'host'), overlayApp = join(overlayHost, 'resources/app');
    execFileSync('cp', ['-al', '--', layout.host, overlayHost]);
    assert.ok((await lstat(overlayApp)).isSymbolicLink(), 'Expected the source build application link');
    await unlink(overlayApp);
    execFileSync('cp', ['-al', '--', await realpath(appRoot), overlayApp]);
    await symlink(overlay.desktop, join(overlayHost, 'desktop'), 'dir');
    result.identity.overlayTransaction = await fileHash(join(overlay.desktop, 'import-transaction.mjs'));
    const probeDirectory = join(directory, 'probe'); await mkdir(probeDirectory);
    const probeEnv = { OPENVISION_IMPORT_PROBE: overlay.probe, OPENVISION_IMPORT_PROBE_DIR: probeDirectory };
    const paused = async (kind, index) => {
      for (let wait = 0; wait < 1200; wait++) {
        const text = await readFile(join(probeDirectory, 'probe.ndjson'), 'utf8').catch(() => '');
        if (text.includes(`"event":"paused","stage":"${kind}","index":${index}`)) return;
        await new Promise(resolve => setTimeout(resolve, 25));
      }
      throw new Error(`Probe did not pause at ${kind} ${index}`);
    };
    // Each record is kept in the result before its assertions run, so a failure keeps its observations.
    for (const [kind, index] of [['import', 0], ['import', 3], ['import', changeCount - 1], ['restore', 3]]) {
      const record = { case: `native-${kind}-${index}`, kind, index }; result.interruptions.push(record);
      await nativeInterruption({ record, directory, layout, overlayHost, source, probeDirectory, probeEnv, paused, kind, index });
    }
    for (const [kind, index] of [['import', 1], ['import', 5], ['restore', 2]]) {
      const record = { case: `cli-${kind}-${index}`, kind, index }; result.cli.push(record);
      await cliInterruption({ record, directory, overlay, source, probeDirectory, probeEnv, paused, kind, index });
    }
    await save();
    // Namespace stages: the outer namespace root mounts and remounts; each stage runs as the invoking uid.
    for (const name of ['full-volume', 'readonly-volume', 'native-volume']) await mkdir(join(directory, name));
    const self = fileURLToPath(import.meta.url), uid = process.getuid(), gid = process.getgid();
    const run = name => `OPENVISION_IMPORT_FAULT_DIRECTORY="${directory}" OPENVISION_IMPORT_FAULT_SOURCE="${source}" unshare --map-user=${uid} --map-group=${gid} "${process.execPath}" "${self}" --stage ${name}`;
    const ro = join(directory, 'readonly-volume');
    await writeFile(join(directory, 'namespace.sh'), ['set -e',
      `mount -t tmpfs -o size=4m openvision-import-full "${join(directory, 'full-volume')}"`,
      `mount -t tmpfs -o size=64m openvision-import-readonly "${ro}"`,
      `mount -t tmpfs -o size=384m openvision-import-native "${join(directory, 'native-volume')}"`,
      run('enospc'), run('erofs-prepare'),
      // A read-only bind over the volume gives EROFS; unmounting the bind restores write access.
      `mount --bind "${ro}" "${ro}"`, `mount -o remount,bind,ro "${ro}"`, run('erofs'),
      `umount "${ro}"`,
      `mount --bind "${join(ro, 'extensions')}" "${join(ro, 'extensions')}"`, `mount -o remount,bind,ro "${join(ro, 'extensions')}"`,
      run('erofs-extensions'), `umount "${join(ro, 'extensions')}"`, run('erofs-after'),
      run('native-volume'), ''].join('\n'));
    // Every mount disappears with the namespace; nothing outside `directory` is mounted.
    const child = spawnSync('unshare', ['-rm', 'sh', join(directory, 'namespace.sh')], { stdio: 'inherit', timeout: 900000 });
    result.namespace.exit = child.status;
    for (const name of ['enospc', 'erofs-prepare', 'erofs', 'erofs-extensions', 'erofs-after', 'native-volume'])
      result.namespace[name] = JSON.parse(await readFile(join(directory, `stage-${name}.json`), 'utf8').catch(() => '{"status":"missing"}'));
    assert.equal(child.status, 0, 'namespace stages');
    for (const [name, value] of Object.entries(result.namespace)) if (name !== 'exit') assert.equal(value.status, 'passed', `${name} stage`);
    result.success = true;
  } catch (error) { result.error = error.stack; process.exitCode = 1; }
  // A failed case must not leave its owned app running.
  for (const app of openApps) await app.app.close().catch(() => {});
  await save();
  console.log(JSON.stringify(result, null, 2));
}
const openApps = new Set();

function procStat(pid) {
  try {
    const text = execFileSync('cat', [`/proc/${pid}/stat`], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] });
    const fields = text.slice(text.lastIndexOf(')') + 2).split(' ');
    return { pgid: Number(fields[2]) };
  } catch { return undefined; }
}

async function launchApp(executable, host, userData, extensions, project, env = {}) {
  const environment = { ...process.env, ...env }; delete environment.ELECTRON_RUN_AS_NODE; delete environment.OPENVISION_IMPORT_FAULT_DIRECTORY;
  const app = await _electron.launch({ executablePath: executable, env: environment, timeout: 60000,
    args: ['--user-data-dir', userData, '--extensions-dir', extensions, '--new-window', '--disable-updates', '--disable-telemetry',
      '--disable-crash-reporter', '--skip-welcome', '--skip-release-notes', ...await linuxSandboxArguments(host), project] });
  const page = await app.firstWindow(); page.setDefaultTimeout(20000);
  const errors = []; page.on('pageerror', error => errors.push(error.message));
  await page.locator('.part.titlebar .openvision-local-profile').waitFor({ state: 'attached', timeout: 60000 });
  await enterWorkspace(page);
  const child = app.process();
  assert.equal(procStat(child.pid)?.pgid, child.pid, 'The owned host must lead its own process group');
  const invoke = request => page.evaluate(request => window.vscode.ipcRenderer.invoke('vscode:openvision-cursor-import', request), request);
  const recovery = await app.evaluate(() => globalThis.openvisionImportRecovery);
  const owned = { app, page, errors, invoke, recovery,
    async close() { openApps.delete(owned); await app.close(); return child.exitCode; },
    async kill() {
      // The group was created by this verifier's launch and checked above; never a PID chosen by name.
      assert.equal(child.exitCode, null); assert.equal(procStat(child.pid)?.pgid, child.pid);
      const exited = once(child, 'exit', { signal: AbortSignal.timeout(15000) });
      process.kill(-child.pid, 'SIGKILL'); openApps.delete(owned);
      const [code, signal] = await exited; return { code, signal };
    } };
  openApps.add(owned);
  return owned;
}

// While an app owns the profile it writes its own runtime files (globalStorage, .openvision,
// agents, logs). Compare the import's destination set, where temporaries would also appear.
const userSkip = key => !/^(User\/|User\/(settings|keybindings|tasks)\.json|User\/snippets\/.*|Backups\/.*)$/.test(key);
async function nativeInterruption({ record, directory, layout, overlayHost, source, probeDirectory, probeEnv, paused, kind, index }) {
  const name = record.case, userData = join(directory, name, 'profile'), extensions = join(directory, name, 'extensions');
  const project = join(directory, name, 'project'); await mkdir(project, { recursive: true });
  await writeDestination(userData, extensions);
  const options = { user: join(source, 'User'), extensions: join(source, 'extensions'), categories: ['settings', 'keybindings', 'snippets', 'tasks', 'extensions'], overwrite: true };
  // The original state as seen while an app owns the profile (app-owned stores excluded).
  let original = { user: await tree(userData, userSkip), extensions: await tree(extensions) };
  let backup;
  if (kind === 'restore') {
    const app = await launchApp(layout.executable, layout.host, userData, extensions, project);
    original = { user: await tree(userData, userSkip), extensions: await tree(extensions) };
    const preview = await app.invoke({ action: 'preview', options });
    assert.equal(preview.ok, true, preview.error);
    backup = (await app.invoke({ action: 'apply', token: preview.token })).backup;
    assert.equal(await app.close(), 0);
  }
  const imported = kind === 'restore' ? { user: await tree(userData, userSkip), extensions: await tree(extensions) } : undefined;
  const owned = await launchApp(join(overlayHost, 'openvision'), overlayHost, userData, extensions, project, probeEnv);
  if (kind === 'import') original = { user: await tree(userData, userSkip), extensions: await tree(extensions) };
  await writeFile(join(probeDirectory, `pause-${kind}-${index}`), '');
  let pending;
  if (kind === 'import') {
    const preview = await owned.invoke({ action: 'preview', options });
    assert.equal(preview.ok, true, preview.error); assert.equal(preview.files, changeCount);
    pending = owned.invoke({ action: 'apply', token: preview.token }).catch(error => ({ killed: error.message }));
  } else pending = owned.invoke({ action: 'restore', backup }).catch(error => ({ killed: error.message }));
  await paused(kind, index);
  const atKill = { user: await tree(userData, userSkip), extensions: await tree(extensions) };
  // Import: some or all files replaced, manifest not yet complete. Restore: partially restored.
  record.changedAtKill = JSON.stringify(atKill) !== JSON.stringify(original) && JSON.stringify(atKill) !== JSON.stringify(imported);
  record.exit = await owned.kill(); await pending;
  // Restart with the production app: its main process recovers the transaction before import requests.
  const restarted = await launchApp(layout.executable, layout.host, userData, extensions, project);
  record.recovery = restarted.recovery;
  const after = { user: await tree(userData, userSkip), extensions: await tree(extensions) };
  const strip = state => ({ user: Object.fromEntries(Object.entries(state.user).filter(([key]) => !key.startsWith('Backups/'))), extensions: state.extensions });
  record.originalAfterRestart = JSON.stringify(strip(after)) === JSON.stringify(strip(original));
  record.temporaries = [...temporaries(after.user), ...temporaries(after.extensions)];
  assert.ok(record.changedAtKill, `${name}: the kill landed after a replacement`);
  assert.deepEqual(record.recovery.map(entry => entry.recovered), ['restored'], `${name}: recovery`);
  assert.ok(record.originalAfterRestart, `${name}: destination returns to its exact original state`);
  assert.deepEqual(record.temporaries, []);
  // The backup stays discoverable, and a fresh import restores byte-exactly.
  const listing = cli(['--list-backups', ...targetArgs(userData, extensions)]);
  record.listed = listing.json.backups.map(entry => ({ status: entry.status, files: entry.files }));
  assert.ok(listing.json.backups.length >= 1 && listing.json.backups.every(entry => ['restored', 'complete'].includes(entry.status)));
  const preview = await restarted.invoke({ action: 'preview', options });
  assert.equal(preview.ok, true, preview.error);
  const reimport = await restarted.invoke({ action: 'apply', token: preview.token });
  assert.equal(reimport.ok, true, reimport.error); assert.equal(reimport.files, changeCount);
  assert.equal((await restarted.invoke({ action: 'restore', backup: reimport.backup })).restored, changeCount);
  record.byteExactAfterReimportRestore = JSON.stringify(strip({ user: await tree(userData, userSkip), extensions: await tree(extensions) })) === JSON.stringify(strip(original));
  assert.ok(record.byteExactAfterReimportRestore);
  record.pageErrors = [...owned.errors, ...restarted.errors];
  record.restartedExit = await restarted.close();
  assert.equal(record.restartedExit, 0);
  record.status = 'passed';
}

async function cliInterruption({ record, directory, overlay, source, probeDirectory, probeEnv, paused, kind, index }) {
  const name = record.case, userData = join(directory, name, 'profile'), extensions = join(directory, name, 'extensions');
  await writeDestination(userData, extensions);
  const original = { user: await tree(userData), extensions: await tree(extensions) };
  let backup;
  if (kind === 'restore') { const run = cli([...targetArgs(userData, extensions), ...importArgs(source)]); assert.equal(run.status, 0, run.stderr); backup = run.json.backup; }
  const imported = { user: await tree(userData), extensions: await tree(extensions) };
  await writeFile(join(probeDirectory, `pause-${kind}-${index}`), '');
  const child = spawn(process.execPath, [join(overlay.desktop, 'import-cli.mjs'), ...targetArgs(userData, extensions),
    ...(kind === 'import' ? importArgs(source) : ['--restore', backup])], { env: { ...process.env, ...probeEnv }, stdio: 'ignore' });
  const exited = once(child, 'exit');
  await paused(kind, index);
  const atKill = { user: await tree(userData), extensions: await tree(extensions) };
  record.changedAtKill = JSON.stringify(atKill) !== JSON.stringify(original) && JSON.stringify(atKill) !== JSON.stringify(imported);
  child.kill('SIGKILL'); const [code, signal] = await exited; record.exit = { code, signal };
  const listing = cli(['--list-backups', ...targetArgs(userData, extensions)]);
  record.listedInterrupted = listing.json.backups.filter(entry => entry.interrupted).length;
  // Restart: the production CLI recovers before anything else.
  const recovered = cli(['--recover', ...targetArgs(userData, extensions)]);
  assert.equal(recovered.status, 0, recovered.stderr);
  record.recovery = recovered.json.recovered;
  const after = { user: await tree(userData), extensions: await tree(extensions) };
  const strip = state => ({ user: Object.fromEntries(Object.entries(state.user).filter(([key]) => !key.startsWith('Backups/'))), extensions: state.extensions });
  record.originalAfterRestart = JSON.stringify(strip(after)) === JSON.stringify(strip(original));
  assert.ok(record.changedAtKill, `${name}: the kill landed between replacements`);
  assert.equal(record.listedInterrupted, 1, `${name}: interrupted backup discoverable`);
  assert.deepEqual(record.recovery.map(entry => entry.recovered), ['restored']);
  assert.ok(record.originalAfterRestart, `${name}: exact original state`);
  const reimport = cli([...targetArgs(userData, extensions), ...importArgs(source)]);
  assert.equal(reimport.status, 0, reimport.stderr);
  assert.equal(cli([...targetArgs(userData, extensions), '--restore', reimport.json.backup]).json.restored, changeCount);
  record.byteExactAfterReimportRestore = JSON.stringify(strip({ user: await tree(userData), extensions: await tree(extensions) })) === JSON.stringify(strip(original));
  assert.ok(record.byteExactAfterReimportRestore);
  record.status = 'passed';
}

// ---- namespace stages (run as the invoking uid inside the mount namespace) ------
async function namespaceStage(name) {
  const directory = process.env.OPENVISION_IMPORT_FAULT_DIRECTORY;
  const output = join(directory, `stage-${name}.json`), source = process.env.OPENVISION_IMPORT_FAULT_SOURCE;
  const result = { stage: name, status: 'failed', steps: [] };
  try {
    if (name === 'enospc') await enospc(join(directory, 'full-volume'), source, result);
    else if (name.startsWith('erofs')) await erofs(name, join(directory, 'readonly-volume'), source, result);
    else if (name === 'native-volume') await nativeVolume(directory, join(directory, 'native-volume'), source, result);
    result.status = 'passed';
  } catch (error) { result.error = error.stack; process.exitCode = 1; }
  await writeFile(output, JSON.stringify(result, null, 2));
}

const freeBytes = async volume => { const stats = await statfs(volume); return Number(stats.bavail) * Number(stats.bsize); };
// Leave about `leave` bytes free: reserve them, consume every other block, then release the reserve.
async function fill(volume, leave) {
  const reserve = join(volume, 'reserve.bin'), filler = join(volume, `filler-${Date.now()}.bin`);
  if (leave) await writeFile(reserve, Buffer.alloc(leave));
  const handle = await open(filler, 'a');
  try {
    for (const size of [1 << 20, 1 << 16, 1 << 12, 1 << 9, 1])
      for (;;) {
        const error = await handle.write(Buffer.alloc(size)).then(() => undefined, error => error);
        if (!error) continue;
        assert.equal(error.code, 'ENOSPC', 'filler must end at ENOSPC'); break;
      }
  } finally { await handle.close(); }
  await rm(reserve, { force: true });
  return { filler, free: await freeBytes(volume) };
}
const fillers = async volume => { for (const name of await readdir(volume)) if (/^(filler-\d+|reserve)\.bin$/.test(name)) await rm(join(volume, name)); };
const strip = state => Object.fromEntries(Object.entries(state).filter(([key]) => !key.startsWith('Backups/')));
const backupsOf = async userData => (await readdir(join(userData, 'Backups/openvision-import')).catch(() => []));

async function enospc(volume, source, result) {
  // Each level leaves a different amount free, so ENOSPC strikes in the backup, the
  // manifest, staging, or not at all. Each level starts from a fresh destination.
  const levels = [0, 4096, 16384, 65536, 131072, 262144, 393216, 524288, 655360, 786432, 1048576, 2097152];
  let succeeded = 0, failed = 0;
  for (const leave of levels) {
    await fillers(volume);
    const base = join(volume, `level-${leave}`), userData = join(base, 'profile'), extensions = join(base, 'extensions');
    await rm(base, { recursive: true, force: true });
    await writeDestination(userData, extensions);
    const original = { user: await tree(userData), extensions: await tree(extensions) };
    const filled = await fill(volume, leave);
    const run = cli([...targetArgs(userData, extensions), ...importArgs(source)]);
    const after = { user: await tree(userData), extensions: await tree(extensions) };
    const step = { leave, free: filled.free, importExit: run.status, error: run.stderr.split('\n')[0] || undefined, temporaries: [...temporaries(after.user), ...temporaries(after.extensions)] };
    result.steps.push(step);
    assert.deepEqual(step.temporaries, [], `level ${leave}: no temporaries`);
    if (run.status !== 0) {
      failed++;
      assert.match(run.stderr, /Import failed before changing any file: .*(ENOSPC|no space)/i, `level ${leave}: clear error`);
      assert.deepEqual(after, original, `level ${leave}: no partial destination`);
      step.destination = 'original';
      continue;
    }
    succeeded++;
    await fillers(volume);
    const full = cli([...targetArgs(userData, extensions), '--user', join(source, 'User'), '--extensions', join(source, 'extensions')]);
    assert.equal(full.json.files, 0, `level ${leave}: fully imported`);
    step.destination = 'fully imported';
    // Restore onto a full volume: no partial restore, clear error, backup retained.
    const imported = { user: await tree(userData), extensions: await tree(extensions) };
    await fill(volume, 0);
    const restore = cli([...targetArgs(userData, extensions), '--restore', run.json.backup]);
    const afterRestore = { user: await tree(userData), extensions: await tree(extensions) };
    step.fullRestoreExit = restore.status; step.fullRestoreError = restore.stderr.split('\n')[0] || undefined;
    if (restore.status !== 0) {
      assert.match(restore.stderr, /Restore failed before changing any file: .*(ENOSPC|no space).*backup is retained/i);
      assert.deepEqual(afterRestore, imported, `level ${leave}: no partial restore`);
      assert.ok((await backupsOf(userData)).includes(run.json.backup.split('/').pop()), 'backup retained');
    }
    await fillers(volume);
    const restored = cli([...targetArgs(userData, extensions), '--restore', run.json.backup]);
    assert.equal(restored.status, 0, restored.stderr);
    assert.deepEqual(strip((await tree(userData))), strip(original.user), `level ${leave}: exact restore after freeing space`);
    assert.deepEqual(await tree(extensions), original.extensions);
  }
  result.summary = { levels: levels.length, importFailedClean: failed, importSucceeded: succeeded };
  assert.ok(failed >= 3 && succeeded >= 1, 'the sweep must cover failing and succeeding levels');
  assert.ok(result.steps.some(step => step.fullRestoreExit === 1), 'a restore met ENOSPC');
}

async function erofs(name, volume, source, result) {
  const userData = join(volume, 'profile'), extensions = join(volume, 'extensions'), state = join(dirname(volume), 'erofs-state.json');
  const args = targetArgs(userData, extensions);
  if (name === 'erofs-prepare') {
    await writeDestination(userData, extensions);
    const original = { user: await tree(userData), extensions: await tree(extensions) };
    const run = cli([...args, ...importArgs(source), '--categories', 'settings,keybindings,snippets']);
    assert.equal(run.status, 0, run.stderr);
    await writeFile(state, JSON.stringify({ original, backup: run.json.backup, imported: { user: await tree(userData), extensions: await tree(extensions) } }));
    result.steps.push({ prepared: run.json.files });
    return;
  }
  const saved = JSON.parse(await readFile(state, 'utf8'));
  const current = async () => ({ user: await tree(userData), extensions: await tree(extensions) });
  if (name === 'erofs') {
    const probe = await writeFile(join(userData, 'probe'), '').then(() => 'writable', error => error.code);
    assert.equal(probe, 'EROFS');
    const run = cli([...args, ...importArgs(source)]);
    result.steps.push({ action: 'import', exit: run.status, error: run.stderr.split('\n')[0] });
    assert.equal(run.status, 1); assert.match(run.stderr, /Import failed before changing any file: .*(EROFS|read-only)/i);
    assert.deepEqual(await current(), saved.imported, 'read-only import changed nothing');
    const restore = cli([...args, '--restore', saved.backup]);
    result.steps.push({ action: 'restore', exit: restore.status, error: restore.stderr.split('\n')[0] });
    assert.equal(restore.status, 1); assert.match(restore.stderr, /Restore failed before changing any file: .*(EROFS|read-only).*backup is retained/i);
    assert.deepEqual(await current(), saved.imported, 'read-only restore changed nothing');
    const listing = cli([...args, '--list-backups']);
    assert.equal(listing.status, 0); assert.equal(listing.json.backups[0].status, 'complete');
    result.steps.push({ action: 'list', backups: listing.json.backups.map(entry => entry.status) });
  } else if (name === 'erofs-extensions') {
    // Profile writable, extensions read-only: staging in User succeeds, then extensions fail.
    const run = cli([...args, ...importArgs(source)]);
    const after = await current();
    result.steps.push({ action: 'import', exit: run.status, error: run.stderr.split('\n')[0], temporaries: [...temporaries(after.user), ...temporaries(after.extensions)] });
    assert.equal(run.status, 1); assert.match(run.stderr, /Import failed before changing any file: .*(EROFS|read-only)/i);
    assert.deepEqual(after, saved.imported, 'no partial destination and no temporaries');
  } else if (name === 'erofs-after') {
    const restore = cli([...args, '--restore', saved.backup]);
    assert.equal(restore.status, 0, restore.stderr);
    assert.deepEqual(strip((await current()).user), strip(saved.original.user)); assert.deepEqual((await current()).extensions, saved.original.extensions);
    assert.equal(cli([...args, '--restore', saved.backup]).json.restored, 0);
    result.steps.push({ action: 'restore after remount', restored: restore.json.restored, exact: true });
  }
}

// The native import IPC with the profile on a tmpfs that becomes full after preview.
async function nativeVolume(directory, volume, source, result) {
  const { layout } = await verificationRuntime(root);
  const userData = join(volume, 'profile'), extensions = join(volume, 'extensions'), project = join(directory, 'native-project');
  await mkdir(project, { recursive: true });
  await writeDestination(userData, extensions);
  const options = { user: join(source, 'User'), extensions: join(source, 'extensions'), categories: ['settings', 'keybindings', 'snippets', 'tasks', 'extensions'], overwrite: true };
  const app = await launchApp(layout.executable, layout.host, userData, extensions, project);
  const declared = async () => ({ user: await tree(userData, userSkip), extensions: await tree(extensions) });
  try {
    const original = await declared();
    let preview = await app.invoke({ action: 'preview', options });
    assert.equal(preview.ok, true, preview.error);
    result.steps.push({ preview: preview.files });
    await fill(volume, 0);
    const failedImport = await app.invoke({ action: 'apply', token: preview.token });
    result.steps.push({ action: 'native import on full volume', ok: failedImport.ok, error: failedImport.error });
    assert.equal(failedImport.ok, false); assert.match(failedImport.error, /Import failed before changing any file: .*(ENOSPC|no space)/i);
    assert.deepEqual(strip((await declared()).user), strip(original.user)); assert.deepEqual((await declared()).extensions, original.extensions);
    await fillers(volume);
    preview = await app.invoke({ action: 'preview', options });
    assert.equal(preview.ok, true, preview.error);
    const imported = await app.invoke({ action: 'apply', token: preview.token });
    assert.equal(imported.ok, true, imported.error);
    const importedState = await declared();
    await fill(volume, 0);
    const failedRestore = await app.invoke({ action: 'restore', backup: imported.backup });
    result.steps.push({ action: 'native restore on full volume', ok: failedRestore.ok, error: failedRestore.error });
    assert.equal(failedRestore.ok, false); assert.match(failedRestore.error, /Restore failed before changing any file: .*backup is retained/i);
    assert.deepEqual(await declared(), importedState, 'no partial restore');
    await fillers(volume);
    const restored = await app.invoke({ action: 'restore', backup: imported.backup });
    assert.equal(restored.ok, true, restored.error);
    assert.deepEqual(strip((await declared()).user), strip(original.user)); assert.deepEqual((await declared()).extensions, original.extensions);
    result.steps.push({ action: 'native restore after freeing space', restored: restored.restored, exact: true });
    result.pageErrors = app.errors;
  } finally { await fillers(volume); result.exitCode = await app.close(); }
  assert.equal(result.exitCode, 0);
}

if (!stage) await outer(); else await namespaceStage(stage);
