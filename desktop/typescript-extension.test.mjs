import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, symlink, readFile, stat } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { createRequire } from 'node:module';
import { runInNewContext } from 'node:vm';
import { shareTsserverFileWatches, sharedWatchHelper, growTsserverReader } from './typescript-extension-customization.mjs';
import { parseExpressionAt } from '../tooling/dependencies.mjs';

const require = createRequire(import.meta.url);

function harness(folders, excludes = {}) {
  const watchers = [];
  const vscode = {
    Uri: { file: path => ({ fsPath: resolve(path), scheme: 'file' }) },
    workspace: {
      getWorkspaceFolder: uri => folders.find(folder => uri.fsPath === folder.uri.fsPath || uri.fsPath.startsWith(folder.uri.fsPath + '/')),
      getConfiguration: () => ({ get: key => key === 'watcherExclude' ? excludes : undefined }),
      createFileSystemWatcher: pattern => {
        const handlers = {};
        const watcher = { pattern, handlers, onDidChange: f => { handlers.updated = f; }, onDidCreate: f => { handlers.created = f; },
          onDidDelete: f => { handlers.deleted = f; } };
        watchers.push(watcher);
        return watcher;
      },
    },
  };
  const context = { require: name => name === 'vscode' ? vscode : require(name) };
  const share = runInNewContext(`${sharedWatchHelper}; openvisionSharedFileWatch`, context);
  const events = [];
  const client = { watches: new Map(), watchEvents: new Map(), closed: [],
    addWatchEvent: (id, kind, path) => events.push([id, kind, path]),
    closeFileSystemWatcher(id) { this.closed.push(id); this.watches.get(id)?.dispose(); } };
  return { share: (id, path) => share(client, id, path), client, watchers, events, vscode };
}

test('workspace file watches share one workspace-watcher listener and keep tsserver semantics', async () => {
  const project = await mkdtemp(join(tmpdir(), 'ov-tsw-'));
  await mkdir(join(project, 'src'));
  await writeFile(join(project, 'src/a.ts'), '');
  const h = harness([{ uri: { fsPath: project, scheme: 'file' } }]);
  assert.equal(h.share(1, join(project, 'src/a.ts')), true);
  assert.equal(h.share(2, join(project, 'src/b.ts')), true, 'a missing file inside the folder is served too');
  assert.equal(h.share(3, join(project, 'src/a.ts')), true);
  assert.equal(h.watchers.length, 1, 'one shared listener');
  assert.equal(h.watchers[0].pattern, '**/*', 'string glob served by the workspace watcher');
  h.watchers[0].handlers.updated({ fsPath: join(project, 'src/a.ts') });
  h.watchers[0].handlers.created({ fsPath: join(project, 'src/b.ts') });
  h.watchers[0].handlers.deleted({ fsPath: join(project, 'src/other.ts') });
  assert.deepEqual(h.events, [[1, 'updated', join(project, 'src/a.ts')], [3, 'updated', join(project, 'src/a.ts')],
    [2, 'created', join(project, 'src/b.ts')]], 'only watched paths are forwarded, to every id');
  h.client.watches.get(1).dispose();
  h.events.length = 0;
  h.watchers[0].handlers.updated({ fsPath: join(project, 'src/a.ts') });
  assert.deepEqual(h.events, [[3, 'updated', join(project, 'src/a.ts')]], 'closed ids stop receiving events');
  assert.equal(h.client.watches.has(1), false);
  h.share(3, join(project, 'src/b.ts'));
  assert.deepEqual(h.client.closed, [3], 're-registering an id closes its previous watch');
});

test('paths the workspace watcher may not report keep per-file watchers', async () => {
  const base = await mkdtemp(join(tmpdir(), 'ov-tsw-'));
  const project = join(base, 'project'), outside = join(base, 'outside');
  await mkdir(join(project, 'build'), { recursive: true }); await mkdir(outside);
  await writeFile(join(outside, 'x.ts'), '');
  await symlink(outside, join(project, 'linked'));
  const folder = { uri: { fsPath: project, scheme: 'file' } };
  const h = harness([folder], { '**/.git/objects/**': true, '**/build/**': true, '**/disabled/**': false });
  assert.equal(h.share(1, join(project, 'node_modules/dep/index.d.ts')), false);
  assert.equal(h.share(2, join(project, '.git/HEAD')), false);
  assert.equal(h.share(3, join(project, 'build/out.d.ts')), false, 'files.watcherExclude');
  assert.equal(h.share(4, join(project, 'disabled/a.ts')), true, 'disabled exclude patterns do not apply');
  assert.equal(h.share(5, join(project, 'linked/x.ts')), false, 'symlink leaves the folder');
  assert.equal(h.share(6, join(outside, 'x.ts')), false, 'outside every folder');
  assert.equal(h.share(7, project), false, 'the folder itself');
  assert.equal(harness([folder], { '**/*.{js,map}': true }).share(8, join(project, 'a.ts')), false, 'unevaluated patterns fall back');
  assert.equal(harness([{ uri: { fsPath: project, scheme: 'vscode-remote' } }]).share(9, join(project, 'a.ts')), false);
  assert.equal(harness([folder], { [join(project, 'build')]: true }).share(10, join(project, 'build/a.ts')), false, 'absolute patterns');
});

