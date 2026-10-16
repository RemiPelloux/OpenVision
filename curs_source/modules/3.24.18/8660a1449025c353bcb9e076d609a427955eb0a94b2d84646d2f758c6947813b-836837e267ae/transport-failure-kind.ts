import { dp } from "./connect.js";
import { ETn } from "./errors.ts";
import { E } from "./tslib.es6.js";
import { Hu } from "./utils_pb.js";
var bkm, ykm, Skm, kkm, wkm, Ckm, Tkm;
export { Ckm, Skm, Tkm, bkm, kkm, wkm, ykm };
var __wakaru_gUa_initialized = false;
export function gUa() {
if (__wakaru_gUa_initialized) return;
__wakaru_gUa_initialized = true;
"use strict";
E(), Hu(), dp(), ETn(), bkm = [
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
], ykm = "cursorBidiAppendFatal", Skm = "ALPN protocol failed to negotiate", kkm = "Unexpected seqno", wkm = "http1_poll", Ckm = /\bHTTP (\d{3})\b/, Tkm = "unsupported content type null";

}
