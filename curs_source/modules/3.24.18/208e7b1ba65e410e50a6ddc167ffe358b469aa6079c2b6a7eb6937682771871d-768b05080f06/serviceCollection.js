import { h } from "./tslib.es6.js";
var BS;
export { BS };
var __wakaru_gM_initialized = false;
export function gM() {
if (__wakaru_gM_initialized) return;
__wakaru_gM_initialized = true;
"use strict";
h(), BS = class {
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
