import assert from 'node:assert/strict';
import test from 'node:test';
import { archiveName, inlineServerProduct, inputCommit, localServerTemplate, remoteCli, remoteServerInputs,
  remoteSshExtension, serverNames, serverProduct } from './remote-server.mjs';
import { classify } from './remote-ssh-host.mjs';

const shipped = {
  nameShort: 'Cursor Private Inference', commit: inputCommit, date: '2026-09-18T06:43:24.799Z',
  serverApplicationName: 'cursor-server', serverDataFolderName: '.cursor-server', tunnelApplicationName: 'cursor-tunnel',
  serverDownloadUrlTemplate: 'https://cursor.blob.core.windows.net/remote-releases/${commit}/vscode-reh-${os}-${arch}.tar.gz',
  updateUrl: 'https://api2.cursor.sh/updates', downloadUrl: 'https://cursor.com/downloads', statsigClientKey: 'client-x',
  aiConfig: { ariaKey: 'x' }, enableTelemetry: true, remoteExtensionTips: { 'ssh-remote': { extensionId: 'anysphere.remote-ssh' } },
  extensionsGallery: { serviceUrl: 'https://marketplace.example/gallery', controlUrl: 'https://api2.cursor.sh/extensions-control' },
};

test('pinned remote inputs are exact and Linux x64 only', () => {
  assert.deepEqual(Object.keys(remoteServerInputs), ['linux-x64']);
  const input = remoteServerInputs['linux-x64'];
  assert.match(input.sha256, /^[a-f0-9]{64}$/);
  assert.equal(input.commit, inputCommit);
  assert.ok(input.url.includes(inputCommit));
  assert.match(remoteSshExtension.sha256, /^[a-f0-9]{64}$/);
  assert.equal(remoteSshExtension.license, 'MIT');
  assert.equal(archiveName(inputCommit, 'linux-x64'), `openvision-server-${inputCommit}-linux-x64.tar.gz`);
});

test('server product is branded, local-only and telemetry-free', () => {
  const product = serverProduct(shipped);
  assert.equal(product.serverApplicationName, serverNames.serverApplicationName);
  assert.equal(product.serverDataFolderName, '.openvision-server');
  assert.equal(product.tunnelApplicationName, 'openvision-tunnel');
  assert.equal(product.serverDownloadUrlTemplate, localServerTemplate);
  assert.equal(product.applicationName, 'openvision');
  assert.equal(product.enableTelemetry, false);
  for (const key of ['updateUrl', 'downloadUrl', 'statsigClientKey', 'aiConfig', 'remoteExtensionTips'])
    assert.equal(key in product, false, key);
  assert.equal(product.extensionsGallery.controlUrl, undefined);
  assert.equal(product.commit, inputCommit);
  assert.doesNotMatch(JSON.stringify(product), /cursor\.blob\.core\.windows\.net|cursor-server/);
  assert.deepEqual(serverProduct(product), product);
});

test('server product refuses a server built from another commit', () => {
  assert.throws(() => serverProduct({ ...shipped, commit: 'f'.repeat(40) }), /does not match the client input/);
});

test('inline product literal is replaced once and idempotently', () => {
  const product = serverProduct(shipped);
  const bundle = `var a = 1;\nvar ss = {\n  nameShort: "Cursor",\n  serverApplicationName: "cursor-server",\n  nested: { value: 1 },\n  commit: "${inputCommit}",\n};\nconsole.log(ss);\n`;
  const result = inlineServerProduct(bundle, product);
  assert.ok(result.includes('"serverApplicationName":"openvision-server"'));
  assert.ok(result.startsWith('var a = 1;\nvar ss = /* OpenVision server product v1 */ {'));
  assert.ok(result.endsWith(';\nconsole.log(ss);\n'));
  assert.equal(inlineServerProduct(result, product), result);
  new Function(result);
});

test('inline product drift fails closed', () => {
  const product = serverProduct(shipped);
  assert.throws(() => inlineServerProduct('var x = {};', product), /missing or ambiguous/);
  const twice = `var a = { serverApplicationName: "cursor-server", commit: "${inputCommit}" };\nvar b = { serverApplicationName: "cursor-server", commit: "${inputCommit}" };`;
  assert.throws(() => inlineServerProduct(twice, product), /missing or ambiguous/);
  assert.throws(() => inlineServerProduct(`var a = { serverApplicationName: "cursor-server", commit: "abc" };`, product), /commit changed/);
});

