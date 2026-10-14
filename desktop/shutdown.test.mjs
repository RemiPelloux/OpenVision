import assert from 'node:assert/strict';
import { EventEmitter } from 'node:events';
import test from 'node:test';
import { retainShutdownResources } from './shutdown-customization.mjs';

const input = `const Startup = class {
  startup(m, d, s, pending) {
    const h = d.get(Jt);
    N.once(m.onWillShutdown)((T) => {
      (h.dispose(), s.dispose(), T.join("instanceLockfile", pending));
    });
  }
};
const Lifecycle = class {
  async shutdown() { await this.stateService.close(); }
};`;

for (const rejectJoiner of [false, true]) {
  test(`resources outlive pending joiners and final state flush; rejected=${rejectJoiner}`, async () => {
    const host = new EventEmitter(), events = [], joiners = [];
    let shutdown, finish;
    const pending = new Promise((resolve, reject) => { finish = rejectJoiner ? () => reject(Error('lock failure')) : resolve; });
    let filesDisposed = false;
    const patched = retainShutdownResources(input);
    assert.equal(retainShutdownResources(patched), patched);
    const Startup = new Function('N', 'process', 'Jt', `${patched}; return Startup;`)(
      { once: register => register }, host, 'file-service');
    new Startup().startup({ onWillShutdown: listener => { shutdown = listener; } },
      { get: key => { assert.equal(key, 'file-service'); return { dispose: () => { filesDisposed = true; events.push('files'); } }; } },
      { dispose: () => events.push('configuration') }, pending);
    shutdown({ join: (name, promise) => { assert.equal(name, 'instanceLockfile'); joiners.push(promise); } });
    assert.equal(filesDisposed, false);
    const settled = Promise.allSettled(joiners); finish(); await settled;
    assert.equal(filesDisposed, false, 'state flush must retain a usable filesystem');
    events.push('state-flushed'); host.emit('exit'); host.emit('exit');
    assert.deepEqual(events, ['state-flushed', 'files', 'configuration']);
  });
}

test('reject changed or ambiguous shutdown ownership rather than patching an unrelated listener', () => {
  assert.throws(() => retainShutdownResources(input + input), /ambiguous/);
  assert.throws(() => retainShutdownResources(input.replace('startup(', 'other(')), /contract changed/);
  assert.throws(() => retainShutdownResources(input.replace('await this.stateService.close();', '')), /contract changed/);
});
