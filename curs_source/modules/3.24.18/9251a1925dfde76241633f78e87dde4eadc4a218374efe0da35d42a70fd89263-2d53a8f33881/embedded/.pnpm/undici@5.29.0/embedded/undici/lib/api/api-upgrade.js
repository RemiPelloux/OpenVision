import { require_abort_signal } from "./abort-signal.js";
import { require_errors } from "../core/errors.js";
import { require_util } from "../core/util.js";
var __wakaru_require_api_upgrade_cache;
export function require_api_upgrade() {
if (__wakaru_require_api_upgrade_cache) return __wakaru_require_api_upgrade_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_api_upgrade_cache = module2;
"use strict";
var { InvalidArgumentError: InvalidArgumentError3, RequestAbortedError, SocketError } = require_errors();
var { AsyncResource } = require("async_hooks");
var util2 = require_util();
var { addSignal, removeSignal } = require_abort_signal();
var assert4 = require("assert");
var UpgradeHandler = class extends AsyncResource {
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
        super("UNDICI_UPGRADE");
        this.responseHeaders = responseHeaders || null;
        this.opaque = opaque || null;
        this.callback = callback;
        this.abort = null;
        this.context = null;
        addSignal(this, signal);
    }
    onConnect(abort, context2) {
        if (!this.callback) {
            throw new RequestAbortedError();
        }
        this.abort = abort;
        this.context = null;
    }
    onHeaders() {
        throw new SocketError("bad upgrade", null);
    }
    onUpgrade(statusCode, rawHeaders, socket) {
        const { callback, opaque, context: context2 } = this;
        assert4.strictEqual(statusCode, 101);
        removeSignal(this);
        this.callback = null;
        const headers = this.responseHeaders === "raw" ? util2.parseRawHeaders(rawHeaders) : util2.parseHeaders(rawHeaders);
        this.runInAsyncScope(callback, null, null, {
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
function upgrade(opts, callback) {
    if (callback === void 0) {
        return new Promise((resolve36, reject2)=>{
            upgrade.call(this, opts, (err, data)=>{
                return err ? reject2(err) : resolve36(data);
            });
        });
    }
    try {
        const upgradeHandler = new UpgradeHandler(opts, callback);
        this.dispatch({
            ...opts,
            method: opts.method || "GET",
            upgrade: opts.protocol || "Websocket"
        }, upgradeHandler);
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
module2.exports = upgrade;

return module2.exports;
}
