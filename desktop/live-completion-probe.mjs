import { parseJavaScript } from '../tooling/dependencies.mjs';
import { fetchCompletion, CompletionResponseError } from './completion-http.mjs';

export async function probeLiveCompletion(provider, model, { fetch }) {
  const started = performance.now();
  const prefix = '// Return the sum of a and b.\nfunction add(a, b) {\n  return ';
  const suffix = ';\n}\n';
  let requests = 0;
  try {
    const insertion = await fetchCompletion({ baseUrl: provider.url, apiKey: provider.key, model,
      prefix, suffix, language: 'javascript' }, {
      fetch: (...args) => { requests++; return fetch(...args); }, signal: AbortSignal.timeout(15000),
    });
    let syntaxValid = false, sumExpression = false;
    try {
      const tree = parseJavaScript(prefix + insertion + suffix, { ecmaVersion: 'latest' });
      syntaxValid = true;
      const fn = tree.body[0], body = fn?.body?.body, expression = body?.[0]?.argument;
      sumExpression = tree.body.length === 1 && fn.type === 'FunctionDeclaration' && body.length === 1 &&
        body[0].type === 'ReturnStatement' && expression?.type === 'BinaryExpression' && expression.operator === '+' &&
        expression.left.type === 'Identifier' && expression.left.name === 'a' &&
        expression.right.type === 'Identifier' && expression.right.name === 'b';
    } catch { /* Invalid inserted code is a failed quality check, never executed. */ }
    return { ok: syntaxValid && sumExpression, model, insertion, syntaxValid, sumExpression, requests,
      elapsedMs: Math.round(performance.now() - started),
      scope: 'One live JavaScript sum-expression fixture; generated code parsed, never executed. No broad quality or native UI claim.' };
  } catch (error) {
    return { ok: false, model, requests, elapsedMs: Math.round(performance.now() - started),
      error: error instanceof CompletionResponseError ? error.message :
        error.name === 'TimeoutError' ? 'Completion timed out after 15 seconds.' : 'Completion transport failed.' };
  }
}
