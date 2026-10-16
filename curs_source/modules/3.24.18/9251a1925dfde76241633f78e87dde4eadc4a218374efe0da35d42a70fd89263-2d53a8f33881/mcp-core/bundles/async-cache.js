var AsyncCache;
export { AsyncCache };
var __wakaru_init_async_cache_initialized = false;
export function init_async_cache() {
if (__wakaru_init_async_cache_initialized) return;
__wakaru_init_async_cache_initialized = true;
"use strict";
AsyncCache = class {
    constructor(ttl = 1e3 * 60 * 60 * 24){
        this.ttl = ttl;
        this.staleDirty = false;
        this.refreshGeneration = 0;
    }
    async get(fetcher) {
        const now2 = performance.now();
        if (this.state && this.state.expiresAt > now2 && !this.staleDirty) {
            return this.state.value;
        }
        if (this.staleDirty && this.state) {
            const staleValue = this.state.value;
            if (!this.refreshInFlight) {
                const gen = this.refreshGeneration;
                let refreshPromise;
                refreshPromise = (async ()=>{
                    try {
                        const value2 = await fetcher();
                        if (gen !== this.refreshGeneration) {
                            return;
                        }
                        this.state = {
                            expiresAt: performance.now() + this.ttl,
                            value: value2
                        };
                        this.staleDirty = false;
                    } catch  {} finally{
                        if (refreshPromise && this.refreshInFlight === refreshPromise) {
                            this.refreshInFlight = void 0;
                        }
                    }
                })();
                this.refreshInFlight = refreshPromise;
            }
            return staleValue;
        }
        const value = await fetcher();
        this.state = {
            expiresAt: performance.now() + this.ttl,
            value
        };
        this.staleDirty = false;
        return value;
    }
    invalidate() {
        this.refreshGeneration++;
        this.state = void 0;
        this.staleDirty = false;
        this.refreshInFlight = void 0;
    }
    invalidateKeepingStale() {
        if (!this.state) {
            return;
        }
        this.staleDirty = true;
    }
};

}
