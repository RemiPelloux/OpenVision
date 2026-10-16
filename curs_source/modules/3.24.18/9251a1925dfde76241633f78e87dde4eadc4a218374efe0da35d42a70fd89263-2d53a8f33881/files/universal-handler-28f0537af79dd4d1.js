import { require_cjs2 } from "../../../../../../../_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/cjs/index.js";
import { require_code } from "../code.js";
import { require_connect_error } from "../connect-error.js";
import { require_content_type_matcher } from "./content-type-matcher.js";
import { require_limit_io } from "./limit-io.js";
import { require_universal } from "./universal.js";
var __wakaru_require_universal_handler_cache;
export function require_universal_handler() {
if (__wakaru_require_universal_handler_cache) return __wakaru_require_universal_handler_cache;
var exports2 = {};
__wakaru_require_universal_handler_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.validateUniversalHandlerOptions = validateUniversalHandlerOptions2;
exports2.createUniversalServiceHandlers = createUniversalServiceHandlers2;
exports2.createUniversalMethodHandler = createUniversalMethodHandler2;
exports2.negotiateProtocol = negotiateProtocol2;
var protobuf_1 = require_cjs2();
var universal_js_1 = require_universal();
var content_type_matcher_js_1 = require_content_type_matcher();
var limit_io_js_1 = require_limit_io();
var connect_error_js_1 = require_connect_error();
var code_js_1 = require_code();
function validateUniversalHandlerOptions2(opt) {
    var _a18, _b2, _c;
    opt !== null && opt !== void 0 ? opt : opt = {};
    const acceptCompression = opt.acceptCompression ? [
        ...opt.acceptCompression
    ] : [];
    const requireConnectProtocolHeader = (_a18 = opt.requireConnectProtocolHeader) !== null && _a18 !== void 0 ? _a18 : false;
    const maxTimeoutMs = (_b2 = opt.maxTimeoutMs) !== null && _b2 !== void 0 ? _b2 : Number.MAX_SAFE_INTEGER;
    return Object.assign(Object.assign({
        acceptCompression
    }, (0, limit_io_js_1.validateReadWriteMaxBytes)(opt.readMaxBytes, opt.writeMaxBytes, opt.compressMinBytes)), {
        jsonOptions: opt.jsonOptions,
        binaryOptions: opt.binaryOptions,
        maxTimeoutMs,
        shutdownSignal: opt.shutdownSignal,
        requireConnectProtocolHeader,
        interceptors: (_c = opt.interceptors) !== null && _c !== void 0 ? _c : []
    });
}
function createUniversalServiceHandlers2(spec, protocols) {
    return Object.entries(spec.methods).map(([, implSpec])=>createUniversalMethodHandler2(implSpec, protocols));
}
function createUniversalMethodHandler2(spec, protocols) {
    return negotiateProtocol2(protocols.map((f2)=>f2(spec)));
}
function negotiateProtocol2(protocolHandlers) {
    if (protocolHandlers.length == 0) {
        throw new connect_error_js_1.ConnectError("at least one protocol is required", code_js_1.Code.Internal);
    }
    const service = protocolHandlers[0].service;
    const method = protocolHandlers[0].method;
    const requestPath2 = protocolHandlers[0].requestPath;
    if (protocolHandlers.some((h)=>h.service !== service || h.method !== method)) {
        throw new connect_error_js_1.ConnectError("cannot negotiate protocol for different RPCs", code_js_1.Code.Internal);
    }
    if (protocolHandlers.some((h)=>h.requestPath !== requestPath2)) {
        throw new connect_error_js_1.ConnectError("cannot negotiate protocol for different requestPaths", code_js_1.Code.Internal);
    }
    async function protocolNegotiatingHandler(request3) {
        var _a18;
        if (method.kind == protobuf_1.MethodKind.BiDiStreaming && request3.httpVersion.startsWith("1.")) {
            return Object.assign(Object.assign({}, universal_js_1.uResponseVersionNotSupported), {
                header: new Headers({
                    Connection: "close"
                })
            });
        }
        const contentType = (_a18 = request3.header.get("Content-Type")) !== null && _a18 !== void 0 ? _a18 : "";
        const matchingMethod = protocolHandlers.filter((h)=>h.allowedMethods.includes(request3.method));
        if (matchingMethod.length == 0) {
            return universal_js_1.uResponseMethodNotAllowed;
        }
        if (matchingMethod.length == 1 && contentType === "") {
            const onlyMatch = matchingMethod[0];
            return onlyMatch(request3);
        }
        const matchingContentTypes = matchingMethod.filter((h)=>h.supportedContentType(contentType));
        if (matchingContentTypes.length == 0) {
            return universal_js_1.uResponseUnsupportedMediaType;
        }
        const firstMatch = matchingContentTypes[0];
        return firstMatch(request3);
    }
    return Object.assign(protocolNegotiatingHandler, {
        service,
        method,
        requestPath: requestPath2,
        supportedContentType: (0, content_type_matcher_js_1.contentTypeMatcher)(...protocolHandlers.map((h)=>h.supportedContentType)),
        protocolNames: protocolHandlers.flatMap((h)=>h.protocolNames).filter((value, index, array3)=>array3.indexOf(value) === index),
        allowedMethods: protocolHandlers.flatMap((h)=>h.allowedMethods).filter((value, index, array3)=>array3.indexOf(value) === index)
    });
}

return exports2;
}
