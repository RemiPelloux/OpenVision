import { Vb, rre, tN, uc } from "./baseColors.js";
import { Ci, Sm } from "./color.js";
import { tc } from "./colorRegistry.js";
import { GLc, HLc, Nge, Sgn, VLc, WLc, ZXr, _3, jLc, lze, qLc } from "./editorColors.js";
import { Dgn, MBe, SNc, _Nc, _le, aNc, aZr, apt, bNc, cNc, cZr, cpt, dNc, dZr, dze, fNc, gNc, hNc, hze, j2t, kNc, lNc, lZr, lpt, mNc, oNc, oZr, pJ, pNc, pze, q2t, rNc, rZr, sNc, sZr, uNc, uZr, upt, uwe, vNc, yNc } from "./inputColors.js";
import { CNc, DK, DNc, ENc, FNc, K2t, Kfi, MNc, ONc, PNc, Pgn, RNc, TNc, VAe, Y2t, dpt, gZr, hZr, jAe, mZr, oW, pZr, xNc, z2t } from "./listColors.js";
import { $Nc, GNc, HNc, UNc, VNc, WNc, jNc } from "./menuColors.js";
import { IBe, WAe, ipt, kLc, npt, sre, tpt } from "./miscColors.js";
import { Is, ept } from "./qIc.js";
import { X2t, Yfi, Z2t, bZr } from "./quickpickColors.js";
import { x } from "./tslib.es6.js";
var dKe, Ix, Bwe, z7, ISg, OFt, F7c, nN, B7c, Jge, fis, umt, Uwe, vis;
export { B7c, Bwe, F7c, ISg, Ix, Jge, OFt, Uwe, dKe, fis, nN, umt, vis, z7 };
var __wakaru_sf_initialized = false;
export function sf() {
if (__wakaru_sf_initialized) return;
__wakaru_sf_initialized = true;
"use strict";
x(), tc(), Sm(), dKe = {
    keybindingLabelBackground: Is(bNc),
    keybindingLabelForeground: Is(yNc),
    keybindingLabelBorder: Is(SNc),
    keybindingLabelBottomBorder: Is(kNc),
    keybindingLabelShadow: Is(Nge)
}, Ix = {
    buttonForeground: Is(_le),
    buttonSeparator: Is(aZr),
    buttonBackground: Is(pJ),
    buttonHoverBackground: Is(upt),
    buttonSecondaryForeground: Is(cZr),
    buttonSecondaryBackground: Is(j2t),
    buttonSecondaryHoverBackground: Is(hNc),
    buttonBorder: Is(dNc)
}, Bwe = {
    progressBarBackground: Is(kLc)
}, z7 = {
    inputActiveOptionBorder: Is(apt),
    inputActiveOptionForeground: Is(cpt),
    inputActiveOptionBackground: Is(hze)
}, ISg = {
    activeForeground: Is(q2t),
    activeBackground: Is(pNc),
    activeBorder: Is(mNc),
    inactiveForeground: Is(gNc),
    inactiveBackground: Is(fNc),
    inactiveBorder: Is(vNc),
    inactiveHoverBackground: Is(_Nc)
}, OFt = {
    checkboxBackground: Is(lZr),
    checkboxBorder: Is(dZr),
    checkboxForeground: Is(uZr)
}, F7c = {
    dialogBackground: Is(_3),
    dialogForeground: Is(lze),
    dialogShadow: Is(Nge),
    dialogBorder: Is(uc),
    errorIconForeground: Is(VLc),
    warningIconForeground: Is(jLc),
    infoIconForeground: Is(qLc),
    textLinkForeground: Is(rre)
}, nN = {
    inputBackground: Is(MBe),
    inputForeground: Is(dze),
    inputBorder: Is(uwe),
    inputValidationInfoBorder: Is(oNc),
    inputValidationInfoBackground: Is(rNc),
    inputValidationInfoForeground: Is(sNc),
    inputValidationWarningBorder: Is(lNc),
    inputValidationWarningBackground: Is(aNc),
    inputValidationWarningForeground: Is(cNc),
    inputValidationErrorBorder: Is(oZr),
    inputValidationErrorBackground: Is(rZr),
    inputValidationErrorForeground: Is(sZr)
}, B7c = {
    listFilterWidgetBackground: Is(RNc),
    listFilterWidgetOutline: Is(DNc),
    listFilterWidgetNoMatchesOutline: Is(MNc),
    listFilterWidgetShadow: Is(PNc),
    inputBoxStyles: nN,
    toggleStyles: z7
}, Jge = {
    badgeBackground: Is(sre),
    badgeForeground: Is(WAe),
    badgeBorder: Is(uc)
}, fis = {
    breadcrumbsBackground: Is(WLc),
    breadcrumbsForeground: Is(HLc),
    breadcrumbsHoverForeground: Is(ZXr),
    breadcrumbsFocusForeground: Is(ZXr),
    breadcrumbsFocusAndSelectionForeground: Is(GLc)
}, umt = {
    listBackground: void 0,
    listInactiveFocusForeground: void 0,
    listFocusBackground: Is(dpt),
    listFocusForeground: Is(z2t),
    listFocusOutline: Is(K2t),
    listActiveSelectionBackground: Is(DK),
    listActiveSelectionForeground: Is(VAe),
    listActiveSelectionIconForeground: Is(hZr),
    listFocusAndSelectionOutline: Is(CNc),
    listFocusAndSelectionBackground: Is(DK),
    listFocusAndSelectionForeground: Is(VAe),
    listInactiveSelectionBackground: Is(oW),
    listInactiveSelectionIconForeground: Is(TNc),
    listInactiveSelectionForeground: Is(pZr),
    listInactiveFocusBackground: Is(mZr),
    listInactiveFocusOutline: Is(ENc),
    listHoverBackground: Is(jAe),
    listHoverForeground: Is(Y2t),
    listDropOverBackground: Is(gZr),
    listDropBetweenBackground: Is(xNc),
    listSelectionOutline: Is(Vb),
    listHoverOutline: Is(Vb),
    treeIndentGuidesStroke: Is(Pgn),
    treeInactiveIndentGuidesStroke: Is(ONc),
    treeStickyScrollBackground: void 0,
    treeStickyScrollBorder: void 0,
    treeStickyScrollShadow: Is(IBe),
    tableColumnsBorder: Is(FNc),
    tableOddRowsBackgroundColor: Is(Kfi)
}, Uwe = {
    selectBackground: Is(lpt),
    selectListBackground: Is(uNc),
    selectForeground: Is(Dgn),
    decoratorRightForeground: Is(bZr),
    selectBorder: Is(pze),
    focusBorder: Is(tN),
    listFocusBackground: Is(Z2t),
    listInactiveSelectionIconForeground: Is(Yfi),
    listFocusForeground: Is(X2t),
    listFocusOutline: ept(Vb, Ci.transparent.toString()),
    listHoverBackground: Is(jAe),
    listHoverForeground: Is(Y2t),
    listHoverOutline: Is(Vb),
    selectListBorder: Is(Sgn),
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
}, vis = {
    shadowColor: Is(Nge),
    borderColor: Is(UNc),
    foregroundColor: Is($Nc),
    backgroundColor: Is(HNc),
    selectionForegroundColor: Is(WNc),
    selectionBackgroundColor: Is(GNc),
    selectionBorderColor: Is(VNc),
    separatorColor: Is(jNc),
    scrollbarShadow: Is(IBe),
    scrollbarSliderBackground: Is(tpt),
    scrollbarSliderHoverBackground: Is(npt),
    scrollbarSliderActiveBackground: Is(ipt)
};

}
