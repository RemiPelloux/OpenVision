import { el, hEi } from "./error-codes.js";
import { N3g, O3g, ahl, chl, lhl } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { bfs, nr } from "./unicode.js";
var dhl, hhl;
export { dhl, hhl };
var __wakaru_F3g_initialized = false;
export function F3g() {
if (__wakaru_F3g_initialized) return;
__wakaru_F3g_initialized = true;
x(), bfs(), hEi(), dhl = 65536, hhl = class {
    constructor(e){
        this.handler = e, this.html = "", this.pos = -1, this.lastGapPos = -2, this.gapStack = [], this.skipNextNewLine = !1, this.lastChunkWritten = !1, this.endOfChunkHit = !1, this.bufferWaterline = dhl, this.isEol = !1, this.lineStartPos = 0, this.droppedBufferSize = 0, this.line = 1, this.lastErrOffset = -1;
    }
    get col() {
        return this.pos - this.lineStartPos + +(this.lastGapPos !== this.pos);
    }
    get offset() {
        return this.droppedBufferSize + this.pos;
    }
    getError(e, t) {
        const { line: n, col: i, offset: r } = this, s = i + t, o = r + t;
        return {
            code: e,
            startLine: n,
            endLine: n,
            startCol: s,
            endCol: s,
            startOffset: o,
            endOffset: o
        };
    }
    _err(e) {
        this.handler.onParseError && this.lastErrOffset !== this.offset && (this.lastErrOffset = this.offset, this.handler.onParseError(this.getError(e, 0)));
    }
    _addGap() {
        this.gapStack.push(this.lastGapPos), this.lastGapPos = this.pos;
    }
    _processSurrogate(e) {
        if (this.pos !== this.html.length - 1) {
            const t = this.html.charCodeAt(this.pos + 1);
            if (N3g(t)) return this.pos++, this._addGap(), O3g(e, t);
        } else if (!this.lastChunkWritten) return this.endOfChunkHit = !0, nr.EOF;
        return this._err(el.surrogateInInputStream), e;
    }
    willDropParsedChunk() {
        return this.pos > this.bufferWaterline;
    }
    dropParsedChunk() {
        this.willDropParsedChunk() && (this.html = this.html.substring(this.pos), this.lineStartPos -= this.pos, this.droppedBufferSize += this.pos, this.pos = 0, this.lastGapPos = -2, this.gapStack.length = 0);
    }
    write(e, t) {
        this.html.length > 0 ? this.html += e : this.html = e, this.endOfChunkHit = !1, this.lastChunkWritten = t;
    }
    insertHtmlAtCurrentPos(e) {
        this.html = this.html.substring(0, this.pos + 1) + e + this.html.substring(this.pos + 1), this.endOfChunkHit = !1;
    }
    startsWith(e, t) {
        if (this.pos + e.length > this.html.length) return this.endOfChunkHit = !this.lastChunkWritten, !1;
        if (t) return this.html.startsWith(e, this.pos);
        for(let n = 0; n < e.length; n++)if ((this.html.charCodeAt(this.pos + n) | 32) !== e.charCodeAt(n)) return !1;
        return !0;
    }
    peek(e) {
        const t = this.pos + e;
        if (t >= this.html.length) return this.endOfChunkHit = !this.lastChunkWritten, nr.EOF;
        const n = this.html.charCodeAt(t);
        return n === nr.CARRIAGE_RETURN ? nr.LINE_FEED : n;
    }
    advance() {
        if (this.pos++, this.isEol && (this.isEol = !1, this.line++, this.lineStartPos = this.pos), this.pos >= this.html.length) return this.endOfChunkHit = !this.lastChunkWritten, nr.EOF;
        let e = this.html.charCodeAt(this.pos);
        return e === nr.CARRIAGE_RETURN ? (this.isEol = !0, this.skipNextNewLine = !0, nr.LINE_FEED) : e === nr.LINE_FEED && (this.isEol = !0, this.skipNextNewLine) ? (this.line--, this.skipNextNewLine = !1, this._addGap(), this.advance()) : (this.skipNextNewLine = !1, ahl(e) && (e = this._processSurrogate(e)), this.handler.onParseError === null || e > 31 && e < 127 || e === nr.LINE_FEED || e === nr.CARRIAGE_RETURN || e > 159 && e < 64976 || this._checkForProblematicCharacters(e), e);
    }
    _checkForProblematicCharacters(e) {
        chl(e) ? this._err(el.controlCharacterInInputStream) : lhl(e) && this._err(el.noncharacterInInputStream);
    }
    retreat(e) {
        for(this.pos -= e; this.pos < this.lastGapPos;)this.lastGapPos = this.gapStack.pop(), this.pos--;
        this.isEol = !1;
    }
};

}
