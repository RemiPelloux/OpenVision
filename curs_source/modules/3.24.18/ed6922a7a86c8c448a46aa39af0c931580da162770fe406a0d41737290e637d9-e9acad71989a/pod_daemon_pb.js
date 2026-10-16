import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var u3d;
export { u3d };
var __wakaru_d3d_initialized = false;
export function d3d() {
if (__wakaru_d3d_initialized) return;
__wakaru_d3d_initialized = true;
"use strict";
x(), bi(), u3d = k.makeEnum("anyrun.v1.RestartReason", [
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
