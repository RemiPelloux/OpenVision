import { ETn } from "./errors.ts";
import { gUa } from "./transport-failure-kind.ts";
import { E } from "./tslib.es6.js";
var Ikm, xkm, Akm, Rkm;
export { Akm, Ikm, Rkm, xkm };
var __wakaru_Pkm_initialized = false;
export function Pkm() {
if (__wakaru_Pkm_initialized) return;
__wakaru_Pkm_initialized = true;
"use strict";
E(), ETn(), gUa(), Ikm = {
    serverCap: 3,
    transportCap: 10
}, xkm = 2, Akm = 180 * 1e3, Rkm = {
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
