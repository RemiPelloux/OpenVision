// OV-1003: idle services that do work nobody asked for in a local profile.
// CursorProclistService (main) scanned every process on the system every 10 s
// once the renderer's "Cursor Proclist Polling" owner applied the hosted
// `extension_monitor_control` config; the renderer then built a sample every
// 5 min, wrote it to `process-monitor/` shards and tried to upload it (stashing
// it for replay while the transport was down). Both owners are made inert with a
// drift guard, an idempotent marker and a first backup. On-demand calls
// (process tree snapshots, the process list, killAgentProcessTree) are unchanged.
import { readFile, writeFile, mkdir, copyFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { classAt, replaceMethods, applyTelemetryPatches } from './telemetry-patches.mjs';

export const pollingMarker = '/* OpenVision process sample polling disabled v1 */';
export const serviceMarker = '/* OpenVision whole-system process scan disabled v1 */';
// The shape of the owner's own "Statsig unavailable" fallback.
const disabledConfig = '{ localEnabled: !1, backendReportingEnabled: !1, networkDiagnosticsReportingEnabled: !1, ' +
  'subsamplePollingRateSec: 0, samplePollingRateMin: 0 }';

function uniqueIndex(text, needle, name) {
  const first = text.indexOf(needle);
  if (first < 0 || text.indexOf(needle, first + 1) >= 0) throw new Error(`${name} owner missing or ambiguous`);
  return first;
}
const methodSource = (text, owner, name) => {
  const method = owner.body.body.find(item => item.key?.name === name && item.value?.body);
  if (!method) throw new Error(`Process sampling method missing: ${name}`);
  return text.slice(method.start, method.end);
};

// Renderer: every path that starts sampling, applies it to main or uploads
// (initialize, dynamic-config changes, transport recovery) reads this config,
// so a disabled config keeps the owner idle. Its 2 s deferred start stays.
export function disableProclistPolling(text) {
  if (text.includes(pollingMarker)) return text;
  const owner = classAt(text, uniqueIndex(text, '"[Cursor Proclist Polling] Local collection disabled by config"', 'Process sample polling'));
  const initialize = methodSource(text, owner, 'initialize');
  const flush = methodSource(text, owner, 'flushPendingUploads');
  const change = methodSource(text, owner, 'handleDynamicConfigChange');
  if (!/this\.config = await this\.loadStatsigConfig\(\)\), !this\.config\.localEnabled\)/.test(initialize) ||
      !flush.includes('!this.config?.backendReportingEnabled') || !change.includes('await this.loadStatsigConfig()') ||
      !methodSource(text, owner, 'loadStatsigConfig').includes('"extension_monitor_control"') ||
      !methodSource(text, owner, 'isPollGenerationActive').includes('this.config?.localEnabled === !0'))
    throw new Error('Process sample polling contract changed');
  return applyTelemetryPatches(text, replaceMethods(owner, { loadStatsigConfig: `${pollingMarker} return ${disabledConfig};` }));
}

// Main: refuse to start the interval even if another caller applies an enabled
// config (a remote window, an older renderer). The memory-pressure evaluation
// runs only inside that scan and is off by its own default
// (agent_memory_pressure_monitor.monitor_enabled = false), so nothing is kept.
export function disableProclistService(text) {
  if (text.includes(serviceMarker)) return text;
  const owner = classAt(text, uniqueIndex(text, '[CursorProclistService] Config enabled feature (subsample every', 'Process scan'));
  const apply = methodSource(text, owner, 'applyConfig');
  if (!apply.includes('this.startAsyncPolling(') || !apply.includes('this.stopTimer()') ||
      !methodSource(text, owner, 'startAsyncPolling').includes('setInterval(') ||
      !methodSource(text, owner, 'evaluateMemoryPressure').includes('this.currentConfig?.localEnabled !== !0'))
    throw new Error('Process scan contract changed');
  return applyTelemetryPatches(text, replaceMethods(owner, { applyConfig: (method) => {
    const [config] = method.params.map(param => param.name);
    return `${serviceMarker} (this.currentConfig = { ...${config}, localEnabled: !1 }), this.stopTimer();`;
  } }));
}

