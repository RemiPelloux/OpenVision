const codexEasyHosts = new Set(['codex-easy.ai', 'codex-everywhere.com']);
const gptModels = new Set([
  'gpt-6-astra', 'gpt-6.1-sol', 'gpt-6-sol', 'gpt-6-luna',
  'gpt-5.6-sol', 'gpt-5.6-terra', 'gpt-5.6-luna',
]);

// Explicit documented capabilities only; /models declarations take precedence.
export function fallbackReasoningValues(baseUrl, modelId) {
  let hostname;
  try { hostname = new URL(baseUrl).hostname; } catch { return undefined; }
  if (!codexEasyHosts.has(hostname)) return undefined;
  if (gptModels.has(modelId)) return ['low', 'medium', 'high', 'xhigh', 'max'];
  if (['deepseek-flash', 'deepseek-v4-flash', 'deepseek-v4-flash-vision-exp', 'deepseek-v4-pro'].includes(modelId)) return ['none', 'low', 'high', 'max'];
  if (['grok-4.6', 'grok-4.7'].includes(modelId)) return ['low', 'medium', 'high', 'xhigh'];
  if (modelId === 'grok-4.5') return ['low', 'medium', 'high'];
  return undefined;
}

export function requestReasoningValues({ baseUrl, modelId, configured, advertised }) {
  if (Array.isArray(configured)) return configured;
  if (Array.isArray(advertised)) return advertised;
  return fallbackReasoningValues(baseUrl, modelId);
}
