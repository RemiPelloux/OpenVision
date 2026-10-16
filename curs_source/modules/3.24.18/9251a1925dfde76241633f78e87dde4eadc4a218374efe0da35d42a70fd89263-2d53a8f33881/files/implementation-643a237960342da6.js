import { require_code } from "./code.js";
import { require_connect_error } from "./connect-error.js";
import { require_context_values } from "./context-values.js";
import { require_signals } from "./protocol/signals.js";
var __wakaru_require_implementation_cache;
export function require_implementation() {
if (__wakaru_require_implementation_cache) return __wakaru_require_implementation_cache;
var exports2 = {};
__wakaru_require_implementation_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.createHandlerContext = createHandlerContext2;
exports2.createMethodImplSpec = createMethodImplSpec2;
exports2.createServiceImplSpec = createServiceImplSpec2;
var connect_error_js_1 = require_connect_error();
var code_js_1 = require_code();
var signals_js_1 = require_signals();
var context_values_js_1 = require_context_values();
function createHandlerContext2(init) {
    var _a18;
    let timeoutMs;
    if (init.timeoutMs !== void 0) {
        const date4 = new Date(Date.now() + init.timeoutMs);
        timeoutMs = ()=>date4.getTime() - Date.now();
    } else {
        timeoutMs = ()=>void 0;
    }
    const deadline = (0, signals_js_1.createDeadlineSignal)(init.timeoutMs);
    const abortController = (0, signals_js_1.createLinkedAbortController)(deadline.signal, init.requestSignal, init.shutdownSignal);
    return Object.assign(Object.assign({}, init), {
        signal: abortController.signal,
        timeoutMs,
        requestHeader: new Headers(init.requestHeader),
        responseHeader: new Headers(init.responseHeader),
        responseTrailer: new Headers(init.responseTrailer),
        abort (reason) {
            deadline.cleanup();
            abortController.abort(reason);
        },
        values: (_a18 = init.contextValues) !== null && _a18 !== void 0 ? _a18 : (0, context_values_js_1.createContextValues)()
    });
}
function createMethodImplSpec2(service, method, impl) {
    return {
        kind: method.kind,
        service,
        method,
        impl
    };
}
function createServiceImplSpec2(service, impl) {
    const s3 = {
        service,
        methods: {}
    };
    for (const [localName, methodInfo] of Object.entries(service.methods)){
        let fn = impl[localName];
        if (typeof fn == "function") {
            fn = fn.bind(impl);
        } else {
            const message = `${service.typeName}.${methodInfo.name} is not implemented`;
            fn = function unimplemented() {
                throw new connect_error_js_1.ConnectError(message, code_js_1.Code.Unimplemented);
            };
        }
        s3.methods[localName] = createMethodImplSpec2(service, methodInfo, fn);
    }
    return s3;
}

return exports2;
}
