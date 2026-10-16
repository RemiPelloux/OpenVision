import { F_t, Get, b4t } from "./background_shell_exec_pb.js";
import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var v5o;
export { v5o };
var __wakaru_Uvd_initialized = false;
export function Uvd() {
if (__wakaru_Uvd_initialized) return;
__wakaru_Uvd_initialized = true;
"use strict";
E(), hr(), F_t(), v5o = x.makeMessageType("agent.v1.WriteShellStdinToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: Get
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: b4t
        }
    ]);

}
