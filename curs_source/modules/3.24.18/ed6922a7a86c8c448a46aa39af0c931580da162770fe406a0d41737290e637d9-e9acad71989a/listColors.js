import { S } from "./HVr.js";
import { U2t, Vb, cze, id, tN, uc } from "./baseColors.js";
import { Ci, Sm } from "./color.js";
import { NP } from "./colorUtils.js";
import { ABe, Nge, _3, are, lze, opt } from "./editorColors.js";
import { rt } from "./nls.js";
import { Lt, fle, o2, pa, vgn } from "./qIc.js";
import { x } from "./tslib.es6.js";
var dpt, z2t, K2t, CNc, DK, VAe, hZr, oW, pZr, TNc, mZr, ENc, jAe, Y2t, gZr, xNc, hpt, INc, ANc, PBe, Mgn, RNc, DNc, MNc, PNc, LNc, NNc, fZr, Pgn, ONc, FNc, Kfi, $mg, BNc, Hmg, Wmg;
export { $mg, ANc, BNc, CNc, DK, DNc, ENc, FNc, Hmg, INc, K2t, Kfi, LNc, MNc, Mgn, NNc, ONc, PBe, PNc, Pgn, RNc, TNc, VAe, Wmg, Y2t, dpt, fZr, gZr, hZr, hpt, jAe, mZr, oW, pZr, xNc, z2t };
var __wakaru_vZr_initialized = false;
export function vZr() {
if (__wakaru_vZr_initialized) return;
__wakaru_vZr_initialized = true;
"use strict";
x(), rt(), Sm(), NP(), cze(), opt(), dpt = Lt("list.focusBackground", null, S(2458, null)), z2t = Lt("list.focusForeground", null, S(2459, null)), K2t = Lt("list.focusOutline", {
    dark: tN,
    light: tN,
    hcDark: Vb,
    hcLight: Vb
}, S(2460, null)), CNc = Lt("list.focusAndSelectionOutline", null, S(2461, null)), DK = Lt("list.activeSelectionBackground", {
    dark: "#04395E",
    light: "#0060C0",
    hcDark: null,
    hcLight: Ci.fromHex("#0F4A85").transparent(.1)
}, S(2462, null)), VAe = Lt("list.activeSelectionForeground", {
    dark: Ci.white,
    light: Ci.white,
    hcDark: null,
    hcLight: null
}, S(2463, null)), hZr = Lt("list.activeSelectionIconForeground", null, S(2464, null)), oW = Lt("list.inactiveSelectionBackground", {
    dark: "#37373D",
    light: "#E4E6F1",
    hcDark: null,
    hcLight: Ci.fromHex("#0F4A85").transparent(.1)
}, S(2465, null)), pZr = Lt("list.inactiveSelectionForeground", null, S(2466, null)), TNc = Lt("list.inactiveSelectionIconForeground", null, S(2467, null)), mZr = Lt("list.inactiveFocusBackground", null, S(2468, null)), ENc = Lt("list.inactiveFocusOutline", null, S(2469, null)), jAe = Lt("list.hoverBackground", {
    dark: "#2A2D2E",
    light: "#F0F0F0",
    hcDark: Ci.white.transparent(.1),
    hcLight: Ci.fromHex("#0F4A85").transparent(.1)
}, S(2470, null)), Y2t = Lt("list.hoverForeground", null, S(2471, null)), gZr = Lt("list.dropBackground", {
    dark: "#062F4A",
    light: "#D6EBFF",
    hcDark: null,
    hcLight: null
}, S(2472, null)), xNc = Lt("list.dropBetweenBackground", {
    dark: U2t,
    light: U2t,
    hcDark: null,
    hcLight: null
}, S(2473, null)), hpt = Lt("list.highlightForeground", {
    dark: "#2AAAFF",
    light: "#0066BF",
    hcDark: tN,
    hcLight: tN
}, S(2474, null)), INc = Lt("list.focusHighlightForeground", {
    dark: hpt,
    light: vgn(DK, hpt, "#BBE7FF"),
    hcDark: hpt,
    hcLight: hpt
}, S(2475, null)), ANc = Lt("list.invalidItemForeground", {
    dark: "#B89500",
    light: "#B89500",
    hcDark: "#B89500",
    hcLight: "#B5200D"
}, S(2476, null)), PBe = Lt("list.errorForeground", {
    dark: "#F88070",
    light: "#B01011",
    hcDark: null,
    hcLight: null
}, S(2477, null)), Mgn = Lt("list.warningForeground", {
    dark: "#CCA700",
    light: "#855F00",
    hcDark: null,
    hcLight: null
}, S(2478, null)), RNc = Lt("listFilterWidget.background", {
    light: o2(_3, 0),
    dark: fle(_3, 0),
    hcDark: _3,
    hcLight: _3
}, S(2479, null)), DNc = Lt("listFilterWidget.outline", {
    dark: Ci.transparent,
    light: Ci.transparent,
    hcDark: "#f38518",
    hcLight: "#007ACC"
}, S(2480, null)), MNc = Lt("listFilterWidget.noMatchesOutline", {
    dark: "#BE1100",
    light: "#BE1100",
    hcDark: uc,
    hcLight: uc
}, S(2481, null)), PNc = Lt("listFilterWidget.shadow", Nge, S(2482, null)), LNc = Lt("list.filterMatchBackground", {
    dark: are,
    light: are,
    hcDark: null,
    hcLight: null
}, S(2483, null)), NNc = Lt("list.filterMatchBorder", {
    dark: ABe,
    light: ABe,
    hcDark: uc,
    hcLight: Vb
}, S(2484, null)), fZr = Lt("list.deemphasizedForeground", {
    dark: "#8C8C8C",
    light: "#8E8E90",
    hcDark: "#A7A8A9",
    hcLight: "#666666"
}, S(2485, null)), Pgn = Lt("tree.indentGuidesStroke", {
    dark: "#585858",
    light: "#a9a9a9",
    hcDark: "#a9a9a9",
    hcLight: "#a5a5a5"
}, S(2486, null)), ONc = Lt("tree.inactiveIndentGuidesStroke", pa(Pgn, .4), S(2487, null)), FNc = Lt("tree.tableColumnsBorder", {
    dark: "#CCCCCC20",
    light: "#61616120",
    hcDark: null,
    hcLight: null
}, S(2488, null)), Kfi = Lt("tree.tableOddRowsBackground", {
    dark: pa(id, .04),
    light: pa(id, .04),
    hcDark: null,
    hcLight: null
}, S(2489, null)), $mg = Lt("editorActionList.background", _3, S(2490, null)), BNc = Lt("editorActionList.foreground", lze, S(2491, null)), Hmg = Lt("editorActionList.focusForeground", VAe, S(2492, null)), Wmg = Lt("editorActionList.focusBackground", DK, S(2493, null));

}
