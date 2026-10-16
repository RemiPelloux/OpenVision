import { E } from "./tslib.es6.js";
var J8a;
export { J8a };
var __wakaru_cie_initialized = false;
export function cie() {
if (__wakaru_cie_initialized) return;
__wakaru_cie_initialized = true;
"use strict";
E(), J8a = class extends Error {
    constructor(){
        super("[composer] No loaded composer found"), this.name = "ComposerNotLoadedError";
    }
};

}
