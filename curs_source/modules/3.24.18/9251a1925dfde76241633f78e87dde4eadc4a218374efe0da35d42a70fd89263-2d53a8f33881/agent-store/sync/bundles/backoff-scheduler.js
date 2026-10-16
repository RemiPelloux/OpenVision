import { init_validation } from "./validation.js";
import { ensureFinitePositive } from "../../../tree_chunk_napi_exports.js";
var DEFAULT_MULTIPLIER, DEFAULT_JITTER, BackoffScheduler;
export { BackoffScheduler, DEFAULT_JITTER, DEFAULT_MULTIPLIER };
var __wakaru_init_backoff_scheduler_initialized = false;
export function init_backoff_scheduler() {
if (__wakaru_init_backoff_scheduler_initialized) return;
__wakaru_init_backoff_scheduler_initialized = true;
"use strict";
init_validation();
DEFAULT_MULTIPLIER = 2;
DEFAULT_JITTER = 0;
BackoffScheduler = class {
    constructor(options2){
        this.consecutiveFailures = 0;
        const baseDelayMs = ensureFinitePositive({
            value: options2.baseDelayMs,
            name: "baseDelayMs",
            context: "BackoffScheduler"
        });
        const maxDelayMs = ensureFinitePositive({
            value: options2.maxDelayMs,
            name: "maxDelayMs",
            context: "BackoffScheduler"
        });
        if (baseDelayMs > maxDelayMs) {
            throw new RangeError(`BackoffScheduler baseDelayMs (${baseDelayMs}) must be <= maxDelayMs (${maxDelayMs})`);
        }
        const multiplier = options2.multiplier ?? DEFAULT_MULTIPLIER;
        if (!Number.isFinite(multiplier) || multiplier < 1) {
            throw new RangeError(`BackoffScheduler multiplier must be >= 1, got ${multiplier}`);
        }
        const jitter = options2.jitter ?? DEFAULT_JITTER;
        if (!Number.isFinite(jitter) || jitter < 0 || jitter > 1) {
            throw new RangeError(`BackoffScheduler jitter must be in [0, 1], got ${jitter}`);
        }
        this.baseDelayMs = baseDelayMs;
        this.maxDelayMs = maxDelayMs;
        this.multiplier = multiplier;
        this.jitter = jitter;
        this.random = options2.random ?? Math.random;
    }
    recordSuccess() {
        this.consecutiveFailures = 0;
    }
    recordFailure() {
        this.consecutiveFailures += 1;
        return this.computeDelayMs(this.consecutiveFailures, true);
    }
    peekNextDelayMs() {
        return this.computeDelayMs(this.consecutiveFailures + 1, false);
    }
    lastDelayMs() {
        return this.computeDelayMs(this.consecutiveFailures, false);
    }
    get failures() {
        return this.consecutiveFailures;
    }
    restoreFailures(count2) {
        this.consecutiveFailures = count2 <= 0 ? 0 : Math.floor(count2);
    }
    computeDelayMs(failureCount, applyJitter) {
        if (failureCount <= 0) {
            return 0;
        }
        const power = this.multiplier ** (failureCount - 1);
        const raw = Math.min(this.baseDelayMs * power, this.maxDelayMs);
        const adjusted = applyJitter ? this.applyJitter(raw) : raw;
        const floored = Math.max(1, Math.floor(adjusted));
        return Math.min(this.maxDelayMs, floored);
    }
    applyJitter(delayMs) {
        if (this.jitter === 0) {
            return delayMs;
        }
        const rand = this.random();
        const safeRand = Number.isFinite(rand) ? Math.max(0, Math.min(rand, 1)) : 0;
        const factor = 1 - this.jitter + safeRand * 2 * this.jitter;
        return delayMs * factor;
    }
};

}
