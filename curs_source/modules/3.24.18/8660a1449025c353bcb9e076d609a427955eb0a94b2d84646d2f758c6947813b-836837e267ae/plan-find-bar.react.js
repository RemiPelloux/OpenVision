import { J0f, Q0f, eCf, jm } from "./command-ids.js";
import { Gv, ODi } from "./glassContextKeys.js";
import { pHv } from "./rich-text-find-bar.react.js";
import { E } from "./tslib.es6.js";
var KQv;
export { KQv };
var __wakaru_XhC_initialized = false;
export function XhC() {
if (__wakaru_XhC_initialized) return;
__wakaru_XhC_initialized = true;
"use strict";
E(), Gv(), jm(), pHv(), KQv = {
    visibleContextKey: ODi.key,
    nextMatchCommandId: J0f,
    previousMatchCommandId: eCf,
    closeCommandId: Q0f,
    nextMatchEvent: "planFindNextMatchRequested",
    previousMatchEvent: "planFindPreviousMatchRequested",
    closeEvent: "planFindCloseRequested",
    dataComponent: "plan-tab-find-bar",
    zIndex: 2
};

}
