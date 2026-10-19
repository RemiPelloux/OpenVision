import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { disableSpellcheckDownloads, removeControlUrl, controlManifestGuard, setContributedDefaults, extensionDefaults,
  disableWorkbenchHostedReports, refuseAnonymousHostedCalls, transportTargets, disableDeviceIdFile,
  localGateDefaults, setLocalGateDefaults, emptyAnonymousTeamSettings } from './network-defaults.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const app = join(root, 'source/app');

test('spellcheck dictionary downloads are disabled for every session, idempotently', () => {
  const main = 'function f(e, t) {\n  e.commandLine.appendSwitch("enable-features", t);\n}\nconst w = { spellcheck: !1, };\n';
  const once = disableSpellcheckDownloads(main);
  assert.equal(disableSpellcheckDownloads(once), once);
  const calls = [];
  const fakeApp = { commandLine: { appendSwitch() {} }, on(event, listener) {
    assert.equal(event, 'session-created');
    listener({ setSpellCheckerEnabled: value => calls.push(['enabled', value]), setSpellCheckerLanguages: value => calls.push(['languages', value]) });
  } };
  new Function('fakeApp', `${once}\nf(fakeApp, "x");`)(fakeApp);
  assert.deepEqual(calls, [['enabled', false], ['languages', []]]);
  assert.throws(() => disableSpellcheckDownloads('const w = { spellcheck: !1, };'), /switch owner/);
});

test('extension control manifest URL is removed only while the empty-manifest guard exists', () => {
  const product = { extensionsGallery: { serviceUrl: 'https://gallery.example', controlUrl: 'https://control.example' } };
  assert.deepEqual(removeControlUrl(product, [controlManifestGuard]), { extensionsGallery: { serviceUrl: 'https://gallery.example' } });
  assert.throws(() => removeControlUrl(product, ['changed']), /control manifest contract/);
});

test('bundled-extension network defaults are set at the contributed configuration', () => {
  const manifest = { contributes: { configuration: [{ properties: { a: { type: 'boolean', default: true } } }] } };
  assert.equal(setContributedDefaults(manifest, { a: false }).contributes.configuration[0].properties.a.default, false);
  assert.equal(manifest.contributes.configuration[0].properties.a.default, true, 'input is not mutated');
  assert.throws(() => setContributedDefaults(manifest, { missing: false }), /contract missing/);
  assert.throws(() => setContributedDefaults(manifest, { a: 'off' }), /type changed/);
});

test('workbench experiment refresh and Cursor Tab fate reports never reach the backend client', async () => {
  const text = `const Experiments = class {
  constructor() { this._initialized = !1; this.events = []; this._onDidChangeGates = { fire: e => this.events.push(e) }; }
  isInitialized() {
    return this._initialized;
  }
};
const Owner = class {
  constructor(e) { (this.experimentService = e); }
  _startPolling() { this.timer = setInterval(() => {}, 1); }
  async _refreshBootstrapFromServer(e = "poll") { return this._doRefreshBootstrapFromServer(e); }
  async _doRefreshBootstrapFromServer(e) { const n = await this.client(); return n.bootstrapStatsig({}); }
};
const Cpp = class {
  recordCppFate(e, t, n, i) { this.cppClient().then(o => o.recordCppFate({})); }
};
return { Experiments, Owner, Cpp };`;
  const patched = disableWorkbenchHostedReports(text);
  assert.equal(disableWorkbenchHostedReports(patched), patched);
  const { Experiments, Owner, Cpp } = new Function(patched)();
  const experiments = new Experiments();
  const owner = Object.assign(new Owner(experiments), { client() { throw Error('backend touched'); } });
  owner._startPolling();
  assert.equal(owner.timer, undefined);
  assert.equal(await owner._refreshBootstrapFromServer(), undefined);
  // Initialized once with bundled/local defaults, like upstream hydration; a later refusal is a no-op.
  assert.equal(experiments.isInitialized(), true); assert.deepEqual(experiments.events, [{}]);
  await owner._refreshBootstrapFromServer('auth_change'); assert.deepEqual(experiments.events, [{}]);
  const hydrated = new Experiments(); hydrated._initialized = !0;
  await new Owner(hydrated)._refreshBootstrapFromServer(); assert.deepEqual(hydrated.events, [], 'a persisted bootstrap stays authoritative');
  // Builds patched with v1 upgrade in place.
  const v1 = patched.replace(/disabled v2 \*\/ .*? return; \}/, 'disabled v1 */ return; }');
  assert.notEqual(v1, patched); assert.equal(disableWorkbenchHostedReports(v1), patched);
  assert.throws(() => disableWorkbenchHostedReports(text.replace('return this._initialized;', 'return !0;')), /initialization contract/);
  assert.throws(() => disableWorkbenchHostedReports(text.replace('(this.experimentService = e)', '(this.x = e)')), /refresh service contract/);
  Object.assign(new Cpp(), { cppClient() { throw Error('fate sent'); } }).recordCppFate('id', 1, '.js', 0);
  assert.throws(() => disableWorkbenchHostedReports(text.replace('bootstrapStatsig', 'other')), /bootstrap caller/);
});

