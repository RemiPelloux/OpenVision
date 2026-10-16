import { x } from "./tslib.es6.js";
var pjr;
export { pjr };
var __wakaru_mTc_initialized = false;
export function mTc() {
if (__wakaru_mTc_initialized) return;
__wakaru_mTc_initialized = true;
"use strict";
x(), pjr = class extends Error {
    constructor(e, t = "warn"){
        super(e), this.message = e, this.logLevel = t;
    }
};

}
