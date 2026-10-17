import assert from 'node:assert/strict';
import { once } from 'node:events';
import { mkdtemp, mkdir, readFile, writeFile, readdir, symlink, unlink, rename, lstat, stat, readlink,
  chmod, appendFile, realpath } from 'node:fs/promises';
import { createReadStream } from 'node:fs';
import { createInterface } from 'node:readline';
import { basename, dirname, join, resolve } from 'node:path';
import { setTimeout as delay } from 'node:timers/promises';
import { _electron } from '../tooling/browser.mjs';
import { verificationRuntime } from './verification-runtime.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { linuxSandboxArguments } from './platform.mjs';
import { fileHash } from './import-files.mjs';
import { enterWorkspace } from './verification-workspace.mjs';

// OV-401 Linux Explorer matrix: native Explorer/editor operations in a disposable
// large multi-root fixture, symlinks, external changes, POSIX permission denial,
// restored sessions after graceful and abrupt exit, and OS-level watcher and
// filesystem work for a small edit. No AI provider is used.
if (process.platform !== 'linux') throw Error('verify:explorer is the Linux matrix; Windows evidence uses verify:project:lifecycle.');
if (process.getuid?.() === 0) throw Error('Permission-denial cells cannot run as root.');

const root = resolve(import.meta.dirname, '..'), { layout, appRoot } = await verificationRuntime(root);
await mkdir(join(root, 'logs'), { recursive: true });
const directory = await realpath(await mkdtemp(join(root, 'logs/explorer-verification-')));
const profile = join(directory, 'profile'), large = join(directory, 'large'), secondary = join(directory, 'secondary');
const outside = join(directory, 'outside'), linkedReal = join(directory, 'linked-root-real'), linkedRoot = join(directory, 'linked-root');
const fixtureRoots = [large, secondary, outside, linkedReal, linkedRoot];
const measureOnly = process.argv.includes('--measure-only');
const groups = 100, filesPerGroup = 100, packages = 10, filesPerPackage = 100;

// Declared before measurement: a small edit in the large root must cost O(1)
// filesystem work, independent of its 10,000 files and 100 group directories.
const budget = Object.freeze({
  // Project work excludes root configuration probes (below); it is what the edit causes.
  smallEdit: { projectSyscalls: 30, distinctProjectPaths: 3, projectDirectoryListings: 2, inotifyAddWatch: 2, probesPerRootPerSecond: 4 },
  externalEdit: { projectSyscalls: 30, distinctProjectPaths: 3, projectDirectoryListings: 2, inotifyAddWatch: 2, probesPerRootPerSecond: 4 },
  idle: { projectSyscalls: 0, projectDirectoryListings: 0, inotifyAddWatch: 0, probesPerRootPerSecond: 4 },
  // Root configuration probes: periodic stats of absent per-root paths (.vscode, .claude,
  // .openvision, .git); they scale with roots, not files. Bounded per root and second.
  // No per-file watches and no unbounded growth through the symlink loop.
  // Workspace roots may hold one extra non-recursive watch; every other watched
  // directory exactly one. User-excluded trees (files.watcherExclude) hold none.
  watches: { perWatchedDirectory: 1, perWorkspaceRoot: 2, userExcludedDirectories: 0 },
});

const result = { checkedAt: new Date().toISOString(), directory, platform: `${process.platform}-${process.arch}`, node: process.version,
  workbenchHash: await fileHash(join(appRoot, 'out/vs/workbench/workbench.desktop.main.js')), budget,
  scope: 'Linux x64 only. Native OpenVision Explorer/editor in a disposable three-root workspace (10,000-file root); no AI requests.',
  checks: {}, observations: {}, hostExits: [], errors: [], limitations: [
    'Linux x64 (Wayland, ext4/btrfs as provided by the host) only; Windows and macOS cells are not established here.',
    'files.enableTrash is false: deletion through the desktop trash is not exercised.',
    'Abrupt exit is SIGKILL of the owned process group, not power loss or kernel crash.',
    'strace adds overhead; syscall counts cover owned processes traced from launch, not kernel-internal work.'] };
let app, page, step = 'setup';

async function until(description, condition, timeout = 20000) {
  const end = Date.now() + timeout;
  while (Date.now() < end) { const value = await condition(); if (value) return value; await delay(100); }
  throw Error(`Timed out waiting for ${description}`);
}
const disk = path => readFile(path, 'utf8').catch(error => { if (error.code === 'ENOENT') return undefined; throw error; });
const exists = path => lstat(path).then(() => true, error => { if (error.code === 'ENOENT') return false; throw error; });
const check = (name, value = true) => { result.checks[name] = value; };

// ---------- fixture ----------
const modes = [];
async function restrict(path, mode) { modes.push({ path, mode: (await lstat(path)).mode & 0o7777 }); await chmod(path, mode); }
async function restoreModes() {
  for (const { path, mode } of [...modes].reverse()) await chmod(path, mode).catch(() => {});
  for (const { path, mode } of modes) assert.equal((await lstat(path)).mode & 0o7777, mode, `mode restored: ${path}`);
  check('fixture_permissions_restored');
}

