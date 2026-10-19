import { test } from 'node:test';
import assert from 'node:assert/strict';
import { aggregate, inventoryPathFor, mappedPaths, parseTraceLine, phaseAt, processTree } from './native-loaded.mjs';

const roots = { host: '/r/electron-host', app: '/r/source/app', executable: 'openvision' };

test('runtime paths map back to inventory paths', () => {
  assert.equal(inventoryPathFor('/r/electron-host/openvision', roots), 'usr/share/cursor/cursor');
  assert.equal(inventoryPathFor('/r/electron-host/libffmpeg.so', roots), 'usr/share/cursor/libffmpeg.so');
  assert.equal(inventoryPathFor('/r/source/app/node_modules/x/a.node', roots), 'usr/share/cursor/resources/app/node_modules/x/a.node');
  assert.equal(inventoryPathFor('/r/electron-host/resources/app/node_modules/x/a.node', roots), 'usr/share/cursor/resources/app/node_modules/x/a.node');
  assert.equal(inventoryPathFor('/usr/lib/libc.so.6', roots), null);
  assert.equal(inventoryPathFor('relative.node', roots), null);
});

test('maps lines keep file-backed mappings only', () => {
  const maps = ['7f00-7f01 r-xp 00000000 08:01 1234 /r/source/app/a.node', '7f01-7f02 rw-p 00000000 00:00 0 [heap]',
    '7f02-7f03 r--p 00001000 08:01 1234 /r/source/app/a.node', '7f03-7f04 r--p 00000000 08:01 99 /tmp/x (deleted)'].join('\n');
  assert.deepEqual(mappedPaths(maps), ['/r/source/app/a.node', '/tmp/x (deleted)']);
});

test('strace -ff lines parse into exec, open and clone events', () => {
  assert.deepEqual(parseTraceLine('1700000000.100000 execve("/r/source/app/node_modules/@vscode/ripgrep/bin/rg", ["/r/x/rg", "--files", "--hidden"], 0x7ffd /* 30 vars */) = 0', 7),
    { tid: 7, at: 1700000000.1, call: 'execve', result: 0, path: '/r/source/app/node_modules/@vscode/ripgrep/bin/rg', argv: ['/r/x/rg', '--files', '--hidden'] });
  assert.equal(parseTraceLine('1700000000.2 openat(AT_FDCWD, "/r/source/app/a\\x20b.wasm", O_RDONLY|O_CLOEXEC) = 33', 8).path, '/r/source/app/a b.wasm');
  assert.deepEqual(parseTraceLine('1700000000.6 execve("/bin/sh", ["sh", "-c", "printf \\33[0m\\t\\"x\\" \\303\\251"], 0x1 /* 1 var */) = 0', 9).argv,
    ['sh', '-c', 'printf \x1b[0m\t"x" é']);
  assert.deepEqual(parseTraceLine('1700000000.3 clone3({flags=CLONE_VM|CLONE_FS|CLONE_THREAD|CLONE_SIGHAND, exit_signal=0}, 88) = 12', 8),
    { tid: 8, at: 1700000000.3, call: 'clone3', result: 12, child: 12, thread: true });
  assert.equal(parseTraceLine('1700000000.4 clone(child_stack=NULL, flags=SIGCHLD) = 13', 8).thread, false);
  assert.equal(parseTraceLine('1700000000.5 openat(AT_FDCWD, "/missing", O_RDONLY) = -1 ENOENT (No such file or directory)', 8), null);
  assert.equal(parseTraceLine('+++ exited with 0 +++', 8), null);
});

test('clone events resolve threads to processes and processes to parents', () => {
  const tree = processTree([{ tid: 10, at: 1, call: 'clone3', child: 11, thread: true }, { tid: 11, at: 2, call: 'clone', child: 20, thread: false },
    { tid: 20, at: 3, call: 'clone3', child: 21, thread: true }], [10]);
  assert.equal(tree.tgid(11), 10); assert.equal(tree.tgid(21), 20);
  assert.equal(tree.parent(20), 10); assert.equal(tree.parent(10), null);
  assert.equal(phaseAt([{ name: 'a', start: 0, end: 5 }, { name: 'b', start: 6, end: 9 }], 7), 'b');
  assert.equal(phaseAt([{ name: 'a', start: 0, end: 5 }], 5.5), 'between-phases');
});

test('aggregation records mapped, executed, read and never-loaded paths and unknown natives', () => {
  const inventory = [{ path: 'usr/share/cursor/resources/app/a.node', kind: 'elf', sha256: 'a' },
    { path: 'usr/share/cursor/resources/app/rg', kind: 'elf', sha256: 'b' }, { path: 'usr/share/cursor/resources/app/x.wasm', kind: 'wasm', sha256: 'c' },
    { path: 'usr/share/cursor/resources/app/unused.node', kind: 'elf', sha256: 'd' }];
  const phases = [{ name: 'startup', start: 0, end: 10 }, { name: 'search', start: 10, end: 20 }];
  const samples = [{ phase: 'startup', at: 5, processes: [{ pid: 100, role: 'main', maps: ['/r/source/app/a.node', '/r/source/app/extra.node'] }] },
    { phase: 'search', at: 15, processes: [{ pid: 100, role: 'main', maps: ['/r/source/app/a.node'] }, { pid: 200, role: 'extension-host', maps: ['/r/source/app/a.node'] }] }];
  const events = [{ tid: 200, at: 11, call: 'clone', child: 300, thread: false }, { tid: 300, at: 12, call: 'execve', path: '/r/source/app/rg' },
    { tid: 201, at: 13, call: 'openat', path: '/r/source/app/x.wasm' }, { tid: 300, at: 14, call: 'execve', path: '/r/source/app/run.sh' }, { tid: 200, at: 1, call: 'clone3', child: 201, thread: true }];
  const roles = new Map([[100, 'main'], [200, 'extension-host']]);
  const { records, unknown, scriptExecutions } = aggregate({ inventory, samples, events, phases, roles, roots, tree: processTree(events, [100]),
    isNative: path => !path.endsWith('.sh') });
  const by = Object.fromEntries(records.map(item => [item.path.split('/').at(-1), item]));
  assert.equal(by['a.node'].state, 'mapped');
  assert.deepEqual(by['a.node'].roles, ['extension-host', 'main']);
  assert.equal(by['a.node'].trigger, 'startup');
  assert.deepEqual(by['a.node'].frequency, { mappedSamples: 3, mappedProcesses: 2, executions: 0, opens: 0 });
  assert.equal(by.rg.state, 'executed');
  assert.deepEqual(by.rg.roles, ['child:rg']); assert.deepEqual(by.rg.parents, ['extension-host']); assert.equal(by.rg.trigger, 'search');
  assert.equal(by['x.wasm'].state, 'read'); assert.deepEqual(by['x.wasm'].roles, ['extension-host']);
  assert.equal(by['unused.node'].state, 'never-loaded'); assert.equal(by['unused.node'].trigger, null);
  assert.deepEqual(unknown, [{ path: 'usr/share/cursor/resources/app/extra.node', how: 'mapped' }]);
  assert.deepEqual(scriptExecutions, [{ path: 'usr/share/cursor/resources/app/run.sh', count: 1 }]);
});
