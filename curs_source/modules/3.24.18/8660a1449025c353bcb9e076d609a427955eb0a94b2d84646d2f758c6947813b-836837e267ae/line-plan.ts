import { E } from "./tslib.es6.js";
import { lTl } from "./voice-loop-instructions.ts";
import { Dgs } from "./voice-settings.ts";
var __wakaru_mnf_initialized = false;
export function mnf() {
if (__wakaru_mnf_initialized) return;
__wakaru_mnf_initialized = true;
"use strict";
E(), Dgs(), lTl();

}
