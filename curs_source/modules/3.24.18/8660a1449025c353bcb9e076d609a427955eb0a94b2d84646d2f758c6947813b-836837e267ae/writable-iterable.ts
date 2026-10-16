import { E } from "./tslib.es6.js";
var Z0e, TCn;
export { TCn, Z0e };
var __wakaru_M21_initialized = false;
export function M21() {
if (__wakaru_M21_initialized) return;
__wakaru_M21_initialized = true;
"use strict";
E(), Z0e = class extends Error {
    constructor(t){
        super(t), this.name = "WriteIterableClosedError";
    }
}, TCn = class {
    constructor(t, e){
        this.writable = t, this.map = e, this.closed = !1;
    }
    async write(t) {
        if (this.closed) throw new Z0e("WritableIterable is closed");
        const e = this.map(t);
        await this.writable.write(e);
    }
    close() {
        this.closed || (this.closed = !0);
    }
};

}
