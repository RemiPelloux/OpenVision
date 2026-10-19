// OV-1005: is a profile's cached Statsig bootstrap still applied?
// Launch 1 (fresh profile) dumps every client gate with "Developer: Dump
// Feature Gates". The verifier then writes the anonymous bootstrap gate values
// from desktop/fixtures/statsig-gates-3.21.13.json into the profile's
// application storage (`workbench.experiments.statsigBootstrap`, as an older
// OpenVision build that still refreshed it would have left it). Launch 2 dumps
// again. Pass: launch 2 evaluates every drifted gate exactly as launch 1, so an
// existing profile behaves like a fresh one. Linux x64; runs in a loopback-only
// network namespace (verify-statsig-cache.sh), no hosted service is contacted.
import assert from 'node:assert/strict';
import { mkdir, mkdtemp, readdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { DatabaseSync } from 'node:sqlite';
import { _electron } from '../tooling/browser.mjs';
import { verificationRuntime } from './verification-runtime.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { linuxSandboxArguments } from './platform.mjs';
import { enterWorkspace } from './verification-workspace.mjs';
import { fileHash } from './import-files.mjs';
import { captureEnvironment } from './capture-harness.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const { layout, appRoot } = await verificationRuntime(root);
const fixture = JSON.parse(await readFile(join(root, 'desktop/fixtures/statsig-gates-3.21.13.json'), 'utf8'));
await mkdir(join(root, 'logs'), { recursive: true });
const directory = await mkdtemp(join(root, 'logs/statsig-cache-'));
const profile = join(directory, 'profile'), project = join(directory, 'project');
await mkdir(join(profile, 'User'), { recursive: true }); await mkdir(project);
await writeFile(join(profile, 'User/settings.json'), JSON.stringify(verificationSettings));
await writeFile(join(project, 'readme.txt'), 'Statsig cache fixture\n');
const storageKey = 'workbench.experiments.statsigBootstrap';

// The cached value as the experiment service persisted it: the bootstrap JSON
// string, gates keyed by djb2 hash. Values come from the committed fixture.
function cachedBootstrap(gates) {
  const feature_gates = Object.fromEntries(gates.filter(gate => gate.bootstrap !== undefined).map(gate => [gate.hash,
    { name: gate.hash, value: gate.bootstrap, rule_id: 'openvision-fixture', secondary_exposures: [], id_type: 'userID' }]));
  return JSON.stringify({ feature_gates, dynamic_configs: {}, layer_configs: {}, param_stores: {}, time: Date.now(), has_updates: true,
    hash_used: 'djb2', user: { userID: '', custom: { clientOS: 'Linux', clientVersion: '3.21.13' } }, evaluated_keys: { userID: '' } });
}

async function launch(label) {
  const app = await _electron.launch({ executablePath: layout.executable, env: captureEnvironment(process.env), timeout: 90000,
    args: ['--user-data-dir', profile, '--extensions-dir', join(directory, 'extensions'), '--new-window', '--disable-updates',
      '--skip-welcome', '--skip-release-notes', '--disable-telemetry', '--disable-crash-reporter',
      ...await linuxSandboxArguments(layout.host), project] });
  const page = await app.firstWindow(); page.setDefaultTimeout(20000);
  try {
    await page.locator('.part.titlebar .openvision-local-profile').waitFor({ state: 'attached', timeout: 90000 });
    await enterWorkspace(page);
    await page.waitForTimeout(8000);
    const folder = join(profile, 'User/.openvision/feature-gates');
    const before = new Set(await readdir(folder).catch(() => []));
    await page.keyboard.press('ControlOrMeta+Shift+p');
    await page.locator('.quick-input-widget input[type="text"]').fill('>Developer: Dump Feature Gates');
    await page.locator('.quick-input-widget').getByText('Developer: Dump Feature Gates', { exact: true }).first().click();
    let file;
    for (let i = 0; i < 80 && !file; i++) {
      file = (await readdir(folder).catch(() => [])).find(name => !before.has(name));
      if (!file) await page.waitForTimeout(250);
    }
    assert.ok(file, `${label}: feature gate dump not written`);
    await page.screenshot({ path: join(directory, `${label}.png`) });
    return JSON.parse(await readFile(join(folder, file), 'utf8'));
  } finally {
    await app.close().catch(() => {});
  }
}

const enabled = dump => new Set(dump.featureFlags.enabled.map(gate => gate.name));
const result = { checkedAt: new Date().toISOString(), platform: `${process.platform}-${process.arch}`, success: false,
  workbench: await fileHash(join(appRoot, 'out/vs/workbench/workbench.desktop.main.js')),
  scope: 'Linux x64 source build; loopback-only network namespace; cached bootstrap values from the committed anonymous fixture' };
try {
  const fresh = enabled(await launch('fresh'));
  const database = new DatabaseSync(join(profile, 'User/globalStorage/state.vscdb'));
  database.prepare('INSERT OR REPLACE INTO ItemTable (key, value) VALUES (?, ?)').run(storageKey, cachedBootstrap(fixture.gates));
  database.close();
  const cached = enabled(await launch('cached'));
  const drifted = fixture.gates.filter(gate => gate.drifted);
  const evaluate = set => drifted.map(gate => ({ name: gate.name, value: set.has(gate.name) }));
  const freshRows = evaluate(fresh), cachedRows = evaluate(cached);
  result.drifted = drifted.length;
  result.fresh = { matchesBootstrap: freshRows.filter((row, index) => row.value === drifted[index].bootstrap).length };
  result.cached = { matchesBootstrap: cachedRows.filter((row, index) => row.value === drifted[index].bootstrap).length };
  result.differences = cachedRows.filter((row, index) => row.value !== freshRows[index].value).map(row => row.name);
  result.cachedBootstrapApplied = result.differences.length > 0;
  result.success = !result.cachedBootstrapApplied;
} catch (error) {
  result.failure = error.stack;
}
await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2) + '\n');
console.log(JSON.stringify({ directory, ...result, differences: result.differences?.length }, null, 2));
process.exitCode = result.success ? 0 : 1;
