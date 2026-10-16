import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var yxu, Sxu, kxu, wxu, Cxu;
export { Cxu, Sxu, kxu, wxu, yxu };
var __wakaru_pdv_initialized = false;
export function pdv() {
if (__wakaru_pdv_initialized) return;
__wakaru_pdv_initialized = true;
"use strict";
x(), bi(), yxu = k.makeMessageType("agent.v1.EditPrLabelsArgs", ()=>[
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
    ]), Sxu = k.makeMessageType("agent.v1.EditPrLabelsResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: kxu,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: wxu,
            oneof: "result"
        }
    ]), kxu = k.makeMessageType("agent.v1.EditPrLabelsSuccess", ()=>[
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
    ]), wxu = k.makeMessageType("agent.v1.EditPrLabelsError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), Cxu = k.makeMessageType("agent.v1.EditPrLabelsToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: yxu
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: Sxu
        }
    ]);

}
