import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { LP, OP, UP } from "./record_screen_exec_pb.js";
import { h } from "./tslib.es6.js";
var ine;
export { ine };
var __wakaru_Bqe_initialized = false;
export function Bqe() {
if (__wakaru_Bqe_initialized) return;
__wakaru_Bqe_initialized = true;
"use strict";
h(), F(), UP(), ine = c.makeMessageType("agent.v1.RecordScreenToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: OP
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: LP
        }
    ]);

}
