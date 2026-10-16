import { bidi_connect_exports } from "../../../bidi_connect_exports.js";
import { init_dist2 } from "../../../constants/dist/index.js";
import { __toCommonJS } from "../aggregatingMetricsProvider.js";
import { require_asyncIterPushable } from "./asyncIterPushable.js";
import { require_transportTelemetry } from "./transportTelemetry.js";
import { dist_exports } from "../../../dist_exports.js";
import { bidi_pb_exports } from "../../../entry.js";
import { require_cjs3 } from "../../../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/cjs/index.js";
import { require_protocol } from "../../../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/cjs/protocol/index.js";
import { init_bidi_connect } from "../../../proto/dist/generated/aiserver/v1/bidi_connect.js";
import { init_bidi_pb } from "../../../proto/dist/generated/aiserver/v1/bidi_pb.js";
import { init_utils_pb2 } from "../../../proto/dist/generated/aiserver/v1/utils_pb.js";
import { utils_pb_exports } from "../../../utils_pb_exports.js";
var __wakaru_require_bidiTransportFactory_cache;
export function require_bidiTransportFactory() {
if (__wakaru_require_bidiTransportFactory_cache) return __wakaru_require_bidiTransportFactory_cache;
var exports2 = {};
__wakaru_require_bidiTransportFactory_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.BidiTransportFactory = exports2.BIDI_APPEND_MAX_CONSECUTIVE_FAILURES = void 0;
var node_crypto_1 = require("node:crypto");
var constants_1 = (init_dist2(), __toCommonJS(dist_exports));
var bidi_connect_js_1 = (init_bidi_connect(), __toCommonJS(bidi_connect_exports));
var bidi_pb_js_1 = (init_bidi_pb(), __toCommonJS(bidi_pb_exports));
var utils_pb_js_1 = (init_utils_pb2(), __toCommonJS(utils_pb_exports));
var connect_1 = require_cjs3();
var protocol_1 = require_protocol();
var asyncIterPushable_js_1 = require_asyncIterPushable();
var transportTelemetry_js_1 = require_transportTelemetry();
var AgentTransportModeAttributingTransport = class {
    constructor(transport, mode){
        this.transport = transport;
        this.mode = mode;
    }
    unary(service, method, signal, timeoutMs, header, input, contextValues) {
        return this.transport.unary(service, method, signal, timeoutMs, header, input, contextValues);
    }
    async stream(service, method, signal, timeoutMs, header, input, contextValues) {
        const response = await this.transport.stream(service, method, signal, timeoutMs, header, input, contextValues);
        response.header.set(constants_1.AGENT_TRANSPORT_MODE_RESPONSE_HEADER, this.mode);
        return response;
    }
};
var DEFAULT_BIDI_APPEND_CONCURRENCY = 32;
var BIDI_APPEND_FIX_FEATURE_GATE = "bidi_append_fix";
var APPEND_BACKOFF_BASE_MS = 1e3;
var APPEND_BACKOFF_MAX_MS = 3e4;
exports2.BIDI_APPEND_MAX_CONSECUTIVE_FAILURES = 5;
function toError3(error3) {
    return error3 instanceof Error ? error3 : new Error(String(error3));
}
function connectCodeTag(error3) {
    return error3 instanceof connect_1.ConnectError ? connect_1.Code[error3.code] : "non_connect";
}
function connectCodeLineField(error3) {
    return error3 instanceof connect_1.ConnectError ? {
        connectCode: connect_1.Code[error3.code]
    } : {};
}
var BIDI_APPEND_FATAL_MARKER2 = "cursorBidiAppendFatal";
function markFatalAppendError(error3) {
    try {
        Object.defineProperty(error3, BIDI_APPEND_FATAL_MARKER2, {
            value: true,
            enumerable: false,
            configurable: true
        });
    } catch  {}
    return error3;
}
function isRetryableAppendError(error3) {
    if (!(error3 instanceof connect_1.ConnectError)) {
        return true;
    }
    return error3.code === connect_1.Code.Unavailable || error3.code === connect_1.Code.Internal || error3.code === connect_1.Code.DeadlineExceeded || error3.code === connect_1.Code.Aborted;
}
function waitForDelay(delayMs, signals) {
    const activeSignals = signals.filter((signal)=>signal !== void 0);
    if (delayMs <= 0) {
        return Promise.resolve(!activeSignals.some((signal)=>signal.aborted));
    }
    return new Promise((resolve36)=>{
        let timeout2;
        function cleanup() {
            if (timeout2 !== void 0) {
                clearTimeout(timeout2);
            }
            for (const signal of activeSignals){
                signal.removeEventListener("abort", onAbort);
            }
        }
        function onAbort() {
            cleanup();
            resolve36(false);
        }
        timeout2 = setTimeout(()=>{
            cleanup();
            resolve36(true);
        }, delayMs);
        for (const signal of activeSignals){
            signal.addEventListener("abort", onAbort, {
                once: true
            });
        }
        if (activeSignals.some((signal)=>signal.aborted)) {
            cleanup();
            resolve36(false);
        }
    });
}
var Semaphore = class {
    constructor(permits){
        this.waiting = [];
        this.permits = permits;
    }
    async acquire() {
        if (this.permits > 0) {
            this.permits--;
            return;
        }
        return new Promise((resolve36)=>{
            this.waiting.push(resolve36);
        });
    }
    release() {
        if (this.waiting.length > 0) {
            const next = this.waiting.shift();
            next();
        } else {
            this.permits++;
        }
    }
};
function getRequestId2(header) {
    const requestId = header instanceof Headers ? header.get("x-request-id") : Array.isArray(header) ? header.find(([key])=>key === "x-request-id")?.[1] : header?.["x-request-id"];
    if (typeof requestId === "string") {
        return requestId;
    }
    const id = (0, node_crypto_1.randomUUID)();
    if (header instanceof Headers) {
        header.set("x-request-id", id);
    } else if (Array.isArray(header)) {
        header.push([
            "x-request-id",
            id
        ]);
    } else if (typeof header === "object" && header !== null) {
        header["x-request-id"] = id;
    }
    return id;
}
var BidiBaseTransport = class {
    constructor(host, bidiEndpointMap, bidiClient, transport, mode, binaryEncoding){
        this.host = host;
        this.bidiEndpointMap = bidiEndpointMap;
        this.bidiClient = bidiClient;
        this.transport = transport;
        this.mode = mode;
        this.binaryEncoding = binaryEncoding;
        this.debugLog = host.debugLog;
    }
    telemetryTags(telemetry) {
        return {
            transport_mode: telemetry.transportMode,
            loop: telemetry.loop,
            target_method: telemetry.targetMethod
        };
    }
    recordAppend(telemetry, outcome, error3) {
        (0, transportTelemetry_js_1.incrementTransportMetric)(this.host, "agent_client.bidi_append", {
            ...this.telemetryTags(telemetry),
            outcome,
            ...error3 === void 0 ? {} : {
                connect_code: connectCodeTag(error3)
            }
        });
    }
    recordPoll(telemetry, outcome, error3) {
        (0, transportTelemetry_js_1.incrementTransportMetric)(this.host, "agent_client.bidi_poll", {
            ...this.telemetryTags(telemetry),
            outcome,
            ...error3 === void 0 ? {} : {
                connect_code: connectCodeTag(error3)
            }
        });
    }
    emitStreamLog(telemetry, level, subkey, message, fields) {
        (0, transportTelemetry_js_1.emitTransportStructuredLog)(this.host, {
            level,
            message,
            metadata: {
                service: "bidi_transport",
                subkey,
                requestId: telemetry.requestId,
                transportMode: telemetry.transportMode,
                loop: telemetry.loop,
                targetMethod: telemetry.targetMethod,
                ...fields
            }
        });
    }
    async unary(service, method, signal, timeoutMs, header, input, contextValues) {
        return this.transport.unary(service, method, signal, timeoutMs, header, input, contextValues);
    }
    async stream(service, method, signal, timeoutMs, header, input, contextValues) {
        const requestId = getRequestId2(header);
        const loop = (0, transportTelemetry_js_1.classifyBidiStreamLoop)(service.typeName, method.name);
        const companion = this.bidiEndpointMap[method.name];
        if (companion) {
            method = {
                ...companion,
                O: method.O
            };
        }
        const telemetry = {
            requestId,
            transportMode: this.mode,
            loop,
            targetMethod: method.name
        };
        let signalAppendError;
        const appendErrorPromise = new Promise((_2, reject2)=>{
            signalAppendError = reject2;
        });
        appendErrorPromise.catch(()=>{});
        const startOfStream = this.connectForStartOfStream(telemetry, service, method, signal, timeoutMs, header, contextValues);
        this.startYieldingInputsToTheServer(telemetry, input, timeoutMs, signal, header, signalAppendError);
        const response = await startOfStream;
        const originalMessage = response.message;
        const wrappedMessage = {
            [Symbol.asyncIterator] () {
                const iterator = originalMessage[Symbol.asyncIterator]();
                return {
                    next () {
                        return Promise.race([
                            iterator.next(),
                            appendErrorPromise
                        ]);
                    },
                    return (value) {
                        return iterator.return?.(value) ?? Promise.resolve({
                            done: true,
                            value: void 0
                        });
                    },
                    throw (e) {
                        return iterator.throw?.(e) ?? Promise.resolve({
                            done: true,
                            value: void 0
                        });
                    }
                };
            }
        };
        return {
            ...response,
            message: wrappedMessage
        };
    }
    startYieldingInputsToTheServer(telemetry, input, timeoutMs = 10 * 60 * 1e3, signal, headers, onFatalAppendError) {
        const { requestId } = telemetry;
        this.debugLog.info(`[BidiTransport:${requestId}] starting to yield inputs to the server, with timeout ${timeoutMs}ms`);
        if (signal?.aborted) {
            this.debugLog.info(`[BidiTransport:${requestId}] already aborted, not starting`);
            return;
        }
        Promise.resolve().then(async ()=>{
            let useBidiAppendFix = false;
            try {
                useBidiAppendFix = await this.host.checkFeatureGate(BIDI_APPEND_FIX_FEATURE_GATE);
            } catch (error3) {
                this.debugLog.warn(`[BidiTransport:${requestId}] failed to check ${BIDI_APPEND_FIX_FEATURE_GATE} feature gate, keeping existing behavior`, error3);
            }
            let appendSeqno = 0;
            let appendFailedFatally = false;
            const appendFatalController = new AbortController();
            const iterator = input[Symbol.asyncIterator]();
            const semaphore = new Semaphore(DEFAULT_BIDI_APPEND_CONCURRENCY);
            const inFlightPromises = [];
            const signalFatalAppendError = (error3, message, fatal)=>{
                if (appendFailedFatally) {
                    return;
                }
                appendFailedFatally = true;
                appendFatalController.abort();
                this.debugLog.error(`[BidiTransport:${requestId}] ${message}`);
                this.recordAppend(telemetry, fatal.outcome, error3);
                this.emitStreamLog(telemetry, "warn", "bidi_append_fatal", "BidiAppend failed fatally", {
                    outcome: fatal.outcome,
                    seqno: fatal.seqno,
                    failures: fatal.failures,
                    ...connectCodeLineField(error3)
                });
                onFatalAppendError(markFatalAppendError(toError3(error3)));
            };
            const abortPromise = signal ? new Promise((_2, reject2)=>{
                signal.addEventListener("abort", ()=>reject2(new Error("Aborted")), {
                    once: true
                });
            }) : void 0;
            abortPromise?.catch(()=>{});
            while(true){
                if (appendFailedFatally) {
                    break;
                }
                try {
                    let timeoutTimer;
                    const timeoutPromise = new Promise((_2, reject2)=>{
                        timeoutTimer = setTimeout(()=>reject2(new Error("Timeout waiting for next input")), timeoutMs);
                    });
                    const promises4 = [
                        iterator.next(),
                        timeoutPromise
                    ];
                    if (abortPromise) {
                        promises4.push(abortPromise);
                    }
                    let result;
                    try {
                        result = await Promise.race(promises4);
                    } finally{
                        if (timeoutTimer !== void 0) {
                            clearTimeout(timeoutTimer);
                        }
                    }
                    if (result.done) {
                        this.debugLog.info(`[BidiTransport:${requestId}] iterator done, breaking loop`);
                        break;
                    }
                    await semaphore.acquire();
                    if (appendFailedFatally) {
                        semaphore.release();
                        break;
                    }
                    const currentSeqno = appendSeqno++;
                    const requestIdObj = new bidi_pb_js_1.BidiRequestId({
                        requestId
                    });
                    const payloadBytes = result.value.toBinary();
                    const appendRequest = this.binaryEncoding ? {
                        requestId: requestIdObj,
                        appendSeqno: BigInt(currentSeqno),
                        dataBinary: payloadBytes
                    } : {
                        requestId: requestIdObj,
                        appendSeqno: BigInt(currentSeqno),
                        data: Buffer.from(payloadBytes).toString("hex")
                    };
                    const appendOnce = async ()=>{
                        await this.bidiClient.bidiAppend(appendRequest, {
                            headers
                        });
                    };
                    const appendWithRetry = async ()=>{
                        let appendFailures = 0;
                        while(!signal?.aborted && !appendFailedFatally){
                            try {
                                await appendOnce();
                                this.recordAppend(telemetry, "ok");
                                return;
                            } catch (e) {
                                if (signal?.aborted || appendFailedFatally) {
                                    return;
                                }
                                this.debugLog.error(`[BidiTransport:${requestId}] bidiAppend failed for seqno ${currentSeqno}:`, e);
                                if (!isRetryableAppendError(e)) {
                                    signalFatalAppendError(e, `bidiAppend failed with non-retryable error for seqno ${currentSeqno}, surfacing fatal append error`, {
                                        outcome: "fatal_non_retryable",
                                        seqno: currentSeqno,
                                        failures: appendFailures + 1
                                    });
                                    return;
                                }
                                appendFailures++;
                                if (appendFailures >= exports2.BIDI_APPEND_MAX_CONSECUTIVE_FAILURES) {
                                    signalFatalAppendError(e, `bidiAppend failed ${appendFailures} times for seqno ${currentSeqno}, surfacing fatal append error`, {
                                        outcome: "fatal_budget",
                                        seqno: currentSeqno,
                                        failures: appendFailures
                                    });
                                    return;
                                }
                                this.recordAppend(telemetry, "retried", e);
                                const backoffMs = (0, constants_1.calculateBackoffDelay)(appendFailures - 1, APPEND_BACKOFF_BASE_MS, APPEND_BACKOFF_MAX_MS);
                                this.debugLog.info(`[BidiTransport:${requestId}] bidiAppend failure #${appendFailures}, backing off ${backoffMs}ms before retrying seqno ${currentSeqno}`);
                                const delayElapsed = await waitForDelay(backoffMs, [
                                    signal,
                                    appendFatalController.signal
                                ]);
                                if (!delayElapsed) {
                                    return;
                                }
                            }
                        }
                    };
                    const appendPromise = (useBidiAppendFix ? appendWithRetry() : appendOnce().then(()=>{
                        this.recordAppend(telemetry, "ok");
                    }, (e)=>{
                        this.debugLog.error(`[BidiTransport:${requestId}] bidiAppend failed for seqno ${currentSeqno}:`, e);
                        this.recordAppend(telemetry, "fatal_unretried", e);
                        this.emitStreamLog(telemetry, "warn", "bidi_append_fatal", "BidiAppend failed fatally", {
                            outcome: "fatal_unretried",
                            seqno: currentSeqno,
                            failures: 1,
                            ...connectCodeLineField(e)
                        });
                        onFatalAppendError(markFatalAppendError(toError3(e)));
                    })).finally(()=>{
                        semaphore.release();
                    });
                    inFlightPromises.push(appendPromise);
                } catch (e) {
                    if (e.message === "Timeout waiting for next input") {
                        this.debugLog.info(`[BidiTransport:${requestId}] timeout waiting for next input, breaking loop`);
                        this.recordAppend(telemetry, "input_idle_timeout");
                        this.emitStreamLog(telemetry, "info", "bidi_append_input_idle", "BidiAppend pump closed on input idle", {
                            timeoutMs,
                            appendsSent: appendSeqno
                        });
                        break;
                    }
                    if (e.message === "Aborted") {
                        this.debugLog.info(`[BidiTransport:${requestId}] aborted, breaking loop`);
                        break;
                    }
                    this.debugLog.error(`[BidiTransport:${requestId}] error processing input:`, e);
                    throw e;
                }
            }
            await Promise.allSettled(inFlightPromises);
            this.debugLog.info(`[BidiTransport:${requestId}] finished yielding inputs to the server`);
        }).catch((e)=>{
            this.debugLog.error(`[BidiTransport:${requestId}] error in yield promise:`, e);
        });
    }
};
var BidiSSETransport = class extends BidiBaseTransport {
    async connectForStartOfStream(telemetry, service, method, signal, timeoutMs, header, contextValues) {
        const requestIdObj = new bidi_pb_js_1.BidiRequestId({
            requestId: telemetry.requestId
        });
        const input = (0, protocol_1.createAsyncIterable)([
            requestIdObj
        ]);
        return this.transport.stream(service, method, signal, timeoutMs, header, input, contextValues);
    }
};
var BidiPollTransport = class extends BidiBaseTransport {
    async connectForStartOfStream(telemetry, service, method, signal, timeoutMs, header, contextValues) {
        const { requestId } = telemetry;
        const requestIdObj = new bidi_pb_js_1.BidiRequestId({
            requestId
        });
        const startObj = new bidi_pb_js_1.BidiPollRequest({
            requestId: requestIdObj,
            startRequest: true
        });
        const input = (0, protocol_1.createAsyncIterable)([
            startObj
        ]);
        const pollMethod = {
            ...method,
            O: bidi_pb_js_1.BidiPollResponse
        };
        let response = await this.transport.stream(service, pollMethod, signal, timeoutMs, header, input, contextValues);
        const pushable = new asyncIterPushable_js_1.AsyncIterPushable(timeoutMs ?? 10 * 60 * 1e3);
        (async function() {
            let useBidiAppendFix = false;
            try {
                useBidiAppendFix = await this.host.checkFeatureGate(BIDI_APPEND_FIX_FEATURE_GATE);
            } catch (error3) {
                this.debugLog.warn(`[BidiTransport:${requestId}] failed to check ${BIDI_APPEND_FIX_FEATURE_GATE} feature gate, keeping existing behavior`, error3);
            }
            let eof = false;
            let consecutiveEmptyPolls = 0;
            let seqnoOutcome;
            const pollObj = new bidi_pb_js_1.BidiPollRequest({
                requestId: requestIdObj
            });
            try {
                let expected_seqno = BigInt(0);
                while(!signal?.aborted){
                    let receivedMessages = false;
                    for await (const message of response.message){
                        receivedMessages = true;
                        if (message.eof || signal?.aborted === true) {
                            eof = true;
                            break;
                        }
                        if (message.seqno !== expected_seqno) {
                            seqnoOutcome = message.seqno > expected_seqno ? "seqno_gap" : "seqno_duplicate";
                            this.emitStreamLog(telemetry, "warn", "bidi_poll_seqno", "BidiPoll refused an out-of-order seqno", {
                                outcome: seqnoOutcome,
                                expectedSeqno: expected_seqno.toString(),
                                receivedSeqno: message.seqno.toString()
                            });
                            const errorMessage4 = `Unexpected seqno: ${message.seqno} != ${expected_seqno}. Please try again, or contact support if the issue persists.`;
                            const errorDetails = new utils_pb_js_1.ErrorDetails({
                                error: utils_pb_js_1.ErrorDetails_Error.NETWORK_ERROR,
                                details: {
                                    title: "Network Error",
                                    detail: errorMessage4,
                                    isRetryable: true
                                },
                                isExpected: false
                            });
                            throw new connect_1.ConnectError(errorMessage4, connect_1.Code.Unavailable, void 0, [
                                errorDetails
                            ]);
                        }
                        expected_seqno += BigInt(1);
                        const msgObj = method.O.fromBinary(Buffer.from(message.data, "hex"));
                        pushable.push(msgObj);
                    }
                    if (eof) {
                        this.recordPoll(telemetry, "eof");
                        break;
                    }
                    this.recordPoll(telemetry, receivedMessages ? "slice" : "empty");
                    if (useBidiAppendFix && receivedMessages) {
                        consecutiveEmptyPolls = 0;
                    } else if (useBidiAppendFix) {
                        consecutiveEmptyPolls++;
                        const backoffMs = (0, constants_1.calculateBackoffDelay)(consecutiveEmptyPolls - 1, 1e3, 3e4);
                        this.debugLog.info(`[BidiTransport:${requestId}] empty poll response #${consecutiveEmptyPolls}, backing off ${backoffMs}ms`);
                        const delayElapsed = await waitForDelay(backoffMs, [
                            signal
                        ]);
                        if (!delayElapsed) {
                            break;
                        }
                    }
                    if (signal?.aborted) {
                        break;
                    }
                    const input2 = (0, protocol_1.createAsyncIterable)([
                        pollObj
                    ]);
                    response = await this.transport.stream(service, pollMethod, signal, timeoutMs, header, input2, contextValues);
                }
            } catch (e) {
                this.recordPoll(telemetry, seqnoOutcome ?? (signal?.aborted ? "cancelled" : "error"), e);
                pushable.error(e);
            } finally{
                pushable.end();
            }
        }).bind(this)();
        return {
            ...response,
            method,
            message: pushable
        };
    }
};
var BidiTransportFactory = class {
    constructor(host, transportFactory, bidiSSEEndpointMap, bidiPollEndpointMap){
        this.host = host;
        this.transportFactory = transportFactory;
        this.bidiSSEEndpointMap = bidiSSEEndpointMap;
        this.bidiPollEndpointMap = bidiPollEndpointMap;
    }
    createTransport(params) {
        if (params.useHttp2) {
            const transport2 = this.transportFactory.createTransport({
                ...params,
                pingConfig: params.pingConfig,
                usePooledConnections: params.usePooledConnections,
                connectionPoolSize: params.connectionPoolSize
            });
            transport2.transport = new AgentTransportModeAttributingTransport(transport2.transport, "http2");
            return transport2;
        }
        const transport = this.transportFactory.createTransport({
            ...params,
            useHttp2: false,
            getHttp1KeepaliveDisabled: params.getHttp1KeepaliveDisabled,
            http1KeepaliveInitialDelayMs: params.http1KeepaliveInitialDelayMs
        });
        let bidiTransport = params.bidiTransport?.transport;
        if (!bidiTransport) {
            bidiTransport = transport.transport;
        }
        const bidiClient = (0, connect_1.createClient)(bidi_connect_js_1.BidiService, bidiTransport);
        const binaryEncoding = params.binaryEncoding === true;
        const sseEnabled = !this.host.isHttp1SseDisabled();
        if (sseEnabled) {
            transport.transport = new BidiSSETransport(this.host, this.bidiSSEEndpointMap, bidiClient, transport.transport, "http1_sse", binaryEncoding);
            transport.transport = new AgentTransportModeAttributingTransport(transport.transport, "http1_sse");
        } else {
            transport.transport = new BidiPollTransport(this.host, this.bidiPollEndpointMap, bidiClient, transport.transport, "http1_poll", binaryEncoding);
            transport.transport = new AgentTransportModeAttributingTransport(transport.transport, "http1_poll");
        }
        return transport;
    }
};
exports2.BidiTransportFactory = BidiTransportFactory;

return exports2;
}
