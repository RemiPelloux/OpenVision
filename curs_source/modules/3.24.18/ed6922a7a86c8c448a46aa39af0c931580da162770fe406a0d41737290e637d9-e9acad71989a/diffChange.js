import { x } from "./tslib.es6.js";
var S5e;
export { S5e };
var __wakaru_Skg_initialized = false;
export function Skg() {
if (__wakaru_Skg_initialized) return;
__wakaru_Skg_initialized = true;
"use strict";
x(), S5e = class {
    constructor(e, t, n, i){
        this.originalStart = e, this.originalLength = t, this.modifiedStart = n, this.modifiedLength = i;
    }
    getOriginalEnd() {
        return this.originalStart + this.originalLength;
    }
    getModifiedEnd() {
        return this.modifiedStart + this.modifiedLength;
    }
};

}
