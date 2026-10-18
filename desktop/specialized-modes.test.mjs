import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { modes, gateDefault, configFallback, referencedHosts, inventoryFromFiles, decisionFailures, inventoryModes } from './specialized-modes.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const gates = `local_computer_use: { client: !0, default: !1 }, mac_computer_use: { client: !0, default: !1 },
  playwright_autorun: { client: !0, default: !0 }, playwright_mcp_provider: { client: !0, default: !0 },
  browser_features_access_control: { client: !0, default: !1 }, browser_subagent: { client: !0, default: !0 },
  mac_computer_use_sidecar_manifest: {
    client: !0,
    fallbackValues: { sidecarManifestUrl: "" },
  },
  windows_computer_use_sidecar_manifest: { client: !0, fallbackValues: { x64: "", arm64: "" } },`;
function fixture() {
  const files = {};
  for (const mode of modes) for (const [path, needle] of mode.symbols) files[path] = (files[path] ?? '') + `\n${needle}\n`;
  files['out/vs/workbench/workbench.desktop.main.js'] += gates;
  files['out/vs/workbench/workbench.glass.main.js'] = gates;
  files['extensions/cursor-browser-automation/dist/extension.js'] += '//# sourceMappingURL=http://go/sourcemap/x.map';
  const manifests = { 'cursor-computer-use': { activationEvents: ['onStartupFinished'], extensionKind: ['ui'], contributes: {} } };
  return { files, manifests };
}

test('gate defaults and config fallbacks are read from the bundled declarations', () => {
  assert.equal(gateDefault(gates, 'local_computer_use'), false);
  assert.equal(gateDefault(gates, 'playwright_autorun'), true);
  assert.equal(gateDefault(gates, 'missing_gate'), null);
  assert.throws(() => gateDefault(gates + gates.replace('local_computer_use: { client: !0, default: !1 }', 'local_computer_use: { client: !0, default: !0 }'), 'local_computer_use'), /Conflicting/);
  assert.equal(configFallback(gates, 'mac_computer_use_sidecar_manifest'), '{ sidecarManifestUrl: "" }');
  assert.equal(configFallback(gates, 'windows_computer_use_sidecar_manifest'), '{ x64: "", arm64: "" }');
  assert.deepEqual(referencedHosts('a https://Downloads.Cursor.com/x http://go/y https://example.com https://example.com'), ['downloads.cursor.com', 'example.com']);
});

test('inventory is deterministic and passes the decision facts for the expected input', () => {
  const { files, manifests } = fixture();
  const first = inventoryFromFiles(files, manifests, ['node', 'crepectl']);
  const second = inventoryFromFiles(Object.fromEntries(Object.entries(files).reverse()), manifests, ['crepectl', 'node']);
  assert.deepEqual(first, second);
  assert.doesNotMatch(JSON.stringify(first), /\d{4}-\d{2}-\d{2}T|\/home\//);
  assert.deepEqual(decisionFailures(first), []);
  assert.deepEqual(first.modes.map(mode => [mode.id, mode.proposal]), [
    ['image-input', 'include'], ['image-generation', 'exclude'], ['in-app-browser', 'include'],
    ['browser-automation', 'include-if-locally-reachable'], ['computer-use', 'explain-unavailable'],
    ['next-edit-prediction', 'decision-pending (OV-604)']]);
});

test('drift in a decision fact fails the inventory with a named reason', () => {
  const cases = [
    [files => { files['out/vs/workbench/workbench.desktop.main.js'] = files['out/vs/workbench/workbench.desktop.main.js'].replace('local_computer_use: { client: !0, default: !1 }', 'local_computer_use: { client: !0, default: !0 }'); }, /gates are not off|gate defaults differ/],
    [files => { files['out/vs/workbench/workbench.desktop.main.js'] = files['out/vs/workbench/workbench.desktop.main.js'].replace('sidecarManifestUrl: ""', 'sidecarManifestUrl: "https://x"'); }, /macOS sidecar manifest/],
    [files => { files['extensions/cursor-computer-use/dist/extension.js'] = files['extensions/cursor-computer-use/dist/extension.js'].replace('OpenVision computer use unavailable explanation v1', ''); }, /explanation is not installed/],
    [files => { files['out/vs/workbench/workbench.desktop.main.js'] = files['out/vs/workbench/workbench.desktop.main.js'].replace('isFusedCursorPredictionModel: false', ''); }, /fused prediction/],
    [files => { files['extensions/cursor-browser-automation/dist/extension.js'] += ' https://tracker.example/x'; }, /fixed network host/],
  ];
  for (const [mutate, reason] of cases) {
    const { files, manifests } = fixture();
    mutate(files);
    assert.match(decisionFailures(inventoryFromFiles(files, manifests, [])).join('\n'), reason);
  }
  const { files, manifests } = fixture();
  assert.match(decisionFailures(inventoryFromFiles(files, manifests, ['Cursor Computer Use.app'])).join('\n'), /helper is bundled/);
  delete files['out/main.js'];
  assert.throws(() => inventoryFromFiles(files, manifests), /Inventory input missing: out\/main.js/);
});

test('built runtime input satisfies the proposed scope', { skip: !existsSync(join(root, 'source/app/out/main.js')) }, async () => {
  const inventory = await inventoryModes(join(root, 'source/app'));
  assert.deepEqual(decisionFailures(inventory), []);
});
