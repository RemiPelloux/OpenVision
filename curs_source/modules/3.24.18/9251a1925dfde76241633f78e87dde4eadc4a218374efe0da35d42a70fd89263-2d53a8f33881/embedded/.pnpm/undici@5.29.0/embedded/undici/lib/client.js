import { require_connect2 } from "./core/connect.js";
import { require_errors } from "./core/errors.js";
import { require_request } from "./core/request.js";
import { require_symbols } from "./core/symbols.js";
import { require_util } from "./core/util.js";
import { require_dispatcher_base } from "./dispatcher-base.js";
import { require_redirectInterceptor } from "./interceptor/redirectInterceptor.js";
import { require_constants4 } from "./llhttp/constants.js";
import { require_llhttp_wasm } from "./llhttp/llhttp-wasm.js";
import { require_llhttp_simd_wasm } from "./llhttp/llhttp_simd-wasm.js";
import { require_timers } from "./timers.js";
var __wakaru_require_client_cache;
export function require_client() {
if (__wakaru_require_client_cache) return __wakaru_require_client_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_client_cache = module2;
"use strict";
var assert4 = require("assert");
var net = require("net");
var http4 = require("http");
var { pipeline: pipeline2 } = require("stream");
var util2 = require_util();
var timers = require_timers();
var Request2 = require_request();
var DispatcherBase = require_dispatcher_base();
var { RequestContentLengthMismatchError, ResponseContentLengthMismatchError, InvalidArgumentError: InvalidArgumentError3, RequestAbortedError, HeadersTimeoutError, HeadersOverflowError, SocketError, InformationalError, BodyTimeoutError, HTTPParserError, ResponseExceededMaxSizeError, ClientDestroyedError } = require_errors();
var buildConnector = require_connect2();
var { kUrl, kReset, kServerName, kClient, kBusy, kParser, kConnect, kBlocking, kResuming, kRunning, kPending, kSize, kWriting, kQueue, kConnected, kConnecting, kNeedDrain, kNoRef, kKeepAliveDefaultTimeout, kHostHeader, kPendingIdx, kRunningIdx, kError, kPipelining, kSocket, kKeepAliveTimeoutValue, kMaxHeadersSize, kKeepAliveMaxTimeout, kKeepAliveTimeoutThreshold, kHeadersTimeout, kBodyTimeout, kStrictContentLength, kConnector, kMaxRedirections, kMaxRequests, kCounter, kClose, kDestroy, kDispatch, kInterceptors, kLocalAddress, kMaxResponseSize, kHTTPConnVersion, kHost, kHTTP2Session, kHTTP2SessionState, kHTTP2BuildRequest, kHTTP2CopyHeaders, kHTTP1BuildRequest } = require_symbols();
var http23;
try {
    http23 = require("http2");
} catch  {
    http23 = {
        constants: {}
    };
}
var { constants: { HTTP2_HEADER_AUTHORITY, HTTP2_HEADER_METHOD, HTTP2_HEADER_PATH, HTTP2_HEADER_SCHEME, HTTP2_HEADER_CONTENT_LENGTH, HTTP2_HEADER_EXPECT, HTTP2_HEADER_STATUS } } = http23;
var h2ExperimentalWarned = false;
var FastBuffer = Buffer[Symbol.species];
var kClosedResolve = Symbol("kClosedResolve");
var channels = {};
try {
    const diagnosticsChannel = require("diagnostics_channel");
    channels.sendHeaders = diagnosticsChannel.channel("undici:client:sendHeaders");
    channels.beforeConnect = diagnosticsChannel.channel("undici:client:beforeConnect");
    channels.connectError = diagnosticsChannel.channel("undici:client:connectError");
    channels.connected = diagnosticsChannel.channel("undici:client:connected");
} catch  {
    channels.sendHeaders = {
        hasSubscribers: false
    };
    channels.beforeConnect = {
        hasSubscribers: false
    };
    channels.connectError = {
        hasSubscribers: false
    };
    channels.connected = {
        hasSubscribers: false
    };
}
var Client2 = class extends DispatcherBase {
    constructor(url2, { interceptors, maxHeaderSize, headersTimeout, socketTimeout, requestTimeout, connectTimeout, bodyTimeout, idleTimeout, keepAlive, keepAliveTimeout, maxKeepAliveTimeout, keepAliveMaxTimeout, keepAliveTimeoutThreshold, socketPath, pipelining, tls: tls3, strictContentLength, maxCachedSessions, maxRedirections, connect: connect4, maxRequestsPerClient, localAddress, maxResponseSize, autoSelectFamily, autoSelectFamilyAttemptTimeout, allowH2, maxConcurrentStreams } = {}){
        super();
        if (keepAlive !== void 0) {
            throw new InvalidArgumentError3("unsupported keepAlive, use pipelining=0 instead");
        }
        if (socketTimeout !== void 0) {
            throw new InvalidArgumentError3("unsupported socketTimeout, use headersTimeout & bodyTimeout instead");
        }
        if (requestTimeout !== void 0) {
            throw new InvalidArgumentError3("unsupported requestTimeout, use headersTimeout & bodyTimeout instead");
        }
        if (idleTimeout !== void 0) {
            throw new InvalidArgumentError3("unsupported idleTimeout, use keepAliveTimeout instead");
        }
        if (maxKeepAliveTimeout !== void 0) {
            throw new InvalidArgumentError3("unsupported maxKeepAliveTimeout, use keepAliveMaxTimeout instead");
        }
        if (maxHeaderSize != null && !Number.isFinite(maxHeaderSize)) {
            throw new InvalidArgumentError3("invalid maxHeaderSize");
        }
        if (socketPath != null && typeof socketPath !== "string") {
            throw new InvalidArgumentError3("invalid socketPath");
        }
        if (connectTimeout != null && (!Number.isFinite(connectTimeout) || connectTimeout < 0)) {
            throw new InvalidArgumentError3("invalid connectTimeout");
        }
        if (keepAliveTimeout != null && (!Number.isFinite(keepAliveTimeout) || keepAliveTimeout <= 0)) {
            throw new InvalidArgumentError3("invalid keepAliveTimeout");
        }
        if (keepAliveMaxTimeout != null && (!Number.isFinite(keepAliveMaxTimeout) || keepAliveMaxTimeout <= 0)) {
            throw new InvalidArgumentError3("invalid keepAliveMaxTimeout");
        }
        if (keepAliveTimeoutThreshold != null && !Number.isFinite(keepAliveTimeoutThreshold)) {
            throw new InvalidArgumentError3("invalid keepAliveTimeoutThreshold");
        }
        if (headersTimeout != null && (!Number.isInteger(headersTimeout) || headersTimeout < 0)) {
            throw new InvalidArgumentError3("headersTimeout must be a positive integer or zero");
        }
        if (bodyTimeout != null && (!Number.isInteger(bodyTimeout) || bodyTimeout < 0)) {
            throw new InvalidArgumentError3("bodyTimeout must be a positive integer or zero");
        }
        if (connect4 != null && typeof connect4 !== "function" && typeof connect4 !== "object") {
            throw new InvalidArgumentError3("connect must be a function or an object");
        }
        if (maxRedirections != null && (!Number.isInteger(maxRedirections) || maxRedirections < 0)) {
            throw new InvalidArgumentError3("maxRedirections must be a positive number");
        }
        if (maxRequestsPerClient != null && (!Number.isInteger(maxRequestsPerClient) || maxRequestsPerClient < 0)) {
            throw new InvalidArgumentError3("maxRequestsPerClient must be a positive number");
        }
        if (localAddress != null && (typeof localAddress !== "string" || net.isIP(localAddress) === 0)) {
            throw new InvalidArgumentError3("localAddress must be valid string IP address");
        }
        if (maxResponseSize != null && (!Number.isInteger(maxResponseSize) || maxResponseSize < -1)) {
            throw new InvalidArgumentError3("maxResponseSize must be a positive number");
        }
        if (autoSelectFamilyAttemptTimeout != null && (!Number.isInteger(autoSelectFamilyAttemptTimeout) || autoSelectFamilyAttemptTimeout < -1)) {
            throw new InvalidArgumentError3("autoSelectFamilyAttemptTimeout must be a positive number");
        }
        if (allowH2 != null && typeof allowH2 !== "boolean") {
            throw new InvalidArgumentError3("allowH2 must be a valid boolean value");
        }
        if (maxConcurrentStreams != null && (typeof maxConcurrentStreams !== "number" || maxConcurrentStreams < 1)) {
            throw new InvalidArgumentError3("maxConcurrentStreams must be a possitive integer, greater than 0");
        }
        if (typeof connect4 !== "function") {
            connect4 = buildConnector({
                ...tls3,
                maxCachedSessions,
                allowH2,
                socketPath,
                timeout: connectTimeout,
                ...util2.nodeHasAutoSelectFamily && autoSelectFamily ? {
                    autoSelectFamily,
                    autoSelectFamilyAttemptTimeout
                } : void 0,
                ...connect4
            });
        }
        this[kInterceptors] = interceptors && interceptors.Client && Array.isArray(interceptors.Client) ? interceptors.Client : [
            createRedirectInterceptor({
                maxRedirections
            })
        ];
        this[kUrl] = util2.parseOrigin(url2);
        this[kConnector] = connect4;
        this[kSocket] = null;
        this[kPipelining] = pipelining != null ? pipelining : 1;
        this[kMaxHeadersSize] = maxHeaderSize || http4.maxHeaderSize;
        this[kKeepAliveDefaultTimeout] = keepAliveTimeout == null ? 4e3 : keepAliveTimeout;
        this[kKeepAliveMaxTimeout] = keepAliveMaxTimeout == null ? 6e5 : keepAliveMaxTimeout;
        this[kKeepAliveTimeoutThreshold] = keepAliveTimeoutThreshold == null ? 1e3 : keepAliveTimeoutThreshold;
        this[kKeepAliveTimeoutValue] = this[kKeepAliveDefaultTimeout];
        this[kServerName] = null;
        this[kLocalAddress] = localAddress != null ? localAddress : null;
        this[kResuming] = 0;
        this[kNeedDrain] = 0;
        this[kHostHeader] = `host: ${this[kUrl].hostname}${this[kUrl].port ? `:${this[kUrl].port}` : ""}\r
`;
        this[kBodyTimeout] = bodyTimeout != null ? bodyTimeout : 3e5;
        this[kHeadersTimeout] = headersTimeout != null ? headersTimeout : 3e5;
        this[kStrictContentLength] = strictContentLength == null ? true : strictContentLength;
        this[kMaxRedirections] = maxRedirections;
        this[kMaxRequests] = maxRequestsPerClient;
        this[kClosedResolve] = null;
        this[kMaxResponseSize] = maxResponseSize > -1 ? maxResponseSize : -1;
        this[kHTTPConnVersion] = "h1";
        this[kHTTP2Session] = null;
        this[kHTTP2SessionState] = !allowH2 ? null : {
            openStreams: 0,
            maxConcurrentStreams: maxConcurrentStreams != null ? maxConcurrentStreams : 100
        };
        this[kHost] = `${this[kUrl].hostname}${this[kUrl].port ? `:${this[kUrl].port}` : ""}`;
        this[kQueue] = [];
        this[kRunningIdx] = 0;
        this[kPendingIdx] = 0;
    }
    get pipelining() {
        return this[kPipelining];
    }
    set pipelining(value) {
        this[kPipelining] = value;
        resume(this, true);
    }
    get [kPending]() {
        return this[kQueue].length - this[kPendingIdx];
    }
    get [kRunning]() {
        return this[kPendingIdx] - this[kRunningIdx];
    }
    get [kSize]() {
        return this[kQueue].length - this[kRunningIdx];
    }
    get [kConnected]() {
        return !!this[kSocket] && !this[kConnecting] && !this[kSocket].destroyed;
    }
    get [kBusy]() {
        const socket = this[kSocket];
        return socket && (socket[kReset] || socket[kWriting] || socket[kBlocking]) || this[kSize] >= (this[kPipelining] || 1) || this[kPending] > 0;
    }
    [kConnect](cb) {
        connect3(this);
        this.once("connect", cb);
    }
    [kDispatch](opts, handler) {
        const origin = opts.origin || this[kUrl].origin;
        const request3 = this[kHTTPConnVersion] === "h2" ? Request2[kHTTP2BuildRequest](origin, opts, handler) : Request2[kHTTP1BuildRequest](origin, opts, handler);
        this[kQueue].push(request3);
        if (this[kResuming]) {} else if (util2.bodyLength(request3.body) == null && util2.isIterable(request3.body)) {
            this[kResuming] = 1;
            process.nextTick(resume, this);
        } else {
            resume(this, true);
        }
        if (this[kResuming] && this[kNeedDrain] !== 2 && this[kBusy]) {
            this[kNeedDrain] = 2;
        }
        return this[kNeedDrain] < 2;
    }
    async [kClose]() {
        return new Promise((resolve36)=>{
            if (!this[kSize]) {
                resolve36(null);
            } else {
                this[kClosedResolve] = resolve36;
            }
        });
    }
    async [kDestroy](err) {
        return new Promise((resolve36)=>{
            const requests = this[kQueue].splice(this[kPendingIdx]);
            for(let i = 0; i < requests.length; i++){
                const request3 = requests[i];
                errorRequest(this, request3, err);
            }
            const callback = ()=>{
                if (this[kClosedResolve]) {
                    this[kClosedResolve]();
                    this[kClosedResolve] = null;
                }
                resolve36();
            };
            if (this[kHTTP2Session] != null) {
                util2.destroy(this[kHTTP2Session], err);
                this[kHTTP2Session] = null;
                this[kHTTP2SessionState] = null;
            }
            if (!this[kSocket]) {
                queueMicrotask(callback);
            } else {
                util2.destroy(this[kSocket].on("close", callback), err);
            }
            resume(this);
        });
    }
};
function onHttp2SessionError(err) {
    assert4(err.code !== "ERR_TLS_CERT_ALTNAME_INVALID");
    this[kSocket][kError] = err;
    onError(this[kClient], err);
}
function onHttp2FrameError(type2, code, id) {
    const err = new InformationalError(`HTTP/2: "frameError" received - type ${type2}, code ${code}`);
    if (id === 0) {
        this[kSocket][kError] = err;
        onError(this[kClient], err);
    }
}
function onHttp2SessionEnd() {
    util2.destroy(this, new SocketError("other side closed"));
    util2.destroy(this[kSocket], new SocketError("other side closed"));
}
function onHTTP2GoAway(code) {
    const client = this[kClient];
    const err = new InformationalError(`HTTP/2: "GOAWAY" frame received with code ${code}`);
    client[kSocket] = null;
    client[kHTTP2Session] = null;
    if (client.destroyed) {
        assert4(this[kPending] === 0);
        const requests = client[kQueue].splice(client[kRunningIdx]);
        for(let i = 0; i < requests.length; i++){
            const request3 = requests[i];
            errorRequest(this, request3, err);
        }
    } else if (client[kRunning] > 0) {
        const request3 = client[kQueue][client[kRunningIdx]];
        client[kQueue][client[kRunningIdx]++] = null;
        errorRequest(client, request3, err);
    }
    client[kPendingIdx] = client[kRunningIdx];
    assert4(client[kRunning] === 0);
    client.emit("disconnect", client[kUrl], [
        client
    ], err);
    resume(client);
}
var constants14 = require_constants4();
var createRedirectInterceptor = require_redirectInterceptor();
var EMPTY_BUF = Buffer.alloc(0);
async function lazyllhttp() {
    const llhttpWasmData = process.env.JEST_WORKER_ID ? require_llhttp_wasm() : void 0;
    let mod2;
    try {
        mod2 = await WebAssembly.compile(Buffer.from(require_llhttp_simd_wasm(), "base64"));
    } catch (e) {
        mod2 = await WebAssembly.compile(Buffer.from(llhttpWasmData || require_llhttp_wasm(), "base64"));
    }
    return await WebAssembly.instantiate(mod2, {
        env: {
            wasm_on_url: (p2, at2, len)=>{
                return 0;
            },
            wasm_on_status: (p2, at2, len)=>{
                assert4.strictEqual(currentParser.ptr, p2);
                const start = at2 - currentBufferPtr + currentBufferRef.byteOffset;
                return currentParser.onStatus(new FastBuffer(currentBufferRef.buffer, start, len)) || 0;
            },
            wasm_on_message_begin: (p2)=>{
                assert4.strictEqual(currentParser.ptr, p2);
                return currentParser.onMessageBegin() || 0;
            },
            wasm_on_header_field: (p2, at2, len)=>{
                assert4.strictEqual(currentParser.ptr, p2);
                const start = at2 - currentBufferPtr + currentBufferRef.byteOffset;
                return currentParser.onHeaderField(new FastBuffer(currentBufferRef.buffer, start, len)) || 0;
            },
            wasm_on_header_value: (p2, at2, len)=>{
                assert4.strictEqual(currentParser.ptr, p2);
                const start = at2 - currentBufferPtr + currentBufferRef.byteOffset;
                return currentParser.onHeaderValue(new FastBuffer(currentBufferRef.buffer, start, len)) || 0;
            },
            wasm_on_headers_complete: (p2, statusCode, upgrade, shouldKeepAlive)=>{
                assert4.strictEqual(currentParser.ptr, p2);
                return currentParser.onHeadersComplete(statusCode, Boolean(upgrade), Boolean(shouldKeepAlive)) || 0;
            },
            wasm_on_body: (p2, at2, len)=>{
                assert4.strictEqual(currentParser.ptr, p2);
                const start = at2 - currentBufferPtr + currentBufferRef.byteOffset;
                return currentParser.onBody(new FastBuffer(currentBufferRef.buffer, start, len)) || 0;
            },
            wasm_on_message_complete: (p2)=>{
                assert4.strictEqual(currentParser.ptr, p2);
                return currentParser.onMessageComplete() || 0;
            }
        }
    });
}
var llhttpInstance = null;
var llhttpPromise = lazyllhttp();
llhttpPromise.catch();
var currentParser = null;
var currentBufferRef = null;
var currentBufferSize = 0;
var currentBufferPtr = null;
var TIMEOUT_HEADERS = 1;
var TIMEOUT_BODY = 2;
var TIMEOUT_IDLE = 3;
var Parser5 = class {
    constructor(client, socket, { exports: exports3 }){
        assert4(Number.isFinite(client[kMaxHeadersSize]) && client[kMaxHeadersSize] > 0);
        this.llhttp = exports3;
        this.ptr = this.llhttp.llhttp_alloc(constants14.TYPE.RESPONSE);
        this.client = client;
        this.socket = socket;
        this.timeout = null;
        this.timeoutValue = null;
        this.timeoutType = null;
        this.statusCode = null;
        this.statusText = "";
        this.upgrade = false;
        this.headers = [];
        this.headersSize = 0;
        this.headersMaxSize = client[kMaxHeadersSize];
        this.shouldKeepAlive = false;
        this.paused = false;
        this.resume = this.resume.bind(this);
        this.bytesRead = 0;
        this.keepAlive = "";
        this.contentLength = "";
        this.connection = "";
        this.maxResponseSize = client[kMaxResponseSize];
    }
    setTimeout(value, type2) {
        this.timeoutType = type2;
        if (value !== this.timeoutValue) {
            timers.clearTimeout(this.timeout);
            if (value) {
                this.timeout = timers.setTimeout(onParserTimeout, value, this);
                if (this.timeout.unref) {
                    this.timeout.unref();
                }
            } else {
                this.timeout = null;
            }
            this.timeoutValue = value;
        } else if (this.timeout) {
            if (this.timeout.refresh) {
                this.timeout.refresh();
            }
        }
    }
    resume() {
        if (this.socket.destroyed || !this.paused) {
            return;
        }
        assert4(this.ptr != null);
        assert4(currentParser == null);
        this.llhttp.llhttp_resume(this.ptr);
        assert4(this.timeoutType === TIMEOUT_BODY);
        if (this.timeout) {
            if (this.timeout.refresh) {
                this.timeout.refresh();
            }
        }
        this.paused = false;
        this.execute(this.socket.read() || EMPTY_BUF);
        this.readMore();
    }
    readMore() {
        while(!this.paused && this.ptr){
            const chunk = this.socket.read();
            if (chunk === null) {
                break;
            }
            this.execute(chunk);
        }
    }
    execute(data) {
        assert4(this.ptr != null);
        assert4(currentParser == null);
        assert4(!this.paused);
        const { socket, llhttp } = this;
        if (data.length > currentBufferSize) {
            if (currentBufferPtr) {
                llhttp.free(currentBufferPtr);
            }
            currentBufferSize = Math.ceil(data.length / 4096) * 4096;
            currentBufferPtr = llhttp.malloc(currentBufferSize);
        }
        new Uint8Array(llhttp.memory.buffer, currentBufferPtr, currentBufferSize).set(data);
        try {
            let ret;
            try {
                currentBufferRef = data;
                currentParser = this;
                ret = llhttp.llhttp_execute(this.ptr, currentBufferPtr, data.length);
            } catch (err) {
                throw err;
            } finally{
                currentParser = null;
                currentBufferRef = null;
            }
            const offset = llhttp.llhttp_get_error_pos(this.ptr) - currentBufferPtr;
            if (ret === constants14.ERROR.PAUSED_UPGRADE) {
                this.onUpgrade(data.slice(offset));
            } else if (ret === constants14.ERROR.PAUSED) {
                this.paused = true;
                socket.unshift(data.slice(offset));
            } else if (ret !== constants14.ERROR.OK) {
                const ptr = llhttp.llhttp_get_error_reason(this.ptr);
                let message = "";
                if (ptr) {
                    const len = new Uint8Array(llhttp.memory.buffer, ptr).indexOf(0);
                    message = "Response does not match the HTTP/1.1 protocol (" + Buffer.from(llhttp.memory.buffer, ptr, len).toString() + ")";
                }
                throw new HTTPParserError(message, constants14.ERROR[ret], data.slice(offset));
            }
        } catch (err) {
            util2.destroy(socket, err);
        }
    }
    destroy() {
        assert4(this.ptr != null);
        assert4(currentParser == null);
        this.llhttp.llhttp_free(this.ptr);
        this.ptr = null;
        timers.clearTimeout(this.timeout);
        this.timeout = null;
        this.timeoutValue = null;
        this.timeoutType = null;
        this.paused = false;
    }
    onStatus(buf) {
        this.statusText = buf.toString();
    }
    onMessageBegin() {
        const { socket, client } = this;
        if (socket.destroyed) {
            return -1;
        }
        const request3 = client[kQueue][client[kRunningIdx]];
        if (!request3) {
            return -1;
        }
    }
    onHeaderField(buf) {
        const len = this.headers.length;
        if ((len & 1) === 0) {
            this.headers.push(buf);
        } else {
            this.headers[len - 1] = Buffer.concat([
                this.headers[len - 1],
                buf
            ]);
        }
        this.trackHeader(buf.length);
    }
    onHeaderValue(buf) {
        let len = this.headers.length;
        if ((len & 1) === 1) {
            this.headers.push(buf);
            len += 1;
        } else {
            this.headers[len - 1] = Buffer.concat([
                this.headers[len - 1],
                buf
            ]);
        }
        const key = this.headers[len - 2];
        if (key.length === 10 && key.toString().toLowerCase() === "keep-alive") {
            this.keepAlive += buf.toString();
        } else if (key.length === 10 && key.toString().toLowerCase() === "connection") {
            this.connection += buf.toString();
        } else if (key.length === 14 && key.toString().toLowerCase() === "content-length") {
            this.contentLength += buf.toString();
        }
        this.trackHeader(buf.length);
    }
    trackHeader(len) {
        this.headersSize += len;
        if (this.headersSize >= this.headersMaxSize) {
            util2.destroy(this.socket, new HeadersOverflowError());
        }
    }
    onUpgrade(head) {
        const { upgrade, client, socket, headers, statusCode } = this;
        assert4(upgrade);
        const request3 = client[kQueue][client[kRunningIdx]];
        assert4(request3);
        assert4(!socket.destroyed);
        assert4(socket === client[kSocket]);
        assert4(!this.paused);
        assert4(request3.upgrade || request3.method === "CONNECT");
        this.statusCode = null;
        this.statusText = "";
        this.shouldKeepAlive = null;
        assert4(this.headers.length % 2 === 0);
        this.headers = [];
        this.headersSize = 0;
        socket.unshift(head);
        socket[kParser].destroy();
        socket[kParser] = null;
        socket[kClient] = null;
        socket[kError] = null;
        socket.removeListener("error", onSocketError).removeListener("readable", onSocketReadable).removeListener("end", onSocketEnd).removeListener("close", onSocketClose);
        client[kSocket] = null;
        client[kQueue][client[kRunningIdx]++] = null;
        client.emit("disconnect", client[kUrl], [
            client
        ], new InformationalError("upgrade"));
        try {
            request3.onUpgrade(statusCode, headers, socket);
        } catch (err) {
            util2.destroy(socket, err);
        }
        resume(client);
    }
    onHeadersComplete(statusCode, upgrade, shouldKeepAlive) {
        const { client, socket, headers, statusText } = this;
        if (socket.destroyed) {
            return -1;
        }
        const request3 = client[kQueue][client[kRunningIdx]];
        if (!request3) {
            return -1;
        }
        assert4(!this.upgrade);
        assert4(this.statusCode < 200);
        if (statusCode === 100) {
            util2.destroy(socket, new SocketError("bad response", util2.getSocketInfo(socket)));
            return -1;
        }
        if (upgrade && !request3.upgrade) {
            util2.destroy(socket, new SocketError("bad upgrade", util2.getSocketInfo(socket)));
            return -1;
        }
        assert4.strictEqual(this.timeoutType, TIMEOUT_HEADERS);
        this.statusCode = statusCode;
        this.shouldKeepAlive = shouldKeepAlive || request3.method === "HEAD" && !socket[kReset] && this.connection.toLowerCase() === "keep-alive";
        if (this.statusCode >= 200) {
            const bodyTimeout = request3.bodyTimeout != null ? request3.bodyTimeout : client[kBodyTimeout];
            this.setTimeout(bodyTimeout, TIMEOUT_BODY);
        } else if (this.timeout) {
            if (this.timeout.refresh) {
                this.timeout.refresh();
            }
        }
        if (request3.method === "CONNECT") {
            assert4(client[kRunning] === 1);
            this.upgrade = true;
            return 2;
        }
        if (upgrade) {
            assert4(client[kRunning] === 1);
            this.upgrade = true;
            return 2;
        }
        assert4(this.headers.length % 2 === 0);
        this.headers = [];
        this.headersSize = 0;
        if (this.shouldKeepAlive && client[kPipelining]) {
            const keepAliveTimeout = this.keepAlive ? util2.parseKeepAliveTimeout(this.keepAlive) : null;
            if (keepAliveTimeout != null) {
                const timeout2 = Math.min(keepAliveTimeout - client[kKeepAliveTimeoutThreshold], client[kKeepAliveMaxTimeout]);
                if (timeout2 <= 0) {
                    socket[kReset] = true;
                } else {
                    client[kKeepAliveTimeoutValue] = timeout2;
                }
            } else {
                client[kKeepAliveTimeoutValue] = client[kKeepAliveDefaultTimeout];
            }
        } else {
            socket[kReset] = true;
        }
        const pause = request3.onHeaders(statusCode, headers, this.resume, statusText) === false;
        if (request3.aborted) {
            return -1;
        }
        if (request3.method === "HEAD") {
            return 1;
        }
        if (statusCode < 200) {
            return 1;
        }
        if (socket[kBlocking]) {
            socket[kBlocking] = false;
            resume(client);
        }
        return pause ? constants14.ERROR.PAUSED : 0;
    }
    onBody(buf) {
        const { client, socket, statusCode, maxResponseSize } = this;
        if (socket.destroyed) {
            return -1;
        }
        const request3 = client[kQueue][client[kRunningIdx]];
        assert4(request3);
        assert4.strictEqual(this.timeoutType, TIMEOUT_BODY);
        if (this.timeout) {
            if (this.timeout.refresh) {
                this.timeout.refresh();
            }
        }
        assert4(statusCode >= 200);
        if (maxResponseSize > -1 && this.bytesRead + buf.length > maxResponseSize) {
            util2.destroy(socket, new ResponseExceededMaxSizeError());
            return -1;
        }
        this.bytesRead += buf.length;
        if (request3.onData(buf) === false) {
            return constants14.ERROR.PAUSED;
        }
    }
    onMessageComplete() {
        const { client, socket, statusCode, upgrade, headers, contentLength, bytesRead, shouldKeepAlive } = this;
        if (socket.destroyed && (!statusCode || shouldKeepAlive)) {
            return -1;
        }
        if (upgrade) {
            return;
        }
        const request3 = client[kQueue][client[kRunningIdx]];
        assert4(request3);
        assert4(statusCode >= 100);
        this.statusCode = null;
        this.statusText = "";
        this.bytesRead = 0;
        this.contentLength = "";
        this.keepAlive = "";
        this.connection = "";
        assert4(this.headers.length % 2 === 0);
        this.headers = [];
        this.headersSize = 0;
        if (statusCode < 200) {
            return;
        }
        if (request3.method !== "HEAD" && contentLength && bytesRead !== parseInt(contentLength, 10)) {
            util2.destroy(socket, new ResponseContentLengthMismatchError());
            return -1;
        }
        request3.onComplete(headers);
        client[kQueue][client[kRunningIdx]++] = null;
        if (socket[kWriting]) {
            assert4.strictEqual(client[kRunning], 0);
            util2.destroy(socket, new InformationalError("reset"));
            return constants14.ERROR.PAUSED;
        } else if (!shouldKeepAlive) {
            util2.destroy(socket, new InformationalError("reset"));
            return constants14.ERROR.PAUSED;
        } else if (socket[kReset] && client[kRunning] === 0) {
            util2.destroy(socket, new InformationalError("reset"));
            return constants14.ERROR.PAUSED;
        } else if (client[kPipelining] === 1) {
            setImmediate(resume, client);
        } else {
            resume(client);
        }
    }
};
function onParserTimeout(parser) {
    const { socket, timeoutType, client } = parser;
    if (timeoutType === TIMEOUT_HEADERS) {
        if (!socket[kWriting] || socket.writableNeedDrain || client[kRunning] > 1) {
            assert4(!parser.paused, "cannot be paused while waiting for headers");
            util2.destroy(socket, new HeadersTimeoutError());
        }
    } else if (timeoutType === TIMEOUT_BODY) {
        if (!parser.paused) {
            util2.destroy(socket, new BodyTimeoutError());
        }
    } else if (timeoutType === TIMEOUT_IDLE) {
        assert4(client[kRunning] === 0 && client[kKeepAliveTimeoutValue]);
        util2.destroy(socket, new InformationalError("socket idle timeout"));
    }
}
function onSocketReadable() {
    const { [kParser]: parser } = this;
    if (parser) {
        parser.readMore();
    }
}
function onSocketError(err) {
    const { [kClient]: client, [kParser]: parser } = this;
    assert4(err.code !== "ERR_TLS_CERT_ALTNAME_INVALID");
    if (client[kHTTPConnVersion] !== "h2") {
        if (err.code === "ECONNRESET" && parser.statusCode && !parser.shouldKeepAlive) {
            parser.onMessageComplete();
            return;
        }
    }
    this[kError] = err;
    onError(this[kClient], err);
}
function onError(client, err) {
    if (client[kRunning] === 0 && err.code !== "UND_ERR_INFO" && err.code !== "UND_ERR_SOCKET") {
        assert4(client[kPendingIdx] === client[kRunningIdx]);
        const requests = client[kQueue].splice(client[kRunningIdx]);
        for(let i = 0; i < requests.length; i++){
            const request3 = requests[i];
            errorRequest(client, request3, err);
        }
        assert4(client[kSize] === 0);
    }
}
function onSocketEnd() {
    const { [kParser]: parser, [kClient]: client } = this;
    if (client[kHTTPConnVersion] !== "h2") {
        if (parser.statusCode && !parser.shouldKeepAlive) {
            parser.onMessageComplete();
            return;
        }
    }
    util2.destroy(this, new SocketError("other side closed", util2.getSocketInfo(this)));
}
function onSocketClose() {
    const { [kClient]: client, [kParser]: parser } = this;
    if (client[kHTTPConnVersion] === "h1" && parser) {
        if (!this[kError] && parser.statusCode && !parser.shouldKeepAlive) {
            parser.onMessageComplete();
        }
        this[kParser].destroy();
        this[kParser] = null;
    }
    const err = this[kError] || new SocketError("closed", util2.getSocketInfo(this));
    client[kSocket] = null;
    if (client.destroyed) {
        assert4(client[kPending] === 0);
        const requests = client[kQueue].splice(client[kRunningIdx]);
        for(let i = 0; i < requests.length; i++){
            const request3 = requests[i];
            errorRequest(client, request3, err);
        }
    } else if (client[kRunning] > 0 && err.code !== "UND_ERR_INFO") {
        const request3 = client[kQueue][client[kRunningIdx]];
        client[kQueue][client[kRunningIdx]++] = null;
        errorRequest(client, request3, err);
    }
    client[kPendingIdx] = client[kRunningIdx];
    assert4(client[kRunning] === 0);
    client.emit("disconnect", client[kUrl], [
        client
    ], err);
    resume(client);
}
async function connect3(client) {
    assert4(!client[kConnecting]);
    assert4(!client[kSocket]);
    let { host, hostname: hostname3, protocol, port } = client[kUrl];
    if (hostname3[0] === "[") {
        const idx = hostname3.indexOf("]");
        assert4(idx !== -1);
        const ip = hostname3.substring(1, idx);
        assert4(net.isIP(ip));
        hostname3 = ip;
    }
    client[kConnecting] = true;
    if (channels.beforeConnect.hasSubscribers) {
        channels.beforeConnect.publish({
            connectParams: {
                host,
                hostname: hostname3,
                protocol,
                port,
                servername: client[kServerName],
                localAddress: client[kLocalAddress]
            },
            connector: client[kConnector]
        });
    }
    try {
        const socket = await new Promise((resolve36, reject2)=>{
            client[kConnector]({
                host,
                hostname: hostname3,
                protocol,
                port,
                servername: client[kServerName],
                localAddress: client[kLocalAddress]
            }, (err, socket2)=>{
                if (err) {
                    reject2(err);
                } else {
                    resolve36(socket2);
                }
            });
        });
        if (client.destroyed) {
            util2.destroy(socket.on("error", ()=>{}), new ClientDestroyedError());
            return;
        }
        client[kConnecting] = false;
        assert4(socket);
        const isH2 = socket.alpnProtocol === "h2";
        if (isH2) {
            if (!h2ExperimentalWarned) {
                h2ExperimentalWarned = true;
                process.emitWarning("H2 support is experimental, expect them to change at any time.", {
                    code: "UNDICI-H2"
                });
            }
            const session = http23.connect(client[kUrl], {
                createConnection: ()=>socket,
                peerMaxConcurrentStreams: client[kHTTP2SessionState].maxConcurrentStreams
            });
            client[kHTTPConnVersion] = "h2";
            session[kClient] = client;
            session[kSocket] = socket;
            session.on("error", onHttp2SessionError);
            session.on("frameError", onHttp2FrameError);
            session.on("end", onHttp2SessionEnd);
            session.on("goaway", onHTTP2GoAway);
            session.on("close", onSocketClose);
            session.unref();
            client[kHTTP2Session] = session;
            socket[kHTTP2Session] = session;
        } else {
            if (!llhttpInstance) {
                llhttpInstance = await llhttpPromise;
                llhttpPromise = null;
            }
            socket[kNoRef] = false;
            socket[kWriting] = false;
            socket[kReset] = false;
            socket[kBlocking] = false;
            socket[kParser] = new Parser5(client, socket, llhttpInstance);
        }
        socket[kCounter] = 0;
        socket[kMaxRequests] = client[kMaxRequests];
        socket[kClient] = client;
        socket[kError] = null;
        socket.on("error", onSocketError).on("readable", onSocketReadable).on("end", onSocketEnd).on("close", onSocketClose);
        client[kSocket] = socket;
        if (channels.connected.hasSubscribers) {
            channels.connected.publish({
                connectParams: {
                    host,
                    hostname: hostname3,
                    protocol,
                    port,
                    servername: client[kServerName],
                    localAddress: client[kLocalAddress]
                },
                connector: client[kConnector],
                socket
            });
        }
        client.emit("connect", client[kUrl], [
            client
        ]);
    } catch (err) {
        if (client.destroyed) {
            return;
        }
        client[kConnecting] = false;
        if (channels.connectError.hasSubscribers) {
            channels.connectError.publish({
                connectParams: {
                    host,
                    hostname: hostname3,
                    protocol,
                    port,
                    servername: client[kServerName],
                    localAddress: client[kLocalAddress]
                },
                connector: client[kConnector],
                error: err
            });
        }
        if (err.code === "ERR_TLS_CERT_ALTNAME_INVALID") {
            assert4(client[kRunning] === 0);
            while(client[kPending] > 0 && client[kQueue][client[kPendingIdx]].servername === client[kServerName]){
                const request3 = client[kQueue][client[kPendingIdx]++];
                errorRequest(client, request3, err);
            }
        } else {
            onError(client, err);
        }
        client.emit("connectionError", client[kUrl], [
            client
        ], err);
    }
    resume(client);
}
function emitDrain(client) {
    client[kNeedDrain] = 0;
    client.emit("drain", client[kUrl], [
        client
    ]);
}
function resume(client, sync) {
    if (client[kResuming] === 2) {
        return;
    }
    client[kResuming] = 2;
    _resume(client, sync);
    client[kResuming] = 0;
    if (client[kRunningIdx] > 256) {
        client[kQueue].splice(0, client[kRunningIdx]);
        client[kPendingIdx] -= client[kRunningIdx];
        client[kRunningIdx] = 0;
    }
}
function _resume(client, sync) {
    while(true){
        if (client.destroyed) {
            assert4(client[kPending] === 0);
            return;
        }
        if (client[kClosedResolve] && !client[kSize]) {
            client[kClosedResolve]();
            client[kClosedResolve] = null;
            return;
        }
        const socket = client[kSocket];
        if (socket && !socket.destroyed && socket.alpnProtocol !== "h2") {
            if (client[kSize] === 0) {
                if (!socket[kNoRef] && socket.unref) {
                    socket.unref();
                    socket[kNoRef] = true;
                }
            } else if (socket[kNoRef] && socket.ref) {
                socket.ref();
                socket[kNoRef] = false;
            }
            if (client[kSize] === 0) {
                if (socket[kParser].timeoutType !== TIMEOUT_IDLE) {
                    socket[kParser].setTimeout(client[kKeepAliveTimeoutValue], TIMEOUT_IDLE);
                }
            } else if (client[kRunning] > 0 && socket[kParser].statusCode < 200) {
                if (socket[kParser].timeoutType !== TIMEOUT_HEADERS) {
                    const request4 = client[kQueue][client[kRunningIdx]];
                    const headersTimeout = request4.headersTimeout != null ? request4.headersTimeout : client[kHeadersTimeout];
                    socket[kParser].setTimeout(headersTimeout, TIMEOUT_HEADERS);
                }
            }
        }
        if (client[kBusy]) {
            client[kNeedDrain] = 2;
        } else if (client[kNeedDrain] === 2) {
            if (sync) {
                client[kNeedDrain] = 1;
                process.nextTick(emitDrain, client);
            } else {
                emitDrain(client);
            }
            continue;
        }
        if (client[kPending] === 0) {
            return;
        }
        if (client[kRunning] >= (client[kPipelining] || 1)) {
            return;
        }
        const request3 = client[kQueue][client[kPendingIdx]];
        if (client[kUrl].protocol === "https:" && client[kServerName] !== request3.servername) {
            if (client[kRunning] > 0) {
                return;
            }
            client[kServerName] = request3.servername;
            if (socket && socket.servername !== request3.servername) {
                util2.destroy(socket, new InformationalError("servername changed"));
                return;
            }
        }
        if (client[kConnecting]) {
            return;
        }
        if (!socket && !client[kHTTP2Session]) {
            connect3(client);
            return;
        }
        if (socket.destroyed || socket[kWriting] || socket[kReset] || socket[kBlocking]) {
            return;
        }
        if (client[kRunning] > 0 && !request3.idempotent) {
            return;
        }
        if (client[kRunning] > 0 && (request3.upgrade || request3.method === "CONNECT")) {
            return;
        }
        if (client[kRunning] > 0 && util2.bodyLength(request3.body) !== 0 && (util2.isStream(request3.body) || util2.isAsyncIterable(request3.body))) {
            return;
        }
        if (!request3.aborted && write2(client, request3)) {
            client[kPendingIdx]++;
        } else {
            client[kQueue].splice(client[kPendingIdx], 1);
        }
    }
}
function shouldSendContentLength(method) {
    return method !== "GET" && method !== "HEAD" && method !== "OPTIONS" && method !== "TRACE" && method !== "CONNECT";
}
function write2(client, request3) {
    if (client[kHTTPConnVersion] === "h2") {
        writeH2(client, client[kHTTP2Session], request3);
        return;
    }
    const { body, method, path: path64, host, upgrade, headers, blocking, reset } = request3;
    const expectsPayload = method === "PUT" || method === "POST" || method === "PATCH";
    if (body && typeof body.read === "function") {
        body.read(0);
    }
    const bodyLength = util2.bodyLength(body);
    let contentLength = bodyLength;
    if (contentLength === null) {
        contentLength = request3.contentLength;
    }
    if (contentLength === 0 && !expectsPayload) {
        contentLength = null;
    }
    if (shouldSendContentLength(method) && contentLength > 0 && request3.contentLength !== null && request3.contentLength !== contentLength) {
        if (client[kStrictContentLength]) {
            errorRequest(client, request3, new RequestContentLengthMismatchError());
            return false;
        }
        process.emitWarning(new RequestContentLengthMismatchError());
    }
    const socket = client[kSocket];
    try {
        request3.onConnect((err)=>{
            if (request3.aborted || request3.completed) {
                return;
            }
            errorRequest(client, request3, err || new RequestAbortedError());
            util2.destroy(socket, new InformationalError("aborted"));
        });
    } catch (err) {
        errorRequest(client, request3, err);
    }
    if (request3.aborted) {
        return false;
    }
    if (method === "HEAD") {
        socket[kReset] = true;
    }
    if (upgrade || method === "CONNECT") {
        socket[kReset] = true;
    }
    if (reset != null) {
        socket[kReset] = reset;
    }
    if (client[kMaxRequests] && socket[kCounter]++ >= client[kMaxRequests]) {
        socket[kReset] = true;
    }
    if (blocking) {
        socket[kBlocking] = true;
    }
    let header = `${method} ${path64} HTTP/1.1\r
`;
    if (typeof host === "string") {
        header += `host: ${host}\r
`;
    } else {
        header += client[kHostHeader];
    }
    if (upgrade) {
        header += `connection: upgrade\r
upgrade: ${upgrade}\r
`;
    } else if (client[kPipelining] && !socket[kReset]) {
        header += "connection: keep-alive\r\n";
    } else {
        header += "connection: close\r\n";
    }
    if (headers) {
        header += headers;
    }
    if (channels.sendHeaders.hasSubscribers) {
        channels.sendHeaders.publish({
            request: request3,
            headers: header,
            socket
        });
    }
    if (!body || bodyLength === 0) {
        if (contentLength === 0) {
            socket.write(`${header}content-length: 0\r
\r
`, "latin1");
        } else {
            assert4(contentLength === null, "no body must not have content length");
            socket.write(`${header}\r
`, "latin1");
        }
        request3.onRequestSent();
    } else if (util2.isBuffer(body)) {
        assert4(contentLength === body.byteLength, "buffer body must have content length");
        socket.cork();
        socket.write(`${header}content-length: ${contentLength}\r
\r
`, "latin1");
        socket.write(body);
        socket.uncork();
        request3.onBodySent(body);
        request3.onRequestSent();
        if (!expectsPayload) {
            socket[kReset] = true;
        }
    } else if (util2.isBlobLike(body)) {
        if (typeof body.stream === "function") {
            writeIterable({
                body: body.stream(),
                client,
                request: request3,
                socket,
                contentLength,
                header,
                expectsPayload
            });
        } else {
            writeBlob({
                body,
                client,
                request: request3,
                socket,
                contentLength,
                header,
                expectsPayload
            });
        }
    } else if (util2.isStream(body)) {
        writeStream({
            body,
            client,
            request: request3,
            socket,
            contentLength,
            header,
            expectsPayload
        });
    } else if (util2.isIterable(body)) {
        writeIterable({
            body,
            client,
            request: request3,
            socket,
            contentLength,
            header,
            expectsPayload
        });
    } else {
        assert4(false);
    }
    return true;
}
function writeH2(client, session, request3) {
    const { body, method, path: path64, host, upgrade, expectContinue, signal, headers: reqHeaders } = request3;
    let headers;
    if (typeof reqHeaders === "string") headers = Request2[kHTTP2CopyHeaders](reqHeaders.trim());
    else headers = reqHeaders;
    if (upgrade) {
        errorRequest(client, request3, new Error("Upgrade not supported for H2"));
        return false;
    }
    try {
        request3.onConnect((err)=>{
            if (request3.aborted || request3.completed) {
                return;
            }
            errorRequest(client, request3, err || new RequestAbortedError());
        });
    } catch (err) {
        errorRequest(client, request3, err);
    }
    if (request3.aborted) {
        return false;
    }
    let stream3;
    const h2State = client[kHTTP2SessionState];
    headers[HTTP2_HEADER_AUTHORITY] = host || client[kHost];
    headers[HTTP2_HEADER_METHOD] = method;
    if (method === "CONNECT") {
        session.ref();
        stream3 = session.request(headers, {
            endStream: false,
            signal
        });
        if (stream3.id && !stream3.pending) {
            request3.onUpgrade(null, null, stream3);
            ++h2State.openStreams;
        } else {
            stream3.once("ready", ()=>{
                request3.onUpgrade(null, null, stream3);
                ++h2State.openStreams;
            });
        }
        stream3.once("close", ()=>{
            h2State.openStreams -= 1;
            if (h2State.openStreams === 0) session.unref();
        });
        return true;
    }
    headers[HTTP2_HEADER_PATH] = path64;
    headers[HTTP2_HEADER_SCHEME] = "https";
    const expectsPayload = method === "PUT" || method === "POST" || method === "PATCH";
    if (body && typeof body.read === "function") {
        body.read(0);
    }
    let contentLength = util2.bodyLength(body);
    if (contentLength == null) {
        contentLength = request3.contentLength;
    }
    if (contentLength === 0 || !expectsPayload) {
        contentLength = null;
    }
    if (shouldSendContentLength(method) && contentLength > 0 && request3.contentLength != null && request3.contentLength !== contentLength) {
        if (client[kStrictContentLength]) {
            errorRequest(client, request3, new RequestContentLengthMismatchError());
            return false;
        }
        process.emitWarning(new RequestContentLengthMismatchError());
    }
    if (contentLength != null) {
        assert4(body, "no body must not have content length");
        headers[HTTP2_HEADER_CONTENT_LENGTH] = `${contentLength}`;
    }
    session.ref();
    const shouldEndStream = method === "GET" || method === "HEAD";
    if (expectContinue) {
        headers[HTTP2_HEADER_EXPECT] = "100-continue";
        stream3 = session.request(headers, {
            endStream: shouldEndStream,
            signal
        });
        stream3.once("continue", writeBodyH2);
    } else {
        stream3 = session.request(headers, {
            endStream: shouldEndStream,
            signal
        });
        writeBodyH2();
    }
    ++h2State.openStreams;
    stream3.once("response", (headers2)=>{
        const { [HTTP2_HEADER_STATUS]: statusCode, ...realHeaders } = headers2;
        if (request3.onHeaders(Number(statusCode), realHeaders, stream3.resume.bind(stream3), "") === false) {
            stream3.pause();
        }
    });
    stream3.once("end", ()=>{
        request3.onComplete([]);
    });
    stream3.on("data", (chunk)=>{
        if (request3.onData(chunk) === false) {
            stream3.pause();
        }
    });
    stream3.once("close", ()=>{
        h2State.openStreams -= 1;
        if (h2State.openStreams === 0) {
            session.unref();
        }
    });
    stream3.once("error", function(err) {
        if (client[kHTTP2Session] && !client[kHTTP2Session].destroyed && !this.closed && !this.destroyed) {
            h2State.streams -= 1;
            util2.destroy(stream3, err);
        }
    });
    stream3.once("frameError", (type2, code)=>{
        const err = new InformationalError(`HTTP/2: "frameError" received - type ${type2}, code ${code}`);
        errorRequest(client, request3, err);
        if (client[kHTTP2Session] && !client[kHTTP2Session].destroyed && !this.closed && !this.destroyed) {
            h2State.streams -= 1;
            util2.destroy(stream3, err);
        }
    });
    return true;
    function writeBodyH2() {
        if (!body) {
            request3.onRequestSent();
        } else if (util2.isBuffer(body)) {
            assert4(contentLength === body.byteLength, "buffer body must have content length");
            stream3.cork();
            stream3.write(body);
            stream3.uncork();
            stream3.end();
            request3.onBodySent(body);
            request3.onRequestSent();
        } else if (util2.isBlobLike(body)) {
            if (typeof body.stream === "function") {
                writeIterable({
                    client,
                    request: request3,
                    contentLength,
                    h2stream: stream3,
                    expectsPayload,
                    body: body.stream(),
                    socket: client[kSocket],
                    header: ""
                });
            } else {
                writeBlob({
                    body,
                    client,
                    request: request3,
                    contentLength,
                    expectsPayload,
                    h2stream: stream3,
                    header: "",
                    socket: client[kSocket]
                });
            }
        } else if (util2.isStream(body)) {
            writeStream({
                body,
                client,
                request: request3,
                contentLength,
                expectsPayload,
                socket: client[kSocket],
                h2stream: stream3,
                header: ""
            });
        } else if (util2.isIterable(body)) {
            writeIterable({
                body,
                client,
                request: request3,
                contentLength,
                expectsPayload,
                header: "",
                h2stream: stream3,
                socket: client[kSocket]
            });
        } else {
            assert4(false);
        }
    }
}
function writeStream({ h2stream, body, client, request: request3, socket, contentLength, header, expectsPayload }) {
    assert4(contentLength !== 0 || client[kRunning] === 0, "stream body cannot be pipelined");
    if (client[kHTTPConnVersion] === "h2") {
        let onPipeData = function(chunk) {
            request3.onBodySent(chunk);
        };
        const pipe3 = pipeline2(body, h2stream, (err)=>{
            if (err) {
                util2.destroy(body, err);
                util2.destroy(h2stream, err);
            } else {
                request3.onRequestSent();
            }
        });
        pipe3.on("data", onPipeData);
        pipe3.once("end", ()=>{
            pipe3.removeListener("data", onPipeData);
            util2.destroy(pipe3);
        });
        return;
    }
    let finished2 = false;
    const writer = new AsyncWriter({
        socket,
        request: request3,
        contentLength,
        client,
        expectsPayload,
        header
    });
    const onData = function(chunk) {
        if (finished2) {
            return;
        }
        try {
            if (!writer.write(chunk) && this.pause) {
                this.pause();
            }
        } catch (err) {
            util2.destroy(this, err);
        }
    };
    const onDrain = function() {
        if (finished2) {
            return;
        }
        if (body.resume) {
            body.resume();
        }
    };
    const onAbort = function() {
        if (finished2) {
            return;
        }
        const err = new RequestAbortedError();
        queueMicrotask(()=>onFinished(err));
    };
    const onFinished = function(err) {
        if (finished2) {
            return;
        }
        finished2 = true;
        assert4(socket.destroyed || socket[kWriting] && client[kRunning] <= 1);
        socket.off("drain", onDrain).off("error", onFinished);
        body.removeListener("data", onData).removeListener("end", onFinished).removeListener("error", onFinished).removeListener("close", onAbort);
        if (!err) {
            try {
                writer.end();
            } catch (er2) {
                err = er2;
            }
        }
        writer.destroy(err);
        if (err && (err.code !== "UND_ERR_INFO" || err.message !== "reset")) {
            util2.destroy(body, err);
        } else {
            util2.destroy(body);
        }
    };
    body.on("data", onData).on("end", onFinished).on("error", onFinished).on("close", onAbort);
    if (body.resume) {
        body.resume();
    }
    socket.on("drain", onDrain).on("error", onFinished);
}
async function writeBlob({ h2stream, body, client, request: request3, socket, contentLength, header, expectsPayload }) {
    assert4(contentLength === body.size, "blob body must have content length");
    const isH2 = client[kHTTPConnVersion] === "h2";
    try {
        if (contentLength != null && contentLength !== body.size) {
            throw new RequestContentLengthMismatchError();
        }
        const buffer = Buffer.from(await body.arrayBuffer());
        if (isH2) {
            h2stream.cork();
            h2stream.write(buffer);
            h2stream.uncork();
        } else {
            socket.cork();
            socket.write(`${header}content-length: ${contentLength}\r
\r
`, "latin1");
            socket.write(buffer);
            socket.uncork();
        }
        request3.onBodySent(buffer);
        request3.onRequestSent();
        if (!expectsPayload) {
            socket[kReset] = true;
        }
        resume(client);
    } catch (err) {
        util2.destroy(isH2 ? h2stream : socket, err);
    }
}
async function writeIterable({ h2stream, body, client, request: request3, socket, contentLength, header, expectsPayload }) {
    assert4(contentLength !== 0 || client[kRunning] === 0, "iterator body cannot be pipelined");
    let callback = null;
    function onDrain() {
        if (callback) {
            const cb = callback;
            callback = null;
            cb();
        }
    }
    const waitForDrain = ()=>new Promise((resolve36, reject2)=>{
            assert4(callback === null);
            if (socket[kError]) {
                reject2(socket[kError]);
            } else {
                callback = resolve36;
            }
        });
    if (client[kHTTPConnVersion] === "h2") {
        h2stream.on("close", onDrain).on("drain", onDrain);
        try {
            for await (const chunk of body){
                if (socket[kError]) {
                    throw socket[kError];
                }
                const res = h2stream.write(chunk);
                request3.onBodySent(chunk);
                if (!res) {
                    await waitForDrain();
                }
            }
        } catch (err) {
            h2stream.destroy(err);
        } finally{
            request3.onRequestSent();
            h2stream.end();
            h2stream.off("close", onDrain).off("drain", onDrain);
        }
        return;
    }
    socket.on("close", onDrain).on("drain", onDrain);
    const writer = new AsyncWriter({
        socket,
        request: request3,
        contentLength,
        client,
        expectsPayload,
        header
    });
    try {
        for await (const chunk of body){
            if (socket[kError]) {
                throw socket[kError];
            }
            if (!writer.write(chunk)) {
                await waitForDrain();
            }
        }
        writer.end();
    } catch (err) {
        writer.destroy(err);
    } finally{
        socket.off("close", onDrain).off("drain", onDrain);
    }
}
var AsyncWriter = class {
    constructor({ socket, request: request3, contentLength, client, expectsPayload, header }){
        this.socket = socket;
        this.request = request3;
        this.contentLength = contentLength;
        this.client = client;
        this.bytesWritten = 0;
        this.expectsPayload = expectsPayload;
        this.header = header;
        socket[kWriting] = true;
    }
    write(chunk) {
        const { socket, request: request3, contentLength, client, bytesWritten, expectsPayload, header } = this;
        if (socket[kError]) {
            throw socket[kError];
        }
        if (socket.destroyed) {
            return false;
        }
        const len = Buffer.byteLength(chunk);
        if (!len) {
            return true;
        }
        if (contentLength !== null && bytesWritten + len > contentLength) {
            if (client[kStrictContentLength]) {
                throw new RequestContentLengthMismatchError();
            }
            process.emitWarning(new RequestContentLengthMismatchError());
        }
        socket.cork();
        if (bytesWritten === 0) {
            if (!expectsPayload) {
                socket[kReset] = true;
            }
            if (contentLength === null) {
                socket.write(`${header}transfer-encoding: chunked\r
`, "latin1");
            } else {
                socket.write(`${header}content-length: ${contentLength}\r
\r
`, "latin1");
            }
        }
        if (contentLength === null) {
            socket.write(`\r
${len.toString(16)}\r
`, "latin1");
        }
        this.bytesWritten += len;
        const ret = socket.write(chunk);
        socket.uncork();
        request3.onBodySent(chunk);
        if (!ret) {
            if (socket[kParser].timeout && socket[kParser].timeoutType === TIMEOUT_HEADERS) {
                if (socket[kParser].timeout.refresh) {
                    socket[kParser].timeout.refresh();
                }
            }
        }
        return ret;
    }
    end() {
        const { socket, contentLength, client, bytesWritten, expectsPayload, header, request: request3 } = this;
        request3.onRequestSent();
        socket[kWriting] = false;
        if (socket[kError]) {
            throw socket[kError];
        }
        if (socket.destroyed) {
            return;
        }
        if (bytesWritten === 0) {
            if (expectsPayload) {
                socket.write(`${header}content-length: 0\r
\r
`, "latin1");
            } else {
                socket.write(`${header}\r
`, "latin1");
            }
        } else if (contentLength === null) {
            socket.write("\r\n0\r\n\r\n", "latin1");
        }
        if (contentLength !== null && bytesWritten !== contentLength) {
            if (client[kStrictContentLength]) {
                throw new RequestContentLengthMismatchError();
            } else {
                process.emitWarning(new RequestContentLengthMismatchError());
            }
        }
        if (socket[kParser].timeout && socket[kParser].timeoutType === TIMEOUT_HEADERS) {
            if (socket[kParser].timeout.refresh) {
                socket[kParser].timeout.refresh();
            }
        }
        resume(client);
    }
    destroy(err) {
        const { socket, client } = this;
        socket[kWriting] = false;
        if (err) {
            assert4(client[kRunning] <= 1, "pipeline should only contain this request");
            util2.destroy(socket, err);
        }
    }
};
function errorRequest(client, request3, err) {
    try {
        request3.onError(err);
        assert4(request3.aborted);
    } catch (err2) {
        client.emit("error", err2);
    }
}
module2.exports = Client2;

return module2.exports;
}
