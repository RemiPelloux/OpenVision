import { D } from "./Iwo.js";
import { Y_, xtt } from "./baseColors.js";
import { iB } from "./colorUtils.js";
import { Rtt, Wbt, cwe } from "./editorColors.js";
import { Bt } from "./nls.js";
import { E } from "./tslib.es6.js";
import { iu, mn } from "./ze.js";
var l2y, c2y, u2y;
export { c2y, l2y, u2y };
var __wakaru_d2y_initialized = false;
export function d2y() {
if (__wakaru_d2y_initialized) return;
__wakaru_d2y_initialized = true;
"use strict";
E(), Bt(), iB(), xtt(), Wbt(), l2y = mn("search.resultsInfoForeground", {
    light: Y_,
    dark: iu(Y_, .65),
    hcDark: Y_,
    hcLight: Y_
}, D(2536, null)), c2y = mn("searchEditor.findMatchBackground", {
    light: iu(cwe, .66),
    dark: iu(cwe, .66),
    hcDark: cwe,
    hcLight: cwe
}, D(2537, null)), u2y = mn("searchEditor.findMatchBorder", {
    light: iu(Rtt, .66),
    dark: iu(Rtt, .66),
    hcDark: Rtt,
    hcLight: Rtt
}, D(2538, null));

}
