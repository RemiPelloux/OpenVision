import { Bqr, CO, Fo, Ps, cht } from "./HVr.js";
import { kht, qzr } from "./qIc.js";
import { x } from "./tslib.es6.js";
var zzr, Qie;
export { Qie, zzr };
var __wakaru_T__initialized = false;
export function T_() {
if (__wakaru_T__initialized) return;
__wakaru_T__initialized = true;
"use strict";
x(), Fo(), Ps(), zzr = class CSm {
    constructor(){
        this._h0 = 1732584193, this._h1 = 4023233417, this._h2 = 2562383102, this._h3 = 271733878, this._h4 = 3285377520, this._buff = new Uint8Array(67), this._buffDV = new DataView(this._buff.buffer), this._buffLen = 0, this._totalLen = 0, this._leftoverHighSurrogate = 0, this._finished = !1;
    }
    update(t) {
        const n = t.length;
        if (n === 0) return;
        const i = this._buff;
        let r = this._buffLen, s = this._leftoverHighSurrogate, o, a;
        for(s !== 0 ? (o = s, a = -1, s = 0) : (o = t.charCodeAt(0), a = 0);;){
            let c = o;
            if (CO(o)) if (a + 1 < n) {
                const l = t.charCodeAt(a + 1);
                cht(l) ? (a++, c = Bqr(o, l)) : c = 65533;
            } else {
                s = o;
                break;
            }
            else cht(o) && (c = 65533);
            if (r = this._push(i, r, c), a++, a < n) o = t.charCodeAt(a);
            else break;
        }
        this._buffLen = r, this._leftoverHighSurrogate = s;
    }
    _push(t, n, i) {
        return i < 128 ? t[n++] = i : i < 2048 ? (t[n++] = 192 | (i & 1984) >>> 6, t[n++] = 128 | (i & 63) >>> 0) : i < 65536 ? (t[n++] = 224 | (i & 61440) >>> 12, t[n++] = 128 | (i & 4032) >>> 6, t[n++] = 128 | (i & 63) >>> 0) : (t[n++] = 240 | (i & 1835008) >>> 18, t[n++] = 128 | (i & 258048) >>> 12, t[n++] = 128 | (i & 4032) >>> 6, t[n++] = 128 | (i & 63) >>> 0), n >= 64 && (this._step(), n -= 64, this._totalLen += 64, t[0] = t[64], t[1] = t[65], t[2] = t[66]), n;
    }
    digest() {
        return this._finished || (this._finished = !0, this._leftoverHighSurrogate && (this._leftoverHighSurrogate = 0, this._buffLen = this._push(this._buff, this._buffLen, 65533)), this._totalLen += this._buffLen, this._wrapUp()), kht(this._h0) + kht(this._h1) + kht(this._h2) + kht(this._h3) + kht(this._h4);
    }
    _wrapUp() {
        this._buff[this._buffLen++] = 128, this._buff.subarray(this._buffLen).fill(0), this._buffLen > 56 && (this._step(), this._buff.fill(0));
        const t = 8 * this._totalLen;
        this._buffDV.setUint32(56, Math.floor(t / 4294967296), !1), this._buffDV.setUint32(60, t % 4294967296, !1), this._step();
    }
    _step() {
        const t = CSm._bigBlock32, n = this._buffDV;
        for(let h = 0; h < 64; h += 4)t.setUint32(h, n.getUint32(h, !1), !1);
        for(let h = 64; h < 320; h += 4)t.setUint32(h, qzr(t.getUint32(h - 12, !1) ^ t.getUint32(h - 32, !1) ^ t.getUint32(h - 56, !1) ^ t.getUint32(h - 64, !1), 1), !1);
        let i = this._h0, r = this._h1, s = this._h2, o = this._h3, a = this._h4, c, l, u;
        for(let h = 0; h < 80; h++)h < 20 ? (c = r & s | ~r & o, l = 1518500249) : h < 40 ? (c = r ^ s ^ o, l = 1859775393) : h < 60 ? (c = r & s | r & o | s & o, l = 2400959708) : (c = r ^ s ^ o, l = 3395469782), u = qzr(i, 5) + c + a + l + t.getUint32(h * 4, !1) & 4294967295, a = o, o = s, s = qzr(r, 30), r = i, i = u;
        this._h0 = this._h0 + i & 4294967295, this._h1 = this._h1 + r & 4294967295, this._h2 = this._h2 + s & 4294967295, this._h3 = this._h3 + o & 4294967295, this._h4 = this._h4 + a & 4294967295;
    }
}, zzr._bigBlock32 = new DataView(new ArrayBuffer(320)), Qie = zzr;

}
