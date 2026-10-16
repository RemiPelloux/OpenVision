import { INe, kr } from "./error-codes.js";
import { i } from "./plugin-brand-icon.js";
import { $Nt, $t, ANt, INt, Jir, Qir, TNt } from "./unicode.js";
var tar, NNt, nar;
export { NNt, nar, tar };
var __wakaru_bvi_initialized = false;
export function bvi() {
if (__wakaru_bvi_initialized) return;
__wakaru_bvi_initialized = true;
INt(), INe(), tar = 65536, NNt = class {
    constructor(e){
        this.handler = e, this.html = "", this.pos = -1, this.lastGapPos = -2, this.gapStack = [], this.skipNextNewLine = !1, this.lastChunkWritten = !1, this.endOfChunkHit = !1, this.bufferWaterline = tar, this.isEol = !1, this.lineStartPos = 0, this.droppedBufferSize = 0, this.line = 1, this.lastErrOffset = -1;
    }
    get col() {
        return this.pos - this.lineStartPos + +(this.lastGapPos !== this.pos);
    }
    get offset() {
        return this.droppedBufferSize + this.pos;
    }
    getError(e, a) {
        const { line: s, col: l, offset: u } = this, p = l + a, m = u + a;
        return {
            code: e,
            startLine: s,
            endLine: s,
            startCol: p,
            endCol: p,
            startOffset: m,
            endOffset: m
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
            const a = this.html.charCodeAt(this.pos + 1);
            if (Jir(a)) return this.pos++, this._addGap(), Qir(e, a);
        } else if (!this.lastChunkWritten) return this.endOfChunkHit = !0, $t.EOF;
        return this._err(kr.surrogateInInputStream), e;
    }
    willDropParsedChunk() {
        return this.pos > this.bufferWaterline;
    }
    dropParsedChunk() {
        this.willDropParsedChunk() && (this.html = this.html.substring(this.pos), this.lineStartPos -= this.pos, this.droppedBufferSize += this.pos, this.pos = 0, this.lastGapPos = -2, this.gapStack.length = 0);
    }
    write(e, a) {
        this.html.length > 0 ? this.html += e : this.html = e, this.endOfChunkHit = !1, this.lastChunkWritten = a;
    }
    insertHtmlAtCurrentPos(e) {
        this.html = this.html.substring(0, this.pos + 1) + e + this.html.substring(this.pos + 1), this.endOfChunkHit = !1;
    }
    startsWith(e, a) {
        if (this.pos + e.length > this.html.length) return this.endOfChunkHit = !this.lastChunkWritten, !1;
        if (a) return this.html.startsWith(e, this.pos);
        for(let s = 0; s < e.length; s++)if ((this.html.charCodeAt(this.pos + s) | 32) !== e.charCodeAt(s)) return !1;
        return !0;
    }
    peek(e) {
        const a = this.pos + e;
        if (a >= this.html.length) return this.endOfChunkHit = !this.lastChunkWritten, $t.EOF;
        const s = this.html.charCodeAt(a);
        return s === $t.CARRIAGE_RETURN ? $t.LINE_FEED : s;
    }
    advance() {
        if (this.pos++, this.isEol && (this.isEol = !1, this.line++, this.lineStartPos = this.pos), this.pos >= this.html.length) return this.endOfChunkHit = !this.lastChunkWritten, $t.EOF;
        let e = this.html.charCodeAt(this.pos);
        return e === $t.CARRIAGE_RETURN ? (this.isEol = !0, this.skipNextNewLine = !0, $t.LINE_FEED) : e === $t.LINE_FEED && (this.isEol = !0, this.skipNextNewLine) ? (this.line--, this.skipNextNewLine = !1, this._addGap(), this.advance()) : (this.skipNextNewLine = !1, ANt(e) && (e = this._processSurrogate(e)), this.handler.onParseError === null || e > 31 && e < 127 || e === $t.LINE_FEED || e === $t.CARRIAGE_RETURN || e > 159 && e < 64976 || this._checkForProblematicCharacters(e), e);
    }
    _checkForProblematicCharacters(e) {
        TNt(e) ? this._err(kr.controlCharacterInInputStream) : $Nt(e) && this._err(kr.noncharacterInInputStream);
    }
    retreat(e) {
        for(this.pos -= e; this.pos < this.lastGapPos;)this.lastGapPos = this.gapStack.pop(), this.pos--;
        this.isEol = !1;
    }
}, i(NNt, "Preprocessor"), nar = NNt;

}
