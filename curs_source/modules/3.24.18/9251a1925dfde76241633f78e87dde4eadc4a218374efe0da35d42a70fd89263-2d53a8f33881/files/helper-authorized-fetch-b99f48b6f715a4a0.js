import { init_api_key_helper } from "./api-key-helper.js";
var __wakaru_init_helper_authorized_fetch_initialized = false;
export function init_helper_authorized_fetch() {
if (__wakaru_init_helper_authorized_fetch_initialized) return;
__wakaru_init_helper_authorized_fetch_initialized = true;
"use strict";
init_api_key_helper();

}
