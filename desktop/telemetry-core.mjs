import { classAt, functionAt, replaceBody, replaceMethods, applyTelemetryPatches,
  parseExpressionAt, options } from './telemetry-patches.mjs';

// Keep the legacy IPC shape, but never retain a payload or permit re-enablement.
export const disabledSentry = `(() => {
  const transport = Object.freeze({send: async () => ({statusCode: 200}), flush: async () => true});
  const state = {};
  const values = {enabled: false, allowCrashReportsWhenDisabled: false, loggerSampleRate: 0,
    sentry: undefined, trace2SampleRate: 0, internalSampleRate: 0, profilesSampleRate: 0,
    jsonStringifySampleRate: 0, replaysSessionSampleRate: 0, isInternalUser: false, transport};
  for (const [key, value] of Object.entries(values))
    Object.defineProperty(state, key, {get: () => value, set() {}, enumerable: true});
  Object.defineProperty(state, 'buffer', {get: () => [], set() {}, enumerable: true});
  return state;
})()`;

function sentryPatches(text) {
  const patches = [];
  const assignment = /globalThis\._CURSOR_SENTRY = /g;
  for (const match of text.matchAll(assignment)) {
    const start = match.index + match[0].length;
    const value = parseExpressionAt(text, start, options);
    patches.push({ start, end: value.end, after: disabledSentry, reason: 'inert Sentry state' });
  }
  for (const match of text.matchAll(/Failed to initialize tracing in [\w ]+process/g)) {
    const node = functionAt(text, match.index);
    // Retain a stable owner marker across rebuilds, without the original SDK initializer.
    patches.push(replaceBody(node, '', match[0]));
  }
  for (const match of text.matchAll(/"https:\/\/[^"\r\n]*(?:@metrics\.cursor\.sh|\.ingest\.[^"\r\n]*sentry\.io|\.ingest\.sentry\.io)[^"\r\n]*"/g))
    patches.push({ start: match.index, end: match.index + match[0].length, after: '""', reason: 'removed telemetry endpoint' });
  return patches;
}

function telemetryServicePatches(text) {
  const patches = [];
  for (const match of text.matchAll(/^\s*_updateTelemetryLevel\(\) \{/gm)) {
    const owner = classAt(text, match.index + match[0].length - 1);
    const replacements = { _updateTelemetryLevel: 'this._telemetryLevel = 0; this._sendErrorTelemetry = false;',
      telemetryLevel: 'return 0;', sendErrorTelemetry: 'return false;',
      _log: '', _capture: '', registerAuthId: '', publicLog: '', publicLogError: '',
      publicLogError2: '', publicLogCapture: '', setExperimentProperty: '' };
    const ctor = owner.body.body.find(item => item.kind === 'constructor');
    const body = text.slice(ctor.value.body.start, ctor.value.body.end);
    const disposable = /this\._disposables = new ([\w$]+)\(\)/.exec(body)?.[1];
    if (!disposable) throw new Error('Telemetry disposable owner missing');
    replacements.constructor = `this._disposables = new ${disposable}(); this._appenders = [];
      this._commonProperties = {}; this._experimentProperties = {}; this._telemetryLevel = 0;
      this._sendErrorTelemetry = false;`;
    patches.push(...replaceMethods(owner, replacements));
  }
  for (const match of text.matchAll(/get disableTelemetry\(\) \{/g)) {
    const owner = classAt(text, match.index);
    patches.push(...replaceMethods(owner, { disableTelemetry: 'return true;' }));
  }
  return patches;
}

function mainPatches(text) {
  const patches = [];
  const anchor = 'TracingService: transport constructor';
  const index = text.indexOf(anchor);
  if (index < 0 || !text.includes('vscode:trayAnalytics') ||
      !text.includes('async updateCrashReporterEnablement()') || !text.includes('Setting crashDumps directory'))
    throw new Error('Main telemetry/crash reporter owner contract missing');
  if (index >= 0) {
    const owner = classAt(text, index);
    const methods = Object.fromEntries(owner.body.body.map(method => [method.key.name, '']));
    Object.assign(methods, {constructor: 'super(); this.onProcessConfigUpdate = () => ({dispose() {}});',
      getIsWatchingForCrashes: 'return false;', getIsLegacyPrivacyMode: 'return true;'});
    patches.push(...replaceMethods(owner, methods));
    // Preserve the discovery anchor inside the disabled transport method.
    const transport = patches.find(patch => patch.reason === 'disabled _initializeTransport');
    transport.after = transport.after.replace('*/', `${anchor} */`);
  }
  const tray = text.indexOf('vscode:trayAnalytics');
  if (tray >= 0) patches.push(...replaceMethods(classAt(text, tray), {
    trackEvent: '/* vscode:trayAnalytics */',
  }));
  const crash = text.indexOf('async updateCrashReporterEnablement()');
  if (crash >= 0) patches.push(...replaceMethods(classAt(text, crash), {updateCrashReporterEnablement: ''}));
  // This bootstrap function is the only direct Electron crashReporter.start owner.
  const crashAnchor = 'Setting crashDumps directory';
  const start = text.indexOf(crashAnchor);
  if (start >= 0) patches.push(replaceBody(functionAt(text, start), '', crashAnchor));
  return patches;
}

export function disableCoreTelemetry(text, { main = false, requireSentry = false } = {}) {
  if (requireSentry && !text.includes('globalThis._CURSOR_SENTRY = ')) throw new Error('Sentry state owner missing');
  const patches = [...sentryPatches(text), ...telemetryServicePatches(text), ...(main ? mainPatches(text) : [])];
  return { text: applyTelemetryPatches(text, patches), patches };
}
