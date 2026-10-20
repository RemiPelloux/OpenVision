// OV-704: deterministic static inventory of specialized modes (image input,
// image generation, in-app browser, browser automation, computer use) and the
// next-edit prediction path of OV-604, read from the built runtime input. The
// output holds no timestamps or machine paths, so equal inputs give equal JSON.
// Decision-critical facts are asserted: a drift fails the inventory instead of
// silently changing the proposed scope.
import { readFile, readdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { join } from 'node:path';

const workbench = 'out/vs/workbench/workbench.desktop.main.js';
const glass = 'out/vs/workbench/workbench.glass.main.js';
const main = 'out/main.js';
const computerUse = 'extensions/cursor-computer-use/dist/extension.js';
const browserAutomation = 'extensions/cursor-browser-automation/dist/extension.js';
const simpleBrowser = 'extensions/simple-browser/dist/extension.js';
const agentExec = 'extensions/cursor-agent-exec/dist/main.js';

export const modes = [
  { id: 'image-input', name: 'Image input in Agent chat', proposal: 'include',
    reason: 'Local, provider-backed; gated by the user-specified or discovered image capability. Picker failures are reported and rejected files removed.',
    gates: [], configs: [],
    symbols: [[workbench, 'selectedImages'], [workbench, 'doesModelSupportImages'],
      [workbench, 'OpenVision image input capability gate'], [workbench, 'OpenVision picker image failure explained v1'],
      [workbench, 'OpenVision rejected image file removed v1']] },
  { id: 'image-generation', name: 'Image generation tool (GenerateImage)', proposal: 'hidden (owner decision)',
    reason: 'GenerateImage called the configured provider at /v1/images/generations; hidden for this release, revisit with live providers (OV-205).',
    gates: [], configs: [],
    symbols: [[workbench, 'generateImageToolCall'], [agentExec, 'images/generations'],
      [agentExec, 'OpenVision image generation hidden v1']] },
  { id: 'in-app-browser', name: 'In-app browser editor (simple-browser opener, WebContentsView)', proposal: 'include',
    reason: 'Runs inside Electron with a sandboxed WebContentsView; no vendor service or download.',
    gates: [], configs: [],
    symbols: [[workbench, 'workbench.action.openBrowserEditor'], [main, 'WebContentsView'],
      [simpleBrowser, 'workbench.action.openBrowserEditor']], extensions: ['simple-browser'] },
  { id: 'browser-automation', name: 'Agent browser automation (cursor-ide-browser MCP provider)', proposal: 'explain-unavailable',
    reason: 'Offered to the local Agent but refused by Cursor team policy without a Cursor account (native run); OpenVision states that reason instead of "blocked by team admin".',
    gates: ['playwright_autorun', 'playwright_mcp_provider', 'browser_features_access_control', 'browser_subagent'], configs: [],
    symbols: [[browserAutomation, '"cursor-ide-browser"'], [browserAutomation, '"browser_navigate"'],
      [browserAutomation, '"browser_snapshot"'], [browserAutomation, '"browser_click"'], [browserAutomation, '"browser_type"'],
      [browserAutomation, '"browser_take_screenshot"'], [browserAutomation, '"browser_cdp"'],
      [workbench, 'cursor.browserView.takeScreenshot'], [workbench, 'OpenVision local browser server explanation v1'],
      [workbench, 'OpenVision failed browser tool row v1']],
    extensions: ['cursor-browser-automation'] },
  { id: 'computer-use', name: 'Computer use (cursor-computer-use MCP provider)', proposal: 'explain-unavailable',
    reason: 'Backends exist for macOS and Windows only; Linux returns before any gate, manifest or download. OpenVision logs why.',
    gates: ['local_computer_use', 'mac_computer_use'],
    configs: ['mac_computer_use_sidecar_manifest', 'windows_computer_use_sidecar_manifest'],
    symbols: [[computerUse, 'downloads.cursor.com'], [computerUse, 'OpenVision computer use unavailable explanation v2'],
      [workbench, 'computerUseSupported: !1']], extensions: ['cursor-computer-use'] },
  { id: 'next-edit-prediction', name: 'Next-edit (cursor) prediction', proposal: 'decision-pending (OV-604)',
    reason: 'Local Tab configuration sets isFusedCursorPredictionModel false; prediction RPC needs the hosted backend.',
    gates: [], configs: [],
    symbols: [[workbench, 'StreamNextCursorPrediction'], [workbench, 'isFusedCursorPredictionModel: false']] },
];

const count = (text, needle) => text.split(needle).length - 1;
const sha256 = text => createHash('sha256').update(text).digest('hex');

export function gateDefault(text, name) {
  const values = [...text.matchAll(new RegExp(`\\b${name}: \\{ client: !0, default: (!0|!1) \\}`, 'g'))].map(match => match[1] === '!0');
  if (!values.length) return null;
  if (new Set(values).size !== 1) throw new Error(`Conflicting gate defaults: ${name}`);
  return values[0];
}

// Client dynamic configs declare a flat fallback object; report it verbatim.
export function configFallback(text, name) {
  const values = [...text.matchAll(new RegExp(`\\b${name}: \\{\\s*client: !0,\\s*fallbackValues: (\\{[^{}]*\\}),?\\s*\\}`, 'g'))]
    .map(match => match[1].replace(/\s+/g, ' '));
  if (new Set(values).size > 1) throw new Error(`Conflicting config fallbacks: ${name}`);
  return values[0] ?? null;
}

export function referencedHosts(text) {
  return [...new Set([...text.matchAll(/https?:\/\/([a-z0-9-]+(?:\.[a-z0-9-]+)+)/gi)].map(match => match[1].toLowerCase()))].sort();
}

export function inventoryFromFiles(files, manifests = {}, helpers = []) {
  const read = path => {
    if (!(path in files)) throw new Error(`Inventory input missing: ${path}`);
    return files[path];
  };
  const result = { schema: 1, inputs: Object.fromEntries(Object.keys(files).sort().map(path => [path, sha256(files[path])])),
    helpers: [...helpers].sort(), modes: [] };
  for (const mode of modes) {
    const entry = { id: mode.id, name: mode.name, proposal: mode.proposal, reason: mode.reason,
      symbols: mode.symbols.map(([path, needle]) => ({ path, needle, count: count(read(path), needle) })),
      gates: Object.fromEntries(mode.gates.map(name => [name, gateDefault(read(workbench), name)])),
      configs: Object.fromEntries(mode.configs.map(name => [name, configFallback(read(workbench), name)])) };
    if (mode.extensions) entry.extensions = Object.fromEntries(mode.extensions.map(id => {
      const manifest = manifests[id] ?? {};
      const dist = mode.symbols.find(([path]) => path.startsWith(`extensions/${id}/`))?.[0];
      return [id, { activationEvents: manifest.activationEvents ?? [], extensionKind: manifest.extensionKind ?? [],
        contributes: Object.keys(manifest.contributes ?? {}).sort(), hosts: dist ? referencedHosts(read(dist)) : [] }];
    }));
    result.modes.push(entry);
  }
  result.glassGatesAgree = modes.flatMap(mode => mode.gates).every(name => gateDefault(read(glass), name) === gateDefault(read(workbench), name));
  return result;
}

// Facts the proposed scope depends on. Each failure names the drifted fact.
export function decisionFailures(inventory) {
  const mode = id => inventory.modes.find(item => item.id === id);
  const symbol = (id, needle) => mode(id).symbols.find(item => item.needle === needle)?.count ?? 0;
  const failures = [];
  const expect = (condition, message) => { if (!condition) failures.push(message); };
  const cu = mode('computer-use');
  expect(cu.gates.local_computer_use === false && cu.gates.mac_computer_use === false, 'computer-use gates are not off by default');
  expect(/sidecarManifestUrl: ""/.test(cu.configs.mac_computer_use_sidecar_manifest ?? ''), 'macOS sidecar manifest fallback is not empty');
  expect(/x64: "", arm64: ""/.test(cu.configs.windows_computer_use_sidecar_manifest ?? ''), 'Windows sidecar manifest fallback is not empty');
  expect(symbol('computer-use', 'OpenVision computer use unavailable explanation v2') === 1, 'computer-use explanation is not installed');
  expect(symbol('computer-use', 'computerUseSupported: !1') === 1, 'chat environment no longer reports computer use unsupported');
  expect(!inventory.helpers.some(name => /computer use/i.test(name)), 'a computer-use helper is bundled');
  expect(cu.extensions['cursor-computer-use'].hosts.every(host => host === 'downloads.cursor.com'), 'computer-use references a new host');
  expect(symbol('image-input', 'OpenVision image input capability gate') === 1, 'Agent image input gate is not installed');
  expect(symbol('next-edit-prediction', 'isFusedCursorPredictionModel: false') >= 1, 'local Tab configuration no longer disables fused prediction');
  expect(symbol('image-generation', 'generateImageToolCall') > 0, 'image generation symbol disappeared; re-inventory');
  expect(symbol('image-generation', 'images/generations') > 0, 'image generation no longer calls the provider images endpoint; re-inventory');
  expect(symbol('image-input', 'OpenVision picker image failure explained v1') === 1 &&
    symbol('image-input', 'OpenVision rejected image file removed v1') === 1, 'image input fixes are not installed');
  expect(symbol('browser-automation', 'OpenVision local browser server explanation v1') === 1 &&
    symbol('browser-automation', 'OpenVision failed browser tool row v1') === 1, 'browser automation explanation is not installed');
  expect(symbol('image-generation', 'OpenVision image generation hidden v1') > 0, 'GenerateImage is not hidden from the local Agent');
  const browser = mode('browser-automation').extensions['cursor-browser-automation'];
  expect(browser.hosts.every(host => host === 'go'), 'browser automation references a fixed network host');
  expect(inventory.glassGatesAgree, 'desktop and glass gate defaults differ');
  return failures;
}

export async function inventoryModes(appRoot) {
  const paths = [...new Set(modes.flatMap(mode => mode.symbols.map(([path]) => path)).concat(glass))];
  const files = Object.fromEntries(await Promise.all(paths.map(async path => [path, await readFile(join(appRoot, path), 'utf8')])));
  const manifests = {};
  for (const id of ['simple-browser', 'cursor-browser-automation', 'cursor-computer-use'])
    manifests[id] = JSON.parse(await readFile(join(appRoot, 'extensions', id, 'package.json'), 'utf8'));
  const helpers = await readdir(join(appRoot, 'resources/helpers')).catch(error => { if (error.code === 'ENOENT') return []; throw error; });
  return inventoryFromFiles(files, manifests, helpers);
}
