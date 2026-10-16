import { Rk, dX } from "./full_self_driving_pb.js";
import { H_c } from "./glass-fsd-auto-apply-store.js";
import { O8i } from "./glass-fsd-controller-id.js";
import { P_c } from "./glass-fsd-launch-session-store.js";
import { E } from "./tslib.es6.js";
var H8i, _3e, G_c, q_c;
export { G_c, H8i, _3e, q_c };
var __wakaru_Xh__initialized = false;
export function Xh_() {
if (__wakaru_Xh__initialized) return;
__wakaru_Xh__initialized = true;
"use strict";
E(), dX(), H_c(), O8i(), P_c(), H8i = {
    agentLiveStatusLine: void 0,
    agentRpcStatusLine: void 0,
    agentOutputComposerId: void 0,
    agentRuntime: void 0,
    agentRowIsRunning: !1,
    agentRowSubtitle: "",
    applicableCount: 0,
    applyAllFindings: ()=>{},
    autoApplyEnabled: !1,
    canStopFsdAgent: !1,
    codeChangeFindings: [],
    configAutoStarted: void 0,
    configEnabled: !1,
    configMode: Rk.SUGGEST,
    configError: null,
    runsError: null,
    runs: void 0,
    dismissFinding: ()=>{},
    findings: [],
    getFindingAcceptedAtMs: ()=>0,
    getFindingDiffStat: ()=>{},
    isApplyingFinding: ()=>!1,
    isApplyAllDisabled: !0,
    isDismissingFinding: ()=>!1,
    isFindingAccepted: ()=>!1,
    isFindingApplyDisabled: ()=>!0,
    isFindingUndoable: ()=>!1,
    isLoading: !1,
    isRunning: !1,
    isUndoingFinding: ()=>!1,
    isVisible: !1,
    launchStatus: null,
    localFsdMode: void 0,
    openSuggestionPreviewTab: ()=>{},
    prUrl: "",
    refetch: ()=>{},
    resolvedCount: 0,
    runApplyForFinding: ()=>{},
    setAutoApplyEnabled: ()=>{},
    setCloudRunPrUrl: ()=>{},
    setPinnedPrUrl: ()=>{},
    showAgentRow: !1,
    statusLabel: "",
    stopFsdAgent: ()=>{},
    totalVisibleCount: 0,
    pendingCount: 0,
    undoFinding: ()=>{}
}, _3e = new Map, G_c = new Map, q_c = new Map;

}
