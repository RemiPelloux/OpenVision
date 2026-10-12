import { parseExpressionAt } from '../tooling/dependencies.mjs';

const marker = '/* OpenVision provider credentials per request v1 */';
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
  return { offset: node.body.start + 1 + offset, parameters: node.params.map(parameter => parameter.name) };
}

export function requestProviderRouting(text, variant) {
  if (text.includes(marker)) return text;
  const secrets = variant === 'desktop' ? 'K6e' : 'oHe';
  const agent = methodBody(text, 'getLocalAgentProviderConfig');
  const [model, options] = agent.parameters;
  const agentGuard = `
    const openvisionProvider = await openvisionRequestProvider(this.storageService,
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
    if (openvisionProvider) return {...openvisionProvider, modelId: openvisionModel,
      userAgent: "OpenVision/" + this.productService.version, customHeaders: {}};
`;
  for (const edit of [{ offset: agent.offset, value: agentGuard }, { offset: inference.offset, value: inferenceGuard }]
    .sort((a, b) => b.offset - a.offset))
    text = text.slice(0, edit.offset) + edit.value + text.slice(edit.offset);
  return `${marker}\nimport {requestProvider as openvisionRequestProvider} from "../code/electron-sandbox/workbench/openvision-model-providers.js";\n${text}`;
}
