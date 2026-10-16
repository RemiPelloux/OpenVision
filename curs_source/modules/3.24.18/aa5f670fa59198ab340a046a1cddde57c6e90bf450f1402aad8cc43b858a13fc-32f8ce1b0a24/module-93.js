require.r(exports);
require.d(exports, {
    CreatePlanArgs: ()=>CreatePlanArgs,
    CreatePlanError: ()=>CreatePlanError,
    CreatePlanRequestQuery: ()=>CreatePlanRequestQuery,
    CreatePlanRequestResponse: ()=>CreatePlanRequestResponse,
    CreatePlanResult: ()=>CreatePlanResult,
    CreatePlanSuccess: ()=>CreatePlanSuccess,
    CreatePlanToolCall: ()=>CreatePlanToolCall,
    Phase: ()=>Phase
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
var _todo_tool_pb_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-81.js");
const CreatePlanToolCall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.CreatePlanToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: CreatePlanArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: CreatePlanResult
        }
    ]);
const Phase = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.Phase", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "todos",
            kind: "message",
            T: _todo_tool_pb_js__WEBPACK_IMPORTED_MODULE_1__.TodoItem,
            repeated: true
        }
    ]);
const CreatePlanArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.CreatePlanArgs", ()=>[
        {
            no: 1,
            name: "plan",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "todos",
            kind: "message",
            T: _todo_tool_pb_js__WEBPACK_IMPORTED_MODULE_1__.TodoItem,
            repeated: true
        },
        {
            no: 3,
            name: "overview",
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
            name: "is_project",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "phases",
            kind: "message",
            T: Phase,
            repeated: true
        }
    ]);
const CreatePlanResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.CreatePlanResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: CreatePlanSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: CreatePlanError,
            oneof: "result"
        },
        {
            no: 3,
            name: "plan_uri",
            kind: "scalar",
            T: 9
        }
    ]);
const CreatePlanSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.CreatePlanSuccess", []);
const CreatePlanError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.CreatePlanError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
const CreatePlanRequestQuery = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.CreatePlanRequestQuery", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: CreatePlanArgs
        },
        {
            no: 2,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        }
    ]);
const CreatePlanRequestResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.CreatePlanRequestResponse", ()=>[
        {
            no: 1,
            name: "result",
            kind: "message",
            T: CreatePlanResult
        }
    ]);
