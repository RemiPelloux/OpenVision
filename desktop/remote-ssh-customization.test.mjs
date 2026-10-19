import assert from 'node:assert/strict';
import test from 'node:test';
import { localServerScript, localServerUpload, marker, proposals, remoteClientProduct } from './remote-ssh-customization.mjs';
import { inputCommit, localServerTemplate, remoteSshExtension } from './remote-server.mjs';

const product = { commit: inputCommit, serverApplicationName: 'cursor-server', serverDataFolderName: '.cursor-server',
  tunnelApplicationName: 'cursor-tunnel',
  serverDownloadUrlTemplate: 'https://cursor.blob.core.windows.net/remote-releases/${commit}/vscode-reh-${os}-${arch}.tar.gz',
  remoteExtensionTips: { wsl: { extensionId: 'anysphere.remote-wsl' }, 'ssh-remote': { extensionId: 'anysphere.remote-ssh' } },
  extensionEnabledApiProposals: { 'ms-vscode-remote.remote-ssh': ['resolvers'] } };
const server = { commit: inputCommit, archive: `openvision-server-${inputCommit}-linux-x64.tar.gz`, sha256: 'a'.repeat(64),
  bytes: 10, platform: 'linux-x64' };

test('client product without a prepared server is local-only and offers no resolver', () => {
  const result = remoteClientProduct(product, undefined);
  assert.equal(result.serverDownloadUrlTemplate, localServerTemplate);
  assert.equal(result.serverApplicationName, 'openvision-server');
  assert.equal(result.serverDataFolderName, '.openvision-server');
  assert.deepEqual(result.remoteExtensionTips, {});
  assert.equal(result.extensionEnabledApiProposals[remoteSshExtension.id], undefined);
  assert.equal(result.openvisionRemoteServer, undefined);
  assert.doesNotMatch(JSON.stringify(result), /blob\.core\.windows\.net|anysphere\.remote/);
});

test('client product with a prepared server names the bundled resolver and archive', () => {
  const result = remoteClientProduct(product, server);
  assert.deepEqual(result.extensionEnabledApiProposals[remoteSshExtension.id], proposals);
  assert.deepEqual(Object.keys(result.remoteExtensionTips), ['ssh-remote']);
  assert.equal(result.remoteExtensionTips['ssh-remote'].extensionId, remoteSshExtension.id);
  assert.equal(result.openvisionRemoteServer.archive, `openvision-remote/${server.archive}`);
  assert.equal(result.openvisionRemoteServer.sha256, server.sha256);
  assert.deepEqual(remoteClientProduct(result, server), result);
  assert.deepEqual(remoteClientProduct(result, undefined), remoteClientProduct(product, undefined));
  assert.throws(() => remoteClientProduct(product, { ...server, commit: 'b'.repeat(40) }), /does not match client/);
});

// The shape of open-remote-ssh 0.4.0 lib/extension.js around the Linux installer.
const resolver = 'installCodeServer=async function(e,t,r,i,n,s,o,c,h,p){const _=a.randomBytes(12).toString("hex"),' +
  'E=await(0,l.getVSCodeServerConfig)(),m=t||E.serverDownloadUrlTemplate||"https://example.invalid",' +
  'b={id:_,serverDownloadUrlTemplate:m,customInstallPath:c,serverValidation:E.serverValidation};let w;' +
  'if("windows"===s){w=1}else{const t=d(b);h.trace("Server install command:",t);const r=Buffer.from(t).toString("base64");' +
  'w=await e.exec(`echo ${r} | base64 -d | bash -l`)}return w}';
const bundle = `(()=>{var x={1(e,t){t.${resolver}}}})();`;

test('resolver uploads the local archive before running the Linux installer', () => {
  const result = localServerUpload(bundle);
  assert.ok(result.startsWith(marker));
  assert.ok(result.includes('const t=d(b);await openvisionUploadServer(e,E,m,c,h);h.trace("Server install command:",t);const r=Buffer'));
  assert.match(result, /async function openvisionUploadServer\(connection, config, template, installPath, logger\)/);
  assert.match(result, /startsWith\("openvision-local:"\)/);
  assert.match(result, /Linux x86_64/);
  assert.match(result, /sha256sum -c --status/);
  assert.equal(localServerUpload(result), result);
  new Function(result);
});

