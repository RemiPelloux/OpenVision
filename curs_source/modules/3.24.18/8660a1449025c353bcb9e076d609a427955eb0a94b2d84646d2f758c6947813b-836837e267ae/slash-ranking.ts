import { E } from "./tslib.es6.js";
var EFp, NOa, bqr, IFp, xFp, AFp, RFp, qW, LOa;
export { AFp, EFp, IFp, LOa, NOa, RFp, bqr, qW, xFp };
var __wakaru_UD1_initialized = false;
export function UD1() {
if (__wakaru_UD1_initialized) return;
__wakaru_UD1_initialized = true;
"use strict";
E(), EFp = "slash-frecency-team-discovery", NOa = "tray-team-discovery-v2", bqr = 10080 * 60 * 1e3, IFp = .8, xFp = 5, AFp = .05, RFp = 672 * 60 * 60 * 1e3, qW = {
    halfLifeMs: bqr,
    teamPseudoCountCap: IFp,
    teamMinSampleCount: xFp,
    teamMinScore: AFp,
    discoveryPersonalRecencyWindowMs: RFp,
    policy: "strict_tiers",
    visibleItemCount: 5,
    discoverySlotIndices: [
        3,
        4
    ],
    protectedTopCount: 3,
    maxDiscoveryScoreDeficit: .25,
    discoverySeed: ""
}, LOa = new WeakMap;

}
