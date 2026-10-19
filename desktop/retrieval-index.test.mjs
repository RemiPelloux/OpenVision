import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdir, mkdtemp, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { DatabaseSync } from 'node:sqlite';
import { RetrievalIndex, enumerate } from './retrieval-index.mjs';
import { Chunker, chunkLimits, lineWindows } from './retrieval-chunk.mjs';
import { IgnoreRules, changedExcludeScopes, filesExcludeMatcher, gitIgnored, parseGitIgnore } from './retrieval-ignore.mjs';
import { ftsAvailable, queryTerms, terms } from './retrieval-store.mjs';
import { retrievalRuntime } from './retrieval-runtime.mjs';

const runtime = retrievalRuntime();

async function project(files) {
  const directory = await mkdtemp(join(tmpdir(), 'ov-retrieval-'));
  const root = join(directory, 'project');
  for (const [path, text] of Object.entries(files)) {
    await mkdir(join(root, path, '..'), { recursive: true });
    await writeFile(join(root, path), text);
  }
  await mkdir(root, { recursive: true });
  return { directory, root, cleanup: () => rm(directory, { recursive: true, force: true }) };
}

async function openIndex(fixture, options = {}) {
  const index = new RetrievalIndex({ root: fixture.root, directory: join(fixture.directory, 'store/v1/workspace'), ...runtime, ...options });
  await index.open();
  return index;
}

test('node:sqlite in the pinned toolchain provides FTS5', () => {
  const database = new DatabaseSync(':memory:');
  assert.equal(ftsAvailable(database), true);
  database.close();
});

test('gitignore matcher follows Git anchoring, negation and directory rules', () => {
  const rules = parseGitIgnore('# comment\n*.log\n!keep.log\n/build\ncache/\ndocs/**/*.tmp\n\\#hash\n', '');
  const ignored = path => gitIgnored(rules, path);
  assert.equal(ignored('a.log'), true);
  assert.equal(ignored('deep/b.log'), true);
  assert.equal(ignored('deep/keep.log'), false);
  assert.equal(ignored('build/x.js'), true);
  assert.equal(ignored('src/build/x.js'), false, 'leading slash anchors to the ignore file directory');
  assert.equal(ignored('src/cache/x.js'), true, 'trailing slash matches directories at any depth');
  assert.equal(ignored('cache'), false, 'directory-only rule does not match a file named cache');
  assert.equal(ignored('docs/a/b/c.tmp'), true);
  assert.equal(ignored('#hash'), true);
  const nested = new IgnoreRules({});
  nested.setFile('.cursorignore', 'secret/\n');
  nested.setFile('pkg/.cursorindexingignore', '*.gen.ts\n!keep.gen.ts\n');
  assert.equal(nested.ignored('secret/key.txt'), true);
  assert.equal(nested.ignored('pkg/a.gen.ts'), true);
  assert.equal(nested.ignored('pkg/keep.gen.ts'), false);
  assert.equal(nested.ignored('other/a.gen.ts'), false, 'nested rules apply only below their directory');
  nested.setFile('secret/.cursorignore', '!key.txt\n');
  assert.equal(nested.ignored('secret/key.txt'), true, 'an ignored directory cannot re-include children');
});

test('files.exclude uses VS Code glob semantics and reports the narrowest changed scope', () => {
  const matcher = filesExcludeMatcher({ '**/node_modules': true, 'generated/*.js': true, '**/*.{png,jpg}': true, 'off/**': false });
  assert.equal(matcher.matches('a/node_modules/x/y.js'), true);
  assert.equal(matcher.matches('generated/a.js'), true);
  assert.equal(matcher.matches('generated/sub/a.js'), false);
  assert.equal(matcher.matches('src/logo.png'), true);
  assert.equal(matcher.matches('off/a.js'), false);
  assert.deepEqual(matcher.pruneGlobs, ['!node_modules']);
  assert.deepEqual(changedExcludeScopes({ 'a/b/**': true }, { 'a/b/**': true, 'vendor/lib/*.js': true }), ['vendor/lib']);
  assert.deepEqual(changedExcludeScopes({}, { '**/*.md': true }), ['']);
});

test('identifier-aware terms split camelCase, snake_case and digits', () => {
  assert.equal(terms('getUserName parse_http2_header'), 'getusername get user name parse_http2_header parse http 2 header');
  assert.deepEqual(queryTerms('Where is the user name read?'), ['user', 'name', 'read']);
});

test('line windows cover every line with bounded overlap', () => {
  const text = Array.from({ length: 123 }, (_, index) => `line ${index + 1}`).join('\n') + '\n';
  const chunks = lineWindows(text);
  assert.equal(chunks[0].startLine, 1);
  assert.equal(chunks.at(-1).endLine, 123);
  for (const [index, chunk] of chunks.entries()) {
    assert.ok(chunk.endLine - chunk.startLine + 1 <= chunkLimits.windowLines);
    if (index) assert.equal(chunk.startLine, chunks[index - 1].endLine - chunkLimits.overlapLines + 1);
  }
});

