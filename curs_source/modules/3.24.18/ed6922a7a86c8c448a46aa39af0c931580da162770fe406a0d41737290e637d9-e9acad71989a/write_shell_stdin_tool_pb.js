import { Cbt, GZe, H6e } from "./background_shell_exec_pb.js";
import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var PGs;
export { PGs };
var __wakaru_nEu_initialized = false;
export function nEu() {
if (__wakaru_nEu_initialized) return;
__wakaru_nEu_initialized = true;
"use strict";
x(), bi(), GZe(), PGs = k.makeMessageType("agent.v1.WriteShellStdinToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: H6e
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: Cbt
        }
    ]);

}