// Startup traversal: NestedExtensibilityService.discover walks each workspace
// root with ripgrep for rules, skills, agents and AGENTS/CLAUDE files through a
// shared ripwalk cache that already joins identical in-flight walks (20 s TTL).
// discover then deleted its entry as soon as its own walk ended, so the 2-3
// services that discover the same root during startup each walked it again (6
// identical walks for 2 roots, observed). The entry is now kept for a 2 s
// coalescing window: the startup burst shares one walk per root, and a discover
// more than 2 s later still walks afresh. File events keep their own reloads.
export const coalesceMarker = '/* OpenVision nested discovery walk coalescing v1 */';
export const coalesceWindowMs = 2000;
export function coalesceNestedDiscovery(text) {
  if (text.includes(coalesceMarker)) return text;
  const anchors = [...text.matchAll(/source: "nested_extensibility"/g)];
  if (anchors.length !== 1) throw new Error('Nested discovery owner missing or ambiguous');
  const window = text.slice(anchors[0].index, anchors[0].index + 1200);
  const cache = /([\w$]+) = (?:[\w$]+)\.getRipwalkCache\(\);/.exec(window);
  const walk = cache && new RegExp(`([\\w$]+) = ${cache[1].replace('$', '\\$')}\\.walk\\([^,]+, ([\\w$]+)\\);`).exec(window);
  const release = walk && new RegExp(`\\} finally \\{\\s*${cache[1].replace('$', '\\$')}\\.delete\\(${walk[2].replace('$', '\\$')}\\);\\s*\\}`).exec(window);
  if (!cache || !walk || !release) throw new Error('Nested discovery walk contract changed');
  const at = anchors[0].index + release.index;
  const [owner, options] = [cache[1], walk[2]];
  return text.slice(0, at) + `} finally { ${coalesceMarker} const openvisionRelease = setTimeout(() => ${owner}.delete(${options}), ${coalesceWindowMs}); openvisionRelease.unref?.(); }` +
    text.slice(at + release[0].length);
}
export const discoveryTargets = ['extensions/cursor-agent-exec/dist/main.js', 'extensions/cursor-agent-host/dist/main.js',
  'extensions/cursor-agent-host/dist/agent-host-daemon/dist/bin/daemon.cjs'];

export const workbenchTargets = ['out/vs/workbench/workbench.desktop.main.js', 'out/vs/workbench/workbench.glass.main.js'];

async function backedWrite(root, relative, before, after) {
  if (before === after) return false;
  const backup = join(root, 'backups/idle-services', relative);
  await mkdir(dirname(backup), { recursive: true });
  await copyFile(join(root, relative), backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
  await writeFile(join(root, relative), after);
  return true;
}

export async function installIdleServiceDefaults(root) {
  const app = 'source/app';
  const main = `${app}/out/main.js`;
  const mainText = await readFile(join(root, main), 'utf8');
  await backedWrite(root, main, mainText, disableProclistService(mainText));
  for (const relative of workbenchTargets) {
    const path = `${app}/${relative}`, text = await readFile(join(root, path), 'utf8');
    await backedWrite(root, path, text, disableProclistPolling(text));
  }
  for (const relative of discoveryTargets) {
    const path = `${app}/${relative}`, text = await readFile(join(root, path), 'utf8');
    await backedWrite(root, path, text, coalesceNestedDiscovery(text));
  }
  console.log(`Startup rule discovery coalesced per root in ${discoveryTargets.length} agent bundles`);
  console.log(`Idle process sampling disabled: whole-system scan in main, sample polling and upload in ${workbenchTargets.length} workbench bundles`);
}
