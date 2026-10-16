var import_node_os3, import_node_path8, CURSOR_AGENTS_DIR_NAME, CURSOR_AGENTS_DEV_DIR_NAME, DAEMON_SOCKET_FILENAME;
export { CURSOR_AGENTS_DEV_DIR_NAME, CURSOR_AGENTS_DIR_NAME, DAEMON_SOCKET_FILENAME, import_node_os3, import_node_path8 };
var __wakaru_init_listen_initialized = false;
export function init_listen() {
if (__wakaru_init_listen_initialized) return;
__wakaru_init_listen_initialized = true;
"use strict";
import_node_os3 = require("node:os");
import_node_path8 = require("node:path");
CURSOR_AGENTS_DIR_NAME = ".cursor-agents";
CURSOR_AGENTS_DEV_DIR_NAME = ".cursor-agents-dev";
DAEMON_SOCKET_FILENAME = "daemon.sock";

}
