import { PD, SY } from "./lineTokens.js";
import { E } from "./tslib.es6.js";
import { Wtt } from "./ze.js";
var cHe, rne;
export { cHe, rne };
var __wakaru_j8d_initialized = false;
export function j8d() {
if (__wakaru_j8d_initialized) return;
__wakaru_j8d_initialized = true;
"use strict";
E(), SY(), cHe = new Uint32Array(0).buffer, rne = class sJc {
    static deleteBeginning(e, n) {
        return e === null || e === cHe ? e : sJc.delete(e, 0, n);
    }
    static deleteEnding(e, n) {
        if (e === null || e === cHe) return e;
        const i = Wtt(e), r = i[i.length - 2];
        return sJc.delete(e, n, r);
    }
    static delete(e, n, i) {
        if (e === null || e === cHe || n === i) return e;
        const r = Wtt(e), s = r.length >>> 1;
        if (n === 0 && r[r.length - 2] === i) return cHe;
        const o = PD.findIndexInTokensArray(r, n), a = o > 0 ? r[o - 1 << 1] : 0, l = r[o << 1];
        if (i < l) {
            const p = i - n;
            for(let g = o; g < s; g++)r[g << 1] -= p;
            return e;
        }
        let c, u;
        a !== n ? (r[o << 1] = n, c = o + 1 << 1, u = n) : (c = o << 1, u = a);
        const d = i - n;
        for(let p = o + 1; p < s; p++){
            const g = r[p << 1] - d;
            g > u && (r[c++] = g, r[c++] = r[(p << 1) + 1], u = g);
        }
        if (c === r.length) return e;
        const h = new Uint32Array(c);
        return h.set(r.subarray(0, c), 0), h.buffer;
    }
    static append(e, n) {
        if (n === cHe) return e;
        if (e === cHe) return n;
        if (e === null) return e;
        if (n === null) return null;
        const i = Wtt(e), r = Wtt(n), s = r.length >>> 1, o = new Uint32Array(i.length + r.length);
        o.set(i, 0);
        let a = i.length;
        const l = i[i.length - 2];
        for(let c = 0; c < s; c++)o[a++] = r[c << 1] + l, o[a++] = r[(c << 1) + 1];
        return o.buffer;
    }
    static insert(e, n, i) {
        if (e === null || e === cHe) return e;
        const r = Wtt(e), s = r.length >>> 1;
        let o = PD.findIndexInTokensArray(r, n);
        o > 0 && r[o - 1 << 1] === n && o--;
        for(let a = o; a < s; a++)r[a << 1] += i;
        return e;
    }
};

}
