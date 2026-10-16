"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.ReadStreamTokenizer = void 0;
const a = require("./module-2665.js"), n = require("./module-690.js");
class r extends a.AbstractTokenizer {
    constructor(e, t){
        super(t), this.streamReader = new n.StreamReader(e);
    }
    async getFileInfo() {
        return this.fileInfo;
    }
    async readBuffer(e, t) {
        const i = this.normalizeOptions(e, t), a = i.position - this.position;
        if (a > 0) return await this.ignore(a), this.readBuffer(e, t);
        if (a < 0) throw new Error("`options.position` must be equal or greater than `tokenizer.position`");
        if (0 === i.length) return 0;
        const r = await this.streamReader.read(e, i.offset, i.length);
        if (this.position += r, (!t || !t.mayBeLess) && r < i.length) throw new n.EndOfStreamError;
        return r;
    }
    async peekBuffer(e, t) {
        const i = this.normalizeOptions(e, t);
        let a = 0;
        if (i.position) {
            const t = i.position - this.position;
            if (t > 0) {
                const n = new Uint8Array(i.length + t);
                return a = await this.peekBuffer(n, {
                    mayBeLess: i.mayBeLess
                }), e.set(n.subarray(t), i.offset), a - t;
            }
            if (t < 0) throw new Error("Cannot peek from a negative offset in a stream");
        }
        if (i.length > 0) {
            try {
                a = await this.streamReader.peek(e, i.offset, i.length);
            } catch (e) {
                if (t && t.mayBeLess && e instanceof n.EndOfStreamError) return 0;
                throw e;
            }
            if (!i.mayBeLess && a < i.length) throw new n.EndOfStreamError;
        }
        return a;
    }
    async ignore(e) {
        const t = Math.min(256e3, e), i = new Uint8Array(t);
        let a = 0;
        for(; a < e;){
            const n = e - a, r = await this.readBuffer(i, {
                length: Math.min(t, n)
            });
            if (r < 0) return r;
            a += r;
        }
        return a;
    }
}
exports.ReadStreamTokenizer = r;