test('remote CLI launcher is renamed with a drift guard', () => {
  const shippedCli = '#!/usr/bin/env sh\nAPP_NAME="cursor"\nVERSION="3.21.13"\nEXEC_NAME="cursor"\n';
  const result = remoteCli(shippedCli);
  assert.match(result, /^APP_NAME="openvision"$/m);
  assert.match(result, /^EXEC_NAME="openvision"$/m);
  assert.equal(remoteCli(result), result);
  assert.throws(() => remoteCli('APP_NAME="code"\n'), /contract changed/);
});

test('remote process classification separates sessions, server and fixture', () => {
  const row = argv => ({ argv: argv.split(' ') });
  assert.equal(classify(row('sshd: ovremote@notty')), 'ssh-session');
  assert.equal(classify(row('sshd: ovremote [priv]')), 'ssh-session');
  assert.equal(classify(row('/usr/sbin/sshd -D -f /home/ovremote/.openvision-fixture/sshd_config')), 'sshd-listener');
  assert.equal(classify(row('sshd: /usr/sbin/sshd -D -f /home/ovremote/.openvision-fixture/sshd_config -E /home/ovremote/.openvision-fixture/sshd.log [listener] 0 of 10-100 startups')), 'sshd-listener');
  assert.equal(classify(row('strace -f -o /home/ovremote/.openvision-fixture/remote-trace.log /usr/sbin/sshd -D -f /home/ovremote/.openvision-fixture/sshd_config')), 'other');
  assert.equal(classify(row('/home/ovremote/.openvision-server/bin/abc/node /home/ovremote/.openvision-server/bin/abc/out/server-main.js --start-server')), 'remote-server');
  assert.equal(classify(row('/opt/node desktop/remote-ssh-host.mjs logs/remote-ssh-control')), 'fixture-controller');
  assert.equal(classify(row('bash -l')), 'other');
});

test('remote launcher supplies a default profile home inside the server data folder', async () => {
  const { remoteLauncher, launcherMarker } = await import('./remote-server.mjs');
  const shipped = '#!/usr/bin/env sh\ncase "$1" in\n\t--inspect*) INSPECT="$1"; shift;;\nesac\n\nROOT="$(dirname "$(dirname "$(readlink -f "$0")")")"\n\n"$ROOT/node" ${INSPECT:-} "$ROOT/out/server-main.js" "$@"\n';
  const result = remoteLauncher(shipped);
  assert.ok(result.includes(launcherMarker));
  assert.ok(result.includes('export VSCODE_OPENVISION_PROFILE_HOME="${VSCODE_OPENVISION_PROFILE_HOME:-$(dirname "$(dirname "$ROOT")")/profiles/default}"\n'));
  assert.ok(result.indexOf('export VSCODE_OPENVISION_PROFILE_HOME') < result.indexOf('"$ROOT/node"'));
  assert.equal(remoteLauncher(result), result);
  assert.throws(() => remoteLauncher(shipped.replace('server-main.js', 'main.js')), /launcher contract changed/);
});

test('server transforms cover the remote profile owners and the VSIX metadata lookup', async () => {
  const { serverTransforms } = await import('./remote-server.mjs');
  const { nodeTargets } = await import('./profile-home-paths.mjs');
  const targets = new Set(serverTransforms.map(([relative]) => relative));
  for (const relative of Object.keys(nodeTargets).filter(relative => !relative.includes('/electron-utility/')))
    assert.ok(targets.has(relative), relative);
  assert.ok(!targets.has('out/vs/code/electron-utility/mcpProcess/mcpProcessMain.js'), 'not shipped in the server');
  assert.ok(targets.has('out/vs/platform/terminal/node/ptyHostMain.js'));
  const main = serverTransforms.filter(([relative]) => relative === 'out/server-main.js').map(([, transform]) => String(transform)).join('\n');
  assert.match(main, /skipVsixGalleryMetadata/);
});

