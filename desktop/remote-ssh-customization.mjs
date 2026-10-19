// OV-703 Remote-SSH client. The build bundles the pinned open-remote-ssh VSIX
// as a built-in resolver for `ssh-remote+` authorities and points it at the
// server archive prepared by `npm run prepare:remote`. Connecting uploads that
// archive over the established SSH connection; neither side downloads a
// server. Without a prepared archive the client keeps the local-only template
// and offers no remote resolver.
import { spawnSync } from 'node:child_process';
import { copyFile, link, mkdir, mkdtemp, readFile, rename, rm, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { parseJavaScript } from '../tooling/dependencies.mjs';
import { fileHash } from './import-files.mjs';
import { exists } from './source-assembly.mjs';
import { localServerTemplate, remoteSshExtension, serverNames } from './remote-server.mjs';

export const marker = '/* OpenVision local remote-server upload v1 */';
export const extensionDirectory = 'extensions/open-remote-ssh';
export const archiveDirectory = 'openvision-remote';
export const proposals = ['resolvers', 'contribViewsRemote'];

export function remoteClientProduct(product, server) {
  const result = { ...product, ...serverNames, serverDownloadUrlTemplate: localServerTemplate };
  const enabled = { ...result.extensionEnabledApiProposals };
  delete enabled[remoteSshExtension.id];
  if (server) {
    if (server.commit !== product.commit) throw new Error(`Prepared remote server ${server.commit} does not match client ${product.commit}; run npm run prepare:remote`);
    enabled[remoteSshExtension.id] = proposals;
    result.openvisionRemoteServer = { archive: `${archiveDirectory}/${server.archive}`, sha256: server.sha256, bytes: server.bytes,
      commit: server.commit, platform: server.platform };
    // The original tips name proprietary resolvers that would be installed
    // from a marketplace; only the bundled resolver is offered.
    result.remoteExtensionTips = { 'ssh-remote': { friendlyName: 'Remote - SSH', extensionId: remoteSshExtension.id,
      supportedPlatforms: ['Linux'], startEntry: { helpLink: 'https://github.com/jeanp413/open-remote-ssh',
        startConnectLabel: 'SSH', startCommand: 'openremotessh.openEmptyWindowInCurrentWindow', priority: 1 } } };
  } else {
    delete result.openvisionRemoteServer;
    result.remoteExtensionTips = {};
  }
  result.extensionEnabledApiProposals = enabled;
  return result;
}

// Runs in the local extension host before the install script. It verifies
// the bundled archive, checks the remote platform and installed server, and
// streams the archive over an exec channel of the existing connection.
const uploadHelper = `${marker}
async function openvisionUploadServer(connection, config, template, installPath, logger) {
  if (!String(template).startsWith("openvision-local:")) return;
  const vscode = require("vscode"), fs = require("fs"), path = require("path"), crypto = require("crypto");
  const product = JSON.parse(await fs.promises.readFile(path.join(vscode.env.appRoot, "product.json"), "utf8"));
  const server = product.openvisionRemoteServer;
  if (!server || server.commit !== config.commit) throw new Error("OpenVision remote server is not prepared for this build; run npm run prepare:remote and rebuild.");
  if (installPath && !/^[A-Za-z0-9_.\\/~$-]+$/.test(installPath)) throw new Error("remote.SSH.serverInstallPath contains unsupported characters.");
  const archive = path.join(vscode.env.appRoot, server.archive);
  const stat = await fs.promises.stat(archive);
  const hash = crypto.createHash("sha256");
  for await (const chunk of fs.createReadStream(archive)) hash.update(chunk);
  if (stat.size !== server.bytes || hash.digest("hex") !== server.sha256) throw new Error("OpenVision remote server archive does not match its pinned SHA-256.");
  const platform = (await connection.exec("uname -sm")).stdout.trim();
  if (platform !== "Linux x86_64") throw new Error("OpenVision supports remote servers on Linux x86_64 only; this host reports " + JSON.stringify(platform));
  const data = installPath ? installPath.replace(/^~(?=\\/|$)/, "$HOME") : "$HOME/" + config.serverDataFolderName;
  const binary = data + "/bin/" + config.commit + "/bin/" + config.serverApplicationName;
  const name = "openvision-server-" + config.commit + "-linux-x64.tar.gz", upload = data + "/upload/" + name;
  if ((await connection.exec('test -s "' + binary + '" && echo present || echo missing')).stdout.trim() === "present") return;
  logger.info("Uploading the OpenVision server (" + stat.size + " bytes) over the SSH connection");
  const channel = await connection.execChannel('umask 077 && mkdir -p "' + data + '/upload" && cat > "' + upload + '.partial"');
  const code = await new Promise((resolve, reject) => {
    let status = null;
    channel.on("exit", value => { status = value; }).on("close", () => resolve(status)).on("error", reject);
    channel.stderr?.resume(); channel.resume?.();
    const source = fs.createReadStream(archive);
    source.on("error", reject);
    source.pipe(channel);
  });
  if (code !== 0) throw new Error("OpenVision server upload failed with status " + code);
  const check = await connection.exec('cd "' + data + '/upload" && if command -v sha256sum >/dev/null 2>&1; then echo "' + server.sha256 + '  ' + name + '.partial" | sha256sum -c --status && echo verified; else echo unverified; fi');
  const verified = check.stdout.trim();
  if (verified !== "verified" && verified !== "unverified") throw new Error("Uploaded OpenVision server does not match its pinned SHA-256.");
  if (verified === "unverified") logger.info("The remote host has no sha256sum; relying on the SSH channel integrity");
  await connection.exec('mv -f "' + upload + '.partial" "' + upload + '"');
}
`;

function unique(text, pattern, label) {
  const matches = [...text.matchAll(pattern)];
  if (matches.length !== 1) throw new Error(`Remote-SSH ${label} contract missing or ambiguous (${matches.length})`);
  return matches[0];
}

export function localServerUpload(text) {
  if (text.includes(marker)) return text;
  const config = unique(text, /([\w$]+)=await\(0,[\w$]+\.getVSCodeServerConfig\)\(\),([\w$]+)=[\w$]+\|\|\1\.serverDownloadUrlTemplate\|\|/g, 'server configuration');
  const [, configName, templateName] = config;
  const installPath = unique(text, new RegExp(`serverDownloadUrlTemplate:${templateName.replace('$', '\\$')},customInstallPath:([\\w$]+),`, 'g'), 'install path')[1];
  const install = unique(text, /([\w$]+)\.trace\("Server install command:",([\w$]+)\);const ([\w$]+)=Buffer\.from\(\2\)\.toString\("base64"\);([\w$]+)=await ([\w$]+)\.exec\(`echo \$\{\3\} \| base64 -d \| bash -l`\)/g, 'Linux install command');
  if (install.index < config.index) throw new Error('Remote-SSH install command precedes its configuration');
  const [, logger, , , , connection] = install;
  const call = `await openvisionUploadServer(${connection},${configName},${templateName},${installPath},${logger});`;
  const result = uploadHelper + text.slice(0, install.index) + call + text.slice(install.index);
  parseJavaScript(result, { ecmaVersion: 'latest', sourceType: 'script' });
  return result;
}

// open-remote-ssh 0.4.0 passes no hostVerifier to ssh2, so any host key was
// accepted. Keys are checked against the configured UserKnownHostsFile (default
// ~/.ssh/known_hosts) and /etc/ssh/ssh_known_hosts, including hashed entries,
// non-default ports, HostKeyAlias and @revoked. Unknown or changed keys are
// refused; only an explicit StrictHostKeyChecking=no accepts an unknown key.
export const hostKeyMarker = '/* OpenVision SSH host key verification v1 */';
const hostVerifierHelper = `${hostKeyMarker}
function openvisionHostVerifier(host, port, config, logger) {
  const fs = require("fs"), os = require("os"), crypto = require("crypto");
  const value = key => { const item = config?.[key]; return Array.isArray(item) ? item.join(" ") : item; };
  const alias = value("HostKeyAlias") || host;
  const names = Number(port) && Number(port) !== 22 ? ["[" + alias + "]:" + port] : [alias];
  const strict = String(value("StrictHostKeyChecking") ?? "").toLowerCase();
  const files = String(value("UserKnownHostsFile") ?? "~/.ssh/known_hosts ~/.ssh/known_hosts2").split(/\\s+/).filter(Boolean)
    .map(file => file.replace(/^~(?=\\/|$)/, os.homedir())).concat(["/etc/ssh/ssh_known_hosts"]);
  const glob = pattern => new RegExp("^" + pattern.replace(/[.+^$()|[\\]\\\\{}]/g, "\\\\$&").replace(/\\*/g, ".*").replace(/\\?/g, ".") + "$", "i");
  const matches = field => {
    let hit = false;
    for (const entry of field.split(",")) {
      if (entry.startsWith("|1|")) {
        const [, , salt, hash] = entry.split("|");
        if (names.some(name => crypto.createHmac("sha1", Buffer.from(salt, "base64")).update(name).digest("base64") === hash)) hit = true;
        continue;
      }
      const negated = entry.startsWith("!"), pattern = glob(negated ? entry.slice(1) : entry);
      if (names.some(name => pattern.test(name))) { if (negated) return false; hit = true; }
    }
    return hit;
  };
  return key => {
    const presented = Buffer.isBuffer(key) ? key.toString("base64") : String(key);
    let known = false;
    for (const file of files) {
      let text;
      try { text = fs.readFileSync(file, "utf8"); } catch { continue; }
      for (const raw of text.split(/\\r?\\n/)) {
        const line = raw.trim();
        if (!line || line.startsWith("#")) continue;
        const fields = line.split(/\\s+/), marker = fields[0].startsWith("@") ? fields.shift() : "";
        if (fields.length < 3 || marker === "@cert-authority" || !matches(fields[0])) continue;
        if (marker === "@revoked") { if (fields[2] === presented) { logger.error("Revoked host key for " + names[0] + " in " + file); return false; } continue; }
        known = true;
        if (fields[2] === presented) return true;
      }
    }
    const fingerprint = "SHA256:" + crypto.createHash("sha256").update(Buffer.from(presented, "base64")).digest("base64").replace(/=+$/, "");
    if (!known && strict === "no") { logger.info("StrictHostKeyChecking=no accepts the unknown host key " + fingerprint + " for " + names[0]); return true; }
    logger.error((known ? "Host key changed" : "Unknown host key") + " for " + names[0] + " (" + fingerprint + "). Add the verified key to known_hosts, for example by connecting once with ssh.");
    return false;
  };
}
`;

export function verifyHostKeys(text) {
  if (text.includes(hostKeyMarker)) return text;
  const sites = [...text.matchAll(/new ([\w$]+)\.default\(\{host:([\w$]+)\?void 0:([\w$]+),port:\2\?void 0:([\w$]+),sock:\2,/g)];
  if (sites.length !== 2) throw new Error(`Remote-SSH connection contract changed (${sites.length} connection sites)`);
  for (const site of sites.reverse()) {
    const [, , , host, port] = site;
    // The host configuration is the object whose HostName defines `host`.
    const before = text.slice(Math.max(0, site.index - 5000), site.index);
    const configs = [...before.matchAll(new RegExp(`[,;]${host.replace('$', '\\$')}=([\\w$]+)\\.HostName[?|]`, 'g'))];
    if (!configs.length) throw new Error('Remote-SSH host configuration owner missing');
    const config = configs.at(-1)[1];
    const at = site.index + site[0].length;
    text = text.slice(0, at) + `hostVerifier:openvisionHostVerifier(${host},${port},${config},this.logger),` + text.slice(at);
  }
  const result = hostVerifierHelper + text;
  parseJavaScript(result, { ecmaVersion: 'latest', sourceType: 'script' });
  return result;
}

const scriptMarker = '# OpenVision: the client uploaded the pinned server archive over this connection.';
export function localServerScript(text) {
  if (text.includes(scriptMarker)) return text;
  const anchor = '  if command -v wget >/dev/null 2>&1; then\n';
  if (text.split(anchor).length !== 2 || !text.includes('if (( $? > 0 )); then\n    echo "Error downloading server from $SERVER_DOWNLOAD_URL"'))
    throw new Error('Remote-SSH server download contract changed');
  // Closing the last window stops the server at once instead of after its
  // 300-second grace period, so no remote process outlives the window.
  const shutdown = '--enable-remote-auto-shutdown --accept-server-license-terms';
  if (text.split(shutdown).length !== 2) throw new Error('Remote-SSH server start contract changed');
  return text.replace(shutdown, '--enable-remote-auto-shutdown --remote-auto-shutdown-without-delay --accept-server-license-terms')
    .replace(anchor, `  if [[ $SERVER_DOWNLOAD_URL == openvision-local:* ]]; then\n    ${scriptMarker}\n` +
    '    mv -f "$SERVER_DATA_DIR/upload/openvision-server-$DISTRO_COMMIT-$PLATFORM-$SERVER_ARCH.tar.gz" vscode-server.tar.gz\n' +
    anchor.replace('  if', '  elif'));
}

async function installExtension(root, vsix, app) {
  if (await fileHash(vsix) !== remoteSshExtension.sha256) throw new Error(`${vsix} does not match the pinned SHA-256`);
  const target = join(app, extensionDirectory);
  const manifestPath = join(target, 'package.json');
  if (await exists(manifestPath)) {
    const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
    const main = await readFile(join(target, 'lib/extension.js'), 'utf8');
    if (manifest.version === remoteSshExtension.version && main.includes(marker) && main.includes(hostKeyMarker)) return false;
  }
  const staging = await mkdtemp(join(root, 'build/remote/vsix-'));
  try {
    const unzip = spawnSync('unzip', ['-q', vsix, 'extension/*', '-d', staging]);
    if (unzip.error || unzip.status !== 0) throw new Error(`Cannot extract ${vsix}: ${unzip.error?.message ?? unzip.stderr}`);
    const extension = join(staging, 'extension');
    const manifest = JSON.parse(await readFile(join(extension, 'package.json'), 'utf8'));
    if (`${manifest.publisher}.${manifest.name}` !== remoteSshExtension.id || manifest.version !== remoteSshExtension.version)
      throw new Error('Pinned open-remote-ssh VSIX has an unexpected identity');
    for (const [relative, transform] of [['lib/extension.js', text => verifyHostKeys(localServerUpload(text))], ['src/scripts/server-setup.sh', localServerScript]])
      await writeFile(join(extension, relative), transform(await readFile(join(extension, relative), 'utf8')));
    await rm(target, { recursive: true, force: true });
    await rename(extension, target);
  } finally { await rm(staging, { recursive: true, force: true }); }
  return true;
}

export async function installRemoteSsh(root) {
  const app = join(root, 'source/app');
  const manifestPath = join(root, 'build/remote/manifest.json');
  const server = await exists(manifestPath) ? JSON.parse(await readFile(manifestPath, 'utf8')) : undefined;
  if (server) {
    const archive = join(root, 'build/remote', server.archive);
    if (await fileHash(archive) !== server.sha256) throw new Error(`${archive} does not match build/remote/manifest.json; run npm run prepare:remote`);
    const bundled = join(app, archiveDirectory, server.archive);
    if (!await exists(bundled) || await fileHash(bundled) !== server.sha256) {
      await rm(join(app, archiveDirectory), { recursive: true, force: true });
      await mkdir(join(app, archiveDirectory), { recursive: true });
      await link(archive, bundled).catch(() => copyFile(archive, bundled));
    }
    await installExtension(root, join(root, server.extension.path), app);
  } else {
    await rm(join(app, extensionDirectory), { recursive: true, force: true });
    await rm(join(app, archiveDirectory), { recursive: true, force: true });
  }
  const productPath = join(app, 'product.json');
  const before = await readFile(productPath, 'utf8');
  const after = JSON.stringify(remoteClientProduct(JSON.parse(before), server), null, 2) + '\n';
  if (after !== before) await writeFile(productPath, after);
  console.log(server ? `Remote SSH: bundled ${remoteSshExtension.id}@${remoteSshExtension.version}; server ${server.archive} uploaded on connect, never downloaded`
    : 'Remote SSH not prepared (run npm run prepare:remote, then rebuild); remote server downloads stay disabled');
}
