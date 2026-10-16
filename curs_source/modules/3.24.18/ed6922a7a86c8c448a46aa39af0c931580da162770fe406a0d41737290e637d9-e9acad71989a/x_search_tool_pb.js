import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var OAu, FAu, BAu, UAu, $Au, HAu, WAu;
export { $Au, BAu, FAu, HAu, OAu, UAu, WAu };
var __wakaru_xdv_initialized = false;
export function xdv() {
if (__wakaru_xdv_initialized) return;
__wakaru_xdv_initialized = true;
"use strict";
x(), bi(), OAu = k.makeMessageType("agent.v1.XSearchArgs", ()=>[
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
    ]), FAu = k.makeMessageType("agent.v1.XSearchResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: BAu,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: $Au,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: HAu,
            oneof: "result"
        }
    ]), BAu = k.makeMessageType("agent.v1.XSearchSuccess", ()=>[
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
            T: UAu,
            repeated: !0
        }
    ]), UAu = k.makeMessageType("agent.v1.XSearchCitation", ()=>[
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
    ]), $Au = k.makeMessageType("agent.v1.XSearchError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), HAu = k.makeMessageType("agent.v1.XSearchRejected", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]), WAu = k.makeMessageType("agent.v1.XSearchToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: OAu
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: FAu
        }
    ]);

}
