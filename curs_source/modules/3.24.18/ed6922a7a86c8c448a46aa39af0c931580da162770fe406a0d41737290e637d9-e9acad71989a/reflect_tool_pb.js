import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var iEu, rEu, sEu, oEu, aEu;
export { aEu, iEu, oEu, rEu, sEu };
var __wakaru_sdv_initialized = false;
export function sdv() {
if (__wakaru_sdv_initialized) return;
__wakaru_sdv_initialized = true;
"use strict";
x(), bi(), iEu = k.makeMessageType("agent.v1.ReflectArgs", ()=>[
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
    ]), rEu = k.makeMessageType("agent.v1.ReflectResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: sEu,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: oEu,
            oneof: "result"
        }
    ]), sEu = k.makeMessageType("agent.v1.ReflectSuccess", []), oEu = k.makeMessageType("agent.v1.ReflectError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), aEu = k.makeMessageType("agent.v1.ReflectToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: iEu
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: rEu
        }
    ]);

}
