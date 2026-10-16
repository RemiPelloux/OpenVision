import { require_transport } from "./protocol-connect/transport.js";
import { require_universal_handler_client } from "./protocol/universal-handler-client.js";
import { require_router } from "./router.js";
var __wakaru_require_router_transport_cache;
export function require_router_transport() {
if (__wakaru_require_router_transport_cache) return __wakaru_require_router_transport_cache;
var exports2 = {};
__wakaru_require_router_transport_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.createRouterTransport = createRouterTransport;
var transport_js_1 = require_transport();
var universal_handler_client_js_1 = require_universal_handler_client();
var router_js_1 = require_router();
function createRouterTransport(routes, options2) {
    var _a18, _b2;
    const router = (0, router_js_1.createConnectRouter)(Object.assign(Object.assign({}, (_a18 = options2 === null || options2 === void 0 ? void 0 : options2.router) !== null && _a18 !== void 0 ? _a18 : {}), {
        connect: true
    }));
    routes(router);
    return (0, transport_js_1.createTransport)(Object.assign({
        httpClient: (0, universal_handler_client_js_1.createUniversalHandlerClient)(router.handlers),
        baseUrl: "https://in-memory",
        useBinaryFormat: true,
        interceptors: [],
        acceptCompression: [],
        sendCompression: null,
        compressMinBytes: Number.MAX_SAFE_INTEGER,
        readMaxBytes: Number.MAX_SAFE_INTEGER,
        writeMaxBytes: Number.MAX_SAFE_INTEGER
    }, (_b2 = options2 === null || options2 === void 0 ? void 0 : options2.transport) !== null && _b2 !== void 0 ? _b2 : {}));
}

return exports2;
}
