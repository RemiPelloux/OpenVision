import { parseExpressionAt } from '../tooling/dependencies.mjs';

const marker = '/* OpenVision defer unconfigured MCP routing v1 */';
const wakeMarker = '/* OpenVision MCP server-status wake v1 */';
const providerMarker = '/* OpenVision MCP connected-without-client recreate v1 */';
const pendingMarker = '/* OpenVision MCP reset releases in-flight legacy client v1 */';

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
  text = releaseInFlightLegacyClients(recreateUnownedConnectedServers(wakeMcpRouting(text)));
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

// A routing reset (legacy -> shared process) deletes each server's client
// provider, then re-initializes. When a legacy client had just reported
// "connected", that status outlives the reset and createClientIfNotExists
// skipped the server: the window never subscribed to the MCP utility, tools
// failed with "Cannot call tool before MCP process client is registered" and
// the utility never owned the server. Treat "connected" as current only while
// a client provider for the server exists.
export function recreateUnownedConnectedServers(text) {
  if (text.includes(providerMarker)) return text;
  const matches = [...text.matchAll(/\n\s+async createClientIfNotExists\(([\w$]+)\) \{\s*const ([\w$]+) = this\.statusCache\(\)\[\1\.identifier\];\s*return \2\?\.type === "connected"/g)];
  if (matches.length !== 1 || !text.includes('Skipping createClient for already-connected server') ||
      !/this\.mcpClientProviders\.delete\([\w$]+\)/.test(text))
    throw new Error('MCP connected-server skip contract changed');
  const [match] = matches, [, server] = match, end = match.index + match[0].length;
  return text.slice(0, end) + ` && ${providerMarker} this.mcpClientProviders.has(${server}.identifier)` + text.slice(end);
}

// The same reset deletes the legacy (extension-host) client, but a legacy
// connect still in flight finishes afterwards: the delete does not stop it,
// and its STDIO child stayed alive beside the utility's child for the rest of
// the session (trace run simultaneous-pNm0qf; coordinator run EPeEu8 timed out
// waiting for one final child). When the reset drops a legacy client whose
// creation is pending, delete it again once that creation settles. Process
// clients are excluded: their delete resolves the active key by lookup and
// could release the replacement's subscription.
export function releaseInFlightLegacyClients(text) {
  if (text.includes(pendingMarker)) return text;
  const methods = [...text.matchAll(/\n\s+resetMcpProcessRouting\(([\w$]+)\) \{/g)];
  if (methods.length !== 1) throw new Error('MCP routing reset owner missing or ambiguous');
  const [, reason] = methods[0], start = methods[0].index;
  const loop = /for \(const ([\w$]+) of ([\w$]+)\) \{\s*const ([\w$]+) = this\.mcpClientProviders\.get\(\1\);/g;
  loop.lastIndex = start;
  const match = loop.exec(text);
  const end = text.indexOf('\n          }\n', start);
  if (!match || match.index > end || !text.slice(match.index, end).includes(`this.createClientPromises.delete(${match[1]})`) ||
      !text.slice(match.index, end).includes(`${match[3]}.deleteClient(${reason})`))
    throw new Error('MCP routing reset contract changed');
  const [, server, , provider] = match, at = match.index + match[0].length;
  return text.slice(0, at) + ` ${pendingMarker}
                const openvisionPendingLegacy = ${provider} && !this.mcpProcessRoutedServerIds.has(${server}) && this.createClientPromises.get(${server});
                openvisionPendingLegacy && openvisionPendingLegacy.finally(() => ${provider}.deleteClient(${reason}).catch(() => {})).catch(() => {});` + text.slice(at);
}
