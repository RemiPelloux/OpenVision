import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { readFile, writeFile, copyFile, mkdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';

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

export async function installWelcomeStartup(root) {
  const relative = 'out/vs/code/electron-sandbox/workbench/workbench.js';
  const path = join(root, 'source/app', relative);
  const before = await readFile(path, 'utf8');
  const after = customizeEarlyWelcome(before);
  if (before === after) return;
  const backup = join(root, 'backups/welcome', relative);
  await mkdir(dirname(backup), { recursive: true });
  await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
  await writeFile(path, after);
}
