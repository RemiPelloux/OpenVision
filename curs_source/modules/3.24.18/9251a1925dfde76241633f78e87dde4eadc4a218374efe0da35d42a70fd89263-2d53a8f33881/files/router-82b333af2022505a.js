import { require_code } from "./code.js";
import { require_connect_error } from "./connect-error.js";
import { require_implementation } from "./implementation.js";
import { require_handler_factory3 } from "./protocol-connect/handler-factory.js";
import { require_handler_factory } from "./protocol-grpc-web/handler-factory.js";
import { require_handler_factory2 } from "./protocol-grpc/handler-factory.js";
import { require_universal_handler } from "./protocol/universal-handler.js";
var __wakaru_require_router_cache;
export function require_router() {
if (__wakaru_require_router_cache) return __wakaru_require_router_cache;
var exports2 = {};
__wakaru_require_router_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.createConnectRouter = createConnectRouter2;
var connect_error_js_1 = require_connect_error();
var code_js_1 = require_code();
var implementation_js_1 = require_implementation();
var handler_factory_js_1 = require_handler_factory();
var handler_factory_js_2 = require_handler_factory2();
var handler_factory_js_3 = require_handler_factory3();
var universal_handler_js_1 = require_universal_handler();
function createConnectRouter2(routerOptions) {
    const base = whichProtocols2(routerOptions);
    const handlers = [];
    return {
        handlers,
        service (service, implementation, options2) {
            const { protocols } = whichProtocols2(options2, base);
            handlers.push(...(0, universal_handler_js_1.createUniversalServiceHandlers)((0, implementation_js_1.createServiceImplSpec)(service, implementation), protocols));
            return this;
        },
        rpc (serviceOrMethod, methodOrImpl, implementationOrOptions, options2) {
            let service;
            let method;
            let impl;
            let opt;
            if ("typeName" in serviceOrMethod) {
                service = serviceOrMethod;
                method = methodOrImpl;
                impl = implementationOrOptions;
                opt = options2;
            } else {
                service = Object.assign(Object.assign({}, serviceOrMethod.service), {
                    methods: {}
                });
                method = serviceOrMethod;
                impl = methodOrImpl;
                opt = implementationOrOptions;
            }
            const { protocols } = whichProtocols2(opt, base);
            handlers.push((0, universal_handler_js_1.createUniversalMethodHandler)((0, implementation_js_1.createMethodImplSpec)(service, method, impl), protocols));
            return this;
        }
    };
}
function whichProtocols2(options2, base) {
    if (base && !options2) {
        return base;
    }
    const opt = base ? Object.assign(Object.assign({}, (0, universal_handler_js_1.validateUniversalHandlerOptions)(base.options)), options2) : Object.assign(Object.assign({}, options2), (0, universal_handler_js_1.validateUniversalHandlerOptions)(options2 !== null && options2 !== void 0 ? options2 : {}));
    const protocols = [];
    if ((options2 === null || options2 === void 0 ? void 0 : options2.grpc) !== false) {
        protocols.push((0, handler_factory_js_2.createHandlerFactory)(opt));
    }
    if ((options2 === null || options2 === void 0 ? void 0 : options2.grpcWeb) !== false) {
        protocols.push((0, handler_factory_js_1.createHandlerFactory)(opt));
    }
    if ((options2 === null || options2 === void 0 ? void 0 : options2.connect) !== false) {
        protocols.push((0, handler_factory_js_3.createHandlerFactory)(opt));
    }
    if (protocols.length === 0) {
        throw new connect_error_js_1.ConnectError("cannot create handler, all protocols are disabled", code_js_1.Code.InvalidArgument);
    }
    return {
        options: opt,
        protocols
    };
}

return exports2;
}
