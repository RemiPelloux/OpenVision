import { S } from "./HVr.js";
import { Vb, rre, tN, uc, ygn } from "./baseColors.js";
import { Ci, Sm } from "./color.js";
import { tc } from "./colorRegistry.js";
import { Ph, RBe, W2t, _3, c5, eU, lze, ore, p1 } from "./editorColors.js";
import { uwe } from "./inputColors.js";
import { DK, Pgn, VAe } from "./listColors.js";
import { IBe } from "./miscColors.js";
import { rt } from "./nls.js";
import { Lt, fle, o2, pa } from "./qIc.js";
import { x0 } from "./theme.js";
import { x } from "./tslib.es6.js";
var Mnr, E3h, DRo, x3h, Z8e, MRo, I3h, Zl_, Pnr, A3h, Lnr, R3h, h5n, D3h, p5n, M3h, m5n, P3h, L3h, Ql_, Jl_, Nnr, N3h, eu_, Yqt, Onr, O3h, F3h, PRo, Xqt, B3h, tu_, LRo, U3h, $3h, H3h, Fnr, k0t, W3h, G3h, V3h, j3h, q3h, z3h, nu_, iu_, ru_, uhe, K3h, NRo, ORo, g5n, Y3h, X3h, su_, Z3h, _Te, Zqt, Q3h, ou_, au_, cu_, lu_, FRo, uu_, du_, hu_, J3h, pu_, mu_, gu_, BRo, mnt, eBh, URo, $Ro, tBh, HRo, nBh, Q8e, J8e, gnt, WRo, fu_, GRo, VRo, vu_, MLe, Dq, iBh, fnt, jRo, qRo, rBh, sBh, _u_, zRo, Bnr, oBh, aBh, cBh, KRo, lBh, uBh, dBh, bu_, yu_, hBh, pBh, Su_, ku_, wu_, Cu_, Tu_, Eu_, mBh, gBh, vG, Qqt, PLe, xu_, fBh, YRo, w0t, vBh, _Bh, XRo, Iu_, bBh, yBh, SBh, sbe, Unr, Jqt, kBh, ZRo, wBh, QRo, Au_, Ru_, Du_, Mu_, CBh, Pu_, Lu_, Nu_, Ou_, TBh, EBh, Fu_, C0t, Bu_, xBh, JRo, Uu_, $u_, Hu_, Wu_, eDo, tDo;
export { $3h, $Ro, $u_, A3h, Au_, B3h, BRo, Bnr, Bu_, C0t, CBh, Cu_, D3h, DRo, Dq, Du_, E3h, EBh, Eu_, F3h, FRo, Fnr, Fu_, G3h, GRo, H3h, HRo, Hu_, I3h, Iu_, J3h, J8e, JRo, Jl_, Jqt, K3h, KRo, L3h, LRo, Lnr, Lu_, M3h, MLe, MRo, Mnr, Mu_, N3h, NRo, Nnr, Nu_, O3h, ORo, Onr, Ou_, P3h, PLe, PRo, Pnr, Pu_, Q3h, Q8e, QRo, Ql_, Qqt, R3h, Ru_, SBh, Su_, TBh, Tu_, U3h, URo, Unr, Uu_, V3h, VRo, W3h, WRo, Wu_, X3h, XRo, Xqt, Y3h, YRo, Yqt, Z3h, Z8e, ZRo, Zl_, Zqt, _Bh, _Te, _u_, aBh, au_, bBh, bu_, cBh, cu_, dBh, du_, eBh, eDo, eu_, fBh, fnt, fu_, g5n, gBh, gnt, gu_, h5n, hBh, hu_, iBh, iu_, j3h, jRo, k0t, kBh, ku_, lBh, lu_, m5n, mBh, mnt, mu_, nBh, nu_, oBh, ou_, p5n, pBh, pu_, q3h, qRo, rBh, ru_, sBh, sbe, su_, tBh, tDo, tu_, uBh, uhe, uu_, vBh, vG, vu_, w0t, wBh, wu_, x3h, xBh, xu_, yBh, yu_, z3h, zRo };
var __wakaru_Ry_initialized = false;
export function Ry() {
if (__wakaru_Ry_initialized) return;
__wakaru_Ry_initialized = true;
"use strict";
x(), rt(), tc(), Sm(), x0(), Mnr = Lt("tab.activeBackground", Ph, S(4361, null)), E3h = Lt("tab.unfocusedActiveBackground", Mnr, S(4362, null)), DRo = Lt("tab.inactiveBackground", {
    dark: "#2D2D2D",
    light: "#ECECEC",
    hcDark: null,
    hcLight: null
}, S(4363, null)), x3h = Lt("tab.unfocusedInactiveBackground", DRo, S(4364, null)), Z8e = Lt("tab.activeForeground", {
    dark: Ci.white,
    light: "#333333",
    hcDark: Ci.white,
    hcLight: "#292929"
}, S(4365, null)), MRo = Lt("tab.inactiveForeground", {
    dark: pa(Z8e, .5),
    light: pa(Z8e, .7),
    hcDark: Ci.white,
    hcLight: "#292929"
}, S(4366, null)), I3h = Lt("tab.unfocusedActiveForeground", {
    dark: pa(Z8e, .5),
    light: pa(Z8e, .7),
    hcDark: Ci.white,
    hcLight: "#292929"
}, S(4367, null)), Zl_ = Lt("tab.unfocusedInactiveForeground", {
    dark: pa(MRo, .5),
    light: pa(MRo, .5),
    hcDark: Ci.white,
    hcLight: "#292929"
}, S(4368, null)), Pnr = Lt("tab.hoverBackground", null, S(4369, null)), A3h = Lt("tab.unfocusedHoverBackground", {
    dark: pa(Pnr, .5),
    light: pa(Pnr, .7),
    hcDark: null,
    hcLight: null
}, S(4370, null)), Lnr = Lt("tab.hoverForeground", null, S(4371, null)), R3h = Lt("tab.unfocusedHoverForeground", {
    dark: pa(Lnr, .5),
    light: pa(Lnr, .5),
    hcDark: null,
    hcLight: null
}, S(4372, null)), h5n = Lt("tab.border", {
    dark: "#252526",
    light: "#F3F3F3",
    hcDark: uc,
    hcLight: uc
}, S(4373, null)), D3h = Lt("tab.lastPinnedBorder", {
    dark: Pgn,
    light: Pgn,
    hcDark: uc,
    hcLight: uc
}, S(4374, null)), p5n = Lt("tab.activeBorder", null, S(4375, null)), M3h = Lt("tab.unfocusedActiveBorder", {
    dark: pa(p5n, .5),
    light: pa(p5n, .7),
    hcDark: null,
    hcLight: null
}, S(4376, null)), m5n = Lt("tab.activeBorderTop", {
    dark: null,
    light: null,
    hcDark: null,
    hcLight: "#B5200D"
}, S(4377, null)), P3h = Lt("tab.unfocusedActiveBorderTop", {
    dark: pa(m5n, .5),
    light: pa(m5n, .7),
    hcDark: null,
    hcLight: "#B5200D"
}, S(4378, null)), L3h = Lt("tab.selectedBorderTop", m5n, S(4379, null)), Ql_ = Lt("tab.selectedBackground", Mnr, S(4380, null)), Jl_ = Lt("tab.selectedForeground", Z8e, S(4381, null)), Nnr = Lt("tab.hoverBorder", null, S(4382, null)), N3h = Lt("tab.unfocusedHoverBorder", {
    dark: pa(Nnr, .5),
    light: pa(Nnr, .7),
    hcDark: null,
    hcLight: uc
}, S(4383, null)), eu_ = Lt("tab.dragAndDropBorder", {
    dark: Z8e,
    light: Z8e,
    hcDark: Vb,
    hcLight: Vb
}, S(4384, null)), Yqt = Lt("tab.activeModifiedBorder", {
    dark: "#3399CC",
    light: "#33AAEE",
    hcDark: null,
    hcLight: uc
}, S(4385, null)), Onr = Lt("tab.inactiveModifiedBorder", {
    dark: pa(Yqt, .5),
    light: pa(Yqt, .5),
    hcDark: Ci.white,
    hcLight: uc
}, S(4386, null)), O3h = Lt("tab.unfocusedActiveModifiedBorder", {
    dark: pa(Yqt, .5),
    light: pa(Yqt, .7),
    hcDark: Ci.white,
    hcLight: uc
}, S(4387, null)), F3h = Lt("tab.unfocusedInactiveModifiedBorder", {
    dark: pa(Onr, .5),
    light: pa(Onr, .5),
    hcDark: Ci.white,
    hcLight: uc
}, S(4388, null)), PRo = Lt("tab.worktreeBorder", {
    dark: pa(c5, .4),
    light: pa(c5, .4),
    hcDark: c5,
    hcLight: c5
}, S(4389, null)), Xqt = Lt("editorPane.background", Ph, S(4390, null)), B3h = Lt("editorGroup.emptyBackground", null, S(4391, null)), tu_ = Lt("editorGroup.focusedEmptyBorder", {
    dark: null,
    light: null,
    hcDark: tN,
    hcLight: tN
}, S(4392, null)), LRo = Lt("editorGroupHeader.tabsBackground", {
    dark: "#252526",
    light: "#F3F3F3",
    hcDark: null,
    hcLight: null
}, S(4393, null)), U3h = Lt("editorGroupHeader.tabsBorder", null, S(4394, null)), $3h = Lt("editorGroupHeader.noTabsBackground", Ph, S(4395, null)), H3h = Lt("editorGroupHeader.border", {
    dark: null,
    light: null,
    hcDark: uc,
    hcLight: uc
}, S(4396, null)), Fnr = Lt("editorGroup.border", {
    dark: "#444444",
    light: "#E7E7E7",
    hcDark: uc,
    hcLight: uc
}, S(4397, null)), k0t = Lt("editorGroup.dropBackground", {
    dark: Ci.fromHex("#53595D").transparent(.5),
    light: Ci.fromHex("#2677CB").transparent(.18),
    hcDark: null,
    hcLight: Ci.fromHex("#0F4A85").transparent(.5)
}, S(4398, null)), W3h = Lt("editorGroup.dropIntoPromptForeground", lze, S(4399, null)), G3h = Lt("editorGroup.dropIntoPromptBackground", _3, S(4400, null)), V3h = Lt("editorGroup.dropIntoPromptBorder", {
    dark: null,
    light: null,
    hcDark: uc,
    hcLight: uc
}, S(4401, null)), j3h = Lt("sideBySideEditor.horizontalBorder", Fnr, S(4402, null)), q3h = Lt("sideBySideEditor.verticalBorder", Fnr, S(4403, null)), z3h = Lt("outputView.background", null, S(4404, null)), Lt("outputViewStickyScroll.background", z3h, S(4405, null)), nu_ = Lt("banner.background", {
    dark: DK,
    light: o2(DK, .3),
    hcDark: DK,
    hcLight: DK
}, S(4406, null)), iu_ = Lt("banner.foreground", VAe, S(4407, null)), ru_ = Lt("banner.iconForeground", eU, S(4408, null)), uhe = Lt("statusBar.foreground", {
    dark: "#FFFFFF",
    light: "#FFFFFF",
    hcDark: "#FFFFFF",
    hcLight: p1
}, S(4409, null)), K3h = Lt("statusBar.noFolderForeground", uhe, S(4410, null)), NRo = Lt("statusBar.background", {
    dark: "#007ACC",
    light: "#007ACC",
    hcDark: null,
    hcLight: null
}, S(4411, null)), ORo = Lt("statusBar.noFolderBackground", {
    dark: "#68217A",
    light: "#68217A",
    hcDark: null,
    hcLight: null
}, S(4412, null)), g5n = Lt("statusBar.border", {
    dark: null,
    light: null,
    hcDark: uc,
    hcLight: uc
}, S(4413, null)), Y3h = Lt("statusBar.focusBorder", {
    dark: uhe,
    light: uhe,
    hcDark: null,
    hcLight: uhe
}, S(4414, null)), X3h = Lt("statusBar.noFolderBorder", g5n, S(4415, null)), su_ = Lt("statusBarItem.activeBackground", {
    dark: Ci.white.transparent(.18),
    light: Ci.white.transparent(.18),
    hcDark: Ci.white.transparent(.18),
    hcLight: Ci.black.transparent(.18)
}, S(4416, null)), Z3h = Lt("statusBarItem.focusBorder", {
    dark: uhe,
    light: uhe,
    hcDark: null,
    hcLight: Vb
}, S(4417, null)), _Te = Lt("statusBarItem.hoverBackground", {
    dark: Ci.white.transparent(.12),
    light: Ci.white.transparent(.12),
    hcDark: Ci.white.transparent(.12),
    hcLight: Ci.black.transparent(.12)
}, S(4418, null)), Zqt = Lt("statusBarItem.hoverForeground", uhe, S(4419, null)), Q3h = Lt("statusBarItem.compactHoverBackground", {
    dark: Ci.white.transparent(.2),
    light: Ci.white.transparent(.2),
    hcDark: Ci.white.transparent(.2),
    hcLight: Ci.black.transparent(.2)
}, S(4420, null)), ou_ = Lt("statusBarItem.prominentForeground", uhe, S(4421, null)), au_ = Lt("statusBarItem.prominentBackground", Ci.black.transparent(.5), S(4422, null)), cu_ = Lt("statusBarItem.prominentHoverForeground", Zqt, S(4423, null)), lu_ = Lt("statusBarItem.prominentHoverBackground", _Te, S(4424, null)), FRo = Lt("statusBarItem.errorBackground", {
    dark: o2(ygn, .4),
    light: o2(ygn, .4),
    hcDark: null,
    hcLight: "#B5200D"
}, S(4425, null)), uu_ = Lt("statusBarItem.errorForeground", Ci.white, S(4426, null)), du_ = Lt("statusBarItem.errorHoverForeground", Zqt, S(4427, null)), hu_ = Lt("statusBarItem.errorHoverBackground", _Te, S(4428, null)), J3h = Lt("statusBarItem.warningBackground", {
    dark: o2(c5, .4),
    light: o2(c5, .4),
    hcDark: null,
    hcLight: "#895503"
}, S(4429, null)), pu_ = Lt("statusBarItem.warningForeground", Ci.white, S(4430, null)), mu_ = Lt("statusBarItem.warningHoverForeground", Zqt, S(4431, null)), gu_ = Lt("statusBarItem.warningHoverBackground", _Te, S(4432, null)), BRo = Lt("activityBar.background", {
    dark: "#333333",
    light: "#2C2C2C",
    hcDark: "#000000",
    hcLight: "#FFFFFF"
}, S(4433, null)), mnt = Lt("activityBar.foreground", {
    dark: Ci.white,
    light: Ci.white,
    hcDark: Ci.white,
    hcLight: p1
}, S(4434, null)), eBh = Lt("activityBar.inactiveForeground", {
    dark: pa(mnt, .4),
    light: pa(mnt, .4),
    hcDark: Ci.white,
    hcLight: p1
}, S(4435, null)), URo = Lt("activityBar.border", {
    dark: null,
    light: null,
    hcDark: uc,
    hcLight: uc
}, S(4436, null)), $Ro = Lt("activityBar.activeBorder", {
    dark: mnt,
    light: mnt,
    hcDark: uc,
    hcLight: uc
}, S(4437, null)), tBh = Lt("activityBar.activeFocusBorder", {
    dark: null,
    light: null,
    hcDark: null,
    hcLight: "#B5200D"
}, S(4438, null)), HRo = Lt("activityBar.activeBackground", null, S(4439, null)), nBh = Lt("activityBar.dropBorder", {
    dark: mnt,
    light: mnt,
    hcDark: null,
    hcLight: null
}, S(4440, null)), Q8e = Lt("activityBarBadge.background", {
    dark: "#007ACC",
    light: "#007ACC",
    hcDark: "#000000",
    hcLight: "#0F4A85"
}, S(4441, null)), J8e = Lt("activityBarBadge.foreground", Ci.white, S(4442, null)), gnt = Lt("activityBarTop.foreground", {
    dark: "#E7E7E7",
    light: "#424242",
    hcDark: Ci.white,
    hcLight: p1
}, S(4443, null)), WRo = Lt("activityBarTop.activeBorder", {
    dark: gnt,
    light: gnt,
    hcDark: uc,
    hcLight: "#B5200D"
}, S(4444, null)), fu_ = Lt("activityBarTop.activeBackground", null, S(4445, null)), GRo = Lt("activityBarTop.inactiveForeground", {
    dark: pa(gnt, .6),
    light: pa(gnt, .75),
    hcDark: Ci.white,
    hcLight: p1
}, S(4446, null)), VRo = Lt("activityBarTop.dropBorder", gnt, S(4447, null)), vu_ = Lt("activityBarTop.background", null, S(4448, null)), MLe = Lt("panel.background", Ph, S(4449, null)), Dq = Lt("panel.border", {
    dark: Ci.fromHex("#808080").transparent(.35),
    light: Ci.fromHex("#808080").transparent(.35),
    hcDark: uc,
    hcLight: uc
}, S(4450, null)), iBh = Lt("panelTitle.border", {
    dark: null,
    light: null,
    hcDark: Dq,
    hcLight: Dq
}, S(4451, null)), fnt = Lt("panelTitle.activeForeground", {
    dark: "#E7E7E7",
    light: "#424242",
    hcDark: Ci.white,
    hcLight: p1
}, S(4452, null)), jRo = Lt("panelTitle.inactiveForeground", {
    dark: pa(fnt, .6),
    light: pa(fnt, .75),
    hcDark: Ci.white,
    hcLight: p1
}, S(4453, null)), qRo = Lt("panelTitle.activeBorder", {
    dark: fnt,
    light: fnt,
    hcDark: uc,
    hcLight: "#B5200D"
}, S(4454, null)), rBh = Lt("panelTitleBadge.background", Q8e, S(4455, null)), sBh = Lt("panelTitleBadge.foreground", J8e, S(4456, null)), _u_ = Lt("panelInput.border", {
    dark: uwe,
    light: Ci.fromHex("#ddd"),
    hcDark: uwe,
    hcLight: uwe
}, S(4457, null)), zRo = Lt("panel.dropBorder", fnt, S(4458, null)), Bnr = Lt("panelSection.dropBackground", k0t, S(4459, null)), oBh = Lt("panelSectionHeader.background", {
    dark: Ci.fromHex("#808080").transparent(.2),
    light: Ci.fromHex("#808080").transparent(.2),
    hcDark: null,
    hcLight: null
}, S(4460, null)), aBh = Lt("panelSectionHeader.foreground", null, S(4461, null)), cBh = Lt("panelSectionHeader.border", uc, S(4462, null)), KRo = Lt("panelSection.border", Dq, S(4463, null)), lBh = Lt("panelStickyScroll.background", MLe, S(4464, null)), uBh = Lt("panelStickyScroll.border", null, S(4465, null)), dBh = Lt("panelStickyScroll.shadow", IBe, S(4466, null)), bu_ = Lt("profileBadge.background", {
    dark: "#4D4D4D",
    light: "#C4C4C4",
    hcDark: Ci.white,
    hcLight: Ci.black
}, S(4467, null)), yu_ = Lt("profileBadge.foreground", {
    dark: Ci.white,
    light: "#333333",
    hcDark: Ci.black,
    hcLight: Ci.white
}, S(4468, null)), hBh = Lt("statusBarItem.remoteBackground", Q8e, S(4469, null)), pBh = Lt("statusBarItem.remoteForeground", J8e, S(4470, null)), Su_ = Lt("statusBarItem.remoteHoverForeground", Zqt, S(4471, null)), ku_ = Lt("statusBarItem.remoteHoverBackground", {
    dark: _Te,
    light: _Te,
    hcDark: _Te,
    hcLight: null
}, S(4472, null)), wu_ = Lt("statusBarItem.offlineBackground", "#6c1717", S(4473, null)), Cu_ = Lt("statusBarItem.offlineForeground", pBh, S(4474, null)), Tu_ = Lt("statusBarItem.offlineHoverForeground", Zqt, S(4475, null)), Eu_ = Lt("statusBarItem.offlineHoverBackground", {
    dark: _Te,
    light: _Te,
    hcDark: _Te,
    hcLight: null
}, S(4476, null)), mBh = Lt("extensionBadge.remoteBackground", Q8e, S(4477, null)), gBh = Lt("extensionBadge.remoteForeground", J8e, S(4478, null)), vG = Lt("sideBar.background", {
    dark: "#252526",
    light: "#F3F3F3",
    hcDark: "#000000",
    hcLight: "#FFFFFF"
}, S(4479, null)), Qqt = Lt("sideBar.foreground", null, S(4480, null)), PLe = Lt("sideBar.border", {
    dark: null,
    light: null,
    hcDark: uc,
    hcLight: uc
}, S(4481, null)), xu_ = Lt("sideBarTitle.background", vG, S(4482, null)), fBh = Lt("sideBarTitle.foreground", Qqt, S(4483, null)), YRo = Lt("sideBarTitle.border", {
    dark: null,
    light: null,
    hcDark: PLe,
    hcLight: PLe
}, S(4484, null)), w0t = Lt("sideBar.dropBackground", k0t, S(4485, null)), vBh = Lt("sideBarSectionHeader.background", {
    dark: Ci.fromHex("#808080").transparent(.2),
    light: Ci.fromHex("#808080").transparent(.2),
    hcDark: null,
    hcLight: null
}, S(4486, null)), _Bh = Lt("sideBarSectionHeader.foreground", Qqt, S(4487, null)), XRo = Lt("sideBarSectionHeader.border", uc, S(4488, null)), Iu_ = Lt("sideBarActivityBarTop.border", XRo, S(4489, null)), bBh = Lt("sideBarStickyScroll.background", vG, S(4490, null)), yBh = Lt("sideBarStickyScroll.border", null, S(4491, null)), SBh = Lt("sideBarStickyScroll.shadow", IBe, S(4492, null)), sbe = Lt("titleBar.activeForeground", {
    dark: "#CCCCCC",
    light: "#333333",
    hcDark: "#FFFFFF",
    hcLight: "#292929"
}, S(4493, null)), Unr = Lt("titleBar.inactiveForeground", {
    dark: pa(sbe, .6),
    light: pa(sbe, .6),
    hcDark: null,
    hcLight: "#292929"
}, S(4494, null)), Jqt = Lt("titleBar.activeBackground", {
    dark: "#3C3C3C",
    light: "#DDDDDD",
    hcDark: "#000000",
    hcLight: "#FFFFFF"
}, S(4495, null)), kBh = Lt("titleBar.inactiveBackground", {
    dark: pa(Jqt, .6),
    light: pa(Jqt, .6),
    hcDark: null,
    hcLight: null
}, S(4496, null)), ZRo = Lt("titleBar.border", {
    dark: null,
    light: null,
    hcDark: uc,
    hcLight: uc
}, S(4497, null)), wBh = Lt("menubar.selectionForeground", sbe, S(4498, null)), QRo = Lt("menubar.selectionBackground", {
    dark: W2t,
    light: W2t,
    hcDark: null,
    hcLight: null
}, S(4499, null)), Au_ = Lt("menubar.selectionBorder", {
    dark: null,
    light: null,
    hcDark: Vb,
    hcLight: Vb
}, S(4500, null)), Ru_ = Lt("commandCenter.foreground", sbe, S(4501, null), !1), Du_ = Lt("commandCenter.activeForeground", wBh, S(4502, null), !1), Mu_ = Lt("commandCenter.inactiveForeground", Unr, S(4503, null), !1), CBh = Lt("commandCenter.background", {
    dark: Ci.white.transparent(.05),
    hcDark: null,
    light: Ci.black.transparent(.05),
    hcLight: null
}, S(4504, null), !1), Pu_ = Lt("commandCenter.activeBackground", {
    dark: Ci.white.transparent(.08),
    hcDark: QRo,
    light: Ci.black.transparent(.08),
    hcLight: QRo
}, S(4505, null), !1), Lu_ = Lt("commandCenter.border", {
    dark: pa(sbe, .2),
    hcDark: uc,
    light: pa(sbe, .2),
    hcLight: uc
}, S(4506, null), !1), Nu_ = Lt("commandCenter.activeBorder", {
    dark: pa(sbe, .3),
    hcDark: sbe,
    light: pa(sbe, .3),
    hcLight: sbe
}, S(4507, null), !1), Ou_ = Lt("commandCenter.inactiveBorder", pa(Unr, .25), S(4508, null), !1), TBh = Lt("notificationCenter.border", {
    dark: RBe,
    light: RBe,
    hcDark: uc,
    hcLight: uc
}, S(4509, null)), EBh = Lt("notificationToast.border", {
    dark: RBe,
    light: RBe,
    hcDark: uc,
    hcLight: uc
}, S(4510, null)), Fu_ = Lt("notifications.foreground", lze, S(4511, null)), C0t = Lt("notifications.background", _3, S(4512, null)), Bu_ = Lt("notificationLink.foreground", rre, S(4513, null)), xBh = Lt("notificationCenterHeader.foreground", null, S(4514, null)), JRo = Lt("notificationCenterHeader.background", {
    dark: fle(C0t, .3),
    light: o2(C0t, .05),
    hcDark: C0t,
    hcLight: C0t
}, S(4515, null)), Uu_ = Lt("notifications.border", JRo, S(4516, null)), $u_ = Lt("notificationsErrorIcon.foreground", ore, S(4517, null)), Hu_ = Lt("notificationsWarningIcon.foreground", c5, S(4518, null)), Wu_ = Lt("notificationsInfoIcon.foreground", eU, S(4519, null)), eDo = Lt("window.activeBorder", {
    dark: null,
    light: null,
    hcDark: uc,
    hcLight: uc
}, S(4520, null)), tDo = Lt("window.inactiveBorder", {
    dark: null,
    light: null,
    hcDark: uc,
    hcLight: uc
}, S(4521, null));

}
