import { E } from "./tslib.es6.js";
var Aes, O$m, F$m, B$m, U$m, oG, aZa, j$m, $$m, H$m, W$m, G$m, q$m, z$m;
export { $$m, Aes, B$m, F$m, G$m, H$m, O$m, U$m, W$m, aZa, j$m, oG, q$m, z$m };
var __wakaru_PY1_initialized = false;
export function PY1() {
if (__wakaru_PY1_initialized) return;
__wakaru_PY1_initialized = true;
"use strict";
E(), Aes = 10080 * 60 * 1e3, O$m = .8, F$m = 5, B$m = .05, U$m = 672 * 60 * 60 * 1e3, oG = {
    halfLifeMs: Aes,
    teamPseudoCountCap: O$m,
    teamMinSampleCount: F$m,
    teamMinScore: B$m,
    discoveryPersonalRecencyWindowMs: U$m,
    policy: "strict_tiers",
    visibleItemCount: 5,
    discoverySlotIndices: [
        3,
        4
    ],
    protectedTopCount: 3,
    maxDiscoveryScoreDeficit: .25,
    discoverySeed: ""
}, aZa = new WeakMap, j$m = 0, $$m = 1, H$m = 2, W$m = 3, G$m = 4, q$m = 5, z$m = 6;

}
