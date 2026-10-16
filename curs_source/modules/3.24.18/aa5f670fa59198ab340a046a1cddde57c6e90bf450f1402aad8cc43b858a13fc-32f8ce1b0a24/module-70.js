require.r(exports);
require.d(exports, {
    CommandClassifierResult: ()=>CommandClassifierResult,
    CommandClassifierResult_ClassifiedCommand: ()=>CommandClassifierResult_ClassifiedCommand,
    CommandClassifierResult_SuggestedSandboxMode: ()=>CommandClassifierResult_SuggestedSandboxMode,
    ForceBackgroundShellArgs: ()=>ForceBackgroundShellArgs,
    ForceBackgroundShellResult: ()=>ForceBackgroundShellResult,
    ForceBackgroundShellStatus: ()=>ForceBackgroundShellStatus,
    ShellAbortReason: ()=>ShellAbortReason,
    ShellArgs: ()=>ShellArgs,
    ShellBackgroundReason: ()=>ShellBackgroundReason,
    ShellCommandParsingResult: ()=>ShellCommandParsingResult,
    ShellCommandParsingResult_ExecutableCommand: ()=>ShellCommandParsingResult_ExecutableCommand,
    ShellCommandParsingResult_ExecutableCommandArg: ()=>ShellCommandParsingResult_ExecutableCommandArg,
    ShellCommandParsingResult_Redirect: ()=>ShellCommandParsingResult_Redirect,
    ShellFailure: ()=>ShellFailure,
    ShellHookApprovalRequirement: ()=>ShellHookApprovalRequirement,
    ShellHookApprovalRequirement_Kind: ()=>ShellHookApprovalRequirement_Kind,
    ShellOomKill: ()=>ShellOomKill,
    ShellOomKill_Kind: ()=>ShellOomKill_Kind,
    ShellOutputNotificationConfig: ()=>ShellOutputNotificationConfig,
    ShellPartialResult: ()=>ShellPartialResult,
    ShellPermissionDenied: ()=>ShellPermissionDenied,
    ShellRejected: ()=>ShellRejected,
    ShellResult: ()=>ShellResult,
    ShellSandboxUnsupported: ()=>ShellSandboxUnsupported,
    ShellSpawnError: ()=>ShellSpawnError,
    ShellStream: ()=>ShellStream,
    ShellStreamBackgrounded: ()=>ShellStreamBackgrounded,
    ShellStreamExit: ()=>ShellStreamExit,
    ShellStreamHookContext: ()=>ShellStreamHookContext,
    ShellStreamStart: ()=>ShellStreamStart,
    ShellStreamStderr: ()=>ShellStreamStderr,
    ShellStreamStdout: ()=>ShellStreamStdout,
    ShellSuccess: ()=>ShellSuccess,
    ShellTimeout: ()=>ShellTimeout,
    TimeoutBehavior: ()=>TimeoutBehavior
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
var _sandbox_pb_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-71.js");
var _utils_pb_js__WEBPACK_IMPORTED_MODULE_2__ = require("./module-72.js");
var _hook_additional_context_pb_js__WEBPACK_IMPORTED_MODULE_3__ = require("./module-73.js");
const TimeoutBehavior = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("agent.v1.TimeoutBehavior", [
    {
        no: 0,
        name: "TIMEOUT_BEHAVIOR_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "TIMEOUT_BEHAVIOR_CANCEL",
        localName: "CANCEL"
    },
    {
        no: 2,
        name: "TIMEOUT_BEHAVIOR_BACKGROUND",
        localName: "BACKGROUND"
    }
]);
const ShellBackgroundReason = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("agent.v1.ShellBackgroundReason", [
    {
        no: 0,
        name: "SHELL_BACKGROUND_REASON_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "SHELL_BACKGROUND_REASON_TIMEOUT",
        localName: "TIMEOUT"
    },
    {
        no: 2,
        name: "SHELL_BACKGROUND_REASON_USER_REQUEST",
        localName: "USER_REQUEST"
    }
]);
const ForceBackgroundShellStatus = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("agent.v1.ForceBackgroundShellStatus", [
    {
        no: 0,
        name: "FORCE_BACKGROUND_SHELL_STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "FORCE_BACKGROUND_SHELL_STATUS_ACCEPTED",
        localName: "ACCEPTED"
    },
    {
        no: 2,
        name: "FORCE_BACKGROUND_SHELL_STATUS_NOT_FOUND",
        localName: "NOT_FOUND"
    }
]);
const ShellAbortReason = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("agent.v1.ShellAbortReason", [
    {
        no: 0,
        name: "SHELL_ABORT_REASON_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "SHELL_ABORT_REASON_USER_ABORT",
        localName: "USER_ABORT"
    },
    {
        no: 2,
        name: "SHELL_ABORT_REASON_TIMEOUT",
        localName: "TIMEOUT"
    }
]);
const ShellCommandParsingResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ShellCommandParsingResult", ()=>[
        {
            no: 1,
            name: "parsing_failed",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "executable_commands",
            kind: "message",
            T: ShellCommandParsingResult_ExecutableCommand,
            repeated: true
        },
        {
            no: 3,
            name: "has_redirects",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "has_command_substitution",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "all_redirects_are_dev_null",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 6,
            name: "redirects",
            kind: "message",
            T: ShellCommandParsingResult_Redirect,
            repeated: true
        }
    ]);
