import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import * as fs from 'node:fs';
import { createRequire } from 'node:module';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readableApp } from './recovered-source.mjs';
import { agentWriteHelper, agentWriteMarker, agentWriteTargets, durableAgentWriteHelper, durableHelper,
  preserveAgentWrites, previousAgentWriteMarker, staleTemporaryMs, agentTemporarySweep, agentTemporarySweepMarker,
  sweepAgentTemporariesOnStartup } from './agent-write-durability-customization.mjs';

const require = createRequire(import.meta.url);
const runner = fileURLToPath(new URL('./agent-write-faults.cjs', import.meta.url));
const posix = process.platform !== 'win32';
const workspaces = [];
const workspace = () => {
  const directory = fs.realpathSync(fs.mkdtempSync(join(tmpdir(), 'openvision-agent-write-')));
  workspaces.push(directory);
  return directory;
};
// Namespace mounts end with their process; only these owned directories remain.
test.after(() => { for (const directory of workspaces) fs.rmSync(directory, { recursive: true, force: true }); });

const recovered = Object.fromEntries(agentWriteTargets.map(target =>
  [target.id, fs.readFileSync(new URL(target.entry, readableApp), 'utf8')]));
const patched = Object.fromEntries(agentWriteTargets.map(target =>
  [target.id, preserveAgentWrites(recovered[target.id], target)]));
const modules = workspace();

// Package an extracted helper as CommonJS with the bindings its bundle
// supplies: fs/promises, fs and the symlink-refusal error class.
function helperModule(id, variant) {
  const target = agentWriteTargets.find(entry => entry.id === id);
  const { names, source: originalSource } = agentWriteHelper(recovered[id], target.shape);
  const source = variant === 'original' ? originalSource : durableAgentWriteHelper(patched[id]).source;
  const file = join(modules, `${id}-${variant}.cjs`);
  fs.writeFileSync(file, `'use strict';
const ${names.fsp} = require('node:fs/promises'), ${names.fs} = require('node:fs');
class ${names.refuse} extends Error {
  constructor(path, message) { super(message); this.name = 'SymlinkRefusedError'; this.path = path; }
}
${source}
module.exports = ${names.name};
`);
  return file;
}
// The daemon's original helper depends on module-level helpers; its body is the
// same recovered algorithm as the bundled copies, which serve as the control.
const files = { original: helperModule('agent-exec', 'original'),
  ...Object.fromEntries(agentWriteTargets.map(target => [target.id, helperModule(target.id, 'patched')])) };
const write = Object.fromEntries(Object.entries(files).map(([id, file]) => [id, require(file)]));
const temporaries = directory => fs.readdirSync(directory).filter(entry => entry.includes('.openvision-'));
const lines = output => output.trim().split('\n').filter(Boolean).map(line => JSON.parse(line));

test('all three recovered write helpers are replaced once with guarded, idempotent transforms', () => {
  for (const target of agentWriteTargets) {
    const text = patched[target.id];
    assert.equal(preserveAgentWrites(text, target), text, target.id);
    assert.equal(text.split(agentWriteMarker).length, 2, target.id);
    assert.ok(text.includes(target.caller) && text.includes(target.noSpace), target.id);
    const helper = agentWriteHelper(recovered[target.id], target.shape).source;
    const truncate = helper.match(/await (s|fd)\.truncate\(0\);/)[0];
    assert.throws(() => preserveAgentWrites(recovered[target.id].replace(truncate, truncate.replace('(0)', '(1)')), target),
      /Agent write helper contract changed/, target.id);
    assert.throws(() => preserveAgentWrites(recovered[target.id].replace(target.caller, `${target.caller} ${target.caller}`), target),
      /Agent write executor contract changed/, target.id);
    assert.throws(() => preserveAgentWrites(recovered[target.id].replace(target.noSpace, 'false'), target),
      /Agent write executor contract changed/, target.id);
  }
});

test('durable agent writes replace and create files without leaving temporaries', { skip: !posix && 'POSIX atomic path' }, async () => {
  for (const target of agentWriteTargets) {
    const directory = workspace(), path = join(directory, 'edit.js');
    fs.writeFileSync(path, 'before\n'); fs.chmodSync(path, 0o640);
    const inode = fs.statSync(path).ino;
    await write[target.id](path, Buffer.from('after\n'), { flush: true });
    assert.equal(fs.readFileSync(path, 'utf8'), 'after\n');
    assert.equal(fs.statSync(path).mode & 0o7777, 0o640);
    assert.notEqual(fs.statSync(path).ino, inode, 'POSIX writes replace the file by rename');
    await write[target.id](join(directory, 'created.js'), 'created\n', { flush: true });
    assert.equal(fs.readFileSync(join(directory, 'created.js'), 'utf8'), 'created\n');
    await write[target.id](join(directory, 'empty.js'), Buffer.alloc(0), { flush: true });
    assert.equal(fs.statSync(join(directory, 'empty.js')).size, 0);
    assert.deepEqual(temporaries(directory), [], target.id);
  }
});

