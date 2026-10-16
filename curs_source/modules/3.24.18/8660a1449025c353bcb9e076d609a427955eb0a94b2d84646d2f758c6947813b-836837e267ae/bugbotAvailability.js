import { vo } from "./solidContext.js";
import { sk } from "./solidEventsWrapper.js";
import { E } from "./tslib.es6.js";
import { pi } from "./ze.js";
var __wakaru_mgl_initialized = false;
export function mgl() {
if (__wakaru_mgl_initialized) return;
__wakaru_mgl_initialized = true;
"use strict";
E(), pi(), vo(), sk();

}
