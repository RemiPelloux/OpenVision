import { require_structuredLogProvider } from "../structuredLogProvider.js";
import { require_cjs2 } from "../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/cjs/index.js";
var __wakaru_require_largeProtoLoggingInterceptor_cache;
export function require_largeProtoLoggingInterceptor() {
if (__wakaru_require_largeProtoLoggingInterceptor_cache) return __wakaru_require_largeProtoLoggingInterceptor_cache;
var exports2 = {};
__wakaru_require_largeProtoLoggingInterceptor_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.createLargeProtoLoggingInterceptor = createLargeProtoLoggingInterceptor;
var protobuf_1 = require_cjs2();
var structuredLogProvider_js_1 = require_structuredLogProvider();
var LARGE_PROTO_LOG_THRESHOLD = 20 * 1024 * 1024;
var MAX_BREAKDOWN_DEPTH = 3;
function isProtoMessage2(val) {
    return val != null && typeof val.getType === "function";
}
function getProtoFieldSizeBreakdown(message, totalSize, prefix = "", depth = 0) {
    const fieldSizes = [];
    try {
        const messageType = message.getType();
        for (const field4 of messageType.fields.list()){
            let fieldValue2;
            if (field4.oneof) {
                const oneofValue = message[field4.oneof.localName];
                if (!oneofValue || oneofValue.case !== field4.localName) continue;
                fieldValue2 = oneofValue.value;
            } else {
                fieldValue2 = message[field4.localName];
            }
            if (fieldValue2 === void 0 || fieldValue2 === null) continue;
            if (Array.isArray(fieldValue2) && fieldValue2.length === 0) continue;
            const fieldName = prefix ? `${prefix}.${field4.localName}` : field4.localName;
            const singleFieldMsg = field4.oneof ? new messageType({
                [field4.oneof.localName]: {
                    case: field4.localName,
                    value: fieldValue2
                }
            }) : new messageType({
                [field4.localName]: fieldValue2
            });
            const fieldSize = singleFieldMsg.toBinary().byteLength;
            if (depth < MAX_BREAKDOWN_DEPTH && isProtoMessage2(fieldValue2)) {
                const nested = getProtoFieldSizeBreakdown(fieldValue2, totalSize, fieldName, depth + 1);
                if (nested.length > 0) {
                    fieldSizes.push(...nested);
                    continue;
                }
            }
            fieldSizes.push({
                fieldName,
                sizeBytes: fieldSize,
                percentage: fieldSize / totalSize * 100
            });
        }
    } catch (e) {
        const payload = {
            subkey: "field_breakdown_failed",
            error: e instanceof Error ? e.message : String(e)
        };
        console.warn("[LargeProtoLoggingInterceptor] Failed to compute field breakdown", payload);
        structuredLogProvider_js_1.StructuredLogProviderImpl.warn("transport", "[LargeProtoLoggingInterceptor] Failed to compute field breakdown", payload);
    }
    return fieldSizes.sort((a, b2)=>b2.sizeBytes - a.sizeBytes);
}
function logLargeProto(message, sizeBytes, methodName, toBinaryTimeMs) {
    const breakdownStart = performance.now();
    const breakdown = getProtoFieldSizeBreakdown(message, sizeBytes);
    const fieldBreakdownMs = performance.now() - breakdownStart;
    const topFields = breakdown.slice(0, 5);
    const sizeMB = (sizeBytes / (1024 * 1024)).toFixed(2);
    const typeName = message.getType?.()?.typeName ?? "unknown";
    const totalMs = toBinaryTimeMs + fieldBreakdownMs;
    const payload = {
        service: "large_proto_interceptor",
        subkey: "large_proto_detected",
        method: methodName,
        typeName,
        totalSizeMB: parseFloat(sizeMB),
        topFields: topFields.map((f2)=>({
                field: f2.fieldName,
                sizeBytes: f2.sizeBytes,
                percentage: f2.percentage
            })),
        timingMs: {
            toBinaryTimeMs,
            fieldBreakdownMs,
            totalMs
        }
    };
    console.warn("[LargeProtoLoggingInterceptor] Large proto message detected", payload);
    structuredLogProvider_js_1.StructuredLogProviderImpl.warn("transport", "[LargeProtoLoggingInterceptor] Large proto message detected", payload);
}
function checkAndLogMessageSize(message, methodName) {
    try {
        if (typeof message.toBinary !== "function") return;
        const toBinaryStart = performance.now();
        const sizeBytes = message.toBinary().byteLength;
        const toBinaryTimeMs = performance.now() - toBinaryStart;
        if (sizeBytes > LARGE_PROTO_LOG_THRESHOLD) {
            logLargeProto(message, sizeBytes, methodName, toBinaryTimeMs);
        }
    } catch (e) {
        const payload = {
            subkey: "check_message_size_failed",
            method: methodName,
            error: e instanceof Error ? e.message : String(e)
        };
        console.warn("[LargeProtoLoggingInterceptor] Failed to check proto message size", payload);
        structuredLogProvider_js_1.StructuredLogProviderImpl.warn("transport", "[LargeProtoLoggingInterceptor] Failed to check proto message size", payload);
    }
}
function wrapAsyncIterable(iterable, methodName) {
    return {
        [Symbol.asyncIterator] () {
            const iterator = iterable[Symbol.asyncIterator]();
            return {
                async next () {
                    const result = await iterator.next();
                    if (!result.done && result.value) {
                        checkAndLogMessageSize(result.value, methodName);
                    }
                    return result;
                },
                return: iterator.return?.bind(iterator),
                throw: iterator.throw?.bind(iterator)
            };
        }
    };
}
function createLargeProtoLoggingInterceptor(host) {
    return (next)=>async (req)=>{
            let isEnabled = false;
            try {
                isEnabled = await host.checkFeatureGate("large_proto_logging_enabled");
            } catch (error3) {
                return next(req);
            }
            if (!isEnabled) {
                return next(req);
            }
            const methodName = req.method.name;
            if (req.method.kind === protobuf_1.MethodKind.Unary || req.method.kind === protobuf_1.MethodKind.ServerStreaming) {
                checkAndLogMessageSize(req.message, methodName);
                return next(req);
            }
            if (req.method.kind === protobuf_1.MethodKind.BiDiStreaming || req.method.kind === protobuf_1.MethodKind.ClientStreaming) {
                const wrappedMessage = wrapAsyncIterable(req.message, methodName);
                const wrappedReq = {
                    ...req,
                    message: wrappedMessage
                };
                return next(wrappedReq);
            }
            return next(req);
        };
}

return exports2;
}
