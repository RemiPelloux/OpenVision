import { h } from "./tslib.es6.js";
var pe;
export { pe };
var __wakaru_Hd_initialized = false;
export function Hd() {
if (__wakaru_Hd_initialized) return;
__wakaru_Hd_initialized = true;
"use strict";
h(), pe = class {
    constructor(e, t = [], n = !1, r = !1){
        this.ctor = e, this.staticArguments = t, this.supportsDelayedInstantiation = n, this.supportsLazyInstantiation = r;
    }
};

}
