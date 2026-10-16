import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var vSd, _Sd, bSd, ySd, SSd, kSd, wSd;
export { SSd, _Sd, bSd, kSd, vSd, wSd, ySd };
var __wakaru_RIy_initialized = false;
export function RIy() {
if (__wakaru_RIy_initialized) return;
__wakaru_RIy_initialized = true;
"use strict";
E(), hr(), vSd = x.makeMessageType("agent.v1.XSearchArgs", ()=>[
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
    ]), _Sd = x.makeMessageType("agent.v1.XSearchResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: bSd,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: SSd,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: kSd,
            oneof: "result"
        }
    ]), bSd = x.makeMessageType("agent.v1.XSearchSuccess", ()=>[
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
            T: ySd,
            repeated: !0
        }
    ]), ySd = x.makeMessageType("agent.v1.XSearchCitation", ()=>[
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
    ]), SSd = x.makeMessageType("agent.v1.XSearchError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), kSd = x.makeMessageType("agent.v1.XSearchRejected", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]), wSd = x.makeMessageType("agent.v1.XSearchToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: vSd
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: _Sd
        }
    ]);

}
