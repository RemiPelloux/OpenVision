import { init_errors2 } from "./errors.js";
import { init_esm3 } from "../../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/index.js";
import { init_utils_pb2 } from "../../proto/dist/generated/aiserver/v1/utils_pb.js";
var TRANSPORT_FAILURE_KINDS, BIDI_APPEND_FATAL_MARKER, ALPN_FAILURE_FRAGMENT, POLL_SEQNO_FRAGMENT, POLL_TRANSPORT_MODE, HTTP_STATUS_MESSAGE, HEADERLESS_RESPONSE_FRAGMENT;
export { ALPN_FAILURE_FRAGMENT, BIDI_APPEND_FATAL_MARKER, HEADERLESS_RESPONSE_FRAGMENT, HTTP_STATUS_MESSAGE, POLL_SEQNO_FRAGMENT, POLL_TRANSPORT_MODE, TRANSPORT_FAILURE_KINDS };
var __wakaru_init_transport_failure_kind_initialized = false;
export function init_transport_failure_kind() {
if (__wakaru_init_transport_failure_kind_initialized) return;
__wakaru_init_transport_failure_kind_initialized = true;
"use strict";
init_utils_pb2();
init_esm3();
init_errors2();
TRANSPORT_FAILURE_KINDS = [
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
];
BIDI_APPEND_FATAL_MARKER = "cursorBidiAppendFatal";
ALPN_FAILURE_FRAGMENT = "ALPN protocol failed to negotiate";
POLL_SEQNO_FRAGMENT = "Unexpected seqno";
POLL_TRANSPORT_MODE = "http1_poll";
HTTP_STATUS_MESSAGE = /\bHTTP (\d{3})\b/;
HEADERLESS_RESPONSE_FRAGMENT = "unsupported content type null";

}