test('durable agent writes retain symlink and non-regular refusals', { skip: !posix && 'POSIX symlinks' }, async () => {
  const directory = workspace(), outside = workspace();
  fs.writeFileSync(join(outside, 'secret.txt'), 'secret');
  fs.symlinkSync(join(outside, 'secret.txt'), join(directory, 'link.txt'));
  fs.symlinkSync(outside, join(directory, 'linked-dir'));
  fs.mkdirSync(join(directory, 'folder'));
  for (const id of Object.keys(write)) {
    await assert.rejects(write[id](join(directory, 'link.txt'), 'x'), { name: 'SymlinkRefusedError',
      message: /Refusing to write through a symlink/ }, id);
    await assert.rejects(write[id](join(directory, 'linked-dir/secret.txt'), 'x'), { name: 'SymlinkRefusedError',
      message: /symlinked parent/ }, id);
    await assert.rejects(write[id](join(directory, 'folder'), 'x'), id === 'original'
      ? /EISDIR|non-regular/ : { name: 'SymlinkRefusedError', message: /non-regular file/ }, id);
  }
  assert.equal(fs.readFileSync(join(outside, 'secret.txt'), 'utf8'), 'secret');
  assert.deepEqual(temporaries(directory), []);
});

test('hard-linked files keep in-place writes so every name sees the edit', { skip: !posix && 'POSIX hard links' }, async () => {
  for (const target of agentWriteTargets) {
    const directory = workspace(), path = join(directory, 'shared.txt'), link = join(directory, 'alias.txt');
    fs.writeFileSync(path, 'before'); fs.linkSync(path, link);
    await write[target.id](path, 'after', { flush: true });
    assert.equal(fs.readFileSync(link, 'utf8'), 'after', target.id);
    assert.equal(fs.statSync(path).ino, fs.statSync(link).ino, target.id);
  }
});

const prlimit = process.platform === 'linux' && spawnSync('prlimit', ['--version']).status === 0;
function underFileSizeLimit(id, scenario) {
  const directory = workspace();
  const child = spawnSync('prlimit', ['--fsize=65536', process.execPath, runner, files[id], scenario, directory],
    { encoding: 'utf8' });
  assert.equal(child.status, 0, child.stderr);
  return lines(child.stdout)[0];
}

test('real RLIMIT_FSIZE partial writes cannot destroy saved files', { skip: !prlimit && 'Linux prlimit unavailable' }, () => {
  // Control: the recovered helper truncates first and leaves a 64 KiB prefix.
  const control = underFileSizeLimit('original', 'efbig');
  assert.equal(control.attempt.code, 'EFBIG');
  assert.equal(control.afterFault.original, false);
  assert.equal(control.afterFault.partialReplacement, true);
  assert.equal(control.afterFault.size, 65536);
  assert.equal(underFileSizeLimit('original', 'efbig-new').afterFault.partialReplacement, true,
    'Recovered helper leaves a partial new file');
  for (const target of agentWriteTargets) {
    const fixed = underFileSizeLimit(target.id, 'efbig');
    assert.equal(fixed.attempt.code, 'EFBIG', target.id);
    assert.equal(fixed.afterFault.original, true, `${target.id}: saved bytes survive the failed write`);
    assert.deepEqual(fixed.temporariesAfterFault, []);
    const created = underFileSizeLimit(target.id, 'efbig-new');
    assert.equal(created.afterFault.exists, false, `${target.id}: a failed new file is not left partial`);
    assert.deepEqual(created.temporariesAfterFault, []);
    // Hard-linked files use the in-place path and restore their previous bytes.
    const linked = underFileSizeLimit(target.id, 'efbig-hardlink');
    assert.equal(linked.attempt.code, 'EFBIG');
    assert.equal(linked.attempt.restoreError, undefined);
    assert.equal(linked.afterFault.original, true, target.id);
    assert.equal(linked.linkAfterFault.original, true, target.id);
  }
});

