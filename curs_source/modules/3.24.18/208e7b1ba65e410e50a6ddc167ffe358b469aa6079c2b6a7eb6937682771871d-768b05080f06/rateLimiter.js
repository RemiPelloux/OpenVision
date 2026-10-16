import { h } from "./tslib.es6.js";
var nve;
export { nve };
var __wakaru_$tt_initialized = false;
export function $tt() {
if (__wakaru_$tt_initialized) return;
__wakaru_$tt_initialized = true;
"use strict";
h(), nve = class {
    constructor(e){
        this.granularity = e, this.amounts = new Map, this.lastBucketTimestamp = this.getCurrentBucket();
    }
    increment(e, t = 1) {
        const n = this.getCurrentBucket();
        n !== this.lastBucketTimestamp && (this.amounts.clear(), this.lastBucketTimestamp = n);
        const s = (this.amounts.get(e) ?? 0) + t;
        return this.amounts.set(e, s), s;
    }
    getCurrentBucket() {
        return Math.floor(Date.now() / this.granularity);
    }
};

}
