import { C6, GM, NCt, Ppe, l0i, oqt } from "./automations_pb.js";
import { E } from "./tslib.es6.js";
var _6v, b6v, y6v, S6v, k6v;
export { S6v, _6v, b6v, k6v, y6v };
var __wakaru_Fj0_initialized = false;
export function Fj0() {
if (__wakaru_Fj0_initialized) return;
__wakaru_Fj0_initialized = true;
"use strict";
E(), GM(), _6v = {
    [NCt.UNSPECIFIED]: "running",
    [NCt.RUNNING]: "running",
    [NCt.FAILED]: "failed",
    [NCt.SUCCEEDED]: "succeeded",
    [NCt.SKIPPED]: "skipped"
}, b6v = {
    [Ppe.UNSPECIFIED]: "unknown",
    [Ppe.GIT]: "git",
    [Ppe.SLACK]: "slack",
    [Ppe.LINEAR]: "linear",
    [Ppe.CRON]: "cron",
    [Ppe.WEBHOOK]: "webhook",
    [Ppe.SLACK_CHANNEL_CREATED]: "slackChannelCreated",
    [Ppe.PAGERDUTY]: "pagerduty",
    [Ppe.SENTRY]: "sentry",
    [Ppe.MICROSOFT_TEAMS]: "microsoftTeams",
    [Ppe.MICROSOFT_TEAMS_CHANNEL_CREATED]: "microsoftTeamsChannelCreated",
    [Ppe.SLACK_REACTION_ADDED]: "slackReactionAdded",
    [Ppe.EMAIL_RECEIVED]: "unknown"
}, y6v = {
    [oqt.UNSPECIFIED]: "pending",
    [oqt.PENDING]: "pending",
    [oqt.SUCCESS]: "success",
    [oqt.ERROR]: "error",
    [oqt.SKIPPED]: "skipped"
}, S6v = {
    [C6.UNSPECIFIED]: "unspecified",
    [C6.UNAUTHENTICATED_REPO_ACCESS]: "unauthenticatedRepoAccess",
    [C6.RESOURCE_EXHAUSTED]: "resourceExhausted",
    [C6.UNAVAILABLE]: "unavailable",
    [C6.CI_SIGNAL_FAILURE]: "ciSignalFailure",
    [C6.UNKNOWN]: "unknown",
    [C6.FAILED_TO_START_AGENT]: "failedToStartAgent",
    [C6.CANCELLED_BY_USER]: "cancelledByUser",
    [C6.CANCELLED_AUTOMATION_DISABLED]: "cancelledAutomationDisabled",
    [C6.CONCURRENT_LIMIT_EXCEEDED]: "concurrentLimitExceeded",
    [C6.BRANCH_NOT_FOUND]: "branchNotFound",
    [C6.MODEL_BLOCKED]: "modelBlocked",
    [C6.PRIVATE_WORKERS_DISABLED]: "privateWorkersDisabled",
    [C6.PRIVATE_WORKER_RESOURCE_EXHAUSTED]: "privateWorkerResourceExhausted",
    [C6.GITHUB_IP_ALLOWLIST]: "githubIpAllowlist",
    [C6.INVALID_REQUEST]: "invalidRequest",
    [C6.CLOUD_AGENT_PLAN_RESTRICTED]: "cloudAgentPlanRestricted",
    [C6.PRIVATE_WORKER_MISSING_REPO]: "privateWorkerMissingRepo",
    [C6.ENVIRONMENT_BUILD_FAILED]: "environmentBuildFailed",
    [C6.FORK_PR_UNSUPPORTED]: "forkPrUnsupported",
    [C6.PROTECTED_SCOPE_BLOCKED]: "protectedScopeBlocked",
    [C6.CANCELLED_SUPERSEDED_BY_NEWER_EVENT]: "cancelledSupersededByNewerEvent",
    [C6.USER_BLOCKED]: "userBlocked",
    [C6.PAYLOAD_TOO_LARGE]: "payloadTooLarge"
}, k6v = {
    [l0i.UNSPECIFIED]: "unspecified",
    [l0i.LAUNCH_CONTEXT_MISSING]: "launchContextMissing",
    [l0i.PERMISSION_DENIED]: "permissionDenied"
};

}
