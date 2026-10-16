import { S } from "./HVr.js";
import { Vb, cze, id, uc } from "./baseColors.js";
import { $s, Ci, Sm } from "./color.js";
import { NP } from "./colorUtils.js";
import { IBe, Wfi, sre } from "./miscColors.js";
import { rt } from "./nls.js";
import { Lt, fle, o2, pLc, pa } from "./qIc.js";
import { x } from "./tslib.es6.js";
var Ph, p1, Xpg, Zpg, Qpg, Jpg, _3, lze, Sgn, emg, tmg, ore, TLc, ELc, c5, $2t, nmg, eU, H2t, xLc, img, ILc, Lge, ALc, RLc, zXr, rmg, smg, kgn, DLc, are, MLc, PLc, omg, ABe, LLc, KXr, uze, Gfi, wgn, amg, Vfi, jfi, NLc, OLc, FLc, BLc, ULc, cmg, lmg, umg, dmg, hmg, pmg, Cgn, Tgn, vle, RK, Egn, mmg, gmg, fmg, YXr, XXr, vmg, _mg, bmg, $Lc, ymg, Smg, kmg, Nge, RBe, W2t, wmg, Cmg, HLc, WLc, ZXr, GLc, QXr, JXr, eZr, tZr, nZr, qfi, rpt, xgn, Tmg, Ign, Emg, zfi, xmg, spt, Img, Amg, Rmg, DBe, Agn, VLc, jLc, qLc;
export { $2t, $Lc, ABe, ALc, Agn, Amg, BLc, Cgn, Cmg, DBe, DLc, ELc, Egn, Emg, FLc, GLc, Gfi, H2t, HLc, ILc, Ign, Img, JXr, Jpg, KXr, LLc, Lge, MLc, NLc, Nge, OLc, PLc, Ph, QXr, Qpg, RBe, RK, RLc, Rmg, Sgn, Smg, TLc, Tgn, Tmg, ULc, VLc, Vfi, W2t, WLc, XXr, Xpg, YXr, ZXr, Zpg, _3, _mg, amg, are, bmg, c5, cmg, dmg, eU, eZr, emg, fmg, gmg, hmg, img, jLc, jfi, kgn, kmg, lmg, lze, mmg, nZr, nmg, omg, ore, p1, pmg, qLc, qfi, rmg, rpt, smg, spt, tZr, tmg, umg, uze, vle, vmg, wgn, wmg, xLc, xgn, xmg, ymg, zXr, zfi };
var __wakaru_opt_initialized = false;
export function opt() {
if (__wakaru_opt_initialized) return;
__wakaru_opt_initialized = true;
"use strict";
x(), rt(), Sm(), NP(), cze(), Wfi(), Ph = Lt("editor.background", {
    light: "#ffffff",
    dark: "#1E1E1E",
    hcDark: Ci.black,
    hcLight: Ci.white
}, S(2319, null)), p1 = Lt("editor.foreground", {
    light: "#333333",
    dark: "#BBBBBB",
    hcDark: Ci.white,
    hcLight: id
}, S(2320, null)), Xpg = Lt("editorStickyScroll.background", Ph, S(2321, null)), Zpg = Lt("editorStickyScrollHover.background", {
    dark: "#2A2D2E",
    light: "#F0F0F0",
    hcDark: null,
    hcLight: Ci.fromHex("#0F4A85").transparent(.1)
}, S(2322, null)), Qpg = Lt("editorStickyScroll.border", {
    dark: null,
    light: null,
    hcDark: uc,
    hcLight: uc
}, S(2323, null)), Jpg = Lt("editorStickyScroll.shadow", IBe, S(2324, null)), _3 = Lt("editorWidget.background", {
    dark: "#252526",
    light: "#F3F3F3",
    hcDark: "#0C141F",
    hcLight: Ci.white
}, S(2325, null)), lze = Lt("editorWidget.foreground", id, S(2326, null)), Sgn = Lt("editorWidget.border", {
    dark: "#454545",
    light: "#C8C8C8",
    hcDark: uc,
    hcLight: uc
}, S(2327, null)), emg = Lt("editorWidget.resizeBorder", null, S(2328, null)), tmg = Lt("editorError.background", null, S(2329, null), !0), ore = Lt("editorError.foreground", {
    dark: "#F14C4C",
    light: "#E51400",
    hcDark: "#F48771",
    hcLight: "#B5200D"
}, S(2330, null)), TLc = Lt("editorError.border", {
    dark: null,
    light: null,
    hcDark: Ci.fromHex("#E47777").transparent(.8),
    hcLight: "#B5200D"
}, S(2331, null)), ELc = Lt("editorWarning.background", null, S(2332, null), !0), c5 = Lt("editorWarning.foreground", {
    dark: "#CCA700",
    light: "#BF8803",
    hcDark: "#FFD370",
    hcLight: "#895503"
}, S(2333, null)), $2t = Lt("editorWarning.border", {
    dark: null,
    light: null,
    hcDark: Ci.fromHex("#FFCC00").transparent(.8),
    hcLight: Ci.fromHex("#FFCC00").transparent(.8)
}, S(2334, null)), nmg = Lt("editorInfo.background", null, S(2335, null), !0), eU = Lt("editorInfo.foreground", {
    dark: "#3794FF",
    light: "#1a85ff",
    hcDark: "#3794FF",
    hcLight: "#1a85ff"
}, S(2336, null)), H2t = Lt("editorInfo.border", {
    dark: null,
    light: null,
    hcDark: Ci.fromHex("#3794FF").transparent(.8),
    hcLight: "#292929"
}, S(2337, null)), xLc = Lt("editorHint.foreground", {
    dark: Ci.fromHex("#eeeeee").transparent(.7),
    light: "#6c6c6c",
    hcDark: null,
    hcLight: null
}, S(2338, null)), img = Lt("editorHint.border", {
    dark: null,
    light: null,
    hcDark: Ci.fromHex("#eeeeee").transparent(.8),
    hcLight: "#292929"
}, S(2339, null)), ILc = Lt("editorLink.activeForeground", {
    dark: "#4E94CE",
    light: Ci.blue,
    hcDark: Ci.cyan,
    hcLight: "#292929"
}, S(2340, null)), Lge = Lt("editor.selectionBackground", {
    light: "#ADD6FF",
    dark: "#264F78",
    hcDark: "#f3f518",
    hcLight: "#0F4A85"
}, S(2341, null)), ALc = Lt("editor.selectionForeground", {
    light: null,
    dark: null,
    hcDark: "#000000",
    hcLight: Ci.white
}, S(2342, null)), RLc = Lt("editor.inactiveSelectionBackground", {
    light: pa(Lge, .5),
    dark: pa(Lge, .5),
    hcDark: pa(Lge, .7),
    hcLight: pa(Lge, .5)
}, S(2343, null), !0), zXr = Lt("editor.selectionHighlightBackground", {
    light: pLc(Lge, Ph, .3, .6),
    dark: pLc(Lge, Ph, .3, .6),
    hcDark: null,
    hcLight: null
}, S(2344, null), !0), rmg = Lt("editor.selectionHighlightBorder", {
    light: null,
    dark: null,
    hcDark: Vb,
    hcLight: Vb
}, S(2345, null)), smg = Lt("editor.compositionBorder", {
    light: "#000000",
    dark: "#ffffff",
    hcLight: "#000000",
    hcDark: "#ffffff"
}, S(2346, null)), kgn = Lt("editor.findMatchBackground", {
    light: "#A8AC94",
    dark: "#515C6A",
    hcDark: null,
    hcLight: null
}, S(2347, null)), DLc = Lt("editor.findMatchForeground", null, S(2348, null)), are = Lt("editor.findMatchHighlightBackground", {
    light: "#EA5C0055",
    dark: "#EA5C0055",
    hcDark: null,
    hcLight: null
}, S(2349, null), !0), MLc = Lt("editor.findMatchHighlightForeground", null, S(2350, null), !0), PLc = Lt("editor.findRangeHighlightBackground", {
    dark: "#3a3d4166",
    light: "#b4b4b44d",
    hcDark: null,
    hcLight: null
}, S(2351, null), !0), omg = Lt("editor.findMatchBorder", {
    light: null,
    dark: null,
    hcDark: Vb,
    hcLight: Vb
}, S(2352, null)), ABe = Lt("editor.findMatchHighlightBorder", {
    light: null,
    dark: null,
    hcDark: Vb,
    hcLight: Vb
}, S(2353, null)), LLc = Lt("editor.findRangeHighlightBorder", {
    dark: null,
    light: null,
    hcDark: pa(Vb, .4),
    hcLight: pa(Vb, .4)
}, S(2354, null), !0), KXr = Lt("editor.hoverHighlightBackground", {
    light: "#ADD6FF26",
    dark: "#264f7840",
    hcDark: "#ADD6FF26",
    hcLight: null
}, S(2355, null), !0), uze = Lt("editorHoverWidget.background", _3, S(2356, null)), Gfi = Lt("editorHoverWidget.foreground", lze, S(2357, null)), wgn = Lt("editorHoverWidget.border", Sgn, S(2358, null)), amg = Lt("editorHoverWidget.statusBarBackground", {
    dark: fle(uze, .2),
    light: o2(uze, .05),
    hcDark: _3,
    hcLight: _3
}, S(2359, null)), Vfi = Lt("editorInlayHint.foreground", {
    dark: "#969696",
    light: "#969696",
    hcDark: Ci.white,
    hcLight: Ci.black
}, S(2360, null)), jfi = Lt("editorInlayHint.background", {
    dark: pa(sre, .1),
    light: pa(sre, .1),
    hcDark: pa(Ci.white, .1),
    hcLight: pa(sre, .1)
}, S(2361, null)), NLc = Lt("editorInlayHint.typeForeground", Vfi, S(2362, null)), OLc = Lt("editorInlayHint.typeBackground", jfi, S(2363, null)), FLc = Lt("editorInlayHint.parameterForeground", Vfi, S(2364, null)), BLc = Lt("editorInlayHint.parameterBackground", jfi, S(2365, null)), ULc = Lt("editorLightBulb.foreground", {
    dark: "#FFCC00",
    light: "#DDB100",
    hcDark: "#FFCC00",
    hcLight: "#007ACC"
}, S(2366, null)), cmg = Lt("editorLightBulbAutoFix.foreground", {
    dark: "#75BEFF",
    light: "#007ACC",
    hcDark: "#75BEFF",
    hcLight: "#007ACC"
}, S(2367, null)), lmg = Lt("editorLightBulbAi.foreground", ULc, S(2368, null)), umg = Lt("editor.snippetTabstopHighlightBackground", {
    dark: new Ci(new $s(124, 124, 124, .3)),
    light: new Ci(new $s(10, 50, 100, .2)),
    hcDark: new Ci(new $s(124, 124, 124, .3)),
    hcLight: new Ci(new $s(10, 50, 100, .2))
}, S(2369, null)), dmg = Lt("editor.snippetTabstopHighlightBorder", null, S(2370, null)), hmg = Lt("editor.snippetFinalTabstopHighlightBackground", null, S(2371, null)), pmg = Lt("editor.snippetFinalTabstopHighlightBorder", {
    dark: "#525252",
    light: new Ci(new $s(10, 50, 100, .5)),
    hcDark: "#525252",
    hcLight: "#292929"
}, S(2372, null)), Cgn = new Ci(new $s(155, 185, 85, .2)), Tgn = new Ci(new $s(255, 0, 0, .2)), vle = Lt("diffEditor.insertedTextBackground", {
    dark: "#9ccc2c33",
    light: "#9ccc2c40",
    hcDark: null,
    hcLight: null
}, S(2373, null), !0), RK = Lt("diffEditor.removedTextBackground", {
    dark: "#ff000033",
    light: "#ff000033",
    hcDark: null,
    hcLight: null
}, S(2374, null), !0), Egn = Lt("diffEditor.insertedLineBackground", {
    dark: Cgn,
    light: Cgn,
    hcDark: null,
    hcLight: null
}, S(2375, null), !0), mmg = Lt("diffEditor.removedLineBackground", {
    dark: Tgn,
    light: Tgn,
    hcDark: null,
    hcLight: null
}, S(2376, null), !0), gmg = Lt("diffEditorGutter.insertedLineBackground", null, S(2377, null)), fmg = Lt("diffEditorGutter.removedLineBackground", null, S(2378, null)), YXr = Lt("diffEditorOverview.insertedForeground", null, S(2379, null)), XXr = Lt("diffEditorOverview.removedForeground", null, S(2380, null)), vmg = Lt("diffEditor.insertedTextBorder", {
    dark: null,
    light: null,
    hcDark: "#33ff2eff",
    hcLight: "#374E06"
}, S(2381, null)), _mg = Lt("diffEditor.removedTextBorder", {
    dark: null,
    light: null,
    hcDark: "#FF008F",
    hcLight: "#AD0707"
}, S(2382, null)), bmg = Lt("diffEditor.border", {
    dark: null,
    light: null,
    hcDark: uc,
    hcLight: uc
}, S(2383, null)), $Lc = Lt("diffEditor.diagonalFill", {
    dark: "#cccccc33",
    light: "#22222233",
    hcDark: null,
    hcLight: null
}, S(2384, null)), ymg = Lt("diffEditor.unchangedRegionBackground", "sideBar.background", S(2385, null)), Smg = Lt("diffEditor.unchangedRegionForeground", "foreground", S(2386, null)), kmg = Lt("diffEditor.unchangedCodeBackground", {
    dark: "#74747429",
    light: "#b8b8b829",
    hcDark: null,
    hcLight: null
}, S(2387, null)), Nge = Lt("widget.shadow", {
    dark: pa(Ci.black, .36),
    light: pa(Ci.black, .16),
    hcDark: null,
    hcLight: null
}, S(2388, null)), RBe = Lt("widget.border", {
    dark: null,
    light: null,
    hcDark: uc,
    hcLight: uc
}, S(2389, null)), W2t = Lt("toolbar.hoverBackground", {
    dark: "#5a5d5e50",
    light: "#b8b8b850",
    hcDark: null,
    hcLight: null
}, S(2390, null)), wmg = Lt("toolbar.hoverOutline", {
    dark: null,
    light: null,
    hcDark: Vb,
    hcLight: Vb
}, S(2391, null)), Cmg = Lt("toolbar.activeBackground", {
    dark: fle(W2t, .1),
    light: o2(W2t, .1),
    hcDark: null,
    hcLight: null
}, S(2392, null)), HLc = Lt("breadcrumb.foreground", pa(id, .8), S(2393, null)), WLc = Lt("breadcrumb.background", Ph, S(2394, null)), ZXr = Lt("breadcrumb.focusForeground", {
    light: o2(id, .2),
    dark: fle(id, .1),
    hcDark: fle(id, .1),
    hcLight: fle(id, .1)
}, S(2395, null)), GLc = Lt("breadcrumb.activeSelectionForeground", {
    light: o2(id, .2),
    dark: fle(id, .1),
    hcDark: fle(id, .1),
    hcLight: fle(id, .1)
}, S(2396, null)), QXr = Lt("breadcrumbPicker.background", _3, S(2397, null)), JXr = .5, eZr = Ci.fromHex("#40C8AE").transparent(JXr), tZr = Ci.fromHex("#40A6FF").transparent(JXr), nZr = Ci.fromHex("#606060").transparent(.4), qfi = .4, rpt = 1, xgn = Lt("merge.currentHeaderBackground", {
    dark: eZr,
    light: eZr,
    hcDark: null,
    hcLight: null
}, S(2398, null), !0), Tmg = Lt("merge.currentContentBackground", pa(xgn, qfi), S(2399, null), !0), Ign = Lt("merge.incomingHeaderBackground", {
    dark: tZr,
    light: tZr,
    hcDark: null,
    hcLight: null
}, S(2400, null), !0), Emg = Lt("merge.incomingContentBackground", pa(Ign, qfi), S(2401, null), !0), zfi = Lt("merge.commonHeaderBackground", {
    dark: nZr,
    light: nZr,
    hcDark: null,
    hcLight: null
}, S(2402, null), !0), xmg = Lt("merge.commonContentBackground", pa(zfi, qfi), S(2403, null), !0), spt = Lt("merge.border", {
    dark: null,
    light: null,
    hcDark: "#C3DF6F",
    hcLight: "#007ACC"
}, S(2404, null)), Img = Lt("editorOverviewRuler.currentContentForeground", {
    dark: pa(xgn, rpt),
    light: pa(xgn, rpt),
    hcDark: spt,
    hcLight: spt
}, S(2405, null)), Amg = Lt("editorOverviewRuler.incomingContentForeground", {
    dark: pa(Ign, rpt),
    light: pa(Ign, rpt),
    hcDark: spt,
    hcLight: spt
}, S(2406, null)), Rmg = Lt("editorOverviewRuler.commonContentForeground", {
    dark: pa(zfi, rpt),
    light: pa(zfi, rpt),
    hcDark: spt,
    hcLight: spt
}, S(2407, null)), DBe = Lt("editorOverviewRuler.findMatchForeground", {
    dark: "#d186167e",
    light: "#d186167e",
    hcDark: "#AB5A00",
    hcLight: "#AB5A00"
}, S(2408, null), !0), Agn = Lt("editorOverviewRuler.selectionHighlightForeground", "#A0A0A0CC", S(2409, null), !0), VLc = Lt("problemsErrorIcon.foreground", ore, S(2410, null)), jLc = Lt("problemsWarningIcon.foreground", c5, S(2411, null)), qLc = Lt("problemsInfoIcon.foreground", eU, S(2412, null));

}
