import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var O4i, ZGs, QGs, JGs, eVs, tVs, nVs, iVs, PIu, WQe, F4i, B4i, U4i;
export { B4i, F4i, JGs, O4i, PIu, QGs, U4i, WQe, ZGs, eVs, iVs, nVs, tVs };
var __wakaru_$4i_initialized = false;
export function $4i() {
if (__wakaru_$4i_initialized) return;
__wakaru_$4i_initialized = true;
"use strict";
x(), bi(), O4i = k.makeMessageType("agent.v1.ConnectScmArgs", ()=>[
        {
            no: 1,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "github",
            kind: "message",
            T: ZGs,
            oneof: "target"
        }
    ]), ZGs = k.makeMessageType("agent.v1.ConnectScmGithub", ()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: QGs
        },
        {
            no: 2,
            name: "ghe_application",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), QGs = k.makeMessageType("agent.v1.ConnectScmGithubRepository", ()=>[
        {
            no: 1,
            name: "owner",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "repo",
            kind: "scalar",
            T: 9
        }
    ]), JGs = k.makeMessageType("agent.v1.ConnectScmResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: eVs,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: tVs,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: nVs,
            oneof: "result"
        }
    ]), eVs = k.makeMessageType("agent.v1.ConnectScmSuccess", []), tVs = k.makeMessageType("agent.v1.ConnectScmError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), nVs = k.makeMessageType("agent.v1.ConnectScmRejected", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]), iVs = k.makeMessageType("agent.v1.ConnectScmToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: O4i
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: JGs
        }
    ]), PIu = k.makeMessageType("agent.v1.ConnectScmRequestQuery", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: O4i
        }
    ]), WQe = k.makeMessageType("agent.v1.ConnectScmRequestResponse", ()=>[
        {
            no: 1,
            name: "approved",
            kind: "message",
            T: F4i,
            oneof: "result"
        },
        {
            no: 2,
            name: "rejected",
            kind: "message",
            T: B4i,
            oneof: "result"
        },
        {
            no: 3,
            name: "failed",
            kind: "message",
            T: U4i,
            oneof: "result"
        }
    ]), F4i = k.makeMessageType("agent.v1.ConnectScmRequestResponse.Approved", [], {
    localName: "ConnectScmRequestResponse_Approved"
}), B4i = k.makeMessageType("agent.v1.ConnectScmRequestResponse.Rejected", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ConnectScmRequestResponse_Rejected"
}), U4i = k.makeMessageType("agent.v1.ConnectScmRequestResponse.Failed", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ConnectScmRequestResponse_Failed"
});

}
