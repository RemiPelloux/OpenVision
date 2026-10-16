require.r(exports);
require.d(exports, {
    ShellAllowlistPrecheckArgs: ()=>ShellAllowlistPrecheckArgs,
    ShellAllowlistPrecheckResult: ()=>ShellAllowlistPrecheckResult
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
var _shell_exec_pb_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-70.js");
const ShellAllowlistPrecheckArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ShellAllowlistPrecheckArgs", ()=>[
        {
            no: 1,
            name: "command",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "working_directory",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "parsing_result",
            kind: "message",
            T: _shell_exec_pb_js__WEBPACK_IMPORTED_MODULE_1__.ShellCommandParsingResult
        },
        {
            no: 4,
            name: "classifier_result",
            kind: "message",
            T: _shell_exec_pb_js__WEBPACK_IMPORTED_MODULE_1__.CommandClassifierResult,
            opt: true
        },
        {
            no: 5,
            name: "tool_call_id",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const ShellAllowlistPrecheckResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ShellAllowlistPrecheckResult", ()=>[
        {
            no: 1,
            name: "allowlisted",
            kind: "scalar",
            T: 8
        }
    ]);
