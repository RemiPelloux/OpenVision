import test from 'node:test';
import assert from 'node:assert/strict';
import { connect } from 'node:net';
import { get } from 'node:http';
import { parseSyscallTrace, trafficConnects, parseProcNet, classifyDestination, createLoopbackProxy,
  isLoopbackHost } from './network-capture.mjs';

const trace = [
  '100 1792178615.687000 connect(3<UNIX-STREAM:[1]>, {sa_family=AF_UNIX, sun_path="/run/systemd/resolve/io.systemd.Resolve"}, 42) = 0',
  '100 1792178615.688000 sendto(3<UNIX-STREAM:[1->2]>, "{\\"method\\":\\"io.systemd.Resolve.ResolveHostname\\",\\"parameters\\":{\\"name\\":\\"registry.npmjs.org\\",\\"flags\\":0}}\\0", 90, MSG_DONTWAIT|MSG_NOSIGNAL, NULL, 0) = 90',
  '100 1792178615.689000 connect(4<UDPv6:[3]>, {sa_family=AF_INET6, sin6_port=htons(0), sin6_flowinfo=htonl(0), inet_pton(AF_INET6, "2606:4700::6810:422", &sin6_addr), sin6_scope_id=0}, 28) = 0',
  '101 1792178615.690000 connect(5<UDP:[4]>, {sa_family=AF_INET, sin_port=htons(443), sin_addr=inet_addr("8.8.8.8")}, 16) = 0',
  '102 1792178615.691000 connect(6<TCP:[5]>, {sa_family=AF_INET, sin_port=htons(443), sin_addr=inet_addr("104.16.0.34")}, 16) = -1 EINPROGRESS (Operation now in progress)',
  '103 1792178615.692000 connect(7<TCP:[6]>, {sa_family=AF_INET, sin_port=htons(8080), sin_addr=inet_addr("127.0.0.1")}, 16) = 0',
  '104 1792178615.693000 connect(8<UDP:[7]>, {sa_family=AF_INET, sin_port=htons(53), sin_addr=inet_addr("192.0.2.1")}, 16) = 0',
  '104 1792178615.694000 sendto(8<UDP:[10.0.0.2:5000->192.0.2.1:53]>, "x", 1, 0, NULL, 0) = 1',
].join('\n');

test('syscall trace separates resolver queries, probes and traffic', () => {
  const parsed = parseSyscallTrace(trace);
  assert.deepEqual(parsed.lookups.map(entry => entry.name), ['registry.npmjs.org']);
  assert.equal(parsed.connects.length, 6);
  assert.equal(parsed.connects[0].path, '/run/systemd/resolve/io.systemd.Resolve');
  assert.equal(parsed.connects[2].at, 1792178615690);
  assert.deepEqual(trafficConnects(parsed).map(entry => `${entry.transport} ${entry.ip}:${entry.port}`),
    ['tcp 104.16.0.34:443', 'udp 192.0.2.1:53']);
});

test('proc net tables decode IPv4 and IPv6 endpoints', () => {
  const v4 = parseProcNet('  sl  local_address rem_address   st tx_queue rx_queue tr tm->when retrnsmt   uid  timeout inode\n' +
    '   0: 0100007F:1F90 22000068:01BB 01 00000000:00000000 00:00000000 00000000  1000        0 12345 1\n', 'tcp');
  assert.deepEqual([v4[0].local, v4[0].remote, v4[0].inode], [{ ip: '127.0.0.1', port: 8080 }, { ip: '104.0.0.34', port: 443 }, '12345']);
  const v6 = parseProcNet('header\n   0: 00000000000000000000000001000000:1F90 0000000000000000FFFF00000100007F:0050 01 0 0 0 1000 0 777 1\n', 'tcp6');
  assert.equal(v6[0].local.ip, '::1');
  assert.equal(v6[0].remote.ip, '::ffff:127.0.0.1');
});

test('destinations are classified conservatively', () => {
  assert.equal(classifyDestination('127.0.0.1').class, 'loopback');
  assert.equal(classifyDestination('o1.ingest.sentry.io').class, 'telemetry');
  assert.equal(classifyDestination('api.example.test', { configured: ['example.test'] }).class, 'user-configured');
  assert.equal(classifyDestination('api2.cursor.sh').allowed, false);
  assert.ok(isLoopbackHost('[::1]') && !isLoopbackHost('example.com'));
});

test('owned proxy refuses non-loopback CONNECT and records it', async () => {
  const proxy = await createLoopbackProxy();
  try {
    const reply = await new Promise((resolve, reject) => {
      const socket = connect(proxy.port, '127.0.0.1', () => socket.write('CONNECT example.com:443 HTTP/1.1\r\nHost: example.com:443\r\n\r\n'));
      socket.once('data', data => { resolve(String(data)); socket.destroy(); }).once('error', reject);
    });
    assert.match(reply, /^HTTP\/1\.1 403/);
    const status = await new Promise(resolve => get({ host: '127.0.0.1', port: proxy.port, path: 'http://example.com/x' },
      response => { response.resume(); resolve(response.statusCode); }));
    assert.equal(status, 403);
    const upgrade = await new Promise((resolve, reject) => {
      const socket = connect(proxy.port, '127.0.0.1', () => socket.write('GET http://example.com/ws HTTP/1.1\r\nHost: example.com\r\nConnection: Upgrade\r\nUpgrade: websocket\r\n\r\n'));
      socket.once('data', data => { resolve(String(data)); socket.destroy(); }).once('error', reject);
    });
    assert.match(upgrade, /^HTTP\/1\.1 403/);
    assert.deepEqual(proxy.events.map(event => [event.method, event.host, event.allowed]),
      [['CONNECT', 'example.com', false], ['GET', 'example.com', false], ['UPGRADE GET', 'example.com', false]]);
  } finally { await proxy.close(); }
});
