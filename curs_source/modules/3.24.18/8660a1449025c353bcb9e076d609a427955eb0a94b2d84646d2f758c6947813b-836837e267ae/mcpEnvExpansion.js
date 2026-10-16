import { nY } from "./process.js";
import { E } from "./tslib.es6.js";
var llg;
export { llg };
var __wakaru_gfk_initialized = false;
export function gfk() {
if (__wakaru_gfk_initialized) return;
__wakaru_gfk_initialized = true;
"use strict";
E(), nY(), llg = /\$\{([^:}]+)(?::-([^}]*))?\}/g;

}
