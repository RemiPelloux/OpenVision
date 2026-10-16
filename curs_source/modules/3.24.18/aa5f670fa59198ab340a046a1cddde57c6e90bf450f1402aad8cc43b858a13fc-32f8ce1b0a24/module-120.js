require.r(exports);
require.d(exports, {
    CommunicateUpdateArgs: ()=>CommunicateUpdateArgs,
    CommunicateUpdateError: ()=>CommunicateUpdateError,
    CommunicateUpdateResult: ()=>CommunicateUpdateResult,
    CommunicateUpdateSuccess: ()=>CommunicateUpdateSuccess,
    CommunicateUpdateToolCall: ()=>CommunicateUpdateToolCall
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
const CommunicateUpdateArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.CommunicateUpdateArgs", ()=>[
        {
            no: 1,
            name: "current_step",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "final_summary",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "completed_subtitle",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const CommunicateUpdateSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.CommunicateUpdateSuccess", ()=>[
        {
            no: 1,
            name: "current_step",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "message_index",
            kind: "scalar",
            T: 13
        }
    ]);
const CommunicateUpdateError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.CommunicateUpdateError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
const CommunicateUpdateResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.CommunicateUpdateResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: CommunicateUpdateSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: CommunicateUpdateError,
            oneof: "result"
        }
    ]);
const CommunicateUpdateToolCall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.CommunicateUpdateToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: CommunicateUpdateArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: CommunicateUpdateResult
        }
    ]);
