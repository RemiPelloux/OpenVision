import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var Mfu, pse, Mve, Ebt, Jxn, w$, IBs, S3i, k3i, ABs, RBs, w3i, DBs, MBs, C3i, Pfu, PBs, T3i, VUt;
export { ABs, C3i, DBs, Ebt, IBs, Jxn, MBs, Mfu, Mve, PBs, Pfu, RBs, S3i, T3i, VUt, k3i, pse, w$, w3i };
var __wakaru_Pj_initialized = false;
export function Pj() {
if (__wakaru_Pj_initialized) return;
__wakaru_Pj_initialized = true;
"use strict";
x(), bi(), Mfu = k.makeEnum("agent.v1.CustomSubagentPermissionMode", [
    {
        no: 0,
        name: "CUSTOM_SUBAGENT_PERMISSION_MODE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "CUSTOM_SUBAGENT_PERMISSION_MODE_DEFAULT",
        localName: "DEFAULT"
    },
    {
        no: 2,
        name: "CUSTOM_SUBAGENT_PERMISSION_MODE_READONLY",
        localName: "READONLY"
    },
    {
        no: 3,
        name: "CUSTOM_SUBAGENT_PERMISSION_MODE_AGENT_ONLY",
        localName: "AGENT_ONLY"
    }
]), pse = k.makeEnum("agent.v1.SubagentExecutionEnvironment", [
    {
        no: 0,
        name: "SUBAGENT_EXECUTION_ENVIRONMENT_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "SUBAGENT_EXECUTION_ENVIRONMENT_LOCAL",
        localName: "LOCAL"
    },
    {
        no: 2,
        name: "SUBAGENT_EXECUTION_ENVIRONMENT_CLOUD",
        localName: "CLOUD"
    }
]), Mve = k.makeEnum("agent.v1.SubagentBackgroundReason", [
    {
        no: 0,
        name: "SUBAGENT_BACKGROUND_REASON_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "SUBAGENT_BACKGROUND_REASON_AGENT_REQUEST",
        localName: "AGENT_REQUEST"
    },
    {
        no: 2,
        name: "SUBAGENT_BACKGROUND_REASON_USER_REQUEST",
        localName: "USER_REQUEST"
    },
    {
        no: 3,
        name: "SUBAGENT_BACKGROUND_REASON_QUEUED_FOLLOW_UP",
        localName: "QUEUED_FOLLOW_UP"
    }
]), Ebt = k.makeEnum("agent.v1.BackgroundTaskCompletionReason", [
    {
        no: 0,
        name: "BACKGROUND_TASK_COMPLETION_REASON_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "BACKGROUND_TASK_COMPLETION_REASON_TASK_FINISHED",
        localName: "TASK_FINISHED"
    },
    {
        no: 2,
        name: "BACKGROUND_TASK_COMPLETION_REASON_TASK_PROGRESS",
        localName: "TASK_PROGRESS"
    },
    {
        no: 3,
        name: "BACKGROUND_TASK_COMPLETION_REASON_WORKER_REPARENTED",
        localName: "WORKER_REPARENTED"
    },
    {
        no: 4,
        name: "BACKGROUND_TASK_COMPLETION_REASON_WORKER_MESSAGE",
        localName: "WORKER_MESSAGE"
    },
    {
        no: 5,
        name: "BACKGROUND_TASK_COMPLETION_REASON_WORKER_NEEDS_ATTENTION",
        localName: "WORKER_NEEDS_ATTENTION"
    }
]), Jxn = k.makeEnum("agent.v1.TaskMode", [
    {
        no: 0,
        name: "TASK_MODE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "TASK_MODE_AGENT",
        localName: "AGENT"
    },
    {
        no: 2,
        name: "TASK_MODE_PLAN",
        localName: "PLAN"
    }
]), w$ = k.makeMessageType("agent.v1.SubagentType", ()=>[
        {
            no: 1,
            name: "unspecified",
            kind: "message",
            T: IBs,
            oneof: "type"
        },
        {
            no: 2,
            name: "computer_use",
            kind: "message",
            T: S3i,
            oneof: "type"
        },
        {
            no: 3,
            name: "custom",
            kind: "message",
            T: T3i,
            oneof: "type"
        },
        {
            no: 4,
            name: "explore",
            kind: "message",
            T: k3i,
            oneof: "type"
        },
        {
            no: 5,
            name: "media_review",
            kind: "message",
            T: ABs,
            oneof: "type"
        },
        {
            no: 6,
            name: "bash",
            kind: "message",
            T: RBs,
            oneof: "type"
        },
        {
            no: 7,
            name: "browser_use",
            kind: "message",
            T: DBs,
            oneof: "type"
        },
        {
            no: 8,
            name: "shell",
            kind: "message",
            T: w3i,
            oneof: "type"
        },
        {
            no: 9,
            name: "vm_setup_helper",
            kind: "message",
            T: MBs,
            oneof: "type"
        },
        {
            no: 10,
            name: "debug",
            kind: "message",
            T: C3i,
            oneof: "type"
        },
        {
            no: 11,
            name: "cursor_guide",
            kind: "message",
            T: Pfu,
            oneof: "type"
        },
        {
            no: 12,
            name: "watch_video",
            kind: "message",
            T: PBs,
            oneof: "type"
        }
    ]), IBs = k.makeMessageType("agent.v1.SubagentTypeUnspecified", []), S3i = k.makeMessageType("agent.v1.SubagentTypeComputerUse", []), k3i = k.makeMessageType("agent.v1.SubagentTypeExplore", []), ABs = k.makeMessageType("agent.v1.SubagentTypeMediaReview", []), RBs = k.makeMessageType("agent.v1.SubagentTypeBash", []), w3i = k.makeMessageType("agent.v1.SubagentTypeShell", []), DBs = k.makeMessageType("agent.v1.SubagentTypeBrowserUse", []), MBs = k.makeMessageType("agent.v1.SubagentTypeVmSetupHelper", []), C3i = k.makeMessageType("agent.v1.SubagentTypeDebug", []), Pfu = k.makeMessageType("agent.v1.SubagentTypeCursorGuide", []), PBs = k.makeMessageType("agent.v1.SubagentTypeWatchVideo", []), T3i = k.makeMessageType("agent.v1.SubagentTypeCustom", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        }
    ]), VUt = k.makeMessageType("agent.v1.CustomSubagent", ()=>[
        {
            no: 1,
            name: "full_path",
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
            name: "tools",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 5,
            name: "model",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "prompt",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "permission_mode",
            kind: "enum",
            T: k.getEnumType(Mfu)
        },
        {
            no: 8,
            name: "is_background",
            kind: "scalar",
            T: 8
        },
        {
            no: 9,
            name: "plugin",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 10,
            name: "marketplace",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 11,
            name: "plugin_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 12,
            name: "marketplace_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 13,
            name: "force_default_model",
            kind: "scalar",
            T: 8
        },
        {
            no: 14,
            name: "source",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]);

}
