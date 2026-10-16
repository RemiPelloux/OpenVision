import { cee, lee, vee } from "./grep_exec_pb.js";
import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
var Tee;
export { Tee };
var __wakaru_Iqe_initialized = false;
export function Iqe() {
if (__wakaru_Iqe_initialized) return;
__wakaru_Iqe_initialized = true;
"use strict";
h(), F(), vee(), Tee = c.makeMessageType("agent.v1.GrepToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: cee
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: lee
        }
    ]);

}
