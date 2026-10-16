import { require_Deferred } from "./Deferred.js";
import { require_EndOfFileStream } from "./EndOfFileStream.js";
var __wakaru_require_StreamReader_cache;
export function require_StreamReader() {
if (__wakaru_require_StreamReader_cache) return __wakaru_require_StreamReader_cache;
var exports2 = {};
__wakaru_require_StreamReader_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.StreamReader = exports2.EndOfStreamError = void 0;
var EndOfFileStream_1 = require_EndOfFileStream();
var Deferred_1 = require_Deferred();
var EndOfFileStream_2 = require_EndOfFileStream();
Object.defineProperty(exports2, "EndOfStreamError", {
    enumerable: true,
    get: function() {
        return EndOfFileStream_2.EndOfStreamError;
    }
});
var maxStreamReadSize = 1 * 1024 * 1024;
var StreamReader = class {
    constructor(s3){
        this.s = s3;
        this.deferred = null;
        this.endOfStream = false;
        this.peekQueue = [];
        if (!s3.read || !s3.once) {
            throw new Error("Expected an instance of stream.Readable");
        }
        this.s.once("end", ()=>this.reject(new EndOfFileStream_1.EndOfStreamError()));
        this.s.once("error", (err)=>this.reject(err));
        this.s.once("close", ()=>this.reject(new Error("Stream closed")));
    }
    async peek(uint8Array, offset, length) {
        const bytesRead = await this.read(uint8Array, offset, length);
        this.peekQueue.push(uint8Array.subarray(offset, offset + bytesRead));
        return bytesRead;
    }
    async read(buffer, offset, length) {
        if (length === 0) {
            return 0;
        }
        if (this.peekQueue.length === 0 && this.endOfStream) {
            throw new EndOfFileStream_1.EndOfStreamError();
        }
        let remaining = length;
        let bytesRead = 0;
        while(this.peekQueue.length > 0 && remaining > 0){
            const peekData = this.peekQueue.pop();
            if (!peekData) throw new Error("peekData should be defined");
            const lenCopy = Math.min(peekData.length, remaining);
            buffer.set(peekData.subarray(0, lenCopy), offset + bytesRead);
            bytesRead += lenCopy;
            remaining -= lenCopy;
            if (lenCopy < peekData.length) {
                this.peekQueue.push(peekData.subarray(lenCopy));
            }
        }
        while(remaining > 0 && !this.endOfStream){
            const reqLen = Math.min(remaining, maxStreamReadSize);
            const chunkLen = await this.readFromStream(buffer, offset + bytesRead, reqLen);
            bytesRead += chunkLen;
            if (chunkLen < reqLen) break;
            remaining -= chunkLen;
        }
        return bytesRead;
    }
    async readFromStream(buffer, offset, length) {
        const readBuffer = this.s.read(length);
        if (readBuffer) {
            buffer.set(readBuffer, offset);
            return readBuffer.length;
        } else {
            const request3 = {
                buffer,
                offset,
                length,
                deferred: new Deferred_1.Deferred()
            };
            this.deferred = request3.deferred;
            this.s.once("readable", ()=>{
                this.readDeferred(request3);
            });
            return request3.deferred.promise;
        }
    }
    readDeferred(request3) {
        const readBuffer = this.s.read(request3.length);
        if (readBuffer) {
            request3.buffer.set(readBuffer, request3.offset);
            request3.deferred.resolve(readBuffer.length);
            this.deferred = null;
        } else {
            this.s.once("readable", ()=>{
                this.readDeferred(request3);
            });
        }
    }
    reject(err) {
        this.endOfStream = true;
        if (this.deferred) {
            this.deferred.reject(err);
            this.deferred = null;
        }
    }
};
exports2.StreamReader = StreamReader;

return exports2;
}
