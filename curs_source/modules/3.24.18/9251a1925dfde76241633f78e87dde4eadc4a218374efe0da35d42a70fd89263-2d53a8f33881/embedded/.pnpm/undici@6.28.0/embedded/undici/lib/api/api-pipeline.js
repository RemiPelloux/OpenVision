import { require_abort_signal2 } from "./abort-signal.js";
import { require_errors2 } from "../core/errors.js";
import { require_util8 } from "../core/util.js";
var __wakaru_require_api_pipeline2_cache;
export function require_api_pipeline2() {
if (__wakaru_require_api_pipeline2_cache) return __wakaru_require_api_pipeline2_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_api_pipeline2_cache = module2;
"use strict";
var { Readable: Readable2, Duplex, PassThrough: PassThrough3 } = require("node:stream");
var { InvalidArgumentError: InvalidArgumentError3, InvalidReturnValueError, RequestAbortedError } = require_errors2();
var util2 = require_util8();
var { AsyncResource } = require("node:async_hooks");
var { addSignal, removeSignal } = require_abort_signal2();
var assert4 = require("node:assert");
var kResume = Symbol("resume");
var PipelineRequest = class extends Readable2 {
    constructor(){
        super({
            autoDestroy: true
        });
        this[kResume] = null;
    }
    _read() {
        const { [kResume]: resume } = this;
        if (resume) {
            this[kResume] = null;
            resume();
        }
    }
    _destroy(err, callback) {
        this._read();
        callback(err);
    }
};
var PipelineResponse = class extends Readable2 {
    constructor(resume){
        super({
            autoDestroy: true
        });
        this[kResume] = resume;
    }
    _read() {
        this[kResume]();
    }
    _destroy(err, callback) {
        if (!err && !this._readableState.endEmitted) {
            err = new RequestAbortedError();
        }
        callback(err);
    }
};
var PipelineHandler = class extends AsyncResource {
    constructor(opts, handler){
        if (!opts || typeof opts !== "object") {
            throw new InvalidArgumentError3("invalid opts");
        }
        if (typeof handler !== "function") {
            throw new InvalidArgumentError3("invalid handler");
        }
        const { signal, method, opaque, onInfo, responseHeaders } = opts;
        if (signal && typeof signal.on !== "function" && typeof signal.addEventListener !== "function") {
            throw new InvalidArgumentError3("signal must be an EventEmitter or EventTarget");
        }
        if (method === "CONNECT") {
            throw new InvalidArgumentError3("invalid method");
        }
        if (onInfo && typeof onInfo !== "function") {
            throw new InvalidArgumentError3("invalid onInfo callback");
        }
        super("UNDICI_PIPELINE");
        this.opaque = opaque || null;
        this.responseHeaders = responseHeaders || null;
        this.handler = handler;
        this.abort = null;
        this.context = null;
        this.onInfo = onInfo || null;
        this.req = new PipelineRequest().on("error", util2.nop);
        this.ret = new Duplex({
            readableObjectMode: opts.objectMode,
            autoDestroy: true,
            read: ()=>{
                const { body } = this;
                if (body?.resume) {
                    body.resume();
                }
            },
            write: (chunk, encoding, callback)=>{
                const { req } = this;
                if (req.push(chunk, encoding) || req._readableState.destroyed) {
                    callback();
                } else {
                    req[kResume] = callback;
                }
            },
            destroy: (err, callback)=>{
                const { body, req, res, ret, abort } = this;
                if (!err && !ret._readableState.endEmitted) {
                    err = new RequestAbortedError();
                }
                if (abort && err) {
                    abort();
                }
                util2.destroy(body, err);
                util2.destroy(req, err);
                util2.destroy(res, err);
                removeSignal(this);
                callback(err);
            }
        }).on("prefinish", ()=>{
            const { req } = this;
            req.push(null);
        });
        this.res = null;
        addSignal(this, signal);
    }
    onConnect(abort, context2) {
        const { ret, res } = this;
        if (this.reason) {
            abort(this.reason);
            return;
        }
        assert4(!res, "pipeline cannot be retried");
        assert4(!ret.destroyed);
        this.abort = abort;
        this.context = context2;
    }
    onHeaders(statusCode, rawHeaders, resume) {
        const { opaque, handler, context: context2 } = this;
        if (statusCode < 200) {
            if (this.onInfo) {
                const headers = this.responseHeaders === "raw" ? util2.parseRawHeaders(rawHeaders) : util2.parseHeaders(rawHeaders);
                this.onInfo({
                    statusCode,
                    headers
                });
            }
            return;
        }
        this.res = new PipelineResponse(resume);
        let body;
        try {
            this.handler = null;
            const headers = this.responseHeaders === "raw" ? util2.parseRawHeaders(rawHeaders) : util2.parseHeaders(rawHeaders);
            body = this.runInAsyncScope(handler, null, {
                statusCode,
                headers,
                opaque,
                body: this.res,
                context: context2
            });
        } catch (err) {
            this.res.on("error", util2.nop);
            throw err;
        }
        if (!body || typeof body.on !== "function") {
            throw new InvalidReturnValueError("expected Readable");
        }
        body.on("data", (chunk)=>{
            const { ret, body: body2 } = this;
            if (!ret.push(chunk) && body2.pause) {
                body2.pause();
            }
        }).on("error", (err)=>{
            const { ret } = this;
            util2.destroy(ret, err);
        }).on("end", ()=>{
            const { ret } = this;
            ret.push(null);
        }).on("close", ()=>{
            const { ret } = this;
            if (!ret._readableState.ended) {
                util2.destroy(ret, new RequestAbortedError());
            }
        });
        this.body = body;
    }
    onData(chunk) {
        const { res } = this;
        return res.push(chunk);
    }
    onComplete(trailers) {
        const { res } = this;
        res.push(null);
    }
    onError(err) {
        const { ret } = this;
        this.handler = null;
        util2.destroy(ret, err);
    }
};
function pipeline2(opts, handler) {
    try {
        const pipelineHandler = new PipelineHandler(opts, handler);
        this.dispatch({
            ...opts,
            body: pipelineHandler.req
        }, pipelineHandler);
        return pipelineHandler.ret;
    } catch (err) {
        return new PassThrough3().destroy(err);
    }
}
module2.exports = pipeline2;

return module2.exports;
}
