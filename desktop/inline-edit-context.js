export const inlineContextCharacters = 128 * 1024;
export class InlineEditError extends Error {}
export const inlineEditFailure = error => error instanceof InlineEditError ? error.message
  : 'Inline edit unavailable. Check the selected model and provider, then retry.';
const historyEntries = 3;

export function inlineEditContext(request, session) {
  if (request.images?.length || request.links?.length || request.legacyContext?.documentationIdentifiers?.length)
    throw new InlineEditError('Inline edit currently supports text and code attachments. Use Agent for images, links or documentation.');
  const find = type => {
    for (const intent of session?.intents ?? [])
      for (const entry of intent.items)
        if (entry.item.item.case === type) return entry.item.item.value;
  };
  const selection = find('cmdKSelection'), query = find('cmdKQuery'), nearby = find('cmdKImmediateContext');
  if (!selection || !query || !nearby) throw new InlineEditError('Inline edit context is not ready. Try again.');
  const context = boundedContext({ instruction: query.query, selection, nearby, rules: request.rules ?? [],
    userRules: request.legacyContext?.explicitContext?.context ?? '',
    codeAttachments: request.legacyContext?.promptCodeBlocks ?? [],
    previousQueries: recentHistory(find('cmdKQueryHistory'), 'queryHistory', item => item.query?.query ?? ''),
    chatHistory: recentHistory(find('chatHistory'), 'chatHistory', item => ({ user: item.userMessage, assistant: item.assistantResponse })) });
  return request.legacyContext?.promptCodeBlocks?.length > 1 ? uniqueCodeAttachments(context) : context;
}

function uniqueCodeAttachments(text) {
  // Validate/bound the entire input first, including duplicates. Otherwise a
  // repeated attachment list could consume unbounded traversal to shrink it.
  const context = JSON.parse(text), attachments = context.codeAttachments;
  if (attachments.length < 2) return text;
  const seen = new Set(), unique = [];
  for (const attachment of attachments) {
    // Include every JSON field, not just path/body: distinct ranges, versions,
    // signatures and detailed lines remain distinct context. Object property
    // order has no semantic meaning; array order and all values do.
    const identity = JSON.stringify(attachment, (key, value) => value &&
      typeof value === 'object' && !Array.isArray(value)
      ? Object.fromEntries(Object.keys(value).sort().map(key => [key, value[key]])) : value);
    if (seen.has(identity)) continue;
    seen.add(identity); unique.push(attachment);
  }
  if (unique.length === attachments.length) return text;
  context.codeAttachments = unique;
  return JSON.stringify(context);
}

function recentHistory(history, next, select) {
  const result = [];
  for (let item = history; item && result.length < historyEntries; item = item[next]) result.push(select(item));
  return result;
}

function boundedContext(value) {
  // Stop visiting before JSON.stringify can accumulate an unbounded copy. JSON
  // escaping can expand strings; check the exact serialized size afterward too.
  let minimumCharacters = 0;
  const tooLarge = () => { throw new InlineEditError('Inline edit context is too large. Select a smaller range or use Agent.'); };
  const text = JSON.stringify(value, (key, item) => {
    minimumCharacters += key.length + 1 + (typeof item === 'string' ? item.length : 0);
    if (minimumCharacters > inlineContextCharacters) tooLarge();
    return item;
  });
  if (text.length > inlineContextCharacters) tooLarge();
  return text;
}