const namespaces = process.platform === 'linux' && spawnSync('unshare', ['-rm', 'true']).status === 0;
// One disposable user+mount namespace per helper: a 128 KiB tmpfs produces a
// genuine kernel ENOSPC and a read-only bind view of a second tmpfs produces EROFS.
// The helper runs as the invoking uid through a nested user namespace.
function underVolumeFaults(id) {
  const directory = workspace(), full = join(directory, 'full'), backing = join(directory, 'backing');
  const readOnly = join(directory, 'ro');
  for (const path of [full, backing, readOnly]) fs.mkdirSync(path);
  const script = join(directory, 'faults.sh');
  const asUser = `unshare --map-user=${process.getuid()} --map-group=${process.getgid()} "${process.execPath}" "${runner}" "${files[id]}"`;
  fs.writeFileSync(script, ['set -e',
    `mount -t tmpfs -o size=128k openvision-full "${full}"`,
    `mount -t tmpfs -o size=128k openvision-backing "${backing}"`,
    `${asUser} prepare-erofs "${backing}"`,
    `mount --bind "${backing}" "${readOnly}"`,
    `mount -o remount,bind,ro "${readOnly}"`,
    `${asUser} enospc "${full}"`,
    `${asUser} read "${full}"`,
    `${asUser} erofs "${readOnly}"`, ''].join('\n'));
  const child = spawnSync('unshare', ['-rm', 'sh', script], { encoding: 'utf8' });
  assert.equal(child.status, 0, child.stderr);
  const [, enospc, restarted, erofs] = lines(child.stdout);
  return { enospc, restarted, erofs };
}

test('real full-volume and read-only faults keep saved bytes and recover after space is freed',
  { skip: !namespaces && 'Linux unprivileged user+mount namespaces unavailable' }, () => {
    const control = underVolumeFaults('original');
    assert.equal(control.enospc.attempt.code, 'ENOSPC');
    assert.equal(control.enospc.afterFault.original, false, 'Control reproduces saved-file loss');
    assert.equal(control.enospc.afterFault.partialReplacement, true);
    assert.equal(control.enospc.afterFreeing.original, false, 'Freeing space cannot recover the truncated bytes');
    assert.equal(control.erofs.attempt.code, 'EROFS');
    assert.equal(control.erofs.afterFault.original, true);
    for (const target of agentWriteTargets) {
      const fixed = underVolumeFaults(target.id);
      assert.equal(fixed.enospc.freeBytes, 0, target.id);
      assert.equal(fixed.enospc.attempt.code, 'ENOSPC', target.id);
      assert.equal(fixed.enospc.afterFault.original, true, `${target.id}: saved bytes survive ENOSPC`);
      assert.deepEqual(fixed.enospc.temporariesAfterFault, []);
      assert.equal(fixed.enospc.retry.ok, true, `${target.id}: the same write succeeds after space is freed`);
      assert.equal(fixed.enospc.afterRetry.replacement, true);
      assert.deepEqual(fixed.enospc.temporariesAfterRetry, []);
      assert.equal(fixed.restarted.state.replacement, true, 'A new process reads the complete replacement');
      assert.equal(fixed.erofs.attempt.code, 'EROFS', target.id);
      assert.equal(fixed.erofs.afterFault.original, true);
      assert.deepEqual(fixed.erofs.temporariesAfterFault, []);
    }
  });

test('v1 durable helpers from earlier builds upgrade exactly to the current helper', () => {
  for (const target of agentWriteTargets) {
    const text = recovered[target.id], { node, names } = agentWriteHelper(text, target.shape);
    const v1 = text.slice(0, node.start) + durableHelper(names, 1) + text.slice(node.end);
    assert.ok(v1.includes(previousAgentWriteMarker) && !v1.includes('ovSweep'), target.id);
    assert.equal(preserveAgentWrites(v1, target), patched[target.id], target.id);
    assert.throws(() => preserveAgentWrites(v1.replace('ovOffset += ovWritten;', 'ovOffset += ovWritten + 0;'), target),
      /v1 contract changed/, target.id);
  }
});

test('later writes remove stale temporaries left by an interrupted writer', { skip: !posix && 'POSIX atomic path' }, async () => {
  for (const target of agentWriteTargets) {
    const directory = workspace(), path = join(directory, 'edit.js');
    fs.writeFileSync(path, 'before\n');
    const uuid = index => `0000000${index}-1111-2222-3333-444444444444`;
    const stale = join(directory, `.edit.js.openvision-${uuid(1)}.tmp`);
    const recent = join(directory, `.edit.js.openvision-${uuid(2)}.tmp`);
    const otherTarget = join(directory, `.other.js.openvision-${uuid(3)}.tmp`);
    const foreignName = join(directory, '.edit.js.openvision-user-notes.tmp');
    for (const file of [stale, recent, otherTarget, foreignName]) fs.writeFileSync(file, 'partial');
    const old = new Date(Date.now() - 2 * staleTemporaryMs);
    for (const file of [stale, otherTarget, foreignName]) fs.utimesSync(file, old, old);
    await write[target.id](path, 'after\n', { flush: true });
    assert.equal(fs.readFileSync(path, 'utf8'), 'after\n');
    assert.equal(fs.existsSync(stale), false, `${target.id}: stale sibling removed`);
    assert.equal(fs.existsSync(recent), true, `${target.id}: a recent temporary may belong to a live writer`);
    assert.equal(fs.existsSync(otherTarget), true, `${target.id}: other targets are not swept`);
    assert.equal(fs.existsSync(foreignName), true, `${target.id}: only the exact generated pattern is swept`);
  }
});

