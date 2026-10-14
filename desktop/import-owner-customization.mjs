import { parseExpressionAt } from '../tooling/dependencies.mjs';

const marker = '/* OpenVision import destination owner v1 */';
export function installImportOwner(text) {
  if (text.includes(marker)) return text;
  const anchor = 'this.heicConversionFolderPath =';
  const position = text.indexOf(anchor);
  if (position < 0 || text.indexOf(anchor, position + anchor.length) >= 0) throw Error('Native host owner is missing or ambiguous.');
  const start = text.lastIndexOf('class extends ', position);
  const owner = parseExpressionAt(text, start, { ecmaVersion: 'latest' });
  const constructor = owner.body.body.find(method => method.kind === 'constructor');
  const body = text.slice(constructor.value.body.start, constructor.value.body.end);
  if (!body.includes('this.windowsMainService =') || !body.includes('this.environmentMainService =') ||
      !owner.body.body.some(method => method.key?.name === 'getWindows')) throw Error('Native import ownership contract changed.');
  const end = constructor.value.body.end - 1;
  return text.slice(0, end) + `\n${marker}\nglobalThis.openvisionImportOwner = this;\n` + text.slice(end);
}
