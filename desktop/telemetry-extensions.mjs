import { readFile, writeFile, mkdir, copyFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { classAt, replaceMethods as methodPatches, applyTelemetryPatches,
  parseExpressionAt, options as parseOptions } from './telemetry-patches.mjs';
import { cachedFile } from './build-cache.mjs';
import { digest, fileHash } from './import-files.mjs';

const marker = '/* OpenVision extension telemetry disabled v1 */';

function owningClass(text, anchor) {
  const matches = anchor instanceof RegExp ? [...text.matchAll(anchor)] : null;
  const offset = matches ? matches[0]?.index ?? -1 : text.indexOf(anchor);
  if (offset < 0 || (matches ? matches.length !== 1 : text.indexOf(anchor, offset + anchor.length) >= 0))
    throw new Error(`Extension telemetry owner missing or ambiguous: ${anchor}`);
  return classAt(text, offset);
}

function replaceMethods(text, anchor, replacements) {
  return applyTelemetryPatches(text, methodPatches(owningClass(text, anchor), replacements));
}

const emptyMethods = names => Object.fromEntries(names.map(name => [name, '']));

export function disableExtensionHostTelemetry(text) {
  if (text.includes(marker)) return text;
  text = replaceMethods(text, 'getTelemetryConfiguration() {', {
    getTelemetryConfiguration: 'return false;',
    getTelemetryDetails: 'return { isCrashEnabled: false, isErrorsEnabled: false, isUsageEnabled: false };',
    $initializeTelemetryLevel: 'this._level = 0; this._productConfig = { usage: false, error: false };',
    $onDidChangeTelemetryLevel: 'this._level = 0;',
    getBuiltInCommonProperties: 'return Object.create(null);',
    onExtensionError: 'return false;',
  });
  text = replaceMethods(text, 'TelemetrySender.sendEventData must be a function', {
    constructor: node => {
      const [sender, options, extension, logger, mode, properties, enablement] = node.params;
      if (![sender, options, extension, logger, mode, properties, enablement].every(n => n?.type === 'Identifier'))
        throw new Error('Extension telemetry logger constructor signature changed');
      return `this._sender = undefined; this._telemetryEnablements = { isUsageEnabled: false, isErrorsEnabled: false };` +
        ` this.ignoreUnhandledExtHostErrors = true; this._onDidChangeEnableStates = { event: () => ({ dispose() {} }) };`;
    },
    ...emptyMethods(['updateTelemetryEnablements', 'logEvent', 'logUsage', 'logError']),
    dispose: 'this._sender = undefined; this._apiObject = undefined;',
  });
  text = replaceMethods(text, 'this._proxy.$publicLogCapture(', {
    ...emptyMethods(['publicLogCapture', 'metricsIncrement', 'metricsDistribution', 'metricsGauge',
      'captureException', '$notifyMetricsProviderBatch', '$recordExtHostEvent', '$forceFlushExtHostEventLogger']),
    registerMetricsProvider: 'return { dispose() {} };',
    registerExtHostEventLogger: 'return { dispose() {} };',
    registerCodeAnalyticsListener: 'return { dispose() {} };',
  });
  return `${marker}\n${text}`;
}

export function disableAgentTelemetry(text) {
  // Upgrade the old marker placement before parsing: a hashbang is valid only
  // at byte zero, including in the daemon's CommonJS entry point.
  if (text.startsWith(`${marker}\n#!`)) {
    const end = text.indexOf('\n', marker.length + 1);
    if (end < 0) throw new Error('Agent daemon hashbang is missing its line ending');
    return `${text.slice(marker.length + 1, end + 1)}${marker}\n${text.slice(end + 1)}`;
  }
  if (text.includes(marker)) return text;
  text = replaceMethods(text, /^\s+_submitLogs\(/gm, {
    _isPrivateInferenceLocked: 'return true;',
    _refreshFlushThrottleGate: '',
    _scheduleFlush: '',
    _flush: 'this.buffer = []; return Promise.resolve();',
    _submitLogs: 'return Promise.resolve();',
    _getOrCreateAnalyticsClient: 'return undefined;',
  });
  text = replaceMethods(text, 'AggregatingMetricsProvider:', {
    ...emptyMethods(['constructor', 'dispose', 'increment', 'gauge', 'distribution', 'distributionSamples',
      'flush', 'flushIncrements', 'flushGauges', 'flushDistributions', 'flushNamedMetrics', 'logCardinalityOverflow']),
    sendDistributionEntries: 'return Promise.resolve();',
    getOrCreateClient: 'return undefined;',
  });
  const prefix = text.startsWith('#!') ? text.indexOf('\n') + 1 : 0;
  return `${text.slice(0, prefix)}${marker}\n${text.slice(prefix)}`;
}

export function disableCompletionTelemetry(text) {
  // Applied separately to the already patched agent/logging bundle.
  const completionMarker = '/* OpenVision completion telemetry disabled v1 */';
  if (text.includes(completionMarker)) return text;
  text = replaceMethods(text, 'async appendCppTelem(', emptyMethods(['appendCppTelem', 'appendCppTelemChunk']));
  text = replaceMethods(text, 'async appendCppTelemWithRetry(', emptyMethods([
    'recordExtHostEvent', 'recordEvent', 'appendCppTelemWithRetry', 'flush', 'forceFlush',
  ]));
  return `${completionMarker}\n${text}`;
}

export function disableCodebaseTelemetry(text) {
  if (text.includes(marker)) return text;
  const anchor = 'Failed to register Codebase Telemetry and clean up partial resources';
  const offset = text.indexOf(anchor);
  if (offset < 0 || text.indexOf(anchor, offset + anchor.length) >= 0)
    throw new Error('Codebase telemetry registration owner missing or ambiguous');
  const candidate = [...text.slice(0, offset).matchAll(/\bfunction\s+[\w$]+\([^)]*\)\s*\{/g)].at(-1);
  let node = candidate && parseExpressionAt(text, candidate.index, parseOptions);
  while (node?.type === 'CallExpression') node = node.callee;
  if (node?.type !== 'FunctionExpression' || node.end <= offset ||
      !text.slice(node.start, node.end).includes('cursor.codebaseTelemetry.triggerSnapshot'))
    throw new Error('Codebase telemetry registration contract changed');
  const body = '{ return { sessionState: { get() {}, subscribe: () => ({ dispose() {} }) }, async shutdown() {} }; }';
  return `${marker}\n${text.slice(0, node.body.start)}${body}${text.slice(node.body.end)}`;
}

export function disableDebuggerTelemetry(text) {
  if (text.includes(marker)) return text;
  text = replaceMethods(text, 'this.batchers = { dapOperation:', emptyMethods(['report', 'reportOperation', 'pushOutput']));
  text = replaceMethods(text, '"ms-vscode.js-debug",', { constructor: '', getTreatment: node => {
    const fallback = node.params[1];
    if (fallback?.type !== 'Identifier') throw new Error('Debugger experiment fallback contract changed');
    return `return ${fallback.name};`;
  } });
  return `${marker}\n${text}`;
}

const extensionTargets = [
  ['out/vs/workbench/api/node/extensionHostProcess.js', disableExtensionHostTelemetry],
  ['out/vs/workbench/api/worker/extensionHostWorkerMain.js', disableExtensionHostTelemetry],
  ['extensions/cursor-agent-host/dist/main.js', disableAgentTelemetry],
  ['extensions/cursor-agent-host/dist/agent-host-daemon/dist/bin/daemon.cjs', disableAgentTelemetry],
  ['extensions/cursor-always-local/dist/main.js', text => disableCompletionTelemetry(disableAgentTelemetry(text))],
  ['extensions/cursor-retrieval/dist/main.js', disableCodebaseTelemetry],
  ['extensions/ms-vscode.js-debug/src/extension.js', disableDebuggerTelemetry],
];

export async function installExtensionTelemetryPolicy(root) {
  const dependencies = ['desktop/telemetry-extensions.mjs', 'desktop/telemetry-patches.mjs', 'desktop/build-cache.mjs',
    'desktop/import-files.mjs', 'tooling/dependencies.mjs', 'tooling/package-lock.json'];
  const recipe = digest(JSON.stringify(await Promise.all(dependencies.map(path => fileHash(join(root, path))))));
  for (const [relative, transform] of extensionTargets) {
    const path = join(root, 'source/app', relative);
    await cachedFile({ path, marker: join(root, `build/cache/telemetry-extension-${digest(relative)}.json`), recipe }, async () => {
      const before = await readFile(path, 'utf8');
      const after = transform(before);
      if (before === after) return;
      const backup = join(root, 'backups/telemetry-extensions', relative);
      await mkdir(dirname(backup), { recursive: true });
      await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
      await writeFile(path, after);
    });
  }
  return { files: extensionTargets.map(([relative]) => relative) };
}
