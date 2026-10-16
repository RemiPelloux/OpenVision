import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var f4t;
export { f4t };
var __wakaru_jei_initialized = false;
export function jei() {
if (__wakaru_jei_initialized) return;
__wakaru_jei_initialized = true;
"use strict";
E(), hr(), f4t = x.makeMessageType("agent.v1.HookAdditionalContext", ()=>[
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
