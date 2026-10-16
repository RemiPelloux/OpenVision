import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
import { Rg, So, ko } from "./utils_pb.js";
var ON, Ene, bne, Rne, Cne, Ine, Ane, Mne, Pne, Nne;
export { Ane, Cne, Ene, Ine, Mne, Nne, ON, Pne, Rne, bne };
var __wakaru_qqe_initialized = false;
export function qqe() {
if (__wakaru_qqe_initialized) return;
__wakaru_qqe_initialized = true;
"use strict";
h(), F(), So(), ON = c.makeMessageType("agent.v1.WebFetchArgs", ()=>[
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
    ]), Ene = c.makeMessageType("agent.v1.WebFetchResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: bne,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: Rne,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: Cne,
            oneof: "result"
        }
    ]), bne = c.makeMessageType("agent.v1.WebFetchSuccess", ()=>[
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
            T: ko,
            opt: !0
        }
    ]), Rne = c.makeMessageType("agent.v1.WebFetchError", ()=>[
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
    ]), Cne = c.makeMessageType("agent.v1.WebFetchRejected", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]), Ine = c.makeMessageType("agent.v1.WebFetchToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: ON
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: Ene
        }
    ]), Ane = c.makeMessageType("agent.v1.WebFetchRequestQuery", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: ON
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
            T: Rg
        }
    ]), Mne = c.makeMessageType("agent.v1.WebFetchRequestResponse", ()=>[
        {
            no: 1,
            name: "approved",
            kind: "message",
            T: Pne,
            oneof: "result"
        },
        {
            no: 2,
            name: "rejected",
            kind: "message",
            T: Nne,
            oneof: "result"
        }
    ]), Pne = c.makeMessageType("agent.v1.WebFetchRequestResponse.Approved", [], {
    localName: "WebFetchRequestResponse_Approved"
}), Nne = c.makeMessageType("agent.v1.WebFetchRequestResponse.Rejected", ()=>[
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
