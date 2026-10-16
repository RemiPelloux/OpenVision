import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var q_d, z_d, V_d, K_d, Y_d;
export { K_d, V_d, Y_d, q_d, z_d };
var __wakaru_gIy_initialized = false;
export function gIy() {
if (__wakaru_gIy_initialized) return;
__wakaru_gIy_initialized = true;
"use strict";
E(), hr(), q_d = x.makeMessageType("agent.v1.SendFinalSummaryArgs", ()=>[
        {
            no: 1,
            name: "final_summary",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), z_d = x.makeMessageType("agent.v1.SendFinalSummarySuccess", ()=>[
        {
            no: 1,
            name: "final_summary",
            kind: "scalar",
            T: 9
        }
    ]), V_d = x.makeMessageType("agent.v1.SendFinalSummaryError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), K_d = x.makeMessageType("agent.v1.SendFinalSummaryResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: z_d,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: V_d,
            oneof: "result"
        }
    ]), Y_d = x.makeMessageType("agent.v1.SendFinalSummaryToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: q_d
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: K_d
        }
    ]);

}
