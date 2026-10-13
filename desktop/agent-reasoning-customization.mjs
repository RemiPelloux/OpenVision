import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { providerDefaultReasoning } from './model-reasoning.js';

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
  if (text.includes(marker)) return rejectUnavailable(providerDefault(text, kind), kind);
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
  return rejectUnavailable(providerDefault(`${marker}\n${text}`, kind), kind);
}

function rejectUnavailable(text, kind) {
  const marker = '/* OpenVision reject unsupported explicit reasoning */';
  if (text.includes(marker)) return text;
  const anchor = kind === 'exec' ? 'function Xxe(e) {' : 'function RMe(e, t, r, n = !1) {';
  const parameters = kind === 'exec' ? 'e.modelParameters' : 't';
  const allowed = kind === 'exec' ? 'e.configuredEffortValues' : 'r';
  const applicable = kind === 'exec' ? 'e.apiType === "openai_compatible" && ' : '';
  return replaceOwner(text, anchor, body => body.replace(anchor, `${anchor}
    ${marker}
    const selectedEffort = ${parameters}?.find(item => ['reasoning', 'effort', 'thought_level'].includes(item.id))?.value;
    if (${applicable}Array.isArray(${allowed}) && selectedEffort &&
        selectedEffort !== ${JSON.stringify(providerDefaultReasoning)} && !${allowed}.includes(selectedEffort))
      throw new Error('The selected reasoning level is unavailable. Choose a listed level or Provider default in the model picker.');
`));
}

function providerDefault(text, kind) {
  const defaultMarker = '/* OpenVision provider default reasoning v1 */';
  if (text.includes(defaultMarker)) return text;
  const owners = { exec: ['function Xxe(e) {', 'a', 'tEe'], host: ['function RMe(e, t, r, n = !1) {', 'n', 'PMe'] };
  const owner = owners[kind];
  if (!owner) throw new Error(`Unknown reasoning transport kind: ${kind}`);
  const [anchor, value, isObject] = owner;
  const before = `if (void 0 === ${value}) return;`;
  return `${defaultMarker}\n` + replaceOwner(text, anchor, body => replaceOnce(body, before,
    `if (${value} === ${JSON.stringify(providerDefaultReasoning)}) {
      delete e.reasoning_effort;
      if (${isObject}(e.reasoning)) {
        const {effort: _omitted, ...rest} = e.reasoning;
        if (Object.keys(rest).length) e.reasoning = rest;
        else delete e.reasoning;
      }
      return;
    }
    ${before}`));
}

function allowExplicitNone(text) {
  return replaceOnce(text, 'void 0 === r || "" === r || "none" === r ? void 0 : r',
    'void 0 === r || "" === r ? void 0 : r');
}
