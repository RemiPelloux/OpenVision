import { describe, it, expect } from "vitest";
import { withRetry, computeBackoffDelay } from "../src/utils/retry";

describe("withRetry", () => {
  it("returns the first successful result", async () => {
    let calls = 0;
    const result = await withRetry(
      async () => {
        calls++;
        if (calls < 3) throw new Error("flaky");
        return "ok";
      },
      { maxAttempts: 5, baseDelayMs: 1, maxDelayMs: 1, sleep: async () => {} },
    );
    expect(result).toBe("ok");
    expect(calls).toBe(3);
  });

  it("gives up after maxAttempts and rethrows", async () => {
    await expect(
      withRetry(async () => Promise.reject(new Error("down")), {
        maxAttempts: 2,
        baseDelayMs: 1,
        maxDelayMs: 1,
        sleep: async () => {},
      }),
    ).rejects.toThrow("down");
  });

  it("does not retry non-retryable errors", async () => {
    let calls = 0;
    await expect(
      withRetry(
        async () => {
          calls++;
          throw new Error("bad request");
        },
        { maxAttempts: 4, baseDelayMs: 1, maxDelayMs: 1, isRetryable: () => false, sleep: async () => {} },
      ),
    ).rejects.toThrow();
    expect(calls).toBe(1);
  });
});

describe("computeBackoffDelay", () => {
  it("doubles until the cap without jitter", () => {
    expect([1, 2, 3, 4, 5].map((n) => computeBackoffDelay(n, 100, 1000, false))).toEqual([100, 200, 400, 800, 1000]);
  });
});
