const marker = '/* OpenVision manual provider retry without automatic replay */';

export function providerManualRetry(text) {
  if (text.includes(marker)) return retainProviderFailure(text);
  const pattern = /case "LocalProviderError":\s+case "NonRetriableError":\s+return new ([\w$]+)\(([\w$]+)\.message, \{ \.\.\.([\w$]+), displayInfo: \{ \.\.\.([\w$]+), isRetryable: !1 \} \}\);/g;
  if ([...text.matchAll(pattern)].length !== 1) throw new Error('Local provider error display owner changed');
  return retainProviderFailure(text.replace(pattern, (_, ErrorType, error, options, display) => `${marker}
    case "LocalProviderError":
      return new ${ErrorType}(${error}.message, {...${options}, displayInfo: {...${display}, isRetryable: true}});
    case "NonRetriableError":
      return new ${ErrorType}(${error}.message, {...${options}, displayInfo: {...${display}, isRetryable: false}});`));
}

function retainProviderFailure(text) {
  const retention = '/* OpenVision retain terminal provider failure until retry or dismissal v2 */';
  if (text.includes(retention)) return text;
  if (text.includes('/* OpenVision retain terminal provider failure until retry or dismissal */')) {
    return text.replace('/* OpenVision retain terminal provider failure until retry or dismissal */', retention)
      .replace(/setter\("submitErrorDetails", (Dv|Pu)\)\);/g, 'setter("submitErrorDetails", {...$1, openvisionProviderFailure: true}));')
      .replace(/\?\.data.submitErrorDetails\?\.title === "Local Provider Error"/g, '?.data.submitErrorDetails?.openvisionProviderFailure === true');
  }
  const desktop = text.includes('function xjf(e, t) {');
  const [error, handle, details, bubble, factory, type, service, dismissHandle] = desktop
    ? ['Os', 'cn', 'Dv', 'tp', 'gf', 'wr', 't', 'Li']
    : ['qr', 'Et', 'Pu', 'ec', 'Vv', 'ys', 'e', 'cr'];
  const anchor = `const ${bubble} = { ...${factory}(), codeBlocks: [], type: ${type}.AI, text: "", errorDetails: ${details} };`;
  if (text.split(anchor).length !== 2) throw new Error('Terminal provider error persistence owner changed');
  text = text.replace(anchor, `${retention}
                  if (${error}.cause?.name === "LocalProviderError") {
                    this._composerDataService.updateComposerDataSetStore(${handle}, setter => setter("submitErrorDetails", {...${details}, openvisionProviderFailure: true}));
                  }
                  ${anchor}`);
  const dismiss = desktop
    ? 'In && Li && t.composerDataService.updateComposerBubble(Li, In, { errorDetails: void 0 });'
    : 'Bn && cr && e.composerDataService.updateComposerBubble(cr, Bn, { errorDetails: void 0 });';
  if (text.split(dismiss).length !== 2) throw new Error('Provider failure dismissal owner changed');
  return text.replace(dismiss, `${dismiss}
      if (${dismissHandle}?.data.submitErrorDetails?.openvisionProviderFailure === true) {
        ${service}.composerDataService.updateComposerDataSetStore(${dismissHandle}, setter => setter("submitErrorDetails", undefined));
      }`);
}
