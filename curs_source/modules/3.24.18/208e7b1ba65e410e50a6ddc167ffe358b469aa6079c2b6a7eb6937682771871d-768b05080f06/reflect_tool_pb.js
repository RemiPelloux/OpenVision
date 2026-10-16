import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
var one, cne, lne, dne, une;
export { cne, dne, lne, one, une };
var __wakaru_Vqe_initialized = false;
export function Vqe() {
if (__wakaru_Vqe_initialized) return;
__wakaru_Vqe_initialized = true;
"use strict";
h(), F(), one = c.makeMessageType("agent.v1.ReflectArgs", ()=>[
        {
            no: 1,
            name: "unexpected_action_outcomes",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "relevant_instructions",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "scenario_analysis",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "critical_synthesis",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "next_steps",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        }
    ]), cne = c.makeMessageType("agent.v1.ReflectResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: lne,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: dne,
            oneof: "result"
        }
    ]), lne = c.makeMessageType("agent.v1.ReflectSuccess", []), dne = c.makeMessageType("agent.v1.ReflectError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), une = c.makeMessageType("agent.v1.ReflectToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: one
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: cne
        }
    ]);

}
