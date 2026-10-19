import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, readdir, writeFile, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { disableProclistPolling, disableProclistService, installIdleServiceDefaults, pollingMarker, serviceMarker,
  workbenchTargets, coalesceNestedDiscovery, coalesceMarker, coalesceWindowMs, discoveryTargets } from './idle-services-customization.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const app = join(root, 'source/app');

// Authored fixtures in the shape of the recovered owners; the drift test below
// runs the transforms against the built bundles when they exist.
const polling = `var X = class extends we {
  async initialize() {
    try {
      if (((this.config = await this.loadStatsigConfig()), !this.config.localEnabled)) {
        this.logService.info("[Cursor Proclist Polling] Local collection disabled by config");
        return;
      }
      (await this.cursorProclistService.applyConfig(this.config), this.startPolling(), this.flushPendingUploads());
    } catch (e) {}
  }
  async handleDynamicConfigChange() { const t = await this.loadStatsigConfig(); this.config = t; }
  async loadStatsigConfig() {
    const e = this.experimentService.getDynamicConfig("extension_monitor_control", {});
    return { localEnabled: !!e.local_enabled, backendReportingEnabled: !!e.backend_reporting_enabled, subsamplePollingRateSec: 10, samplePollingRateMin: 5 };
  }
  isPollGenerationActive(e) { return this.config?.localEnabled === !0 && e === this.pollGeneration; }
  async flushPendingUploads() { if (!this.config?.backendReportingEnabled) return; await this.upload(); }
};`;
const service = `var S = class {
  applyConfig(e) {
    if (((this.currentConfig = e), !e.localEnabled)) { this.stopTimer(); return; }
    const t = e.subsamplePollingRateSec;
    (this.logService.info(\`[CursorProclistService] Config enabled feature (subsample every \${t}s; memoryPressureMonitorEnabled=x)\`),
      this.stopTimer(), this.startAsyncPolling(t * 1e3));
  }
  startAsyncPolling(e) { (this.scanTick(), (this.updateTimer = setInterval(() => void this.scanTick(), e))); }
  stopTimer() { this.updateTimer && (clearInterval(this.updateTimer), (this.updateTimer = void 0)); }
  evaluateMemoryPressure(e) { if (this.currentConfig?.localEnabled !== !0) return; this.pressure = e; }
};`;

test('renderer sample polling reads a disabled config: no start, no apply, no upload or replay', async () => {
  const once = disableProclistPolling(polling);
  assert.equal(disableProclistPolling(once), once);
  assert.ok(once.includes(pollingMarker));
  const calls = [];
  const X = new Function('we', `${once}; return X;`)(class {});
  const owner = Object.assign(new X(), {
    experimentService: { getDynamicConfig: () => { calls.push('statsig'); return { local_enabled: true, backend_reporting_enabled: true }; } },
    logService: { info: message => calls.push(message) },
    cursorProclistService: { applyConfig: () => calls.push('apply') }, startPolling: () => calls.push('start'),
    upload: async () => calls.push('upload') });
  await owner.initialize();
  await owner.handleDynamicConfigChange();
  await owner.flushPendingUploads();
  assert.deepEqual(calls, ['[Cursor Proclist Polling] Local collection disabled by config']);
  assert.equal(owner.isPollGenerationActive(owner.pollGeneration), false);
});

test('main refuses to start the whole-system scan even for an enabled config', () => {
  const once = disableProclistService(service);
  assert.equal(disableProclistService(once), once);
  assert.ok(once.includes(serviceMarker));
  const S = new Function(`${once}; return S;`)();
  const owner = Object.assign(new S(), { scanTick: () => assert.fail('scan must not run'), logService: { info() {} } });
  owner.updateTimer = setInterval(() => {}, 1e6);
  owner.applyConfig({ localEnabled: true, subsamplePollingRateSec: 10, agentMemoryPressureMonitor: { monitorEnabled: true } });
  assert.equal(owner.updateTimer, undefined, 'a running interval is stopped');
  assert.equal(owner.currentConfig.localEnabled, false);
  owner.evaluateMemoryPressure('sample');
  assert.equal(owner.pressure, undefined, 'memory-pressure evaluation stays off');
});

test('drifted or ambiguous owners fail the build', () => {
  for (const input of [polling.replace('"extension_monitor_control"', '"other"'), polling + polling,
    polling.replace('!this.config?.backendReportingEnabled', 'false'), polling.replace('Local collection disabled by config', 'x')])
    assert.throws(() => disableProclistPolling(input), /Process sample polling|Telemetry class owner/);
  for (const input of [service.replace('setInterval(', 'setTimeout('), service + service,
    service.replace('this.startAsyncPolling(t * 1e3)', 'this.poll()'), service.replace('Config enabled feature', 'x')])
    assert.throws(() => disableProclistService(input), /Process scan|Telemetry class owner/);
});

