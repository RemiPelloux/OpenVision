import { x } from "./tslib.es6.js";
var lde, b$t;
export { b$t, lde };
var __wakaru_chv_initialized = false;
export function chv() {
if (__wakaru_chv_initialized) return;
__wakaru_chv_initialized = true;
"use strict";
x(), lde = class extends Error {
    constructor(e){
        super(e), this.name = "WriteIterableClosedError";
    }
}, b$t = class {
    constructor(e, t){
        this.writable = e, this.map = t, this.closed = !1;
    }
    async write(e) {
        if (this.closed) throw new lde("WritableIterable is closed");
        const t = this.map(e);
        await this.writable.write(t);
    }
    close() {
        this.closed || (this.closed = !0);
    }
};

}
