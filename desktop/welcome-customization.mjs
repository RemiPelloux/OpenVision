import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { readFile, writeFile, copyFile, mkdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { blockEnd } from './source-branding.mjs';

const marker = '/* OpenVision local welcome screen v3 */';

function ownedFunction(text, anchor, evidence) {
  const start = text.indexOf(anchor);
  if (start < 0 || text.indexOf(anchor, start + anchor.length) >= 0)
    throw new Error(`Welcome owner missing or ambiguous: ${anchor}`);
  let node = parseExpressionAt(text, start, { ecmaVersion: 'latest', sourceType: 'module' });
  // A following parenthesized initializer parses as a call on a function expression.
  // Preserve that initializer; only replace the function itself.
  while (node.type === 'CallExpression') node = node.callee;
  if (node.type !== 'FunctionExpression' || !evidence.test(text.slice(start, node.end)))
    throw new Error(`Welcome ownership changed: ${anchor}`);
  return { start, end: node.end };
}

export function customizeWelcome(text, variant) {
  if (variant !== 'glass') return text;
  if (text.includes(marker)) {
    const owner = ownedFunction(text, 'function yHC() {', /OpenVision local welcome screen v3/);
    const body = text.slice(owner.start, owner.end);
    if (body.includes('return () => screen.dispose();')) return text;
    if (!body.includes('return () => screen.remove();')) throw Error('Welcome cleanup owner changed.');
    return text.slice(0, owner.start) + body.replace('return () => screen.remove();', 'return () => screen.dispose();') + text.slice(owner.end);
  }
  const node = ownedFunction(text, 'function yHC() {', /"logged-out-glass-screen"/);
  const replacement = `function yHC() {
    ${marker}
    const nativeHost = Qe(Nc), root = openvisionWelcomeRef(null);
    openvisionWelcomeEffect(() => {
      const screen = createOpenVisionWelcome({onContinue: () => nativeHost.cursorFocusOrOpenEditorWindow()});
      root.current.replaceChildren(screen);
      return () => screen.dispose();
    }, [nativeHost]);
    return xBe("div", {className: "ov-welcome-shell", children: [
      xBe("div", {ref: root, className: "ov-welcome-host"}, "welcome"),
      xBe("div", {className: "ov-welcome-titlebar", children: xBe($Ll, {})}, "controls")
    ]});
  }`;
  let result = text.slice(0, node.start) + replacement + text.slice(node.end);
  const splash = ownedFunction(result, 'function eGC() {', /FIRST_LAUNCH_SPLASH_SHOWN/);
  result = result.slice(0, splash.start) + 'function eGC() { return { phase: "done", shouldShowSplash: false }; }' + result.slice(splash.end);
  return 'import {createWelcomeScreen as createOpenVisionWelcome} from "../code/electron-sandbox/workbench/openvision-welcome-screen.js";\n' +
    'import {useEffect as openvisionWelcomeEffect, useRef as openvisionWelcomeRef} from "./react-runtime/react/esm-index-production.js";\n' +
    result;
}

export function customizeEarlyWelcome(text) {
  const marker = '/* OpenVision owns the welcome animation */';
  if (text.includes(marker)) return text;
  const node = ownedFunction(text, 'function showWelcomeSplashEarly(', /ensureWelcomeSplashEarlyStylesheet/);
  return text.slice(0, node.start) + `function showWelcomeSplashEarly() { ${marker} }` + text.slice(node.end);
}

const editorWindowMarker = '/* OpenVision opens the calling window\'s project */';

// Project Home "Enter workspace" in the Agent (Glass) window asks the main process
// for an editor window. Upstream focuses any editor window or opens an empty one;
// open (or focus) an editor window on the caller's own folder or workspace instead.
export function openCallerProject(text) {
  const owners = [...text.matchAll(/async cursorFocusOrOpenEditorWindow\(([\w$]+)\) \{/g)];
  if (owners.length !== 1) throw new Error('Editor window owner missing or ambiguous');
  const [match, caller] = owners[0], open = owners[0].index + match.length - 1, end = blockEnd(text, open);
  const body = text.slice(open, end);
  if (body.includes(editorWindowMarker)) return text;
  for (const evidence of ['this.windowsMainService.getWindows()', 'config?.glass !== !0', 'this.environmentMainService.args',
    'context: 5', 'forceNewWindow: !0', 'forceEmpty: !0', 'classic: !0, glass: !1'])
    if (!body.includes(evidence)) throw new Error(`Editor window owner changed: ${evidence}`);
  const replacement = `{
            ${editorWindowMarker}
            const workspace = this.windowsMainService.getWindowById(${caller})?.openedWorkspace;
            const target = workspace?.uri ? { folderUri: workspace.uri }
              : workspace?.configPath ? { workspaceUri: workspace.configPath } : undefined;
            const t = this.windowsMainService.getWindows().find((i) => i.config?.glass !== !0 &&
              (!target || i.openedWorkspace?.id === workspace.id));
            if (t) return (t.focus({ force: !0 }), !0);
            const { glass: n, classic: r, ...s } = this.environmentMainService.args;
            return (
              await this.windowsMainService.open({
                context: 5,
                contextWindowId: ${caller},
                cli: { ...s, classic: !0, glass: !1 },
                forceNewWindow: !0,
                ...(target ? { urisToOpen: [target] } : { forceEmpty: !0 }),
              }),
              !0
            );
          }`;
  return text.slice(0, open) + replacement + text.slice(end);
}

export async function installWelcomeStartup(root) {
  for (const [relative, transform] of [['out/vs/code/electron-sandbox/workbench/workbench.js', customizeEarlyWelcome],
    ['out/main.js', openCallerProject]]) {
    const path = join(root, 'source/app', relative);
    const before = await readFile(path, 'utf8');
    const after = transform(before);
    if (before === after) continue;
    const backup = join(root, 'backups/welcome', relative);
    await mkdir(dirname(backup), { recursive: true });
    await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
    await writeFile(path, after);
  }
}
