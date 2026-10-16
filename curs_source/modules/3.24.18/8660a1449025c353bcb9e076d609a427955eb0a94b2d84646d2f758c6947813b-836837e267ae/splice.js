import { E } from "./tslib.es6.js";
var vGd;
export { vGd };
var __wakaru_dNy_initialized = false;
export function dNy() {
if (__wakaru_dNy_initialized) return;
__wakaru_dNy_initialized = true;
"use strict";
E(), vGd = class {
    constructor(t){
        this.spliceables = t;
    }
    splice(t, e, n) {
        this.spliceables.forEach((i)=>i.splice(t, e, n));
    }
};

}