test('tree-sitter chunks split at declarations and cover the file', async () => {
  const chunker = new Chunker({ grammarDirectory: runtime.grammarDirectory });
  const body = Array.from({ length: 70 }, (_, index) => `    total += ${index};`).join('\n');
  const source = `import { a } from './a';\n\n// Adds numbers.\nexport function add(x, y) {\n  return x + y;\n}\n\n` +
    `export class Ledger {\n  balance() {\n    let total = 0;\n${body}\n    return total;\n  }\n  reset() { this.total = 0; }\n}\n`;
  const { chunks, parsed } = await chunker.chunk('src/ledger.ts', source);
  assert.equal(parsed, 'syntax');
  assert.equal(chunker.status.treeSitter, 'ready');
  assert.equal(chunks[0].startLine, 1);
  assert.equal(chunks.at(-1).endLine, source.split('\n').length - 1);
  for (let index = 1; index < chunks.length; index++) assert.ok(chunks[index].startLine <= chunks[index - 1].endLine + 1);
  assert.ok(chunks.some(chunk => chunk.symbol === 'add' && chunk.text.includes('return x + y')));
  assert.ok(chunks.some(chunk => chunk.symbol === 'balance'), 'long class splits into its methods');
  const broken = await chunker.chunk('src/broken.ts', 'export function (\n');
  assert.equal(broken.parsed, 'lines', 'syntax errors fall back to line windows');
  const python = await chunker.chunk('tool.py', 'def run():\n    pass\n');
  assert.equal(python.parsed, 'lines', 'languages without a shipped grammar use line windows');
  chunker.dispose();
});

test('enumeration honours .gitignore, .cursorignore, .cursorindexingignore and files.exclude', async () => {
  const fixture = await project({
    '.gitignore': 'dist/\n*.log\n', 'src/app.ts': 'export const app = 1;\n', 'src/debug.log': 'log',
    'dist/bundle.js': 'bundle', '.cursorignore': 'private/\n', 'private/key.txt': 'secret',
    'lib/.cursorindexingignore': '*.gen.ts\n', 'lib/model.gen.ts': 'generated', 'lib/model.ts': 'export type M = 1;\n',
    'node_modules/pkg/index.js': 'dependency', 'assets/logo.svg': '<svg/>', 'nested/.gitignore': 'tmp\n', 'nested/tmp': 'x',
    'nested/keep.md': '# keep\n',
  });
  try {
    const listing = await enumerate({ root: fixture.root, rgPath: runtime.rgPath });
    assert.ok(!listing.includes('dist/bundle.js') && !listing.includes('src/debug.log') && !listing.includes('nested/tmp'));
    const index = await openIndex(fixture, { filesExclude: { '**/node_modules': true, 'assets/**': true } });
    await index.sync();
    const indexed = index.store.files().map(row => row.path).sort();
    assert.deepEqual(indexed, ['.cursorignore', '.gitignore', 'lib/.cursorindexingignore', 'lib/model.ts', 'nested/.gitignore', 'nested/keep.md', 'src/app.ts']);
    assert.ok(index.counters.ignoredSkips >= 3);
    index.close();
  } finally { await fixture.cleanup(); }
});

test('search returns ranked top-k chunks with path, line range and score', async () => {
  const fixture = await project({
    'src/auth/session.ts': 'export function createSessionToken(userId: string) {\n  return sign({ sub: userId });\n}\n',
    'src/auth/password.ts': 'export function hashPassword(value: string) {\n  return scrypt(value);\n}\n',
    'src/ui/button.ts': 'export function renderButton(label: string) {\n  return `<button>${label}</button>`;\n}\n',
    'docs/sessions.md': '# Sessions\nTokens expire after one hour.\n',
  });
  try {
    const index = await openIndex(fixture, { grammarDirectory: runtime.grammarDirectory });
    await index.sync();
    const { results } = index.search('create session token', { k: 3 });
    assert.equal(results[0].path, 'src/auth/session.ts');
    assert.deepEqual([results[0].startLine, results[0].endLine], [1, 3]);
    assert.equal(results[0].symbol, 'createSessionToken');
    assert.ok(results.length <= 3);
    for (let position = 1; position < results.length; position++) assert.ok(results[position - 1].score >= results[position].score);
    assert.deepEqual(index.search('the of a').results, []);
    assert.equal(index.search('button', { pathPrefix: 'src/auth' }).results.length, 0, 'path prefix restricts results');
    index.close();
  } finally { await fixture.cleanup(); }
});
