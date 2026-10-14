import { parseExpressionAt } from '../tooling/dependencies.mjs';

const marker = '/* OpenVision reviewed legacy memories v2 */';
const variants = {
  desktop: { owner: 'jLf', anchor: '!ie && fe === "skills" ? L : null,', condition: '!ie && fe === "rules"',
    jsx: 'fb', parameter: 'e', root: 'yPy', banner: 'Ar', rules: 'HD', uri: 'we', buffer: 'hi', error: 'Nje' },
  glass: { owner: 'CdS', anchor: '!ne && ae === "skills" ? A : null,', condition: '!ne && ae === "rules"',
    jsx: '$y', parameter: 't', root: 'RkC', banner: 'dn', rules: 'bR', uri: 'Ze', buffer: '_r', error: 'cEe' },
};

function ownedFunction(text, name) {
  const anchor = `function ${name}(`, start = text.indexOf(anchor);
  if (start < 0 || text.indexOf(anchor, start + anchor.length) !== -1)
    throw new Error(`Legacy-memory Customize owner missing or ambiguous: ${name}`);
  const node = parseExpressionAt(text, start, { ecmaVersion: 'latest' });
  return { start, end: node.end, body: text.slice(start, node.end) };
}

function replaceOnce(text, from, to) {
  if (text.split(from).length !== 2) throw new Error(`Legacy-memory Rules prop boundary changed: ${from}`);
  return text.replace(from, to);
}

function removePrior(text, s) {
  const old = '/* OpenVision reviewed legacy memories v1 */';
  if (!text.includes(old)) return text;
  const wrapper = ownedFunction(text, 'OpenvisionLegacyMemories');
  text = text.slice(0, text.indexOf(old)) + text.slice(wrapper.end).trimStart();
  return replaceOnce(text, `\n      ${s.condition} ? ${s.jsx}(OpenvisionLegacyMemories, {}) : null,`, '');
}

export function customizeLegacyMemories(text, variant) {
  const s = variants[variant];
  if (!s) throw new Error(`Unsupported legacy-memory workbench: ${variant}`);
  if (text.includes(marker)) return text;
  text = removePrior(text, s);
  const owner = ownedFunction(text, s.owner);
  const patched = replaceOnce(owner.body, s.anchor, `${s.anchor}\n      ${s.condition} ? ${s.parameter}.openvisionRulesBanner : null,`);
  text = text.slice(0, owner.start) + patched + text.slice(owner.end);
  text = replaceOnce(text, `skillsBanner: ${s.parameter}.manageSkillsBanner,`,
    `skillsBanner: ${s.parameter}.manageSkillsBanner,\n                openvisionRulesBanner: ${s.parameter}.openvisionRulesBanner,`);
  text = replaceOnce(text, 'manageSkillsBanner: i.manage.skillsBanner,',
    'manageSkillsBanner: i.manage.skillsBanner,\n              openvisionRulesBanner: i.manage.openvisionRulesBanner,');
  const root = ownedFunction(text, s.root);
  const native = replaceOnce(root.body, `skillsBanner: ${s.banner},`,
    `skillsBanner: ${s.banner},\n            openvisionRulesBanner: ${s.jsx}(OpenvisionLegacyMemories, { services: ${s.parameter} }),`);
  text = text.slice(0, root.start) + native + text.slice(root.end);
  return `${marker}
import {createLegacyMemoryReview as openvisionCreateLegacyMemoryReview} from "../code/electron-sandbox/workbench/openvision-legacy-memory-review.js";
function OpenvisionLegacyMemories({ services }) {
  const host = openvisionMemoryUseRef(null);
  openvisionMemoryUseEffect(() => {
    if (!host.current) return;
    const { knowledgeBaseService: knowledge, workspaceContextService: workspace, fileService: files, editorService: editor } = services;
    const rules = services.instantiationService.invokeFunction(accessor => accessor.get(${s.rules}));
    const review = openvisionCreateLegacyMemoryReview({ knowledge, workspace, files, rules, editor, URI: ${s.uri}, Buffer: ${s.buffer},
      isMissing: error => error?.fileOperationResult === 1 || ${s.error}(error) === "EntryNotFound" });
    host.current.replaceChildren(review.element);
    return () => review.dispose();
  }, [services]);
  return ${s.jsx}("div", { ref: host });
}
${text}`;
}
