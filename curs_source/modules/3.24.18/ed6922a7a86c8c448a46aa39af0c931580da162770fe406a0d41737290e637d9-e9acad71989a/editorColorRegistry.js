import { S } from "./HVr.js";
import { Vb, uc } from "./baseColors.js";
import { $s, Ci, Sm } from "./color.js";
import { tc } from "./colorRegistry.js";
import { $2t, ELc, H2t, Ph, are, c5, eU } from "./editorColors.js";
import { rt } from "./nls.js";
import { Lt, kI } from "./qIc.js";
import { as } from "./themeService.js";
import { x } from "./tslib.es6.js";
var fvi, tQr, yOc, Sgg, kgg, wgg, lOt, vvi, nQr, SOc, iQr, kOc, zgn, wOc, COc, TOc, rQr, EOc, xOc, IOc, AOc, ROc, sQr, DOc, MOc, POc, LOc, NOc, OOc, Cgg, FOc, BOc, Tgg, Egg, xgg, oQr, UOc, Igg, Agg, $Oc, Rgg, HOc, Dgg, WOc, aQr, _vi, GOc, bvi, cQr, lQr, uQr, dQr, hQr, pQr, VOc, jOc, qOc, zOc, KOc, YOc, XOc, ZOc, QOc, JOc, eFc, tFc, nFc, Mgg, Pgg;
export { $Oc, AOc, Agg, BOc, COc, Cgg, DOc, Dgg, EOc, Egg, FOc, GOc, HOc, IOc, Igg, JOc, KOc, LOc, MOc, Mgg, NOc, OOc, POc, Pgg, QOc, ROc, Rgg, SOc, Sgg, TOc, Tgg, UOc, VOc, WOc, XOc, YOc, ZOc, _vi, aQr, bvi, cQr, dQr, eFc, fvi, hQr, iQr, jOc, kOc, kgg, lOt, lQr, nFc, nQr, oQr, pQr, qOc, rQr, sQr, tFc, tQr, uQr, vvi, wOc, wgg, xOc, xgg, yOc, zOc, zgn };
var __wakaru_HV_initialized = false;
export function HV() {
if (__wakaru_HV_initialized) return;
__wakaru_HV_initialized = true;
"use strict";
x(), rt(), Sm(), tc(), as(), fvi = Lt("editor.lineHighlightBackground", null, S(709, null)), tQr = Lt("editor.lineHighlightBorder", {
    dark: "#282828",
    light: "#eeeeee",
    hcDark: "#f38518",
    hcLight: uc
}, S(710, null)), yOc = Lt("editor.rangeHighlightBackground", {
    dark: "#ffffff0b",
    light: "#fdff0033",
    hcDark: null,
    hcLight: null
}, S(711, null), !0), Sgg = Lt("editor.rangeHighlightBorder", {
    dark: null,
    light: null,
    hcDark: Vb,
    hcLight: Vb
}, S(712, null)), kgg = Lt("editor.symbolHighlightBackground", {
    dark: are,
    light: are,
    hcDark: null,
    hcLight: null
}, S(713, null), !0), wgg = Lt("editor.symbolHighlightBorder", {
    dark: null,
    light: null,
    hcDark: Vb,
    hcLight: Vb
}, S(714, null)), lOt = Lt("editorCursor.foreground", {
    dark: "#AEAFAD",
    light: Ci.black,
    hcDark: Ci.white,
    hcLight: "#0F4A85"
}, S(715, null)), vvi = Lt("editorCursor.background", null, S(716, null)), nQr = Lt("editorMultiCursor.primary.foreground", lOt, S(717, null)), SOc = Lt("editorMultiCursor.primary.background", vvi, S(718, null)), iQr = Lt("editorMultiCursor.secondary.foreground", lOt, S(719, null)), kOc = Lt("editorMultiCursor.secondary.background", vvi, S(720, null)), zgn = Lt("editorWhitespace.foreground", {
    dark: "#e3e4e229",
    light: "#33333333",
    hcDark: "#e3e4e229",
    hcLight: "#CCCCCC"
}, S(721, null)), wOc = Lt("editorLineNumber.foreground", {
    dark: "#858585",
    light: "#237893",
    hcDark: Ci.white,
    hcLight: "#292929"
}, S(722, null)), COc = Lt("editorIndentGuide.background", zgn, S(723, null), !1, S(724, null)), TOc = Lt("editorIndentGuide.activeBackground", zgn, S(725, null), !1, S(726, null)), rQr = Lt("editorIndentGuide.background1", COc, S(727, null)), EOc = Lt("editorIndentGuide.background2", "#00000000", S(728, null)), xOc = Lt("editorIndentGuide.background3", "#00000000", S(729, null)), IOc = Lt("editorIndentGuide.background4", "#00000000", S(730, null)), AOc = Lt("editorIndentGuide.background5", "#00000000", S(731, null)), ROc = Lt("editorIndentGuide.background6", "#00000000", S(732, null)), sQr = Lt("editorIndentGuide.activeBackground1", TOc, S(733, null)), DOc = Lt("editorIndentGuide.activeBackground2", "#00000000", S(734, null)), MOc = Lt("editorIndentGuide.activeBackground3", "#00000000", S(735, null)), POc = Lt("editorIndentGuide.activeBackground4", "#00000000", S(736, null)), LOc = Lt("editorIndentGuide.activeBackground5", "#00000000", S(737, null)), NOc = Lt("editorIndentGuide.activeBackground6", "#00000000", S(738, null)), OOc = Lt("editorActiveLineNumber.foreground", {
    dark: "#c6c6c6",
    light: "#0B216F",
    hcDark: Vb,
    hcLight: Vb
}, S(739, null), !1, S(740, null)), Cgg = Lt("editorLineNumber.activeForeground", OOc, S(741, null)), FOc = Lt("editorLineNumber.dimmedForeground", null, S(742, null)), BOc = Lt("editorRuler.foreground", {
    dark: "#5A5A5A",
    light: Ci.lightgrey,
    hcDark: Ci.white,
    hcLight: "#292929"
}, S(743, null)), Tgg = Lt("editorCodeLens.foreground", {
    dark: "#999999",
    light: "#919191",
    hcDark: "#999999",
    hcLight: "#292929"
}, S(744, null)), Egg = Lt("editorBracketMatch.background", {
    dark: "#0064001a",
    light: "#0064001a",
    hcDark: "#0064001a",
    hcLight: "#0000"
}, S(745, null)), xgg = Lt("editorBracketMatch.border", {
    dark: "#888",
    light: "#B9B9B9",
    hcDark: uc,
    hcLight: uc
}, S(746, null)), oQr = Lt("editorOverviewRuler.border", {
    dark: "#7f7f7f4d",
    light: "#7f7f7f4d",
    hcDark: "#7f7f7f4d",
    hcLight: "#666666"
}, S(747, null)), UOc = Lt("editorOverviewRuler.background", null, S(748, null)), Igg = Lt("editorGutter.background", Ph, S(749, null)), Agg = Lt("editorUnnecessaryCode.border", {
    dark: null,
    light: null,
    hcDark: Ci.fromHex("#fff").transparent(.8),
    hcLight: uc
}, S(750, null)), $Oc = Lt("editorUnnecessaryCode.opacity", {
    dark: Ci.fromHex("#000a"),
    light: Ci.fromHex("#0007"),
    hcDark: null,
    hcLight: null
}, S(751, null)), Rgg = Lt("editorGhostText.border", {
    dark: null,
    light: null,
    hcDark: Ci.fromHex("#fff").transparent(.8),
    hcLight: Ci.fromHex("#292929").transparent(.8)
}, S(752, null)), HOc = Lt("editorGhostText.foreground", {
    dark: Ci.fromHex("#ffffff56"),
    light: Ci.fromHex("#0007"),
    hcDark: null,
    hcLight: null
}, S(753, null)), Dgg = Lt("editorGhostText.background", null, S(754, null)), WOc = new Ci(new $s(0, 122, 204, .6)), aQr = Lt("editorOverviewRuler.rangeHighlightForeground", WOc, S(755, null), !0), _vi = Lt("editorOverviewRuler.errorForeground", {
    dark: new Ci(new $s(255, 18, 18, .7)),
    light: new Ci(new $s(255, 18, 18, .7)),
    hcDark: new Ci(new $s(255, 50, 50, 1)),
    hcLight: "#B5200D"
}, S(756, null)), GOc = Lt("editorOverviewRuler.warningForeground", {
    dark: c5,
    light: c5,
    hcDark: $2t,
    hcLight: $2t
}, S(757, null)), bvi = Lt("editorOverviewRuler.infoForeground", {
    dark: eU,
    light: eU,
    hcDark: H2t,
    hcLight: H2t
}, S(758, null)), cQr = Lt("editorBracketHighlight.foreground1", {
    dark: "#FFD700",
    light: "#0431FAFF",
    hcDark: "#FFD700",
    hcLight: "#0431FAFF"
}, S(759, null)), lQr = Lt("editorBracketHighlight.foreground2", {
    dark: "#DA70D6",
    light: "#319331FF",
    hcDark: "#DA70D6",
    hcLight: "#319331FF"
}, S(760, null)), uQr = Lt("editorBracketHighlight.foreground3", {
    dark: "#179FFF",
    light: "#7B3814FF",
    hcDark: "#87CEFA",
    hcLight: "#7B3814FF"
}, S(761, null)), dQr = Lt("editorBracketHighlight.foreground4", "#00000000", S(762, null)), hQr = Lt("editorBracketHighlight.foreground5", "#00000000", S(763, null)), pQr = Lt("editorBracketHighlight.foreground6", "#00000000", S(764, null)), VOc = Lt("editorBracketHighlight.unexpectedBracket.foreground", {
    dark: new Ci(new $s(255, 18, 18, .8)),
    light: new Ci(new $s(255, 18, 18, .8)),
    hcDark: new Ci(new $s(255, 50, 50, 1)),
    hcLight: "#B5200D"
}, S(765, null)), jOc = Lt("editorBracketPairGuide.background1", "#00000000", S(766, null)), qOc = Lt("editorBracketPairGuide.background2", "#00000000", S(767, null)), zOc = Lt("editorBracketPairGuide.background3", "#00000000", S(768, null)), KOc = Lt("editorBracketPairGuide.background4", "#00000000", S(769, null)), YOc = Lt("editorBracketPairGuide.background5", "#00000000", S(770, null)), XOc = Lt("editorBracketPairGuide.background6", "#00000000", S(771, null)), ZOc = Lt("editorBracketPairGuide.activeBackground1", "#00000000", S(772, null)), QOc = Lt("editorBracketPairGuide.activeBackground2", "#00000000", S(773, null)), JOc = Lt("editorBracketPairGuide.activeBackground3", "#00000000", S(774, null)), eFc = Lt("editorBracketPairGuide.activeBackground4", "#00000000", S(775, null)), tFc = Lt("editorBracketPairGuide.activeBackground5", "#00000000", S(776, null)), nFc = Lt("editorBracketPairGuide.activeBackground6", "#00000000", S(777, null)), Mgg = Lt("editorUnicodeHighlight.border", c5, S(778, null)), Pgg = Lt("editorUnicodeHighlight.background", ELc, S(779, null)), kI((e, t)=>{
    const n = e.getColor(Ph), i = e.getColor(fvi), r = i && !i.isTransparent() ? i : n;
    r && t.addRule(`.monaco-editor .inputarea.ime-input { background-color: ${r}; }`);
});

}
