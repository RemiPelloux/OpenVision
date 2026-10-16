import { require_constants9 } from "./constants.js";
import { require_diagnostics } from "./diagnostics.js";
import { require_errors2 } from "./errors.js";
import { require_util8 } from "./util.js";
var __wakaru_require_request3_cache;
export function require_request3() {
if (__wakaru_require_request3_cache) return __wakaru_require_request3_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_request3_cache = module2;
"use strict";
var { InvalidArgumentError: InvalidArgumentError3, NotSupportedError } = require_errors2();
var assert4 = require("node:assert");
var { isValidHTTPToken, isValidHeaderValue, isStream, destroy, isBuffer, isFormDataLike, isIterable, isBlobLike, buildURL, validateHandler, getServerName, normalizedMethodRecords } = require_util8();
var { channels } = require_diagnostics();
var { headerNameLowerCasedRecord } = require_constants9();
var invalidPathRegex = /[^\u0021-\u00ff]/;
var kHandler = Symbol("handler");
var Request2 = class {
    constructor(origin, { path: path64, method, body, headers, query, idempotent, blocking, upgrade, headersTimeout, bodyTimeout, reset, throwOnError, expectContinue, servername }, handler){
        if (typeof path64 !== "string") {
            throw new InvalidArgumentError3("path must be a string");
        } else if (path64[0] !== "/" && !(path64.startsWith("http://") || path64.startsWith("https://")) && method !== "CONNECT") {
            throw new InvalidArgumentError3("path must be an absolute URL or start with a slash");
        } else if (invalidPathRegex.test(path64)) {
            throw new InvalidArgumentError3("invalid request path");
        }
        if (typeof method !== "string") {
            throw new InvalidArgumentError3("method must be a string");
        } else if (normalizedMethodRecords[method] === void 0 && !isValidHTTPToken(method)) {
            throw new InvalidArgumentError3("invalid request method");
        }
        if (upgrade && typeof upgrade !== "string") {
            throw new InvalidArgumentError3("upgrade must be a string");
        }
        if (upgrade && !isValidHeaderValue(upgrade)) {
            throw new InvalidArgumentError3("invalid upgrade header");
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
        } else if (isStream(body)) {
            this.body = body;
            const rState = this.body._readableState;
            if (!rState || !rState.autoDestroy) {
                this.endHandler = function autoDestroy() {
                    destroy(this);
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
        } else if (isBuffer(body)) {
            this.body = body.byteLength ? body : null;
        } else if (ArrayBuffer.isView(body)) {
            this.body = body.buffer.byteLength ? Buffer.from(body.buffer, body.byteOffset, body.byteLength) : null;
        } else if (body instanceof ArrayBuffer) {
            this.body = body.byteLength ? Buffer.from(body) : null;
        } else if (typeof body === "string") {
            this.body = body.length ? Buffer.from(body) : null;
        } else if (isFormDataLike(body) || isIterable(body) || isBlobLike(body)) {
            this.body = body;
        } else {
            throw new InvalidArgumentError3("body must be a string, a Buffer, a Readable stream, an iterable, or an async iterable");
        }
        this.completed = false;
        this.aborted = false;
        this.upgrade = upgrade || null;
        this.path = query ? buildURL(path64, query) : path64;
        this.origin = origin;
        this.idempotent = idempotent == null ? method === "HEAD" || method === "GET" : idempotent;
        this.blocking = blocking == null ? false : blocking;
        this.reset = reset == null ? null : reset;
        this.host = null;
        this.contentLength = null;
        this.contentType = null;
        this.headers = [];
        this.expectContinue = expectContinue != null ? expectContinue : false;
        if (Array.isArray(headers)) {
            if (headers.length % 2 !== 0) {
                throw new InvalidArgumentError3("headers array must be even");
            }
            for(let i = 0; i < headers.length; i += 2){
                processHeader(this, headers[i], headers[i + 1]);
            }
        } else if (headers && typeof headers === "object") {
            if (headers[Symbol.iterator]) {
                for (const header of headers){
                    if (!Array.isArray(header) || header.length !== 2) {
                        throw new InvalidArgumentError3("headers must be in key-value pair format");
                    }
                    processHeader(this, header[0], header[1]);
                }
            } else {
                const keys = Object.keys(headers);
                for(let i = 0; i < keys.length; ++i){
                    processHeader(this, keys[i], headers[keys[i]]);
                }
            }
        } else if (headers != null) {
            throw new InvalidArgumentError3("headers must be an object or an array");
        }
        validateHandler(handler, method, upgrade);
        this.servername = servername || getServerName(this.host);
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
    onResponseStarted() {
        return this[kHandler].onResponseStarted?.();
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
};
function processHeader(request3, key, val) {
    if (val && (typeof val === "object" && !Array.isArray(val))) {
        throw new InvalidArgumentError3(`invalid ${key} header`);
    } else if (val === void 0) {
        return;
    }
    let headerName = headerNameLowerCasedRecord[key];
    if (headerName === void 0) {
        headerName = key.toLowerCase();
        if (headerNameLowerCasedRecord[headerName] === void 0 && !isValidHTTPToken(headerName)) {
            throw new InvalidArgumentError3("invalid header key");
        }
    }
    if (Array.isArray(val)) {
        const arr = [];
        for(let i = 0; i < val.length; i++){
            if (typeof val[i] === "string") {
                if (!isValidHeaderValue(val[i])) {
                    throw new InvalidArgumentError3(`invalid ${key} header`);
                }
                arr.push(val[i]);
            } else if (val[i] === null) {
                arr.push("");
            } else if (typeof val[i] === "object") {
                throw new InvalidArgumentError3(`invalid ${key} header`);
            } else {
                const str3 = `${val[i]}`;
                if (!isValidHeaderValue(str3)) {
                    throw new InvalidArgumentError3(`invalid ${key} header`);
                }
                arr.push(str3);
            }
        }
        val = arr;
    } else if (typeof val === "string") {
        if (!isValidHeaderValue(val)) {
            throw new InvalidArgumentError3(`invalid ${key} header`);
        }
    } else if (val === null) {
        val = "";
    } else {
        val = `${val}`;
        if (!isValidHeaderValue(val)) {
            throw new InvalidArgumentError3(`invalid ${key} header`);
        }
    }
    if (headerName === "host") {
        if (request3.host !== null) {
            throw new InvalidArgumentError3("duplicate host header");
        }
        if (typeof val !== "string") {
            throw new InvalidArgumentError3("invalid host header");
        }
        request3.host = val;
    } else if (headerName === "content-length") {
        if (request3.contentLength !== null) {
            throw new InvalidArgumentError3("duplicate content-length header");
        }
        request3.contentLength = parseInt(val, 10);
        if (!Number.isFinite(request3.contentLength)) {
            throw new InvalidArgumentError3("invalid content-length header");
        }
    } else if (request3.contentType === null && headerName === "content-type") {
        request3.contentType = val;
        request3.headers.push(key, val);
    } else if (headerName === "transfer-encoding" || headerName === "keep-alive" || headerName === "upgrade") {
        throw new InvalidArgumentError3(`invalid ${headerName} header`);
    } else if (headerName === "connection") {
        const value = typeof val === "string" ? val.toLowerCase() : null;
        if (value !== "close" && value !== "keep-alive") {
            throw new InvalidArgumentError3("invalid connection header");
        }
        if (value === "close") {
            request3.reset = true;
        }
    } else if (headerName === "expect") {
        throw new NotSupportedError("expect header not supported");
    } else {
        request3.headers.push(key, val);
    }
}
module2.exports = Request2;

return module2.exports;
}
