import { Di } from "./Iwo.js";
import { Hi, cn, mt } from "./contextkey.js";
import { E } from "./tslib.es6.js";
var rTm, sTm, Tqe, DU1, lEn, LXr, f$a, OXr, v$a, hwi, oTm, _$a, FXr, pwi, Eqe, NU1, aTm, b$a, y$a, lTm, cTm, cEn;
export { DU1, Eqe, FXr, LXr, NU1, OXr, Tqe, _$a, aTm, b$a, cEn, cTm, f$a, hwi, lEn, lTm, oTm, pwi, rTm, sTm, v$a, y$a };
var __wakaru_q4_initialized = false;
export function q4() {
if (__wakaru_q4_initialized) return;
__wakaru_q4_initialized = true;
"use strict";
E(), Hi(), Di(), rTm = "cursor.agentIdeUnification.enabled", sTm = new cn(rTm, !0, "Compatibility context key for legacy user keybindings that checked whether agent IDE unification was enabled"), Tqe = "cursor.chatEditorGroup.enabled", DU1 = new cn(Tqe, !1, "Whether chat editor group mode is enabled"), lEn = "cursor.agentIdeUnification.sidebarLocation", LXr = new cn(lEn, "right", "The sidebar location for the agent ide unification"), f$a = mt.equals(LXr.key, "right"), OXr = mt.equals(LXr.key, "left"), v$a = "cursor.agentIdeUnification.unifiedSidebarVisible", hwi = new cn(v$a, !1, "Whether the unified sidebar is visible"), oTm = mt.equals(hwi.key, !0), _$a = mt.equals(hwi.key, !1), FXr = "cursor.agentIdeUnification.agentsSurfaceVisible", pwi = new cn(FXr, !1, "Whether any agents surface is visible"), Eqe = "cursor.noTitlebarLayout.enabled", NU1 = new cn(Eqe, !1, "Whether the no-titlebar layout is currently active (title bar hidden)"), aTm = -35, b$a = "no-titlebar-layout", y$a = 11, lTm = 60, cTm = 52, cEn = "cursor.onboarding.showing";

}