const readable = resolve(import.meta.dirname, '../build/recovery/readable/app/extensions/typescript-language-features/dist/extension.js');
test('patch is idempotent and fails closed on a changed handler', async t => {
  if (!await stat(readable).then(() => true, () => false)) return t.skip('readable recovery input absent');
  const original = await readFile(readable, 'utf8'), patched = shareTsserverFileWatches(original);
  assert.equal(shareTsserverFileWatches(patched), patched);
  assert.equal(patched.split('openvisionSharedFileWatch(this, e.body.id, r)').length, 2);
  assert.ok(patched.indexOf('openvisionSharedFileWatch(this') < patched.indexOf('new C.RelativePattern(C.Uri.file(r), "*")'));
  assert.ok(patched.startsWith('"use strict";\n/* OpenVision tsserver workspace file watches v1 */'));
  assert.throws(() => shareTsserverFileWatches(original.replace('case "createFileWatcher"', 'case "createFileWatch"')), /missing or changed/);
  assert.throws(() => shareTsserverFileWatches(original.replace('addWatchEvent(e, r, n) {', 'addEvent(e, r, n) {')), /contract changed/);
});

test('tsserver reader grows geometrically and still frames messages exactly', async t => {
  if (!await stat(readable).then(() => true, () => false)) return t.skip('readable recovery input absent');
  const original = await readFile(readable, 'utf8');
  const patched = growTsserverReader(original);
  assert.equal(growTsserverReader(patched), patched, 'idempotent');
  assert.throws(() => growTsserverReader(original.replace('Buffer.concat([this.buffer.slice(0, this.index)', 'Buffer.concat([this.buffer.subarray(0, this.index)')), /missing or changed/);
  const reader = text => {
    const at = text.indexOf('tryReadContentLength() {');
    const owner = text.lastIndexOf(' = class {', at), name = text.slice(text.lastIndexOf('\n', owner) + 1, owner).trim();
    const declaration = text.lastIndexOf('var ', text.lastIndexOf('"Content-Length: "', owner));
    const constants = text.slice(declaration, owner - name.length).replace(/,\s*$/, ';');
    let body = parseExpressionAt(text, owner + 3, { ecmaVersion: 'latest' });
    if (body.type === 'SequenceExpression') body = body.expressions[0];
    return runInNewContext(`${constants}\n(${text.slice(body.start, body.end)})`, { Buffer });
  };
  const originalReader = reader(original);
  for (const Reader of [originalReader, reader(patched)]) {
    const messages = [{ seq: 1, body: 'x'.repeat(1_000_000) }, { seq: 2, body: 'é'.repeat(1000) }];
    const wire = Buffer.concat(messages.map(message => { const json = Buffer.from(JSON.stringify(message));
      return Buffer.concat([Buffer.from(`Content-Length: ${json.length}\r\n\r\n`), json, Buffer.from('\r\n')]); }));
    const instance = new Reader(), parsed = [], sizes = new Set();
    let offset = 0, seed = 7, next = -1;
    while (offset < wire.length) {
      seed = (seed * 48271) % 2147483647;
      const end = Math.min(wire.length, offset + 1 + seed % 9000);
      instance.append(wire.subarray(offset, end)); offset = end; sizes.add(instance.buffer.length);
      // Same loop as the extension's onLengthData.
      for (;;) {
        if (next === -1 && (next = instance.tryReadContentLength()) === -1) break;
        const content = instance.tryReadContent(next);
        if (content === null) break;
        next = -1; parsed.push(JSON.parse(content));
      }
    }
    assert.deepEqual(parsed, messages);
    if (Reader !== originalReader) assert.ok(sizes.size < 15, `buffer reallocations stay logarithmic (${sizes.size})`);
  }
});
