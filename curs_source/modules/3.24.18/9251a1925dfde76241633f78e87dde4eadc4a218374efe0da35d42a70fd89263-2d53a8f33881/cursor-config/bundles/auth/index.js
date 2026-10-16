import { init_login } from "./login.js";
import { init_token_refresh_policy } from "./token-refresh-policy.js";
var __wakaru_init_auth_initialized = false;
export function init_auth() {
if (__wakaru_init_auth_initialized) return;
__wakaru_init_auth_initialized = true;
"use strict";
init_login();
init_token_refresh_policy();

}
