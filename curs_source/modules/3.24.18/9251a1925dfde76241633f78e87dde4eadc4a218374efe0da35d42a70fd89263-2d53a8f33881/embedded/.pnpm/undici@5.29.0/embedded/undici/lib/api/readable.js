import { require_errors } from "../core/errors.js";
import { require_util } from "../core/util.js";
var __wakaru_require_readable_cache;
export function require_readable() {
if (__wakaru_require_readable_cache) return __wakaru_require_readable_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_readable_cache = module2;
"use strict";
var assert4 = require("assert");
var { Readable: Readable2 } = require("stream");
var { RequestAbortedError, NotSupportedError, InvalidArgumentError: InvalidArgumentError3 } = require_errors();
var util2 = require_util();
var { ReadableStreamFrom, toUSVString } = require_util();
var Blob2;
var kConsume = Symbol("kConsume");
var kReading = Symbol("kReading");
var kBody = Symbol("kBody");
var kAbort = Symbol("abort");
var kContentType = Symbol("kContentType");
var noop5 = ()=>{};
module2.exports = class BodyReadable extends Readable2 {
    constructor({ resume, abort, contentType = "", highWaterMark = 64 * 1024 }){
        super({
            autoDestroy: true,
            read: resume,
            highWaterMark
        });
        this._readableState.dataEmitted = false;
        this[kAbort] = abort;
        this[kConsume] = null;
        this[kBody] = null;
        this[kContentType] = contentType;
        this[kReading] = false;
    }
    destroy(err) {
        if (this.destroyed) {
            return this;
        }
        if (!err && !this._readableState.endEmitted) {
            err = new RequestAbortedError();
        }
        if (err) {
            this[kAbort]();
        }
        return super.destroy(err);
    }
    emit(ev, ...args) {
        if (ev === "data") {
            this._readableState.dataEmitted = true;
        } else if (ev === "error") {
            this._readableState.errorEmitted = true;
        }
        return super.emit(ev, ...args);
    }
    on(ev, ...args) {
        if (ev === "data" || ev === "readable") {
            this[kReading] = true;
        }
        return super.on(ev, ...args);
    }
    addListener(ev, ...args) {
        return this.on(ev, ...args);
    }
    off(ev, ...args) {
        const ret = super.off(ev, ...args);
        if (ev === "data" || ev === "readable") {
            this[kReading] = this.listenerCount("data") > 0 || this.listenerCount("readable") > 0;
        }
        return ret;
    }
    removeListener(ev, ...args) {
        return this.off(ev, ...args);
    }
    push(chunk) {
        if (this[kConsume] && chunk !== null && this.readableLength === 0) {
            consumePush(this[kConsume], chunk);
            return this[kReading] ? super.push(chunk) : true;
        }
        return super.push(chunk);
    }
    async text() {
        return consume(this, "text");
    }
    async json() {
        return consume(this, "json");
    }
    async blob() {
        return consume(this, "blob");
    }
    async arrayBuffer() {
        return consume(this, "arrayBuffer");
    }
    async formData() {
        throw new NotSupportedError();
    }
    get bodyUsed() {
        return util2.isDisturbed(this);
    }
    get body() {
        if (!this[kBody]) {
            this[kBody] = ReadableStreamFrom(this);
            if (this[kConsume]) {
                this[kBody].getReader();
                assert4(this[kBody].locked);
            }
        }
        return this[kBody];
    }
    dump(opts) {
        let limit = opts && Number.isFinite(opts.limit) ? opts.limit : 262144;
        const signal = opts && opts.signal;
        if (signal) {
            try {
                if (typeof signal !== "object" || !("aborted" in signal)) {
                    throw new InvalidArgumentError3("signal must be an AbortSignal");
                }
                util2.throwIfAborted(signal);
            } catch (err) {
                return Promise.reject(err);
            }
        }
        if (this.closed) {
            return Promise.resolve(null);
        }
        return new Promise((resolve36, reject2)=>{
            const signalListenerCleanup = signal ? util2.addAbortListener(signal, ()=>{
                this.destroy();
            }) : noop5;
            this.on("close", function() {
                signalListenerCleanup();
                if (signal && signal.aborted) {
                    reject2(signal.reason || Object.assign(new Error("The operation was aborted"), {
                        name: "AbortError"
                    }));
                } else {
                    resolve36(null);
                }
            }).on("error", noop5).on("data", function(chunk) {
                limit -= chunk.length;
                if (limit <= 0) {
                    this.destroy();
                }
            }).resume();
        });
    }
};
function isLocked(self2) {
    return self2[kBody] && self2[kBody].locked === true || self2[kConsume];
}
function isUnusable(self2) {
    return util2.isDisturbed(self2) || isLocked(self2);
}
async function consume(stream3, type2) {
    if (isUnusable(stream3)) {
        throw new TypeError("unusable");
    }
    assert4(!stream3[kConsume]);
    return new Promise((resolve36, reject2)=>{
        stream3[kConsume] = {
            type: type2,
            stream: stream3,
            resolve: resolve36,
            reject: reject2,
            length: 0,
            body: []
        };
        stream3.on("error", function(err) {
            consumeFinish(this[kConsume], err);
        }).on("close", function() {
            if (this[kConsume].body !== null) {
                consumeFinish(this[kConsume], new RequestAbortedError());
            }
        });
        process.nextTick(consumeStart, stream3[kConsume]);
    });
}
function consumeStart(consume2) {
    if (consume2.body === null) {
        return;
    }
    const { _readableState: state } = consume2.stream;
    for (const chunk of state.buffer){
        consumePush(consume2, chunk);
    }
    if (state.endEmitted) {
        consumeEnd(this[kConsume]);
    } else {
        consume2.stream.on("end", function() {
            consumeEnd(this[kConsume]);
        });
    }
    consume2.stream.resume();
    while(consume2.stream.read() != null){}
}
function consumeEnd(consume2) {
    const { type: type2, body, resolve: resolve36, stream: stream3, length } = consume2;
    try {
        if (type2 === "text") {
            resolve36(toUSVString(Buffer.concat(body)));
        } else if (type2 === "json") {
            resolve36(JSON.parse(Buffer.concat(body)));
        } else if (type2 === "arrayBuffer") {
            const dst = new Uint8Array(length);
            let pos = 0;
            for (const buf of body){
                dst.set(buf, pos);
                pos += buf.byteLength;
            }
            resolve36(dst.buffer);
        } else if (type2 === "blob") {
            if (!Blob2) {
                Blob2 = require("buffer").Blob;
            }
            resolve36(new Blob2(body, {
                type: stream3[kContentType]
            }));
        }
        consumeFinish(consume2);
    } catch (err) {
        stream3.destroy(err);
    }
}
function consumePush(consume2, chunk) {
    consume2.length += chunk.length;
    consume2.body.push(chunk);
}
function consumeFinish(consume2, err) {
    if (consume2.body === null) {
        return;
    }
    if (err) {
        consume2.reject(err);
    } else {
        consume2.resolve();
    }
    consume2.type = null;
    consume2.stream = null;
    consume2.resolve = null;
    consume2.reject = null;
    consume2.length = 0;
    consume2.body = null;
}

return module2.exports;
}
