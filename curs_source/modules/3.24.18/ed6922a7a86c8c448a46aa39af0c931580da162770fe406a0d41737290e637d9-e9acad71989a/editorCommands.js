import { T0, Xr, dp, jn, om } from "./HVr.js";
import { Iu } from "./actionCommonCategories.js";
import { ei } from "./actions_2.js";
import { vi } from "./commands.js";
import { Cn } from "./configuration.js";
import { dn, he } from "./contextkey.js";
import { yd } from "./contextkeys_2.js";
import { ZBh } from "./diffEditorCommands.js";
import { Mq } from "./diffEditorInput.js";
import { EM } from "./editor.js";
import { Nv } from "./editorBrowser.js";
import { czt } from "./editorCommandsContext.js";
import { gd } from "./editorContextKeys.js";
import { vTe } from "./editorGroupColumn.js";
import { bnt } from "./editorGroupFinder.js";
import { Nc } from "./editorGroupsService.js";
import { vVi } from "./editorQuickAccess.js";
import { WI } from "./editorResolverService.js";
import { Ni } from "./editorService.js";
import { xc } from "./editor_2.js";
import { uTe } from "./editor_4.js";
import { uPe } from "./embeddedAuxBarEditorPartService.js";
import { Ze } from "./instantiation.js";
import { Pr } from "./keyCodes.js";
import { eb } from "./keybindingsRegistry.js";
import { Zh } from "./layoutService_2.js";
import { km } from "./listService.js";
import { li } from "./network.js";
import { rt } from "./nls.js";
import { ko } from "./opener.js";
import { fu } from "./pathService.js";
import { Ya } from "./quickInput.js";
import { f5n } from "./sideBySideEditor.js";
import { d8 } from "./sideBySideEditorInput.js";
import { aDo } from "./textDiffEditor.js";
import { x } from "./tslib.es6.js";
import { gr } from "./types_2.js";
import { aPe, cL } from "./unifiedAppLayoutContextKeys.js";
import { M0t } from "./untitledTextEditorService.js";
import { Qt } from "./uri.js";
var lzt, Cnt, rir, sir, Doe, TDo, oir, w5n, e5h, lbe, BLe, ULe, air, EDo, cir, lir, P0t, xDo, C5n, uir, Tnt, T5n, Ent, s7e, xnt, o7e, E5n, dir, t5h, hir, IDo, ADo, RDo, n5h, i5h, r5h, s5h, o5h, DDo, x5n, pir, MDo, PDo, LDo, ube, kTe, a5h, NDo, ODo;
export { ADo, BLe, C5n, Cnt, DDo, Doe, E5n, EDo, Ent, IDo, LDo, MDo, NDo, ODo, P0t, PDo, RDo, T5n, TDo, Tnt, ULe, a5h, air, cir, dir, e5h, hir, i5h, kTe, lbe, lir, lzt, n5h, o5h, o7e, oir, pir, r5h, rir, s5h, s7e, sir, t5h, ube, uir, w5n, x5n, xDo, xnt };
var __wakaru_e4_initialized = false;
export function e4() {
if (__wakaru_e4_initialized) return;
__wakaru_e4_initialized = true;
"use strict";
x(), Pr(), li(), jn(), gr(), Qt(), Nv(), gd(), rt(), Iu(), ei(), vi(), Cn(), dn(), EM(), Ze(), eb(), km(), ko(), Ya(), vVi(), f5n(), aDo(), yd(), xc(), Mq(), d8(), vTe(), bnt(), Nc(), WI(), Ni(), fu(), M0t(), cL(), ZBh(), czt(), uTe(), Zh(), uPe(), lzt = "workbench.action.closeUnmodifiedEditors", Cnt = "workbench.action.closeEditorsInGroup", rir = "workbench.action.closeEditorsAndGroup", sir = "workbench.action.closeEditorsToTheRight", Doe = "workbench.action.closeActiveEditor", TDo = "workbench.action.closeActivePinnedEditor", oir = "workbench.action.closeGroup", w5n = "workbench.action.closeOtherEditors", e5h = he.equals(aPe, !0), lbe = "moveActiveEditor", BLe = "copyActiveEditor", ULe = "layoutEditorGroups", air = "workbench.action.keepEditor", EDo = "workbench.action.toggleKeepEditors", cir = "workbench.action.toggleEditorGroupLock", lir = "workbench.action.lockEditorGroup", P0t = "workbench.action.unlockEditorGroup", xDo = "workbench.action.showEditorsInGroup", C5n = "workbench.action.reopenWithEditor", uir = "workbench.action.pinEditor", Tnt = "workbench.action.unpinEditor", T5n = "workbench.action.splitEditor", Ent = "workbench.action.splitEditorUp", s7e = "workbench.action.splitEditorDown", xnt = "workbench.action.splitEditorLeft", o7e = "workbench.action.splitEditorRight", E5n = "workbench.action.toggleMaximizeEditorGroup", dir = "workbench.action.splitEditorInGroup", t5h = "workbench.action.toggleSplitEditorInGroup", hir = "workbench.action.joinEditorInGroup", IDo = "workbench.action.toggleSplitEditorInGroupLayout", ADo = "workbench.action.focusFirstSideEditor", RDo = "workbench.action.focusSecondSideEditor", n5h = "workbench.action.focusOtherSideEditor", i5h = "workbench.action.focusLeftGroupWithoutWrap", r5h = "workbench.action.focusRightGroupWithoutWrap", s5h = "workbench.action.focusAboveGroupWithoutWrap", o5h = "workbench.action.focusBelowGroupWithoutWrap", DDo = "workbench.action.openEditorAtIndex", x5n = "workbench.action.moveEditorToNewWindow", pir = "workbench.action.copyEditorToNewWindow", MDo = "workbench.action.moveEditorGroupToNewWindow", PDo = "workbench.action.copyEditorGroupToNewWindow", LDo = "workbench.action.newEmptyEditorWindow", ube = "_workbench.open", kTe = "_workbench.diff", a5h = "_workbench.openWith", NDo = [
    T5n,
    Doe,
    Tnt,
    P0t,
    E5n
], ODo = function(e) {
    return !(!dp(e) || !Xr(e.to) || !om(e.by) && !Xr(e.by) || !om(e.value) && !T0(e.value));
};

}
