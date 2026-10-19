import assert from 'node:assert/strict';
import test from 'node:test';
import { mkdtemp, mkdir, rm, writeFile, symlink } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { deflateRawSync, gzipSync } from 'node:zlib';
import { canaryKey, digest, matchBytes, matchText, scanPaths, validateAllowlist, zipEntries } from './secret-scan.mjs';
import { storedZip } from './secret-scan-fixtures.mjs';

// Synthetic credentials are assembled at run time so this file never holds a
// literal that the scanner (or a repository secret scanner) would flag.
const repeat = (alphabet, length) => Array.from({ length }, (_, index) => alphabet[(index * 7 + 3) % alphabet.length]).join('');
const alnum = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const synthetic = {
  'anthropic-key': ['sk', 'ant', 'api03', repeat(alnum, 40)].join('-'),
  'openai-key': ['sk', 'proj', repeat(alnum, 48)].join('-'),
  'github-token': 'ghp' + '_' + repeat(alnum, 36),
  'gitlab-token': 'glpat' + '-' + repeat(alnum, 20),
  'slack-token': 'xox' + 'b-' + repeat('0123456789', 12) + '-' + repeat(alnum, 24),
  'aws-access-key': 'AKI' + 'A' + repeat('ABCDEFGHIJKLMNOPQRSTUVWXYZ234567', 16),
  'google-api-key': 'AI' + 'za' + repeat(alnum, 35),
  'jwt': ['eyJ' + repeat(alnum, 20), 'eyJ' + repeat(alnum, 30), repeat(alnum, 43)].join('.'),
  'private-key': '-----BEGIN ' + 'OPENSSH PRIVATE KEY-----\n' + repeat(alnum, 70),
};

async function withDirectory(run) {
  const directory = await mkdtemp(join(tmpdir(), 'openvision-secret-scan-test-'));
  try { return await run(directory); } finally { await rm(directory, { recursive: true, force: true }); }
}

test('canary keys are detected in UTF-8 and never echoed', () => {
  const key = canaryKey();
  const [finding] = matchText(`log line ${key} end`, 'utf8');
  assert.equal(finding.rule, 'canary');
  assert.equal(finding.offset, 9);
  assert.equal(finding.sha256, digest(key));
  assert.ok(!JSON.stringify(finding).includes(key.slice(8)));
});

test('every token rule detects its synthetic credential', () => {
  for (const [rule, value] of Object.entries(synthetic)) {
    const findings = matchText(`prefix ${value} suffix`, 'utf8');
    assert.equal(findings[0]?.rule, rule, `${rule}: ${JSON.stringify(findings)}`);
  }
});

test('authorization headers are detected in header, JSON and log forms', () => {
  const token = repeat(alnum, 32);
  for (const text of [`Authorization: Bearer ${token}`, `{"authorization":"Bearer ${token}"}`,
    `headers: { Authorization: 'Basic ${token}' }`, `x-api-key: ${token}`]) {
    const findings = matchText(text, 'utf8');
    assert.equal(findings.length, 1, text);
    assert.equal(findings[0].sha256, digest(token));
  }
});

test('placeholders and redacted values are not findings', () => {
  for (const text of ['Authorization: Bearer [redacted]', 'Authorization: Bearer <api-key>', 'Authorization: Bearer ${API_KEY}',
    'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx', 'x-api-key: ********************', 'Authorization: Bearer fixture-key',
    'sk-ovcanary-<32 hex>', 'apiKey: your-api-key']) assert.deepEqual(matchText(text, 'utf8'), [], text);
});

test('UTF-16LE text is detected at even and odd byte alignment', () => {
  const key = canaryKey();
  const even = Buffer.from(`key=${key}`, 'utf16le');
  assert.ok(matchBytes(even).some(finding => finding.rule === 'canary' && finding.encoding === 'utf16le' && finding.offset === 8));
  const odd = Buffer.concat([Buffer.from([0x41]), even]);
  assert.ok(matchBytes(odd).some(finding => finding.rule === 'canary' && finding.offset === 9));
});

