import { init_dist3 } from "../../utils/dist/index.js";
var import_node_os22, import_node_path68, HASH_LENGTH, MAX_SOCKET_PATH_LENGTH, WINDOWS_SOCK_LENGTH, MAX_PREFIX_LENGTH_BEFORE_HASH, MAX_FULL_PATH_LENGTH;
export { HASH_LENGTH, MAX_FULL_PATH_LENGTH, MAX_PREFIX_LENGTH_BEFORE_HASH, MAX_SOCKET_PATH_LENGTH, WINDOWS_SOCK_LENGTH, import_node_os22, import_node_path68 };
var __wakaru_init_paths_initialized = false;
export function init_paths() {
if (__wakaru_init_paths_initialized) return;
__wakaru_init_paths_initialized = true;
"use strict";
import_node_os22 = require("node:os");
import_node_path68 = require("node:path");
init_dist3();
HASH_LENGTH = 7;
MAX_SOCKET_PATH_LENGTH = 104;
WINDOWS_SOCK_LENGTH = "worker.sock".length;
MAX_PREFIX_LENGTH_BEFORE_HASH = MAX_SOCKET_PATH_LENGTH - 1 - HASH_LENGTH - 1 - WINDOWS_SOCK_LENGTH;
MAX_FULL_PATH_LENGTH = MAX_SOCKET_PATH_LENGTH - WINDOWS_SOCK_LENGTH - 1;

}
