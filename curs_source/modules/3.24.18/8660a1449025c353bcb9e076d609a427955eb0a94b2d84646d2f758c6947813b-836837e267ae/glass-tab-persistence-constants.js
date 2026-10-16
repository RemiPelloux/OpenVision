import { aIl, fMn } from "./agentWindowTabPersistence.js";
import { jt, k_ } from "./editor-panel-tab-kind.js";
import { WX } from "./glass-tab-scope.js";
import { E } from "./tslib.es6.js";
var Ds, hIl, pIl, GMe, ZO, Vfs, ect, $lf, vMn, Hlf, Wlf, Glf, WVe, qMe, mIl, GVe, gIl, Kfs, fIl, qlf, zlf, vIl, Vlf, _Mn, Klf, Ylf;
export { $lf, Ds, GMe, GVe, Glf, Hlf, Kfs, Klf, Vfs, Vlf, WVe, Wlf, Ylf, ZO, _Mn, ect, fIl, gIl, hIl, mIl, pIl, qMe, qlf, vIl, vMn, zlf };
var __wakaru_NE_initialized = false;
export function NE() {
if (__wakaru_NE_initialized) return;
__wakaru_NE_initialized = true;
"use strict";
E(), fMn(), k_(), WX(), Ds = aIl, hIl = "editorPanel", pIl = "editorPanelPane", GMe = "stable-environment-setup", ZO = "stable-diff", Vfs = "stable-pr", ect = "pr:", $lf = 4096, vMn = new Map, Hlf = "side-chat:", Wlf = "agent-chat:", Glf = "suggestion:", WVe = "stable-vnc", qMe = "stable-context", mIl = "stable-main-bot-tasks", GVe = "glass-flat-browser-new-tab", gIl = [
    qMe,
    GMe,
    ZO,
    WVe,
    GVe
], Kfs = new Map(gIl.map((t, e)=>[
        t,
        e
    ])), fIl = gIl.indexOf(ZO) - .5, qlf = ZO, zlf = 200, vIl = 50, Vlf = "stable-browser-session", _Mn = "New Tab", Klf = [
    jt.Diff,
    jt.Output,
    jt.Plan,
    jt.EnvironmentSetup,
    jt.Gallery,
    jt.ColorReference,
    jt.Context,
    jt.Pr,
    jt.Vnc
], Ylf = new Set(Klf);

}
