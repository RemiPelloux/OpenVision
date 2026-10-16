import { hg } from "./connect.js";
import { FHt } from "./errors.ts";
import { x } from "./tslib.es6.js";
import { hu } from "./utils_pb.js";
var XLd, ZLd, QLd, JLd, eNd, tNd, nNd;
export { JLd, QLd, XLd, ZLd, eNd, nNd, tNd };
var __wakaru_eoo_initialized = false;
export function eoo() {
if (__wakaru_eoo_initialized) return;
__wakaru_eoo_initialized = true;
"use strict";
x(), hu(), hg(), FHt(), XLd = [
    "alpn_failure",
    "poll_seqno_gap",
    "append_fatal",
    "http_464",
    "http_404_unimplemented",
    "socket_reset",
    "stream_closed_early",
    "idle_deadline",
    "stall",
    "other"
], ZLd = "cursorBidiAppendFatal", QLd = "ALPN protocol failed to negotiate", JLd = "Unexpected seqno", eNd = "http1_poll", tNd = /\bHTTP (\d{3})\b/, nNd = "unsupported content type null";

}
