// OV-703 remote server input. Remote windows need a server built from the same
// editor commit as the client: the server refuses any other renderer commit
// ("Client refused: version mismatch") and the extension host RPC table carries
// Cursor-only proxy identifiers, so a stock VS Code server cannot serve this
// client (docs/engineering/remote-ssh.md). `npm run prepare:remote` downloads the
// pinned Cursor server archive for the 3.21.13 input once, verifies its size and
// SHA-256, applies the OpenVision branding, network and telemetry
// customizations, and repacks it as build/remote/openvision-server-<commit>-linux-x64.tar.gz.
// It also pins the open-remote-ssh VSIX. Connecting never fetches a server:
// the client uploads this archive over the SSH connection.
import { spawnSync } from 'node:child_process';
import { chmod, mkdir, readFile, rename, rm, stat, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { format } from '../tooling/formatter.mjs';
import { disableCoreTelemetry } from './telemetry-core.mjs';
import { telemetryProduct } from './telemetry-settings.mjs';
import { disableAgentTelemetry, disableCodebaseTelemetry, disableCompletionTelemetry, disableDebuggerTelemetry,
  disableExtensionHostTelemetry } from './telemetry-extensions.mjs';
import { isolateEnvironmentProfileHome, isolateNodeProfileHome, nodeTargets, variable as profileHomeVariable } from './profile-home-paths.mjs';
import { disableDeviceIdFile, extensionDefaults, refuseAnonymousHostedCalls, setContributedDefaults, skipVsixGalleryMetadata,
  transportTargets } from './network-defaults.mjs';
import { downloadPinned } from './linux-input.mjs';
import { fileHash } from './import-files.mjs';
import { exists } from './source-assembly.mjs';

export const inputCommit = 'e44a49c17e334d442e58bbde931d791200f014a0';
export const remoteServerInputs = {
  'linux-x64': { version: '3.21.13', commit: inputCommit, file: 'vscode-reh-linux-x64.tar.gz', bytes: 118681163,
    sha256: '3ce1e7780652f6b044f0c8195a58d7fe524b5abd79d6fc0b8462e212edaff025', top: 'vscode-reh-linux-x64',
    url: `https://cursor.blob.core.windows.net/remote-releases/${inputCommit}/vscode-reh-linux-x64.tar.gz` },
};
// MIT-licensed resolver for `ssh-remote+` authorities (github.com/jeanp413/open-remote-ssh).
export const remoteSshExtension = { id: 'jeanp413.open-remote-ssh', version: '0.4.0', license: 'MIT',
  file: 'jeanp413.open-remote-ssh-0.4.0.vsix', bytes: 198903,
  sha256: '4cf4d3720050eaf7e6299770593defa7c75ee2cd4c999c92e4aa6ce168b6634b',
  url: 'https://open-vsx.org/api/jeanp413/open-remote-ssh/0.4.0/file/jeanp413.open-remote-ssh-0.4.0.vsix' };

export const serverNames = { serverApplicationName: 'openvision-server', serverDataFolderName: '.openvision-server',
  tunnelApplicationName: 'openvision-tunnel' };
// Not a URL: the patched resolver uploads the local archive instead of
// letting the remote download anything (desktop/remote-ssh-customization.mjs).
export const localServerTemplate = 'openvision-local:${commit}/${os}-${arch}';
export const archiveName = (commit, platform) => `openvision-server-${commit}-${platform}.tar.gz`;
const removedServerKeys = ['updateUrl', 'backupUpdateUrl', 'downloadUrl', 'releaseNotesUrl', 'nodejsRepository',
  'remoteExtensionTips', 'webExtensionTips', 'configBasedExtensionTips', 'exeBasedExtensionTips', 'keymapExtensionTips',
  'languageExtensionTips', 'extensionRecommendations', 'webviewContentExternalBaseUrlTemplate', 'reportIssueUrl',
  'checksums'];

export function serverProduct(product, commit = inputCommit) {
  if (product.commit !== commit) throw new Error(`Remote server commit ${product.commit} does not match the client input ${commit}`);
  const result = telemetryProduct({ ...product, nameShort: 'OpenVision Server', nameLong: 'OpenVision Server',
    applicationName: 'openvision', dataFolderName: '.openvision-local', urlProtocol: 'openvision-local',
    linuxIconName: 'openvision', ...serverNames, serverDownloadUrlTemplate: localServerTemplate });
  for (const key of removedServerKeys) delete result[key];
  if (result.extensionsGallery) {
    const { controlUrl, ...gallery } = result.extensionsGallery;
    result.extensionsGallery = gallery;
  }
  return result;
}

// Built server bundles inline product.json. Replace the one literal per bundle
// that carries the pinned commit and server names with the customized product.
export function inlineServerProduct(text, product, path = 'bundle') {
  const literal = `/* OpenVision server product v1 */ ${JSON.stringify(product)}`;
  if (text.includes(literal)) return text;
  const anchors = [...text.matchAll(/\bserverApplicationName: "cursor-server",/g)];
  if (anchors.length !== 1) throw new Error(`Inline product owner missing or ambiguous: ${path} (${anchors.length})`);
  for (let start = text.lastIndexOf('{', anchors[0].index); start >= 0; start = text.lastIndexOf('{', start - 1)) {
    let node;
    try { node = parseExpressionAt(text, start, { ecmaVersion: 'latest' }); } catch { continue; }
    if (node.type !== 'ObjectExpression' || node.end < anchors[0].index) continue;
    const keys = new Map(node.properties.map(item => [item.key?.name ?? item.key?.value, item.value]));
    if (!keys.has('serverApplicationName')) continue;
    if (keys.get('commit')?.value !== product.commit) throw new Error(`Inline product commit changed: ${path}`);
    return text.slice(0, node.start) + literal + text.slice(node.end);
  }
  throw new Error(`Inline product literal missing: ${path}`);
}

const inlineProductTargets = ['out/server-main.js', 'out/vs/workbench/api/node/extensionHostProcess.js',
  'out/vs/platform/terminal/node/ptyHostMain.js'];
// Every transform is one the client build applies to the same owner; the drift
// guards stay in the shared functions. Unlisted owners do not exist on the server.
// Remote profile isolation: remote extensions resolve their data (agent
// projects, MCP state, plugins, sandbox policies) from
// VSCODE_OPENVISION_PROFILE_HOME instead of ~/.cursor. The resolver sets it per
// local profile; the launcher supplies a default (remoteLauncher). The counts
// are the client's: the server copies of these bundles match them exactly.
const remoteProfileTargets = Object.entries(nodeTargets).filter(([relative]) => !relative.includes('/electron-utility/'));
export const serverTransforms = [
  ...remoteProfileTargets.map(([relative, expected]) => [relative, text => isolateNodeProfileHome(text, expected)]),
  ['out/server-main.js', text => skipVsixGalleryMetadata(isolateEnvironmentProfileHome(disableDeviceIdFile(disableCoreTelemetry(text).text)))],
  ['out/vs/platform/terminal/node/ptyHostMain.js', isolateEnvironmentProfileHome],
  ['out/vs/workbench/api/node/extensionHostProcess.js',
    text => disableExtensionHostTelemetry(disableCoreTelemetry(text, { requireSentry: true }).text)],
  ['extensions/cursor-always-local/dist/main.js', text => disableCompletionTelemetry(disableAgentTelemetry(text))],
  ['extensions/cursor-agent-host/dist/main.js', disableAgentTelemetry],
  ['extensions/cursor-agent-host/dist/agent-host-daemon/dist/bin/daemon.cjs', disableAgentTelemetry],
  ['extensions/cursor-retrieval/dist/main.js', disableCodebaseTelemetry],
  ['extensions/ms-vscode.js-debug/src/extension.js', disableDebuggerTelemetry],
  ...transportTargets.map(target => [target, refuseAnonymousHostedCalls]),
];

// The server launcher supplies a profile home inside the server data folder
// (bin/<commit>/../../profiles/default) when no window set one.
export const launcherMarker = '# OpenVision remote profile home v1';
export function remoteLauncher(text) {
  if (text.includes(launcherMarker)) return text;
  const anchor = 'ROOT="$(dirname "$(dirname "$(readlink -f "$0")")")"\n';
  if (text.split(anchor).length !== 2 || !text.includes('"$ROOT/node" ${INSPECT:-} "$ROOT/out/server-main.js" "$@"'))
    throw new Error('Remote server launcher contract changed');
  return text.replace(anchor, `${anchor}\n${launcherMarker}\n` +
    `export ${profileHomeVariable}="\${${profileHomeVariable}:-$(dirname "$(dirname "$ROOT")")/profiles/default}"\n`);
}

export function remoteCli(text) {
  if (text.includes('APP_NAME="openvision"')) return text;
  const result = text.replace(/^APP_NAME="cursor"$/m, 'APP_NAME="openvision"').replace(/^EXEC_NAME="cursor"$/m, 'EXEC_NAME="openvision"');
  if (!result.includes('APP_NAME="openvision"') || !result.includes('EXEC_NAME="openvision"'))
    throw new Error('Remote CLI launcher contract changed');
  return result;
}

const run = (command, args, options = {}) => {
  const result = spawnSync(command, args, { stdio: ['ignore', 'pipe', 'pipe'], maxBuffer: 1 << 26, ...options });
  if (result.error) throw result.error;
  if (result.status !== 0) throw new Error(`${command} ${args.slice(0, 3).join(' ')} failed: ${result.stderr}`);
  return result.stdout;
};

async function pinned(root, input, directory) {
  const path = join(root, 'build/inputs', directory, input.file);
  await mkdir(join(root, 'build/inputs', directory), { recursive: true });
  if (!await exists(path)) {
    console.log(`Downloading pinned ${input.file} (${Math.round(input.bytes / 1048576)} MiB)`);
    await downloadPinned(input, path);
  } else if (await fileHash(path) !== input.sha256) throw new Error(`Existing ${path} does not match the pinned SHA-256; remove it and retry.`);
  return path;
}

async function formatted(path, relative) {
  const result = await format(relative, await readFile(path, 'utf8'), { sortImports: false, sortPackageJson: false, embeddedLanguageFormatting: 'off' });
  if (result.errors.length) throw new Error(`Cannot format remote server script: ${relative}`);
  return result.code;
}

export async function prepareRemoteServer(root, { platform = `${process.platform}-${process.arch}` } = {}) {
  const input = remoteServerInputs[platform];
  if (!input) throw new Error(`No pinned remote server for ${platform}; OpenVision prepares Linux x64 servers only.`);
  const archive = await pinned(root, input, `cursor-server-${input.commit}-${platform}`);
  const vsix = await pinned(root, remoteSshExtension, `open-remote-ssh-${remoteSshExtension.version}`);
  const output = resolve(root, 'build/remote');
  const stage = join(output, 'stage'), top = `openvision-server-${platform}`, server = join(stage, top);
  // The staging tree is rebuilt from the verified input every time.
  await rm(stage, { recursive: true, force: true });
  await mkdir(stage, { recursive: true });
  run('tar', ['-xzf', archive, '-C', stage, '--no-same-owner']);
  await rename(join(stage, input.top), server);

  const productPath = join(server, 'product.json');
  const product = serverProduct(JSON.parse(await readFile(productPath, 'utf8')), input.commit);
  await writeFile(productPath, JSON.stringify(product, null, 2) + '\n');
  const patched = new Map();
  for (const [relative, transform] of serverTransforms) {
    const text = patched.get(relative) ?? await formatted(join(server, relative), relative);
    patched.set(relative, transform(text));
  }
  for (const relative of inlineProductTargets) {
    const text = patched.get(relative) ?? await formatted(join(server, relative), relative);
    patched.set(relative, inlineServerProduct(text, product, relative));
  }
  for (const [relative, text] of patched) await writeFile(join(server, relative), text);
  for (const [relative, defaults] of extensionDefaults) {
    const path = join(server, relative);
    await writeFile(path, JSON.stringify(setContributedDefaults(JSON.parse(await readFile(path, 'utf8')), defaults), null, 2) + '\n');
  }
  const launcher = join(server, `bin/${serverNames.serverApplicationName}`);
  await rename(join(server, 'bin/cursor-server'), launcher);
  await writeFile(launcher, remoteLauncher(await readFile(launcher, 'utf8')));
  await chmod(launcher, 0o755);
  const cli = join(server, 'bin/remote-cli/openvision');
  await rename(join(server, 'bin/remote-cli/cursor'), cli);
  await writeFile(cli, remoteCli(await readFile(cli, 'utf8')));
  await chmod(cli, 0o755);

  // Deterministic archive: sorted names, fixed owner and the input build date.
  const name = archiveName(input.commit, platform), packed = join(output, name);
  run('tar', ['--sort=name', '--format=gnu', '--owner=0', '--group=0', '--numeric-owner', `--mtime=${product.date}`,
    '--use-compress-program=gzip -n -6', '-cf', `${packed}.partial`, '-C', stage, top]);
  await rename(`${packed}.partial`, packed);
  const manifest = { schema_version: 1, platform, commit: input.commit, version: input.version,
    input: { url: input.url, sha256: input.sha256, bytes: input.bytes },
    archive: name, sha256: await fileHash(packed), bytes: (await stat(packed)).size, top,
    serverApplicationName: serverNames.serverApplicationName, serverDataFolderName: serverNames.serverDataFolderName,
    customized: [...patched.keys(), ...extensionDefaults.map(([relative]) => relative), 'product.json',
      `bin/${serverNames.serverApplicationName}`, 'bin/remote-cli/openvision'],
    extension: { ...remoteSshExtension, path: vsix.slice(root.length + 1) } };
  await writeFile(join(output, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
  await rm(stage, { recursive: true, force: true });
  return manifest;
}
