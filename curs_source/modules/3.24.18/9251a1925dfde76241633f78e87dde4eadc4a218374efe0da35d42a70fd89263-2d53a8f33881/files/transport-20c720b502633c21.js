import { require_cjs2 } from "../../../../../../../_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/cjs/index.js";
import { require_code } from "../code.js";
import { require_connect_error } from "../connect-error.js";
import { require_context_values } from "../context-values.js";
import { require_http_headers } from "../http-headers.js";
import { require_end_stream } from "./end-stream.js";
import { require_error_json } from "./error-json.js";
import { require_get_request } from "./get-request.js";
import { require_headers4 } from "./headers.js";
import { require_request_header } from "./request-header.js";
import { require_trailer_mux } from "./trailer-mux.js";
import { require_validate_response } from "./validate-response.js";
import { require_async_iterable } from "../protocol/async-iterable.js";
import { require_create_method_url } from "../protocol/create-method-url.js";
import { require_run_call } from "../protocol/run-call.js";
import { require_serialization } from "../protocol/serialization.js";
var __wakaru_require_transport_cache;
export function require_transport() {
if (__wakaru_require_transport_cache) return __wakaru_require_transport_cache;
var exports2 = {};
__wakaru_require_transport_cache = exports2;
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
var protobuf_1 = require_cjs2();
var request_header_js_1 = require_request_header();
var headers_js_1 = require_headers4();
var validate_response_js_1 = require_validate_response();
var trailer_mux_js_1 = require_trailer_mux();
var error_json_js_1 = require_error_json();
var end_stream_js_1 = require_end_stream();
var get_request_js_1 = require_get_request();
var code_js_1 = require_code();
var connect_error_js_1 = require_connect_error();
var http_headers_js_1 = require_http_headers();
var async_iterable_js_1 = require_async_iterable();
var create_method_url_js_1 = require_create_method_url();
var run_call_js_1 = require_run_call();
var serialization_js_1 = require_serialization();
var context_values_js_1 = require_context_values();
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
                    header: (0, request_header_js_1.requestHeaderWithCompression)(method.kind, opt.useBinaryFormat, timeoutMs, header, opt.acceptCompression, opt.sendCompression, true),
                    contextValues: contextValues !== null && contextValues !== void 0 ? contextValues : (0, context_values_js_1.createContextValues)(),
                    message
                },
                next: async (req)=>{
                    var _a18;
                    let requestBody = serialization.getI(opt.useBinaryFormat).serialize(req.message);
                    if (opt.sendCompression && requestBody.byteLength > opt.compressMinBytes) {
                        requestBody = await opt.sendCompression.compress(requestBody);
                        req.header.set(headers_js_1.headerUnaryEncoding, opt.sendCompression.name);
                    } else {
                        req.header.delete(headers_js_1.headerUnaryEncoding);
                    }
                    const useGet = opt.useHttpGet === true && method.idempotency === protobuf_1.MethodIdempotency.NoSideEffects;
                    let body;
                    if (useGet) {
                        req = (0, get_request_js_1.transformConnectPostToGetRequest)(req, requestBody, opt.useBinaryFormat);
                    } else {
                        body = (0, async_iterable_js_1.createAsyncIterable)([
                            requestBody
                        ]);
                    }
                    const universalResponse = await opt.httpClient({
                        url: req.url,
                        method: (_a18 = req.init.method) !== null && _a18 !== void 0 ? _a18 : "POST",
                        header: req.header,
                        signal: req.signal,
                        body
                    });
                    const { compression, isUnaryError, unaryError } = (0, validate_response_js_1.validateResponseWithCompression)(method.kind, opt.acceptCompression, opt.useBinaryFormat, universalResponse.status, universalResponse.header);
                    const [header2, trailer] = (0, trailer_mux_js_1.trailerDemux)(universalResponse.header);
                    let responseBody = await (0, async_iterable_js_1.pipeTo)(universalResponse.body, (0, async_iterable_js_1.sinkAllBytes)(opt.readMaxBytes, universalResponse.header.get(headers_js_1.headerUnaryContentLength)), {
                        propagateDownStreamError: false
                    });
                    if (compression) {
                        responseBody = await compression.decompress(responseBody, opt.readMaxBytes);
                    }
                    if (isUnaryError) {
                        throw (0, error_json_js_1.errorFromJsonBytes)(responseBody, (0, http_headers_js_1.appendHeaders)(header2, trailer), unaryError);
                    }
                    return {
                        stream: false,
                        service,
                        method,
                        header: header2,
                        message: serialization.getO(opt.useBinaryFormat).parse(responseBody),
                        trailer
                    };
                }
            });
        },
        async stream (service, method, signal, timeoutMs, header, input, contextValues) {
            const serialization = (0, serialization_js_1.createMethodSerializationLookup)(method, opt.binaryOptions, opt.jsonOptions, opt);
            const endStreamSerialization = (0, end_stream_js_1.createEndStreamSerialization)(opt.jsonOptions);
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
                    header: (0, request_header_js_1.requestHeaderWithCompression)(method.kind, opt.useBinaryFormat, timeoutMs, header, opt.acceptCompression, opt.sendCompression, true),
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
                    const { compression } = (0, validate_response_js_1.validateResponseWithCompression)(method.kind, opt.acceptCompression, opt.useBinaryFormat, uRes.status, uRes.header);
                    const res = Object.assign(Object.assign({}, req), {
                        header: uRes.header,
                        trailer: new Headers(),
                        message: (0, async_iterable_js_1.pipe)(uRes.body, (0, async_iterable_js_1.transformSplitEnvelope)(opt.readMaxBytes), (0, async_iterable_js_1.transformDecompressEnvelope)(compression !== null && compression !== void 0 ? compression : null, opt.readMaxBytes), (0, async_iterable_js_1.transformParseEnvelope)(serialization.getO(opt.useBinaryFormat), end_stream_js_1.endStreamFlag, endStreamSerialization), function(iterable) {
                            return __asyncGenerator6(this, arguments, function*() {
                                var _a18, e_1, _b2, _c;
                                let endStreamReceived = false;
                                try {
                                    for(var _d = true, iterable_1 = __asyncValues6(iterable), iterable_1_1; iterable_1_1 = yield __await6(iterable_1.next()), _a18 = iterable_1_1.done, !_a18; _d = true){
                                        _c = iterable_1_1.value;
                                        _d = false;
                                        const chunk = _c;
                                        if (chunk.end) {
                                            if (endStreamReceived) {
                                                throw new connect_error_js_1.ConnectError("protocol error: received extra EndStreamResponse", code_js_1.Code.InvalidArgument);
                                            }
                                            endStreamReceived = true;
                                            if (chunk.value.error) {
                                                const error3 = chunk.value.error;
                                                uRes.header.forEach((value, key)=>{
                                                    error3.metadata.append(key, value);
                                                });
                                                throw error3;
                                            }
                                            chunk.value.metadata.forEach((value, key)=>res.trailer.set(key, value));
                                            continue;
                                        }
                                        if (endStreamReceived) {
                                            throw new connect_error_js_1.ConnectError("protocol error: received extra message after EndStreamResponse", code_js_1.Code.InvalidArgument);
                                        }
                                        yield yield __await6(chunk.value);
                                    }
                                } catch (e_1_1) {
                                    e_1 = {
                                        error: e_1_1
                                    };
                                } finally{
                                    try {
                                        if (!_d && !_a18 && (_b2 = iterable_1.return)) yield __await6(_b2.call(iterable_1));
                                    } finally{
                                        if (e_1) throw e_1.error;
                                    }
                                }
                                if (!endStreamReceived) {
                                    throw new connect_error_js_1.ConnectError("protocol error: missing EndStreamResponse", code_js_1.Code.InvalidArgument);
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
