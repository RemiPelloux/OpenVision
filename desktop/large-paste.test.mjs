import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, readFile, readdir, rm, access } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { handleLargePaste, waitForLargePastes, pasteWorkspace } from './large-paste.js';

async function fixture(t) {
  const folder = await mkdtemp(join(tmpdir(), 'openvision-paste-'));
  t.after(() => rm(folder, { recursive: true, force: true }));
  const URI = { joinPath: (uri, ...parts) => ({ fsPath: join(uri.fsPath, ...parts) }) };
  const notices = [], restored = [], references = [];
  const services = {
    workspaceContextService: { getWorkspace: () => ({ folders: [{ uri: { fsPath: folder } }] }) },
    fileService: {
      createFolder: uri => mkdir(uri.fsPath, { recursive: true }),
      exists: async uri => { try { await access(uri.fsPath); return true; } catch { return false; } },
      createFile: (uri, buffer) => writeFile(uri.fsPath, buffer, { flag: 'wx' }),
    },
    notificationService: { warn: message => notices.push(message), error: message => notices.push(message) },
  };
  const context = { composer: { composerId: folder }, services, URI, Buffer: { fromString: value => Buffer.from(value) },
    insertReference: value => { references.push(value); return text => restored.push(text); } };
  return { context, folder, notices, restored, references };
}

function clipboard(text, files = []) {
  return { clipboardData: { getData: type => type === 'text/plain' ? text : '', files },
    prevented: false, stopped: false,
    preventDefault() { this.prevented = true; }, stopPropagation() { this.stopped = true; } };
}

test('large pastes preserve bytes in exclusive files and release pending writes', async t => {
  const f = await fixture(t);
  const original = ' début 日本語 😀\r\n' + 'xyz\t'.repeat(3000) + '\n\n';
  const events = [clipboard(original), clipboard(original)];
  for (const event of events) assert.equal(handleLargePaste(event, f.context), true);
  await waitForLargePastes(f.context.composer);
  const directory = join(f.folder, '.openvision/paste');
  const files = (await readdir(directory)).filter(name => name.endsWith('.txt'));
  assert.equal(files.length, 2);
  for (const file of files) assert.equal(await readFile(join(directory, file), 'utf8'), original);
  assert.equal(await readFile(join(directory, '.gitignore'), 'utf8'), '*\n');
  assert.ok(events.every(event => event.prevented && event.stopped));
  assert.ok(f.references.every(value => value.length < 400 && !value.includes('xyz')));
  assert.deepEqual(f.restored, []);
  await waitForLargePastes(f.context.composer); // Settled work is no longer retained.
});

test('submission waits only for its own composer; failed writes restore text and reject', async t => {
  const f = await fixture(t), gate = Promise.withResolvers();
  f.context.services.fileService.createFolder = () => gate.promise;
  const original = 'x'.repeat(10000);
  assert.equal(handleLargePaste(clipboard(original), f.context), true);
  let completed = false;
  const pending = waitForLargePastes(f.context.composer).finally(() => { completed = true; });
  const rejected = assert.rejects(pending, /permission denied/);
  await waitForLargePastes('different composer');
  assert.equal(completed, false);
  gate.reject(new Error('permission denied'));
  await rejected;
  assert.deepEqual(f.restored, [original]);
  assert.match(f.notices[0], /clipboard is unchanged/);
  await waitForLargePastes(f.context.composer);
});

test('ordinary pastes, images and missing workspace preserve normal clipboard handling', async t => {
  const f = await fixture(t);
  for (const event of [clipboard('x'.repeat(9999)), clipboard('x'.repeat(10000), [{}])]) {
    assert.equal(handleLargePaste(event, f.context), false);
    assert.equal(event.prevented, false);
  }
  f.context.services.workspaceContextService.getWorkspace = () => ({ folders: [] });
  const event = clipboard('x'.repeat(10000));
  assert.equal(handleLargePaste(event, f.context), false);
  assert.equal(event.prevented, false);
  assert.equal(f.references.length, 0);
  assert.equal(f.notices.length, 1);
});

test('workspace resolution prefers the conversation folder and then the active editor', async t => {
  const f = await fixture(t);
  const conversation = { fsPath: 'conversation' }, active = { fsPath: 'active' };
  f.context.URI.revive = value => value;
  f.context.services.workspaceContextService.getWorkspaceFolder = uri => ({ uri });
  f.context.services.editorService = { activeEditor: { resource: active } };
  f.context.composer.workspaceIdentifier = { uri: conversation };
  assert.equal(pasteWorkspace(f.context), conversation);
  delete f.context.composer.workspaceIdentifier;
  assert.equal(pasteWorkspace(f.context), active);
});
