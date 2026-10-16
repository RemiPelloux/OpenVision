import { require_cjs2 } from "../../../../../../../_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/cjs/index.js";
import { require_code } from "../code.js";
import { require_connect_error } from "../connect-error.js";
import { require_implementation } from "../implementation.js";
import { require_content_type3 } from "./content-type.js";
import { require_end_stream } from "./end-stream.js";
import { require_error_json } from "./error-json.js";
import { require_headers4 } from "./headers.js";
import { require_http_status } from "./http-status.js";
import { require_parse_timeout2 } from "./parse-timeout.js";
import { require_query_params } from "./query-params.js";
import { require_trailer_mux } from "./trailer-mux.js";
import { require_version } from "./version.js";
import { require_async_iterable } from "../protocol/async-iterable.js";
import { require_compression } from "../protocol/compression.js";
import { require_content_type_matcher } from "../protocol/content-type-matcher.js";
import { require_create_method_url } from "../protocol/create-method-url.js";
import { require_invoke_implementation } from "../protocol/invoke-implementation.js";
import { require_serialization } from "../protocol/serialization.js";
import { require_universal_handler } from "../protocol/universal-handler.js";
import { require_universal } from "../protocol/universal.js";
var __wakaru_require_handler_factory3_cache;
export function require_handler_factory3() {
if (__wakaru_require_handler_factory3_cache) return __wakaru_require_handler_factory3_cache;
var exports2 = {};
__wakaru_require_handler_factory3_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.createHandlerFactory = createHandlerFactory4;
var protobuf_1 = require_cjs2();
var code_js_1 = require_code();
var connect_error_js_1 = require_connect_error();
var implementation_js_1 = require_implementation();
var content_type_js_1 = require_content_type3();
var end_stream_js_1 = require_end_stream();
var error_json_js_1 = require_error_json();
var headers_js_1 = require_headers4();
var http_status_js_1 = require_http_status();
var parse_timeout_js_1 = require_parse_timeout2();
var query_params_js_1 = require_query_params();
var trailer_mux_js_1 = require_trailer_mux();
var version_js_1 = require_version();
var compression_js_1 = require_compression();
var serialization_js_1 = require_serialization();
var universal_handler_js_1 = require_universal_handler();
var universal_js_1 = require_universal();
var async_iterable_js_1 = require_async_iterable();
var content_type_matcher_js_1 = require_content_type_matcher();
var create_method_url_js_1 = require_create_method_url();
var invoke_implementation_js_1 = require_invoke_implementation();
var protocolName4 = "connect";
var methodPost4 = "POST";
var methodGet2 = "GET";
function createHandlerFactory4(options2) {
    const opt = (0, universal_handler_js_1.validateUniversalHandlerOptions)(options2);
    const endStreamSerialization = (0, end_stream_js_1.createEndStreamSerialization)(opt.jsonOptions);
    function fact(spec) {
        let h;
        let contentTypeRegExp4;
        const serialization = (0, serialization_js_1.createMethodSerializationLookup)(spec.method, opt.binaryOptions, opt.jsonOptions, opt);
        switch(spec.kind){
            case protobuf_1.MethodKind.Unary:
                contentTypeRegExp4 = content_type_js_1.contentTypeUnaryRegExp;
                h = createUnaryHandler2(opt, spec, serialization);
                break;
            default:
                contentTypeRegExp4 = content_type_js_1.contentTypeStreamRegExp;
                h = createStreamHandler3(opt, spec, serialization, endStreamSerialization);
                break;
        }
        const allowedMethods = [
            methodPost4
        ];
        if (spec.method.idempotency === protobuf_1.MethodIdempotency.NoSideEffects) {
            allowedMethods.push(methodGet2);
        }
        return Object.assign(h, {
            protocolNames: [
                protocolName4
            ],
            supportedContentType: (0, content_type_matcher_js_1.contentTypeMatcher)(contentTypeRegExp4),
            allowedMethods,
            requestPath: (0, create_method_url_js_1.createMethodUrl)("/", spec.service, spec.method),
            service: spec.service,
            method: spec.method
        });
    }
    fact.protocolName = protocolName4;
    return fact;
}
function createUnaryHandler2(opt, spec, serialization) {
    return async function handle(req) {
        const isGet = req.method == methodGet2;
        if (isGet && spec.method.idempotency != protobuf_1.MethodIdempotency.NoSideEffects) {
            return universal_js_1.uResponseMethodNotAllowed;
        }
        const queryParams = new URL(req.url).searchParams;
        const compressionRequested = isGet ? queryParams.get(query_params_js_1.paramCompression) : req.header.get(headers_js_1.headerUnaryEncoding);
        const type2 = isGet ? (0, content_type_js_1.parseEncodingQuery)(queryParams.get(query_params_js_1.paramEncoding)) : (0, content_type_js_1.parseContentType)(req.header.get(headers_js_1.headerContentType));
        if (type2 == void 0 || type2.stream) {
            return universal_js_1.uResponseUnsupportedMediaType;
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
                [headers_js_1.headerContentType]: type2.binary ? content_type_js_1.contentTypeUnaryProto : content_type_js_1.contentTypeUnaryJson
            },
            contextValues: req.contextValues
        }));
        const compression = (0, compression_js_1.compressionNegotiate)(opt.acceptCompression, compressionRequested, req.header.get(headers_js_1.headerUnaryAcceptEncoding), headers_js_1.headerUnaryAcceptEncoding);
        let status = universal_js_1.uResponseOk.status;
        let body;
        try {
            if (opt.requireConnectProtocolHeader) {
                if (isGet) {
                    (0, version_js_1.requireProtocolVersionParam)(queryParams);
                } else {
                    (0, version_js_1.requireProtocolVersionHeader)(req.header);
                }
            }
            if (compression.error) {
                throw compression.error;
            }
            if (timeout2.error) {
                throw timeout2.error;
            }
            let reqBody;
            if (isGet) {
                reqBody = await readUnaryMessageFromQuery2(opt.readMaxBytes, compression.request, queryParams);
            } else {
                reqBody = await readUnaryMessageFromBody2(opt.readMaxBytes, compression.request, req);
            }
            const input = parseUnaryMessage2(spec.method, type2.binary, serialization, reqBody);
            const output = await (0, invoke_implementation_js_1.invokeUnaryImplementation)(spec, context2, input, opt.interceptors);
            body = serialization.getO(type2.binary).serialize(output);
        } catch (e) {
            let error3;
            if (e instanceof connect_error_js_1.ConnectError) {
                error3 = e;
            } else {
                error3 = new connect_error_js_1.ConnectError("internal error", code_js_1.Code.Internal, void 0, void 0, e);
            }
            status = (0, http_status_js_1.codeToHttpStatus)(error3.code);
            context2.responseHeader.set(headers_js_1.headerContentType, content_type_js_1.contentTypeUnaryJson);
            error3.metadata.forEach((value, key)=>{
                context2.responseHeader.set(key, value);
            });
            body = (0, error_json_js_1.errorToJsonBytes)(error3, opt.jsonOptions);
        } finally{
            context2.abort();
        }
        if (compression.response && body.byteLength >= opt.compressMinBytes) {
            body = await compression.response.compress(body);
            context2.responseHeader.set(headers_js_1.headerUnaryEncoding, compression.response.name);
        }
        const header = (0, trailer_mux_js_1.trailerMux)(context2.responseHeader, context2.responseTrailer);
        header.set(headers_js_1.headerUnaryContentLength, body.byteLength.toString(10));
        return {
            status,
            body: (0, async_iterable_js_1.createAsyncIterable)([
                body
            ]),
            header
        };
    };
}
async function readUnaryMessageFromBody2(readMaxBytes, compression, request3) {
    if (typeof request3.body == "object" && request3.body !== null && Symbol.asyncIterator in request3.body) {
        let reqBytes = await (0, async_iterable_js_1.readAllBytes)(request3.body, readMaxBytes, request3.header.get(headers_js_1.headerUnaryContentLength));
        if (compression) {
            reqBytes = await compression.decompress(reqBytes, readMaxBytes);
        }
        return reqBytes;
    }
    return request3.body;
}
async function readUnaryMessageFromQuery2(readMaxBytes, compression, queryParams) {
    var _a18;
    const base642 = queryParams.get(query_params_js_1.paramBase64);
    const message = (_a18 = queryParams.get(query_params_js_1.paramMessage)) !== null && _a18 !== void 0 ? _a18 : "";
    let decoded;
    if (base642 === "1") {
        decoded = protobuf_1.protoBase64.dec(message);
    } else {
        decoded = new TextEncoder().encode(message);
    }
    if (compression) {
        decoded = await compression.decompress(decoded, readMaxBytes);
    }
    return decoded;
}
function parseUnaryMessage2(method, useBinaryFormat, serialization, input) {
    if (input instanceof Uint8Array) {
        return serialization.getI(useBinaryFormat).parse(input);
    }
    if (useBinaryFormat) {
        throw new connect_error_js_1.ConnectError("received parsed JSON request body, but content-type indicates binary format", code_js_1.Code.Internal);
    }
    try {
        return method.I.fromJson(input);
    } catch (e) {
        throw connect_error_js_1.ConnectError.from(e, code_js_1.Code.InvalidArgument);
    }
}
function createStreamHandler3(opt, spec, serialization, endStreamSerialization) {
    return async function handle(req) {
        (0, universal_js_1.assertByteStreamRequest)(req);
        const type2 = (0, content_type_js_1.parseContentType)(req.header.get(headers_js_1.headerContentType));
        if (type2 == void 0 || !type2.stream) {
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
                [headers_js_1.headerContentType]: type2.binary ? content_type_js_1.contentTypeStreamProto : content_type_js_1.contentTypeStreamJson
            },
            contextValues: req.contextValues
        }));
        const compression = (0, compression_js_1.compressionNegotiate)(opt.acceptCompression, req.header.get(headers_js_1.headerStreamEncoding), req.header.get(headers_js_1.headerStreamAcceptEncoding), headers_js_1.headerStreamAcceptEncoding);
        if (compression.response) {
            context2.responseHeader.set(headers_js_1.headerStreamEncoding, compression.response.name);
        }
        const inputIt = (0, async_iterable_js_1.pipe)(req.body, (0, async_iterable_js_1.transformPrepend)(()=>{
            if (opt.requireConnectProtocolHeader) {
                (0, version_js_1.requireProtocolVersionHeader)(req.header);
            }
            if (compression.error) throw compression.error;
            if (timeout2.error) throw timeout2.error;
            return void 0;
        }), (0, async_iterable_js_1.transformSplitEnvelope)(opt.readMaxBytes), (0, async_iterable_js_1.transformDecompressEnvelope)(compression.request, opt.readMaxBytes), (0, async_iterable_js_1.transformParseEnvelope)(serialization.getI(type2.binary), end_stream_js_1.endStreamFlag));
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
        }, (0, async_iterable_js_1.transformSerializeEnvelope)(serialization.getO(type2.binary)), (0, async_iterable_js_1.transformCatchFinally)((e)=>{
            context2.abort();
            const end = {
                metadata: context2.responseTrailer
            };
            if (e instanceof connect_error_js_1.ConnectError) {
                end.error = e;
            } else if (e !== void 0) {
                end.error = new connect_error_js_1.ConnectError("internal error", code_js_1.Code.Internal, void 0, void 0, e);
            }
            return {
                flags: end_stream_js_1.endStreamFlag,
                data: endStreamSerialization.serialize(end)
            };
        }), (0, async_iterable_js_1.transformCompressEnvelope)(compression.response, opt.compressMinBytes), (0, async_iterable_js_1.transformJoinEnvelopes)(), {
            propagateDownStreamError: true
        });
        return Object.assign(Object.assign({}, universal_js_1.uResponseOk), {
            body: await (0, async_iterable_js_1.untilFirst)(outputIt),
            header: context2.responseHeader
        });
    };
}

return exports2;
}
