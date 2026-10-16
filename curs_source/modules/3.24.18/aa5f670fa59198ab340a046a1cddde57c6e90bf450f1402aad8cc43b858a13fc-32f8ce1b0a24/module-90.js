require.r(exports);
require.d(exports, {
    SemSearchToolArgs: ()=>SemSearchToolArgs,
    SemSearchToolCall: ()=>SemSearchToolCall,
    SemSearchToolError: ()=>SemSearchToolError,
    SemSearchToolResult: ()=>SemSearchToolResult,
    SemSearchToolSuccess: ()=>SemSearchToolSuccess
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
var _aiserver_v1_repository_pb_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-91.js");
const SemSearchToolCall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SemSearchToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: SemSearchToolArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: SemSearchToolResult
        }
    ]);
const SemSearchToolArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SemSearchToolArgs", ()=>[
        {
            no: 1,
            name: "query",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "target_directories",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 3,
            name: "explanation",
            kind: "scalar",
            T: 9
        }
    ]);
const SemSearchToolResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SemSearchToolResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: SemSearchToolSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: SemSearchToolError,
            oneof: "result"
        }
    ]);
const SemSearchToolSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SemSearchToolSuccess", ()=>[
        {
            no: 1,
            name: "results",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "code_results",
            kind: "message",
            T: _aiserver_v1_repository_pb_js__WEBPACK_IMPORTED_MODULE_1__.CodeResult,
            repeated: true
        }
    ]);
const SemSearchToolError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SemSearchToolError", ()=>[
        {
            no: 1,
            name: "error_message",
            kind: "scalar",
            T: 9
        }
    ]);
