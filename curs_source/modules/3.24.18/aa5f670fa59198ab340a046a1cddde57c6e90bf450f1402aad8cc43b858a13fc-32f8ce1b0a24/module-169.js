require.r(exports);
require.d(exports, {
    PiGrepExecArgs: ()=>PiGrepExecArgs,
    PiGrepExecError: ()=>PiGrepExecError,
    PiGrepExecResult: ()=>PiGrepExecResult,
    PiGrepExecSuccess: ()=>PiGrepExecSuccess
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
var _pi_common_pb_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-129.js");
const PiGrepExecArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PiGrepExecArgs", ()=>[
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
const PiGrepExecResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PiGrepExecResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: PiGrepExecSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: PiGrepExecError,
            oneof: "result"
        }
    ]);
const PiGrepExecSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PiGrepExecSuccess", ()=>[
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
const PiGrepExecError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PiGrepExecError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
