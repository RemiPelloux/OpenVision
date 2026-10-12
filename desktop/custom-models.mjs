import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const options = { ecmaVersion: 'latest', sourceType: 'module' };
const marker = '/* OpenVision custom model settings v2 */';
function owner(text, anchor) {
  const index = text.indexOf(anchor);
  if (index < 0 || text.indexOf(anchor, index + anchor.length) >= 0) throw new Error(`Model customization anchor missing or ambiguous: ${anchor}`);
  const start = [...text.slice(0, index).matchAll(/^function [\w$]+\(/gm)].at(-1)?.index;
  if (start === undefined) throw new Error('Models component owner missing');
  let node = parseExpressionAt(text, start, options);
  while (node.type === 'CallExpression') node = node.callee;
  if (node.type !== 'FunctionExpression' || node.end <= index) throw new Error('Models component owner mismatch');
  return node;
}

function localModelSettings(text, variant) {
  const ownershipMarker = '/* OpenVision local provider ownership */';
  if (text.includes(ownershipMarker)) return text;
  const settings = owner(text, 'children: "API Keys"');
  const gateway = owner(text, marker).id.name;
  const parameter = settings.params[0];
  const workspace = parameter.properties?.find(property => property.key.name === 'settingsWorkspace')?.value.name;
  if (!workspace) throw new Error('Local model settings workspace owner missing');
  const [flag, jsx] = variant === 'desktop' ? ['zc', 'Av'] : ['Rl', 'W_'];
  const guard = `\n  ${ownershipMarker}\n  if (${flag}.localMode) return ${jsx}(${gateway}, {settingsWorkspace: ${workspace}});\n`;
  return text.slice(0, settings.body.start + 1) + guard + text.slice(settings.body.start + 1);
}

export function customModels(text, variant) {
  if (text.includes(marker)) return localModelSettings(text, variant);
  const previousMarker = '/* OpenVision custom model settings v1 */';
  const upgrading = text.includes(previousMarker);
  const component = owner(text, upgrading ? previousMarker : 'children: "Configure gateway"');
  const desktop = variant === 'desktop';
  const [hook, jsx, auth, reactive, ai, secret, storage] = desktop
    ? ['Lr', 'Av', 'wo', 'co', 'K2', 'K6e', 'Cn']
    : ['Qe', 'W_', 'rs', '$o', 'kR', 'oHe', 'vi'];
  const body = `{\n  ${marker}
  const bridge = {auth: ${hook}(${auth}), reactive: ${hook}(${reactive}), ai: ${hook}(${ai}),
    secrets: ${hook}(${secret}), storage: ${hook}(${storage})};
  bridge.request = async (url, key) => {
    const response = await globalThis.vscode.ipcRenderer.invoke("vscode:openvision-discover-models", {
      url: url.slice(0, -"/models".length), key: key ?? ""});
    if (!response.ok) throw new Error(response.error);
    return {data: response.data};
  };
  return ${jsx}("div", {className: "openvision-model-settings", ref: node => openvisionMountModels(node, bridge)});
}`;
  text = text.slice(0, component.body.start) + body + text.slice(component.body.end);
  if (upgrading) return localModelSettings(text, variant);
  // The shipped API-key poller returns an empty list; preserve the selected provider's catalog.
  const anchor = /async getModels\(([\w$]+)\) \{\s+return \{ models: \[\] \};\s+\}/g;
  const matches = [...text.matchAll(anchor)];
  if (matches.length !== 1) throw new Error('API-key model list owner missing or ambiguous');
  text = text.replace(anchor, `async getModels($1) { return {models: openvisionActiveModelIds(this.storageService)}; }`);
  text = localModelSettings(text, variant);
  return `import {mountModels as openvisionMountModels} from "../code/electron-sandbox/workbench/openvision-model-settings.js";\n` +
    `import {activeModelIds as openvisionActiveModelIds} from "../code/electron-sandbox/workbench/openvision-model-providers.js";\n` + text;
}

export async function installModelSettings(root) {
  const app = join(root, 'source/app');
  const workbench = join(app, 'out/vs/code/electron-sandbox/workbench');
  for (const name of ['model-settings.js', 'model-settings.css', 'model-providers.js'])
    await copyFile(join(root, 'desktop', name), join(workbench, `openvision-${name}`));
  await copyFile(join(root, 'desktop/model-http.mjs'), join(app, 'out/openvision-model-http.js'));
  await copyFile(join(root, 'desktop/model-providers.js'), join(app, 'out/openvision-model-providers.js'));
  const mainPath = join(app, 'out/main.js');
  const main = await readFile(mainPath, 'utf8');
  const nativeImport = 'import "./openvision-model-http.js";';
  if (!main.includes(nativeImport)) {
    const backup = join(root, 'backups/custom-models/out/main.js');
    await mkdir(dirname(backup), { recursive: true });
    await copyFile(mainPath, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
    await writeFile(mainPath, nativeImport + '\n' + main);
  }
  for (const name of ['plus', 'refresh-cw', 'pencil', 'trash-2'])
    await copyFile(join(root, `tooling/node_modules/lucide-static/icons/${name}.svg`), join(workbench, `openvision-${name}.svg`));
  const htmlPath = join(workbench, 'workbench.html');
  const html = await readFile(htmlPath, 'utf8');
  if (!html.includes('openvision-model-settings.css')) {
    const backup = join(root, 'backups/custom-models/workbench.html');
    await mkdir(dirname(backup), { recursive: true });
    await copyFile(htmlPath, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
    await writeFile(htmlPath, html.replace('</head>', '<link rel="stylesheet" href="./openvision-model-settings.css"></head>'));
  }
}
