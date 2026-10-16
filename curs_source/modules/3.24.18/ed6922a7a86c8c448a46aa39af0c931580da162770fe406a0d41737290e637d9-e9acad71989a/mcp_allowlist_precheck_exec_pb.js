import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var bYs, yYs;
export { bYs, yYs };
var __wakaru_SYs_initialized = false;
export function SYs() {
if (__wakaru_SYs_initialized) return;
__wakaru_SYs_initialized = true;
"use strict";
x(), bi(), bYs = k.makeMessageType("agent.v1.McpAllowlistPrecheckArgs", ()=>[
        {
            no: 1,
            name: "provider_identifier",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "tool_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "tool_call_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "annotations_json",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), yYs = k.makeMessageType("agent.v1.McpAllowlistPrecheckResult", ()=>[
        {
            no: 1,
            name: "allowlisted",
            kind: "scalar",
            T: 8
        }
    ]);

}
