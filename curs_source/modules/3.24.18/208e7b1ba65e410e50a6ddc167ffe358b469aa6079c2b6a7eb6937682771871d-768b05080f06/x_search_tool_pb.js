import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
var yae, wae, Eae, bae, Rae, Cae, Iae;
export { Cae, Eae, Iae, Rae, bae, wae, yae };
var __wakaru_TKe_initialized = false;
export function TKe() {
if (__wakaru_TKe_initialized) return;
__wakaru_TKe_initialized = true;
"use strict";
h(), F(), yae = c.makeMessageType("agent.v1.XSearchArgs", ()=>[
        {
            no: 1,
            name: "query",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "from_date",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "to_date",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "allowed_x_handles",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 5,
            name: "excluded_x_handles",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), wae = c.makeMessageType("agent.v1.XSearchResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: Eae,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: Rae,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: Cae,
            oneof: "result"
        }
    ]), Eae = c.makeMessageType("agent.v1.XSearchSuccess", ()=>[
        {
            no: 1,
            name: "answer",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "citations",
            kind: "message",
            T: bae,
            repeated: !0
        }
    ]), bae = c.makeMessageType("agent.v1.XSearchCitation", ()=>[
        {
            no: 1,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "title",
            kind: "scalar",
            T: 9
        }
    ]), Rae = c.makeMessageType("agent.v1.XSearchError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), Cae = c.makeMessageType("agent.v1.XSearchRejected", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]), Iae = c.makeMessageType("agent.v1.XSearchToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: yae
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: wae
        }
    ]);

}
