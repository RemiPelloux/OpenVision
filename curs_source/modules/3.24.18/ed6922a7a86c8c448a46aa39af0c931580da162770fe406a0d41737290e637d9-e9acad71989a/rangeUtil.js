import { e5e, qOt } from "./renderingContext.js";
import { x } from "./tslib.es6.js";
import { eN, yy } from "./uint.js";
var qfn;
export { qfn };
var __wakaru_mvg_initialized = false;
export function mvg() {
if (__wakaru_mvg_initialized) return;
__wakaru_mvg_initialized = true;
"use strict";
x(), eN(), qOt(), qfn = class {
    static _createRange() {
        return this._handyReadyRange || (this._handyReadyRange = document.createRange()), this._handyReadyRange;
    }
    static _detachRange(e, t) {
        e.selectNodeContents(t);
    }
    static _readClientRects(e, t, n, i, r) {
        const s = this._createRange();
        try {
            return s.setStart(e, t), s.setEnd(n, i), s.getClientRects();
        } catch  {
            return null;
        } finally{
            this._detachRange(s, r);
        }
    }
    static _mergeAdjacentRanges(e) {
        if (e.length === 1) return e;
        e.sort(e5e.compare);
        const t = [];
        let n = 0, i = e[0];
        for(let r = 1, s = e.length; r < s; r++){
            const o = e[r];
            i.left + i.width + .9 >= o.left ? i.width = Math.max(i.width, o.left + o.width - i.left) : (t[n++] = i, i = o);
        }
        return t[n++] = i, t;
    }
    static _createHorizontalRangesFromClientRects(e, t, n) {
        if (!e || e.length === 0) return null;
        const i = [];
        for(let r = 0, s = e.length; r < s; r++){
            const o = e[r];
            i[r] = new e5e(Math.max(0, (o.left - t) / n), o.width / n);
        }
        return this._mergeAdjacentRanges(i);
    }
    static readHorizontalRanges(e, t, n, i, r, s) {
        const a = e.children.length - 1;
        if (0 > a) return null;
        if (t = Math.min(a, Math.max(0, t)), i = Math.min(a, Math.max(0, i)), t === i && n === r && n === 0 && !e.children[t].firstChild) {
            const h = e.children[t].getClientRects();
            return s.markDidDomLayout(), this._createHorizontalRangesFromClientRects(h, s.clientRectDeltaLeft, s.clientRectScale);
        }
        t !== i && i > 0 && r === 0 && (i--, r = yy.MAX_SAFE_SMALL_INTEGER);
        let c = e.children[t].firstChild, l = e.children[i].firstChild;
        if ((!c || !l) && (!c && n === 0 && t > 0 && (c = e.children[t - 1].firstChild, n = yy.MAX_SAFE_SMALL_INTEGER), !l && r === 0 && i > 0 && (l = e.children[i - 1].firstChild, r = yy.MAX_SAFE_SMALL_INTEGER)), !c || !l) return null;
        n = Math.min(c.textContent.length, Math.max(0, n)), r = Math.min(l.textContent.length, Math.max(0, r));
        const u = this._readClientRects(c, n, l, r, s.endNode);
        return s.markDidDomLayout(), this._createHorizontalRangesFromClientRects(u, s.clientRectDeltaLeft, s.clientRectScale);
    }
};

}
