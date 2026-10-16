import { init_oauth_errors } from "../oauth/oauth-errors.js";
import { init_error_message_utils } from "../transport/error-message-utils.js";
import { init_reconnect_manager } from "../transport/reconnect-manager.js";
import { init_auth3 } from "../../../node_modules/.pnpm/_f57967f111cc31bce3ae8564d9ceaa93/node_modules/@modelcontextprotocol/sdk/dist/esm/client/auth.js";
import { init_errors6 } from "../../../node_modules/.pnpm/_f57967f111cc31bce3ae8564d9ceaa93/node_modules/@modelcontextprotocol/sdk/dist/esm/server/auth/errors.js";
var __wakaru_init_error_classification_initialized = false;
export function init_error_classification() {
if (__wakaru_init_error_classification_initialized) return;
__wakaru_init_error_classification_initialized = true;
"use strict";
init_auth3();
init_errors6();
init_oauth_errors();
init_error_message_utils();
init_reconnect_manager();

}
