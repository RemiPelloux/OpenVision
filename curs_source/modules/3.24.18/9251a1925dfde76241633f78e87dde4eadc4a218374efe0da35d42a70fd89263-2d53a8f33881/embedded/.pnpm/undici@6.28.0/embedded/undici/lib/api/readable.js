import { require_errors2 } from "../core/errors.js";
import { require_util8 } from "../core/util.js";
var __wakaru_require_readable2_cache;
export function require_readable2() {
if (__wakaru_require_readable2_cache) return __wakaru_require_readable2_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_readable2_cache = module2;
"use strict";
var assert4 = require("node:assert");
var { Readable: Readable2 } = require("node:stream");
var { RequestAbortedError, NotSupportedError, InvalidArgumentError: InvalidArgumentError3, AbortError } = require_errors2();
var util2 = require_util8();
var { ReadableStreamFrom } = require_util8();
var kConsume = Symbol("kConsume");
var kReading = Symbol("kReading");
var kBody = Symbol("kBody");
var kAbort = Symbol("kAbort");
var kContentType = Symbol("kContentType");
var kContentLength = Symbol("kContentLength");
var noop5 = ()=>{};
var BodyReadable = class extends Readable2 {
    constructor({ resume, abort, contentType = "", contentLength, highWaterMark = 64 * 1024 }){
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
        this[kContentLength] = contentLength;
        this[kReading] = false;
    }
    destroy(err) {
        if (!err && !this._readableState.endEmitted) {
            err = new RequestAbortedError();
        }
        if (err) {
            this[kAbort]();
        }
        return super.destroy(err);
    }
    _destroy(err, callback) {
        if (!this[kReading]) {
            setImmediate(()=>{
                callback(err);
            });
        } else {
            callback(err);
        }
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
        if (this[kConsume] && chunk !== null) {
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
    async bytes() {
        return consume(this, "bytes");
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
    async dump(opts) {
        let limit = Number.isFinite(opts?.limit) ? opts.limit : 128 * 1024;
        const signal = opts?.signal;
        if (signal != null && (typeof signal !== "object" || !("aborted" in signal))) {
            throw new InvalidArgumentError3("signal must be an AbortSignal");
        }
        signal?.throwIfAborted();
        if (this._readableState.closeEmitted) {
            return null;
        }
        return await new Promise((resolve36, reject2)=>{
            if (this[kContentLength] > limit) {
                this.destroy(new AbortError());
            }
            const onAbort = ()=>{
                this.destroy(signal.reason ?? new AbortError());
            };
            signal?.addEventListener("abort", onAbort);
            this.on("close", function() {
                signal?.removeEventListener("abort", onAbort);
                if (signal?.aborted) {
                    reject2(signal.reason ?? new AbortError());
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
    assert4(!stream3[kConsume]);
    return new Promise((resolve36, reject2)=>{
        if (isUnusable(stream3)) {
            const rState = stream3._readableState;
            if (rState.destroyed && rState.closeEmitted === false) {
                stream3.on("error", (err)=>{
                    reject2(err);
                }).on("close", ()=>{
                    reject2(new TypeError("unusable"));
                });
            } else {
                reject2(rState.errored ?? new TypeError("unusable"));
            }
        } else {
            queueMicrotask(()=>{
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
                consumeStart(stream3[kConsume]);
            });
        }
    });
}
function consumeStart(consume2) {
    if (consume2.body === null) {
        return;
    }
    const { _readableState: state } = consume2.stream;
    if (state.bufferIndex) {
        const start = state.bufferIndex;
        const end = state.buffer.length;
        for(let n = start; n < end; n++){
            consumePush(consume2, state.buffer[n]);
        }
    } else {
        for (const chunk of state.buffer){
            consumePush(consume2, chunk);
        }
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
function chunksDecode(chunks, length) {
    if (chunks.length === 0 || length === 0) {
        return "";
    }
    const buffer = chunks.length === 1 ? chunks[0] : Buffer.concat(chunks, length);
    const bufferLength = buffer.length;
    const start = bufferLength > 2 && buffer[0] === 239 && buffer[1] === 187 && buffer[2] === 191 ? 3 : 0;
    return buffer.utf8Slice(start, bufferLength);
}
function chunksConcat(chunks, length) {
    if (chunks.length === 0 || length === 0) {
        return new Uint8Array(0);
    }
    if (chunks.length === 1) {
        return new Uint8Array(chunks[0]);
    }
    const buffer = new Uint8Array(Buffer.allocUnsafeSlow(length).buffer);
    let offset = 0;
    for(let i = 0; i < chunks.length; ++i){
        const chunk = chunks[i];
        buffer.set(chunk, offset);
        offset += chunk.length;
    }
    return buffer;
}
function consumeEnd(consume2) {
    const { type: type2, body, resolve: resolve36, stream: stream3, length } = consume2;
    try {
        if (type2 === "text") {
            resolve36(chunksDecode(body, length));
        } else if (type2 === "json") {
            resolve36(JSON.parse(chunksDecode(body, length)));
        } else if (type2 === "arrayBuffer") {
            resolve36(chunksConcat(body, length).buffer);
        } else if (type2 === "blob") {
            resolve36(new Blob(body, {
                type: stream3[kContentType]
            }));
        } else if (type2 === "bytes") {
            resolve36(chunksConcat(body, length));
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
module2.exports = {
    Readable: BodyReadable,
    chunksDecode
};

return module2.exports;
}
