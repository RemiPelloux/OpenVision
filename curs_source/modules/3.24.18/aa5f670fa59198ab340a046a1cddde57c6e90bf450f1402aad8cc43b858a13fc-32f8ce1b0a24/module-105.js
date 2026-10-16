require.r(exports);
require.d(exports, {
    WriteShellStdinToolCall: ()=>WriteShellStdinToolCall
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
var _background_shell_exec_pb_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-106.js");
const WriteShellStdinToolCall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.WriteShellStdinToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: _background_shell_exec_pb_js__WEBPACK_IMPORTED_MODULE_1__.WriteShellStdinArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: _background_shell_exec_pb_js__WEBPACK_IMPORTED_MODULE_1__.WriteShellStdinResult
        }
    ]);
