// Project-data destination analysis for captured outbound traffic (OV-501).
// Pure functions: decoding, canary search and destination classification.
import { createHash } from 'node:crypto';
import { brotliDecompressSync, gunzipSync, inflateRawSync, inflateSync, zstdDecompressSync } from 'node:zlib';

// Decode a body by its content encoding. Unknown or failing encodings return
// undefined so the raw bytes are still searched.
export function decodeContent(buffer, encoding) {
  const name = String(encoding ?? '').trim().toLowerCase();
  if (!buffer?.length || !name || name === 'identity') return undefined;
  try {
    if (name === 'gzip' || name === 'x-gzip') return gunzipSync(buffer);
    if (name === 'br') return brotliDecompressSync(buffer);
    if (name === 'deflate') { try { return inflateSync(buffer); } catch { return inflateRawSync(buffer); } }
    if (name === 'zstd' && zstdDecompressSync) return zstdDecompressSync(buffer);
  } catch { return undefined; }
  return undefined;
}

// Connect, gRPC and gRPC-Web share the 5-byte envelope: flags (bit 0 =
// compressed) and a big-endian length. Return undefined when the body is not a
// complete envelope sequence.
export function splitEnvelopes(buffer) {
  const frames = [];
  let offset = 0;
  while (offset + 5 <= buffer.length) {
    const flags = buffer[offset], length = buffer.readUInt32BE(offset + 1);
    if (flags & ~0x83 || offset + 5 + length > buffer.length) return undefined;
    frames.push({ flags, data: buffer.subarray(offset + 5, offset + 5 + length) });
    offset += 5 + length;
  }
  return offset === buffer.length && frames.length ? frames : undefined;
}

// Every representation a canary could be found in: raw, content-decoded and
// each (decompressed) envelope frame. Protobuf strings/bytes are stored
// verbatim, so substring search over these views covers decoded protobuf.
export function payloadViews(body, headers = {}) {
  const views = [];
  if (!body?.length) return views;
  views.push({ view: 'raw', data: body });
  const decoded = decodeContent(body, headers['content-encoding']);
  if (decoded) views.push({ view: `content-encoding:${headers['content-encoding']}`, data: decoded });
  const frameEncoding = headers['connect-content-encoding'] ?? headers['grpc-encoding'] ?? 'gzip';
  for (const source of decoded ? [decoded, body] : [body]) {
    const frames = splitEnvelopes(source);
    if (!frames) continue;
    frames.forEach((frame, index) => {
      views.push({ view: `envelope:${index}`, data: frame.data });
      if (frame.flags & 1) {
        const inflated = decodeContent(frame.data, frameEncoding);
        if (inflated) views.push({ view: `envelope:${index}:${frameEncoding}`, data: inflated });
      }
    });
    break;
  }
  return views;
}

// Expand each canary into the encodings that would reveal it: UTF-8, UTF-16LE,
// base64, URL encoding, and content digests for file bodies.
export function canaryNeedles(canaries) {
  const needles = [];
  for (const canary of canaries) {
    const { id, value } = canary;
    const text = Buffer.from(value, 'utf8');
    needles.push({ id, form: 'utf8', bytes: text });
    needles.push({ id, form: 'utf16le', bytes: Buffer.from(value, 'utf16le') });
    needles.push({ id, form: 'base64', bytes: Buffer.from(text.toString('base64').replace(/=+$/, '')) });
    const encoded = encodeURIComponent(value);
    if (encoded !== value) needles.push({ id, form: 'url', bytes: Buffer.from(encoded) });
    if (canary.content !== undefined) {
      for (const algorithm of ['sha256', 'sha1', 'md5']) {
        const digest = createHash(algorithm).update(canary.content).digest();
        needles.push({ id, form: `${algorithm}-hex`, bytes: Buffer.from(digest.toString('hex')) });
        needles.push({ id, form: `${algorithm}-raw`, bytes: digest });
        needles.push({ id, form: `${algorithm}-base64`, bytes: Buffer.from(digest.toString('base64').replace(/=+$/, '')) });
      }
    }
  }
  return needles;
}

export function findCanaries(views, needles) {
  const hits = [];
  for (const { view, data } of views)
    for (const needle of needles)
      if (needle.bytes.length && data.includes(needle.bytes)) hits.push({ canary: needle.id, form: needle.form, view });
  return hits;
}

const cursorHosts = /(^|\.)(cursor\.sh|cursor\.com|cursorapi\.com|anysphere\.co)$/i;
const marketplaceHosts = /(^|\.)(open-vsx\.org|visualstudio\.com|vsassets\.io|gallerycdn\.vsassets\.io|vscode-cdn\.net)$/i;
const thirdPartyTelemetry = /(^|\.)(sentry\.io|statsig\.com|statsigapi\.net|featuregates\.org|segment\.io|datadoghq\.com|amplitude\.com)$/i;

