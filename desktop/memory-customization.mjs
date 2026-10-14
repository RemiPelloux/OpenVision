import { parseExpressionAt } from '../tooling/dependencies.mjs';

const marker = '/* OpenVision approved project memories v2 */';
const symbols = {
  desktop: { renderer: 'Xhg', jsx: 'fb', service: 'Lr', workspace: 'zn', files: 'yi', rules: 'HD', editor: 'an', uri: 'we', buffer: 'hi',
    mapper: 'FHf', rule: '_ce', type: 'gKe', global: 'o6t', source: 's6t', errorCode: 'Nje' },
  glass: { renderer: 'dF_', jsx: '$y', service: 'Qe', workspace: 'dr', files: 'Kr', rules: 'bR', editor: 'er', uri: 'Ze', buffer: '_r',
    mapper: '_ES', rule: 'zye', type: 'Umt', global: 'Pan', source: 'Ran', errorCode: 'cEe' },
};

function ownedFunction(text, name) {
  const anchor = `function ${name}(`, start = text.indexOf(anchor);
  if (start < 0 || text.indexOf(anchor, start + anchor.length) !== -1)
    throw new Error(`Project memory owner missing or ambiguous: ${name}`);
  const node = parseExpressionAt(text, start, { ecmaVersion: 'latest' });
  if (node.type !== 'FunctionExpression') throw new Error(`Project memory owner changed: ${name}`);
  return { start, node, body: text.slice(start, node.end) };
}

function wrapper(s) {
  return `function OpenvisionMemoryCard({ text, isStreaming }) {
    const host = openvisionMemoryUseRef(null);
    const workspace = ${s.service}(${s.workspace}), fileService = ${s.service}(${s.files});
    const rules = ${s.service}(${s.rules}), editor = ${s.service}(${s.editor});
    openvisionMemoryUseEffect(() => {
      if (!host.current) return;
      const card = openvisionCreateMemoryCard({ text, isStreaming, workspace, files: fileService, rules, editor, URI: ${s.uri}, Buffer: ${s.buffer},
        isMissing: error => error?.fileOperationResult === 1 || ${s.errorCode}(error) === "EntryNotFound" });
      host.current.replaceChildren(card.element);
      return () => { card.dispose(); card.element.remove(); };
    }, [text, isStreaming, workspace, fileService, rules, editor]);
    return ${s.jsx}("div", { ref: host, className: "openvision-project-memory-host" });
  }`;
}

function addCard(text, s) {
  const { start, node, body } = ownedFunction(text, s.renderer);
  const anchor = 'if (i === "language-mermaid" && s && typeof n == "string")';
  const offset = body.indexOf(anchor);
  if (offset < 0 || body.indexOf(anchor, offset + anchor.length) !== -1 || !body.includes('isStreaming: o'))
    throw new Error('Project memory markdown branch changed');
  const branch = `if (i === "language-openvision-memory" && typeof n == "string")
    return ${s.jsx}(OpenvisionMemoryCard, { text: n, isStreaming: o });
  `;
  return text.slice(0, start) + body.slice(0, offset) + branch + body.slice(offset) + text.slice(node.end);
}

function addPolicy(text, s) {
  const { start, node, body } = ownedFunction(text, s.mapper);
  if (!body.includes('.filter((i) => !i.isGenerated)') || !body.includes('.teamRules.map('))
    throw new Error('Project memory native rule mapper changed');
  const returns = node.body.body.filter(statement => statement.type === 'ReturnStatement');
  if (returns.length !== 1 || returns[0].argument?.type !== 'ArrayExpression')
    throw new Error('Project memory native rule return changed');
  const position = returns[0].argument.start + 1;
  const policy = `
    new ${s.rule}({
      fullPath: "openvision://project-memory-policy", content: openvisionWorkspaceMemoryPolicy,
      type: new ${s.type}({ type: { case: "global", value: new ${s.global}({}) } }), source: ${s.source}.USER,
    }),`;
  return text.slice(0, position) + policy + text.slice(position);
}

export function customizeMemory(text, variant) {
  const s = symbols[variant];
  if (!s) throw new Error(`Unsupported project memory variant: ${variant}`);
  text = alignInlineRules(text);
  if (text.includes(marker)) return text;
  const result = addPolicy(addCard(text, s), s);
  return `${marker}
import {useRef as openvisionMemoryUseRef, useEffect as openvisionMemoryUseEffect} from "./react-runtime/react/esm-index-production.js";
import {createMemoryCard as openvisionCreateMemoryCard} from "../code/electron-sandbox/workbench/openvision-workspace-memory-card.js";
import {memoryPolicy as openvisionWorkspaceMemoryPolicy} from "../code/electron-sandbox/workbench/openvision-workspace-memory.js";
${wrapper(s)}
${result}`;
}

function alignInlineRules(text) {
  const anchor = 'async applyUserRulesMigrationToExplicitContext(';
  const start = text.indexOf(anchor);
  if (start < 0 || text.indexOf(anchor, start + anchor.length) !== -1)
    throw new Error('Inline user-rule consumer missing or ambiguous');
  const tail = text.slice(start);
  const owner = parseExpressionAt(tail.replace('async ', 'async function '), 0, { ecmaVersion: 'latest' });
  const body = tail.slice(0, owner.end - 'function '.length);
  const original = 'this.knowledgeBaseService.items';
  const filtered = `${original}.filter(item => !item.isGenerated)`;
  if (body.includes(filtered)) return text;
  if (body.split(original).length !== 2) throw new Error('Inline user-rule source changed');
  return text.slice(0, start) + body.replace(original, filtered) + tail.slice(body.length);
}
