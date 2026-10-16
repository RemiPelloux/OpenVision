import { require_main } from "../../../../../@fastify+busboy@2.1.1/node_modules/@fastify/busboy/lib/main.js";
import { require_symbols } from "../core/symbols.js";
import { require_util } from "../core/util.js";
import { require_constants3 } from "./constants.js";
import { require_dataURL } from "./dataURL.js";
import { require_file } from "./file.js";
import { require_formdata } from "./formdata.js";
import { require_symbols2 } from "./symbols.js";
import { require_util2 } from "./util.js";
import { require_webidl } from "./webidl.js";
var __wakaru_require_body_cache;
export function require_body() {
if (__wakaru_require_body_cache) return __wakaru_require_body_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_body_cache = module2;
"use strict";
var Busboy = require_main();
var util2 = require_util();
var { ReadableStreamFrom, isBlobLike, isReadableStreamLike, readableStreamClose, createDeferredPromise, fullyReadBody } = require_util2();
var { FormData: FormData2 } = require_formdata();
var { kState } = require_symbols2();
var { webidl } = require_webidl();
var { DOMException: DOMException2, structuredClone: structuredClone2 } = require_constants3();
var { Blob: Blob2, File: NativeFile } = require("buffer");
var { kBodyUsed } = require_symbols();
var assert4 = require("assert");
var { isErrored } = require_util();
var { isUint8Array, isArrayBuffer } = require("util/types");
var { File: UndiciFile } = require_file();
var { parseMIMEType, serializeAMimeType } = require_dataURL();
var random2;
try {
    const crypto8 = require("node:crypto");
    random2 = (max)=>crypto8.randomInt(0, max);
} catch  {
    random2 = (max)=>Math.floor(Math.random(max));
}
var ReadableStream2 = globalThis.ReadableStream;
var File3 = NativeFile ?? UndiciFile;
var textEncoder2 = new TextEncoder();
var textDecoder3 = new TextDecoder();
function extractBody(object4, keepalive = false) {
    if (!ReadableStream2) {
        ReadableStream2 = require("stream/web").ReadableStream;
    }
    let stream3 = null;
    if (object4 instanceof ReadableStream2) {
        stream3 = object4;
    } else if (isBlobLike(object4)) {
        stream3 = object4.stream();
    } else {
        stream3 = new ReadableStream2({
            async pull (controller) {
                controller.enqueue(typeof source === "string" ? textEncoder2.encode(source) : source);
                queueMicrotask(()=>readableStreamClose(controller));
            },
            start () {},
            type: void 0
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
        const chunk = textEncoder2.encode(`--${boundary}--`);
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
        type2 = "multipart/form-data; boundary=" + boundary;
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
        stream3 = object4 instanceof ReadableStream2 ? object4 : ReadableStreamFrom(object4);
    }
    if (typeof source === "string" || util2.isBuffer(source)) {
        length = Buffer.byteLength(source);
    }
    if (action != null) {
        let iterator;
        stream3 = new ReadableStream2({
            async start () {
                iterator = action(object4)[Symbol.asyncIterator]();
            },
            async pull (controller) {
                const { value, done } = await iterator.next();
                if (done) {
                    queueMicrotask(()=>{
                        controller.close();
                    });
                } else {
                    if (!isErrored(stream3)) {
                        controller.enqueue(new Uint8Array(value));
                    }
                }
                return controller.desiredSize > 0;
            },
            async cancel (reason) {
                await iterator.return();
            },
            type: void 0
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
    if (!ReadableStream2) {
        ReadableStream2 = require("stream/web").ReadableStream;
    }
    if (object4 instanceof ReadableStream2) {
        assert4(!util2.isDisturbed(object4), "The body has already been consumed.");
        assert4(!object4.locked, "The stream is locked.");
    }
    return extractBody(object4, keepalive);
}
function cloneBody(body) {
    const [out1, out2] = body.stream.tee();
    const out2Clone = structuredClone2(out2, {
        transfer: [
            out2
        ]
    });
    const [, finalClone] = out2Clone.tee();
    body.stream = out1;
    return {
        stream: finalClone,
        length: body.length,
        source: body.source
    };
}
async function* consumeBody(body) {
    if (body) {
        if (isUint8Array(body)) {
            yield body;
        } else {
            const stream3 = body.stream;
            if (util2.isDisturbed(stream3)) {
                throw new TypeError("The body has already been consumed.");
            }
            if (stream3.locked) {
                throw new TypeError("The stream is locked.");
            }
            stream3[kBodyUsed] = true;
            yield* stream3;
        }
    }
}
function throwIfAborted2(state) {
    if (state.aborted) {
        throw new DOMException2("The operation was aborted.", "AbortError");
    }
}
function bodyMixinMethods(instance) {
    const methods2 = {
        blob () {
            return specConsumeBody(this, (bytes)=>{
                let mimeType = bodyMimeType(this);
                if (mimeType === "failure") {
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
            return specConsumeBody(this, (bytes)=>{
                return new Uint8Array(bytes).buffer;
            }, instance);
        },
        text () {
            return specConsumeBody(this, utf8DecodeBytes, instance);
        },
        json () {
            return specConsumeBody(this, parseJSONFromBytes, instance);
        },
        async formData () {
            webidl.brandCheck(this, instance);
            throwIfAborted2(this[kState]);
            const contentType = this.headers.get("Content-Type");
            if (/multipart\/form-data/.test(contentType)) {
                const headers = {};
                for (const [key, value] of this.headers)headers[key.toLowerCase()] = value;
                const responseFormData = new FormData2();
                let busboy;
                try {
                    busboy = new Busboy({
                        headers,
                        preservePath: true
                    });
                } catch (err) {
                    throw new DOMException2(`${err}`, "AbortError");
                }
                busboy.on("field", (name17, value)=>{
                    responseFormData.append(name17, value);
                });
                busboy.on("file", (name17, value, filename, encoding, mimeType)=>{
                    const chunks = [];
                    if (encoding === "base64" || encoding.toLowerCase() === "base64") {
                        let base64chunk = "";
                        value.on("data", (chunk)=>{
                            base64chunk += chunk.toString().replace(/[\r\n]/gm, "");
                            const end = base64chunk.length - base64chunk.length % 4;
                            chunks.push(Buffer.from(base64chunk.slice(0, end), "base64"));
                            base64chunk = base64chunk.slice(end);
                        });
                        value.on("end", ()=>{
                            chunks.push(Buffer.from(base64chunk, "base64"));
                            responseFormData.append(name17, new File3(chunks, filename, {
                                type: mimeType
                            }));
                        });
                    } else {
                        value.on("data", (chunk)=>{
                            chunks.push(chunk);
                        });
                        value.on("end", ()=>{
                            responseFormData.append(name17, new File3(chunks, filename, {
                                type: mimeType
                            }));
                        });
                    }
                });
                const busboyResolve = new Promise((resolve36, reject2)=>{
                    busboy.on("finish", resolve36);
                    busboy.on("error", (err)=>reject2(new TypeError(err)));
                });
                if (this.body !== null) for await (const chunk of consumeBody(this[kState].body))busboy.write(chunk);
                busboy.end();
                await busboyResolve;
                return responseFormData;
            } else if (/application\/x-www-form-urlencoded/.test(contentType)) {
                let entries;
                try {
                    let text4 = "";
                    const streamingDecoder = new TextDecoder("utf-8", {
                        ignoreBOM: true
                    });
                    for await (const chunk of consumeBody(this[kState].body)){
                        if (!isUint8Array(chunk)) {
                            throw new TypeError("Expected Uint8Array chunk");
                        }
                        text4 += streamingDecoder.decode(chunk, {
                            stream: true
                        });
                    }
                    text4 += streamingDecoder.decode();
                    entries = new URLSearchParams(text4);
                } catch (err) {
                    throw Object.assign(new TypeError(), {
                        cause: err
                    });
                }
                const formData = new FormData2();
                for (const [name17, value] of entries){
                    formData.append(name17, value);
                }
                return formData;
            } else {
                await Promise.resolve();
                throwIfAborted2(this[kState]);
                throw webidl.errors.exception({
                    header: `${instance.name}.formData`,
                    message: "Could not parse content as FormData."
                });
            }
        }
    };
    return methods2;
}
function mixinBody(prototype) {
    Object.assign(prototype.prototype, bodyMixinMethods(prototype));
}
async function specConsumeBody(object4, convertBytesToJSValue, instance) {
    webidl.brandCheck(object4, instance);
    throwIfAborted2(object4[kState]);
    if (bodyUnusable(object4[kState].body)) {
        throw new TypeError("Body is unusable");
    }
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
        successSteps(new Uint8Array());
        return promise.promise;
    }
    await fullyReadBody(object4[kState].body, successSteps, errorSteps);
    return promise.promise;
}
function bodyUnusable(body) {
    return body != null && (body.stream.locked || util2.isDisturbed(body.stream));
}
function utf8DecodeBytes(buffer) {
    if (buffer.length === 0) {
        return "";
    }
    if (buffer[0] === 239 && buffer[1] === 187 && buffer[2] === 191) {
        buffer = buffer.subarray(3);
    }
    const output = textDecoder3.decode(buffer);
    return output;
}
function parseJSONFromBytes(bytes) {
    return JSON.parse(utf8DecodeBytes(bytes));
}
function bodyMimeType(object4) {
    const { headersList } = object4[kState];
    const contentType = headersList.get("content-type");
    if (contentType === null) {
        return "failure";
    }
    return parseMIMEType(contentType);
}
module2.exports = {
    extractBody,
    safelyExtractBody,
    cloneBody,
    mixinBody
};

return module2.exports;
}
