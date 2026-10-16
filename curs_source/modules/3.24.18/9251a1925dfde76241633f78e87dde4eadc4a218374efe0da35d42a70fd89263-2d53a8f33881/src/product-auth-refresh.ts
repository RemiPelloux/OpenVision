import { registerImplementedDaemonCapability } from "../daemon_metrics_exports.js";
import { DAEMON_CAPABILITY_AUTH_REFRESH_V1, init_capabilities2 } from "./capabilities.ts";
var PRODUCT_AUTH_REFRESH_REASON, CONNECT_UNAUTHENTICATED;
export { CONNECT_UNAUTHENTICATED, PRODUCT_AUTH_REFRESH_REASON };
var __wakaru_init_product_auth_refresh_initialized = false;
export function init_product_auth_refresh() {
if (__wakaru_init_product_auth_refresh_initialized) return;
__wakaru_init_product_auth_refresh_initialized = true;
"use strict";
init_capabilities2();
registerImplementedDaemonCapability(DAEMON_CAPABILITY_AUTH_REFRESH_V1);
PRODUCT_AUTH_REFRESH_REASON = "inference_unauthorized";
CONNECT_UNAUTHENTICATED = 16;

}
