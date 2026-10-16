import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
var Vre, $re, jre, Hre, qre;
export { $re, Hre, Vre, jre, qre };
var __wakaru_nKe_initialized = false;
export function nKe() {
if (__wakaru_nKe_initialized) return;
__wakaru_nKe_initialized = true;
"use strict";
h(), F(), Vre = c.makeMessageType("agent.v1.EditPrLabelsArgs", ()=>[
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
    ]), $re = c.makeMessageType("agent.v1.EditPrLabelsResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: jre,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: Hre,
            oneof: "result"
        }
    ]), jre = c.makeMessageType("agent.v1.EditPrLabelsSuccess", ()=>[
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
    ]), Hre = c.makeMessageType("agent.v1.EditPrLabelsError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), qre = c.makeMessageType("agent.v1.EditPrLabelsToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: Vre
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: $re
        }
    ]);

}
