import { Amh, Pmh, Rmh, fzy, vzy } from "./LYd.js";
import { TMr, fu } from "./error-codes.js";
import { E } from "./tslib.es6.js";
import { Dia, ys } from "./unicode.js";
var Dmh, Nmh;
export { Dmh, Nmh };
var __wakaru__zy_initialized = false;
export function _zy() {
if (__wakaru__zy_initialized) return;
__wakaru__zy_initialized = true;
E(), Dia(), TMr(), Dmh = 65536, Nmh = class {
    constructor(t){
        this.handler = t, this.html = "", this.pos = -1, this.lastGapPos = -2, this.gapStack = [], this.skipNextNewLine = !1, this.lastChunkWritten = !1, this.endOfChunkHit = !1, this.bufferWaterline = Dmh, this.isEol = !1, this.lineStartPos = 0, this.droppedBufferSize = 0, this.line = 1, this.lastErrOffset = -1;
    }
    get col() {
        return this.pos - this.lineStartPos + +(this.lastGapPos !== this.pos);
    }
    get offset() {
        return this.droppedBufferSize + this.pos;
    }
    getError(t, e) {
        const { line: n, col: i, offset: r } = this, s = i + e, o = r + e;
        return {
            code: t,
            startLine: n,
            endLine: n,
            startCol: s,
            endCol: s,
            startOffset: o,
            endOffset: o
        };
    }
    _err(t) {
        this.handler.onParseError && this.lastErrOffset !== this.offset && (this.lastErrOffset = this.offset, this.handler.onParseError(this.getError(t, 0)));
    }
    _addGap() {
        this.gapStack.push(this.lastGapPos), this.lastGapPos = this.pos;
    }
    _processSurrogate(t) {
        if (this.pos !== this.html.length - 1) {
            const e = this.html.charCodeAt(this.pos + 1);
            if (fzy(e)) return this.pos++, this._addGap(), vzy(t, e);
        } else if (!this.lastChunkWritten) return this.endOfChunkHit = !0, ys.EOF;
        return this._err(fu.surrogateInInputStream), t;
    }
    willDropParsedChunk() {
        return this.pos > this.bufferWaterline;
    }
    dropParsedChunk() {
        this.willDropParsedChunk() && (this.html = this.html.substring(this.pos), this.lineStartPos -= this.pos, this.droppedBufferSize += this.pos, this.pos = 0, this.lastGapPos = -2, this.gapStack.length = 0);
    }
    write(t, e) {
        this.html.length > 0 ? this.html += t : this.html = t, this.endOfChunkHit = !1, this.lastChunkWritten = e;
    }
    insertHtmlAtCurrentPos(t) {
        this.html = this.html.substring(0, this.pos + 1) + t + this.html.substring(this.pos + 1), this.endOfChunkHit = !1;
    }
    startsWith(t, e) {
        if (this.pos + t.length > this.html.length) return this.endOfChunkHit = !this.lastChunkWritten, !1;
        if (e) return this.html.startsWith(t, this.pos);
        for(let n = 0; n < t.length; n++)if ((this.html.charCodeAt(this.pos + n) | 32) !== t.charCodeAt(n)) return !1;
        return !0;
    }
    peek(t) {
        const e = this.pos + t;
        if (e >= this.html.length) return this.endOfChunkHit = !this.lastChunkWritten, ys.EOF;
        const n = this.html.charCodeAt(e);
        return n === ys.CARRIAGE_RETURN ? ys.LINE_FEED : n;
    }
    advance() {
        if (this.pos++, this.isEol && (this.isEol = !1, this.line++, this.lineStartPos = this.pos), this.pos >= this.html.length) return this.endOfChunkHit = !this.lastChunkWritten, ys.EOF;
        let t = this.html.charCodeAt(this.pos);
        return t === ys.CARRIAGE_RETURN ? (this.isEol = !0, this.skipNextNewLine = !0, ys.LINE_FEED) : t === ys.LINE_FEED && (this.isEol = !0, this.skipNextNewLine) ? (this.line--, this.skipNextNewLine = !1, this._addGap(), this.advance()) : (this.skipNextNewLine = !1, Amh(t) && (t = this._processSurrogate(t)), this.handler.onParseError === null || t > 31 && t < 127 || t === ys.LINE_FEED || t === ys.CARRIAGE_RETURN || t > 159 && t < 64976 || this._checkForProblematicCharacters(t), t);
    }
    _checkForProblematicCharacters(t) {
        Rmh(t) ? this._err(fu.controlCharacterInInputStream) : Pmh(t) && this._err(fu.noncharacterInInputStream);
    }
    retreat(t) {
        for(this.pos -= t; this.pos < this.lastGapPos;)this.lastGapPos = this.gapStack.pop(), this.pos--;
        this.isEol = !1;
    }
};

}
