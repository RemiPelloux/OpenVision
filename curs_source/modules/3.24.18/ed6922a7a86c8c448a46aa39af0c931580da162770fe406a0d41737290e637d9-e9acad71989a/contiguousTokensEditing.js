import { P7, uA } from "./lineTokens.js";
import { YBe } from "./qIc.js";
import { x } from "./tslib.es6.js";
var ZAe, WV;
export { WV, ZAe };
var __wakaru_h3c_initialized = false;
export function h3c() {
if (__wakaru_h3c_initialized) return;
__wakaru_h3c_initialized = true;
"use strict";
x(), P7(), ZAe = new Uint32Array(0).buffer, WV = class kIa {
    static deleteBeginning(t, n) {
        return t === null || t === ZAe ? t : kIa.delete(t, 0, n);
    }
    static deleteEnding(t, n) {
        if (t === null || t === ZAe) return t;
        const i = YBe(t), r = i[i.length - 2];
        return kIa.delete(t, n, r);
    }
    static delete(t, n, i) {
        if (t === null || t === ZAe || n === i) return t;
        const r = YBe(t), s = r.length >>> 1;
        if (n === 0 && r[r.length - 2] === i) return ZAe;
        const o = uA.findIndexInTokensArray(r, n), a = o > 0 ? r[o - 1 << 1] : 0, c = r[o << 1];
        if (i < c) {
            const g = i - n;
            for(let f = o; f < s; f++)r[f << 1] -= g;
            return t;
        }
        let l, u;
        a !== n ? (r[o << 1] = n, l = o + 1 << 1, u = n) : (l = o << 1, u = a);
        const h = i - n;
        for(let g = o + 1; g < s; g++){
            const f = r[g << 1] - h;
            f > u && (r[l++] = f, r[l++] = r[(g << 1) + 1], u = f);
        }
        if (l === r.length) return t;
        const p = new Uint32Array(l);
        return p.set(r.subarray(0, l), 0), p.buffer;
    }
    static append(t, n) {
        if (n === ZAe) return t;
        if (t === ZAe) return n;
        if (t === null) return t;
        if (n === null) return null;
        const i = YBe(t), r = YBe(n), s = r.length >>> 1, o = new Uint32Array(i.length + r.length);
        o.set(i, 0);
        let a = i.length;
        const c = i[i.length - 2];
        for(let l = 0; l < s; l++)o[a++] = r[l << 1] + c, o[a++] = r[(l << 1) + 1];
        return o.buffer;
    }
    static insert(t, n, i) {
        if (t === null || t === ZAe) return t;
        const r = YBe(t), s = r.length >>> 1;
        let o = uA.findIndexInTokensArray(r, n);
        o > 0 && r[o - 1 << 1] === n && o--;
        for(let a = o; a < s; a++)r[a << 1] += i;
        return t;
    }
};

}
