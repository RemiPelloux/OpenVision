import { fetchProviderWithDeadlines } from './provider-request-deadlines.cjs';
export { fetchProviderWithDeadlines };

const authorizationPattern = /^Bearer\s+/iu;
const providerFailures = new WeakSet();
const contextFailures = new WeakSet();
// Error diagnostics have a separate budget from model output. Bound retained
// decoded detail to 64 KiB of input and allow ten seconds to finish reading it.
export const errorBodyLimits = Object.freeze({ bytes: 64 * 1024, timeoutMs: 10000 });

export function providerSecretFromHeaders(headers) {
  const authorization = new Headers(headers).get('authorization') ?? '';
  return authorization.replace(authorizationPattern, '').trim();
}

export function redactProviderSecret(value, secret) {
  if (!secret || typeof value !== 'string') return value;
  return value.replaceAll(secret, '[redacted]');
}

export function requireContextRecovery(error) {
  contextFailures.add(error);
  return error;
}

const connectionGuidance = new Map([
  ['ENOTFOUND', 'The API hostname could not be resolved. Check the API base URL and your DNS connection, then try again.'],
  ['EAI_AGAIN', 'The DNS lookup temporarily failed. Check your connection and try again.'],
  ['ECONNREFUSED', 'The API server refused the connection. Check the API base URL and that the server is running, then try again.'],
  ['ECONNRESET', 'The API connection was interrupted. Check your connection and try again.'],
]);
const certificateCodes = new Set(['DEPTH_ZERO_SELF_SIGNED_CERT', 'SELF_SIGNED_CERT_IN_CHAIN',
  'UNABLE_TO_VERIFY_LEAF_SIGNATURE', 'UNABLE_TO_GET_ISSUER_CERT_LOCALLY', 'CERT_HAS_EXPIRED',
  'CERT_NOT_YET_VALID', 'ERR_TLS_CERT_ALTNAME_INVALID']);
const timeoutCodes = new Set(['ETIMEDOUT', 'UND_ERR_CONNECT_TIMEOUT', 'UND_ERR_HEADERS_TIMEOUT', 'UND_ERR_BODY_TIMEOUT',
  'OPENVISION_PROVIDER_HEADERS_TIMEOUT', 'OPENVISION_PROVIDER_BODY_TIMEOUT']);

function connectionFailureGuidance(error) {
  const pending = [error], seen = new WeakSet();
  while (pending.length) {
    const value = pending.pop();
    if (!value || typeof value !== 'object' || seen.has(value)) continue;
    seen.add(value);
    const code = value.code;
    if (connectionGuidance.has(code)) return connectionGuidance.get(code);
    if (certificateCodes.has(code)) return 'The API TLS certificate could not be verified. Check the server certificate, hostname and system date; keep certificate verification enabled.';
    if (code === 'ERR_SSL_WRONG_VERSION_NUMBER' || code === 'ERR_SSL_PACKET_LENGTH_TOO_LONG')
      return 'The API server could not establish HTTPS. Check the API base URL scheme and the server TLS configuration, then try again.';
    if (timeoutCodes.has(code)) return 'The API connection timed out. Check that the server is available and try again.';
    pending.push(value.cause, value.lastError);
    if (Array.isArray(value.errors)) pending.push(...value.errors);
  }
}

export function providerFailureDetail(error, detail) {
  if (!error || typeof error !== 'object') return detail;
  let guidance;
  if (contextFailures.has(error)) guidance = "The model's context limit was exceeded. Reduce attached context or start a new chat, then try again.";
  else if (error.data?.error?.code === 'unsupported_tools') guidance = 'This model does not support the requested tools. Choose a model with tool support for Agent tasks.';
  else if (error.data?.error?.code === 'unsupported_image') guidance = 'This model does not support the attached image. Remove it or choose a model with image support.';
  else if (error.statusCode === 429) guidance = 'The provider is rate limiting requests. Wait before choosing Try again.';
  else if (error.statusCode >= 500) guidance = 'The provider reported a server error. Try again when the service is available.';
  else guidance = connectionFailureGuidance(error);
  return guidance ? `${guidance}\n\n${detail}` : detail;
}

