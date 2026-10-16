import { init_node_transport_options } from "./node-transport-options.js";
import { init_protocol_connect } from "../../../../../../_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/protocol-connect/index.js";
var __wakaru_init_connect_transport_initialized = false;
export function init_connect_transport() {
if (__wakaru_init_connect_transport_initialized) return;
__wakaru_init_connect_transport_initialized = true;
init_protocol_connect();
init_node_transport_options();

}
