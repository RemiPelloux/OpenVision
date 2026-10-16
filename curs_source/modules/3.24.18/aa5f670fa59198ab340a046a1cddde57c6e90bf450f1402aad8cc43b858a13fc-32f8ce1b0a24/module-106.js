require.r(exports);
require.d(exports, {
    BackgroundShellSpawnArgs: ()=>BackgroundShellSpawnArgs,
    BackgroundShellSpawnError: ()=>BackgroundShellSpawnError,
    BackgroundShellSpawnResult: ()=>BackgroundShellSpawnResult,
    BackgroundShellSpawnSuccess: ()=>BackgroundShellSpawnSuccess,
    WriteShellStdinArgs: ()=>WriteShellStdinArgs,
    WriteShellStdinError: ()=>WriteShellStdinError,
    WriteShellStdinResult: ()=>WriteShellStdinResult,
    WriteShellStdinSuccess: ()=>WriteShellStdinSuccess
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
var _shell_exec_pb_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-70.js");
var _sandbox_pb_js__WEBPACK_IMPORTED_MODULE_2__ = require("./module-71.js");
var _utils_pb_js__WEBPACK_IMPORTED_MODULE_3__ = require("./module-72.js");
const BackgroundShellSpawnArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.BackgroundShellSpawnArgs", ()=>[
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
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "parsing_result",
            kind: "message",
            T: _shell_exec_pb_js__WEBPACK_IMPORTED_MODULE_1__.ShellCommandParsingResult
        },
        {
            no: 5,
            name: "sandbox_policy",
            kind: "message",
            T: _sandbox_pb_js__WEBPACK_IMPORTED_MODULE_2__.SandboxPolicy,
            opt: true
        },
        {
            no: 6,
            name: "enable_write_shell_stdin_tool",
            kind: "scalar",
            T: 8
        },
        {
            no: 7,
            name: "description",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 8,
            name: "classifier_result",
            kind: "message",
            T: _shell_exec_pb_js__WEBPACK_IMPORTED_MODULE_1__.CommandClassifierResult,
            opt: true
        },
        {
            no: 9,
            name: "output_notification",
            kind: "message",
            T: _shell_exec_pb_js__WEBPACK_IMPORTED_MODULE_1__.ShellOutputNotificationConfig,
            opt: true
        },
        {
            no: 10,
            name: "smart_mode_approval",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_3__.SmartModeApproval,
            opt: true
        },
        {
            no: 11,
            name: "hook_approval_requirement",
            kind: "message",
            T: _shell_exec_pb_js__WEBPACK_IMPORTED_MODULE_1__.ShellHookApprovalRequirement,
            opt: true
        },
        {
            no: 12,
            name: "skip_approval",
            kind: "scalar",
            T: 8
        },
        {
            no: 13,
            name: "conversation_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 14,
            name: "admin_command_denylist",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 15,
            name: "request_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 16,
            name: "suppress_stdin_logging",
            kind: "scalar",
            T: 8
        },
        {
            no: 17,
            name: "secret_scope_id",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const BackgroundShellSpawnResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.BackgroundShellSpawnResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: BackgroundShellSpawnSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: BackgroundShellSpawnError,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: _shell_exec_pb_js__WEBPACK_IMPORTED_MODULE_1__.ShellRejected,
            oneof: "result"
        },
        {
            no: 4,
            name: "permission_denied",
            kind: "message",
            T: _shell_exec_pb_js__WEBPACK_IMPORTED_MODULE_1__.ShellPermissionDenied,
            oneof: "result"
        },
        {
            no: 5,
            name: "sandbox_unsupported",
            kind: "message",
            T: _shell_exec_pb_js__WEBPACK_IMPORTED_MODULE_1__.ShellSandboxUnsupported,
            oneof: "result"
        }
    ]);
const BackgroundShellSpawnSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.BackgroundShellSpawnSuccess", ()=>[
        {
            no: 1,
            name: "shell_id",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "command",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "working_directory",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "pid",
            kind: "scalar",
            T: 13,
            opt: true
        }
    ]);
const BackgroundShellSpawnError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.BackgroundShellSpawnError", ()=>[
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
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
const WriteShellStdinArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.WriteShellStdinArgs", ()=>[
        {
            no: 1,
            name: "shell_id",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "chars",
            kind: "scalar",
            T: 9
        }
    ]);
const WriteShellStdinResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.WriteShellStdinResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: WriteShellStdinSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: WriteShellStdinError,
            oneof: "result"
        }
    ]);
const WriteShellStdinSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.WriteShellStdinSuccess", ()=>[
        {
            no: 1,
            name: "shell_id",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "terminal_file_length_before_input_written",
            kind: "scalar",
            T: 13
        }
    ]);
const WriteShellStdinError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.WriteShellStdinError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
