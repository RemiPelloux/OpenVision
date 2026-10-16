import { require_code } from "../code.js";
import { require_connect_error } from "../connect-error.js";
import { require_context_values } from "../context-values.js";
import { require_headers3 } from "./headers.js";
import { require_request_header2 } from "./request-header.js";
import { require_trailer } from "./trailer.js";
import { require_validate_response2 } from "./validate-response.js";
import { require_validate_trailer } from "../protocol-grpc/validate-trailer.js";
import { require_async_iterable } from "../protocol/async-iterable.js";
import { require_create_method_url } from "../protocol/create-method-url.js";
import { require_run_call } from "../protocol/run-call.js";
import { require_serialization } from "../protocol/serialization.js";
var __wakaru_require_transport2_cache;
export function require_transport2() {
if (__wakaru_require_transport2_cache) return __wakaru_require_transport2_cache;
var exports2 = {};
__wakaru_require_transport2_cache = exports2;
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
var validate_trailer_js_1 = require_validate_trailer();
var request_header_js_1 = require_request_header2();
var validate_response_js_1 = require_validate_response2();
var trailer_js_1 = require_trailer();
var code_js_1 = require_code();
var connect_error_js_1 = require_connect_error();
var async_iterable_js_1 = require_async_iterable();
var create_method_url_js_1 = require_create_method_url();
var run_call_js_1 = require_run_call();
var serialization_js_1 = require_serialization();
var context_values_js_1 = require_context_values();
var headers_js_1 = require_headers3();
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
                    header: (0, request_header_js_1.requestHeaderWithCompression)(opt.useBinaryFormat, timeoutMs, header, opt.acceptCompression, opt.sendCompression, true),
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
                    const { trailer, message: message2 } = await (0, async_iterable_js_1.pipeTo)(uRes.body, (0, async_iterable_js_1.transformSplitEnvelope)(opt.readMaxBytes), (0, async_iterable_js_1.transformDecompressEnvelope)(compression !== null && compression !== void 0 ? compression : null, opt.readMaxBytes), (0, async_iterable_js_1.transformParseEnvelope)(serialization.getO(opt.useBinaryFormat), trailer_js_1.trailerFlag, (0, trailer_js_1.createTrailerSerialization)()), async (iterable)=>{
                        var _a18, e_1, _b2, _c;
                        let message3;
                        let trailer2;
                        try {
                            for(var _d = true, iterable_1 = __asyncValues6(iterable), iterable_1_1; iterable_1_1 = await iterable_1.next(), _a18 = iterable_1_1.done, !_a18; _d = true){
                                _c = iterable_1_1.value;
                                _d = false;
                                const env = _c;
                                if (env.end) {
                                    if (trailer2 !== void 0) {
                                        throw new connect_error_js_1.ConnectError("protocol error: received extra trailer", code_js_1.Code.Unimplemented);
                                    }
                                    trailer2 = env.value;
                                } else {
                                    if (message3 !== void 0) {
                                        throw new connect_error_js_1.ConnectError("protocol error: received extra output message for unary method", code_js_1.Code.Unimplemented);
                                    }
                                    message3 = env.value;
                                }
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
                        return {
                            trailer: trailer2,
                            message: message3
                        };
                    }, {
                        propagateDownStreamError: false
                    });
                    if (trailer === void 0) {
                        if (headerError != void 0) {
                            throw headerError;
                        }
                        throw new connect_error_js_1.ConnectError("protocol error: missing trailer", uRes.header.has(headers_js_1.headerGrpcStatus) ? code_js_1.Code.Unimplemented : code_js_1.Code.Unknown);
                    }
                    (0, validate_trailer_js_1.validateTrailer)(trailer, uRes.header);
                    if (message2 === void 0) {
                        throw new connect_error_js_1.ConnectError("protocol error: missing output message for unary method", trailer.has(headers_js_1.headerGrpcStatus) ? code_js_1.Code.Unimplemented : code_js_1.Code.Unknown);
                    }
                    return {
                        stream: false,
                        service,
                        method,
                        header: uRes.header,
                        message: message2,
                        trailer
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
                    init: {
                        method: "POST",
                        redirect: "error",
                        mode: "cors"
                    },
                    header: (0, request_header_js_1.requestHeaderWithCompression)(opt.useBinaryFormat, timeoutMs, header, opt.acceptCompression, opt.sendCompression, true),
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
                        trailer: new Headers(),
                        message: (0, async_iterable_js_1.pipe)(uRes.body, (0, async_iterable_js_1.transformSplitEnvelope)(opt.readMaxBytes), (0, async_iterable_js_1.transformDecompressEnvelope)(compression !== null && compression !== void 0 ? compression : null, opt.readMaxBytes), (0, async_iterable_js_1.transformParseEnvelope)(serialization.getO(opt.useBinaryFormat), trailer_js_1.trailerFlag, (0, trailer_js_1.createTrailerSerialization)()), function(iterable) {
                            return __asyncGenerator6(this, arguments, function*() {
                                var _a18, e_2, _b2, _c;
                                if (foundStatus) {
                                    const r = yield __await6(iterable[Symbol.asyncIterator]().next());
                                    if (r.done !== true) {
                                        throw new connect_error_js_1.ConnectError("protocol error: extra data for trailers-only", code_js_1.Code.InvalidArgument);
                                    }
                                    return yield __await6(void 0);
                                }
                                let trailerReceived = false;
                                try {
                                    for(var _d = true, iterable_2 = __asyncValues6(iterable), iterable_2_1; iterable_2_1 = yield __await6(iterable_2.next()), _a18 = iterable_2_1.done, !_a18; _d = true){
                                        _c = iterable_2_1.value;
                                        _d = false;
                                        const chunk = _c;
                                        if (chunk.end) {
                                            if (trailerReceived) {
                                                throw new connect_error_js_1.ConnectError("protocol error: received extra trailer", code_js_1.Code.InvalidArgument);
                                            }
                                            trailerReceived = true;
                                            (0, validate_trailer_js_1.validateTrailer)(chunk.value, uRes.header);
                                            chunk.value.forEach((value, key)=>res.trailer.set(key, value));
                                            continue;
                                        }
                                        if (trailerReceived) {
                                            throw new connect_error_js_1.ConnectError("protocol error: received extra message after trailer", code_js_1.Code.InvalidArgument);
                                        }
                                        yield yield __await6(chunk.value);
                                    }
                                } catch (e_2_1) {
                                    e_2 = {
                                        error: e_2_1
                                    };
                                } finally{
                                    try {
                                        if (!_d && !_a18 && (_b2 = iterable_2.return)) yield __await6(_b2.call(iterable_2));
                                    } finally{
                                        if (e_2) throw e_2.error;
                                    }
                                }
                                if (!trailerReceived) {
                                    throw new connect_error_js_1.ConnectError("protocol error: missing trailer", code_js_1.Code.Internal);
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
