import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var tbd, nbd, ibd, rbd, sbd;
export { ibd, nbd, rbd, sbd, tbd };
var __wakaru_fIy_initialized = false;
export function fIy() {
if (__wakaru_fIy_initialized) return;
__wakaru_fIy_initialized = true;
"use strict";
E(), hr(), tbd = x.makeMessageType("agent.v1.EditPrLabelsArgs", ()=>[
        {
            no: 1,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "add_labels",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 5,
            name: "remove_labels",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), nbd = x.makeMessageType("agent.v1.EditPrLabelsResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: ibd,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: rbd,
            oneof: "result"
        }
    ]), ibd = x.makeMessageType("agent.v1.EditPrLabelsSuccess", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "pr_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ]), rbd = x.makeMessageType("agent.v1.EditPrLabelsError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), sbd = x.makeMessageType("agent.v1.EditPrLabelsToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: tbd
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: nbd
        }
    ]);

}