// Startup sweep for orphans of files that are never written again.
function sweeper(limits) {
  const file = join(modules, `sweep-${limits ? 'limited' : 'default'}.cjs`);
  fs.writeFileSync(file, `'use strict';\n${agentTemporarySweep(limits)}\nmodule.exports = openvisionSweepAgentTemporaries;\n`);
  return require(file);
}

test('startup sweep removes only aged exact temporaries inside open roots', { skip: !posix && 'POSIX atomic path' }, async () => {
  const root = workspace(), outside = workspace(), uuid = '0123abcd-0123-4567-89ab-0123456789ab';
  const aged = new Date(Date.now() - 2 * staleTemporaryMs);
  const make = (path, time = aged) => { fs.mkdirSync(join(path, '..'), { recursive: true }); fs.writeFileSync(path, 'partial'); fs.utimesSync(path, time, time); return path; };
  const stale = [make(join(root, `.a.js.openvision-${uuid}.tmp`)), make(join(root, 'src/deep', `.b.md.openvision-${uuid}.tmp`))];
  const kept = [
    make(join(root, `.c.js.openvision-${uuid}.tmp`), new Date()), // a live writer may own it
    make(join(root, `.c.js.openvision-not-a-uuid.tmp`)), make(join(root, `c.js.openvision-${uuid}.tmp`)),
    make(join(root, `.c.js.openvision-${uuid.toUpperCase()}.tmp`)), make(join(root, 'node_modules', `.d.openvision-${uuid}.tmp`)),
    make(join(root, '.git', `.e.openvision-${uuid}.tmp`)), make(join(outside, `.f.openvision-${uuid}.tmp`)),
  ];
  fs.mkdirSync(join(root, `.g.openvision-${uuid}.tmp`)); // directories are never removed
  fs.symlinkSync(outside, join(root, 'linked')); // symlinked directories are not followed
  const sweep = sweeper();
  const result = await sweep([root, 'relative/path', undefined]);
  assert.deepEqual(result.removed.sort(), stale.sort());
  assert.equal(result.truncated, false);
  for (const path of stale) assert.equal(fs.existsSync(path), false);
  for (const path of kept) assert.equal(fs.existsSync(path), true, path);
  assert.equal(fs.statSync(join(root, `.g.openvision-${uuid}.tmp`)).isDirectory(), true);
  assert.deepEqual((await sweep([join(root, 'missing')])).removed, []);
});

test('startup sweep is bounded by directories and entries', { skip: !posix && 'POSIX atomic path' }, async () => {
  const root = workspace(), uuid = '0123abcd-0123-4567-89ab-0123456789ab', aged = new Date(Date.now() - 2 * staleTemporaryMs);
  for (let index = 0; index < 5; index++) {
    const path = join(root, `d${index}`, `.x.openvision-${uuid}.tmp`);
    fs.mkdirSync(join(root, `d${index}`)); fs.writeFileSync(path, ''); fs.utimesSync(path, aged, aged);
  }
  const limited = await sweeper({ directories: 3, entries: 1000, depth: 32 })([root]);
  assert.equal(limited.truncated, true); assert.equal(limited.directories, 3); assert.equal(limited.removed.length, 2);
  const entries = await sweeper({ directories: 1000, entries: 4, depth: 32 })([root]);
  assert.equal(entries.truncated, true); assert.ok(entries.entries <= 5);
});

test('startup sweep is installed once into Agent execution activation and fails closed on drift', () => {
  const text = patched['agent-exec'], swept = sweepAgentTemporariesOnStartup(text);
  assert.equal(swept.split(agentTemporarySweepMarker).length, 2);
  assert.equal(sweepAgentTemporariesOnStartup(swept), swept);
  assert.match(swept, /async function \$l\(e\) \{\n      setTimeout\(\(\) => openvisionSweepAgentTemporaries\(\(G\.workspace\.workspaceFolders/);
  assert.throws(() => sweepAgentTemporariesOnStartup(recovered['agent-exec']), /activation contract/);
  assert.throws(() => sweepAgentTemporariesOnStartup(text.replace('async function $l(e) {', 'async function $m(e) {')), /activation contract/);
});
