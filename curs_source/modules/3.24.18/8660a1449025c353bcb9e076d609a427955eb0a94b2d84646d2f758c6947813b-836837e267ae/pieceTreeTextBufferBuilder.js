import { CXu, Fa, Hvt, LXu, kXu } from "./Iwo.js";
import { Cw, ti } from "./charCode.js";
import { D8d, lyt } from "./pieceTreeBase.js";
import { i$o, w0r } from "./pieceTreeTextBuffer.js";
import { E } from "./tslib.es6.js";
import { $tt, _Py } from "./ze.js";
var N8d, ofn;
export { N8d, ofn };
var __wakaru_L8d_initialized = false;
export function L8d() {
if (__wakaru_L8d_initialized) return;
__wakaru_L8d_initialized = true;
"use strict";
E(), Cw(), Fa(), D8d(), i$o(), N8d = class {
    constructor(t, e, n, i, r, s, o, a, l){
        this._chunks = t, this._bom = e, this._cr = n, this._lf = i, this._crlf = r, this._containsRTL = s, this._containsUnusualLineTerminators = o, this._isBasicASCII = a, this._normalizeEOL = l;
    }
    _getEOL(t) {
        const e = this._cr + this._lf + this._crlf, n = this._cr + this._crlf;
        return e === 0 ? t === 1 ? `
` : `\r
` : n > e / 2 ? `\r
` : `
`;
    }
    create(t) {
        const e = this._getEOL(t), n = this._chunks;
        if (this._normalizeEOL && (e === `\r
` && (this._cr > 0 || this._lf > 0) || e === `
` && (this._cr > 0 || this._crlf > 0))) for(let r = 0, s = n.length; r < s; r++){
            const o = n[r].buffer.replace(/\r\n|\r|\n/g, e), a = $tt(o);
            n[r] = new lyt(o, a);
        }
        const i = new w0r(n, this._bom, e, this._containsRTL, this._containsUnusualLineTerminators, this._isBasicASCII, this._normalizeEOL);
        return {
            textBuffer: i,
            disposable: i
        };
    }
    getFirstLineText(t) {
        return this._chunks[0].buffer.substr(0, t).split(/\r\n|\r|\n/)[0];
    }
}, ofn = class {
    constructor(){
        this.chunks = [], this.BOM = "", this._hasPreviousChar = !1, this._previousChar = 0, this._tmpLineStarts = [], this.cr = 0, this.lf = 0, this.crlf = 0, this.containsRTL = !1, this.containsUnusualLineTerminators = !1, this.isBasicASCII = !0;
    }
    acceptChunk(t) {
        if (t.length === 0) return;
        this.chunks.length === 0 && CXu(t) && (this.BOM = LXu, t = t.substr(1));
        const e = t.charCodeAt(t.length - 1);
        e === ti.CarriageReturn || e >= 55296 && e <= 56319 ? (this._acceptChunk1(t.substr(0, t.length - 1), !1), this._hasPreviousChar = !0, this._previousChar = e) : (this._acceptChunk1(t, !1), this._hasPreviousChar = !1, this._previousChar = e);
    }
    _acceptChunk1(t, e) {
        !e && t.length === 0 || (this._hasPreviousChar ? this._acceptChunk2(String.fromCharCode(this._previousChar) + t) : this._acceptChunk2(t));
    }
    _acceptChunk2(t) {
        const e = _Py(this._tmpLineStarts, t);
        this.chunks.push(new lyt(t, e.lineStarts)), this.cr += e.cr, this.lf += e.lf, this.crlf += e.crlf, e.isBasicASCII || (this.isBasicASCII = !1, this.containsRTL || (this.containsRTL = Hvt(t)), this.containsUnusualLineTerminators || (this.containsUnusualLineTerminators = kXu(t)));
    }
    finish(t = !0) {
        return this._finish(), new N8d(this.chunks, this.BOM, this.cr, this.lf, this.crlf, this.containsRTL, this.containsUnusualLineTerminators, this.isBasicASCII, t);
    }
    _finish() {
        if (this.chunks.length === 0 && this._acceptChunk1("", !0), this._hasPreviousChar) {
            this._hasPreviousChar = !1;
            const t = this.chunks[this.chunks.length - 1];
            t.buffer += String.fromCharCode(this._previousChar);
            const e = $tt(t.buffer);
            t.lineStarts = e, this._previousChar === ti.CarriageReturn && this.cr++;
        }
    }
};

}
