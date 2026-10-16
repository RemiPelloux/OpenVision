import { __toESM } from "../../../../../agent-host/dist/storage/sqlite-store.js";
import { init_common9 } from "../../common.js";
import { init_utils_pb2 } from "../../../../../proto/dist/generated/aiserver/v1/utils_pb.js";
var import_node_path90;
export { import_node_path90 };
var __wakaru_init_contextualize_initialized = false;
export function init_contextualize() {
if (__wakaru_init_contextualize_initialized) return;
__wakaru_init_contextualize_initialized = true;
"use strict";
import_node_path90 = __toESM(require("node:path"), 1);
init_utils_pb2();
init_common9();

}
