import { require_compression2 } from "./compression.js";
import { require_connect_node_adapter } from "./connect-node-adapter.js";
import { require_connect_transport } from "./connect-transport.js";
import { require_grpc_transport } from "./grpc-transport.js";
import { require_grpc_web_transport } from "./grpc-web-transport.js";
import { require_http2_session_manager } from "./http2-session-manager.js";
import { require_node_headers_polyfill } from "./node-headers-polyfill.js";
import { require_node_universal_client } from "./node-universal-client.js";
import { require_node_universal_handler } from "./node-universal-handler.js";
var __wakaru_require_cjs4_cache;
export function require_cjs4() {
if (__wakaru_require_cjs4_cache) return __wakaru_require_cjs4_cache;
var exports2 = {};
__wakaru_require_cjs4_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.Http2SessionManager = exports2.createNodeHttpClient = exports2.universalResponseToNodeResponse = exports2.universalRequestFromNodeRequest = exports2.connectNodeAdapter = exports2.compressionGzip = exports2.compressionBrotli = exports2.createConnectTransport = exports2.createGrpcTransport = exports2.createGrpcWebTransport = void 0;
require_node_headers_polyfill();
var grpc_web_transport_js_1 = require_grpc_web_transport();
Object.defineProperty(exports2, "createGrpcWebTransport", {
    enumerable: true,
    get: function() {
        return grpc_web_transport_js_1.createGrpcWebTransport;
    }
});
var grpc_transport_js_1 = require_grpc_transport();
Object.defineProperty(exports2, "createGrpcTransport", {
    enumerable: true,
    get: function() {
        return grpc_transport_js_1.createGrpcTransport;
    }
});
var connect_transport_js_1 = require_connect_transport();
Object.defineProperty(exports2, "createConnectTransport", {
    enumerable: true,
    get: function() {
        return connect_transport_js_1.createConnectTransport;
    }
});
var compression_js_1 = require_compression2();
Object.defineProperty(exports2, "compressionBrotli", {
    enumerable: true,
    get: function() {
        return compression_js_1.compressionBrotli;
    }
});
Object.defineProperty(exports2, "compressionGzip", {
    enumerable: true,
    get: function() {
        return compression_js_1.compressionGzip;
    }
});
var connect_node_adapter_js_1 = require_connect_node_adapter();
Object.defineProperty(exports2, "connectNodeAdapter", {
    enumerable: true,
    get: function() {
        return connect_node_adapter_js_1.connectNodeAdapter;
    }
});
var node_universal_handler_js_1 = require_node_universal_handler();
Object.defineProperty(exports2, "universalRequestFromNodeRequest", {
    enumerable: true,
    get: function() {
        return node_universal_handler_js_1.universalRequestFromNodeRequest;
    }
});
Object.defineProperty(exports2, "universalResponseToNodeResponse", {
    enumerable: true,
    get: function() {
        return node_universal_handler_js_1.universalResponseToNodeResponse;
    }
});
var node_universal_client_js_1 = require_node_universal_client();
Object.defineProperty(exports2, "createNodeHttpClient", {
    enumerable: true,
    get: function() {
        return node_universal_client_js_1.createNodeHttpClient;
    }
});
var http2_session_manager_js_1 = require_http2_session_manager();
Object.defineProperty(exports2, "Http2SessionManager", {
    enumerable: true,
    get: function() {
        return http2_session_manager_js_1.Http2SessionManager;
    }
});

return exports2;
}