const minified = `const T = class {
  async applyAuthorization(t, e) {
    const p = this.getAccessToken();
    if (void 0 !== p) t.header.set("Authorization", \`Bearer \${e.maybeUseCppSpoofToken ? this.host.maybeGetSpoofedCppAccessToken(p, e.baseUrl) : p}\`);
    else this.debugLog.warn("[TransportFactory] Authorization header omitted: no access token available");
    return "sent";
  }
};
return T;`;
const daemon = `const T = class {
  async applyAuthorization(req, options2) {
    const accessToken = this.getAccessToken();
    if (accessToken === void 0) { this.debugLog.warn("[TransportFactory] Authorization header omitted: no access token available"); return "sent"; }
    req.header.set("Authorization", \`Bearer \${options2.maybeUseCppSpoofToken ? this.host.maybeGetSpoofedCppAccessToken(accessToken, options2.baseUrl) : accessToken}\`);
    return "sent";
  }
};
return T;`;

for (const [name, text] of [['minified', minified], ['daemon', daemon]]) {
  test(`anonymous Cursor RPCs are refused before sending (${name} transport)`, async () => {
    const patched = refuseAnonymousHostedCalls(text);
    assert.equal(refuseAnonymousHostedCalls(patched), patched);
    const Transport = new Function(patched)();
    const transport = token => Object.assign(new Transport(), { getAccessToken: () => token,
      debugLog: { warn() {} }, host: { maybeGetSpoofedCppAccessToken: value => value } });
    const request = () => ({ header: new Map() });
    await assert.rejects(transport(undefined).applyAuthorization(request(), { baseUrl: 'https://api2.cursor.sh' }), /signed-in Cursor account/);
    assert.equal(await transport(undefined).applyAuthorization(request(), { baseUrl: 'http://127.0.0.1:4000' }), 'sent');
    assert.equal(await transport(undefined).applyAuthorization(request(), { baseUrl: 'http://localhost:4000/x' }), 'sent');
    assert.equal(await transport('token').applyAuthorization(request(), { baseUrl: 'https://api2.cursor.sh' }), 'sent');
  });
}

test('local gate defaults keep project scopes in Customize without a Statsig bootstrap', () => {
  assert.deepEqual(localGateDefaults, { customize_manage_scope_multiselect: true, mcp_shared_process_transports: true });
  const table = 'F = { customize_page: { client: !0, default: !1 },\n customize_manage_scope_multiselect: { client: !0, default: !1 },\n mcp_shared_process_transports: { client: !0, default: !1 },\n x: 1 };';
  const once = setLocalGateDefaults(table);
  assert.match(once, /customize_manage_scope_multiselect: \{ client: !0, default: !0 \}/);
  assert.match(once, /mcp_shared_process_transports: \{ client: !0, default: !0 \}/);
  assert.match(once, /customize_page: \{ client: !0, default: !1 \}/, 'other gates are unchanged');
  assert.equal(setLocalGateDefaults(once), once);
  assert.throws(() => setLocalGateDefaults('F = {};'), /gate default missing/);
  assert.throws(() => setLocalGateDefaults(table + table), /ambiguous/);
});

test('anonymous-call guard refuses a changed transport contract', () => {
  assert.throws(() => refuseAnonymousHostedCalls(minified.replace('Authorization header omitted', 'changed')), /authorization owner/);
});

test('machine-wide device id file is replaced by the owner fallback', async () => {
  const text = `async function sW(e) {\n  try {\n    return await (await import("@vscode/deviceid")).getDeviceId();\n  } catch (t) {\n    return (e(t), lt());\n  }\n}\nreturn sW;`;
  const patched = disableDeviceIdFile(text);
  assert.equal(disableDeviceIdFile(patched), patched);
  assert.doesNotMatch(patched, /@vscode\/deviceid/);
  const read = new Function('lt', patched)(() => 'fallback-uuid');
  assert.equal(await read(() => { throw Error('error path'); }), 'fallback-uuid');
  assert.throws(() => disableDeviceIdFile('return 1;'), /Device id owner/);
});

