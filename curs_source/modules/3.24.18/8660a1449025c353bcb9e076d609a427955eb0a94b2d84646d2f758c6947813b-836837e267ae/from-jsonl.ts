import { yNv } from "./parse-full.ts";
import { aNv } from "./synthesize-state.ts";
import { E } from "./tslib.es6.js";
var __wakaru_SNv_initialized = false;
export function SNv() {
if (__wakaru_SNv_initialized) return;
__wakaru_SNv_initialized = true;
"use strict";
E(), aNv(), yNv();

}
