import { x } from "./tslib.es6.js";
var oRe, Rle, Pwe, Dbi;
export { Dbi, Pwe, Rle, oRe };
var __wakaru_h5e_initialized = false;
export function h5e() {
if (__wakaru_h5e_initialized) return;
__wakaru_h5e_initialized = true;
"use strict";
x(), oRe = ((e)=>(e[e.Copy = 0] = "Copy", e[e.Move = 1] = "Move", e))(oRe || {}), Rle = ((e)=>(e.Over = "drop-target", e.Before = "drop-target-before", e.After = "drop-target-after", e))(Rle || {}), Pwe = class extends Error {
    constructor(e, t){
        super(`ListError [${e}] ${t}`);
    }
}, Dbi = class {
    constructor(){
        this.cache = new WeakMap;
    }
    getHeight(e) {
        return this.cache.get(e) ?? this.estimateHeight(e);
    }
    setDynamicHeight(e, t) {
        t > 0 && this.cache.set(e, t);
    }
};

}
