import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var dDn, x4i, bGs, GTu, VTu, I4i, hDn, jTu, Nyt, pDn, mDn;
export { GTu, I4i, Nyt, VTu, bGs, dDn, hDn, jTu, mDn, pDn, x4i };
var __wakaru_gDn_initialized = false;
export function gDn() {
if (__wakaru_gDn_initialized) return;
__wakaru_gDn_initialized = true;
"use strict";
x(), bi(), dDn = k.makeMessageType("agent.v1.WebSearchArgs", ()=>[
        {
            no: 1,
            name: "search_term",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        }
    ]), x4i = k.makeMessageType("agent.v1.WebSearchResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: bGs,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: GTu,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: VTu,
            oneof: "result"
        }
    ]), bGs = k.makeMessageType("agent.v1.WebSearchSuccess", ()=>[
        {
            no: 1,
            name: "references",
            kind: "message",
            T: I4i,
            repeated: !0
        }
    ]), GTu = k.makeMessageType("agent.v1.WebSearchError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), VTu = k.makeMessageType("agent.v1.WebSearchRejected", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]), I4i = k.makeMessageType("agent.v1.WebSearchReference", ()=>[
        {
            no: 1,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "chunk",
            kind: "scalar",
            T: 9
        }
    ]), hDn = k.makeMessageType("agent.v1.WebSearchToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: dDn
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: x4i
        }
    ]), jTu = k.makeMessageType("agent.v1.WebSearchRequestQuery", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: dDn
        }
    ]), Nyt = k.makeMessageType("agent.v1.WebSearchRequestResponse", ()=>[
        {
            no: 1,
            name: "approved",
            kind: "message",
            T: pDn,
            oneof: "result"
        },
        {
            no: 2,
            name: "rejected",
            kind: "message",
            T: mDn,
            oneof: "result"
        }
    ]), pDn = k.makeMessageType("agent.v1.WebSearchRequestResponse.Approved", [], {
    localName: "WebSearchRequestResponse_Approved"
}), mDn = k.makeMessageType("agent.v1.WebSearchRequestResponse.Rejected", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "WebSearchRequestResponse_Rejected"
});

}
