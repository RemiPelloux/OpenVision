import { parseExpressionAt } from '../tooling/dependencies.mjs';

const marker = '/* OpenVision large paste files v1 */';
const symbols = {
  desktop: { owner: 'Dxv', props: 'e', editor: 't', handler: 'l', selection: 'nl', range: 'rc', text: 'lv', uri: 'we', buffer: 'hi', submit: 'e, t, n' },
  glass: { owner: 'VAm', props: 't', editor: 'e', handler: 'c', selection: 'cu', range: 'pc', text: 'y_', uri: 'Ze', buffer: '_r', submit: 't, e, n' },
};

function unique(text, anchor) {
  const start = text.indexOf(anchor);
  if (start < 0 || text.indexOf(anchor, start + anchor.length) >= 0)
    throw new Error(`Large paste owner missing or ambiguous: ${anchor}`);
  return start;
}

export function customizePaste(text, variant) {
  if (text.includes(marker)) return text;
  const s = symbols[variant];
  if (!s) throw new Error(`Unsupported paste variant: ${variant}`);
  const anchor = `${s.owner} = (${s.props}) => {`;
  const start = unique(text, anchor) + `${s.owner} = `.length;
  let owner = parseExpressionAt(text, start, { ecmaVersion: 'latest' });
  if (owner.type === 'SequenceExpression') owner = owner.expressions[0];
  if (owner.type !== 'ArrowFunctionExpression') throw new Error('Paste plugin owner is not a function');
  const original = text.slice(start, owner.end);
  if (!original.includes('"copyPasteMentions"') || !original.includes('registerEvent("chat.paste")'))
    throw new Error('Large paste clipboard owner changed');
  const handler = `const ${s.handler} = (v) => {`;
  const position = start + unique(original, handler) + handler.length;
  const inserted = `
    if (openvisionHandleLargePaste(v, {
      composer: ${s.props}.composerDataHandle?.data, services: n, URI: ${s.uri}, Buffer: ${s.buffer},
      insertReference: value => {
        const selection = ${s.selection}();
        if (!${s.range}(selection)) return undefined;
        const node = ${s.text}(value).setMode("token");
        selection.insertNodes([node]);
        return original => ${s.editor}.update(() => {
          if (node.isAttached()) node.setTextContent(original).setMode("normal");
        });
      }
    })) return true;
  `;
  let result = text.slice(0, position) + inserted + text.slice(position);
  const submit = `async submitChatMaybeAbortCurrent(${s.submit}) {`;
  const submitPosition = unique(result, submit) + submit.length;
  result = result.slice(0, submitPosition) + `\nawait openvisionWaitForLargePastes(${s.props});\n` + result.slice(submitPosition);
  return `${marker}\nimport {handleLargePaste as openvisionHandleLargePaste, waitForLargePastes as openvisionWaitForLargePastes} from "../code/electron-sandbox/workbench/openvision-large-paste.js";\n${result}`;
}
