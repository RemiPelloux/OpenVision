import { x } from "./tslib.es6.js";
var v2l, _2l, e0s, ARi, t0s, n0s, g0n, f0n, RRi, b2l, y2l, i0s, r0s, s0s;
export { ARi, RRi, _2l, b2l, e0s, f0n, g0n, i0s, n0s, r0s, s0s, t0s, v2l, y2l };
var __wakaru_S2l_initialized = false;
export function S2l() {
if (__wakaru_S2l_initialized) return;
__wakaru_S2l_initialized = true;
"use strict";
x(), v2l = Object.defineProperty, _2l = (e, t, n)=>t in e ? v2l(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n, e0s = (e, t, n)=>_2l(e, typeof t != "symbol" ? t + "" : t, n), ARi = 9, t0s = 32, n0s = 0, g0n = 1, f0n = 2, RRi = 3, b2l = "([{\u2018\u201C\u3008\u300A\u300C\u300E\u3010\u3014\uFF08\uFF3B\uFF5B\uFF62\xA3\xA5\uFF04\uFFE1\uFFE5+\uFF0B", y2l = " 	})]?|/&.,;\xA2\xB0\u2032\u2033\u2030\u2103\u3001\u3002\uFF61\uFF64\uFFE0\uFF0C\uFF0E\uFF1A\uFF1B\uFF1F\uFF01\uFF05\u30FB\uFF65\u309D\u309E\u30FD\u30FE\u30FC\u30A1\u30A3\u30A5\u30A7\u30A9\u30C3\u30E3\u30E5\u30E7\u30EE\u30F5\u30F6\u3041\u3043\u3045\u3047\u3049\u3063\u3083\u3085\u3087\u308E\u3095\u3096\u31F0\u31F1\u31F2\u31F3\u31F4\u31F5\u31F6\u31F7\u31F8\u31F9\u31FA\u31FB\u31FC\u31FD\u31FE\u31FF\u3005\u303B\uFF67\uFF68\uFF69\uFF6A\uFF6B\uFF6C\uFF6D\uFF6E\uFF6F\uFF70\u201D\u3009\u300B\u300D\u300F\u3011\u3015\uFF09\uFF3D\uFF5D\uFF63", i0s = new Uint8Array(256), r0s = new Map;
for (const e of [
    {
        chars: b2l,
        charClass: g0n
    },
    {
        chars: y2l,
        charClass: f0n
    }
])for(let t = 0; t < e.chars.length; t++){
    const n = e.chars.charCodeAt(t);
    n < 256 ? i0s[n] = e.charClass : r0s.set(n, e.charClass);
}
s0s = class Xot {
    constructor(t){
        e0s(this, "_config"), e0s(this, "_cache", new Map), this._config = t;
    }
    infoFor(t) {
        let n = this._cache.get(t);
        return n === void 0 && (n = this._computeLineWrapInfo(t), this._cache.set(t, n)), n;
    }
    rowCountFor(t) {
        return this.infoFor(t)?.breakOffsets.length ?? 1;
    }
    rowCountForPair(t, n) {
        return Math.max(t !== void 0 ? this.rowCountFor(t) : 1, n !== void 0 ? this.rowCountFor(n) : 1);
    }
    static splitTokensAtBreakOffsets(t, n) {
        const i = [];
        let r = [], s = 0, o = n[0];
        for (const a of t){
            let c = a;
            for(; c.col + c.content.length > o && s < n.length - 1;){
                const l = o - c.col;
                l > 0 && r.push({
                    ...c,
                    content: c.content.slice(0, l)
                }), i.push(r), r = [], c = {
                    ...c,
                    content: c.content.slice(Math.max(l, 0)),
                    col: o
                }, s++, o = n[s];
            }
            r.push(c);
        }
        for(i.push(r); i.length < n.length;)i.push([]);
        return i;
    }
    _computeLineWrapInfo(t) {
        const { wrapColumns: n } = this._config, i = t.length;
        if (n < 1 || i <= 1) return null;
        const r = this._computeWrappedIndentColumns(t), s = n - r, o = [];
        let a = 0, c = 0, l = n, u = Xot._classifyChar(t.charCodeAt(0)), h = this._computeCharColumns(t.charCodeAt(0), 0), p = 1;
        Xot._isHighSurrogate(t.charCodeAt(0)) && (h += 1, u = Xot._classifyChar(t.charCodeAt(1)), p++);
        for(let g = p; g < i; g++){
            const f = g, v = t.charCodeAt(g);
            let b, y;
            Xot._isHighSurrogate(v) ? (g++, b = n0s, y = 2) : (b = Xot._classifyChar(v), y = this._computeCharColumns(v, h)), Xot._canBreak(u, v, b) && (a = f, c = h), h += y, h > l && ((a === 0 || h - c > s) && (a = f, c = h - y), o.push(a), l = c + s, a = 0), u = b;
        }
        return o.length === 0 ? null : (o.push(i), {
            breakOffsets: o,
            indentColumns: r
        });
    }
    _computeWrappedIndentColumns(t) {
        const { tabSize: n, wrapColumns: i, columnsForFullWidthChar: r } = this._config;
        let s = -1;
        for(let a = 0; a < t.length; a++){
            const c = t.charCodeAt(a);
            if (c !== t0s && c !== ARi) {
                s = a;
                break;
            }
        }
        if (s === -1) return 0;
        let o = 0;
        for(let a = 0; a < s; a++)o += t.charCodeAt(a) === ARi ? n - o % n : 1;
        return o += n - o % n, o + r > i ? 0 : o;
    }
    _computeCharColumns(t, n) {
        const { tabSize: i, columnsForFullWidthChar: r } = this._config;
        return t === ARi ? i - n % i : Xot._isFullWidthCharacter(t) || t < 32 ? r : 1;
    }
    static _classifyChar(t) {
        return t < 256 ? i0s[t] : t >= 12352 && t <= 12543 || t >= 13312 && t <= 19903 || t >= 19968 && t <= 40959 ? RRi : r0s.get(t) ?? n0s;
    }
    static _canBreak(t, n, i) {
        return n !== t0s && (t === f0n && i !== f0n || t !== g0n && i === g0n || t === RRi && i !== f0n || i === RRi && t !== g0n);
    }
    static _isHighSurrogate(t) {
        return t >= 55296 && t <= 56319;
    }
    static _isFullWidthCharacter(t) {
        return t >= 11904 && t <= 55215 || t >= 63744 && t <= 64255 || t >= 65281 && t <= 65374;
    }
};

}
