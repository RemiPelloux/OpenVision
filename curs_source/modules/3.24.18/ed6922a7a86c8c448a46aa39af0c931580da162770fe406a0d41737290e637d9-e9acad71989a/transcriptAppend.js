import { Fo } from "./HVr.js";
import { li } from "./network.js";
import { x } from "./tslib.es6.js";
var I1h;
export { I1h };
var __wakaru_NZv_initialized = false;
export function NZv() {
if (__wakaru_NZv_initialized) return;
__wakaru_NZv_initialized = true;
"use strict";
x(), Fo(), li(), I1h = class extends Error {
    constructor(e){
        super(`Cannot incrementally append missing transcript: ${e.toString()}`), this.name = "MissingTranscriptForIncrementalAppendError";
    }
};

}
