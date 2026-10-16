import { E } from "./tslib.es6.js";
var DOf;
export { DOf };
var __wakaru_eww_initialized = false;
export function eww() {
if (__wakaru_eww_initialized) return;
__wakaru_eww_initialized = true;
"use strict";
E(), DOf = class {
    constructor(t){
        this.shouldTrack = t, this.seen = new Set, this.armed = new Set, this.seeded = !1;
    }
    sync(t) {
        if (!this.seeded) {
            this.seeded = !0;
            for (const n of t)this.seen.add(n);
            return;
        }
        const e = new Set(t);
        for (const n of e)this.seen.has(n) || (this.seen.add(n), this.shouldTrack(n) && this.armed.add(n));
        for (const n of [
            ...this.seen
        ])e.has(n) || (this.seen.delete(n), this.armed.delete(n));
    }
    shouldEnter(t) {
        return this.armed.has(t);
    }
    markEntered(t) {
        this.armed.delete(t);
    }
};

}
