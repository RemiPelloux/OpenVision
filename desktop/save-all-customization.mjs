import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { saveWorkspaceDocuments } from './save-all-runtime.mjs';

const marker = '/* OpenVision workspace Save All ownership v1 */';
const untitledMarker = '/* OpenVision untitled model inventory v1 */';

export function workspaceSaveBoundary(text) {
  const anchors = [...text.matchAll(/(?:async )?\$saveAll\(([\w$]+)\) \{/g)];
  if (anchors.length !== 1) throw new Error('Workspace Save All boundary missing or ambiguous');
  const owner = parseExpressionAt(text, text.lastIndexOf('class ', anchors[0].index), { ecmaVersion: 'latest' });
  const save = owner.body.body.find(item => item.key?.name === '$save');
  const primary = save && /supportSideBySide:\s*([\w$]+\.PRIMARY)/.exec(text.slice(save.start, save.end))?.[1];
  if (!primary) throw new Error('Workspace primary-editor identity contract changed');
  return { owner, primary, parameter: anchors[0][1] };
}

export function fixWorkspaceSaveAll(text) {
  if (text.includes(marker)) {
    if (!text.includes(untitledMarker)) throw new Error('Workspace Save All has incomplete model inventory');
    if (!text.includes(saveWorkspaceDocuments.toString())) throw new Error('Workspace Save All runtime changed; restore the selected pre-customization source before rebuilding');
    return text;
  }
  const { owner, primary, parameter } = workspaceSaveBoundary(text);
  const method = owner.body.body.find(item => item.key?.name === '$saveAll');
  const before = text.slice(method.start, method.end);
  if (!/^\$saveAll\(([\w$]+)\)\s*{\s*return this\._editorService\.saveAll\({ includeUntitled: \1 }\)\.then\(\(([\w$]+)\) => \2\.success\);\s*}$/.test(before))
    throw new Error('Workspace Save All adapter contract changed');
  const inventory = `isUntitledWithAssociatedResource(${parameter}) {`;
  const inventoryAt = text.indexOf(inventory);
  if (inventoryAt < 0 || text.indexOf(inventory, inventoryAt + inventory.length) !== -1)
    throw new Error('Untitled model owner missing or ambiguous');
  const untitled = parseExpressionAt(text, text.lastIndexOf('class ', inventoryAt), { ecmaVersion: 'latest' });
  const constructor = untitled.body.body.find(item => item.kind === 'constructor');
  if (!text.slice(constructor.start, constructor.end).includes('this.mapResourceToModel = new '))
    throw new Error('Untitled model inventory ownership changed');
  if (untitled.body.body.some(item => item.key?.name === 'models'))
    throw new Error('Untitled model inventory already exists without ownership marker');
  const edits = [
    [method.start, method.end, `async $saveAll(${parameter}) { ${marker}\nreturn (${saveWorkspaceDocuments.toString()}).call(this, ${parameter}, ${primary});\n}`],
    [inventoryAt, inventoryAt, `get models() { ${untitledMarker}\nreturn [...this.mapResourceToModel.values()];\n}\n`],
  ];
  for (const [start, end, replacement] of edits.sort((a, b) => b[0] - a[0]))
    text = text.slice(0, start) + replacement + text.slice(end);
  return text;
}
