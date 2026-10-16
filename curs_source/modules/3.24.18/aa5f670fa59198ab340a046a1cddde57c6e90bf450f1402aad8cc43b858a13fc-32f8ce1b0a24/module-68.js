require.r(exports);
require.d(exports, {
    BackgroundTaskCompletionReason: ()=>BackgroundTaskCompletionReason,
    CustomSubagent: ()=>CustomSubagent,
    CustomSubagentPermissionMode: ()=>CustomSubagentPermissionMode,
    SubagentBackgroundReason: ()=>SubagentBackgroundReason,
    SubagentExecutionEnvironment: ()=>SubagentExecutionEnvironment,
    SubagentType: ()=>SubagentType,
    SubagentTypeBash: ()=>SubagentTypeBash,
    SubagentTypeBrowserUse: ()=>SubagentTypeBrowserUse,
    SubagentTypeComputerUse: ()=>SubagentTypeComputerUse,
    SubagentTypeCursorGuide: ()=>SubagentTypeCursorGuide,
    SubagentTypeCustom: ()=>SubagentTypeCustom,
    SubagentTypeDebug: ()=>SubagentTypeDebug,
    SubagentTypeExplore: ()=>SubagentTypeExplore,
    SubagentTypeMediaReview: ()=>SubagentTypeMediaReview,
    SubagentTypeShell: ()=>SubagentTypeShell,
    SubagentTypeUnspecified: ()=>SubagentTypeUnspecified,
    SubagentTypeVmSetupHelper: ()=>SubagentTypeVmSetupHelper,
    SubagentTypeWatchVideo: ()=>SubagentTypeWatchVideo,
    TaskMode: ()=>TaskMode
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
const CustomSubagentPermissionMode = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("agent.v1.CustomSubagentPermissionMode", [
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
]);
const SubagentExecutionEnvironment = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("agent.v1.SubagentExecutionEnvironment", [
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
]);
const SubagentBackgroundReason = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("agent.v1.SubagentBackgroundReason", [
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
]);
const BackgroundTaskCompletionReason = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("agent.v1.BackgroundTaskCompletionReason", [
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
]);
const TaskMode = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("agent.v1.TaskMode", [
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
]);
const SubagentType = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SubagentType", ()=>[
        {
            no: 1,
            name: "unspecified",
            kind: "message",
            T: SubagentTypeUnspecified,
            oneof: "type"
        },
        {
            no: 2,
            name: "computer_use",
            kind: "message",
            T: SubagentTypeComputerUse,
            oneof: "type"
        },
        {
            no: 3,
            name: "custom",
            kind: "message",
            T: SubagentTypeCustom,
            oneof: "type"
        },
        {
            no: 4,
            name: "explore",
            kind: "message",
            T: SubagentTypeExplore,
            oneof: "type"
        },
        {
            no: 5,
            name: "media_review",
            kind: "message",
            T: SubagentTypeMediaReview,
            oneof: "type"
        },
        {
            no: 6,
            name: "bash",
            kind: "message",
            T: SubagentTypeBash,
            oneof: "type"
        },
        {
            no: 7,
            name: "browser_use",
            kind: "message",
            T: SubagentTypeBrowserUse,
            oneof: "type"
        },
        {
            no: 8,
            name: "shell",
            kind: "message",
            T: SubagentTypeShell,
            oneof: "type"
        },
        {
            no: 9,
            name: "vm_setup_helper",
            kind: "message",
            T: SubagentTypeVmSetupHelper,
            oneof: "type"
        },
        {
            no: 10,
            name: "debug",
            kind: "message",
            T: SubagentTypeDebug,
            oneof: "type"
        },
        {
            no: 11,
            name: "cursor_guide",
            kind: "message",
            T: SubagentTypeCursorGuide,
            oneof: "type"
        },
        {
            no: 12,
            name: "watch_video",
            kind: "message",
            T: SubagentTypeWatchVideo,
            oneof: "type"
        }
    ]);
const SubagentTypeUnspecified = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SubagentTypeUnspecified", []);
const SubagentTypeComputerUse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SubagentTypeComputerUse", []);
const SubagentTypeExplore = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SubagentTypeExplore", []);
const SubagentTypeMediaReview = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SubagentTypeMediaReview", []);
const SubagentTypeBash = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SubagentTypeBash", []);
const SubagentTypeShell = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SubagentTypeShell", []);
const SubagentTypeBrowserUse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SubagentTypeBrowserUse", []);
const SubagentTypeVmSetupHelper = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SubagentTypeVmSetupHelper", []);
const SubagentTypeDebug = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SubagentTypeDebug", []);
const SubagentTypeCursorGuide = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SubagentTypeCursorGuide", []);
const SubagentTypeWatchVideo = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SubagentTypeWatchVideo", []);
const SubagentTypeCustom = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SubagentTypeCustom", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        }
    ]);
const CustomSubagent = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.CustomSubagent", ()=>[
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
            repeated: true
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
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(CustomSubagentPermissionMode)
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
            opt: true
        },
        {
            no: 10,
            name: "marketplace",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 11,
            name: "plugin_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 12,
            name: "marketplace_id",
            kind: "scalar",
            T: 9,
            opt: true
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
            opt: true
        }
    ]);
