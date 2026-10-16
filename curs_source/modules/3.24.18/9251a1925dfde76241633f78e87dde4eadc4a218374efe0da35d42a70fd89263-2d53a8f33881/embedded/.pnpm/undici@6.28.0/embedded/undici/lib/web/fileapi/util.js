import { require_data_url } from "../fetch/data-url.js";
import { require_encoding2 } from "./encoding.js";
import { require_progressevent2 } from "./progressevent.js";
import { require_symbols8 } from "./symbols.js";
var __wakaru_require_util11_cache;
export function require_util11() {
if (__wakaru_require_util11_cache) return __wakaru_require_util11_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_util11_cache = module2;
"use strict";
var { kState, kError, kResult, kAborted, kLastProgressEventFired } = require_symbols8();
var { ProgressEvent } = require_progressevent2();
var { getEncoding } = require_encoding2();
var { serializeAMimeType, parseMIMEType } = require_data_url();
var { types: types3 } = require("node:util");
var { StringDecoder } = require("string_decoder");
var { btoa: btoa3 } = require("node:buffer");
var staticPropertyDescriptors = {
    enumerable: true,
    writable: false,
    configurable: false
};
function readOperation(fr2, blob, type2, encodingName) {
    if (fr2[kState] === "loading") {
        throw new DOMException("Invalid state", "InvalidStateError");
    }
    fr2[kState] = "loading";
    fr2[kResult] = null;
    fr2[kError] = null;
    const stream3 = blob.stream();
    const reader = stream3.getReader();
    const bytes = [];
    let chunkPromise = reader.read();
    let isFirstChunk = true;
    (async ()=>{
        while(!fr2[kAborted]){
            try {
                const { done, value } = await chunkPromise;
                if (isFirstChunk && !fr2[kAborted]) {
                    queueMicrotask(()=>{
                        fireAProgressEvent("loadstart", fr2);
                    });
                }
                isFirstChunk = false;
                if (!done && types3.isUint8Array(value)) {
                    bytes.push(value);
                    if ((fr2[kLastProgressEventFired] === void 0 || Date.now() - fr2[kLastProgressEventFired] >= 50) && !fr2[kAborted]) {
                        fr2[kLastProgressEventFired] = Date.now();
                        queueMicrotask(()=>{
                            fireAProgressEvent("progress", fr2);
                        });
                    }
                    chunkPromise = reader.read();
                } else if (done) {
                    queueMicrotask(()=>{
                        fr2[kState] = "done";
                        try {
                            const result = packageData(bytes, type2, blob.type, encodingName);
                            if (fr2[kAborted]) {
                                return;
                            }
                            fr2[kResult] = result;
                            fireAProgressEvent("load", fr2);
                        } catch (error3) {
                            fr2[kError] = error3;
                            fireAProgressEvent("error", fr2);
                        }
                        if (fr2[kState] !== "loading") {
                            fireAProgressEvent("loadend", fr2);
                        }
                    });
                    break;
                }
            } catch (error3) {
                if (fr2[kAborted]) {
                    return;
                }
                queueMicrotask(()=>{
                    fr2[kState] = "done";
                    fr2[kError] = error3;
                    fireAProgressEvent("error", fr2);
                    if (fr2[kState] !== "loading") {
                        fireAProgressEvent("loadend", fr2);
                    }
                });
                break;
            }
        }
    })();
}
function fireAProgressEvent(e, reader) {
    const event = new ProgressEvent(e, {
        bubbles: false,
        cancelable: false
    });
    reader.dispatchEvent(event);
}
function packageData(bytes, type2, mimeType, encodingName) {
    switch(type2){
        case "DataURL":
            {
                let dataURL = "data:";
                const parsed = parseMIMEType(mimeType || "application/octet-stream");
                if (parsed !== "failure") {
                    dataURL += serializeAMimeType(parsed);
                }
                dataURL += ";base64,";
                const decoder2 = new StringDecoder("latin1");
                for (const chunk of bytes){
                    dataURL += btoa3(decoder2.write(chunk));
                }
                dataURL += btoa3(decoder2.end());
                return dataURL;
            }
        case "Text":
            {
                let encoding = "failure";
                if (encodingName) {
                    encoding = getEncoding(encodingName);
                }
                if (encoding === "failure" && mimeType) {
                    const type3 = parseMIMEType(mimeType);
                    if (type3 !== "failure") {
                        encoding = getEncoding(type3.parameters.get("charset"));
                    }
                }
                if (encoding === "failure") {
                    encoding = "UTF-8";
                }
                return decode4(bytes, encoding);
            }
        case "ArrayBuffer":
            {
                const sequence = combineByteSequences(bytes);
                return sequence.buffer;
            }
        case "BinaryString":
            {
                let binaryString = "";
                const decoder2 = new StringDecoder("latin1");
                for (const chunk of bytes){
                    binaryString += decoder2.write(chunk);
                }
                binaryString += decoder2.end();
                return binaryString;
            }
    }
}
function decode4(ioQueue, encoding) {
    const bytes = combineByteSequences(ioQueue);
    const BOMEncoding = BOMSniffing(bytes);
    let slice = 0;
    if (BOMEncoding !== null) {
        encoding = BOMEncoding;
        slice = BOMEncoding === "UTF-8" ? 3 : 2;
    }
    const sliced = bytes.slice(slice);
    return new TextDecoder(encoding).decode(sliced);
}
function BOMSniffing(ioQueue) {
    const [a, b2, c] = ioQueue;
    if (a === 239 && b2 === 187 && c === 191) {
        return "UTF-8";
    } else if (a === 254 && b2 === 255) {
        return "UTF-16BE";
    } else if (a === 255 && b2 === 254) {
        return "UTF-16LE";
    }
    return null;
}
function combineByteSequences(sequences) {
    const size = sequences.reduce((a, b2)=>{
        return a + b2.byteLength;
    }, 0);
    let offset = 0;
    return sequences.reduce((a, b2)=>{
        a.set(b2, offset);
        offset += b2.byteLength;
        return a;
    }, new Uint8Array(size));
}
module2.exports = {
    staticPropertyDescriptors,
    readOperation,
    fireAProgressEvent
};

return module2.exports;
}
