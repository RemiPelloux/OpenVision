import { init_runtime } from "../agent-host/dist/runtime.js";
import { init_storage } from "../agent-host/dist/storage.js";
var SESSION_ALREADY_EXISTS_SNIPPET, SESSION_NOT_FOUND_SNIPPET;
export { SESSION_ALREADY_EXISTS_SNIPPET, SESSION_NOT_FOUND_SNIPPET };
var __wakaru_init_session_persistence_initialized = false;
export function init_session_persistence() {
if (__wakaru_init_session_persistence_initialized) return;
__wakaru_init_session_persistence_initialized = true;
"use strict";
init_runtime();
init_storage();
SESSION_ALREADY_EXISTS_SNIPPET = "Agent host session already exists:";
SESSION_NOT_FOUND_SNIPPET = "Agent host session not found:";

}
