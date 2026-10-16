import { x } from "./tslib.es6.js";
var __wakaru_x8i_cache;
export function x8i() {
if (__wakaru_x8i_cache) return __wakaru_x8i_cache;
var e = {};
__wakaru_x8i_cache = e;
"use strict";
x(), Object.defineProperty(e, "__esModule", {
    value: !0
}), e.ROOT_CONTEXT = e.createContextKey = void 0;
function t(i) {
    return Symbol.for(i);
}
e.createContextKey = t;
var n = class pAa {
    constructor(r){
        const s = this;
        s._currentContext = r ? new Map(r) : new Map, s.getValue = (o)=>s._currentContext.get(o), s.setValue = (o, a)=>{
            const c = new pAa(s._currentContext);
            return c._currentContext.set(o, a), c;
        }, s.deleteValue = (o)=>{
            const a = new pAa(s._currentContext);
            return a._currentContext.delete(o), a;
        };
    }
};
e.ROOT_CONTEXT = new n;

return e;
}
