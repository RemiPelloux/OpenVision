var import_node_fs43, import_promises54, import_node_net3, import_node_path98, UNIX_SOCKET_MODE, UNIX_SOCKET_PARENT_MODE;
export { UNIX_SOCKET_MODE, UNIX_SOCKET_PARENT_MODE, import_node_fs43, import_node_net3, import_node_path98, import_promises54 };
var __wakaru_init_unix_socket_initialized = false;
export function init_unix_socket() {
if (__wakaru_init_unix_socket_initialized) return;
__wakaru_init_unix_socket_initialized = true;
"use strict";
import_node_fs43 = require("node:fs");
import_promises54 = require("node:fs/promises");
import_node_net3 = require("node:net");
import_node_path98 = require("node:path");
UNIX_SOCKET_MODE = 384;
UNIX_SOCKET_PARENT_MODE = 448;

}
