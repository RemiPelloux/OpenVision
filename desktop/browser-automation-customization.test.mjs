import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { explainLocalBrowserBlock, browserUnavailableMessage } from './browser-automation-customization.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
// Shape of the recovered MCPService owner (3.21.13 desktop variant).
const fixture = `
const zc = {}; zc.localMode = false;
const cDn = "Server is blocked by team admin", lDn = "Server is not in the team allowlist";
class McpService {
          getMcpAdminBlockMessage(e) {
            const n = this.adminSettingsService.getCached().allowedMcpConfiguration;
            if (n?.disableAll === !0) return cDn;
            const i = e.identifier === Iie || e.identifier === xV,
              r = this.reactiveStorageService.applicationUserPersistentStorage.isEnterprise;
            if (i)
              return r !== !1
                ? this.adminSettingsService.getBrowserFeaturesForCurrentIdentity() === !0
                  ? void 0
                  : cDn
                : void 0;
            if (!n) return;
            return "policy";
          }
          reconnects(i) { return (i.error === cDn || i.error === lDn); }
}
return { McpService, zc };`;
const Iie = 'cursor-ide-browser', xV = 'cursor-browser-extension';

function service(text, { local, enterprise, features, disableAll = false }) {
  const { McpService, zc } = new Function('Iie', 'xV', text)(Iie, xV);
  zc.localMode = local;
  return Object.assign(new McpService(), {
    adminSettingsService: { getCached: () => ({ allowedMcpConfiguration: disableAll ? { disableAll: true } : undefined }),
      getBrowserFeaturesForCurrentIdentity: () => features },
    reactiveStorageService: { applicationUserPersistentStorage: { isEnterprise: enterprise } } });
}

test('local profiles see why the browser server is blocked; every block decision is unchanged', () => {
  const patched = explainLocalBrowserBlock(fixture, 'desktop');
  assert.equal(explainLocalBrowserBlock(patched, 'desktop'), patched, 'idempotent');
  for (const local of [true, false]) for (const enterprise of [undefined, true, false])
    for (const features of [undefined, true, false]) for (const disableAll of [false, true]) {
      const state = { local, enterprise, features, disableAll };
      const before = service(fixture, state).getMcpAdminBlockMessage({ identifier: Iie });
      const after = service(patched, state).getMcpAdminBlockMessage({ identifier: Iie });
      assert.equal(after === undefined, before === undefined, `block decision unchanged for ${JSON.stringify(state)}`);
      const explained = !disableAll && local && enterprise === undefined && features !== true;
      assert.equal(after, explained ? browserUnavailableMessage : before, JSON.stringify(state));
      assert.equal(service(patched, state).getMcpAdminBlockMessage({ identifier: 'user-other' }),
        service(fixture, state).getMcpAdminBlockMessage({ identifier: 'user-other' }), 'other servers unchanged');
    }
  const instance = service(patched, { local: true });
  for (const error of [browserUnavailableMessage, 'Server is blocked by team admin', 'Server is not in the team allowlist'])
    assert.equal(instance.reconnects({ error }), true, `a cleared block reconnects: ${error}`);
  assert.equal(instance.reconnects({ error: 'other failure' }), false);
});

test('browser block explanation refuses a changed owner', () => {
  assert.throws(() => explainLocalBrowserBlock(fixture.replace('return r !== !1', 'return r === !0'), 'desktop'), /owner missing/);
  assert.throws(() => explainLocalBrowserBlock(fixture.replace('(i.error === cDn || i.error === lDn)', 'false'), 'desktop'), /reconnect owner/);
  assert.throws(() => explainLocalBrowserBlock(fixture, 'glass'), /local-mode flag missing/);
});

for (const variant of ['desktop', 'glass']) {
  const path = join(root, `source/app/out/vs/workbench/workbench.${variant}.main.js`);
  test(`built ${variant} workbench carries one browser block explanation`, { skip: !existsSync(path) }, async () => {
    const text = explainLocalBrowserBlock(await readFile(path, 'utf8'), variant);
    assert.equal(text.split(browserUnavailableMessage).length, 3, 'message in the block and in the reconnect check');
  });
}
