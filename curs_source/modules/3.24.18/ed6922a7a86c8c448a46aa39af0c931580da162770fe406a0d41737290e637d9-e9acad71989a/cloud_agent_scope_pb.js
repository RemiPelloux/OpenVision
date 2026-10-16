import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var j3, ISd;
export { ISd, j3 };
var __wakaru_jno_initialized = false;
export function jno() {
if (__wakaru_jno_initialized) return;
__wakaru_jno_initialized = true;
"use strict";
x(), bi(), j3 = k.makeMessageType("aiserver.v1.CloudAgentRequestScope", ()=>[
        {
            no: 1,
            name: "personal",
            kind: "message",
            T: ISd,
            oneof: "scope"
        },
        {
            no: 2,
            name: "team_id",
            kind: "scalar",
            T: 5,
            oneof: "scope"
        }
    ]), ISd = k.makeMessageType("aiserver.v1.CloudAgentPersonalScope", []);

}
