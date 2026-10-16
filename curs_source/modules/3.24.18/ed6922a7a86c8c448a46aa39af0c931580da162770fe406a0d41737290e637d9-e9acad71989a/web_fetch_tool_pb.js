import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
import { $Ut, WZe, w0e } from "./utils_pb_2.js";
var R4i, OGs, bEu, yEu, SEu, FGs, kEu, HQe, Y7t, kDn;
export { FGs, HQe, OGs, R4i, SEu, Y7t, bEu, kDn, kEu, yEu };
var __wakaru_D4i_initialized = false;
export function D4i() {
if (__wakaru_D4i_initialized) return;
__wakaru_D4i_initialized = true;
"use strict";
x(), bi(), w0e(), R4i = k.makeMessageType("agent.v1.WebFetchArgs", ()=>[
        {
            no: 1,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        }
    ]), OGs = k.makeMessageType("agent.v1.WebFetchResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: bEu,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: yEu,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: SEu,
            oneof: "result"
        }
    ]), bEu = k.makeMessageType("agent.v1.WebFetchSuccess", ()=>[
        {
            no: 1,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "markdown",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "output_location",
            kind: "message",
            T: WZe,
            opt: !0
        }
    ]), yEu = k.makeMessageType("agent.v1.WebFetchError", ()=>[
        {
            no: 1,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), SEu = k.makeMessageType("agent.v1.WebFetchRejected", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]), FGs = k.makeMessageType("agent.v1.WebFetchToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: R4i
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: OGs
        }
    ]), kEu = k.makeMessageType("agent.v1.WebFetchRequestQuery", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: R4i
        },
        {
            no: 2,
            name: "skip_approval",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "smart_mode_approval",
            kind: "message",
            T: $Ut
        }
    ]), HQe = k.makeMessageType("agent.v1.WebFetchRequestResponse", ()=>[
        {
            no: 1,
            name: "approved",
            kind: "message",
            T: Y7t,
            oneof: "result"
        },
        {
            no: 2,
            name: "rejected",
            kind: "message",
            T: kDn,
            oneof: "result"
        }
    ]), Y7t = k.makeMessageType("agent.v1.WebFetchRequestResponse.Approved", [], {
    localName: "WebFetchRequestResponse_Approved"
}), kDn = k.makeMessageType("agent.v1.WebFetchRequestResponse.Rejected", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "WebFetchRequestResponse_Rejected"
});

}
