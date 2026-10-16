import { S } from "./HVr.js";
import { cze, id } from "./baseColors.js";
import { NP } from "./colorUtils.js";
import { ABe, are, opt } from "./editorColors.js";
import { rt } from "./nls.js";
import { Lt, pa } from "./qIc.js";
import { x } from "./tslib.es6.js";
var jmg, qmg, zmg;
export { jmg, qmg, zmg };
var __wakaru_Kmg_initialized = false;
export function Kmg() {
if (__wakaru_Kmg_initialized) return;
__wakaru_Kmg_initialized = true;
"use strict";
x(), rt(), NP(), cze(), opt(), jmg = Lt("search.resultsInfoForeground", {
    light: id,
    dark: pa(id, .65),
    hcDark: id,
    hcLight: id
}, S(2536, null)), qmg = Lt("searchEditor.findMatchBackground", {
    light: pa(are, .66),
    dark: pa(are, .66),
    hcDark: are,
    hcLight: are
}, S(2537, null)), zmg = Lt("searchEditor.findMatchBorder", {
    light: pa(ABe, .66),
    dark: pa(ABe, .66),
    hcDark: ABe,
    hcLight: ABe
}, S(2538, null));

}
