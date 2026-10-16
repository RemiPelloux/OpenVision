import { init_dist2 } from "../../../constants/dist/index.js";
import { __toCommonJS } from "../aggregatingMetricsProvider.js";
import { require_structuredLogProvider } from "../structuredLogProvider.js";
import { dist_exports } from "../../../dist_exports.js";
import { require_cjs2 } from "../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/cjs/index.js";
import { require_cjs3 } from "../../../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/cjs/index.js";
var __wakaru_require_retryInterceptor_cache;
export function require_retryInterceptor() {
if (__wakaru_require_retryInterceptor_cache) return __wakaru_require_retryInterceptor_cache;
var exports2 = {};
__wakaru_require_retryInterceptor_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.RewindableAsyncIterable = void 0;
exports2.shouldRetryOnError = shouldRetryOnError;
exports2.createStreamRetryInterceptor = createStreamRetryInterceptor;
exports2.createUnaryRetryInterceptor = createUnaryRetryInterceptor;
var constants_1 = (init_dist2(), __toCommonJS(dist_exports));
var protobuf_1 = require_cjs2();
var connect_1 = require_cjs3();
var structuredLogProvider_js_1 = require_structuredLogProvider();
function sleep4(ms2) {
    return new Promise((resolve36)=>setTimeout(resolve36, ms2));
}
function shouldRetryOnError(code, errorMessage4, methodName, dynamicConfig) {
    if (dynamicConfig.retriableErrors && dynamicConfig.retriableErrors.length > 0) {
        const codeName = connect_1.Code[code];
        for (const rule of dynamicConfig.retriableErrors){
            if (rule.code === codeName) {
                if (rule.method && rule.method !== methodName) {
                    continue;
                }
                if (!rule.errorMessage) {
                    return true;
                }
                if (errorMessage4.includes(rule.errorMessage)) {
                    return true;
                }
            }
        }
    }
    return false;
}
async function fetchDynamicRetryConfig(host, interceptorName) {
    try {
        const config2 = await host.getDynamicConfigValue("retry_interceptor_config");
        if (config2 && typeof config2 === "object" && "retriableErrors" in config2) {
            return config2;
        }
        return host.getDynamicConfigFallbackValues("retry_interceptor_config");
    } catch (error3) {
        host.debugLog.error(`[${interceptorName}] Failed to fetch retry_interceptor_config, using fallback defaults`, error3);
        return host.getDynamicConfigFallbackValues("retry_interceptor_config");
    }
}
function parsePositiveInt(headerValue2, min) {
    if (!headerValue2) {
        return void 0;
    }
    const parsed = parseInt(headerValue2, 10);
    if (Number.isNaN(parsed) || parsed < min) {
        return void 0;
    }
    return parsed;
}
function getRetryConfig(req, defaults2) {
    const header = req.header;
    const retryEnabled = header.get("X-Cursor-RetryInterceptor-Enabled");
    if (!retryEnabled || retryEnabled !== "true") {
        return null;
    }
    const maxRetriesHeader = header.get("X-Cursor-RetryInterceptor-MaxRetries");
    const baseDelayMsHeader = header.get("X-Cursor-RetryInterceptor-BaseDelayMs");
    const maxDelayMsHeader = header.get("X-Cursor-RetryInterceptor-MaxDelayMs");
    return {
        maxRetries: parsePositiveInt(maxRetriesHeader, 0) ?? defaults2.maxRetries,
        baseDelayMs: parsePositiveInt(baseDelayMsHeader, 1) ?? defaults2.baseDelayMs,
        maxDelayMs: parsePositiveInt(maxDelayMsHeader, 1) ?? defaults2.maxDelayMs
    };
}
var RewindableAsyncIterable = class {
    constructor(source){
        this.buffer = [];
        this.sourceIterator = source[Symbol.asyncIterator]();
        this.retryFinished = false;
        this.generation = 0;
    }
    onRetryFinished() {
        this.retryFinished = true;
    }
    async *[Symbol.asyncIterator]() {
        if (this.retryFinished) {
            throw new Error("No new iterators can be created after retry finished; this is a bug");
        }
        let replayIndex = 0;
        const currentGeneration = this.generation;
        this.generation++;
        while(true){
            if (currentGeneration !== this.generation - 1) {
                break;
            }
            if (replayIndex < this.buffer.length) {
                yield this.buffer[replayIndex++];
                continue;
            }
            const result = await this.sourceIterator.next();
            if (!result.done) {
                if (!this.retryFinished || currentGeneration !== this.generation - 1) {
                    this.buffer.push(result.value);
                } else {
                    while(replayIndex < this.buffer.length){
                        yield this.buffer[replayIndex];
                        replayIndex++;
                    }
                    yield result.value;
                }
            } else if (replayIndex >= this.buffer.length) {
                break;
            }
        }
    }
};
exports2.RewindableAsyncIterable = RewindableAsyncIterable;
async function executeWithRetry(host, req, config2, interceptorName, executeRequest) {
    const { maxRetries, baseDelayMs, maxDelayMs } = config2;
    const dynamicConfig = await fetchDynamicRetryConfig(host, interceptorName);
    const methodName = req.method.name;
    const requestId = typeof req.header?.get === "function" ? req.header.get("x-request-id") ?? void 0 : void 0;
    let attemptNumber = 0;
    let lastError = new connect_1.ConnectError("executeWithRetry: unknown error", connect_1.Code.Unknown);
    while(attemptNumber <= maxRetries){
        try {
            const result = await executeRequest();
            if (attemptNumber > 0) {
                _logRetrySuccess(host, interceptorName, methodName, attemptNumber, requestId);
            }
            if (req.message instanceof RewindableAsyncIterable) {
                req.message.onRetryFinished();
            }
            return result;
        } catch (error3) {
            lastError = error3;
            if (!(error3 instanceof connect_1.ConnectError)) {
                throw error3;
            }
            const shouldRetry = shouldRetryOnError(error3.code, error3.message, methodName, dynamicConfig);
            if (!shouldRetry) {
                throw error3;
            }
            const delayMs = (0, constants_1.calculateBackoffDelay)(attemptNumber, baseDelayMs, maxDelayMs);
            attemptNumber++;
            if (attemptNumber <= maxRetries) {
                _logRetryAttempt(host, interceptorName, methodName, attemptNumber, maxRetries, delayMs, error3.code, error3.message, requestId);
                await sleep4(delayMs);
            }
        }
    }
    _logMaxRetriesExhausted(host, interceptorName, methodName, maxRetries, attemptNumber, lastError.code, lastError.message, requestId);
    throw lastError;
}
function createStreamRetryInterceptor(host, defaults2) {
    const defaultConfig = {
        maxRetries: defaults2?.maxRetries ?? 3,
        baseDelayMs: defaults2?.baseDelayMs ?? 1e3,
        maxDelayMs: defaults2?.maxDelayMs ?? 3e4
    };
    return (next)=>async (req)=>{
            try {
                const isDisabled = await host.checkFeatureGate("retry_interceptor_disabled");
                if (isDisabled) {
                    return next(req);
                }
            } catch (error3) {
                host.debugLog.warn("[StreamRetryInterceptor] Failed to check feature gate, skipping retry logic", error3);
                return next(req);
            }
            if (req.method.kind !== protobuf_1.MethodKind.BiDiStreaming && req.method.kind !== protobuf_1.MethodKind.ClientStreaming && req.method.kind !== protobuf_1.MethodKind.ServerStreaming) {
                return next(req);
            }
            const config2 = getRetryConfig(req, defaultConfig);
            if (config2 === null) {
                return next(req);
            }
            if (req.method.kind === protobuf_1.MethodKind.BiDiStreaming || req.method.kind === protobuf_1.MethodKind.ClientStreaming) {
                const rewindableIterable = new RewindableAsyncIterable(req.message);
                req = {
                    ...req,
                    message: rewindableIterable
                };
            }
            return executeWithRetry(host, req, config2, "StreamRetryInterceptor", ()=>next(req));
        };
}
function createUnaryRetryInterceptor(host, defaults2) {
    const defaultConfig = {
        maxRetries: defaults2?.maxRetries ?? 3,
        baseDelayMs: defaults2?.baseDelayMs ?? 1e3,
        maxDelayMs: defaults2?.maxDelayMs ?? 3e4
    };
    return (next)=>async (req)=>{
            try {
                const isDisabled = await host.checkFeatureGate("retry_interceptor_disabled");
                if (isDisabled) {
                    return next(req);
                }
            } catch (error3) {
                host.debugLog.warn("[UnaryRetryInterceptor] Failed to check feature gate, skipping retry logic", error3);
                return next(req);
            }
            if (req.method.kind !== protobuf_1.MethodKind.Unary) {
                return next(req);
            }
            const config2 = getRetryConfig(req, defaultConfig);
            if (config2 === null) {
                return next(req);
            }
            return executeWithRetry(host, req, config2, "UnaryRetryInterceptor", ()=>next(req));
        };
}
function _logRetrySuccess(host, interceptorName, methodName, attemptNumber, requestId) {
    const totalRequestsMade = attemptNumber + 1;
    host.debugLog.info(`[${interceptorName}] Successfully completed after ${attemptNumber} retries (${totalRequestsMade} total requests made) for ${methodName}`);
    structuredLogProvider_js_1.StructuredLogProviderImpl.info("transport", "Retry succeeded", {
        service: "retry_interceptor",
        subkey: "retry_success",
        interceptor: interceptorName,
        method: methodName,
        requestId,
        retryAttemptNumber: attemptNumber,
        totalRequestsMade
    });
}
function _logRetryAttempt(host, interceptorName, methodName, attemptNumber, maxRetries, delayMs, errorCode3, errorMessage4, requestId) {
    const totalRequestsMade = attemptNumber;
    host.debugLog.info(`[${interceptorName}] About to retry ${methodName} (retry attempt ${attemptNumber}/${maxRetries}, ${totalRequestsMade} requests made so far) after ${delayMs}ms delay. Error: ${errorCode3} - ${errorMessage4}`);
    structuredLogProvider_js_1.StructuredLogProviderImpl.info("transport", "Retry attempt", {
        service: "retry_interceptor",
        subkey: "retry_attempt",
        interceptor: interceptorName,
        method: methodName,
        requestId,
        retryAttemptNumber: attemptNumber,
        totalRequestsMade,
        maxRetries,
        delayMs,
        errorCode: connect_1.Code[errorCode3],
        errorMessage: errorMessage4
    });
}
function _logMaxRetriesExhausted(host, interceptorName, methodName, maxRetries, attemptNumber, errorCode3, errorMessage4, requestId) {
    const totalRequestsMade = attemptNumber + 1;
    host.debugLog.warn(`[${interceptorName}] Max retries (${maxRetries}) exhausted for ${methodName} after ${totalRequestsMade} total requests made, giving up. Error: ${errorCode3} - ${errorMessage4}`);
    structuredLogProvider_js_1.StructuredLogProviderImpl.warn("transport", "Retry exhausted", {
        service: "retry_interceptor",
        subkey: "max_retries_exhausted",
        interceptor: interceptorName,
        method: methodName,
        requestId,
        retryAttemptNumber: attemptNumber,
        totalRequestsMade,
        errorCode: connect_1.Code[errorCode3],
        errorMessage: errorMessage4
    });
}

return exports2;
}
