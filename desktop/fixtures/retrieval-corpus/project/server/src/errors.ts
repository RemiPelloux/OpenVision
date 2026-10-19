export class HarborError extends Error {
  readonly status: number;
  readonly code: string;
  readonly details?: Record<string, unknown>;

  constructor(message: string, status: number, code: string, details?: Record<string, unknown>) {
    super(message);
    this.name = new.target.name;
    this.status = status;
    this.code = code;
    this.details = details;
  }

  toJSON(): Record<string, unknown> {
    return { error: { code: this.code, message: this.message, details: this.details ?? null } };
  }
}

export class ValidationError extends HarborError {
  constructor(message: string, details?: Record<string, unknown>) {
    super(message, 422, "validation_failed", details);
  }
}

export class AuthError extends HarborError {
  constructor(message: string, code = "unauthorized") {
    super(message, 401, code);
  }
}

export class NotFoundError extends HarborError {
  constructor(resource: string, id: string) {
    super(`${resource} ${id} not found`, 404, "not_found", { resource, id });
  }
}

export class RateLimitError extends HarborError {
  readonly retryAfterSeconds: number;

  constructor(retryAfterSeconds: number) {
    super("too many requests", 429, "rate_limited", { retryAfterSeconds });
    this.retryAfterSeconds = retryAfterSeconds;
  }
}

export class PayloadTooLargeError extends HarborError {
  constructor(limitBytes: number) {
    super(`payload exceeds ${limitBytes} bytes`, 413, "payload_too_large", { limitBytes });
  }
}

export function toHttpError(err: unknown): HarborError {
  if (err instanceof HarborError) return err;
  const message = err instanceof Error ? err.message : String(err);
  return new HarborError(message, 500, "internal_error");
}
