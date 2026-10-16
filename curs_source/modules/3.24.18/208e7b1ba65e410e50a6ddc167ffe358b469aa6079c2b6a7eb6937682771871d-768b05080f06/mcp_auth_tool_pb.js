import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
var xN, Jne, Xne, Qne, Zne, ere, tre, nre, rre, sre;
export { Jne, Qne, Xne, Zne, ere, nre, rre, sre, tre, xN };
var __wakaru_zqe_initialized = false;
export function zqe() {
if (__wakaru_zqe_initialized) return;
__wakaru_zqe_initialized = true;
"use strict";
h(), F(), xN = c.makeMessageType("agent.v1.McpAuthArgs", ()=>[
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
    ]), Jne = c.makeMessageType("agent.v1.McpAuthResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: Xne,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: Qne,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: Zne,
            oneof: "result"
        }
    ]), Xne = c.makeMessageType("agent.v1.McpAuthSuccess", ()=>[
        {
            no: 1,
            name: "server_identifier",
            kind: "scalar",
            T: 9
        }
    ]), Qne = c.makeMessageType("agent.v1.McpAuthError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), Zne = c.makeMessageType("agent.v1.McpAuthRejected", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]), ere = c.makeMessageType("agent.v1.McpAuthToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: xN
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: Jne
        }
    ]), tre = c.makeMessageType("agent.v1.McpAuthRequestQuery", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: xN
        }
    ]), nre = c.makeMessageType("agent.v1.McpAuthRequestResponse", ()=>[
        {
            no: 1,
            name: "approved",
            kind: "message",
            T: rre,
            oneof: "result"
        },
        {
            no: 2,
            name: "rejected",
            kind: "message",
            T: sre,
            oneof: "result"
        }
    ]), rre = c.makeMessageType("agent.v1.McpAuthRequestResponse.Approved", [], {
    localName: "McpAuthRequestResponse_Approved"
}), sre = c.makeMessageType("agent.v1.McpAuthRequestResponse.Rejected", ()=>[
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
