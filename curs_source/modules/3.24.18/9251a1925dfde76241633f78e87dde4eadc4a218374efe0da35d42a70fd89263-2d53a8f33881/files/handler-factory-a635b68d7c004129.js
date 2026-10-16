import { require_code } from "../code.js";
import { require_connect_error } from "../connect-error.js";
import { require_implementation } from "../implementation.js";
import { require_content_type2 } from "./content-type.js";
import { require_headers2 } from "./headers.js";
import { require_parse_timeout } from "./parse-timeout.js";
import { require_trailer_status } from "./trailer-status.js";
import { require_async_iterable } from "../protocol/async-iterable.js";
import { require_compression } from "../protocol/compression.js";
import { require_content_type_matcher } from "../protocol/content-type-matcher.js";
import { require_create_method_url } from "../protocol/create-method-url.js";
import { require_invoke_implementation } from "../protocol/invoke-implementation.js";
import { require_serialization } from "../protocol/serialization.js";
import { require_universal_handler } from "../protocol/universal-handler.js";
import { require_universal } from "../protocol/universal.js";
var __wakaru_require_handler_factory2_cache;
export function require_handler_factory2() {
if (__wakaru_require_handler_factory2_cache) return __wakaru_require_handler_factory2_cache;
var exports2 = {};
__wakaru_require_handler_factory2_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.createHandlerFactory = createHandlerFactory4;
var implementation_js_1 = require_implementation();
var connect_error_js_1 = require_connect_error();
var code_js_1 = require_code();
var content_type_js_1 = require_content_type2();
var headers_js_1 = require_headers2();
var trailer_status_js_1 = require_trailer_status();
var parse_timeout_js_1 = require_parse_timeout();
var async_iterable_js_1 = require_async_iterable();
var compression_js_1 = require_compression();
var content_type_matcher_js_1 = require_content_type_matcher();
var create_method_url_js_1 = require_create_method_url();
var invoke_implementation_js_1 = require_invoke_implementation();
var serialization_js_1 = require_serialization();
var universal_handler_js_1 = require_universal_handler();
var universal_js_1 = require_universal();
var protocolName4 = "grpc";
var methodPost4 = "POST";
function createHandlerFactory4(options2) {
    const opt = (0, universal_handler_js_1.validateUniversalHandlerOptions)(options2);
    function fact(spec) {
        const h = createHandler3(opt, spec);
        return Object.assign(h, {
            protocolNames: [
                protocolName4
            ],
            allowedMethods: [
                methodPost4
            ],
            supportedContentType: (0, content_type_matcher_js_1.contentTypeMatcher)(content_type_js_1.contentTypeRegExp),
            requestPath: (0, create_method_url_js_1.createMethodUrl)("/", spec.service, spec.method),
            service: spec.service,
            method: spec.method
        });
    }
    fact.protocolName = protocolName4;
    return fact;
}
function createHandler3(opt, spec) {
    const serialization = (0, serialization_js_1.createMethodSerializationLookup)(spec.method, opt.binaryOptions, opt.jsonOptions, opt);
    return async function handle(req) {
        (0, universal_js_1.assertByteStreamRequest)(req);
        const type2 = (0, content_type_js_1.parseContentType)(req.header.get(headers_js_1.headerContentType));
        if (type2 == void 0) {
            return universal_js_1.uResponseUnsupportedMediaType;
        }
        if (req.method !== methodPost4) {
            return universal_js_1.uResponseMethodNotAllowed;
        }
        const timeout2 = (0, parse_timeout_js_1.parseTimeout)(req.header.get(headers_js_1.headerTimeout), opt.maxTimeoutMs);
        const context2 = (0, implementation_js_1.createHandlerContext)(Object.assign(Object.assign({}, spec), {
            requestMethod: req.method,
            protocolName: protocolName4,
            timeoutMs: timeout2.timeoutMs,
            shutdownSignal: opt.shutdownSignal,
            requestSignal: req.signal,
            requestHeader: req.header,
            url: req.url,
            responseHeader: {
                [headers_js_1.headerContentType]: type2.binary ? content_type_js_1.contentTypeProto : content_type_js_1.contentTypeJson
            },
            responseTrailer: {
                [headers_js_1.headerGrpcStatus]: trailer_status_js_1.grpcStatusOk
            },
            contextValues: req.contextValues
        }));
        const compression = (0, compression_js_1.compressionNegotiate)(opt.acceptCompression, req.header.get(headers_js_1.headerEncoding), req.header.get(headers_js_1.headerAcceptEncoding), headers_js_1.headerAcceptEncoding);
        if (compression.response) {
            context2.responseHeader.set(headers_js_1.headerEncoding, compression.response.name);
        }
        const inputIt = (0, async_iterable_js_1.pipe)(req.body, (0, async_iterable_js_1.transformPrepend)(()=>{
            if (compression.error) throw compression.error;
            if (timeout2.error) throw timeout2.error;
            return void 0;
        }), (0, async_iterable_js_1.transformSplitEnvelope)(opt.readMaxBytes), (0, async_iterable_js_1.transformDecompressEnvelope)(compression.request, opt.readMaxBytes), (0, async_iterable_js_1.transformParseEnvelope)(serialization.getI(type2.binary)));
        const it2 = (0, invoke_implementation_js_1.transformInvokeImplementation)(spec, context2, opt.interceptors)(inputIt)[Symbol.asyncIterator]();
        const outputIt = (0, async_iterable_js_1.pipe)({
            [Symbol.asyncIterator] () {
                return {
                    next: ()=>it2.next(),
                    throw: (e)=>{
                        var _a18, _b2;
                        context2.abort(e);
                        return (_b2 = (_a18 = it2.throw) === null || _a18 === void 0 ? void 0 : _a18.call(it2, e)) !== null && _b2 !== void 0 ? _b2 : Promise.reject({
                            done: true
                        });
                    },
                    return: (v2)=>{
                        var _a18, _b2;
                        context2.abort();
                        return (_b2 = (_a18 = it2.return) === null || _a18 === void 0 ? void 0 : _a18.call(it2, v2)) !== null && _b2 !== void 0 ? _b2 : Promise.resolve({
                            done: true,
                            value: v2
                        });
                    }
                };
            }
        }, (0, async_iterable_js_1.transformSerializeEnvelope)(serialization.getO(type2.binary)), (0, async_iterable_js_1.transformCompressEnvelope)(compression.response, opt.compressMinBytes), (0, async_iterable_js_1.transformJoinEnvelopes)(), (0, async_iterable_js_1.transformCatchFinally)((e)=>{
            context2.abort();
            if (e instanceof connect_error_js_1.ConnectError) {
                (0, trailer_status_js_1.setTrailerStatus)(context2.responseTrailer, e);
            } else if (e !== void 0) {
                (0, trailer_status_js_1.setTrailerStatus)(context2.responseTrailer, new connect_error_js_1.ConnectError("internal error", code_js_1.Code.Internal, void 0, void 0, e));
            }
        }), {
            propagateDownStreamError: true
        });
        return Object.assign(Object.assign({}, universal_js_1.uResponseOk), {
            body: await (0, async_iterable_js_1.untilFirst)(outputIt),
            header: context2.responseHeader,
            trailer: context2.responseTrailer
        });
    };
}

return exports2;
}
