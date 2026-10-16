require.r(exports);
require.d(exports, {
    AfterAgentResponseRequestQuery: ()=>AfterAgentResponseRequestQuery,
    AfterAgentResponseRequestResponse: ()=>AfterAgentResponseRequestResponse,
    AfterAgentThoughtRequestQuery: ()=>AfterAgentThoughtRequestQuery,
    AfterAgentThoughtRequestResponse: ()=>AfterAgentThoughtRequestResponse,
    BeforeSubmitPromptAttachment: ()=>BeforeSubmitPromptAttachment,
    BeforeSubmitPromptRequestQuery: ()=>BeforeSubmitPromptRequestQuery,
    BeforeSubmitPromptRequestResponse: ()=>BeforeSubmitPromptRequestResponse,
    PostToolUseFailureRequestQuery: ()=>PostToolUseFailureRequestQuery,
    PostToolUseFailureRequestResponse: ()=>PostToolUseFailureRequestResponse,
    PostToolUseRequestQuery: ()=>PostToolUseRequestQuery,
    PostToolUseRequestResponse: ()=>PostToolUseRequestResponse,
    PreCompactRequestQuery: ()=>PreCompactRequestQuery,
    PreCompactRequestResponse: ()=>PreCompactRequestResponse,
    PreToolUseRequestQuery: ()=>PreToolUseRequestQuery,
    PreToolUseRequestResponse: ()=>PreToolUseRequestResponse,
    StopRequestQuery: ()=>StopRequestQuery,
    StopRequestResponse: ()=>StopRequestResponse,
    SubagentStartRequestQuery: ()=>SubagentStartRequestQuery,
    SubagentStartRequestResponse: ()=>SubagentStartRequestResponse,
    SubagentStopRequestQuery: ()=>SubagentStopRequestQuery,
    SubagentStopRequestResponse: ()=>SubagentStopRequestResponse
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
var _requested_model_pb_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-66.js");
const PreCompactRequestQuery = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PreCompactRequestQuery", ()=>[
        {
            no: 1,
            name: "trigger",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "context_usage_percent",
            kind: "scalar",
            T: 1
        },
        {
            no: 3,
            name: "context_tokens",
            kind: "scalar",
            T: 3
        },
        {
            no: 4,
            name: "context_window_size",
            kind: "scalar",
            T: 3
        },
        {
            no: 5,
            name: "message_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 6,
            name: "messages_to_compact",
            kind: "scalar",
            T: 5
        },
        {
            no: 7,
            name: "is_first_compaction",
            kind: "scalar",
            T: 8
        },
        {
            no: 8,
            name: "conversation_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 9,
            name: "generation_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 10,
            name: "model",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 11,
            name: "model_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 12,
            name: "model_params",
            kind: "message",
            T: _requested_model_pb_js__WEBPACK_IMPORTED_MODULE_1__.RequestedModel_ModelParameterValue,
            repeated: true
        }
    ]);
const PreCompactRequestResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PreCompactRequestResponse", ()=>[
        {
            no: 1,
            name: "user_message",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const SubagentStartRequestQuery = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SubagentStartRequestQuery", ()=>[
        {
            no: 1,
            name: "subagent_id",
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
            name: "task",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "parent_conversation_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "tool_call_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "subagent_model",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "is_parallel_worker",
            kind: "scalar",
            T: 8
        },
        {
            no: 8,
            name: "git_branch",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 9,
            name: "conversation_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 10,
            name: "generation_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 11,
            name: "model",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 12,
            name: "model_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 13,
            name: "model_params",
            kind: "message",
            T: _requested_model_pb_js__WEBPACK_IMPORTED_MODULE_1__.RequestedModel_ModelParameterValue,
            repeated: true
        }
    ]);
const SubagentStartRequestResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SubagentStartRequestResponse", ()=>[
        {
            no: 1,
            name: "permission",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "user_message",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "additional_context",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const SubagentStopRequestQuery = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SubagentStopRequestQuery", ()=>[
        {
            no: 1,
            name: "subagent_id",
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
            name: "status",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "duration_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 5,
            name: "summary",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "parent_conversation_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "message_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 8,
            name: "tool_call_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 9,
            name: "error_message",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 10,
            name: "modified_files",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 11,
            name: "git_branch",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 12,
            name: "conversation_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 13,
            name: "generation_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 14,
            name: "model",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 15,
            name: "loop_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 16,
            name: "task",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 17,
            name: "description",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 18,
            name: "model_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 19,
            name: "model_params",
            kind: "message",
            T: _requested_model_pb_js__WEBPACK_IMPORTED_MODULE_1__.RequestedModel_ModelParameterValue,
            repeated: true
        },
        {
            no: 20,
            name: "child_conversation_id",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const SubagentStopRequestResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SubagentStopRequestResponse", ()=>[
        {
            no: 1,
            name: "followup_message",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "additional_context",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const BeforeSubmitPromptAttachment = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.BeforeSubmitPromptAttachment", ()=>[
        {
            no: 1,
            name: "type",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "file_path",
            kind: "scalar",
            T: 9
        }
    ]);
const BeforeSubmitPromptRequestQuery = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.BeforeSubmitPromptRequestQuery", ()=>[
        {
            no: 1,
            name: "prompt",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "attachments",
            kind: "message",
            T: BeforeSubmitPromptAttachment,
            repeated: true
        },
        {
            no: 3,
            name: "composer_mode",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "conversation_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "generation_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "model",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "model_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 8,
            name: "model_params",
            kind: "message",
            T: _requested_model_pb_js__WEBPACK_IMPORTED_MODULE_1__.RequestedModel_ModelParameterValue,
            repeated: true
        }
    ]);
const BeforeSubmitPromptRequestResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.BeforeSubmitPromptRequestResponse", ()=>[
        {
            no: 1,
            name: "continue",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 2,
            name: "user_message",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "additional_context",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const AfterAgentResponseRequestQuery = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.AfterAgentResponseRequestQuery", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "conversation_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "generation_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "model",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "model_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "model_params",
            kind: "message",
            T: _requested_model_pb_js__WEBPACK_IMPORTED_MODULE_1__.RequestedModel_ModelParameterValue,
            repeated: true
        },
        {
            no: 7,
            name: "input_tokens",
            kind: "scalar",
            T: 3,
            opt: true
        },
        {
            no: 8,
            name: "output_tokens",
            kind: "scalar",
            T: 3,
            opt: true
        },
        {
            no: 9,
            name: "cache_read_tokens",
            kind: "scalar",
            T: 3,
            opt: true
        },
        {
            no: 10,
            name: "cache_write_tokens",
            kind: "scalar",
            T: 3,
            opt: true
        }
    ]);
const AfterAgentResponseRequestResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.AfterAgentResponseRequestResponse", []);
const AfterAgentThoughtRequestQuery = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.AfterAgentThoughtRequestQuery", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "duration_ms",
            kind: "scalar",
            T: 3,
            opt: true
        },
        {
            no: 3,
            name: "conversation_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "generation_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "model",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "model_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "model_params",
            kind: "message",
            T: _requested_model_pb_js__WEBPACK_IMPORTED_MODULE_1__.RequestedModel_ModelParameterValue,
            repeated: true
        }
    ]);
const AfterAgentThoughtRequestResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.AfterAgentThoughtRequestResponse", []);
const StopRequestQuery = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.StopRequestQuery", ()=>[
        {
            no: 1,
            name: "status",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "loop_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "conversation_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "generation_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "model",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "model_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "model_params",
            kind: "message",
            T: _requested_model_pb_js__WEBPACK_IMPORTED_MODULE_1__.RequestedModel_ModelParameterValue,
            repeated: true
        },
        {
            no: 8,
            name: "input_tokens",
            kind: "scalar",
            T: 3,
            opt: true
        },
        {
            no: 9,
            name: "output_tokens",
            kind: "scalar",
            T: 3,
            opt: true
        },
        {
            no: 10,
            name: "cache_read_tokens",
            kind: "scalar",
            T: 3,
            opt: true
        },
        {
            no: 11,
            name: "cache_write_tokens",
            kind: "scalar",
            T: 3,
            opt: true
        }
    ]);
const StopRequestResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.StopRequestResponse", ()=>[
        {
            no: 1,
            name: "followup_message",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const PreToolUseRequestQuery = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PreToolUseRequestQuery", ()=>[
        {
            no: 1,
            name: "tool_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "tool_input",
            kind: "message",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.Struct
        },
        {
            no: 3,
            name: "tool_use_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "cwd",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "conversation_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "generation_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "model",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 8,
            name: "model_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 9,
            name: "model_params",
            kind: "message",
            T: _requested_model_pb_js__WEBPACK_IMPORTED_MODULE_1__.RequestedModel_ModelParameterValue,
            repeated: true
        },
        {
            no: 10,
            name: "parent_tool_call_id",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const PreToolUseRequestResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PreToolUseRequestResponse", ()=>[
        {
            no: 1,
            name: "permission",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "user_message",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "agent_message",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "updated_input",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "additional_context",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const PostToolUseRequestQuery = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PostToolUseRequestQuery", ()=>[
        {
            no: 1,
            name: "tool_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "tool_input",
            kind: "message",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.Struct
        },
        {
            no: 3,
            name: "tool_output",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "duration_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 5,
            name: "tool_use_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "cwd",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "conversation_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 8,
            name: "generation_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 9,
            name: "model",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 10,
            name: "model_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 11,
            name: "model_params",
            kind: "message",
            T: _requested_model_pb_js__WEBPACK_IMPORTED_MODULE_1__.RequestedModel_ModelParameterValue,
            repeated: true
        },
        {
            no: 12,
            name: "parent_tool_call_id",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const PostToolUseRequestResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PostToolUseRequestResponse", ()=>[
        {
            no: 1,
            name: "additional_context",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const PostToolUseFailureRequestQuery = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PostToolUseFailureRequestQuery", ()=>[
        {
            no: 1,
            name: "tool_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "tool_input",
            kind: "message",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.Struct
        },
        {
            no: 3,
            name: "error_message",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "failure_type",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "duration_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 6,
            name: "tool_use_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "is_interrupt",
            kind: "scalar",
            T: 8
        },
        {
            no: 8,
            name: "conversation_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 9,
            name: "generation_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 10,
            name: "model",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 11,
            name: "model_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 12,
            name: "model_params",
            kind: "message",
            T: _requested_model_pb_js__WEBPACK_IMPORTED_MODULE_1__.RequestedModel_ModelParameterValue,
            repeated: true
        },
        {
            no: 13,
            name: "parent_tool_call_id",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const PostToolUseFailureRequestResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PostToolUseFailureRequestResponse", ()=>[
        {
            no: 1,
            name: "additional_context",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
