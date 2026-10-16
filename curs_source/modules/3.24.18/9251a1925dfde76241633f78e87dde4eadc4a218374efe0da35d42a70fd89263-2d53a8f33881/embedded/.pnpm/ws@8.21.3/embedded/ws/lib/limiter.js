var __wakaru_require_limiter_cache;
export function require_limiter() {
if (__wakaru_require_limiter_cache) return __wakaru_require_limiter_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_limiter_cache = module2;
"use strict";
var kDone = Symbol("kDone");
var kRun = Symbol("kRun");
var Limiter = class {
    constructor(concurrency){
        this[kDone] = ()=>{
            this.pending--;
            this[kRun]();
        };
        this.concurrency = concurrency || Infinity;
        this.jobs = [];
        this.pending = 0;
    }
    add(job) {
        this.jobs.push(job);
        this[kRun]();
    }
    [kRun]() {
        if (this.pending === this.concurrency) return;
        if (this.jobs.length) {
            const job = this.jobs.shift();
            this.pending++;
            job(this[kDone]);
        }
    }
};
module2.exports = Limiter;

return module2.exports;
}
