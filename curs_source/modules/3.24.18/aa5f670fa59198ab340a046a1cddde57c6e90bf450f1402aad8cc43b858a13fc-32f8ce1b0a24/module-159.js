require.r(exports);
require.d(exports, {
    ClientContinuationConfig: ()=>ClientContinuationConfig,
    ForceBackgroundSubagentArgs: ()=>ForceBackgroundSubagentArgs,
    ForceBackgroundSubagentResult: ()=>ForceBackgroundSubagentResult,
    ForceBackgroundSubagentStatus: ()=>ForceBackgroundSubagentStatus,
    SubagentArgs: ()=>SubagentArgs,
    SubagentAwaitArgs: ()=>SubagentAwaitArgs,
    SubagentAwaitComplete: ()=>SubagentAwaitComplete,
    SubagentAwaitError: ()=>SubagentAwaitError,
    SubagentAwaitNotFound: ()=>SubagentAwaitNotFound,
    SubagentAwaitResult: ()=>SubagentAwaitResult,
    SubagentAwaitStillRunning: ()=>SubagentAwaitStillRunning,
    SubagentError: ()=>SubagentError,
    SubagentResult: ()=>SubagentResult,
    SubagentSuccess: ()=>SubagentSuccess
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
var _requested_model_pb_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-66.js");
var _subagents_pb_js__WEBPACK_IMPORTED_MODULE_2__ = require("./module-68.js");
var _selected_context_pb_js__WEBPACK_IMPORTED_MODULE_3__ = require("./module-149.js");
const ForceBackgroundSubagentStatus = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("agent.v1.ForceBackgroundSubagentStatus", [
    {
        no: 0,
        name: "FORCE_BACKGROUND_SUBAGENT_STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "FORCE_BACKGROUND_SUBAGENT_STATUS_ACCEPTED",
        localName: "ACCEPTED"
    },
    {
        no: 2,
        name: "FORCE_BACKGROUND_SUBAGENT_STATUS_NOT_FOUND",
        localName: "NOT_FOUND"
    }
]);
const SubagentArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SubagentArgs", ()=>[
        {
            no: 1,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "subagent_type",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "model_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "prompt",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "readonly",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "resume_agent_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "run_in_background",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 8,
            name: "continuation_config",
            kind: "message",
            T: ClientContinuationConfig
        },
        {
            no: 9,
            name: "parent_conversation_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 10,
            name: "api_key_credentials",
            kind: "message",
            T: _requested_model_pb_js__WEBPACK_IMPORTED_MODULE_1__.ApiKeyCredentials,
            oneof: "credentials"
        },
        {
            no: 11,
            name: "azure_credentials",
            kind: "message",
            T: _requested_model_pb_js__WEBPACK_IMPORTED_MODULE_1__.AzureCredentials,
            oneof: "credentials"
        },
        {
            no: 12,
            name: "bedrock_credentials",
            kind: "message",
            T: _requested_model_pb_js__WEBPACK_IMPORTED_MODULE_1__.BedrockCredentials,
            oneof: "credentials"
        },
        {
            no: 13,
            name: "interrupt",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 14,
            name: "mode",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(_subagents_pb_js__WEBPACK_IMPORTED_MODULE_2__.TaskMode)
        },
        {
            no: 15,
            name: "fork_agent_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 16,
            name: "root_parent_conversation_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 17,
            name: "selected_context",
            kind: "message",
            T: _selected_context_pb_js__WEBPACK_IMPORTED_MODULE_3__.SelectedContext,
            opt: true
        },
        {
            no: 18,
            name: "direct_meta_parent_child_subagent",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 19,
            name: "environment",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(_subagents_pb_js__WEBPACK_IMPORTED_MODULE_2__.SubagentExecutionEnvironment)
        },
        {
            no: 20,
            name: "cloud_base_branch",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 21,
            name: "model_parameters",
            kind: "message",
            T: _requested_model_pb_js__WEBPACK_IMPORTED_MODULE_1__.RequestedModel_ModelParameterValue,
            repeated: true
        }
    ]);
const ClientContinuationConfig = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ClientContinuationConfig", ()=>[
        {
            no: 1,
            name: "idle_threshold",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "max_loops",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "nudge_message",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "escape_message_template",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "collect_background_children",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "children_completed_message_template",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "continuation_round_delay_ms",
            kind: "scalar",
            T: 5
        }
    ]);
const SubagentResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SubagentResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: SubagentSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: SubagentError,
            oneof: "result"
        }
    ]);
const SubagentAwaitArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SubagentAwaitArgs", ()=>[
        {
            no: 1,
            name: "agent_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "timeout_ms",
            kind: "scalar",
            T: 13
        }
    ]);
const SubagentAwaitResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SubagentAwaitResult", ()=>[
        {
            no: 1,
            name: "complete",
            kind: "message",
            T: SubagentAwaitComplete,
            oneof: "result"
        },
        {
            no: 2,
            name: "still_running",
            kind: "message",
            T: SubagentAwaitStillRunning,
            oneof: "result"
        },
        {
            no: 3,
            name: "not_found",
            kind: "message",
            T: SubagentAwaitNotFound,
            oneof: "result"
        },
        {
            no: 4,
            name: "error",
            kind: "message",
            T: SubagentAwaitError,
            oneof: "result"
        }
    ]);
const SubagentAwaitComplete = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SubagentAwaitComplete", ()=>[
        {
            no: 1,
            name: "agent_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "transcript_path",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "tool_call_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "final_message",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const SubagentAwaitStillRunning = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SubagentAwaitStillRunning", ()=>[
        {
            no: 1,
            name: "agent_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "transcript_path",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const SubagentAwaitNotFound = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SubagentAwaitNotFound", ()=>[
        {
            no: 1,
            name: "agent_id",
            kind: "scalar",
            T: 9
        }
    ]);
const SubagentAwaitError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SubagentAwaitError", ()=>[
        {
            no: 1,
            name: "agent_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
const SubagentSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SubagentSuccess", ()=>[
        {
            no: 1,
            name: "agent_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "final_message",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "tool_call_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "background_reason",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(_subagents_pb_js__WEBPACK_IMPORTED_MODULE_2__.SubagentBackgroundReason)
        },
        {
            no: 5,
            name: "transcript_path",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const SubagentError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SubagentError", ()=>[
        {
            no: 1,
            name: "agent_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
const ForceBackgroundSubagentArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ForceBackgroundSubagentArgs", ()=>[
        {
            no: 1,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        }
    ]);
const ForceBackgroundSubagentResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ForceBackgroundSubagentResult", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(ForceBackgroundSubagentStatus)
        }
    ]);
