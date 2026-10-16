import { E } from "./tslib.es6.js";
import { Gxt } from "./useAnimationFrame.mjs";
import { DG } from "./useIsoLayoutEffect.mjs";
var __wakaru_rmw_initialized = false;
export function rmw() {
if (__wakaru_rmw_initialized) return;
__wakaru_rmw_initialized = true;
"use client";
E(), DG(), Gxt();

}
