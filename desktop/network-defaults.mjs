// OV-1005: automatic remote fetches that the user neither configured nor
// initiated, found by the Linux process-family capture
// (desktop/verify-telemetry-extended.mjs). Each change targets the owner of
// the fetch, carries a drift guard, keeps a first backup and is idempotent.
import { readFile, writeFile, mkdir, copyFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { classAt, replaceMethods, applyTelemetryPatches } from './telemetry-patches.mjs';

const spellMarker = '/* OpenVision spellcheck dictionary downloads disabled v1 */';

// Electron downloads Hunspell dictionaries from redirector.gvt1.com for every
// session whose spellchecker is enabled, even though workbench windows set
// webPreferences.spellcheck=false. Disable the session spellchecker and its
// language list before any session exists.
export function disableSpellcheckDownloads(text) {
  if (text.includes(spellMarker)) return text;
  const matches = [...text.matchAll(/(\w+)\.commandLine\.appendSwitch\("enable-features", \w+\);/g)];
  if (matches.length !== 1) throw new Error('Command-line switch owner missing or ambiguous');
  const [match] = matches, app = match[1];
  if ((text.match(/spellcheck: !1,/g) ?? []).length < 1) throw new Error('Workbench spellcheck contract changed');
  const insertion = `${spellMarker}
  ${app}.on("session-created", (openvisionSession) => {
    try {
      openvisionSession.setSpellCheckerEnabled(false);
      openvisionSession.setSpellCheckerLanguages([]);
    } catch {}
  });
  `;
  return text.slice(0, match.index) + insertion + text.slice(match.index);
}

// @vscode/deviceid writes a machine-wide identifier to
// ~/.cache/Microsoft/DeveloperTools/deviceid (Linux) for the telemetry
// devDeviceId property. Use the owner's own fallback (a fresh UUID, which the
// caller persists in profile state) so no file is written outside the profile.
const deviceMarker = '/* OpenVision machine-wide device id disabled v1 */';
export function disableDeviceIdFile(text) {
  if (text.includes(deviceMarker)) return text;
  const matches = [...text.matchAll(/(async function [\w$]+\(([\w$]+)\) )\{\s*try \{\s*return await \(await import\("@vscode\/deviceid"\)\)\.getDeviceId\(\);\s*\} catch \(([\w$]+)\) \{\s*return \(\2\(\3\), ([\w$]+)\(\)\);\s*\}\s*\}/g)];
  if (matches.length !== 1 || text.split('@vscode/deviceid').length !== 2) throw new Error('Device id owner missing or ambiguous');
  const [match] = matches;
  return text.slice(0, match.index) + `${match[1]}{ ${deviceMarker} return ${match[4]}(); }` + text.slice(match.index + match[0].length);
}

// The extension gallery reads `extensionsGallery.controlUrl` and, when it is
// absent, returns an empty control manifest without a request. Removing it
// stops the startup/periodic fetch of https://api2.cursor.sh/extensions-control.
export const controlManifestGuard = 'if (!this.extensionsControlUrl) return { malicious: [], deprecated: {}, search: [] };';
export function removeControlUrl(product, consumers) {
  if (!consumers.every(text => text.includes(controlManifestGuard)))
    throw new Error('Extension control manifest contract changed');
  if (!product.extensionsGallery?.controlUrl) return product;
  const { controlUrl, ...gallery } = product.extensionsGallery;
  return { ...product, extensionsGallery: gallery };
}

// Bundled-extension defaults that fetch from public registries without a user
// action. Users can still enable them explicitly.
export const extensionDefaults = [
  ['extensions/typescript-language-features/package.json', {
    'js/ts.tsserver.automaticTypeAcquisition.enabled': false,
    'typescript.disableAutomaticTypeAcquisition': true,
  }],
  ['extensions/npm/package.json', { 'npm.fetchOnlinePackageInfo': false }],
];

export function setContributedDefaults(manifest, defaults) {
  const sections = [manifest.contributes?.configuration].flat().filter(Boolean);
  const result = structuredClone(manifest);
  const target = [result.contributes.configuration].flat().filter(Boolean);
  for (const [key, value] of Object.entries(defaults)) {
    const index = sections.findIndex(section => section.properties && Object.hasOwn(section.properties, key));
    if (index < 0) throw new Error(`Contributed setting contract missing: ${key}`);
    if (typeof target[index].properties[key].default !== typeof value)
      throw new Error(`Contributed setting type changed: ${key}`);
    target[index].properties[key].default = value;
  }
  return result;
}

// Workbench experiment refresh (aiserver.v1.AnalyticsService/BootstrapStatsig
// polling) and Cursor Tab fate reports (aiserver.v1.CppService/RecordCppFate).
// With no hosted bootstrap, the experiment service would never report itself
// initialized, and consumers that wait for it (shared-process MCP routing
// waits 30 s per decision, then stays on the legacy route) never decide. The
// refused refresh therefore reports the service initialized with its bundled
// and local gate defaults, as Cursor's own test mode does. A persisted
// bootstrap still hydrates first; the `{}` event matches upstream hydration.
const workbenchMarker = '/* OpenVision hosted experiment and fate reporting disabled v2 */';
const workbenchMarkerV1 = '/* OpenVision hosted experiment and fate reporting disabled v1 */';
const localInitialization = 'const openvisionExperiments = this.experimentService; ' +
  'if (openvisionExperiments && "_initialized" in openvisionExperiments && !openvisionExperiments.isInitialized()) ' +
  '{ openvisionExperiments._initialized = !0; openvisionExperiments._onDidChangeGates?.fire({}); } return;';
function uniqueMatch(text, pattern, name) {
  const matches = [...text.matchAll(pattern)];
  if (matches.length !== 1) throw new Error(`${name} owner missing or ambiguous`);
  return matches[0].index + matches[0][0].length - 1;
}
export function disableWorkbenchHostedReports(text) {
  if (text.includes(workbenchMarker)) return text;
  if (!/isInitialized\(\) \{\s*return this\._initialized;\s*\}/.test(text)) throw new Error('Experiment initialization contract changed');
  if (text.includes(workbenchMarkerV1)) {
    const v1 = `${workbenchMarkerV1} return;`;
    if (text.split(v1).length !== 2) throw new Error('Experiment refresh v1 patch missing or ambiguous');
    return text.replace(v1, `${workbenchMarker} ${localInitialization}`);
  }
  if ([...text.matchAll(/\.bootstrapStatsig\(/g)].length !== 1) throw new Error('Experiment bootstrap caller contract changed');
  const refresh = classAt(text, uniqueMatch(text, /async _doRefreshBootstrapFromServer\([\w$]+\) \{/g, 'Experiment refresh'));
  if (!text.slice(refresh.start, refresh.end).includes('(this.experimentService = ')) throw new Error('Experiment refresh service contract changed');
  const fate = classAt(text, uniqueMatch(text, /\n\s+recordCppFate\([\w$]+, [\w$]+, [\w$]+, [\w$]+\) \{/g, 'Cursor Tab fate'));
  return applyTelemetryPatches(text, [
    ...replaceMethods(refresh, { _refreshBootstrapFromServer: `${workbenchMarker} ${localInitialization}`, _startPolling: '' }),
    ...replaceMethods(fate, { recordCppFate: '' }),
  ]);
}

// Without the anonymous Statsig bootstrap above, a fresh profile evaluates
// every client gate at its bundled default. Local features that the anonymous
// bootstrap used to switch on keep their previous value here. The Customize
// manage scope selector is single-scope ("User") when this gate is off, which
// hides project skills, commands and rules. Shared-process MCP transports
// (one utility owns each configured server; the OV-303 lifecycle, cleanup and
// window-release fixes live there) were likewise on through that bootstrap.
export const localGateDefaults = { customize_manage_scope_multiselect: true, mcp_shared_process_transports: true };
export function setLocalGateDefaults(text) {
  let result = text;
  for (const [gate, value] of Object.entries(localGateDefaults)) {
    const pattern = new RegExp(`\\b${gate}: \\{ client: !0, default: (!0|!1) \\}`, 'g');
    const matches = [...result.matchAll(pattern)];
    if (matches.length !== 1) throw new Error(`Client gate default missing or ambiguous: ${gate}`);
    const [match] = matches;
    result = result.slice(0, match.index) + `${gate}: { client: !0, default: ${value ? '!0' : '!1'} }` +
      result.slice(match.index + match[0].length);
  }
  return result;
}

// Node-side Cursor backend transports (always-local, agent host, daemon) send
// RPCs such as BootstrapStatsig, GetTeamAdminSettings, ListMarketplacePlugins and
// GetKnownServers without credentials when no Cursor account is configured.
// Refuse them before sending unless the base URL is loopback or an account
// token/override exists; signed-in optional integrations are unchanged.
const anonymousMarker = '/* OpenVision anonymous hosted calls refused v1 */';
export const loopbackBase = /^https?:\/\/(?:127\.\d+\.\d+\.\d+|localhost|\[::1\])(?::\d+)?(?:\/|$)/i;
export function refuseAnonymousHostedCalls(text) {
  if (text.includes(anonymousMarker)) return text;
  const tokens = [...text.matchAll(/(const ([\w$]+) = this\.getAccessToken\(\);)\s*if \((?:void 0 !== \2|\2 === void 0)\)/g)];
  const spoof = [...text.matchAll(/([\w$]+)\.maybeUseCppSpoofToken \? this\.host\.maybeGetSpoofedCppAccessToken\(([\w$]+), \1\.baseUrl\)/g)];
  if (tokens.length !== 1 || spoof.length !== 1 || spoof[0].index < tokens[0].index || spoof[0][2] !== tokens[0][2] ||
      !text.includes('[TransportFactory] Authorization header omitted: no access token available'))
    throw new Error('Transport authorization owner missing or changed');
  const [token] = tokens, options = spoof[0][1], variable = token[2];
  const at = token.index + token[1].length;
  const guard = ` ${anonymousMarker} if (${variable} === void 0 && !${loopbackBase}.test(String(${options}.baseUrl ?? ""))) ` +
    'throw Object.assign(new Error("OpenVision: Cursor service calls require a signed-in Cursor account"), { code: "unauthenticated" });';
  return text.slice(0, at) + guard + text.slice(at);
}
// The workbench answers extension `cursor.getTeamAdminSettings()` and
// `cursor.getTeamRepos()` with the dashboard's ...OrEmptyIfNotInTeam RPCs,
// which the server answers with an empty message for anyone outside a team.
// The anonymous guard above refuses them before sending, and the refusal then
// broke local features that only read team policy. Legacy-route STDIO MCP
// connections failed with "require a signed-in Cursor account" (OV-303,
// run CZr5WO). For that refusal only, the bridge returns the same empty
// message, still without a request; signed-in calls and other errors are unchanged.
const teamMarker = '/* OpenVision anonymous team settings empty v1 */';
const anonymousRefusal = 'OpenVision: Cursor service calls require a signed-in Cursor account';
export function emptyAnonymousTeamSettings(text) {
  if (text.includes(teamMarker)) return text;
  for (const [bridge, rpc] of [['$getTeamAdminSettings', 'getTeamAdminSettingsOrEmptyIfNotInTeam'], ['$getTeamRepos', 'getTeamReposOrEmptyIfNotInTeam']]) {
    const descriptors = [...text.matchAll(new RegExp(`\\b${rpc}: \\{\\s*name: "\\w+",\\s*I: ([\\w$]+),\\s*O: ([\\w$]+),`, 'g'))];
    const methods = [...text.matchAll(new RegExp(`\\n(\\s*)async \\${bridge}\\(\\) \\{\\s*return await \\(\\s*await this\\.cursorAuthenticationService\\.dashboardClient\\(\\)\\s*\\)\\.${rpc}\\(new ([\\w$]+)\\(\\{\\}\\)\\);\\s*\\}`, 'g'))];
    if (descriptors.length !== 1 || methods.length !== 1 || descriptors[0][1] !== methods[0][2])
      throw new Error(`Team settings bridge contract changed: ${bridge}`);
    const [method] = methods, [, indent, request] = method, response = descriptors[0][2];
    const replacement = `\n${indent}async ${bridge}() { ${teamMarker}
${indent}  try {
${indent}    return await (await this.cursorAuthenticationService.dashboardClient()).${rpc}(new ${request}({}));
${indent}  } catch (openvisionError) {
${indent}    if (String(openvisionError?.rawMessage ?? openvisionError?.message ?? "").includes(${JSON.stringify(anonymousRefusal)})) return new ${response}();
${indent}    throw openvisionError;
${indent}  }
${indent}}`;
    text = text.slice(0, method.index) + replacement + text.slice(method.index + method[0].length);
  }
  return text;
}
export const transportTargets = ['extensions/cursor-always-local/dist/main.js', 'extensions/cursor-agent-host/dist/main.js',
  'extensions/cursor-agent-host/dist/agent-host-daemon/dist/bin/daemon.cjs'];

async function backedWrite(root, relative, before, after) {
  if (before === after) return false;
  const backup = join(root, 'backups/network-defaults', relative);
  await mkdir(dirname(backup), { recursive: true });
  await copyFile(join(root, relative), backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
  await writeFile(join(root, relative), after);
  return true;
}

export async function installNetworkDefaults(root) {
  const app = 'source/app';
  const main = `${app}/out/main.js`;
  const mainText = await readFile(join(root, main), 'utf8');
  await backedWrite(root, main, mainText, disableDeviceIdFile(disableSpellcheckDownloads(mainText)));
  const cli = `${app}/out/vs/code/node/cliProcessMain.js`;
  const cliText = await readFile(join(root, cli), 'utf8');
  await backedWrite(root, cli, cliText, disableDeviceIdFile(cliText));

  for (const relative of ['out/vs/workbench/workbench.desktop.main.js', 'out/vs/workbench/workbench.glass.main.js']) {
    const text = await readFile(join(root, app, relative), 'utf8');
    await backedWrite(root, `${app}/${relative}`, text, emptyAnonymousTeamSettings(setLocalGateDefaults(disableWorkbenchHostedReports(text))));
  }
  for (const relative of transportTargets) {
    const text = await readFile(join(root, app, relative), 'utf8');
    await backedWrite(root, `${app}/${relative}`, text, refuseAnonymousHostedCalls(text));
  }

  const consumers = await Promise.all(['out/vs/code/electron-utility/sharedProcess/sharedProcessMain.js',
    'out/vs/workbench/workbench.desktop.main.js'].map(file => readFile(join(root, app, file), 'utf8')));
  const productPath = `${app}/product.json`;
  const productText = await readFile(join(root, productPath), 'utf8');
  const product = removeControlUrl(JSON.parse(productText), consumers);
  await backedWrite(root, productPath, productText, JSON.stringify(product, null, 2) + '\n');

  for (const [relative, defaults] of extensionDefaults) {
    const path = `${app}/${relative}`;
    const text = await readFile(join(root, path), 'utf8');
    const after = JSON.stringify(setContributedDefaults(JSON.parse(text), defaults), null, 2) + '\n';
    if (JSON.stringify(JSON.parse(text)) !== JSON.stringify(JSON.parse(after))) await backedWrite(root, path, text, after);
  }
  console.log(`Automatic network fetches disabled: spellcheck dictionaries, extension control manifest, experiment refresh, Cursor Tab fate, machine-wide device id file, anonymous Cursor RPCs in ${transportTargets.length} transports, ${extensionDefaults.length} bundled-extension defaults, ${Object.keys(localGateDefaults).length} local gate defaults; experiments initialize locally`);
}
