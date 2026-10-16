import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var jvd, $vd, Hvd, Wvd, Gvd;
export { $vd, Gvd, Hvd, Wvd, jvd };
var __wakaru_lIy_initialized = false;
export function lIy() {
if (__wakaru_lIy_initialized) return;
__wakaru_lIy_initialized = true;
"use strict";
E(), hr(), jvd = x.makeMessageType("agent.v1.ReflectArgs", ()=>[
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
    ]), $vd = x.makeMessageType("agent.v1.ReflectResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: Hvd,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: Wvd,
            oneof: "result"
        }
    ]), Hvd = x.makeMessageType("agent.v1.ReflectSuccess", []), Wvd = x.makeMessageType("agent.v1.ReflectError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), Gvd = x.makeMessageType("agent.v1.ReflectToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: jvd
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: $vd
        }
    ]);

}
