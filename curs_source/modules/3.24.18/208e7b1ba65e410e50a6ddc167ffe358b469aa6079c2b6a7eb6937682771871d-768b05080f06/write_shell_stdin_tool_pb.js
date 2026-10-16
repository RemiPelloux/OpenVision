import { DP, NP, zy } from "./background_shell_exec_pb.js";
import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
var ane;
export { ane };
var __wakaru_Gqe_initialized = false;
export function Gqe() {
if (__wakaru_Gqe_initialized) return;
__wakaru_Gqe_initialized = true;
"use strict";
h(), F(), DP(), ane = c.makeMessageType("agent.v1.WriteShellStdinToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: zy
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: NP
        }
    ]);

}
