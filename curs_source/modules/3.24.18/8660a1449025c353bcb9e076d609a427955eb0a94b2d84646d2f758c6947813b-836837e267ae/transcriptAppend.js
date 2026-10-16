import { Ga } from "./Iwo.js";
import { Ki } from "./network.js";
import { E } from "./tslib.es6.js";
var Qdg;
export { Qdg };
var __wakaru_Nbk_initialized = false;
export function Nbk() {
if (__wakaru_Nbk_initialized) return;
__wakaru_Nbk_initialized = true;
"use strict";
E(), Ga(), Ki(), Qdg = class extends Error {
    constructor(t){
        super(`Cannot incrementally append missing transcript: ${t.toString()}`), this.name = "MissingTranscriptForIncrementalAppendError";
    }
};

}
