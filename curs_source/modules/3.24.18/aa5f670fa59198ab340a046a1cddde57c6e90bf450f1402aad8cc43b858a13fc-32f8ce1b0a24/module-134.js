require.r(exports);
require.d(exports, {
    PiFindToolArgs: ()=>PiFindToolArgs,
    PiFindToolCall: ()=>PiFindToolCall,
    PiFindToolError: ()=>PiFindToolError,
    PiFindToolResult: ()=>PiFindToolResult,
    PiFindToolSuccess: ()=>PiFindToolSuccess
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
var _pi_common_pb_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-129.js");
const PiFindToolCall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PiFindToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: PiFindToolArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: PiFindToolResult
        }
    ]);
const PiFindToolArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PiFindToolArgs", ()=>[
        {
            no: 1,
            name: "pattern",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "path",
            kind: "scalar",
            T: 9,
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
const PiFindToolResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PiFindToolResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: PiFindToolSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: PiFindToolError,
            oneof: "result"
        }
    ]);
const PiFindToolSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PiFindToolSuccess", ()=>[
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
        },
        {
            no: 3,
            name: "result_limit_reached",
            kind: "scalar",
            T: 13,
            opt: true
        }
    ]);
const PiFindToolError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PiFindToolError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
