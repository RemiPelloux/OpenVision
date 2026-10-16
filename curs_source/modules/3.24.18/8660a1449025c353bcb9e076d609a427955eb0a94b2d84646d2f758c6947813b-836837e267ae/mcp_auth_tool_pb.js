import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var gSr, C5o, T5o, E5o, I5o, x5o, y_d, pY, q4t, Lve;
export { C5o, E5o, I5o, Lve, T5o, gSr, pY, q4t, x5o, y_d };
var __wakaru_Cmn_initialized = false;
export function Cmn() {
if (__wakaru_Cmn_initialized) return;
__wakaru_Cmn_initialized = true;
"use strict";
E(), hr(), gSr = x.makeMessageType("agent.v1.McpAuthArgs", ()=>[
        {
            no: 1,
            name: "server_identifier",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        }
    ]), C5o = x.makeMessageType("agent.v1.McpAuthResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: T5o,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: E5o,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: I5o,
            oneof: "result"
        }
    ]), T5o = x.makeMessageType("agent.v1.McpAuthSuccess", ()=>[
        {
            no: 1,
            name: "server_identifier",
            kind: "scalar",
            T: 9
        }
    ]), E5o = x.makeMessageType("agent.v1.McpAuthError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), I5o = x.makeMessageType("agent.v1.McpAuthRejected", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]), x5o = x.makeMessageType("agent.v1.McpAuthToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: gSr
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: C5o
        }
    ]), y_d = x.makeMessageType("agent.v1.McpAuthRequestQuery", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: gSr
        }
    ]), pY = x.makeMessageType("agent.v1.McpAuthRequestResponse", ()=>[
        {
            no: 1,
            name: "approved",
            kind: "message",
            T: q4t,
            oneof: "result"
        },
        {
            no: 2,
            name: "rejected",
            kind: "message",
            T: Lve,
            oneof: "result"
        }
    ]), q4t = x.makeMessageType("agent.v1.McpAuthRequestResponse.Approved", [], {
    localName: "McpAuthRequestResponse_Approved"
}), Lve = x.makeMessageType("agent.v1.McpAuthRequestResponse.Rejected", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "McpAuthRequestResponse_Rejected"
});

}
