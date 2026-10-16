require.r(exports);
require.d(exports, {
    PiGrepToolArgs: ()=>PiGrepToolArgs,
    PiGrepToolCall: ()=>PiGrepToolCall,
    PiGrepToolError: ()=>PiGrepToolError,
    PiGrepToolResult: ()=>PiGrepToolResult,
    PiGrepToolSuccess: ()=>PiGrepToolSuccess
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
var _pi_common_pb_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-129.js");
const PiGrepToolCall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PiGrepToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: PiGrepToolArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: PiGrepToolResult
        }
    ]);
const PiGrepToolArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PiGrepToolArgs", ()=>[
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
            name: "glob",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "ignore_case",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 5,
            name: "literal",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 6,
            name: "context",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 7,
            name: "limit",
            kind: "scalar",
            T: 5,
            opt: true
        }
    ]);
const PiGrepToolResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PiGrepToolResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: PiGrepToolSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: PiGrepToolError,
            oneof: "result"
        }
    ]);
const PiGrepToolSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PiGrepToolSuccess", ()=>[
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
            name: "match_limit_reached",
            kind: "scalar",
            T: 13,
            opt: true
        },
        {
            no: 4,
            name: "lines_truncated",
            kind: "scalar",
            T: 8
        }
    ]);
const PiGrepToolError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PiGrepToolError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
