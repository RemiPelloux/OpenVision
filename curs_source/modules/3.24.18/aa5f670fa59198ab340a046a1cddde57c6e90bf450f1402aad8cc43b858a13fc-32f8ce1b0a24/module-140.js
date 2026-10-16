require.r(exports);
require.d(exports, {
    CreateAgentArgs: ()=>CreateAgentArgs,
    CreateAgentError: ()=>CreateAgentError,
    CreateAgentPlacementApprovalState: ()=>CreateAgentPlacementApprovalState,
    CreateAgentResult: ()=>CreateAgentResult,
    CreateAgentSuccess: ()=>CreateAgentSuccess,
    CreateAgentToolCall: ()=>CreateAgentToolCall,
    GetAgentStatusArgs: ()=>GetAgentStatusArgs,
    GetAgentStatusError: ()=>GetAgentStatusError,
    GetAgentStatusResult: ()=>GetAgentStatusResult,
    GetAgentStatusSuccess: ()=>GetAgentStatusSuccess,
    GetAgentStatusToolCall: ()=>GetAgentStatusToolCall,
    GetAgentStatusWorker: ()=>GetAgentStatusWorker,
    ReadAgentTranscriptArgs: ()=>ReadAgentTranscriptArgs,
    ReadAgentTranscriptError: ()=>ReadAgentTranscriptError,
    ReadAgentTranscriptResult: ()=>ReadAgentTranscriptResult,
    ReadAgentTranscriptSuccess: ()=>ReadAgentTranscriptSuccess,
    ReadAgentTranscriptToolCall: ()=>ReadAgentTranscriptToolCall,
    RequestAccessError: ()=>RequestAccessError,
    RequestAccessResult: ()=>RequestAccessResult,
    RequestAccessSuccess: ()=>RequestAccessSuccess,
    SendToAgentArgs: ()=>SendToAgentArgs,
    SendToAgentError: ()=>SendToAgentError,
    SendToAgentResult: ()=>SendToAgentResult,
    SendToAgentSuccess: ()=>SendToAgentSuccess,
    SendToAgentToolCall: ()=>SendToAgentToolCall,
    StopAgentArgs: ()=>StopAgentArgs,
    StopAgentError: ()=>StopAgentError,
    StopAgentResult: ()=>StopAgentResult,
    StopAgentSuccess: ()=>StopAgentSuccess,
    StopAgentToolCall: ()=>StopAgentToolCall
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
const CreateAgentPlacementApprovalState = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("agent.v1.CreateAgentPlacementApprovalState", [
    {
        no: 0,
        name: "CREATE_AGENT_PLACEMENT_APPROVAL_STATE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "CREATE_AGENT_PLACEMENT_APPROVAL_STATE_REQUIRED",
        localName: "REQUIRED"
    },
    {
        no: 2,
        name: "CREATE_AGENT_PLACEMENT_APPROVAL_STATE_DENIED",
        localName: "DENIED"
    }
]);
const GetAgentStatusArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.GetAgentStatusArgs", ()=>[
        {
            no: 1,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "agent_ids",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
const GetAgentStatusWorker = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.GetAgentStatusWorker", ()=>[
        {
            no: 1,
            name: "bc_id",
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
            name: "lifecycle",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "turn_in_flight",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "last_terminal_turn_status",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "last_activity_at_ms",
            kind: "scalar",
            T: 4
        }
    ]);
const GetAgentStatusSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.GetAgentStatusSuccess", ()=>[
        {
            no: 1,
            name: "workers",
            kind: "message",
            T: GetAgentStatusWorker,
            repeated: true
        },
        {
            no: 2,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ]);
const GetAgentStatusError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.GetAgentStatusError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
const GetAgentStatusResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.GetAgentStatusResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: GetAgentStatusSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: GetAgentStatusError,
            oneof: "result"
        }
    ]);
const GetAgentStatusToolCall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.GetAgentStatusToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: GetAgentStatusArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: GetAgentStatusResult
        }
    ]);
const SendToAgentArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SendToAgentArgs", ()=>[
        {
            no: 1,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "agent_id",
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
            name: "delivery",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "model",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const SendToAgentSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SendToAgentSuccess", ()=>[
        {
            no: 1,
            name: "worker_bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "delivered_as",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ]);
const SendToAgentError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SendToAgentError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
const SendToAgentResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SendToAgentResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: SendToAgentSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: SendToAgentError,
            oneof: "result"
        }
    ]);
const SendToAgentToolCall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SendToAgentToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: SendToAgentArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: SendToAgentResult
        }
    ]);
const ReadAgentTranscriptArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ReadAgentTranscriptArgs", ()=>[
        {
            no: 1,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "agent_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "mode",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "max_turns",
            kind: "scalar",
            T: 13
        }
    ]);
const ReadAgentTranscriptSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ReadAgentTranscriptSuccess", ()=>[
        {
            no: 1,
            name: "transcript",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "truncated",
            kind: "scalar",
            T: 8
        }
    ]);
const ReadAgentTranscriptError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ReadAgentTranscriptError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
const ReadAgentTranscriptResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ReadAgentTranscriptResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: ReadAgentTranscriptSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: ReadAgentTranscriptError,
            oneof: "result"
        }
    ]);
const ReadAgentTranscriptToolCall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ReadAgentTranscriptToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: ReadAgentTranscriptArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: ReadAgentTranscriptResult
        }
    ]);
const CreateAgentArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.CreateAgentArgs", ()=>[
        {
            no: 1,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "prompt",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "name",
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
            name: "base_branch",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "machine_type",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "worker_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 8,
            name: "pool",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 9,
            name: "labels",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        },
        {
            no: 10,
            name: "environment_build_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 11,
            name: "environment_id",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const CreateAgentSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.CreateAgentSuccess", ()=>[
        {
            no: 1,
            name: "agent_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ]);
const CreateAgentError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.CreateAgentError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "placement_approval_state",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(CreateAgentPlacementApprovalState),
            opt: true
        }
    ]);
const CreateAgentResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.CreateAgentResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: CreateAgentSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: CreateAgentError,
            oneof: "result"
        }
    ]);
const CreateAgentToolCall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.CreateAgentToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: CreateAgentArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: CreateAgentResult
        }
    ]);
const RequestAccessSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.RequestAccessSuccess", ()=>[
        {
            no: 1,
            name: "decision",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ]);
const RequestAccessError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.RequestAccessError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
const RequestAccessResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.RequestAccessResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: RequestAccessSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: RequestAccessError,
            oneof: "result"
        }
    ]);
const StopAgentArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.StopAgentArgs", ()=>[
        {
            no: 1,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "agent_id",
            kind: "scalar",
            T: 9
        }
    ]);
const StopAgentSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.StopAgentSuccess", ()=>[
        {
            no: 1,
            name: "worker_bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ]);
const StopAgentError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.StopAgentError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
const StopAgentResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.StopAgentResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: StopAgentSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: StopAgentError,
            oneof: "result"
        }
    ]);
const StopAgentToolCall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.StopAgentToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: StopAgentArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: StopAgentResult
        }
    ]);
