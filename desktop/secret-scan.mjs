import { createHash, randomBytes } from 'node:crypto';
import { open, readdir, lstat, readFile } from 'node:fs/promises';
import { join, relative } from 'node:path';
import { inflateRawSync, gunzipSync } from 'node:zlib';

// Release secret scanner (OV-1004). Scans logs, verifier profiles, packaged
// output and documentation for planted canary keys, credential-bearing
// Authorization headers, provider/platform tokens and private keys. Text is
// matched in UTF-8 and in UTF-16LE at both byte alignments, so Windows-style
// logs and Chromium/LevelDB records are covered. Any match fails unless its
// SHA-256 digest is allowlisted. A finding never carries the secret itself:
// only rule, location, digest and a masked preview.

// Planted canaries: verifiers use these as fixture API keys so a scan of their
// output proves the key never reached logs or profile plaintext.
export const canaryPrefix = 'sk-ovcanary-';
export const canaryKey = (bytes = randomBytes(16)) => `${canaryPrefix}${Buffer.from(bytes).toString('hex')}`;

// Ordered: the first rule that matches a span names it.
export const secretRules = [
  { id: 'canary', pattern: /sk-ovcanary-[0-9a-f]{32}/g },
  // A header alone is a constant in TLS/PGP code; a key has a base64 body.
  { id: 'private-key', pattern: /-----BEGIN (?:[A-Z0-9]+ )*PRIVATE KEY(?: BLOCK)?-----(?:\r?\n[\w-]+: [^\r\n]*)*\s*[A-Za-z0-9+/]{40,}/g },
  { id: 'authorization-header', pattern: /\bauthorization\b["']?\s*[:=]\s*["']?(?:bearer|basic|token|bot)\s+([A-Za-z0-9._~+/=-]{16,})/gi, value: 1 },
  { id: 'api-key-header', pattern: /\b(?:x-api-key|api-key|x-goog-api-key)\b["']?\s*[:=]\s*["']?([A-Za-z0-9._~+/=-]{20,})/gi, value: 1 },
  // Provider keys start at a token boundary, have a bounded length and a random
  // (mixed upper/lower/digit) body; identifiers such as "…-ask-question-…" do not.
  { id: 'anthropic-key', pattern: /(?<![A-Za-z0-9_-])sk-ant-[A-Za-z0-9_-]{20,200}(?![A-Za-z0-9_-])/g, random: true },
  { id: 'openai-key', pattern: /(?<![A-Za-z0-9_-])sk-(?:proj-|svcacct-|admin-)?[A-Za-z0-9_-]{32,200}(?![A-Za-z0-9_-])/g, random: true },
  { id: 'github-token', pattern: /\b(?:gh[pousr]_[A-Za-z0-9]{36,}|github_pat_[A-Za-z0-9_]{60,})/g },
  { id: 'gitlab-token', pattern: /\bglpat-[A-Za-z0-9_-]{20,}/g },
  { id: 'slack-token', pattern: /\bxox[abposr]-[A-Za-z0-9-]{10,}/g },
  { id: 'aws-access-key', pattern: /\b(?:AKIA|ASIA)[0-9A-Z]{16}\b/g },
  { id: 'google-api-key', pattern: /\bAIza[0-9A-Za-z_-]{35}/g },
  { id: 'jwt', pattern: /\beyJ[A-Za-z0-9_-]{10,}\.eyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{16,}/g },
];

// Values that only name a secret. Headers in docs and logs are written with
// these placeholders; they are not credentials.
const placeholder = /^(?:\[?redacted\]?|x{6,}|\*{3,}|<[^>]*>|\$\{?[A-Z_]+\}?|your[-_]?(?:api[-_]?)?key|fixture[-_a-z]*|example[-_a-z]*|placeholder|dummy|test[-_]?key)$/i;
const lowEntropy = value => new Set(value).size < 6;
const randomBody = value => /[A-Z]/.test(value) && /[a-z]/.test(value) && /[0-9]/.test(value);

export const digest = value => createHash('sha256').update(value, 'utf8').digest('hex');
export const mask = value => `${value.slice(0, Math.min(6, Math.floor(value.length / 4)))}…(${value.length} chars)`;

// Matches in one decoded text. `toOffset` maps a character index to a byte offset.
export function matchText(text, encoding, toOffset = index => index) {
  const findings = [], covered = [];
  for (const rule of secretRules) {
    rule.pattern.lastIndex = 0;
    for (const match of text.matchAll(rule.pattern)) {
      const value = rule.value ? match[rule.value] : match[0];
      if (rule.value && (placeholder.test(value) || lowEntropy(value))) continue;
      if (rule.random && !randomBody(value)) continue;
      const start = match.index, end = start + match[0].length;
      if (covered.some(([a, b]) => start < b && end > a)) continue;
      covered.push([start, end]);
      findings.push({ rule: rule.id, encoding, offset: toOffset(start), sha256: digest(value), preview: mask(value) });
    }
  }
  return findings;
}

// UTF-16LE text of whole code units from `offset`. Decoding an odd-length
// subarray aborts Node 24.18.0 ("double free or corruption"), observed on a
// 5866-byte file in the Linux package, so only an even length is decoded.
const utf16le = (buffer, offset) => buffer.subarray(offset, offset + ((buffer.length - offset) & ~1)).toString('utf16le');

// Every decoding of one byte window. UTF-16LE is decoded at offsets 0 and 1 so a
// string starting at an odd byte is still found.
export function matchBytes(buffer, base = 0) {
  const text = buffer.toString('utf8');
  return [
    ...matchText(text, 'utf8', index => base + Buffer.byteLength(text.slice(0, index))),
    ...matchText(utf16le(buffer, 0), 'utf16le', index => base + index * 2),
    ...matchText(utf16le(buffer, 1), 'utf16le', index => base + 1 + index * 2),
  ];
}

const chunkSize = 8 * 1024 * 1024, overlap = 8192;
// Streams a file in overlapping windows; a match is reported once, by the
// window it starts in.
export async function scanFile(path) {
  const handle = await open(path, 'r'), findings = [], seen = new Set();
  try {
    const { size } = await handle.stat();
    for (let position = 0; position < size; position += chunkSize) {
      const length = Math.min(chunkSize + overlap, size - position);
      const buffer = Buffer.allocUnsafe(length);
      const { bytesRead } = await handle.read(buffer, 0, length, position);
      for (const finding of matchBytes(buffer.subarray(0, bytesRead), position)) {
        const key = `${finding.rule}:${finding.encoding}:${finding.offset}`;
        if (!seen.has(key)) { seen.add(key); findings.push(finding); }
      }
    }
  } finally { await handle.close(); }
  return findings;
}

// Minimal ZIP reader (central directory; stored and deflated entries) so
// .zip/.vsix packages are inspected, not only their compressed bytes.
export function zipEntries(buffer) {
  let end = -1;
  for (let index = buffer.length - 22; index >= Math.max(0, buffer.length - 65557); index--)
    if (buffer.readUInt32LE(index) === 0x06054b50) { end = index; break; }
  if (end < 0) throw Error('ZIP end of central directory not found');
  const count = buffer.readUInt16LE(end + 10);
  let cursor = buffer.readUInt32LE(end + 16);
  const entries = [];
  for (let index = 0; index < count; index++) {
    if (buffer.readUInt32LE(cursor) !== 0x02014b50) throw Error('Invalid ZIP central directory');
    const method = buffer.readUInt16LE(cursor + 10), compressed = buffer.readUInt32LE(cursor + 20);
    const nameLength = buffer.readUInt16LE(cursor + 28), extra = buffer.readUInt16LE(cursor + 30), comment = buffer.readUInt16LE(cursor + 32);
    const local = buffer.readUInt32LE(cursor + 42), name = buffer.toString('utf8', cursor + 46, cursor + 46 + nameLength);
    cursor += 46 + nameLength + extra + comment;
    if (name.endsWith('/')) continue;
    const dataStart = local + 30 + buffer.readUInt16LE(local + 26) + buffer.readUInt16LE(local + 28);
    const data = buffer.subarray(dataStart, dataStart + compressed);
    entries.push({ name, method, data: () => method === 0 ? data : method === 8 ? inflateRawSync(data) : undefined });
  }
  return entries;
}

const archiveLimit = 256 * 1024 * 1024;
async function scanArchive(path, findings, opaque) {
  const buffer = await readFile(path);
  if (/\.(?:gz|tgz)$/i.test(path)) {
    for (const finding of matchBytes(gunzipSync(buffer))) findings.push({ ...finding, member: '(gunzip)' });
    return;
  }
  for (const entry of zipEntries(buffer)) {
    const data = entry.data();
    if (!data) { opaque.push(`${path}!${entry.name}`); continue; }
    for (const finding of matchBytes(data)) findings.push({ ...finding, member: entry.name });
  }
}

// Directory names never descended into: dependency trees are vendored inputs,
// not OpenVision output, and .git holds history rather than release content.
const skippedDirectories = new Set(['.git', 'node_modules']);

export async function scanPaths(targets, { root = process.cwd(), allowlist = [] } = {}) {
  const allowed = new Map(allowlist.map(entry => [entry.sha256, entry]));
  const report = { files: 0, bytes: 0, archives: 0, opaque: [], missing: [], findings: [], allowed: [], errors: [] };
  const visit = async path => {
    let stat;
    try { stat = await lstat(path); } catch (error) { if (error.code === 'ENOENT') { report.missing.push(relative(root, path) || path); return; } throw error; }
    if (stat.isSymbolicLink()) return;
    if (stat.isDirectory()) {
      for (const entry of (await readdir(path)).sort()) if (!skippedDirectories.has(entry)) await visit(join(path, entry));
      return;
    }
    if (!stat.isFile()) return;
    report.files++; report.bytes += stat.size;
    const findings = [];
    try {
      findings.push(...await scanFile(path));
      if (/\.(?:zip|vsix|gz|tgz)$/i.test(path)) {
        if (stat.size > archiveLimit) report.opaque.push(relative(root, path));
        else { report.archives++; await scanArchive(path, findings, report.opaque); }
      }
    } catch (error) { report.errors.push({ path: relative(root, path), error: error.code ?? error.message }); }
    for (const finding of findings) {
      const entry = { path: relative(root, path), ...finding };
      if (allowed.has(finding.sha256)) report.allowed.push({ ...entry, reason: allowed.get(finding.sha256).reason });
      else report.findings.push(entry);
    }
  };
  for (const target of targets) await visit(target);
  return report;
}

export function validateAllowlist(entries) {
  if (!Array.isArray(entries)) throw Error('Secret allowlist must be an array');
  for (const entry of entries) {
    if (!/^[0-9a-f]{64}$/.test(entry?.sha256 ?? '')) throw Error('Each allowlist entry needs a SHA-256 digest of the matched value');
    if (!secretRules.some(rule => rule.id === entry.rule)) throw Error(`Unknown allowlist rule ${entry.rule}`);
    if (entry.rule === 'canary') throw Error('Canary keys can never be allowlisted');
    if (typeof entry.reason !== 'string' || entry.reason.trim().length < 10) throw Error('Each allowlist entry needs a reason');
  }
  return entries;
}
