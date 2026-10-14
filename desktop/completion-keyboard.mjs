import { parseExpressionAt } from '../tooling/dependencies.mjs';

const marker = '/* OpenVision pending completion Escape v1 */';
const assignment = 'this.handleKeyDownForCppKeys = ';

export function cancelPendingCompletionOnEscape(text, variant) {
  if (text.includes(marker)) return text;
  const offset = text.indexOf(assignment);
  if (offset < 0 || text.indexOf(assignment, offset + 1) >= 0)
    throw new Error('Completion keyboard owner missing or ambiguous.');
  const handler = parseExpressionAt(text, offset + assignment.length, { ecmaVersion: 'latest' });
  const owner = parseExpressionAt(text, text.lastIndexOf('class ', offset), { ecmaVersion: 'latest' });
  const abort = owner.body.body.find(method => method.key?.name === 'abortAllCppRequests');
  const event = handler.params?.[0]?.name;
  if (handler.type !== 'ArrowFunctionExpression' || handler.body.type !== 'BlockStatement' || !event ||
      !abort || !text.slice(abort.start, abort.end).includes('abortController.abort()') ||
      !text.slice(handler.start, handler.end).includes('this.rejectAndResetAllCppSuggestions()'))
    throw new Error('Completion keyboard cancellation contract changed.');
  const local = variant === 'desktop' ? 'zc.localMode' : 'Rl.localMode';
  const guard = `\n${marker}
    if (${local} && this.persistentStorage().cppEnabled === true &&
        ${event}.key === "Escape" && !${event}.ctrlKey && !${event}.altKey && !${event}.metaKey &&
        this.suggestion.value === undefined) this.abortAllCppRequests();\n`;
  const insertion = handler.body.start + 1;
  return text.slice(0, insertion) + guard + text.slice(insertion);
}
