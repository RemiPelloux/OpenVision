import { LHv } from "./collect.ts";
import { pgh } from "./errors_2.ts";
import { UHv } from "./factories.ts";
import { fgh } from "./hook-additional-context-render.ts";
import { GHv } from "./hook-additional-context-spill.ts";
import { TFn } from "./limits.ts";
import { VHv } from "./render.ts";
import { ggh } from "./spec.ts";
import { x } from "./tslib.es6.js";
var __wakaru_jHv_initialized = false;
export function jHv() {
if (__wakaru_jHv_initialized) return;
__wakaru_jHv_initialized = true;
x(), LHv(), pgh(), UHv(), fgh(), GHv(), TFn(), VHv(), ggh();

}
