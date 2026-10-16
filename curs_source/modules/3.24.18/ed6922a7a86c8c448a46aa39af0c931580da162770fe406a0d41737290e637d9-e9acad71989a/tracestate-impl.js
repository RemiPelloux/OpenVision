import { Ogv } from "./tracestate-validators.js";
import { x } from "./tslib.es6.js";
var __wakaru_Fgv_cache;
export function Fgv() {
if (__wakaru_Fgv_cache) return __wakaru_Fgv_cache;
var e = {};
__wakaru_Fgv_cache = e;
"use strict";
x(), Object.defineProperty(e, "__esModule", {
    value: !0
}), e.TraceStateImpl = void 0;
var t = Ogv(), n = 32, i = 512, r = ",", s = "=", o = class mCm {
    constructor(c){
        this._internalState = new Map, c && this._parse(c);
    }
    set(c, l) {
        const u = this._clone();
        return u._internalState.has(c) && u._internalState.delete(c), u._internalState.set(c, l), u;
    }
    unset(c) {
        const l = this._clone();
        return l._internalState.delete(c), l;
    }
    get(c) {
        return this._internalState.get(c);
    }
    serialize() {
        return this._keys().reduce((c, l)=>(c.push(l + s + this.get(l)), c), []).join(r);
    }
    _parse(c) {
        c.length > i || (this._internalState = c.split(r).reverse().reduce((l, u)=>{
            const h = u.trim(), p = h.indexOf(s);
            if (p !== -1) {
                const g = h.slice(0, p), f = h.slice(p + 1, u.length);
                (0, t.validateKey)(g) && (0, t.validateValue)(f) && l.set(g, f);
            }
            return l;
        }, new Map), this._internalState.size > n && (this._internalState = new Map(Array.from(this._internalState.entries()).reverse().slice(0, n))));
    }
    _keys() {
        return Array.from(this._internalState.keys()).reverse();
    }
    _clone() {
        const c = new mCm;
        return c._internalState = new Map(this._internalState), c;
    }
};
e.TraceStateImpl = o;

return e;
}
