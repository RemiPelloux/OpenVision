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
  assert.equal(classify(row('/home/ovremote/.openvision-server/bin/abc/node /home/ovremote/.openvision-server/bin/abc/out/server-main.js --start-server')), 'remote-server');
  assert.equal(classify(row('/opt/node desktop/remote-ssh-host.mjs logs/remote-ssh-control')), 'fixture-controller');
  assert.equal(classify(row('bash -l')), 'other');
});
