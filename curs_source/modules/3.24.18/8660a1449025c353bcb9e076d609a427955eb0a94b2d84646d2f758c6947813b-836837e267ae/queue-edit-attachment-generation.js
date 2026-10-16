import { E } from "./tslib.es6.js";
var swv;
export { swv };
var __wakaru_Oy0_initialized = false;
export function Oy0() {
if (__wakaru_Oy0_initialized) return;
__wakaru_Oy0_initialized = true;
"use strict";
E(), swv = class {
    constructor(){
        this.appendGeneration = 0, this.conversionGeneration = 0;
    }
    captureAppendGeneration() {
        return this.appendGeneration;
    }
    captureConversionGeneration() {
        return this.conversionGeneration;
    }
    isAppendGenerationCurrent(t) {
        return this.appendGeneration === t;
    }
    isConversionGenerationCurrent(t) {
        return this.conversionGeneration === t;
    }
    advanceLifecycleGeneration() {
        this.appendGeneration += 1, this.conversionGeneration += 1;
    }
};

}
