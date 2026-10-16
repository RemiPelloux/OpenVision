import { E } from "./tslib.es6.js";
var tm;
export { tm };
var __wakaru_L1_initialized = false;
export function L1() {
if (__wakaru_L1_initialized) return;
__wakaru_L1_initialized = true;
"use strict";
E(), tm = class {
    constructor(t, e = [], n = !1, i = !1){
        this.ctor = t, this.staticArguments = e, this.supportsDelayedInstantiation = n, this.supportsLazyInstantiation = i;
    }
};

}
