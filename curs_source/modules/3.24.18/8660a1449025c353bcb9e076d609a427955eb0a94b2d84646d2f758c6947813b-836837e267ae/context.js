import { E } from "./tslib.es6.js";
var __wakaru_Zqr_cache;
export function Zqr() {
if (__wakaru_Zqr_cache) return __wakaru_Zqr_cache;
var t = {};
__wakaru_Zqr_cache = t;
"use strict";
E(), Object.defineProperty(t, "__esModule", {
    value: !0
}), t.ROOT_CONTEXT = t.createContextKey = void 0;
function e(i) {
    return Symbol.for(i);
}
t.createContextKey = e;
var n = class JJc {
    constructor(r){
        const s = this;
        s._currentContext = r ? new Map(r) : new Map, s.getValue = (o)=>s._currentContext.get(o), s.setValue = (o, a)=>{
            const l = new JJc(s._currentContext);
            return l._currentContext.set(o, a), l;
        }, s.deleteValue = (o)=>{
            const a = new JJc(s._currentContext);
            return a._currentContext.delete(o), a;
        };
    }
};
t.ROOT_CONTEXT = new n;

return t;
}
