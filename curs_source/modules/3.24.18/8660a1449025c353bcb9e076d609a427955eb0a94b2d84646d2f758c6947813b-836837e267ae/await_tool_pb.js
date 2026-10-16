import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var S_d, A5o, R5o, k_d, w_d, C_d, T_d;
export { A5o, C_d, R5o, S_d, T_d, k_d, w_d };
var __wakaru_dIy_initialized = false;
export function dIy() {
if (__wakaru_dIy_initialized) return;
__wakaru_dIy_initialized = true;
"use strict";
E(), hr(), S_d = x.makeMessageType("agent.v1.AwaitArgs", ()=>[
        {
            no: 1,
            name: "task_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "block_until_ms",
            kind: "scalar",
            T: 13,
            opt: !0
        },
        {
            no: 3,
            name: "regex",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), A5o = x.makeMessageType("agent.v1.AwaitTaskComplete", ()=>[
        {
            no: 1,
            name: "task_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "runtime_ms",
            kind: "scalar",
            T: 4
        },
        {
            no: 3,
            name: "output_file_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "output_length",
            kind: "scalar",
            T: 4
        },
        {
            no: 5,
            name: "regex_requested",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "regex_match",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "exit_code",
            kind: "scalar",
            T: 17,
            opt: !0
        },
        {
            no: 8,
            name: "wake_reason",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), R5o = x.makeMessageType("agent.v1.AwaitTaskStillRunning", ()=>[
        {
            no: 1,
            name: "task_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "runtime_ms",
            kind: "scalar",
            T: 4
        },
        {
            no: 3,
            name: "output_file_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "output_length",
            kind: "scalar",
            T: 4
        },
        {
            no: 5,
            name: "regex_requested",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "regex_match",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "wake_reason",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), k_d = x.makeMessageType("agent.v1.AwaitError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), w_d = x.makeMessageType("agent.v1.AwaitSuccess", ()=>[
        {
            no: 1,
            name: "complete",
            kind: "message",
            T: A5o,
            oneof: "await_result"
        },
        {
            no: 2,
            name: "still_running",
            kind: "message",
            T: R5o,
            oneof: "await_result"
        }
    ]), C_d = x.makeMessageType("agent.v1.AwaitResult", ()=>[
        {
            no: 1,
            name: "complete",
            kind: "message",
            T: A5o,
            oneof: "result"
        },
        {
            no: 2,
            name: "still_running",
            kind: "message",
            T: R5o,
            oneof: "result"
        },
        {
            no: 3,
            name: "error",
            kind: "message",
            T: k_d,
            oneof: "result"
        },
        {
            no: 4,
            name: "success",
            kind: "message",
            T: w_d,
            oneof: "result"
        }
    ]), T_d = x.makeMessageType("agent.v1.AwaitToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: S_d
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: C_d
        }
    ]);

}
