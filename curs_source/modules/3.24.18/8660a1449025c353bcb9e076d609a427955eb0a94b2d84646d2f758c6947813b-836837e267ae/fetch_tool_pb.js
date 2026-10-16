import { Dvd, d5o, h5o } from "./fetch_exec_pb.js";
import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var Nvd;
export { Nvd };
var __wakaru_aIy_initialized = false;
export function aIy() {
if (__wakaru_aIy_initialized) return;
__wakaru_aIy_initialized = true;
"use strict";
E(), hr(), Dvd(), Nvd = x.makeMessageType("agent.v1.FetchToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: d5o
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: h5o
        }
    ]);

}
