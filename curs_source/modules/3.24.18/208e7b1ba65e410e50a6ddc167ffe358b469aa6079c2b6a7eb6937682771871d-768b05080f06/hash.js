import { it } from "./buffer.js";
import { jn } from "./strings.js";
import { h } from "./tslib.es6.js";
function DUe(e) {
    return 55296 <= e && e <= 56319;
}
function g5(e) {
    return 56320 <= e && e <= 57343;
}
function OUe(e, t) {
    return (e - 55296 << 10) + (t - 56320) + 65536;
}
function E0(e, t, n = 32) {
    const r = n - t, s = ~((1 << r) - 1);
    return (e << t | (s & e) >>> r) >>> 0;
}
function Jl(e, t = 32) {
    return e instanceof ArrayBuffer ? Array.from(new Uint8Array(e)).map((n)=>n.toString(16).padStart(2, "0")).join("") : (e >>> 0).toString(16).padStart(t / 4, "0");
}
var DF;
export { DF, DUe, E0, Jl, OUe, g5 };
var __wakaru_Qa_initialized = false;
export function Qa() {
if (__wakaru_Qa_initialized) return;
__wakaru_Qa_initialized = true;
"use strict";
h(), it(), jn(), DF = class J9e {
    constructor(){
        this._h0 = 1732584193, this._h1 = 4023233417, this._h2 = 2562383102, this._h3 = 271733878, this._h4 = 3285377520, this._buff = new Uint8Array(67), this._buffDV = new DataView(this._buff.buffer), this._buffLen = 0, this._totalLen = 0, this._leftoverHighSurrogate = 0, this._finished = !1;
    }
    update(t) {
        const n = t.length;
        if (n === 0) return;
        const r = this._buff;
        let s = this._buffLen, i = this._leftoverHighSurrogate, a, o;
        for(i !== 0 ? (a = i, o = -1, i = 0) : (a = t.charCodeAt(0), o = 0);;){
            let l = a;
            if (DUe(a)) if (o + 1 < n) {
                const d = t.charCodeAt(o + 1);
                g5(d) ? (o++, l = OUe(a, d)) : l = 65533;
            } else {
                i = a;
                break;
            }
            else g5(a) && (l = 65533);
            if (s = this._push(r, s, l), o++, o < n) a = t.charCodeAt(o);
            else break;
        }
        this._buffLen = s, this._leftoverHighSurrogate = i;
    }
    _push(t, n, r) {
        return r < 128 ? t[n++] = r : r < 2048 ? (t[n++] = 192 | (r & 1984) >>> 6, t[n++] = 128 | (r & 63) >>> 0) : r < 65536 ? (t[n++] = 224 | (r & 61440) >>> 12, t[n++] = 128 | (r & 4032) >>> 6, t[n++] = 128 | (r & 63) >>> 0) : (t[n++] = 240 | (r & 1835008) >>> 18, t[n++] = 128 | (r & 258048) >>> 12, t[n++] = 128 | (r & 4032) >>> 6, t[n++] = 128 | (r & 63) >>> 0), n >= 64 && (this._step(), n -= 64, this._totalLen += 64, t[0] = t[64], t[1] = t[65], t[2] = t[66]), n;
    }
    digest() {
        return this._finished || (this._finished = !0, this._leftoverHighSurrogate && (this._leftoverHighSurrogate = 0, this._buffLen = this._push(this._buff, this._buffLen, 65533)), this._totalLen += this._buffLen, this._wrapUp()), Jl(this._h0) + Jl(this._h1) + Jl(this._h2) + Jl(this._h3) + Jl(this._h4);
    }
    _wrapUp() {
        this._buff[this._buffLen++] = 128, this._buff.subarray(this._buffLen).fill(0), this._buffLen > 56 && (this._step(), this._buff.fill(0));
        const t = 8 * this._totalLen;
        this._buffDV.setUint32(56, Math.floor(t / 4294967296), !1), this._buffDV.setUint32(60, t % 4294967296, !1), this._step();
    }
    _step() {
        const t = J9e._bigBlock32, n = this._buffDV;
        for(let m = 0; m < 64; m += 4)t.setUint32(m, n.getUint32(m, !1), !1);
        for(let m = 64; m < 320; m += 4)t.setUint32(m, E0(t.getUint32(m - 12, !1) ^ t.getUint32(m - 32, !1) ^ t.getUint32(m - 56, !1) ^ t.getUint32(m - 64, !1), 1), !1);
        let r = this._h0, s = this._h1, i = this._h2, a = this._h3, o = this._h4, l, d, u;
        for(let m = 0; m < 80; m++)m < 20 ? (l = s & i | ~s & a, d = 1518500249) : m < 40 ? (l = s ^ i ^ a, d = 1859775393) : m < 60 ? (l = s & i | s & a | i & a, d = 2400959708) : (l = s ^ i ^ a, d = 3395469782), u = E0(r, 5) + l + o + d + t.getUint32(m * 4, !1) & 4294967295, o = a, a = i, i = E0(s, 30), s = r, r = u;
        this._h0 = this._h0 + r & 4294967295, this._h1 = this._h1 + s & 4294967295, this._h2 = this._h2 + i & 4294967295, this._h3 = this._h3 + a & 4294967295, this._h4 = this._h4 + o & 4294967295;
    }
}, DF._bigBlock32 = new DataView(new ArrayBuffer(320));

}
