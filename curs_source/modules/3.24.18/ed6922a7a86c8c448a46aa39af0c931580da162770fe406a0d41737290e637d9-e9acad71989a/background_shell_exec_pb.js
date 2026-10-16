import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { U6e, zue } from "./sandbox_pb.js";
import { K3s, Sbt, Z3s, hee, p3i, q3s, qxn, wbt } from "./shell_exec_pb.js";
import { x } from "./tslib.es6.js";
import { $Ut, w0e } from "./utils_pb_2.js";
var omu, J3s, amu, cmu, H6e, Cbt, lmu, umu;
export { Cbt, H6e, J3s, amu, cmu, lmu, omu, umu };
var __wakaru_GZe_initialized = false;
export function GZe() {
if (__wakaru_GZe_initialized) return;
__wakaru_GZe_initialized = true;
"use strict";
x(), bi(), hee(), U6e(), w0e(), omu = k.makeMessageType("agent.v1.BackgroundShellSpawnArgs", ()=>[
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
            T: Sbt
        },
        {
            no: 5,
            name: "sandbox_policy",
            kind: "message",
            T: zue,
            opt: !0
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
            opt: !0
        },
        {
            no: 8,
            name: "classifier_result",
            kind: "message",
            T: qxn,
            opt: !0
        },
        {
            no: 9,
            name: "output_notification",
            kind: "message",
            T: q3s,
            opt: !0
        },
        {
            no: 10,
            name: "smart_mode_approval",
            kind: "message",
            T: $Ut,
            opt: !0
        },
        {
            no: 11,
            name: "hook_approval_requirement",
            kind: "message",
            T: K3s,
            opt: !0
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
            opt: !0
        },
        {
            no: 14,
            name: "admin_command_denylist",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 15,
            name: "request_id",
            kind: "scalar",
            T: 9,
            opt: !0
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
            opt: !0
        }
    ]), J3s = k.makeMessageType("agent.v1.BackgroundShellSpawnResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: amu,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: cmu,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: wbt,
            oneof: "result"
        },
        {
            no: 4,
            name: "permission_denied",
            kind: "message",
            T: p3i,
            oneof: "result"
        },
        {
            no: 5,
            name: "sandbox_unsupported",
            kind: "message",
            T: Z3s,
            oneof: "result"
        }
    ]), amu = k.makeMessageType("agent.v1.BackgroundShellSpawnSuccess", ()=>[
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
        }
    ]), cmu = k.makeMessageType("agent.v1.BackgroundShellSpawnError", ()=>[
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
    ]), H6e = k.makeMessageType("agent.v1.WriteShellStdinArgs", ()=>[
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
    ]), Cbt = k.makeMessageType("agent.v1.WriteShellStdinResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: lmu,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: umu,
            oneof: "result"
        }
    ]), lmu = k.makeMessageType("agent.v1.WriteShellStdinSuccess", ()=>[
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
    ]), umu = k.makeMessageType("agent.v1.WriteShellStdinError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);

}
