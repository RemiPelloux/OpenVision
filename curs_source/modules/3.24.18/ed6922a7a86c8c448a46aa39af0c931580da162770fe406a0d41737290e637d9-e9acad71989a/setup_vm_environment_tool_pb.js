import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var LGs, SDn, A4i, cEu;
export { A4i, LGs, SDn, cEu };
var __wakaru_NGs_initialized = false;
export function NGs() {
if (__wakaru_NGs_initialized) return;
__wakaru_NGs_initialized = true;
"use strict";
x(), bi(), LGs = k.makeMessageType("agent.v1.SetupVmEnvironmentArgs", ()=>[
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
    ]), SDn = k.makeMessageType("agent.v1.SetupVmEnvironmentResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: A4i,
            oneof: "result"
        }
    ]), A4i = k.makeMessageType("agent.v1.SetupVmEnvironmentSuccess", []), cEu = k.makeMessageType("agent.v1.SetupVmEnvironmentToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: LGs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: SDn
        }
    ]);

}
