require.r(exports);
require.d(exports, {
    PiLsExecArgs: ()=>PiLsExecArgs,
    PiLsExecError: ()=>PiLsExecError,
    PiLsExecResult: ()=>PiLsExecResult,
    PiLsExecSuccess: ()=>PiLsExecSuccess
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
var _pi_common_pb_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-129.js");
const PiLsExecArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PiLsExecArgs", ()=>[
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
const PiLsExecResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PiLsExecResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: PiLsExecSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: PiLsExecError,
            oneof: "result"
        }
    ]);
const PiLsExecSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PiLsExecSuccess", ()=>[
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
const PiLsExecError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PiLsExecError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
