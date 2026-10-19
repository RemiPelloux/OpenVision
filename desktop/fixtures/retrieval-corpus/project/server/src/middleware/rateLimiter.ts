import type { Request, Response, NextFunction } from "../http";
import { RateLimitError } from "../errors";

interface Bucket {
  tokens: number;
  updatedAt: number;
}

export interface RateLimitOptions {
  capacity: number;
  refillPerSecond: number;
  keyFor?: (req: Request) => string;
  now?: () => number;
}

/**
 * Token bucket limiter. Each client key gets `capacity` tokens which refill
 * continuously at `refillPerSecond`. A request costs one token.
 */
export class TokenBucketLimiter {
  private readonly buckets = new Map<string, Bucket>();
  private readonly capacity: number;
  private readonly refillPerSecond: number;
  private readonly now: () => number;

  constructor(options: RateLimitOptions) {
    this.capacity = options.capacity;
    this.refillPerSecond = options.refillPerSecond;
    this.now = options.now ?? Date.now;
  }

  tryConsume(key: string, cost = 1): { allowed: boolean; retryAfterSeconds: number } {
    const nowMs = this.now();
    const bucket = this.buckets.get(key) ?? { tokens: this.capacity, updatedAt: nowMs };
    const elapsedSeconds = (nowMs - bucket.updatedAt) / 1000;
    bucket.tokens = Math.min(this.capacity, bucket.tokens + elapsedSeconds * this.refillPerSecond);
    bucket.updatedAt = nowMs;

    if (bucket.tokens >= cost) {
      bucket.tokens -= cost;
      this.buckets.set(key, bucket);
      return { allowed: true, retryAfterSeconds: 0 };
    }
    this.buckets.set(key, bucket);
    const deficit = cost - bucket.tokens;
    return { allowed: false, retryAfterSeconds: Math.ceil(deficit / this.refillPerSecond) };
  }

  sweepIdle(maxIdleMs: number): number {
    const cutoff = this.now() - maxIdleMs;
    let removed = 0;
    for (const [key, bucket] of this.buckets) {
      if (bucket.updatedAt < cutoff) {
        this.buckets.delete(key);
        removed++;
      }
    }
    return removed;
  }
}

export function rateLimit(options: RateLimitOptions) {
  const limiter = new TokenBucketLimiter(options);
  const keyFor = options.keyFor ?? ((req: Request) => req.headers["x-forwarded-for"] ?? req.ip);

  return function rateLimitMiddleware(req: Request, res: Response, next: NextFunction): void {
    const key = String(keyFor(req));
    const result = limiter.tryConsume(key);
    if (!result.allowed) {
      res.setHeader("Retry-After", String(result.retryAfterSeconds));
      next(new RateLimitError(result.retryAfterSeconds));
      return;
    }
    next();
  };
}
