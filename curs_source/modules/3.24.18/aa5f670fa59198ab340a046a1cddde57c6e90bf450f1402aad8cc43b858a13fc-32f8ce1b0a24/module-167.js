require.r(exports);
require.d(exports, {
    PiEditExecArgs: ()=>PiEditExecArgs,
    PiEditExecError: ()=>PiEditExecError,
    PiEditExecRejected: ()=>PiEditExecRejected,
    PiEditExecResult: ()=>PiEditExecResult,
    PiEditExecSuccess: ()=>PiEditExecSuccess
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
var _pi_edit_tool_pb_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-131.js");
const PiEditExecArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PiEditExecArgs", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "edits",
            kind: "message",
            T: _pi_edit_tool_pb_js__WEBPACK_IMPORTED_MODULE_1__.PiEditReplacement,
            repeated: true
        }
    ]);
const PiEditExecResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PiEditExecResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: PiEditExecSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: PiEditExecError,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: PiEditExecRejected,
            oneof: "result"
        }
    ]);
const PiEditExecSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PiEditExecSuccess", ()=>[
        {
            no: 1,
            name: "output",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "diff",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "patch",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "first_changed_line",
            kind: "scalar",
            T: 13,
            opt: true
        }
    ]);
const PiEditExecError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PiEditExecError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
const PiEditExecRejected = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PiEditExecRejected", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]);
