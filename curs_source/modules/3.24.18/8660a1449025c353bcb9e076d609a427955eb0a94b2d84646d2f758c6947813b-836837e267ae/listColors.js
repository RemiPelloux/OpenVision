import { D } from "./Iwo.js";
import { Ad, Ck, Ogn, Qde, Y_, xtt } from "./baseColors.js";
import { _b, ls } from "./color.js";
import { iB } from "./colorUtils.js";
import { EQ, Rtt, Wbt, cwe, jAe, jbt } from "./editorColors.js";
import { Bt } from "./nls.js";
import { E } from "./tslib.es6.js";
import { UAe, iu, k7, mn, qAy } from "./ze.js";
var Uwr, jwr, $wr, R4d, Vve, Dtt, $Uo, qgn, P4d, M4d, D4d, N4d, Ntt, Sri, L4d, O4d, z9t, F4d, e2y, zbt, Hwr, B4d, U4d, j4d, $4d, t2y, n2y, i2y, kri, H4d, W4d, G4d, r2y, q4d, s2y, o2y;
export { $4d, $Uo, $wr, B4d, D4d, Dtt, F4d, G4d, H4d, Hwr, L4d, M4d, N4d, Ntt, O4d, P4d, R4d, Sri, U4d, Uwr, Vve, W4d, e2y, i2y, j4d, jwr, kri, n2y, o2y, q4d, qgn, r2y, s2y, t2y, z9t, zbt };
var __wakaru_HUo_initialized = false;
export function HUo() {
if (__wakaru_HUo_initialized) return;
__wakaru_HUo_initialized = true;
"use strict";
E(), Bt(), _b(), iB(), xtt(), Wbt(), Uwr = mn("list.focusBackground", null, D(2458, null)), jwr = mn("list.focusForeground", null, D(2459, null)), $wr = mn("list.focusOutline", {
    dark: Qde,
    light: Qde,
    hcDark: Ck,
    hcLight: Ck
}, D(2460, null)), R4d = mn("list.focusAndSelectionOutline", null, D(2461, null)), Vve = mn("list.activeSelectionBackground", {
    dark: "#04395E",
    light: "#0060C0",
    hcDark: null,
    hcLight: ls.fromHex("#0F4A85").transparent(.1)
}, D(2462, null)), Dtt = mn("list.activeSelectionForeground", {
    dark: ls.white,
    light: ls.white,
    hcDark: null,
    hcLight: null
}, D(2463, null)), $Uo = mn("list.activeSelectionIconForeground", null, D(2464, null)), qgn = mn("list.inactiveSelectionBackground", {
    dark: "#37373D",
    light: "#E4E6F1",
    hcDark: null,
    hcLight: ls.fromHex("#0F4A85").transparent(.1)
}, D(2465, null)), P4d = mn("list.inactiveSelectionForeground", null, D(2466, null)), M4d = mn("list.inactiveSelectionIconForeground", null, D(2467, null)), D4d = mn("list.inactiveFocusBackground", null, D(2468, null)), N4d = mn("list.inactiveFocusOutline", null, D(2469, null)), Ntt = mn("list.hoverBackground", {
    dark: "#2A2D2E",
    light: "#F0F0F0",
    hcDark: ls.white.transparent(.1),
    hcLight: ls.fromHex("#0F4A85").transparent(.1)
}, D(2470, null)), Sri = mn("list.hoverForeground", null, D(2471, null)), L4d = mn("list.dropBackground", {
    dark: "#062F4A",
    light: "#D6EBFF",
    hcDark: null,
    hcLight: null
}, D(2472, null)), O4d = mn("list.dropBetweenBackground", {
    dark: Ogn,
    light: Ogn,
    hcDark: null,
    hcLight: null
}, D(2473, null)), z9t = mn("list.highlightForeground", {
    dark: "#2AAAFF",
    light: "#0066BF",
    hcDark: Qde,
    hcLight: Qde
}, D(2474, null)), F4d = mn("list.focusHighlightForeground", {
    dark: z9t,
    light: qAy(Vve, z9t, "#BBE7FF"),
    hcDark: z9t,
    hcLight: z9t
}, D(2475, null)), e2y = mn("list.invalidItemForeground", {
    dark: "#B89500",
    light: "#B89500",
    hcDark: "#B89500",
    hcLight: "#B5200D"
}, D(2476, null)), zbt = mn("list.errorForeground", {
    dark: "#F88070",
    light: "#B01011",
    hcDark: null,
    hcLight: null
}, D(2477, null)), Hwr = mn("list.warningForeground", {
    dark: "#CCA700",
    light: "#855F00",
    hcDark: null,
    hcLight: null
}, D(2478, null)), B4d = mn("listFilterWidget.background", {
    light: k7(EQ, 0),
    dark: UAe(EQ, 0),
    hcDark: EQ,
    hcLight: EQ
}, D(2479, null)), U4d = mn("listFilterWidget.outline", {
    dark: ls.transparent,
    light: ls.transparent,
    hcDark: "#f38518",
    hcLight: "#007ACC"
}, D(2480, null)), j4d = mn("listFilterWidget.noMatchesOutline", {
    dark: "#BE1100",
    light: "#BE1100",
    hcDark: Ad,
    hcLight: Ad
}, D(2481, null)), $4d = mn("listFilterWidget.shadow", jAe, D(2482, null)), t2y = mn("list.filterMatchBackground", {
    dark: cwe,
    light: cwe,
    hcDark: null,
    hcLight: null
}, D(2483, null)), n2y = mn("list.filterMatchBorder", {
    dark: Rtt,
    light: Rtt,
    hcDark: Ad,
    hcLight: Ck
}, D(2484, null)), i2y = mn("list.deemphasizedForeground", {
    dark: "#8C8C8C",
    light: "#8E8E90",
    hcDark: "#A7A8A9",
    hcLight: "#666666"
}, D(2485, null)), kri = mn("tree.indentGuidesStroke", {
    dark: "#585858",
    light: "#a9a9a9",
    hcDark: "#a9a9a9",
    hcLight: "#a5a5a5"
}, D(2486, null)), H4d = mn("tree.inactiveIndentGuidesStroke", iu(kri, .4), D(2487, null)), W4d = mn("tree.tableColumnsBorder", {
    dark: "#CCCCCC20",
    light: "#61616120",
    hcDark: null,
    hcLight: null
}, D(2488, null)), G4d = mn("tree.tableOddRowsBackground", {
    dark: iu(Y_, .04),
    light: iu(Y_, .04),
    hcDark: null,
    hcLight: null
}, D(2489, null)), r2y = mn("editorActionList.background", EQ, D(2490, null)), q4d = mn("editorActionList.foreground", jbt, D(2491, null)), s2y = mn("editorActionList.focusForeground", Dtt, D(2492, null)), o2y = mn("editorActionList.focusBackground", Vve, D(2493, null));

}
