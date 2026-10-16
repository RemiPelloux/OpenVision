import { Ayt, B7t, Iyt } from "./grep_exec_pb.js";
import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var v4e;
export { v4e };
var __wakaru_QRn_initialized = false;
export function QRn() {
if (__wakaru_QRn_initialized) return;
__wakaru_QRn_initialized = true;
"use strict";
x(), bi(), B7t(), v4e = k.makeMessageType("agent.v1.GrepToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: Iyt
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: Ayt
        }
    ]);

}
