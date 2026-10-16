import { CCo, Fa, Ga, K9, o6t } from "./Iwo.js";
import { b6t, kTo } from "./SZu.js";
import { E } from "./tslib.es6.js";
var wTo, Ose;
export { Ose, wTo };
var __wakaru_Xy_initialized = false;
export function Xy() {
if (__wakaru_Xy_initialized) return;
__wakaru_Xy_initialized = true;
"use strict";
E(), Ga(), Fa(), wTo = class Vxb {
    constructor(){
        this._h0 = 1732584193, this._h1 = 4023233417, this._h2 = 2562383102, this._h3 = 271733878, this._h4 = 3285377520, this._buff = new Uint8Array(67), this._buffDV = new DataView(this._buff.buffer), this._buffLen = 0, this._totalLen = 0, this._leftoverHighSurrogate = 0, this._finished = !1;
    }
    update(e) {
        const n = e.length;
        if (n === 0) return;
        const i = this._buff;
        let r = this._buffLen, s = this._leftoverHighSurrogate, o, a;
        for(s !== 0 ? (o = s, a = -1, s = 0) : (o = e.charCodeAt(0), a = 0);;){
            let l = o;
            if (K9(o)) if (a + 1 < n) {
                const c = e.charCodeAt(a + 1);
                o6t(c) ? (a++, l = CCo(o, c)) : l = 65533;
            } else {
                s = o;
                break;
            }
            else o6t(o) && (l = 65533);
            if (r = this._push(i, r, l), a++, a < n) o = e.charCodeAt(a);
            else break;
        }
        this._buffLen = r, this._leftoverHighSurrogate = s;
    }
    _push(e, n, i) {
        return i < 128 ? e[n++] = i : i < 2048 ? (e[n++] = 192 | (i & 1984) >>> 6, e[n++] = 128 | (i & 63) >>> 0) : i < 65536 ? (e[n++] = 224 | (i & 61440) >>> 12, e[n++] = 128 | (i & 4032) >>> 6, e[n++] = 128 | (i & 63) >>> 0) : (e[n++] = 240 | (i & 1835008) >>> 18, e[n++] = 128 | (i & 258048) >>> 12, e[n++] = 128 | (i & 4032) >>> 6, e[n++] = 128 | (i & 63) >>> 0), n >= 64 && (this._step(), n -= 64, this._totalLen += 64, e[0] = e[64], e[1] = e[65], e[2] = e[66]), n;
    }
    digest() {
        return this._finished || (this._finished = !0, this._leftoverHighSurrogate && (this._leftoverHighSurrogate = 0, this._buffLen = this._push(this._buff, this._buffLen, 65533)), this._totalLen += this._buffLen, this._wrapUp()), b6t(this._h0) + b6t(this._h1) + b6t(this._h2) + b6t(this._h3) + b6t(this._h4);
    }
    _wrapUp() {
        this._buff[this._buffLen++] = 128, this._buff.subarray(this._buffLen).fill(0), this._buffLen > 56 && (this._step(), this._buff.fill(0));
        const e = 8 * this._totalLen;
        this._buffDV.setUint32(56, Math.floor(e / 4294967296), !1), this._buffDV.setUint32(60, e % 4294967296, !1), this._step();
    }
    _step() {
        const e = Vxb._bigBlock32, n = this._buffDV;
        for(let d = 0; d < 64; d += 4)e.setUint32(d, n.getUint32(d, !1), !1);
        for(let d = 64; d < 320; d += 4)e.setUint32(d, kTo(e.getUint32(d - 12, !1) ^ e.getUint32(d - 32, !1) ^ e.getUint32(d - 56, !1) ^ e.getUint32(d - 64, !1), 1), !1);
        let i = this._h0, r = this._h1, s = this._h2, o = this._h3, a = this._h4, l, c, u;
        for(let d = 0; d < 80; d++)d < 20 ? (l = r & s | ~r & o, c = 1518500249) : d < 40 ? (l = r ^ s ^ o, c = 1859775393) : d < 60 ? (l = r & s | r & o | s & o, c = 2400959708) : (l = r ^ s ^ o, c = 3395469782), u = kTo(i, 5) + l + a + c + e.getUint32(d * 4, !1) & 4294967295, a = o, o = s, s = kTo(r, 30), r = i, i = u;
        this._h0 = this._h0 + i & 4294967295, this._h1 = this._h1 + r & 4294967295, this._h2 = this._h2 + s & 4294967295, this._h3 = this._h3 + o & 4294967295, this._h4 = this._h4 + a & 4294967295;
    }
}, wTo._bigBlock32 = new DataView(new ArrayBuffer(320)), Ose = wTo;

}
