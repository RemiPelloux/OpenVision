import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
var zke;
export { zke };
var __wakaru_Yke_initialized = false;
export function Yke() {
if (__wakaru_Yke_initialized) return;
__wakaru_Yke_initialized = true;
"use strict";
h(), F(), zke = c.makeEnum("anyrun.v1.RestartReason", [
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