test('resolver drift fails closed', () => {
  assert.throws(() => localServerUpload(bundle.replace('getVSCodeServerConfig', 'getServerConfig')), /server configuration contract/);
  assert.throws(() => localServerUpload(bundle.replace('base64 -d | bash -l', 'base64 -d | sh')), /Linux install command contract/);
  assert.throws(() => localServerUpload(bundle + bundle), /ambiguous/);
});

const script = `#!/bin/bash
if [[ ! -f $SERVER_SCRIPT ]]; then
  pushd "$SERVER_DIR" > /dev/null || exit

  if command -v wget >/dev/null 2>&1; then
    wget --tries=3 --timeout=10 --continue --no-verbose -O vscode-server.tar.gz "$SERVER_DOWNLOAD_URL"
  else
    echo "Error: no tool to download server binary"
    print_install_results_and_exit 1
  fi

  if (( $? > 0 )); then
    echo "Error downloading server from $SERVER_DOWNLOAD_URL"
    rm -rf vscode-server.tar.gz
    print_install_results_and_exit 1
  fi
fi
  $SERVER_SCRIPT --start-server --host=127.0.0.1 --telemetry-level off --enable-remote-auto-shutdown --accept-server-license-terms &> $SERVER_LOGFILE &
`;

test('install script consumes the uploaded archive and stops with the last window', () => {
  const result = localServerScript(script);
  assert.ok(result.includes('if [[ $SERVER_DOWNLOAD_URL == openvision-local:* ]]; then'));
  assert.ok(result.includes('mv -f "$SERVER_DATA_DIR/upload/openvision-server-$DISTRO_COMMIT-$PLATFORM-$SERVER_ARCH.tar.gz" vscode-server.tar.gz\n  elif command -v wget'));
  assert.ok(result.includes('--enable-remote-auto-shutdown --remote-auto-shutdown-without-delay --accept-server-license-terms'));
  assert.equal(localServerScript(result), result);
  assert.throws(() => localServerScript(script.replace('command -v wget', 'command -v curl')), /download contract/);
  assert.throws(() => localServerScript(script.replace('--enable-remote-auto-shutdown ', '')), /start contract/);
});

// Both open-remote-ssh 0.4.0 connection sites: jump hosts and the final host.
const connections = 'async function x(e,t){const r=e.getHostConfiguration(t.hostname),i=r.HostName?r.HostName:t.hostname,o=r.Port?parseInt(r.Port,10):22;' +
  'for(const s of t.jumps){const c=s.User,a=s.HostName||r.hostname,l=s.Port?parseInt(s.Port,10):22;y=new A.default({host:U?void 0:a,port:U?void 0:l,sock:U,username:c})}' +
  'this.sshConnection=new A.default({host:U?void 0:i,port:U?void 0:o,sock:U,username:n})}';

async function verifierFor(files, config, port = 2222) {
  const { verifyHostKeys } = await import('./remote-ssh-customization.mjs');
  const { mkdtemp, writeFile } = await import('node:fs/promises');
  const { join } = await import('node:path');
  const { tmpdir } = await import('node:os');
  const directory = await mkdtemp(join(tmpdir(), 'ov-known-hosts-'));
  const paths = [];
  for (const [index, text] of files.entries()) { paths.push(join(directory, `known_hosts${index}`)); await writeFile(paths.at(-1), text); }
  const make = new Function('require', `${verifyHostKeys(connections)}; return openvisionHostVerifier;`)(name => process.getBuiltinModule(name));
  const logs = [];
  return { verify: make('127.0.0.1', port, { UserKnownHostsFile: paths.join(' '), ...config }, { info: m => logs.push(m), error: m => logs.push(m) }), logs };
}

