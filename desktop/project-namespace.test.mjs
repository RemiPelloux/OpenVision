import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, writeFile, rm } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { namespaceEdits, applyNamespaceEdits } from './project-namespace.mjs';
import { installProjectNamespace, restoreNamespaceInputs } from './namespace-build.mjs';

const transform = (source, json = false) => applyNamespaceEdits(source, namespaceEdits(source, json));

test('large Unicode inputs retain every untouched character through many edits and exact restoration', () => {
  const segment = '日本語 Å 🧿 unchanged '.repeat(1024) + '".cursor/rules";\n';
  const source = segment.repeat(512), edits = [];
  for (const match of source.matchAll(/\.cursor\/rules/g))
    edits.push({ start: match.index, before: match[0], after: '.openvision/rules' });
  const after = applyNamespaceEdits(source, edits);
  assert.equal(after, source.replaceAll('.cursor/rules', '.openvision/rules'));
  let offset = 0;
  const reverse = edits.map(edit => {
    const start = edit.start + offset; offset += edit.after.length - edit.before.length;
    return { start, before: edit.after, after: edit.before };
  });
  assert.equal(applyNamespaceEdits(after, reverse), source);
  assert.throws(() => applyNamespaceEdits(source, [{ start: 0, before: 'wrong', after: '' }]), /no longer matches/);
});

test('changes path producers and regex consumers while preserving identifiers, CSS and vendor domains', () => {
  const source = String.raw`const folder = ".cursor";
    const rule = ".cursor/rules";
    const windows = "C:\\project\\.cursor\\plans";
    const oldRule = ".cursorrules";
    const escaped = "\\.cursor\\.com";
    const pathPattern = /[/\\]\.cursor[/\\]rules[/\\]/i;
    const oppositePattern = /[\\/]\.cursor[\\/]plans[\\/]/i;
    const canvas = /(?:^|\/)\.cursor\/projects\/[^/]+\/canvases\//i;
    const domain = /^origin(?:-[a-z]+)?\.cursor\.com$/;
    const groupedDomain = /(?:\.cursor)\.com$/;
    const css = ".cursor-settings .cursor-primary";
    const extension = "anysphere.cursor-agent-exec";
    const ignore = ".cursorignore";
    const ignoreIndex = ".cursorindexingignore";
    api.cursor.method();
    // Existing .cursor comments remain evidence.
  ` + 'const template = `~/.cursor/plans/${name}`;';
  const after = transform(source);
  assert.match(after, /"\.openvision"/);
  assert.match(after, /\.openvision\/rules/);
  assert.match(after, /\.openvision\\\\plans/);
  assert.match(after, /\.openvisionrules/);
  assert.ok(after.includes('`~/.openvision/plans/${name}`'));
  for (const token of ['"\\\\.cursor\\\\.com"', '/^origin(?:-[a-z]+)?\\.cursor\\.com$/', '/(?:\\.cursor)\\.com$/',
    '".cursor-settings .cursor-primary"', '"anysphere.cursor-agent-exec"', '".cursorignore"', '".cursorindexingignore"',
    'api.cursor.method()', '// Existing .cursor comments']) assert.ok(after.includes(token), token);
  assert.ok(after.includes('/[/\\\\]\\.openvision[/\\\\]rules[/\\\\]/i'));
  assert.ok(after.includes('/[\\\\/]\\.openvision[\\\\/]plans[\\\\/]/i'));
  assert.ok(after.includes('\\.openvision\\/projects'));
  assert.equal(transform(after), after);
});

test('JSON path strings and patterns change without rewriting keys or code-like text', () => {
  const source = JSON.stringify({ 'editor.cursorStyle': 'line', path: '.cursor/plans', glob: '**/.cursor/rules/**/*.mdc', domain: 'origin.cursor.com' });
  const result = JSON.parse(transform(source, true));
  assert.deepEqual(result, { 'editor.cursorStyle': 'line', path: '.openvision/plans', glob: '**/.openvision/rules/**/*.mdc', domain: 'origin.cursor.com' });
});

test('build journal restores exact producer inputs, repeats safely and protects external edits', async t => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'openvision-namespace-build-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  const app = path.join(root, 'source/app');
  await mkdir(path.join(app, 'out'), { recursive: true });
  await mkdir(path.join(app, 'extensions/example/node_modules/dependency'), { recursive: true });
  const file = path.join(app, 'out/main.js'), original = 'const root = ".cursor"; const plan = ".cursor/plans";';
  await writeFile(file, original);
  const helper = path.join(app, 'out/openvision-import-ipc.js'), helperText = 'const importSource = ".cursor";';
  await writeFile(helper, helperText);
  const dependency = path.join(app, 'extensions/example/node_modules/dependency/index.js');
  await writeFile(dependency, helperText);
  await installProjectNamespace(root);
  const changed = await readFile(file, 'utf8');
  assert.equal(changed, transform(original));
  await installProjectNamespace(root);
  assert.equal(await readFile(helper, 'utf8'), helperText);
  assert.equal(await readFile(dependency, 'utf8'), helperText);
  await restoreNamespaceInputs(root);
  assert.equal(await readFile(file, 'utf8'), original);
  await installProjectNamespace(root);
  assert.equal(await readFile(file, 'utf8'), changed);
  await writeFile(file, changed + '\n// user edit');
  await assert.rejects(restoreNamespaceInputs(root), /changed outside build/);
  assert.equal(await readFile(file, 'utf8'), changed + '\n// user edit');
});