export function redactProviderError(error, headers) {
  const secret = providerSecretFromHeaders(headers);
  if (!error || typeof error !== 'object') return error;
  providerFailures.add(error);
  // Error.message/stack/cause are non-enumerable. Preserve the original Error
  // identity and SDK tags while sanitizing its complete own diagnostic graph.
  const pending = [error], seen = new WeakSet();
  while (pending.length) {
    const value = pending.pop();
    if (seen.has(value)) continue;
    seen.add(value);
    for (const key of Reflect.ownKeys(value)) {
      const descriptor = Object.getOwnPropertyDescriptor(value, key);
      if (!descriptor || !('value' in descriptor)) continue;
      const item = descriptor.value;
      if (typeof item === 'string' && secret && (descriptor.writable || descriptor.configurable)) {
        Object.defineProperty(value, key, { ...descriptor, value: redactProviderSecret(item, secret) });
      } else if (item && typeof item === 'object') pending.push(item);
    }
  }
  return error;
}

export function isProviderFailure(error) {
  const pending = [error], seen = new WeakSet();
  while (pending.length) {
    const value = pending.pop();
    if (!value || typeof value !== 'object' || seen.has(value)) continue;
    if (providerFailures.has(value)) return true;
    seen.add(value);
    pending.push(value.cause, value.lastError);
    if (Array.isArray(value.errors)) pending.push(...value.errors);
  }
  return false;
}

export function protectProviderResult(result, headers) {
  if (typeof result?.value?.getReader !== 'function') return result;
  const reader = result.value.getReader();
  result.value = new ReadableStream({
    async pull(controller) {
      try {
        const { done, value } = await reader.read();
        if (done) { reader.releaseLock(); controller.close(); return; }
        const failure = value?.success === false ? value.error : value?.value?.error;
        if (failure) throw failure instanceof Error ? failure : Object.assign(new Error(failure.message ?? 'Provider stream failed'), failure);
        controller.enqueue(value);
      } catch (error) {
        controller.error(redactProviderError(error, headers));
        try { await reader.cancel(); } finally { reader.releaseLock(); }
      }
    },
    async cancel(reason) {
      try { await reader.cancel(reason); } finally { reader.releaseLock(); }
    },
  }, { highWaterMark: 0 });
  return result;
}

async function consumeErrorBody(reader, state, limits) {
  const decoder = new TextDecoder();
  for (;;) {
    const { done, value } = await reader.read();
    if (done) { state.done = true; state.text += decoder.decode(); return state.text; }
    const remaining = limits.bytes - state.bytes;
    state.bytes += value.byteLength;
    state.text += decoder.decode(value.subarray(0, remaining), { stream: true });
    if (state.bytes > limits.bytes) { state.text += decoder.decode(); throw state.failure('size'); }
  }
}

export async function readProviderErrorBody(response, createError, limits = errorBodyLimits) {
  if (!response.body) return '';
  const reader = response.body.getReader();
  const state = { text: '', bytes: 0, done: false };
  state.failure = kind => Object.assign(createError({
    message: kind === 'size'
      ? `Provider error details exceeded ${limits.bytes} bytes (HTTP ${response.status}). Check the API server and try again.`
      : `Timed out reading provider error details (HTTP ${response.status}). Check the connection and try again.`,
    statusCode: response.status, responseHeaders: Object.fromEntries(response.headers), responseBody: state.text,
  }), { responseBodyTruncated: true, responseBodyBytesObserved: state.bytes,
    responseBodyLimitBytes: limits.bytes, responseBodyFailure: kind });
  let timer, failure;
  try {
    return await Promise.race([consumeErrorBody(reader, state, limits), new Promise((_, reject) => {
      timer = setTimeout(() => reject(state.failure('timeout')), limits.timeoutMs);
    })]);
  } catch (error) { failure = error; throw error;
  } finally {
    clearTimeout(timer);
    try { if (!state.done) await reader.cancel(failure); }
    catch (error) { if (failure) failure.cleanupError = error; else throw error; }
    finally { reader.releaseLock(); }
  }
}
