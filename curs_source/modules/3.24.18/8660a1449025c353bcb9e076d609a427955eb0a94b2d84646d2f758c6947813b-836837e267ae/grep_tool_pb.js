import { O4t, V_t, s5e } from "./grep_exec_pb.js";
import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var o5e;
export { o5e };
var __wakaru_F4t_initialized = false;
export function F4t() {
if (__wakaru_F4t_initialized) return;
__wakaru_F4t_initialized = true;
"use strict";
E(), hr(), O4t(), o5e = x.makeMessageType("agent.v1.GrepToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: V_t
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: s5e
        }
    ]);

}
