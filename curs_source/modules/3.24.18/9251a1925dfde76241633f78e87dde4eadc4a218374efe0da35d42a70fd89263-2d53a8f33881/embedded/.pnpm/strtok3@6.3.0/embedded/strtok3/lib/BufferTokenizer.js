import { require_lib3 } from "../../../../peek-readable@4.1.0/node_modules/peek-readable/lib/index.js";
import { require_AbstractTokenizer } from "./AbstractTokenizer.js";
var __wakaru_require_BufferTokenizer_cache;
export function require_BufferTokenizer() {
if (__wakaru_require_BufferTokenizer_cache) return __wakaru_require_BufferTokenizer_cache;
var exports2 = {};
__wakaru_require_BufferTokenizer_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.BufferTokenizer = void 0;
var peek_readable_1 = require_lib3();
var AbstractTokenizer_1 = require_AbstractTokenizer();
var BufferTokenizer = class extends AbstractTokenizer_1.AbstractTokenizer {
    constructor(uint8Array, fileInfo){
        super(fileInfo);
        this.uint8Array = uint8Array;
        this.fileInfo.size = this.fileInfo.size ? this.fileInfo.size : uint8Array.length;
    }
    async readBuffer(uint8Array, options2) {
        if (options2 && options2.position) {
            if (options2.position < this.position) {
                throw new Error("`options.position` must be equal or greater than `tokenizer.position`");
            }
            this.position = options2.position;
        }
        const bytesRead = await this.peekBuffer(uint8Array, options2);
        this.position += bytesRead;
        return bytesRead;
    }
    async peekBuffer(uint8Array, options2) {
        const normOptions = this.normalizeOptions(uint8Array, options2);
        const bytes2read = Math.min(this.uint8Array.length - normOptions.position, normOptions.length);
        if (!normOptions.mayBeLess && bytes2read < normOptions.length) {
            throw new peek_readable_1.EndOfStreamError();
        } else {
            uint8Array.set(this.uint8Array.subarray(normOptions.position, normOptions.position + bytes2read), normOptions.offset);
            return bytes2read;
        }
    }
    async close() {}
};
exports2.BufferTokenizer = BufferTokenizer;

return exports2;
}
