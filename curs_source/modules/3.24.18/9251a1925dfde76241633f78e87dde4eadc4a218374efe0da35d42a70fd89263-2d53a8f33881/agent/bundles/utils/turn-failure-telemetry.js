import { init_dist } from "../../../context/dist/index.js";
import { createKey } from "../../../entry_exports.js";
var BOOK_AT_ONCE, turnFailureTelemetrySinkKey;
export { BOOK_AT_ONCE, turnFailureTelemetrySinkKey };
var __wakaru_init_turn_failure_telemetry_initialized = false;
export function init_turn_failure_telemetry() {
if (__wakaru_init_turn_failure_telemetry_initialized) return;
__wakaru_init_turn_failure_telemetry_initialized = true;
"use strict";
init_dist();
BOOK_AT_ONCE = {
    book: (emit2)=>emit2()
};
turnFailureTelemetrySinkKey = createKey(Symbol.for("@anysphere/agent/turnFailureTelemetrySink"), BOOK_AT_ONCE);

}
