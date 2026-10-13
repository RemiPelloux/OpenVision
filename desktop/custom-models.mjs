import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { localModelPicker } from './model-picker.mjs';
import { readableModelMenu } from './model-picker-layout.mjs';

const options = { ecmaVersion: 'latest', sourceType: 'module' };
const marker = '/* OpenVision custom model settings v2 */';
const catalogImport = 'import {allCatalog as openvisionCatalog} from "../code/electron-sandbox/workbench/openvision-model-providers.js";';
const catalogPoller = `async getModels($1) { const catalog = openvisionCatalog(this.storageService); const models = catalog.map(model => model.name); this.reactiveStorageService.setApplicationUserPersistentStorage("availableDefaultModels2", catalog); this.reactiveStorageService.setApplicationUserPersistentStorage("availableAPIKeyModels", models); this.reactiveStorageService.setApplicationUserPersistentStorage("localProviderModelIds", models); this.reactiveStorageService.setApplicationUserPersistentStorage("localProviderAgentModelIds", models); this._didChangeAvailableModels?.(); return {models}; }`;
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
  text = readableModelMenu(text, variant);
  text = localModelPicker(text, variant);
  text = startupCatalog(text, variant);
  if (text.includes(marker)) {
    // Upgrade the first catalog integration so existing editable builds also retain
    // provider metadata (reasoning tiers, vision and grouped display names).
    if (text.includes('openvisionActiveModelIds')) {
      text = text.replace(
        'import {activeModelIds as openvisionActiveModelIds} from "../code/electron-sandbox/workbench/openvision-model-providers.js";',
        catalogImport,
      );
      const old = /async getModels\(([\w$]+)\) \{ return \{models: openvisionActiveModelIds\(this\.storageService\)\}; \}/g;
      const matches = [...text.matchAll(old)];
      if (matches.length !== 1) throw new Error('API-key model list owner missing or ambiguous');
      text = text.replace(old, catalogPoller);
    }
    return localModelSettings(text, variant);
  }
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
  text = text.replace(anchor, catalogPoller);
  text = localModelSettings(text, variant);
  return `import {mountModels as openvisionMountModels} from "../code/electron-sandbox/workbench/openvision-model-settings.js";\n` +
    catalogImport + '\n' + text;
}

function startupCatalog(text, variant) {
  const marker = '/* OpenVision catalog from saved providers */';
  if (text.includes(marker)) return text;
  const pattern = /computeAvailableDefaultModels\(\) \{\s*this\.reactiveStorageService\.availableModelsCatalogRevision\(\);/g;
  const matches = [...text.matchAll(pattern)];
  if (matches.length !== 1) throw new Error('Model catalog producer missing or ambiguous');
  const start = matches[0].index + matches[0][0].length;
  const normalizer = text.slice(start, text.indexOf('getAvailableDefaultModels()', start)).match(/\.map\(([\w$]+)\)/)?.[1];
  if (!normalizer) throw new Error('Model catalog normalizer missing');
  const flag = variant === 'desktop' ? 'zc' : 'Rl';
  const guard = `\n            ${marker}\n            if (${flag}.localMode) return openvisionCatalog(this.storageService).map(${normalizer});`;
  return text.slice(0, start) + guard + text.slice(start);
}

export async function installModelSettings(root) {
  const app = join(root, 'source/app');
  const workbench = join(app, 'out/vs/code/electron-sandbox/workbench');
  for (const name of ['model-settings.js', 'model-settings.css', 'model-providers.js', 'model-picker.css'])
    await copyFile(join(root, 'desktop', name), join(workbench, `openvision-${name}`));
  await copyFile(join(root, 'desktop/model-http.mjs'), join(app, 'out/openvision-model-http.js'));
  await copyFile(join(root, 'desktop/model-providers.js'), join(app, 'out/openvision-model-providers.js'));
  await copyFile(join(root, 'desktop/model-reasoning.js'), join(app, 'out/model-reasoning.js'));
  await copyFile(join(root, 'desktop/model-reasoning.js'), join(workbench, 'model-reasoning.js'));
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
  const missingStyles = ['model-settings', 'model-picker'].filter(name => !html.includes(`openvision-${name}.css`));
  if (missingStyles.length) {
    const backup = join(root, 'backups/custom-models/workbench.html');
    await mkdir(dirname(backup), { recursive: true });
    await copyFile(htmlPath, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
    await writeFile(htmlPath, html.replace('</head>', missingStyles.map(name =>
      `<link rel="stylesheet" href="./openvision-${name}.css">`).join('') + '</head>'));
  }
}
