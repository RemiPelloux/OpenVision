// Persist an unresolved provider failure with its chat (OV-102).
//
// The workbench keeps a terminal provider failure in composer `submitErrorDetails`
// (see provider-error-ui.mjs), but the composer serializer is an allowlist that
// omits that field, so restart restored the failed turn without its error or
// recovery action. This customization adds one sanitized field to the saved
// composer record and revives it on load. Only records flagged
// `openvisionProviderFailure` are stored. The persisted record keeps the
// classification text, retry state and a callback-free `resume` button; the
// recovered error-button renderer already routes such a button to
// `composerChatService.resumeChat(handle)`. Stack traces and arbitrary fields are
// never written. Old records without the field load unchanged.

export const marker = '/* OpenVision persist unresolved provider failure v3 */';
const previousMarkers = ['/* OpenVision persist unresolved provider failure v1 */', '/* OpenVision persist unresolved provider failure v2 */'];

const serializerPattern = /function ([\w$]+)\(([\w$]+), ([\w$]+), ([\w$]+)\) \{\n  const ([\w$]+) = ([\w$]+)\(\2, \3\),\n    ([\w$]+) = JSON\.stringify\(\5\);\n  return \(\4\?\.\(\5, \7\), \7\);\n\}/g;
const loaderPattern = /function ([\w$]+)\(([\w$]+)\) \{\n  const ([\w$]+) = \2\.modelConfig \?\? \{ modelName: "default", maxMode: !1 \},\n    ([\w$]+) = \2\.promptContextOverview,\n    ([\w$]+) = \2\.canvasTray,\n    ([\w$]+) = \{\n      \.\.\.([\w$]+)\(\3, \2\.composerId\),\n      \.\.\.([\w$]+)\(\2\),\n      modelConfig: \2\.modelConfig \?\? \3,\n      workspaceIdentifier: ([\w$]+)\(\2\.workspaceIdentifier\),\n    \};\n/g;
const errorTypePattern = /\(([\w$]+)\.error = ([\w$]+)\.fromJsonString\(([\w$]+)\.errorDetails\.error\)\)/g;
const resumeFallbackPattern = /([\w$]+)\.id === "resume" && ([\w$]+) && ([\w$]+)\.composerChatService\.resumeChat\(\2\)/g;
const producerMarker = '/* OpenVision retain terminal provider failure until retry or dismissal v2 */';

function only(text, pattern, message) {
  const matches = [...text.matchAll(pattern)];
  if (matches.length !== 1) throw new Error(message);
  return matches[0];
}

// Plain functions so tests can execute exactly what the bundle runs.
export function helpers(errorType) {
  return `${marker}
function openvisionProviderFailureRecord(details) {
  if (!details || typeof details !== "object" || details.openvisionProviderFailure !== true) return undefined;
  // Displayed text is already provider-redacted; storage additionally drops
  // credential-shaped substrings (URL user info/query, bearer tokens, sk- keys).
  const text = value => typeof value === "string" && value.length > 0 ? value.slice(0, 4000)
    .replace(/\\b([a-z][a-z0-9+.-]*:\\/\\/)[^\\s\\/@]+@/gi, "$1[redacted]@")
    .replace(/(\\b[a-z][a-z0-9+.-]*:\\/\\/[^\\s?#]*)[?#][^\\s]*/gi, "$1")
    .replace(/\\b(Bearer|Basic)\\s+[A-Za-z0-9._~+\\/=-]{8,}/gi, "$1 [redacted]")
    .replace(/\\b(sk|xai|pk)-[A-Za-z0-9_-]{8,}/g, "[redacted]") : undefined;
  const buttons = (Array.isArray(details.extraButtons) ? details.extraButtons : [])
    .filter(button => button && button.id === "resume").slice(0, 1)
    .map(button => ({ id: "resume", label: button.label === "Resume" ? "Resume" : "Try again",
      variant: button.variant === "primary" ? "primary" : "secondary" }));
  return { openvisionProviderFailure: true, requestId: text(details.requestId), title: text(details.title),
    message: text(details.message),
    connectCode: typeof details.connectCode === "number" || typeof details.connectCode === "string" ? details.connectCode : undefined,
    isRetryable: typeof details.isRetryable === "boolean" ? details.isRetryable : undefined,
    resumeOnRetry: details.resumeOnRetry === true ? true : undefined, extraButtons: buttons,
    // Bubble id of the empty failure placeholder, removed when the failure is retried.
    openvisionPlaceholderBubbleId: typeof details.openvisionPlaceholderBubbleId === "string" &&
      /^[A-Za-z0-9-]{1,64}$/.test(details.openvisionPlaceholderBubbleId) ? details.openvisionPlaceholderBubbleId : undefined };
}
function openvisionPersistProviderFailure(details) {
  const record = openvisionProviderFailureRecord(details);
  if (!record) return undefined;
  try {
    if (details.error && typeof details.error.toJsonString === "function") record.error = details.error.toJsonString();
  } catch {}
  return record;
}
function openvisionRestoreProviderFailure(details) {
  const record = openvisionProviderFailureRecord(details);
  if (!record) return undefined;
  if (typeof details.error === "string")
    try { record.error = ${errorType}.fromJsonString(details.error); } catch {}
  return record;
}
`;
}

// An edited build is customized in place, so an older helper block is replaced
// rather than duplicated; the serializer and loader calls are unchanged.
function upgradeHelpers(text) {
  for (const previous of previousMarkers) {
    const start = text.indexOf(previous);
    if (start < 0) continue;
    const restore = text.indexOf('\nfunction openvisionRestoreProviderFailure(', start);
    const end = text.indexOf('\n}\n', restore);
    if (restore < 0 || end < 0 || text.indexOf(previous, start + 1) >= 0) throw new Error('Provider failure helper block changed');
    const [, , errorType] = only(text, errorTypePattern, 'Composer error detail reviver changed');
    return text.slice(0, start) + helpers(errorType) + text.slice(end + 3);
  }
}

export function persistProviderFailures(text) {
  if (text.includes(marker)) return text;
  const upgraded = upgradeHelpers(text);
  if (upgraded) return upgraded;
  if (!text.includes(producerMarker)) throw new Error('Provider failure persistence requires the retained provider failure owner');
  only(text, resumeFallbackPattern, 'Persisted provider failure resume fallback changed');
  const serializer = only(text, serializerPattern, 'Composer serializer owner changed');
  const [serializerSource, , data, , , record, convert] = serializer;
  const convertStart = text.indexOf(`function ${convert}(`);
  const convertEnd = text.indexOf('\n}\n', convertStart);
  const converter = convertStart < 0 ? '' : text.slice(convertStart, convertEnd);
  if (!['speculativeSummarizationEncryptionKey', 'fullConversationHeadersOnly', 'conversationState: "~"']
    .every(field => converter.includes(field)) || converter.includes('submitErrorDetails'))
    throw new Error('Composer serializer field allowlist changed');
  const loader = only(text, loaderPattern, 'Composer loader owner changed');
  const [loaderSource, , source, , , , restored] = loader;
  const [, , errorType] = only(text, errorTypePattern, 'Composer error detail reviver changed');
  const persistedSerializer = serializerSource.replace(/,\n    ([\w$]+) = JSON\.stringify/, `;
  ${record}.submitErrorDetails = openvisionPersistProviderFailure(${data}.submitErrorDetails);
  const $1 = JSON.stringify`);
  const persistedLoader = `${loaderSource}  ${restored}.submitErrorDetails = openvisionRestoreProviderFailure(${source}.submitErrorDetails);\n`;
  if (persistedSerializer === serializerSource) throw new Error('Composer serializer rewrite failed');
  return text.replace(serializerSource, `${helpers(errorType)}${persistedSerializer}`)
    .replace(loaderSource, persistedLoader);
}
