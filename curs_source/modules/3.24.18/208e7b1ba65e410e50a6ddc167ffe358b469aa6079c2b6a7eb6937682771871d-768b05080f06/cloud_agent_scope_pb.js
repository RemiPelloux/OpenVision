import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
var An, PSe;
export { An, PSe };
var __wakaru_K9_initialized = false;
export function K9() {
if (__wakaru_K9_initialized) return;
__wakaru_K9_initialized = true;
"use strict";
h(), F(), An = c.makeMessageType("aiserver.v1.CloudAgentRequestScope", ()=>[
        {
            no: 1,
            name: "personal",
            kind: "message",
            T: PSe,
            oneof: "scope"
        },
        {
            no: 2,
            name: "team_id",
            kind: "scalar",
            T: 5,
            oneof: "scope"
        }
    ]), PSe = c.makeMessageType("aiserver.v1.CloudAgentPersonalScope", []);

}
