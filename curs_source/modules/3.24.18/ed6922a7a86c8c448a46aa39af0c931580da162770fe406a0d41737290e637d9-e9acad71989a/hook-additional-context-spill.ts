import { fgh } from "./hook-additional-context-render.ts";
import { TFn } from "./limits.ts";
import { x } from "./tslib.es6.js";
var __wakaru_GHv_initialized = false;
export function GHv() {
if (__wakaru_GHv_initialized) return;
__wakaru_GHv_initialized = true;
"use strict";
x(), fgh(), TFn();

}
