import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { runInNewContext } from 'node:vm';
import { languageStatusManifest } from './language-status-customization.mjs';

async function load(all) {
  const created = [], listeners = [];
  const vscode = { LanguageStatusSeverity: { Information: 0 },
    extensions: { all, onDidChange: listener => { listeners.push(listener); return { dispose() {} }; } },
    languages: { createLanguageStatusItem: (id, selector) => { const item = { id, selector, disposed: false,
      dispose() { this.disposed = true; } }; created.push(item); return item; } } };
  const module = { exports: {} };
  const source = await readFile(join(import.meta.dirname, 'language-status-extension.cjs'), 'utf8');
  runInNewContext(source, { module, exports: module.exports, require: name => { assert.equal(name, 'vscode'); return vscode; } });
  const context = { subscriptions: [] };
  module.exports.activate(context);
  return { created, listeners, context, api: module.exports };
}

test('Python, Go and Rust say syntax highlighting only and point to a language server', async () => {
  const { created } = await load([{ id: 'vscode.python', packageJSON: { isBuiltin: true } }]);
  assert.deepEqual(created.map(item => item.selector.language), ['python', 'go', 'rust']);
  for (const item of created) {
    assert.equal(item.text, 'Syntax highlighting only');
    assert.match(item.detail, /^Install a (Python|Go|Rust) language server extension for completion, diagnostics, navigation and rename\.$/);
    assert.equal(item.command.command, 'workbench.extensions.search');
  }
});

test('a user-installed extension with code for the language removes its item', async () => {
  const all = [];
  const { created, listeners } = await load(all);
  all.push({ id: 'someone.python-ls', packageJSON: { main: './x.js', activationEvents: ['onLanguage:python'] } },
    { id: 'someone.go-grammar', packageJSON: { contributes: { languages: [{ id: 'go' }] } } },
    { id: 'someone.rust', packageJSON: { main: './x.js', contributes: { languages: [{ id: 'rust' }] } } });
  listeners.forEach(listener => listener());
  const state = Object.fromEntries(created.map(item => [item.selector.language, item.disposed]));
  assert.deepEqual(state, { python: true, go: false, rust: true }, 'a grammar-only extension does not count');
  all.splice(0);
  listeners.forEach(listener => listener());
  assert.equal(created.filter(item => !item.disposed).length, 3, 'items come back after uninstall');
});

test('manifest activates only on the three languages and ships its main file', () => {
  assert.deepEqual(languageStatusManifest.activationEvents, ['onLanguage:python', 'onLanguage:go', 'onLanguage:rust']);
  assert.equal(languageStatusManifest.main, './language-status-extension.cjs');
  assert.equal(languageStatusManifest.publisher, 'openvision');
});
