import { init_account_mcp_identifier } from "./account-mcp-identifier.js";
import { init_mcp_url_utils } from "../transport/mcp-url-utils.js";
var __wakaru_init_mcp_config_service_initialized = false;
export function init_mcp_config_service() {
if (__wakaru_init_mcp_config_service_initialized) return;
__wakaru_init_mcp_config_service_initialized = true;
"use strict";
init_mcp_url_utils();
init_account_mcp_identifier();

}
