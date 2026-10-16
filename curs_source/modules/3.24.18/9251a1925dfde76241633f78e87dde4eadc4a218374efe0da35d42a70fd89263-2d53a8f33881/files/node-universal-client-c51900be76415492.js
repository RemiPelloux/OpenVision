import { __toESM } from "../../../../../../../../agent-host/dist/storage/sqlite-store.js";
import { init_http2_session_manager } from "./http2-session-manager.js";
import { init_node_error } from "./node-error.js";
import { init_node_universal_header } from "./node-universal-header.js";
import { init_esm3 } from "../../../../../../_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/index.js";
import { init_protocol } from "../../../../../../_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/protocol/index.js";
var http, https;
export { http, https };
var __wakaru_init_node_universal_client_initialized = false;
export function init_node_universal_client() {
if (__wakaru_init_node_universal_client_initialized) return;
__wakaru_init_node_universal_client_initialized = true;
http = __toESM(require("http"), 1);
https = __toESM(require("https"), 1);
init_esm3();
init_node_universal_header();
init_node_error();
init_protocol();
init_http2_session_manager();

}
