import { x } from "./tslib.es6.js";
var ZTc;
export { ZTc };
var __wakaru_Lcg_initialized = false;
export function Lcg() {
if (__wakaru_Lcg_initialized) return;
__wakaru_Lcg_initialized = true;
"use strict";
x(), ZTc = class {
    _processEntry(e) {
        this._onBeforeProcessingEntry?.(e);
    }
};

}
