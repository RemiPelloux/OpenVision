import { init_daemon_auth } from "./daemon-auth.ts";
var __wakaru_init_credential_manager_initialized = false;
export function init_credential_manager() {
if (__wakaru_init_credential_manager_initialized) return;
__wakaru_init_credential_manager_initialized = true;
"use strict";
init_daemon_auth();

}
