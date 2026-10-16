import { init_compression2 } from "./compression.js";
import { init_connect_node_adapter } from "./connect-node-adapter.js";
import { init_connect_transport } from "./connect-transport.js";
import { init_grpc_transport } from "./grpc-transport.js";
import { init_grpc_web_transport } from "./grpc-web-transport.js";
import { init_http2_session_manager } from "./http2-session-manager.js";
import { init_node_headers_polyfill } from "./node-headers-polyfill.js";
import { init_node_universal_client } from "./node-universal-client.js";
import { init_node_universal_handler } from "./node-universal-handler.js";
var __wakaru_init_esm4_initialized = false;
export function init_esm4() {
if (__wakaru_init_esm4_initialized) return;
__wakaru_init_esm4_initialized = true;
init_node_headers_polyfill();
init_grpc_web_transport();
init_grpc_transport();
init_connect_transport();
init_compression2();
init_connect_node_adapter();
init_node_universal_handler();
init_node_universal_client();
init_http2_session_manager();

}
