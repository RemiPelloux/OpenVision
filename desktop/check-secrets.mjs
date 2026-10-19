import assert from 'node:assert/strict';
import { mkdir, mkdtemp, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { deflateRawSync, gzipSync } from 'node:zlib';
import { execFileSync } from 'node:child_process';
import { DatabaseSync } from 'node:sqlite';
import { canaryKey, scanPaths, validateAllowlist } from './secret-scan.mjs';
import { storedZip } from './secret-scan-fixtures.mjs';

// npm run check:secrets [-- [--allowlist <file>] [--self-test-only] [--require-targets] [path ...]]
// Default targets: logs/ (verifier output and disposable profiles), build/packages/
// (npm run package:linux output), docs/ and the top-level Markdown files.
// Exits 1 on any finding that is not allowlisted by digest, on a failed self-test,
// when a scanned file cannot be read, or (with --require-targets) when a target is
// missing, so a release scan cannot pass without packaged output.
const root = resolve(import.meta.dirname, '..');
const argv = process.argv.slice(2);
const option = name => { const index = argv.indexOf(name); return index < 0 ? undefined : argv.splice(index, 2)[1]; };
const flag = name => { const index = argv.indexOf(name); if (index >= 0) argv.splice(index, 1); return index >= 0; };
const allowlistPath = option('--allowlist') ?? join(root, 'config/secret-scan-allowlist.json');
const selfTestOnly = flag('--self-test-only'), requireAll = flag('--require-targets');
const topMarkdown = (await readdir(root)).filter(name => name.endsWith('.md')).map(name => join(root, name));
const targets = argv.length ? argv.map(path => resolve(path))
  : [join(root, 'logs'), join(root, 'build/packages'), join(root, 'docs'), ...topMarkdown];
const allowlist = validateAllowlist(JSON.parse(await readFile(allowlistPath, 'utf8').catch(error => {
  if (error.code === 'ENOENT') return '[]'; throw error;
})));

// Self-test: plant canaries in every supported representation in a disposable
// directory outside the scanned trees, and require each one to be found.
async function selfTest() {
  const directory = await mkdtemp(join(tmpdir(), 'openvision-secret-canaries-'));
  try {
    const planted = {
      'utf8.log': canaryKey(),
      'utf16le.log': canaryKey(),
      'utf16le-odd.bin': canaryKey(),
      'boundary.bin': canaryKey(),
      'store.zip': canaryKey(),
      'deflate.vsix': canaryKey(),
      'record.gz': canaryKey(),
      // Issue #9: a persisted terminal environment in workspace storage, live and
      // after its row was deleted (SQLite free pages keep the bytes).
      'state.vscdb': canaryKey(),
      'deleted-row.vscdb': canaryKey(),
    };
    await writeFile(join(directory, 'utf8.log'), `request ok key=${planted['utf8.log']}\n`);
    await writeFile(join(directory, 'utf16le.log'), Buffer.concat([Buffer.from([0xff, 0xfe]), Buffer.from(`key ${planted['utf16le.log']}`, 'utf16le')]));
    await writeFile(join(directory, 'utf16le-odd.bin'), Buffer.concat([Buffer.from([7]), Buffer.from(planted['utf16le-odd.bin'], 'utf16le')]));
    // Straddles the 8 MiB window boundary.
    const boundary = Buffer.alloc(8 * 1024 * 1024 + 4096, 0x20);
    boundary.write(planted['boundary.bin'], 8 * 1024 * 1024 - 10, 'utf8');
    await writeFile(join(directory, 'boundary.bin'), boundary);
    await writeFile(join(directory, 'store.zip'), storedZip('a.txt', Buffer.from(planted['store.zip']), 0));
    await writeFile(join(directory, 'deflate.vsix'), storedZip('extension/b.js', deflateRawSync(Buffer.from(`x=${planted['deflate.vsix']}`)), 8));
    await writeFile(join(directory, 'record.gz'), gzipSync(Buffer.from(planted['record.gz'])));
    for (const [name, remove] of [['state.vscdb', false], ['deleted-row.vscdb', true]]) {
      const db = new DatabaseSync(join(directory, name));
      db.exec('PRAGMA secure_delete = OFF; CREATE TABLE ItemTable (key TEXT UNIQUE ON CONFLICT REPLACE, value BLOB)');
      db.prepare('INSERT INTO ItemTable VALUES (?, ?)').run('terminal.integrated.bufferState',
        JSON.stringify({ version: 1, state: [{ processLaunchConfig: { env: { OPENAI_API_KEY: planted[name], PATH: '/usr/bin' } } }] }));
      if (remove) db.exec("DELETE FROM ItemTable WHERE key = 'terminal.integrated.bufferState'");
      db.close();
    }
    await writeFile(join(directory, 'clean.log'), 'Authorization: Bearer [redacted]\napi-key: <your-key>\n');
    const report = await scanPaths([directory], { root: directory });
    const found = name => report.findings.some(finding => finding.path === name && finding.rule === 'canary');
    const missed = Object.keys(planted).filter(name => !found(name));
    assert.deepEqual(missed, [], `Self-test canaries not detected: ${missed.join(', ')}`);
    assert.ok(!report.findings.some(finding => finding.path === 'clean.log'), 'Self-test placeholder produced a false positive');
    assert.ok(report.findings.every(finding => !Object.values(planted).some(key => JSON.stringify(finding).includes(key))),
      'A finding must not carry the secret');
    return { planted: Object.keys(planted).length, detected: Object.keys(planted).length, falsePositives: 0 };
  } finally { await rm(directory, { recursive: true, force: true }); }
}

const started = Date.now();
const result = { checkedAt: new Date().toISOString(), success: false,
  commit: execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim(),
  platform: process.platform, arch: process.arch, allowlist: allowlistPath.replace(root + '/', ''), allowlistEntries: allowlist.length };
result.selfTest = await selfTest();
if (!selfTestOnly) {
  result.targets = targets.map(path => path.replace(root + '/', ''));
  Object.assign(result, await scanPaths(targets, { root, allowlist }));
}
result.durationMs = Date.now() - started;
result.success = !selfTestOnly ? !result.findings.length && !result.errors.length && !(requireAll && result.missing.length) : true;
await mkdir(join(root, 'logs'), { recursive: true });
const directory = await mkdtemp(join(root, 'logs/secret-scan-'));
await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2) + '\n');
console.log(JSON.stringify({ directory: directory.replace(root + '/', ''), success: result.success, selfTest: result.selfTest,
  files: result.files, bytes: result.bytes, archives: result.archives, missing: result.missing,
  opaque: result.opaque?.length, allowed: result.allowed?.length, errors: result.errors,
  findings: result.findings?.slice(0, 50), durationMs: result.durationMs }, null, 2));
if (!result.success) process.exitCode = 1;
