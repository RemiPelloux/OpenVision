import { require_node_transport_options } from "./node-transport-options.js";
import { require_protocol_grpc_web } from "../../../../../../_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/cjs/protocol-grpc-web/index.js";
var __wakaru_require_grpc_web_transport_cache;
export function require_grpc_web_transport() {
if (__wakaru_require_grpc_web_transport_cache) return __wakaru_require_grpc_web_transport_cache;
var exports2 = {};
__wakaru_require_grpc_web_transport_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.createGrpcWebTransport = createGrpcWebTransport2;
var protocol_grpc_web_1 = require_protocol_grpc_web();
var node_transport_options_js_1 = require_node_transport_options();
function createGrpcWebTransport2(options2) {
    return (0, protocol_grpc_web_1.createTransport)((0, node_transport_options_js_1.validateNodeTransportOptions)(options2));
}

return exports2;
}
