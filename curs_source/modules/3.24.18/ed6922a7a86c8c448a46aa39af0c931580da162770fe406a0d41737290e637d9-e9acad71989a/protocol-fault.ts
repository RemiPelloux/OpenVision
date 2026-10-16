import { BMo, x6h } from "./async-update.ts";
import { rrr } from "./fault-facet.ts";
import { A6h, I6h } from "./response-cancel.ts";
import { Tzt, e9n } from "./seeded-nudge.ts";
import { x } from "./tslib.es6.js";
var N6h, O6h, F6h, B6h, UMo, $Mo, U6h, $6h, H6h;
export { $6h, $Mo, B6h, F6h, H6h, N6h, O6h, U6h, UMo };
var __wakaru_t9n_initialized = false;
export function t9n() {
if (__wakaru_t9n_initialized) return;
__wakaru_t9n_initialized = true;
"use strict";
x(), BMo(), rrr(), A6h(), e9n(), N6h = [
    "invalid_request_error",
    "server_error",
    "authentication_error",
    "rate_limit_error"
], O6h = [
    "internal_error",
    "async_not_enabled",
    "invalid_request_error",
    "missing_tool_call_results"
], F6h = [
    "1008",
    "1006",
    "1011",
    "1000"
], B6h = {
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
}, UMo = Object.keys(B6h), $Mo = [
    "session.update",
    "input_audio_buffer.append",
    "conversation.item.create",
    "conversation.item.truncate",
    "response.create",
    "response.cancel",
    "async_update.add"
], U6h = [
    "error",
    "close"
], $6h = [
    "running",
    "suspended",
    "closed",
    "interrupted"
], H6h = [
    [
        `${x6h.EVENT_ID_PREFIX}-`,
        "async_update_add"
    ],
    [
        `${Tzt.CALL_ID_PREFIX}-`,
        "async_update_add"
    ],
    [
        I6h.EVENT_ID_PREFIX,
        "response_cancel"
    ]
];

}