test('host keys are verified at both connection sites', async () => {
  const { verifyHostKeys, hostKeyMarker } = await import('./remote-ssh-customization.mjs');
  const result = verifyHostKeys(connections);
  assert.ok(result.startsWith(hostKeyMarker));
  assert.ok(result.includes('host:U?void 0:a,port:U?void 0:l,sock:U,hostVerifier:openvisionHostVerifier(a,l,s,this.logger),'));
  assert.ok(result.includes('host:U?void 0:i,port:U?void 0:o,sock:U,hostVerifier:openvisionHostVerifier(i,o,r,this.logger),'));
  assert.equal(verifyHostKeys(result), result);
  assert.throws(() => verifyHostKeys(connections.replace('y=new A.default', 'y=new B.Client')), /1 connection sites/);
});

test('known, hashed, changed, unknown and revoked host keys', async () => {
  const { createHmac, randomBytes } = await import('node:crypto');
  const key = randomBytes(51), other = randomBytes(51);
  const salt = randomBytes(20), hashed = createHmac('sha1', salt).update('[127.0.0.1]:2222').digest('base64');
  let { verify, logs } = await verifierFor([`# comment\n[127.0.0.1]:2222 ssh-ed25519 ${key.toString('base64')}\n`]);
  assert.equal(verify(key), true);
  assert.equal(verify(other), false);
  assert.match(logs.at(-1), /Host key changed for \[127\.0\.0\.1\]:2222 \(SHA256:/);
  ({ verify } = await verifierFor([`|1|${salt.toString('base64')}|${hashed} ssh-ed25519 ${key.toString('base64')}\n`]));
  assert.equal(verify(key), true);
  ({ verify, logs } = await verifierFor([`127.0.0.1 ssh-ed25519 ${key.toString('base64')}\n`]));
  assert.equal(verify(key), false, 'port 22 entries do not match a non-default port');
  assert.match(logs.at(-1), /Unknown host key/);
  ({ verify } = await verifierFor([''], { StrictHostKeyChecking: 'no' }));
  assert.equal(verify(key), true);
  ({ verify } = await verifierFor([`[127.0.0.1]:2222 ssh-ed25519 ${other.toString('base64')}\n`], { StrictHostKeyChecking: 'no' }));
  assert.equal(verify(key), false, 'a changed key is refused even with StrictHostKeyChecking=no');
  ({ verify } = await verifierFor([`@revoked * ssh-ed25519 ${key.toString('base64')}\n`, `[127.0.0.1]:2222 ssh-ed25519 ${key.toString('base64')}\n`]));
  assert.equal(verify(key), false);
  ({ verify } = await verifierFor([`*,!127.0.0.1 ssh-ed25519 ${key.toString('base64')}\n`], {}, 22));
  assert.equal(verify(key), false, 'negated patterns exclude the host');
  ({ verify } = await verifierFor([`fixture-alias ssh-ed25519 ${key.toString('base64')}\n`], { HostKeyAlias: 'fixture-alias' }, 22));
  assert.equal(verify(key), true);
});

test('Agent provider configurations are refused in remote windows', async () => {
  const { remoteProviderGuard, marker: guardMarker } = await import('./remote-provider-guard.mjs');
  const { assertLocalProviderWindow } = await import('./model-providers.js');
  const workbench = 'class S { async getLocalAgentProviderConfig(e, t) {\n/* OpenVision provider selection errors */\ntry { return read(e); } catch (error) { throw error; }\n}' +
    ' async getLocalInferenceProviderConfig() { return read(); } }';
  const result = remoteProviderGuard(workbench);
  assert.ok(result.startsWith('import {assertLocalProviderWindow as openvisionAssertLocalProviderWindow}'));
  assert.ok(result.includes(`try { ${guardMarker} openvisionAssertLocalProviderWindow(); return read(e);`));
  assert.ok(result.includes(`getLocalInferenceProviderConfig() { ${guardMarker} openvisionAssertLocalProviderWindow(); return read(); }`));
  assert.equal(remoteProviderGuard(result), result);
  assert.throws(() => remoteProviderGuard(workbench.replace('getLocalInferenceProviderConfig', 'other')), /missing or ambiguous/);
  assert.doesNotThrow(() => assertLocalProviderWindow({}));
  assert.doesNotThrow(() => assertLocalProviderWindow(undefined));
  assert.throws(() => assertLocalProviderWindow({ remoteAuthority: 'ssh-remote+host' }),
    error => error.name === 'LocalProviderError' && /does not send provider keys/.test(error.message));
});
