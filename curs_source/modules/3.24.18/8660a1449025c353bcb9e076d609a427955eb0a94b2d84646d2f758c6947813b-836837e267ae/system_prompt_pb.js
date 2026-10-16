import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var yni;
export { yni };
var __wakaru_TSr_initialized = false;
export function TSr() {
if (__wakaru_TSr_initialized) return;
__wakaru_TSr_initialized = true;
"use strict";
E(), hr(), yni = x.makeMessageType("agent.v1.SystemPromptSpec", ()=>[
        {
            no: 1,
            name: "replace",
            kind: "scalar",
            T: 9,
            oneof: "spec"
        },
        {
            no: 2,
            name: "append",
            kind: "scalar",
            T: 9,
            oneof: "spec"
        }
    ]);

}
