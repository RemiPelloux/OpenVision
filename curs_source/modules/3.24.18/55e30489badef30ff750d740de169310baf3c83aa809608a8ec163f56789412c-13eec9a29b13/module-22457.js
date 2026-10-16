"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.BufferTokenizer = void 0;
const a = require("./module-690.js"), n = require("./module-72665.js");
class r extends n.AbstractTokenizer {
    constructor(e, t){
        super(t), this.uint8Array = e, this.fileInfo.size = this.fileInfo.size ? this.fileInfo.size : e.length;
    }
    async readBuffer(e, t) {
        if (t && t.position) {
            if (t.position < this.position) throw new Error("`options.position` must be equal or greater than `tokenizer.position`");
            this.position = t.position;
        }
        const i = await this.peekBuffer(e, t);
        return this.position += i, i;
    }
    async peekBuffer(e, t) {
        const i = this.normalizeOptions(e, t), n = Math.min(this.uint8Array.length - i.position, i.length);
        if (!i.mayBeLess && n < i.length) throw new a.EndOfStreamError;
        return e.set(this.uint8Array.subarray(i.position, i.position + n), i.offset), n;
    }
    async close() {}
}
exports.BufferTokenizer = r;
