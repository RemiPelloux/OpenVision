import { Hte, jte, zte } from "./fetch_exec_pb.js";
import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
var Yte;
export { Yte };
var __wakaru_Fqe_initialized = false;
export function Fqe() {
if (__wakaru_Fqe_initialized) return;
__wakaru_Fqe_initialized = true;
"use strict";
h(), F(), zte(), Yte = c.makeMessageType("agent.v1.FetchToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: jte
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: Hte
        }
    ]);

}
