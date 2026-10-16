import { Ad, Ck, F9t, Qde } from "./baseColors.js";
import { _b, ls } from "./color.js";
import { Ap } from "./colorRegistry.js";
import { AUo, EQ, G6d, K6d, V6d, Y6d, cri, jAe, jbt, q6d, z6d } from "./editorColors.js";
import { $gn, BUo, C4d, E4d, FUo, Gbt, Ggn, Hgn, I4d, S4d, T4d, UUo, Wgn, _4d, _ri, a4d, b4d, bri, c4d, d4d, f4d, g4d, h4d, jUo, jgn, k4d, l4d, m4d, nHe, o4d, p4d, q9t, qbt, s4d, u4d, v4d, vri, w4d, x4d, y4d, yri } from "./inputColors.js";
import { $4d, $Uo, $wr, B4d, D4d, Dtt, G4d, H4d, L4d, M4d, N4d, Ntt, O4d, P4d, R4d, Sri, U4d, Uwr, Vve, W4d, j4d, jwr, kri, qgn } from "./listColors.js";
import { GUo, KUo, VUo, WUo, YUo, qUo, zUo } from "./menuColors.js";
import { Att, B9t, E6d, U9t, ari, j9t, tHe } from "./miscColors.js";
import { Vgn, Wwr, ZUo, zgn } from "./quickpickColors.js";
import { E } from "./tslib.es6.js";
import { Dgn, Xa } from "./ze.js";
var yoi, Wyt, cvn, yHe, CLy, dzd, hzd, rRe, pzd, bqo, yqo, MBt, Sqo, kqo;
export { CLy, MBt, Sqo, Wyt, bqo, cvn, dzd, hzd, kqo, pzd, rRe, yHe, yoi, yqo };
var __wakaru_CM_initialized = false;
export function CM() {
if (__wakaru_CM_initialized) return;
__wakaru_CM_initialized = true;
"use strict";
E(), Ap(), _b(), yoi = {
    keybindingLabelBackground: Xa(T4d),
    keybindingLabelForeground: Xa(E4d),
    keybindingLabelBorder: Xa(I4d),
    keybindingLabelBottomBorder: Xa(x4d),
    keybindingLabelShadow: Xa(jAe)
}, Wyt = {
    buttonForeground: Xa(qbt),
    buttonSeparator: Xa(g4d),
    buttonBackground: Xa(nHe),
    buttonHoverBackground: Xa(f4d),
    buttonSecondaryForeground: Xa(FUo),
    buttonSecondaryBackground: Xa(yri),
    buttonSecondaryHoverBackground: Xa(_4d),
    buttonBorder: Xa(v4d)
}, cvn = {
    progressBarBackground: Xa(E6d)
}, yHe = {
    inputActiveOptionBorder: Xa($gn),
    inputActiveOptionForeground: Xa(Hgn),
    inputActiveOptionBackground: Xa(q9t)
}, CLy = {
    activeForeground: Xa(Ggn),
    activeBackground: Xa(b4d),
    activeBorder: Xa(y4d),
    inactiveForeground: Xa(S4d),
    inactiveBackground: Xa(k4d),
    inactiveBorder: Xa(w4d),
    inactiveHoverBackground: Xa(C4d)
}, dzd = {
    checkboxBackground: Xa(BUo),
    checkboxBorder: Xa(jUo),
    checkboxForeground: Xa(UUo)
}, hzd = {
    dialogBackground: Xa(EQ),
    dialogForeground: Xa(jbt),
    dialogShadow: Xa(jAe),
    dialogBorder: Xa(Ad),
    errorIconForeground: Xa(V6d),
    warningIconForeground: Xa(K6d),
    infoIconForeground: Xa(Y6d),
    textLinkForeground: Xa(F9t)
}, rRe = {
    inputBackground: Xa(jgn),
    inputForeground: Xa(vri),
    inputBorder: Xa(Gbt),
    inputValidationInfoBorder: Xa(a4d),
    inputValidationInfoBackground: Xa(s4d),
    inputValidationInfoForeground: Xa(o4d),
    inputValidationWarningBorder: Xa(u4d),
    inputValidationWarningBackground: Xa(l4d),
    inputValidationWarningForeground: Xa(c4d),
    inputValidationErrorBorder: Xa(p4d),
    inputValidationErrorBackground: Xa(d4d),
    inputValidationErrorForeground: Xa(h4d)
}, pzd = {
    listFilterWidgetBackground: Xa(B4d),
    listFilterWidgetOutline: Xa(U4d),
    listFilterWidgetNoMatchesOutline: Xa(j4d),
    listFilterWidgetShadow: Xa($4d),
    inputBoxStyles: rRe,
    toggleStyles: yHe
}, bqo = {
    badgeBackground: Xa(Att),
    badgeForeground: Xa(ari),
    badgeBorder: Xa(Ad)
}, yqo = {
    breadcrumbsBackground: Xa(q6d),
    breadcrumbsForeground: Xa(G6d),
    breadcrumbsHoverForeground: Xa(AUo),
    breadcrumbsFocusForeground: Xa(AUo),
    breadcrumbsFocusAndSelectionForeground: Xa(z6d)
}, MBt = {
    listBackground: void 0,
    listInactiveFocusForeground: void 0,
    listFocusBackground: Xa(Uwr),
    listFocusForeground: Xa(jwr),
    listFocusOutline: Xa($wr),
    listActiveSelectionBackground: Xa(Vve),
    listActiveSelectionForeground: Xa(Dtt),
    listActiveSelectionIconForeground: Xa($Uo),
    listFocusAndSelectionOutline: Xa(R4d),
    listFocusAndSelectionBackground: Xa(Vve),
    listFocusAndSelectionForeground: Xa(Dtt),
    listInactiveSelectionBackground: Xa(qgn),
    listInactiveSelectionIconForeground: Xa(M4d),
    listInactiveSelectionForeground: Xa(P4d),
    listInactiveFocusBackground: Xa(D4d),
    listInactiveFocusOutline: Xa(N4d),
    listHoverBackground: Xa(Ntt),
    listHoverForeground: Xa(Sri),
    listDropOverBackground: Xa(L4d),
    listDropBetweenBackground: Xa(O4d),
    listSelectionOutline: Xa(Ck),
    listHoverOutline: Xa(Ck),
    treeIndentGuidesStroke: Xa(kri),
    treeInactiveIndentGuidesStroke: Xa(H4d),
    treeStickyScrollBackground: void 0,
    treeStickyScrollBorder: void 0,
    treeStickyScrollShadow: Xa(tHe),
    tableColumnsBorder: Xa(W4d),
    tableOddRowsBackgroundColor: Xa(G4d)
}, Sqo = {
    selectBackground: Xa(Wgn),
    selectListBackground: Xa(m4d),
    selectForeground: Xa(_ri),
    decoratorRightForeground: Xa(ZUo),
    selectBorder: Xa(bri),
    focusBorder: Xa(Qde),
    listFocusBackground: Xa(Vgn),
    listInactiveSelectionIconForeground: Xa(Wwr),
    listFocusForeground: Xa(zgn),
    listFocusOutline: Dgn(Ck, ls.transparent.toString()),
    listHoverBackground: Xa(Ntt),
    listHoverForeground: Xa(Sri),
    listHoverOutline: Xa(Ck),
    selectListBorder: Xa(cri),
    listBackground: void 0,
    listActiveSelectionBackground: void 0,
    listActiveSelectionForeground: void 0,
    listActiveSelectionIconForeground: void 0,
    listFocusAndSelectionBackground: void 0,
    listDropOverBackground: void 0,
    listDropBetweenBackground: void 0,
    listInactiveSelectionBackground: void 0,
    listInactiveSelectionForeground: void 0,
    listInactiveFocusBackground: void 0,
    listInactiveFocusOutline: void 0,
    listSelectionOutline: void 0,
    listFocusAndSelectionForeground: void 0,
    listFocusAndSelectionOutline: void 0,
    listInactiveFocusForeground: void 0,
    tableColumnsBorder: void 0,
    tableOddRowsBackgroundColor: void 0,
    treeIndentGuidesStroke: void 0,
    treeInactiveIndentGuidesStroke: void 0,
    treeStickyScrollBackground: void 0,
    treeStickyScrollBorder: void 0,
    treeStickyScrollShadow: void 0
}, kqo = {
    shadowColor: Xa(jAe),
    borderColor: Xa(WUo),
    foregroundColor: Xa(GUo),
    backgroundColor: Xa(qUo),
    selectionForegroundColor: Xa(zUo),
    selectionBackgroundColor: Xa(VUo),
    selectionBorderColor: Xa(KUo),
    separatorColor: Xa(YUo),
    scrollbarShadow: Xa(tHe),
    scrollbarSliderBackground: Xa(B9t),
    scrollbarSliderHoverBackground: Xa(U9t),
    scrollbarSliderActiveBackground: Xa(j9t)
};

}
