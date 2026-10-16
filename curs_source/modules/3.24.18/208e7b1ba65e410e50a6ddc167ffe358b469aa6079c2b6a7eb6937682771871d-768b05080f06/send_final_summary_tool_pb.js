import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
var Mre, Pre, Nre, Dre, Ore;
export { Dre, Mre, Nre, Ore, Pre };
var __wakaru_eKe_initialized = false;
export function eKe() {
if (__wakaru_eKe_initialized) return;
__wakaru_eKe_initialized = true;
"use strict";
h(), F(), Mre = c.makeMessageType("agent.v1.SendFinalSummaryArgs", ()=>[
        {
            no: 1,
            name: "final_summary",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), Pre = c.makeMessageType("agent.v1.SendFinalSummarySuccess", ()=>[
        {
            no: 1,
            name: "final_summary",
            kind: "scalar",
            T: 9
        }
    ]), Nre = c.makeMessageType("agent.v1.SendFinalSummaryError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), Dre = c.makeMessageType("agent.v1.SendFinalSummaryResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: Pre,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: Nre,
            oneof: "result"
        }
    ]), Ore = c.makeMessageType("agent.v1.SendFinalSummaryToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: Mre
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: Dre
        }
    ]);

}
