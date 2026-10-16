import { x } from "./tslib.es6.js";
var Awc;
export { Awc };
var __wakaru_dig_initialized = false;
export function dig() {
if (__wakaru_dig_initialized) return;
__wakaru_dig_initialized = true;
"use strict";
x(), Awc = {
    trace: 1,
    debug: 5,
    info: 9,
    warn: 13,
    error: 17,
    fatal: 21
};

}
