import { VQk } from "./cloudOptimisticPlanningRow.js";
import { $_f } from "./composerProjectInitializationFold.js";
import { eJk } from "./composerSyntheticRowKeys.js";
import { nEl } from "./composerVirtualRowHeights.js";
import { YQk } from "./conversationStatusRowSplice.js";
import { Mt } from "./index_197.js";
import { E } from "./tslib.es6.js";
var BMi, G_f;
export { BMi, G_f };
var __wakaru_vDn_initialized = false;
export function vDn() {
if (__wakaru_vDn_initialized) return;
__wakaru_vDn_initialized = true;
"use strict";
E(), Mt(), VQk(), YQk(), nEl(), eJk(), $_f(), BMi = [], G_f = {
    pinCloudStatusToStart: !1,
    omitStartAnchoredCloudStatus: !1,
    isCloudEnvironmentStatusVisible: !0,
    isSideChat: !1,
    isLocalWorktreeSetupStatusVisible: !1,
    hasActiveWorktreeSetup: !1,
    hasRunningSubagentsInLastTurn: !1,
    runningTaskByBubbleId: new Map,
    taskCompletedAtMsByBubbleId: new Map,
    location: "pane",
    chatStatus: "none",
    cloudRunActive: !1,
    firstUnreadBubbleId: void 0
};

}
