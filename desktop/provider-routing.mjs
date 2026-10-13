import { parseExpressionAt } from '../tooling/dependencies.mjs';

const previousMarker = '/* OpenVision provider credentials per request v1 */';
const marker = '/* OpenVision provider credentials per request v2 */';
const options = { ecmaVersion: 'latest', sourceType: 'module' };

function methodBody(text, name) {
  const anchor = `async ${name}(`;
  const start = text.indexOf(anchor);
  if (start < 0 || text.indexOf(anchor, start + anchor.length) !== -1)
    throw new Error(`Provider request method missing or ambiguous: ${name}`);
  const prefix = 'async function ';
  const expression = prefix + text.slice(start + 'async '.length);
  const node = parseExpressionAt(expression, 0, options);
  const offset = start + 'async '.length - prefix.length;
  return { offset: node.body.start + 1 + offset, end: node.end + offset,
    parameters: node.params.map(parameter => parameter.name) };
}

export function requestProviderRouting(text, variant) {
  if (text.includes(marker)) return selectionParameters(text);
  if (text.includes(previousMarker)) {
    const upgrades = [
      ['const openvisionProvider = await openvisionRequestProvider(this.storageService,',
        'const openvisionProvider = await openvisionAgentProvider(this.storageService,'],
      ['{...openvisionProvider, modelId: openvisionModel,', '{...openvisionProvider,'],
      ['requestProvider as openvisionRequestProvider}',
        'requestProvider as openvisionRequestProvider, requestAgentProvider as openvisionAgentProvider}'],
    ];
    for (const [before, after] of upgrades) {
      if (text.split(before).length !== 2) throw new Error('Previous provider routing contract changed');
      text = text.replace(before, after);
    }
    return selectionParameters(agentRoutingPayload(text.replace(previousMarker, marker)));
  }
  const secrets = variant === 'desktop' ? 'K6e' : 'oHe';
  const agent = methodBody(text, 'getLocalAgentProviderConfig');
  const [model, options] = agent.parameters;
  const agentGuard = `
    const openvisionProvider = await openvisionAgentProvider(this.storageService,
      this.instantiationService.invokeFunction(accessor => accessor.get(${secrets})),
      ${options}?.requestedModel?.modelId ?? ${model}?.modelId);
    if (openvisionProvider) return {...openvisionProvider, customHeaders: {}};
`;
  const inference = methodBody(text, 'getLocalInferenceProviderConfig');
  const inferenceGuard = `
    const openvisionConfig = this._modelConfigService.getModelConfig("composer");
    const openvisionModel = openvisionConfig.selectedModels?.[0]?.modelId ?? openvisionConfig.modelName;
    const openvisionProvider = await openvisionRequestProvider(this._storageService,
      this._instantiationService.invokeFunction(accessor => accessor.get(${secrets})), openvisionModel);
    if (openvisionProvider) return {...openvisionProvider,
      userAgent: "OpenVision/" + this.productService.version, customHeaders: {}};
`;
  for (const edit of [{ offset: agent.offset, value: agentGuard }, { offset: inference.offset, value: inferenceGuard }]
    .sort((a, b) => b.offset - a.offset))
    text = text.slice(0, edit.offset) + edit.value + text.slice(edit.offset);
  return selectionParameters(agentRoutingPayload(`${marker}\nimport {requestProvider as openvisionRequestProvider, requestAgentProvider as openvisionAgentProvider} from "../code/electron-sandbox/workbench/openvision-model-providers.js";\n${text}`));
}

function selectionParameters(text) {
  const marker = '/* OpenVision validate selected reasoning before dispatch */';
  if (text.includes(marker)) return text;
  const method = methodBody(text, 'getLocalAgentProviderConfig');
  const [model, context] = method.parameters;
  const before = `${context}?.requestedModel?.modelId ?? ${model}?.modelId);`;
  const body = text.slice(method.offset, method.end);
  if (body.split(before).length !== 2) throw new Error('Agent reasoning selection payload changed');
  const after = body.replace(before, `${marker}\n      ${context}?.requestedModel ?? ${model});`);
  return text.slice(0, method.offset) + after + text.slice(method.end);
}

function agentRoutingPayload(text) {
  const method = methodBody(text, 'runLocalAgentInExtensionHost');
  const body = text.slice(method.offset, method.end);
  const pattern = /baseUrl: ([\w$]+)\.baseUrl,\s+apiKey: \1\.apiKey,/g;
  if ([...body.matchAll(pattern)].length !== 1) throw new Error('Agent provider payload owner changed');
  const after = body.replace(pattern, (value, config) => `${value}\n                  openvisionProviders: ${config}.openvisionProviders,`);
  return text.slice(0, method.offset) + after + text.slice(method.end);
}
