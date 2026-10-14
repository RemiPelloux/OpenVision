import { parseExpressionAt } from '../tooling/dependencies.mjs';

const marker = '/* OpenVision project home service v1 */';

export function customizeProjectHome(text, variant) {
  if (!['desktop', 'glass'].includes(variant)) throw Error('Unknown project-home variant.');
  text = deferHomeRemoteInstall(text, variant);
  if (text.includes(marker)) return text;
  const anchor = '(this.nativeHostService =', position = text.indexOf(anchor);
  if (position < 0) throw Error('Native project-home service owner missing.');
  const start = text.lastIndexOf('class ', position);
  const owner = parseExpressionAt(text, start, { ecmaVersion: 'latest' });
  const body = owner.body.body.find(node => node.kind === 'constructor')?.value.body;
  if (!body || body.end < position) throw Error('Native project-home constructor changed.');
  const source = text.slice(body.start, body.end);
  for (const property of ['storageService', 'instantiationService', 'fileService', 'commandService', 'contextService', 'nativeEnvironmentService'])
    if (!source.includes(`this.${property} =`)) throw Error(`Project-home dependency missing: ${property}`);
  const recent = /registerCommand\("_workbench.getRecentlyOpened", async function \(([\w$]+)\) \{\s+return \1.get\(([\w$]+)\).getRecentlyOpened\(\);/g;
  const matches = [...text.matchAll(recent)];
  if (matches.length !== 1) throw Error('Recent-project service owner missing or ambiguous.');
  const insertion = `\n${marker}\ninstallOpenVisionProjectHome(this, () => this.instantiationService.invokeFunction(accessor => accessor.get(${matches[0][2]})));\n`;
  return 'import {installProjectHome as installOpenVisionProjectHome} from "../code/electron-sandbox/workbench/openvision-project-home-service.js";\n' +
    text.slice(0, body.end - 1) + insertion + text.slice(body.end - 1);
}

function deferHomeRemoteInstall(text, variant) {
  const marker = '/* OpenVision installs remote tools on request */';
  if (text.includes(marker)) return text;
  const evidence = "Failed to auto-install '${this.extensionId}' for Glass", at = text.indexOf(evidence);
  if (at < 0 || text.indexOf(evidence, at + 1) !== -1) throw Error('Home remote installer owner missing or ambiguous.');
  const start = text.lastIndexOf('class ', at);
  const owner = parseExpressionAt(text, start, { ecmaVersion: 'latest' });
  const body = owner.body.body.find(node => node.key?.name === 'installIfNeeded')?.value.body;
  if (!body || owner.end < at) throw Error('Home remote installer method changed.');
  const guard = `\n${marker}\nif (${variant === 'desktop' ? 'zc' : 'Rl'}.localMode) return;\n`;
  return text.slice(0, body.start + 1) + guard + text.slice(body.start + 1);
}
