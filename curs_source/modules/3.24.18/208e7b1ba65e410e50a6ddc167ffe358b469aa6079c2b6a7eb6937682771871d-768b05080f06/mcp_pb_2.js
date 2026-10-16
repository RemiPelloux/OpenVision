import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
var uP;
export { uP };
var __wakaru_mP_initialized = false;
export function mP() {
if (__wakaru_mP_initialized) return;
__wakaru_mP_initialized = true;
"use strict";
h(), F(), uP = c.makeMessageType("aiserver.v1.McpOAuthStoredClientInfo", ()=>[
        {
            no: 1,
            name: "client_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "client_secret",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "redirect_uris",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]);

}
