import { h7 } from "./argv.js";
import { Ne } from "./nls.js";
import { wA } from "./telemetrySource.js";
import { h } from "./tslib.es6.js";
var __wakaru_sh_initialized = false;
export function sh() {
if (__wakaru_sh_initialized) return;
__wakaru_sh_initialized = true;
"use strict";
h(), Ne(), wA(), h7();

}
