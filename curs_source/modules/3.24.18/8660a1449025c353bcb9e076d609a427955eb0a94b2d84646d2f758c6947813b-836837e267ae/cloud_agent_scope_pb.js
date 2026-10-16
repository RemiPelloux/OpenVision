import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var f7, $Ed;
export { $Ed, f7 };
var __wakaru_Z9o_initialized = false;
export function Z9o() {
if (__wakaru_Z9o_initialized) return;
__wakaru_Z9o_initialized = true;
"use strict";
E(), hr(), f7 = x.makeMessageType("aiserver.v1.CloudAgentRequestScope", ()=>[
        {
            no: 1,
            name: "personal",
            kind: "message",
            T: $Ed,
            oneof: "scope"
        },
        {
            no: 2,
            name: "team_id",
            kind: "scalar",
            T: 5,
            oneof: "scope"
        }
    ]), $Ed = x.makeMessageType("aiserver.v1.CloudAgentPersonalScope", []);

}
