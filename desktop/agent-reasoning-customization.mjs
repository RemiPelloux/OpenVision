import { parseExpressionAt } from '../tooling/dependencies.mjs';

const marker = '/* OpenVision per-model reasoning transport v1 */';
const options = { ecmaVersion: 'latest', sourceType: 'script' };

function replaceOwner(text, anchor, transform) {
  const start = text.indexOf(anchor);
  if (start < 0 || text.indexOf(anchor, start + anchor.length) !== -1)
    throw new Error(`Reasoning transport owner missing or ambiguous: ${anchor}`);
  const node = parseExpressionAt(text, start, options);
  if (node.type !== 'FunctionExpression') throw new Error('Reasoning transport owner is not a function');
  const body = text.slice(start, node.end);
  return text.slice(0, start) + transform(body) + text.slice(node.end);
}

function replaceOnce(text, before, after) {
  const start = text.indexOf(before);
  if (start < 0 || text.indexOf(before, start + before.length) !== -1)
    throw new Error(`Reasoning transport anchor missing or ambiguous: ${before}`);
  return text.slice(0, start) + after + text.slice(start + before.length);
}

export function customizeAgentReasoning(text, kind) {
  if (text.includes(marker)) return text;
  if (kind === 'exec') {
    text = replaceOwner(text, 'function Zxe(e) {', body => replaceOnce(body,
      'defaultOpenAICompatibleEndpoint: e.defaultOpenAICompatibleEndpoint,\n                configuredEffortValues: e.configuredEffortValues,',
      `defaultOpenAICompatibleEndpoint: e.defaultOpenAICompatibleEndpoint,
                configuredEffortValues: (yield import("./openvision-model-reasoning.mjs")).requestReasoningValues({
        baseUrl: o.baseUrl, modelId: e.modelId, configured: e.configuredEffortValues,
        advertised: i.reasoningEffortValues }),`));
    text = replaceOwner(text, 'function Xxe(e) {', allowExplicitNone);
  } else if (kind === 'host') {
    text = replaceOwner(text, 'function YMe(e) {', body => replaceOnce(replaceOnce(body,
      's = null !== (t = null == n ? void 0 : n.modelId)',
      `openvisionEfforts = (yield import("./openvision-model-reasoning.mjs")).requestReasoningValues({
        baseUrl: e.baseUrl, modelId: e.modelId, configured: e.configuredEffortValues,
        advertised: n?.reasoningEffortValues }),
          s = null !== (t = null == n ? void 0 : n.modelId)`),
      '})(s, e),', '})(s, {...e, configuredEffortValues: openvisionEfforts}),'));
    text = replaceOwner(text, 'function RMe(e, t, r, n = !1) {', allowExplicitNone);
  } else throw new Error(`Unknown reasoning transport kind: ${kind}`);
  return `${marker}\n${text}`;
}

function allowExplicitNone(text) {
  return replaceOnce(text, 'void 0 === r || "" === r || "none" === r ? void 0 : r',
    'void 0 === r || "" === r ? void 0 : r');
}
