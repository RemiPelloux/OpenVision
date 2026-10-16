import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var F2u, B2u;
export { B2u, F2u };
var __wakaru_U2u_initialized = false;
export function U2u() {
if (__wakaru_U2u_initialized) return;
__wakaru_U2u_initialized = true;
"use strict";
x(), bi(), F2u = k.makeMessageType("agent.v1.WebFetchAllowlistPrecheckArgs", ()=>[
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
    ]), B2u = k.makeMessageType("agent.v1.WebFetchAllowlistPrecheckResult", ()=>[
        {
            no: 1,
            name: "allowlisted",
            kind: "scalar",
            T: 8
        }
    ]);

}
