import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
var MN, wte, Ete, bte, Rte, Cte, Ite, Ate, Mte, Pte, Nte;
export { Ate, Cte, Ete, Ite, MN, Mte, Nte, Pte, Rte, bte, wte };
var __wakaru_Uqe_initialized = false;
export function Uqe() {
if (__wakaru_Uqe_initialized) return;
__wakaru_Uqe_initialized = true;
"use strict";
h(), F(), MN = c.makeMessageType("agent.v1.WebSearchArgs", ()=>[
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
    ]), wte = c.makeMessageType("agent.v1.WebSearchResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: Ete,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: bte,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: Rte,
            oneof: "result"
        }
    ]), Ete = c.makeMessageType("agent.v1.WebSearchSuccess", ()=>[
        {
            no: 1,
            name: "references",
            kind: "message",
            T: Cte,
            repeated: !0
        }
    ]), bte = c.makeMessageType("agent.v1.WebSearchError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), Rte = c.makeMessageType("agent.v1.WebSearchRejected", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]), Cte = c.makeMessageType("agent.v1.WebSearchReference", ()=>[
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
    ]), Ite = c.makeMessageType("agent.v1.WebSearchToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: MN
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: wte
        }
    ]), Ate = c.makeMessageType("agent.v1.WebSearchRequestQuery", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: MN
        }
    ]), Mte = c.makeMessageType("agent.v1.WebSearchRequestResponse", ()=>[
        {
            no: 1,
            name: "approved",
            kind: "message",
            T: Pte,
            oneof: "result"
        },
        {
            no: 2,
            name: "rejected",
            kind: "message",
            T: Nte,
            oneof: "result"
        }
    ]), Pte = c.makeMessageType("agent.v1.WebSearchRequestResponse.Approved", [], {
    localName: "WebSearchRequestResponse_Approved"
}), Nte = c.makeMessageType("agent.v1.WebSearchRequestResponse.Rejected", ()=>[
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
