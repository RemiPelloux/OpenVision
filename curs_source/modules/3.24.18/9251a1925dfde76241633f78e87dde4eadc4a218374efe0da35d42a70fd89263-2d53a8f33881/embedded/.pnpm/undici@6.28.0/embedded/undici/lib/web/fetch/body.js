import { require_util8 } from "../../core/util.js";
import { require_data_url } from "./data-url.js";
import { require_formdata_parser } from "./formdata-parser.js";
import { require_formdata2 } from "./formdata.js";
import { require_symbols7 } from "./symbols.js";
import { require_util9 } from "./util.js";
import { require_webidl2 } from "./webidl.js";
var __wakaru_require_body2_cache;
export function require_body2() {
if (__wakaru_require_body2_cache) return __wakaru_require_body2_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_body2_cache = module2;
"use strict";
var util2 = require_util8();
var { ReadableStreamFrom, isBlobLike, isReadableStreamLike, readableStreamClose, createDeferredPromise, fullyReadBody, extractMimeType, utf8DecodeBytes } = require_util9();
var { FormData: FormData2 } = require_formdata2();
var { kState } = require_symbols7();
var { webidl } = require_webidl2();
var { Blob: Blob2 } = require("node:buffer");
var assert4 = require("node:assert");
var { isErrored, isDisturbed } = require("node:stream");
var { isArrayBuffer } = require("node:util/types");
var { serializeAMimeType } = require_data_url();
var { multipartFormDataParser } = require_formdata_parser();
var random2;
try {
    const crypto8 = require("node:crypto");
    random2 = (max)=>crypto8.randomInt(0, max);
} catch  {
    random2 = (max)=>Math.floor(Math.random(max));
}
var textEncoder2 = new TextEncoder();
function noop5() {}
var hasFinalizationRegistry = globalThis.FinalizationRegistry && process.version.indexOf("v18") !== 0;
var streamRegistry;
if (hasFinalizationRegistry) {
    streamRegistry = new FinalizationRegistry((weakRef)=>{
        const stream3 = weakRef.deref();
        if (stream3 && !stream3.locked && !isDisturbed(stream3) && !isErrored(stream3)) {
            stream3.cancel("Response object has been garbage collected").catch(noop5);
        }
    });
}
function extractBody(object4, keepalive = false) {
    let stream3 = null;
    if (object4 instanceof ReadableStream) {
        stream3 = object4;
    } else if (isBlobLike(object4)) {
        stream3 = object4.stream();
    } else {
        stream3 = new ReadableStream({
            async pull (controller) {
                const buffer = typeof source === "string" ? textEncoder2.encode(source) : source;
                if (buffer.byteLength) {
                    controller.enqueue(buffer);
                }
                queueMicrotask(()=>readableStreamClose(controller));
            },
            start () {},
            type: "bytes"
        });
    }
    assert4(isReadableStreamLike(stream3));
    let action = null;
    let source = null;
    let length = null;
    let type2 = null;
    if (typeof object4 === "string") {
        source = object4;
        type2 = "text/plain;charset=UTF-8";
    } else if (object4 instanceof URLSearchParams) {
        source = object4.toString();
        type2 = "application/x-www-form-urlencoded;charset=UTF-8";
    } else if (isArrayBuffer(object4)) {
        source = new Uint8Array(object4.slice());
    } else if (ArrayBuffer.isView(object4)) {
        source = new Uint8Array(object4.buffer.slice(object4.byteOffset, object4.byteOffset + object4.byteLength));
    } else if (util2.isFormDataLike(object4)) {
        const boundary = `----formdata-undici-0${`${random2(1e11)}`.padStart(11, "0")}`;
        const prefix = `--${boundary}\r
Content-Disposition: form-data`;
        const escape3 = (str3)=>str3.replace(/\n/g, "%0A").replace(/\r/g, "%0D").replace(/"/g, "%22");
        const normalizeLinefeeds = (value)=>value.replace(/\r?\n|\r/g, "\r\n");
        const blobParts = [];
        const rn2 = new Uint8Array([
            13,
            10
        ]);
        length = 0;
        let hasUnknownSizeValue = false;
        for (const [name17, value] of object4){
            if (typeof value === "string") {
                const chunk2 = textEncoder2.encode(prefix + `; name="${escape3(normalizeLinefeeds(name17))}"\r
\r
${normalizeLinefeeds(value)}\r
`);
                blobParts.push(chunk2);
                length += chunk2.byteLength;
            } else {
                const chunk2 = textEncoder2.encode(`${prefix}; name="${escape3(normalizeLinefeeds(name17))}"` + (value.name ? `; filename="${escape3(value.name)}"` : "") + `\r
Content-Type: ${value.type || "application/octet-stream"}\r
\r
`);
                blobParts.push(chunk2, value, rn2);
                if (typeof value.size === "number") {
                    length += chunk2.byteLength + value.size + rn2.byteLength;
                } else {
                    hasUnknownSizeValue = true;
                }
            }
        }
        const chunk = textEncoder2.encode(`--${boundary}--\r
`);
        blobParts.push(chunk);
        length += chunk.byteLength;
        if (hasUnknownSizeValue) {
            length = null;
        }
        source = object4;
        action = async function*() {
            for (const part of blobParts){
                if (part.stream) {
                    yield* part.stream();
                } else {
                    yield part;
                }
            }
        };
        type2 = `multipart/form-data; boundary=${boundary}`;
    } else if (isBlobLike(object4)) {
        source = object4;
        length = object4.size;
        if (object4.type) {
            type2 = object4.type;
        }
    } else if (typeof object4[Symbol.asyncIterator] === "function") {
        if (keepalive) {
            throw new TypeError("keepalive");
        }
        if (util2.isDisturbed(object4) || object4.locked) {
            throw new TypeError("Response body object should not be disturbed or locked");
        }
        stream3 = object4 instanceof ReadableStream ? object4 : ReadableStreamFrom(object4);
    }
    if (typeof source === "string" || util2.isBuffer(source)) {
        length = Buffer.byteLength(source);
    }
    if (action != null) {
        let iterator;
        stream3 = new ReadableStream({
            async start () {
                iterator = action(object4)[Symbol.asyncIterator]();
            },
            async pull (controller) {
                const { value, done } = await iterator.next();
                if (done) {
                    queueMicrotask(()=>{
                        controller.close();
                        controller.byobRequest?.respond(0);
                    });
                } else {
                    if (!isErrored(stream3)) {
                        const buffer = new Uint8Array(value);
                        if (buffer.byteLength) {
                            controller.enqueue(buffer);
                        }
                    }
                }
                return controller.desiredSize > 0;
            },
            async cancel (reason) {
                await iterator.return();
            },
            type: "bytes"
        });
    }
    const body = {
        stream: stream3,
        source,
        length
    };
    return [
        body,
        type2
    ];
}
function safelyExtractBody(object4, keepalive = false) {
    if (object4 instanceof ReadableStream) {
        assert4(!util2.isDisturbed(object4), "The body has already been consumed.");
        assert4(!object4.locked, "The stream is locked.");
    }
    return extractBody(object4, keepalive);
}
function cloneBody(instance, body) {
    const [out1, out2] = body.stream.tee();
    body.stream = out1;
    return {
        stream: out2,
        length: body.length,
        source: body.source
    };
}
function throwIfAborted2(state) {
    if (state.aborted) {
        throw new DOMException("The operation was aborted.", "AbortError");
    }
}
function bodyMixinMethods(instance) {
    const methods2 = {
        blob () {
            return consumeBody(this, (bytes)=>{
                let mimeType = bodyMimeType(this);
                if (mimeType === null) {
                    mimeType = "";
                } else if (mimeType) {
                    mimeType = serializeAMimeType(mimeType);
                }
                return new Blob2([
                    bytes
                ], {
                    type: mimeType
                });
            }, instance);
        },
        arrayBuffer () {
            return consumeBody(this, (bytes)=>{
                return new Uint8Array(bytes).buffer;
            }, instance);
        },
        text () {
            return consumeBody(this, utf8DecodeBytes, instance);
        },
        json () {
            return consumeBody(this, parseJSONFromBytes, instance);
        },
        formData () {
            return consumeBody(this, (value)=>{
                const mimeType = bodyMimeType(this);
                if (mimeType !== null) {
                    switch(mimeType.essence){
                        case "multipart/form-data":
                            {
                                const parsed = multipartFormDataParser(value, mimeType);
                                if (parsed === "failure") {
                                    throw new TypeError("Failed to parse body as FormData.");
                                }
                                const fd = new FormData2();
                                fd[kState] = parsed;
                                return fd;
                            }
                        case "application/x-www-form-urlencoded":
                            {
                                const entries = new URLSearchParams(value.toString());
                                const fd = new FormData2();
                                for (const [name17, value2] of entries){
                                    fd.append(name17, value2);
                                }
                                return fd;
                            }
                    }
                }
                throw new TypeError('Content-Type was not one of "multipart/form-data" or "application/x-www-form-urlencoded".');
            }, instance);
        },
        bytes () {
            return consumeBody(this, (bytes)=>{
                return new Uint8Array(bytes);
            }, instance);
        }
    };
    return methods2;
}
function mixinBody(prototype) {
    Object.assign(prototype.prototype, bodyMixinMethods(prototype));
}
async function consumeBody(object4, convertBytesToJSValue, instance) {
    webidl.brandCheck(object4, instance);
    if (bodyUnusable(object4)) {
        throw new TypeError("Body is unusable: Body has already been read");
    }
    throwIfAborted2(object4[kState]);
    const promise = createDeferredPromise();
    const errorSteps = (error3)=>promise.reject(error3);
    const successSteps = (data)=>{
        try {
            promise.resolve(convertBytesToJSValue(data));
        } catch (e) {
            errorSteps(e);
        }
    };
    if (object4[kState].body == null) {
        successSteps(Buffer.allocUnsafe(0));
        return promise.promise;
    }
    await fullyReadBody(object4[kState].body, successSteps, errorSteps);
    return promise.promise;
}
function bodyUnusable(object4) {
    const body = object4[kState].body;
    return body != null && (body.stream.locked || util2.isDisturbed(body.stream));
}
function parseJSONFromBytes(bytes) {
    return JSON.parse(utf8DecodeBytes(bytes));
}
function bodyMimeType(requestOrResponse) {
    const headers = requestOrResponse[kState].headersList;
    const mimeType = extractMimeType(headers);
    if (mimeType === "failure") {
        return null;
    }
    return mimeType;
}
module2.exports = {
    extractBody,
    safelyExtractBody,
    cloneBody,
    mixinBody,
    streamRegistry,
    hasFinalizationRegistry,
    bodyUnusable
};

return module2.exports;
}
