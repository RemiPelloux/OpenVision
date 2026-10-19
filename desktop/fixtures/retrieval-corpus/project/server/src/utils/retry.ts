export interface RetryOptions {
  maxAttempts: number;
  baseDelayMs: number;
  maxDelayMs: number;
  jitter?: boolean;
  isRetryable?: (err: unknown) => boolean;
  onAttemptFailed?: (err: unknown, attempt: number, delayMs: number) => void;
  sleep?: (ms: number) => Promise<void>;
}

const defaultSleep = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

export function computeBackoffDelay(attempt: number, baseDelayMs: number, maxDelayMs: number, jitter = true): number {
  const exponential = Math.min(maxDelayMs, baseDelayMs * 2 ** (attempt - 1));
  if (!jitter) return exponential;
  // "full jitter": pick uniformly between 0 and the exponential ceiling
  return Math.floor(Math.random() * exponential);
}

export async function withRetry<T>(operation: (attempt: number) => Promise<T>, options: RetryOptions): Promise<T> {
  const sleep = options.sleep ?? defaultSleep;
  const isRetryable = options.isRetryable ?? (() => true);
  let lastError: unknown;

  for (let attempt = 1; attempt <= options.maxAttempts; attempt++) {
    try {
      return await operation(attempt);
    } catch (err) {
      lastError = err;
      if (attempt === options.maxAttempts || !isRetryable(err)) {
        break;
      }
      const delay = computeBackoffDelay(attempt, options.baseDelayMs, options.maxDelayMs, options.jitter ?? true);
      options.onAttemptFailed?.(err, attempt, delay);
      await sleep(delay);
    }
  }
  throw lastError;
}

export function isTransientHttpStatus(status: number): boolean {
  return status === 408 || status === 429 || (status >= 500 && status !== 501);
}
