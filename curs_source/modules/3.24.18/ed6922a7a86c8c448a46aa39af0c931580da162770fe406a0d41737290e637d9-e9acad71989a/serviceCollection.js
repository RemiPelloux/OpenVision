import { x } from "./tslib.es6.js";
var ky;
export { ky };
var __wakaru_KC_initialized = false;
export function KC() {
if (__wakaru_KC_initialized) return;
__wakaru_KC_initialized = true;
"use strict";
x(), ky = class {
    constructor(...e){
        this._entries = new Map;
        for (const [t, n] of e)this.set(t, n);
    }
    set(e, t) {
        const n = this._entries.get(e);
        return this._entries.set(e, t), n;
    }
    has(e) {
        return this._entries.has(e);
    }
    get(e) {
        return this._entries.get(e);
    }
};

}
