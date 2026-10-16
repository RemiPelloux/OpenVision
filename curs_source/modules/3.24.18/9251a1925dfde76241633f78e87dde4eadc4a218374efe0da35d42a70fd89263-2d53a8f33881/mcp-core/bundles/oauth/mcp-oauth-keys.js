import { init_base64url } from "./base64url.js";
import { init_mcp_url_utils } from "../transport/mcp-url-utils.js";
var __wakaru_init_mcp_oauth_keys_initialized = false;
export function init_mcp_oauth_keys() {
if (__wakaru_init_mcp_oauth_keys_initialized) return;
__wakaru_init_mcp_oauth_keys_initialized = true;
"use strict";
init_mcp_url_utils();
init_base64url();
init_base64url();

}
