import { Vxn, ybt } from "./hook_additional_context_pb.js";
import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { U6e, zue } from "./sandbox_pb.js";
import { x } from "./tslib.es6.js";
import { $Ut, WZe, w0e } from "./utils_pb_2.js";
var Zpu, jxn, W3s, G3s, Sbt, V3s, l3i, j3s, qxn, Qpu, Jpu, q3s, z3s, emu, K3s, tmu, $6e, k$, Y3s, nmu, u3i, d3i, h3i, X3s, imu, rmu, Z3s, Q3s, kbt, zxn, smu, wbt, p3i, Kxn;
export { $6e, G3s, Jpu, K3s, Kxn, Q3s, Qpu, Sbt, V3s, W3s, X3s, Y3s, Z3s, Zpu, d3i, emu, h3i, imu, j3s, jxn, k$, kbt, l3i, nmu, p3i, q3s, qxn, rmu, smu, tmu, u3i, wbt, z3s, zxn };
var __wakaru_hee_initialized = false;
export function hee() {
if (__wakaru_hee_initialized) return;
__wakaru_hee_initialized = true;
"use strict";
x(), bi(), U6e(), w0e(), Vxn(), Zpu = k.makeEnum("agent.v1.TimeoutBehavior", [
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
]), jxn = k.makeEnum("agent.v1.ShellBackgroundReason", [
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
]), W3s = k.makeEnum("agent.v1.ForceBackgroundShellStatus", [
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
]), G3s = k.makeEnum("agent.v1.ShellAbortReason", [
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
]), Sbt = k.makeMessageType("agent.v1.ShellCommandParsingResult", ()=>[
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
            T: l3i,
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
            T: j3s,
            repeated: !0
        }
    ]), V3s = k.makeMessageType("agent.v1.ShellCommandParsingResult.ExecutableCommandArg", ()=>[
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
}), l3i = k.makeMessageType("agent.v1.ShellCommandParsingResult.ExecutableCommand", ()=>[
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
            T: V3s,
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
}), j3s = k.makeMessageType("agent.v1.ShellCommandParsingResult.Redirect", ()=>[
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
}), qxn = k.makeMessageType("agent.v1.CommandClassifierResult", ()=>[
        {
            no: 1,
            name: "commands",
            kind: "message",
            T: Jpu,
            repeated: !0
        },
        {
            no: 2,
            name: "suggested_sandbox_mode",
            kind: "enum",
            T: k.getEnumType(Qpu)
        },
        {
            no: 3,
            name: "classification_failed",
            kind: "scalar",
            T: 8
        }
    ]), Qpu = k.makeEnum("agent.v1.CommandClassifierResult.SuggestedSandboxMode", [
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
]), Jpu = k.makeMessageType("agent.v1.CommandClassifierResult.ClassifiedCommand", ()=>[
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
}), q3s = k.makeMessageType("agent.v1.ShellOutputNotificationConfig", ()=>[
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
    ]), z3s = k.makeMessageType("agent.v1.ForceBackgroundShellArgs", ()=>[
        {
            no: 1,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        }
    ]), emu = k.makeMessageType("agent.v1.ForceBackgroundShellResult", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: k.getEnumType(W3s)
        },
        {
            no: 2,
            name: "shell_result",
            kind: "message",
            T: k$,
            opt: !0
        }
    ]), K3s = k.makeMessageType("agent.v1.ShellHookApprovalRequirement", ()=>[
        {
            no: 1,
            name: "kind",
            kind: "enum",
            T: k.getEnumType(tmu)
        },
        {
            no: 2,
            name: "reason",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), tmu = k.makeEnum("agent.v1.ShellHookApprovalRequirement.Kind", [
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
]), $6e = k.makeMessageType("agent.v1.ShellArgs", ()=>[
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
            T: Sbt
        },
        {
            no: 9,
            name: "requested_sandbox_policy",
            kind: "message",
            T: zue,
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
            T: k.getEnumType(Zpu)
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
            T: qxn,
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
            T: q3s,
            opt: !0
        },
        {
            no: 19,
            name: "smart_mode_approval",
            kind: "message",
            T: $Ut,
            opt: !0
        },
        {
            no: 20,
            name: "hook_approval_requirement",
            kind: "message",
            T: K3s,
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
    ]), k$ = k.makeMessageType("agent.v1.ShellResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: kbt,
            oneof: "result"
        },
        {
            no: 2,
            name: "failure",
            kind: "message",
            T: zxn,
            oneof: "result"
        },
        {
            no: 3,
            name: "timeout",
            kind: "message",
            T: smu,
            oneof: "result"
        },
        {
            no: 4,
            name: "rejected",
            kind: "message",
            T: wbt,
            oneof: "result"
        },
        {
            no: 5,
            name: "spawn_error",
            kind: "message",
            T: Kxn,
            oneof: "result"
        },
        {
            no: 7,
            name: "permission_denied",
            kind: "message",
            T: p3i,
            oneof: "result"
        },
        {
            no: 101,
            name: "sandbox_policy",
            kind: "message",
            T: zue,
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
    ]), Y3s = k.makeMessageType("agent.v1.ShellOomKill", ()=>[
        {
            no: 1,
            name: "kind",
            kind: "enum",
            T: k.getEnumType(nmu)
        },
        {
            no: 2,
            name: "memory_limit_bytes",
            kind: "scalar",
            T: 4
        }
    ]), nmu = k.makeEnum("agent.v1.ShellOomKill.Kind", [
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
]), u3i = k.makeMessageType("agent.v1.ShellStreamStdout", ()=>[
        {
            no: 1,
            name: "data",
            kind: "scalar",
            T: 9
        }
    ]), d3i = k.makeMessageType("agent.v1.ShellStreamStderr", ()=>[
        {
            no: 1,
            name: "data",
            kind: "scalar",
            T: 9
        }
    ]), h3i = k.makeMessageType("agent.v1.ShellStreamExit", ()=>[
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
            T: WZe,
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
            T: k.getEnumType(G3s),
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
            T: Y3s,
            opt: !0
        }
    ]), X3s = k.makeMessageType("agent.v1.ShellStreamStart", ()=>[
        {
            no: 1,
            name: "sandbox_policy",
            kind: "message",
            T: zue,
            opt: !0
        }
    ]), imu = k.makeMessageType("agent.v1.ShellStreamBackgrounded", ()=>[
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
            opt: !0
        },
        {
            no: 5,
            name: "ms_to_wait",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 6,
            name: "reason",
            kind: "enum",
            T: k.getEnumType(jxn),
            opt: !0
        }
    ]), rmu = k.makeMessageType("agent.v1.ShellStreamHookContext", ()=>[
        {
            no: 1,
            name: "hook_additional_contexts",
            kind: "message",
            T: ybt,
            repeated: !0
        }
    ]), Z3s = k.makeMessageType("agent.v1.ShellSandboxUnsupported", ()=>[
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
    ]), Q3s = k.makeMessageType("agent.v1.ShellStream", ()=>[
        {
            no: 1,
            name: "stdout",
            kind: "message",
            T: u3i,
            oneof: "event"
        },
        {
            no: 2,
            name: "stderr",
            kind: "message",
            T: d3i,
            oneof: "event"
        },
        {
            no: 3,
            name: "exit",
            kind: "message",
            T: h3i,
            oneof: "event"
        },
        {
            no: 4,
            name: "start",
            kind: "message",
            T: X3s,
            oneof: "event"
        },
        {
            no: 5,
            name: "rejected",
            kind: "message",
            T: wbt,
            oneof: "event"
        },
        {
            no: 6,
            name: "permission_denied",
            kind: "message",
            T: p3i,
            oneof: "event"
        },
        {
            no: 7,
            name: "backgrounded",
            kind: "message",
            T: imu,
            oneof: "event"
        },
        {
            no: 8,
            name: "hook_context",
            kind: "message",
            T: rmu,
            oneof: "event"
        },
        {
            no: 9,
            name: "sandbox_unsupported",
            kind: "message",
            T: Z3s,
            oneof: "event"
        }
    ]), kbt = k.makeMessageType("agent.v1.ShellSuccess", ()=>[
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
            T: WZe,
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
            T: k.getEnumType(jxn),
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
    ]), zxn = k.makeMessageType("agent.v1.ShellFailure", ()=>[
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
            T: WZe,
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
            T: k.getEnumType(G3s),
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
            T: Y3s,
            opt: !0
        }
    ]), smu = k.makeMessageType("agent.v1.ShellTimeout", ()=>[
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
    ]), wbt = k.makeMessageType("agent.v1.ShellRejected", ()=>[
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
    ]), p3i = k.makeMessageType("agent.v1.ShellPermissionDenied", ()=>[
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
    ]), Kxn = k.makeMessageType("agent.v1.ShellSpawnError", ()=>[
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
