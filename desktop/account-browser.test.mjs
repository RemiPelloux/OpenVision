import assert from 'node:assert/strict';
import test from 'node:test';
import vm from 'node:vm';
import { readFileSync } from 'node:fs';
import { customizeAccountBrowser } from './account-browser-customization.mjs';

const nativeBrowserFixture = readFileSync(new URL('./fixtures/account-browser.txt', import.meta.url), 'utf8');

function fixture(openExternal) {
  const events = [];
  const Class = vm.runInNewContext(`(${customizeAccountBrowser(nativeBrowserFixture).trim()})`, {
    shell: { openExternal }, B4: () => true, G: { http: 'http', https: 'https' },
  });
  const owner = new Class();
  owner.environmentMainService = { unsetSnapExportedVariables: () => events.push('unset'), restoreSnapExportedVariables: () => events.push('restore') };
  owner.configurationService = { getValue: () => undefined };
  owner.reportShellExternalFailure = () => events.push('reported-failure');
  return { owner, events };
}

test('delayed shell failure remains pending, then returns false and restores environment after reporting', async () => {
  let fail, settled = false;
  const f = fixture(() => new Promise((resolve, reject) => { fail = reject; }));
  const pending = f.owner.openExternal(1, 'https://example.invalid').then(value => { settled = true; return value; });
  await Promise.resolve();
  assert.equal(settled, false); assert.deepEqual(f.events, ['unset']);
  fail(new Error('OS handler rejected the launch'));
  assert.equal(await pending, false);
  assert.deepEqual(f.events, ['unset', 'reported-failure', 'restore']);
});

test('delayed shell success returns true only after the OS launch promise settles', async () => {
  let finish, settled = false;
  const f = fixture(() => new Promise(resolve => { finish = resolve; }));
  const pending = f.owner.openExternal(1, 'https://example.invalid').then(value => { settled = true; return value; });
  await Promise.resolve(); assert.equal(settled, false);
  finish(); assert.equal(await pending, true); assert.deepEqual(f.events, ['unset', 'restore']);
});

test('configured browser path preserves its actual result and source transformation is idempotent', async () => {
  const f = fixture(() => { throw new Error('Default browser must not run'); });
  f.owner.openExternalBrowser = async () => false;
  assert.equal(await f.owner.openExternal(1, 'https://example.invalid', 'configured-browser'), false);
  const result = customizeAccountBrowser(nativeBrowserFixture);
  assert.equal(customizeAccountBrowser(result), result);
  assert.throws(() => customizeAccountBrowser(nativeBrowserFixture.replace('doOpenShellExternal(e, t), !0', 'doOpenShellExternal(e, t), !1')), /fallback changed/);
  assert.throws(() => customizeAccountBrowser(nativeBrowserFixture + nativeBrowserFixture), /ambiguous/);
});
