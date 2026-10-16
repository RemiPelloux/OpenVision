import { $z, Lg, jz } from "./ls_exec_pb.js";
import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
var Zee;
export { Zee };
var __wakaru_Pqe_initialized = false;
export function Pqe() {
if (__wakaru_Pqe_initialized) return;
__wakaru_Pqe_initialized = true;
"use strict";
h(), F(), Lg(), Zee = c.makeMessageType("agent.v1.LsToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: $z
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: jz
        }
    ]);

}