async function prepare() {
  await mkdir(join(profile, 'User'), { recursive: true });
  for (let group = 0; group < groups; group++) {
    const folder = join(large, `group-${String(group).padStart(3, '0')}`); await mkdir(folder, { recursive: true });
    await Promise.all(Array.from({ length: filesPerGroup }, (_, index) => {
      const n = group * filesPerGroup + index; return writeFile(join(folder, `file-${n}.txt`), `Untouched fixture ${n}\n`);
    }));
  }
  for (let pkg = 0; pkg < packages; pkg++) {
    const folder = join(large, 'node_modules', `pkg-${pkg}`, 'lib'); await mkdir(folder, { recursive: true });
    await Promise.all(Array.from({ length: filesPerPackage }, (_, index) => writeFile(join(folder, `m-${index}.js`), `module.exports = ${index};\n`)));
    // User-excluded generated output (files.watcherExclude below).
    await mkdir(join(large, 'generated', `out-${pkg}`, 'chunks'), { recursive: true });
    await writeFile(join(large, 'generated', `out-${pkg}`, 'chunks', 'bundle.js'), `// generated ${pkg}\n`);
  }
  const files = {
    'ops/anchor.txt': 'ops anchor\n', 'ops/open-me.txt': 'Open through Explorer — café\n', 'ops/rename-me.txt': 'Rename bytes 日本語\n',
    'ops/rename-dirty.txt': 'Dirty rename baseline\n', 'ops/move-me.txt': 'Move within root\n', 'ops/cross-move.txt': 'Cross-root move\n',
    'ops/copy-me.txt': 'Cross-root copy\n', 'ops/delete-me.txt': 'Delete me\n', 'ops/keep.txt': 'Unrelated keep\n',
    'ops/nested/anchor.txt': 'nested anchor\n', 'links/anchor.txt': 'links anchor\n',
    'external/clean.txt': 'Clean baseline\n', 'external/dirty.txt': 'Dirty baseline\n',
    'external/deleted-clean.txt': 'Deleted clean baseline\n', 'external/deleted-dirty.txt': 'Deleted dirty baseline\n',
    'perm/anchor.txt': 'perm anchor\n', 'perm/unreadable.txt': 'Unreadable original\n', 'perm/readonly.txt': 'Read-only original\n',
    'perm/locked-dir/locked-file.txt': 'Locked original\n', 'perm/sealed-dir/hidden.txt': 'Sealed original\n',
    'session/restart.txt': 'Restart baseline\n', 'session/abrupt.txt': 'Abrupt baseline\n' };
  for (const [name, text] of Object.entries(files)) { await mkdir(dirname(join(large, name)), { recursive: true }); await writeFile(join(large, name), text); }
  for (const [name, text] of Object.entries({ 'destination/anchor.txt': 'destination anchor\n', 'copy-destination/anchor.txt': 'copy anchor\n',
    'session/second-root.txt': 'Second root baseline\n' })) {
    await mkdir(dirname(join(secondary, name)), { recursive: true }); await writeFile(join(secondary, name), text);
  }
  for (const [name, text] of Object.entries({ 'file-target.txt': 'File link target\n', 'dir-target/inner.txt': 'Dir link inner\n',
    'rename-target.txt': 'Rename link target\n', 'delete-dir-target/keep.txt': 'Delete-link target must survive\n' })) {
    await mkdir(dirname(join(outside, name)), { recursive: true }); await writeFile(join(outside, name), text);
  }
  await mkdir(linkedReal); await writeFile(join(linkedReal, 'via-root-link.txt'), 'Linked root baseline\n');
  await symlink(linkedReal, linkedRoot, 'dir');
  const links = join(large, 'links');
  await symlink('../../outside/file-target.txt', join(links, 'file-link.txt'));
  await symlink('../../outside/dir-target', join(links, 'dir-link'));
  await symlink('missing-target.txt', join(links, 'broken.txt'));
  await symlink('..', join(links, 'loop'));
  await symlink('cycle-b', join(links, 'cycle-a')); await symlink('cycle-a', join(links, 'cycle-b'));
  await symlink('../../outside/rename-target.txt', join(links, 'rename-link.txt'));
  await symlink('../../outside/delete-dir-target', join(links, 'delete-dir-link'));
  await writeFile(join(profile, 'User/settings.json'), JSON.stringify({ ...verificationSettings,
    'git.enabled': false, 'files.enableTrash': false, 'explorer.confirmDelete': true, 'explorer.confirmDragAndDrop': true,
    'files.hotExit': 'onExitAndWindowClose', 'window.restoreWindows': 'all', 'files.autoSave': 'off',
    'editor.quickSuggestions': false, 'editor.minimap.enabled': false, 'window.dialogStyle': 'custom',
    'workbench.editor.enablePreview': false, 'explorer.autoReveal': true,
    'files.watcherExclude': { '**/.git/objects/**': true, '**/.git/subtree-cache/**': true, '**/.hg/store/**': true, '**/generated/**': true } }));
  await writeFile(join(directory, 'fixture.code-workspace'), JSON.stringify({ folders: [{ path: large }, { path: secondary }, { path: linkedRoot }] }));
  // Permission cells are created before launch so the native watcher meets them at startup.
  await restrict(join(large, 'perm/unreadable.txt'), 0o000);
  await restrict(join(large, 'perm/readonly.txt'), 0o444);
  await restrict(join(large, 'perm/locked-dir'), 0o555);
  await restrict(join(large, 'perm/sealed-dir'), 0o000);
  await writeFile(join(directory, 'permission-modes.json'), JSON.stringify(modes, null, 2), { flag: 'wx' });
  result.fixture = { files: groups * filesPerGroup + packages * filesPerPackage + Object.keys(files).length + 4,
    largeGroupFiles: groups * filesPerGroup, nodeModulesFiles: packages * filesPerPackage, userExcludedDirectories: packages * 2, roots: 3, symlinks: 9 };
}

// ---------- process ownership ----------
function procStat(pid) {
  return readFile(`/proc/${pid}/stat`, 'utf8').then(text => {
    const fields = text.slice(text.lastIndexOf(')') + 2).split(' ');
    return { pid, state: fields[0], ppid: Number(fields[1]), pgid: Number(fields[2]) };
  }, () => undefined);
}
// Owned family: members of the process group created by this verifier's detached launch.
async function ownedProcesses(group) {
  const found = [];
  for (const entry of await readdir('/proc')) {
    if (!/^\d+$/.test(entry)) continue;
    const info = await procStat(Number(entry)); if (info?.pgid !== group) continue;
    const cmdline = await readFile(`/proc/${entry}/cmdline`, 'utf8').then(text => text.replaceAll('\0', ' '), () => '');
    const tasks = await readdir(`/proc/${entry}/task`).catch(() => []);
    found.push({ ...info, cmdline, tasks: tasks.map(Number), role: role(cmdline) });
  }
  return found;
}
function role(cmdline) {
  const type = cmdline.match(/--type=(\S+)/)?.[1], sub = cmdline.match(/--utility-sub-type=(\S+)/)?.[1];
  if (/strace /.test(cmdline) && !type) return 'strace';
  if (!type) return 'main';
  if (type === 'utility') return `utility:${sub ?? 'unknown'}${/fileWatcher|watcher/i.test(cmdline) ? ' (watcher)' : ''}`;
  return type;
}

