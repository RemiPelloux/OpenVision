import { F7t, O7t, f4e } from "./delete_exec_pb.js";
import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var xyt;
export { xyt };
var __wakaru_c4i_initialized = false;
export function c4i() {
if (__wakaru_c4i_initialized) return;
__wakaru_c4i_initialized = true;
"use strict";
x(), bi(), F7t(), xyt = k.makeMessageType("agent.v1.DeleteToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: O7t
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: f4e
        }
    ]);

}
