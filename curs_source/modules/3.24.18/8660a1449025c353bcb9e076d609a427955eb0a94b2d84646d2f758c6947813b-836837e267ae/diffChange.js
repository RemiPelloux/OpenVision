import { E } from "./tslib.es6.js";
var _nt;
export { _nt };
var __wakaru_n5y_initialized = false;
export function n5y() {
if (__wakaru_n5y_initialized) return;
__wakaru_n5y_initialized = true;
"use strict";
E(), _nt = class {
    constructor(t, e, n, i){
        this.originalStart = t, this.originalLength = e, this.modifiedStart = n, this.modifiedLength = i;
    }
    getOriginalEnd() {
        return this.originalStart + this.originalLength;
    }
    getModifiedEnd() {
        return this.modifiedStart + this.modifiedLength;
    }
};

}
