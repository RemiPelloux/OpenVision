import { x } from "./tslib.es6.js";
var Vro;
export { Vro };
var __wakaru_jro_initialized = false;
export function jro() {
if (__wakaru_jro_initialized) return;
__wakaru_jro_initialized = true;
"use strict";
x(), Vro = class extends Error {
    constructor(){
        super("[composer] No loaded composer found"), this.name = "ComposerNotLoadedError";
    }
};

}
