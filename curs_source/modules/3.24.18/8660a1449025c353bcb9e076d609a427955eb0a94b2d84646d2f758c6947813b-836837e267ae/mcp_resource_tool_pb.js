import { Jti, Qti, eni, tni, zke } from "./mcp_exec_pb.js";
import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var r5o, s5o;
export { r5o, s5o };
var __wakaru_Avd_initialized = false;
export function Avd() {
if (__wakaru_Avd_initialized) return;
__wakaru_Avd_initialized = true;
"use strict";
E(), hr(), zke(), r5o = x.makeMessageType("agent.v1.ListMcpResourcesToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: Qti
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: Jti
        }
    ]), s5o = x.makeMessageType("agent.v1.ReadMcpResourceToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: eni
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: tni
        }
    ]);

}