const ShellCommandParsingResult_ExecutableCommandArg = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ShellCommandParsingResult.ExecutableCommandArg", ()=>[
        {
            no: 1,
            name: "type",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "value",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ShellCommandParsingResult_ExecutableCommandArg"
});
const ShellCommandParsingResult_ExecutableCommand = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ShellCommandParsingResult.ExecutableCommand", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "args",
            kind: "message",
            T: ShellCommandParsingResult_ExecutableCommandArg,
            repeated: true
        },
        {
            no: 3,
            name: "full_text",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ShellCommandParsingResult_ExecutableCommand"
});
const ShellCommandParsingResult_Redirect = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ShellCommandParsingResult.Redirect", ()=>[
        {
            no: 1,
            name: "operator",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "destination_fds",
            kind: "scalar",
            T: 13,
            repeated: true
        },
        {
            no: 3,
            name: "target_node_type",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "target_text",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ], {
    localName: "ShellCommandParsingResult_Redirect"
});
const CommandClassifierResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.CommandClassifierResult", ()=>[
        {
            no: 1,
            name: "commands",
            kind: "message",
            T: CommandClassifierResult_ClassifiedCommand,
            repeated: true
        },
        {
            no: 2,
            name: "suggested_sandbox_mode",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(CommandClassifierResult_SuggestedSandboxMode)
        },
        {
            no: 3,
            name: "classification_failed",
            kind: "scalar",
            T: 8
        }
    ]);
const CommandClassifierResult_SuggestedSandboxMode = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("agent.v1.CommandClassifierResult.SuggestedSandboxMode", [
    {
        no: 0,
        name: "SUGGESTED_SANDBOX_MODE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "SUGGESTED_SANDBOX_MODE_SANDBOX",
        localName: "SANDBOX"
    },
    {
        no: 2,
        name: "SUGGESTED_SANDBOX_MODE_NO_SANDBOX",
        localName: "NO_SANDBOX"
    },
    {
        no: 3,
        name: "SUGGESTED_SANDBOX_MODE_UNDETERMINED",
        localName: "UNDETERMINED"
    }
]);
const CommandClassifierResult_ClassifiedCommand = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.CommandClassifierResult.ClassifiedCommand", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "arguments",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 3,
            name: "suggested_allowlist_entry",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "subcommand_tokens",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ], {
    localName: "CommandClassifierResult_ClassifiedCommand"
});
const ShellOutputNotificationConfig = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ShellOutputNotificationConfig", ()=>[
        {
            no: 1,
            name: "pattern",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "reason",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "debounce",
            kind: "scalar",
            T: 1,
            opt: true
        },
        {
            no: 4,
            name: "notification_limit",
            kind: "scalar",
            T: 5,
            opt: true
        }
    ]);
const ForceBackgroundShellArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ForceBackgroundShellArgs", ()=>[
        {
            no: 1,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        }
    ]);
const ForceBackgroundShellResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ForceBackgroundShellResult", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(ForceBackgroundShellStatus)
        },
        {
            no: 2,
            name: "shell_result",
            kind: "message",
            T: ShellResult,
            opt: true
        }
    ]);