const discovery = `var N = class {
  async discover(r) {
    const a = { root: this.root, includeGlobs: ["*/**/AGENTS.md"], excludeGlobs: [], followSymlinks: !0, source: "nested_extensibility" },
      l = [], c = N.getRipwalkCache();
    try {
      const e = c.walk(r, a);
      try {
        for await (const t of e.lines) l.push(t);
      } finally {
        c.delete(a);
      }
    } catch {}
    return l;
  }
};`;

test('identical nested discoveries within the window share one walk; a later one walks again', async () => {
  const once = coalesceNestedDiscovery(discovery);
  assert.equal(coalesceNestedDiscovery(once), once);
  assert.ok(once.includes(coalesceMarker));
  let walks = 0;
  const entries = new Map();
  const cache = { walk(ctx, options) {
    const key = JSON.stringify(options);
    if (!entries.has(key)) { walks++; entries.set(key, ['AGENTS.md']); }
    const lines = entries.get(key);
    return { lines: (async function* () { yield* lines; })() };
  }, delete(options) { entries.delete(JSON.stringify(options)); } };
  const N = new Function(`${once}; return N;`)();
  N.getRipwalkCache = () => cache;
  const owner = Object.assign(new N(), { root: '/w' });
  assert.deepEqual(await owner.discover({}), ['AGENTS.md']);
  await owner.discover({}); await owner.discover({});
  assert.equal(walks, 1, 'the startup burst shares one walk');
  await new Promise(done => setTimeout(done, coalesceWindowMs + 100));
  await owner.discover({});
  assert.equal(walks, 2, 'a discover after the window walks again');
  // Control: the recovered owner walks every time.
  const Control = new Function(`${discovery}; return N;`)(); Control.getRipwalkCache = () => cache; walks = 0; entries.clear();
  const control = Object.assign(new Control(), { root: '/w' });
  await control.discover({}); await control.discover({});
  assert.equal(walks, 2);
});

test('nested discovery drift fails the build', () => {
  for (const input of [discovery.replace('source: "nested_extensibility"', 'source: "other"'), discovery + discovery,
    discovery.replace('c.delete(a);', 'c.clear();'), discovery.replace('c.walk(r, a)', 'c.scan(r, a)')])
    assert.throws(() => coalesceNestedDiscovery(input), /Nested discovery/);
});

test('installer keeps first backups and a second run changes nothing', async () => {
  const directory = await mkdtemp(join(tmpdir(), 'openvision-idle-services-'));
  try {
    const out = join(directory, 'source/app/out');
    await mkdir(join(out, 'vs/workbench'), { recursive: true });
    await writeFile(join(out, 'main.js'), service);
    for (const target of workbenchTargets) await writeFile(join(directory, 'source/app', target), polling);
    for (const target of discoveryTargets) {
      await mkdir(dirname(join(directory, 'source/app', target)), { recursive: true });
      await writeFile(join(directory, 'source/app', target), discovery);
    }
    await installIdleServiceDefaults(directory);
    const first = await readFile(join(out, 'main.js'), 'utf8');
    await installIdleServiceDefaults(directory);
    assert.equal(await readFile(join(out, 'main.js'), 'utf8'), first);
    assert.equal(await readFile(join(directory, 'backups/idle-services/source/app/out/main.js'), 'utf8'), service);
    assert.deepEqual((await readdir(join(directory, 'backups/idle-services/source/app/out/vs/workbench'))).sort(),
      ['workbench.desktop.main.js', 'workbench.glass.main.js']);
  } finally { await rm(directory, { recursive: true, force: true }); }
});

test('built bundles still carry exactly one patchable owner of each kind (drift guard)', { skip: !existsSync(join(app, 'out/main.js')) }, async () => {
  const main = await readFile(join(app, 'out/main.js'), 'utf8');
  assert.ok(disableProclistService(main).includes(serviceMarker));
  for (const target of workbenchTargets)
    assert.ok(disableProclistPolling(await readFile(join(app, target), 'utf8')).includes(pollingMarker));
  for (const target of discoveryTargets)
    assert.ok(coalesceNestedDiscovery(await readFile(join(app, target), 'utf8')).includes(coalesceMarker));
});
