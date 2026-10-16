import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { $K, MP, du } from "./shell_exec_pb.js";
import { h } from "./tslib.es6.js";
var VZ, $Z, jZ, HZ;
export { $Z, HZ, VZ, jZ };
var __wakaru_bqe_initialized = false;
export function bqe() {
if (__wakaru_bqe_initialized) return;
__wakaru_bqe_initialized = true;
"use strict";
h(), F(), du(), VZ = c.makeMessageType("agent.v1.ShellToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: $K
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: MP
        },
        {
            no: 3,
            name: "description",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), $Z = c.makeMessageType("agent.v1.ShellToolCallStdoutDelta", ()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9
        }
    ]), jZ = c.makeMessageType("agent.v1.ShellToolCallStderrDelta", ()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9
        }
    ]), HZ = c.makeMessageType("agent.v1.ShellToolCallDelta", ()=>[
        {
            no: 1,
            name: "stdout",
            kind: "message",
            T: $Z,
            oneof: "delta"
        },
        {
            no: 2,
            name: "stderr",
            kind: "message",
            T: jZ,
            oneof: "delta"
        }
    ]);

}