test('server bounds reconnection grace and orphans extension hosts after the last window', async () => {
  const { serverLifecycle, reconnectionGrace } = await import('./remote-server.mjs');
  const server = `class Management { constructor() {
      (this._reconnectionGraceTime = 108e5),
      (this._reconnectionShortGraceTime = 3e5),
      (this.x = 1);
  } }
  const terminal = { graceTime: 108e5, shortGraceTime: 3e5, scrollback: 100 };
  class Connection {
    constructor(sent) { this._extensionHostProcess = { connected: !0, send: (m) => sent.push(m.type) }; }
    shortenReconnectionGraceTimeIfNecessary() {
      if (!this._extensionHostProcess || !this._extensionHostProcess.connected) return;
      const e = { type: "VSCODE_EXTHOST_IPC_REDUCE_GRACE_TIME" };
      this._extensionHostProcess.send(e);
    }
  }
  class Server {
    constructor(sent) { this._managementConnections = {}; this._extHostConnections = { a: new Connection(sent), b: new Connection(sent) };
      this._logService = { info() {} }; this.closers = {}; }
    add(n) { const c = { onClose: (f) => { this.closers[n] = f; } }; this._managementConnections[n] = c;
      c.onClose(() => {
                    delete this._managementConnections[n];
                  }); }
  }
  return { Server, Management, terminal };`;
  const result = serverLifecycle(server);
  assert.equal(serverLifecycle(result), result);
  const { Server, Management, terminal } = new Function(result)();
  const management = new Management();
  assert.equal(management._reconnectionGraceTime, reconnectionGrace.graceMs);
  assert.equal(management._reconnectionShortGraceTime, reconnectionGrace.shortGraceMs);
  assert.equal(terminal.graceTime, reconnectionGrace.graceMs);
  assert.ok(reconnectionGrace.graceMs <= 5 * 60 * 1000, 'bounded to minutes');
  const sent = [], instance = new Server(sent);
  instance.add('first'); instance.add('second');
  instance.closers.first();
  assert.deepEqual(sent, [], 'another window remains');
  instance.closers.second();
  assert.deepEqual(sent, ['OPENVISION_EXTHOST_IPC_ORPHANED', 'OPENVISION_EXTHOST_IPC_ORPHANED']);
  assert.throws(() => serverLifecycle(server.replace('108e5),', '36e5),')), /management grace/);
});

test('an orphaned extension host exits once its connection is gone', async () => {
  const { extensionHostLifecycle } = await import('./remote-server.mjs');
  const host = `return (exits, Timer, protocol) => {
      const s = 0,
        o = 108e5,
        i = 3e5,
        l = new Timer(() => Hs("renderer disconnected for too long (1)"), o),
        c = new Timer(() => Hs("renderer disconnected for too long (2)"), i);
      function Hs(reason) { exits.push(reason); }
      const handlers = [];
      const process = { on: (name, f) => handlers.push(f) };
      process.on("message", (u, p) => {
        if (u && u.type === "VSCODE_EXTHOST_IPC_SOCKET") {
          protocol.onSocketClose(() => {
                l.schedule();
              });
        }
        if (u && u.type === "VSCODE_EXTHOST_IPC_REDUCE_GRACE_TIME") {
          if (c.isScheduled()) return;
          l.isScheduled() && c.schedule();
        }
      });
      return { send: (type) => handlers.forEach(f => f({ type })), l };
    };`;
  const result = extensionHostLifecycle(host);
  assert.equal(extensionHostLifecycle(result), result);
  class Timer { constructor(run, ms) { this.ms = ms; this.scheduled = !1; } schedule() { this.scheduled = !0; } isScheduled() { return this.scheduled; } }
  const make = new Function(result)();
  // Orphaned while waiting for reconnection: exits at once.
  let exits = [], closers = [];
  let ext = make(exits, Timer, { onSocketClose: f => closers.push(f) });
  ext.send('VSCODE_EXTHOST_IPC_SOCKET'); closers[0]();
  assert.equal(ext.l.ms, 300000);
  assert.deepEqual(exits, []);
  ext.send('OPENVISION_EXTHOST_IPC_ORPHANED');
  assert.deepEqual(exits, ['renderer window closed']);
  // Orphaned while still connected: exits when the connection closes.
  exits = []; closers = [];
  ext = make(exits, Timer, { onSocketClose: f => closers.push(f) });
  ext.send('VSCODE_EXTHOST_IPC_SOCKET'); ext.send('OPENVISION_EXTHOST_IPC_ORPHANED');
  assert.deepEqual(exits, []);
  closers[0]();
  assert.deepEqual(exits, ['renderer window closed']);
  assert.equal(ext.l.isScheduled(), false);
  // Not orphaned: a dropped connection waits for the bounded grace.
  exits = []; closers = [];
  ext = make(exits, Timer, { onSocketClose: f => closers.push(f) });
  ext.send('VSCODE_EXTHOST_IPC_SOCKET'); closers[0]();
  assert.deepEqual(exits, []);
  assert.equal(ext.l.isScheduled(), true);
});
