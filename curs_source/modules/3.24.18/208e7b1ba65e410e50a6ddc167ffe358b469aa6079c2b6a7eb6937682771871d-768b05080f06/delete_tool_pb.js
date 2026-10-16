import { KZ, qZ, tee } from "./delete_exec_pb.js";
import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
var nee;
export { nee };
var __wakaru_Rqe_initialized = false;
export function Rqe() {
if (__wakaru_Rqe_initialized) return;
__wakaru_Rqe_initialized = true;
"use strict";
h(), F(), tee(), nee = c.makeMessageType("agent.v1.DeleteToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: qZ
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: KZ
        }
    ]);

}
