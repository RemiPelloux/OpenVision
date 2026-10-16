import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var uxu, dxu, hxu, pxu, mxu;
export { dxu, hxu, mxu, pxu, uxu };
var __wakaru_hdv_initialized = false;
export function hdv() {
if (__wakaru_hdv_initialized) return;
__wakaru_hdv_initialized = true;
"use strict";
x(), bi(), uxu = k.makeMessageType("agent.v1.SendFinalSummaryArgs", ()=>[
        {
            no: 1,
            name: "final_summary",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), dxu = k.makeMessageType("agent.v1.SendFinalSummarySuccess", ()=>[
        {
            no: 1,
            name: "final_summary",
            kind: "scalar",
            T: 9
        }
    ]), hxu = k.makeMessageType("agent.v1.SendFinalSummaryError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), pxu = k.makeMessageType("agent.v1.SendFinalSummaryResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: dxu,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: hxu,
            oneof: "result"
        }
    ]), mxu = k.makeMessageType("agent.v1.SendFinalSummaryToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: uxu
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: pxu
        }
    ]);

}
