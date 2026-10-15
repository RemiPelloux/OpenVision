import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { parseExpressionAt } from '../tooling/dependencies.mjs';

const marker = '/* OpenVision account host environment v2 */';
const activationMarker = '/* OpenVision account activation ownership v1 */';
const restartMarker = '/* OpenVision await extension host handoff v1 */';
const browserMarker = '/* OpenVision official account browser command v2 */';

export function customizeAccountBrowserCommand(text) {
  if (text.includes(browserMarker)) return text;
  const previous = text.indexOf('/* OpenVision official account browser command v1 */');
  if (previous >= 0) {
    const call = parseExpressionAt(text, text.indexOf('\n', previous) + 1, { ecmaVersion: 'latest' });
    if (call.type !== 'CallExpression' || call.arguments[0]?.value !== 'openvision.accounts.openBrowser' || text[call.end] !== ';')
      throw Error('Previous native account browser command changed.');
    text = text.slice(0, previous) + text.slice(call.end + 1);
  }
  const matches = [...text.matchAll(/([\w$]+)\.registerCommand\("_workbench.getRecentlyOpened", async function/g)];
  if (matches.length !== 1) throw Error('Native account browser command registry changed.');
  const [{ index, 1: registry }] = matches;
  const command = `${browserMarker}\n${registry}.registerCommand("openvision.accounts.openBrowser", (_accessor, provider, url) => window.openvisionProjectHome.openAccountBrowser(provider, url)),\n`;
  return text.slice(0, index) + command + text.slice(index);
}

export function customizeAccountRestart(text) {
  if (text.includes(restartMarker)) return text;
  const id = 'id: "workbench.action.restartExtensionHost"', at = text.indexOf(id);
  if (at < 0 || text.indexOf(id, at + 1) !== -1) throw Error('Extension host restart action changed.');
  const owner = parseExpressionAt(text, text.lastIndexOf('class ', at), { ecmaVersion: 'latest' });
  const method = owner.body.body.find(item => item.key?.name === 'run')?.value;
  if (!method?.async) throw Error('Extension host restart action is no longer asynchronous.');
  const body = text.slice(method.body.start, method.body.end);
  const pattern = /\(await ([a-z])\.stopExtensionHosts\(([^\n]+)\)\) && \1\.startExtensionHosts\(\);/;
  if (!pattern.test(body)) throw Error('Extension host restart lifecycle contract changed.');
  const updated = body.replace(pattern, `${restartMarker}\nif (await $1.stopExtensionHosts($2)) await $1.startExtensionHosts();`);
  return text.slice(0, method.body.start) + updated + text.slice(method.body.end);
}

export function customizeAccountActivation(text) {
  if (text.includes(activationMarker)) return text;
  const matches = [...text.matchAll(/this\._extensionHostManagers\.map\(\(s\) => s\.activateByEvent\(([a-z]), ([a-z]), n, i\)\)/g)];
  if (matches.length !== 1) throw Error('Account command activation owner changed.');
  const [match] = matches, anchor = match[0], at = match.index, event = match[1], kind = match[2];
  const start = text.lastIndexOf('class ', at);
  const owner = parseExpressionAt(text, start, { ecmaVersion: 'latest' });
  const method = owner.body.body.find(item => item.key?.name === '_activateByEvent')?.value;
  if (!method || method.params.map(item => item.name).join(',') !== `${event},${kind},n,i` || method.body.start > at || method.body.end < at ||
      !owner.body.body.some(item => item.key?.name === 'activationEventIsDone')) throw Error('Account command activation contract changed.');
  const replacement = `${activationMarker}\nthis._extensionHostManagers.filter((s) =>
      !${event}.startsWith("onCommand:openvision.accounts.") || !this._installedExtensionsReady.isOpen() ||
      this._runningLocations.filterByExtensionHostManager(this._registry.getExtensionDescriptionsForActivationEvent(${event}), s).length > 0
    ).map((s) => s.activateByEvent(${event}, ${kind}, n, i))`;
  return text.slice(0, at) + replacement + text.slice(at + anchor.length);
}
export function customizeAccountHost(text) {
  if (text.includes(marker)) return text;
  text = text.replace('/* OpenVision account host environment v1 */\nt = {...t, env: await openvisionAccountEnvironment(t.env)};\n', '');
  const anchor = 'const l = this._getExtHost(e);', at = text.indexOf(anchor);
  if (at < 0 || text.indexOf(anchor, at + 1) !== -1) throw Error('Extension host environment owner changed.');
  const start = text.lastIndexOf('class ', at);
  const node = parseExpressionAt(text, start, { ecmaVersion: 'latest' });
  const method = node.body.body.find(item => item.key?.name === 'start')?.value;
  // The distinctive existing spawn call below establishes which start method owns this environment.
  if (!method?.async || method.params.map(item => item.name).join(',') !== 'e,t' || method.body.start > at || method.body.end < at ||
      !text.slice(at, at + 600).includes('entryPoint: "vs/workbench/api/node/extensionHostProcess"'))
    throw Error('Extension host launch contract changed.');
  const header = 'import {accountHostEnvironment as openvisionAccountEnvironment} from "./account-profile-main.mjs";\n';
  return (text.includes(header) ? '' : header) + text.slice(0, at) + anchor +
    `\n${marker}\nt = {...t, env: await openvisionAccountEnvironment(t.env, l)};` + text.slice(at + anchor.length);
}
export async function installAccountProfiles(root) {
  const output = join(root, 'source/app/out');
  for (const name of ['account-profile-main.mjs', 'account-profile-store.mjs', 'account-profile-cleanup.mjs', 'account-login-url.cjs']) await copyFile(join(root, 'desktop', name), join(output, name));
  const path = join(output, 'main.js'), before = await readFile(path, 'utf8');
  await installPatch(root, path, before, customizeAccountHost(before), 'main.js');
  for (const variant of ['desktop', 'glass']) {
    const path = join(output, `vs/workbench/workbench.${variant}.main.js`), before = await readFile(path, 'utf8');
    await installPatch(root, path, before, customizeAccountBrowserCommand(customizeAccountRestart(customizeAccountActivation(before))), `workbench.${variant}.main.js`);
  }
}

async function installPatch(root, path, before, after, name) {
  if (before === after) return;
  const backup = join(root, 'backups/account-profiles', name);
  await mkdir(dirname(backup), { recursive: true });
  await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
  await writeFile(path, after);
}
