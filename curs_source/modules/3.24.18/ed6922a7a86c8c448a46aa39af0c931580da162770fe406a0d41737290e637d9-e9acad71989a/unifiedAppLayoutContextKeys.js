import { jn } from "./HVr.js";
import { At, dn, he } from "./contextkey.js";
import { x } from "./tslib.es6.js";
var BFd, UFd, aPe, $Fd, bWt, cVi, Kao, lVi, Yao, MNn, HFd, Xao, uVi, PNn, cPe, WFd, dVi, LNn, Zao, GFd, VFd, yWt;
export { $Fd, BFd, GFd, HFd, Kao, LNn, MNn, PNn, UFd, VFd, WFd, Xao, Yao, Zao, aPe, bWt, cPe, cVi, dVi, lVi, uVi, yWt };
var __wakaru_cL_initialized = false;
export function cL() {
if (__wakaru_cL_initialized) return;
__wakaru_cL_initialized = true;
"use strict";
x(), dn(), jn(), BFd = "cursor.agentIdeUnification.enabled", UFd = new At(BFd, !0, "Compatibility context key for legacy user keybindings that checked whether agent IDE unification was enabled"), aPe = "cursor.chatEditorGroup.enabled", $Fd = new At(aPe, !1, "Whether chat editor group mode is enabled"), bWt = "cursor.agentIdeUnification.sidebarLocation", cVi = new At(bWt, "right", "The sidebar location for the agent ide unification"), Kao = he.equals(cVi.key, "right"), lVi = he.equals(cVi.key, "left"), Yao = "cursor.agentIdeUnification.unifiedSidebarVisible", MNn = new At(Yao, !1, "Whether the unified sidebar is visible"), HFd = he.equals(MNn.key, !0), Xao = he.equals(MNn.key, !1), uVi = "cursor.agentIdeUnification.agentsSurfaceVisible", PNn = new At(uVi, !1, "Whether any agents surface is visible"), cPe = "cursor.noTitlebarLayout.enabled", WFd = new At(cPe, !1, "Whether the no-titlebar layout is currently active (title bar hidden)"), dVi = -35, LNn = "no-titlebar-layout", Zao = 11, GFd = 60, VFd = 52, yWt = "cursor.onboarding.showing";

}
