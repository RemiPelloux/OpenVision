import { RMe, rde } from "./pi_common_pb.js";
import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var eIu, tIu, nIu, iIu, rIu;
export { eIu, iIu, nIu, rIu, tIu };
var __wakaru_bdv_initialized = false;
export function bdv() {
if (__wakaru_bdv_initialized) return;
__wakaru_bdv_initialized = true;
"use strict";
x(), bi(), RMe(), eIu = k.makeMessageType("agent.v1.PiBashToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: tIu
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: nIu
        }
    ]), tIu = k.makeMessageType("agent.v1.PiBashToolArgs", ()=>[
        {
            no: 1,
            name: "command",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "timeout",
            kind: "scalar",
            T: 1,
            opt: !0
        }
    ]), nIu = k.makeMessageType("agent.v1.PiBashToolResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: iIu,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: rIu,
            oneof: "result"
        }
    ]), iIu = k.makeMessageType("agent.v1.PiBashToolSuccess", ()=>[
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
            name: "full_output_path",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), rIu = k.makeMessageType("agent.v1.PiBashToolError", ()=>[
        {
            no: 1,
            name: "error",
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
            name: "full_output_path",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]);

}
