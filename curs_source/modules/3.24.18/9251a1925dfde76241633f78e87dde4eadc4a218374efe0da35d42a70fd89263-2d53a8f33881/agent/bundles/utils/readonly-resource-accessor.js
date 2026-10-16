import { init_dist8 } from "../../../agent-exec/dist/index.js";
import { __toESM } from "../../../agent-host/dist/storage/sqlite-store.js";
import { init_delete_exec_pb } from "../../../proto/dist/generated/agent/v1/delete_exec_pb.js";
import { init_write_exec_pb } from "../../../proto/dist/generated/agent/v1/write_exec_pb.js";
var nodePath;
export { nodePath };
var __wakaru_init_readonly_resource_accessor2_initialized = false;
export function init_readonly_resource_accessor2() {
if (__wakaru_init_readonly_resource_accessor2_initialized) return;
__wakaru_init_readonly_resource_accessor2_initialized = true;
"use strict";
nodePath = __toESM(require("node:path"), 1);
init_dist8();
init_delete_exec_pb();
init_write_exec_pb();

}
