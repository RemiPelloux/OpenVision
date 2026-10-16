import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
var VN, nie, rie, sie, iie, aie, oie, cie, lie, die, uie, mie, pie;
export { VN, aie, cie, die, iie, lie, mie, nie, oie, pie, rie, sie, uie };
var __wakaru_pKe_initialized = false;
export function pKe() {
if (__wakaru_pKe_initialized) return;
__wakaru_pKe_initialized = true;
"use strict";
h(), F(), VN = c.makeMessageType("agent.v1.ConnectScmArgs", ()=>[
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
            T: nie,
            oneof: "target"
        }
    ]), nie = c.makeMessageType("agent.v1.ConnectScmGithub", ()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: rie
        },
        {
            no: 2,
            name: "ghe_application",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), rie = c.makeMessageType("agent.v1.ConnectScmGithubRepository", ()=>[
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
    ]), sie = c.makeMessageType("agent.v1.ConnectScmResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: iie,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: aie,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: oie,
            oneof: "result"
        }
    ]), iie = c.makeMessageType("agent.v1.ConnectScmSuccess", []), aie = c.makeMessageType("agent.v1.ConnectScmError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), oie = c.makeMessageType("agent.v1.ConnectScmRejected", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]), cie = c.makeMessageType("agent.v1.ConnectScmToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: VN
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: sie
        }
    ]), lie = c.makeMessageType("agent.v1.ConnectScmRequestQuery", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: VN
        }
    ]), die = c.makeMessageType("agent.v1.ConnectScmRequestResponse", ()=>[
        {
            no: 1,
            name: "approved",
            kind: "message",
            T: uie,
            oneof: "result"
        },
        {
            no: 2,
            name: "rejected",
            kind: "message",
            T: mie,
            oneof: "result"
        },
        {
            no: 3,
            name: "failed",
            kind: "message",
            T: pie,
            oneof: "result"
        }
    ]), uie = c.makeMessageType("agent.v1.ConnectScmRequestResponse.Approved", [], {
    localName: "ConnectScmRequestResponse_Approved"
}), mie = c.makeMessageType("agent.v1.ConnectScmRequestResponse.Rejected", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ConnectScmRequestResponse_Rejected"
}), pie = c.makeMessageType("agent.v1.ConnectScmRequestResponse.Failed", ()=>[
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
