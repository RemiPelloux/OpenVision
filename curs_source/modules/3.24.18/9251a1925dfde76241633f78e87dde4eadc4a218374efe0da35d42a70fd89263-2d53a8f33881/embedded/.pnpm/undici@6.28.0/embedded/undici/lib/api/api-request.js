import { require_readable2 } from "./readable.js";
import { require_util10 } from "./util.js";
import { require_errors2 } from "../core/errors.js";
import { require_util8 } from "../core/util.js";
var __wakaru_require_api_request2_cache;
export function require_api_request2() {
if (__wakaru_require_api_request2_cache) return __wakaru_require_api_request2_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_api_request2_cache = module2;
"use strict";
var assert4 = require("node:assert");
var { Readable: Readable2 } = require_readable2();
var { InvalidArgumentError: InvalidArgumentError3, RequestAbortedError } = require_errors2();
var util2 = require_util8();
var { getResolveErrorBodyCallback } = require_util10();
var { AsyncResource } = require("node:async_hooks");
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
        this.method = method;
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
        this.signal = signal;
        this.reason = null;
        this.removeAbortListener = null;
        if (util2.isStream(body)) {
            body.on("error", (err)=>{
                this.onError(err);
            });
        }
        if (this.signal) {
            if (this.signal.aborted) {
                this.reason = this.signal.reason ?? new RequestAbortedError();
            } else {
                this.removeAbortListener = util2.addAbortListener(this.signal, ()=>{
                    this.reason = this.signal.reason ?? new RequestAbortedError();
                    if (this.res) {
                        util2.destroy(this.res.on("error", util2.nop), this.reason);
                    } else if (this.abort) {
                        this.abort(this.reason);
                    }
                    if (this.removeAbortListener) {
                        this.res?.off("close", this.removeAbortListener);
                        this.removeAbortListener();
                        this.removeAbortListener = null;
                    }
                });
            }
        }
    }
    onConnect(abort, context2) {
        if (this.reason) {
            abort(this.reason);
            return;
        }
        assert4(this.callback);
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
        const contentLength = parsedHeaders["content-length"];
        const res = new Readable2({
            resume,
            abort,
            contentType,
            contentLength: this.method !== "HEAD" && contentLength ? Number(contentLength) : null,
            highWaterMark
        });
        if (this.removeAbortListener) {
            res.on("close", this.removeAbortListener);
        }
        this.callback = null;
        this.res = res;
        if (callback !== null) {
            if (this.throwOnError && statusCode >= 400) {
                this.runInAsyncScope(getResolveErrorBodyCallback, null, {
                    callback,
                    body: res,
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
                    body: res,
                    context: context2
                });
            }
        }
    }
    onData(chunk) {
        return this.res.push(chunk);
    }
    onComplete(trailers) {
        util2.parseHeaders(trailers, this.trailers);
        this.res.push(null);
    }
    onError(err) {
        const { res, callback, body, opaque } = this;
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
        if (this.removeAbortListener) {
            res?.off("close", this.removeAbortListener);
            this.removeAbortListener();
            this.removeAbortListener = null;
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
        const opaque = opts?.opaque;
        queueMicrotask(()=>callback(err, {
                opaque
            }));
    }
}
module2.exports = request3;
module2.exports.RequestHandler = RequestHandler;

return module2.exports;
}
