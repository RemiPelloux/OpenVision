import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var zvd, Kvd, Yvd, DHi;
export { DHi, Kvd, Yvd, zvd };
var __wakaru_lno_initialized = false;
export function lno() {
if (__wakaru_lno_initialized) return;
__wakaru_lno_initialized = true;
"use strict";
x(), bi(), zvd = k.makeMessageType("aiserver.v1.LspSubgraphPosition", ()=>[
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
    ]), Kvd = k.makeMessageType("aiserver.v1.LspSubgraphRange", ()=>[
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
    ]), Yvd = k.makeMessageType("aiserver.v1.LspSubgraphContextItem", ()=>[
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
            T: Kvd,
            opt: !0
        }
    ]), DHi = k.makeMessageType("aiserver.v1.LspSubgraphFullContext", ()=>[
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
            T: zvd,
            repeated: !0
        },
        {
            no: 4,
            name: "context_items",
            kind: "message",
            T: Yvd,
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
