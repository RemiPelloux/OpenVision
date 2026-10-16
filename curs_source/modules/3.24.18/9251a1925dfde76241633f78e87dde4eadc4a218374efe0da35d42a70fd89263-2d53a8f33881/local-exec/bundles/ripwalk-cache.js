import { getAbortPromise, getRipwalkCacheKey, getRipwalkCacheTtlMs, ripwalk } from "../../dist_exports2.js";
import { init_ripgrep_stream } from "./ripgrep-stream.js";
import { init_dist3 } from "../../utils/dist/index.js";
import { TTLCache } from "../../utils/dist/ttl-cache.js";
var DEFAULT_RIPWALK_CACHE_TTL_MS, RIPWALK_CACHE_TTL_ENV_VAR, RipwalkTtlCache;
export { DEFAULT_RIPWALK_CACHE_TTL_MS, RIPWALK_CACHE_TTL_ENV_VAR, RipwalkTtlCache };
var __wakaru_init_ripwalk_cache_initialized = false;
export function init_ripwalk_cache() {
if (__wakaru_init_ripwalk_cache_initialized) return;
__wakaru_init_ripwalk_cache_initialized = true;
"use strict";
init_dist3();
init_ripgrep_stream();
DEFAULT_RIPWALK_CACHE_TTL_MS = 2e4;
RIPWALK_CACHE_TTL_ENV_VAR = "CURSOR_RIPWALK_CACHE_TTL_MS";
RipwalkTtlCache = class {
    constructor(ttlMs = ()=>getRipwalkCacheTtlMs()){
        this.cache = new TTLCache({
            ttlMs
        });
    }
    clear() {
        this.cache.clear();
    }
    delete(options2) {
        this.cache.delete(getRipwalkCacheKey(options2));
    }
    walk(ctx, options2) {
        const cacheKey2 = getRipwalkCacheKey(options2);
        let abortResolved = false;
        let didTimeoutResolved = false;
        let resolveDidTimeout;
        const didTimeout = new Promise((resolve36)=>{
            resolveDidTimeout = resolve36;
        });
        const resolveDidTimeoutOnce = (value)=>{
            if (didTimeoutResolved) {
                return;
            }
            didTimeoutResolved = true;
            resolveDidTimeout(value);
        };
        const abortPromise = getAbortPromise(ctx.signal);
        const streamLines = async function*() {
            const cachedEntry = this.cache.get(cacheKey2);
            if (cachedEntry !== void 0) {
                const cachedResult = await Promise.race([
                    cachedEntry.linesPromise.then((lines2)=>({
                            type: "lines",
                            lines: lines2
                        }), (error3)=>({
                            type: "error",
                            error: error3
                        })),
                    abortPromise.then(()=>({
                            type: "aborted"
                        }))
                ]);
                if (cachedResult.type === "aborted") {
                    abortResolved = true;
                    resolveDidTimeoutOnce(true);
                    return;
                }
                if (cachedResult.type === "lines") {
                    resolveDidTimeoutOnce(false);
                    yield* cachedResult.lines;
                    return;
                }
                if (this.cache.get(cacheKey2) === cachedEntry) {
                    this.cache.delete(cacheKey2);
                }
            }
            let resolveCachedLines;
            let rejectCachedLines;
            const newEntry = {
                linesPromise: new Promise((resolve36, reject2)=>{
                    resolveCachedLines = resolve36;
                    rejectCachedLines = reject2;
                })
            };
            newEntry.linesPromise.catch(()=>{});
            this.cache.set(cacheKey2, newEntry);
            const collectedLines = [];
            let shouldCacheCollectedLines = false;
            let cacheFailureReason;
            try {
                const innerWalk = ripwalk(ctx, options2);
                for await (const line of innerWalk.lines){
                    collectedLines.push(line);
                    yield line;
                }
                if (await innerWalk.didTimeout) {
                    abortResolved = true;
                    cacheFailureReason = new Error("Ripwalk aborted before cacheable result was available");
                    resolveDidTimeoutOnce(true);
                    return;
                }
                shouldCacheCollectedLines = true;
            } catch (error3) {
                cacheFailureReason = error3;
                throw error3;
            } finally{
                if (shouldCacheCollectedLines) {
                    resolveCachedLines?.(collectedLines);
                } else {
                    if (this.cache.get(cacheKey2) === newEntry) {
                        this.cache.delete(cacheKey2);
                    }
                    rejectCachedLines?.(cacheFailureReason ?? new Error("Ripwalk terminated before cacheable result was available"));
                }
                if (!abortResolved) {
                    resolveDidTimeoutOnce(false);
                }
            }
        }.bind(this);
        return {
            lines: streamLines(),
            didTimeout
        };
    }
};

}
