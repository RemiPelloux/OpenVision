import { tge } from "./carrier.js";
import { Kke } from "./dsn.js";
import { Rdt } from "./normalize.js";
import { x } from "./tslib.es6.js";
import { c3 } from "./worldwide.js";
var Jkc;
export { Jkc };
var __wakaru_Yce_initialized = false;
export function Yce() {
if (__wakaru_Yce_initialized) return;
__wakaru_Yce_initialized = true;
"use strict";
x(), tge(), Kke(), Rdt(), c3(), Jkc = {
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
