import { require_errors2 } from "../core/errors.js";
import { require_symbols6 } from "../core/symbols.js";
import { require_util8 } from "../core/util.js";
import { require_body2 } from "../web/fetch/body.js";
var __wakaru_require_client_h2_cache;
export function require_client_h2() {
if (__wakaru_require_client_h2_cache) return __wakaru_require_client_h2_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_client_h2_cache = module2;
"use strict";
var assert4 = require("node:assert");
var { pipeline: pipeline2 } = require("node:stream");
var util2 = require_util8();
var { RequestContentLengthMismatchError, RequestAbortedError, SocketError, InformationalError } = require_errors2();
var { kUrl, kReset, kClient, kRunning, kPending, kQueue, kPendingIdx, kRunningIdx, kError, kSocket, kStrictContentLength, kOnError, kMaxConcurrentStreams, kHTTP2Session, kResume, kSize, kHTTPContext } = require_symbols6();
var kOpenStreams = Symbol("open streams");
var extractBody;
var h2ExperimentalWarned = false;
var http23;
try {
    http23 = require("node:http2");
} catch  {
    http23 = {
        constants: {}
    };
}
var { constants: { HTTP2_HEADER_AUTHORITY, HTTP2_HEADER_METHOD, HTTP2_HEADER_PATH, HTTP2_HEADER_SCHEME, HTTP2_HEADER_CONTENT_LENGTH, HTTP2_HEADER_EXPECT, HTTP2_HEADER_STATUS } } = http23;
function parseH2Headers(headers) {
    const result = [];
    for (const [name17, value] of Object.entries(headers)){
        if (Array.isArray(value)) {
            for (const subvalue of value){
                result.push(Buffer.from(name17), Buffer.from(subvalue));
            }
        } else {
            result.push(Buffer.from(name17), Buffer.from(value));
        }
    }
    return result;
}
async function connectH2(client, socket) {
    client[kSocket] = socket;
    if (!h2ExperimentalWarned) {
        h2ExperimentalWarned = true;
        process.emitWarning("H2 support is experimental, expect them to change at any time.", {
            code: "UNDICI-H2"
        });
    }
    const session = http23.connect(client[kUrl], {
        createConnection: ()=>socket,
        peerMaxConcurrentStreams: client[kMaxConcurrentStreams]
    });
    session[kOpenStreams] = 0;
    session[kClient] = client;
    session[kSocket] = socket;
    util2.addListener(session, "error", onHttp2SessionError);
    util2.addListener(session, "frameError", onHttp2FrameError);
    util2.addListener(session, "end", onHttp2SessionEnd);
    util2.addListener(session, "goaway", onHTTP2GoAway);
    util2.addListener(session, "close", function() {
        const { [kClient]: client2 } = this;
        const { [kSocket]: socket2 } = client2;
        const err = this[kSocket][kError] || this[kError] || new SocketError("closed", util2.getSocketInfo(socket2));
        client2[kHTTP2Session] = null;
        if (client2.destroyed) {
            assert4(client2[kPending] === 0);
            const requests = client2[kQueue].splice(client2[kRunningIdx]);
            for(let i = 0; i < requests.length; i++){
                const request3 = requests[i];
                util2.errorRequest(client2, request3, err);
            }
        }
    });
    session.unref();
    client[kHTTP2Session] = session;
    socket[kHTTP2Session] = session;
    util2.addListener(socket, "error", function(err) {
        assert4(err.code !== "ERR_TLS_CERT_ALTNAME_INVALID");
        this[kError] = err;
        this[kClient][kOnError](err);
    });
    util2.addListener(socket, "end", function() {
        util2.destroy(this, new SocketError("other side closed", util2.getSocketInfo(this)));
    });
    util2.addListener(socket, "close", function() {
        const err = this[kError] || new SocketError("closed", util2.getSocketInfo(this));
        client[kSocket] = null;
        if (this[kHTTP2Session] != null) {
            this[kHTTP2Session].destroy(err);
        }
        client[kPendingIdx] = client[kRunningIdx];
        assert4(client[kRunning] === 0);
        client.emit("disconnect", client[kUrl], [
            client
        ], err);
        client[kResume]();
    });
    let closed2 = false;
    socket.on("close", ()=>{
        closed2 = true;
    });
    return {
        version: "h2",
        defaultPipelining: Infinity,
        write (...args) {
            return writeH2(client, ...args);
        },
        resume () {
            resumeH2(client);
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
        busy () {
            return false;
        }
    };
}
function resumeH2(client) {
    const socket = client[kSocket];
    if (socket?.destroyed === false) {
        if (client[kSize] === 0 && client[kMaxConcurrentStreams] === 0) {
            socket.unref();
            client[kHTTP2Session].unref();
        } else {
            socket.ref();
            client[kHTTP2Session].ref();
        }
    }
}
function onHttp2SessionError(err) {
    assert4(err.code !== "ERR_TLS_CERT_ALTNAME_INVALID");
    this[kSocket][kError] = err;
    this[kClient][kOnError](err);
}
function onHttp2FrameError(type2, code, id) {
    if (id === 0) {
        const err = new InformationalError(`HTTP/2: "frameError" received - type ${type2}, code ${code}`);
        this[kSocket][kError] = err;
        this[kClient][kOnError](err);
    }
}
function onHttp2SessionEnd() {
    const err = new SocketError("other side closed", util2.getSocketInfo(this[kSocket]));
    this.destroy(err);
    util2.destroy(this[kSocket], err);
}
function onHTTP2GoAway(code) {
    const err = this[kError] || new SocketError(`HTTP/2: "GOAWAY" frame received with code ${code}`, util2.getSocketInfo(this));
    const client = this[kClient];
    client[kSocket] = null;
    client[kHTTPContext] = null;
    if (this[kHTTP2Session] != null) {
        this[kHTTP2Session].destroy(err);
        this[kHTTP2Session] = null;
    }
    util2.destroy(this[kSocket], err);
    if (client[kRunningIdx] < client[kQueue].length) {
        const request3 = client[kQueue][client[kRunningIdx]];
        client[kQueue][client[kRunningIdx]++] = null;
        util2.errorRequest(client, request3, err);
        client[kPendingIdx] = client[kRunningIdx];
    }
    assert4(client[kRunning] === 0);
    client.emit("disconnect", client[kUrl], [
        client
    ], err);
    client[kResume]();
}
function shouldSendContentLength(method) {
    return method !== "GET" && method !== "HEAD" && method !== "OPTIONS" && method !== "TRACE" && method !== "CONNECT";
}
function writeH2(client, request3) {
    const session = client[kHTTP2Session];
    const { method, path: path64, host, upgrade, expectContinue, signal, headers: reqHeaders } = request3;
    let { body } = request3;
    if (upgrade) {
        util2.errorRequest(client, request3, new Error("Upgrade not supported for H2"));
        return false;
    }
    const headers = {};
    for(let n = 0; n < reqHeaders.length; n += 2){
        const key = reqHeaders[n + 0];
        const val = reqHeaders[n + 1];
        if (Array.isArray(val)) {
            for(let i = 0; i < val.length; i++){
                if (headers[key]) {
                    headers[key] += `,${val[i]}`;
                } else {
                    headers[key] = val[i];
                }
            }
        } else {
            headers[key] = val;
        }
    }
    let stream3;
    const { hostname: hostname3, port } = client[kUrl];
    headers[HTTP2_HEADER_AUTHORITY] = host || `${hostname3}${port ? `:${port}` : ""}`;
    headers[HTTP2_HEADER_METHOD] = method;
    const abort = (err)=>{
        if (request3.aborted || request3.completed) {
            return;
        }
        err = err || new RequestAbortedError();
        util2.errorRequest(client, request3, err);
        if (stream3 != null) {
            util2.destroy(stream3, err);
        }
        util2.destroy(body, err);
        client[kQueue][client[kRunningIdx]++] = null;
        client[kResume]();
    };
    try {
        request3.onConnect(abort);
    } catch (err) {
        util2.errorRequest(client, request3, err);
    }
    if (request3.aborted) {
        return false;
    }
    if (method === "CONNECT") {
        session.ref();
        stream3 = session.request(headers, {
            endStream: false,
            signal
        });
        if (stream3.id && !stream3.pending) {
            request3.onUpgrade(null, null, stream3);
            ++session[kOpenStreams];
            client[kQueue][client[kRunningIdx]++] = null;
        } else {
            stream3.once("ready", ()=>{
                request3.onUpgrade(null, null, stream3);
                ++session[kOpenStreams];
                client[kQueue][client[kRunningIdx]++] = null;
            });
        }
        stream3.once("close", ()=>{
            session[kOpenStreams] -= 1;
            if (session[kOpenStreams] === 0) session.unref();
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
    if (util2.isFormDataLike(body)) {
        extractBody ??= require_body2().extractBody;
        const [bodyStream, contentType] = extractBody(body);
        headers["content-type"] = contentType;
        body = bodyStream.stream;
        contentLength = bodyStream.length;
    }
    if (contentLength == null) {
        contentLength = request3.contentLength;
    }
    if (contentLength === 0 || !expectsPayload) {
        contentLength = null;
    }
    if (shouldSendContentLength(method) && contentLength > 0 && request3.contentLength != null && request3.contentLength !== contentLength) {
        if (client[kStrictContentLength]) {
            util2.errorRequest(client, request3, new RequestContentLengthMismatchError());
            return false;
        }
        process.emitWarning(new RequestContentLengthMismatchError());
    }
    if (contentLength != null) {
        assert4(body, "no body must not have content length");
        headers[HTTP2_HEADER_CONTENT_LENGTH] = `${contentLength}`;
    }
    session.ref();
    const shouldEndStream = method === "GET" || method === "HEAD" || body === null;
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
    ++session[kOpenStreams];
    stream3.once("response", (headers2)=>{
        const { [HTTP2_HEADER_STATUS]: statusCode, ...realHeaders } = headers2;
        request3.onResponseStarted();
        if (request3.aborted) {
            const err = new RequestAbortedError();
            util2.errorRequest(client, request3, err);
            util2.destroy(stream3, err);
            return;
        }
        if (request3.onHeaders(Number(statusCode), parseH2Headers(realHeaders), stream3.resume.bind(stream3), "") === false) {
            stream3.pause();
        }
        stream3.on("data", (chunk)=>{
            if (request3.onData(chunk) === false) {
                stream3.pause();
            }
        });
    });
    stream3.once("end", ()=>{
        if (stream3.state?.state == null || stream3.state.state < 6) {
            request3.onComplete([]);
        }
        if (session[kOpenStreams] === 0) {
            session.unref();
        }
        abort(new InformationalError("HTTP/2: stream half-closed (remote)"));
        client[kQueue][client[kRunningIdx]++] = null;
        client[kPendingIdx] = client[kRunningIdx];
        client[kResume]();
    });
    stream3.once("close", ()=>{
        session[kOpenStreams] -= 1;
        if (session[kOpenStreams] === 0) {
            session.unref();
        }
    });
    stream3.once("error", function(err) {
        abort(err);
    });
    stream3.once("frameError", (type2, code)=>{
        abort(new InformationalError(`HTTP/2: "frameError" received - type ${type2}, code ${code}`));
    });
    return true;
    function writeBodyH2() {
        if (!body || contentLength === 0) {
            writeBuffer(abort, stream3, null, client, request3, client[kSocket], contentLength, expectsPayload);
        } else if (util2.isBuffer(body)) {
            writeBuffer(abort, stream3, body, client, request3, client[kSocket], contentLength, expectsPayload);
        } else if (util2.isBlobLike(body)) {
            if (typeof body.stream === "function") {
                writeIterable(abort, stream3, body.stream(), client, request3, client[kSocket], contentLength, expectsPayload);
            } else {
                writeBlob(abort, stream3, body, client, request3, client[kSocket], contentLength, expectsPayload);
            }
        } else if (util2.isStream(body)) {
            writeStream(abort, client[kSocket], expectsPayload, stream3, body, client, request3, contentLength);
        } else if (util2.isIterable(body)) {
            writeIterable(abort, stream3, body, client, request3, client[kSocket], contentLength, expectsPayload);
        } else {
            assert4(false);
        }
    }
}
function writeBuffer(abort, h2stream, body, client, request3, socket, contentLength, expectsPayload) {
    try {
        if (body != null && util2.isBuffer(body)) {
            assert4(contentLength === body.byteLength, "buffer body must have content length");
            h2stream.cork();
            h2stream.write(body);
            h2stream.uncork();
            h2stream.end();
            request3.onBodySent(body);
        }
        if (!expectsPayload) {
            socket[kReset] = true;
        }
        request3.onRequestSent();
        client[kResume]();
    } catch (error3) {
        abort(error3);
    }
}
function writeStream(abort, socket, expectsPayload, h2stream, body, client, request3, contentLength) {
    assert4(contentLength !== 0 || client[kRunning] === 0, "stream body cannot be pipelined");
    const pipe3 = pipeline2(body, h2stream, (err)=>{
        if (err) {
            util2.destroy(pipe3, err);
            abort(err);
        } else {
            util2.removeAllListeners(pipe3);
            request3.onRequestSent();
            if (!expectsPayload) {
                socket[kReset] = true;
            }
            client[kResume]();
        }
    });
    util2.addListener(pipe3, "data", onPipeData);
    function onPipeData(chunk) {
        request3.onBodySent(chunk);
    }
}
async function writeBlob(abort, h2stream, body, client, request3, socket, contentLength, expectsPayload) {
    assert4(contentLength === body.size, "blob body must have content length");
    try {
        if (contentLength != null && contentLength !== body.size) {
            throw new RequestContentLengthMismatchError();
        }
        const buffer = Buffer.from(await body.arrayBuffer());
        h2stream.cork();
        h2stream.write(buffer);
        h2stream.uncork();
        h2stream.end();
        request3.onBodySent(buffer);
        request3.onRequestSent();
        if (!expectsPayload) {
            socket[kReset] = true;
        }
        client[kResume]();
    } catch (err) {
        abort(err);
    }
}
async function writeIterable(abort, h2stream, body, client, request3, socket, contentLength, expectsPayload) {
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
        h2stream.end();
        request3.onRequestSent();
        if (!expectsPayload) {
            socket[kReset] = true;
        }
        client[kResume]();
    } catch (err) {
        abort(err);
    } finally{
        h2stream.off("close", onDrain).off("drain", onDrain);
    }
}
module2.exports = connectH2;

return module2.exports;
}
