import { require_symbols } from "./core/symbols.js";
var __wakaru_require_pool_stats_cache;
export function require_pool_stats() {
if (__wakaru_require_pool_stats_cache) return __wakaru_require_pool_stats_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_pool_stats_cache = module2;
var { kFree, kConnected, kPending, kQueued, kRunning, kSize } = require_symbols();
var kPool = Symbol("pool");
var PoolStats = class {
    constructor(pool){
        this[kPool] = pool;
    }
    get connected() {
        return this[kPool][kConnected];
    }
    get free() {
        return this[kPool][kFree];
    }
    get pending() {
        return this[kPool][kPending];
    }
    get queued() {
        return this[kPool][kQueued];
    }
    get running() {
        return this[kPool][kRunning];
    }
    get size() {
        return this[kPool][kSize];
    }
};
module2.exports = PoolStats;

return module2.exports;
}
