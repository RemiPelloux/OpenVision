import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const parserOptions = { ecmaVersion: 'latest', sourceType: 'module' };

function uniqueIndex(text, anchor) {
  const index = text.indexOf(anchor);
  if (index < 0 || text.indexOf(anchor, index + anchor.length) >= 0)
    throw new Error(`Missing or ambiguous local customization anchor: ${anchor}`);
  return index;
}

function classOwner(text, anchor) {
  const index = uniqueIndex(text, anchor);
  const matches = [...text.slice(0, index).matchAll(/\bclass extends [\w$]+\s*\{/g)];
  const start = matches.at(-1)?.index;
  if (start === undefined) throw new Error(`Class owner missing: ${anchor}`);
  const node = parseExpressionAt(text, start, parserOptions);
  if (node.end <= index) throw new Error(`Class does not own anchor: ${anchor}`);
  return node;
}

function functionOwner(text, anchor) {
  const index = uniqueIndex(text, anchor);
  const matches = [...text.slice(0, index).matchAll(/^function [\w$]+\(/gm)];
  const start = matches.at(-1)?.index;
  if (start === undefined) throw new Error(`Function owner missing: ${anchor}`);
  let node = parseExpressionAt(text, start, parserOptions);
  while (node.type === 'CallExpression') node = node.callee;
  if (node.type !== 'FunctionExpression' || node.end <= index)
    throw new Error(`Function does not own anchor: ${anchor}`);
  return node;
}

function bodyGuard(text, body, guard, reason) {
  if (text.slice(body.start, body.end).includes(guard)) return [];
  return [{ start: body.start + 1, end: body.start + 1, after: `\n  ${guard}\n`, reason }];
}

function methodGuards(text, anchor, guards) {
  const owner = classOwner(text, anchor);
  return guards.flatMap(([name, guard]) => {
    const method = owner.body.body.find(node => node.key?.name === name);
    if (!method?.value?.body) throw new Error(`Missing owned method ${name}`);
    return bodyGuard(text, method.value.body, guard, name);
  });
}

function componentGuard(text, anchor, guard) {
  return bodyGuard(text, functionOwner(text, anchor).body, guard, anchor);
}

function settingsProfile(text, local) {
  const anchor = /description: "Sign in to get started with Cursor's AI features",\s+label: "Sign In",/.exec(text)?.[0];
  if (!anchor) throw new Error('Local account settings owner missing');
  const owner = functionOwner(text, anchor);
  const returned = owner.body.body.find(node => node.type === 'ReturnStatement')?.argument;
  if (returned?.type !== 'CallExpression' || returned.callee.type !== 'Identifier')
    throw new Error('Unexpected account settings renderer');
  const jsx = returned.callee.name;
  const guard = `if (${local}) return ${jsx}("section", {className: "openvision-profile-settings", children: [
    ${jsx}("h3", {children: "Local Profile"}),
    ${jsx}("button", {className: "openvision-local-profile", title: "Edit Local Profile",
      onClick: () => window.openvisionLocalProfile?.open(), children: [
        ${jsx}("img", {src: window.openvisionLocalProfile?.logo, alt: ""}),
        ${jsx}("span", {children: window.openvisionLocalProfile?.name ?? "Local Profile"})]}),
    ${jsx}("button", {className: "openvision-import-cursor", onClick: () => window.openvisionLocalProfile?.importCursor(),
      children: "Import from Cursor"})]});`;
  const previous = owner.body.body.find(node => node.type === 'IfStatement' &&
    text.slice(node.start, node.end).includes('className: "openvision-profile-settings"'));
  if (previous) return text.slice(previous.start, previous.end) === guard ? [] :
    [{ start: previous.start, end: previous.end, after: guard, reason: 'account settings' }];
  return bodyGuard(text, owner.body, guard, 'account settings');
}

export function localWorkbench(text, variant) {
  const flag = variant === 'desktop' ? 'zc' : 'Rl';
  const local = `${flag}.localMode`;
  const patches = methodGuards(text, '    maybeOnboard() {', [
    ['renderPopupBar', `if (${local}) return;`],
  ]);
  const onboarding = classOwner(text, '    maybeOnboard() {').body.body.find(node => node.key?.name === 'maybeOnboard').value.body;
  const explorer = `if (${local}) {
    this._workbenchLayoutService.setPartHidden(false, "workbench.parts.sidebar");
    this._workbenchLayoutService.setPartHidden(true, "workbench.parts.unifiedsidebar");
    this.paneCompositePartService.openPaneComposite("workbench.view.explorer", 0, false).catch(console.error);
    return;
  }`;
  const previousGuard = `if (${local}) return;`;
  const previousIndex = text.slice(onboarding.start, onboarding.end).indexOf(previousGuard);
  if (previousIndex >= 0) patches.push({ start: onboarding.start + previousIndex,
    end: onboarding.start + previousIndex + previousGuard.length, after: explorer, reason: 'maybeOnboard' });
  else patches.push(...bodyGuard(text, onboarding, explorer, 'maybeOnboard'));
  patches.push(...methodGuards(text, '  async signup() {', [
    ['login', `if (${local}) return window.openvisionLocalProfile?.open();`],
    ['signup', `if (${local}) return window.openvisionLocalProfile?.open();`],
    ['handleAuth', `if (${local}) return;`],
    ['_startMembershipRefreshLoop', `if (${local}) return;`],
  ]));
  const profile = `if (${local}) return window.openvisionLocalProfile?.createButton() ?? null;`;
  for (const anchor of ['const t = "Please login to continue using Cursor."', 'const e = "Please login to continue using Cursor."',
    'hintText: "Log in to use Cursor AI features"', 'title: "Login to Cursor"']) {
    if (text.includes(anchor)) patches.push(...componentGuard(text, anchor, profile));
  }
  for (const anchor of ['"titlebar.upgrade_pro_clicked"', '"settings_sidebar.upgrade_pro_clicked"'])
    patches.push(...componentGuard(text, anchor, `if (${local}) return null;`));
  patches.push(...settingsProfile(text, local));

  // The agent composer can submit through its shipped local gateway without a cloud account.
  const [loginAnchor, auth, blocked] = variant === 'desktop'
    ? ['(t.cursorAuthenticationService.login(), t.commandService.executeCommand(hR, "general"))', 'h', 'MEb']
    : ['(e.cursorAuthenticationService.login(), e.commandService.executeCommand(a2, "general"))', 'd', 'Ijm'];
  {
    const owner = functionOwner(text, loginAnchor);
    const source = text.slice(owner.start, owner.end);
    for (const [before, after] of [
      [`if (!${auth}()) {`, `if (!${local} && !${auth}()) {`],
      [`return ${auth}() && !${blocked};`, `return (${local} || ${auth}()) && !${blocked};`],
    ]) {
      if (source.includes(after)) continue;
      const index = uniqueIndex(source, before) + owner.start;
      patches.push({ start: index, end: index + before.length, after, reason: 'local agent composer' });
    }
  }
  for (const patch of patches.sort((a, b) => b.start - a.start))
    text = text.slice(0, patch.start) + patch.after + text.slice(patch.end);
  // Display names only; service identifiers, protocols and storage keys keep their identity.
  text = text.replaceAll('"Cursor Settings"', '"OpenVision Settings"')
    .replaceAll('"Open Cursor Settings"', '"Open OpenVision Settings"')
    .replaceAll('"Cursor Tab"', '"OpenVision Tab"')
    .replaceAll('"Controls which windows Cursor restores on startup"', '"Controls which windows OpenVision restores on startup"')
    .replaceAll('"Show Cursor in system tray"', '"Show OpenVision in system tray"')
    .replaceAll("We've introduced a new home for all the ways to customize Cursor.", "We've introduced a new home for all the ways to customize OpenVision.");
  return { text, patches };
}

async function languageBranding(root, app) {
  const path = join(app, 'out/nls.messages.json');
  const before = await readFile(path, 'utf8');
  const messages = JSON.parse(before);
  if (!Array.isArray(messages) || !messages.every(message => typeof message === 'string'))
    throw new Error('Unexpected localization messages format');
  const after = JSON.stringify(messages.map(message => message.replace(/\bCursor\b/g, 'OpenVision')));
  if (JSON.stringify(messages) === after) return;
  const backup = join(root, 'backups/local-profile/nls.messages.json');
  await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
  await writeFile(path, after);
}

export async function installLocalProfile(root) {
  const app = join(root, 'source/app');
  await mkdir(join(root, 'backups/local-profile'), { recursive: true });
  const workbench = join(app, 'out/vs/code/electron-sandbox/workbench');
  for (const extension of ['js', 'css'])
    await copyFile(join(root, `desktop/local-profile.${extension}`), join(workbench, `openvision-local-profile.${extension}`));
  for (const extension of ['js', 'css'])
    await copyFile(join(root, `desktop/welcome-screen.${extension}`), join(workbench, `openvision-welcome-screen.${extension}`));
  for (const name of ['project-home-service.js', 'project-home-list.js', 'project-clone-dialog.js'])
    await copyFile(join(root, 'desktop', name), join(workbench, name === 'project-home-service.js' ? `openvision-${name}` : name));
  await copyFile(join(root, 'desktop/large-paste.js'), join(workbench, 'openvision-large-paste.js'));
  await copyFile(join(root, 'desktop/import-ui.js'), join(workbench, 'openvision-import-ui.js'));
  await languageBranding(root, app);
}
