import { E } from "./tslib.es6.js";
var XOh, ZOh, Bha, qLr, Uha, jha, Dhi, Nhi, zLr, QOh, JOh, $ha, Hha, Wha;
export { $ha, Bha, Dhi, Hha, JOh, Nhi, QOh, Uha, Wha, XOh, ZOh, jha, qLr, zLr };
var __wakaru_e5h_initialized = false;
export function e5h() {
if (__wakaru_e5h_initialized) return;
__wakaru_e5h_initialized = true;
"use strict";
E(), XOh = Object.defineProperty, ZOh = (t, e, n)=>e in t ? XOh(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : t[e] = n, Bha = (t, e, n)=>ZOh(t, typeof e != "symbol" ? e + "" : e, n), qLr = 9, Uha = 32, jha = 0, Dhi = 1, Nhi = 2, zLr = 3, QOh = "([{\u2018\u201C\u3008\u300A\u300C\u300E\u3010\u3014\uFF08\uFF3B\uFF5B\uFF62\xA3\xA5\uFF04\uFFE1\uFFE5+\uFF0B", JOh = " 	})]?|/&.,;\xA2\xB0\u2032\u2033\u2030\u2103\u3001\u3002\uFF61\uFF64\uFFE0\uFF0C\uFF0E\uFF1A\uFF1B\uFF1F\uFF01\uFF05\u30FB\uFF65\u309D\u309E\u30FD\u30FE\u30FC\u30A1\u30A3\u30A5\u30A7\u30A9\u30C3\u30E3\u30E5\u30E7\u30EE\u30F5\u30F6\u3041\u3043\u3045\u3047\u3049\u3063\u3083\u3085\u3087\u308E\u3095\u3096\u31F0\u31F1\u31F2\u31F3\u31F4\u31F5\u31F6\u31F7\u31F8\u31F9\u31FA\u31FB\u31FC\u31FD\u31FE\u31FF\u3005\u303B\uFF67\uFF68\uFF69\uFF6A\uFF6B\uFF6C\uFF6D\uFF6E\uFF6F\uFF70\u201D\u3009\u300B\u300D\u300F\u3011\u3015\uFF09\uFF3D\uFF5D\uFF63", $ha = new Uint8Array(256), Hha = new Map;
for (const t of [
    {
        chars: QOh,
        charClass: Dhi
    },
    {
        chars: JOh,
        charClass: Nhi
    }
])for(let e = 0; e < t.chars.length; e++){
    const n = t.chars.charCodeAt(e);
    n < 256 ? $ha[n] = t.charClass : Hha.set(n, t.charClass);
}
Wha = class V3t {
    constructor(e){
        Bha(this, "_config"), Bha(this, "_cache", new Map), this._config = e;
    }
    infoFor(e) {
        let n = this._cache.get(e);
        return n === void 0 && (n = this._computeLineWrapInfo(e), this._cache.set(e, n)), n;
    }
    rowCountFor(e) {
        return this.infoFor(e)?.breakOffsets.length ?? 1;
    }
    rowCountForPair(e, n) {
        return Math.max(e !== void 0 ? this.rowCountFor(e) : 1, n !== void 0 ? this.rowCountFor(n) : 1);
    }
    static splitTokensAtBreakOffsets(e, n) {
        const i = [];
        let r = [], s = 0, o = n[0];
        for (const a of e){
            let l = a;
            for(; l.col + l.content.length > o && s < n.length - 1;){
                const c = o - l.col;
                c > 0 && r.push({
                    ...l,
                    content: l.content.slice(0, c)
                }), i.push(r), r = [], l = {
                    ...l,
                    content: l.content.slice(Math.max(c, 0)),
                    col: o
                }, s++, o = n[s];
            }
            r.push(l);
        }
        for(i.push(r); i.length < n.length;)i.push([]);
        return i;
    }
    _computeLineWrapInfo(e) {
        const { wrapColumns: n } = this._config, i = e.length;
        if (n < 1 || i <= 1) return null;
        const r = this._computeWrappedIndentColumns(e), s = n - r, o = [];
        let a = 0, l = 0, c = n, u = V3t._classifyChar(e.charCodeAt(0)), d = this._computeCharColumns(e.charCodeAt(0), 0), h = 1;
        V3t._isHighSurrogate(e.charCodeAt(0)) && (d += 1, u = V3t._classifyChar(e.charCodeAt(1)), h++);
        for(let p = h; p < i; p++){
            const g = p, f = e.charCodeAt(p);
            let _, b;
            V3t._isHighSurrogate(f) ? (p++, _ = jha, b = 2) : (_ = V3t._classifyChar(f), b = this._computeCharColumns(f, d)), V3t._canBreak(u, f, _) && (a = g, l = d), d += b, d > c && ((a === 0 || d - l > s) && (a = g, l = d - b), o.push(a), c = l + s, a = 0), u = _;
        }
        return o.length === 0 ? null : (o.push(i), {
            breakOffsets: o,
            indentColumns: r
        });
    }
    _computeWrappedIndentColumns(e) {
        const { tabSize: n, wrapColumns: i, columnsForFullWidthChar: r } = this._config;
        let s = -1;
        for(let a = 0; a < e.length; a++){
            const l = e.charCodeAt(a);
            if (l !== Uha && l !== qLr) {
                s = a;
                break;
            }
        }
        if (s === -1) return 0;
        let o = 0;
        for(let a = 0; a < s; a++)o += e.charCodeAt(a) === qLr ? n - o % n : 1;
        return o += n - o % n, o + r > i ? 0 : o;
    }
    _computeCharColumns(e, n) {
        const { tabSize: i, columnsForFullWidthChar: r } = this._config;
        return e === qLr ? i - n % i : V3t._isFullWidthCharacter(e) || e < 32 ? r : 1;
    }
    static _classifyChar(e) {
        return e < 256 ? $ha[e] : e >= 12352 && e <= 12543 || e >= 13312 && e <= 19903 || e >= 19968 && e <= 40959 ? zLr : Hha.get(e) ?? jha;
    }
    static _canBreak(e, n, i) {
        return n !== Uha && (e === Nhi && i !== Nhi || e !== Dhi && i === Dhi || e === zLr && i !== Nhi || i === zLr && e !== Dhi);
    }
    static _isHighSurrogate(e) {
        return e >= 55296 && e <= 56319;
    }
    static _isFullWidthCharacter(e) {
        return e >= 11904 && e <= 55215 || e >= 63744 && e <= 64255 || e >= 65281 && e <= 65374;
    }
};

}
