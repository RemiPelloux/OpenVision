var MANAGED_LOCAL_FEATURE_FLAGS;
export { MANAGED_LOCAL_FEATURE_FLAGS };
var __wakaru_init_managed_local_feature_flags_initialized = false;
export function init_managed_local_feature_flags() {
if (__wakaru_init_managed_local_feature_flags_initialized) return;
__wakaru_init_managed_local_feature_flags_initialized = true;
"use strict";
MANAGED_LOCAL_FEATURE_FLAGS = {
    disableBackgroundTaskFollowUp: false,
    enableAwaitForSubagents: true,
    enableBackgroundTaskProgress: true,
    enableBoundedSubagentAwait: true,
    enableDebugSubagent: true,
    enableEmptyResponseRetry: true,
    enableExploreSubagent: true,
    enableGrepBroadGlobGuard: true,
    enableReadToolNegativeOffset: true,
    enableSandboxSharedBuildCache: true,
    longRunningJobs: true,
    nalLoopDetection: true,
    outputNotificationLimit: 1e3,
    useClientSideSubagent: true
};

}
