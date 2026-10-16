import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var _5o, dni, hSr, qvd;
export { _5o, dni, hSr, qvd };
var __wakaru_b5o_initialized = false;
export function b5o() {
if (__wakaru_b5o_initialized) return;
__wakaru_b5o_initialized = true;
"use strict";
E(), hr(), _5o = x.makeMessageType("agent.v1.SetupVmEnvironmentArgs", ()=>[
        {
            no: 2,
            name: "install_command",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "start_command",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "dockerfile_contents",
            kind: "scalar",
            T: 9
        }
    ]), dni = x.makeMessageType("agent.v1.SetupVmEnvironmentResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: hSr,
            oneof: "result"
        }
    ]), hSr = x.makeMessageType("agent.v1.SetupVmEnvironmentSuccess", []), qvd = x.makeMessageType("agent.v1.SetupVmEnvironmentToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: _5o
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: dni
        }
    ]);

}
