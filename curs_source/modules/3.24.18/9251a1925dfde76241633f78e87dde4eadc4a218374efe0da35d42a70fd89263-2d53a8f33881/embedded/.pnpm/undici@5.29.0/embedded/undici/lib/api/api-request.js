import { require_abort_signal } from "./abort-signal.js";
import { require_readable } from "./readable.js";
import { require_util3 } from "./util.js";
import { require_errors } from "../core/errors.js";
import { require_util } from "../core/util.js";
var __wakaru_require_api_request_cache;
export function require_api_request() {
if (__wakaru_require_api_request_cache) return __wakaru_require_api_request_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_api_request_cache = module2;
"use strict";
var Readable2 = require_readable();
var { InvalidArgumentError: InvalidArgumentError3, RequestAbortedError } = require_errors();
var util2 = require_util();
var { getResolveErrorBodyCallback } = require_util3();
var { AsyncResource } = require("async_hooks");
var { addSignal, removeSignal } = require_abort_signal();
var RequestHandler = class extends AsyncResource {
    constructor(opts, callback){
        if (!opts || typeof opts !== "object") {
            throw new InvalidArgumentError3("invalid opts");
        }
        const { signal, method, opaque, body, onInfo, responseHeaders, throwOnError, highWaterMark } = opts;
        try {
            if (typeof callback !== "function") {
                throw new InvalidArgumentError3("invalid callback");
            }
            if (highWaterMark && (typeof highWaterMark !== "number" || highWaterMark < 0)) {
                throw new InvalidArgumentError3("invalid highWaterMark");
            }
            if (signal && typeof signal.on !== "function" && typeof signal.addEventListener !== "function") {
                throw new InvalidArgumentError3("signal must be an EventEmitter or EventTarget");
            }
            if (method === "CONNECT") {
                throw new InvalidArgumentError3("invalid method");
            }
            if (onInfo && typeof onInfo !== "function") {
                throw new InvalidArgumentError3("invalid onInfo callback");
            }
            super("UNDICI_REQUEST");
        } catch (err) {
            if (util2.isStream(body)) {
                util2.destroy(body.on("error", util2.nop), err);
            }
            throw err;
        }
        this.responseHeaders = responseHeaders || null;
        this.opaque = opaque || null;
        this.callback = callback;
        this.res = null;
        this.abort = null;
        this.body = body;
        this.trailers = {};
        this.context = null;
        this.onInfo = onInfo || null;
        this.throwOnError = throwOnError;
        this.highWaterMark = highWaterMark;
        if (util2.isStream(body)) {
            body.on("error", (err)=>{
                this.onError(err);
            });
        }
        addSignal(this, signal);
    }
    onConnect(abort, context2) {
        if (!this.callback) {
            throw new RequestAbortedError();
        }
        this.abort = abort;
        this.context = context2;
    }
    onHeaders(statusCode, rawHeaders, resume, statusMessage) {
        const { callback, opaque, abort, context: context2, responseHeaders, highWaterMark } = this;
        const headers = responseHeaders === "raw" ? util2.parseRawHeaders(rawHeaders) : util2.parseHeaders(rawHeaders);
        if (statusCode < 200) {
            if (this.onInfo) {
                this.onInfo({
                    statusCode,
                    headers
                });
            }
            return;
        }
        const parsedHeaders = responseHeaders === "raw" ? util2.parseHeaders(rawHeaders) : headers;
        const contentType = parsedHeaders["content-type"];
        const body = new Readable2({
            resume,
            abort,
            contentType,
            highWaterMark
        });
        this.callback = null;
        this.res = body;
        if (callback !== null) {
            if (this.throwOnError && statusCode >= 400) {
                this.runInAsyncScope(getResolveErrorBodyCallback, null, {
                    callback,
                    body,
                    contentType,
                    statusCode,
                    statusMessage,
                    headers
                });
            } else {
                this.runInAsyncScope(callback, null, null, {
                    statusCode,
                    headers,
                    trailers: this.trailers,
                    opaque,
                    body,
                    context: context2
                });
            }
        }
    }
    onData(chunk) {
        const { res } = this;
        return res.push(chunk);
    }
    onComplete(trailers) {
        const { res } = this;
        removeSignal(this);
        util2.parseHeaders(trailers, this.trailers);
        res.push(null);
    }
    onError(err) {
        const { res, callback, body, opaque } = this;
        removeSignal(this);
        if (callback) {
            this.callback = null;
            queueMicrotask(()=>{
                this.runInAsyncScope(callback, null, err, {
                    opaque
                });
            });
        }
        if (res) {
            this.res = null;
            queueMicrotask(()=>{
                util2.destroy(res, err);
            });
        }
        if (body) {
            this.body = null;
            util2.destroy(body, err);
        }
    }
};
function request3(opts, callback) {
    if (callback === void 0) {
        return new Promise((resolve36, reject2)=>{
            request3.call(this, opts, (err, data)=>{
                return err ? reject2(err) : resolve36(data);
            });
        });
    }
    try {
        this.dispatch(opts, new RequestHandler(opts, callback));
    } catch (err) {
        if (typeof callback !== "function") {
            throw err;
        }
        const opaque = opts && opts.opaque;
        queueMicrotask(()=>callback(err, {
                opaque
            }));
    }
}
module2.exports = request3;
module2.exports.RequestHandler = RequestHandler;

return module2.exports;
}
