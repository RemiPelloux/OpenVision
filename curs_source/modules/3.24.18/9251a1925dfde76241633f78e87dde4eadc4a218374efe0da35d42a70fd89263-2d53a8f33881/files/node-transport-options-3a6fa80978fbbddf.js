import { require_compression2 } from "./compression.js";
import { require_http2_session_manager } from "./http2-session-manager.js";
import { require_node_universal_client } from "./node-universal-client.js";
import { require_protocol } from "../../../../../../_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/cjs/protocol/index.js";
var __wakaru_require_node_transport_options_cache;
export function require_node_transport_options() {
if (__wakaru_require_node_transport_options_cache) return __wakaru_require_node_transport_options_cache;
var exports2 = {};
__wakaru_require_node_transport_options_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.validateNodeTransportOptions = validateNodeTransportOptions2;
var protocol_1 = require_protocol();
var compression_js_1 = require_compression2();
var node_universal_client_js_1 = require_node_universal_client();
var http2_session_manager_js_1 = require_http2_session_manager();
function validateNodeTransportOptions2(options2) {
    var _a18, _b2, _c, _d;
    let httpClient;
    if (options2.httpVersion == "2") {
        let sessionManager;
        if (options2.sessionManager) {
            sessionManager = options2.sessionManager;
        } else {
            sessionManager = new http2_session_manager_js_1.Http2SessionManager(options2.baseUrl, {
                pingIntervalMs: options2.pingIntervalMs,
                pingIdleConnection: options2.pingIdleConnection,
                pingTimeoutMs: options2.pingTimeoutMs,
                idleConnectionTimeoutMs: options2.idleConnectionTimeoutMs
            }, options2.nodeOptions);
        }
        httpClient = (0, node_universal_client_js_1.createNodeHttpClient)({
            httpVersion: "2",
            sessionProvider: ()=>sessionManager
        });
    } else {
        httpClient = (0, node_universal_client_js_1.createNodeHttpClient)({
            httpVersion: "1.1",
            nodeOptions: options2.nodeOptions
        });
    }
    return Object.assign(Object.assign(Object.assign({}, options2), {
        httpClient,
        useBinaryFormat: (_a18 = options2.useBinaryFormat) !== null && _a18 !== void 0 ? _a18 : true,
        interceptors: (_b2 = options2.interceptors) !== null && _b2 !== void 0 ? _b2 : [],
        sendCompression: (_c = options2.sendCompression) !== null && _c !== void 0 ? _c : null,
        acceptCompression: (_d = options2.acceptCompression) !== null && _d !== void 0 ? _d : [
            compression_js_1.compressionGzip,
            compression_js_1.compressionBrotli
        ]
    }), (0, protocol_1.validateReadWriteMaxBytes)(options2.readMaxBytes, options2.writeMaxBytes, options2.compressMinBytes));
}

return exports2;
}
