import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var a9o, l9o;
export { a9o, l9o };
var __wakaru_c9o_initialized = false;
export function c9o() {
if (__wakaru_c9o_initialized) return;
__wakaru_c9o_initialized = true;
"use strict";
E(), hr(), a9o = x.makeMessageType("agent.v1.McpAllowlistPrecheckArgs", ()=>[
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
    ]), l9o = x.makeMessageType("agent.v1.McpAllowlistPrecheckResult", ()=>[
        {
            no: 1,
            name: "allowlisted",
            kind: "scalar",
            T: 8
        }
    ]);

}