const ShellHookApprovalRequirement = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ShellHookApprovalRequirement", ()=>[
        {
            no: 1,
            name: "kind",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(ShellHookApprovalRequirement_Kind)
        },
        {
            no: 2,
            name: "reason",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const ShellHookApprovalRequirement_Kind = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("agent.v1.ShellHookApprovalRequirement.Kind", [
    {
        no: 0,
        name: "KIND_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "KIND_FORCE_PROMPT",
        localName: "FORCE_PROMPT"
    }
]);
const ShellArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ShellArgs", ()=>[
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
            name: "timeout",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "simple_commands",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 6,
            name: "has_input_redirect",
            kind: "scalar",
            T: 8
        },
        {
            no: 7,
            name: "has_output_redirect",
            kind: "scalar",
            T: 8
        },
        {
            no: 8,
            name: "parsing_result",
            kind: "message",
            T: ShellCommandParsingResult
        },
        {
            no: 9,
            name: "requested_sandbox_policy",
            kind: "message",
            T: _sandbox_pb_js__WEBPACK_IMPORTED_MODULE_1__.SandboxPolicy,
            opt: true
        },
        {
            no: 10,
            name: "file_output_threshold_bytes",
            kind: "scalar",
            T: 4,
            opt: true
        },
        {
            no: 11,
            name: "is_background",
            kind: "scalar",
            T: 8
        },
        {
            no: 12,
            name: "skip_approval",
            kind: "scalar",
            T: 8
        },
        {
            no: 13,
            name: "timeout_behavior",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(TimeoutBehavior)
        },
        {
            no: 14,
            name: "hard_timeout",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 15,
            name: "description",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 16,
            name: "classifier_result",
            kind: "message",
            T: CommandClassifierResult,
            opt: true
        },
        {
            no: 17,
            name: "close_stdin",
            kind: "scalar",
            T: 8
        },
        {
            no: 18,
            name: "output_notification",
            kind: "message",
            T: ShellOutputNotificationConfig,
            opt: true
        },
        {
            no: 19,
            name: "smart_mode_approval",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_2__.SmartModeApproval,
            opt: true
        },
        {
            no: 20,
            name: "hook_approval_requirement",
            kind: "message",
            T: ShellHookApprovalRequirement,
            opt: true
        },
        {
            no: 21,
            name: "conversation_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 22,
            name: "admin_command_denylist",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 23,
            name: "request_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 24,
            name: "secret_scope_id",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const ShellResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ShellResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: ShellSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "failure",
            kind: "message",
            T: ShellFailure,
            oneof: "result"
        },
        {
            no: 3,
            name: "timeout",
            kind: "message",
            T: ShellTimeout,
            oneof: "result"
        },
        {
            no: 4,
            name: "rejected",
            kind: "message",
            T: ShellRejected,
            oneof: "result"
        },
        {
            no: 5,
            name: "spawn_error",
            kind: "message",
            T: ShellSpawnError,
            oneof: "result"
        },
        {
            no: 7,
            name: "permission_denied",
            kind: "message",
            T: ShellPermissionDenied,
            oneof: "result"
        },
        {
            no: 101,
            name: "sandbox_policy",
            kind: "message",
            T: _sandbox_pb_js__WEBPACK_IMPORTED_MODULE_1__.SandboxPolicy,
            opt: true
        },
        {
            no: 102,
            name: "is_background",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 103,
            name: "terminals_folder",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 104,
            name: "pid",
            kind: "scalar",
            T: 13,
            opt: true
        }
    ]);
const ShellOomKill = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ShellOomKill", ()=>[
        {
            no: 1,
            name: "kind",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(ShellOomKill_Kind)
        },
        {
            no: 2,
            name: "memory_limit_bytes",
            kind: "scalar",
            T: 4
        }
    ]);
const ShellOomKill_Kind = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("agent.v1.ShellOomKill.Kind", [
    {
        no: 0,
        name: "KIND_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "KIND_COMMAND_KILLED",
        localName: "COMMAND_KILLED"
    },
    {
        no: 2,
        name: "KIND_COMMAND_FAILED",
        localName: "COMMAND_FAILED"
    },
    {
        no: 3,
        name: "KIND_UNCONFIRMED",
        localName: "UNCONFIRMED"
    }
]);
const ShellStreamStdout = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ShellStreamStdout", ()=>[
        {
            no: 1,
            name: "data",
            kind: "scalar",
            T: 9
        }
    ]);
const ShellStreamStderr = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ShellStreamStderr", ()=>[
        {
            no: 1,
            name: "data",
            kind: "scalar",
            T: 9
        }
    ]);
const ShellStreamExit = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ShellStreamExit", ()=>[
        {
            no: 1,
            name: "code",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "cwd",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "output_location",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_2__.OutputLocation,
            opt: true
        },
        {
            no: 4,
            name: "aborted",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "abort_reason",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(ShellAbortReason),
            opt: true
        },
        {
            no: 6,
            name: "local_execution_time_ms",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 7,
            name: "oom_kill",
            kind: "message",
            T: ShellOomKill,
            opt: true
        }
    ]);
const ShellStreamStart = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ShellStreamStart", ()=>[
        {
            no: 1,
            name: "sandbox_policy",
            kind: "message",
            T: _sandbox_pb_js__WEBPACK_IMPORTED_MODULE_1__.SandboxPolicy,
            opt: true
        }
    ]);
