import assert from 'node:assert/strict';
import test from 'node:test';
import { inventoryAddons, libraryScope, mappedLibraries, processRole, tgidOf, threadGroups } from './addon-inventory.mjs';

test('maps parsing keeps .node and .so file mappings once, including replaced files', () => {
  const maps = [
    '7f00-7f01 r--p 00000000 08:01 11 /app/extensions/x/node_modules/a/file_service.linux-x64-gnu.node',
    '7f01-7f02 r-xp 00001000 08:01 11 /app/extensions/x/node_modules/a/file_service.linux-x64-gnu.node',
    '7f02-7f03 r-xp 00000000 08:01 12 /usr/lib/x86_64-linux-gnu/libc.so.6',
    '7f03-7f04 r-xp 00000000 08:01 13 /app/libffmpeg.so',
    '7f04-7f05 r-xp 00000000 08:01 14 /tmp/run/ext/native/addon.node (deleted)',
    '7f05-7f06 rw-p 00000000 00:00 0 [heap]',
    '7f06-7f07 r--p 00000000 08:01 15 /app/resources/app/out/main.js',
  ].join('\n');
  assert.deepEqual(mappedLibraries(maps), ['/app/extensions/x/node_modules/a/file_service.linux-x64-gnu.node',
    '/app/libffmpeg.so', '/tmp/run/ext/native/addon.node', '/usr/lib/x86_64-linux-gnu/libc.so.6']);
});

test('scope separates the shipped tree, run-written files and the system', () => {
  assert.equal(libraryScope('/app/x.node', { appRoot: '/app', runDirectory: '/run' }), 'bundled');
  assert.equal(libraryScope('/appx/x.node', { appRoot: '/app', runDirectory: '/run' }), 'system');
  assert.equal(libraryScope('/run/extensions/y.node', { appRoot: '/app', runDirectory: '/run' }), 'run');
});

test('roles come from the Chromium type, utility sub-type and executable', () => {
  assert.equal(processRole(['/opt/ov/openvision', '--type=utility', '--utility-sub-type=node.mojom.NodeService'], 'openvision'),
    'utility:node.mojom.NodeService:openvision');
  assert.equal(processRole(['/opt/ov/openvision', '/project'], 'openvision'), 'openvision');
  assert.equal(processRole(['/opt/ov/openvision --type=utility --utility-sub-type=node.mojom.NodeService --lang=en-US'], 'openvision'),
    'utility:node.mojom.NodeService:openvision');
  assert.equal(processRole(['/usr/bin/node', 'child.mjs'], 'MainThread'), 'node (MainThread)');
});

test('strace thread ids resolve to their thread group, across split clone records', () => {
  const trace = [
    '100 execve("/opt/ov/openvision", ["openvision"], 0x1 /* 1 vars */) = 0',
    '100 clone3({flags=CLONE_VM|CLONE_FS|CLONE_FILES|CLONE_SIGHAND|CLONE_THREAD|CLONE_SYSVSEM, child_tid=0x1}, 88 <unfinished ...>',
    '101 connect(5, {sa_family=AF_INET, sin_port=htons(443), sin_addr=inet_addr("198.18.0.1")}, 16) = -1 EINPROGRESS',
    '100 <... clone3 resumed> => {parent_tid=[101]}, 88) = 101',
    '101 clone3({flags=CLONE_VM|CLONE_THREAD|CLONE_SIGHAND, child_tid=0x2}, 88) = 102',
    '100 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x3) = 200',
    '200 clone3({flags=CLONE_VM|CLONE_THREAD, child_tid=0x4}, 88 <unfinished ...>',
    '200 <... clone3 resumed> => {parent_tid=[201]}, 88) = 201',
    '100 vfork() = 300',
  ].join('\n');
  const groups = threadGroups(trace);
  assert.equal(tgidOf(groups, 101), 100);
  assert.equal(tgidOf(groups, 102), 100);
  assert.equal(tgidOf(groups, 200), 200, 'a forked child is its own process');
  assert.equal(tgidOf(groups, 201), 200);
  assert.equal(tgidOf(groups, 300), 300);
  assert.equal(tgidOf(groups, 999), 999);
});

test('inventory hashes every addon and fails only an unknown addon with a direct connect', () => {
  const processes = new Map([
    [10, { role: 'utility:node.mojom.NodeService', libraries: ['/app/ext/fs.node', '/usr/lib/libc.so.6'] }],
    [11, { role: 'openvision', libraries: ['/app/native-keymap.node', '/usr/lib/libc.so.6'] }],
    [12, { role: 'node', libraries: ['/run/extensions/x/addon.node'] }],
  ]);
  const hashes = new Map([['/app/ext/fs.node', 'aa'], ['/app/native-keymap.node', 'bb'], ['/run/extensions/x/addon.node', 'cc']]);
  const known = [{ path: 'ext/fs.node', sha256: 'aa' }, { path: 'native-keymap.node', sha256: 'bb' }];
  const clean = inventoryAddons({ processes, hashes, known, directPids: [], appRoot: '/app', runDirectory: '/run' });
  assert.equal(clean.addons.length, 3);
  assert.equal(clean.systemLibraryMappings, 2);
  assert.deepEqual(clean.unknown, ['/run/extensions/x/addon.node']);
  assert.deepEqual(clean.checks, { addonsInventoried: true, noAddonDirectSockets: true });

  const knownDirect = inventoryAddons({ processes, hashes, known, directPids: [10], appRoot: '/app', runDirectory: '/run' });
  assert.equal(knownDirect.checks.noAddonDirectSockets, true);
  assert.deepEqual(knownDirect.knownWithDirectSockets.map(row => row.path), ['/app/ext/fs.node']);

  const unknownDirect = inventoryAddons({ processes, hashes, known, directPids: [12], appRoot: '/app', runDirectory: '/run' });
  assert.equal(unknownDirect.checks.noAddonDirectSockets, false);
  assert.deepEqual(unknownDirect.unknownWithDirectSockets, [{ path: '/run/extensions/x/addon.node', roles: ['node'], directConnectPids: [12] }]);

  const drifted = inventoryAddons({ processes, hashes: new Map([...hashes, ['/app/ext/fs.node', 'changed']]), known, directPids: [10],
    appRoot: '/app', runDirectory: '/run' });
  assert.equal(drifted.checks.noAddonDirectSockets, false, 'a changed digest is not a known addon');

  const unhashed = inventoryAddons({ processes, hashes: new Map(), known, appRoot: '/app', runDirectory: '/run' });
  assert.equal(unhashed.checks.addonsInventoried, false);
  assert.equal(inventoryAddons({ processes: new Map(), hashes, known }).checks.addonsInventoried, false);
});
