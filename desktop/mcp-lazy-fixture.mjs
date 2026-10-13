import { runInNewContext } from 'node:vm';
import { mcpConnectionOwner } from './mcp-lazy-customization.mjs';

export function recoveredMcpConnection(text, variant) {
  const owner = mcpConnectionOwner(text), source = text.slice(owner.start, owner.end);
  const names = variant === 'desktop'
    ? ['Se', 'nn', 'VO', 'en', 'eu', 'Wl', 'Vwp', 'Gwp', 'a1t', 'mBy', 'I5', 'oLe']
    : ['ot', 'ei', 'K9', '$n', 'ah', 'Ld', 'RUv', 'PUv', 'WZt', 'zbT', 'wV', 'RVe'];
  const clients = [], acquisitions = [], ports = [];
  class Disposable {
    resources = [];
    _register(value) { this.resources.push(value); return value; }
    dispose() { for (const resource of this.resources) resource.dispose(); }
  }
  class Slot {
    clear() { this.value?.dispose(); this.value = undefined; }
    dispose() { this.clear(); }
  }
  class Barrier { wait() { return Promise.resolve(); } isOpen() { return true; } }
  class Client {
    channels = new Map(); registrations = []; calls = []; listens = []; disposed = false;
    constructor(port) { this.port = port; clients.push(this); }
    registerChannel(name, channel) { this.registrations.push([name, channel]); this.channels.set(name, channel); }
    getChannel(name) { return {
      call: async (...args) => { this.calls.push([name, ...args]); return 'result'; },
      listen: (...args) => { this.listens.push([name, ...args]); return () => ({ dispose() {} }); },
    }; }
    dispose() { this.disposed = true; }
  }
  class Relay { event = () => ({ dispose() {} }); dispose() {} }
  const acquire = (...args) => {
    const pending = Promise.withResolvers(); acquisitions.push({ args, ...pending }); return pending.promise;
  };
  const values = [Disposable, Slot, Barrier, fn => ({ dispose: fn }),
    () => Object.assign(new Promise(() => {}), { cancel() {} }), () => {},
    { request: 'channelRequest', response: 'channelResponse' }, { request: 'rawRequest', response: 'rawResponse' },
    Client, (client, channels) => { for (const [name, channel] of channels) client.registerChannel(name, channel); }, Relay, acquire];
  const Type = runInNewContext(`(${source})`, Object.fromEntries(names.map((name, index) => [name, values[index]])));
  const service = new Type('fixture-window', { trace() {}, warn() {} });
  const open = index => {
    const port = new EventTarget(); ports[index] = port; acquisitions[index].resolve(port); return port;
  };
  return { service, clients, acquisitions, ports, open };
}
