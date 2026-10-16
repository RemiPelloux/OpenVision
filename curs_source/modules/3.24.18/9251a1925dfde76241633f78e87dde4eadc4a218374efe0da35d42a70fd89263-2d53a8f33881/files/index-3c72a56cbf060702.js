import { require_async_iterable } from "./async-iterable.js";
import { require_compression } from "./compression.js";
import { require_content_type_matcher } from "./content-type-matcher.js";
import { require_create_method_url } from "./create-method-url.js";
import { require_envelope } from "./envelope.js";
import { require_invoke_implementation } from "./invoke-implementation.js";
import { require_limit_io } from "./limit-io.js";
import { require_run_call } from "./run-call.js";
import { require_serialization } from "./serialization.js";
import { require_signals } from "./signals.js";
import { require_universal_fetch } from "./universal-fetch.js";
import { require_universal_handler_client } from "./universal-handler-client.js";
import { require_universal_handler } from "./universal-handler.js";
import { require_universal } from "./universal.js";
var __wakaru_require_protocol_cache;
export function require_protocol() {
if (__wakaru_require_protocol_cache) return __wakaru_require_protocol_cache;
var exports2 = {};
__wakaru_require_protocol_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.uResponseOk = exports2.assertByteStreamRequest = exports2.createDeadlineSignal = exports2.getAbortSignalReason = exports2.createLinkedAbortController = exports2.transformInvokeImplementation = exports2.invokeUnaryImplementation = exports2.contentTypeMatcher = exports2.untilFirst = exports2.readAllBytes = exports2.createAsyncIterable = exports2.createWritableIterable = exports2.makeIterableAbortable = exports2.sinkAllBytes = exports2.sinkAll = exports2.pipeTo = exports2.transformParseEnvelope = exports2.transformSerializeEnvelope = exports2.transformSplitEnvelope = exports2.transformJoinEnvelopes = exports2.transformDecompressEnvelope = exports2.transformCompressEnvelope = exports2.transformReadAllBytes = exports2.transformPrepend = exports2.transformAppend = exports2.transformCatchFinally = exports2.transformCatch = exports2.pipe = exports2.compressionNegotiate = exports2.compressedFlag = exports2.createEnvelopeReadableStream = exports2.envelopeCompress = exports2.envelopeDecompress = exports2.encodeEnvelopes = exports2.encodeEnvelope = exports2.validateReadWriteMaxBytes = exports2.limitSerialization = exports2.getJsonOptions = exports2.createClientMethodSerializers = exports2.createMethodSerializationLookup = exports2.runStreamingCall = exports2.runUnaryCall = exports2.universalServerResponseToFetch = exports2.universalServerRequestFromFetch = exports2.universalClientResponseFromFetch = exports2.universalClientRequestToFetch = exports2.createFetchHandler = exports2.createFetchClient = exports2.createUniversalHandlerClient = exports2.createMethodUrl = void 0;
exports2.createUniversalMethodHandler = exports2.createUniversalServiceHandlers = exports2.validateUniversalHandlerOptions = exports2.uResponseVersionNotSupported = exports2.uResponseMethodNotAllowed = exports2.uResponseUnsupportedMediaType = exports2.uResponseNotFound = void 0;
var create_method_url_js_1 = require_create_method_url();
Object.defineProperty(exports2, "createMethodUrl", {
    enumerable: true,
    get: function() {
        return create_method_url_js_1.createMethodUrl;
    }
});
var universal_handler_client_js_1 = require_universal_handler_client();
Object.defineProperty(exports2, "createUniversalHandlerClient", {
    enumerable: true,
    get: function() {
        return universal_handler_client_js_1.createUniversalHandlerClient;
    }
});
var universal_fetch_js_1 = require_universal_fetch();
Object.defineProperty(exports2, "createFetchClient", {
    enumerable: true,
    get: function() {
        return universal_fetch_js_1.createFetchClient;
    }
});
Object.defineProperty(exports2, "createFetchHandler", {
    enumerable: true,
    get: function() {
        return universal_fetch_js_1.createFetchHandler;
    }
});
Object.defineProperty(exports2, "universalClientRequestToFetch", {
    enumerable: true,
    get: function() {
        return universal_fetch_js_1.universalClientRequestToFetch;
    }
});
Object.defineProperty(exports2, "universalClientResponseFromFetch", {
    enumerable: true,
    get: function() {
        return universal_fetch_js_1.universalClientResponseFromFetch;
    }
});
Object.defineProperty(exports2, "universalServerRequestFromFetch", {
    enumerable: true,
    get: function() {
        return universal_fetch_js_1.universalServerRequestFromFetch;
    }
});
Object.defineProperty(exports2, "universalServerResponseToFetch", {
    enumerable: true,
    get: function() {
        return universal_fetch_js_1.universalServerResponseToFetch;
    }
});
var run_call_js_1 = require_run_call();
Object.defineProperty(exports2, "runUnaryCall", {
    enumerable: true,
    get: function() {
        return run_call_js_1.runUnaryCall;
    }
});
Object.defineProperty(exports2, "runStreamingCall", {
    enumerable: true,
    get: function() {
        return run_call_js_1.runStreamingCall;
    }
});
var serialization_js_1 = require_serialization();
Object.defineProperty(exports2, "createMethodSerializationLookup", {
    enumerable: true,
    get: function() {
        return serialization_js_1.createMethodSerializationLookup;
    }
});
Object.defineProperty(exports2, "createClientMethodSerializers", {
    enumerable: true,
    get: function() {
        return serialization_js_1.createClientMethodSerializers;
    }
});
Object.defineProperty(exports2, "getJsonOptions", {
    enumerable: true,
    get: function() {
        return serialization_js_1.getJsonOptions;
    }
});
Object.defineProperty(exports2, "limitSerialization", {
    enumerable: true,
    get: function() {
        return serialization_js_1.limitSerialization;
    }
});
var limit_io_js_1 = require_limit_io();
Object.defineProperty(exports2, "validateReadWriteMaxBytes", {
    enumerable: true,
    get: function() {
        return limit_io_js_1.validateReadWriteMaxBytes;
    }
});
var envelope_js_1 = require_envelope();
Object.defineProperty(exports2, "encodeEnvelope", {
    enumerable: true,
    get: function() {
        return envelope_js_1.encodeEnvelope;
    }
});
Object.defineProperty(exports2, "encodeEnvelopes", {
    enumerable: true,
    get: function() {
        return envelope_js_1.encodeEnvelopes;
    }
});
Object.defineProperty(exports2, "envelopeDecompress", {
    enumerable: true,
    get: function() {
        return envelope_js_1.envelopeDecompress;
    }
});
Object.defineProperty(exports2, "envelopeCompress", {
    enumerable: true,
    get: function() {
        return envelope_js_1.envelopeCompress;
    }
});
Object.defineProperty(exports2, "createEnvelopeReadableStream", {
    enumerable: true,
    get: function() {
        return envelope_js_1.createEnvelopeReadableStream;
    }
});
var compression_js_1 = require_compression();
Object.defineProperty(exports2, "compressedFlag", {
    enumerable: true,
    get: function() {
        return compression_js_1.compressedFlag;
    }
});
Object.defineProperty(exports2, "compressionNegotiate", {
    enumerable: true,
    get: function() {
        return compression_js_1.compressionNegotiate;
    }
});
var async_iterable_js_1 = require_async_iterable();
Object.defineProperty(exports2, "pipe", {
    enumerable: true,
    get: function() {
        return async_iterable_js_1.pipe;
    }
});
Object.defineProperty(exports2, "transformCatch", {
    enumerable: true,
    get: function() {
        return async_iterable_js_1.transformCatch;
    }
});
Object.defineProperty(exports2, "transformCatchFinally", {
    enumerable: true,
    get: function() {
        return async_iterable_js_1.transformCatchFinally;
    }
});
Object.defineProperty(exports2, "transformAppend", {
    enumerable: true,
    get: function() {
        return async_iterable_js_1.transformAppend;
    }
});
Object.defineProperty(exports2, "transformPrepend", {
    enumerable: true,
    get: function() {
        return async_iterable_js_1.transformPrepend;
    }
});
Object.defineProperty(exports2, "transformReadAllBytes", {
    enumerable: true,
    get: function() {
        return async_iterable_js_1.transformReadAllBytes;
    }
});
Object.defineProperty(exports2, "transformCompressEnvelope", {
    enumerable: true,
    get: function() {
        return async_iterable_js_1.transformCompressEnvelope;
    }
});
Object.defineProperty(exports2, "transformDecompressEnvelope", {
    enumerable: true,
    get: function() {
        return async_iterable_js_1.transformDecompressEnvelope;
    }
});
Object.defineProperty(exports2, "transformJoinEnvelopes", {
    enumerable: true,
    get: function() {
        return async_iterable_js_1.transformJoinEnvelopes;
    }
});
Object.defineProperty(exports2, "transformSplitEnvelope", {
    enumerable: true,
    get: function() {
        return async_iterable_js_1.transformSplitEnvelope;
    }
});
Object.defineProperty(exports2, "transformSerializeEnvelope", {
    enumerable: true,
    get: function() {
        return async_iterable_js_1.transformSerializeEnvelope;
    }
});
Object.defineProperty(exports2, "transformParseEnvelope", {
    enumerable: true,
    get: function() {
        return async_iterable_js_1.transformParseEnvelope;
    }
});
Object.defineProperty(exports2, "pipeTo", {
    enumerable: true,
    get: function() {
        return async_iterable_js_1.pipeTo;
    }
});
Object.defineProperty(exports2, "sinkAll", {
    enumerable: true,
    get: function() {
        return async_iterable_js_1.sinkAll;
    }
});
Object.defineProperty(exports2, "sinkAllBytes", {
    enumerable: true,
    get: function() {
        return async_iterable_js_1.sinkAllBytes;
    }
});
Object.defineProperty(exports2, "makeIterableAbortable", {
    enumerable: true,
    get: function() {
        return async_iterable_js_1.makeIterableAbortable;
    }
});
Object.defineProperty(exports2, "createWritableIterable", {
    enumerable: true,
    get: function() {
        return async_iterable_js_1.createWritableIterable;
    }
});
Object.defineProperty(exports2, "createAsyncIterable", {
    enumerable: true,
    get: function() {
        return async_iterable_js_1.createAsyncIterable;
    }
});
Object.defineProperty(exports2, "readAllBytes", {
    enumerable: true,
    get: function() {
        return async_iterable_js_1.readAllBytes;
    }
});
Object.defineProperty(exports2, "untilFirst", {
    enumerable: true,
    get: function() {
        return async_iterable_js_1.untilFirst;
    }
});
var content_type_matcher_js_1 = require_content_type_matcher();
Object.defineProperty(exports2, "contentTypeMatcher", {
    enumerable: true,
    get: function() {
        return content_type_matcher_js_1.contentTypeMatcher;
    }
});
var invoke_implementation_js_1 = require_invoke_implementation();
Object.defineProperty(exports2, "invokeUnaryImplementation", {
    enumerable: true,
    get: function() {
        return invoke_implementation_js_1.invokeUnaryImplementation;
    }
});
Object.defineProperty(exports2, "transformInvokeImplementation", {
    enumerable: true,
    get: function() {
        return invoke_implementation_js_1.transformInvokeImplementation;
    }
});
var signals_js_1 = require_signals();
Object.defineProperty(exports2, "createLinkedAbortController", {
    enumerable: true,
    get: function() {
        return signals_js_1.createLinkedAbortController;
    }
});
Object.defineProperty(exports2, "getAbortSignalReason", {
    enumerable: true,
    get: function() {
        return signals_js_1.getAbortSignalReason;
    }
});
Object.defineProperty(exports2, "createDeadlineSignal", {
    enumerable: true,
    get: function() {
        return signals_js_1.createDeadlineSignal;
    }
});
var universal_js_1 = require_universal();
Object.defineProperty(exports2, "assertByteStreamRequest", {
    enumerable: true,
    get: function() {
        return universal_js_1.assertByteStreamRequest;
    }
});
Object.defineProperty(exports2, "uResponseOk", {
    enumerable: true,
    get: function() {
        return universal_js_1.uResponseOk;
    }
});
Object.defineProperty(exports2, "uResponseNotFound", {
    enumerable: true,
    get: function() {
        return universal_js_1.uResponseNotFound;
    }
});
Object.defineProperty(exports2, "uResponseUnsupportedMediaType", {
    enumerable: true,
    get: function() {
        return universal_js_1.uResponseUnsupportedMediaType;
    }
});
Object.defineProperty(exports2, "uResponseMethodNotAllowed", {
    enumerable: true,
    get: function() {
        return universal_js_1.uResponseMethodNotAllowed;
    }
});
Object.defineProperty(exports2, "uResponseVersionNotSupported", {
    enumerable: true,
    get: function() {
        return universal_js_1.uResponseVersionNotSupported;
    }
});
var universal_handler_js_1 = require_universal_handler();
Object.defineProperty(exports2, "validateUniversalHandlerOptions", {
    enumerable: true,
    get: function() {
        return universal_handler_js_1.validateUniversalHandlerOptions;
    }
});
Object.defineProperty(exports2, "createUniversalServiceHandlers", {
    enumerable: true,
    get: function() {
        return universal_handler_js_1.createUniversalServiceHandlers;
    }
});
Object.defineProperty(exports2, "createUniversalMethodHandler", {
    enumerable: true,
    get: function() {
        return universal_handler_js_1.createUniversalMethodHandler;
    }
});

return exports2;
}
