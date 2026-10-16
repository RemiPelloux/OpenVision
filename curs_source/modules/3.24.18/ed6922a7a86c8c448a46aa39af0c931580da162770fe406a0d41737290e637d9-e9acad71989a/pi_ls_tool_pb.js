import { RMe, rde } from "./pi_common_pb.js";
import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var IIu, AIu, RIu, DIu, MIu;
export { AIu, DIu, IIu, MIu, RIu };
var __wakaru_wdv_initialized = false;
export function wdv() {
if (__wakaru_wdv_initialized) return;
__wakaru_wdv_initialized = true;
"use strict";
x(), bi(), RMe(), IIu = k.makeMessageType("agent.v1.PiLsToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: AIu
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: RIu
        }
    ]), AIu = k.makeMessageType("agent.v1.PiLsToolArgs", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "limit",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), RIu = k.makeMessageType("agent.v1.PiLsToolResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: DIu,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: MIu,
            oneof: "result"
        }
    ]), DIu = k.makeMessageType("agent.v1.PiLsToolSuccess", ()=>[
        {
            no: 1,
            name: "output",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "truncation",
            kind: "message",
            T: rde,
            opt: !0
        },
        {
            no: 3,
            name: "entry_limit_reached",
            kind: "scalar",
            T: 13,
            opt: !0
        }
    ]), MIu = k.makeMessageType("agent.v1.PiLsToolError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);

}
