const authorizationPattern = /^Bearer\s+/iu;
const providerFailures = new WeakSet();

export function providerSecretFromHeaders(headers) {
  const authorization = new Headers(headers).get('authorization') ?? '';
  return authorization.replace(authorizationPattern, '').trim();
}

export function redactProviderSecret(value, secret) {
  if (!secret || typeof value !== 'string') return value;
  return value.replaceAll(secret, '[redacted]');
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
