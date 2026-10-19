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
// an empty assistant turn in the saved transcript (and in every fork of it). The
// chat-level failure record (persisted across restart by
// provider-failure-persistence.mjs) now names that placeholder, and the point that
// clears the record before a new submission removes it. A dismissed failure keeps
// the recovered behaviour.
const placeholderMarker = '/* OpenVision drop retried provider-failure placeholder v3 */';
// Earlier in-place builds of this change marked the bubble and checked it in the
// recovered clearing loop; both are removed when upgrading.
const legacyPlaceholder = /\/\* OpenVision drop retried provider-failure placeholder v1 \*\/\n {18}(const [\w$]+ = \{ \.\.\.[\w$]+\(\), codeBlocks: \[\], type: [\w$]+\.AI, text: "", errorDetails: [\w$]+),\n {20}\.\.\.\([\w$]+\.cause\?\.name === "LocalProviderError" \? \{ openvisionProviderFailurePlaceholder: true \} : \{\}\) \};/g;
const legacyClear = /(?:\n {10}\/\* OpenVision drop retried provider-failure placeholder, restored too v2 \*\/)?\n {10}if \(r\.openvisionProviderFailurePlaceholder === true && r\.text === "" && !r\.toolFormerData && !r\.codeBlocks\?\.length\) \{\n {12}this\._composerDataService\.deleteComposerBubbles\([\w$]+, \[r\.bubbleId\]\);\n {12}break;\n {10}\}/g;
function dropRetriedFailurePlaceholder(text) {
  if (text.includes(placeholderMarker)) return text;
  text = text.replace(legacyPlaceholder, '$1 };').replace(legacyClear, '');
  const desktop = text.includes('function xjf(e, t) {');
  const [handle, details, bubble, factory, type] = desktop ? ['cn', 'Dv', 'tp', 'gf', 'wr'] : ['Et', 'Pu', 'ec', 'Vv', 'ys'];
  const anchor = `const ${bubble} = { ...${factory}(), codeBlocks: [], type: ${type}.AI, text: "", errorDetails: ${details} };`;
  if (text.split(anchor).length !== 2) throw new Error('Provider failure placeholder owner changed');
  const clear = /(this\._composerUtilsService\.clearErrorDetailsAndServiceStatusUpdatesFromLatestAIMessages\(\s*([\w$]+),\s*\),\s*this\._composerDataService\.updateComposerDataSetStore\(\2, \(([\w$]+)\) =>\s*\3\("submitErrorDetails", void 0\),\s*\))/g;
  const matches = [...text.matchAll(clear)];
  if (matches.length !== 1 || matches[0][2] !== handle) throw new Error('Provider failure clearing owner changed');
  return text.replace(anchor, `${anchor}
                  ${placeholderMarker}
                  ${handle}.data.submitErrorDetails?.openvisionProviderFailure === true &&
                    this._composerDataService.updateComposerDataSetStore(${handle}, setter => setter("submitErrorDetails",
                      { ...${handle}.data.submitErrorDetails, openvisionPlaceholderBubbleId: ${bubble}.bubbleId }));`)
    .replace(clear, match => `(${handle}.data.submitErrorDetails?.openvisionProviderFailure === true &&
                        typeof ${handle}.data.submitErrorDetails.openvisionPlaceholderBubbleId === "string" &&
                        this._composerDataService.deleteComposerBubbles(${handle}, [${handle}.data.submitErrorDetails.openvisionPlaceholderBubbleId]),
                      ${match})`);
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
