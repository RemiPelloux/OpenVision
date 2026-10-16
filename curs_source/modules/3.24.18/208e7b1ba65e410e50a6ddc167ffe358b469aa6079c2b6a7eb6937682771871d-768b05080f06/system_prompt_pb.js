import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
var HN;
export { HN };
var __wakaru_qN_initialized = false;
export function qN() {
if (__wakaru_qN_initialized) return;
__wakaru_qN_initialized = true;
"use strict";
h(), F(), HN = c.makeMessageType("agent.v1.SystemPromptSpec", ()=>[
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
