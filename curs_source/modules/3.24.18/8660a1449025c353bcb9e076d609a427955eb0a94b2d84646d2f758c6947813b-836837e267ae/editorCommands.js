import { Di, Ov, Yo, wf, zR } from "./Iwo.js";
import { Gm } from "./actionCommonCategories.js";
import { es } from "./actions_2.js";
import { rs } from "./commands.js";
import { or } from "./configuration.js";
import { Hi, mt } from "./contextkey.js";
import { vf } from "./contextkeys_2.js";
import { ERg } from "./diffEditorCommands.js";
import { Lle } from "./diffEditorInput.js";
import { T4 } from "./editor.js";
import { xw } from "./editorBrowser.js";
import { IAi } from "./editorCommandsContext.js";
import { cg } from "./editorContextKeys.js";
import { PEt } from "./editorGroupColumn.js";
import { HEt } from "./editorGroupFinder.js";
import { Ld } from "./editorGroupsService.js";
import { GXr } from "./editorQuickAccess.js";
import { D6 } from "./editorResolverService.js";
import { Wo } from "./editorService.js";
import { od } from "./editor_2.js";
import { m9e } from "./editor_4.js";
import { Iqe } from "./embeddedAuxBarEditorPartService.js";
import { It } from "./instantiation.js";
import { Ma } from "./keyCodes.js";
import { xT } from "./keybindingsRegistry.js";
import { Pv } from "./layoutService_2.js";
import { d2 } from "./listService.js";
import { Ki } from "./network.js";
import { Bt } from "./nls.js";
import { qc } from "./opener.js";
import { ih } from "./pathService.js";
import { Gu } from "./quickInput.js";
import { bAi } from "./sideBySideEditor.js";
import { bV } from "./sideBySideEditorInput.js";
import { zfl } from "./textDiffEditor.js";
import { E } from "./tslib.es6.js";
import { To } from "./types_2.js";
import { Tqe, q4 } from "./unifiedAppLayoutContextKeys.js";
import { M9e } from "./untitledTextEditorService.js";
import { fn } from "./uri.js";
var m2n, zEt, Cds, Tds, uye, svl, Eds, xAi, ARg, IMe, yVe, SVe, Ids, ovl, xds, Ads, uKt, avl, AAi, Rds, VEt, RAi, KEt, flt, YEt, vlt, PAi, Pds, RRg, Mds, lvl, cvl, uvl, PRg, MRg, DRg, NRg, LRg, dvl, MAi, Dds, hvl, pvl, mvl, _lt, blt, ORg, gvl, fvl;
export { AAi, ARg, Ads, Cds, DRg, Dds, Eds, IMe, Ids, KEt, LRg, MAi, MRg, Mds, NRg, ORg, PAi, PRg, Pds, RAi, RRg, Rds, SVe, Tds, VEt, YEt, _lt, avl, blt, cvl, dvl, flt, fvl, gvl, hvl, lvl, m2n, mvl, ovl, pvl, svl, uKt, uvl, uye, vlt, xAi, xds, yVe, zEt };
var __wakaru_ZJ_initialized = false;
export function ZJ() {
if (__wakaru_ZJ_initialized) return;
__wakaru_ZJ_initialized = true;
"use strict";
E(), Ma(), Ki(), Di(), To(), fn(), xw(), cg(), Bt(), Gm(), es(), rs(), or(), Hi(), T4(), It(), xT(), d2(), qc(), Gu(), GXr(), bAi(), zfl(), vf(), od(), Lle(), bV(), PEt(), HEt(), Ld(), D6(), Wo(), ih(), M9e(), q4(), ERg(), IAi(), m9e(), Pv(), Iqe(), m2n = "workbench.action.closeUnmodifiedEditors", zEt = "workbench.action.closeEditorsInGroup", Cds = "workbench.action.closeEditorsAndGroup", Tds = "workbench.action.closeEditorsToTheRight", uye = "workbench.action.closeActiveEditor", svl = "workbench.action.closeActivePinnedEditor", Eds = "workbench.action.closeGroup", xAi = "workbench.action.closeOtherEditors", ARg = mt.equals(Tqe, !0), IMe = "moveActiveEditor", yVe = "copyActiveEditor", SVe = "layoutEditorGroups", Ids = "workbench.action.keepEditor", ovl = "workbench.action.toggleKeepEditors", xds = "workbench.action.toggleEditorGroupLock", Ads = "workbench.action.lockEditorGroup", uKt = "workbench.action.unlockEditorGroup", avl = "workbench.action.showEditorsInGroup", AAi = "workbench.action.reopenWithEditor", Rds = "workbench.action.pinEditor", VEt = "workbench.action.unpinEditor", RAi = "workbench.action.splitEditor", KEt = "workbench.action.splitEditorUp", flt = "workbench.action.splitEditorDown", YEt = "workbench.action.splitEditorLeft", vlt = "workbench.action.splitEditorRight", PAi = "workbench.action.toggleMaximizeEditorGroup", Pds = "workbench.action.splitEditorInGroup", RRg = "workbench.action.toggleSplitEditorInGroup", Mds = "workbench.action.joinEditorInGroup", lvl = "workbench.action.toggleSplitEditorInGroupLayout", cvl = "workbench.action.focusFirstSideEditor", uvl = "workbench.action.focusSecondSideEditor", PRg = "workbench.action.focusOtherSideEditor", MRg = "workbench.action.focusLeftGroupWithoutWrap", DRg = "workbench.action.focusRightGroupWithoutWrap", NRg = "workbench.action.focusAboveGroupWithoutWrap", LRg = "workbench.action.focusBelowGroupWithoutWrap", dvl = "workbench.action.openEditorAtIndex", MAi = "workbench.action.moveEditorToNewWindow", Dds = "workbench.action.copyEditorToNewWindow", hvl = "workbench.action.moveEditorGroupToNewWindow", pvl = "workbench.action.copyEditorGroupToNewWindow", mvl = "workbench.action.newEmptyEditorWindow", _lt = "_workbench.open", blt = "_workbench.diff", ORg = "_workbench.openWith", gvl = [
    RAi,
    uye,
    VEt,
    uKt,
    PAi
], fvl = function(t) {
    return !(!wf(t) || !Yo(t.to) || !Ov(t.by) && !Yo(t.by) || !Ov(t.value) && !zR(t.value));
};

}
