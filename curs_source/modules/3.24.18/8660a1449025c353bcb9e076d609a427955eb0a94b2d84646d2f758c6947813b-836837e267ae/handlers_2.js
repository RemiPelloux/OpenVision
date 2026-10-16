import { qR } from "./debug-build.js";
import { JC } from "./debug-logger.js";
import { $qu } from "./errorCapture.js";
import { Rte } from "./object.js";
import { E } from "./tslib.es6.js";
var __wakaru_mmy_initialized = false;
export function mmy() {
if (__wakaru_mmy_initialized) return;
__wakaru_mmy_initialized = true;
"use strict";
E(), qR(), JC(), Rte(), $qu();

}
