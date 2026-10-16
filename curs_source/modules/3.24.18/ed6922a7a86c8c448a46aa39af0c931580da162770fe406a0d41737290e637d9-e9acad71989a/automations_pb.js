import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { fd } from "./struct_pb.js";
import { x } from "./tslib.es6.js";
var Mqd, hho, HWt, Hji, Wji, Pqd, Lqd, Nqd, Oqd, Fqd, Bqd, Uqd, $qd, Hqd, pho, mho, gho, Wqd, Gqd, Vqd, jqd, qqd, zqd, Kqd, Yqd, Xqd, xet, Zqd, fho, Qqd, Jqd, ezd, tzd, nzd, izd, rzd, szd, ozd, azd, czd, lzd, uzd, dzd, hzd, pzd, mzd, gzd, fzd, vzd, _zd, bzd, yzd, Szd, kzd, wzd, Czd, Tzd, Ezd, xzd, Izd, Azd, Rzd, Dzd, Mzd, Pzd, Lzd, Nzd, Ozd, Fzd, Bzd, Uzd, $zd, Hzd, Wzd, Gzd, Vzd, jzd, qzd, zzd, Kzd, Yzd, Xzd, Zzd, Qzd, Jzd, eKd, tKd, nKd, vho, iKd, rKd, sKd, oKd, Gji, _ho, aKd, bho, yho, Vji, cKd, Sho, jji, kho, lKd, uKd, dKd, hKd, who, Cho, pKd, Tho, Eho, xho, Iho, Aho, Rho, Dho, Mho, Pho, Lho, Nho, Oho, Fho, Bho, mKd, Uho, gKd, Iet, fKd, vKd, _Kd, bKd, yKd, SKd, kKd, wKd, CKd, TKd, EKd, xKd, IKd, AKd, RKd, DKd, MKd, PKd, LKd, NKd, OKd, FKd, BKd, qji, UKd, $Kd, HKd, WKd, GKd, VKd, jKd, qKd, $ho, zKd, KKd, YKd, XKd, ZKd, QKd, JKd, eYd, tYd, nYd, iYd, rYd, Hho, sYd, oYd, aYd, Who, cYd, lYd, uYd, dYd, hYd, pYd, mYd, gYd, fYd, vYd, _Yd, bYd, yYd, SYd, kYd, wYd, CYd, TYd, EYd, xYd, IYd, AYd, RYd, DYd, MYd, PYd, LYd, NYd;
export { $Kd, $ho, $qd, $zd, AKd, AYd, Aho, Azd, BKd, Bho, Bqd, Bzd, CKd, CYd, Cho, Czd, DKd, DYd, Dho, Dzd, EKd, EYd, Eho, Ezd, FKd, Fho, Fqd, Fzd, GKd, Gji, Gqd, Gzd, HKd, HWt, Hho, Hji, Hqd, Hzd, IKd, IYd, Iet, Iho, Izd, JKd, Jqd, Jzd, KKd, Kqd, Kzd, LKd, LYd, Lho, Lqd, Lzd, MKd, MYd, Mho, Mqd, Mzd, NKd, NYd, Nho, Nqd, Nzd, OKd, Oho, Oqd, Ozd, PKd, PYd, Pho, Pqd, Pzd, QKd, Qqd, Qzd, RKd, RYd, Rho, Rzd, SKd, SYd, Sho, Szd, TKd, TYd, Tho, Tzd, UKd, Uho, Uqd, Uzd, VKd, Vji, Vqd, Vzd, WKd, Who, Wji, Wqd, Wzd, XKd, Xqd, Xzd, YKd, Yqd, Yzd, ZKd, Zqd, Zzd, _Kd, _Yd, _ho, _zd, aKd, aYd, azd, bKd, bYd, bho, bzd, cKd, cYd, czd, dKd, dYd, dzd, eKd, eYd, ezd, fKd, fYd, fho, fzd, gKd, gYd, gho, gzd, hKd, hYd, hho, hzd, iKd, iYd, izd, jKd, jji, jqd, jzd, kKd, kYd, kho, kzd, lKd, lYd, lzd, mKd, mYd, mho, mzd, nKd, nYd, nzd, oKd, oYd, ozd, pKd, pYd, pho, pzd, qKd, qji, qqd, qzd, rKd, rYd, rzd, sKd, sYd, szd, tKd, tYd, tzd, uKd, uYd, uzd, vKd, vYd, vho, vzd, wKd, wYd, who, wzd, xKd, xYd, xet, xho, xzd, yKd, yYd, yho, yzd, zKd, zqd, zzd };
var __wakaru_Gho_initialized = false;
export function Gho() {
if (__wakaru_Gho_initialized) return;
__wakaru_Gho_initialized = true;
"use strict";
x(), bi(), Mqd = k.makeEnum("aiserver.v1.AutomationDefaultTool", [
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
]), hho = k.makeEnum("aiserver.v1.SlackCompletionReactionMode", [
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
]), HWt = k.makeEnum("aiserver.v1.AutomationScope", [
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
]), Hji = k.makeEnum("aiserver.v1.AutomationCreationSource", [
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
]), Wji = k.makeEnum("aiserver.v1.AutomationManagedBy", [
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
]), Pqd = k.makeEnum("aiserver.v1.PromptEffortLevel", [
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
]), Lqd = k.makeEnum("aiserver.v1.PromptRunMode", [
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
]), Nqd = k.makeEnum("aiserver.v1.GitPullRequestAction", [
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
]), Oqd = k.makeEnum("aiserver.v1.GitCICompletionCondition", [
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
]), Fqd = k.makeEnum("aiserver.v1.GitWorkflowRunConclusion", [
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
]), Bqd = k.makeEnum("aiserver.v1.PlatformActionStatus", [
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
]), Uqd = k.makeEnum("aiserver.v1.PlatformActionScope", [
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
]), $qd = k.makeEnum("aiserver.v1.PlatformTriggerType", [
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
]), Hqd = k.makeEnum("aiserver.v1.McpAuthState", [
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
]), pho = k.makeEnum("aiserver.v1.AutomationRunListKind", [
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
]), mho = k.makeEnum("aiserver.v1.AutomationFilterDecision", [
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
]), gho = k.makeEnum("aiserver.v1.AutomationRunStatus", [
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
]), Wqd = k.makeEnum("aiserver.v1.AutomationRunFailureCode", [
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
]), Gqd = k.makeEnum("aiserver.v1.AutomationRunRetryIneligibleReason", [
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
]), Vqd = k.makeMessageType("aiserver.v1.Trigger", ()=>[
        {
            no: 1,
            name: "cron",
            kind: "message",
            T: ezd,
            oneof: "trigger"
        },
        {
            no: 2,
            name: "git",
            kind: "message",
            T: izd,
            oneof: "trigger"
        },
        {
            no: 7,
            name: "slack_trigger",
            kind: "message",
            T: fzd,
            oneof: "trigger"
        },
        {
            no: 9,
            name: "linear",
            kind: "message",
            T: kzd,
            oneof: "trigger"
        },
        {
            no: 11,
            name: "webhook",
            kind: "message",
            T: Ezd,
            oneof: "trigger"
        },
        {
            no: 12,
            name: "slack_channel_created",
            kind: "message",
            T: vzd,
            oneof: "trigger"
        },
        {
            no: 13,
            name: "pagerduty",
            kind: "message",
            T: xzd,
            oneof: "trigger"
        },
        {
            no: 15,
            name: "sentry",
            kind: "message",
            T: Pzd,
            oneof: "trigger"
        },
        {
            no: 16,
            name: "microsoft_teams_trigger",
            kind: "message",
            T: $zd,
            oneof: "trigger"
        },
        {
            no: 17,
            name: "microsoft_teams_channel_created",
            kind: "message",
            T: Hzd,
            oneof: "trigger"
        },
        {
            no: 18,
            name: "slack_reaction_added",
            kind: "message",
            T: _zd,
            oneof: "trigger"
        },
        {
            no: 19,
            name: "slack_mention",
            kind: "message",
            T: bzd,
            oneof: "trigger"
        },
        {
            no: 20,
            name: "slack_any_reaction_added",
            kind: "message",
            T: yzd,
            oneof: "trigger"
        },
        {
            no: 21,
            name: "email_received",
            kind: "message",
            T: Szd,
            oneof: "trigger"
        },
        {
            no: 14,
            name: "agentic_filter_prompt",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), jqd = k.makeMessageType("aiserver.v1.Action", ()=>[
        {
            no: 4,
            name: "git_pr",
            kind: "message",
            T: Wzd,
            oneof: "action"
        },
        {
            no: 5,
            name: "pr_comment",
            kind: "message",
            T: Gzd,
            oneof: "action"
        },
        {
            no: 6,
            name: "slack",
            kind: "message",
            T: Yzd,
            oneof: "action"
        },
        {
            no: 7,
            name: "mcp",
            kind: "message",
            T: qqd,
            oneof: "action"
        },
        {
            no: 8,
            name: "manage_check_run",
            kind: "message",
            T: Vzd,
            oneof: "action"
        },
        {
            no: 9,
            name: "request_reviewers",
            kind: "message",
            T: jzd,
            oneof: "action"
        },
        {
            no: 10,
            name: "read_slack",
            kind: "message",
            T: zzd,
            oneof: "action"
        },
        {
            no: 11,
            name: "approve_pr",
            kind: "message",
            T: qzd,
            oneof: "action"
        },
        {
            no: 12,
            name: "resolve_review_threads",
            kind: "message",
            T: Kzd,
            oneof: "action"
        },
        {
            no: 13,
            name: "microsoft_teams",
            kind: "message",
            T: Xzd,
            oneof: "action"
        },
        {
            no: 14,
            name: "read_microsoft_teams",
            kind: "message",
            T: Zzd,
            oneof: "action"
        }
    ]), qqd = k.makeMessageType("aiserver.v1.McpAction", ()=>[
        {
            no: 1,
            name: "server",
            kind: "message",
            T: zqd
        }
    ]), zqd = k.makeMessageType("aiserver.v1.McpServerConfig", ()=>[
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
    ]), Kqd = k.makeMessageType("aiserver.v1.AgentPrivateWorkerLabel", ()=>[
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
    ]), Yqd = k.makeMessageType("aiserver.v1.AgentPrivateWorkerConfig", ()=>[
        {
            no: 1,
            name: "labels",
            kind: "message",
            T: Kqd,
            repeated: !0
        }
    ]), Xqd = k.makeMessageType("aiserver.v1.AgentOptions", ()=>[
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
            T: Yqd,
            opt: !0
        },
        {
            no: 3,
            name: "environment_public_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), xet = k.makeMessageType("aiserver.v1.Workflow", ()=>[
        {
            no: 10,
            name: "triggers",
            kind: "message",
            T: Vqd,
            repeated: !0
        },
        {
            no: 11,
            name: "actions",
            kind: "message",
            T: jqd,
            repeated: !0
        },
        {
            no: 3,
            name: "prompts",
            kind: "message",
            T: Zqd,
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
            T: Jqd,
            opt: !0
        },
        {
            no: 13,
            name: "agent_options",
            kind: "message",
            T: Xqd,
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
            T: k.getEnumType(hho),
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
            T: fd,
            opt: !0
        },
        {
            no: 19,
            name: "disabled_default_tools",
            kind: "enum",
            T: k.getEnumType(Mqd),
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
            T: fho,
            opt: !0
        }
    ]), Zqd = k.makeMessageType("aiserver.v1.Prompt", ()=>[
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
            T: k.getEnumType(Pqd)
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
            T: k.getEnumType(Lqd),
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
            T: fho,
            opt: !0
        }
    ]), fho = k.makeMessageType("aiserver.v1.AutomationModelSelection", ()=>[
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
            T: Qqd,
            repeated: !0
        },
        {
            no: 3,
            name: "max_mode",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), Qqd = k.makeMessageType("aiserver.v1.AutomationModelSelection.ParameterValue", ()=>[
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
}), Jqd = k.makeMessageType("aiserver.v1.GitConfig", ()=>[
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
    ]), ezd = k.makeMessageType("aiserver.v1.CronTrigger", ()=>[
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
            T: tzd,
            oneof: "schedule_mode"
        },
        {
            no: 5,
            name: "flexible",
            kind: "message",
            T: nzd,
            oneof: "schedule_mode"
        },
        {
            no: 6,
            name: "offset_minutes",
            kind: "scalar",
            T: 5
        }
    ]), tzd = k.makeMessageType("aiserver.v1.ExactSchedule", []), nzd = k.makeMessageType("aiserver.v1.FlexibleSchedule", ()=>[
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
    ]), izd = k.makeMessageType("aiserver.v1.GitTrigger", ()=>[
        {
            no: 1,
            name: "pull_request",
            kind: "message",
            T: rzd,
            oneof: "event"
        },
        {
            no: 2,
            name: "push",
            kind: "message",
            T: azd,
            oneof: "event"
        },
        {
            no: 4,
            name: "ci_completed",
            kind: "message",
            T: czd,
            oneof: "event"
        },
        {
            no: 5,
            name: "issue_labeled",
            kind: "message",
            T: lzd,
            oneof: "event"
        },
        {
            no: 6,
            name: "label",
            kind: "message",
            T: gzd,
            oneof: "event"
        },
        {
            no: 7,
            name: "issue_comment",
            kind: "message",
            T: uzd,
            oneof: "event"
        },
        {
            no: 8,
            name: "pull_request_review_comment",
            kind: "message",
            T: dzd,
            oneof: "event"
        },
        {
            no: 9,
            name: "pull_request_review",
            kind: "message",
            T: hzd,
            oneof: "event"
        },
        {
            no: 10,
            name: "review_thread",
            kind: "message",
            T: pzd,
            oneof: "event"
        },
        {
            no: 11,
            name: "workflow_run",
            kind: "message",
            T: mzd,
            oneof: "event"
        },
        {
            no: 12,
            name: "pull_request_review_requested",
            kind: "message",
            T: szd,
            oneof: "event"
        },
        {
            no: 13,
            name: "issue_assigned",
            kind: "message",
            T: ozd,
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
    ]), rzd = k.makeMessageType("aiserver.v1.GitPullRequestEvent", ()=>[
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
            T: k.getEnumType(Nqd)
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
    ]), szd = k.makeMessageType("aiserver.v1.GitPullRequestReviewRequestedEvent", ()=>[
        {
            no: 1,
            name: "repos",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), ozd = k.makeMessageType("aiserver.v1.GitIssueAssignedEvent", ()=>[
        {
            no: 1,
            name: "repos",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), azd = k.makeMessageType("aiserver.v1.GitPushEvent", ()=>[
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
    ]), czd = k.makeMessageType("aiserver.v1.GitCICompletedEvent", ()=>[
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
            T: k.getEnumType(Oqd)
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
    ]), lzd = k.makeMessageType("aiserver.v1.GitIssueLabeledEvent", ()=>[
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
    ]), uzd = k.makeMessageType("aiserver.v1.GitIssueCommentEvent", ()=>[
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
    ]), dzd = k.makeMessageType("aiserver.v1.GitPullRequestReviewCommentEvent", ()=>[
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
    ]), hzd = k.makeMessageType("aiserver.v1.GitPullRequestReviewEvent", ()=>[
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
    ]), pzd = k.makeMessageType("aiserver.v1.GitReviewThreadEvent", ()=>[
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
    ]), mzd = k.makeMessageType("aiserver.v1.GitWorkflowRunEvent", ()=>[
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
            T: k.getEnumType(Fqd)
        }
    ]), gzd = k.makeMessageType("aiserver.v1.GitLabelEvent", ()=>[
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
    ]), fzd = k.makeMessageType("aiserver.v1.SlackTrigger", ()=>[
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
            T: k.getEnumType(hho),
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
    ]), vzd = k.makeMessageType("aiserver.v1.SlackChannelCreatedTrigger", ()=>[
        {
            no: 1,
            name: "channel_name_contains",
            kind: "scalar",
            T: 9
        }
    ]), _zd = k.makeMessageType("aiserver.v1.SlackReactionAddedTrigger", ()=>[
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
    ]), bzd = k.makeMessageType("aiserver.v1.SlackMentionTrigger", ()=>[
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
    ]), yzd = k.makeMessageType("aiserver.v1.SlackAnyReactionAddedTrigger", ()=>[
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
    ]), Szd = k.makeMessageType("aiserver.v1.EmailReceivedTrigger", ()=>[
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
    ]), kzd = k.makeMessageType("aiserver.v1.LinearTrigger", ()=>[
        {
            no: 1,
            name: "issue_created",
            kind: "message",
            T: wzd,
            oneof: "event"
        },
        {
            no: 2,
            name: "status_changed",
            kind: "message",
            T: Czd,
            oneof: "event"
        },
        {
            no: 3,
            name: "end_of_cycle",
            kind: "message",
            T: Tzd,
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
    ]), wzd = k.makeMessageType("aiserver.v1.LinearIssueCreatedEvent", []), Czd = k.makeMessageType("aiserver.v1.LinearStatusChangedEvent", ()=>[
        {
            no: 1,
            name: "status_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), Tzd = k.makeMessageType("aiserver.v1.LinearEndOfCycleEvent", ()=>[
        {
            no: 1,
            name: "cycle_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), Ezd = k.makeMessageType("aiserver.v1.WebhookTrigger", []), xzd = k.makeMessageType("aiserver.v1.PagerDutyTrigger", ()=>[
        {
            no: 1,
            name: "incident_triggered",
            kind: "message",
            T: Izd,
            oneof: "event"
        },
        {
            no: 2,
            name: "incident_acknowledged",
            kind: "message",
            T: Azd,
            oneof: "event"
        },
        {
            no: 3,
            name: "incident_resolved",
            kind: "message",
            T: Rzd,
            oneof: "event"
        },
        {
            no: 4,
            name: "incident_escalated",
            kind: "message",
            T: Dzd,
            oneof: "event"
        },
        {
            no: 5,
            name: "incident_any",
            kind: "message",
            T: Mzd,
            oneof: "event"
        },
        {
            no: 6,
            name: "service_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), Izd = k.makeMessageType("aiserver.v1.PagerDutyIncidentTriggeredEvent", []), Azd = k.makeMessageType("aiserver.v1.PagerDutyIncidentAcknowledgedEvent", []), Rzd = k.makeMessageType("aiserver.v1.PagerDutyIncidentResolvedEvent", []), Dzd = k.makeMessageType("aiserver.v1.PagerDutyIncidentEscalatedEvent", []), Mzd = k.makeMessageType("aiserver.v1.PagerDutyIncidentAnyEvent", []), Pzd = k.makeMessageType("aiserver.v1.SentryTrigger", ()=>[
        {
            no: 1,
            name: "issue_created",
            kind: "message",
            T: Lzd,
            oneof: "event"
        },
        {
            no: 2,
            name: "issue_resolved",
            kind: "message",
            T: Nzd,
            oneof: "event"
        },
        {
            no: 3,
            name: "issue_assigned",
            kind: "message",
            T: Ozd,
            oneof: "event"
        },
        {
            no: 4,
            name: "issue_archived",
            kind: "message",
            T: Fzd,
            oneof: "event"
        },
        {
            no: 5,
            name: "issue_unresolved",
            kind: "message",
            T: Bzd,
            oneof: "event"
        },
        {
            no: 6,
            name: "issue_any",
            kind: "message",
            T: Uzd,
            oneof: "event"
        },
        {
            no: 7,
            name: "project_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), Lzd = k.makeMessageType("aiserver.v1.SentryIssueCreatedEvent", []), Nzd = k.makeMessageType("aiserver.v1.SentryIssueResolvedEvent", []), Ozd = k.makeMessageType("aiserver.v1.SentryIssueAssignedEvent", []), Fzd = k.makeMessageType("aiserver.v1.SentryIssueArchivedEvent", []), Bzd = k.makeMessageType("aiserver.v1.SentryIssueUnresolvedEvent", []), Uzd = k.makeMessageType("aiserver.v1.SentryIssueAnyEvent", []), $zd = k.makeMessageType("aiserver.v1.MicrosoftTeamsTrigger", ()=>[
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
    ]), Hzd = k.makeMessageType("aiserver.v1.MicrosoftTeamsChannelCreatedTrigger", ()=>[
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
    ]), Wzd = k.makeMessageType("aiserver.v1.GitPrAction", []), Gzd = k.makeMessageType("aiserver.v1.PrCommentAction", ()=>[
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
    ]), Vzd = k.makeMessageType("aiserver.v1.ManageCheckRunAction", ()=>[
        {
            no: 1,
            name: "deterministic",
            kind: "scalar",
            T: 8
        }
    ]), jzd = k.makeMessageType("aiserver.v1.RequestReviewersAction", []), qzd = k.makeMessageType("aiserver.v1.ApprovePrAction", []), zzd = k.makeMessageType("aiserver.v1.ReadSlackAction", []), Kzd = k.makeMessageType("aiserver.v1.ResolveReviewThreadsAction", []), Yzd = k.makeMessageType("aiserver.v1.SlackAction", ()=>[
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
    ]), Xzd = k.makeMessageType("aiserver.v1.MicrosoftTeamsAction", ()=>[
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
    ]), Zzd = k.makeMessageType("aiserver.v1.ReadMicrosoftTeamsAction", []), Qzd = k.makeMessageType("aiserver.v1.PlatformActionEntry", ()=>[
        {
            no: 1,
            name: "scope",
            kind: "enum",
            T: k.getEnumType(Uqd)
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
            T: k.getEnumType(Bqd)
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
    ]), Jzd = k.makeMessageType("aiserver.v1.PlatformActionsPayload", ()=>[
        {
            no: 1,
            name: "actions",
            kind: "message",
            T: Qzd,
            repeated: !0
        }
    ]), eKd = k.makeMessageType("aiserver.v1.TriggerMetadataEntry", ()=>[
        {
            no: 1,
            name: "trigger_type",
            kind: "enum",
            T: k.getEnumType($qd)
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
    ]), tKd = k.makeMessageType("aiserver.v1.TriggerMetadataPayload", ()=>[
        {
            no: 1,
            name: "entries",
            kind: "message",
            T: eKd,
            repeated: !0
        }
    ]), nKd = k.makeMessageType("aiserver.v1.AutomationDeploySource", ()=>[
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
    ]), vho = k.makeMessageType("aiserver.v1.AutomationDeploySpec", ()=>[
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
            T: nKd
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
            T: k.getEnumType(HWt)
        },
        {
            no: 8,
            name: "workflow",
            kind: "message",
            T: xet
        },
        {
            no: 9,
            name: "managed_by",
            kind: "enum",
            T: k.getEnumType(Wji),
            opt: !0
        }
    ]), iKd = k.makeMessageType("aiserver.v1.ValidateAutomationSpecRequest", ()=>[
        {
            no: 1,
            name: "spec",
            kind: "message",
            T: vho
        }
    ]), rKd = k.makeMessageType("aiserver.v1.ValidateAutomationSpecResponse", ()=>[
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
    ]), sKd = k.makeMessageType("aiserver.v1.ApplyAutomationSpecRequest", ()=>[
        {
            no: 1,
            name: "spec",
            kind: "message",
            T: vho
        }
    ]), oKd = k.makeMessageType("aiserver.v1.ApplyAutomationSpecResponse", ()=>[
        {
            no: 1,
            name: "workflow",
            kind: "message",
            T: Iet
        },
        {
            no: 2,
            name: "created",
            kind: "scalar",
            T: 8
        }
    ]), Gji = k.makeMessageType("aiserver.v1.CreateAutomationRequest", ()=>[
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
            T: xet
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
            T: k.getEnumType(HWt),
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
            T: k.getEnumType(Hji)
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
    ]), _ho = k.makeMessageType("aiserver.v1.CreateAutomationResponse", ()=>[
        {
            no: 1,
            name: "workflow",
            kind: "message",
            T: Iet
        }
    ]), aKd = k.makeMessageType("aiserver.v1.ListSandAutomationsRequest", ()=>[
        {
            no: 1,
            name: "sand_agent_id",
            kind: "scalar",
            T: 9
        }
    ]), bho = k.makeMessageType("aiserver.v1.ListAutomationsRequest", ()=>[
        {
            no: 1,
            name: "team_id",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), yho = k.makeMessageType("aiserver.v1.ListAutomationsResponse", ()=>[
        {
            no: 1,
            name: "workflows",
            kind: "message",
            T: Iet,
            repeated: !0
        }
    ]), Vji = k.makeMessageType("aiserver.v1.GetAutomationRequest", ()=>[
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
    ]), cKd = k.makeMessageType("aiserver.v1.RestrictedAutomationSummary", ()=>[
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
    ]), Sho = k.makeMessageType("aiserver.v1.GetAutomationResponse", ()=>[
        {
            no: 1,
            name: "workflow",
            kind: "message",
            T: Iet,
            oneof: "result"
        },
        {
            no: 2,
            name: "restricted_summary",
            kind: "message",
            T: cKd,
            oneof: "result"
        }
    ]), jji = k.makeMessageType("aiserver.v1.UpdateAutomationRequest", ()=>[
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
            T: xet,
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
            T: k.getEnumType(HWt),
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
    ]), kho = k.makeMessageType("aiserver.v1.UpdateAutomationResponse", ()=>[
        {
            no: 1,
            name: "workflow",
            kind: "message",
            T: Iet
        }
    ]), lKd = k.makeMessageType("aiserver.v1.ReassignAutomationOwnerRequest", ()=>[
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
    ]), uKd = k.makeMessageType("aiserver.v1.ReassignAutomationOwnerResponse", ()=>[
        {
            no: 1,
            name: "workflow",
            kind: "message",
            T: Iet
        }
    ]), dKd = k.makeMessageType("aiserver.v1.UpdateAutomationAuthoringModeRequest", ()=>[
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
            T: k.getEnumType(Wji)
        },
        {
            no: 3,
            name: "deploy_key",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), hKd = k.makeMessageType("aiserver.v1.UpdateAutomationAuthoringModeResponse", ()=>[
        {
            no: 1,
            name: "workflow",
            kind: "message",
            T: Iet
        }
    ]), who = k.makeMessageType("aiserver.v1.DeleteAutomationRequest", ()=>[
        {
            no: 2,
            name: "automation_id",
            kind: "scalar",
            T: 9
        }
    ]), Cho = k.makeMessageType("aiserver.v1.DeleteAutomationResponse", []), pKd = k.makeMessageType("aiserver.v1.TestAutomationRequest", ()=>[
        {
            no: 2,
            name: "cron",
            kind: "message",
            T: Tho,
            oneof: "sample_payload"
        },
        {
            no: 3,
            name: "pull_request",
            kind: "message",
            T: Eho,
            oneof: "sample_payload"
        },
        {
            no: 4,
            name: "push",
            kind: "message",
            T: xho,
            oneof: "sample_payload"
        },
        {
            no: 5,
            name: "slack",
            kind: "message",
            T: Iho,
            oneof: "sample_payload"
        },
        {
            no: 6,
            name: "linear",
            kind: "message",
            T: Aho,
            oneof: "sample_payload"
        },
        {
            no: 7,
            name: "ci_completed",
            kind: "message",
            T: Rho,
            oneof: "sample_payload"
        },
        {
            no: 9,
            name: "webhook",
            kind: "message",
            T: Lho,
            oneof: "sample_payload"
        },
        {
            no: 10,
            name: "slack_channel_created",
            kind: "message",
            T: Dho,
            oneof: "sample_payload"
        },
        {
            no: 11,
            name: "pagerduty",
            kind: "message",
            T: Oho,
            oneof: "sample_payload"
        },
        {
            no: 15,
            name: "sentry",
            kind: "message",
            T: Nho,
            oneof: "sample_payload"
        },
        {
            no: 16,
            name: "microsoft_teams",
            kind: "message",
            T: Fho,
            oneof: "sample_payload"
        },
        {
            no: 17,
            name: "microsoft_teams_channel_created",
            kind: "message",
            T: Bho,
            oneof: "sample_payload"
        },
        {
            no: 18,
            name: "slack_reaction_added",
            kind: "message",
            T: Mho,
            oneof: "sample_payload"
        },
        {
            no: 20,
            name: "email_received",
            kind: "message",
            T: Pho,
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
    ]), Tho = k.makeMessageType("aiserver.v1.CronSamplePayload", []), Eho = k.makeMessageType("aiserver.v1.PullRequestSamplePayload", ()=>[
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
    ]), xho = k.makeMessageType("aiserver.v1.PushSamplePayload", ()=>[
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
    ]), Iho = k.makeMessageType("aiserver.v1.SlackSamplePayload", ()=>[
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
    ]), Aho = k.makeMessageType("aiserver.v1.LinearSamplePayload", ()=>[
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
    ]), Rho = k.makeMessageType("aiserver.v1.CICompletedSamplePayload", ()=>[
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
    ]), Dho = k.makeMessageType("aiserver.v1.SlackChannelCreatedSamplePayload", ()=>[
        {
            no: 1,
            name: "channel_name",
            kind: "scalar",
            T: 9
        }
    ]), Mho = k.makeMessageType("aiserver.v1.SlackReactionAddedSamplePayload", ()=>[
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
    ]), Pho = k.makeMessageType("aiserver.v1.EmailReceivedSamplePayload", ()=>[
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
    ]), Lho = k.makeMessageType("aiserver.v1.WebhookSamplePayload", ()=>[
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
    ]), Nho = k.makeMessageType("aiserver.v1.SentrySamplePayload", ()=>[
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
    ]), Oho = k.makeMessageType("aiserver.v1.PagerDutySamplePayload", ()=>[
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
    ]), Fho = k.makeMessageType("aiserver.v1.MicrosoftTeamsSamplePayload", ()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ]), Bho = k.makeMessageType("aiserver.v1.MicrosoftTeamsChannelCreatedSamplePayload", ()=>[
        {
            no: 1,
            name: "channel_name",
            kind: "scalar",
            T: 9
        }
    ]), mKd = k.makeMessageType("aiserver.v1.TestAutomationResponse", ()=>[
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
    ]), Uho = k.makeMessageType("aiserver.v1.Automation", ()=>[
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
            T: xet
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
            T: k.getEnumType(HWt)
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
            T: k.getEnumType(Wji)
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
    ]), gKd = k.makeMessageType("aiserver.v1.AutomationMcpAuthState", ()=>[
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
            T: k.getEnumType(Hqd)
        }
    ]), Iet = k.makeMessageType("aiserver.v1.AutomationWithOwner", ()=>[
        {
            no: 1,
            name: "workflow",
            kind: "message",
            T: Uho
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
            T: gKd,
            repeated: !0
        },
        {
            no: 5,
            name: "team_id",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), fKd = k.makeMessageType("aiserver.v1.ListAutomationRunsRequest", ()=>[
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
            T: k.getEnumType(pho)
        }
    ]), vKd = k.makeMessageType("aiserver.v1.ListAutomationRunsResponse", ()=>[
        {
            no: 1,
            name: "runs",
            kind: "message",
            T: qji,
            repeated: !0
        },
        {
            no: 2,
            name: "next_cursor",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), _Kd = k.makeMessageType("aiserver.v1.GetAutomationRunRequest", ()=>[
        {
            no: 1,
            name: "background_composer_id",
            kind: "scalar",
            T: 9
        }
    ]), bKd = k.makeMessageType("aiserver.v1.GetAutomationRunResponse", ()=>[
        {
            no: 1,
            name: "run",
            kind: "message",
            T: qji,
            opt: !0
        }
    ]), yKd = k.makeMessageType("aiserver.v1.ListAllRunsRequest", ()=>[
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
            T: k.getEnumType(pho)
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
    ]), SKd = k.makeMessageType("aiserver.v1.ListAllRunsResponse", ()=>[
        {
            no: 1,
            name: "runs",
            kind: "message",
            T: qji,
            repeated: !0
        },
        {
            no: 2,
            name: "next_cursor",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), kKd = k.makeMessageType("aiserver.v1.AgentSdkAutomationRun", ()=>[
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
            T: k.getEnumType(gho)
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
            T: xet
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
    ]), wKd = k.makeMessageType("aiserver.v1.ListAgentSdkAutomationRunsRequest", ()=>[
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
    ]), CKd = k.makeMessageType("aiserver.v1.ListAgentSdkAutomationRunsResponse", ()=>[
        {
            no: 1,
            name: "runs",
            kind: "message",
            T: kKd,
            repeated: !0
        },
        {
            no: 2,
            name: "next_cursor",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), TKd = k.makeMessageType("aiserver.v1.TestAutomationFilterRequest", ()=>[
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
            T: Tho,
            oneof: "sample_payload"
        },
        {
            no: 3,
            name: "pull_request",
            kind: "message",
            T: Eho,
            oneof: "sample_payload"
        },
        {
            no: 4,
            name: "push",
            kind: "message",
            T: xho,
            oneof: "sample_payload"
        },
        {
            no: 5,
            name: "slack",
            kind: "message",
            T: Iho,
            oneof: "sample_payload"
        },
        {
            no: 6,
            name: "linear",
            kind: "message",
            T: Aho,
            oneof: "sample_payload"
        },
        {
            no: 7,
            name: "ci_completed",
            kind: "message",
            T: Rho,
            oneof: "sample_payload"
        },
        {
            no: 8,
            name: "webhook",
            kind: "message",
            T: Lho,
            oneof: "sample_payload"
        },
        {
            no: 9,
            name: "slack_channel_created",
            kind: "message",
            T: Dho,
            oneof: "sample_payload"
        },
        {
            no: 10,
            name: "pagerduty",
            kind: "message",
            T: Oho,
            oneof: "sample_payload"
        },
        {
            no: 15,
            name: "sentry",
            kind: "message",
            T: Nho,
            oneof: "sample_payload"
        },
        {
            no: 16,
            name: "microsoft_teams",
            kind: "message",
            T: Fho,
            oneof: "sample_payload"
        },
        {
            no: 17,
            name: "microsoft_teams_channel_created",
            kind: "message",
            T: Bho,
            oneof: "sample_payload"
        },
        {
            no: 18,
            name: "slack_reaction_added",
            kind: "message",
            T: Mho,
            oneof: "sample_payload"
        },
        {
            no: 20,
            name: "email_received",
            kind: "message",
            T: Pho,
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
    ]), EKd = k.makeMessageType("aiserver.v1.TestAutomationFilterResponse", ()=>[
        {
            no: 1,
            name: "decision",
            kind: "enum",
            T: k.getEnumType(mho)
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
    ]), xKd = k.makeMessageType("aiserver.v1.ListAutomationMemoriesRequest", ()=>[
        {
            no: 1,
            name: "automation_id",
            kind: "scalar",
            T: 9
        }
    ]), IKd = k.makeMessageType("aiserver.v1.ListAutomationMemoriesResponse", ()=>[
        {
            no: 1,
            name: "files",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), AKd = k.makeMessageType("aiserver.v1.GetAutomationMemoryRequest", ()=>[
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
    ]), RKd = k.makeMessageType("aiserver.v1.GetAutomationMemoryResponse", ()=>[
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
    ]), DKd = k.makeMessageType("aiserver.v1.UpdateAutomationMemoryRequest", ()=>[
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
    ]), MKd = k.makeMessageType("aiserver.v1.UpdateAutomationMemoryResponse", ()=>[
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
    ]), PKd = k.makeMessageType("aiserver.v1.DeleteAutomationMemoryRequest", ()=>[
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
    ]), LKd = k.makeMessageType("aiserver.v1.DeleteAutomationMemoryResponse", ()=>[
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
    ]), NKd = k.makeMessageType("aiserver.v1.ListHostedFlaggedVulnerabilitiesRequest", ()=>[
        {
            no: 1,
            name: "automation_id",
            kind: "scalar",
            T: 9
        }
    ]), OKd = k.makeMessageType("aiserver.v1.HostedFlaggedVulnerabilityRepository", ()=>[
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
    ]), FKd = k.makeMessageType("aiserver.v1.ListHostedFlaggedVulnerabilitiesResponse", ()=>[
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
            T: OKd,
            repeated: !0
        }
    ]), BKd = k.makeMessageType("aiserver.v1.AutomationRunFailureDetails", ()=>[
        {
            no: 1,
            name: "code",
            kind: "enum",
            T: k.getEnumType(Wqd)
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
    ]), qji = k.makeMessageType("aiserver.v1.AutomationRun", ()=>[
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
            T: xet
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
            T: Jzd,
            opt: !0
        },
        {
            no: 9,
            name: "trigger_metadata",
            kind: "message",
            T: tKd,
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
            T: k.getEnumType(gho)
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
            T: BKd,
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
            T: k.getEnumType(mho),
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
            T: k.getEnumType(Gqd),
            opt: !0
        },
        {
            no: 22,
            name: "skip_reason",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), UKd = k.makeMessageType("aiserver.v1.GetRunSummaryRequest", ()=>[
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
    ]), $Kd = k.makeMessageType("aiserver.v1.GetRunSummaryResponse", ()=>[
        {
            no: 1,
            name: "windows",
            kind: "message",
            T: HKd,
            repeated: !0
        },
        {
            no: 2,
            name: "histogram",
            kind: "message",
            T: WKd,
            repeated: !0
        }
    ]), HKd = k.makeMessageType("aiserver.v1.RunSummaryWindow", ()=>[
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
    ]), WKd = k.makeMessageType("aiserver.v1.HistogramBucket", ()=>[
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
    ]), GKd = k.makeMessageType("aiserver.v1.GetSecuritybotResolutionStatsRequest", ()=>[
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
    ]), VKd = k.makeMessageType("aiserver.v1.GetSecuritybotResolutionStatsResponse", ()=>[
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
    ]), jKd = k.makeMessageType("aiserver.v1.GetApprovalAgentAnalyticsRequest", ()=>[
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
    ]), qKd = k.makeMessageType("aiserver.v1.GetApprovalAgentAnalyticsResponse", ()=>[
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
    ]), $ho = k.makeMessageType("aiserver.v1.ManagedAutomationTeamSettings", ()=>[
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
    ]), zKd = k.makeMessageType("aiserver.v1.GetManagedAutomationTeamSettingsRequest", ()=>[
        {
            no: 1,
            name: "team_id",
            kind: "scalar",
            T: 5
        }
    ]), KKd = k.makeMessageType("aiserver.v1.GetManagedAutomationTeamSettingsResponse", ()=>[
        {
            no: 1,
            name: "settings",
            kind: "message",
            T: $ho
        }
    ]), YKd = k.makeMessageType("aiserver.v1.UpdateManagedAutomationTeamSettingsRequest", ()=>[
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
    ]), XKd = k.makeMessageType("aiserver.v1.UpdateManagedAutomationTeamSettingsResponse", ()=>[
        {
            no: 1,
            name: "settings",
            kind: "message",
            T: $ho
        }
    ]), ZKd = k.makeMessageType("aiserver.v1.GetChangeMonitorTeamSettingsRequest", ()=>[
        {
            no: 1,
            name: "team_id",
            kind: "scalar",
            T: 5
        }
    ]), QKd = k.makeMessageType("aiserver.v1.GetChangeMonitorTeamSettingsResponse", ()=>[
        {
            no: 1,
            name: "enabled",
            kind: "scalar",
            T: 8
        }
    ]), JKd = k.makeMessageType("aiserver.v1.CancelAutomationRunRequest", ()=>[
        {
            no: 1,
            name: "background_composer_id",
            kind: "scalar",
            T: 9
        }
    ]), eYd = k.makeMessageType("aiserver.v1.CancelAutomationRunResponse", ()=>[
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
    ]), tYd = k.makeMessageType("aiserver.v1.CancelAllAutomationRunsRequest", ()=>[
        {
            no: 1,
            name: "automation_id",
            kind: "scalar",
            T: 9
        }
    ]), nYd = k.makeMessageType("aiserver.v1.CancelAllAutomationRunsResponse", ()=>[
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
    ]), iYd = k.makeMessageType("aiserver.v1.RetryAutomationRunRequest", ()=>[
        {
            no: 1,
            name: "run_uuid",
            kind: "scalar",
            T: 9
        }
    ]), rYd = k.makeMessageType("aiserver.v1.RetryAutomationRunResponse", ()=>[
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
    ]), Hho = k.makeMessageType("aiserver.v1.WorkflowTemplate", ()=>[
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
            T: xet
        },
        {
            no: 6,
            name: "input_schema",
            kind: "message",
            T: oYd
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
            T: sYd,
            repeated: !0
        }
    ]), sYd = k.makeMessageType("aiserver.v1.McpTemplateHint", ()=>[
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
    ]), oYd = k.makeMessageType("aiserver.v1.InputSchema", ()=>[
        {
            no: 1,
            name: "fields",
            kind: "message",
            T: aYd,
            repeated: !0
        }
    ]), aYd = k.makeMessageType("aiserver.v1.InputField", ()=>[
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
            T: Who,
            oneof: "type"
        },
        {
            no: 6,
            name: "bool_value",
            kind: "scalar",
            T: 8,
            oneof: "type"
        }
    ]), Who = k.makeMessageType("aiserver.v1.StringList", ()=>[
        {
            no: 1,
            name: "values",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), cYd = k.makeMessageType("aiserver.v1.InputValues", ()=>[
        {
            no: 1,
            name: "values",
            kind: "message",
            T: lYd,
            repeated: !0
        }
    ]), lYd = k.makeMessageType("aiserver.v1.InputValue", ()=>[
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
            T: Who,
            oneof: "value"
        },
        {
            no: 4,
            name: "bool_value",
            kind: "scalar",
            T: 8,
            oneof: "value"
        }
    ]), uYd = k.makeMessageType("aiserver.v1.ListWorkflowTemplatesRequest", ()=>[
        {
            no: 1,
            name: "category",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), dYd = k.makeMessageType("aiserver.v1.ListWorkflowTemplatesResponse", ()=>[
        {
            no: 1,
            name: "templates",
            kind: "message",
            T: Hho,
            repeated: !0
        }
    ]), hYd = k.makeMessageType("aiserver.v1.GetWorkflowTemplateRequest", ()=>[
        {
            no: 1,
            name: "template_id",
            kind: "scalar",
            T: 9
        }
    ]), pYd = k.makeMessageType("aiserver.v1.GetWorkflowTemplateResponse", ()=>[
        {
            no: 1,
            name: "template",
            kind: "message",
            T: Hho
        }
    ]), mYd = k.makeMessageType("aiserver.v1.CreateWorkflowFromTemplateRequest", ()=>[
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
            T: cYd
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
            T: k.getEnumType(Hji)
        }
    ]), gYd = k.makeMessageType("aiserver.v1.CreateWorkflowFromTemplateResponse", ()=>[
        {
            no: 1,
            name: "workflow",
            kind: "message",
            T: Uho
        }
    ]), fYd = k.makeMessageType("aiserver.v1.ValidateAutomationToolsRequest", ()=>[
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
    ]), vYd = k.makeMessageType("aiserver.v1.ValidateAutomationToolsResponse", ()=>[
        {
            no: 1,
            name: "suggestions",
            kind: "message",
            T: _Yd,
            repeated: !0
        }
    ]), _Yd = k.makeMessageType("aiserver.v1.ToolSuggestion", ()=>[
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
    ]), bYd = k.makeMessageType("aiserver.v1.BuilderCompletionMessage", ()=>[
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
    ]), yYd = k.makeMessageType("aiserver.v1.BuilderCompletionContext", ()=>[
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
    ]), SYd = k.makeMessageType("aiserver.v1.BuilderCompletionRequest", ()=>[
        {
            no: 1,
            name: "messages",
            kind: "message",
            T: bYd,
            repeated: !0
        },
        {
            no: 2,
            name: "context",
            kind: "message",
            T: yYd
        }
    ]), kYd = k.makeMessageType("aiserver.v1.BuilderCompletionResponse", ()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9
        }
    ]), wYd = k.makeMessageType("aiserver.v1.DisableAutomationForTeamShutdownRequest", ()=>[
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
    ]), CYd = k.makeMessageType("aiserver.v1.DisableAutomationForTeamShutdownResponse", []), TYd = k.makeMessageType("aiserver.v1.GetSentryAuthUrlRequest", []), EYd = k.makeMessageType("aiserver.v1.GetSentryAuthUrlResponse", ()=>[
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
    ]), xYd = k.makeMessageType("aiserver.v1.ConnectSentryCallbackRequest", ()=>[
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
    ]), IYd = k.makeMessageType("aiserver.v1.ConnectSentryCallbackResponse", ()=>[
        {
            no: 1,
            name: "success",
            kind: "scalar",
            T: 8
        }
    ]), AYd = k.makeMessageType("aiserver.v1.GetSentryStatusRequest", []), RYd = k.makeMessageType("aiserver.v1.GetSentryStatusResponse", ()=>[
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
    ]), DYd = k.makeMessageType("aiserver.v1.GetSentryProjectsRequest", []), MYd = k.makeMessageType("aiserver.v1.SentryProject", ()=>[
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
    ]), PYd = k.makeMessageType("aiserver.v1.GetSentryProjectsResponse", ()=>[
        {
            no: 1,
            name: "projects",
            kind: "message",
            T: MYd,
            repeated: !0
        },
        {
            no: 2,
            name: "organization_slug",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), LYd = k.makeMessageType("aiserver.v1.DisconnectSentryRequest", []), NYd = k.makeMessageType("aiserver.v1.DisconnectSentryResponse", ()=>[
        {
            no: 1,
            name: "success",
            kind: "scalar",
            T: 8
        }
    ]);

}
