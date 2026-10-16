import { RMe, rde } from "./pi_common_pb.js";
import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var wIu, CIu, TIu, EIu, xIu;
export { CIu, EIu, TIu, wIu, xIu };
var __wakaru_kdv_initialized = false;
export function kdv() {
if (__wakaru_kdv_initialized) return;
__wakaru_kdv_initialized = true;
"use strict";
x(), bi(), RMe(), wIu = k.makeMessageType("agent.v1.PiFindToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: CIu
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: TIu
        }
    ]), CIu = k.makeMessageType("agent.v1.PiFindToolArgs", ()=>[
        {
            no: 1,
            name: "pattern",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "path",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "limit",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), TIu = k.makeMessageType("agent.v1.PiFindToolResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: EIu,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: xIu,
            oneof: "result"
        }
    ]), EIu = k.makeMessageType("agent.v1.PiFindToolSuccess", ()=>[
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
            name: "result_limit_reached",
            kind: "scalar",
            T: 13,
            opt: !0
        }
    ]), xIu = k.makeMessageType("agent.v1.PiFindToolError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);

}
