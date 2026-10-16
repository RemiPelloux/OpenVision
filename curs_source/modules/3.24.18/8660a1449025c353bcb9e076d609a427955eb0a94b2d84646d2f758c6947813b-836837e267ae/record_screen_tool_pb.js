import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { B_t, Dpn, y4t } from "./record_screen_exec_pb.js";
import { E } from "./tslib.es6.js";
var f5o;
export { f5o };
var __wakaru_Bvd_initialized = false;
export function Bvd() {
if (__wakaru_Bvd_initialized) return;
__wakaru_Bvd_initialized = true;
"use strict";
E(), hr(), y4t(), f5o = x.makeMessageType("agent.v1.RecordScreenToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: B_t
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: Dpn
        }
    ]);

}
