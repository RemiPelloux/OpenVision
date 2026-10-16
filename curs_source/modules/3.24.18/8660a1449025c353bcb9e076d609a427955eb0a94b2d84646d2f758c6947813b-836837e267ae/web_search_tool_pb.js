import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var vmn, _mn, dSr, i5o, Ivd, ini, bmn, xvd, G4t, rni, sni;
export { G4t, Ivd, _mn, bmn, dSr, i5o, ini, rni, sni, vmn, xvd };
var __wakaru_ymn_initialized = false;
export function ymn() {
if (__wakaru_ymn_initialized) return;
__wakaru_ymn_initialized = true;
"use strict";
E(), hr(), vmn = x.makeMessageType("agent.v1.WebSearchArgs", ()=>[
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
    ]), _mn = x.makeMessageType("agent.v1.WebSearchResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: dSr,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: i5o,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: Ivd,
            oneof: "result"
        }
    ]), dSr = x.makeMessageType("agent.v1.WebSearchSuccess", ()=>[
        {
            no: 1,
            name: "references",
            kind: "message",
            T: ini,
            repeated: !0
        }
    ]), i5o = x.makeMessageType("agent.v1.WebSearchError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), Ivd = x.makeMessageType("agent.v1.WebSearchRejected", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]), ini = x.makeMessageType("agent.v1.WebSearchReference", ()=>[
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
    ]), bmn = x.makeMessageType("agent.v1.WebSearchToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: vmn
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: _mn
        }
    ]), xvd = x.makeMessageType("agent.v1.WebSearchRequestQuery", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: vmn
        }
    ]), G4t = x.makeMessageType("agent.v1.WebSearchRequestResponse", ()=>[
        {
            no: 1,
            name: "approved",
            kind: "message",
            T: rni,
            oneof: "result"
        },
        {
            no: 2,
            name: "rejected",
            kind: "message",
            T: sni,
            oneof: "result"
        }
    ]), rni = x.makeMessageType("agent.v1.WebSearchRequestResponse.Approved", [], {
    localName: "WebSearchRequestResponse_Approved"
}), sni = x.makeMessageType("agent.v1.WebSearchRequestResponse.Rejected", ()=>[
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
