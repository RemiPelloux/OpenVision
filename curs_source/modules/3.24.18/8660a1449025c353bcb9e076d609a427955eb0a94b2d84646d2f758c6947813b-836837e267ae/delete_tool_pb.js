import { Yet, amn, lmn } from "./delete_exec_pb.js";
import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var L4t;
export { L4t };
var __wakaru_qyr_initialized = false;
export function qyr() {
if (__wakaru_qyr_initialized) return;
__wakaru_qyr_initialized = true;
"use strict";
E(), hr(), lmn(), L4t = x.makeMessageType("agent.v1.DeleteToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: amn
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: Yet
        }
    ]);

}