// Classify one destination. `providers` lists the user-configured model
// provider origins; everything else is outside the allowed set.
export function classifyDestination(host, { providers = [], userInitiated = [] } = {}) {
  const name = String(host ?? '').replace(/^\[|\]$/g, '').replace(/:\d+$/, '').toLowerCase();
  if (providers.some(provider => provider.toLowerCase() === name))
    return { category: 'configured-model-provider', allowed: true };
  if (userInitiated.some(entry => entry.toLowerCase() === name))
    return { category: 'user-initiated', allowed: true };
  if (cursorHosts.test(name)) return { category: 'original-hosted-service', allowed: false };
  if (thirdPartyTelemetry.test(name)) return { category: 'third-party-telemetry', allowed: false };
  if (marketplaceHosts.test(name)) return { category: 'extension-marketplace', allowed: false };
  return { category: 'unclassified', allowed: false };
}

// Aggregate captured records by host and category; byte counts include the
// request line, headers and body as received after TLS termination, or raw
// socket bytes when the stream could not be decrypted.
export function summarizeRecords(records, options) {
  const hosts = new Map();
  for (const record of records) {
    const key = record.host ?? record.address ?? 'unknown';
    const entry = hosts.get(key) ?? { host: key, ...classifyDestination(key, options), requests: 0, bytes: 0,
      transports: new Set(), phases: new Set(), paths: new Set(), canaryHits: 0 };
    entry.requests += 1; entry.bytes += record.bytes ?? 0;
    entry.transports.add(record.transport); entry.phases.add(record.phase);
    if (record.path) entry.paths.add(record.path.split('?')[0]);
    entry.canaryHits += record.canaries?.length ?? 0;
    hosts.set(key, entry);
  }
  const rows = [...hosts.values()].map(entry => ({ ...entry, transports: [...entry.transports].sort(),
    phases: [...entry.phases].sort(), paths: [...entry.paths].sort() }))
    .sort((a, b) => b.requests - a.requests || a.host.localeCompare(b.host));
  return { destinations: rows, requests: records.length, bytes: records.reduce((sum, record) => sum + (record.bytes ?? 0), 0),
    disallowed: rows.filter(row => !row.allowed), canaryLeaks: records.filter(record => record.canaries?.length &&
      !classifyDestination(record.host ?? record.address, options).allowed) };
}

// Minimal DNS: parse a query and answer A with a fixed capture address. Other
// types receive an empty NOERROR answer so clients fall back to IPv4.
export function parseDnsQuery(message) {
  if (message.length < 12) return undefined;
  const id = message.readUInt16BE(0), count = message.readUInt16BE(4);
  if (count < 1) return undefined;
  const labels = [];
  let offset = 12;
  while (offset < message.length && message[offset] !== 0) {
    const length = message[offset];
    if (length & 0xc0 || offset + 1 + length > message.length) return undefined;
    labels.push(message.subarray(offset + 1, offset + 1 + length).toString('latin1'));
    offset += 1 + length;
  }
  if (offset + 5 > message.length) return undefined;
  const type = message.readUInt16BE(offset + 1);
  return { id, name: labels.join('.'), type, questionEnd: offset + 5 };
}

export function dnsAnswer(message, query, address = [198, 18, 0, 1]) {
  const question = message.subarray(12, query.questionEnd);
  const answer = query.type === 1;
  const header = Buffer.alloc(12);
  header.writeUInt16BE(query.id, 0);
  header.writeUInt16BE(0x8180 | (message.readUInt16BE(2) & 0x0100), 2);
  header.writeUInt16BE(1, 4); header.writeUInt16BE(answer ? 1 : 0, 6);
  if (!answer) return Buffer.concat([header, question]);
  const record = Buffer.from([0xc0, 0x0c, 0, 1, 0, 1, 0, 0, 0, 5, 0, 4, ...address]);
  return Buffer.concat([header, question, record]);
}

// Extract the SNI host name from a TLS ClientHello, for streams that bypass
// the decrypting proxy and fail certificate validation.
export function clientHelloServerName(buffer) {
  try {
    if (buffer[0] !== 0x16 || buffer[5] !== 0x01) return undefined;
    let offset = 9 + 2 + 32;
    offset += 1 + buffer[offset];
    offset += 2 + buffer.readUInt16BE(offset);
    offset += 1 + buffer[offset];
    const end = offset + 2 + buffer.readUInt16BE(offset);
    offset += 2;
    while (offset + 4 <= end) {
      const type = buffer.readUInt16BE(offset), length = buffer.readUInt16BE(offset + 2);
      if (type === 0) return buffer.subarray(offset + 9, offset + 4 + length).toString('latin1');
      offset += 4 + length;
    }
  } catch { return undefined; }
  return undefined;
}
