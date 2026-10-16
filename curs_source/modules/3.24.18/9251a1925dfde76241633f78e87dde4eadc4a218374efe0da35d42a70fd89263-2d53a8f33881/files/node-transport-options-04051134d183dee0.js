import { init_compression2 } from "./compression.js";
import { init_http2_session_manager } from "./http2-session-manager.js";
import { init_node_universal_client } from "./node-universal-client.js";
import { init_protocol } from "../../../../../../_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/protocol/index.js";
var __wakaru_init_node_transport_options_initialized = false;
export function init_node_transport_options() {
if (__wakaru_init_node_transport_options_initialized) return;
__wakaru_init_node_transport_options_initialized = true;
init_protocol();
init_compression2();
init_node_universal_client();
init_http2_session_manager();

}
