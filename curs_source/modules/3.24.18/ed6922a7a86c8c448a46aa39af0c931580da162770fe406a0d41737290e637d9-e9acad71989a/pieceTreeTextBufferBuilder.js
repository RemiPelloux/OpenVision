import { Ps, Rqe, nIc, qxc, zxc } from "./HVr.js";
import { En, qy } from "./charCode.js";
import { Rze, s3c } from "./pieceTreeBase.js";
import { Bvi, jQr } from "./pieceTreeTextBuffer.js";
import { KBe, mfg } from "./qIc.js";
import { x } from "./tslib.es6.js";
var o3c, _Ot;
export { _Ot, o3c };
var __wakaru_a3c_initialized = false;
export function a3c() {
if (__wakaru_a3c_initialized) return;
__wakaru_a3c_initialized = true;
"use strict";
x(), qy(), Ps(), s3c(), jQr(), o3c = class {
    constructor(e, t, n, i, r, s, o, a, c){
        this._chunks = e, this._bom = t, this._cr = n, this._lf = i, this._crlf = r, this._containsRTL = s, this._containsUnusualLineTerminators = o, this._isBasicASCII = a, this._normalizeEOL = c;
    }
    _getEOL(e) {
        const t = this._cr + this._lf + this._crlf, n = this._cr + this._crlf;
        return t === 0 ? e === 1 ? `
` : `\r
` : n > t / 2 ? `\r
` : `
`;
    }
    create(e) {
        const t = this._getEOL(e), n = this._chunks;
        if (this._normalizeEOL && (t === `\r
` && (this._cr > 0 || this._lf > 0) || t === `
` && (this._cr > 0 || this._crlf > 0))) for(let r = 0, s = n.length; r < s; r++){
            const o = n[r].buffer.replace(/\r\n|\r|\n/g, t), a = KBe(o);
            n[r] = new Rze(o, a);
        }
        const i = new Bvi(n, this._bom, t, this._containsRTL, this._containsUnusualLineTerminators, this._isBasicASCII, this._normalizeEOL);
        return {
            textBuffer: i,
            disposable: i
        };
    }
    getFirstLineText(e) {
        return this._chunks[0].buffer.substr(0, e).split(/\r\n|\r|\n/)[0];
    }
}, _Ot = class {
    constructor(){
        this.chunks = [], this.BOM = "", this._hasPreviousChar = !1, this._previousChar = 0, this._tmpLineStarts = [], this.cr = 0, this.lf = 0, this.crlf = 0, this.containsRTL = !1, this.containsUnusualLineTerminators = !1, this.isBasicASCII = !0;
    }
    acceptChunk(e) {
        if (e.length === 0) return;
        this.chunks.length === 0 && zxc(e) && (this.BOM = nIc, e = e.substr(1));
        const t = e.charCodeAt(e.length - 1);
        t === En.CarriageReturn || t >= 55296 && t <= 56319 ? (this._acceptChunk1(e.substr(0, e.length - 1), !1), this._hasPreviousChar = !0, this._previousChar = t) : (this._acceptChunk1(e, !1), this._hasPreviousChar = !1, this._previousChar = t);
    }
    _acceptChunk1(e, t) {
        !t && e.length === 0 || (this._hasPreviousChar ? this._acceptChunk2(String.fromCharCode(this._previousChar) + e) : this._acceptChunk2(e));
    }
    _acceptChunk2(e) {
        const t = mfg(this._tmpLineStarts, e);
        this.chunks.push(new Rze(e, t.lineStarts)), this.cr += t.cr, this.lf += t.lf, this.crlf += t.crlf, t.isBasicASCII || (this.isBasicASCII = !1, this.containsRTL || (this.containsRTL = Rqe(e)), this.containsUnusualLineTerminators || (this.containsUnusualLineTerminators = qxc(e)));
    }
    finish(e = !0) {
        return this._finish(), new o3c(this.chunks, this.BOM, this.cr, this.lf, this.crlf, this.containsRTL, this.containsUnusualLineTerminators, this.isBasicASCII, e);
    }
    _finish() {
        if (this.chunks.length === 0 && this._acceptChunk1("", !0), this._hasPreviousChar) {
            this._hasPreviousChar = !1;
            const e = this.chunks[this.chunks.length - 1];
            e.buffer += String.fromCharCode(this._previousChar);
            const t = KBe(e.buffer);
            e.lineStarts = t, this._previousChar === En.CarriageReturn && this.cr++;
        }
    }
};

}
