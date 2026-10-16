var TTLCache;
export { TTLCache };
var __wakaru_init_ttl_cache_initialized = false;
export function init_ttl_cache() {
if (__wakaru_init_ttl_cache_initialized) return;
__wakaru_init_ttl_cache_initialized = true;
"use strict";
TTLCache = class _TTLCache {
    constructor({ ttlMs, now: now2 = Date.now }){
        this.entries = new Map();
        this.ttlMs = typeof ttlMs === "function" ? ttlMs : _TTLCache.validated(ttlMs);
        this.now = now2;
    }
    static validated(ttlMs) {
        if (!Number.isFinite(ttlMs) || ttlMs <= 0) {
            throw new Error(`TTL cache requires a positive ttlMs, got ${ttlMs}`);
        }
        return ()=>ttlMs;
    }
    get(key) {
        const entry = this.entries.get(key);
        if (entry === void 0) {
            return void 0;
        }
        if (entry.expiresAtMs <= this.now()) {
            this.entries.delete(key);
            return void 0;
        }
        return entry.value;
    }
    has(key) {
        const entry = this.entries.get(key);
        if (entry === void 0) {
            return false;
        }
        if (entry.expiresAtMs <= this.now()) {
            this.entries.delete(key);
            return false;
        }
        return true;
    }
    set(key, value) {
        this.entries.set(key, {
            value,
            expiresAtMs: this.now() + this.ttlMs()
        });
    }
    delete(key) {
        return this.entries.delete(key);
    }
    clear() {
        this.entries.clear();
    }
};

}
