import { x } from "./tslib.es6.js";
var rLu, cKs, e8i, sLu, oLu, aLu, cLu, E6, lKs;
export { E6, aLu, cKs, cLu, e8i, lKs, oLu, rLu, sLu };
var __wakaru_fmv_initialized = false;
export function fmv() {
if (__wakaru_fmv_initialized) return;
__wakaru_fmv_initialized = true;
"use strict";
x(), rLu = "slash-frecency-team-discovery", cKs = "tray-team-discovery-v2", e8i = 10080 * 60 * 1e3, sLu = .8, oLu = 5, aLu = .05, cLu = 672 * 60 * 60 * 1e3, E6 = {
    halfLifeMs: e8i,
    teamPseudoCountCap: sLu,
    teamMinSampleCount: oLu,
    teamMinScore: aLu,
    discoveryPersonalRecencyWindowMs: cLu,
    policy: "strict_tiers",
    visibleItemCount: 5,
    discoverySlotIndices: [
        3,
        4
    ],
    protectedTopCount: 3,
    maxDiscoveryScoreDeficit: .25,
    discoverySeed: ""
}, lKs = new WeakMap;

}
