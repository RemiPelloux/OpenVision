import { require_cjs2 } from "../../../../../../../_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/cjs/index.js";
import { require_code } from "../code.js";
import { require_connect_error } from "../connect-error.js";
import { require_interceptor } from "../interceptor.js";
import { require_normalize } from "./normalize.js";
var __wakaru_require_invoke_implementation_cache;
export function require_invoke_implementation() {
if (__wakaru_require_invoke_implementation_cache) return __wakaru_require_invoke_implementation_cache;
var exports2 = {};
__wakaru_require_invoke_implementation_cache = exports2;
"use strict";
var __await6 = exports2 && exports2.__await || function(v2) {
    return this instanceof __await6 ? (this.v = v2, this) : new __await6(v2);
};
var __asyncGenerator6 = exports2 && exports2.__asyncGenerator || function(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g2 = generator.apply(thisArg, _arguments || []), i, q2 = [];
    return i = {}, verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function awaitReturn(f2) {
        return function(v2) {
            return Promise.resolve(v2).then(f2, reject2);
        };
    }
    function verb(n, f2) {
        if (g2[n]) {
            i[n] = function(v2) {
                return new Promise(function(a, b2) {
                    q2.push([
                        n,
                        v2,
                        a,
                        b2
                    ]) > 1 || resume(n, v2);
                });
            };
            if (f2) i[n] = f2(i[n]);
        }
    }
    function resume(n, v2) {
        try {
            step(g2[n](v2));
        } catch (e) {
            settle(q2[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await6 ? Promise.resolve(r.value.v).then(fulfill, reject2) : settle(q2[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject2(value) {
        resume("throw", value);
    }
    function settle(f2, v2) {
        if (f2(v2), q2.shift(), q2.length) resume(q2[0][0], q2[0][1]);
    }
};
var __asyncValues6 = exports2 && exports2.__asyncValues || function(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m2 = o[Symbol.asyncIterator], i;
    return m2 ? m2.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v2) {
            return new Promise(function(resolve36, reject2) {
                v2 = o[n](v2), settle(resolve36, reject2, v2.done, v2.value);
            });
        };
    }
    function settle(resolve36, reject2, d, v2) {
        Promise.resolve(v2).then(function(v3) {
            resolve36({
                value: v3,
                done: d
            });
        }, reject2);
    }
};
var __asyncDelegator4 = exports2 && exports2.__asyncDelegator || function(o) {
    var i, p2;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    function verb(n, f2) {
        i[n] = o[n] ? function(v2) {
            return (p2 = !p2) ? {
                value: __await6(o[n](v2)),
                done: false
            } : f2 ? f2(v2) : v2;
        } : f2;
    }
};
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.invokeUnaryImplementation = invokeUnaryImplementation2;
exports2.transformInvokeImplementation = transformInvokeImplementation2;
var protobuf_1 = require_cjs2();
var connect_error_js_1 = require_connect_error();
var code_js_1 = require_code();
var normalize_js_1 = require_normalize();
var interceptor_js_1 = require_interceptor();
async function invokeUnaryImplementation2(spec, context2, input, interceptors) {
    const anyFn = async (req)=>{
        return {
            message: (0, normalize_js_1.normalize)(spec.method.O, await spec.impl(req.message, Object.assign(Object.assign({}, context2), {
                service: req.service,
                method: req.method,
                requestHeader: req.header,
                values: req.contextValues,
                signal: req.signal
            }))),
            stream: false,
            service: req.service,
            method: req.method,
            header: context2.responseHeader,
            trailer: context2.responseTrailer
        };
    };
    const next = (0, interceptor_js_1.applyInterceptors)(anyFn, interceptors);
    const { message } = await next({
        init: {
            method: context2.requestMethod
        },
        message: input,
        url: context2.url,
        signal: context2.signal,
        service: spec.service,
        method: spec.method,
        header: context2.requestHeader,
        contextValues: context2.values,
        stream: false
    });
    return message;
}
function transformInvokeImplementation2(spec, context2, interceptors) {
    switch(spec.kind){
        case protobuf_1.MethodKind.Unary:
            return function unary(input) {
                return __asyncGenerator6(this, arguments, function* unary_1() {
                    const inputIt = input[Symbol.asyncIterator]();
                    const input1 = yield __await6(inputIt.next());
                    if (input1.done === true) {
                        throw new connect_error_js_1.ConnectError("protocol error: missing input message for unary method", code_js_1.Code.Unimplemented);
                    }
                    const anyFn = async (req)=>{
                        return {
                            message: (0, normalize_js_1.normalize)(spec.method.O, await spec.impl(req.message, Object.assign(Object.assign({}, context2), {
                                service: req.service,
                                method: req.method,
                                requestHeader: req.header,
                                values: req.contextValues,
                                signal: req.signal
                            }))),
                            stream: false,
                            service: req.service,
                            method: req.method,
                            header: context2.responseHeader,
                            trailer: context2.responseTrailer
                        };
                    };
                    const next = (0, interceptor_js_1.applyInterceptors)(anyFn, interceptors);
                    const { message, header, trailer } = yield __await6(next({
                        init: {
                            method: context2.requestMethod
                        },
                        message: input1.value,
                        url: context2.url,
                        signal: context2.signal,
                        service: spec.service,
                        method: spec.method,
                        header: context2.requestHeader,
                        contextValues: context2.values,
                        stream: false
                    }));
                    copyHeaders2(header, context2.responseHeader);
                    copyHeaders2(trailer, context2.responseTrailer);
                    yield yield __await6(message);
                    const input2 = yield __await6(inputIt.next());
                    if (input2.done !== true) {
                        throw new connect_error_js_1.ConnectError("protocol error: received extra input message for unary method", code_js_1.Code.Unimplemented);
                    }
                });
            };
        case protobuf_1.MethodKind.ServerStreaming:
            {
                return function serverStreaming(input) {
                    return __asyncGenerator6(this, arguments, function* serverStreaming_1() {
                        const inputIt = input[Symbol.asyncIterator]();
                        const input1 = yield __await6(inputIt.next());
                        if (input1.done === true) {
                            throw new connect_error_js_1.ConnectError("protocol error: missing input message for server-streaming method", code_js_1.Code.Unimplemented);
                        }
                        const anyFn = async (req)=>{
                            return {
                                message: (0, normalize_js_1.normalizeIterable)(spec.method.O, spec.impl(req.message, Object.assign(Object.assign({}, context2), {
                                    service: req.service,
                                    method: req.method,
                                    requestHeader: req.header,
                                    values: req.contextValues,
                                    signal: req.signal
                                }))),
                                stream: true,
                                service: req.service,
                                method: req.method,
                                header: context2.responseHeader,
                                trailer: context2.responseTrailer
                            };
                        };
                        const next = (0, interceptor_js_1.applyInterceptors)(anyFn, interceptors);
                        const { message, header, trailer } = yield __await6(next({
                            init: {
                                method: context2.requestMethod
                            },
                            message: input1.value,
                            url: context2.url,
                            signal: context2.signal,
                            service: spec.service,
                            method: spec.method,
                            header: context2.requestHeader,
                            contextValues: context2.values,
                            stream: false
                        }));
                        copyHeaders2(header, context2.responseHeader);
                        copyHeaders2(trailer, context2.responseTrailer);
                        yield __await6(yield* __asyncDelegator4(__asyncValues6(message)));
                        const input2 = yield __await6(inputIt.next());
                        if (input2.done !== true) {
                            throw new connect_error_js_1.ConnectError("protocol error: received extra input message for server-streaming method", code_js_1.Code.Unimplemented);
                        }
                    });
                };
            }
        case protobuf_1.MethodKind.ClientStreaming:
            {
                return function clientStreaming(input) {
                    return __asyncGenerator6(this, arguments, function* clientStreaming_1() {
                        const anyFn = async (req)=>{
                            return {
                                message: (0, normalize_js_1.normalize)(spec.method.O, await spec.impl(req.message, Object.assign(Object.assign({}, context2), {
                                    service: req.service,
                                    method: req.method,
                                    requestHeader: req.header,
                                    values: req.contextValues,
                                    signal: req.signal
                                }))),
                                stream: false,
                                service: req.service,
                                method: req.method,
                                header: context2.responseHeader,
                                trailer: context2.responseTrailer
                            };
                        };
                        const next = (0, interceptor_js_1.applyInterceptors)(anyFn, interceptors);
                        const { message, header, trailer } = yield __await6(next({
                            init: {
                                method: context2.requestMethod
                            },
                            message: input,
                            url: context2.url,
                            signal: context2.signal,
                            service: spec.service,
                            method: spec.method,
                            header: context2.requestHeader,
                            contextValues: context2.values,
                            stream: true
                        }));
                        copyHeaders2(header, context2.responseHeader);
                        copyHeaders2(trailer, context2.responseTrailer);
                        yield yield __await6(message);
                    });
                };
            }
        case protobuf_1.MethodKind.BiDiStreaming:
            return function biDiStreaming(input) {
                return __asyncGenerator6(this, arguments, function* biDiStreaming_1() {
                    const anyFn = async (req)=>{
                        return {
                            message: (0, normalize_js_1.normalizeIterable)(spec.method.O, spec.impl(req.message, Object.assign(Object.assign({}, context2), {
                                service: req.service,
                                method: req.method,
                                requestHeader: req.header,
                                values: req.contextValues,
                                signal: req.signal
                            }))),
                            stream: true,
                            service: req.service,
                            method: req.method,
                            header: context2.responseHeader,
                            trailer: context2.responseTrailer
                        };
                    };
                    const next = (0, interceptor_js_1.applyInterceptors)(anyFn, interceptors);
                    const { message, header, trailer } = yield __await6(next({
                        init: {
                            method: context2.requestMethod
                        },
                        message: input,
                        url: context2.url,
                        signal: context2.signal,
                        service: spec.service,
                        method: spec.method,
                        header: context2.requestHeader,
                        contextValues: context2.values,
                        stream: true
                    }));
                    copyHeaders2(header, context2.responseHeader);
                    copyHeaders2(trailer, context2.responseTrailer);
                    yield __await6(yield* __asyncDelegator4(__asyncValues6(message)));
                });
            };
    }
}
function copyHeaders2(from2, to3) {
    if (from2 === to3) {
        return;
    }
    to3.forEach((_2, key)=>{
        to3.delete(key);
    });
    from2.forEach((value, key)=>{
        to3.set(key, value);
    });
}

return exports2;
}
