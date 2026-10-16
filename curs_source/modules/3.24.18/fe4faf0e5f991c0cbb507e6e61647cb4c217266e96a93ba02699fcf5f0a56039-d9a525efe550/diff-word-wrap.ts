import { i } from "./plugin-brand-icon.js";
var Kje, oGt, sGt, qge, Uge, Xje, jAr, LAr, cGt, lGt, uGt, dGt;
export { Kje, LAr, Uge, Xje, cGt, dGt, jAr, lGt, oGt, qge, sGt, uGt };
var __wakaru_DAr_initialized = false;
export function DAr() {
if (__wakaru_DAr_initialized) return;
__wakaru_DAr_initialized = true;
"use strict";
Kje = 9, oGt = 32, sGt = 0, qge = 1, Uge = 2, Xje = 3, jAr = "([{\u2018\u201C\u3008\u300A\u300C\u300E\u3010\u3014\uFF08\uFF3B\uFF5B\uFF62\xA3\xA5\uFF04\uFFE1\uFFE5+\uFF0B", LAr = " 	})]?|/&.,;\xA2\xB0\u2032\u2033\u2030\u2103\u3001\u3002\uFF61\uFF64\uFFE0\uFF0C\uFF0E\uFF1A\uFF1B\uFF1F\uFF01\uFF05\u30FB\uFF65\u309D\u309E\u30FD\u30FE\u30FC\u30A1\u30A3\u30A5\u30A7\u30A9\u30C3\u30E3\u30E5\u30E7\u30EE\u30F5\u30F6\u3041\u3043\u3045\u3047\u3049\u3063\u3083\u3085\u3087\u308E\u3095\u3096\u31F0\u31F1\u31F2\u31F3\u31F4\u31F5\u31F6\u31F7\u31F8\u31F9\u31FA\u31FB\u31FC\u31FD\u31FE\u31FF\u3005\u303B\uFF67\uFF68\uFF69\uFF6A\uFF6B\uFF6C\uFF6D\uFF6E\uFF6F\uFF70\u201D\u3009\u300B\u300D\u300F\u3011\u3015\uFF09\uFF3D\uFF5D\uFF63", cGt = new Uint8Array(256), lGt = new Map;
for (const r of [
    {
        chars: jAr,
        charClass: qge
    },
    {
        chars: LAr,
        charClass: Uge
    }
])for(let e = 0; e < r.chars.length; e++){
    const a = r.chars.charCodeAt(e);
    a < 256 ? cGt[a] = r.charClass : lGt.set(a, r.charClass);
}
uGt = class kj {
    constructor(e){
        this._cache = new Map, this._config = e;
    }
    infoFor(e) {
        let a = this._cache.get(e);
        return a === void 0 && (a = this._computeLineWrapInfo(e), this._cache.set(e, a)), a;
    }
    rowCountFor(e) {
        return this.infoFor(e)?.breakOffsets.length ?? 1;
    }
    rowCountForPair(e, a) {
        return Math.max(e !== void 0 ? this.rowCountFor(e) : 1, a !== void 0 ? this.rowCountFor(a) : 1);
    }
    static splitTokensAtBreakOffsets(e, a) {
        const s = [];
        let l = [], u = 0, p = a[0];
        for (const m of e){
            let b = m;
            for(; b.col + b.content.length > p && u < a.length - 1;){
                const g = p - b.col;
                g > 0 && l.push({
                    ...b,
                    content: b.content.slice(0, g)
                }), s.push(l), l = [], b = {
                    ...b,
                    content: b.content.slice(Math.max(g, 0)),
                    col: p
                }, u++, p = a[u];
            }
            l.push(b);
        }
        for(s.push(l); s.length < a.length;)s.push([]);
        return s;
    }
    _computeLineWrapInfo(e) {
        const { wrapColumns: a } = this._config, s = e.length;
        if (a < 1 || s <= 1) return null;
        const l = this._computeWrappedIndentColumns(e), u = a - l, p = [];
        let m = 0, b = 0, g = a, _ = kj._classifyChar(e.charCodeAt(0)), v = this._computeCharColumns(e.charCodeAt(0), 0), x = 1;
        kj._isHighSurrogate(e.charCodeAt(0)) && (v += 1, _ = kj._classifyChar(e.charCodeAt(1)), x++);
        for(let C = x; C < s; C++){
            const E = C, A = e.charCodeAt(C);
            let $, I;
            kj._isHighSurrogate(A) ? (C++, $ = sGt, I = 2) : ($ = kj._classifyChar(A), I = this._computeCharColumns(A, v)), kj._canBreak(_, A, $) && (m = E, b = v), v += I, v > g && ((m === 0 || v - b > u) && (m = E, b = v - I), p.push(m), g = b + u, m = 0), _ = $;
        }
        return p.length === 0 ? null : (p.push(s), {
            breakOffsets: p,
            indentColumns: l
        });
    }
    _computeWrappedIndentColumns(e) {
        const { tabSize: a, wrapColumns: s, columnsForFullWidthChar: l } = this._config;
        let u = -1;
        for(let m = 0; m < e.length; m++){
            const b = e.charCodeAt(m);
            if (b !== oGt && b !== Kje) {
                u = m;
                break;
            }
        }
        if (u === -1) return 0;
        let p = 0;
        for(let m = 0; m < u; m++)p += e.charCodeAt(m) === Kje ? a - p % a : 1;
        return p += a - p % a, p + l > s ? 0 : p;
    }
    _computeCharColumns(e, a) {
        const { tabSize: s, columnsForFullWidthChar: l } = this._config;
        return e === Kje ? s - a % s : kj._isFullWidthCharacter(e) || e < 32 ? l : 1;
    }
    static _classifyChar(e) {
        return e < 256 ? cGt[e] : e >= 12352 && e <= 12543 || e >= 13312 && e <= 19903 || e >= 19968 && e <= 40959 ? Xje : lGt.get(e) ?? sGt;
    }
    static _canBreak(e, a, s) {
        return a !== oGt && (e === Uge && s !== Uge || e !== qge && s === qge || e === Xje && s !== Uge || s === Xje && e !== qge);
    }
    static _isHighSurrogate(e) {
        return e >= 55296 && e <= 56319;
    }
    static _isFullWidthCharacter(e) {
        return e >= 11904 && e <= 55215 || e >= 63744 && e <= 64255 || e >= 65281 && e <= 65374;
    }
}, i(uGt, "DiffWrapLayout"), dGt = uGt;

}
