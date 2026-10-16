import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { Het, Wke } from "./sandbox_pb.js";
import { $br, $te, EDo, Hei, PDo, _4t, v4t, xDo } from "./shell_exec_pb.js";
import { E } from "./tslib.es6.js";
import { Ppn, i5e } from "./utils_pb_2.js";
var opd, DDo, apd, lpd, Get, b4t, cpd, upd;
export { DDo, Get, apd, b4t, cpd, lpd, opd, upd };
var __wakaru_F_t_initialized = false;
export function F_t() {
if (__wakaru_F_t_initialized) return;
__wakaru_F_t_initialized = true;
"use strict";
E(), hr(), $te(), Het(), i5e(), opd = x.makeMessageType("agent.v1.BackgroundShellSpawnArgs", ()=>[
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
            T: v4t
        },
        {
            no: 5,
            name: "sandbox_policy",
            kind: "message",
            T: Wke,
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
            T: Hei,
            opt: !0
        },
        {
            no: 9,
            name: "output_notification",
            kind: "message",
            T: EDo,
            opt: !0
        },
        {
            no: 10,
            name: "smart_mode_approval",
            kind: "message",
            T: Ppn,
            opt: !0
        },
        {
            no: 11,
            name: "hook_approval_requirement",
            kind: "message",
            T: xDo,
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
    ]), DDo = x.makeMessageType("agent.v1.BackgroundShellSpawnResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: apd,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: lpd,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: _4t,
            oneof: "result"
        },
        {
            no: 4,
            name: "permission_denied",
            kind: "message",
            T: $br,
            oneof: "result"
        },
        {
            no: 5,
            name: "sandbox_unsupported",
            kind: "message",
            T: PDo,
            oneof: "result"
        }
    ]), apd = x.makeMessageType("agent.v1.BackgroundShellSpawnSuccess", ()=>[
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
    ]), lpd = x.makeMessageType("agent.v1.BackgroundShellSpawnError", ()=>[
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
    ]), Get = x.makeMessageType("agent.v1.WriteShellStdinArgs", ()=>[
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
    ]), b4t = x.makeMessageType("agent.v1.WriteShellStdinResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: cpd,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: upd,
            oneof: "result"
        }
    ]), cpd = x.makeMessageType("agent.v1.WriteShellStdinSuccess", ()=>[
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
    ]), upd = x.makeMessageType("agent.v1.WriteShellStdinError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);

}
