require.r(exports);
require.d(exports, {
    ShellToolCall: ()=>ShellToolCall,
    ShellToolCallDelta: ()=>ShellToolCallDelta,
    ShellToolCallStderrDelta: ()=>ShellToolCallStderrDelta,
    ShellToolCallStdoutDelta: ()=>ShellToolCallStdoutDelta
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
var _shell_exec_pb_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-70.js");
const ShellToolCall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ShellToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: _shell_exec_pb_js__WEBPACK_IMPORTED_MODULE_1__.ShellArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: _shell_exec_pb_js__WEBPACK_IMPORTED_MODULE_1__.ShellResult
        },
        {
            no: 3,
            name: "description",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const ShellToolCallStdoutDelta = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ShellToolCallStdoutDelta", ()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9
        }
    ]);
const ShellToolCallStderrDelta = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ShellToolCallStderrDelta", ()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9
        }
    ]);
const ShellToolCallDelta = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ShellToolCallDelta", ()=>[
        {
            no: 1,
            name: "stdout",
            kind: "message",
            T: ShellToolCallStdoutDelta,
            oneof: "delta"
        },
        {
            no: 2,
            name: "stderr",
            kind: "message",
            T: ShellToolCallStderrDelta,
            oneof: "delta"
        }
    ]);
