import { $tf, JCl } from "./async-update.ts";
import { Bgs } from "./fault-facet.ts";
import { Htf, Wtf } from "./response-cancel.ts";
import { KPn, cPi } from "./seeded-nudge.ts";
import { E } from "./tslib.es6.js";
var Ytf, Xtf, Ztf, Qtf, eTl, tTl, Jtf, enf, tnf;
export { Jtf, Qtf, Xtf, Ytf, Ztf, eTl, enf, tTl, tnf };
var __wakaru_uPi_initialized = false;
export function uPi() {
if (__wakaru_uPi_initialized) return;
__wakaru_uPi_initialized = true;
"use strict";
E(), JCl(), Bgs(), Wtf(), cPi(), Ytf = [
    "invalid_request_error",
    "server_error",
    "authentication_error",
    "rate_limit_error"
], Xtf = [
    "internal_error",
    "async_not_enabled",
    "invalid_request_error",
    "missing_tool_call_results"
], Ztf = [
    "1008",
    "1006",
    "1011",
    "1000"
], Qtf = {
    "session-ready": !0,
    "conversation-created": !0,
    audio: !0,
    transcript: !0,
    truncation: !0,
    "assistant-delta": !0,
    tool: !0,
    "response-created": !0,
    "response-ended": !0,
    "speech-started": !0,
    "speech-stopped": !0,
    error: !0,
    other: !0
}, eTl = Object.keys(Qtf), tTl = [
    "session.update",
    "input_audio_buffer.append",
    "conversation.item.create",
    "conversation.item.truncate",
    "response.create",
    "response.cancel",
    "async_update.add"
], Jtf = [
    "error",
    "close"
], enf = [
    "running",
    "suspended",
    "closed",
    "interrupted"
], tnf = [
    [
        `${$tf.EVENT_ID_PREFIX}-`,
        "async_update_add"
    ],
    [
        `${KPn.CALL_ID_PREFIX}-`,
        "async_update_add"
    ],
    [
        Htf.EVENT_ID_PREFIX,
        "response_cancel"
    ]
];

}
