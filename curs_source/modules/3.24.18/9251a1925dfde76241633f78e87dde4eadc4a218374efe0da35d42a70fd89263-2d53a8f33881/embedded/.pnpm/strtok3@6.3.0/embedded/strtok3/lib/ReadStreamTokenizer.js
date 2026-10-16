import { require_lib3 } from "../../../../peek-readable@4.1.0/node_modules/peek-readable/lib/index.js";
import { require_AbstractTokenizer } from "./AbstractTokenizer.js";
var __wakaru_require_ReadStreamTokenizer_cache;
export function require_ReadStreamTokenizer() {
if (__wakaru_require_ReadStreamTokenizer_cache) return __wakaru_require_ReadStreamTokenizer_cache;
var exports2 = {};
__wakaru_require_ReadStreamTokenizer_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.ReadStreamTokenizer = void 0;
var AbstractTokenizer_1 = require_AbstractTokenizer();
var peek_readable_1 = require_lib3();
var maxBufferSize = 256e3;
var ReadStreamTokenizer = class extends AbstractTokenizer_1.AbstractTokenizer {
    constructor(stream3, fileInfo){
        super(fileInfo);
        this.streamReader = new peek_readable_1.StreamReader(stream3);
    }
    async getFileInfo() {
        return this.fileInfo;
    }
    async readBuffer(uint8Array, options2) {
        const normOptions = this.normalizeOptions(uint8Array, options2);
        const skipBytes = normOptions.position - this.position;
        if (skipBytes > 0) {
            await this.ignore(skipBytes);
            return this.readBuffer(uint8Array, options2);
        } else if (skipBytes < 0) {
            throw new Error("`options.position` must be equal or greater than `tokenizer.position`");
        }
        if (normOptions.length === 0) {
            return 0;
        }
        const bytesRead = await this.streamReader.read(uint8Array, normOptions.offset, normOptions.length);
        this.position += bytesRead;
        if ((!options2 || !options2.mayBeLess) && bytesRead < normOptions.length) {
            throw new peek_readable_1.EndOfStreamError();
        }
        return bytesRead;
    }
    async peekBuffer(uint8Array, options2) {
        const normOptions = this.normalizeOptions(uint8Array, options2);
        let bytesRead = 0;
        if (normOptions.position) {
            const skipBytes = normOptions.position - this.position;
            if (skipBytes > 0) {
                const skipBuffer = new Uint8Array(normOptions.length + skipBytes);
                bytesRead = await this.peekBuffer(skipBuffer, {
                    mayBeLess: normOptions.mayBeLess
                });
                uint8Array.set(skipBuffer.subarray(skipBytes), normOptions.offset);
                return bytesRead - skipBytes;
            } else if (skipBytes < 0) {
                throw new Error("Cannot peek from a negative offset in a stream");
            }
        }
        if (normOptions.length > 0) {
            try {
                bytesRead = await this.streamReader.peek(uint8Array, normOptions.offset, normOptions.length);
            } catch (err) {
                if (options2 && options2.mayBeLess && err instanceof peek_readable_1.EndOfStreamError) {
                    return 0;
                }
                throw err;
            }
            if (!normOptions.mayBeLess && bytesRead < normOptions.length) {
                throw new peek_readable_1.EndOfStreamError();
            }
        }
        return bytesRead;
    }
    async ignore(length) {
        const bufSize = Math.min(maxBufferSize, length);
        const buf = new Uint8Array(bufSize);
        let totBytesRead = 0;
        while(totBytesRead < length){
            const remaining = length - totBytesRead;
            const bytesRead = await this.readBuffer(buf, {
                length: Math.min(bufSize, remaining)
            });
            if (bytesRead < 0) {
                return bytesRead;
            }
            totBytesRead += bytesRead;
        }
        return totBytesRead;
    }
};
exports2.ReadStreamTokenizer = ReadStreamTokenizer;

return exports2;
}
