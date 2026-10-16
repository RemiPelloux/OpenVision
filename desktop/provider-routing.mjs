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
  return imageInputGate(providerRouting(text, variant));
}

function providerRouting(text, variant) {
  if (text.includes(marker)) return selectionParameters(preserveProviderHeaders(text));
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
    return selectionParameters(preserveProviderHeaders(agentRoutingPayload(text.replace(previousMarker, marker))));
  }
  const secrets = variant === 'desktop' ? 'K6e' : 'oHe';
  const agent = methodBody(text, 'getLocalAgentProviderConfig');
  const [model, options] = agent.parameters;
  const agentGuard = `
    const openvisionProvider = await openvisionAgentProvider(this.storageService,
      this.instantiationService.invokeFunction(accessor => accessor.get(${secrets})),
      ${options}?.requestedModel?.modelId ?? ${model}?.modelId);
    if (openvisionProvider) return {...openvisionProvider, customHeaders: openvisionProvider.customHeaders ?? {}};
`;
  const inference = methodBody(text, 'getLocalInferenceProviderConfig');
  const inferenceGuard = `
    const openvisionConfig = this._modelConfigService.getModelConfig("composer");
    const openvisionModel = openvisionConfig.selectedModels?.[0]?.modelId ?? openvisionConfig.modelName;
    const openvisionProvider = await openvisionRequestProvider(this._storageService,
      this._instantiationService.invokeFunction(accessor => accessor.get(${secrets})), openvisionModel);
    if (openvisionProvider) return {...openvisionProvider,
      userAgent: "OpenVision/" + this.productService.version, customHeaders: openvisionProvider.customHeaders ?? {}};
`;
  for (const edit of [{ offset: agent.offset, value: agentGuard }, { offset: inference.offset, value: inferenceGuard }]
    .sort((a, b) => b.offset - a.offset))
    text = text.slice(0, edit.offset) + edit.value + text.slice(edit.offset);
  return selectionParameters(agentRoutingPayload(`${marker}\nimport {requestProvider as openvisionRequestProvider, requestAgentProvider as openvisionAgentProvider} from "../code/electron-sandbox/workbench/openvision-model-providers.js";\n${text}`));
}

function preserveProviderHeaders(text) {
  for (const name of ['getLocalAgentProviderConfig', 'getLocalInferenceProviderConfig']) {
    const method = methodBody(text, name);
    const body = text.slice(method.offset, method.end);
    const old = 'customHeaders: {}';
    if (!body.includes(old)) {
      if (!body.includes('customHeaders: openvisionProvider.customHeaders ?? {}'))
        throw new Error('Provider header routing contract changed: ' + name);
      continue;
    }
    if (body.split(old).length !== 2) throw new Error('Provider header routing owner ambiguous: ' + name);
    text = text.slice(0, method.offset) + body.replace(old, 'customHeaders: openvisionProvider.customHeaders ?? {}') + text.slice(method.end);
  }
  return text;
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

// The recovered workbench defines doesModelSupportImages but never calls it, so
// pasted images reached every model. Gate the Agent turn at its owner, before
// provider credentials are resolved or any request is sent.
const imageMarker = '/* OpenVision image input capability gate */';
export function imageInputGate(text) {
  // Same native non-retryable error contract as provider selection errors.
  const constructors = [...text.matchAll(/case "NonRetriableError":\s+return new ([\w$]+)\([\w$]+\.message,/g)];
  if (constructors.length > 1) throw new Error('Native non-retryable Agent error contract changed');
  const errorClass = constructors[0]?.[1] ?? 'Error';
  const wrap = call => `try { ${call} }
      catch (error) {
        if (error?.name !== 'LocalProviderError') throw error;
        throw new ${errorClass}(error.message, {cause: error, displayInfo: {
          title: 'Image input is off for this model', detail: error.message, isRetryable: false, showRequestId: false }});
      }`;
  if (text.includes(imageMarker)) {
    // Upgrade an earlier gate that threw a plain error (shown as a generic connection failure).
    const unwrapped = /\n      (openvisionAssertImageInput\(this\.storageService, [^\n]+\);)\n    \}/g;
    if (text.includes('Image input is off for this model')) return text;
    if ([...text.matchAll(unwrapped)].length !== 1) throw new Error('Image input gate changed');
    return text.replace(unwrapped, (_match, call) => `\n      ${wrap(call)}\n    }`);
  }
  const method = methodBody(text, 'runLocalAgentInExtensionHost');
  const [, , action, model, , , , , , options] = method.parameters;
  if (!action || !model || !options) throw new Error('Agent turn parameters changed');
  const importLine = 'import {requestProvider as openvisionRequestProvider, requestAgentProvider as openvisionAgentProvider} from "../code/electron-sandbox/workbench/openvision-model-providers.js";';
  if (text.split(importLine).length !== 2) throw new Error('Provider routing import changed');
  const guard = `
    ${imageMarker}
    {
      const openvisionMessage = ${action}?.action?.case === "userMessageAction" ? ${action}.action.value : undefined;
      const openvisionImages = [openvisionMessage?.userMessage, ...(openvisionMessage?.prependUserMessages ?? [])]
        .reduce((count, message) => count + (message?.selectedContext?.selectedImages?.length ?? 0), 0);
      ${wrap(`openvisionAssertImageInput(this.storageService, ${options}?.requestedModel?.modelId ?? ${model}?.modelId, openvisionImages);`)}
    }
`;
  text = text.slice(0, method.offset) + guard + text.slice(method.offset);
  return text.replace(importLine, importLine.replace('requestAgentProvider as openvisionAgentProvider}',
    'requestAgentProvider as openvisionAgentProvider, assertImageInput as openvisionAssertImageInput}'));
}

function agentRoutingPayload(text) {
  const method = methodBody(text, 'runLocalAgentInExtensionHost');
  const body = text.slice(method.offset, method.end);
  const pattern = /baseUrl: ([\w$]+)\.baseUrl,\s+apiKey: \1\.apiKey,/g;
  if ([...body.matchAll(pattern)].length !== 1) throw new Error('Agent provider payload owner changed');
  const after = body.replace(pattern, (value, config) => `${value}\n                  openvisionProviders: ${config}.openvisionProviders,`);
  return text.slice(0, method.offset) + after + text.slice(method.end);
}
