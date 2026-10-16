import { test } from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import { readFile } from 'node:fs/promises';
import { disableHostedFileSync, disableHostedRerank, rerankUnavailable } from './project-data-customization.mjs';

// Shape of the recovered 3.21.13 owner (workbench.desktop.main.js).
const owner = `var U9o = class extends Se {
  constructor(e) { super(); this.aiService = e; }
  async rerankTerminalCmdK(e) {
    const n = await this.aiService.cmdKClient();
    return n.rerankTerminalCmdKContext({ contextItems: e }, { headers: {} });
  }
  async rerankCmdK(e) {
    const n = await this.aiService.cmdKClient(),
      i = !1;
    return n.rerankCmdKContext({ contextItems: e, useReranker: i }, { headers: {} });
  }
  async getPreparedImagesData(e) { return e; }
};`;

function load(text) {
  const context = { Se: class {}, result: undefined };
  vm.runInNewContext(`${text}; result = U9o;`, context);
  return context.result;
}

test('hosted rerank methods refuse before any client or transport is touched', async () => {
  const Owner = load(disableHostedRerank(owner));
  const service = new Owner({ cmdKClient() { throw new Error('hosted client must not be created'); } });
  for (const method of ['rerankCmdK', 'rerankTerminalCmdK'])
    await assert.rejects(service[method]([{ text: 'OVC-CONTENT' }]), error =>
      error.message === rerankUnavailable && error.name === 'OpenVisionLocalOnly');
  assert.equal(await service.getPreparedImagesData('kept'), 'kept');
});

test('the transformation is idempotent and leaves unrelated code unchanged', () => {
  const once = disableHostedRerank(owner);
  assert.equal(disableHostedRerank(once), once);
  assert.ok(once.includes('async getPreparedImagesData(e) { return e; }'));
  assert.ok(!once.includes('rerankCmdKContext('));
});

test('drift guards reject missing, ambiguous or changed owners', () => {
  assert.throws(() => disableHostedRerank('var x = 1;'), /missing or ambiguous/);
  assert.throws(() => disableHostedRerank(`${owner}\n${owner}`), /missing or ambiguous/);
  assert.throws(() => disableHostedRerank(owner.replace('n.rerankCmdKContext(', 'n.somethingElse(')), /transport contract changed: rerankCmdK/);
  assert.throws(() => disableHostedRerank(owner.replace(/async rerankTerminalCmdK[\s\S]*?\n  }\n/, '')), /method missing: rerankTerminalCmdK/);
});

test('applies to the recovered workbench bundles when available', async t => {
  for (const relative of ['out/vs/workbench/workbench.desktop.main.js', 'out/vs/workbench/workbench.glass.main.js']) {
    let text;
    for (const base of [process.env.OPENVISION_RECOVERY_DIR && `${process.env.OPENVISION_RECOVERY_DIR}/readable/app/`,
      new URL('../backups/project-data/', import.meta.url).pathname])
      if (base && !text) text = await readFile(base + relative, 'utf8').catch(() => undefined);
    if (!text) { t.skip('recovered workbench not available'); return; }
    const after = disableHostedRerank(text);
    assert.equal(after.match(/hosted context reranking disabled v1/g).length, 2, relative);
    assert.equal(disableHostedRerank(after), after);
  }
});

// Shape of the recovered file-sync client (cursor-always-local).
const fileSync = `class i_ {
  constructor(t, e) { this.config = t; this.aiConnectTransport = e; }
  throwIfFSDisabled() { if (!this.config.isEnabledFromServer) throw new Error("File sync is disabled"); }
  async uploadFile(t) { this.throwIfFSDisabled(); return this.aiConnectTransport.getFilesyncClient().fSUploadFile(t); }
  async syncFile(t) { this.throwIfFSDisabled(); return this.aiConnectTransport.getFilesyncClient().fSSyncFile(t); }
  async isEnabledForUserFromServer() {
    try {
      const t = this.aiConnectTransport.getFilesyncClient(), e = await t.fSIsEnabledForUser({ uuid: "u" });
      return e.enabled;
    } catch (t) { return !1; }
  }
  async fsConfig() { this.throwIfFSDisabled(); return this.aiConnectTransport.getFilesyncClient().fSConfig({}); }
  async fsConfigUpdate() {
    this.config.isEnabledFromServer = await this.isEnabledForUserFromServer();
    try { this.config.fsConfig = await this.fsConfig(); } catch { this.config.fsConfig = void 0; }
  }
}`;

test('file sync answers disabled locally and never builds a hosted client', async () => {
  const after = disableHostedFileSync(fileSync);
  assert.equal(disableHostedFileSync(after), after);
  const context = { result: undefined };
  vm.runInNewContext(`${after}; result = i_;`, context);
  const transport = { getFilesyncClient() { throw new Error('hosted file-sync client must not be created'); } };
  const client = new context.result({ isEnabledFromServer: true }, transport);
  await client.fsConfigUpdate();
  assert.equal(client.config.isEnabledFromServer, false);
  assert.equal(client.config.fsConfig, undefined);
  await assert.rejects(client.uploadFile({ relativeWorkspacePath: 'a.js', contents: 'OVC' }), /File sync is disabled/);
  await assert.rejects(client.syncFile({ relativeWorkspacePath: 'a.js' }), /File sync is disabled/);
});

test('file-sync drift guards reject changed contracts', () => {
  assert.throws(() => disableHostedFileSync('class x {}'), /missing or ambiguous/);
  assert.throws(() => disableHostedFileSync(fileSync.replace('t.fSIsEnabledForUser(', 't.other(')), /enablement contract changed/);
  assert.throws(() => disableHostedFileSync(fileSync.replace('async syncFile(t) { this.throwIfFSDisabled();', 'async syncFile(t) {')), /guard contract changed: syncFile/);
});

test('applies to the recovered file-sync extension when available', async t => {
  const base = process.env.OPENVISION_RECOVERY_DIR && `${process.env.OPENVISION_RECOVERY_DIR}/readable/app/`;
  const text = base && await readFile(base + 'extensions/cursor-always-local/dist/main.js', 'utf8').catch(() => undefined);
  if (!text) { t.skip('recovered extension not available'); return; }
  const after = disableHostedFileSync(text);
  assert.match(after, /hosted file sync disabled v1/);
  assert.equal(disableHostedFileSync(after), after);
});
