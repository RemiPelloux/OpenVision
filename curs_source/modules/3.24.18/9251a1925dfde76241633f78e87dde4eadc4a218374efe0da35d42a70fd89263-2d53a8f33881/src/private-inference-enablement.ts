import { init_esm4 } from "../node_modules/.pnpm/_46b84b12e081161e2c23c10160f61a1d/node_modules/@connectrpc/connect-node/dist/esm/index.js";
import { init_esm3 } from "../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/index.js";
import { init_dashboard_connect } from "../proto/dist/generated/aiserver/v1/dashboard_connect.js";
import { init_dashboard_pb } from "../proto/dist/generated/aiserver/v1/dashboard_pb.js";
var DEFAULT_DAEMON_DASHBOARD_ENDPOINT;
export { DEFAULT_DAEMON_DASHBOARD_ENDPOINT };
var __wakaru_init_private_inference_enablement_initialized = false;
export function init_private_inference_enablement() {
if (__wakaru_init_private_inference_enablement_initialized) return;
__wakaru_init_private_inference_enablement_initialized = true;
"use strict";
init_dashboard_connect();
init_dashboard_pb();
init_esm3();
init_esm4();
DEFAULT_DAEMON_DASHBOARD_ENDPOINT = "https://api2.cursor.sh";

}
