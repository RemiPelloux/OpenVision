const marker = '/* OpenVision manual provider retry without automatic replay */';

export function providerManualRetry(text) {
  if (text.includes(marker)) return dropRetriedFailurePlaceholder(retainProviderFailure(text));
  const pattern = /case "LocalProviderError":\s+case "NonRetriableError":\s+return new ([\w$]+)\(([\w$]+)\.message, \{ \.\.\.([\w$]+), displayInfo: \{ \.\.\.([\w$]+), isRetryable: !1 \} \}\);/g;
  if ([...text.matchAll(pattern)].length !== 1) throw new Error('Local provider error display owner changed');
  return dropRetriedFailurePlaceholder(retainProviderFailure(text.replace(pattern, (_, ErrorType, error, options, display) => `${marker}
    case "LocalProviderError":
      return new ${ErrorType}(${error}.message, {...${options}, displayInfo: {...${display}, isRetryable: true}});
    case "NonRetriableError":
      return new ${ErrorType}(${error}.message, {...${options}, displayInfo: {...${display}, isRetryable: false}});`)));
}

// A terminal provider failure appends an empty AI bubble that only carries the
// error. Retry or the next submission originally cleared just its error, leaving
// an empty assistant turn in the saved transcript (and in every fork of it). Mark
// the placeholder when it is created and remove it, while still empty, at the
// point that clears the error. Other errors and bubbles with content keep the
// recovered behaviour.
const placeholderMarker = '/* OpenVision drop retried provider-failure placeholder v1 */';
function dropRetriedFailurePlaceholder(text) {
  if (text.includes(placeholderMarker)) return text;
  const desktop = text.includes('function xjf(e, t) {');
  const [error, details, bubble, factory, type] = desktop ? ['Os', 'Dv', 'tp', 'gf', 'wr'] : ['qr', 'Pu', 'ec', 'Vv', 'ys'];
  const anchor = `const ${bubble} = { ...${factory}(), codeBlocks: [], type: ${type}.AI, text: "", errorDetails: ${details} };`;
  if (text.split(anchor).length !== 2) throw new Error('Provider failure placeholder owner changed');
  const clear = /(clearErrorDetailsAndServiceStatusUpdatesFromLatestAIMessages\(([\w$]+)\) \{\s+if \(!this\._composerDataService\.getComposerData\(\2\)\) return;\s+const ([\w$]+) = this\._composerDataService\.getLoadedConversation\(\2\);\s+for \(let i = \3\.length - 1; i >= 0; i--\) \{\s+const r = \3\[i\];\s+if \(r\.type === [\w$]+\.AI\) \{\s+if \(r\.errorDetails \|\| r\.serviceStatusUpdate\) \{)/g;
  if ([...text.matchAll(clear)].length !== 1) throw new Error('Provider failure clearing owner changed');
  return text.replace(anchor, `${placeholderMarker}
                  const ${bubble} = { ...${factory}(), codeBlocks: [], type: ${type}.AI, text: "", errorDetails: ${details},
                    ...(${error}.cause?.name === "LocalProviderError" ? { openvisionProviderFailurePlaceholder: true } : {}) };`)
    .replace(clear, (match, _owner, handle) => `${match}
          if (r.openvisionProviderFailurePlaceholder === true && r.text === "" && !r.toolFormerData && !r.codeBlocks?.length) {
            this._composerDataService.deleteComposerBubbles(${handle}, [r.bubbleId]);
            break;
          }`);
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
