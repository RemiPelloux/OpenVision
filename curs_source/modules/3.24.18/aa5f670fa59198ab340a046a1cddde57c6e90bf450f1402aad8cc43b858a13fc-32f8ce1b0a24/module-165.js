require.r(exports);
require.d(exports, {
    PiReadExecArgs: ()=>PiReadExecArgs,
    PiReadExecError: ()=>PiReadExecError,
    PiReadExecResult: ()=>PiReadExecResult,
    PiReadExecSuccess: ()=>PiReadExecSuccess
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
var _pi_common_pb_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-129.js");
const PiReadExecArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PiReadExecArgs", ()=>[
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
const PiReadExecResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PiReadExecResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: PiReadExecSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: PiReadExecError,
            oneof: "result"
        }
    ]);
const PiReadExecSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PiReadExecSuccess", ()=>[
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
const PiReadExecError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PiReadExecError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
