import { f2e } from "./transcript-row-utils.js";
import { E } from "./tslib.es6.js";
var Inp, Hka;
export { Hka, Inp };
var __wakaru_WUS_initialized = false;
export function WUS() {
if (__wakaru_WUS_initialized) return;
__wakaru_WUS_initialized = true;
"use strict";
E(), f2e(), Inp = new Set([
    "endOfTurnSummary",
    "tailStatus",
    "timeBoundary",
    "turnActions",
    "unreadDivider",
    "workInProgressHeader"
]), Hka = {
    endsInSteerBubble: !1,
    clipRowId: void 0
};

}
