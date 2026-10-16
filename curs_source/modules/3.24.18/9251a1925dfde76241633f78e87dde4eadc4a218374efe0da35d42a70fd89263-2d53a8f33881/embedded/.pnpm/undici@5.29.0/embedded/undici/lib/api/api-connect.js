import { require_abort_signal } from "./abort-signal.js";
import { require_errors } from "../core/errors.js";
import { require_util } from "../core/util.js";
var __wakaru_require_api_connect_cache;
export function require_api_connect() {
if (__wakaru_require_api_connect_cache) return __wakaru_require_api_connect_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_api_connect_cache = module2;
"use strict";
var { AsyncResource } = require("async_hooks");
var { InvalidArgumentError: InvalidArgumentError3, RequestAbortedError, SocketError } = require_errors();
var util2 = require_util();
var { addSignal, removeSignal } = require_abort_signal();
var ConnectHandler = class extends AsyncResource {
    constructor(opts, callback){
        if (!opts || typeof opts !== "object") {
            throw new InvalidArgumentError3("invalid opts");
        }
        if (typeof callback !== "function") {
            throw new InvalidArgumentError3("invalid callback");
        }
        const { signal, opaque, responseHeaders } = opts;
        if (signal && typeof signal.on !== "function" && typeof signal.addEventListener !== "function") {
            throw new InvalidArgumentError3("signal must be an EventEmitter or EventTarget");
        }
        super("UNDICI_CONNECT");
        this.opaque = opaque || null;
        this.responseHeaders = responseHeaders || null;
        this.callback = callback;
        this.abort = null;
        addSignal(this, signal);
    }
    onConnect(abort, context2) {
        if (!this.callback) {
            throw new RequestAbortedError();
        }
        this.abort = abort;
        this.context = context2;
    }
    onHeaders() {
        throw new SocketError("bad connect", null);
    }
    onUpgrade(statusCode, rawHeaders, socket) {
        const { callback, opaque, context: context2 } = this;
        removeSignal(this);
        this.callback = null;
        let headers = rawHeaders;
        if (headers != null) {
            headers = this.responseHeaders === "raw" ? util2.parseRawHeaders(rawHeaders) : util2.parseHeaders(rawHeaders);
        }
        this.runInAsyncScope(callback, null, null, {
            statusCode,
            headers,
            socket,
            opaque,
            context: context2
        });
    }
    onError(err) {
        const { callback, opaque } = this;
        removeSignal(this);
        if (callback) {
            this.callback = null;
            queueMicrotask(()=>{
                this.runInAsyncScope(callback, null, err, {
                    opaque
                });
            });
        }
    }
};
function connect3(opts, callback) {
    if (callback === void 0) {
        return new Promise((resolve36, reject2)=>{
            connect3.call(this, opts, (err, data)=>{
                return err ? reject2(err) : resolve36(data);
            });
        });
    }
    try {
        const connectHandler = new ConnectHandler(opts, callback);
        this.dispatch({
            ...opts,
            method: "CONNECT"
        }, connectHandler);
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
module2.exports = connect3;

return module2.exports;
}
