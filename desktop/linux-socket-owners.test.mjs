import assert from 'node:assert/strict';
import { createServer, connect } from 'node:net';
import test from 'node:test';
import { parseProcNetTcp, parseStat, socketOwners } from './linux-socket-owners.mjs';

test('parses /proc/net/tcp rows', () => {
  const text = '  sl  local_address rem_address   st tx_queue rx_queue tr tm->when retrnsmt   uid  timeout inode\n' +
    '   0: 0100007F:A2C4 0100007F:1F90 01 00000000:00000000 00:00000000 00000000  1000        0 424242 1 0 20 4 30 10 -1\n';
  assert.deepEqual(parseProcNetTcp(text), [{ localPort: 0xA2C4, remotePort: 0x1F90, state: '01', inode: 424242 }]);
});

test('parses stat fields after a command name containing spaces and parentheses', () => {
  assert.deepEqual(parseStat('123 (a (b) c) S 7 9 9 0'), { state: 'S', ppid: 7, pgrp: 9 });
  assert.equal(parseStat(''), undefined);
});

test('attributes a loopback client socket to this process', { skip: process.platform !== 'linux' }, async () => {
  const server = createServer(socket => socket.on('error', () => {}));
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const client = connect(server.address().port, '127.0.0.1');
  await new Promise(resolve => client.once('connect', resolve));
  try {
    const sockets = await socketOwners(server.address().port, process.pid);
    const own = sockets.find(socket => socket.localPort === client.localPort);
    assert.ok(own?.pids.includes(process.pid));
    assert.equal(own.hostDescendant, true);
    assert.equal((await socketOwners(server.address().port, 999999999)).find(socket => socket.localPort === client.localPort)?.hostDescendant, false);
  } finally { client.destroy(); await new Promise(resolve => server.close(resolve)); }
});
