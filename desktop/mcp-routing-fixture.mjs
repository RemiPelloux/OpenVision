import { runInNewContext } from 'node:vm';
import { mcpRoutingOwner } from './mcp-routing-customization.mjs';

export function recoveredMcpRouting(text, variant, options = {}) {
  const owner = mcpRoutingOwner(text), source = text.slice(owner.start, owner.end);
  const names = variant === 'desktop'
    ? ['Se', 'nn', '$I', 'aLe', 'Ywp', 'Nia', 'sde', 'O2n', 'F2n']
    : ['ot', 'ei', 'iM', 'PBe', 'LUv', 'kbc', 'SCe', 'xNi', 'mNn'];
  const events = new Map(), calls = [], handlers = [];
  const event = name => listener => {
    const listeners = events.get(name) ?? new Set(); events.set(name, listeners); listeners.add(listener);
    return { dispose: () => listeners.delete(listener) };
  };
  class Disposable {
    resources = [];
    _register(value) { this.resources.push(value); return value; }
    dispose() { for (const resource of this.resources) resource.dispose(); }
  }
  class Slot {
    clear() { this.value?.dispose(); this.value = undefined; }
    dispose() { this.clear(); }
  }
  const values = [Disposable, Slot, { toService: value => value }, { servers: 'servers' }, 'gate', 'migrate',
    new Proxy({}, { get: (_, key) => key }),
    { registerHandler: handler => { handlers.push(handler); return { dispose() {} }; } }, () => undefined];
  const Type = runInNewContext(`(${source})`, { queueMicrotask,
    ...Object.fromEntries(names.map((name, index) => [name, values[index]])) });
  Type.prototype.logRouting = (...args) => calls.push(['log', ...args]);
  const state = { servers: [], gate: true, migration: true, ...options };
  const mcp = { getServers: () => state.servers, isMcpProcessEligibleServer: server => server.eligible,
    onDidInitialize: event('initialized'), onSettingsChanged: event('settings'), onDidChangeServerStatus: event('status') };
  const fanout = Object.fromEntries(['setSharedProcessGateEnabled', 'setSharedProcessSessionMode',
    'setSharedProcessRoutingAllowed', 'markSharedProcessRoutingReady'].map(name =>
    [name, (...args) => calls.push([name, ...args])]));
  fanout.registerWorkspaceMcpService = (...args) => {
    calls.push(['registered', ...args]); return { dispose: () => calls.push(['unregistered']) };
  };
  const service = new Type(mcp, { getChannel: () => ({ handleOAuthCallback: async () => {
    calls.push(['callback']); return { kind: 'handled' };
  } }) }, { isInitialized: () => true, checkFeatureGate: () => state.gate, onDidChangeGates: event('gate') },
  { getWorkspace: () => ({ id: 'workspace' }) }, {}, {}, { remoteAuthority: options.remoteAuthority }, fanout,
  { executeCommand: async () => { calls.push(['migration']); return state.migration; } },
  { onDidRegisterCommand: event('command') }, { call: async () => false });
  const fire = (name, value) => { for (const listener of events.get(name) ?? []) listener(value); };
  return { service, state, calls, handlers, fire };
}
