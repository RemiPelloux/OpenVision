import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var j_d, $_d, H_d, W_d, G_d;
export { $_d, G_d, H_d, W_d, j_d };
var __wakaru_mIy_initialized = false;
export function mIy() {
if (__wakaru_mIy_initialized) return;
__wakaru_mIy_initialized = true;
"use strict";
E(), hr(), j_d = x.makeMessageType("agent.v1.CommunicateUpdateArgs", ()=>[
        {
            no: 1,
            name: "current_step",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "final_summary",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "completed_subtitle",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), $_d = x.makeMessageType("agent.v1.CommunicateUpdateSuccess", ()=>[
        {
            no: 1,
            name: "current_step",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "message_index",
            kind: "scalar",
            T: 13
        }
    ]), H_d = x.makeMessageType("agent.v1.CommunicateUpdateError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), W_d = x.makeMessageType("agent.v1.CommunicateUpdateResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: $_d,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: H_d,
            oneof: "result"
        }
    ]), G_d = x.makeMessageType("agent.v1.CommunicateUpdateToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: j_d
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: W_d
        }
    ]);

}
