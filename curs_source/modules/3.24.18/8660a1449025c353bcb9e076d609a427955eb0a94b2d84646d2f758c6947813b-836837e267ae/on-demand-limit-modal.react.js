import { G5k } from "./on-demand-actions.react.js";
import { z5k } from "./on-demand-amount-field.react.js";
import { Y5k } from "./on-demand-insight.react.js";
import { Z5k } from "./on-demand-modal-chrome.react.js";
import { eFk } from "./on-demand-spend-slider.react.js";
import { E } from "./tslib.es6.js";
var rQg, sQg, oQg, w0l, aQg, U2i, lQg, Yms, cQg;
export { U2i, Yms, aQg, cQg, lQg, oQg, rQg, sQg, w0l };
var __wakaru_oFk_initialized = false;
export function oFk() {
if (__wakaru_oFk_initialized) return;
__wakaru_oFk_initialized = true;
"use strict";
E(), G5k(), z5k(), Y5k(), Z5k(), eFk(), rQg = "Adjust your on-demand limit", sQg = "On-demand usage applies after your included usage is used up. Pay only for what you use.", oQg = "Set New Limit", w0l = 10, aQg = 1e4, U2i = 10, lQg = 50, Yms = [
    1,
    5,
    10,
    50,
    100
], cQg = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0
});

}
