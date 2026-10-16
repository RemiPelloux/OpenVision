import { init_pty_host_service_redacted } from "./pty_host_service_redacted.js";
import { init_dist27 } from "../../../../../redaction/dist/index.js";
var __wakaru_init_tmux_session_service_redacted_initialized = false;
export function init_tmux_session_service_redacted() {
if (__wakaru_init_tmux_session_service_redacted_initialized) return;
__wakaru_init_tmux_session_service_redacted_initialized = true;
"use strict";
init_dist27();
init_pty_host_service_redacted();

}
