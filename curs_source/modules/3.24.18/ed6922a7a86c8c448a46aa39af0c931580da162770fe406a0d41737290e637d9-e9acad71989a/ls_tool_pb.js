import { G6e, jUt, xbt } from "./ls_exec_pb.js";
import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var Dyt;
export { Dyt };
var __wakaru_f4i_initialized = false;
export function f4i() {
if (__wakaru_f4i_initialized) return;
__wakaru_f4i_initialized = true;
"use strict";
x(), bi(), G6e(), Dyt = k.makeMessageType("agent.v1.LsToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: jUt
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: xbt
        }
    ]);

}
