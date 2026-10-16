import { VyC } from "./composerTurnFileChanges.js";
import { ARt } from "./diff-render-limits.js";
import { Mt } from "./index_197.js";
import { E } from "./tslib.es6.js";
var Ymc, ar_, lr_, cr_;
export { Ymc, ar_, cr_, lr_ };
var __wakaru_ur__initialized = false;
export function ur_() {
if (__wakaru_ur__initialized) return;
__wakaru_ur__initialized = true;
"use strict";
E(), Mt(), VyC(), ARt(), Ymc = {
    kind: "renderable"
}, ar_ = {
    kind: "unavailable",
    reason: "unavailableByteSize"
}, lr_ = {
    kind: "deferred",
    reason: "largeDiffStatsBudget"
}, cr_ = {
    kind: "deferred",
    reason: "skippedDueToLineLimit"
};

}
