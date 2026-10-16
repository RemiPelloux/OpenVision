import { require_errors } from "./errors.js";
import { require_symbols } from "./symbols.js";
import { require_util } from "./util.js";
import { require_body } from "../fetch/body.js";
var __wakaru_require_request_cache;
export function require_request() {
if (__wakaru_require_request_cache) return __wakaru_require_request_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_request_cache = module2;
"use strict";
var { InvalidArgumentError: InvalidArgumentError3, NotSupportedError } = require_errors();
var assert4 = require("assert");
var { kHTTP2BuildRequest, kHTTP2CopyHeaders, kHTTP1BuildRequest } = require_symbols();
var util2 = require_util();
var tokenRegExp = /^[\^_`a-zA-Z\-0-9!#$%&'*+.|~]+$/;
var headerCharRegex = /[^\t\x20-\x7e\x80-\xff]/;
var invalidPathRegex = /[^\u0021-\u00ff]/;
var kHandler = Symbol("handler");
var channels = {};
var extractBody;
try {
    const diagnosticsChannel = require("diagnostics_channel");
    channels.create = diagnosticsChannel.channel("undici:request:create");
    channels.bodySent = diagnosticsChannel.channel("undici:request:bodySent");
    channels.headers = diagnosticsChannel.channel("undici:request:headers");
    channels.trailers = diagnosticsChannel.channel("undici:request:trailers");
    channels.error = diagnosticsChannel.channel("undici:request:error");
} catch  {
    channels.create = {
        hasSubscribers: false
    };
    channels.bodySent = {
        hasSubscribers: false
    };
    channels.headers = {
        hasSubscribers: false
    };
    channels.trailers = {
        hasSubscribers: false
    };
    channels.error = {
        hasSubscribers: false
    };
}
var Request2 = class _Request {
    constructor(origin, { path: path64, method, body, headers, query, idempotent, blocking, upgrade, headersTimeout, bodyTimeout, reset, throwOnError, expectContinue }, handler){
        if (typeof path64 !== "string") {
            throw new InvalidArgumentError3("path must be a string");
        } else if (path64[0] !== "/" && !(path64.startsWith("http://") || path64.startsWith("https://")) && method !== "CONNECT") {
            throw new InvalidArgumentError3("path must be an absolute URL or start with a slash");
        } else if (invalidPathRegex.exec(path64) !== null) {
            throw new InvalidArgumentError3("invalid request path");
        }
        if (typeof method !== "string") {
            throw new InvalidArgumentError3("method must be a string");
        } else if (tokenRegExp.exec(method) === null) {
            throw new InvalidArgumentError3("invalid request method");
        }
        if (upgrade && typeof upgrade !== "string") {
            throw new InvalidArgumentError3("upgrade must be a string");
        }
        if (headersTimeout != null && (!Number.isFinite(headersTimeout) || headersTimeout < 0)) {
            throw new InvalidArgumentError3("invalid headersTimeout");
        }
        if (bodyTimeout != null && (!Number.isFinite(bodyTimeout) || bodyTimeout < 0)) {
            throw new InvalidArgumentError3("invalid bodyTimeout");
        }
        if (reset != null && typeof reset !== "boolean") {
            throw new InvalidArgumentError3("invalid reset");
        }
        if (expectContinue != null && typeof expectContinue !== "boolean") {
            throw new InvalidArgumentError3("invalid expectContinue");
        }
        this.headersTimeout = headersTimeout;
        this.bodyTimeout = bodyTimeout;
        this.throwOnError = throwOnError === true;
        this.method = method;
        this.abort = null;
        if (body == null) {
            this.body = null;
        } else if (util2.isStream(body)) {
            this.body = body;
            const rState = this.body._readableState;
            if (!rState || !rState.autoDestroy) {
                this.endHandler = function autoDestroy() {
                    util2.destroy(this);
                };
                this.body.on("end", this.endHandler);
            }
            this.errorHandler = (err)=>{
                if (this.abort) {
                    this.abort(err);
                } else {
                    this.error = err;
                }
            };
            this.body.on("error", this.errorHandler);
        } else if (util2.isBuffer(body)) {
            this.body = body.byteLength ? body : null;
        } else if (ArrayBuffer.isView(body)) {
            this.body = body.buffer.byteLength ? Buffer.from(body.buffer, body.byteOffset, body.byteLength) : null;
        } else if (body instanceof ArrayBuffer) {
            this.body = body.byteLength ? Buffer.from(body) : null;
        } else if (typeof body === "string") {
            this.body = body.length ? Buffer.from(body) : null;
        } else if (util2.isFormDataLike(body) || util2.isIterable(body) || util2.isBlobLike(body)) {
            this.body = body;
        } else {
            throw new InvalidArgumentError3("body must be a string, a Buffer, a Readable stream, an iterable, or an async iterable");
        }
        this.completed = false;
        this.aborted = false;
        this.upgrade = upgrade || null;
        this.path = query ? util2.buildURL(path64, query) : path64;
        this.origin = origin;
        this.idempotent = idempotent == null ? method === "HEAD" || method === "GET" : idempotent;
        this.blocking = blocking == null ? false : blocking;
        this.reset = reset == null ? null : reset;
        this.host = null;
        this.contentLength = null;
        this.contentType = null;
        this.headers = "";
        this.expectContinue = expectContinue != null ? expectContinue : false;
        if (Array.isArray(headers)) {
            if (headers.length % 2 !== 0) {
                throw new InvalidArgumentError3("headers array must be even");
            }
            for(let i = 0; i < headers.length; i += 2){
                processHeader(this, headers[i], headers[i + 1]);
            }
        } else if (headers && typeof headers === "object") {
            const keys = Object.keys(headers);
            for(let i = 0; i < keys.length; i++){
                const key = keys[i];
                processHeader(this, key, headers[key]);
            }
        } else if (headers != null) {
            throw new InvalidArgumentError3("headers must be an object or an array");
        }
        if (util2.isFormDataLike(this.body)) {
            if (util2.nodeMajor < 16 || util2.nodeMajor === 16 && util2.nodeMinor < 8) {
                throw new InvalidArgumentError3("Form-Data bodies are only supported in node v16.8 and newer.");
            }
            if (!extractBody) {
                extractBody = require_body().extractBody;
            }
            const [bodyStream, contentType] = extractBody(body);
            if (this.contentType == null) {
                this.contentType = contentType;
                this.headers += `content-type: ${contentType}\r
`;
            }
            this.body = bodyStream.stream;
            this.contentLength = bodyStream.length;
        } else if (util2.isBlobLike(body) && this.contentType == null && body.type) {
            this.contentType = body.type;
            this.headers += `content-type: ${body.type}\r
`;
        }
        util2.validateHandler(handler, method, upgrade);
        this.servername = util2.getServerName(this.host);
        this[kHandler] = handler;
        if (channels.create.hasSubscribers) {
            channels.create.publish({
                request: this
            });
        }
    }
    onBodySent(chunk) {
        if (this[kHandler].onBodySent) {
            try {
                return this[kHandler].onBodySent(chunk);
            } catch (err) {
                this.abort(err);
            }
        }
    }
    onRequestSent() {
        if (channels.bodySent.hasSubscribers) {
            channels.bodySent.publish({
                request: this
            });
        }
        if (this[kHandler].onRequestSent) {
            try {
                return this[kHandler].onRequestSent();
            } catch (err) {
                this.abort(err);
            }
        }
    }
    onConnect(abort) {
        assert4(!this.aborted);
        assert4(!this.completed);
        if (this.error) {
            abort(this.error);
        } else {
            this.abort = abort;
            return this[kHandler].onConnect(abort);
        }
    }
    onHeaders(statusCode, headers, resume, statusText) {
        assert4(!this.aborted);
        assert4(!this.completed);
        if (channels.headers.hasSubscribers) {
            channels.headers.publish({
                request: this,
                response: {
                    statusCode,
                    headers,
                    statusText
                }
            });
        }
        try {
            return this[kHandler].onHeaders(statusCode, headers, resume, statusText);
        } catch (err) {
            this.abort(err);
        }
    }
    onData(chunk) {
        assert4(!this.aborted);
        assert4(!this.completed);
        try {
            return this[kHandler].onData(chunk);
        } catch (err) {
            this.abort(err);
            return false;
        }
    }
    onUpgrade(statusCode, headers, socket) {
        assert4(!this.aborted);
        assert4(!this.completed);
        return this[kHandler].onUpgrade(statusCode, headers, socket);
    }
    onComplete(trailers) {
        this.onFinally();
        assert4(!this.aborted);
        this.completed = true;
        if (channels.trailers.hasSubscribers) {
            channels.trailers.publish({
                request: this,
                trailers
            });
        }
        try {
            return this[kHandler].onComplete(trailers);
        } catch (err) {
            this.onError(err);
        }
    }
    onError(error3) {
        this.onFinally();
        if (channels.error.hasSubscribers) {
            channels.error.publish({
                request: this,
                error: error3
            });
        }
        if (this.aborted) {
            return;
        }
        this.aborted = true;
        return this[kHandler].onError(error3);
    }
    onFinally() {
        if (this.errorHandler) {
            this.body.off("error", this.errorHandler);
            this.errorHandler = null;
        }
        if (this.endHandler) {
            this.body.off("end", this.endHandler);
            this.endHandler = null;
        }
    }
    addHeader(key, value) {
        processHeader(this, key, value);
        return this;
    }
    static [kHTTP1BuildRequest](origin, opts, handler) {
        return new _Request(origin, opts, handler);
    }
    static [kHTTP2BuildRequest](origin, opts, handler) {
        const headers = opts.headers;
        opts = {
            ...opts,
            headers: null
        };
        const request3 = new _Request(origin, opts, handler);
        request3.headers = {};
        if (Array.isArray(headers)) {
            if (headers.length % 2 !== 0) {
                throw new InvalidArgumentError3("headers array must be even");
            }
            for(let i = 0; i < headers.length; i += 2){
                processHeader(request3, headers[i], headers[i + 1], true);
            }
        } else if (headers && typeof headers === "object") {
            const keys = Object.keys(headers);
            for(let i = 0; i < keys.length; i++){
                const key = keys[i];
                processHeader(request3, key, headers[key], true);
            }
        } else if (headers != null) {
            throw new InvalidArgumentError3("headers must be an object or an array");
        }
        return request3;
    }
    static [kHTTP2CopyHeaders](raw) {
        const rawHeaders = raw.split("\r\n");
        const headers = {};
        for (const header of rawHeaders){
            const [key, value] = header.split(": ");
            if (value == null || value.length === 0) continue;
            if (headers[key]) headers[key] += `,${value}`;
            else headers[key] = value;
        }
        return headers;
    }
};
function processHeaderValue(key, val, skipAppend) {
    if (val && typeof val === "object") {
        throw new InvalidArgumentError3(`invalid ${key} header`);
    }
    val = val != null ? `${val}` : "";
    if (headerCharRegex.exec(val) !== null) {
        throw new InvalidArgumentError3(`invalid ${key} header`);
    }
    return skipAppend ? val : `${key}: ${val}\r
`;
}
function processHeader(request3, key, val, skipAppend = false) {
    if (val && (typeof val === "object" && !Array.isArray(val))) {
        throw new InvalidArgumentError3(`invalid ${key} header`);
    } else if (val === void 0) {
        return;
    }
    if (request3.host === null && key.length === 4 && key.toLowerCase() === "host") {
        if (headerCharRegex.exec(val) !== null) {
            throw new InvalidArgumentError3(`invalid ${key} header`);
        }
        request3.host = val;
    } else if (request3.contentLength === null && key.length === 14 && key.toLowerCase() === "content-length") {
        request3.contentLength = parseInt(val, 10);
        if (!Number.isFinite(request3.contentLength)) {
            throw new InvalidArgumentError3("invalid content-length header");
        }
    } else if (request3.contentType === null && key.length === 12 && key.toLowerCase() === "content-type") {
        request3.contentType = val;
        if (skipAppend) request3.headers[key] = processHeaderValue(key, val, skipAppend);
        else request3.headers += processHeaderValue(key, val);
    } else if (key.length === 17 && key.toLowerCase() === "transfer-encoding") {
        throw new InvalidArgumentError3("invalid transfer-encoding header");
    } else if (key.length === 10 && key.toLowerCase() === "connection") {
        const value = typeof val === "string" ? val.toLowerCase() : null;
        if (value !== "close" && value !== "keep-alive") {
            throw new InvalidArgumentError3("invalid connection header");
        } else if (value === "close") {
            request3.reset = true;
        }
    } else if (key.length === 10 && key.toLowerCase() === "keep-alive") {
        throw new InvalidArgumentError3("invalid keep-alive header");
    } else if (key.length === 7 && key.toLowerCase() === "upgrade") {
        throw new InvalidArgumentError3("invalid upgrade header");
    } else if (key.length === 6 && key.toLowerCase() === "expect") {
        throw new NotSupportedError("expect header not supported");
    } else if (tokenRegExp.exec(key) === null) {
        throw new InvalidArgumentError3("invalid header key");
    } else {
        if (Array.isArray(val)) {
            for(let i = 0; i < val.length; i++){
                if (skipAppend) {
                    if (request3.headers[key]) request3.headers[key] += `,${processHeaderValue(key, val[i], skipAppend)}`;
                    else request3.headers[key] = processHeaderValue(key, val[i], skipAppend);
                } else {
                    request3.headers += processHeaderValue(key, val[i]);
                }
            }
        } else {
            if (skipAppend) request3.headers[key] = processHeaderValue(key, val, skipAppend);
            else request3.headers += processHeaderValue(key, val);
        }
    }
}
module2.exports = Request2;

return module2.exports;
}
