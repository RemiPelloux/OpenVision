import { require_any_client } from "./any-client.js";
import { require_callback_client } from "./callback-client.js";
import { require_code } from "./code.js";
import { require_connect_error } from "./connect-error.js";
import { require_context_values } from "./context-values.js";
import { require_cors } from "./cors.js";
import { require_http_headers } from "./http-headers.js";
import { require_implementation } from "./implementation.js";
import { require_promise_client } from "./promise-client.js";
import { require_router_transport } from "./router-transport.js";
import { require_router } from "./router.js";
var __wakaru_require_cjs3_cache;
export function require_cjs3() {
if (__wakaru_require_cjs3_cache) return __wakaru_require_cjs3_cache;
var exports2 = {};
__wakaru_require_cjs3_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.createRouterTransport = exports2.createMethodImplSpec = exports2.createServiceImplSpec = exports2.makeAnyClient = exports2.createContextValues = exports2.createContextKey = exports2.cors = exports2.createHandlerContext = exports2.createConnectRouter = exports2.createPromiseClient = exports2.createClient = exports2.createCallbackClient = exports2.appendHeaders = exports2.decodeBinaryHeader = exports2.encodeBinaryHeader = exports2.Code = exports2.ConnectError = void 0;
var connect_error_js_1 = require_connect_error();
Object.defineProperty(exports2, "ConnectError", {
    enumerable: true,
    get: function() {
        return connect_error_js_1.ConnectError;
    }
});
var code_js_1 = require_code();
Object.defineProperty(exports2, "Code", {
    enumerable: true,
    get: function() {
        return code_js_1.Code;
    }
});
var http_headers_js_1 = require_http_headers();
Object.defineProperty(exports2, "encodeBinaryHeader", {
    enumerable: true,
    get: function() {
        return http_headers_js_1.encodeBinaryHeader;
    }
});
Object.defineProperty(exports2, "decodeBinaryHeader", {
    enumerable: true,
    get: function() {
        return http_headers_js_1.decodeBinaryHeader;
    }
});
Object.defineProperty(exports2, "appendHeaders", {
    enumerable: true,
    get: function() {
        return http_headers_js_1.appendHeaders;
    }
});
var callback_client_js_1 = require_callback_client();
Object.defineProperty(exports2, "createCallbackClient", {
    enumerable: true,
    get: function() {
        return callback_client_js_1.createCallbackClient;
    }
});
var promise_client_js_1 = require_promise_client();
Object.defineProperty(exports2, "createClient", {
    enumerable: true,
    get: function() {
        return promise_client_js_1.createClient;
    }
});
Object.defineProperty(exports2, "createPromiseClient", {
    enumerable: true,
    get: function() {
        return promise_client_js_1.createPromiseClient;
    }
});
var router_js_1 = require_router();
Object.defineProperty(exports2, "createConnectRouter", {
    enumerable: true,
    get: function() {
        return router_js_1.createConnectRouter;
    }
});
var implementation_js_1 = require_implementation();
Object.defineProperty(exports2, "createHandlerContext", {
    enumerable: true,
    get: function() {
        return implementation_js_1.createHandlerContext;
    }
});
var cors_js_1 = require_cors();
Object.defineProperty(exports2, "cors", {
    enumerable: true,
    get: function() {
        return cors_js_1.cors;
    }
});
var context_values_js_1 = require_context_values();
Object.defineProperty(exports2, "createContextKey", {
    enumerable: true,
    get: function() {
        return context_values_js_1.createContextKey;
    }
});
Object.defineProperty(exports2, "createContextValues", {
    enumerable: true,
    get: function() {
        return context_values_js_1.createContextValues;
    }
});
var any_client_js_1 = require_any_client();
Object.defineProperty(exports2, "makeAnyClient", {
    enumerable: true,
    get: function() {
        return any_client_js_1.makeAnyClient;
    }
});
var implementation_js_2 = require_implementation();
Object.defineProperty(exports2, "createServiceImplSpec", {
    enumerable: true,
    get: function() {
        return implementation_js_2.createServiceImplSpec;
    }
});
Object.defineProperty(exports2, "createMethodImplSpec", {
    enumerable: true,
    get: function() {
        return implementation_js_2.createMethodImplSpec;
    }
});
var router_transport_js_1 = require_router_transport();
Object.defineProperty(exports2, "createRouterTransport", {
    enumerable: true,
    get: function() {
        return router_transport_js_1.createRouterTransport;
    }
});

return exports2;
}
