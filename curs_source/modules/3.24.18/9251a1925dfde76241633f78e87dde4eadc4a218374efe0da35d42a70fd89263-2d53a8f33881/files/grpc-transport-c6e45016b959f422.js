import { init_node_transport_options } from "./node-transport-options.js";
var __wakaru_init_grpc_transport_initialized = false;
export function init_grpc_transport() {
if (__wakaru_init_grpc_transport_initialized) return;
__wakaru_init_grpc_transport_initialized = true;
init_node_transport_options();

}
