import { FHt } from "./errors.ts";
import { eoo } from "./transport-failure-kind.ts";
import { x } from "./tslib.es6.js";
var rNd, sNd, oNd, aNd;
export { aNd, oNd, rNd, sNd };
var __wakaru_cNd_initialized = false;
export function cNd() {
if (__wakaru_cNd_initialized) return;
__wakaru_cNd_initialized = true;
"use strict";
x(), FHt(), eoo(), rNd = {
    serverCap: 3,
    transportCap: 10
}, sNd = 2, oNd = 180 * 1e3, aNd = {
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
