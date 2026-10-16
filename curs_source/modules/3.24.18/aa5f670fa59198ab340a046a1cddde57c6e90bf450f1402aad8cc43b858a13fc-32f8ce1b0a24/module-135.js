require.r(exports);
require.d(exports, {
    PiLsToolArgs: ()=>PiLsToolArgs,
    PiLsToolCall: ()=>PiLsToolCall,
    PiLsToolError: ()=>PiLsToolError,
    PiLsToolResult: ()=>PiLsToolResult,
    PiLsToolSuccess: ()=>PiLsToolSuccess
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
var _pi_common_pb_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-129.js");
const PiLsToolCall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PiLsToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: PiLsToolArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: PiLsToolResult
        }
    ]);
const PiLsToolArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PiLsToolArgs", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "limit",
            kind: "scalar",
            T: 5,
            opt: true
        }
    ]);
const PiLsToolResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PiLsToolResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: PiLsToolSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: PiLsToolError,
            oneof: "result"
        }
    ]);
const PiLsToolSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PiLsToolSuccess", ()=>[
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
            name: "entry_limit_reached",
            kind: "scalar",
            T: 13,
            opt: true
        }
    ]);
const PiLsToolError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PiLsToolError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
