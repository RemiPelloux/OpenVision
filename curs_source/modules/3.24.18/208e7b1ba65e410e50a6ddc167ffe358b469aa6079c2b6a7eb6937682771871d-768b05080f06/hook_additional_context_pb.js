import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
var Ky;
export { Ky };
var __wakaru_CP_initialized = false;
export function CP() {
if (__wakaru_CP_initialized) return;
__wakaru_CP_initialized = true;
"use strict";
h(), F(), Ky = c.makeMessageType("agent.v1.HookAdditionalContext", ()=>[
        {
            no: 1,
            name: "hook_event_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "content",
            kind: "scalar",
            T: 9
        }
    ]);

}
