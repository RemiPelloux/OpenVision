import { R0a } from "./enum-parameter-allowlist.js";
import { Dfi } from "./model-picker-badges.js";
import { nVS } from "./modelPickerTransitions.js";
import { rVS } from "./promotedLayoutPlan.js";
import { E } from "./tslib.es6.js";
import { VFe } from "./variantSolver.js";
import { createContext as oVS } from "./react-runtime/react/esm-index-production.js";
var c8r, jop, $op, N0a, Hop, Wop, Gop;
export { $op, Gop, Hop, N0a, Wop, c8r, jop };
var __wakaru_JY_initialized = false;
export function JY() {
if (__wakaru_JY_initialized) return;
__wakaru_JY_initialized = true;
"use strict";
E(), R0a(), Dfi(), nVS(), rVS(), VFe(), c8r = oVS(null), jop = {
    selections: [],
    selectionWhenAutoIsUnselected: void 0,
    viewWhileOpened: "named-model",
    maxMode: !1,
    multiModelMode: !1
}, $op = Object.freeze([]), N0a = Object.freeze([]), Hop = ()=>{}, Wop = {
    rowMode: "legacy"
}, Gop = {
    searchPlaceholder: "Search models",
    noModelsFound: "No models found",
    modelSelection: "Model selection",
    countOptions: "Count options",
    restoreDefaultParameters: "Restore default parameters",
    editParameters: "Edit"
};

}
