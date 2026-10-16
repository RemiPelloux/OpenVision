require.r(exports);
require.d(exports, {
    ReflectArgs: ()=>ReflectArgs,
    ReflectError: ()=>ReflectError,
    ReflectResult: ()=>ReflectResult,
    ReflectSuccess: ()=>ReflectSuccess,
    ReflectToolCall: ()=>ReflectToolCall
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
const ReflectArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ReflectArgs", ()=>[
        {
            no: 1,
            name: "unexpected_action_outcomes",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "relevant_instructions",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "scenario_analysis",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "critical_synthesis",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "next_steps",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        }
    ]);
const ReflectResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ReflectResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: ReflectSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: ReflectError,
            oneof: "result"
        }
    ]);
const ReflectSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ReflectSuccess", []);
const ReflectError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ReflectError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
const ReflectToolCall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ReflectToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: ReflectArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: ReflectResult
        }
    ]);
