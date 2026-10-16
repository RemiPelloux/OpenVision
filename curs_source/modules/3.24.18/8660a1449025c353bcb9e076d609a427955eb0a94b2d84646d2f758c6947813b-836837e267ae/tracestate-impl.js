import { nN1 } from "./tracestate-validators.js";
import { E } from "./tslib.es6.js";
var __wakaru_iN1_cache;
export function iN1() {
if (__wakaru_iN1_cache) return __wakaru_iN1_cache;
var t = {};
__wakaru_iN1_cache = t;
"use strict";
E(), Object.defineProperty(t, "__esModule", {
    value: !0
}), t.TraceStateImpl = void 0;
var e = nN1(), n = 32, i = 512, r = ",", s = "=", o = class Q2b {
    constructor(l){
        this._internalState = new Map, l && this._parse(l);
    }
    set(l, c) {
        const u = this._clone();
        return u._internalState.has(l) && u._internalState.delete(l), u._internalState.set(l, c), u;
    }
    unset(l) {
        const c = this._clone();
        return c._internalState.delete(l), c;
    }
    get(l) {
        return this._internalState.get(l);
    }
    serialize() {
        return this._keys().reduce((l, c)=>(l.push(c + s + this.get(c)), l), []).join(r);
    }
    _parse(l) {
        l.length > i || (this._internalState = l.split(r).reverse().reduce((c, u)=>{
            const d = u.trim(), h = d.indexOf(s);
            if (h !== -1) {
                const p = d.slice(0, h), g = d.slice(h + 1, u.length);
                (0, e.validateKey)(p) && (0, e.validateValue)(g) && c.set(p, g);
            }
            return c;
        }, new Map), this._internalState.size > n && (this._internalState = new Map(Array.from(this._internalState.entries()).reverse().slice(0, n))));
    }
    _keys() {
        return Array.from(this._internalState.keys()).reverse();
    }
    _clone() {
        const l = new Q2b;
        return l._internalState = new Map(this._internalState), l;
    }
};
t.TraceStateImpl = o;

return t;
}