// inotify watches per owned process, mapped to fixture directories by inode.
async function inotifyWatches(group) {
  const processes = await ownedProcesses(group), watches = [];
  for (const proc of processes) {
    const fds = await readdir(`/proc/${proc.pid}/fd`).catch(() => []);
    for (const fd of fds) {
      const target = await readlink(`/proc/${proc.pid}/fd/${fd}`).catch(() => '');
      if (target !== 'anon_inode:inotify') continue;
      const info = await readFile(`/proc/${proc.pid}/fdinfo/${fd}`, 'utf8').catch(() => '');
      for (const line of info.split('\n')) {
        const match = line.match(/inotify wd:([0-9a-f]+) ino:([0-9a-f]+) sdev:([0-9a-f]+)/);
        if (match) watches.push({ pid: proc.pid, role: proc.role, fd, ino: BigInt(`0x${match[2]}`) });
      }
    }
  }
  return { processes, watches };
}
async function fixtureInodes() {
  const map = new Map();
  async function walk(path, label) {
    const info = await lstat(path, { bigint: true }).catch(() => undefined); if (!info) return;
    if (info.isSymbolicLink()) return;
    map.set(info.ino, { path: label, directory: info.isDirectory() });
    if (!info.isDirectory()) return;
    for (const name of await readdir(path).catch(() => [])) await walk(join(path, name), `${label}/${name}`);
  }
  for (const [path, label] of [[large, 'large'], [secondary, 'secondary'], [outside, 'outside'], [linkedReal, 'linked-root-real']]) await walk(path, label);
  return map;
}
async function watchSummary(group) {
  const [{ processes, watches }, inodes] = await Promise.all([inotifyWatches(group), fixtureInodes()]);
  const fixture = watches.filter(watch => inodes.has(watch.ino)).map(watch => ({ ...watch, ...inodes.get(watch.ino) }));
  const perDirectory = new Map();
  for (const watch of fixture) perDirectory.set(watch.path, (perDirectory.get(watch.path) ?? 0) + 1);
  const byRole = {};
  for (const watch of watches) byRole[watch.role] = (byRole[watch.role] ?? 0) + 1;
  const fixtureDirectories = [...inodes.values()].filter(item => item.directory).length;
  return { total: watches.length, byRole, fixture: fixture.length, fixtureDirectories,
    watchedFixtureDirectories: perDirectory.size, fileWatches: fixture.filter(watch => !watch.directory).map(watch => watch.path),
    maxPerDirectory: Math.max(0, ...perDirectory.values()),
    duplicated: [...perDirectory].filter(([, count]) => count > 1).slice(0, 20),
    nodeModulesWatches: [...perDirectory.keys()].filter(path => /\/node_modules\/pkg-\d+\//.test(`${path}/`)).length,
    userExcludedWatches: [...perDirectory.keys()].filter(path => /^large\/generated\/./.test(path)).length,
    duplicatedDetail: fixture.filter(watch => perDirectory.get(watch.path) > 1).map(({ path, role, pid, fd }) => ({ path, role, pid, fd })),
    groupWatches: [...perDirectory.keys()].filter(path => /^large\/group-\d{3}$/.test(path)).length,
    processes: processes.map(({ pid, role }) => ({ pid, role })) };
}

// ---------- application ----------
async function launch(label, { trace } = {}) {
  step = `launch ${label}`;
  const env = { ...process.env }; delete env.ELECTRON_RUN_AS_NODE;
  let executablePath = layout.executable;
  if (trace) {
    // The tracer is the launched program and therefore the ancestor of every
    // traced process (works with yama ptrace_scope=1); nothing is attached by PID.
    executablePath = join(directory, 'traced-openvision.sh');
    await writeFile(executablePath, `#!/bin/sh\nexec strace -f -qq -ttt -y -o '${trace}' -e trace=%file,getdents64,inotify_add_watch,inotify_rm_watch,clone,clone3,fork,vfork '${layout.executable}' "$@"\n`, { mode: 0o755 });
  }
  app = await _electron.launch({ executablePath, env, timeout: 90000,
    args: ['--user-data-dir', profile, '--extensions-dir', join(directory, 'extensions'), '--new-window',
      '--disable-updates', '--disable-telemetry', '--disable-crash-reporter', '--skip-welcome', '--skip-release-notes',
      ...await linuxSandboxArguments(layout.host), join(directory, 'fixture.code-workspace')] });
  app.process().stderr?.on('data', chunk => { result.stderrTail = ((result.stderrTail ?? '') + chunk).slice(-8192); });
  page = await app.firstWindow(); page.setDefaultTimeout(20000);
  page.on('pageerror', error => result.errors.push(`${step}: ${error.message}`));
  await page.locator('.part.titlebar .openvision-local-profile').waitFor({ state: 'attached', timeout: 90000 });
  await enterWorkspace(page);
  const child = app.process();
  assert.equal((await procStat(child.pid))?.pgid, child.pid, 'The owned host must lead its own process group');
  await page.locator('.explorer-folders-view').waitFor({ timeout: 30000 }).catch(async () => {
    await page.keyboard.press('Control+Shift+e'); await page.locator('.explorer-folders-view').waitFor();
  });
  await delay(trace ? 15000 : 6000);
  return child;
}
async function close(label) {
  if (!app) return;
  const child = app.process(), exited = child.exitCode === null && child.signalCode === null ? once(child, 'exit') : undefined;
  await app.close(); if (exited) await exited; app = undefined;
  result.hostExits.push({ label, mode: 'graceful', exitCode: child.exitCode, signalCode: child.signalCode });
  assert.equal(child.exitCode, 0);
}
async function killOwnedGroup(label) {
  const child = app.process();
  assert.equal(child.exitCode, null);
  assert.equal((await procStat(child.pid))?.pgid, child.pid, 'Only the verifier-created process group is signalled');
  const family = await ownedProcesses(child.pid);
  const exited = once(child, 'exit');
  process.kill(-child.pid, 'SIGKILL');
  const [code, signal] = await exited; app = undefined;
  let survivors = [];
  for (let attempt = 0; attempt < 40; attempt++) {
    survivors = (await ownedProcesses(child.pid)).filter(item => item.state !== 'Z'); if (!survivors.length) break; await delay(250);
  }
  result.hostExits.push({ label, mode: 'SIGKILL owned process group', exitCode: code, signalCode: signal, familyBefore: family.length, survivors: survivors.length });
  assert.equal(survivors.length, 0, 'No owned process survives the abrupt exit');
}

const editor = () => page.locator('.editor-instance .monaco-editor').filter({ visible: true }).first();
async function command(name) {
  await page.keyboard.press('Escape'); await page.keyboard.press('Control+Shift+p');
  await page.locator('.quick-input-widget input[type="text"]').fill(`>${name}`);
  await page.locator('.quick-input-widget').getByText(name, { exact: true }).first().click();
}
async function quickOpen(path) {
  const input = page.locator('.quick-input-widget input[type="text"]');
  for (let attempt = 0; attempt < 4; attempt++) {
    await page.keyboard.press('Escape'); await page.keyboard.press('Control+p');
    if (await input.waitFor({ state: 'visible', timeout: 2500 }).then(() => true, () => false)) break;
    await page.locator('.part.statusbar').click({ position: { x: 2, y: 2 } }).catch(() => {});
  }
  await input.fill(path);
  await page.locator('.quick-input-widget .monaco-list-row').filter({ hasText: basename(path) }).first().waitFor();
  await page.keyboard.press('Enter');
  await activeTab(basename(path));
}
async function activeTab(name) {
  await page.locator('.tabs-container .tab.active').filter({ hasText: name }).waitFor();
  await editor().waitFor(); await delay(300);
}
// Reveal a folder's anchor file so the folder's rows are rendered in the virtualized Explorer.
async function reveal(anchor) { await quickOpen(anchor); await command('File: Reveal Active File in Explorer'); await delay(400); }
function row(name) {
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return page.locator('.explorer-folders-view .monaco-list-row')
    .filter({ has: page.locator('.label-name', { hasText: new RegExp(`^${escaped}$`) }) }).first();
}
async function replaceEditor(text) {
  await editor().locator('.inputarea').focus(); await page.keyboard.press('Control+a'); await page.keyboard.insertText(text);
}
async function editorText() { return (await editor().locator('.view-lines').innerText()).replace(/ /g, ' '); }
const editorContains = async text => (await editorText()).includes(text);
async function save() { await editor().locator('.inputarea').focus(); await page.keyboard.press('Control+s'); }
async function notification(pattern, timeout = 15000) {
  const locator = page.locator('.notifications-toasts .notification-toast, .notifications-center .notification-list-item, .monaco-dialog-box')
    .filter({ hasText: pattern }).first();
  await locator.waitFor({ timeout });
  return (await locator.innerText()).replace(/\s+/g, ' ').slice(0, 300);
}
async function clearNotifications() {
  await command('Notifications: Clear All Notifications').catch(() => {}); await page.keyboard.press('Escape');
}
// An editor placeholder, toast or modal dialog reports the failure; a modal is dismissed after capture.
async function errorSurface(pattern, timeout = 15000) {
  const locator = page.locator('.monaco-dialog-box, .editor-instance, .notifications-toasts').filter({ hasText: pattern }).first();
  await locator.waitFor({ timeout });
  const text = (await locator.innerText()).replace(/\s+/g, ' ').slice(0, 300);
  const dialog = page.locator('.monaco-dialog-box');
  if (await dialog.isVisible()) { await dialog.getByRole('button', { name: /Cancel|Close|OK/ }).first().click(); await dialog.waitFor({ state: 'hidden' }); }
  return text;
}
async function confirmDialog(button) {
  const dialog = page.locator('.monaco-dialog-box'); await dialog.waitFor();
  await dialog.getByRole('button', { name: button }).first().click(); await dialog.waitFor({ state: 'hidden' });
}

// ---------- cells ----------
async function explorerOperations() {
  step = 'explorer operations';
  const ops = join(large, 'ops');
  await reveal(join(ops, 'anchor.txt'));
  await row('open-me.txt').click(); await activeTab('open-me.txt');
  assert.ok(await editorContains('Open through Explorer — café'));
  check('explorer_open_file');
  await replaceEditor('Saved through Explorer editor — café\n'); await save();
  await until('Explorer-opened file saves', async () => await disk(join(ops, 'open-me.txt')) === 'Saved through Explorer editor — café\n');
  await page.locator('.tabs-container .tab.active:not(.dirty)').waitFor();
  check('explorer_save_exact_bytes');

  await row('rename-me.txt').click(); await page.keyboard.press('F2');
  await page.locator('.explorer-folders-view input').fill('renamed.txt'); await page.keyboard.press('Enter');
  await until('Explorer rename', async () => await disk(join(ops, 'renamed.txt')) === 'Rename bytes 日本語\n' && !await exists(join(ops, 'rename-me.txt')));
  check('explorer_rename_preserves_bytes');

  // Renaming an open dirty file moves the editor and keeps the unsaved edit.
  await quickOpen(join(ops, 'rename-dirty.txt')); await replaceEditor('Unsaved edit across rename\n');
  await page.locator('.tabs-container .tab.active.dirty').waitFor();
  await command('File: Reveal Active File in Explorer'); await row('rename-dirty.txt').click(); await page.keyboard.press('F2');
  await page.locator('.explorer-folders-view input').fill('renamed-dirty.txt'); await page.keyboard.press('Enter');
  await until('dirty rename moves the file', async () => await disk(join(ops, 'renamed-dirty.txt')) === 'Dirty rename baseline\n' && !await exists(join(ops, 'rename-dirty.txt')));
  await page.locator('.tabs-container .tab.dirty').filter({ hasText: 'renamed-dirty.txt' }).waitFor();
  await page.locator('.tabs-container .tab').filter({ hasText: 'renamed-dirty.txt' }).click();
  assert.ok(await editorContains('Unsaved edit across rename'));
  await save();
  await until('renamed dirty editor saves to new path', async () => await disk(join(ops, 'renamed-dirty.txt')) === 'Unsaved edit across rename\n');
  check('explorer_rename_open_dirty_file_keeps_unsaved_edit');

  await reveal(join(ops, 'anchor.txt'));
  await row('move-me.txt').click(); await page.keyboard.press('Control+x');
  await row('nested').click(); await page.keyboard.press('Control+v');
  await until('move within root', async () => await disk(join(ops, 'nested/move-me.txt')) === 'Move within root\n' && !await exists(join(ops, 'move-me.txt')));
  check('explorer_move_within_root');

  await reveal(join(ops, 'anchor.txt'));
  await row('cross-move.txt').click(); await page.keyboard.press('Control+x');
  await reveal(join(secondary, 'destination/anchor.txt')); await row('destination').click(); await page.keyboard.press('Control+v');
  await until('cross-root move', async () => await disk(join(secondary, 'destination/cross-move.txt')) === 'Cross-root move\n' && !await exists(join(ops, 'cross-move.txt')));
  check('explorer_move_between_roots');

  await reveal(join(ops, 'anchor.txt'));
  await row('copy-me.txt').click(); await page.keyboard.press('Control+c');
  await reveal(join(secondary, 'copy-destination/anchor.txt')); await row('copy-destination').click(); await page.keyboard.press('Control+v');
  await until('cross-root copy', async () => await disk(join(secondary, 'copy-destination/copy-me.txt')) === 'Cross-root copy\n' && await disk(join(ops, 'copy-me.txt')) === 'Cross-root copy\n');
  check('explorer_copy_between_roots');

  await reveal(join(ops, 'anchor.txt'));
  await row('delete-me.txt').click(); await page.keyboard.press('Delete'); await confirmDialog(/Delete/);
  await until('confirmed delete', async () => !await exists(join(ops, 'delete-me.txt')));
  assert.equal(await disk(join(ops, 'keep.txt')), 'Unrelated keep\n');
  check('explorer_delete_preserves_unrelated');

  await quickOpen(join(linkedRoot, 'via-root-link.txt')); await replaceEditor('Saved through symlinked workspace root\n'); await save();
  await until('symlinked root save', async () => await disk(join(linkedReal, 'via-root-link.txt')) === 'Saved through symlinked workspace root\n');
  assert.ok((await lstat(linkedRoot)).isSymbolicLink());
  check('symlinked_workspace_root_save');
}

async function symlinks() {
  step = 'symlinks';
  const links = join(large, 'links');
  await reveal(join(links, 'anchor.txt'));
  await row('file-link.txt').click(); await activeTab('file-link.txt');
  assert.ok(await editorContains('File link target'));
  await replaceEditor('Saved through file symlink\n'); await save();
  await until('file symlink save reaches target', async () => await disk(join(outside, 'file-target.txt')) === 'Saved through file symlink\n');
  assert.ok((await lstat(join(links, 'file-link.txt'))).isSymbolicLink());
  assert.equal(await readlink(join(links, 'file-link.txt')), '../../outside/file-target.txt');
  check('file_symlink_open_save_preserves_link_and_target');

  await reveal(join(links, 'anchor.txt'));
  await row('dir-link').click(); await row('inner.txt').waitFor(); await row('inner.txt').click(); await activeTab('inner.txt');
  await replaceEditor('Saved through directory symlink\n'); await save();
  await until('directory symlink save', async () => await disk(join(outside, 'dir-target/inner.txt')) === 'Saved through directory symlink\n');
  assert.ok((await lstat(join(links, 'dir-link'))).isSymbolicLink());
  check('directory_symlink_expand_open_save');
  await row('dir-link').click();

  await reveal(join(links, 'anchor.txt'));
  await row('broken.txt').waitFor();
  await row('broken.txt').click();
  result.observations.brokenLink = await errorSurface(/not found|could not be opened|Unable to (open|resolve)|ENOENT/i);
  assert.equal(await readlink(join(links, 'broken.txt')), 'missing-target.txt');
  assert.equal(await exists(join(links, 'missing-target.txt')), false);
  check('broken_symlink_listed_and_open_fails_without_creating_target');
  await command('View: Close All Editors').catch(() => {}); await clearNotifications();

  await reveal(join(links, 'anchor.txt'));
  // Regression guard for the symlink-cycle customization: upstream dropped ELOOP entries from listings.
  await row('cycle-a').waitFor({ timeout: 10000 }); await row('cycle-b').waitFor();
  await row('cycle-a').click();
  result.observations.symlinkCycle = await errorSurface(/symbolic links|ELOOP|could not be opened|Unable to (open|resolve)|not found/i);
  await command('View: Close All Editors').catch(() => {}); await clearNotifications();
  await reveal(join(links, 'anchor.txt'));
  // A click would open the link (error dialog); the context menu selects it without opening.
  await row('cycle-b').click({ button: 'right' });
  await page.locator('.context-view .monaco-menu .action-label').filter({ hasText: /^Delete( Permanently)?$/ }).first().click();
  await confirmDialog(/Delete/);
  await until('cycle link delete', async () => !await exists(join(links, 'cycle-b')));
  assert.equal(await readlink(join(links, 'cycle-a')), 'cycle-b');
  check('symlink_cycle_listed_and_link_deletable');
  await command('View: Close All Editors').catch(() => {}); await clearNotifications();
  check('mutual_symlink_cycle_open_fails_without_hang');

  await reveal(join(links, 'anchor.txt'));
  await row('loop').click();
  const loopChildren = page.locator('.explorer-folders-view .monaco-list-row[aria-level="4"]').filter({ has: page.locator('.label-name', { hasText: /^group-000$/ }) });
  await loopChildren.first().waitFor();
  await row('loop').click();
  await reveal(join(links, 'anchor.txt'));
  check('directory_loop_expands_one_level_without_hang');

  await row('rename-link.txt').click(); await page.keyboard.press('F2');
  await page.locator('.explorer-folders-view input').fill('renamed-link.txt'); await page.keyboard.press('Enter');
  await until('symlink rename', async () => await exists(join(links, 'renamed-link.txt')) && !await exists(join(links, 'rename-link.txt')));
  assert.ok((await lstat(join(links, 'renamed-link.txt'))).isSymbolicLink());
  assert.equal(await readlink(join(links, 'renamed-link.txt')), '../../outside/rename-target.txt');
  assert.equal(await disk(join(outside, 'rename-target.txt')), 'Rename link target\n');
  check('symlink_rename_renames_link_not_target');

  await reveal(join(links, 'anchor.txt'));
  await row('delete-dir-link').click(); await page.keyboard.press('Delete'); await confirmDialog(/Delete/);
  await until('symlink delete', async () => !await exists(join(links, 'delete-dir-link')));
  assert.equal(await disk(join(outside, 'delete-dir-target/keep.txt')), 'Delete-link target must survive\n');
  check('directory_symlink_delete_preserves_target_contents');
}

async function externalChanges() {
  step = 'external changes';
  const external = join(large, 'external');
  await quickOpen(join(external, 'clean.txt'));
  await writeFile(join(external, 'clean.txt'), 'External clean reload\n');
  await until('clean editor reloads', () => editorContains('External clean reload'));
  check('external_change_reloads_clean_editor');

  await quickOpen(join(external, 'dirty.txt')); await replaceEditor('Local dirty edit\n');
  await page.locator('.tabs-container .tab.active.dirty').waitFor();
  await writeFile(join(external, 'dirty.txt'), 'Concurrent external edit\n');
  await delay(1500);
  assert.ok(await editorContains('Local dirty edit'), 'External change must not replace a dirty editor');
  await save();
  result.observations.dirtyConflict = await notification(/newer|Failed to save 'dirty.txt'/);
  assert.equal(await disk(join(external, 'dirty.txt')), 'Concurrent external edit\n');
  assert.ok(await editorContains('Local dirty edit'));
  check('external_change_dirty_conflict_preserves_both');
  await page.getByRole('button', { name: 'Overwrite', exact: true }).first().click();
  await until('explicit overwrite', async () => await disk(join(external, 'dirty.txt')) === 'Local dirty edit\n');
  check('external_conflict_explicit_overwrite');
  await clearNotifications();

  await quickOpen(join(external, 'deleted-clean.txt'));
  await unlink(join(external, 'deleted-clean.txt'));
  await page.locator('.tabs-container .tab.active').filter({ hasText: /deleted/i }).waitFor();
  assert.ok(await editorContains('Deleted clean baseline'));
  check('external_delete_clean_editor_marked_deleted_content_kept');

  await quickOpen(join(external, 'deleted-dirty.txt')); await replaceEditor('Unsaved edit survives external delete\n');
  await page.locator('.tabs-container .tab.active.dirty').waitFor();
  await unlink(join(external, 'deleted-dirty.txt'));
  await page.locator('.tabs-container .tab.active').filter({ hasText: /deleted/i }).waitFor();
  assert.ok(await editorContains('Unsaved edit survives external delete'));
  await save();
  await until('dirty deleted file saves again', async () => await disk(join(external, 'deleted-dirty.txt')) === 'Unsaved edit survives external delete\n');
  check('external_delete_dirty_editor_keeps_edit_and_resaves');

  await reveal(join(large, 'group-000/file-0.txt'));
  await writeFile(join(large, 'group-000/external-new.txt'), 'Created outside\n');
  await row('external-new.txt').waitFor({ timeout: 15000 });
  check('external_create_in_large_root_appears_in_explorer');
  await unlink(join(large, 'group-000/external-new.txt'));
  await row('external-new.txt').waitFor({ state: 'detached', timeout: 15000 });
  check('external_delete_in_large_root_leaves_explorer');
  await command('View: Close All Editors');
}

async function permissions() {
  step = 'permissions';
  const perm = join(large, 'perm');
  await reveal(join(perm, 'anchor.txt'));
  await row('unreadable.txt').click();
  result.observations.unreadableFile = await errorSurface(/permission|EACCES|could not be opened|Unable to/i);
  assert.equal(await editor().isVisible() && await editorContains('Unreadable original'), false);
  check('unreadable_file_open_reports_error');
  await command('View: Close All Editors').catch(() => {}); await clearNotifications();

  await reveal(join(perm, 'anchor.txt'));
  await row('sealed-dir').click(); await delay(1500);
  result.observations.sealedDirectory = await page.locator('.notifications-toasts').innerText().catch(() => '');
  assert.equal(await row('hidden.txt').count(), 0);
  await row('anchor.txt').click(); await activeTab('anchor.txt');
  check('unreadable_directory_expand_does_not_hang');
  await clearNotifications();

  await quickOpen(join(perm, 'readonly.txt')); await replaceEditor('Must not reach read-only file\n'); await save();
  result.observations.readonlySave = await notification(/Failed to save 'readonly.txt'|permission|read-only|readonly/i);
  assert.equal(await disk(join(perm, 'readonly.txt')), 'Read-only original\n');
  assert.ok(await editorContains('Must not reach read-only file'));
  check('readonly_file_save_denied_preserves_disk_and_editor');
  await command('File: Revert File'); await clearNotifications();

  await reveal(join(perm, 'locked-dir/locked-file.txt'));
  await row('locked-file.txt').click(); await page.keyboard.press('F2');
  await page.locator('.explorer-folders-view input').fill('renamed-locked.txt'); await page.keyboard.press('Enter');
  result.observations.lockedRename = await notification(/permission|EACCES|Unable to|could not/i);
  assert.equal(await disk(join(perm, 'locked-dir/locked-file.txt')), 'Locked original\n');
  assert.equal(await exists(join(perm, 'locked-dir/renamed-locked.txt')), false);
  check('rename_in_readonly_directory_denied_preserves_file');
  await page.keyboard.press('Escape'); await clearNotifications();

  await reveal(join(perm, 'locked-dir/locked-file.txt'));
  await row('locked-file.txt').click(); await page.keyboard.press('Delete'); await confirmDialog(/Delete/);
  result.observations.lockedDelete = await notification(/permission|EACCES|Unable to|could not|Failed/i);
  assert.equal(await disk(join(perm, 'locked-dir/locked-file.txt')), 'Locked original\n');
  check('delete_in_readonly_directory_denied_preserves_file');
  await page.keyboard.press('Escape'); await clearNotifications();
  await command('View: Close All Editors').catch(() => {});
}

const sessionFiles = { restart: join(large, 'session/restart.txt'), abrupt: join(large, 'session/abrupt.txt'), second: join(secondary, 'session/second-root.txt') };
async function makeDirtySession() {
  step = 'session edits';
  await quickOpen(sessionFiles.restart); await replaceEditor('Unsaved restart edit\n');
  await quickOpen(sessionFiles.second); await replaceEditor('Unsaved second-root edit\n');
  await command('File: New Untitled Text File'); await editor().waitFor(); await page.keyboard.insertText('Untitled unsaved note\n');
  await page.locator('.tabs-container .tab.dirty').nth(2).waitFor();
}
async function tabText(name) {
  await page.locator('.tabs-container .tab').filter({ hasText: name }).first().click(); await delay(400); return editorText();
}
async function assertRestored(stage, expected) {
  for (const [name, text] of expected) {
    await page.locator('.tabs-container .tab.dirty').filter({ hasText: name }).first().waitFor({ timeout: 30000 });
    assert.ok((await tabText(name)).includes(text), `${stage}: ${name} restores its unsaved edit`);
  }
}

async function measure() {
  step = 'measurement';
  const trace = join(directory, 'strace.log');
  const child = await launch('measurement', { trace });
  // Settle: wait until the watch count is stable across two samples.
  let previous = -1, watches;
  for (let attempt = 0; attempt < 30; attempt++) {
    watches = await watchSummary(child.pid); if (watches.total === previous) break; previous = watches.total; await delay(2000);
  }
  result.watches = { ...watches, processes: undefined, processRoles: watches.processes.map(item => item.role) };

  const tasks = new Map();
  for (const proc of await ownedProcesses(child.pid)) for (const task of proc.tasks) tasks.set(task, proc.role);
  const editTarget = join(large, 'group-050/file-5000.txt'), externalTarget = join(large, 'group-075/file-7500.txt');
  await quickOpen(editTarget); await delay(4000);
  const windows = {};
  const span = async (name, action) => { const start = Date.now() / 1000; await action(); await delay(3000); windows[name] = { start, end: Date.now() / 1000 }; };
  await span('idle', async () => { await delay(1000); });
  await span('smallEdit', async () => {
    await editor().locator('.inputarea').focus(); await page.keyboard.press('Control+End'); await page.keyboard.insertText('x');
    await page.keyboard.press('Control+s');
    await until('small edit saved', async () => await disk(editTarget) === 'Untouched fixture 5000\nx');
  });
  await span('externalEdit', async () => { await appendFile(externalTarget, 'external\n'); });
  const after = await watchSummary(child.pid);
  for (const proc of await ownedProcesses(child.pid)) for (const task of proc.tasks) if (!tasks.has(task)) tasks.set(task, proc.role);
  await close('measurement');
  result.measurements = await parseTrace(trace, windows, tasks);
  result.measurements.watchesAfter = { total: after.total, fixture: after.fixture };
  for (const name of ['smallEdit', 'externalEdit', 'idle']) {
    const observed = result.measurements.windows[name], limit = budget[name];
    for (const [key, value] of Object.entries(limit)) assert.ok(observed[key] <= value, `${name}.${key} ${observed[key]} exceeds budget ${value}`);
  }
  assert.ok(result.measurements.windows.smallEdit.distinctProjectPathList.includes('large/group-050/file-5000.txt'), 'trace must observe the edit itself');
  assert.ok(result.measurements.windows.externalEdit.distinctProjectPathList.includes('large/group-075/file-7500.txt'), 'trace must observe the external write event');
  const workspaceRoots = new Set(['large', 'secondary', 'linked-root-real']);
  assert.equal(watches.fileWatches.length, 0, 'No per-file inotify watches in the fixture');
  for (const [path, count] of watches.duplicated)
    assert.ok(workspaceRoots.has(path) && count <= budget.watches.perWorkspaceRoot, `fixture directory over its watch budget: ${path} ${count}`);
  assert.equal(watches.userExcludedWatches, budget.watches.userExcludedDirectories, 'user-excluded trees are not watched');
  assert.equal(watches.groupWatches, groups, 'every large-root group directory is watched');
  assert.equal(after.fixture, watches.fixture, 'the small edits do not change the watch count');
  check('inotify_watch_budget');
  check('small_edit_filesystem_work_within_budget');
}

async function parseTrace(path, windows, tasks) {
  const fixturePrefixes = fixtureRoots.map(item => `${item}/`).concat(fixtureRoots);
  const touches = line => {
    const paths = [...line.matchAll(/"((?:[^"\\]|\\.)*)"|<(\/[^>]*)>/g)].map(match => match[1] ?? match[2]);
    return paths.filter(item => fixturePrefixes.some(prefix => item === prefix || item.startsWith(prefix.endsWith('/') ? prefix : `${prefix}/`)));
  };
  const out = {};
  const relativePath = item => item.replace(`${directory}/`, '');
  const probe = item => /^[^/]+\/\.(vscode|claude|openvision|cursor|git)(\/|$)/.test(relativePath(item));
  for (const name of Object.keys(windows)) out[name] = { projectSyscalls: 0, distinctProjectPaths: new Set(), projectDirectoryListings: 0,
    inotifyAddWatch: 0, probeSyscalls: 0, probePaths: new Set(), allSyscalls: 0, byCall: {}, byRole: {}, samples: [] };
  let total = 0;
  const startup = { fixtureSyscalls: 0, fixtureDirectoryListings: 0, inotifyAddWatch: 0, byRole: {}, listingsByRole: {} };
  const firstWindow = Math.min(...Object.values(windows).map(item => item.start));
  // Short-lived children (for example file search) exit before /proc sampling:
  // label them from traced clone/execve lines, inheriting the parent's role.
  const parents = new Map(), executables = new Map();
  const ownerOf = (tid, depth = 0) => executables.get(tid) ?? tasks.get(tid)
    ?? (parents.has(tid) && depth < 64 ? ownerOf(parents.get(tid), depth + 1) : 'unmapped-thread');
  for await (const line of createInterface({ input: createReadStream(path) })) {
    const match = line.match(/^(\d+)\s+(\d+\.\d+)\s+(?:<\.\.\. )?(\w+)/); if (!match) continue;
    total++;
    const created = /^(clone3?|v?fork)$/.test(match[3]) && line.match(/= (\d+)(?:<[^>]*>)?$/);
    if (created && Number(created[1]) > 0) parents.set(Number(created[1]), Number(match[1]));
    if (line.includes('resumed>')) continue;
    if (match[3] === 'execve' && !/= -1 /.test(line)) {
      const program = line.match(/execve\("([^"]+)"/)?.[1];
      if (program) executables.set(Number(match[1]), `exec:${basename(program)}`);
    }
    const [, tid, time, call] = match, at = Number(time), paths = touches(line);
    if (at < firstWindow) {
      const owner = ownerOf(Number(tid));
      if (paths.length) { startup.fixtureSyscalls++; startup.byRole[owner] = (startup.byRole[owner] ?? 0) + 1; }
      if (call === 'getdents64' && paths.length) { startup.fixtureDirectoryListings++; startup.listingsByRole[owner] = (startup.listingsByRole[owner] ?? 0) + 1; }
      if (call === 'inotify_add_watch') startup.inotifyAddWatch++;
      continue;
    }
    for (const [name, span] of Object.entries(windows)) {
      if (at < span.start || at > span.end) continue;
      const bucket = out[name]; bucket.allSyscalls++;
      if (call === 'inotify_add_watch') bucket.inotifyAddWatch++;
      if (!paths.length) continue;
      if (paths.every(probe)) { bucket.probeSyscalls++; for (const item of paths) bucket.probePaths.add(relativePath(item)); continue; }
      bucket.projectSyscalls++; for (const item of paths) bucket.distinctProjectPaths.add(relativePath(item));
      if (call === 'getdents64') bucket.projectDirectoryListings++;
      bucket.byCall[call] = (bucket.byCall[call] ?? 0) + 1;
      const owner = ownerOf(Number(tid));
      bucket.byRole[owner] = (bucket.byRole[owner] ?? 0) + 1;
      if (bucket.samples.length < 40) bucket.samples.push(`${owner} ${call} ${paths.map(item => item.replace(`${directory}/`, '')).join(' ')}`);
    }
  }
  for (const [name, bucket] of Object.entries(out)) {
    bucket.distinctProjectPathList = [...bucket.distinctProjectPaths].slice(0, 40);
    bucket.distinctProjectPaths = bucket.distinctProjectPaths.size;
    bucket.probePaths = bucket.probePaths.size;
    bucket.probesPerRootPerSecond = +(bucket.probeSyscalls / 3 / (windows[name].end - windows[name].start)).toFixed(2);
  }
  return { traceLines: total, startup, windows: out, windowSeconds: Object.fromEntries(Object.entries(windows).map(([name, span]) => [name, +(span.end - span.start).toFixed(2)])) };
}

