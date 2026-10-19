// Linux install, upgrade, rollback and uninstall for signed portable releases
// (OV-904). Layout under one install root:
//   current -> versions/<version>   atomic symlink switch; the launched version
//   versions/<version>/             verified package; its profile stays in
//                                   electron-host/data like every portable copy
//   backups/<stamp>-<reason>/       copies taken before every upgrade/rollback
//   retained-data/                  profiles kept by a non-purge uninstall
//   staging/                        in-progress work, discarded on the next run
//   openvision-install.json         state (current, previous, history)
// Every step before the switch works on copies, so an interruption at any point
// leaves the installed version and its profile untouched. No updater, no
// network: the archive, manifest and signature are local files.
import { spawn } from 'node:child_process';
import { createHash, randomBytes } from 'node:crypto';
import { createReadStream } from 'node:fs';
import { copyFile, lstat, mkdir, open, readdir, readFile, readlink, rename, rm, symlink, unlink, writeFile } from 'node:fs/promises';
import { homedir, hostname } from 'node:os';
import { basename, dirname, isAbsolute, join, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { verifyRelease, verifyTree } from './linux-release.mjs';
import { canOpen, migrateProfile, readProfileFormat } from './profile-format.mjs';

export const stateName = 'openvision-install.json';
export const retainedName = 'retained.json';
export const installedMarker = '.openvision-installed.json';
const lockName = 'install.lock';
// Chromium's per-run lock entries are never copied between versions.
const runtimeEntries = new Set(['SingletonLock', 'SingletonSocket', 'SingletonCookie']);

const exists = async path => { try { return await lstat(path); } catch (error) { if (error.code === 'ENOENT') return undefined; throw error; } };
// Without XDG_RUNTIME_DIR the editor places its IPC sockets in the profile
// (<user-data-dir>/<version>-<type>.sock, type up to six characters); Linux
// refuses socket paths of 107 bytes or more and the app then fails to start.
export const socketPathLimit = 107;
export function socketPath(root, version) { return join(root, 'versions', version, 'electron-host/data/local', '3.21-shared.sock'); }
export function socketPathCheck(root, version, env = process.env) {
  const length = Buffer.byteLength(socketPath(root, version));
  if (length < socketPathLimit) return undefined;
  const message = `Install path is too long for the editor's IPC socket (${length} >= ${socketPathLimit} bytes) when XDG_RUNTIME_DIR is not set; choose a shorter --root.`;
  if (!env.XDG_RUNTIME_DIR) throw Error(message);
  return message;
}
const stamp = () => new Date().toISOString().replace(/[:.]/g, '-');
const dataOf = versionDirectory => join(versionDirectory, 'electron-host/data');

// Test-only interruption points. A held installer prints the phase and waits
// to be killed; nothing is held unless the variable names the phase.
export function environmentHooks(env = process.env, output = process.stdout) {
  const phase = env.OPENVISION_INSTALL_TEST_HOLD;
  return { async hold(name) {
    if (name !== phase) return;
    output.write(`[hold] ${name}\n`);
    await new Promise(() => setInterval(() => {}, 1 << 30));
  } };
}
const noHooks = { async hold() {} };

export function defaultRoot(env = process.env) {
  return join(env.XDG_DATA_HOME || join(homedir(), '.local/share'), 'OpenVision');
}
const applicationsOf = xdg => join(xdg, 'applications/openvision.desktop');
const iconOf = xdg => join(xdg, 'icons/hicolor/256x256/apps/openvision.png');

async function writeAtomic(path, text) {
  const temporary = `${path}.tmp-${randomBytes(4).toString('hex')}`;
  const handle = await open(temporary, 'wx');
  try { await handle.writeFile(text); await handle.sync(); } finally { await handle.close(); }
  await rename(temporary, path);
  await syncDirectory(dirname(path));
}
async function syncDirectory(path) {
  const handle = await open(path, 'r').catch(() => undefined);
  if (handle) try { await handle.sync().catch(() => {}); } finally { await handle.close(); }
}

// Copy a profile tree: files, directories and links verbatim; sockets, FIFOs
// and Chromium's run locks are skipped. onFile lets tests interrupt mid-copy.
export async function copyTree(source, destination, { onFile } = {}) {
  let files = 0;
  async function walk(from, to) {
    const info = await lstat(from);
    if (info.isSymbolicLink()) return symlink(await readlink(from), to);
    if (info.isDirectory()) {
      await mkdir(to, { mode: info.mode & 0o7777 });
      for (const name of (await readdir(from)).sort()) if (!runtimeEntries.has(name)) await walk(join(from, name), join(to, name));
      return;
    }
    if (!info.isFile()) return;
    await copyFile(from, to);
    files++;
    await onFile?.(files);
  }
  await walk(source, destination);
  return files;
}

// A live OpenVision holding the profile (Chromium's SingletonLock names the
// host and process) blocks every change: copying a profile in use is unsafe.
export async function runningProfile(data) {
  const lock = join(data, 'local/SingletonLock');
  const target = await readlink(lock).catch(() => undefined);
  if (!target) return undefined;
  const match = /^(.*)-(\d+)$/.exec(target);
  if (!match || match[1] !== hostname()) return undefined;
  const command = await readFile(`/proc/${match[2]}/comm`, 'utf8').catch(() => '');
  return command ? { pid: Number(match[2]), command: command.trim() } : undefined;
}

async function processStart(pid) {
  const stat = await readFile(`/proc/${pid}/stat`, 'utf8').catch(() => undefined);
  return stat?.slice(stat.lastIndexOf(')') + 2).split(' ')[19];
}

// One installer at a time. A lock left by a killed installer (its process is
// gone, or the PID now belongs to a process started later) is reclaimed.
async function acquireLock(root) {
  const path = join(root, lockName);
  const content = JSON.stringify({ pid: process.pid, start: await processStart(process.pid) });
  for (let attempt = 0; attempt < 2; attempt++) {
    try { const handle = await open(path, 'wx'); await handle.writeFile(content); await handle.close(); return async () => unlink(path).catch(() => {}); }
    catch (error) {
      if (error.code !== 'EEXIST') throw error;
      const owner = JSON.parse(await readFile(path, 'utf8').catch(() => '{}') || '{}');
      if (owner.pid && owner.start && await processStart(owner.pid) === owner.start) throw Error(`Another OpenVision installer (PID ${owner.pid}) is using ${root}.`);
      await unlink(path).catch(error => { if (error.code !== 'ENOENT') throw error; });
    }
  }
  throw Error(`Could not lock ${root}.`);
}

async function readJson(path) {
  try { return JSON.parse(await readFile(path, 'utf8')); } catch (error) { if (error.code === 'ENOENT') return undefined; throw error; }
}

async function checkRoot(root) {
  if (!isAbsolute(root)) throw Error('The install root must be an absolute path.');
  const info = await exists(root);
  if (!info) return;
  if (!info.isDirectory() || info.isSymbolicLink()) throw Error(`${root} is not a directory.`);
  const entries = await readdir(root);
  if (entries.length && !entries.includes(stateName) && !entries.includes(retainedName))
    throw Error(`${root} exists and is not an OpenVision install root; refusing to change it.`);
}

async function currentVersion(root) {
  const target = await readlink(join(root, 'current')).catch(error => { if (error.code === 'ENOENT') return undefined; throw error; });
  if (target === undefined) return undefined;
  const match = /^versions\/([^/]+)$/.exec(target);
  if (!match) throw Error(`Unexpected current link target ${target}.`);
  return match[1];
}

// Discard interrupted work and reconcile state with the current link, which is
// the only switch point. Returns the reconciled state.
export async function recover(root) {
  await rm(join(root, 'staging'), { recursive: true, force: true });
  for (const name of await readdir(root).catch(() => []))
    if (name.startsWith('current.next-') || name.startsWith(`${stateName}.tmp-`)) await rm(join(root, name), { force: true });
  const state = await readJson(join(root, stateName)) ?? { schema: 1, current: undefined, previous: undefined, history: [] };
  const linked = await currentVersion(root);
  if (linked !== state.current) {
    // Killed after the switch and before the state write: the switch happened.
    state.history.push({ at: new Date().toISOString(), action: 'recovered-switch', from: state.current, to: linked });
    if (linked && state.current && linked !== state.current) state.previous = state.current;
    state.current = linked;
    await writeAtomic(join(root, stateName), JSON.stringify(state, null, 2) + '\n');
  }
  if (state.previous && !await exists(join(root, 'versions', state.previous, installedMarker))) state.previous = undefined;
  // A version moved into place by an installer killed before its switch is a
  // copy nobody launched; the next run discards it (its source is unchanged).
  for (const name of await readdir(join(root, 'versions')).catch(() => []))
    if (name !== state.current && name !== state.previous) await rm(join(root, 'versions', name), { recursive: true, force: true });
  return state;
}

async function packageInfo(directory) {
  const info = await readJson(join(directory, 'openvision-package.json'));
  if (info?.name !== 'OpenVision') throw Error(`${directory} is not an OpenVision package.`);
  return { ...info, profileFormat: Number.isSafeInteger(info.profileFormat) ? info.profileFormat : 0 };
}

async function backup(root, reason, sources, hooks) {
  const name = `${stamp()}-${reason}`, partial = join(root, 'staging', `backup-${name}`);
  await mkdir(partial, { recursive: true });
  let copied = 0;
  for (const [label, source] of Object.entries(sources)) {
    if (!source || !await exists(source)) continue;
    copied += await copyTree(source, join(partial, label), { onFile: count => count === 1 && hooks.hold('backup') });
  }
  if (!copied) { await rm(partial, { recursive: true, force: true }); return undefined; }
  await writeFile(join(partial, 'backup.json'), JSON.stringify({ reason, at: new Date().toISOString(), contents: Object.keys(sources) }, null, 2));
  await mkdir(join(root, 'backups'), { recursive: true });
  await rename(partial, join(root, 'backups', name));
  return join(root, 'backups', name);
}

async function extract(archive, staging, manifest, hooks) {
  const child = spawn('tar', ['-xzf', '-', '-C', staging, '--no-same-owner', '--no-same-permissions'], { stdio: ['pipe', 'ignore', 'pipe'] });
  let stderr = '';
  child.stderr.on('data', chunk => { stderr += chunk; });
  const exit = new Promise((resolve, reject) => { child.on('error', reject); child.on('close', resolve); });
  const hash = createHash('sha256');
  let written = 0, held = false;
  for await (const chunk of createReadStream(archive)) {
    hash.update(chunk);
    if (!child.stdin.write(chunk)) await new Promise(resolve => child.stdin.once('drain', resolve));
    written += chunk.length;
    if (!held && written * 2 >= manifest.archive.bytes) { held = true; await hooks.hold('extract'); }
  }
  child.stdin.end();
  const code = await exit;
  if (code !== 0) throw Error(`Release extraction failed: ${stderr.trim()}`);
  if (hash.digest('hex') !== manifest.archive.sha256) throw Error('Release archive changed after verification.');
  const extracted = join(staging, manifest.prefix);
  const entries = await readdir(staging);
  if (entries.length !== 1 || entries[0] !== manifest.prefix) throw Error('Release archive has unexpected top-level entries.');
  await verifyTree(extracted, manifest);
  return extracted;
}

async function newestRetained(root) {
  const record = await readJson(join(root, retainedName));
  const item = record?.items?.find(entry => entry.current) ?? record?.items?.at(-1);
  return item && await exists(join(root, item.path)) ? join(root, item.path) : undefined;
}

async function switchTo(root, version, hooks) {
  const temporary = join(root, `current.next-${randomBytes(4).toString('hex')}`);
  await symlink(`versions/${version}`, temporary);
  await hooks.hold('switch');
  await rename(temporary, join(root, 'current'));
  await syncDirectory(root);
}

async function writeDesktopEntry(root, xdgDataHome) {
  if (!xdgDataHome) return undefined;
  const entry = applicationsOf(xdgDataHome), icon = iconOf(xdgDataHome);
  await mkdir(dirname(entry), { recursive: true }); await mkdir(dirname(icon), { recursive: true });
  await copyFile(join(root, 'current/openvision.png'), `${icon}.tmp`); await rename(`${icon}.tmp`, icon);
  const launcher = join(root, 'current/OpenVision');
  await writeAtomic(entry, `[Desktop Entry]\nName=OpenVision\nComment=AI coding workspace with your own models\nExec="${launcher}" %F\nIcon=openvision\nType=Application\nStartupNotify=true\nStartupWMClass=openvision\nCategories=Development;IDE;TextEditor;\nMimeType=inode/directory;\nX-OpenVision-Install-Root=${root}\n`);
  return entry;
}

async function removeDesktopEntry(root, xdgDataHome) {
  if (!xdgDataHome) return [];
  const entry = applicationsOf(xdgDataHome), text = await readFile(entry, 'utf8').catch(() => '');
  // Only the entry this root wrote; a portable copy's own entry is left alone.
  if (!text.split('\n').includes(`X-OpenVision-Install-Root=${root}`)) return [];
  await rm(entry, { force: true }); await rm(iconOf(xdgDataHome), { force: true });
  return [entry, iconOf(xdgDataHome)];
}

function assertNotRunning(running, what) {
  if (running) throw Error(`OpenVision (PID ${running.pid}) is using the ${what} profile. Quit it first.`);
}

async function withRoot(root, task) {
  await checkRoot(root);
  root = resolve(root);
  await mkdir(root, { recursive: true });
  const release = await acquireLock(root);
  try { return await task(root, await recover(root)); } finally { await release(); }
}

// Fresh install or upgrade. The new version receives a migrated copy of the
// current profile (or of the newest retained profile after an uninstall).
export async function install({ root = defaultRoot(), archive, manifest, signature, allowedSigners, identity,
  xdgDataHome, hooks = noHooks, log = () => {}, env = process.env }) {
  return withRoot(root, async (root, state) => {
    log('[phase] verify');
    let held = false;
    const release = await verifyRelease({ archive, manifest, signature, allowedSigners, identity,
      onArchiveChunk: async () => { if (!held) { held = true; await hooks.hold('verify'); } } });
    const { version } = release;
    if (version === state.current) throw Error(`OpenVision ${version} is already the current version.`);
    const warnings = [socketPathCheck(root, version, env)].filter(Boolean);
    const from = state.current, fromDirectory = from && join(root, 'versions', from);
    if (fromDirectory) assertNotRunning(await runningProfile(dataOf(fromDirectory)), `OpenVision ${from}`);

    log('[phase] extract');
    const staging = join(root, 'staging', `install-${randomBytes(6).toString('hex')}`);
    await mkdir(staging, { recursive: true });
    const extracted = await extract(archive, staging, release, hooks);
    const target = await packageInfo(extracted);
    if (target.version !== version) throw Error('Package version differs from the signed manifest.');

    const source = fromDirectory ? dataOf(fromDirectory) : await newestRetained(root);
    let profile;
    if (source && await exists(source)) profile = await readProfileFormat(source);
    if (profile && !canOpen(target.profileFormat, profile))
      throw Error(`The current profile (format ${profile.format}) cannot be opened by OpenVision ${version} (format ${target.profileFormat}).`);

    log('[phase] backup');
    const saved = fromDirectory ? await backup(root, `pre-upgrade-${from}-to-${version}`, { data: dataOf(fromDirectory) }, hooks) : undefined;

    log('[phase] data-copy');
    const data = dataOf(extracted);
    if (source && await exists(source)) await copyTree(source, data, { onFile: count => count === 1 && hooks.hold('data-copy') });
    else await mkdir(data, { recursive: true });

    log('[phase] migrate');
    await hooks.hold('migrate');
    const migration = await migrateProfile(data, { target: target.profileFormat, writtenBy: version });
    await writeFile(join(extracted, installedMarker), JSON.stringify({ version, commit: release.commit,
      archiveSha256: release.archive.sha256, installedAt: new Date().toISOString() }, null, 2));
    await mkdir(join(root, 'versions'), { recursive: true });
    const destination = join(root, 'versions', version);
    if (await exists(destination)) await rename(destination, join(staging, 'replaced'));
    await rename(extracted, destination);

    log('[phase] switch');
    await switchTo(root, version, hooks);
    const removed = [];
    state.history.push({ at: new Date().toISOString(), action: from ? 'upgrade' : 'install', from, to: version,
      backup: saved && basename(saved), migration, adoptedRetainedData: !fromDirectory && Boolean(source) });
    state.previous = from; state.current = version;
    await writeAtomic(join(root, stateName), JSON.stringify(state, null, 2) + '\n');
    // Keep the current and the rollback version; older ones were backed up when replaced.
    for (const name of await readdir(join(root, 'versions')))
      if (name !== state.current && name !== state.previous) { await rm(join(root, 'versions', name), { recursive: true, force: true }); removed.push(name); }
    await rm(join(root, 'staging'), { recursive: true, force: true });
    const desktopEntry = await writeDesktopEntry(root, xdgDataHome);
    return { action: from ? 'upgrade' : 'install', root, from, to: version, backup: saved, migration, removed, desktopEntry, warnings };
  });
}

// Return to the previous version, carrying the current profile (including work
// written by the newer version) unless the older package cannot open it.
export async function rollback({ root = defaultRoot(), keepPreviousData = false, xdgDataHome, hooks = noHooks, log = () => {} }) {
  return withRoot(root, async (root, state) => {
    if (!state.current || !state.previous) throw Error('There is no previous version to roll back to.');
    const from = state.current, to = state.previous;
    const fromDirectory = join(root, 'versions', from), toDirectory = join(root, 'versions', to);
    assertNotRunning(await runningProfile(dataOf(fromDirectory)), `OpenVision ${from}`);
    assertNotRunning(await runningProfile(dataOf(toDirectory)), `OpenVision ${to}`);
    const target = await packageInfo(toDirectory);
    const profile = await readProfileFormat(dataOf(fromDirectory));
    if (!keepPreviousData && !canOpen(target.profileFormat, profile))
      throw Error(`OpenVision ${to} cannot open the current profile (format ${profile.format}); use --keep-previous-data to return to its own older profile.`);

    log('[phase] backup');
    const saved = await backup(root, `pre-rollback-${from}-to-${to}`, { data: dataOf(fromDirectory), 'previous-data': dataOf(toDirectory) }, hooks);
    if (!keepPreviousData) {
      log('[phase] data-copy');
      const staging = join(root, 'staging', `rollback-${randomBytes(6).toString('hex')}`);
      await mkdir(staging, { recursive: true });
      await copyTree(dataOf(fromDirectory), join(staging, 'data'), { onFile: count => count === 1 && hooks.hold('data-copy') });
      if (await exists(dataOf(toDirectory))) await rename(dataOf(toDirectory), join(staging, 'replaced-data'));
      await rename(join(staging, 'data'), dataOf(toDirectory));
    }
    log('[phase] switch');
    await switchTo(root, to, hooks);
    state.history.push({ at: new Date().toISOString(), action: 'rollback', from, to, backup: saved && basename(saved), keepPreviousData });
    state.current = to; state.previous = from;
    await writeAtomic(join(root, stateName), JSON.stringify(state, null, 2) + '\n');
    await rm(join(root, 'staging'), { recursive: true, force: true });
    const desktopEntry = await writeDesktopEntry(root, xdgDataHome);
    return { action: 'rollback', root, from, to, backup: saved, desktopEntry };
  });
}

// Remove program files and the launcher entry. Profiles and backups stay under
// the root unless purge is requested.
export async function uninstall({ root = defaultRoot(), purge = false, xdgDataHome, log = () => {} }) {
  await checkRoot(root);
  root = resolve(root);
  if (!await exists(root)) return { action: 'uninstall', root, removed: [], retained: [], purged: false };
  const removedEntries = await withRoot(root, async (root, state) => {
    for (const version of await readdir(join(root, 'versions')).catch(() => []))
      assertNotRunning(await runningProfile(dataOf(join(root, 'versions', version))), `OpenVision ${version}`);
    const removed = await removeDesktopEntry(root, xdgDataHome);
    if (purge) return { removed, retained: [], state };
    const record = await readJson(join(root, retainedName)) ?? { items: [] };
    const retained = [], when = stamp();
    for (const version of await readdir(join(root, 'versions')).catch(() => [])) {
      const data = dataOf(join(root, 'versions', version));
      if (!await exists(data)) continue;
      const path = `retained-data/${version}-${when}`;
      await mkdir(join(root, 'retained-data'), { recursive: true });
      await rename(data, join(root, path));
      retained.push({ version, path, current: version === state.current, at: new Date().toISOString() });
    }
    for (const item of record.items) item.current = false;
    if (retained.length && !retained.some(item => item.current)) retained.at(-1).current = true;
    record.items.push(...retained);
    await writeAtomic(join(root, retainedName), JSON.stringify(record, null, 2) + '\n');
    await rm(join(root, 'current'), { force: true });
    await rm(join(root, 'versions'), { recursive: true, force: true });
    await rm(join(root, stateName), { force: true });
    log('[phase] uninstalled');
    return { removed, retained, state };
  });
  if (purge) {
    // checkRoot proved this is an install root; nothing outside it is touched.
    if (root === sep || root === resolve(homedir())) throw Error('Refusing to purge this directory.');
    await rm(root, { recursive: true, force: true });
  }
  return { action: 'uninstall', root, removed: removedEntries.removed, retained: removedEntries.retained, purged: purge };
}

export async function status({ root = defaultRoot() }) {
  root = resolve(root);
  const state = await readJson(join(root, stateName));
  return { root, current: await currentVersion(root).catch(() => undefined), state, retained: await readJson(join(root, retainedName)) };
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const [command, ...args] = process.argv.slice(2);
  const option = name => { const index = args.indexOf(name); return index < 0 ? undefined : args[index + 1]; };
  const flag = name => args.includes(name);
  const env = process.env;
  const common = { root: resolve(option('--root') ?? env.OPENVISION_INSTALL_ROOT ?? defaultRoot(env)), log: line => console.error(line),
    xdgDataHome: flag('--no-desktop-entry') ? undefined : env.XDG_DATA_HOME || join(homedir(), '.local/share'),
    hooks: environmentHooks(env) };
  const path = value => value && resolve(value);
  try {
    let result;
    if (command === 'install' || command === 'upgrade') {
      const archive = path(option('--archive'));
      if (!archive) throw Error('--archive is required.');
      result = await install({ ...common, archive, manifest: path(option('--manifest')), signature: path(option('--signature')),
        allowedSigners: path(option('--allowed-signers') ?? env.OPENVISION_RELEASE_ALLOWED_SIGNERS), identity: option('--identity') });
      if (command === 'upgrade' && result.action !== 'upgrade') console.error('Note: nothing was installed before; this was a fresh install.');
    } else if (command === 'rollback') result = await rollback({ ...common, keepPreviousData: flag('--keep-previous-data') });
    else if (command === 'uninstall') result = await uninstall({ ...common, purge: flag('--purge') });
    else if (command === 'status') result = await status(common);
    else throw Error('Usage: linux-install.mjs install|upgrade|rollback|uninstall|status [--root DIR] [--archive FILE --allowed-signers FILE] [--purge] [--keep-previous-data] [--no-desktop-entry]');
    console.log(JSON.stringify(result, null, 2));
  } catch (error) {
    console.error(`OpenVision installer: ${error.message}`);
    process.exitCode = 1;
  }
}
