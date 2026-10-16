import { E } from "./tslib.es6.js";
var __wakaru_V31_cache;
export function V31() {
if (__wakaru_V31_cache) return __wakaru_V31_cache;
var t = {};
__wakaru_V31_cache = t;
"use strict";
E(), Object.defineProperty(t, "__esModule", {
    value: !0
}), t.BaggageImpl = void 0;
var e = class WZi {
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
        const s = new WZi(this._entries);
        return s._entries.set(i, r), s;
    }
    removeEntry(i) {
        const r = new WZi(this._entries);
        return r._entries.delete(i), r;
    }
    removeEntries(...i) {
        const r = new WZi(this._entries);
        for (const s of i)r._entries.delete(s);
        return r;
    }
    clear() {
        return new WZi;
    }
};
t.BaggageImpl = e;

return t;
}
