import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { $te, Aj, D$e } from "./shell_exec_pb.js";
import { E } from "./tslib.es6.js";
var Kse, xOo, Ofd, AOo;
export { AOo, Kse, Ofd, xOo };
var __wakaru_N4t_initialized = false;
export function N4t() {
if (__wakaru_N4t_initialized) return;
__wakaru_N4t_initialized = true;
"use strict";
E(), hr(), $te(), Kse = x.makeMessageType("agent.v1.ShellToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: D$e
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: Aj
        },
        {
            no: 3,
            name: "description",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), xOo = x.makeMessageType("agent.v1.ShellToolCallStdoutDelta", ()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9
        }
    ]), Ofd = x.makeMessageType("agent.v1.ShellToolCallStderrDelta", ()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9
        }
    ]), AOo = x.makeMessageType("agent.v1.ShellToolCallDelta", ()=>[
        {
            no: 1,
            name: "stdout",
            kind: "message",
            T: xOo,
            oneof: "delta"
        },
        {
            no: 2,
            name: "stderr",
            kind: "message",
            T: Ofd,
            oneof: "delta"
        }
    ]);

}
