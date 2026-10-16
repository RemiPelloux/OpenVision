require.r(exports);
require.d(exports, {
    SendMessageArgs: ()=>SendMessageArgs,
    SendMessageAttachment: ()=>SendMessageAttachment,
    SendMessageError: ()=>SendMessageError,
    SendMessageResult: ()=>SendMessageResult,
    SendMessageSuccess: ()=>SendMessageSuccess,
    SendMessageText: ()=>SendMessageText,
    SendMessageToolCall: ()=>SendMessageToolCall
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
const SendMessageText = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SendMessageText", ()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9
        }
    ]);
const SendMessageAttachment = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SendMessageAttachment", ()=>[
        {
            no: 1,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "alt",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const SendMessageArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SendMessageArgs", ()=>[
        {
            no: 1,
            name: "text",
            kind: "message",
            T: SendMessageText,
            oneof: "message"
        },
        {
            no: 2,
            name: "attachment",
            kind: "message",
            T: SendMessageAttachment,
            oneof: "message"
        }
    ]);
const SendMessageSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SendMessageSuccess", ()=>[
        {
            no: 1,
            name: "timestamp",
            kind: "scalar",
            T: 4
        },
        {
            no: 2,
            name: "message_id",
            kind: "scalar",
            T: 9
        }
    ]);
const SendMessageError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SendMessageError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
const SendMessageResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SendMessageResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: SendMessageSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: SendMessageError,
            oneof: "result"
        }
    ]);
const SendMessageToolCall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SendMessageToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: SendMessageArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: SendMessageResult
        }
    ]);
