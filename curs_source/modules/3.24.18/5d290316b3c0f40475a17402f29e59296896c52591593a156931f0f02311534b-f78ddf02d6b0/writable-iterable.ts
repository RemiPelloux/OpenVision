import { h } from "./tslib.es6.js";
var ic;
export { ic };
var __wakaru_k5_initialized = false;
export function k5() {
if (__wakaru_k5_initialized) return;
__wakaru_k5_initialized = true;
"use strict";
h(), ic = class extends Error {
    constructor(e){
        super(e), this.name = "WriteIterableClosedError";
    }
};

}
