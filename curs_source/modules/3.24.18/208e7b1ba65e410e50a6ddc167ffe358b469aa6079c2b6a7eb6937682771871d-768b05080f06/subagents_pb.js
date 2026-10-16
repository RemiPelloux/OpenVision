import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
var Az, Yy, Mz, $P, jP, HP, Pz, Nz, Dz, Oz, Lz, Uz, xz, Fz, Wz, Bz, Gz, Vz, qP;
export { $P, Az, Bz, Dz, Fz, Gz, HP, Lz, Mz, Nz, Oz, Pz, Uz, Vz, Wz, Yy, jP, qP, xz };
var __wakaru_Og_initialized = false;
export function Og() {
if (__wakaru_Og_initialized) return;
__wakaru_Og_initialized = true;
"use strict";
h(), F(), Az = c.makeEnum("agent.v1.CustomSubagentPermissionMode", [
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
]), Yy = c.makeEnum("agent.v1.SubagentExecutionEnvironment", [
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
]), Mz = c.makeEnum("agent.v1.SubagentBackgroundReason", [
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
]), $P = c.makeEnum("agent.v1.BackgroundTaskCompletionReason", [
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
]), jP = c.makeEnum("agent.v1.TaskMode", [
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
]), HP = c.makeMessageType("agent.v1.SubagentType", ()=>[
        {
            no: 1,
            name: "unspecified",
            kind: "message",
            T: Pz,
            oneof: "type"
        },
        {
            no: 2,
            name: "computer_use",
            kind: "message",
            T: Nz,
            oneof: "type"
        },
        {
            no: 3,
            name: "custom",
            kind: "message",
            T: Vz,
            oneof: "type"
        },
        {
            no: 4,
            name: "explore",
            kind: "message",
            T: Dz,
            oneof: "type"
        },
        {
            no: 5,
            name: "media_review",
            kind: "message",
            T: Oz,
            oneof: "type"
        },
        {
            no: 6,
            name: "bash",
            kind: "message",
            T: Lz,
            oneof: "type"
        },
        {
            no: 7,
            name: "browser_use",
            kind: "message",
            T: xz,
            oneof: "type"
        },
        {
            no: 8,
            name: "shell",
            kind: "message",
            T: Uz,
            oneof: "type"
        },
        {
            no: 9,
            name: "vm_setup_helper",
            kind: "message",
            T: Fz,
            oneof: "type"
        },
        {
            no: 10,
            name: "debug",
            kind: "message",
            T: Wz,
            oneof: "type"
        },
        {
            no: 11,
            name: "cursor_guide",
            kind: "message",
            T: Bz,
            oneof: "type"
        },
        {
            no: 12,
            name: "watch_video",
            kind: "message",
            T: Gz,
            oneof: "type"
        }
    ]), Pz = c.makeMessageType("agent.v1.SubagentTypeUnspecified", []), Nz = c.makeMessageType("agent.v1.SubagentTypeComputerUse", []), Dz = c.makeMessageType("agent.v1.SubagentTypeExplore", []), Oz = c.makeMessageType("agent.v1.SubagentTypeMediaReview", []), Lz = c.makeMessageType("agent.v1.SubagentTypeBash", []), Uz = c.makeMessageType("agent.v1.SubagentTypeShell", []), xz = c.makeMessageType("agent.v1.SubagentTypeBrowserUse", []), Fz = c.makeMessageType("agent.v1.SubagentTypeVmSetupHelper", []), Wz = c.makeMessageType("agent.v1.SubagentTypeDebug", []), Bz = c.makeMessageType("agent.v1.SubagentTypeCursorGuide", []), Gz = c.makeMessageType("agent.v1.SubagentTypeWatchVideo", []), Vz = c.makeMessageType("agent.v1.SubagentTypeCustom", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        }
    ]), qP = c.makeMessageType("agent.v1.CustomSubagent", ()=>[
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
            T: c.getEnumType(Az)
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
