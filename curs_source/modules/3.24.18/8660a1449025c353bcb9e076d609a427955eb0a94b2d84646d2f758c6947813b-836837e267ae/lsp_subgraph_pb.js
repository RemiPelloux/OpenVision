import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var o0d, a0d, l0d, I1r;
export { I1r, a0d, l0d, o0d };
var __wakaru_g9o_initialized = false;
export function g9o() {
if (__wakaru_g9o_initialized) return;
__wakaru_g9o_initialized = true;
"use strict";
E(), hr(), o0d = x.makeMessageType("aiserver.v1.LspSubgraphPosition", ()=>[
        {
            no: 1,
            name: "line",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "character",
            kind: "scalar",
            T: 5
        }
    ]), a0d = x.makeMessageType("aiserver.v1.LspSubgraphRange", ()=>[
        {
            no: 1,
            name: "start_line",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "start_character",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "end_line",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "end_character",
            kind: "scalar",
            T: 5
        }
    ]), l0d = x.makeMessageType("aiserver.v1.LspSubgraphContextItem", ()=>[
        {
            no: 1,
            name: "uri",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "type",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "content",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "range",
            kind: "message",
            T: a0d,
            opt: !0
        }
    ]), I1r = x.makeMessageType("aiserver.v1.LspSubgraphFullContext", ()=>[
        {
            no: 1,
            name: "uri",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "symbol_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "positions",
            kind: "message",
            T: o0d,
            repeated: !0
        },
        {
            no: 4,
            name: "context_items",
            kind: "message",
            T: l0d,
            repeated: !0
        },
        {
            no: 5,
            name: "score",
            kind: "scalar",
            T: 2
        }
    ]);

}
