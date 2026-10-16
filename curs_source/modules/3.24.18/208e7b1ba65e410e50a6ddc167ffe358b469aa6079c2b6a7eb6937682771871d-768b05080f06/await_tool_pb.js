import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
var ire, FN, WN, are, ore, cre, lre;
export { FN, WN, are, cre, ire, lre, ore };
var __wakaru_Yqe_initialized = false;
export function Yqe() {
if (__wakaru_Yqe_initialized) return;
__wakaru_Yqe_initialized = true;
"use strict";
h(), F(), ire = c.makeMessageType("agent.v1.AwaitArgs", ()=>[
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
    ]), FN = c.makeMessageType("agent.v1.AwaitTaskComplete", ()=>[
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
    ]), WN = c.makeMessageType("agent.v1.AwaitTaskStillRunning", ()=>[
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
    ]), are = c.makeMessageType("agent.v1.AwaitError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), ore = c.makeMessageType("agent.v1.AwaitSuccess", ()=>[
        {
            no: 1,
            name: "complete",
            kind: "message",
            T: FN,
            oneof: "await_result"
        },
        {
            no: 2,
            name: "still_running",
            kind: "message",
            T: WN,
            oneof: "await_result"
        }
    ]), cre = c.makeMessageType("agent.v1.AwaitResult", ()=>[
        {
            no: 1,
            name: "complete",
            kind: "message",
            T: FN,
            oneof: "result"
        },
        {
            no: 2,
            name: "still_running",
            kind: "message",
            T: WN,
            oneof: "result"
        },
        {
            no: 3,
            name: "error",
            kind: "message",
            T: are,
            oneof: "result"
        },
        {
            no: 4,
            name: "success",
            kind: "message",
            T: ore,
            oneof: "result"
        }
    ]), lre = c.makeMessageType("agent.v1.AwaitToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: ire
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: cre
        }
    ]);

}
