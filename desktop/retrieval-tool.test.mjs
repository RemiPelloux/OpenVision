import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { join } from 'node:path';
import { parseJavaScript as parse } from '../tooling/dependencies.mjs';
import { contributeCommands, installCodebaseSearch, retrievalCommands, retrievalToolEntry, retrievalToolMarker, semanticSearchOwner } from './retrieval-tool-customization.mjs';
import { repositoryRoot } from './retrieval-runtime.mjs';

// The customization runs on the built agent bundle. Before the first install
// the bundle has no marker; after it, re-running must be a no-op. The backup
// of the pre-install bundle is used when the source build is already patched.
const require = createRequire(import.meta.url);
const built = join(repositoryRoot, 'source/app', retrievalToolEntry);
const backup = join(repositoryRoot, 'backups/retrieval-tool', retrievalToolEntry);
const current = await readFile(built, 'utf8');
const original = current.includes(retrievalToolMarker) ? await readFile(backup, 'utf8') : current;

test('codebase search customization enables the local tool and is idempotent', () => {
  const patched = installCodebaseSearch(original);
  assert.equal(installCodebaseSearch(patched), patched);
  assert.equal(patched.split(retrievalToolMarker).length, 2);
  parse(patched, { ecmaVersion: 'latest', sourceType: 'script' });
  const owner = semanticSearchOwner(patched), body = patched.slice(owner.start, owner.end);
  assert.match(body, /\? "codebase_search" : "CodebaseSearch"/);
  assert.match(body, /openvisionLocal \? "none" : "aes-256-ctr"/);
  assert.match(body, /if \(!openvisionLocal && \(!o\.repositoryInfos/);
  assert.match(body, /workspacePaths: o\.workspacePaths/);
  assert.match(patched, /e\.enableSemanticSearch && \(i\.length > 0 \|\| !0 === a\?\.openvisionLocal\)\)/);
  assert.match(patched, /searchImplementation: openvisionCodebaseSearch\.searchFor\(\(c \?\? r\.localProvider\)\?\.openvisionProviders\)/);
  assert.match(patched, /enableSemanticSearch: !0,\s+enableGrepTool: !0,/);
  assert.match(patched, /openvisionCodebaseSearch\.activate\(e\);\s+if \(G\.cursor\.cursorAgentHostEnabled\)/);
  assert.ok(!/\}\)\("aes-256-ctr", d\.pathEncryptionKey\)/.test(patched), 'hosted path encryption is bypassed only for the local index');
});

test('changed contracts are refused instead of patched partially', () => {
  assert.throws(() => installCodebaseSearch(original.replace('return uL("SEMANTIC_SEARCH", {', 'return uL("OTHER", {')), /SEMANTIC_SEARCH registration/);
  assert.throws(() => installCodebaseSearch(original.replace('enableSemanticSearch: !1,', 'enableSemanticSearch: !0,')), /local tool configuration/);
  assert.throws(() => installCodebaseSearch(original.replace('targetDirectories: m,\n', 'targetDirectories: m, ')), /search options/);
});

test('command contribution is idempotent and keeps existing commands', () => {
  const manifest = JSON.stringify({ name: 'x', contributes: { commands: [{ command: 'other', title: 'Other' }] } });
  const once = contributeCommands(manifest);
  assert.equal(contributeCommands(once), once);
  assert.deepEqual(JSON.parse(once).contributes.commands.map(entry => entry.command), ['other', ...retrievalCommands.map(entry => entry.command)]);
});

test('helper resolves target directories and keeps tool guidance accurate', () => {
  const helper = require('./retrieval-codebase-search.cjs');
  assert.deepEqual(helper.target(undefined, ['/w/a']), { roots: ['/w/a'], prefix: undefined });
  assert.deepEqual(helper.target('src/api/', ['/w/a']), { roots: ['/w/a'], prefix: 'src/api' });
  assert.deepEqual(helper.target('/w/b/lib', ['/w/a', '/w/b']), { roots: ['/w/b'], prefix: 'lib' });
  const local = Object.assign(() => {}, { openvisionLocal: true });
  assert.match(helper.describe('`X`: semantic search that finds code by meaning, not exact text', local), /OpenVision index/);
  assert.equal(helper.describe('semantic search that finds code by meaning, not exact text', () => {}), 'semantic search that finds code by meaning, not exact text');
});
