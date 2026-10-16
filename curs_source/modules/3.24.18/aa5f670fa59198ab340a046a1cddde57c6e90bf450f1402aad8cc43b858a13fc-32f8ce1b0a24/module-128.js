require.r(exports);
require.d(exports, {
    PiReadToolArgs: ()=>PiReadToolArgs,
    PiReadToolCall: ()=>PiReadToolCall,
    PiReadToolError: ()=>PiReadToolError,
    PiReadToolResult: ()=>PiReadToolResult,
    PiReadToolSuccess: ()=>PiReadToolSuccess
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
var _pi_common_pb_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-129.js");
const PiReadToolCall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PiReadToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: PiReadToolArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: PiReadToolResult
        }
    ]);
const PiReadToolArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PiReadToolArgs", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "offset",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 3,
            name: "limit",
            kind: "scalar",
            T: 5,
            opt: true
        }
    ]);
const PiReadToolResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PiReadToolResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: PiReadToolSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: PiReadToolError,
            oneof: "result"
        }
    ]);
const PiReadToolSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PiReadToolSuccess", ()=>[
        {
            no: 1,
            name: "output",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "truncation",
            kind: "message",
            T: _pi_common_pb_js__WEBPACK_IMPORTED_MODULE_1__.PiTruncation,
            opt: true
        }
    ]);
const PiReadToolError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PiReadToolError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
