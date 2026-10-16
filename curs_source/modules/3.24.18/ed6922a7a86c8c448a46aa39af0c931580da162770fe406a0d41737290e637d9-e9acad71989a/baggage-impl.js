import { x } from "./tslib.es6.js";
var __wakaru_xgv_cache;
export function xgv() {
if (__wakaru_xgv_cache) return __wakaru_xgv_cache;
var e = {};
__wakaru_xgv_cache = e;
"use strict";
x(), Object.defineProperty(e, "__esModule", {
    value: !0
}), e.BaggageImpl = void 0;
var t = class dQn {
    constructor(i){
        this._entries = i ? new Map(i) : new Map;
    }
    getEntry(i) {
        const r = this._entries.get(i);
        if (r) return Object.assign({}, r);
    }
    getAllEntries() {
        return Array.from(this._entries.entries()).map(([i, r])=>[
                i,
                r
            ]);
    }
    setEntry(i, r) {
        const s = new dQn(this._entries);
        return s._entries.set(i, r), s;
    }
    removeEntry(i) {
        const r = new dQn(this._entries);
        return r._entries.delete(i), r;
    }
    removeEntries(...i) {
        const r = new dQn(this._entries);
        for (const s of i)r._entries.delete(s);
        return r;
    }
    clear() {
        return new dQn;
    }
};
e.BaggageImpl = t;

return e;
}
