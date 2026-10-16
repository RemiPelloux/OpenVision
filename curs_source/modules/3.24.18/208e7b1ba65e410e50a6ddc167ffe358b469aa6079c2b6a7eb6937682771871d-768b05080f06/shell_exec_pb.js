import { CP } from "./hook_additional_context_pb.js";
import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { Ca, Ng } from "./sandbox_pb.js";
import { h } from "./tslib.es6.js";
import { Rg, So, ko } from "./utils_pb.js";
var NK, DK, IP, OK, LK, UK, xK, AP, FK, WK, BK, GK, VK, $K, MP, PP, jK, HK, qK, KK, zK, YK, JK, XK, QK, ZK, ez;
export { $K, AP, BK, DK, FK, GK, HK, IP, JK, KK, LK, MP, NK, OK, PP, QK, UK, VK, WK, XK, YK, ZK, ez, jK, qK, xK, zK };
var __wakaru_du_initialized = false;
export function du() {
if (__wakaru_du_initialized) return;
__wakaru_du_initialized = true;
"use strict";
h(), F(), Ng(), So(), CP(), NK = c.makeEnum("agent.v1.TimeoutBehavior", [
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
]), DK = c.makeEnum("agent.v1.ShellBackgroundReason", [
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
]), IP = c.makeEnum("agent.v1.ShellAbortReason", [
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
]), OK = c.makeMessageType("agent.v1.ShellCommandParsingResult", ()=>[
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
            T: UK,
            repeated: !0
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
            opt: !0
        },
        {
            no: 6,
            name: "redirects",
            kind: "message",
            T: xK,
            repeated: !0
        }
    ]), LK = c.makeMessageType("agent.v1.ShellCommandParsingResult.ExecutableCommandArg", ()=>[
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
}), UK = c.makeMessageType("agent.v1.ShellCommandParsingResult.ExecutableCommand", ()=>[
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
            T: LK,
            repeated: !0
        },
        {
            no: 3,
            name: "full_text",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ShellCommandParsingResult_ExecutableCommand"
}), xK = c.makeMessageType("agent.v1.ShellCommandParsingResult.Redirect", ()=>[
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
            repeated: !0
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
            opt: !0
        }
    ], {
    localName: "ShellCommandParsingResult_Redirect"
}), AP = c.makeMessageType("agent.v1.CommandClassifierResult", ()=>[
        {
            no: 1,
            name: "commands",
            kind: "message",
            T: WK,
            repeated: !0
        },
        {
            no: 2,
            name: "suggested_sandbox_mode",
            kind: "enum",
            T: c.getEnumType(FK)
        },
        {
            no: 3,
            name: "classification_failed",
            kind: "scalar",
            T: 8
        }
    ]), FK = c.makeEnum("agent.v1.CommandClassifierResult.SuggestedSandboxMode", [
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
]), WK = c.makeMessageType("agent.v1.CommandClassifierResult.ClassifiedCommand", ()=>[
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
            repeated: !0
        },
        {
            no: 3,
            name: "suggested_allowlist_entry",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "subcommand_tokens",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ], {
    localName: "CommandClassifierResult_ClassifiedCommand"
}), BK = c.makeMessageType("agent.v1.ShellOutputNotificationConfig", ()=>[
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
            opt: !0
        },
        {
            no: 4,
            name: "notification_limit",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), GK = c.makeMessageType("agent.v1.ShellHookApprovalRequirement", ()=>[
        {
            no: 1,
            name: "kind",
            kind: "enum",
            T: c.getEnumType(VK)
        },
        {
            no: 2,
            name: "reason",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), VK = c.makeEnum("agent.v1.ShellHookApprovalRequirement.Kind", [
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
]), $K = c.makeMessageType("agent.v1.ShellArgs", ()=>[
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
            repeated: !0
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
            T: OK
        },
        {
            no: 9,
            name: "requested_sandbox_policy",
            kind: "message",
            T: Ca,
            opt: !0
        },
        {
            no: 10,
            name: "file_output_threshold_bytes",
            kind: "scalar",
            T: 4,
            opt: !0
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
            T: c.getEnumType(NK)
        },
        {
            no: 14,
            name: "hard_timeout",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 15,
            name: "description",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 16,
            name: "classifier_result",
            kind: "message",
            T: AP,
            opt: !0
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
            T: BK,
            opt: !0
        },
        {
            no: 19,
            name: "smart_mode_approval",
            kind: "message",
            T: Rg,
            opt: !0
        },
        {
            no: 20,
            name: "hook_approval_requirement",
            kind: "message",
            T: GK,
            opt: !0
        },
        {
            no: 21,
            name: "conversation_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 22,
            name: "admin_command_denylist",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 23,
            name: "request_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 24,
            name: "secret_scope_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), MP = c.makeMessageType("agent.v1.ShellResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: YK,
            oneof: "result"
        },
        {
            no: 2,
            name: "failure",
            kind: "message",
            T: JK,
            oneof: "result"
        },
        {
            no: 3,
            name: "timeout",
            kind: "message",
            T: XK,
            oneof: "result"
        },
        {
            no: 4,
            name: "rejected",
            kind: "message",
            T: QK,
            oneof: "result"
        },
        {
            no: 5,
            name: "spawn_error",
            kind: "message",
            T: ez,
            oneof: "result"
        },
        {
            no: 7,
            name: "permission_denied",
            kind: "message",
            T: ZK,
            oneof: "result"
        },
        {
            no: 101,
            name: "sandbox_policy",
            kind: "message",
            T: Ca,
            opt: !0
        },
        {
            no: 102,
            name: "is_background",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 103,
            name: "terminals_folder",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 104,
            name: "pid",
            kind: "scalar",
            T: 13,
            opt: !0
        }
    ]), PP = c.makeMessageType("agent.v1.ShellOomKill", ()=>[
        {
            no: 1,
            name: "kind",
            kind: "enum",
            T: c.getEnumType(jK)
        },
        {
            no: 2,
            name: "memory_limit_bytes",
            kind: "scalar",
            T: 4
        }
    ]), jK = c.makeEnum("agent.v1.ShellOomKill.Kind", [
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
]), HK = c.makeMessageType("agent.v1.ShellStreamStdout", ()=>[
        {
            no: 1,
            name: "data",
            kind: "scalar",
            T: 9
        }
    ]), qK = c.makeMessageType("agent.v1.ShellStreamStderr", ()=>[
        {
            no: 1,
            name: "data",
            kind: "scalar",
            T: 9
        }
    ]), KK = c.makeMessageType("agent.v1.ShellStreamExit", ()=>[
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
            T: ko,
            opt: !0
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
            T: c.getEnumType(IP),
            opt: !0
        },
        {
            no: 6,
            name: "local_execution_time_ms",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 7,
            name: "oom_kill",
            kind: "message",
            T: PP,
            opt: !0
        }
    ]), zK = c.makeMessageType("agent.v1.ShellStreamStart", ()=>[
        {
            no: 1,
            name: "sandbox_policy",
            kind: "message",
            T: Ca,
            opt: !0
        }
    ]), YK = c.makeMessageType("agent.v1.ShellSuccess", ()=>[
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
            T: ko,
            opt: !0
        },
        {
            no: 9,
            name: "shell_id",
            kind: "scalar",
            T: 13,
            opt: !0
        },
        {
            no: 10,
            name: "interleaved_output",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 11,
            name: "pid",
            kind: "scalar",
            T: 13,
            opt: !0
        },
        {
            no: 12,
            name: "ms_to_wait",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 13,
            name: "local_execution_time_ms",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 14,
            name: "background_reason",
            kind: "enum",
            T: c.getEnumType(DK),
            opt: !0
        },
        {
            no: 15,
            name: "output_head",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 16,
            name: "output_tail",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 17,
            name: "elided_chars",
            kind: "scalar",
            T: 13,
            opt: !0
        }
    ]), JK = c.makeMessageType("agent.v1.ShellFailure", ()=>[
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
            T: ko,
            opt: !0
        },
        {
            no: 9,
            name: "interleaved_output",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 10,
            name: "abort_reason",
            kind: "enum",
            T: c.getEnumType(IP),
            opt: !0
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
            opt: !0
        },
        {
            no: 13,
            name: "output_head",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 14,
            name: "output_tail",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 15,
            name: "elided_chars",
            kind: "scalar",
            T: 13,
            opt: !0
        },
        {
            no: 16,
            name: "oom_kill",
            kind: "message",
            T: PP,
            opt: !0
        }
    ]), XK = c.makeMessageType("agent.v1.ShellTimeout", ()=>[
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
    ]), QK = c.makeMessageType("agent.v1.ShellRejected", ()=>[
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
    ]), ZK = c.makeMessageType("agent.v1.ShellPermissionDenied", ()=>[
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
    ]), ez = c.makeMessageType("agent.v1.ShellSpawnError", ()=>[
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

}
