import { require_code } from "../code.js";
import { require_connect_error } from "../connect-error.js";
import { require_compression } from "./compression.js";
import { require_limit_io } from "./limit-io.js";
var __wakaru_require_envelope_cache;
export function require_envelope() {
if (__wakaru_require_envelope_cache) return __wakaru_require_envelope_cache;
var exports2 = {};
__wakaru_require_envelope_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.createEnvelopeReadableStream = createEnvelopeReadableStream;
exports2.createEnvelopeDecoder = createEnvelopeDecoder2;
exports2.envelopeCompress = envelopeCompress2;
exports2.envelopeDecompress = envelopeDecompress2;
exports2.encodeEnvelope = encodeEnvelope2;
exports2.encodeEnvelopes = encodeEnvelopes;
var connect_error_js_1 = require_connect_error();
var code_js_1 = require_code();
var compression_js_1 = require_compression();
var limit_io_js_1 = require_limit_io();
function createEnvelopeDecoder2(readMaxBytes) {
    return new EnvelopeDecoderImpl2(readMaxBytes);
}
var EnvelopeDecoderImpl2 = class {
    constructor(readMaxBytes){
        this.readMaxBytes = readMaxBytes;
        this.header = new Uint8Array(5);
        this.headerView = new DataView(this.header.buffer);
        this.buf = [];
    }
    get byteLength() {
        return this.buf.reduce((a, b2)=>a + b2.byteLength, 0);
    }
    decode(chunk) {
        this.buf.push(chunk);
        const envs = [];
        for(;;){
            let env = this.pop();
            if (!env) {
                break;
            }
            envs.push(env);
        }
        return envs;
    }
    pop() {
        if (!this.env) {
            this.env = this.head();
            if (!this.env) {
                return void 0;
            }
        }
        if (this.cons(this.env.data)) {
            const env = this.env;
            this.env = void 0;
            return env;
        }
        return void 0;
    }
    head() {
        if (!this.cons(this.header)) {
            return void 0;
        }
        const flags = this.headerView.getUint8(0);
        const length = this.headerView.getUint32(1);
        (0, limit_io_js_1.assertReadMaxBytes)(this.readMaxBytes, length, true);
        return {
            flags,
            data: new Uint8Array(length)
        };
    }
    cons(target) {
        const wantLength = target.byteLength;
        if (this.byteLength < wantLength) {
            return false;
        }
        let offset = 0;
        while(offset < wantLength){
            const chunk = this.buf.shift();
            if (chunk.byteLength > wantLength - offset) {
                target.set(chunk.subarray(0, wantLength - offset), offset);
                this.buf.unshift(chunk.subarray(wantLength - offset));
                offset += wantLength - offset;
            } else {
                target.set(chunk, offset);
                offset += chunk.byteLength;
            }
        }
        return true;
    }
};
function createEnvelopeReadableStream(stream3) {
    let reader;
    const buffer = createEnvelopeDecoder2(4294967295);
    return new ReadableStream({
        start () {
            reader = stream3.getReader();
        },
        async pull (controller) {
            let enqueuedOnce = false;
            while(!enqueuedOnce){
                const result = await reader.read();
                if (result.done) {
                    if (buffer.byteLength > 0) {
                        controller.error(new connect_error_js_1.ConnectError("protocol error: incomplete envelope", code_js_1.Code.InvalidArgument));
                    }
                    controller.close();
                } else {
                    for (const env of buffer.decode(result.value)){
                        controller.enqueue(env);
                        enqueuedOnce = true;
                    }
                }
            }
        }
    });
}
async function envelopeCompress2(envelope, compression, compressMinBytes) {
    let { flags, data } = envelope;
    if ((flags & compression_js_1.compressedFlag) === compression_js_1.compressedFlag) {
        throw new connect_error_js_1.ConnectError("invalid envelope, already compressed", code_js_1.Code.Internal);
    }
    if (compression && data.byteLength >= compressMinBytes) {
        data = await compression.compress(data);
        flags = flags | compression_js_1.compressedFlag;
    }
    return {
        data,
        flags
    };
}
async function envelopeDecompress2(envelope, compression, readMaxBytes) {
    let { flags, data } = envelope;
    if ((flags & compression_js_1.compressedFlag) === compression_js_1.compressedFlag) {
        if (!compression) {
            throw new connect_error_js_1.ConnectError("received compressed envelope, but do not know how to decompress", code_js_1.Code.Internal);
        }
        data = await compression.decompress(data, readMaxBytes);
        flags = flags ^ compression_js_1.compressedFlag;
    }
    return {
        data,
        flags
    };
}
function encodeEnvelope2(flags, data) {
    const bytes = new Uint8Array(data.length + 5);
    bytes.set(data, 5);
    const v2 = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
    v2.setUint8(0, flags);
    v2.setUint32(1, data.length);
    return bytes;
}
function encodeEnvelopes(...envelopes) {
    const len = envelopes.reduce((previousValue, currentValue)=>previousValue + currentValue.data.length + 5, 0);
    const bytes = new Uint8Array(len);
    const v2 = new DataView(bytes.buffer);
    let offset = 0;
    for (const e of envelopes){
        v2.setUint8(offset, e.flags);
        v2.setUint32(offset + 1, e.data.length);
        bytes.set(e.data, offset + 5);
        offset += e.data.length + 5;
    }
    return bytes;
}

return exports2;
}
