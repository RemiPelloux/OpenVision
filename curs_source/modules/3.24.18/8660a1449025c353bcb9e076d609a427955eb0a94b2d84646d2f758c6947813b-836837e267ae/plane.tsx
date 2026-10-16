import { GGk, LPi, _hf } from "./Ycg.js";
import { YMe } from "./brands.ts";
import { AMn } from "./parts.ts";
import { Udf } from "./plane-epoch.ts";
import { Wdf } from "./row-frame.ts";
import { E } from "./tslib.es6.js";
import { vhf } from "./use-virtual-plane.ts";
var bhf, yhf, Shf, khf, whf, Chf;
export { Chf, Shf, bhf, khf, whf, yhf };
var __wakaru_qGk_initialized = false;
export function qGk() {
if (__wakaru_qGk_initialized) return;
__wakaru_qGk_initialized = true;
"use strict";
E(), YMe(), AMn(), Udf(), Wdf(), vhf(), bhf = "plane-row", yhf = LPi("body"), Shf = 4, khf = {
    nearBottomThresholdPx: 4,
    userInputWindowMs: 250,
    driftTolerancePx: 1
}, whf = {
    overflowY: "auto",
    overflowAnchor: "none",
    position: "relative"
}, Chf = Object.assign(GGk, {
    Row: _hf
});

}
