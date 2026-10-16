import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { qd } from "./struct_pb.js";
import { E } from "./tslib.es6.js";
var a0i, Gqe, mie, qqe, SPe, rqt, sqt, EJ, Pot, c4e, oqt, vFm, Ppe, _Fm, aqt, nza, NCt, C6, l0i, wCe, u4e, iza, rza, sza, oza, aza, d4e, lza, IQr, cza, uza, dza, bFm, yFm, hza, pza, SFm, kFm, mza, gza, wFm, fza, vza, _za, bza, yza, Sza, kza, wza, Cza, CFm, TFm, EFm, Tza, Eza, Iza, xza, Aza, Rza, Pza, Mza, Dza, Nza, Lza, Oza, Fza, Bza, Uza, jza, $za, Hza, Wza, Gza, qza, zza, IFm, Vza, xFm, Kza, AFm, Yza, Xza, Zza, RFm, PFm, MFm, DFm, NFm, Qza, LFm, OFm, FFm, BFm, c0i, Jza, UFm, xQr, eVa, BEn, jFm, tVa, UEn, nVa, iVa, $Fm, rVa, HFm, AQr, sVa, oVa, RQr, PQr, MQr, DQr, NQr, LQr, OQr, FQr, aVa, BQr, UQr, jQr, $Qr, HQr, WFm, lVa, GFm, h4e, qFm, zFm, cVa, VFm, uVa, KFm, YFm, XFm, ZFm, QFm, JFm, dVa, e6m, hVa, t6m, pVa, n6m, mVa, i6m, r6m, s6m, o6m, a6m, WQr, gVa, l6m, c6m, u6m, d6m, h6m, p6m, m6m, fVa, vVa, g6m, GQr, f6m, _Va, v6m, bVa, _6m, yVa, b6m, SVa, y6m, kVa, S6m, k6m, w6m, qQr, wVa, u0i, CVa, C6m, TVa, T6m, EVa, E6m, IVa, I6m, x6m, A6m, R6m, P6m, M6m, D6m, N6m, L6m, O6m, F6m, B6m, xVa, U6m, AVa, j6m, $6m, H6m, W6m;
export { $6m, $Fm, $Qr, $za, A6m, AFm, AQr, AVa, Aza, B6m, BEn, BFm, BQr, Bza, C6, C6m, CFm, CVa, Cza, D6m, DFm, DQr, Dza, E6m, EFm, EJ, EVa, Eza, F6m, FFm, FQr, Fza, GFm, GQr, Gqe, Gza, H6m, HFm, HQr, Hza, I6m, IFm, IQr, IVa, Iza, JFm, Jza, KFm, Kza, L6m, LFm, LQr, Lza, M6m, MFm, MQr, Mza, N6m, NCt, NFm, NQr, Nza, O6m, OFm, OQr, Oza, P6m, PFm, PQr, Pot, Ppe, Pza, QFm, Qza, R6m, RFm, RQr, Rza, S6m, SFm, SPe, SVa, Sza, T6m, TFm, TVa, Tza, U6m, UEn, UFm, UQr, Uza, VFm, Vza, W6m, WFm, WQr, Wza, XFm, Xza, YFm, Yza, ZFm, Zza, _6m, _Fm, _Va, _za, a0i, a6m, aVa, aqt, aza, b6m, bFm, bVa, bza, c0i, c4e, c6m, cVa, cza, d4e, d6m, dVa, dza, e6m, eVa, f6m, fVa, fza, g6m, gVa, gza, h4e, h6m, hVa, hza, i6m, iVa, iza, j6m, jFm, jQr, jza, k6m, kFm, kVa, kza, l0i, l6m, lVa, lza, m6m, mVa, mie, mza, n6m, nVa, nza, o6m, oVa, oqt, oza, p6m, pVa, pza, qFm, qQr, qqe, qza, r6m, rVa, rqt, rza, s6m, sVa, sqt, sza, t6m, tVa, u0i, u4e, u6m, uVa, uza, v6m, vFm, vVa, vza, w6m, wCe, wFm, wVa, wza, x6m, xFm, xQr, xVa, xza, y6m, yFm, yVa, yza, zFm, zza };
var __wakaru_GM_initialized = false;
export function GM() {
if (__wakaru_GM_initialized) return;
__wakaru_GM_initialized = true;
"use strict";
E(), hr(), a0i = x.makeEnum("aiserver.v1.AutomationDefaultTool", [
    {
        no: 0,
        name: "AUTOMATION_DEFAULT_TOOL_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "AUTOMATION_DEFAULT_TOOL_OPEN_GIT_PR",
        localName: "OPEN_GIT_PR"
    }
]), Gqe = x.makeEnum("aiserver.v1.SlackCompletionReactionMode", [
    {
        no: 0,
        name: "SLACK_COMPLETION_REACTION_MODE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "SLACK_COMPLETION_REACTION_MODE_ON",
        localName: "ON"
    },
    {
        no: 2,
        name: "SLACK_COMPLETION_REACTION_MODE_OFF",
        localName: "OFF"
    },
    {
        no: 3,
        name: "SLACK_COMPLETION_REACTION_MODE_CUSTOM",
        localName: "CUSTOM"
    }
]), mie = x.makeEnum("aiserver.v1.AutomationScope", [
    {
        no: 0,
        name: "AUTOMATION_SCOPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "AUTOMATION_SCOPE_USER",
        localName: "USER"
    },
    {
        no: 2,
        name: "AUTOMATION_SCOPE_TEAM",
        localName: "TEAM"
    },
    {
        no: 3,
        name: "AUTOMATION_SCOPE_TEAM_VISIBLE",
        localName: "TEAM_VISIBLE"
    },
    {
        no: 4,
        name: "AUTOMATION_SCOPE_TEAM_EDITABLE",
        localName: "TEAM_EDITABLE"
    },
    {
        no: 5,
        name: "AUTOMATION_SCOPE_TEAM_EDITABLE_USER",
        localName: "TEAM_EDITABLE_USER"
    }
]), qqe = x.makeEnum("aiserver.v1.AutomationCreationSource", [
    {
        no: 0,
        name: "AUTOMATION_CREATION_SOURCE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "AUTOMATION_CREATION_SOURCE_PORTAL_WEB",
        localName: "PORTAL_WEB"
    },
    {
        no: 2,
        name: "AUTOMATION_CREATION_SOURCE_GLASS_UI",
        localName: "GLASS_UI"
    },
    {
        no: 3,
        name: "AUTOMATION_CREATION_SOURCE_SKILL_MCP",
        localName: "SKILL_MCP"
    },
    {
        no: 4,
        name: "AUTOMATION_CREATION_SOURCE_CONFIG_AS_CODE",
        localName: "CONFIG_AS_CODE"
    }
]), SPe = x.makeEnum("aiserver.v1.AutomationManagedBy", [
    {
        no: 0,
        name: "AUTOMATION_MANAGED_BY_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "AUTOMATION_MANAGED_BY_UI",
        localName: "UI"
    },
    {
        no: 2,
        name: "AUTOMATION_MANAGED_BY_DEPLOY",
        localName: "DEPLOY"
    },
    {
        no: 3,
        name: "AUTOMATION_MANAGED_BY_ANY",
        localName: "ANY"
    }
]), rqt = x.makeEnum("aiserver.v1.PromptEffortLevel", [
    {
        no: 0,
        name: "PROMPT_EFFORT_LEVEL_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "PROMPT_EFFORT_LEVEL_STANDARD",
        localName: "STANDARD"
    },
    {
        no: 10,
        name: "PROMPT_EFFORT_LEVEL_HARD",
        localName: "HARD"
    }
]), sqt = x.makeEnum("aiserver.v1.PromptRunMode", [
    {
        no: 0,
        name: "PROMPT_RUN_MODE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "PROMPT_RUN_MODE_SAME_CHAT",
        localName: "SAME_CHAT"
    },
    {
        no: 2,
        name: "PROMPT_RUN_MODE_NEW_AGENT",
        localName: "NEW_AGENT"
    }
]), EJ = x.makeEnum("aiserver.v1.GitPullRequestAction", [
    {
        no: 0,
        name: "GIT_PULL_REQUEST_ACTION_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "GIT_PULL_REQUEST_ACTION_OPENED",
        localName: "OPENED"
    },
    {
        no: 2,
        name: "GIT_PULL_REQUEST_ACTION_PUSHED",
        localName: "PUSHED"
    },
    {
        no: 3,
        name: "GIT_PULL_REQUEST_ACTION_MERGED",
        localName: "MERGED"
    },
    {
        no: 4,
        name: "GIT_PULL_REQUEST_ACTION_COMMENTED",
        localName: "COMMENTED"
    },
    {
        no: 5,
        name: "GIT_PULL_REQUEST_ACTION_DRAFT_OPENED",
        localName: "DRAFT_OPENED"
    },
    {
        no: 6,
        name: "GIT_PULL_REQUEST_ACTION_LABELED",
        localName: "LABELED"
    },
    {
        no: 7,
        name: "GIT_PULL_REQUEST_ACTION_UNLABELED",
        localName: "UNLABELED"
    },
    {
        no: 8,
        name: "GIT_PULL_REQUEST_ACTION_CLOSED",
        localName: "CLOSED"
    }
]), Pot = x.makeEnum("aiserver.v1.GitCICompletionCondition", [
    {
        no: 0,
        name: "GIT_CI_COMPLETION_CONDITION_UNSPECIFIED"
    },
    {
        no: 1,
        name: "GIT_CI_COMPLETION_CONDITION_FAILURE"
    },
    {
        no: 2,
        name: "GIT_CI_COMPLETION_CONDITION_SUCCESS"
    },
    {
        no: 3,
        name: "GIT_CI_COMPLETION_CONDITION_ANY"
    }
]), c4e = x.makeEnum("aiserver.v1.GitWorkflowRunConclusion", [
    {
        no: 0,
        name: "GIT_WORKFLOW_RUN_CONCLUSION_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "GIT_WORKFLOW_RUN_CONCLUSION_ANY",
        localName: "ANY"
    },
    {
        no: 2,
        name: "GIT_WORKFLOW_RUN_CONCLUSION_SUCCESS",
        localName: "SUCCESS"
    },
    {
        no: 3,
        name: "GIT_WORKFLOW_RUN_CONCLUSION_FAILURE",
        localName: "FAILURE"
    },
    {
        no: 4,
        name: "GIT_WORKFLOW_RUN_CONCLUSION_CANCELLED",
        localName: "CANCELLED"
    }
]), oqt = x.makeEnum("aiserver.v1.PlatformActionStatus", [
    {
        no: 0,
        name: "PLATFORM_ACTION_STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "PLATFORM_ACTION_STATUS_PENDING",
        localName: "PENDING"
    },
    {
        no: 2,
        name: "PLATFORM_ACTION_STATUS_SUCCESS",
        localName: "SUCCESS"
    },
    {
        no: 3,
        name: "PLATFORM_ACTION_STATUS_ERROR",
        localName: "ERROR"
    },
    {
        no: 4,
        name: "PLATFORM_ACTION_STATUS_SKIPPED",
        localName: "SKIPPED"
    }
]), vFm = x.makeEnum("aiserver.v1.PlatformActionScope", [
    {
        no: 0,
        name: "PLATFORM_ACTION_SCOPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "PLATFORM_ACTION_SCOPE_WORKFLOW",
        localName: "WORKFLOW"
    },
    {
        no: 2,
        name: "PLATFORM_ACTION_SCOPE_TRIGGER",
        localName: "TRIGGER"
    }
]), Ppe = x.makeEnum("aiserver.v1.PlatformTriggerType", [
    {
        no: 0,
        name: "PLATFORM_TRIGGER_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "PLATFORM_TRIGGER_TYPE_GIT",
        localName: "GIT"
    },
    {
        no: 2,
        name: "PLATFORM_TRIGGER_TYPE_SLACK",
        localName: "SLACK"
    },
    {
        no: 3,
        name: "PLATFORM_TRIGGER_TYPE_LINEAR",
        localName: "LINEAR"
    },
    {
        no: 4,
        name: "PLATFORM_TRIGGER_TYPE_CRON",
        localName: "CRON"
    },
    {
        no: 5,
        name: "PLATFORM_TRIGGER_TYPE_WEBHOOK",
        localName: "WEBHOOK"
    },
    {
        no: 6,
        name: "PLATFORM_TRIGGER_TYPE_SLACK_CHANNEL_CREATED",
        localName: "SLACK_CHANNEL_CREATED"
    },
    {
        no: 7,
        name: "PLATFORM_TRIGGER_TYPE_PAGERDUTY",
        localName: "PAGERDUTY"
    },
    {
        no: 8,
        name: "PLATFORM_TRIGGER_TYPE_SENTRY",
        localName: "SENTRY"
    },
    {
        no: 9,
        name: "PLATFORM_TRIGGER_TYPE_MICROSOFT_TEAMS",
        localName: "MICROSOFT_TEAMS"
    },
    {
        no: 10,
        name: "PLATFORM_TRIGGER_TYPE_MICROSOFT_TEAMS_CHANNEL_CREATED",
        localName: "MICROSOFT_TEAMS_CHANNEL_CREATED"
    },
    {
        no: 11,
        name: "PLATFORM_TRIGGER_TYPE_SLACK_REACTION_ADDED",
        localName: "SLACK_REACTION_ADDED"
    },
    {
        no: 12,
        name: "PLATFORM_TRIGGER_TYPE_EMAIL_RECEIVED",
        localName: "EMAIL_RECEIVED"
    }
]), _Fm = x.makeEnum("aiserver.v1.McpAuthState", [
    {
        no: 0,
        name: "MCP_AUTH_STATE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "MCP_AUTH_STATE_UNKNOWN",
        localName: "UNKNOWN"
    },
    {
        no: 2,
        name: "MCP_AUTH_STATE_AUTHENTICATED",
        localName: "AUTHENTICATED"
    },
    {
        no: 3,
        name: "MCP_AUTH_STATE_NEEDS_AUTH",
        localName: "NEEDS_AUTH"
    }
]), aqt = x.makeEnum("aiserver.v1.AutomationRunListKind", [
    {
        no: 0,
        name: "AUTOMATION_RUN_LIST_KIND_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "AUTOMATION_RUN_LIST_KIND_EXECUTION_RUNS",
        localName: "EXECUTION_RUNS"
    },
    {
        no: 2,
        name: "AUTOMATION_RUN_LIST_KIND_FILTER_EVALUATIONS",
        localName: "FILTER_EVALUATIONS"
    }
]), nza = x.makeEnum("aiserver.v1.AutomationFilterDecision", [
    {
        no: 0,
        name: "AUTOMATION_FILTER_DECISION_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "AUTOMATION_FILTER_DECISION_ALLOW",
        localName: "ALLOW"
    },
    {
        no: 2,
        name: "AUTOMATION_FILTER_DECISION_BLOCK",
        localName: "BLOCK"
    },
    {
        no: 3,
        name: "AUTOMATION_FILTER_DECISION_ERROR",
        localName: "ERROR"
    }
]), NCt = x.makeEnum("aiserver.v1.AutomationRunStatus", [
    {
        no: 0,
        name: "AUTOMATION_RUN_STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "AUTOMATION_RUN_STATUS_RUNNING",
        localName: "RUNNING"
    },
    {
        no: 2,
        name: "AUTOMATION_RUN_STATUS_FAILED",
        localName: "FAILED"
    },
    {
        no: 3,
        name: "AUTOMATION_RUN_STATUS_SUCCEEDED",
        localName: "SUCCEEDED"
    },
    {
        no: 4,
        name: "AUTOMATION_RUN_STATUS_SKIPPED",
        localName: "SKIPPED"
    }
]), C6 = x.makeEnum("aiserver.v1.AutomationRunFailureCode", [
    {
        no: 0,
        name: "AUTOMATION_RUN_FAILURE_CODE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 2,
        name: "AUTOMATION_RUN_FAILURE_CODE_UNAUTHENTICATED_REPO_ACCESS",
        localName: "UNAUTHENTICATED_REPO_ACCESS"
    },
    {
        no: 3,
        name: "AUTOMATION_RUN_FAILURE_CODE_RESOURCE_EXHAUSTED",
        localName: "RESOURCE_EXHAUSTED"
    },
    {
        no: 4,
        name: "AUTOMATION_RUN_FAILURE_CODE_UNAVAILABLE",
        localName: "UNAVAILABLE"
    },
    {
        no: 5,
        name: "AUTOMATION_RUN_FAILURE_CODE_CI_SIGNAL_FAILURE",
        localName: "CI_SIGNAL_FAILURE"
    },
    {
        no: 6,
        name: "AUTOMATION_RUN_FAILURE_CODE_UNKNOWN",
        localName: "UNKNOWN"
    },
    {
        no: 7,
        name: "AUTOMATION_RUN_FAILURE_CODE_FAILED_TO_START_AGENT",
        localName: "FAILED_TO_START_AGENT"
    },
    {
        no: 8,
        name: "AUTOMATION_RUN_FAILURE_CODE_CANCELLED_BY_USER",
        localName: "CANCELLED_BY_USER"
    },
    {
        no: 9,
        name: "AUTOMATION_RUN_FAILURE_CODE_CANCELLED_AUTOMATION_DISABLED",
        localName: "CANCELLED_AUTOMATION_DISABLED"
    },
    {
        no: 10,
        name: "AUTOMATION_RUN_FAILURE_CODE_CONCURRENT_LIMIT_EXCEEDED",
        localName: "CONCURRENT_LIMIT_EXCEEDED"
    },
    {
        no: 11,
        name: "AUTOMATION_RUN_FAILURE_CODE_BRANCH_NOT_FOUND",
        localName: "BRANCH_NOT_FOUND"
    },
    {
        no: 12,
        name: "AUTOMATION_RUN_FAILURE_CODE_MODEL_BLOCKED",
        localName: "MODEL_BLOCKED"
    },
    {
        no: 13,
        name: "AUTOMATION_RUN_FAILURE_CODE_PRIVATE_WORKERS_DISABLED",
        localName: "PRIVATE_WORKERS_DISABLED"
    },
    {
        no: 14,
        name: "AUTOMATION_RUN_FAILURE_CODE_PRIVATE_WORKER_RESOURCE_EXHAUSTED",
        localName: "PRIVATE_WORKER_RESOURCE_EXHAUSTED"
    },
    {
        no: 15,
        name: "AUTOMATION_RUN_FAILURE_CODE_GITHUB_IP_ALLOWLIST",
        localName: "GITHUB_IP_ALLOWLIST"
    },
    {
        no: 16,
        name: "AUTOMATION_RUN_FAILURE_CODE_INVALID_REQUEST",
        localName: "INVALID_REQUEST"
    },
    {
        no: 17,
        name: "AUTOMATION_RUN_FAILURE_CODE_CLOUD_AGENT_PLAN_RESTRICTED",
        localName: "CLOUD_AGENT_PLAN_RESTRICTED"
    },
    {
        no: 18,
        name: "AUTOMATION_RUN_FAILURE_CODE_PRIVATE_WORKER_MISSING_REPO",
        localName: "PRIVATE_WORKER_MISSING_REPO"
    },
    {
        no: 19,
        name: "AUTOMATION_RUN_FAILURE_CODE_ENVIRONMENT_BUILD_FAILED",
        localName: "ENVIRONMENT_BUILD_FAILED"
    },
    {
        no: 20,
        name: "AUTOMATION_RUN_FAILURE_CODE_FORK_PR_UNSUPPORTED",
        localName: "FORK_PR_UNSUPPORTED"
    },
    {
        no: 21,
        name: "AUTOMATION_RUN_FAILURE_CODE_PROTECTED_SCOPE_BLOCKED",
        localName: "PROTECTED_SCOPE_BLOCKED"
    },
    {
        no: 22,
        name: "AUTOMATION_RUN_FAILURE_CODE_CANCELLED_SUPERSEDED_BY_NEWER_EVENT",
        localName: "CANCELLED_SUPERSEDED_BY_NEWER_EVENT"
    },
    {
        no: 23,
        name: "AUTOMATION_RUN_FAILURE_CODE_USER_BLOCKED",
        localName: "USER_BLOCKED"
    },
    {
        no: 24,
        name: "AUTOMATION_RUN_FAILURE_CODE_PAYLOAD_TOO_LARGE",
        localName: "PAYLOAD_TOO_LARGE"
    }
]), l0i = x.makeEnum("aiserver.v1.AutomationRunRetryIneligibleReason", [
    {
        no: 0,
        name: "AUTOMATION_RUN_RETRY_INELIGIBLE_REASON_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "AUTOMATION_RUN_RETRY_INELIGIBLE_REASON_LAUNCH_CONTEXT_MISSING",
        localName: "LAUNCH_CONTEXT_MISSING"
    },
    {
        no: 2,
        name: "AUTOMATION_RUN_RETRY_INELIGIBLE_REASON_PERMISSION_DENIED",
        localName: "PERMISSION_DENIED"
    }
]), wCe = x.makeMessageType("aiserver.v1.Trigger", ()=>[
        {
            no: 1,
            name: "cron",
            kind: "message",
            T: dza,
            oneof: "trigger"
        },
        {
            no: 2,
            name: "git",
            kind: "message",
            T: hza,
            oneof: "trigger"
        },
        {
            no: 7,
            name: "slack_trigger",
            kind: "message",
            T: kza,
            oneof: "trigger"
        },
        {
            no: 9,
            name: "linear",
            kind: "message",
            T: Tza,
            oneof: "trigger"
        },
        {
            no: 11,
            name: "webhook",
            kind: "message",
            T: Aza,
            oneof: "trigger"
        },
        {
            no: 12,
            name: "slack_channel_created",
            kind: "message",
            T: wza,
            oneof: "trigger"
        },
        {
            no: 13,
            name: "pagerduty",
            kind: "message",
            T: Rza,
            oneof: "trigger"
        },
        {
            no: 15,
            name: "sentry",
            kind: "message",
            T: Oza,
            oneof: "trigger"
        },
        {
            no: 16,
            name: "microsoft_teams_trigger",
            kind: "message",
            T: Wza,
            oneof: "trigger"
        },
        {
            no: 17,
            name: "microsoft_teams_channel_created",
            kind: "message",
            T: Gza,
            oneof: "trigger"
        },
        {
            no: 18,
            name: "slack_reaction_added",
            kind: "message",
            T: Cza,
            oneof: "trigger"
        },
        {
            no: 19,
            name: "slack_mention",
            kind: "message",
            T: CFm,
            oneof: "trigger"
        },
        {
            no: 20,
            name: "slack_any_reaction_added",
            kind: "message",
            T: TFm,
            oneof: "trigger"
        },
        {
            no: 21,
            name: "email_received",
            kind: "message",
            T: EFm,
            oneof: "trigger"
        },
        {
            no: 14,
            name: "agentic_filter_prompt",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), u4e = x.makeMessageType("aiserver.v1.Action", ()=>[
        {
            no: 4,
            name: "git_pr",
            kind: "message",
            T: qza,
            oneof: "action"
        },
        {
            no: 5,
            name: "pr_comment",
            kind: "message",
            T: zza,
            oneof: "action"
        },
        {
            no: 6,
            name: "slack",
            kind: "message",
            T: Yza,
            oneof: "action"
        },
        {
            no: 7,
            name: "mcp",
            kind: "message",
            T: iza,
            oneof: "action"
        },
        {
            no: 8,
            name: "manage_check_run",
            kind: "message",
            T: IFm,
            oneof: "action"
        },
        {
            no: 9,
            name: "request_reviewers",
            kind: "message",
            T: Vza,
            oneof: "action"
        },
        {
            no: 10,
            name: "read_slack",
            kind: "message",
            T: Kza,
            oneof: "action"
        },
        {
            no: 11,
            name: "approve_pr",
            kind: "message",
            T: xFm,
            oneof: "action"
        },
        {
            no: 12,
            name: "resolve_review_threads",
            kind: "message",
            T: AFm,
            oneof: "action"
        },
        {
            no: 13,
            name: "microsoft_teams",
            kind: "message",
            T: Xza,
            oneof: "action"
        },
        {
            no: 14,
            name: "read_microsoft_teams",
            kind: "message",
            T: Zza,
            oneof: "action"
        }
    ]), iza = x.makeMessageType("aiserver.v1.McpAction", ()=>[
        {
            no: 1,
            name: "server",
            kind: "message",
            T: rza
        }
    ]), rza = x.makeMessageType("aiserver.v1.McpServerConfig", ()=>[
        {
            no: 4,
            name: "id",
            kind: "scalar",
            T: 3,
            opt: !0
        },
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        }
    ]), sza = x.makeMessageType("aiserver.v1.AgentPrivateWorkerLabel", ()=>[
        {
            no: 1,
            name: "key",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "value",
            kind: "scalar",
            T: 9
        }
    ]), oza = x.makeMessageType("aiserver.v1.AgentPrivateWorkerConfig", ()=>[
        {
            no: 1,
            name: "labels",
            kind: "message",
            T: sza,
            repeated: !0
        }
    ]), aza = x.makeMessageType("aiserver.v1.AgentOptions", ()=>[
        {
            no: 1,
            name: "skip_install",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 2,
            name: "private_worker",
            kind: "message",
            T: oza,
            opt: !0
        },
        {
            no: 3,
            name: "environment_public_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), d4e = x.makeMessageType("aiserver.v1.Workflow", ()=>[
        {
            no: 10,
            name: "triggers",
            kind: "message",
            T: wCe,
            repeated: !0
        },
        {
            no: 11,
            name: "actions",
            kind: "message",
            T: u4e,
            repeated: !0
        },
        {
            no: 3,
            name: "prompts",
            kind: "message",
            T: lza,
            repeated: !0
        },
        {
            no: 8,
            name: "model",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 12,
            name: "git_config",
            kind: "message",
            T: uza,
            opt: !0
        },
        {
            no: 13,
            name: "agent_options",
            kind: "message",
            T: aza,
            opt: !0
        },
        {
            no: 14,
            name: "memory_enabled",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 15,
            name: "slack_notified_channels",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 16,
            name: "slack_completion_reaction_mode",
            kind: "enum",
            T: x.getEnumType(Gqe),
            opt: !0
        },
        {
            no: 17,
            name: "slack_completion_reaction_custom_emoji",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 18,
            name: "managed_config",
            kind: "message",
            T: qd,
            opt: !0
        },
        {
            no: 19,
            name: "disabled_default_tools",
            kind: "enum",
            T: x.getEnumType(a0i),
            repeated: !0
        },
        {
            no: 20,
            name: "grok_bot_session_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 21,
            name: "grok_bot_creator_auth_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 22,
            name: "model_selection",
            kind: "message",
            T: IQr,
            opt: !0
        }
    ]), lza = x.makeMessageType("aiserver.v1.Prompt", ()=>[
        {
            no: 1,
            name: "prompt",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "effort_level",
            kind: "enum",
            T: x.getEnumType(rqt)
        },
        {
            no: 3,
            name: "model",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "is_filter",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 5,
            name: "run_mode",
            kind: "enum",
            T: x.getEnumType(sqt),
            opt: !0
        },
        {
            no: 6,
            name: "suppress_slack_reaction",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 7,
            name: "model_selection",
            kind: "message",
            T: IQr,
            opt: !0
        }
    ]), IQr = x.makeMessageType("aiserver.v1.AutomationModelSelection", ()=>[
        {
            no: 1,
            name: "model_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "parameters",
            kind: "message",
            T: cza,
            repeated: !0
        },
        {
            no: 3,
            name: "max_mode",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), cza = x.makeMessageType("aiserver.v1.AutomationModelSelection.ParameterValue", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "value",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "AutomationModelSelection_ParameterValue"
}), uza = x.makeMessageType("aiserver.v1.GitConfig", ()=>[
        {
            no: 3,
            name: "repo",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "branch",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "repos",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), dza = x.makeMessageType("aiserver.v1.CronTrigger", ()=>[
        {
            no: 1,
            name: "cron",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "nominal_cron",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "exact",
            kind: "message",
            T: bFm,
            oneof: "schedule_mode"
        },
        {
            no: 5,
            name: "flexible",
            kind: "message",
            T: yFm,
            oneof: "schedule_mode"
        },
        {
            no: 6,
            name: "offset_minutes",
            kind: "scalar",
            T: 5
        }
    ]), bFm = x.makeMessageType("aiserver.v1.ExactSchedule", []), yFm = x.makeMessageType("aiserver.v1.FlexibleSchedule", ()=>[
        {
            no: 1,
            name: "max_early_execution_minutes",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "max_late_execution_minutes",
            kind: "scalar",
            T: 5
        }
    ]), hza = x.makeMessageType("aiserver.v1.GitTrigger", ()=>[
        {
            no: 1,
            name: "pull_request",
            kind: "message",
            T: pza,
            oneof: "event"
        },
        {
            no: 2,
            name: "push",
            kind: "message",
            T: mza,
            oneof: "event"
        },
        {
            no: 4,
            name: "ci_completed",
            kind: "message",
            T: gza,
            oneof: "event"
        },
        {
            no: 5,
            name: "issue_labeled",
            kind: "message",
            T: wFm,
            oneof: "event"
        },
        {
            no: 6,
            name: "label",
            kind: "message",
            T: Sza,
            oneof: "event"
        },
        {
            no: 7,
            name: "issue_comment",
            kind: "message",
            T: fza,
            oneof: "event"
        },
        {
            no: 8,
            name: "pull_request_review_comment",
            kind: "message",
            T: vza,
            oneof: "event"
        },
        {
            no: 9,
            name: "pull_request_review",
            kind: "message",
            T: _za,
            oneof: "event"
        },
        {
            no: 10,
            name: "review_thread",
            kind: "message",
            T: bza,
            oneof: "event"
        },
        {
            no: 11,
            name: "workflow_run",
            kind: "message",
            T: yza,
            oneof: "event"
        },
        {
            no: 12,
            name: "pull_request_review_requested",
            kind: "message",
            T: SFm,
            oneof: "event"
        },
        {
            no: 13,
            name: "issue_assigned",
            kind: "message",
            T: kFm,
            oneof: "event"
        },
        {
            no: 3,
            name: "user_allowlist",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 14,
            name: "pr_number",
            kind: "scalar",
            T: 5
        }
    ]), pza = x.makeMessageType("aiserver.v1.GitPullRequestEvent", ()=>[
        {
            no: 1,
            name: "repo",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "repos",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 3,
            name: "ignore_draft_prs",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "only_once",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "pr_action",
            kind: "enum",
            T: x.getEnumType(EJ)
        },
        {
            no: 6,
            name: "commenter_allowlist",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 7,
            name: "comment_contains",
            kind: "scalar",
            T: 9
        },
        {
            no: 10,
            name: "comment_contains_is_regex",
            kind: "scalar",
            T: 8
        },
        {
            no: 8,
            name: "label_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 9,
            name: "orgs",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), SFm = x.makeMessageType("aiserver.v1.GitPullRequestReviewRequestedEvent", ()=>[
        {
            no: 1,
            name: "repos",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), kFm = x.makeMessageType("aiserver.v1.GitIssueAssignedEvent", ()=>[
        {
            no: 1,
            name: "repos",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), mza = x.makeMessageType("aiserver.v1.GitPushEvent", ()=>[
        {
            no: 1,
            name: "repo",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "branch",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "repos",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), gza = x.makeMessageType("aiserver.v1.GitCICompletedEvent", ()=>[
        {
            no: 1,
            name: "repos",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 2,
            name: "condition",
            kind: "enum",
            T: x.getEnumType(Pot)
        },
        {
            no: 3,
            name: "ignore_base_failures",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "branch",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "pr_number",
            kind: "scalar",
            T: 5
        }
    ]), wFm = x.makeMessageType("aiserver.v1.GitIssueLabeledEvent", ()=>[
        {
            no: 1,
            name: "repos",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 2,
            name: "label_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "unlabeled",
            kind: "scalar",
            T: 8
        }
    ]), fza = x.makeMessageType("aiserver.v1.GitIssueCommentEvent", ()=>[
        {
            no: 1,
            name: "repos",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 2,
            name: "commenter_allowlist",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 3,
            name: "comment_contains",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "comment_contains_is_regex",
            kind: "scalar",
            T: 8
        }
    ]), vza = x.makeMessageType("aiserver.v1.GitPullRequestReviewCommentEvent", ()=>[
        {
            no: 1,
            name: "repos",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 2,
            name: "commenter_allowlist",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 3,
            name: "comment_contains",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "comment_contains_is_regex",
            kind: "scalar",
            T: 8
        }
    ]), _za = x.makeMessageType("aiserver.v1.GitPullRequestReviewEvent", ()=>[
        {
            no: 1,
            name: "repos",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 2,
            name: "on_approved",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "on_changes_requested",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "on_commented",
            kind: "scalar",
            T: 8
        }
    ]), bza = x.makeMessageType("aiserver.v1.GitReviewThreadEvent", ()=>[
        {
            no: 1,
            name: "repos",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 2,
            name: "on_resolved",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "on_unresolved",
            kind: "scalar",
            T: 8
        }
    ]), yza = x.makeMessageType("aiserver.v1.GitWorkflowRunEvent", ()=>[
        {
            no: 1,
            name: "repos",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 2,
            name: "workflow_names",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 3,
            name: "branch",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "conclusion",
            kind: "enum",
            T: x.getEnumType(c4e)
        }
    ]), Sza = x.makeMessageType("aiserver.v1.GitLabelEvent", ()=>[
        {
            no: 1,
            name: "repos",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 2,
            name: "label_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "on_added",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "on_removed",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "pull_requests",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "issues",
            kind: "scalar",
            T: 8
        }
    ]), kza = x.makeMessageType("aiserver.v1.SlackTrigger", ()=>[
        {
            no: 1,
            name: "channel",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "message_contains",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "message_contains_is_regex",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "channels",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 6,
            name: "block_unauthenticated_slack_users",
            kind: "scalar",
            T: 8
        },
        {
            no: 7,
            name: "slack_completion_reaction_mode",
            kind: "enum",
            T: x.getEnumType(Gqe),
            opt: !0
        },
        {
            no: 8,
            name: "slack_completion_reaction_custom_emoji",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 9,
            name: "top_level_only",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), wza = x.makeMessageType("aiserver.v1.SlackChannelCreatedTrigger", ()=>[
        {
            no: 1,
            name: "channel_name_contains",
            kind: "scalar",
            T: 9
        }
    ]), Cza = x.makeMessageType("aiserver.v1.SlackReactionAddedTrigger", ()=>[
        {
            no: 1,
            name: "channel",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "emoji_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "channels",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 6,
            name: "block_unauthenticated_slack_users",
            kind: "scalar",
            T: 8
        },
        {
            no: 9,
            name: "only_owner_reactions",
            kind: "scalar",
            T: 8
        }
    ]), CFm = x.makeMessageType("aiserver.v1.SlackMentionTrigger", ()=>[
        {
            no: 1,
            name: "channel",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "channels",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 3,
            name: "block_unauthenticated_slack_users",
            kind: "scalar",
            T: 8
        }
    ]), TFm = x.makeMessageType("aiserver.v1.SlackAnyReactionAddedTrigger", ()=>[
        {
            no: 1,
            name: "channel",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "channels",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 3,
            name: "block_unauthenticated_slack_users",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "only_owner_reactions",
            kind: "scalar",
            T: 8
        }
    ]), EFm = x.makeMessageType("aiserver.v1.EmailReceivedTrigger", ()=>[
        {
            no: 1,
            name: "inbox_email",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "from_addresses",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 3,
            name: "require_auth_pass",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), Tza = x.makeMessageType("aiserver.v1.LinearTrigger", ()=>[
        {
            no: 1,
            name: "issue_created",
            kind: "message",
            T: Eza,
            oneof: "event"
        },
        {
            no: 2,
            name: "status_changed",
            kind: "message",
            T: Iza,
            oneof: "event"
        },
        {
            no: 3,
            name: "end_of_cycle",
            kind: "message",
            T: xza,
            oneof: "event"
        },
        {
            no: 4,
            name: "project_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 6,
            name: "team_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), Eza = x.makeMessageType("aiserver.v1.LinearIssueCreatedEvent", []), Iza = x.makeMessageType("aiserver.v1.LinearStatusChangedEvent", ()=>[
        {
            no: 1,
            name: "status_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), xza = x.makeMessageType("aiserver.v1.LinearEndOfCycleEvent", ()=>[
        {
            no: 1,
            name: "cycle_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), Aza = x.makeMessageType("aiserver.v1.WebhookTrigger", []), Rza = x.makeMessageType("aiserver.v1.PagerDutyTrigger", ()=>[
        {
            no: 1,
            name: "incident_triggered",
            kind: "message",
            T: Pza,
            oneof: "event"
        },
        {
            no: 2,
            name: "incident_acknowledged",
            kind: "message",
            T: Mza,
            oneof: "event"
        },
        {
            no: 3,
            name: "incident_resolved",
            kind: "message",
            T: Dza,
            oneof: "event"
        },
        {
            no: 4,
            name: "incident_escalated",
            kind: "message",
            T: Nza,
            oneof: "event"
        },
        {
            no: 5,
            name: "incident_any",
            kind: "message",
            T: Lza,
            oneof: "event"
        },
        {
            no: 6,
            name: "service_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), Pza = x.makeMessageType("aiserver.v1.PagerDutyIncidentTriggeredEvent", []), Mza = x.makeMessageType("aiserver.v1.PagerDutyIncidentAcknowledgedEvent", []), Dza = x.makeMessageType("aiserver.v1.PagerDutyIncidentResolvedEvent", []), Nza = x.makeMessageType("aiserver.v1.PagerDutyIncidentEscalatedEvent", []), Lza = x.makeMessageType("aiserver.v1.PagerDutyIncidentAnyEvent", []), Oza = x.makeMessageType("aiserver.v1.SentryTrigger", ()=>[
        {
            no: 1,
            name: "issue_created",
            kind: "message",
            T: Fza,
            oneof: "event"
        },
        {
            no: 2,
            name: "issue_resolved",
            kind: "message",
            T: Bza,
            oneof: "event"
        },
        {
            no: 3,
            name: "issue_assigned",
            kind: "message",
            T: Uza,
            oneof: "event"
        },
        {
            no: 4,
            name: "issue_archived",
            kind: "message",
            T: jza,
            oneof: "event"
        },
        {
            no: 5,
            name: "issue_unresolved",
            kind: "message",
            T: $za,
            oneof: "event"
        },
        {
            no: 6,
            name: "issue_any",
            kind: "message",
            T: Hza,
            oneof: "event"
        },
        {
            no: 7,
            name: "project_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), Fza = x.makeMessageType("aiserver.v1.SentryIssueCreatedEvent", []), Bza = x.makeMessageType("aiserver.v1.SentryIssueResolvedEvent", []), Uza = x.makeMessageType("aiserver.v1.SentryIssueAssignedEvent", []), jza = x.makeMessageType("aiserver.v1.SentryIssueArchivedEvent", []), $za = x.makeMessageType("aiserver.v1.SentryIssueUnresolvedEvent", []), Hza = x.makeMessageType("aiserver.v1.SentryIssueAnyEvent", []), Wza = x.makeMessageType("aiserver.v1.MicrosoftTeamsTrigger", ()=>[
        {
            no: 1,
            name: "tenant_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "team_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "team_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 4,
            name: "channel_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 5,
            name: "message_contains",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "message_contains_is_regex",
            kind: "scalar",
            T: 8
        },
        {
            no: 7,
            name: "block_unauthenticated_teams_users",
            kind: "scalar",
            T: 8
        }
    ]), Gza = x.makeMessageType("aiserver.v1.MicrosoftTeamsChannelCreatedTrigger", ()=>[
        {
            no: 1,
            name: "tenant_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "team_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 3,
            name: "channel_name_contains",
            kind: "scalar",
            T: 9
        }
    ]), qza = x.makeMessageType("aiserver.v1.GitPrAction", []), zza = x.makeMessageType("aiserver.v1.PrCommentAction", ()=>[
        {
            no: 1,
            name: "minimize_previous_comments",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "allow_inline_comments",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "resolve_stale_threads",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "allow_approve",
            kind: "scalar",
            T: 8
        }
    ]), IFm = x.makeMessageType("aiserver.v1.ManageCheckRunAction", ()=>[
        {
            no: 1,
            name: "deterministic",
            kind: "scalar",
            T: 8
        }
    ]), Vza = x.makeMessageType("aiserver.v1.RequestReviewersAction", []), xFm = x.makeMessageType("aiserver.v1.ApprovePrAction", []), Kza = x.makeMessageType("aiserver.v1.ReadSlackAction", []), AFm = x.makeMessageType("aiserver.v1.ResolveReviewThreadsAction", []), Yza = x.makeMessageType("aiserver.v1.SlackAction", ()=>[
        {
            no: 1,
            name: "channel",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "generalized",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "respond_in_thread",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "post_as_thread",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "channels",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), Xza = x.makeMessageType("aiserver.v1.MicrosoftTeamsAction", ()=>[
        {
            no: 1,
            name: "tenant_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "team_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "channel_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "channel_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 5,
            name: "generalized",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "respond_in_thread",
            kind: "scalar",
            T: 8
        },
        {
            no: 7,
            name: "post_as_thread",
            kind: "scalar",
            T: 8
        }
    ]), Zza = x.makeMessageType("aiserver.v1.ReadMicrosoftTeamsAction", []), RFm = x.makeMessageType("aiserver.v1.PlatformActionEntry", ()=>[
        {
            no: 1,
            name: "scope",
            kind: "enum",
            T: x.getEnumType(vFm)
        },
        {
            no: 2,
            name: "action_index",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "action_type",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "status",
            kind: "enum",
            T: x.getEnumType(oqt)
        },
        {
            no: 5,
            name: "error_message",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "metadata",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        },
        {
            no: 8,
            name: "timestamp",
            kind: "scalar",
            T: 3
        }
    ]), PFm = x.makeMessageType("aiserver.v1.PlatformActionsPayload", ()=>[
        {
            no: 1,
            name: "actions",
            kind: "message",
            T: RFm,
            repeated: !0
        }
    ]), MFm = x.makeMessageType("aiserver.v1.TriggerMetadataEntry", ()=>[
        {
            no: 1,
            name: "trigger_type",
            kind: "enum",
            T: x.getEnumType(Ppe)
        },
        {
            no: 2,
            name: "metadata",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        }
    ]), DFm = x.makeMessageType("aiserver.v1.TriggerMetadataPayload", ()=>[
        {
            no: 1,
            name: "entries",
            kind: "message",
            T: MFm,
            repeated: !0
        }
    ]), NFm = x.makeMessageType("aiserver.v1.AutomationDeploySource", ()=>[
        {
            no: 1,
            name: "kind",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "repo_instance_key",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "repo_node_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "repo_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "path",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "ref",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "commit_sha",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "tool_version",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), Qza = x.makeMessageType("aiserver.v1.AutomationDeploySpec", ()=>[
        {
            no: 1,
            name: "version",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "source",
            kind: "message",
            T: NFm
        },
        {
            no: 3,
            name: "key",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "description",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "enabled",
            kind: "scalar",
            T: 8
        },
        {
            no: 7,
            name: "scope",
            kind: "enum",
            T: x.getEnumType(mie)
        },
        {
            no: 8,
            name: "workflow",
            kind: "message",
            T: d4e
        },
        {
            no: 9,
            name: "managed_by",
            kind: "enum",
            T: x.getEnumType(SPe),
            opt: !0
        }
    ]), LFm = x.makeMessageType("aiserver.v1.ValidateAutomationSpecRequest", ()=>[
        {
            no: 1,
            name: "spec",
            kind: "message",
            T: Qza
        }
    ]), OFm = x.makeMessageType("aiserver.v1.ValidateAutomationSpecResponse", ()=>[
        {
            no: 1,
            name: "would_create",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "automation_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), FFm = x.makeMessageType("aiserver.v1.ApplyAutomationSpecRequest", ()=>[
        {
            no: 1,
            name: "spec",
            kind: "message",
            T: Qza
        }
    ]), BFm = x.makeMessageType("aiserver.v1.ApplyAutomationSpecResponse", ()=>[
        {
            no: 1,
            name: "workflow",
            kind: "message",
            T: h4e
        },
        {
            no: 2,
            name: "created",
            kind: "scalar",
            T: 8
        }
    ]), c0i = x.makeMessageType("aiserver.v1.CreateAutomationRequest", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "workflow",
            kind: "message",
            T: d4e
        },
        {
            no: 3,
            name: "description",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "scope",
            kind: "enum",
            T: x.getEnumType(mie),
            opt: !0
        },
        {
            no: 5,
            name: "template_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "managed_type",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "hidden",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 8,
            name: "team_id",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 9,
            name: "creation_source",
            kind: "enum",
            T: x.getEnumType(qqe)
        },
        {
            no: 10,
            name: "enabled",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 11,
            name: "sand_agent_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 12,
            name: "sand_automation_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), Jza = x.makeMessageType("aiserver.v1.CreateAutomationResponse", ()=>[
        {
            no: 1,
            name: "workflow",
            kind: "message",
            T: h4e
        }
    ]), UFm = x.makeMessageType("aiserver.v1.ListSandAutomationsRequest", ()=>[
        {
            no: 1,
            name: "sand_agent_id",
            kind: "scalar",
            T: 9
        }
    ]), xQr = x.makeMessageType("aiserver.v1.ListAutomationsRequest", ()=>[
        {
            no: 1,
            name: "team_id",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), eVa = x.makeMessageType("aiserver.v1.ListAutomationsResponse", ()=>[
        {
            no: 1,
            name: "workflows",
            kind: "message",
            T: h4e,
            repeated: !0
        }
    ]), BEn = x.makeMessageType("aiserver.v1.GetAutomationRequest", ()=>[
        {
            no: 2,
            name: "automation_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "team_id",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), jFm = x.makeMessageType("aiserver.v1.RestrictedAutomationSummary", ()=>[
        {
            no: 1,
            name: "automation_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "enabled",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "owner_name",
            kind: "scalar",
            T: 9
        }
    ]), tVa = x.makeMessageType("aiserver.v1.GetAutomationResponse", ()=>[
        {
            no: 1,
            name: "workflow",
            kind: "message",
            T: h4e,
            oneof: "result"
        },
        {
            no: 2,
            name: "restricted_summary",
            kind: "message",
            T: jFm,
            oneof: "result"
        }
    ]), UEn = x.makeMessageType("aiserver.v1.UpdateAutomationRequest", ()=>[
        {
            no: 2,
            name: "name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "workflow",
            kind: "message",
            T: d4e,
            opt: !0
        },
        {
            no: 4,
            name: "enabled",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 5,
            name: "description",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "automation_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "scope",
            kind: "enum",
            T: x.getEnumType(mie),
            opt: !0
        },
        {
            no: 8,
            name: "managed_type",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 9,
            name: "hidden",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), nVa = x.makeMessageType("aiserver.v1.UpdateAutomationResponse", ()=>[
        {
            no: 1,
            name: "workflow",
            kind: "message",
            T: h4e
        }
    ]), iVa = x.makeMessageType("aiserver.v1.ReassignAutomationOwnerRequest", ()=>[
        {
            no: 1,
            name: "automation_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "new_owner_user_id",
            kind: "scalar",
            T: 5
        }
    ]), $Fm = x.makeMessageType("aiserver.v1.ReassignAutomationOwnerResponse", ()=>[
        {
            no: 1,
            name: "workflow",
            kind: "message",
            T: h4e
        }
    ]), rVa = x.makeMessageType("aiserver.v1.UpdateAutomationAuthoringModeRequest", ()=>[
        {
            no: 1,
            name: "automation_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "managed_by",
            kind: "enum",
            T: x.getEnumType(SPe)
        },
        {
            no: 3,
            name: "deploy_key",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), HFm = x.makeMessageType("aiserver.v1.UpdateAutomationAuthoringModeResponse", ()=>[
        {
            no: 1,
            name: "workflow",
            kind: "message",
            T: h4e
        }
    ]), AQr = x.makeMessageType("aiserver.v1.DeleteAutomationRequest", ()=>[
        {
            no: 2,
            name: "automation_id",
            kind: "scalar",
            T: 9
        }
    ]), sVa = x.makeMessageType("aiserver.v1.DeleteAutomationResponse", []), oVa = x.makeMessageType("aiserver.v1.TestAutomationRequest", ()=>[
        {
            no: 2,
            name: "cron",
            kind: "message",
            T: RQr,
            oneof: "sample_payload"
        },
        {
            no: 3,
            name: "pull_request",
            kind: "message",
            T: PQr,
            oneof: "sample_payload"
        },
        {
            no: 4,
            name: "push",
            kind: "message",
            T: MQr,
            oneof: "sample_payload"
        },
        {
            no: 5,
            name: "slack",
            kind: "message",
            T: DQr,
            oneof: "sample_payload"
        },
        {
            no: 6,
            name: "linear",
            kind: "message",
            T: NQr,
            oneof: "sample_payload"
        },
        {
            no: 7,
            name: "ci_completed",
            kind: "message",
            T: LQr,
            oneof: "sample_payload"
        },
        {
            no: 9,
            name: "webhook",
            kind: "message",
            T: BQr,
            oneof: "sample_payload"
        },
        {
            no: 10,
            name: "slack_channel_created",
            kind: "message",
            T: OQr,
            oneof: "sample_payload"
        },
        {
            no: 11,
            name: "pagerduty",
            kind: "message",
            T: jQr,
            oneof: "sample_payload"
        },
        {
            no: 15,
            name: "sentry",
            kind: "message",
            T: UQr,
            oneof: "sample_payload"
        },
        {
            no: 16,
            name: "microsoft_teams",
            kind: "message",
            T: $Qr,
            oneof: "sample_payload"
        },
        {
            no: 17,
            name: "microsoft_teams_channel_created",
            kind: "message",
            T: HQr,
            oneof: "sample_payload"
        },
        {
            no: 18,
            name: "slack_reaction_added",
            kind: "message",
            T: FQr,
            oneof: "sample_payload"
        },
        {
            no: 20,
            name: "email_received",
            kind: "message",
            T: aVa,
            oneof: "sample_payload"
        },
        {
            no: 8,
            name: "automation_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 12,
            name: "trigger_index",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 13,
            name: "test_repo",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 14,
            name: "test_branch",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 19,
            name: "grok_bot_session_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), RQr = x.makeMessageType("aiserver.v1.CronSamplePayload", []), PQr = x.makeMessageType("aiserver.v1.PullRequestSamplePayload", ()=>[
        {
            no: 2,
            name: "head_branch",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "base_branch",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "repo",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "pr_url",
            kind: "scalar",
            T: 9
        }
    ]), MQr = x.makeMessageType("aiserver.v1.PushSamplePayload", ()=>[
        {
            no: 1,
            name: "repo",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "ref",
            kind: "scalar",
            T: 9
        }
    ]), DQr = x.makeMessageType("aiserver.v1.SlackSamplePayload", ()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "is_thread_reply",
            kind: "scalar",
            T: 8
        }
    ]), NQr = x.makeMessageType("aiserver.v1.LinearSamplePayload", ()=>[
        {
            no: 1,
            name: "issue_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "issue_identifier",
            kind: "scalar",
            T: 9
        }
    ]), LQr = x.makeMessageType("aiserver.v1.CICompletedSamplePayload", ()=>[
        {
            no: 1,
            name: "pr_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "repo",
            kind: "scalar",
            T: 9
        }
    ]), OQr = x.makeMessageType("aiserver.v1.SlackChannelCreatedSamplePayload", ()=>[
        {
            no: 1,
            name: "channel_name",
            kind: "scalar",
            T: 9
        }
    ]), FQr = x.makeMessageType("aiserver.v1.SlackReactionAddedSamplePayload", ()=>[
        {
            no: 1,
            name: "emoji_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ]), aVa = x.makeMessageType("aiserver.v1.EmailReceivedSamplePayload", ()=>[
        {
            no: 1,
            name: "from_address",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "subject",
            kind: "scalar",
            T: 9
        }
    ]), BQr = x.makeMessageType("aiserver.v1.WebhookSamplePayload", ()=>[
        {
            no: 1,
            name: "context",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "webhook_payload_json",
            kind: "scalar",
            T: 9
        }
    ]), UQr = x.makeMessageType("aiserver.v1.SentrySamplePayload", ()=>[
        {
            no: 1,
            name: "issue_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "action",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "project_id",
            kind: "scalar",
            T: 9
        }
    ]), jQr = x.makeMessageType("aiserver.v1.PagerDutySamplePayload", ()=>[
        {
            no: 1,
            name: "incident_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "event_type",
            kind: "scalar",
            T: 9
        }
    ]), $Qr = x.makeMessageType("aiserver.v1.MicrosoftTeamsSamplePayload", ()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ]), HQr = x.makeMessageType("aiserver.v1.MicrosoftTeamsChannelCreatedSamplePayload", ()=>[
        {
            no: 1,
            name: "channel_name",
            kind: "scalar",
            T: 9
        }
    ]), WFm = x.makeMessageType("aiserver.v1.TestAutomationResponse", ()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "background_composer_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "run_uuid",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), lVa = x.makeMessageType("aiserver.v1.Automation", ()=>[
        {
            no: 2,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "enabled",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "workflow",
            kind: "message",
            T: d4e
        },
        {
            no: 5,
            name: "created_at",
            kind: "scalar",
            T: 3
        },
        {
            no: 6,
            name: "updated_at",
            kind: "scalar",
            T: 3
        },
        {
            no: 7,
            name: "description",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "automation_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 9,
            name: "scope",
            kind: "enum",
            T: x.getEnumType(mie)
        },
        {
            no: 10,
            name: "service_account_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 11,
            name: "managed_by",
            kind: "enum",
            T: x.getEnumType(SPe)
        },
        {
            no: 12,
            name: "deploy_key",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 13,
            name: "deploy_last_applied_at",
            kind: "scalar",
            T: 3,
            opt: !0
        },
        {
            no: 14,
            name: "deploy_last_apply_error",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 15,
            name: "managed_type",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 16,
            name: "hidden",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 17,
            name: "template_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 18,
            name: "sand_last_run_at_ms",
            kind: "scalar",
            T: 3,
            opt: !0
        }
    ]), GFm = x.makeMessageType("aiserver.v1.AutomationMcpAuthState", ()=>[
        {
            no: 1,
            name: "server_id",
            kind: "scalar",
            T: 3,
            opt: !0
        },
        {
            no: 2,
            name: "server_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "auth_state",
            kind: "enum",
            T: x.getEnumType(_Fm)
        }
    ]), h4e = x.makeMessageType("aiserver.v1.AutomationWithOwner", ()=>[
        {
            no: 1,
            name: "workflow",
            kind: "message",
            T: lVa
        },
        {
            no: 2,
            name: "user_id",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "owner_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "mcp_auth_states",
            kind: "message",
            T: GFm,
            repeated: !0
        },
        {
            no: 5,
            name: "team_id",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), qFm = x.makeMessageType("aiserver.v1.ListAutomationRunsRequest", ()=>[
        {
            no: 2,
            name: "limit",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 3,
            name: "automation_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "cursor",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "run_kind",
            kind: "enum",
            T: x.getEnumType(aqt)
        }
    ]), zFm = x.makeMessageType("aiserver.v1.ListAutomationRunsResponse", ()=>[
        {
            no: 1,
            name: "runs",
            kind: "message",
            T: WQr,
            repeated: !0
        },
        {
            no: 2,
            name: "next_cursor",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), cVa = x.makeMessageType("aiserver.v1.GetAutomationRunRequest", ()=>[
        {
            no: 1,
            name: "background_composer_id",
            kind: "scalar",
            T: 9
        }
    ]), VFm = x.makeMessageType("aiserver.v1.GetAutomationRunResponse", ()=>[
        {
            no: 1,
            name: "run",
            kind: "message",
            T: WQr,
            opt: !0
        }
    ]), uVa = x.makeMessageType("aiserver.v1.ListAllRunsRequest", ()=>[
        {
            no: 1,
            name: "automation_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "limit",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 3,
            name: "cursor",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "run_kind",
            kind: "enum",
            T: x.getEnumType(aqt)
        },
        {
            no: 5,
            name: "team_id",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 6,
            name: "owner_only",
            kind: "scalar",
            T: 8
        }
    ]), KFm = x.makeMessageType("aiserver.v1.ListAllRunsResponse", ()=>[
        {
            no: 1,
            name: "runs",
            kind: "message",
            T: WQr,
            repeated: !0
        },
        {
            no: 2,
            name: "next_cursor",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), YFm = x.makeMessageType("aiserver.v1.AgentSdkAutomationRun", ()=>[
        {
            no: 1,
            name: "uuid",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "automation_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "session_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "deployment_slug",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "temporal_workflow_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "status",
            kind: "enum",
            T: x.getEnumType(NCt)
        },
        {
            no: 7,
            name: "skip_reason",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "trigger_metadata",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        },
        {
            no: 9,
            name: "workflow",
            kind: "message",
            T: d4e
        },
        {
            no: 10,
            name: "created_at",
            kind: "scalar",
            T: 3
        },
        {
            no: 11,
            name: "updated_at",
            kind: "scalar",
            T: 3
        },
        {
            no: 12,
            name: "completed_at",
            kind: "scalar",
            T: 3,
            opt: !0
        },
        {
            no: 13,
            name: "deployment_public_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), XFm = x.makeMessageType("aiserver.v1.ListAgentSdkAutomationRunsRequest", ()=>[
        {
            no: 1,
            name: "automation_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "limit",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 3,
            name: "cursor",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), ZFm = x.makeMessageType("aiserver.v1.ListAgentSdkAutomationRunsResponse", ()=>[
        {
            no: 1,
            name: "runs",
            kind: "message",
            T: YFm,
            repeated: !0
        },
        {
            no: 2,
            name: "next_cursor",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), QFm = x.makeMessageType("aiserver.v1.TestAutomationFilterRequest", ()=>[
        {
            no: 1,
            name: "automation_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "cron",
            kind: "message",
            T: RQr,
            oneof: "sample_payload"
        },
        {
            no: 3,
            name: "pull_request",
            kind: "message",
            T: PQr,
            oneof: "sample_payload"
        },
        {
            no: 4,
            name: "push",
            kind: "message",
            T: MQr,
            oneof: "sample_payload"
        },
        {
            no: 5,
            name: "slack",
            kind: "message",
            T: DQr,
            oneof: "sample_payload"
        },
        {
            no: 6,
            name: "linear",
            kind: "message",
            T: NQr,
            oneof: "sample_payload"
        },
        {
            no: 7,
            name: "ci_completed",
            kind: "message",
            T: LQr,
            oneof: "sample_payload"
        },
        {
            no: 8,
            name: "webhook",
            kind: "message",
            T: BQr,
            oneof: "sample_payload"
        },
        {
            no: 9,
            name: "slack_channel_created",
            kind: "message",
            T: OQr,
            oneof: "sample_payload"
        },
        {
            no: 10,
            name: "pagerduty",
            kind: "message",
            T: jQr,
            oneof: "sample_payload"
        },
        {
            no: 15,
            name: "sentry",
            kind: "message",
            T: UQr,
            oneof: "sample_payload"
        },
        {
            no: 16,
            name: "microsoft_teams",
            kind: "message",
            T: $Qr,
            oneof: "sample_payload"
        },
        {
            no: 17,
            name: "microsoft_teams_channel_created",
            kind: "message",
            T: HQr,
            oneof: "sample_payload"
        },
        {
            no: 18,
            name: "slack_reaction_added",
            kind: "message",
            T: FQr,
            oneof: "sample_payload"
        },
        {
            no: 20,
            name: "email_received",
            kind: "message",
            T: aVa,
            oneof: "sample_payload"
        },
        {
            no: 11,
            name: "trigger_index",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 12,
            name: "test_repo",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 13,
            name: "test_branch",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), JFm = x.makeMessageType("aiserver.v1.TestAutomationFilterResponse", ()=>[
        {
            no: 1,
            name: "decision",
            kind: "enum",
            T: x.getEnumType(nza)
        },
        {
            no: 2,
            name: "rationale",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "error_message",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), dVa = x.makeMessageType("aiserver.v1.ListAutomationMemoriesRequest", ()=>[
        {
            no: 1,
            name: "automation_id",
            kind: "scalar",
            T: 9
        }
    ]), e6m = x.makeMessageType("aiserver.v1.ListAutomationMemoriesResponse", ()=>[
        {
            no: 1,
            name: "files",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), hVa = x.makeMessageType("aiserver.v1.GetAutomationMemoryRequest", ()=>[
        {
            no: 1,
            name: "automation_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "file",
            kind: "scalar",
            T: 9
        }
    ]), t6m = x.makeMessageType("aiserver.v1.GetAutomationMemoryResponse", ()=>[
        {
            no: 1,
            name: "file",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "content",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "exists",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "version",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), pVa = x.makeMessageType("aiserver.v1.UpdateAutomationMemoryRequest", ()=>[
        {
            no: 1,
            name: "automation_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "file",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "content",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "expected_version",
            kind: "scalar",
            T: 9,
            oneof: "expected"
        },
        {
            no: 5,
            name: "expect_missing",
            kind: "scalar",
            T: 8,
            oneof: "expected"
        }
    ]), n6m = x.makeMessageType("aiserver.v1.UpdateAutomationMemoryResponse", ()=>[
        {
            no: 1,
            name: "file",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "content",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "version",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "conflict",
            kind: "scalar",
            T: 8
        }
    ]), mVa = x.makeMessageType("aiserver.v1.DeleteAutomationMemoryRequest", ()=>[
        {
            no: 1,
            name: "automation_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "file",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "expected_version",
            kind: "scalar",
            T: 9,
            oneof: "expected"
        },
        {
            no: 4,
            name: "expect_missing",
            kind: "scalar",
            T: 8,
            oneof: "expected"
        }
    ]), i6m = x.makeMessageType("aiserver.v1.DeleteAutomationMemoryResponse", ()=>[
        {
            no: 1,
            name: "file",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "conflict",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "content",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "version",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "files",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), r6m = x.makeMessageType("aiserver.v1.ListHostedFlaggedVulnerabilitiesRequest", ()=>[
        {
            no: 1,
            name: "automation_id",
            kind: "scalar",
            T: 9
        }
    ]), s6m = x.makeMessageType("aiserver.v1.HostedFlaggedVulnerabilityRepository", ()=>[
        {
            no: 1,
            name: "repository_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "repository_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "findings_json",
            kind: "scalar",
            T: 9
        }
    ]), o6m = x.makeMessageType("aiserver.v1.ListHostedFlaggedVulnerabilitiesResponse", ()=>[
        {
            no: 1,
            name: "installation_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "repositories",
            kind: "message",
            T: s6m,
            repeated: !0
        }
    ]), a6m = x.makeMessageType("aiserver.v1.AutomationRunFailureDetails", ()=>[
        {
            no: 1,
            name: "code",
            kind: "enum",
            T: x.getEnumType(C6)
        },
        {
            no: 2,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "cta_label",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "cta_path",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), WQr = x.makeMessageType("aiserver.v1.AutomationRun", ()=>[
        {
            no: 3,
            name: "background_composer_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "namespaced_workflow_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "workflow",
            kind: "message",
            T: d4e
        },
        {
            no: 6,
            name: "created_at",
            kind: "scalar",
            T: 3
        },
        {
            no: 7,
            name: "updated_at",
            kind: "scalar",
            T: 3
        },
        {
            no: 8,
            name: "platform_actions",
            kind: "message",
            T: PFm,
            opt: !0
        },
        {
            no: 9,
            name: "trigger_metadata",
            kind: "message",
            T: DFm,
            opt: !0
        },
        {
            no: 10,
            name: "uuid",
            kind: "scalar",
            T: 9
        },
        {
            no: 11,
            name: "automation_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 12,
            name: "status",
            kind: "enum",
            T: x.getEnumType(NCt)
        },
        {
            no: 13,
            name: "error_message",
            kind: "scalar",
            T: 9
        },
        {
            no: 14,
            name: "failure_details",
            kind: "message",
            T: a6m,
            opt: !0
        },
        {
            no: 15,
            name: "completed_at",
            kind: "scalar",
            T: 3,
            opt: !0
        },
        {
            no: 16,
            name: "filter_decision",
            kind: "enum",
            T: x.getEnumType(nza),
            opt: !0
        },
        {
            no: 17,
            name: "filter_rationale",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 18,
            name: "filter_error_message",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 19,
            name: "can_retry",
            kind: "scalar",
            T: 8
        },
        {
            no: 20,
            name: "retry_ineligible_reason",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 21,
            name: "retry_ineligible_reason_code",
            kind: "enum",
            T: x.getEnumType(l0i),
            opt: !0
        },
        {
            no: 22,
            name: "skip_reason",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), gVa = x.makeMessageType("aiserver.v1.GetRunSummaryRequest", ()=>[
        {
            no: 1,
            name: "automation_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "team_id",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 3,
            name: "owner_only",
            kind: "scalar",
            T: 8
        }
    ]), l6m = x.makeMessageType("aiserver.v1.GetRunSummaryResponse", ()=>[
        {
            no: 1,
            name: "windows",
            kind: "message",
            T: c6m,
            repeated: !0
        },
        {
            no: 2,
            name: "histogram",
            kind: "message",
            T: u6m,
            repeated: !0
        }
    ]), c6m = x.makeMessageType("aiserver.v1.RunSummaryWindow", ()=>[
        {
            no: 1,
            name: "key",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "succeeded",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "failed",
            kind: "scalar",
            T: 5
        }
    ]), u6m = x.makeMessageType("aiserver.v1.HistogramBucket", ()=>[
        {
            no: 1,
            name: "start_time",
            kind: "scalar",
            T: 3
        },
        {
            no: 2,
            name: "count",
            kind: "scalar",
            T: 5
        }
    ]), d6m = x.makeMessageType("aiserver.v1.GetSecuritybotResolutionStatsRequest", ()=>[
        {
            no: 1,
            name: "automation_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "team_id",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), h6m = x.makeMessageType("aiserver.v1.GetSecuritybotResolutionStatsResponse", ()=>[
        {
            no: 1,
            name: "vulnerabilities_count",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "fixed_count",
            kind: "scalar",
            T: 13
        },
        {
            no: 3,
            name: "automation_count",
            kind: "scalar",
            T: 13
        }
    ]), p6m = x.makeMessageType("aiserver.v1.GetApprovalAgentAnalyticsRequest", ()=>[
        {
            no: 1,
            name: "automation_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "team_id",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), m6m = x.makeMessageType("aiserver.v1.GetApprovalAgentAnalyticsResponse", ()=>[
        {
            no: 1,
            name: "approved_pr_count",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "reviewed_pr_count",
            kind: "scalar",
            T: 13
        },
        {
            no: 3,
            name: "automation_count",
            kind: "scalar",
            T: 13
        }
    ]), fVa = x.makeMessageType("aiserver.v1.ManagedAutomationTeamSettings", ()=>[
        {
            no: 1,
            name: "team_id",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "security_agent_disabled",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "approval_agent_disabled",
            kind: "scalar",
            T: 8
        }
    ]), vVa = x.makeMessageType("aiserver.v1.GetManagedAutomationTeamSettingsRequest", ()=>[
        {
            no: 1,
            name: "team_id",
            kind: "scalar",
            T: 5
        }
    ]), g6m = x.makeMessageType("aiserver.v1.GetManagedAutomationTeamSettingsResponse", ()=>[
        {
            no: 1,
            name: "settings",
            kind: "message",
            T: fVa
        }
    ]), GQr = x.makeMessageType("aiserver.v1.UpdateManagedAutomationTeamSettingsRequest", ()=>[
        {
            no: 1,
            name: "team_id",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "security_agent_disabled",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "approval_agent_disabled",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "security_agent_disabled_patch",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 5,
            name: "approval_agent_disabled_patch",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), f6m = x.makeMessageType("aiserver.v1.UpdateManagedAutomationTeamSettingsResponse", ()=>[
        {
            no: 1,
            name: "settings",
            kind: "message",
            T: fVa
        }
    ]), _Va = x.makeMessageType("aiserver.v1.GetChangeMonitorTeamSettingsRequest", ()=>[
        {
            no: 1,
            name: "team_id",
            kind: "scalar",
            T: 5
        }
    ]), v6m = x.makeMessageType("aiserver.v1.GetChangeMonitorTeamSettingsResponse", ()=>[
        {
            no: 1,
            name: "enabled",
            kind: "scalar",
            T: 8
        }
    ]), bVa = x.makeMessageType("aiserver.v1.CancelAutomationRunRequest", ()=>[
        {
            no: 1,
            name: "background_composer_id",
            kind: "scalar",
            T: 9
        }
    ]), _6m = x.makeMessageType("aiserver.v1.CancelAutomationRunResponse", ()=>[
        {
            no: 1,
            name: "success",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ]), yVa = x.makeMessageType("aiserver.v1.CancelAllAutomationRunsRequest", ()=>[
        {
            no: 1,
            name: "automation_id",
            kind: "scalar",
            T: 9
        }
    ]), b6m = x.makeMessageType("aiserver.v1.CancelAllAutomationRunsResponse", ()=>[
        {
            no: 1,
            name: "cancelled_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ]), SVa = x.makeMessageType("aiserver.v1.RetryAutomationRunRequest", ()=>[
        {
            no: 1,
            name: "run_uuid",
            kind: "scalar",
            T: 9
        }
    ]), y6m = x.makeMessageType("aiserver.v1.RetryAutomationRunResponse", ()=>[
        {
            no: 1,
            name: "background_composer_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "run_uuid",
            kind: "scalar",
            T: 9
        }
    ]), kVa = x.makeMessageType("aiserver.v1.WorkflowTemplate", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "description",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "category",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "workflow",
            kind: "message",
            T: d4e
        },
        {
            no: 6,
            name: "input_schema",
            kind: "message",
            T: k6m
        },
        {
            no: 7,
            name: "icon",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "featured_index",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 9,
            name: "mcp_hints",
            kind: "message",
            T: S6m,
            repeated: !0
        }
    ]), S6m = x.makeMessageType("aiserver.v1.McpTemplateHint", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "url",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), k6m = x.makeMessageType("aiserver.v1.InputSchema", ()=>[
        {
            no: 1,
            name: "fields",
            kind: "message",
            T: w6m,
            repeated: !0
        }
    ]), w6m = x.makeMessageType("aiserver.v1.InputField", ()=>[
        {
            no: 1,
            name: "key",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "display_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "description",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "string_value",
            kind: "scalar",
            T: 9,
            oneof: "type"
        },
        {
            no: 5,
            name: "string_list_value",
            kind: "message",
            T: qQr,
            oneof: "type"
        },
        {
            no: 6,
            name: "bool_value",
            kind: "scalar",
            T: 8,
            oneof: "type"
        }
    ]), qQr = x.makeMessageType("aiserver.v1.StringList", ()=>[
        {
            no: 1,
            name: "values",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), wVa = x.makeMessageType("aiserver.v1.InputValues", ()=>[
        {
            no: 1,
            name: "values",
            kind: "message",
            T: u0i,
            repeated: !0
        }
    ]), u0i = x.makeMessageType("aiserver.v1.InputValue", ()=>[
        {
            no: 1,
            name: "key",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "string_value",
            kind: "scalar",
            T: 9,
            oneof: "value"
        },
        {
            no: 3,
            name: "string_list_value",
            kind: "message",
            T: qQr,
            oneof: "value"
        },
        {
            no: 4,
            name: "bool_value",
            kind: "scalar",
            T: 8,
            oneof: "value"
        }
    ]), CVa = x.makeMessageType("aiserver.v1.ListWorkflowTemplatesRequest", ()=>[
        {
            no: 1,
            name: "category",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), C6m = x.makeMessageType("aiserver.v1.ListWorkflowTemplatesResponse", ()=>[
        {
            no: 1,
            name: "templates",
            kind: "message",
            T: kVa,
            repeated: !0
        }
    ]), TVa = x.makeMessageType("aiserver.v1.GetWorkflowTemplateRequest", ()=>[
        {
            no: 1,
            name: "template_id",
            kind: "scalar",
            T: 9
        }
    ]), T6m = x.makeMessageType("aiserver.v1.GetWorkflowTemplateResponse", ()=>[
        {
            no: 1,
            name: "template",
            kind: "message",
            T: kVa
        }
    ]), EVa = x.makeMessageType("aiserver.v1.CreateWorkflowFromTemplateRequest", ()=>[
        {
            no: 1,
            name: "template_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "input_values",
            kind: "message",
            T: wVa
        },
        {
            no: 4,
            name: "description",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "creation_source",
            kind: "enum",
            T: x.getEnumType(qqe)
        }
    ]), E6m = x.makeMessageType("aiserver.v1.CreateWorkflowFromTemplateResponse", ()=>[
        {
            no: 1,
            name: "workflow",
            kind: "message",
            T: lVa
        }
    ]), IVa = x.makeMessageType("aiserver.v1.ValidateAutomationToolsRequest", ()=>[
        {
            no: 1,
            name: "prompt",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "trigger_types",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), I6m = x.makeMessageType("aiserver.v1.ValidateAutomationToolsResponse", ()=>[
        {
            no: 1,
            name: "suggestions",
            kind: "message",
            T: x6m,
            repeated: !0
        }
    ]), x6m = x.makeMessageType("aiserver.v1.ToolSuggestion", ()=>[
        {
            no: 1,
            name: "slug",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "label",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "evidence",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 4,
            name: "config_note",
            kind: "scalar",
            T: 9
        }
    ]), A6m = x.makeMessageType("aiserver.v1.BuilderCompletionMessage", ()=>[
        {
            no: 1,
            name: "role",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "content",
            kind: "scalar",
            T: 9
        }
    ]), R6m = x.makeMessageType("aiserver.v1.BuilderCompletionContext", ()=>[
        {
            no: 1,
            name: "stage",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "current_config_json",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "github_connected",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "slack_connected",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "linear_connected",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "pagerduty_connected",
            kind: "scalar",
            T: 8
        },
        {
            no: 7,
            name: "microsoft_teams_connected",
            kind: "scalar",
            T: 8
        }
    ]), P6m = x.makeMessageType("aiserver.v1.BuilderCompletionRequest", ()=>[
        {
            no: 1,
            name: "messages",
            kind: "message",
            T: A6m,
            repeated: !0
        },
        {
            no: 2,
            name: "context",
            kind: "message",
            T: R6m
        }
    ]), M6m = x.makeMessageType("aiserver.v1.BuilderCompletionResponse", ()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9
        }
    ]), D6m = x.makeMessageType("aiserver.v1.DisableAutomationForTeamShutdownRequest", ()=>[
        {
            no: 1,
            name: "team_id",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "automation_id",
            kind: "scalar",
            T: 9
        }
    ]), N6m = x.makeMessageType("aiserver.v1.DisableAutomationForTeamShutdownResponse", []), L6m = x.makeMessageType("aiserver.v1.GetSentryAuthUrlRequest", []), O6m = x.makeMessageType("aiserver.v1.GetSentryAuthUrlResponse", ()=>[
        {
            no: 1,
            name: "install_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "csrf_token",
            kind: "scalar",
            T: 9
        }
    ]), F6m = x.makeMessageType("aiserver.v1.ConnectSentryCallbackRequest", ()=>[
        {
            no: 1,
            name: "code",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "installation_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "state",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "organization_slug",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), B6m = x.makeMessageType("aiserver.v1.ConnectSentryCallbackResponse", ()=>[
        {
            no: 1,
            name: "success",
            kind: "scalar",
            T: 8
        }
    ]), xVa = x.makeMessageType("aiserver.v1.GetSentryStatusRequest", []), U6m = x.makeMessageType("aiserver.v1.GetSentryStatusResponse", ()=>[
        {
            no: 1,
            name: "is_connected",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "organization_slug",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), AVa = x.makeMessageType("aiserver.v1.GetSentryProjectsRequest", []), j6m = x.makeMessageType("aiserver.v1.SentryProject", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "slug",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "name",
            kind: "scalar",
            T: 9
        }
    ]), $6m = x.makeMessageType("aiserver.v1.GetSentryProjectsResponse", ()=>[
        {
            no: 1,
            name: "projects",
            kind: "message",
            T: j6m,
            repeated: !0
        },
        {
            no: 2,
            name: "organization_slug",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), H6m = x.makeMessageType("aiserver.v1.DisconnectSentryRequest", []), W6m = x.makeMessageType("aiserver.v1.DisconnectSentryResponse", ()=>[
        {
            no: 1,
            name: "success",
            kind: "scalar",
            T: 8
        }
    ]);

}
