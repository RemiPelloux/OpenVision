import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var _Sr, L5o, O5o, F5o, B5o, U5o, j5o, $5o, myd, ibt, bSr, ySr, SSr;
export { $5o, B5o, F5o, L5o, O5o, SSr, U5o, _Sr, bSr, ibt, j5o, myd, ySr };
var __wakaru_kSr_initialized = false;
export function kSr() {
if (__wakaru_kSr_initialized) return;
__wakaru_kSr_initialized = true;
"use strict";
E(), hr(), _Sr = x.makeMessageType("agent.v1.ConnectScmArgs", ()=>[
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
            T: L5o,
            oneof: "target"
        }
    ]), L5o = x.makeMessageType("agent.v1.ConnectScmGithub", ()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: O5o
        },
        {
            no: 2,
            name: "ghe_application",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), O5o = x.makeMessageType("agent.v1.ConnectScmGithubRepository", ()=>[
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
    ]), F5o = x.makeMessageType("agent.v1.ConnectScmResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: B5o,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: U5o,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: j5o,
            oneof: "result"
        }
    ]), B5o = x.makeMessageType("agent.v1.ConnectScmSuccess", []), U5o = x.makeMessageType("agent.v1.ConnectScmError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), j5o = x.makeMessageType("agent.v1.ConnectScmRejected", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]), $5o = x.makeMessageType("agent.v1.ConnectScmToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: _Sr
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: F5o
        }
    ]), myd = x.makeMessageType("agent.v1.ConnectScmRequestQuery", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: _Sr
        }
    ]), ibt = x.makeMessageType("agent.v1.ConnectScmRequestResponse", ()=>[
        {
            no: 1,
            name: "approved",
            kind: "message",
            T: bSr,
            oneof: "result"
        },
        {
            no: 2,
            name: "rejected",
            kind: "message",
            T: ySr,
            oneof: "result"
        },
        {
            no: 3,
            name: "failed",
            kind: "message",
            T: SSr,
            oneof: "result"
        }
    ]), bSr = x.makeMessageType("agent.v1.ConnectScmRequestResponse.Approved", [], {
    localName: "ConnectScmRequestResponse_Approved"
}), ySr = x.makeMessageType("agent.v1.ConnectScmRequestResponse.Rejected", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ConnectScmRequestResponse_Rejected"
}), SSr = x.makeMessageType("agent.v1.ConnectScmRequestResponse.Failed", ()=>[
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
