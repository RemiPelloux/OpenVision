import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { DatabaseSync } from 'node:sqlite';
import { decodeOAuthRow, readOAuthRows, scanForSecrets, onlyEnvironmentEntries } from './verify-mcp-auth-secrets.mjs';

const key = logical => Buffer.from(logical, 'utf8').toString('base64url');

test('OAuth rows decode logical keys and keyring prefixes', () => {
  const secret = decodeOAuthRow(`mcpOAuth.secret.${key('[user-x] mcp_tokens')}`,
    JSON.stringify(Buffer.from('v11ciphertext')));
  assert.equal(secret.logical, '[user-x] mcp_tokens');
  assert.equal(secret.kind, 'secret');
  assert.equal(secret.encryptedPrefix, 'v11');
  const plain = decodeOAuthRow(`mcpOAuth.secret.${key('[user-x] mcp_tokens')}`, '{"access_token":"a"}');
  assert.equal(plain.encryptedPrefix, null, 'Plain JSON in a secret row is reported as unencrypted');
  const global = decodeOAuthRow(`mcpOAuth.global.${key('[user-x] mcp_server_url')}`, '"http://127.0.0.1/mcp"');
  assert.equal(global.kind, 'global');
  assert.equal(decodeOAuthRow('other.key', 'x'), undefined);
});

test('readOAuthRows reads only mcpOAuth rows read-only', async () => {
  const directory = await mkdtemp(join(tmpdir(), 'ov-oauth-rows-'));
  const path = join(directory, 'state.vscdb');
  const db = new DatabaseSync(path);
  db.exec('CREATE TABLE ItemTable (key TEXT UNIQUE ON CONFLICT REPLACE, value BLOB)');
  db.prepare('INSERT INTO ItemTable VALUES (?, ?)').run(`mcpOAuth.secret.${key('[s] mcp_tokens')}`, JSON.stringify(Buffer.from('v11x')));
  db.prepare('INSERT INTO ItemTable VALUES (?, ?)').run('unrelated', 'value');
  db.close();
  const rows = await readOAuthRows(path);
  assert.deepEqual(rows.map(row => row.logical), ['[s] mcp_tokens']);
  assert.deepEqual(await readOAuthRows(join(directory, 'missing.vscdb')), []);
});

test('scanForSecrets finds plain, UTF-16 and base64 copies and reports no values', async () => {
  const directory = await mkdtemp(join(tmpdir(), 'ov-oauth-scan-'));
  await mkdir(join(directory, 'nested'));
  await writeFile(join(directory, 'nested/plain.log'), 'token=ov-at-123456 end');
  await writeFile(join(directory, 'wide.bin'), Buffer.from('ov-rt-abcdef', 'utf16le'));
  await writeFile(join(directory, 'b64.txt'), Buffer.from('ov-cs-zzz').toString('base64'));
  await writeFile(join(directory, 'clean.json'), '{"ok":true}');
  const { hits, summary } = await scanForSecrets({ roots: [directory], pids: [process.pid],
    secrets: [['access_token', 'ov-at-123456'], ['refresh_token', 'ov-rt-abcdef'], ['client_secret', 'ov-cs-zzz'], ['static_token', 'absent-value']] });
  assert.deepEqual(hits.map(hit => `${hit.kind}:${hit.encoding}`).sort(),
    ['access_token:utf8', 'client_secret:base64', 'refresh_token:utf16le']);
  assert.equal(summary.files, 4);
  assert.equal(summary.processes, 1);
  assert.ok(!JSON.stringify({ hits, summary }).includes('ov-at-123456'));
});

test('environment-entry copies are told apart from header copies', async () => {
  const env = Buffer.from('{"PATH":"/bin","OV_TOKEN":"secret-1","X":"y"}');
  const header = Buffer.from('{"OV_TOKEN":"secret-1","headers":{"Authorization":"Bearer secret-1"}}');
  assert.equal(onlyEnvironmentEntries(env, 'OV_TOKEN', 'secret-1'), true);
  assert.equal(onlyEnvironmentEntries(header, 'OV_TOKEN', 'secret-1'), false);
  assert.equal(onlyEnvironmentEntries(Buffer.from('nothing'), 'OV_TOKEN', 'secret-1'), false);
  const directory = await mkdtemp(join(tmpdir(), 'ov-oauth-env-'));
  await writeFile(join(directory, 'env.json'), env);
  await writeFile(join(directory, 'header.json'), header);
  const { hits } = await scanForSecrets({ roots: [directory], secrets: [['static_token', 'secret-1', { environmentName: 'OV_TOKEN' }]] });
  assert.deepEqual(hits.map(hit => [hit.where.endsWith('env.json'), hit.environmentEntryOnly]).sort(), [[false, false], [true, true]]);
});
