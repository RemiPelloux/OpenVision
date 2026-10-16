import { init_mac_executor_actions } from "./mac-executor-actions.js";
import { init_mac_rpc_client } from "./mac-rpc-client.js";
var __wakaru_init_mac_remote_executor_initialized = false;
export function init_mac_remote_executor() {
if (__wakaru_init_mac_remote_executor_initialized) return;
__wakaru_init_mac_remote_executor_initialized = true;
"use strict";
init_mac_executor_actions();
init_mac_rpc_client();

}
