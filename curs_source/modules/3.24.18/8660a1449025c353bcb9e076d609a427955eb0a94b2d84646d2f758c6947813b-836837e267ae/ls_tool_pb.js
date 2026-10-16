import { Fpn, k4t, zet } from "./ls_exec_pb.js";
import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var j4t;
export { j4t };
var __wakaru_eSr_initialized = false;
export function eSr() {
if (__wakaru_eSr_initialized) return;
__wakaru_eSr_initialized = true;
"use strict";
E(), hr(), zet(), j4t = x.makeMessageType("agent.v1.LsToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: Fpn
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: k4t
        }
    ]);

}
