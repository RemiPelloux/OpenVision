import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { runInNewContext } from 'node:vm';
import { closeOwnedMcpTransports, mcpAttemptOwner } from './mcp-attempt-customization.mjs';

const variants = [
  ['process', 'out/vs/code/electron-utility/mcpProcess/mcpProcessMain.js', 'Y'],
  ['extension', 'extensions/cursor-mcp/dist/main.js', 'j_'],
];
function instance(text, loggerName) {
  const owner = mcpAttemptOwner(text), errors = [];
  const Type = runInNewContext(`(${text.slice(owner.start, owner.end)})`, {
    [loggerName]: () => ({ debug() {}, error: (...args) => errors.push(args) }),
  });
  return { attempt: new Type('fixture'), Type, errors };
}
for (const [name, relative, logger] of variants) {
  const source = readFile(new URL(`../../cursor/readable/app/${relative}`, import.meta.url), 'utf8');
  test(`${name}: cancellation before transport attachment closes the late resource; original code reproduces the leak`, async () => {
    const original = await source, patched = closeOwnedMcpTransports(original);
    assert.equal(closeOwnedMcpTransports(patched), patched);
    for (const [text, expected] of [[original, 0], [patched, 1]]) {
      const { attempt } = instance(text, logger); let closed = 0;
      const client = { transport: undefined, close() { return this.transport?.close(); } };
      attempt.setClient(client); await attempt.requestClose('cancel-before-transport');
      client.transport = { close: async () => { closed++; } };
      await attempt.requestClose('cancelled-after-connect');
      assert.equal(closed, expected);
    }
  });
  test(`${name}: close owns its captured resource across replacement and coalesces concurrent cleanup`, async () => {
    const { attempt } = instance(closeOwnedMcpTransports(await source), logger);
    const closed = [], deferred = Promise.withResolvers();
    const old = { close: async () => { closed.push('old'); await deferred.promise; } };
    const next = { close: async () => { closed.push('next'); } };
    const client = { transport: old }; attempt.setClient(client);
    const first = attempt.requestClose('first'), duplicate = attempt.requestClose('duplicate');
    client.transport = next; const second = attempt.requestClose('replacement');
    deferred.resolve(); await Promise.all([first, duplicate, second]);
    assert.deepEqual(closed, ['old', 'next']);
    attempt.commit(client); await attempt.requestClose('after-commit');
    assert.deepEqual(closed, ['old', 'next']);
  });
  test(`${name}: failed close retains its owner/resource and a later request retries even after client replacement`, async () => {
    const { attempt, Type, errors } = instance(closeOwnedMcpTransports(await source), logger);
    const failure = new Error('fixture close failed'); let calls = 0;
    const resource = { close: async () => { if (++calls === 1) throw failure; } };
    attempt.setClient({ transport: resource }); await attempt.requestClose('first');
    assert.equal(attempt.openvisionFailedClosures.get(resource), failure);
    assert.ok(Type.openvisionFailedAttempts.has(attempt)); assert.equal(errors.length, 1);
    attempt.setClient({ transport: undefined }); await attempt.requestClose('retry');
    assert.equal(calls, 2); assert.equal(attempt.openvisionFailedClosures.size, 0);
    assert.equal(Type.openvisionFailedAttempts.has(attempt), false);
  });
}
