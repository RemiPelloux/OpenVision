import { parseExpressionAt } from '../tooling/dependencies.mjs';

const marker = '/* OpenVision defer unconfigured MCP routing v1 */';
const wakeMarker = '/* OpenVision MCP server-status wake v1 */';

export function mcpRoutingOwner(text) {
  const anchor = 'this.hasLoggedWaitingForExperimentService = !1';
  const index = text.indexOf(anchor);
  if (index < 0 || text.indexOf(anchor, index + anchor.length) !== -1)
    throw new Error('MCP routing owner missing or ambiguous');
  const start = text.lastIndexOf('class extends ', index);
  const node = parseExpressionAt(text, start, { ecmaVersion: 'latest' });
  if (node.type !== 'ClassExpression' || node.end <= index) throw new Error('MCP routing class changed');
  return node;
}

export function lazyMcpRouting(text) {
  text = wakeMcpRouting(text);
  const owner = mcpRoutingOwner(text);
  const method = owner.body.body.find(entry => entry.key?.name === 'initializeAsync');
  if (!method || method.value.params[0]?.type !== 'Identifier') throw new Error('MCP routing initialization changed');
  const body = text.slice(method.start, method.end);
  if (body.includes(marker)) return text;
  const gate = method.value.body.body.find(statement => statement.type === 'VariableDeclaration' &&
    statement.declarations[0]?.init?.argument?.callee?.property?.name === 'resolveSharedProcessGateEnabled');
  const declaration = gate?.declarations[0];
  if (declaration?.id.type !== 'Identifier' || declaration.init.type !== 'AwaitExpression' ||
      !text.includes('isMcpProcessEligibleServer(') || !body.includes('this.latchedSharedProcessGate'))
    throw new Error('MCP eligibility/gate contract changed');
  const generation = method.value.params[0].name, enabled = declaration.id.name;
  const guard = `
      ${marker}
      if (${enabled} === true && !this.isStaleInitialize(${generation}) &&
          this.latchedSharedProcessGate === undefined &&
          !this.mcpService.getServers().some(server => this.mcpService.isMcpProcessEligibleServer(server))) {
        // Configuration/initialization events retry this decision; do not latch a disabled gate.
        this.mcpProcessSnapshotFanoutService.setSharedProcessGateEnabled(this.workspaceId, true);
        this.updateOAuthCallbackForwarding(true);
        this.setSharedProcessRoutingAllowed(this.workspaceId, false);
        this.notifyRoutingReady();
        return;
      }
`;
  return text.slice(0, gate.end) + guard + text.slice(gate.end);
}

function wakeMcpRouting(text) {
  const owner = mcpRoutingOwner(text);
  const constructor = owner.body.body.find(entry => entry.kind === 'constructor');
  const body = text.slice(constructor.start, constructor.end);
  if (body.includes(wakeMarker)) return text;
  if (!body.includes('this.mcpService.onSettingsChanged') || !text.includes('this.onDidChangeServerStatus ='))
    throw new Error('MCP routing wake event contract changed');
  const addition = `
      ${wakeMarker}
      this._register(this.mcpService.onDidChangeServerStatus(() => {
        // Snapshot-backed servers can initialize without firing onSettingsChanged.
        if (this.latchedSharedProcessGate !== undefined || this.openvisionRoutingWakeQueued) return;
        this.openvisionRoutingWakeQueued = true;
        queueMicrotask(() => {
          this.openvisionRoutingWakeQueued = false;
          if (this.latchedSharedProcessGate === undefined) this.initialize();
        });
      }));
`;
  const end = constructor.value.body.end - 1;
  return text.slice(0, end) + addition + text.slice(end);
}
