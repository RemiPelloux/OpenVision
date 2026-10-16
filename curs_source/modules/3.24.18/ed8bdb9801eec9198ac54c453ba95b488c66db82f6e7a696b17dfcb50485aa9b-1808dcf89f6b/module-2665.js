"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.AbstractTokenizer = void 0;
const a = require("./module-690.js");
exports.AbstractTokenizer = class {
    constructor(e){
        this.position = 0, this.numBuffer = new Uint8Array(8), this.fileInfo = e || {};
    }
    async readToken(e, t = this.position) {
        const i = Buffer.alloc(e.len);
        if (await this.readBuffer(i, {
            position: t
        }) < e.len) throw new a.EndOfStreamError;
        return e.get(i, 0);
    }
    async peekToken(e, t = this.position) {
        const i = Buffer.alloc(e.len);
        if (await this.peekBuffer(i, {
            position: t
        }) < e.len) throw new a.EndOfStreamError;
        return e.get(i, 0);
    }
    async readNumber(e) {
        if (await this.readBuffer(this.numBuffer, {
            length: e.len
        }) < e.len) throw new a.EndOfStreamError;
        return e.get(this.numBuffer, 0);
    }
    async peekNumber(e) {
        if (await this.peekBuffer(this.numBuffer, {
            length: e.len
        }) < e.len) throw new a.EndOfStreamError;
        return e.get(this.numBuffer, 0);
    }
    async ignore(e) {
        if (void 0 !== this.fileInfo.size) {
            const t = this.fileInfo.size - this.position;
            if (e > t) return this.position += t, t;
        }
        return this.position += e, e;
    }
    async close() {}
    normalizeOptions(e, t) {
        if (t && void 0 !== t.position && t.position < this.position) throw new Error("`options.position` must be equal or greater than `tokenizer.position`");
        return t ? {
            mayBeLess: !0 === t.mayBeLess,
            offset: t.offset ? t.offset : 0,
            length: t.length ? t.length : e.length - (t.offset ? t.offset : 0),
            position: t.position ? t.position : this.position
        } : {
            mayBeLess: !1,
            offset: 0,
            length: e.length,
            position: this.position
        };
    }
};