const ShellStreamBackgrounded = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ShellStreamBackgrounded", ()=>[
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
        },
        {
            no: 5,
            name: "ms_to_wait",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 6,
            name: "reason",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(ShellBackgroundReason),
            opt: true
        }
    ]);
const ShellStreamHookContext = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ShellStreamHookContext", ()=>[
        {
            no: 1,
            name: "hook_additional_contexts",
            kind: "message",
            T: _hook_additional_context_pb_js__WEBPACK_IMPORTED_MODULE_3__.HookAdditionalContext,
            repeated: true
        }
    ]);
const ShellSandboxUnsupported = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ShellSandboxUnsupported", ()=>[
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
            name: "sandbox_policy_type",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "reason",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "is_readonly",
            kind: "scalar",
            T: 8
        }
    ]);
const ShellStream = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ShellStream", ()=>[
        {
            no: 1,
            name: "stdout",
            kind: "message",
            T: ShellStreamStdout,
            oneof: "event"
        },
        {
            no: 2,
            name: "stderr",
            kind: "message",
            T: ShellStreamStderr,
            oneof: "event"
        },
        {
            no: 3,
            name: "exit",
            kind: "message",
            T: ShellStreamExit,
            oneof: "event"
        },
        {
            no: 4,
            name: "start",
            kind: "message",
            T: ShellStreamStart,
            oneof: "event"
        },
        {
            no: 5,
            name: "rejected",
            kind: "message",
            T: ShellRejected,
            oneof: "event"
        },
        {
            no: 6,
            name: "permission_denied",
            kind: "message",
            T: ShellPermissionDenied,
            oneof: "event"
        },
        {
            no: 7,
            name: "backgrounded",
            kind: "message",
            T: ShellStreamBackgrounded,
            oneof: "event"
        },
        {
            no: 8,
            name: "hook_context",
            kind: "message",
            T: ShellStreamHookContext,
            oneof: "event"
        },
        {
            no: 9,
            name: "sandbox_unsupported",
            kind: "message",
            T: ShellSandboxUnsupported,
            oneof: "event"
        }
    ]);
const ShellSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ShellSuccess", ()=>[
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
            name: "exit_code",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "signal",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "stdout",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "stderr",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "execution_time",
            kind: "scalar",
            T: 5
        },
        {
            no: 8,
            name: "output_location",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_2__.OutputLocation,
            opt: true
        },
        {
            no: 9,
            name: "shell_id",
            kind: "scalar",
            T: 13,
            opt: true
        },
        {
            no: 10,
            name: "interleaved_output",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 11,
            name: "pid",
            kind: "scalar",
            T: 13,
            opt: true
        },
        {
            no: 12,
            name: "ms_to_wait",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 13,
            name: "local_execution_time_ms",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 14,
            name: "background_reason",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(ShellBackgroundReason),
            opt: true
        },
        {
            no: 15,
            name: "output_head",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 16,
            name: "output_tail",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 17,
            name: "elided_chars",
            kind: "scalar",
            T: 13,
            opt: true
        }
    ]);
const ShellFailure = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ShellFailure", ()=>[
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
            name: "exit_code",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "signal",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "stdout",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "stderr",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "execution_time",
            kind: "scalar",
            T: 5
        },
        {
            no: 8,
            name: "output_location",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_2__.OutputLocation,
            opt: true
        },
        {
            no: 9,
            name: "interleaved_output",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 10,
            name: "abort_reason",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(ShellAbortReason),
            opt: true
        },
        {
            no: 11,
            name: "aborted",
            kind: "scalar",
            T: 8
        },
        {
            no: 12,
            name: "local_execution_time_ms",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 13,
            name: "output_head",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 14,
            name: "output_tail",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 15,
            name: "elided_chars",
            kind: "scalar",
            T: 13,
            opt: true
        },
        {
            no: 16,
            name: "oom_kill",
            kind: "message",
            T: ShellOomKill,
            opt: true
        }
    ]);
const ShellTimeout = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ShellTimeout", ()=>[
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
            name: "timeout_ms",
            kind: "scalar",
            T: 5
        }
    ]);
const ShellRejected = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ShellRejected", ()=>[
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
            name: "reason",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "is_readonly",
            kind: "scalar",
            T: 8
        }
    ]);
const ShellPermissionDenied = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ShellPermissionDenied", ()=>[
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
        },
        {
            no: 4,
            name: "is_readonly",
            kind: "scalar",
            T: 8
        }
    ]);
const ShellSpawnError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ShellSpawnError", ()=>[
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
const ShellPartialResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ShellPartialResult", ()=>[
        {
            no: 1,
            name: "stdout_delta",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "stderr_delta",
            kind: "scalar",
            T: 9
        }
    ]);
