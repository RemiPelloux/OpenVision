require.r(exports);
require.d(exports, {
    SwitchModeArgs: ()=>SwitchModeArgs,
    SwitchModeError: ()=>SwitchModeError,
    SwitchModeRejected: ()=>SwitchModeRejected,
    SwitchModeRequestQuery: ()=>SwitchModeRequestQuery,
    SwitchModeRequestResponse: ()=>SwitchModeRequestResponse,
    SwitchModeRequestResponse_Approved: ()=>SwitchModeRequestResponse_Approved,
    SwitchModeRequestResponse_Rejected: ()=>SwitchModeRequestResponse_Rejected,
    SwitchModeResult: ()=>SwitchModeResult,
    SwitchModeSuccess: ()=>SwitchModeSuccess,
    SwitchModeToolCall: ()=>SwitchModeToolCall
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
const SwitchModeArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SwitchModeArgs", ()=>[
        {
            no: 1,
            name: "target_mode_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "explanation",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        }
    ]);
const SwitchModeResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SwitchModeResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: SwitchModeSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: SwitchModeError,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: SwitchModeRejected,
            oneof: "result"
        }
    ]);
const SwitchModeSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SwitchModeSuccess", ()=>[
        {
            no: 1,
            name: "from_mode_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "to_mode_id",
            kind: "scalar",
            T: 9
        }
    ]);
const SwitchModeError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SwitchModeError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
const SwitchModeRejected = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SwitchModeRejected", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]);
const SwitchModeToolCall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SwitchModeToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: SwitchModeArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: SwitchModeResult
        }
    ]);
const SwitchModeRequestQuery = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SwitchModeRequestQuery", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: SwitchModeArgs
        }
    ]);
const SwitchModeRequestResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SwitchModeRequestResponse", ()=>[
        {
            no: 1,
            name: "approved",
            kind: "message",
            T: SwitchModeRequestResponse_Approved,
            oneof: "result"
        },
        {
            no: 2,
            name: "rejected",
            kind: "message",
            T: SwitchModeRequestResponse_Rejected,
            oneof: "result"
        }
    ]);
const SwitchModeRequestResponse_Approved = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SwitchModeRequestResponse.Approved", [], {
    localName: "SwitchModeRequestResponse_Approved"
});
const SwitchModeRequestResponse_Rejected = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SwitchModeRequestResponse.Rejected", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "SwitchModeRequestResponse_Rejected"
});
