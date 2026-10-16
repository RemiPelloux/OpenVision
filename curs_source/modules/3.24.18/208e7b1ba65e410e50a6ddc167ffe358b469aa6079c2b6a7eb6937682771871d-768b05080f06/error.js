import { h } from "./tslib.es6.js";
var $B;
export { $B };
var __wakaru_jB_initialized = false;
export function jB() {
if (__wakaru_jB_initialized) return;
__wakaru_jB_initialized = true;
"use strict";
h(), $B = class extends Error {
    constructor(e, t = "warn"){
        super(e), this.message = e, this.logLevel = t;
    }
};

}
