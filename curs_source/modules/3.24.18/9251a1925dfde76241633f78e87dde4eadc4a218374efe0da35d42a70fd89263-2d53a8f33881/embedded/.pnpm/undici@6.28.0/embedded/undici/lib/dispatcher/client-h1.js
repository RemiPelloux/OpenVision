import { require_diagnostics } from "../core/diagnostics.js";
import { require_errors2 } from "../core/errors.js";
import { require_symbols6 } from "../core/symbols.js";
import { require_util8 } from "../core/util.js";
import { require_constants10 } from "../llhttp/constants.js";
import { require_llhttp_wasm2 } from "../llhttp/llhttp-wasm.js";
import { require_llhttp_simd_wasm2 } from "../llhttp/llhttp_simd-wasm.js";
import { require_timers2 } from "../util/timers.js";
import { require_body2 } from "../web/fetch/body.js";
var __wakaru_require_client_h1_cache;
export function require_client_h1() {
if (__wakaru_require_client_h1_cache) return __wakaru_require_client_h1_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_client_h1_cache = module2;
"use strict";
var assert4 = require("node:assert");
var util2 = require_util8();
var { channels } = require_diagnostics();
var timers = require_timers2();
var { RequestContentLengthMismatchError, ResponseContentLengthMismatchError, RequestAbortedError, InvalidArgumentError: InvalidArgumentError3, HeadersTimeoutError, HeadersOverflowError, SocketError, InformationalError, BodyTimeoutError, HTTPParserError, ResponseExceededMaxSizeError } = require_errors2();
var { kUrl, kReset, kClient, kParser, kBlocking, kRunning, kPending, kSize, kWriting, kQueue, kNoRef, kKeepAliveDefaultTimeout, kHostHeader, kPendingIdx, kRunningIdx, kError, kPipelining, kSocket, kKeepAliveTimeoutValue, kMaxHeadersSize, kKeepAliveMaxTimeout, kKeepAliveTimeoutThreshold, kHeadersTimeout, kBodyTimeout, kStrictContentLength, kMaxRequests, kCounter, kMaxResponseSize, kOnError, kResume, kHTTPContext } = require_symbols6();
var constants14 = require_constants10();
var EMPTY_BUF = Buffer.alloc(0);
var FastBuffer = Buffer[Symbol.species];
var addListener = util2.addListener;
var removeAllListeners = util2.removeAllListeners;
var kIdleSocketValidation = Symbol("kIdleSocketValidation");
var kIdleSocketValidationTimeout = Symbol("kIdleSocketValidationTimeout");
var kSocketUsed = Symbol("kSocketUsed");
var extractBody;
async function lazyllhttp() {
    const llhttpWasmData = process.env.JEST_WORKER_ID ? require_llhttp_wasm2() : void 0;
    let mod2;
    try {
        mod2 = await WebAssembly.compile(require_llhttp_simd_wasm2());
    } catch (e) {
        mod2 = await WebAssembly.compile(llhttpWasmData || require_llhttp_wasm2());
    }
    return await WebAssembly.instantiate(mod2, {
        env: {
            wasm_on_url: (p2, at2, len)=>{
                return 0;
            },
            wasm_on_status: (p2, at2, len)=>{
                assert4(currentParser.ptr === p2);
                const start = at2 - currentBufferPtr + currentBufferRef.byteOffset;
                return currentParser.onStatus(new FastBuffer(currentBufferRef.buffer, start, len)) || 0;
            },
            wasm_on_message_begin: (p2)=>{
                assert4(currentParser.ptr === p2);
                return currentParser.onMessageBegin() || 0;
            },
            wasm_on_header_field: (p2, at2, len)=>{
                assert4(currentParser.ptr === p2);
                const start = at2 - currentBufferPtr + currentBufferRef.byteOffset;
                return currentParser.onHeaderField(new FastBuffer(currentBufferRef.buffer, start, len)) || 0;
            },
            wasm_on_header_value: (p2, at2, len)=>{
                assert4(currentParser.ptr === p2);
                const start = at2 - currentBufferPtr + currentBufferRef.byteOffset;
                return currentParser.onHeaderValue(new FastBuffer(currentBufferRef.buffer, start, len)) || 0;
            },
            wasm_on_headers_complete: (p2, statusCode, upgrade, shouldKeepAlive)=>{
                assert4(currentParser.ptr === p2);
                return currentParser.onHeadersComplete(statusCode, Boolean(upgrade), Boolean(shouldKeepAlive)) || 0;
            },
            wasm_on_body: (p2, at2, len)=>{
                assert4(currentParser.ptr === p2);
                const start = at2 - currentBufferPtr + currentBufferRef.byteOffset;
                return currentParser.onBody(new FastBuffer(currentBufferRef.buffer, start, len)) || 0;
            },
            wasm_on_message_complete: (p2)=>{
                assert4(currentParser.ptr === p2);
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
var USE_NATIVE_TIMER = 0;
var USE_FAST_TIMER = 1;
var TIMEOUT_HEADERS = 2 | USE_FAST_TIMER;
var TIMEOUT_BODY = 4 | USE_FAST_TIMER;
var TIMEOUT_KEEP_ALIVE = 8 | USE_NATIVE_TIMER;
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
    setTimeout(delay3, type2) {
        if (delay3 !== this.timeoutValue || type2 & USE_FAST_TIMER ^ this.timeoutType & USE_FAST_TIMER) {
            if (this.timeout) {
                timers.clearTimeout(this.timeout);
                this.timeout = null;
            }
            if (delay3) {
                if (type2 & USE_FAST_TIMER) {
                    this.timeout = timers.setFastTimeout(onParserTimeout, delay3, new WeakRef(this));
                } else {
                    this.timeout = setTimeout(onParserTimeout, delay3, new WeakRef(this));
                    this.timeout.unref();
                }
            }
            this.timeoutValue = delay3;
        } else if (this.timeout) {
            if (this.timeout.refresh) {
                this.timeout.refresh();
            }
        }
        this.timeoutType = type2;
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
            if (ret !== constants14.ERROR.OK) {
                const body = data.subarray(offset);
                if (ret === constants14.ERROR.PAUSED_UPGRADE) {
                    this.onUpgrade(body);
                } else if (ret === constants14.ERROR.PAUSED) {
                    this.paused = true;
                    socket.unshift(body);
                } else {
                    throw this.createError(ret, body);
                }
            }
        } catch (err) {
            util2.destroy(socket, err);
        }
    }
    finish() {
        assert4(currentParser === null);
        assert4(this.ptr != null);
        assert4(!this.paused);
        const { llhttp } = this;
        let ret;
        try {
            currentParser = this;
            ret = llhttp.llhttp_finish(this.ptr);
        } finally{
            currentParser = null;
        }
        if (ret === constants14.ERROR.OK) {
            return null;
        }
        if (ret === constants14.ERROR.PAUSED || ret === constants14.ERROR.PAUSED_UPGRADE) {
            this.paused = true;
            return null;
        }
        return this.createError(ret, EMPTY_BUF);
    }
    createError(ret, data) {
        const { llhttp, contentLength, bytesRead } = this;
        if (contentLength && bytesRead !== parseInt(contentLength, 10)) {
            return new ResponseContentLengthMismatchError();
        }
        const ptr = llhttp.llhttp_get_error_reason(this.ptr);
        let message = "";
        if (ptr) {
            const len = new Uint8Array(llhttp.memory.buffer, ptr).indexOf(0);
            message = "Response does not match the HTTP/1.1 protocol (" + Buffer.from(llhttp.memory.buffer, ptr, len).toString() + ")";
        }
        return new HTTPParserError(message, constants14.ERROR[ret], data);
    }
    destroy() {
        assert4(this.ptr != null);
        assert4(currentParser == null);
        this.llhttp.llhttp_free(this.ptr);
        this.ptr = null;
        this.timeout && timers.clearTimeout(this.timeout);
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
        if (client[kRunning] === 0) {
            util2.destroy(socket, new SocketError("bad response", util2.getSocketInfo(socket)));
            return -1;
        }
        const request3 = client[kQueue][client[kRunningIdx]];
        if (!request3) {
            return -1;
        }
        request3.onResponseStarted();
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
        if (key.length === 10) {
            const headerName = util2.bufferToLowerCasedHeaderName(key);
            if (headerName === "keep-alive") {
                this.keepAlive += buf.toString();
            } else if (headerName === "connection") {
                this.connection += buf.toString();
            }
        } else if (key.length === 14 && util2.bufferToLowerCasedHeaderName(key) === "content-length") {
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
        assert4(client[kSocket] === socket);
        assert4(!socket.destroyed);
        assert4(!this.paused);
        assert4((headers.length & 1) === 0);
        const request3 = client[kQueue][client[kRunningIdx]];
        assert4(request3);
        assert4(request3.upgrade || request3.method === "CONNECT");
        this.statusCode = null;
        this.statusText = "";
        this.shouldKeepAlive = null;
        this.headers = [];
        this.headersSize = 0;
        socket.unshift(head);
        socket[kParser].destroy();
        socket[kParser] = null;
        socket[kClient] = null;
        socket[kError] = null;
        removeAllListeners(socket);
        client[kSocket] = null;
        client[kHTTPContext] = null;
        client[kQueue][client[kRunningIdx]++] = null;
        client.emit("disconnect", client[kUrl], [
            client
        ], new InformationalError("upgrade"));
        try {
            request3.onUpgrade(statusCode, headers, socket);
        } catch (err) {
            util2.destroy(socket, err);
        }
        client[kResume]();
    }
    onHeadersComplete(statusCode, upgrade, shouldKeepAlive) {
        const { client, socket, headers, statusText } = this;
        if (socket.destroyed) {
            return -1;
        }
        if (client[kRunning] === 0) {
            util2.destroy(socket, new SocketError("bad response", util2.getSocketInfo(socket)));
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
        assert4(this.timeoutType === TIMEOUT_HEADERS);
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
        assert4((this.headers.length & 1) === 0);
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
            client[kResume]();
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
        assert4(this.timeoutType === TIMEOUT_BODY);
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
        assert4(statusCode >= 100);
        assert4((this.headers.length & 1) === 0);
        const request3 = client[kQueue][client[kRunningIdx]];
        assert4(request3);
        this.statusCode = null;
        this.statusText = "";
        this.bytesRead = 0;
        this.contentLength = "";
        this.keepAlive = "";
        this.connection = "";
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
        socket[kSocketUsed] = true;
        if (socket[kWriting]) {
            assert4(client[kRunning] === 0);
            util2.destroy(socket, new InformationalError("reset"));
            return constants14.ERROR.PAUSED;
        } else if (!shouldKeepAlive) {
            util2.destroy(socket, new InformationalError("reset"));
            return constants14.ERROR.PAUSED;
        } else if (socket[kReset] && client[kRunning] === 0) {
            util2.destroy(socket, new InformationalError("reset"));
            return constants14.ERROR.PAUSED;
        } else if (client[kPipelining] == null || client[kPipelining] === 1) {
            setImmediate(()=>client[kResume]());
        } else {
            client[kResume]();
        }
    }
};
function onParserTimeout(parser) {
    const { socket, timeoutType, client, paused } = parser.deref();
    if (timeoutType === TIMEOUT_HEADERS) {
        if (!socket[kWriting] || socket.writableNeedDrain || client[kRunning] > 1) {
            assert4(!paused, "cannot be paused while waiting for headers");
            util2.destroy(socket, new HeadersTimeoutError());
        }
    } else if (timeoutType === TIMEOUT_BODY) {
        if (!paused) {
            util2.destroy(socket, new BodyTimeoutError());
        }
    } else if (timeoutType === TIMEOUT_KEEP_ALIVE) {
        assert4(client[kRunning] === 0 && client[kKeepAliveTimeoutValue]);
        util2.destroy(socket, new InformationalError("socket idle timeout"));
    }
}
async function connectH1(client, socket) {
    client[kSocket] = socket;
    if (!llhttpInstance) {
        llhttpInstance = await llhttpPromise;
        llhttpPromise = null;
    }
    socket[kNoRef] = false;
    socket[kWriting] = false;
    socket[kReset] = false;
    socket[kBlocking] = false;
    socket[kIdleSocketValidation] = 0;
    socket[kIdleSocketValidationTimeout] = null;
    socket[kSocketUsed] = false;
    socket[kParser] = new Parser5(client, socket, llhttpInstance);
    addListener(socket, "error", function(err) {
        assert4(err.code !== "ERR_TLS_CERT_ALTNAME_INVALID");
        const parser = this[kParser];
        if (err.code === "ECONNRESET" && parser.statusCode && !parser.shouldKeepAlive) {
            const parserErr = parser.finish();
            if (parserErr) {
                this[kError] = parserErr;
                this[kClient][kOnError](parserErr);
            }
            return;
        }
        this[kError] = err;
        this[kClient][kOnError](err);
    });
    addListener(socket, "readable", function() {
        const parser = this[kParser];
        if (parser) {
            parser.readMore();
        }
    });
    addListener(socket, "end", function() {
        const parser = this[kParser];
        if (parser.statusCode && !parser.shouldKeepAlive) {
            const parserErr = parser.finish();
            if (parserErr) {
                util2.destroy(this, parserErr);
            }
            return;
        }
        util2.destroy(this, new SocketError("other side closed", util2.getSocketInfo(this)));
    });
    addListener(socket, "close", function() {
        const client2 = this[kClient];
        const parser = this[kParser];
        clearIdleSocketValidation(this);
        if (parser) {
            if (!this[kError] && parser.statusCode && !parser.shouldKeepAlive) {
                this[kError] = parser.finish() || this[kError];
            }
            this[kParser].destroy();
            this[kParser] = null;
        }
        const err = this[kError] || new SocketError("closed", util2.getSocketInfo(this));
        client2[kSocket] = null;
        client2[kHTTPContext] = null;
        if (client2.destroyed) {
            assert4(client2[kPending] === 0);
            const requests = client2[kQueue].splice(client2[kRunningIdx]);
            for(let i = 0; i < requests.length; i++){
                const request3 = requests[i];
                util2.errorRequest(client2, request3, err);
            }
        } else if (client2[kRunning] > 0 && err.code !== "UND_ERR_INFO") {
            const request3 = client2[kQueue][client2[kRunningIdx]];
            client2[kQueue][client2[kRunningIdx]++] = null;
            util2.errorRequest(client2, request3, err);
        }
        client2[kPendingIdx] = client2[kRunningIdx];
        assert4(client2[kRunning] === 0);
        client2.emit("disconnect", client2[kUrl], [
            client2
        ], err);
        client2[kResume]();
    });
    let closed2 = false;
    socket.on("close", ()=>{
        closed2 = true;
    });
    return {
        version: "h1",
        defaultPipelining: 1,
        write (...args) {
            return writeH1(client, ...args);
        },
        resume () {
            resumeH1(client);
        },
        destroy (err, callback) {
            if (closed2) {
                queueMicrotask(callback);
            } else {
                socket.destroy(err).on("close", callback);
            }
        },
        get destroyed () {
            return socket.destroyed;
        },
        busy (request3) {
            if (socket[kWriting] || socket[kReset] || socket[kBlocking] || socket[kIdleSocketValidation] === 1) {
                return true;
            }
            if (request3) {
                if (client[kRunning] > 0 && !request3.idempotent) {
                    return true;
                }
                if (client[kRunning] > 0 && (request3.upgrade || request3.method === "CONNECT")) {
                    return true;
                }
                if (client[kRunning] > 0 && util2.bodyLength(request3.body) !== 0 && (util2.isStream(request3.body) || util2.isAsyncIterable(request3.body) || util2.isFormDataLike(request3.body))) {
                    return true;
                }
            }
            return false;
        }
    };
}
function clearIdleSocketValidation(socket) {
    if (socket[kIdleSocketValidationTimeout]) {
        clearTimeout(socket[kIdleSocketValidationTimeout]);
        socket[kIdleSocketValidationTimeout] = null;
    }
    socket[kIdleSocketValidation] = 0;
}
function scheduleIdleSocketValidation(client, socket) {
    socket[kIdleSocketValidation] = 1;
    socket[kIdleSocketValidationTimeout] = setTimeout(()=>{
        socket[kIdleSocketValidationTimeout] = null;
        socket[kIdleSocketValidation] = 2;
        if (client[kSocket] === socket && !socket.destroyed) {
            client[kResume]();
        }
    }, 0);
    socket[kIdleSocketValidationTimeout].unref?.();
}
function resumeH1(client) {
    const socket = client[kSocket];
    if (socket && !socket.destroyed) {
        if (client[kSize] === 0) {
            if (!socket[kNoRef] && socket.unref) {
                socket.unref();
                socket[kNoRef] = true;
            }
        } else if (socket[kNoRef] && socket.ref) {
            socket.ref();
            socket[kNoRef] = false;
        }
        if (client[kRunning] === 0 && client[kPending] > 0 && socket[kSocketUsed]) {
            if (socket[kIdleSocketValidation] === 0) {
                scheduleIdleSocketValidation(client, socket);
                socket[kParser].readMore();
                if (socket.destroyed) {
                    return;
                }
                return;
            }
            if (socket[kIdleSocketValidation] === 1) {
                socket[kParser].readMore();
                if (socket.destroyed) {
                    return;
                }
                return;
            }
        }
        if (client[kRunning] === 0) {
            socket[kParser].readMore();
            if (socket.destroyed) {
                return;
            }
        }
        if (client[kSize] === 0) {
            if (socket[kParser].timeoutType !== TIMEOUT_KEEP_ALIVE) {
                socket[kParser].setTimeout(client[kKeepAliveTimeoutValue], TIMEOUT_KEEP_ALIVE);
            }
        } else if (client[kRunning] > 0 && socket[kParser].statusCode < 200) {
            if (socket[kParser].timeoutType !== TIMEOUT_HEADERS) {
                const request3 = client[kQueue][client[kRunningIdx]];
                const headersTimeout = request3.headersTimeout != null ? request3.headersTimeout : client[kHeadersTimeout];
                socket[kParser].setTimeout(headersTimeout, TIMEOUT_HEADERS);
            }
        }
    }
}
function shouldSendContentLength(method) {
    return method !== "GET" && method !== "HEAD" && method !== "OPTIONS" && method !== "TRACE" && method !== "CONNECT";
}
function writeH1(client, request3) {
    const { method, path: path64, host, upgrade, blocking, reset } = request3;
    let { body, headers, contentLength } = request3;
    const expectsPayload = method === "PUT" || method === "POST" || method === "PATCH" || method === "QUERY" || method === "PROPFIND" || method === "PROPPATCH";
    if (util2.isFormDataLike(body)) {
        if (!extractBody) {
            extractBody = require_body2().extractBody;
        }
        const [bodyStream, contentType] = extractBody(body);
        if (request3.contentType == null) {
            headers.push("content-type", contentType);
        }
        body = bodyStream.stream;
        contentLength = bodyStream.length;
    } else if (util2.isBlobLike(body) && request3.contentType == null) {
        const contentType = body.type;
        if (contentType) {
            const contentTypeValue = `${contentType}`;
            if (!util2.isValidHeaderValue(contentTypeValue)) {
                util2.errorRequest(client, request3, new InvalidArgumentError3("invalid content-type header"));
                return false;
            }
            headers.push("content-type", contentTypeValue);
        }
    }
    if (body && typeof body.read === "function") {
        body.read(0);
    }
    const bodyLength = util2.bodyLength(body);
    contentLength = bodyLength ?? contentLength;
    if (contentLength === null) {
        contentLength = request3.contentLength;
    }
    if (contentLength === 0 && !expectsPayload) {
        contentLength = null;
    }
    if (shouldSendContentLength(method) && contentLength > 0 && request3.contentLength !== null && request3.contentLength !== contentLength) {
        if (client[kStrictContentLength]) {
            util2.errorRequest(client, request3, new RequestContentLengthMismatchError());
            return false;
        }
        process.emitWarning(new RequestContentLengthMismatchError());
    }
    const socket = client[kSocket];
    clearIdleSocketValidation(socket);
    const abort = (err)=>{
        if (request3.aborted || request3.completed) {
            return;
        }
        util2.errorRequest(client, request3, err || new RequestAbortedError());
        util2.destroy(body);
        util2.destroy(socket, new InformationalError("aborted"));
    };
    try {
        request3.onConnect(abort);
    } catch (err) {
        util2.errorRequest(client, request3, err);
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
    if (Array.isArray(headers)) {
        for(let n = 0; n < headers.length; n += 2){
            const key = headers[n + 0];
            const val = headers[n + 1];
            if (Array.isArray(val)) {
                for(let i = 0; i < val.length; i++){
                    header += `${key}: ${val[i]}\r
`;
                }
            } else {
                header += `${key}: ${val}\r
`;
            }
        }
    }
    if (channels.sendHeaders.hasSubscribers) {
        channels.sendHeaders.publish({
            request: request3,
            headers: header,
            socket
        });
    }
    if (!body || bodyLength === 0) {
        writeBuffer(abort, null, client, request3, socket, contentLength, header, expectsPayload);
    } else if (util2.isBuffer(body)) {
        writeBuffer(abort, body, client, request3, socket, contentLength, header, expectsPayload);
    } else if (util2.isBlobLike(body)) {
        if (typeof body.stream === "function") {
            writeIterable(abort, body.stream(), client, request3, socket, contentLength, header, expectsPayload);
        } else {
            writeBlob(abort, body, client, request3, socket, contentLength, header, expectsPayload);
        }
    } else if (util2.isStream(body)) {
        writeStream(abort, body, client, request3, socket, contentLength, header, expectsPayload);
    } else if (util2.isIterable(body)) {
        writeIterable(abort, body, client, request3, socket, contentLength, header, expectsPayload);
    } else {
        assert4(false);
    }
    return true;
}
function writeStream(abort, body, client, request3, socket, contentLength, header, expectsPayload) {
    assert4(contentLength !== 0 || client[kRunning] === 0, "stream body cannot be pipelined");
    let finished2 = false;
    const writer = new AsyncWriter({
        abort,
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
    const onClose = function() {
        queueMicrotask(()=>{
            body.removeListener("error", onFinished);
        });
        if (!finished2) {
            const err = new RequestAbortedError();
            queueMicrotask(()=>onFinished(err));
        }
    };
    const onFinished = function(err) {
        if (finished2) {
            return;
        }
        finished2 = true;
        assert4(socket.destroyed || socket[kWriting] && client[kRunning] <= 1);
        socket.off("drain", onDrain).off("error", onFinished);
        body.removeListener("data", onData).removeListener("end", onFinished).removeListener("close", onClose);
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
    body.on("data", onData).on("end", onFinished).on("error", onFinished).on("close", onClose);
    if (body.resume) {
        body.resume();
    }
    socket.on("drain", onDrain).on("error", onFinished);
    if (body.errorEmitted ?? body.errored) {
        setImmediate(()=>onFinished(body.errored));
    } else if (body.endEmitted ?? body.readableEnded) {
        setImmediate(()=>onFinished(null));
    }
    if (body.closeEmitted ?? body.closed) {
        setImmediate(onClose);
    }
}
function writeBuffer(abort, body, client, request3, socket, contentLength, header, expectsPayload) {
    try {
        if (!body) {
            if (contentLength === 0) {
                socket.write(`${header}content-length: 0\r
\r
`, "latin1");
            } else {
                assert4(contentLength === null, "no body must not have content length");
                socket.write(`${header}\r
`, "latin1");
            }
        } else if (util2.isBuffer(body)) {
            assert4(contentLength === body.byteLength, "buffer body must have content length");
            socket.cork();
            socket.write(`${header}content-length: ${contentLength}\r
\r
`, "latin1");
            socket.write(body);
            socket.uncork();
            request3.onBodySent(body);
            if (!expectsPayload && request3.reset !== false) {
                socket[kReset] = true;
            }
        }
        request3.onRequestSent();
        client[kResume]();
    } catch (err) {
        abort(err);
    }
}
async function writeBlob(abort, body, client, request3, socket, contentLength, header, expectsPayload) {
    assert4(contentLength === body.size, "blob body must have content length");
    try {
        if (contentLength != null && contentLength !== body.size) {
            throw new RequestContentLengthMismatchError();
        }
        const buffer = Buffer.from(await body.arrayBuffer());
        socket.cork();
        socket.write(`${header}content-length: ${contentLength}\r
\r
`, "latin1");
        socket.write(buffer);
        socket.uncork();
        request3.onBodySent(buffer);
        request3.onRequestSent();
        if (!expectsPayload && request3.reset !== false) {
            socket[kReset] = true;
        }
        client[kResume]();
    } catch (err) {
        abort(err);
    }
}
async function writeIterable(abort, body, client, request3, socket, contentLength, header, expectsPayload) {
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
    socket.on("close", onDrain).on("drain", onDrain);
    const writer = new AsyncWriter({
        abort,
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
    constructor({ abort, socket, request: request3, contentLength, client, expectsPayload, header }){
        this.socket = socket;
        this.request = request3;
        this.contentLength = contentLength;
        this.client = client;
        this.bytesWritten = 0;
        this.expectsPayload = expectsPayload;
        this.header = header;
        this.abort = abort;
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
            if (!expectsPayload && request3.reset !== false) {
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
        client[kResume]();
    }
    destroy(err) {
        const { socket, client, abort } = this;
        socket[kWriting] = false;
        if (err) {
            assert4(client[kRunning] <= 1, "pipeline should only contain this request");
            abort(err);
        }
    }
};
module2.exports = connectH1;

return module2.exports;
}
