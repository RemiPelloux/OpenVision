import test from 'node:test';
import assert from 'node:assert/strict';
import { inflateSync, crc32 } from 'node:zlib';
import { encodePng, imageFixtures, sniff, imageParts } from './image-input-fixture.mjs';

test('PNG encoder writes valid chunks and pixel rows', () => {
  const png = encodePng(3, 2, (x, y) => [x, y, 7]);
  assert.equal(sniff(png), 'image/png');
  const chunks = [];
  for (let at = 8; at < png.length;) {
    const length = png.readUInt32BE(at), type = png.subarray(at + 4, at + 8).toString('ascii');
    const data = png.subarray(at + 8, at + 8 + length);
    assert.equal(png.readUInt32BE(at + 8 + length), crc32(png.subarray(at + 4, at + 8 + length)), `${type} CRC`);
    chunks.push([type, data]); at += 12 + length;
  }
  assert.deepEqual(chunks.map(([type]) => type), ['IHDR', 'IDAT', 'IEND']);
  assert.deepEqual([chunks[0][1].readUInt32BE(0), chunks[0][1].readUInt32BE(4)], [3, 2]);
  assert.deepEqual([...inflateSync(chunks[1][1])], [0, 0, 0, 7, 1, 0, 7, 2, 0, 7, 0, 0, 1, 7, 1, 1, 7, 2, 1, 7]);
});

test('fixtures cover the accepted formats, a corrupt file and an oversized file', () => {
  const files = imageFixtures();
  assert.deepEqual(Object.fromEntries(Object.entries(files).map(([name, bytes]) => [name, sniff(bytes)])), {
    'sample.png': 'image/png', 'sample.gif': 'image/gif', 'sample.webp': 'image/webp',
    'oversize.png': 'image/png', 'corrupt.png': 'image/png' });
  assert.ok(files['oversize.png'].length > 10 * 1024 * 1024, 'oversized fixture exceeds 10 MiB');
  assert.equal(files['sample.webp'].subarray(8, 12).toString('ascii'), 'WEBP');
});

test('request image parts are counted and sniffed', () => {
  const jpeg = Buffer.from([0xff, 0xd8, 0xff, 0xe0, 1, 2]).toString('base64');
  const payload = { messages: [
    { role: 'user', content: [{ type: 'image_url', image_url: { url: `data:image/png;base64,${jpeg}` } }] },
    { role: 'assistant', content: 'ok' },
    { role: 'user', content: [{ type: 'text', text: 'x' }, { type: 'image_url', image_url: { url: `data:image/jpeg;base64,${jpeg}` } }] },
  ] };
  assert.deepEqual(imageParts(payload), { latest: [{ declared: 'image/jpeg', sniffed: 'image/jpeg', bytes: 6 }], total: 2 });
  assert.deepEqual(imageParts({ messages: [{ role: 'user', content: 'plain' }] }), { latest: [], total: 0 });
});
