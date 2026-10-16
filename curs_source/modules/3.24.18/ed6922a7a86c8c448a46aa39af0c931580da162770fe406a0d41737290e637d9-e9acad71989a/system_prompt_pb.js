import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var xDn;
export { xDn };
var __wakaru_G4i_initialized = false;
export function G4i() {
if (__wakaru_G4i_initialized) return;
__wakaru_G4i_initialized = true;
"use strict";
x(), bi(), xDn = k.makeMessageType("agent.v1.SystemPromptSpec", ()=>[
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
