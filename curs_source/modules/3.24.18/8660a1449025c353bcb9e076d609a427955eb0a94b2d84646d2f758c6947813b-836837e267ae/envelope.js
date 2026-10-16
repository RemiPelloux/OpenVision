import { $xe } from "./carrier.js";
import { kOe } from "./dsn.js";
import { EFt } from "./normalize.js";
import { E } from "./tslib.es6.js";
import { r7 } from "./worldwide.js";
var yWu;
export { yWu };
var __wakaru__ke_initialized = false;
export function _ke() {
if (__wakaru__ke_initialized) return;
__wakaru__ke_initialized = true;
"use strict";
E(), $xe(), kOe(), EFt(), r7(), yWu = {
    session: "session",
    sessions: "session",
    attachment: "attachment",
    transaction: "transaction",
    event: "error",
    client_report: "internal",
    user_report: "default",
    profile: "profile",
    profile_chunk: "profile",
    replay_event: "replay",
    replay_recording: "replay",
    check_in: "monitor",
    feedback: "feedback",
    span: "span",
    raw_security: "security",
    log: "log_item",
    metric: "metric",
    trace_metric: "metric"
};

}
