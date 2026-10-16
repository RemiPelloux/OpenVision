import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { $6e, hee, k$ } from "./shell_exec_pb.js";
import { x } from "./tslib.es6.js";
var Ese, FWs, Y1u, BWs;
export { BWs, Ese, FWs, Y1u };
var __wakaru_KRn_initialized = false;
export function KRn() {
if (__wakaru_KRn_initialized) return;
__wakaru_KRn_initialized = true;
"use strict";
x(), bi(), hee(), Ese = k.makeMessageType("agent.v1.ShellToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: $6e
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: k$
        },
        {
            no: 3,
            name: "description",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), FWs = k.makeMessageType("agent.v1.ShellToolCallStdoutDelta", ()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9
        }
    ]), Y1u = k.makeMessageType("agent.v1.ShellToolCallStderrDelta", ()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9
        }
    ]), BWs = k.makeMessageType("agent.v1.ShellToolCallDelta", ()=>[
        {
            no: 1,
            name: "stdout",
            kind: "message",
            T: FWs,
            oneof: "delta"
        },
        {
            no: 2,
            name: "stderr",
            kind: "message",
            T: Y1u,
            oneof: "delta"
        }
    ]);

}
