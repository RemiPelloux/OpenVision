import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
var bre, Rre, Cre, Ire, Are;
export { Are, Cre, Ire, Rre, bre };
var __wakaru_Zqe_initialized = false;
export function Zqe() {
if (__wakaru_Zqe_initialized) return;
__wakaru_Zqe_initialized = true;
"use strict";
h(), F(), bre = c.makeMessageType("agent.v1.CommunicateUpdateArgs", ()=>[
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
    ]), Rre = c.makeMessageType("agent.v1.CommunicateUpdateSuccess", ()=>[
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
    ]), Cre = c.makeMessageType("agent.v1.CommunicateUpdateError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), Ire = c.makeMessageType("agent.v1.CommunicateUpdateResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: Rre,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: Cre,
            oneof: "result"
        }
    ]), Are = c.makeMessageType("agent.v1.CommunicateUpdateToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: bre
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: Ire
        }
    ]);

}
