import { test } from 'node:test';
import assert from 'node:assert/strict';
import { integrityTable, buildExtensionIntegrity } from './extension-integrity.mjs';
import { mkdtemp, mkdir, writeFile, readFile, rm, readdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { tmpdir } from 'node:os';
import { digest } from './import-files.mjs';

test('local build hashes actual extension bytes, preserves verification and refuses missing files', async t => {
  const root = await mkdtemp(join(tmpdir(), 'openvision-integrity-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  const host = join(root, 'source/app/out/vs/workbench/api/node/extensionHostProcess.js');
  const extension = join(root, 'source/app/extensions/worker');
  await mkdir(dirname(host), { recursive: true });
  await mkdir(join(extension, 'dist'), { recursive: true });
  await writeFile(join(extension, 'package.json'), JSON.stringify({ publisher: 'anysphere', name: 'cursor-agent-worker' }));
  const original = `var hashes = {"anysphere.cursor-agent-worker":{"dist":{"main.js":"${'a'.repeat(64)}"}}};
    function verify() { return "worker" in hashes && _verifyExtensionFiles(); }`;
  await writeFile(host, original);
  await writeFile(join(extension, 'dist/main.js'), 'local code');
  assert.deepEqual(await buildExtensionIntegrity(root), { extensions: 1, files: 1 });
  const built = await readFile(host, 'utf8');
  assert.equal(integrityTable(built).value['anysphere.cursor-agent-worker'].dist['main.js'], digest('local code'));
  assert.ok(built.includes('_verifyExtensionFiles()'));
  assert.equal(await readFile(join(root, 'backups/extension-integrity', `${digest(original)}.js`), 'utf8'), original);
  await buildExtensionIntegrity(root);
  assert.equal(await readFile(host, 'utf8'), built);
  assert.equal((await readdir(join(root, 'backups/extension-integrity'))).length, 1);
  await rm(join(extension, 'dist/main.js'));
  await assert.rejects(buildExtensionIntegrity(root), /missing/);
  assert.equal(await readFile(host, 'utf8'), built);
});

test('extension integrity table is parsed without executing recovered code', () => {
  const text = `var table = { "anysphere.cursor-agent-worker": { dist: { "main.js": "${'a'.repeat(64)}" } } };\n` +
    'function verify() { return "x" in table && _verifyExtensionFiles(); }';
  const result = integrityTable(text);
  assert.equal(result.value['anysphere.cursor-agent-worker'].dist['main.js'], 'a'.repeat(64));
  assert.equal(text.slice(result.start, result.end).startsWith('{'), true);
});

test('dynamic or duplicate integrity owners are rejected', () => {
  assert.throws(() => integrityTable('var table = {};'), /owner/);
  assert.throws(() => integrityTable('var table = {"anysphere.cursor-agent-worker":x}; var other = {"anysphere.cursor-agent-worker":y}; function f(){return "x" in table && _verifyExtensionFiles()}'), /owner/);
});
