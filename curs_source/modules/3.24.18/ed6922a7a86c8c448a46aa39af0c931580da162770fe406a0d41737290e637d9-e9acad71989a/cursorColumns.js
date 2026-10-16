import { $qr, Dqe, Ps, Wpn, gmi, yNt } from "./HVr.js";
import { En, qy } from "./charCode.js";
import { x } from "./tslib.es6.js";
var _D;
export { _D };
var __wakaru_nre_initialized = false;
export function nre() {
if (__wakaru_nre_initialized) return;
__wakaru_nre_initialized = true;
"use strict";
x(), qy(), Ps(), _D = class NXn {
    static _nextVisibleColumn(t, n, i) {
        return t === En.Tab ? NXn.nextRenderTabStop(n, i) : Dqe(t) || $qr(t) ? n + 2 : n + 1;
    }
    static visibleColumnFromColumn(t, n, i) {
        const r = Math.min(n - 1, t.length), s = t.substring(0, r), o = new yNt(s);
        let a = 0;
        for(; !o.eol();){
            const c = gmi(s, r, o.offset);
            o.nextGraphemeLength(), a = this._nextVisibleColumn(c, a, i);
        }
        return a;
    }
    static toStatusbarColumn(t, n, i) {
        const r = t.substring(0, Math.min(n - 1, t.length)), s = new Wpn(r);
        let o = 0;
        for(; !s.eol();)s.nextCodePoint() === En.Tab ? o = NXn.nextRenderTabStop(o, i) : o = o + 1;
        return o + 1;
    }
    static columnFromVisibleColumn(t, n, i) {
        if (n <= 0) return 1;
        const r = t.length, s = new yNt(t);
        let o = 0, a = 1;
        for(; !s.eol();){
            const c = gmi(t, r, s.offset);
            s.nextGraphemeLength();
            const l = this._nextVisibleColumn(c, o, i), u = s.offset + 1;
            if (l >= n) {
                const h = n - o;
                return l - n < h ? u : a;
            }
            o = l, a = u;
        }
        return r + 1;
    }
    static nextRenderTabStop(t, n) {
        return t + n - t % n;
    }
    static nextIndentTabStop(t, n) {
        return NXn.nextRenderTabStop(t, n);
    }
    static prevRenderTabStop(t, n) {
        return Math.max(0, t - 1 - (t - 1) % n);
    }
    static prevIndentTabStop(t, n) {
        return NXn.prevRenderTabStop(t, n);
    }
};

}
