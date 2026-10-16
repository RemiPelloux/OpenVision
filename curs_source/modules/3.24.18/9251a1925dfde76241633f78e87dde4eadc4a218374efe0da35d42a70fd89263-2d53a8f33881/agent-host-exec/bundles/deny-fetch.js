import { init_fetch_exec_pb } from "../../proto/dist/generated/agent/v1/fetch_exec_pb.js";
var __wakaru_init_deny_fetch_initialized = false;
export function init_deny_fetch() {
if (__wakaru_init_deny_fetch_initialized) return;
__wakaru_init_deny_fetch_initialized = true;
"use strict";
init_fetch_exec_pb();

}
