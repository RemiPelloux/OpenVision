require.r(exports);
require.d(exports, {
    SendToUserArgs: ()=>SendToUserArgs,
    SendToUserError: ()=>SendToUserError,
    SendToUserResult: ()=>SendToUserResult,
    SendToUserSuccess: ()=>SendToUserSuccess,
    SendToUserToolCall: ()=>SendToUserToolCall
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
const SendToUserArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SendToUserArgs", ()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ]);
const SendToUserSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SendToUserSuccess", []);
const SendToUserError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SendToUserError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
const SendToUserResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SendToUserResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: SendToUserSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: SendToUserError,
            oneof: "result"
        }
    ]);
const SendToUserToolCall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SendToUserToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: SendToUserArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: SendToUserResult
        }
    ]);
