import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { runInNewContext } from 'node:vm';
import { readableApp } from './recovered-source.mjs';
import { preserveUnacknowledgedWrites, storageIpcWriteOwner } from './storage-write-ownership.mjs';

const ipcBudget = 200;

function fixture(source) {
  const owner = storageIpcWriteOwner(source), method = source.slice(owner.start, owner.end);
  const calls = [], acknowledgments = [], pending = [];
  const Storage = runInNewContext(`(class { ${method} })`, { gct: ipcBudget, CLt: ipcBudget, console: { warn() {} } });
  const storage = Object.assign(new Storage(), { profile: 'profile', workspace: 'workspace', channel: {
    call(name, payload) {
      const gate = Promise.withResolvers(); pending.push(gate);
      calls.push({ name, ...payload }); return gate.promise;
    },
  } });
  const acknowledge = batch => acknowledgments.push(structuredClone({
    insert: batch.insert && [...batch.insert], delete: batch.delete && [...batch.delete],
  }));
  return { storage, calls, acknowledgments, pending, acknowledge };
}

const drain = () => new Promise(resolve => setImmediate(resolve));

for (const variant of ['desktop', 'glass']) {
  const original = await readFile(new URL(`out/vs/workbench/workbench.${variant}.main.js`, readableApp), 'utf8');
  const patched = preserveUnacknowledgedWrites(original);

  test(`${variant}: IPC acknowledges a small write only after its actual response`, async () => {
    const f = fixture(patched), update = f.storage.updateItems({ insert: new Map([['key', 'value']]) }, f.acknowledge);
    assert.equal(f.calls.length, 1); assert.equal(f.acknowledgments.length, 0);
    f.pending[0].resolve(); await update;
    assert.deepEqual(f.acknowledgments, [{ insert: [['key', 'value']], delete: undefined }]);
    assert.equal(f.calls[0].profile, 'profile'); assert.equal(f.calls[0].workspace, 'workspace');
  });

  test(`${variant}: chunked inserts and deletes acknowledge precisely the completed chunks`, async () => {
    const f = fixture(patched);
    const insert = new Map([['first', 'a'.repeat(80)], ['oversize', 'b'.repeat(220)], ['last', 'value']]);
    const deleted = new Set(Array.from({ length: 12 }, (_, i) => `delete-${i}-${'x'.repeat(25)}`));
    const update = f.storage.updateItems({ insert, delete: deleted }, f.acknowledge);
    let settled = false; update.then(() => { settled = true; });
    for (let index = 0; !settled; index++) {
      assert.ok(f.pending[index], 'Chunk must be submitted before acknowledgment');
      assert.equal(f.acknowledgments.length, index);
      f.pending[index].resolve(); await drain();
    }
    await update;
    assert.deepEqual(f.acknowledgments.flatMap(batch => batch.insert ?? []), [...insert]);
    assert.deepEqual(f.acknowledgments.flatMap(batch => batch.delete ?? []), [...deleted]);
    assert.equal(f.calls.length, f.acknowledgments.length);
    assert.ok(f.calls.every(call => call.name === 'updateItems' && call.profile === 'profile' && call.workspace === 'workspace'));
  });

  test(`${variant}: rejected later chunk is not acknowledged or replayed`, async () => {
    const f = fixture(patched);
    const update = f.storage.updateItems({ insert: new Map([['first', 'a'.repeat(150)], ['second', 'b'.repeat(150)]]) }, f.acknowledge);
    const failure = assert.rejects(update, /injected IPC failure/);
    f.pending[0].resolve(); await drain();
    assert.equal(f.acknowledgments.length, 1);
    f.pending[1].reject(new Error('injected IPC failure')); await failure;
    assert.equal(f.calls.length, 2); assert.equal(f.acknowledgments.length, 1);
  });
}
