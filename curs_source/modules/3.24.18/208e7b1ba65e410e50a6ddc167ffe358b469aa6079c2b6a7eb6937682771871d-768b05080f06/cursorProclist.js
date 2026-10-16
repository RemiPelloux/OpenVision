import { Q, ne } from "./instantiation.js";
import { bme } from "./rendererProcessInventory.js";
import { h } from "./tslib.es6.js";
var E9, GTe, VTe, dE;
export { E9, GTe, VTe, dE };
var __wakaru_$Te_initialized = false;
export function $Te() {
if (__wakaru_$Te_initialized) return;
__wakaru_$Te_initialized = true;
"use strict";
h(), ne(), bme(), E9 = Q("cursorProclistService"), GTe = "cursorProclist", VTe = 288, dE = {
    episodeActive: !1,
    consecutiveLowSamples: 0,
    consecutiveHealthySamples: 0
};

}
