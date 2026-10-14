import { parseExpressionAt } from '../tooling/dependencies.mjs';

const marker = '/* OpenVision MCP lifecycle cleanup ownership v1 */';
function nodes(node, predicate, found = []) {
  if (!node || typeof node !== 'object') return found;
  if (predicate(node)) found.push(node);
  for (const value of Object.values(node)) {
    if (Array.isArray(value)) value.forEach(child => nodes(child, predicate, found));
    else if (value && typeof value === 'object') nodes(value, predicate, found);
  }
  return found;
}

export function mcpLifecycleOwner(text) {
  const anchor = 'closeCurrentServerInstance(e) {';
  const index = text.indexOf(anchor);
  if (index < 0 || text.indexOf(anchor, index + anchor.length) !== -1)
    throw new Error('MCP lifecycle cleanup owner missing or ambiguous');
  return parseExpressionAt(text, text.lastIndexOf('class ', index), { ecmaVersion: 'latest' });
}

export function ownMcpLifecycleCleanup(text) {
  const owner = mcpLifecycleOwner(text);
  const methods = Object.fromEntries(owner.body.body.map(method => [method.key?.name, method]));
  if (text.slice(owner.start, owner.end).includes(marker)) return text;
  for (const name of ['connect', 'dispose', 'closeCurrentServerInstance', 'runConnectionAttempt', 'startConnectionService'])
    if (!methods[name]) throw new Error(`MCP cleanup lifecycle contract missing: ${name}`);
  const starter = text.slice(methods.startConnectionService.start, methods.startConnectionService.end);
  const attemptName = /new ([\w$]+)\(this.identifier\)/.exec(starter)?.[1];
  if (!attemptName) throw new Error('MCP lifecycle attempt owner reference changed');
  const run = methods.runConnectionAttempt;
  if (run.value.params.map(param => param.name).join(',') !== 'e,t,r')
    throw new Error('MCP connection service parameter contract changed');
  const generator = nodes(run.value.body, node => node.type === 'FunctionExpression' && node.generator)[0];
  const body = generator?.body ?? run.value.body;
  const wait = generator ? 'yield' : 'await';
  const source = node => text.slice(node.start, node.end);
  const reconnect = nodes(body, node => node.type === 'IfStatement' &&
    source(node.test).includes('this.serverInstance') && source(node.consequent).includes('this.serverInstance.client.close()'));
  if (reconnect.length !== 1) throw new Error('MCP reconnect retirement boundary changed');
  const failure = `[{ target: "connection", kind: "connect_failure", error: "Previous MCP transport cleanup failed; reconnect to retry", isRetryable: false }]`;
  const sessionRetry = nodes(body, node => node.type === 'ExpressionStatement' &&
    /^(?:await|yield) r\.closeCurrent\("session-reuse-retry"\);$/.test(source(node)));
  if (sessionRetry.length !== 1) throw new Error('MCP session retry retirement boundary changed');
  const reinit = methods.handleSessionReinit;
  if (!reinit) throw new Error('MCP session reinitialization owner missing');
  const reinitClose = nodes(reinit.value.body, node => node.type === 'IfStatement' &&
    source(node.test) === 'this.serverInstance' && source(node.consequent).includes('this.serverInstance.client.close()'));
  if (reinitClose.length !== 1) throw new Error('MCP session reinitialization retirement boundary changed');
  const edits = [
    [reinitClose[0].consequent.start, reinitClose[0].consequent.end,
      `{
        const cleanup = ${wait} this.closeCurrentServerInstance({ captureSession: true, reason: "session reinit" });
        t = this.reconnectSessionInfo;
        if (!cleanup.ok) throw new Error("Previous MCP transport cleanup failed; reconnect to retry");
      }`],
    [methods.connect.value.body.start + 1, methods.connect.value.body.start + 1,
      `\nthis.openvisionCleanupRecovery = ${attemptName}.retryCleanup(this.identifier);\n`],
    [methods.dispose.start, methods.dispose.end,
      `dispose() {
        if (this.disposed) return this.openvisionDisposeResult;
        this.disposed = true;
        this.consecutiveStreamableHttpSession404Count = 0;
        this.activities.dispose();
        const attempt = this.activeConnectionAttempt?.requestClose("dispose");
        const committed = this.closeCurrentServerInstance({ captureSession: true, reason: "dispose" });
        this.subscribedResources.clear();
        this.cancelPendingElicitations();
        this.adapter = void 0;
        this.callbacks.onAdapterRemoved(this.identifier);
        this.queue.length = 0;
        return this.openvisionDisposeResult = Promise.all([attempt, committed]).then(results => ({
          ok: results.every(result => !result || result.ok), failures: results.flatMap(result => result?.failures ?? [])
        }));
      }`],
    [methods.closeCurrentServerInstance.start, methods.closeCurrentServerInstance.end,
      `closeCurrentServerInstance(e) {
        ${marker}
        this.activeRuntimeAuthEventSink = void 0;
        const instance = this.serverInstance;
        if (!instance) return this.openvisionLastCleanup ?? Promise.resolve({ ok: true, failures: [] });
        this.nullifyCallbacks();
        if (e.captureSession) this.captureReconnectSessionInfo(instance);
        const cleanup = this.openvisionCleanupOwner ??= new ${attemptName}(this.identifier);
        cleanup.client = { transport: instance.transport ?? instance.client?.transport };
        this.serverInstance = void 0;
        return this.openvisionLastCleanup = cleanup.requestClose(e.reason);
      }`],
    [body.start + 1, body.start + 1,
      `\nif (e() || this.disposed) return;
      ${wait} this.openvisionCleanupRecovery;
      if (e() || this.disposed) return;
      if ([...(${attemptName}.openvisionCleanupOwners ?? [])].some(owner => owner.identifier === this.identifier)) {
        t(${failure}); return;
      }\n`],
    [reconnect[0].consequent.start, reconnect[0].consequent.end,
      `{
        const omitCapture = this.omitReconnectSessionCaptureForNextAttempt;
        if (omitCapture) this.omitReconnectSessionCaptureForNextAttempt = false;
        const cleanup = ${wait} this.closeCurrentServerInstance({ captureSession: !omitCapture, reason: "reconnect" });
        if (omitCapture) this.reconnectSessionInfo = void 0;
        if (!cleanup.ok) { t(${failure}); return; }
        if (e() || this.disposed) return;
      }`],
    [sessionRetry[0].start, sessionRetry[0].end,
      `{ const cleanup = ${wait} r.closeCurrent("session-reuse-retry"); if (!cleanup.ok) { t(${failure}); return; } }`],
  ];
  for (const [start, end, replacement] of edits.sort((a, b) => b[0] - a[0]))
    text = text.slice(0, start) + replacement + text.slice(end);
  return text;
}
