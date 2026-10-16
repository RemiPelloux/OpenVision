import { require_code } from "../code.js";
import { require_connect_error } from "../connect-error.js";
import { require_context_values } from "../context-values.js";
import { require_headers2 } from "./headers.js";
import { require_request_header3 } from "./request-header.js";
import { require_validate_response3 } from "./validate-response.js";
import { require_validate_trailer } from "./validate-trailer.js";
import { require_async_iterable } from "../protocol/async-iterable.js";
import { require_create_method_url } from "../protocol/create-method-url.js";
import { require_run_call } from "../protocol/run-call.js";
import { require_serialization } from "../protocol/serialization.js";
var __wakaru_require_transport3_cache;
export function require_transport3() {
if (__wakaru_require_transport3_cache) return __wakaru_require_transport3_cache;
var exports2 = {};
__wakaru_require_transport3_cache = exports2;
"use strict";
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
var __await6 = exports2 && exports2.__await || function(v2) {
    return this instanceof __await6 ? (this.v = v2, this) : new __await6(v2);
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
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.createTransport = createTransport2;
var request_header_js_1 = require_request_header3();
var validate_response_js_1 = require_validate_response3();
var validate_trailer_js_1 = require_validate_trailer();
var code_js_1 = require_code();
var connect_error_js_1 = require_connect_error();
var async_iterable_js_1 = require_async_iterable();
var create_method_url_js_1 = require_create_method_url();
var run_call_js_1 = require_run_call();
var serialization_js_1 = require_serialization();
var context_values_js_1 = require_context_values();
var headers_js_1 = require_headers2();
function createTransport2(opt) {
    return {
        async unary (service, method, signal, timeoutMs, header, message, contextValues) {
            const serialization = (0, serialization_js_1.createMethodSerializationLookup)(method, opt.binaryOptions, opt.jsonOptions, opt);
            timeoutMs = timeoutMs === void 0 ? opt.defaultTimeoutMs : timeoutMs <= 0 ? void 0 : timeoutMs;
            return await (0, run_call_js_1.runUnaryCall)({
                interceptors: opt.interceptors,
                signal,
                timeoutMs,
                req: {
                    stream: false,
                    service,
                    method,
                    url: (0, create_method_url_js_1.createMethodUrl)(opt.baseUrl, service, method),
                    init: {},
                    header: (0, request_header_js_1.requestHeaderWithCompression)(opt.useBinaryFormat, timeoutMs, header, opt.acceptCompression, opt.sendCompression),
                    contextValues: contextValues !== null && contextValues !== void 0 ? contextValues : (0, context_values_js_1.createContextValues)(),
                    message
                },
                next: async (req)=>{
                    const uRes = await opt.httpClient({
                        url: req.url,
                        method: "POST",
                        header: req.header,
                        signal: req.signal,
                        body: (0, async_iterable_js_1.pipe)((0, async_iterable_js_1.createAsyncIterable)([
                            req.message
                        ]), (0, async_iterable_js_1.transformSerializeEnvelope)(serialization.getI(opt.useBinaryFormat)), (0, async_iterable_js_1.transformCompressEnvelope)(opt.sendCompression, opt.compressMinBytes), (0, async_iterable_js_1.transformJoinEnvelopes)(), {
                            propagateDownStreamError: true
                        })
                    });
                    const { compression, headerError } = (0, validate_response_js_1.validateResponseWithCompression)(opt.acceptCompression, uRes.status, uRes.header);
                    const message2 = await (0, async_iterable_js_1.pipeTo)(uRes.body, (0, async_iterable_js_1.transformSplitEnvelope)(opt.readMaxBytes), (0, async_iterable_js_1.transformDecompressEnvelope)(compression !== null && compression !== void 0 ? compression : null, opt.readMaxBytes), (0, async_iterable_js_1.transformParseEnvelope)(serialization.getO(opt.useBinaryFormat)), async (iterable)=>{
                        var _a18, e_1, _b2, _c;
                        let message3;
                        try {
                            for(var _d = true, iterable_1 = __asyncValues6(iterable), iterable_1_1; iterable_1_1 = await iterable_1.next(), _a18 = iterable_1_1.done, !_a18; _d = true){
                                _c = iterable_1_1.value;
                                _d = false;
                                const chunk = _c;
                                if (message3 !== void 0) {
                                    throw new connect_error_js_1.ConnectError("protocol error: received extra output message for unary method", code_js_1.Code.Unimplemented);
                                }
                                message3 = chunk;
                            }
                        } catch (e_1_1) {
                            e_1 = {
                                error: e_1_1
                            };
                        } finally{
                            try {
                                if (!_d && !_a18 && (_b2 = iterable_1.return)) await _b2.call(iterable_1);
                            } finally{
                                if (e_1) throw e_1.error;
                            }
                        }
                        return message3;
                    }, {
                        propagateDownStreamError: false
                    });
                    (0, validate_trailer_js_1.validateTrailer)(uRes.trailer, uRes.header);
                    if (message2 === void 0) {
                        if (headerError) {
                            throw headerError;
                        }
                        throw new connect_error_js_1.ConnectError("protocol error: missing output message for unary method", uRes.trailer.has(headers_js_1.headerGrpcStatus) ? code_js_1.Code.Unimplemented : code_js_1.Code.Unknown);
                    }
                    if (headerError) {
                        throw new connect_error_js_1.ConnectError("protocol error: received output message for unary method with error status", code_js_1.Code.Unknown);
                    }
                    return {
                        stream: false,
                        service,
                        method,
                        header: uRes.header,
                        message: message2,
                        trailer: uRes.trailer
                    };
                }
            });
        },
        async stream (service, method, signal, timeoutMs, header, input, contextValues) {
            const serialization = (0, serialization_js_1.createMethodSerializationLookup)(method, opt.binaryOptions, opt.jsonOptions, opt);
            timeoutMs = timeoutMs === void 0 ? opt.defaultTimeoutMs : timeoutMs <= 0 ? void 0 : timeoutMs;
            return (0, run_call_js_1.runStreamingCall)({
                interceptors: opt.interceptors,
                signal,
                timeoutMs,
                req: {
                    stream: true,
                    service,
                    method,
                    url: (0, create_method_url_js_1.createMethodUrl)(opt.baseUrl, service, method),
                    init: {},
                    header: (0, request_header_js_1.requestHeaderWithCompression)(opt.useBinaryFormat, timeoutMs, header, opt.acceptCompression, opt.sendCompression),
                    contextValues: contextValues !== null && contextValues !== void 0 ? contextValues : (0, context_values_js_1.createContextValues)(),
                    message: input
                },
                next: async (req)=>{
                    const uRes = await opt.httpClient({
                        url: req.url,
                        method: "POST",
                        header: req.header,
                        signal: req.signal,
                        body: (0, async_iterable_js_1.pipe)(req.message, (0, async_iterable_js_1.transformSerializeEnvelope)(serialization.getI(opt.useBinaryFormat)), (0, async_iterable_js_1.transformCompressEnvelope)(opt.sendCompression, opt.compressMinBytes), (0, async_iterable_js_1.transformJoinEnvelopes)(), {
                            propagateDownStreamError: true
                        })
                    });
                    const { compression, foundStatus, headerError } = (0, validate_response_js_1.validateResponseWithCompression)(opt.acceptCompression, uRes.status, uRes.header);
                    if (headerError) {
                        throw headerError;
                    }
                    const res = Object.assign(Object.assign({}, req), {
                        header: uRes.header,
                        trailer: uRes.trailer,
                        message: (0, async_iterable_js_1.pipe)(uRes.body, (0, async_iterable_js_1.transformSplitEnvelope)(opt.readMaxBytes), (0, async_iterable_js_1.transformDecompressEnvelope)(compression !== null && compression !== void 0 ? compression : null, opt.readMaxBytes), (0, async_iterable_js_1.transformParseEnvelope)(serialization.getO(opt.useBinaryFormat)), function(iterable) {
                            return __asyncGenerator6(this, arguments, function*() {
                                yield __await6(yield* __asyncDelegator4(__asyncValues6(iterable)));
                                if (!foundStatus) {
                                    (0, validate_trailer_js_1.validateTrailer)(uRes.trailer, uRes.header);
                                }
                            });
                        }, {
                            propagateDownStreamError: true
                        })
                    });
                    return res;
                }
            });
        }
    };
}

return exports2;
}