test('ZIP entries (stored and deflated) and gzip members are inspected', async () => withDirectory(async directory => {
  const stored = canaryKey(), deflated = canaryKey(), gzipped = canaryKey();
  await writeFile(join(directory, 'a.zip'), storedZip('inner/a.txt', Buffer.from(stored), 0));
  await writeFile(join(directory, 'b.vsix'), storedZip('extension/b.js', deflateRawSync(Buffer.from(`k=${deflated}`)), 8));
  await writeFile(join(directory, 'c.log.gz'), gzipSync(Buffer.from(gzipped)));
  assert.deepEqual(zipEntries(storedZip('x', Buffer.from('y'), 0)).map(entry => entry.name), ['x']);
  const report = await scanPaths([directory], { root: directory });
  const digests = new Set(report.findings.map(finding => finding.sha256));
  for (const key of [stored, deflated, gzipped]) assert.ok(digests.has(digest(key)));
  assert.ok(report.findings.some(finding => finding.member === 'extension/b.js'));
  assert.equal(report.archives, 3);
}));

test('large files are scanned across window boundaries exactly once', async () => withDirectory(async directory => {
  const key = canaryKey(), buffer = Buffer.alloc(9 * 1024 * 1024, 0x2e);
  buffer.write(key, 8 * 1024 * 1024 - 5);
  await writeFile(join(directory, 'big.bin'), buffer);
  const report = await scanPaths([directory], { root: directory });
  assert.equal(report.findings.filter(finding => finding.rule === 'canary' && finding.encoding === 'utf8').length, 1);
  assert.equal(report.findings[0].offset, 8 * 1024 * 1024 - 5);
}));

test('allowlist suppresses by digest only, never canaries, and needs a reason', async () => withDirectory(async directory => {
  const token = synthetic['github-token'], key = canaryKey();
  await mkdir(join(directory, 'docs'));
  await writeFile(join(directory, 'docs/example.md'), `token ${token}\n`);
  await writeFile(join(directory, 'other.log'), `token ${token}\n${key}\n`);
  const allowlist = validateAllowlist([{ sha256: digest(token), rule: 'github-token', reason: 'Synthetic documentation example' }]);
  const report = await scanPaths([directory], { root: directory, allowlist });
  assert.equal(report.allowed.length, 2);
  assert.deepEqual(report.findings.map(finding => finding.rule), ['canary']);
  assert.throws(() => validateAllowlist([{ sha256: digest(key), rule: 'canary', reason: 'Should never be allowed' }]), /never be allowlisted/);
  assert.throws(() => validateAllowlist([{ sha256: 'abc', rule: 'jwt', reason: 'Short digest is rejected' }]), /SHA-256/);
  assert.throws(() => validateAllowlist([{ sha256: digest(token), rule: 'github-token' }]), /reason/);
}));

test('symbolic links, .git and node_modules are not followed; missing targets are reported', async () => withDirectory(async directory => {
  const key = canaryKey();
  await mkdir(join(directory, 'outside'));
  await writeFile(join(directory, 'outside/secret.log'), key);
  await mkdir(join(directory, 'scan/node_modules'), { recursive: true });
  await mkdir(join(directory, 'scan/.git'));
  await writeFile(join(directory, 'scan/node_modules/x.log'), key);
  await writeFile(join(directory, 'scan/.git/y'), key);
  await symlink(join(directory, 'outside'), join(directory, 'scan/link'));
  const report = await scanPaths([join(directory, 'scan'), join(directory, 'absent')], { root: directory });
  assert.deepEqual(report.findings, []);
  assert.deepEqual(report.missing, ['absent']);
}));

test('odd-length windows decode as UTF-16LE without aborting the process', () => {
  for (const length of [1, 2, 3, 5866, 5867]) {
    const buffer = Buffer.alloc(length, 0x41);
    assert.ok(Array.isArray(matchBytes(buffer)), `length ${length}`);
  }
  const key = canaryKey(), odd = Buffer.concat([Buffer.from([0x20]), Buffer.from(key, 'utf16le'), Buffer.from([0x21, 0x22])]);
  assert.ok(odd.length % 2 === 1 && matchBytes(odd).some(finding => finding.rule === 'canary' && finding.encoding === 'utf16le' && finding.offset === 1));
});

test('vendored identifiers, header constants and long binary runs are not provider keys', () => {
  for (const text of ['var x = "../agent/dist/actions/async-ask-question-completion-action-handler.js";',
    'pattern: /-----BEGIN ' + 'PGP PRIVATE KEY BLOCK-----[\\s\\S]*?-----END/', 'task-' + repeat(alnum, 64),
    'sk-' + repeat(alnum, 400), 'sk-' + 'a'.repeat(40)]) assert.deepEqual(matchText(text, 'utf8'), [], text);
  const armored = '-----BEGIN ' + 'PGP PRIVATE KEY BLOCK-----\nVersion: test\n\n' + repeat(alnum, 64);
  assert.equal(matchText(armored, 'utf8')[0]?.rule, 'private-key');
});
