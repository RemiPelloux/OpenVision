require.r(exports);
require.d(exports, {
    PiBashExecArgs: ()=>PiBashExecArgs,
    PiBashExecError: ()=>PiBashExecError,
    PiBashExecResult: ()=>PiBashExecResult,
    PiBashExecSuccess: ()=>PiBashExecSuccess
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
var _pi_common_pb_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-129.js");
const PiBashExecArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PiBashExecArgs", ()=>[
        {
            no: 1,
            name: "command",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "timeout",
            kind: "scalar",
            T: 1,
            opt: true
        }
    ]);
const PiBashExecResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PiBashExecResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: PiBashExecSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: PiBashExecError,
            oneof: "result"
        }
    ]);
const PiBashExecSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PiBashExecSuccess", ()=>[
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
            name: "full_output_path",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const PiBashExecError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PiBashExecError", ()=>[
        {
            no: 1,
            name: "error",
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
            name: "full_output_path",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
