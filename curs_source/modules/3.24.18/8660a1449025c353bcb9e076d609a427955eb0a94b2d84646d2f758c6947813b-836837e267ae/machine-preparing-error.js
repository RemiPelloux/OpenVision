import { dp } from "./connect.js";
import { E } from "./tslib.es6.js";
var Tgv, Egv;
export { Egv, Tgv };
var __wakaru_Igv_initialized = false;
export function Igv() {
if (__wakaru_Igv_initialized) return;
__wakaru_Igv_initialized = true;
"use strict";
E(), dp(), Tgv = new Set([
    "NO_POD_INFO_YET",
    "NO_VM_CONNECTION_INFO_YET",
    "EXEC_DAEMON_NOT_READY",
    "POD_REPLACEMENT_IN_PROGRESS"
]), Egv = /cursorServerUrlReason=([A-Z_]+)/;

}
