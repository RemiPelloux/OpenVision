import { E } from "./tslib.es6.js";
var fW;
export { fW };
var __wakaru_vW_initialized = false;
export function vW() {
if (__wakaru_vW_initialized) return;
__wakaru_vW_initialized = true;
"use strict";
E(), fW = class {
    constructor(...t){
        this._entries = new Map;
        for (const [e, n] of t)this.set(e, n);
    }
    set(t, e) {
        const n = this._entries.get(t);
        return this._entries.set(t, e), n;
    }
    has(t) {
        return this._entries.has(t);
    }
    get(t) {
        return this._entries.get(t);
    }
};

}