async function functional() {
  await launch('functional');
  await explorerOperations();
  await symlinks();
  await externalChanges();
  await permissions();
  check('multi_root_operations', ['explorer_move_between_roots', 'explorer_copy_between_roots', 'symlinked_workspace_root_save'].every(name => result.checks[name]));
  await makeDirtySession();
  assert.equal(await disk(sessionFiles.restart), 'Restart baseline\n');
  await close('before graceful restart');
  assert.equal(await disk(sessionFiles.restart), 'Restart baseline\n');
  assert.equal(await disk(sessionFiles.second), 'Second root baseline\n');

  await launch('after graceful restart');
  await assertRestored('graceful', [['restart.txt', 'Unsaved restart edit'], ['second-root.txt', 'Unsaved second-root edit'], ['Untitled', 'Untitled unsaved note']]);
  check('graceful_restart_restores_unsaved_edits_across_roots');
  await quickOpen(sessionFiles.abrupt); await replaceEditor('Unsaved edit before abrupt exit\n');
  await page.locator('.tabs-container .tab.active.dirty').waitFor();
  await delay(4000); // working-copy backup delay
  const backups = await readdir(join(profile, 'Backups'), { recursive: true }).catch(() => []);
  result.observations.backupEntriesBeforeKill = backups.length;
  await killOwnedGroup('abrupt exit');
  assert.equal(await disk(sessionFiles.abrupt), 'Abrupt baseline\n');
  assert.equal(await disk(sessionFiles.restart), 'Restart baseline\n');

  await launch('after abrupt exit');
  await assertRestored('abrupt', [['abrupt.txt', 'Unsaved edit before abrupt exit'], ['restart.txt', 'Unsaved restart edit'],
    ['second-root.txt', 'Unsaved second-root edit'], ['Untitled', 'Untitled unsaved note']]);
  check('abrupt_exit_restores_unsaved_edits_across_roots');
  for (const [name, path, text] of [['abrupt.txt', sessionFiles.abrupt, 'Unsaved edit before abrupt exit\n'], ['restart.txt', sessionFiles.restart, 'Unsaved restart edit\n'],
    ['second-root.txt', sessionFiles.second, 'Unsaved second-root edit\n']]) {
    await page.locator('.tabs-container .tab').filter({ hasText: name }).first().click(); await save();
    await until(`restored ${name} saves`, async () => await disk(path) === text);
  }
  check('restored_edits_save_exact_bytes');
  await page.locator('.tabs-container .tab').filter({ hasText: 'Untitled' }).first().click();
  await command('File: Revert File'); await command('View: Close All Editors');
  await close('after restored save');

}

