import { x } from "./tslib.es6.js";
var lc;
export { lc };
var __wakaru_Dm_initialized = false;
export function Dm() {
if (__wakaru_Dm_initialized) return;
__wakaru_Dm_initialized = true;
"use strict";
x(), lc = class {
    constructor(e, t = [], n = !1, i = !1){
        this.ctor = e, this.staticArguments = t, this.supportsDelayedInstantiation = n, this.supportsLazyInstantiation = i;
    }
};

}
