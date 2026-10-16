import { createClient, createConnectRouter, createContextValues, createTransport, getAbortSignalReason, validateReadWriteMaxBytes } from "./dist_exports.js";
import { getSpan2 } from "./agent-client/dist/exec-controller.js";
import { GRAMMAR_HINT, HELPER_TIMEOUT_SECS_MAX, HELPER_TIMEOUT_SECS_MIN, PrivateInferenceConfigError, REJECTED_GATEWAY_KEYS, RESPONSES_API_BACKEND, SHORTHAND_ENV_VARS } from "./agent-host/dist/agentAdapter/local/private-inference-config.js";
import { LocalGitExecutor } from "./agent-host/dist/exec/git/local-git-executor.js";
import { NoopHostMcpProvider } from "./agent-host/dist/exec/mcp/index.js";
import { callerContextKey } from "./context-rpc/dist/index.js";
import { INHERITABLE_SPAN_ATTRIBUTES_KEY, ROOT_SPAN_KEY, ROOT_SPAN_START_MS_KEY, SPAN_KEY2, SUPPRESS_CHILD_SPANS_KEY } from "./context/dist/otel.js";
import { childSpanSuppressionPredicate } from "./entry.js";
import { GeneratedFileChecker, import_node_child_process2 } from "./git-core/dist/generated-file-detection.js";
import { execFileAsync, import_node_child_process3 } from "./git-core/dist/git-exec.js";
import { BARE_REPO_GUARD_ENTRIES, REPO_CONFIG_EXECUTION_GUARD_ENTRIES } from "./git-core/dist/process-env.js";
import { isWindows2, path8 } from "./git-core/dist/util.js";
import { context } from "./node_modules/.pnpm/@opentelemetry+api@1.9.0/node_modules/@opentelemetry/api/build/esm/context-api.js";
import { trace } from "./node_modules/.pnpm/@opentelemetry+api@1.9.0/node_modules/@opentelemetry/api/build/esm/trace-api.js";
import { isSpanContextValid } from "./node_modules/.pnpm/@opentelemetry+api@1.9.0/node_modules/@opentelemetry/api/build/esm/trace/NoopTracer.js";
import { SpanKind } from "./node_modules/.pnpm/@opentelemetry+api@1.9.0/node_modules/@opentelemetry/api/build/esm/trace/span_kind.js";
import { SpanStatusCode } from "./node_modules/.pnpm/@opentelemetry+api@1.9.0/node_modules/@opentelemetry/api/build/esm/trace/status.js";
import { compressionBrotli, compressionGzip } from "./node_modules/.pnpm/_46b84b12e081161e2c23c10160f61a1d/node_modules/@connectrpc/connect-node/dist/esm/compression.js";
import { fallback2 } from "./node_modules/.pnpm/_46b84b12e081161e2c23c10160f61a1d/node_modules/@connectrpc/connect-node/dist/esm/connect-node-adapter.js";
import { Http2SessionManager, http2 } from "./node_modules/.pnpm/_46b84b12e081161e2c23c10160f61a1d/node_modules/@connectrpc/connect-node/dist/esm/http2-session-manager.js";
import { H2Code } from "./node_modules/.pnpm/_46b84b12e081161e2c23c10160f61a1d/node_modules/@connectrpc/connect-node/dist/esm/node-error.js";
import { http, https } from "./node_modules/.pnpm/_46b84b12e081161e2c23c10160f61a1d/node_modules/@connectrpc/connect-node/dist/esm/node-universal-client.js";
import { __asyncGenerator5, __asyncValues5, __await5 } from "./node_modules/.pnpm/_46b84b12e081161e2c23c10160f61a1d/node_modules/@connectrpc/connect-node/dist/esm/node-universal-handler.js";
import { Code } from "./node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/code.js";
import { ConnectError } from "./node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/connect-error.js";
import { TomlDate } from "./node_modules/.pnpm/smol-toml@1.7.1/node_modules/smol-toml/dist/date.js";
import { TomlError } from "./node_modules/.pnpm/smol-toml@1.7.1/node_modules/smol-toml/dist/error.js";
import { FLOAT_REGEX, INT_REGEX, LEADING_ZERO } from "./node_modules/.pnpm/smol-toml@1.7.1/node_modules/smol-toml/dist/primitive.js";
import { KEY_PART_RE } from "./node_modules/.pnpm/smol-toml@1.7.1/node_modules/smol-toml/dist/struct.js";
import { DashboardService } from "./proto/dist/generated/aiserver/v1/dashboard_connect.js";
import { GetTeamsRequest, GetUserPrivacyModeRequest, PrivateInferenceEnablement } from "./proto/dist/generated/aiserver/v1/dashboard_pb.js";
import { AGENT_HOST_DAEMON_ALLOW_ENV_API_KEY_FALLBACK, DaemonAuthStore } from "./src/daemon-auth.ts";
import { CURSOR_AGENTS_DEV_DIR_NAME, CURSOR_AGENTS_DIR_NAME, DAEMON_SOCKET_FILENAME, import_node_os3, import_node_path8 } from "./src/listen.ts";
import { DEFAULT_DAEMON_DASHBOARD_ENDPOINT } from "./src/private-inference-enablement.ts";
function isChildSpanNameSuppressed(spanName) {
    return childSpanSuppressionPredicate?.(spanName) ?? false;
}
function resolveSpanName(ctx) {
    return ctx.name || "anonymous-context";
}
export function isChildSpanSuppressed(ctx, parentSpan) {
    if (!parentSpan) {
        return false;
    }
    return ctx.get(SUPPRESS_CHILD_SPANS_KEY) || isChildSpanNameSuppressed(resolveSpanName(ctx));
}
export function getTracer(name17 = "context-tracer") {
    return trace.getTracer(name17);
}
export function withSpan(ctx, options2) {
    const tracer = getTracer();
    const parentSpan = ctx.get(SPAN_KEY2);
    if (isChildSpanSuppressed(ctx, parentSpan)) {
        return ctx;
    }
    const spanName = resolveSpanName(ctx);
    let span;
    if (parentSpan) {
        const parentCtx = trace.setSpan(context.active(), parentSpan);
        span = tracer.startSpan(spanName, options2, parentCtx);
    } else {
        span = tracer.startSpan(spanName, options2);
    }
    const inherited = ctx.get(INHERITABLE_SPAN_ATTRIBUTES_KEY);
    for(const key in inherited){
        span.setAttribute(key, inherited[key]);
    }
    const startMs = Date.now();
    let ctxWith = ctx.with(SPAN_KEY2, span);
    if (!parentSpan) {
        ctxWith = ctxWith.with(ROOT_SPAN_KEY, span).with(ROOT_SPAN_START_MS_KEY, startMs);
    }
    return ctxWith;
}
function connectErrorFromNodeReason(reason) {
    let code = Code.Internal;
    const chain = unwrapNodeErrorChain(reason).map(getNodeErrorProps);
    if (chain.some((p2)=>p2.code == "ERR_STREAM_WRITE_AFTER_END")) {
        code = Code.Aborted;
    } else if (chain.some((p2)=>p2.code == "ERR_STREAM_DESTROYED" || p2.code == "ERR_HTTP2_INVALID_STREAM" || p2.code == "ECONNRESET")) {
        code = Code.Aborted;
    } else if (chain.some((p2)=>p2.code == "ETIMEDOUT" || p2.code == "ENOTFOUND" || p2.code == "EAI_AGAIN" || p2.code == "ECONNREFUSED")) {
        code = Code.Unavailable;
    }
    const ce2 = ConnectError.from(reason, code);
    if (ce2 !== reason) {
        ce2.cause = reason;
    }
    return ce2;
}
function unwrapNodeErrorChain(reason) {
    const chain = [];
    for(;;){
        if (!(reason instanceof Error)) {
            break;
        }
        if (chain.includes(reason)) {
            break;
        }
        chain.push(reason);
        if (!("cause" in reason)) {
            break;
        }
        reason = reason.cause;
    }
    return chain;
}
function getNodeErrorProps(reason) {
    const props = {};
    if (reason instanceof Error) {
        if ("code" in reason && typeof reason.code == "string") {
            props.code = reason.code;
        }
        if ("syscall" in reason && typeof reason.syscall == "string") {
            props.syscall = reason.syscall;
        }
    }
    return props;
}
function connectErrorFromH2ResetCode(rstCode) {
    switch(rstCode){
        case H2Code.PROTOCOL_ERROR:
        case H2Code.INTERNAL_ERROR:
        case H2Code.FLOW_CONTROL_ERROR:
        case H2Code.SETTINGS_TIMEOUT:
        case H2Code.FRAME_SIZE_ERROR:
        case H2Code.COMPRESSION_ERROR:
        case H2Code.CONNECT_ERROR:
            return new ConnectError(`http/2 stream closed with error code ${H2Code[rstCode]} (0x${rstCode.toString(16)})`, Code.Internal);
        case H2Code.REFUSED_STREAM:
            return new ConnectError(`http/2 stream closed with error code ${H2Code[rstCode]} (0x${rstCode.toString(16)})`, Code.Unavailable);
        case H2Code.CANCEL:
            return new ConnectError(`http/2 stream closed with error code ${H2Code[rstCode]} (0x${rstCode.toString(16)})`, Code.Canceled);
        case H2Code.ENHANCE_YOUR_CALM:
            return new ConnectError(`http/2 stream closed with error code ${H2Code[rstCode]} (0x${rstCode.toString(16)})`, Code.ResourceExhausted);
        case H2Code.INADEQUATE_SECURITY:
            return new ConnectError(`http/2 stream closed with error code ${H2Code[rstCode]} (0x${rstCode.toString(16)})`, Code.PermissionDenied);
        case H2Code.HTTP_1_1_REQUIRED:
            return new ConnectError(`http/2 stream closed with error code ${H2Code[rstCode]} (0x${rstCode.toString(16)})`, Code.PermissionDenied);
        case H2Code.STREAM_CLOSED:
        default:
            break;
    }
    return void 0;
}
export function wrapZLibErrors(promise, readMaxBytes) {
    return promise.catch((e)=>{
        const props = getNodeErrorProps(e);
        let code = Code.Internal;
        let message = "decompression failed";
        switch(props.code){
            case "ERR_BUFFER_TOO_LARGE":
                code = Code.ResourceExhausted;
                message = `message is larger than configured readMaxBytes ${readMaxBytes} after decompression`;
                break;
            case "Z_DATA_ERROR":
            case "ERR_PADDING_2":
                code = Code.InvalidArgument;
                break;
            default:
                if (props.code !== void 0 && props.code.startsWith("ERR__ERROR_FORMAT_")) {
                    code = Code.InvalidArgument;
                }
                break;
        }
        return Promise.reject(new ConnectError(message, code, void 0, void 0, e));
    });
}
function nodeHeaderToWebHeader(nodeHeaders) {
    const header = new Headers();
    for (const [k2, v2] of Object.entries(nodeHeaders)){
        if (k2.startsWith(":")) {
            continue;
        }
        if (v2 === void 0) {
            continue;
        }
        if (typeof v2 == "string") {
            header.append(k2, v2);
        } else if (typeof v2 == "number") {
            header.append(k2, String(v2));
        } else {
            for (const e of v2){
                header.append(k2, e);
            }
        }
    }
    return header;
}
function webHeaderToNodeHeaders(headersInit, defaultNodeHeaders) {
    if (headersInit === void 0 && defaultNodeHeaders === void 0) {
        return void 0;
    }
    const o = Object.create(null);
    if (defaultNodeHeaders !== void 0) {
        for (const [key, value] of Object.entries(defaultNodeHeaders)){
            if (Array.isArray(value)) {
                o[key] = value.concat();
            } else if (value !== void 0) {
                o[key] = value;
            }
        }
    }
    if (headersInit !== void 0) {
        if (Array.isArray(headersInit)) {
            for (const [key, value] of headersInit){
                appendWebHeader(o, key, value);
            }
        } else if ("forEach" in headersInit) {
            if (typeof headersInit.forEach == "function") {
                headersInit.forEach((value, key)=>{
                    appendWebHeader(o, key, value);
                });
            }
        } else {
            for (const [key, value] of Object.entries(headersInit)){
                appendWebHeader(o, key, value);
            }
        }
    }
    return o;
}
function appendWebHeader(o, key, value) {
    key = key.toLowerCase();
    const existing = o[key];
    if (Array.isArray(existing)) {
        existing.push(value);
    } else if (existing === void 0) {
        o[key] = value;
    } else {
        o[key] = [
            existing.toString(),
            value
        ];
    }
}
export function closed() {
    return {
        t: "closed"
    };
}
function error(reason) {
    return {
        t: "error",
        reason
    };
}
export function closedOrError(reason) {
    const isCancel = reason instanceof ConnectError && ConnectError.from(reason).code == Code.Canceled;
    return isCancel ? closed() : error(reason);
}
export function connect2(authority, http2SessionOptions) {
    let resolve36;
    let reject2;
    const conn = new Promise((res, rej)=>{
        resolve36 = res;
        reject2 = rej;
    });
    const newConn = http2.connect(authority, http2SessionOptions);
    newConn.on("connect", onConnect);
    newConn.on("error", onError);
    function onConnect() {
        resolve36 === null || resolve36 === void 0 ? void 0 : resolve36(newConn);
        cleanup();
    }
    function onError(err) {
        reject2 === null || reject2 === void 0 ? void 0 : reject2(connectErrorFromNodeReason(err));
        cleanup();
    }
    function cleanup() {
        newConn.off("connect", onConnect);
        newConn.off("error", onError);
    }
    return {
        t: "connecting",
        conn,
        abort (reason) {
            if (!newConn.destroyed) {
                newConn.destroy(void 0, http2.constants.NGHTTP2_CANCEL);
            }
            reject2 === null || reject2 === void 0 ? void 0 : reject2(reason);
        },
        onExitState () {
            cleanup();
        }
    };
}
export function ready(conn, options2) {
    var _b2, _c;
    assertSessionOpen(conn);
    if (conn.encrypted === true && conn.alpnProtocol !== "h2") {
        var socket = conn.socket;
        var getPeerCertificate = socket === null || socket === void 0 ? void 0 : socket.getPeerCertificate;
        var issuer = typeof getPeerCertificate === "function" ? (_c = (_b2 = getPeerCertificate.call(socket)) === null || _b2 === void 0 ? void 0 : _b2.issuer) === null || _c === void 0 ? void 0 : _c.CN : void 0;
        if (!conn.destroyed) {
            conn.destroy();
        }
        return {
            t: "unavailable",
            issuer
        };
    }
    conn.unref();
    let lastAliveAt = Date.now();
    let streamCount = 0;
    let pingIntervalId;
    let pingTimeoutId;
    let receivedGoAway = false;
    let receivedGoAwayEnhanceYourCalmTooManyPings = false;
    let idleTimeoutId;
    resetIdleTimeout();
    const state = {
        t: "ready",
        conn,
        streamCount () {
            return streamCount;
        },
        requiresVerify () {
            const elapsedMs2 = Date.now() - lastAliveAt;
            return elapsedMs2 > options2.pingIntervalMs;
        },
        isShuttingDown () {
            return receivedGoAway;
        },
        onClose: void 0,
        onError: void 0,
        registerRequest (stream3) {
            streamCount++;
            if (streamCount == 1) {
                conn.ref();
                resetPingInterval();
                stopIdleTimeout();
            }
            stream3.once("response", ()=>{
                lastAliveAt = Date.now();
                resetPingInterval();
            });
            stream3.once("close", ()=>{
                streamCount--;
                if (streamCount == 0) {
                    conn.unref();
                    resetPingInterval();
                    resetIdleTimeout();
                }
            });
        },
        responseByteRead (stream3) {
            if (stream3.session !== conn) {
                return;
            }
            if (conn.closed || conn.destroyed) {
                return;
            }
            if (streamCount <= 0) {
                return;
            }
            lastAliveAt = Date.now();
            resetPingInterval();
        },
        verify () {
            conn.ref();
            return new Promise((resolve36)=>{
                let settled = false;
                const finish = (success)=>{
                    if (settled) {
                        return;
                    }
                    settled = true;
                    clearTimeout(verifyTimeoutId);
                    conn.off("error", onFail);
                    conn.off("close", onFail);
                    if (success && streamCount == 0) {
                        conn.unref();
                    }
                    resolve36(success);
                };
                const onFail = ()=>finish(false);
                conn.on("error", onFail);
                conn.on("close", onFail);
                const verifyTimeoutId = safeSetTimeout(()=>{
                    state.abort(new ConnectError("PING timed out", Code.Unavailable));
                    finish(false);
                }, options2.pingTimeoutMs);
                commonPing(()=>finish(true));
            });
        },
        abort (reason) {
            if (!conn.destroyed) {
                conn.once("error", ()=>{});
                conn.destroy(reason, http2.constants.NGHTTP2_CANCEL);
            }
        },
        onExitState () {
            if (state.isShuttingDown()) {
                return;
            }
            cleanup();
            this.onError = void 0;
            this.onClose = void 0;
        }
    };
    function resetPingInterval() {
        stopPingInterval();
        if (streamCount > 0 || options2.pingIdleConnection) {
            pingIntervalId = safeSetTimeout(onPingInterval, options2.pingIntervalMs);
        }
    }
    function stopPingInterval() {
        clearTimeout(pingIntervalId);
        clearTimeout(pingTimeoutId);
    }
    function onPingInterval() {
        commonPing(resetPingInterval);
    }
    function commonPing(onSuccess) {
        clearTimeout(pingTimeoutId);
        pingTimeoutId = safeSetTimeout(()=>{
            conn.destroy(new ConnectError("PING timed out", Code.Unavailable), http2.constants.NGHTTP2_CANCEL);
        }, options2.pingTimeoutMs);
        conn.ping((err, duration3)=>{
            clearTimeout(pingTimeoutId);
            if (err !== null) {
                return;
            }
            if (duration3 > options2.pingTimeoutMs) {
                conn.destroy(new ConnectError("PING timed out", Code.Unavailable), http2.constants.NGHTTP2_CANCEL);
                return;
            }
            lastAliveAt = Date.now();
            onSuccess();
        });
    }
    function stopIdleTimeout() {
        clearTimeout(idleTimeoutId);
    }
    function resetIdleTimeout() {
        idleTimeoutId = safeSetTimeout(onIdleTimeout, options2.idleConnectionTimeoutMs);
    }
    function onIdleTimeout() {
        conn.close();
        onClose();
    }
    function onGoaway(errorCode3, lastStreamID, opaqueData) {
        receivedGoAway = true;
        const tooManyPingsAscii = Buffer.from("too_many_pings", "ascii");
        if (errorCode3 === http2.constants.NGHTTP2_ENHANCE_YOUR_CALM && opaqueData != null && opaqueData.equals(tooManyPingsAscii)) {
            options2.pingIntervalMs = options2.pingIntervalMs * 2;
            receivedGoAwayEnhanceYourCalmTooManyPings = true;
        }
        if (errorCode3 === http2.constants.NGHTTP2_NO_ERROR) {
            const nodeMajor = parseInt(process.versions.node.split(".")[0], 10);
            if (streamCount == 0 && nodeMajor >= 18) {
                conn.destroy(new ConnectError("received GOAWAY without any open streams", Code.Canceled), http2.constants.NGHTTP2_NO_ERROR);
            }
        }
    }
    function onClose() {
        var _a18;
        cleanup();
        (_a18 = state.onClose) === null || _a18 === void 0 ? void 0 : _a18.call(state);
    }
    function onError(err) {
        var _a18, _b3;
        cleanup();
        if (receivedGoAwayEnhanceYourCalmTooManyPings) {
            const ce2 = new ConnectError(`http/2 connection closed with error code ENHANCE_YOUR_CALM (0x${http2.constants.NGHTTP2_ENHANCE_YOUR_CALM.toString(16)}), too_many_pings, doubled the interval`, Code.ResourceExhausted);
            (_a18 = state.onError) === null || _a18 === void 0 ? void 0 : _a18.call(state, ce2);
        } else {
            (_b3 = state.onError) === null || _b3 === void 0 ? void 0 : _b3.call(state, connectErrorFromNodeReason(err));
        }
    }
    function cleanup() {
        stopPingInterval();
        stopIdleTimeout();
        conn.off("error", onError);
        conn.off("close", onClose);
        conn.off("goaway", onGoaway);
    }
    conn.on("error", onError);
    conn.on("close", onClose);
    conn.on("goaway", onGoaway);
    return state;
}
function safeSetTimeout(callback, ms2) {
    if (ms2 > 2147483647) {
        return;
    }
    return setTimeout(callback, ms2).unref();
}
function assertSessionOpen(conn) {
    if (conn.connecting) {
        throw new ConnectError("expected open session, but it is connecting", Code.Internal);
    }
    if (conn.destroyed) {
        throw new ConnectError("expected open session, but it is destroyed", Code.Internal);
    }
    if (conn.closed) {
        throw new ConnectError("expected open session, but it is closed", Code.Internal);
    }
}
function createNodeHttpClient(options2) {
    var _a18;
    if (options2.httpVersion == "1.1") {
        return createNodeHttp1Client(options2.nodeOptions);
    }
    const sessionProvider = (_a18 = options2.sessionProvider) !== null && _a18 !== void 0 ? _a18 : ((url2)=>new Http2SessionManager(url2));
    return createNodeHttp2Client(sessionProvider);
}
function createNodeHttp1Client(httpOptions) {
    return async function request3(req) {
        const sentinel = createSentinel(req.signal);
        return new Promise((resolve36, reject2)=>{
            sentinel.catch((e)=>{
                reject2(e);
            });
            h1Request(sentinel, req.url, Object.assign(Object.assign({}, httpOptions), {
                headers: webHeaderToNodeHeaders(req.header, httpOptions === null || httpOptions === void 0 ? void 0 : httpOptions.headers),
                method: req.method
            }), (request4)=>{
                void sinkRequest(req, request4, sentinel);
                request4.on("response", (response)=>{
                    var _a18;
                    response.on("error", sentinel.reject);
                    sentinel.catch((reason)=>response.destroy(connectErrorFromNodeReason(reason)));
                    const trailer = new Headers();
                    resolve36({
                        status: (_a18 = response.statusCode) !== null && _a18 !== void 0 ? _a18 : 0,
                        header: nodeHeaderToWebHeader(response.headers),
                        body: h1ResponseIterable(sentinel, response, trailer),
                        trailer
                    });
                });
            });
        });
    };
}
function createNodeHttp2Client(sessionProvider) {
    return function request3(req) {
        const sentinel = createSentinel(req.signal);
        const sessionManager = sessionProvider(req.url);
        return new Promise((resolve36, reject2)=>{
            sentinel.catch((e)=>{
                reject2(e);
            });
            h2Request(sentinel, sessionManager, req.url, req.method, webHeaderToNodeHeaders(req.header), {}, (stream3)=>{
                void sinkRequest(req, stream3, sentinel);
                stream3.on("response", (headers)=>{
                    var _a18;
                    const response = {
                        status: (_a18 = headers[":status"]) !== null && _a18 !== void 0 ? _a18 : 0,
                        header: nodeHeaderToWebHeader(headers),
                        body: h2ResponseIterable(sentinel, stream3, sessionManager),
                        trailer: h2ResponseTrailer(stream3)
                    };
                    resolve36(response);
                });
            });
        });
    };
}
function h1Request(sentinel, url2, options2, onRequest) {
    let request3;
    if (new URL(url2).protocol.startsWith("https")) {
        request3 = https.request(url2, options2);
    } else {
        request3 = http.request(url2, options2);
    }
    sentinel.catch((reason)=>request3.destroy(connectErrorFromNodeReason(reason)));
    request3.flushHeaders();
    request3.on("error", sentinel.reject);
    request3.on("socket", function onRequestSocket(socket) {
        function onSocketConnect() {
            socket.off("connect", onSocketConnect);
            onRequest(request3);
        }
        if (socket.readyState === "open") {
            onRequest(request3);
        } else {
            socket.on("connect", onSocketConnect);
        }
    });
}
function h1ResponseIterable(sentinel, response, trailer) {
    const inner = response[Symbol.asyncIterator]();
    return {
        [Symbol.asyncIterator] () {
            return {
                async next () {
                    const r = await sentinel.race(inner.next());
                    if (r.done === true) {
                        nodeHeaderToWebHeader(response.trailers).forEach((value, key)=>{
                            trailer.set(key, value);
                        });
                        sentinel.resolve();
                        await sentinel;
                    }
                    return r;
                },
                throw (e) {
                    sentinel.reject(e);
                    throw e;
                }
            };
        }
    };
}
function h2Request(sentinel, sm, url2, method, headers, options2, onStream) {
    const requestUrl = new URL(url2);
    if (requestUrl.origin !== sm.authority) {
        const message = `cannot make a request to ${requestUrl.origin}: the http2 session is connected to ${sm.authority}`;
        sentinel.reject(new ConnectError(message, Code.Internal));
        return;
    }
    sm.request(method, requestUrl.pathname + requestUrl.search, headers, {}).then((stream3)=>{
        sentinel.catch((reason)=>{
            if (stream3.closed) {
                return;
            }
            const rstCode = reason instanceof ConnectError && reason.code == Code.Canceled ? H2Code.CANCEL : H2Code.INTERNAL_ERROR;
            return new Promise((resolve36)=>stream3.close(rstCode, resolve36));
        });
        stream3.on("error", function h2StreamError(e) {
            if (stream3.writableEnded && unwrapNodeErrorChain(e).map(getNodeErrorProps).some((p2)=>p2.code == "ERR_STREAM_WRITE_AFTER_END")) {
                return;
            }
            sentinel.reject(e);
        });
        stream3.on("close", function h2StreamClose() {
            const err = connectErrorFromH2ResetCode(stream3.rstCode);
            if (err) {
                sentinel.reject(err);
            }
        });
        onStream(stream3);
    }, (reason)=>{
        sentinel.reject(reason);
    });
}
function h2ResponseTrailer(response) {
    const trailer = new Headers();
    response.on("trailers", (args)=>{
        nodeHeaderToWebHeader(args).forEach((value, key)=>{
            trailer.set(key, value);
        });
    });
    return trailer;
}
function h2ResponseIterable(sentinel, response, sm) {
    const inner = response[Symbol.asyncIterator]();
    return {
        [Symbol.asyncIterator] () {
            return {
                async next () {
                    const r = await sentinel.race(inner.next());
                    if (r.done === true) {
                        sentinel.resolve();
                        await sentinel;
                    }
                    sm === null || sm === void 0 ? void 0 : sm.notifyResponseByteRead(response);
                    return r;
                },
                throw (e) {
                    sentinel.reject(e);
                    throw e;
                }
            };
        }
    };
}
async function sinkRequest(request3, nodeRequest, sentinel) {
    if (request3.body === void 0) {
        await new Promise((resolve36)=>nodeRequest.end(resolve36));
        return;
    }
    const it2 = request3.body[Symbol.asyncIterator]();
    return new Promise((resolve36)=>{
        writeNext();
        function writeNext() {
            if (sentinel.isRejected()) {
                return;
            }
            it2.next().then((r)=>{
                if (r.done === true) {
                    nodeRequest.end(resolve36);
                    return;
                }
                nodeRequest.write(r.value, "binary", function(e) {
                    if (e === null || e === void 0) {
                        writeNext();
                        return;
                    }
                    if (it2.throw !== void 0) {
                        it2.throw(connectErrorFromNodeReason(e)).catch(()=>{});
                    }
                    if (nodeRequest.writableEnded && unwrapNodeErrorChain(e).map(getNodeErrorProps).some((p2)=>p2.code == "ERR_STREAM_WRITE_AFTER_END")) {
                        return;
                    }
                    sentinel.reject(e);
                });
            }, (e)=>{
                sentinel.reject(e);
            });
        }
    });
}
function createSentinel(signal) {
    let res;
    let rej;
    let resolved = false;
    let rejected = false;
    const p2 = new Promise((resolve36, reject2)=>{
        res = resolve36;
        rej = reject2;
    });
    const c = {
        resolve () {
            if (!resolved && !rejected) {
                resolved = true;
                res === null || res === void 0 ? void 0 : res();
            }
        },
        isResolved () {
            return resolved;
        },
        reject (reason) {
            if (!resolved && !rejected) {
                rejected = true;
                rej === null || rej === void 0 ? void 0 : rej(connectErrorFromNodeReason(reason));
            }
        },
        isRejected () {
            return rejected;
        },
        async race (promise) {
            const r = await Promise.race([
                promise,
                p2
            ]);
            if (r === void 0 && resolved) {
                throw new ConnectError("sentinel completed early", Code.Internal);
            }
            return r;
        }
    };
    const s3 = Object.assign(p2, c);
    function onSignalAbort() {
        c.reject(getAbortSignalReason(this));
    }
    if (signal) {
        if (signal.aborted) {
            c.reject(getAbortSignalReason(signal));
        } else {
            signal.addEventListener("abort", onSignalAbort);
        }
        p2.finally(()=>signal.removeEventListener("abort", onSignalAbort)).catch(()=>{});
    }
    return s3;
}
function validateNodeTransportOptions(options2) {
    var _a18, _b2, _c, _d;
    let httpClient;
    if (options2.httpVersion == "2") {
        let sessionManager;
        if (options2.sessionManager) {
            sessionManager = options2.sessionManager;
        } else {
            sessionManager = new Http2SessionManager(options2.baseUrl, {
                pingIntervalMs: options2.pingIntervalMs,
                pingIdleConnection: options2.pingIdleConnection,
                pingTimeoutMs: options2.pingTimeoutMs,
                idleConnectionTimeoutMs: options2.idleConnectionTimeoutMs
            }, options2.nodeOptions);
        }
        httpClient = createNodeHttpClient({
            httpVersion: "2",
            sessionProvider: ()=>sessionManager
        });
    } else {
        httpClient = createNodeHttpClient({
            httpVersion: "1.1",
            nodeOptions: options2.nodeOptions
        });
    }
    return Object.assign(Object.assign(Object.assign({}, options2), {
        httpClient,
        useBinaryFormat: (_a18 = options2.useBinaryFormat) !== null && _a18 !== void 0 ? _a18 : true,
        interceptors: (_b2 = options2.interceptors) !== null && _b2 !== void 0 ? _b2 : [],
        sendCompression: (_c = options2.sendCompression) !== null && _c !== void 0 ? _c : null,
        acceptCompression: (_d = options2.acceptCompression) !== null && _d !== void 0 ? _d : [
            compressionGzip,
            compressionBrotli
        ]
    }), validateReadWriteMaxBytes(options2.readMaxBytes, options2.writeMaxBytes, options2.compressMinBytes));
}
export function createConnectTransport(options2) {
    return createTransport(validateNodeTransportOptions(options2));
}
function universalRequestFromNodeRequest(nodeRequest, ...rest) {
    var _a18, _b2;
    const nodeResponse = rest.length === 3 ? rest[0] : void 0;
    const parsedJsonBody = rest.length === 3 ? rest[1] : rest[0];
    const contextValues = rest.length === 3 ? rest[2] : rest[1];
    const encrypted = "encrypted" in nodeRequest.socket && nodeRequest.socket.encrypted;
    const protocol = encrypted ? "https" : "http";
    const authority = "authority" in nodeRequest ? nodeRequest.authority : nodeRequest.headers.host;
    const pathname = (_a18 = nodeRequest.url) !== null && _a18 !== void 0 ? _a18 : "";
    if (authority === void 0) {
        throw new ConnectError("unable to determine request authority from Node.js server request", Code.Internal);
    }
    const body = parsedJsonBody !== void 0 ? parsedJsonBody : asyncIterableFromNodeServerRequest(nodeRequest);
    const abortController = new AbortController();
    if ("stream" in nodeRequest) {
        nodeRequest.once("close", ()=>{
            const err = connectErrorFromH2ResetCode(nodeRequest.stream.rstCode);
            if (err !== void 0) {
                abortController.abort(err);
            } else {
                abortController.abort();
            }
        });
    } else {
        const nodeResponsOrRequest = nodeResponse !== null && nodeResponse !== void 0 ? nodeResponse : nodeRequest;
        const onH1Error = (e)=>{
            nodeRequest.off("error", onH1Error);
            nodeResponsOrRequest.off("close", onH1Close);
            abortController.abort(connectErrorFromNodeReason(e));
        };
        const onH1Close = ()=>{
            nodeRequest.off("error", onH1Error);
            nodeResponsOrRequest.off("close", onH1Close);
            abortController.abort(nodeRequest.errored ? connectErrorFromNodeReason(nodeRequest.errored) : void 0);
        };
        nodeRequest.once("error", onH1Error);
        nodeResponsOrRequest.once("close", onH1Close);
    }
    return {
        httpVersion: nodeRequest.httpVersion,
        method: (_b2 = nodeRequest.method) !== null && _b2 !== void 0 ? _b2 : "",
        url: new URL(pathname, `${protocol}://${authority}`).toString(),
        header: nodeHeaderToWebHeader(nodeRequest.headers),
        body,
        signal: abortController.signal,
        contextValues
    };
}
async function universalResponseToNodeResponse(universalResponse, nodeResponse) {
    var _a18, _b2, _c;
    const it2 = (_a18 = universalResponse.body) === null || _a18 === void 0 ? void 0 : _a18[Symbol.asyncIterator]();
    let isWriteError = false;
    try {
        if (it2 !== void 0) {
            let chunk = await it2.next();
            isWriteError = true;
            nodeResponse.writeHead(universalResponse.status, webHeaderToNodeHeaders(universalResponse.header));
            isWriteError = false;
            for(; chunk.done !== true; chunk = await it2.next()){
                isWriteError = true;
                await write(nodeResponse, chunk.value);
                if ("flush" in nodeResponse && typeof nodeResponse.flush == "function") {
                    nodeResponse.flush();
                }
                isWriteError = false;
            }
        }
        if (!nodeResponse.headersSent) {
            nodeResponse.writeHead(universalResponse.status, webHeaderToNodeHeaders(universalResponse.header));
        }
        if (universalResponse.trailer) {
            nodeResponse.addTrailers(webHeaderToNodeHeaders(universalResponse.trailer));
        }
        await new Promise((resolve36)=>{
            nodeResponse.once("end", resolve36);
            nodeResponse.end();
        });
    } catch (e) {
        if (isWriteError) {
            (_b2 = it2 === null || it2 === void 0 ? void 0 : it2.throw) === null || _b2 === void 0 ? void 0 : _b2.call(it2, e).catch(()=>{});
        }
        throw connectErrorFromNodeReason(e);
    } finally{
        (_c = it2 === null || it2 === void 0 ? void 0 : it2.return) === null || _c === void 0 ? void 0 : _c.call(it2).catch(()=>{});
    }
}
function asyncIterableFromNodeServerRequest(request3) {
    return __asyncGenerator5(this, arguments, function* asyncIterableFromNodeServerRequest_1() {
        var _a18, e_1, _b2, _c;
        const it2 = request3.iterator({
            destroyOnReturn: false
        });
        try {
            for(var _d = true, it_1 = __asyncValues5(it2), it_1_1; it_1_1 = yield __await5(it_1.next()), _a18 = it_1_1.done, !_a18; _d = true){
                _c = it_1_1.value;
                _d = false;
                const chunk = _c;
                yield yield __await5(chunk);
            }
        } catch (e_1_1) {
            e_1 = {
                error: e_1_1
            };
        } finally{
            try {
                if (!_d && !_a18 && (_b2 = it_1.return)) yield __await5(_b2.call(it_1));
            } finally{
                if (e_1) throw e_1.error;
            }
        }
    });
}
function write(stream3, data) {
    return new Promise((resolve36, reject2)=>{
        if (stream3.errored) {
            return error3(stream3.errored);
        }
        stream3.once("error", error3);
        stream3.once("drain", drain);
        const flushed = stream3.write(data, "binary", function(err) {
            if (err && !flushed) {
                error3(err);
                stream3.once("error", ()=>{});
            }
        });
        if (flushed) {
            drain();
        }
        function error3(err) {
            stream3.off("error", error3);
            stream3.off("drain", drain);
            reject2(err);
        }
        function drain() {
            stream3.off("error", error3);
            stream3.off("drain", drain);
            resolve36();
        }
    });
}
export function connectNodeAdapter(options2) {
    var _a18;
    if (options2.acceptCompression === void 0) {
        options2.acceptCompression = [
            compressionGzip,
            compressionBrotli
        ];
    }
    const router = createConnectRouter(options2);
    options2.routes(router);
    const prefix = (_a18 = options2.requestPathPrefix) !== null && _a18 !== void 0 ? _a18 : "";
    const paths = new Map();
    for (const uHandler of router.handlers){
        paths.set(prefix + uHandler.requestPath, uHandler);
    }
    return function nodeRequestHandler(req, res) {
        var _a19, _b2, _c, _d;
        const uHandler = paths.get((_b2 = (_a19 = req.url) === null || _a19 === void 0 ? void 0 : _a19.split("?", 2)[0]) !== null && _b2 !== void 0 ? _b2 : "");
        if (!uHandler) {
            ((_c = options2.fallback) !== null && _c !== void 0 ? _c : fallback2)(req, res);
            return;
        }
        const uReq = universalRequestFromNodeRequest(req, res, void 0, (_d = options2.contextValues) === null || _d === void 0 ? void 0 : _d.call(options2, req));
        uHandler(uReq).then((uRes)=>universalResponseToNodeResponse(uRes, res)).catch((reason)=>{
            if (ConnectError.from(reason).code == Code.Aborted) {
                return;
            }
            console.error(`handler for rpc ${uHandler.method.name} of ${uHandler.service.typeName} failed`, reason);
        });
    };
}
function envApiKeyFallbackAllowed(env = process.env) {
    return env[AGENT_HOST_DAEMON_ALLOW_ENV_API_KEY_FALLBACK] === "1";
}
export async function applyDaemonAuthToCredentials(store, credentialManager, lookUpPrivacyMode) {
    const active = store.getActiveAuth();
    if (active === void 0) {
        if (hasClearAuthentication(credentialManager)) {
            await credentialManager.clearAuthentication();
            return void 0;
        }
        await credentialManager.setAuthentication("", "");
        return void 0;
    }
    const privacyMode = await lookUpPrivacyMode?.(active);
    if (store.getActiveAuth() !== active) {
        return void 0;
    }
    await credentialManager.setAuthentication(active.accessToken, "", void 0, privacyMode);
    return {
        accessToken: active.accessToken,
        privacyMode
    };
}
export function scheduleTimeout(delayMs, fn) {
    const timer2 = setTimeout(fn, delayMs);
    return {
        dispose: ()=>clearTimeout(timer2)
    };
}
export async function fetchPrivacyModeFromDashboard(input) {
    const isDev2 = process.env.NODE_ENV === "development";
    const transport = createConnectTransport({
        baseUrl: input.endpoint,
        httpVersion: "1.1",
        interceptors: [
            (next)=>async (req)=>{
                    req.header.set("authorization", `Bearer ${input.accessToken}`);
                    return next(req);
                }
        ],
        nodeOptions: {
            rejectUnauthorized: !isDev2
        }
    });
    const client = createClient(DashboardService, transport);
    const response = await client.getUserPrivacyMode(new GetUserPrivacyModeRequest(), {
        timeoutMs: input.timeoutMs
    });
    return response.privacyMode;
}
function hasClearAuthentication(credentialManager) {
    return "clearAuthentication" in credentialManager && typeof credentialManager.clearAuthentication === "function";
}
export function createStandaloneDaemonAuthHandle() {
    return {
        store: new DaemonAuthStore(),
        applyToCredentials: async ()=>void 0
    };
}
export function createMemoryCredentialManager() {
    let accessToken;
    let apiKey;
    let privacyMode;
    const listeners = new Set();
    function fireAccessTokenChanged() {
        for (const listener of listeners){
            listener(accessToken);
        }
    }
    return {
        get privacyMode () {
            return privacyMode;
        },
        async getAccessToken () {
            return accessToken;
        },
        async getApiKey () {
            if (apiKey !== void 0 && apiKey.length > 0) {
                return apiKey;
            }
            if (!envApiKeyFallbackAllowed()) {
                return void 0;
            }
            const envKey = process.env.CURSOR_API_KEY;
            return envKey !== void 0 && envKey.length > 0 ? envKey : void 0;
        },
        async setAuthentication (nextAccessToken, _refreshToken, nextApiKey, nextPrivacyMode) {
            const nextToken = nextAccessToken.length > 0 ? nextAccessToken : void 0;
            const previousToken = accessToken;
            const previousApiKey = apiKey;
            if (nextToken !== void 0) {
                accessToken = nextToken;
                apiKey = nextApiKey !== void 0 && nextApiKey.length > 0 ? nextApiKey : void 0;
                privacyMode = nextPrivacyMode;
            } else if (nextApiKey !== void 0) {
                const resolvedApiKey = nextApiKey.length > 0 ? nextApiKey : void 0;
                if (resolvedApiKey !== previousApiKey) {
                    accessToken = void 0;
                    privacyMode = void 0;
                }
                apiKey = resolvedApiKey;
            } else {
                accessToken = void 0;
                apiKey = void 0;
                privacyMode = void 0;
            }
            if (previousToken !== accessToken || previousApiKey !== apiKey) {
                fireAccessTokenChanged();
            }
        },
        async clearAuthentication () {
            const tokenChanged = accessToken !== void 0 || apiKey !== void 0;
            accessToken = void 0;
            apiKey = void 0;
            privacyMode = void 0;
            if (tokenChanged) {
                fireAccessTokenChanged();
            }
        },
        onDidChangeAccessToken (listener) {
            listeners.add(listener);
            return {
                dispose: ()=>{
                    listeners.delete(listener);
                }
            };
        }
    };
}
export function homeDirFromEnv(env = process.env) {
    const home = env.HOME ?? env.USERPROFILE;
    if (home !== void 0 && home.length > 0) {
        return home;
    }
    return (0, import_node_os3.homedir)();
}
export function cursorAgentsDir(options2 = {}) {
    return (0, import_node_path8.join)(options2.homeDir ?? homeDirFromEnv(), options2.dev === true ? CURSOR_AGENTS_DEV_DIR_NAME : CURSOR_AGENTS_DIR_NAME);
}
export function defaultUnixListenAddress(options2 = {}) {
    return {
        kind: "unix",
        path: (0, import_node_path8.join)(cursorAgentsDir(options2), DAEMON_SOCKET_FILENAME)
    };
}
export function formatListenAddress(address) {
    return `unix://${address.path}`;
}
export function parseListenAddress(value) {
    const trimmed = value.trim();
    if (trimmed.length === 0) {
        throw new Error("listen address is empty");
    }
    if (trimmed.startsWith("tcp://") || isBareHostPort(trimmed)) {
        throw new Error(`tcp listen is not supported: ${trimmed}; use a unix socket so only this user can connect`);
    }
    if (trimmed.startsWith("unix://")) {
        const path64 = trimmed.slice("unix://".length);
        if (!(0, import_node_path8.isAbsolute)(path64)) {
            throw new Error(`unix listen path must be absolute: ${trimmed}`);
        }
        return {
            kind: "unix",
            path: path64
        };
    }
    if ((0, import_node_path8.isAbsolute)(trimmed)) {
        return {
            kind: "unix",
            path: trimmed
        };
    }
    throw new Error(`invalid listen address: ${trimmed}`);
}
function isBareHostPort(value) {
    return /^[^/]+:\d+$/.test(value);
}
export function getLineColFromPtr(string5, ptr) {
    let lines2 = string5.slice(0, ptr).split(/\r\n|\n|\r/g);
    return [
        lines2.length,
        lines2.pop().length + 1
    ];
}
export function makeCodeBlock(string5, line, column) {
    let lines2 = string5.split(/\r\n|\n|\r/g);
    let codeblock = "";
    let numberLen = (Math.log10(line + 1) | 0) + 1;
    for(let i = line - 1; i <= line + 1; i++){
        let l = lines2[i - 1];
        if (!l) continue;
        codeblock += i.toString().padEnd(numberLen, " ");
        codeblock += ":  ";
        codeblock += l;
        codeblock += "\n";
        if (i === line) {
            codeblock += " ".repeat(numberLen + column + 2);
            codeblock += "^\n";
        }
    }
    return codeblock;
}
function parseString(str3, ptr) {
    let c = str3[ptr++];
    let first = c;
    let isLiteral = c === "'";
    let isMultiline = c === str3[ptr] && c === str3[ptr + 1];
    if (isMultiline) {
        if (str3[ptr += 2] === "\n") ptr++;
        else if (str3[ptr] === "\r" && str3[ptr + 1] === "\n") ptr += 2;
    }
    let parsed = "";
    let sliceStart = ptr;
    let state = 0;
    for(let i = ptr; i < str3.length; i++){
        c = str3[i];
        if (isMultiline && (c === "\n" || c === "\r" && str3[i + 1] === "\n")) {
            state = state && 3;
        } else if (c < " " && c !== "	" || c === "\x7F") {
            throw new TomlError("control characters are not allowed in strings", {
                toml: str3,
                ptr: i
            });
        } else if ((!state || state === 3) && c === first && (!isMultiline || str3[i + 1] === first && str3[i + 2] === first)) {
            if (isMultiline) {
                if (str3[i + 3] === first) i++;
                if (str3[i + 3] === first) i++;
            }
            return [
                state ? parsed : parsed + str3.slice(sliceStart, i),
                i + (isMultiline ? 3 : 1)
            ];
        } else if (!state) {
            if (!isLiteral && c === "\\") {
                parsed += str3.slice(sliceStart, sliceStart = i);
                state = 1;
            }
        } else if (state === 1) {
            if (c === "x" || c === "u" || c === "U") {
                let value = 0;
                let len = c === "x" ? 2 : c === "u" ? 4 : 8;
                for(let j2 = 0; j2 < len; j2++, i++){
                    let hex = str3.charCodeAt(i + 1);
                    let digit = (hex >= 48 && hex <= 57 ? hex - 48 : (hex >= 65 && hex <= 70 ? hex - 65 + 10 : (hex >= 97 && hex <= 102 ? hex - 97 + 10 : -1)));
                    if (digit < 0) throw new TomlError("invalid non-hex character in unicode escape", {
                        toml: str3,
                        ptr: i + 1
                    });
                    value = value << 4 | digit;
                }
                if (value < 0 || value > 1114111 || value >= 55296 && value <= 57343) {
                    throw new TomlError("invalid unicode escape", {
                        toml: str3,
                        ptr: i
                    });
                }
                parsed += String.fromCodePoint(value);
                sliceStart = i + 1;
                state = 0;
            } else if (c === " " || c === "	") {
                state = 2;
            } else {
                if (c === "b") parsed += "\b";
                else if (c === "t") parsed += "	";
                else if (c === "n") parsed += "\n";
                else if (c === "f") parsed += "\f";
                else if (c === "r") parsed += "\r";
                else if (c === "e") parsed += "\x1B";
                else if (c === '"') parsed += '"';
                else if (c === "\\") parsed += "\\";
                else throw new TomlError("unrecognized escape sequence", {
                    toml: str3,
                    ptr: i
                });
                sliceStart = i + 1;
                state = 0;
            }
        } else if (c !== " " && c !== "	") {
            if (state === 2) {
                throw new TomlError("invalid escape: only line-ending whitespace may be escaped", {
                    toml: str3,
                    ptr: sliceStart
                });
            }
            state = !isLiteral && c === "\\" ? 1 : 0;
            sliceStart = i;
        }
    }
    throw new TomlError("unfinished string", {
        toml: str3,
        ptr
    });
}
function parseValue(value, toml, ptr, integersAsBigInt) {
    if (value === "true") return true;
    if (value === "false") return false;
    if (value === "-inf") return -Infinity;
    if (value === "inf" || value === "+inf") return Infinity;
    if (value === "nan" || value === "+nan" || value === "-nan") return NaN;
    if (value === "-0") return integersAsBigInt ? 0n : 0;
    let isInt = INT_REGEX.test(value);
    if (isInt || FLOAT_REGEX.test(value)) {
        if (LEADING_ZERO.test(value)) {
            throw new TomlError("leading zeroes are not allowed", {
                toml,
                ptr
            });
        }
        value = value.replace(/_/g, "");
        let numeric2 = +value;
        if (isNaN(numeric2)) {
            throw new TomlError("invalid number", {
                toml,
                ptr
            });
        }
        if (isInt) {
            if ((isInt = !Number.isSafeInteger(numeric2)) && !integersAsBigInt) {
                throw new TomlError("integer value cannot be represented losslessly", {
                    toml,
                    ptr
                });
            }
            if (isInt || integersAsBigInt === true) numeric2 = BigInt(value);
        }
        return numeric2;
    }
    const date4 = new TomlDate(value);
    if (!date4.isValid()) {
        throw new TomlError("invalid value", {
            toml,
            ptr
        });
    }
    return date4;
}
function indexOfNewline(str3, start = 0, end = str3.length) {
    let idx = str3.indexOf("\n", start);
    if (str3[idx - 1] === "\r") idx--;
    return idx <= end ? idx : -1;
}
function skipComment(str3, ptr) {
    for(let i = ptr; i < str3.length; i++){
        let c = str3[i];
        if (c === "\n") return i;
        if (c === "\r" && str3[i + 1] === "\n") return i + 1;
        if (c < " " && c !== "	" || c === "\x7F") {
            throw new TomlError("control characters are not allowed in comments", {
                toml: str3,
                ptr
            });
        }
    }
    return str3.length;
}
function skipVoid(str3, ptr, banNewLines, banComments) {
    let c;
    while(1){
        while((c = str3[ptr]) === " " || c === "	" || !banNewLines && (c === "\n" || c === "\r" && str3[ptr + 1] === "\n"))ptr++;
        if (banComments || c !== "#") break;
        ptr = skipComment(str3, ptr);
    }
    return ptr;
}
function skipUntil(str3, ptr, sep14, end, banNewLines = false) {
    if (!end) {
        ptr = indexOfNewline(str3, ptr);
        return ptr < 0 ? str3.length : ptr;
    }
    for(let i = ptr; i < str3.length; i++){
        let c = str3[i];
        if (c === "#") {
            i = indexOfNewline(str3, i);
            if (i < 0) break;
        } else if (c === sep14) {
            return i + 1;
        } else if (c === end || banNewLines && (c === "\n" || c === "\r" && str3[i + 1] === "\n")) {
            return i;
        }
    }
    throw new TomlError("cannot find end of structure", {
        toml: str3,
        ptr
    });
}
function sliceAndTrimEndOf(str3, startPtr, endPtr) {
    let value = str3.slice(startPtr, endPtr);
    let commentIdx = value.indexOf("#");
    if (commentIdx > -1) {
        skipComment(str3, commentIdx);
        value = value.slice(0, commentIdx);
    }
    return [
        value.trimEnd(),
        commentIdx
    ];
}
function extractValue(str3, ptr, end, depth, integersAsBigInt) {
    if (depth === 0) {
        throw new TomlError("document contains excessively nested structures. aborting.", {
            toml: str3,
            ptr
        });
    }
    let c = str3[ptr];
    if (c === "[" || c === "{") {
        let [value, endPtr2] = c === "[" ? parseArray(str3, ptr, depth, integersAsBigInt) : parseInlineTable(str3, ptr, depth, integersAsBigInt);
        if (end) {
            endPtr2 = skipVoid(str3, endPtr2);
            if (str3[endPtr2] === ",") endPtr2++;
            else if (str3[endPtr2] !== end) {
                throw new TomlError("expected comma or end of structure", {
                    toml: str3,
                    ptr: endPtr2
                });
            }
        }
        return [
            value,
            endPtr2
        ];
    }
    if (c === '"' || c === "'") {
        let [parsed, endPtr2] = parseString(str3, ptr);
        if (end) {
            endPtr2 = skipVoid(str3, endPtr2);
            if (str3[endPtr2] && str3[endPtr2] !== "," && str3[endPtr2] !== end && str3[endPtr2] !== "\n" && str3[endPtr2] !== "\r") {
                throw new TomlError("unexpected character encountered", {
                    toml: str3,
                    ptr: endPtr2
                });
            }
            if (str3[endPtr2] === ",") endPtr2++;
        }
        return [
            parsed,
            endPtr2
        ];
    }
    let endPtr = skipUntil(str3, ptr, ",", end);
    let slice = sliceAndTrimEndOf(str3, ptr, endPtr - (str3[endPtr - 1] === "," ? 1 : 0));
    if (!slice[0]) {
        throw new TomlError("incomplete key-value declaration: no value specified", {
            toml: str3,
            ptr
        });
    }
    if (end && slice[1] > -1) {
        endPtr = skipVoid(str3, ptr + slice[1]);
        if (str3[endPtr] === ",") endPtr++;
    }
    return [
        parseValue(slice[0], str3, ptr, integersAsBigInt),
        endPtr
    ];
}
function parseKey(str3, ptr, end = "=") {
    let dot = ptr - 1;
    let parsed = [];
    let endPtr = str3.indexOf(end, ptr);
    if (endPtr < 0) {
        throw new TomlError("incomplete key-value: cannot find end of key", {
            toml: str3,
            ptr
        });
    }
    do {
        let c = str3[ptr = ++dot];
        if (c !== " " && c !== "	") {
            if (c === '"' || c === "'") {
                if (c === str3[ptr + 1] && c === str3[ptr + 2]) {
                    throw new TomlError("multiline strings are not allowed in keys", {
                        toml: str3,
                        ptr
                    });
                }
                let [part, eos] = parseString(str3, ptr);
                dot = str3.indexOf(".", eos);
                let strEnd = str3.slice(eos, dot < 0 || dot > endPtr ? endPtr : dot);
                let newLine = indexOfNewline(strEnd);
                if (newLine > -1) {
                    throw new TomlError("newlines are not allowed in keys", {
                        toml: str3,
                        ptr: ptr + dot + newLine
                    });
                }
                if (strEnd.trimStart()) {
                    throw new TomlError("found extra tokens after the string part", {
                        toml: str3,
                        ptr: eos
                    });
                }
                if (endPtr < eos) {
                    endPtr = str3.indexOf(end, eos);
                    if (endPtr < 0) {
                        throw new TomlError("incomplete key-value: cannot find end of key", {
                            toml: str3,
                            ptr
                        });
                    }
                }
                parsed.push(part);
            } else {
                dot = str3.indexOf(".", ptr);
                let part = str3.slice(ptr, dot < 0 || dot > endPtr ? endPtr : dot);
                if (!KEY_PART_RE.test(part)) {
                    throw new TomlError("only letter, numbers, dashes and underscores are allowed in keys", {
                        toml: str3,
                        ptr
                    });
                }
                parsed.push(part.trimEnd());
            }
        }
    }while (dot + 1 && dot < endPtr)
    return [
        parsed,
        skipVoid(str3, endPtr + 1, true, true)
    ];
}
function parseInlineTable(str3, ptr, depth, integersAsBigInt) {
    let res = {};
    let seen = new Set();
    let c;
    ptr++;
    while((c = str3[ptr++]) !== "}" && c){
        if (c === ",") {
            throw new TomlError("expected value, found comma", {
                toml: str3,
                ptr: ptr - 1
            });
        } else if (c === "#") ptr = skipComment(str3, ptr);
        else if (c !== " " && c !== "	" && c !== "\n" && c !== "\r") {
            let k2;
            let t = res;
            let hasOwn = false;
            let [key, keyEndPtr] = parseKey(str3, ptr - 1);
            for(let i = 0; i < key.length; i++){
                if (i) t = hasOwn ? t[k2] : t[k2] = {};
                k2 = key[i];
                if ((hasOwn = Object.hasOwn(t, k2)) && (typeof t[k2] !== "object" || seen.has(t[k2]))) {
                    throw new TomlError("trying to redefine an already defined value", {
                        toml: str3,
                        ptr
                    });
                }
                if (!hasOwn && k2 === "__proto__") {
                    Object.defineProperty(t, k2, {
                        enumerable: true,
                        configurable: true,
                        writable: true
                    });
                }
            }
            if (hasOwn) {
                throw new TomlError("trying to redefine an already defined value", {
                    toml: str3,
                    ptr
                });
            }
            let [value, valueEndPtr] = extractValue(str3, keyEndPtr, "}", depth - 1, integersAsBigInt);
            seen.add(value);
            t[k2] = value;
            ptr = valueEndPtr;
        }
    }
    if (!c) {
        throw new TomlError("unfinished table encountered", {
            toml: str3,
            ptr
        });
    }
    return [
        res,
        ptr
    ];
}
function parseArray(str3, ptr, depth, integersAsBigInt) {
    let res = [];
    let c;
    ptr++;
    while((c = str3[ptr++]) !== "]" && c){
        if (c === ",") {
            throw new TomlError("expected value, found comma", {
                toml: str3,
                ptr: ptr - 1
            });
        } else if (c === "#") ptr = skipComment(str3, ptr);
        else if (c !== " " && c !== "	" && c !== "\n" && c !== "\r") {
            let e = extractValue(str3, ptr - 1, "]", depth - 1, integersAsBigInt);
            res.push(e[0]);
            ptr = e[1];
        }
    }
    if (!c) {
        throw new TomlError("unfinished array encountered", {
            toml: str3,
            ptr
        });
    }
    return [
        res,
        ptr
    ];
}
function peekTable(key, table, meta, type2) {
    let t = table;
    let m2 = meta;
    let k2;
    let hasOwn = false;
    let state;
    for(let i = 0; i < key.length; i++){
        if (i) {
            t = hasOwn ? t[k2] : t[k2] = {};
            m2 = (state = m2[k2]).c;
            if (type2 === 0 && (state.t === 1 || state.t === 2)) {
                return null;
            }
            if (state.t === 2) {
                let l = t.length - 1;
                t = t[l];
                m2 = m2[l].c;
            }
        }
        k2 = key[i];
        if ((hasOwn = Object.hasOwn(t, k2)) && m2[k2]?.t === 0 && m2[k2]?.d) {
            return null;
        }
        if (!hasOwn) {
            if (k2 === "__proto__") {
                Object.defineProperty(t, k2, {
                    enumerable: true,
                    configurable: true,
                    writable: true
                });
                Object.defineProperty(m2, k2, {
                    enumerable: true,
                    configurable: true,
                    writable: true
                });
            }
            m2[k2] = {
                t: i < key.length - 1 && type2 === 2 ? 3 : type2,
                d: false,
                i: 0,
                c: {}
            };
        }
    }
    state = m2[k2];
    if (state.t !== type2 && !(type2 === 1 && state.t === 3)) {
        return null;
    }
    if (type2 === 2) {
        if (!state.d) {
            state.d = true;
            t[k2] = [];
        }
        t[k2].push(t = {});
        state.c[state.i++] = state = {
            t: 1,
            d: false,
            i: 0,
            c: {}
        };
    }
    if (state.d) {
        return null;
    }
    state.d = true;
    if (type2 === 1) {
        t = hasOwn ? t[k2] : t[k2] = {};
    } else if (type2 === 0 && hasOwn) {
        return null;
    }
    return [
        k2,
        t,
        state.c
    ];
}
function parse3(toml, { maxDepth = 1e3, integersAsBigInt } = {}) {
    let res = {};
    let meta = {};
    let tbl = res;
    let m2 = meta;
    for(let ptr = skipVoid(toml, 0); ptr < toml.length;){
        if (toml[ptr] === "[") {
            let isTableArray = toml[++ptr] === "[";
            let k2 = parseKey(toml, ptr += +isTableArray, "]");
            if (isTableArray) {
                if (toml[k2[1] - 1] !== "]") {
                    throw new TomlError("expected end of table declaration", {
                        toml,
                        ptr: k2[1] - 1
                    });
                }
                k2[1]++;
            }
            let p2 = peekTable(k2[0], res, meta, isTableArray ? 2 : 1);
            if (!p2) {
                throw new TomlError("trying to redefine an already defined table or value", {
                    toml,
                    ptr
                });
            }
            m2 = p2[2];
            tbl = p2[1];
            ptr = k2[1];
        } else {
            let k2 = parseKey(toml, ptr);
            let p2 = peekTable(k2[0], tbl, m2, 0);
            if (!p2) {
                throw new TomlError("trying to redefine an already defined table or value", {
                    toml,
                    ptr
                });
            }
            let v2 = extractValue(toml, k2[1], void 0, maxDepth, integersAsBigInt);
            p2[1][p2[0]] = v2[0];
            ptr = v2[1];
        }
        ptr = skipVoid(toml, ptr, true);
        if (toml[ptr] && toml[ptr] !== "\n" && toml[ptr] !== "\r") {
            throw new TomlError("each key-value declaration must be followed by an end-of-line", {
                toml,
                ptr
            });
        }
        ptr = skipVoid(toml, ptr);
    }
    return res;
}
export function nonEmpty(value) {
    const trimmed = value?.trim();
    return trimmed ? trimmed : void 0;
}
export function isPrivateInferenceShorthandRequested(env) {
    return SHORTHAND_ENV_VARS.some((name17)=>nonEmpty(env[name17]) !== void 0);
}
export function fail(message) {
    throw new PrivateInferenceConfigError(`Private inference config: ${message}`);
}
function notATable(value) {
    return value === null || typeof value !== "object" || Array.isArray(value);
}
function field(value, key) {
    if (value === null || typeof value !== "object") {
        return void 0;
    }
    for (const [entryKey, entryValue] of Object.entries(value)){
        if (entryKey === key) {
            return entryValue;
        }
    }
    return void 0;
}
function tableEntries(value, message) {
    if (value === null || typeof value !== "object" || Array.isArray(value)) {
        fail(message);
    }
    return Object.entries(value);
}
function optionalString(value, fieldName) {
    if (value === void 0) {
        return void 0;
    }
    if (typeof value !== "string" || value.trim() === "") {
        fail(`${fieldName} must be a non-empty string`);
    }
    return value.trim();
}
function optionalPositiveInteger(value, fieldName) {
    if (value === void 0) {
        return void 0;
    }
    if (typeof value !== "number" || !Number.isSafeInteger(value) || value <= 0) {
        fail(`${fieldName} must be a positive integer`);
    }
    return value;
}
function optionalBoolean(value, fieldName) {
    if (value === void 0) {
        return void 0;
    }
    if (typeof value !== "boolean") {
        fail(`${fieldName} must be a boolean`);
    }
    return value;
}
function parseHeaders(value, fieldName) {
    if (value === void 0) {
        return void 0;
    }
    const headers = {};
    for (const [key, entry] of tableEntries(value, `${fieldName} must be a table of string values`)){
        if (typeof entry !== "string") {
            fail(`${fieldName} must be a table of string values`);
        }
        headers[key] = entry;
    }
    return headers;
}
function parseEnvKeys(value, fieldName) {
    if (value === void 0) {
        return void 0;
    }
    const raw = Array.isArray(value) ? value : [
        value
    ];
    if (raw.length === 0) {
        fail(`${fieldName} must name at least one environment variable`);
    }
    return raw.map((entry)=>{
        if (typeof entry !== "string" || entry.trim() === "") {
            fail(`${fieldName} must be an environment variable name or a list of names`);
        }
        return entry.trim();
    });
}
export function collectPrivateInferenceEnvKeyNames(content) {
    if (content === void 0 || content.length === 0) {
        return [];
    }
    try {
        const names3 = [];
        collectEnvKeyNamesFromValue(parse3(content), names3);
        return names3;
    } catch  {
        return collectEnvKeyNamesFromUnparsedToml(content);
    }
}
function collectEnvKeyNamesFromUnparsedToml(content) {
    const names3 = [];
    const seen = new Set();
    const assignment = /(?:^|[^A-Za-z0-9_])["']?env_key["']?[^\S\r\n]*=/g;
    for (const match2 of content.matchAll(assignment)){
        const matchIndex = match2.index;
        const tokenOffset = match2[0].indexOf("env_key");
        const tokenIndex = matchIndex + (tokenOffset === -1 ? 0 : tokenOffset);
        if (isTomlCommentBefore(content, tokenIndex)) {
            continue;
        }
        for (const name17 of readUnparsedEnvKeyNames(content, matchIndex + match2[0].length)){
            if (seen.has(name17)) {
                continue;
            }
            seen.add(name17);
            names3.push(name17);
        }
    }
    return names3;
}
function isTomlCommentBefore(content, index) {
    const lineBreak = content.lastIndexOf("\n", index - 1);
    const lineStart = lineBreak === -1 ? 0 : lineBreak + 1;
    let quote;
    for(let i = lineStart; i < index; i++){
        const ch = content[i];
        if (quote === '"') {
            if (ch === "\\") {
                i++;
                continue;
            }
            if (ch === '"') {
                quote = void 0;
            }
            continue;
        }
        if (quote === "'") {
            if (ch === "'") {
                quote = void 0;
            }
            continue;
        }
        if (ch === '"' || ch === "'") {
            quote = ch;
            continue;
        }
        if (ch === "#") {
            return true;
        }
    }
    return false;
}
function readUnparsedEnvKeyNames(content, start) {
    const valueStart = skipTomlWhitespace(content, start);
    const raw = stripTomlComments(readUnparsedEnvKeyRaw(content, valueStart));
    const quoted = quotedTomlStrings(raw);
    if (quoted.length > 0) {
        return quoted;
    }
    const bare = /^[A-Za-z_][A-Za-z0-9_]*/.exec(raw.trim());
    if (bare === null || bare[0] === "true" || bare[0] === "false") {
        return [];
    }
    return [
        bare[0]
    ];
}
function readUnparsedEnvKeyRaw(content, start) {
    if (content[start] !== "[") {
        const lineEnd = content.indexOf("\n", start);
        return content.slice(start, lineEnd === -1 ? content.length : lineEnd);
    }
    let i = start + 1;
    let end = i;
    while(i < content.length){
        const ch = content[i];
        if (ch === "]") {
            return content.slice(start, i + 1);
        }
        if (ch === '"' || ch === "'") {
            const next = indexAfterQuoted(content, i);
            if (next <= i) {
                break;
            }
            end = next;
            i = next;
            continue;
        }
        if (ch === "\n") {
            const next = skipTomlWhitespace(content, i + 1);
            const ahead = content[next];
            if (ahead !== '"' && ahead !== "'" && ahead !== "," && ahead !== "]" && ahead !== "#" && ahead !== void 0) {
                break;
            }
        }
        i++;
        end = i;
    }
    return content.slice(start, end);
}
function indexAfterQuoted(content, start) {
    const quote = content[start];
    if (quote !== '"' && quote !== "'") {
        return start;
    }
    for(let i = start + 1; i < content.length; i++){
        const ch = content[i];
        if (ch === "\n") {
            return start;
        }
        if (quote === '"' && ch === "\\") {
            i++;
            continue;
        }
        if (ch === quote) {
            return i + 1;
        }
    }
    return start;
}
function stripTomlComments(raw) {
    return raw.split("\n").map((line)=>{
        let quote;
        for(let i = 0; i < line.length; i++){
            const ch = line[i];
            if (quote === '"') {
                if (ch === "\\") {
                    i++;
                    continue;
                }
                if (ch === '"') {
                    quote = void 0;
                }
                continue;
            }
            if (quote === "'") {
                if (ch === "'") {
                    quote = void 0;
                }
                continue;
            }
            if (ch === '"' || ch === "'") {
                quote = ch;
                continue;
            }
            if (ch === "#") {
                return line.slice(0, i);
            }
        }
        return line;
    }).join("\n");
}
function quotedTomlStrings(raw) {
    const names3 = [];
    const quoted = /"((?:\\.|[^"\\\n])*)"|'([^'\n]*)'/g;
    for (const match2 of raw.matchAll(quoted)){
        const basic = match2[1];
        const literal3 = match2[2];
        const value = basic !== void 0 ? unescapeTomlBasicString(basic) : literal3;
        if (value === void 0) {
            continue;
        }
        const name17 = value.trim();
        if (name17.length > 0) {
            names3.push(name17);
        }
    }
    return names3;
}
function skipTomlWhitespace(content, start) {
    let i = start;
    while(i < content.length && (content[i] === " " || content[i] === "	" || content[i] === "\n" || content[i] === "\r")){
        i++;
    }
    return i;
}
function unescapeTomlBasicString(value) {
    return value.replace(/\\(.)/g, (_match, escaped)=>{
        switch(escaped){
            case "n":
                return "\n";
            case "t":
                return "	";
            case "r":
                return "\r";
            case '"':
            case "\\":
                return escaped;
            default:
                return escaped;
        }
    });
}
function collectEnvKeyNamesFromValue(value, names3) {
    if (Array.isArray(value)) {
        for (const entry of value){
            collectEnvKeyNamesFromValue(entry, names3);
        }
        return;
    }
    if (value === null || typeof value !== "object") {
        return;
    }
    const envKey = field(value, "env_key");
    if (envKey !== void 0) {
        const raw = Array.isArray(envKey) ? envKey : [
            envKey
        ];
        for (const entry of raw){
            if (typeof entry !== "string") {
                continue;
            }
            const name17 = entry.trim();
            if (name17.length > 0) {
                names3.push(name17);
            }
        }
    }
    for (const entry of Object.values(value)){
        collectEnvKeyNamesFromValue(entry, names3);
    }
}
function mergeHeaders(...layers) {
    const merged = new Map();
    for (const layer of layers){
        for (const [name17, value] of Object.entries(layer ?? {})){
            merged.set(name17.toLowerCase(), [
                name17,
                value
            ]);
        }
    }
    return merged.size === 0 ? void 0 : Object.fromEntries(merged.values());
}
function parseGatewaySettings(table, scope) {
    for (const { key, reason } of REJECTED_GATEWAY_KEYS){
        if (field(table, key) !== void 0) {
            fail(`${scope}.${key} is not supported \u2014 ${reason}`);
        }
    }
    return {
        baseUrl: optionalString(field(table, "base_url"), `${scope}.base_url`),
        apiBaseUrl: optionalString(field(table, "api_base_url"), `${scope}.api_base_url`),
        apiBackend: optionalString(field(table, "api_backend"), `${scope}.api_backend`),
        envKeys: parseEnvKeys(field(table, "env_key"), `${scope}.env_key`),
        headers: parseHeaders(field(table, "extra_headers"), `${scope}.extra_headers`),
        authProvider: optionalString(field(table, "auth_provider"), `${scope}.auth_provider`),
        inlineAuthHelper: scope.startsWith("model_providers.") ? parseAuthHelperTable(field(table, "auth"), `${scope}.auth`) : void 0
    };
}
function inheritGatewayUrl(own, provider) {
    return own.apiBaseUrl ?? provider?.apiBaseUrl ?? own.baseUrl ?? provider?.baseUrl;
}
function parseAuthHelperTable(value, scope) {
    if (value === void 0) {
        return void 0;
    }
    if (notATable(value)) {
        fail(`${scope} must be a table`);
    }
    const command = optionalString(field(value, "command"), `${scope}.command`);
    if (command === void 0) {
        fail(`${scope}.command is required`);
    }
    const args = parseStringList(field(value, "args"), `${scope}.args`);
    const tokenTtlSecs = optionalPositiveInteger(field(value, "token_ttl_secs"), `${scope}.token_ttl_secs`);
    const timeoutSecs = optionalPositiveInteger(field(value, "timeout_secs"), `${scope}.timeout_secs`);
    return {
        command,
        ...args === void 0 ? {} : {
            args
        },
        ...tokenTtlSecs === void 0 ? {} : {
            tokenTtlSecs
        },
        ...timeoutSecs === void 0 ? {} : {
            timeoutSecs: Math.min(HELPER_TIMEOUT_SECS_MAX, Math.max(HELPER_TIMEOUT_SECS_MIN, timeoutSecs))
        }
    };
}
function parseStringList(value, scope) {
    if (value === void 0) {
        return void 0;
    }
    if (!Array.isArray(value) || !value.every((item)=>typeof item === "string")) {
        fail(`${scope} must be an array of strings`);
    }
    return value;
}
function parseTomlEffortRungs(value, scope) {
    if (value === void 0) {
        return void 0;
    }
    const shape = `${scope} must be a non-empty list of [[${scope}]] rungs (id, optional value, label, default)`;
    if (!Array.isArray(value)) {
        fail(shape);
    }
    const seen = new Set();
    let flaggedDefault;
    const tiers = value.map((entry, index)=>{
        const rung = `${scope}[${index}]`;
        if (notATable(entry)) {
            fail(`${rung} must be a table`);
        }
        const id = optionalString(field(entry, "id"), `${rung}.id`);
        if (id === void 0) {
            fail(`${rung}.id is required`);
        }
        if (seen.has(id)) {
            fail(`${scope} lists rung "${id}" more than once`);
        }
        seen.add(id);
        if (optionalBoolean(field(entry, "default"), `${rung}.default`)) {
            if (flaggedDefault !== void 0) {
                fail(`${scope} flags more than one rung default = true`);
            }
            flaggedDefault = id;
        }
        const label = optionalString(field(entry, "label"), `${rung}.label`);
        return {
            id,
            value: optionalString(field(entry, "value"), `${rung}.value`) ?? id,
            ...label === void 0 ? {} : {
                label
            }
        };
    });
    const first = tiers[0];
    if (first === void 0) {
        fail(shape);
    }
    return {
        tiers,
        firstId: first.id,
        flaggedDefault
    };
}
function parseTomlReasoning(table, scope, globalDefault) {
    const supported2 = optionalBoolean(field(table, "supports_reasoning_effort"), `${scope}.supports_reasoning_effort`);
    const rungs = parseTomlEffortRungs(field(table, "reasoning_efforts"), `${scope}.reasoning_efforts`);
    const declaredDefault = optionalString(field(table, "reasoning_effort"), `${scope}.reasoning_effort`);
    if (supported2 === false) {
        if (rungs !== void 0 || declaredDefault !== void 0) {
            fail(`${scope}.supports_reasoning_effort = false contradicts its reasoning_efforts / reasoning_effort \u2014 drop one`);
        }
        return {
            kind: "off"
        };
    }
    const flaggedDefault = rungs?.flaggedDefault;
    if (flaggedDefault !== void 0 && declaredDefault !== void 0 && flaggedDefault !== declaredDefault) {
        fail(`${scope}.reasoning_effort = "${declaredDefault}" disagrees with the rung flagged default = true ("${flaggedDefault}")`);
    }
    const defaultTierId = flaggedDefault ?? declaredDefault ?? globalDefault;
    if (rungs !== void 0) {
        const tierIds = rungs.tiers.map((tier)=>tier.id);
        if (defaultTierId !== void 0 && !tierIds.includes(defaultTierId)) {
            fail(`${scope}.reasoning_effort "${defaultTierId}" is not one of its reasoning_efforts (${tierIds.join(", ")})`);
        }
        return {
            kind: "declared",
            tiers: rungs.tiers,
            defaultTierId: defaultTierId ?? rungs.firstId
        };
    }
    if (supported2 === void 0 && declaredDefault === void 0) {
        return void 0;
    }
    return {
        kind: "advertised",
        ...defaultTierId === void 0 ? {} : {
            defaultTierId
        }
    };
}
function parseTomlModelTable(key, table, globalDefaultEffort, endpoint) {
    const scope = `model.${key}`;
    const vision = optionalBoolean(field(table, "vision"), `${scope}.vision`);
    const supportsBackendSearch = optionalBoolean(field(table, "supports_backend_search"), `${scope}.supports_backend_search`);
    const reasoning = parseTomlReasoning(table, scope, globalDefaultEffort);
    const capabilities = {
        ...vision === void 0 ? {} : {
            vision
        },
        ...supportsBackendSearch === void 0 ? {} : {
            supportsBackendSearch
        }
    };
    return {
        id: key,
        providerModelId: optionalString(field(table, "model"), `${scope}.model`) ?? key,
        contextWindowTokens: optionalPositiveInteger(field(table, "context_window"), `${scope}.context_window`),
        longContextThresholdTokens: optionalPositiveInteger(field(table, "long_context_threshold_tokens"), `${scope}.long_context_threshold_tokens`),
        capabilities: Object.keys(capabilities).length === 0 ? void 0 : capabilities,
        reasoning,
        maxOutputTokens: optionalPositiveInteger(field(table, "max_completion_tokens"), `${scope}.max_completion_tokens`),
        cursorModelId: optionalString(field(table, "cursor_model"), `${scope}.cursor_model`),
        supportsAssistantPrefill: optionalBoolean(field(table, "supports_assistant_prefill"), `${scope}.supports_assistant_prefill`),
        cacheTtlMs: optionalPositiveInteger(field(table, "cache_ttl_ms"), `${scope}.cache_ttl_ms`),
        displayName: optionalString(field(table, "name"), `${scope}.name`),
        supportsPersistedReasoning: optionalBoolean(field(table, "supports_persisted_reasoning"), `${scope}.supports_persisted_reasoning`),
        endpoint
    };
}
function resolveTomlModelEndpoint(key, table, document2, env) {
    const scope = `model.${key}`;
    const own = parseGatewaySettings(table, scope);
    const providerName = optionalString(field(table, "model_provider"), `${scope}.model_provider`);
    let provider;
    if (providerName !== void 0) {
        provider = document2.providers.get(providerName);
        if (provider === void 0) {
            fail(`${scope}.model_provider names "${providerName}" but [model_providers.${providerName}] is not defined`);
        }
    }
    const baseUrl = inheritGatewayUrl(own, provider);
    if (baseUrl === void 0) {
        fail(`${scope}.base_url is required (on the model or its model_provider; api_base_url is also accepted)`);
    }
    const apiBackend = own.apiBackend ?? provider?.apiBackend;
    if (apiBackend === void 0) {
        fail(`${scope}.api_backend is required \u2014 Grok Build defaults to chat_completions, which private inference does not speak; set api_backend = "${RESPONSES_API_BACKEND}" on the model or its model_provider`);
    }
    if (apiBackend !== RESPONSES_API_BACKEND) {
        fail(`${scope}.api_backend = "${apiBackend}" is not supported \u2014 private inference speaks the OpenAI Responses API only; set api_backend = "${RESPONSES_API_BACKEND}"`);
    }
    const headers = mergeHeaders(document2.headers, provider?.headers, own.headers);
    const envKeys = own.envKeys ?? provider?.envKeys;
    let credential = {};
    for (const name17 of envKeys ?? []){
        const apiKey = Object.hasOwn(env, name17) ? nonEmpty(env[name17]) : void 0;
        if (apiKey !== void 0) {
            credential = {
                apiKey
            };
            break;
        }
    }
    if (credential.apiKey === void 0) {
        const helper = resolveAuthHelper(own, provider, providerName, document2, scope);
        if (helper !== void 0) {
            credential = {
                apiKeyHelper: helper
            };
        } else if (envKeys !== void 0) {
            fail(`${scope}.env_key names ${envKeys.join(", ")} but none is set, and no auth_provider or [auth] auth_provider_command is configured`);
        }
    }
    return {
        baseUrl,
        ...credential,
        ...headers === void 0 ? {} : {
            headers
        }
    };
}
function resolveAuthHelper(own, provider, providerName, document2, scope) {
    if (own.authProvider !== void 0) {
        return resolveNamedAuthProvider(own.authProvider, document2, scope);
    }
    if (provider?.authProvider !== void 0) {
        return resolveNamedAuthProvider(provider.authProvider, document2, `model_providers.${providerName ?? "unknown"}`);
    }
    if (provider?.inlineAuthHelper !== void 0) {
        return provider.inlineAuthHelper;
    }
    return document2.authProviderHelper;
}
function resolveNamedAuthProvider(name17, document2, scope) {
    const helper = document2.authProviders.get(name17);
    if (helper === void 0) {
        fail(`${scope}.auth_provider names "${name17}" but [auth_provider.${name17}] is not defined`);
    }
    return helper;
}
function parseTomlProviders(raw) {
    const providers = new Map();
    if (raw === void 0) {
        return providers;
    }
    for (const [name17, table] of tableEntries(raw, "model_providers must be a table of [model_providers.<name>] tables")){
        if (notATable(table)) {
            fail(`model_providers.${name17} must be a table`);
        }
        providers.set(name17, parseGatewaySettings(table, `model_providers.${name17}`));
    }
    return providers;
}
function parseTomlAuthProviders(raw) {
    const providers = new Map();
    if (raw === void 0) {
        return providers;
    }
    for (const [name17, table] of tableEntries(raw, "auth_provider must be a table of [auth_provider.<name>] tables")){
        if (notATable(table)) {
            fail(`auth_provider.${name17} must be a table`);
        }
        const helper = parseAuthHelperTable(table, `auth_provider.${name17}`);
        if (helper === void 0) {
            fail(`auth_provider.${name17}.command is required`);
        }
        providers.set(name17, helper);
    }
    return providers;
}
function parseTomlAuthSection(raw) {
    if (raw === void 0) {
        return void 0;
    }
    if (notATable(raw)) {
        fail("auth must be a table");
    }
    const command = optionalString(field(raw, "auth_provider_command"), "auth.auth_provider_command");
    const tokenTtlSecs = optionalPositiveInteger(field(raw, "auth_token_ttl"), "auth.auth_token_ttl");
    if (command === void 0) {
        if (tokenTtlSecs !== void 0) {
            fail("auth.auth_token_ttl is set but auth.auth_provider_command is not");
        }
        return void 0;
    }
    return {
        command,
        ...tokenTtlSecs === void 0 ? {} : {
            tokenTtlSecs
        }
    };
}
function parseConfigFileToml(content, path64, env) {
    let raw;
    try {
        raw = parse3(content);
    } catch (error3) {
        const reason = (error3 instanceof Error ? error3.message : String(error3)).split("\n", 1)[0];
        fail(`${path64} is not valid TOML: ${reason}`);
    }
    if (notATable(raw)) {
        fail(`${path64} must contain a TOML document`);
    }
    const rawModels = field(raw, "models");
    if (rawModels !== void 0 && notATable(rawModels)) {
        fail(`models must be a [models] table, not a list \u2014 ${GRAMMAR_HINT}`);
    }
    const tables = tableEntries(field(raw, "model"), `no [model.<key>] tables \u2014 ${GRAMMAR_HINT}`).map(([key, table])=>{
        if (notATable(table)) {
            fail(`model.${key} must be a table`);
        }
        return {
            key,
            table
        };
    });
    const keys = tables.map(({ key })=>key);
    const declaredDefault = optionalString(field(rawModels, "default"), "models.default");
    if (declaredDefault !== void 0 && !keys.includes(declaredDefault)) {
        fail(`models.default = "${declaredDefault}" is not one of the [model.<key>] tables (${keys.join(", ")})`);
    }
    const defaultModelId = declaredDefault ?? (keys.length === 1 ? keys[0] : void 0);
    if (defaultModelId === void 0) {
        fail(`models.default is required when more than one model is defined \u2014 name one of: ${keys.join(", ")}`);
    }
    const globalDefaultEffort = optionalString(field(rawModels, "default_reasoning_effort"), "models.default_reasoning_effort");
    const document2 = {
        providers: parseTomlProviders(field(raw, "model_providers")),
        authProviders: parseTomlAuthProviders(field(raw, "auth_provider")),
        authProviderHelper: parseTomlAuthSection(field(raw, "auth")),
        headers: parseHeaders(field(rawModels, "extra_headers"), "models.extra_headers")
    };
    const models = tables.map(({ key, table })=>parseTomlModelTable(key, table, key === defaultModelId ? globalDefaultEffort : void 0, resolveTomlModelEndpoint(key, table, document2, env)));
    return {
        models,
        defaultModelId
    };
}
function parseShorthand(env) {
    const baseUrl = nonEmpty(env.CURSOR_PRIVATE_INFERENCE_BASE_URL);
    if (baseUrl === void 0) {
        fail("CURSOR_PRIVATE_INFERENCE_BASE_URL is not set");
    }
    const modelId = nonEmpty(env.CURSOR_PRIVATE_INFERENCE_MODEL);
    if (modelId === void 0) {
        fail("CURSOR_PRIVATE_INFERENCE_MODEL is not set");
    }
    const shorthandHelper = nonEmpty(env.CURSOR_PRIVATE_INFERENCE_API_KEY_HELPER);
    const endpoint = {
        baseUrl,
        apiKey: nonEmpty(env.CURSOR_PRIVATE_INFERENCE_API_KEY),
        apiKeyHelper: shorthandHelper === void 0 ? void 0 : {
            command: shorthandHelper
        }
    };
    if (endpoint.apiKey !== void 0 && endpoint.apiKeyHelper !== void 0) {
        fail("both CURSOR_PRIVATE_INFERENCE_API_KEY and CURSOR_PRIVATE_INFERENCE_API_KEY_HELPER are set \u2014 ambiguous credential config; set exactly one");
    }
    const tokenLimitRaw = nonEmpty(env.CURSOR_PRIVATE_INFERENCE_TOKEN_LIMIT);
    const contextWindowTokens = tokenLimitRaw === void 0 ? void 0 : Number(tokenLimitRaw);
    if (contextWindowTokens !== void 0 && (!Number.isSafeInteger(contextWindowTokens) || contextWindowTokens <= 0)) {
        fail("CURSOR_PRIVATE_INFERENCE_TOKEN_LIMIT must be a positive integer");
    }
    if (nonEmpty(env.CURSOR_PRIVATE_INFERENCE_API_SHAPE) !== void 0) {
        fail("CURSOR_PRIVATE_INFERENCE_API_SHAPE is no longer supported \u2014 private inference speaks the OpenAI Responses API only");
    }
    return {
        models: [
            {
                id: modelId,
                providerModelId: modelId,
                contextWindowTokens,
                endpoint
            }
        ],
        defaultModelId: modelId
    };
}
export function parsePrivateInferenceCatalog(input) {
    const fileRequested = input.configFilePath !== void 0;
    const shorthandVarsSet = SHORTHAND_ENV_VARS.filter((name17)=>nonEmpty(input.env[name17]) !== void 0);
    if (!fileRequested && shorthandVarsSet.length === 0) {
        return void 0;
    }
    if (fileRequested && shorthandVarsSet.length > 0) {
        fail(`both a config file (${input.configFilePath}) and shorthand env vars (${shorthandVarsSet.join(", ")}) are set \u2014 ambiguous config; use one source`);
    }
    if (!fileRequested) {
        return parseShorthand(input.env);
    }
    if (input.configFileContent === void 0) {
        fail(`could not read ${input.configFilePath}`);
    }
    const path64 = input.configFilePath;
    if (path64.toLowerCase().endsWith(".toml")) {
        return parseConfigFileToml(input.configFileContent, path64, input.env);
    }
    if (path64.toLowerCase().endsWith(".json")) {
        fail(`${path64}: JSON private-inference config is not supported \u2014 the config is a Grok Build config.toml; point CURSOR_PRIVATE_INFERENCE_CONFIG at a .toml file`);
    }
    fail(`${path64}: CURSOR_PRIVATE_INFERENCE_CONFIG must point at a .toml file`);
}
function resolveEffort(model, probe) {
    const reasoning = model.reasoning;
    switch(reasoning?.kind){
        case "off":
            return void 0;
        case "declared":
            return {
                tiers: reasoning.tiers,
                default: reasoning.defaultTierId
            };
        case "advertised":
        case void 0:
            {
                const advertised = probe?.reasoningEffortValues ?? [];
                const first = advertised[0];
                if (first === void 0) {
                    if (reasoning !== void 0) {
                        fail(`model "${model.id}": reasoning is declared without [[model.${model.id}.reasoning_efforts]] rungs and the gateway's /models advertises no tiers`);
                    }
                    return void 0;
                }
                const defaultTierId = reasoning?.defaultTierId ?? first;
                if (!advertised.includes(defaultTierId)) {
                    fail(`model "${model.id}": reasoning_effort "${defaultTierId}" is not one of the tiers the gateway advertises (${advertised.join(", ")})`);
                }
                return {
                    tiers: advertised.map((value)=>({
                            id: value,
                            value
                        })),
                    default: defaultTierId
                };
            }
    }
}
function resolveWebSearchTool(model, probe) {
    if (model.capabilities?.supportsBackendSearch === false) {
        return void 0;
    }
    return probe?.extendedCapabilities === true ? "web_search" : "web_search_preview";
}
export function resolvePrivateInferenceModel(model, probe) {
    if (probe?.advertisedDialect === "chat_completions") {
        fail(`model "${model.id}": the gateway advertises chat_completions for this model \u2014 private inference is Responses-only; the gateway must serve the Responses API`);
    }
    const contextWindowTokens = model.contextWindowTokens ?? probe?.contextLength;
    if (contextWindowTokens === void 0) {
        fail(`model "${model.id}": context_window is not configured and the gateway's /models advertises no context_length \u2014 set context_window (CURSOR_PRIVATE_INFERENCE_TOKEN_LIMIT for the shorthand)`);
    }
    const longContextThresholdTokens = model.longContextThresholdTokens ?? probe?.longContextThresholdTokens;
    if (model.longContextThresholdTokens !== void 0 && model.longContextThresholdTokens > contextWindowTokens) {
        fail(`model "${model.id}": long_context_threshold_tokens (${model.longContextThresholdTokens}) exceeds context_window (${contextWindowTokens})`);
    }
    return {
        id: model.id,
        providerModelId: model.providerModelId,
        contextWindowTokens,
        longContextThresholdTokens,
        vision: model.capabilities?.vision ?? probe?.supportsVision ?? false,
        webSearchTool: resolveWebSearchTool(model, probe),
        effort: resolveEffort(model, probe),
        maxOutputTokens: model.maxOutputTokens ?? probe?.maxOutputTokens,
        cursorModelId: model.cursorModelId,
        supportsAssistantPrefill: model.supportsAssistantPrefill,
        cacheTtlMs: model.cacheTtlMs,
        displayName: model.displayName ?? model.id,
        supportsPersistedReasoning: model.supportsPersistedReasoning ?? true,
        endpoint: model.endpoint
    };
}
function enablementFromMembershipTeams(teams, preferredTeamId) {
    if (preferredTeamId !== void 0) {
        return enablementForPreferredTeam(teams, preferredTeamId);
    }
    return enablementWhenEveryEligibleTeamIsEnabled(teams);
}
function enablementForPreferredTeam(teams, preferredTeamId) {
    const preferred = teams.find((team)=>team.id === preferredTeamId);
    if (preferred === void 0 || !isUsageEligibleTeam(preferred)) {
        return "disabled";
    }
    return isTeamPrivateInferenceEnabled(preferred) ? "enabled" : "disabled";
}
function enablementWhenEveryEligibleTeamIsEnabled(teams) {
    const eligible = teams.filter(isUsageEligibleTeam);
    if (eligible.length === 0) {
        return "disabled";
    }
    if (eligible.every(isTeamPrivateInferenceEnabled)) {
        return "enabled";
    }
    return "disabled";
}
function isUsageEligibleTeam(team) {
    return team.hasBilling && team.seats > 0;
}
function isTeamPrivateInferenceEnabled(team) {
    return team.privateInferenceEnablement === PrivateInferenceEnablement.ENABLED;
}
export function resolveDaemonDashboardEndpoint(input) {
    if (input.dashboardEndpoint !== void 0 && input.dashboardEndpoint.length > 0) {
        return input.dashboardEndpoint;
    }
    const fromEnv = input.env?.CURSOR_API_ENDPOINT;
    if (fromEnv !== void 0 && fromEnv.length > 0) {
        return fromEnv;
    }
    return DEFAULT_DAEMON_DASHBOARD_ENDPOINT;
}
export async function readDaemonTeamMembership(input = {}) {
    let accessToken;
    try {
        accessToken = await input.getAccessToken?.();
    } catch (error3) {
        if (error3 instanceof Error) {
            return "unavailable";
        }
        throw error3;
    }
    if (accessToken === void 0 || accessToken.length === 0) {
        return "pending";
    }
    const fetchTeams = input.fetchTeams ?? ((token)=>fetchMembershipTeamsFromDashboard({
            accessToken: token,
            endpoint: resolveDaemonDashboardEndpoint(input)
        }));
    try {
        const teams = await fetchTeams(accessToken);
        return enablementFromMembershipTeams(teams, input.preferredTeamId);
    } catch (error3) {
        if (isPreTeamsBackend(error3)) {
            return "disabled";
        }
        return "unavailable";
    }
}
async function fetchMembershipTeamsFromDashboard(input) {
    const isDev2 = process.env.NODE_ENV === "development";
    const transport = createConnectTransport({
        baseUrl: input.endpoint,
        httpVersion: "1.1",
        interceptors: [
            (next)=>async (req)=>{
                    req.header.set("authorization", `Bearer ${input.accessToken}`);
                    return next(req);
                }
        ],
        nodeOptions: {
            rejectUnauthorized: !isDev2
        }
    });
    const client = createClient(DashboardService, transport);
    const response = await client.getTeams(new GetTeamsRequest({
        activeOnly: true
    }));
    return (response.teams ?? []).map(teamRecord);
}
function teamRecord(team) {
    return {
        id: team.id,
        privateInferenceEnablement: team.privateInferenceEnablement,
        hasBilling: team.hasBilling,
        seats: team.seats
    };
}
function isPreTeamsBackend(error3) {
    if (!(error3 instanceof ConnectError)) {
        return false;
    }
    return error3.code === Code.NotFound || error3.rawMessage.includes("404");
}
export function teamEnablementAtActivation(membership, configFilePresent) {
    if (membership === "pending" && !configFilePresent) {
        return "unavailable";
    }
    return membership;
}
export function teamEnablementForTurn(membership) {
    return membership === "pending" ? "unavailable" : membership;
}
export function isDescendant(parent, descendant) {
    if (isWindows2) {
        parent = parent.toLowerCase();
        descendant = descendant.toLowerCase();
    }
    if (parent === descendant) {
        return true;
    }
    if (parent.charAt(parent.length - 1) !== path8.sep) {
        parent += path8.sep;
    }
    return descendant.startsWith(parent);
}
export async function checkFilesGenerated(options2) {
    const { repoRoot, filePaths, getContent } = options2;
    const results = new Map();
    if (filePaths.length === 0) {
        return results;
    }
    const gitattributes = await checkGitattributes(repoRoot, filePaths);
    await Promise.all(filePaths.map(async (filePath)=>{
        const gitAttrValue = gitattributes.get(filePath);
        if (gitAttrValue === true) {
            results.set(filePath, {
                isGenerated: true,
                source: "gitattributes"
            });
            return;
        }
        if (gitAttrValue === false) {
            results.set(filePath, {
                isGenerated: false,
                source: "gitattributes"
            });
            return;
        }
        if (isGeneratedPath(filePath)) {
            results.set(filePath, {
                isGenerated: true,
                source: "path-heuristic"
            });
            return;
        }
        if (getContent) {
            const content = await getContent(filePath);
            if (content !== void 0 && isGeneratedContent(filePath, content)) {
                results.set(filePath, {
                    isGenerated: true,
                    source: "content-heuristic"
                });
                return;
            }
        }
        results.set(filePath, {
            isGenerated: false,
            source: "none"
        });
    }));
    return results;
}
async function checkGitattributes(repoRoot, filePaths) {
    const results = new Map();
    if (filePaths.length === 0) {
        return results;
    }
    try {
        const output = await new Promise((resolve36, reject2)=>{
            const gitProcess = (0, import_node_child_process2.spawn)("git", [
                "check-attr",
                "linguist-generated",
                "--stdin"
            ], {
                cwd: repoRoot
            });
            let stdout = "";
            gitProcess.stdout.on("data", (data)=>{
                stdout += data.toString();
            });
            gitProcess.stdin.write(`${filePaths.join("\n")}
`);
            gitProcess.stdin.end();
            gitProcess.on("close", (_code)=>{
                resolve36(stdout);
            });
            gitProcess.on("error", (error3)=>{
                reject2(error3);
            });
        });
        for (const line of output.trim().split("\n")){
            const match2 = line.match(/^(.+): linguist-generated: (.+)$/);
            if (match2) {
                const filePath = match2[1];
                const value = match2[2];
                if (value === "true" || value === "set") {
                    results.set(filePath, true);
                } else if (value === "false" || value === "unset") {
                    results.set(filePath, false);
                }
            }
        }
    } catch  {}
    return results;
}
function isGeneratedPath(filePath) {
    const checker = new GeneratedFileChecker(filePath);
    return checker.isGeneratedByPath();
}
function isGeneratedContent(filePath, content) {
    const checker = new GeneratedFileChecker(filePath, ()=>content);
    return checker.isGeneratedByContent();
}
function pinnedEntriesFor(policy) {
    const repoConfigEntries = policy === "allow-hooks" ? REPO_CONFIG_EXECUTION_GUARD_ENTRIES.filter(([key])=>key !== "core.hooksPath") : REPO_CONFIG_EXECUTION_GUARD_ENTRIES;
    return [
        ...BARE_REPO_GUARD_ENTRIES,
        ...repoConfigEntries
    ];
}
function readGitConfigCount(env) {
    const raw = env.GIT_CONFIG_COUNT;
    if (raw === void 0 || raw === "") {
        return 0;
    }
    const parsed = Number.parseInt(String(raw), 10);
    if (!Number.isFinite(parsed) || parsed < 0) {
        return 0;
    }
    return parsed;
}
function applyPinnedGitConfig(env, pinnedEntries) {
    const count2 = readGitConfigCount(env);
    const result = {
        ...env
    };
    const foundKeys = new Set();
    for(let index = 0; index < count2; index++){
        const existingKey = result[`GIT_CONFIG_KEY_${index}`];
        for (const [pinnedKey, pinnedValue] of pinnedEntries){
            if (existingKey === pinnedKey) {
                result[`GIT_CONFIG_VALUE_${index}`] = pinnedValue;
                foundKeys.add(pinnedKey);
            }
        }
    }
    let nextIndex = count2;
    for (const [pinnedKey, pinnedValue] of pinnedEntries){
        if (foundKeys.has(pinnedKey)) {
            continue;
        }
        result[`GIT_CONFIG_KEY_${nextIndex}`] = pinnedKey;
        result[`GIT_CONFIG_VALUE_${nextIndex}`] = pinnedValue;
        nextIndex++;
    }
    if (nextIndex !== count2) {
        result.GIT_CONFIG_COUNT = String(nextIndex);
    }
    return result;
}
function createGitProcessEnv(options2) {
    const merged = {
        ...process.env,
        ...options2.spawnerEnv,
        LC_ALL: "en_US.UTF-8",
        LANG: "en_US.UTF-8",
        GIT_PAGER: "cat",
        ...options2.optionsEnv
    };
    if (options2.command !== void 0) {
        merged.VSCODE_GIT_COMMAND = options2.command;
    } else {
        delete merged.VSCODE_GIT_COMMAND;
    }
    return applyPinnedGitConfig(merged, pinnedEntriesFor(options2.repoConfigExecution ?? "block"));
}
function gitSubcommand(args) {
    const optionsWithValue = new Set([
        "-c",
        "-C",
        "--git-dir",
        "--work-tree"
    ]);
    for(let index = 0; index < args.length; index++){
        const arg = args[index];
        if (optionsWithValue.has(arg)) {
            index++;
            continue;
        }
        if (arg.startsWith("-")) {
            continue;
        }
        return arg;
    }
    return void 0;
}
function withGitEnv(args, env) {
    return createGitProcessEnv({
        command: gitSubcommand(args),
        optionsEnv: env
    });
}
export async function gitExecFile(file, args, options2) {
    const { env, encoding = "utf8", ...rest } = options2 ?? {};
    const result = await execFileAsync(file, args, {
        ...rest,
        encoding,
        env: withGitEnv(args, env)
    });
    return {
        stdout: String(result.stdout),
        stderr: String(result.stderr)
    };
}
export function gitSpawn(file, args, options2) {
    const { env, ...rest } = options2 ?? {};
    return (0, import_node_child_process3.spawn)(file, args, {
        ...rest,
        env: withGitEnv(args, env)
    });
}
function createHostGitExecutor() {
    return new LocalGitExecutor();
}
export function resolveHostGitExecutor(options2 = {}) {
    return options2.gitExecutor ?? createHostGitExecutor();
}
export function resolveHostMcpProvider(options2 = {}) {
    return options2.mcpProvider ?? new NoopHostMcpProvider();
}
function isAsyncIterable(value) {
    return value !== null && typeof value === "object" && Symbol.asyncIterator in value;
}
function isPromiseLike(value) {
    return value !== null && typeof value === "object" && "then" in value && typeof value.then === "function";
}
function wrapAsyncIterableWithSpan(iterable, span, cleanupSignalListener) {
    return {
        [Symbol.asyncIterator] () {
            const iterator = iterable[Symbol.asyncIterator]();
            let finished2 = false;
            const finish = (error3)=>{
                if (finished2) return;
                finished2 = true;
                if (error3) {
                    span?.recordException(error3 instanceof Error ? error3 : new Error(String(error3)));
                    span?.setStatus({
                        code: SpanStatusCode.ERROR,
                        message: error3 instanceof Error ? error3.message : "Stream failed"
                    });
                } else {
                    span?.setStatus({
                        code: SpanStatusCode.OK
                    });
                }
                span?.end();
                cleanupSignalListener?.();
            };
            return {
                async next () {
                    try {
                        const result = await iterator.next();
                        if (result.done) {
                            finish();
                        }
                        return result;
                    } catch (error3) {
                        finish(error3);
                        throw error3;
                    }
                },
                async return (value) {
                    finish();
                    if (iterator.return) {
                        return iterator.return(value);
                    }
                    return {
                        done: true,
                        value: void 0
                    };
                },
                async throw (error3) {
                    finish(error3);
                    if (iterator.throw) {
                        return iterator.throw(error3);
                    }
                    throw error3;
                }
            };
        }
    };
}
function parseTraceparentHeader(traceparent) {
    const parts = traceparent.split("-");
    if (parts.length !== 4) return null;
    const [version4, traceId, spanId, flags] = parts;
    if (version4 !== "00") return null;
    if (traceId.length !== 32 || spanId.length !== 16 || flags.length !== 2) return null;
    const traceFlags = parseInt(flags, 16);
    if (Number.isNaN(traceFlags)) return null;
    return {
        traceId,
        spanId,
        traceFlags
    };
}
function remoteSpanContextFromHeaders(headers) {
    try {
        const traceparent = headers.get("traceparent") || headers.get("backend-traceparent");
        if (!traceparent) return void 0;
        const parsed = parseTraceparentHeader(traceparent);
        if (!parsed) return void 0;
        return {
            traceId: parsed.traceId,
            spanId: parsed.spanId,
            traceFlags: parsed.traceFlags,
            isRemote: true
        };
    } catch  {
        return void 0;
    }
}
export function withInProcessCallerSpan(ctx, headers) {
    const caller = remoteSpanContextFromHeaders(headers);
    if (caller === void 0 || !isSpanContextValid(caller)) {
        return ctx;
    }
    return ctx.with(SPAN_KEY2, trace.wrapSpanContext({
        ...caller,
        isRemote: false
    }));
}
function extractTraceHeaders(ctx) {
    const headers = new Headers();
    try {
        const span = getSpan2(ctx);
        const spanContext = span?.spanContext?.();
        if (spanContext?.traceId && spanContext.spanId) {
            const traceFlags = spanContext.traceFlags ?? 0;
            const headerValue2 = `00-${spanContext.traceId}-${spanContext.spanId}-${traceFlags.toString(16).padStart(2, "0")}`;
            headers.set("traceparent", headerValue2);
            headers.set("backend-traceparent", headerValue2);
            if (spanContext.traceState) {
                const traceState = typeof spanContext.traceState.serialize === "function" ? spanContext.traceState.serialize() : String(spanContext.traceState);
                headers.set("tracestate", traceState);
            }
        }
    } catch  {}
    return headers;
}
function mergeHeaders2(...sources) {
    const merged = new Headers();
    for (const src of sources){
        if (!src) continue;
        if (src instanceof Headers) {
            src.forEach((v2, k2)=>{
                merged.set(k2, v2);
            });
        } else {
            Object.entries(src).forEach(([k2, v2])=>{
                merged.set(k2, v2);
            });
        }
    }
    return merged;
}
function addContextPropagation(client, options2) {
    const { injectTraceHeaders = true, extractHeaders } = options2;
    return new Proxy(client, {
        get (target, prop) {
            const original = target[prop];
            if (typeof original !== "function") return original;
            return (ctx, input, callOptions = {})=>{
                const spanCtx = withSpan(ctx.withName(`rpc.${String(prop)}`), {
                    kind: SpanKind.CLIENT,
                    attributes: {
                        "rpc.method": String(prop),
                        "rpc.system": "connect"
                    }
                });
                const span = getSpan2(spanCtx);
                let cleanupSignalListener;
                try {
                    let contextHeaders;
                    if (injectTraceHeaders) {
                        contextHeaders = extractTraceHeaders(spanCtx);
                    }
                    if (extractHeaders) {
                        const extra = extractHeaders(spanCtx);
                        if (extra) contextHeaders = mergeHeaders2(contextHeaders, extra);
                    }
                    const finalHeaders = mergeHeaders2(callOptions.headers, contextHeaders);
                    const { signal, cleanup } = options2.enableAbortSignal === true ? mergeContextSignal(spanCtx.signal, callOptions.signal) : {
                        signal: callOptions.signal,
                        cleanup: void 0
                    };
                    cleanupSignalListener = cleanup;
                    const contextValues = (callOptions.contextValues ?? createContextValues()).set(callerContextKey, spanCtx);
                    const enhancedOptions = {
                        ...callOptions,
                        headers: finalHeaders,
                        signal,
                        contextValues
                    };
                    const result = original.call(target, input, enhancedOptions);
                    if (isAsyncIterable(result)) {
                        return wrapAsyncIterableWithSpan(result, span, cleanupSignalListener);
                    }
                    if (isPromiseLike(result)) {
                        return result.then((res)=>{
                            if (isAsyncIterable(res)) {
                                return wrapAsyncIterableWithSpan(res, span, cleanupSignalListener);
                            }
                            span?.setStatus({
                                code: SpanStatusCode.OK
                            });
                            span?.end();
                            cleanupSignalListener?.();
                            return res;
                        }).catch((error3)=>{
                            span?.recordException(error3 instanceof Error ? error3 : new Error(String(error3)));
                            span?.setStatus({
                                code: SpanStatusCode.ERROR,
                                message: error3 instanceof Error ? error3.message : "RPC call failed"
                            });
                            span?.end();
                            cleanupSignalListener?.();
                            throw error3;
                        });
                    } else {
                        span?.setStatus({
                            code: SpanStatusCode.OK
                        });
                        span?.end();
                        cleanupSignalListener?.();
                        return result;
                    }
                } catch (error3) {
                    span?.recordException(error3 instanceof Error ? error3 : new Error(String(error3)));
                    span?.setStatus({
                        code: SpanStatusCode.ERROR,
                        message: error3 instanceof Error ? error3.message : "RPC call failed"
                    });
                    span?.end();
                    cleanupSignalListener?.();
                    throw error3;
                }
            };
        }
    });
}
function mergeContextSignal(ctxSignal, providedSignal) {
    if (providedSignal === void 0 || providedSignal === ctxSignal) {
        return {
            signal: ctxSignal
        };
    }
    const controller = new AbortController();
    const abortFromContext = ()=>{
        controller.abort(ctxSignal.reason);
    };
    const abortFromProvided = ()=>{
        controller.abort(providedSignal.reason);
    };
    ctxSignal.addEventListener("abort", abortFromContext, {
        once: true
    });
    providedSignal.addEventListener("abort", abortFromProvided, {
        once: true
    });
    if (ctxSignal.aborted) {
        abortFromContext();
    } else if (providedSignal.aborted) {
        abortFromProvided();
    }
    const cleanup = ()=>{
        ctxSignal.removeEventListener("abort", abortFromContext);
        providedSignal.removeEventListener("abort", abortFromProvided);
    };
    return {
        signal: controller.signal,
        cleanup
    };
}
export function createContextPropagatingClient(service, transport, options2 = {}) {
    const base = createClient(service, transport);
    return addContextPropagation(base, options2);
}
export { DashboardService };

export var dashboard_connect_exports = {};
Object.defineProperty(dashboard_connect_exports, "DashboardService", {
    enumerable: true,
    get: ()=>DashboardService
});
