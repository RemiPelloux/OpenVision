import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var Qkd, Jkd;
export { Jkd, Qkd };
var __wakaru_ewd_initialized = false;
export function ewd() {
if (__wakaru_ewd_initialized) return;
__wakaru_ewd_initialized = true;
"use strict";
E(), hr(), Qkd = x.makeMessageType("agent.v1.WebFetchAllowlistPrecheckArgs", ()=>[
        {
            no: 1,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "tool_call_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), Jkd = x.makeMessageType("agent.v1.WebFetchAllowlistPrecheckResult", ()=>[
        {
            no: 1,
            name: "allowlisted",
            kind: "scalar",
            T: 8
        }
    ]);

}
