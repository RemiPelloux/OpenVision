import { require_lib3 } from "../../../../peek-readable@4.1.0/node_modules/peek-readable/lib/index.js";
var __wakaru_require_AbstractTokenizer_cache;
export function require_AbstractTokenizer() {
if (__wakaru_require_AbstractTokenizer_cache) return __wakaru_require_AbstractTokenizer_cache;
var exports2 = {};
__wakaru_require_AbstractTokenizer_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.AbstractTokenizer = void 0;
var peek_readable_1 = require_lib3();
var AbstractTokenizer = class {
    constructor(fileInfo){
        this.position = 0;
        this.numBuffer = new Uint8Array(8);
        this.fileInfo = fileInfo ? fileInfo : {};
    }
    async readToken(token, position = this.position) {
        const uint8Array = Buffer.alloc(token.len);
        const len = await this.readBuffer(uint8Array, {
            position
        });
        if (len < token.len) throw new peek_readable_1.EndOfStreamError();
        return token.get(uint8Array, 0);
    }
    async peekToken(token, position = this.position) {
        const uint8Array = Buffer.alloc(token.len);
        const len = await this.peekBuffer(uint8Array, {
            position
        });
        if (len < token.len) throw new peek_readable_1.EndOfStreamError();
        return token.get(uint8Array, 0);
    }
    async readNumber(token) {
        const len = await this.readBuffer(this.numBuffer, {
            length: token.len
        });
        if (len < token.len) throw new peek_readable_1.EndOfStreamError();
        return token.get(this.numBuffer, 0);
    }
    async peekNumber(token) {
        const len = await this.peekBuffer(this.numBuffer, {
            length: token.len
        });
        if (len < token.len) throw new peek_readable_1.EndOfStreamError();
        return token.get(this.numBuffer, 0);
    }
    async ignore(length) {
        if (this.fileInfo.size !== void 0) {
            const bytesLeft = this.fileInfo.size - this.position;
            if (length > bytesLeft) {
                this.position += bytesLeft;
                return bytesLeft;
            }
        }
        this.position += length;
        return length;
    }
    async close() {}
    normalizeOptions(uint8Array, options2) {
        if (options2 && options2.position !== void 0 && options2.position < this.position) {
            throw new Error("`options.position` must be equal or greater than `tokenizer.position`");
        }
        if (options2) {
            return {
                mayBeLess: options2.mayBeLess === true,
                offset: options2.offset ? options2.offset : 0,
                length: options2.length ? options2.length : uint8Array.length - (options2.offset ? options2.offset : 0),
                position: options2.position ? options2.position : this.position
            };
        }
        return {
            mayBeLess: false,
            offset: 0,
            length: uint8Array.length,
            position: this.position
        };
    }
};
exports2.AbstractTokenizer = AbstractTokenizer;

return exports2;
}
