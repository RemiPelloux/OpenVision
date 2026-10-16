import { D } from "./Iwo.js";
import { Ad, Ck, Y_, xtt } from "./baseColors.js";
import { _b, la, ls } from "./color.js";
import { iB } from "./colorUtils.js";
import { Att, lri, tHe } from "./miscColors.js";
import { Bt } from "./nls.js";
import { E } from "./tslib.es6.js";
import { S6d, UAe, iu, k7, mn } from "./ze.js";
var ew, MD, aRy, lRy, cRy, uRy, EQ, jbt, cri, dRy, hRy, $9t, I6d, x6d, tne, Fgn, pRy, lwe, Bgn, A6d, mRy, R6d, b5e, P6d, M6d, EUo, gRy, fRy, Pwr, D6d, cwe, N6d, L6d, vRy, Rtt, O6d, IUo, uri, xUo, Mwr, _Ry, Dwr, Nwr, F6d, B6d, U6d, j6d, $6d, bRy, yRy, SRy, kRy, wRy, CRy, Lwr, Owr, $bt, Ptt, dri, TRy, ERy, IRy, H6d, W6d, xRy, ARy, RRy, PRy, MRy, DRy, NRy, jAe, Hbt, hri, LRy, ORy, G6d, q6d, AUo, z6d, RUo, PUo, MUo, DUo, NUo, Fwr, H9t, pri, FRy, mri, BRy, Bwr, URy, W9t, jRy, $Ry, HRy, Mtt, gri, V6d, K6d, Y6d;
export { $6d, $9t, $Ry, $bt, A6d, ARy, AUo, B6d, BRy, Bgn, Bwr, CRy, D6d, DRy, DUo, Dwr, EQ, ERy, EUo, F6d, FRy, Fgn, Fwr, G6d, H6d, H9t, HRy, Hbt, I6d, IRy, IUo, K6d, L6d, LRy, Lwr, M6d, MD, MRy, MUo, Mtt, Mwr, N6d, NRy, NUo, Nwr, O6d, ORy, Owr, P6d, PRy, PUo, Ptt, Pwr, R6d, RRy, RUo, Rtt, SRy, TRy, U6d, URy, V6d, W6d, W9t, Y6d, _Ry, aRy, b5e, bRy, cRy, cri, cwe, dRy, dri, ew, fRy, gRy, gri, hRy, hri, j6d, jAe, jRy, jbt, kRy, lRy, lwe, mRy, mri, pRy, pri, q6d, tne, uRy, uri, vRy, wRy, x6d, xRy, xUo, yRy, z6d };
var __wakaru_Wbt_initialized = false;
export function Wbt() {
if (__wakaru_Wbt_initialized) return;
__wakaru_Wbt_initialized = true;
"use strict";
E(), Bt(), _b(), iB(), xtt(), lri(), ew = mn("editor.background", {
    light: "#ffffff",
    dark: "#1E1E1E",
    hcDark: ls.black,
    hcLight: ls.white
}, D(2319, null)), MD = mn("editor.foreground", {
    light: "#333333",
    dark: "#BBBBBB",
    hcDark: ls.white,
    hcLight: Y_
}, D(2320, null)), aRy = mn("editorStickyScroll.background", ew, D(2321, null)), lRy = mn("editorStickyScrollHover.background", {
    dark: "#2A2D2E",
    light: "#F0F0F0",
    hcDark: null,
    hcLight: ls.fromHex("#0F4A85").transparent(.1)
}, D(2322, null)), cRy = mn("editorStickyScroll.border", {
    dark: null,
    light: null,
    hcDark: Ad,
    hcLight: Ad
}, D(2323, null)), uRy = mn("editorStickyScroll.shadow", tHe, D(2324, null)), EQ = mn("editorWidget.background", {
    dark: "#252526",
    light: "#F3F3F3",
    hcDark: "#0C141F",
    hcLight: ls.white
}, D(2325, null)), jbt = mn("editorWidget.foreground", Y_, D(2326, null)), cri = mn("editorWidget.border", {
    dark: "#454545",
    light: "#C8C8C8",
    hcDark: Ad,
    hcLight: Ad
}, D(2327, null)), dRy = mn("editorWidget.resizeBorder", null, D(2328, null)), hRy = mn("editorError.background", null, D(2329, null), !0), $9t = mn("editorError.foreground", {
    dark: "#F14C4C",
    light: "#E51400",
    hcDark: "#F48771",
    hcLight: "#B5200D"
}, D(2330, null)), I6d = mn("editorError.border", {
    dark: null,
    light: null,
    hcDark: ls.fromHex("#E47777").transparent(.8),
    hcLight: "#B5200D"
}, D(2331, null)), x6d = mn("editorWarning.background", null, D(2332, null), !0), tne = mn("editorWarning.foreground", {
    dark: "#CCA700",
    light: "#BF8803",
    hcDark: "#FFD370",
    hcLight: "#895503"
}, D(2333, null)), Fgn = mn("editorWarning.border", {
    dark: null,
    light: null,
    hcDark: ls.fromHex("#FFCC00").transparent(.8),
    hcLight: ls.fromHex("#FFCC00").transparent(.8)
}, D(2334, null)), pRy = mn("editorInfo.background", null, D(2335, null), !0), lwe = mn("editorInfo.foreground", {
    dark: "#3794FF",
    light: "#1a85ff",
    hcDark: "#3794FF",
    hcLight: "#1a85ff"
}, D(2336, null)), Bgn = mn("editorInfo.border", {
    dark: null,
    light: null,
    hcDark: ls.fromHex("#3794FF").transparent(.8),
    hcLight: "#292929"
}, D(2337, null)), A6d = mn("editorHint.foreground", {
    dark: ls.fromHex("#eeeeee").transparent(.7),
    light: "#6c6c6c",
    hcDark: null,
    hcLight: null
}, D(2338, null)), mRy = mn("editorHint.border", {
    dark: null,
    light: null,
    hcDark: ls.fromHex("#eeeeee").transparent(.8),
    hcLight: "#292929"
}, D(2339, null)), R6d = mn("editorLink.activeForeground", {
    dark: "#4E94CE",
    light: ls.blue,
    hcDark: ls.cyan,
    hcLight: "#292929"
}, D(2340, null)), b5e = mn("editor.selectionBackground", {
    light: "#ADD6FF",
    dark: "#264F78",
    hcDark: "#f3f518",
    hcLight: "#0F4A85"
}, D(2341, null)), P6d = mn("editor.selectionForeground", {
    light: null,
    dark: null,
    hcDark: "#000000",
    hcLight: ls.white
}, D(2342, null)), M6d = mn("editor.inactiveSelectionBackground", {
    light: iu(b5e, .5),
    dark: iu(b5e, .5),
    hcDark: iu(b5e, .7),
    hcLight: iu(b5e, .5)
}, D(2343, null), !0), EUo = mn("editor.selectionHighlightBackground", {
    light: S6d(b5e, ew, .3, .6),
    dark: S6d(b5e, ew, .3, .6),
    hcDark: null,
    hcLight: null
}, D(2344, null), !0), gRy = mn("editor.selectionHighlightBorder", {
    light: null,
    dark: null,
    hcDark: Ck,
    hcLight: Ck
}, D(2345, null)), fRy = mn("editor.compositionBorder", {
    light: "#000000",
    dark: "#ffffff",
    hcLight: "#000000",
    hcDark: "#ffffff"
}, D(2346, null)), Pwr = mn("editor.findMatchBackground", {
    light: "#A8AC94",
    dark: "#515C6A",
    hcDark: null,
    hcLight: null
}, D(2347, null)), D6d = mn("editor.findMatchForeground", null, D(2348, null)), cwe = mn("editor.findMatchHighlightBackground", {
    light: "#EA5C0055",
    dark: "#EA5C0055",
    hcDark: null,
    hcLight: null
}, D(2349, null), !0), N6d = mn("editor.findMatchHighlightForeground", null, D(2350, null), !0), L6d = mn("editor.findRangeHighlightBackground", {
    dark: "#3a3d4166",
    light: "#b4b4b44d",
    hcDark: null,
    hcLight: null
}, D(2351, null), !0), vRy = mn("editor.findMatchBorder", {
    light: null,
    dark: null,
    hcDark: Ck,
    hcLight: Ck
}, D(2352, null)), Rtt = mn("editor.findMatchHighlightBorder", {
    light: null,
    dark: null,
    hcDark: Ck,
    hcLight: Ck
}, D(2353, null)), O6d = mn("editor.findRangeHighlightBorder", {
    dark: null,
    light: null,
    hcDark: iu(Ck, .4),
    hcLight: iu(Ck, .4)
}, D(2354, null), !0), IUo = mn("editor.hoverHighlightBackground", {
    light: "#ADD6FF26",
    dark: "#264f7840",
    hcDark: "#ADD6FF26",
    hcLight: null
}, D(2355, null), !0), uri = mn("editorHoverWidget.background", EQ, D(2356, null)), xUo = mn("editorHoverWidget.foreground", jbt, D(2357, null)), Mwr = mn("editorHoverWidget.border", cri, D(2358, null)), _Ry = mn("editorHoverWidget.statusBarBackground", {
    dark: UAe(uri, .2),
    light: k7(uri, .05),
    hcDark: EQ,
    hcLight: EQ
}, D(2359, null)), Dwr = mn("editorInlayHint.foreground", {
    dark: "#969696",
    light: "#969696",
    hcDark: ls.white,
    hcLight: ls.black
}, D(2360, null)), Nwr = mn("editorInlayHint.background", {
    dark: iu(Att, .1),
    light: iu(Att, .1),
    hcDark: iu(ls.white, .1),
    hcLight: iu(Att, .1)
}, D(2361, null)), F6d = mn("editorInlayHint.typeForeground", Dwr, D(2362, null)), B6d = mn("editorInlayHint.typeBackground", Nwr, D(2363, null)), U6d = mn("editorInlayHint.parameterForeground", Dwr, D(2364, null)), j6d = mn("editorInlayHint.parameterBackground", Nwr, D(2365, null)), $6d = mn("editorLightBulb.foreground", {
    dark: "#FFCC00",
    light: "#DDB100",
    hcDark: "#FFCC00",
    hcLight: "#007ACC"
}, D(2366, null)), bRy = mn("editorLightBulbAutoFix.foreground", {
    dark: "#75BEFF",
    light: "#007ACC",
    hcDark: "#75BEFF",
    hcLight: "#007ACC"
}, D(2367, null)), yRy = mn("editorLightBulbAi.foreground", $6d, D(2368, null)), SRy = mn("editor.snippetTabstopHighlightBackground", {
    dark: new ls(new la(124, 124, 124, .3)),
    light: new ls(new la(10, 50, 100, .2)),
    hcDark: new ls(new la(124, 124, 124, .3)),
    hcLight: new ls(new la(10, 50, 100, .2))
}, D(2369, null)), kRy = mn("editor.snippetTabstopHighlightBorder", null, D(2370, null)), wRy = mn("editor.snippetFinalTabstopHighlightBackground", null, D(2371, null)), CRy = mn("editor.snippetFinalTabstopHighlightBorder", {
    dark: "#525252",
    light: new ls(new la(10, 50, 100, .5)),
    hcDark: "#525252",
    hcLight: "#292929"
}, D(2372, null)), Lwr = new ls(new la(155, 185, 85, .2)), Owr = new ls(new la(255, 0, 0, .2)), $bt = mn("diffEditor.insertedTextBackground", {
    dark: "#9ccc2c33",
    light: "#9ccc2c40",
    hcDark: null,
    hcLight: null
}, D(2373, null), !0), Ptt = mn("diffEditor.removedTextBackground", {
    dark: "#ff000033",
    light: "#ff000033",
    hcDark: null,
    hcLight: null
}, D(2374, null), !0), dri = mn("diffEditor.insertedLineBackground", {
    dark: Lwr,
    light: Lwr,
    hcDark: null,
    hcLight: null
}, D(2375, null), !0), TRy = mn("diffEditor.removedLineBackground", {
    dark: Owr,
    light: Owr,
    hcDark: null,
    hcLight: null
}, D(2376, null), !0), ERy = mn("diffEditorGutter.insertedLineBackground", null, D(2377, null)), IRy = mn("diffEditorGutter.removedLineBackground", null, D(2378, null)), H6d = mn("diffEditorOverview.insertedForeground", null, D(2379, null)), W6d = mn("diffEditorOverview.removedForeground", null, D(2380, null)), xRy = mn("diffEditor.insertedTextBorder", {
    dark: null,
    light: null,
    hcDark: "#33ff2eff",
    hcLight: "#374E06"
}, D(2381, null)), ARy = mn("diffEditor.removedTextBorder", {
    dark: null,
    light: null,
    hcDark: "#FF008F",
    hcLight: "#AD0707"
}, D(2382, null)), RRy = mn("diffEditor.border", {
    dark: null,
    light: null,
    hcDark: Ad,
    hcLight: Ad
}, D(2383, null)), PRy = mn("diffEditor.diagonalFill", {
    dark: "#cccccc33",
    light: "#22222233",
    hcDark: null,
    hcLight: null
}, D(2384, null)), MRy = mn("diffEditor.unchangedRegionBackground", "sideBar.background", D(2385, null)), DRy = mn("diffEditor.unchangedRegionForeground", "foreground", D(2386, null)), NRy = mn("diffEditor.unchangedCodeBackground", {
    dark: "#74747429",
    light: "#b8b8b829",
    hcDark: null,
    hcLight: null
}, D(2387, null)), jAe = mn("widget.shadow", {
    dark: iu(ls.black, .36),
    light: iu(ls.black, .16),
    hcDark: null,
    hcLight: null
}, D(2388, null)), Hbt = mn("widget.border", {
    dark: null,
    light: null,
    hcDark: Ad,
    hcLight: Ad
}, D(2389, null)), hri = mn("toolbar.hoverBackground", {
    dark: "#5a5d5e50",
    light: "#b8b8b850",
    hcDark: null,
    hcLight: null
}, D(2390, null)), LRy = mn("toolbar.hoverOutline", {
    dark: null,
    light: null,
    hcDark: Ck,
    hcLight: Ck
}, D(2391, null)), ORy = mn("toolbar.activeBackground", {
    dark: UAe(hri, .1),
    light: k7(hri, .1),
    hcDark: null,
    hcLight: null
}, D(2392, null)), G6d = mn("breadcrumb.foreground", iu(Y_, .8), D(2393, null)), q6d = mn("breadcrumb.background", ew, D(2394, null)), AUo = mn("breadcrumb.focusForeground", {
    light: k7(Y_, .2),
    dark: UAe(Y_, .1),
    hcDark: UAe(Y_, .1),
    hcLight: UAe(Y_, .1)
}, D(2395, null)), z6d = mn("breadcrumb.activeSelectionForeground", {
    light: k7(Y_, .2),
    dark: UAe(Y_, .1),
    hcDark: UAe(Y_, .1),
    hcLight: UAe(Y_, .1)
}, D(2396, null)), RUo = mn("breadcrumbPicker.background", EQ, D(2397, null)), PUo = .5, MUo = ls.fromHex("#40C8AE").transparent(PUo), DUo = ls.fromHex("#40A6FF").transparent(PUo), NUo = ls.fromHex("#606060").transparent(.4), Fwr = .4, H9t = 1, pri = mn("merge.currentHeaderBackground", {
    dark: MUo,
    light: MUo,
    hcDark: null,
    hcLight: null
}, D(2398, null), !0), FRy = mn("merge.currentContentBackground", iu(pri, Fwr), D(2399, null), !0), mri = mn("merge.incomingHeaderBackground", {
    dark: DUo,
    light: DUo,
    hcDark: null,
    hcLight: null
}, D(2400, null), !0), BRy = mn("merge.incomingContentBackground", iu(mri, Fwr), D(2401, null), !0), Bwr = mn("merge.commonHeaderBackground", {
    dark: NUo,
    light: NUo,
    hcDark: null,
    hcLight: null
}, D(2402, null), !0), URy = mn("merge.commonContentBackground", iu(Bwr, Fwr), D(2403, null), !0), W9t = mn("merge.border", {
    dark: null,
    light: null,
    hcDark: "#C3DF6F",
    hcLight: "#007ACC"
}, D(2404, null)), jRy = mn("editorOverviewRuler.currentContentForeground", {
    dark: iu(pri, H9t),
    light: iu(pri, H9t),
    hcDark: W9t,
    hcLight: W9t
}, D(2405, null)), $Ry = mn("editorOverviewRuler.incomingContentForeground", {
    dark: iu(mri, H9t),
    light: iu(mri, H9t),
    hcDark: W9t,
    hcLight: W9t
}, D(2406, null)), HRy = mn("editorOverviewRuler.commonContentForeground", {
    dark: iu(Bwr, H9t),
    light: iu(Bwr, H9t),
    hcDark: W9t,
    hcLight: W9t
}, D(2407, null)), Mtt = mn("editorOverviewRuler.findMatchForeground", {
    dark: "#d186167e",
    light: "#d186167e",
    hcDark: "#AB5A00",
    hcLight: "#AB5A00"
}, D(2408, null), !0), gri = mn("editorOverviewRuler.selectionHighlightForeground", "#A0A0A0CC", D(2409, null), !0), V6d = mn("problemsErrorIcon.foreground", $9t, D(2410, null)), K6d = mn("problemsWarningIcon.foreground", tne, D(2411, null)), Y6d = mn("problemsInfoIcon.foreground", lwe, D(2412, null));

}
