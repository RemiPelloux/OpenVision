import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { gzipSync } from 'node:zlib';
import { canaryNeedles, classifyDestination, clientHelloServerName, dnsAnswer, findCanaries,
  parseDnsQuery, payloadViews, splitEnvelopes, summarizeRecords } from './data-destinations.mjs';

const canary = { id: 'content', value: 'OVCANARY-7f3a-content', content: 'export const x = "OVCANARY-7f3a-content";\n' };
const envelope = (flags, data) => { const head = Buffer.alloc(5); head[0] = flags; head.writeUInt32BE(data.length, 1); return Buffer.concat([head, data]); };

test('finds canaries in gzip bodies and compressed Connect envelopes', () => {
  const needles = canaryNeedles([canary]);
  const gz = gzipSync(Buffer.from(`path=${canary.value}`));
  assert.ok(findCanaries(payloadViews(gz, { 'content-encoding': 'gzip' }), needles).some(hit => hit.form === 'utf8'));
  const framed = Buffer.concat([envelope(0, Buffer.from('noise')), envelope(1, gzipSync(Buffer.from(canary.value)))]);
  assert.equal(splitEnvelopes(framed).length, 2);
  const hits = findCanaries(payloadViews(framed, { 'connect-content-encoding': 'gzip' }), needles);
  assert.ok(hits.some(hit => hit.view === 'envelope:1:gzip'));
});

test('finds content digests and alternate text encodings', () => {
  const needles = canaryNeedles([canary]);
  const digest = createHash('sha256').update(canary.content).digest();
  assert.ok(findCanaries([{ view: 'raw', data: Buffer.concat([Buffer.from('h'), digest]) }], needles).some(hit => hit.form === 'sha256-raw'));
  assert.ok(findCanaries([{ view: 'raw', data: Buffer.from(canary.value, 'utf16le') }], needles).some(hit => hit.form === 'utf16le'));
  assert.deepEqual(findCanaries([{ view: 'raw', data: Buffer.from('unrelated') }], needles), []);
});

test('rejects malformed envelopes instead of misreading bodies', () => {
  assert.equal(splitEnvelopes(Buffer.from('{"json":true}')), undefined);
  assert.equal(splitEnvelopes(envelope(0, Buffer.from('abc')).subarray(0, 6)), undefined);
});

test('allows only configured providers and user-initiated destinations', () => {
  const options = { providers: ['127.0.0.1'], userInitiated: ['github.com'] };
  assert.equal(classifyDestination('127.0.0.1:4000', options).allowed, true);
  assert.equal(classifyDestination('github.com', options).category, 'user-initiated');
  assert.deepEqual(classifyDestination('repo42.cursor.sh', options), { category: 'original-hosted-service', allowed: false });
  assert.equal(classifyDestination('registry.npmjs.org', options).allowed, false);
  const summary = summarizeRecords([
    { host: 'repo42.cursor.sh', transport: 'direct-tls', phase: 'index', bytes: 10, canaries: [{ canary: 'content' }] },
    { host: '127.0.0.1', transport: 'provider', phase: 'agent', bytes: 5, canaries: [{ canary: 'content' }] },
  ], options);
  assert.equal(summary.requests, 2); assert.equal(summary.bytes, 15);
  assert.equal(summary.canaryLeaks.length, 1); assert.equal(summary.disallowed[0].host, 'repo42.cursor.sh');
});

test('DNS capture answers A queries locally and records the name', () => {
  const query = Buffer.concat([Buffer.from([0x12, 0x34, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0]),
    Buffer.from([4, ...Buffer.from('api2'), 6, ...Buffer.from('cursor'), 2, ...Buffer.from('sh'), 0, 0, 1, 0, 1])]);
  const parsed = parseDnsQuery(query);
  assert.deepEqual([parsed.name, parsed.type], ['api2.cursor.sh', 1]);
  const answer = dnsAnswer(query, parsed);
  assert.equal(answer.readUInt16BE(6), 1);
  assert.deepEqual([...answer.subarray(-4)], [198, 18, 0, 1]);
  assert.equal(dnsAnswer(query, { ...parsed, type: 28 }).readUInt16BE(6), 0);
});

test('reads SNI from a ClientHello and tolerates garbage', () => {
  const name = Buffer.from('repo42.cursor.sh');
  const sni = Buffer.concat([Buffer.from([0, 0]), Buffer.alloc(2), Buffer.alloc(2), Buffer.from([0]), Buffer.alloc(2), name]);
  sni.writeUInt16BE(name.length + 5, 2); sni.writeUInt16BE(name.length + 3, 4); sni.writeUInt16BE(name.length, 7);
  const extensions = Buffer.alloc(2); extensions.writeUInt16BE(sni.length);
  const body = Buffer.concat([Buffer.from([3, 3]), Buffer.alloc(32), Buffer.from([0]), Buffer.from([0, 2, 0x13, 1]),
    Buffer.from([1, 0]), extensions, sni]);
  const hello = Buffer.concat([Buffer.from([0x16, 3, 1, 0, 0, 1, 0, 0, 0]), body]);
  assert.equal(clientHelloServerName(hello), 'repo42.cursor.sh');
  assert.equal(clientHelloServerName(Buffer.from('GET / HTTP/1.1')), undefined);
});
