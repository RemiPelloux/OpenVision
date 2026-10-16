import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var $Eu, jGs, qGs, HEu, WEu, GEu, VEu;
export { $Eu, GEu, HEu, VEu, WEu, jGs, qGs };
var __wakaru_cdv_initialized = false;
export function cdv() {
if (__wakaru_cdv_initialized) return;
__wakaru_cdv_initialized = true;
"use strict";
x(), bi(), $Eu = k.makeMessageType("agent.v1.AwaitArgs", ()=>[
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
    ]), jGs = k.makeMessageType("agent.v1.AwaitTaskComplete", ()=>[
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
    ]), qGs = k.makeMessageType("agent.v1.AwaitTaskStillRunning", ()=>[
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
    ]), HEu = k.makeMessageType("agent.v1.AwaitError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), WEu = k.makeMessageType("agent.v1.AwaitSuccess", ()=>[
        {
            no: 1,
            name: "complete",
            kind: "message",
            T: jGs,
            oneof: "await_result"
        },
        {
            no: 2,
            name: "still_running",
            kind: "message",
            T: qGs,
            oneof: "await_result"
        }
    ]), GEu = k.makeMessageType("agent.v1.AwaitResult", ()=>[
        {
            no: 1,
            name: "complete",
            kind: "message",
            T: jGs,
            oneof: "result"
        },
        {
            no: 2,
            name: "still_running",
            kind: "message",
            T: qGs,
            oneof: "result"
        },
        {
            no: 3,
            name: "error",
            kind: "message",
            T: HEu,
            oneof: "result"
        },
        {
            no: 4,
            name: "success",
            kind: "message",
            T: WEu,
            oneof: "result"
        }
    ]), VEu = k.makeMessageType("agent.v1.AwaitToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: $Eu
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: GEu
        }
    ]);

}
