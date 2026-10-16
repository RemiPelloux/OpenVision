import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var ybt;
export { ybt };
var __wakaru_Vxn_initialized = false;
export function Vxn() {
if (__wakaru_Vxn_initialized) return;
__wakaru_Vxn_initialized = true;
"use strict";
x(), bi(), ybt = k.makeMessageType("agent.v1.HookAdditionalContext", ()=>[
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
