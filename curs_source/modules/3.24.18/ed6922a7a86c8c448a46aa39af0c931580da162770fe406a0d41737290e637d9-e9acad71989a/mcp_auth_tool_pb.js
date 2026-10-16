import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var P4i, $Gs, HGs, WGs, GGs, VGs, UEu, E$, Oyt, Ase;
export { $Gs, Ase, E$, GGs, HGs, Oyt, P4i, UEu, VGs, WGs };
var __wakaru_X7t_initialized = false;
export function X7t() {
if (__wakaru_X7t_initialized) return;
__wakaru_X7t_initialized = true;
"use strict";
x(), bi(), P4i = k.makeMessageType("agent.v1.McpAuthArgs", ()=>[
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
    ]), $Gs = k.makeMessageType("agent.v1.McpAuthResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: HGs,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: WGs,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: GGs,
            oneof: "result"
        }
    ]), HGs = k.makeMessageType("agent.v1.McpAuthSuccess", ()=>[
        {
            no: 1,
            name: "server_identifier",
            kind: "scalar",
            T: 9
        }
    ]), WGs = k.makeMessageType("agent.v1.McpAuthError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), GGs = k.makeMessageType("agent.v1.McpAuthRejected", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]), VGs = k.makeMessageType("agent.v1.McpAuthToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: P4i
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: $Gs
        }
    ]), UEu = k.makeMessageType("agent.v1.McpAuthRequestQuery", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: P4i
        }
    ]), E$ = k.makeMessageType("agent.v1.McpAuthRequestResponse", ()=>[
        {
            no: 1,
            name: "approved",
            kind: "message",
            T: Oyt,
            oneof: "result"
        },
        {
            no: 2,
            name: "rejected",
            kind: "message",
            T: Ase,
            oneof: "result"
        }
    ]), Oyt = k.makeMessageType("agent.v1.McpAuthRequestResponse.Approved", [], {
    localName: "McpAuthRequestResponse_Approved"
}), Ase = k.makeMessageType("agent.v1.McpAuthRequestResponse.Rejected", ()=>[
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
