import { require_abort_signal } from "./abort-signal.js";
import { require_util3 } from "./util.js";
import { require_errors } from "../core/errors.js";
import { require_util } from "../core/util.js";
var __wakaru_require_api_stream_cache;
export function require_api_stream() {
if (__wakaru_require_api_stream_cache) return __wakaru_require_api_stream_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_api_stream_cache = module2;
"use strict";
var { finished: finished2, PassThrough: PassThrough3 } = require("stream");
var { InvalidArgumentError: InvalidArgumentError3, InvalidReturnValueError, RequestAbortedError } = require_errors();
var util2 = require_util();
var { getResolveErrorBodyCallback } = require_util3();
var { AsyncResource } = require("async_hooks");
var { addSignal, removeSignal } = require_abort_signal();
var StreamHandler = class extends AsyncResource {
    constructor(opts, factory, callback){
        if (!opts || typeof opts !== "object") {
            throw new InvalidArgumentError3("invalid opts");
        }
        const { signal, method, opaque, body, onInfo, responseHeaders, throwOnError } = opts;
        try {
            if (typeof callback !== "function") {
                throw new InvalidArgumentError3("invalid callback");
            }
            if (typeof factory !== "function") {
                throw new InvalidArgumentError3("invalid factory");
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
            super("UNDICI_STREAM");
        } catch (err) {
            if (util2.isStream(body)) {
                util2.destroy(body.on("error", util2.nop), err);
            }
            throw err;
        }
        this.responseHeaders = responseHeaders || null;
        this.opaque = opaque || null;
        this.factory = factory;
        this.callback = callback;
        this.res = null;
        this.abort = null;
        this.context = null;
        this.trailers = null;
        this.body = body;
        this.onInfo = onInfo || null;
        this.throwOnError = throwOnError || false;
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
        const { factory, opaque, context: context2, callback, responseHeaders } = this;
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
        this.factory = null;
        let res;
        if (this.throwOnError && statusCode >= 400) {
            const parsedHeaders = responseHeaders === "raw" ? util2.parseHeaders(rawHeaders) : headers;
            const contentType = parsedHeaders["content-type"];
            res = new PassThrough3();
            this.callback = null;
            this.runInAsyncScope(getResolveErrorBodyCallback, null, {
                callback,
                body: res,
                contentType,
                statusCode,
                statusMessage,
                headers
            });
        } else {
            if (factory === null) {
                return;
            }
            res = this.runInAsyncScope(factory, null, {
                statusCode,
                headers,
                opaque,
                context: context2
            });
            if (!res || typeof res.write !== "function" || typeof res.end !== "function" || typeof res.on !== "function") {
                throw new InvalidReturnValueError("expected Writable");
            }
            finished2(res, {
                readable: false
            }, (err)=>{
                const { callback: callback2, res: res2, opaque: opaque2, trailers, abort } = this;
                this.res = null;
                if (err || !res2.readable) {
                    util2.destroy(res2, err);
                }
                this.callback = null;
                this.runInAsyncScope(callback2, null, err || null, {
                    opaque: opaque2,
                    trailers
                });
                if (err) {
                    abort();
                }
            });
        }
        res.on("drain", resume);
        this.res = res;
        const needDrain = res.writableNeedDrain !== void 0 ? res.writableNeedDrain : res._writableState && res._writableState.needDrain;
        return needDrain !== true;
    }
    onData(chunk) {
        const { res } = this;
        return res ? res.write(chunk) : true;
    }
    onComplete(trailers) {
        const { res } = this;
        removeSignal(this);
        if (!res) {
            return;
        }
        this.trailers = util2.parseHeaders(trailers);
        res.end();
    }
    onError(err) {
        const { res, callback, opaque, body } = this;
        removeSignal(this);
        this.factory = null;
        if (res) {
            this.res = null;
            util2.destroy(res, err);
        } else if (callback) {
            this.callback = null;
            queueMicrotask(()=>{
                this.runInAsyncScope(callback, null, err, {
                    opaque
                });
            });
        }
        if (body) {
            this.body = null;
            util2.destroy(body, err);
        }
    }
};
function stream3(opts, factory, callback) {
    if (callback === void 0) {
        return new Promise((resolve36, reject2)=>{
            stream3.call(this, opts, factory, (err, data)=>{
                return err ? reject2(err) : resolve36(data);
            });
        });
    }
    try {
        this.dispatch(opts, new StreamHandler(opts, factory, callback));
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
module2.exports = stream3;

return module2.exports;
}
