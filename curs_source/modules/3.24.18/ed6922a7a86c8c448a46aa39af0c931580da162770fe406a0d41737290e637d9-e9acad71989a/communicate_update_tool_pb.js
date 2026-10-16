import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var sxu, oxu, axu, cxu, lxu;
export { axu, cxu, lxu, oxu, sxu };
var __wakaru_ddv_initialized = false;
export function ddv() {
if (__wakaru_ddv_initialized) return;
__wakaru_ddv_initialized = true;
"use strict";
x(), bi(), sxu = k.makeMessageType("agent.v1.CommunicateUpdateArgs", ()=>[
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
    ]), oxu = k.makeMessageType("agent.v1.CommunicateUpdateSuccess", ()=>[
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
    ]), axu = k.makeMessageType("agent.v1.CommunicateUpdateError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), cxu = k.makeMessageType("agent.v1.CommunicateUpdateResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: oxu,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: axu,
            oneof: "result"
        }
    ]), lxu = k.makeMessageType("agent.v1.CommunicateUpdateToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: sxu
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: cxu
        }
    ]);

}
