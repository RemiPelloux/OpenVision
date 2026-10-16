import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var Mgd, zse, TAe, S4t, Kei, hY, l3o, Ybr, Xbr, c3o, u3o, Zbr, d3o, h3o, Qbr, Dgd, p3o, Jbr, Opn;
export { Dgd, Jbr, Kei, Mgd, Opn, Qbr, S4t, TAe, Xbr, Ybr, Zbr, c3o, d3o, h3o, hY, l3o, p3o, u3o, zse };
var __wakaru_bQ_initialized = false;
export function bQ() {
if (__wakaru_bQ_initialized) return;
__wakaru_bQ_initialized = true;
"use strict";
E(), hr(), Mgd = x.makeEnum("agent.v1.CustomSubagentPermissionMode", [
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
]), zse = x.makeEnum("agent.v1.SubagentExecutionEnvironment", [
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
]), TAe = x.makeEnum("agent.v1.SubagentBackgroundReason", [
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
]), S4t = x.makeEnum("agent.v1.BackgroundTaskCompletionReason", [
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
]), Kei = x.makeEnum("agent.v1.TaskMode", [
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
]), hY = x.makeMessageType("agent.v1.SubagentType", ()=>[
        {
            no: 1,
            name: "unspecified",
            kind: "message",
            T: l3o,
            oneof: "type"
        },
        {
            no: 2,
            name: "computer_use",
            kind: "message",
            T: Ybr,
            oneof: "type"
        },
        {
            no: 3,
            name: "custom",
            kind: "message",
            T: Jbr,
            oneof: "type"
        },
        {
            no: 4,
            name: "explore",
            kind: "message",
            T: Xbr,
            oneof: "type"
        },
        {
            no: 5,
            name: "media_review",
            kind: "message",
            T: c3o,
            oneof: "type"
        },
        {
            no: 6,
            name: "bash",
            kind: "message",
            T: u3o,
            oneof: "type"
        },
        {
            no: 7,
            name: "browser_use",
            kind: "message",
            T: d3o,
            oneof: "type"
        },
        {
            no: 8,
            name: "shell",
            kind: "message",
            T: Zbr,
            oneof: "type"
        },
        {
            no: 9,
            name: "vm_setup_helper",
            kind: "message",
            T: h3o,
            oneof: "type"
        },
        {
            no: 10,
            name: "debug",
            kind: "message",
            T: Qbr,
            oneof: "type"
        },
        {
            no: 11,
            name: "cursor_guide",
            kind: "message",
            T: Dgd,
            oneof: "type"
        },
        {
            no: 12,
            name: "watch_video",
            kind: "message",
            T: p3o,
            oneof: "type"
        }
    ]), l3o = x.makeMessageType("agent.v1.SubagentTypeUnspecified", []), Ybr = x.makeMessageType("agent.v1.SubagentTypeComputerUse", []), Xbr = x.makeMessageType("agent.v1.SubagentTypeExplore", []), c3o = x.makeMessageType("agent.v1.SubagentTypeMediaReview", []), u3o = x.makeMessageType("agent.v1.SubagentTypeBash", []), Zbr = x.makeMessageType("agent.v1.SubagentTypeShell", []), d3o = x.makeMessageType("agent.v1.SubagentTypeBrowserUse", []), h3o = x.makeMessageType("agent.v1.SubagentTypeVmSetupHelper", []), Qbr = x.makeMessageType("agent.v1.SubagentTypeDebug", []), Dgd = x.makeMessageType("agent.v1.SubagentTypeCursorGuide", []), p3o = x.makeMessageType("agent.v1.SubagentTypeWatchVideo", []), Jbr = x.makeMessageType("agent.v1.SubagentTypeCustom", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        }
    ]), Opn = x.makeMessageType("agent.v1.CustomSubagent", ()=>[
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
            T: x.getEnumType(Mgd)
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
