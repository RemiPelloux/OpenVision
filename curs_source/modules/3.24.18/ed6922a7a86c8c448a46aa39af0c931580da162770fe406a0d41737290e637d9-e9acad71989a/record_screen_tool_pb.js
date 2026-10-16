import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { HUt, Tbt, VZe } from "./record_screen_exec_pb.js";
import { x } from "./tslib.es6.js";
var MGs;
export { MGs };
var __wakaru_tEu_initialized = false;
export function tEu() {
if (__wakaru_tEu_initialized) return;
__wakaru_tEu_initialized = true;
"use strict";
x(), bi(), Tbt(), MGs = k.makeMessageType("agent.v1.RecordScreenToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: VZe
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: HUt
        }
    ]);

}