try {
  await prepare();
  if (!measureOnly) await functional();
  await measure();
  assert.deepEqual(result.errors, []);
  result.status = 'passed';
} catch (error) {
  result.status = 'failed'; result.error = `${step}: ${error.stack}`; process.exitCode = 1;
  await page?.screenshot({ path: join(directory, 'failure.png') }).catch(() => {});
  if (page && !page.isClosed()) await writeFile(join(directory, 'failure.txt'), await page.locator('body').innerText().catch(() => '')).catch(() => {});
} finally {
  await close('cleanup').catch(error => { result.cleanupError = String(error); result.status = 'failed'; process.exitCode = 1; });
  await restoreModes().catch(error => { result.permissionRestoreError = String(error); result.status = 'failed'; process.exitCode = 1; });
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, (key, value) => typeof value === 'bigint' ? String(value) : value, 2));
  console.log(JSON.stringify({ directory, status: result.status, error: result.error, checks: result.checks,
    watches: result.watches, measurements: result.measurements && { startup: result.measurements.startup,
      windows: Object.fromEntries(Object.entries(result.measurements.windows).map(([name, item]) => [name,
        { projectSyscalls: item.projectSyscalls, distinctProjectPaths: item.distinctProjectPathList, projectDirectoryListings: item.projectDirectoryListings,
          inotifyAddWatch: item.inotifyAddWatch, probeSyscalls: item.probeSyscalls, probesPerRootPerSecond: item.probesPerRootPerSecond, byCall: item.byCall, byRole: item.byRole }])) }, hostExits: result.hostExits }, null, 2));
}
