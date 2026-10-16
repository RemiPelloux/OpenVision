import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var PTm;
export { PTm };
var __wakaru_MTm_initialized = false;
export function MTm() {
if (__wakaru_MTm_initialized) return;
__wakaru_MTm_initialized = true;
"use strict";
E(), hr(), PTm = x.makeEnum("anyrun.v1.RestartReason", [
    {
        no: 0,
        name: "RESTART_REASON_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "RESTART_REASON_PROCESS_EXITED",
        localName: "PROCESS_EXITED"
    },
    {
        no: 2,
        name: "RESTART_REASON_HEALTH_CHECK_FAILED",
        localName: "HEALTH_CHECK_FAILED"
    }
]);

}
