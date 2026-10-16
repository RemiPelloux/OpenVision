import { init_errors2 } from "./errors.js";
import { init_transport_failure_kind } from "./transport-failure-kind.js";
var AGENT_RETRY_CAPS, AGENT_RETRY_TRANSPORT_CAP_IN_TEST, STALL_RETRY_BUDGET_MS, RETRY_BUDGET_BY_KIND;
export { AGENT_RETRY_CAPS, AGENT_RETRY_TRANSPORT_CAP_IN_TEST, RETRY_BUDGET_BY_KIND, STALL_RETRY_BUDGET_MS };
var __wakaru_init_retry_policy_initialized = false;
export function init_retry_policy() {
if (__wakaru_init_retry_policy_initialized) return;
__wakaru_init_retry_policy_initialized = true;
"use strict";
init_errors2();
init_transport_failure_kind();
AGENT_RETRY_CAPS = {
    serverCap: 3,
    transportCap: 10
};
AGENT_RETRY_TRANSPORT_CAP_IN_TEST = 2;
STALL_RETRY_BUDGET_MS = 3 * 60 * 1e3;
RETRY_BUDGET_BY_KIND = {
    alpn_failure: "server",
    poll_seqno_gap: "server",
    append_fatal: "by_signature",
    http_464: "server",
    http_404_unimplemented: "server",
    socket_reset: "transport",
    stream_closed_early: "server",
    idle_deadline: "server",
    stall: "transport",
    other: "server"
};

}
