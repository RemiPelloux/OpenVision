import { ECo, Fa, Wvt, hmr, rZn, sZn } from "./Iwo.js";
import { Cw, ti } from "./charCode.js";
import { E } from "./tslib.es6.js";
var sL;
export { sL };
var __wakaru_zve_initialized = false;
export function zve() {
if (__wakaru_zve_initialized) return;
__wakaru_zve_initialized = true;
"use strict";
E(), Cw(), Fa(), sL = class bZi {
    static _nextVisibleColumn(e, n, i) {
        return e === ti.Tab ? bZi.nextRenderTabStop(n, i) : Wvt(e) || ECo(e) ? n + 2 : n + 1;
    }
    static visibleColumnFromColumn(e, n, i) {
        const r = Math.min(n - 1, e.length), s = e.substring(0, r), o = new sZn(s);
        let a = 0;
        for(; !o.eol();){
            const l = hmr(s, r, o.offset);
            o.nextGraphemeLength(), a = this._nextVisibleColumn(l, a, i);
        }
        return a;
    }
    static toStatusbarColumn(e, n, i) {
        const r = e.substring(0, Math.min(n - 1, e.length)), s = new rZn(r);
        let o = 0;
        for(; !s.eol();)s.nextCodePoint() === ti.Tab ? o = bZi.nextRenderTabStop(o, i) : o = o + 1;
        return o + 1;
    }
    static columnFromVisibleColumn(e, n, i) {
        if (n <= 0) return 1;
        const r = e.length, s = new sZn(e);
        let o = 0, a = 1;
        for(; !s.eol();){
            const l = hmr(e, r, s.offset);
            s.nextGraphemeLength();
            const c = this._nextVisibleColumn(l, o, i), u = s.offset + 1;
            if (c >= n) {
                const d = n - o;
                return c - n < d ? u : a;
            }
            o = c, a = u;
        }
        return r + 1;
    }
    static nextRenderTabStop(e, n) {
        return e + n - e % n;
    }
    static nextIndentTabStop(e, n) {
        return bZi.nextRenderTabStop(e, n);
    }
    static prevRenderTabStop(e, n) {
        return Math.max(0, e - 1 - (e - 1) % n);
    }
    static prevIndentTabStop(e, n) {
        return bZi.prevRenderTabStop(e, n);
    }
};

}