test('anonymous refusals of the team-settings bridges return the not-in-team empty answer', async () => {
  const text = `const Methods = {
      getTeamReposOrEmptyIfNotInTeam: {
        name: "GetTeamReposOrEmptyIfNotInTeam",
        I: Rq,
        O: Rs,
        kind: 1,
      },
      getTeamAdminSettingsOrEmptyIfNotInTeam: {
        name: "GetTeamAdminSettingsOrEmptyIfNotInTeam",
        I: Aq,
        O: As,
        kind: 1,
      } };
const Bridge = class {
  async $getTeamAdminSettings() {
    return await (
      await this.cursorAuthenticationService.dashboardClient()
    ).getTeamAdminSettingsOrEmptyIfNotInTeam(new Aq({}));
  }
  async $getTeamRepos() {
    return await (
      await this.cursorAuthenticationService.dashboardClient()
    ).getTeamReposOrEmptyIfNotInTeam(new Rq({}));
  }
};
return Bridge;`;
  const patched = emptyAnonymousTeamSettings(text);
  assert.equal(emptyAnonymousTeamSettings(patched), patched);
  class Aq {} class Rq {} class As { constructor() { this.kind = 'empty-admin'; } } class Rs { constructor() { this.kind = 'empty-repos'; } }
  const Bridge = new Function('Aq', 'Rq', 'As', 'Rs', patched)(Aq, Rq, As, Rs);
  const bridge = client => Object.assign(new Bridge(), { cursorAuthenticationService: { dashboardClient: async () => client } });
  const refused = Object.assign(Error('[unknown] OpenVision: Cursor service calls require a signed-in Cursor account'),
    { rawMessage: 'OpenVision: Cursor service calls require a signed-in Cursor account' });
  const refusing = { getTeamAdminSettingsOrEmptyIfNotInTeam: async () => { throw refused; }, getTeamReposOrEmptyIfNotInTeam: async () => { throw refused; } };
  assert.equal((await bridge(refusing).$getTeamAdminSettings()).kind, 'empty-admin');
  assert.equal((await bridge(refusing).$getTeamRepos()).kind, 'empty-repos');
  const answered = { getTeamAdminSettingsOrEmptyIfNotInTeam: async request => ({ request }) };
  assert.ok((await bridge(answered).$getTeamAdminSettings()).request instanceof Aq, 'signed-in calls are unchanged');
  const failing = { getTeamAdminSettingsOrEmptyIfNotInTeam: async () => { throw Error('unavailable'); } };
  await assert.rejects(bridge(failing).$getTeamAdminSettings(), /unavailable/, 'other errors still fail closed');
  assert.throws(() => emptyAnonymousTeamSettings(text.replace('new Aq({})', 'new Rq({})')), /bridge contract changed/);
});

const built = existsSync(join(app, 'out/main.js'));
test('built source carries every network-default owner change', { skip: !built && 'source/app is not built' }, async () => {
  const read = relative => readFile(join(app, relative), 'utf8');
  const main = await read('out/main.js');
  assert.ok(disableDeviceIdFile(disableSpellcheckDownloads(main)) === main, 'main.js');
  const cli = await read('out/vs/code/node/cliProcessMain.js');
  assert.ok(disableDeviceIdFile(cli) === cli, 'cliProcessMain.js');
  for (const relative of ['out/vs/workbench/workbench.desktop.main.js', 'out/vs/workbench/workbench.glass.main.js']) {
    const text = await read(relative);
    assert.ok(disableWorkbenchHostedReports(text) === text, relative);
    assert.ok(setLocalGateDefaults(text) === text, `${relative} local gate defaults`);
    assert.ok(emptyAnonymousTeamSettings(text) === text, `${relative} anonymous team settings`);
  }
  for (const relative of transportTargets) {
    const text = await read(relative);
    assert.ok(refuseAnonymousHostedCalls(text) === text, relative);
  }
  const product = JSON.parse(await read('product.json'));
  assert.equal(product.extensionsGallery.controlUrl, undefined);
  assert.ok(product.extensionsGallery.serviceUrl, 'Marketplace browsing stays available');
  for (const [relative, defaults] of extensionDefaults) {
    const manifest = JSON.parse(await read(relative));
    assert.deepEqual(setContributedDefaults(manifest, defaults), manifest, relative);
  }
});
