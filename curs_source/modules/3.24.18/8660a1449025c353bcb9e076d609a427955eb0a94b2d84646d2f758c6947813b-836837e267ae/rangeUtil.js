import { Ktt, Tfn } from "./renderingContext.js";
import { E } from "./tslib.es6.js";
import { eI, lz } from "./uint.js";
var ysi;
export { ysi };
var __wakaru_aMy_initialized = false;
export function aMy() {
if (__wakaru_aMy_initialized) return;
__wakaru_aMy_initialized = true;
"use strict";
E(), lz(), Tfn(), ysi = class {
    static _createRange() {
        return this._handyReadyRange || (this._handyReadyRange = document.createRange()), this._handyReadyRange;
    }
    static _detachRange(t, e) {
        t.selectNodeContents(e);
    }
    static _readClientRects(t, e, n, i, r) {
        const s = this._createRange();
        try {
            return s.setStart(t, e), s.setEnd(n, i), s.getClientRects();
        } catch  {
            return null;
        } finally{
            this._detachRange(s, r);
        }
    }
    static _mergeAdjacentRanges(t) {
        if (t.length === 1) return t;
        t.sort(Ktt.compare);
        const e = [];
        let n = 0, i = t[0];
        for(let r = 1, s = t.length; r < s; r++){
            const o = t[r];
            i.left + i.width + .9 >= o.left ? i.width = Math.max(i.width, o.left + o.width - i.left) : (e[n++] = i, i = o);
        }
        return e[n++] = i, e;
    }
    static _createHorizontalRangesFromClientRects(t, e, n) {
        if (!t || t.length === 0) return null;
        const i = [];
        for(let r = 0, s = t.length; r < s; r++){
            const o = t[r];
            i[r] = new Ktt(Math.max(0, (o.left - e) / n), o.width / n);
        }
        return this._mergeAdjacentRanges(i);
    }
    static readHorizontalRanges(t, e, n, i, r, s) {
        const a = t.children.length - 1;
        if (0 > a) return null;
        if (e = Math.min(a, Math.max(0, e)), i = Math.min(a, Math.max(0, i)), e === i && n === r && n === 0 && !t.children[e].firstChild) {
            const d = t.children[e].getClientRects();
            return s.markDidDomLayout(), this._createHorizontalRangesFromClientRects(d, s.clientRectDeltaLeft, s.clientRectScale);
        }
        e !== i && i > 0 && r === 0 && (i--, r = eI.MAX_SAFE_SMALL_INTEGER);
        let l = t.children[e].firstChild, c = t.children[i].firstChild;
        if ((!l || !c) && (!l && n === 0 && e > 0 && (l = t.children[e - 1].firstChild, n = eI.MAX_SAFE_SMALL_INTEGER), !c && r === 0 && i > 0 && (c = t.children[i - 1].firstChild, r = eI.MAX_SAFE_SMALL_INTEGER)), !l || !c) return null;
        n = Math.min(l.textContent.length, Math.max(0, n)), r = Math.min(c.textContent.length, Math.max(0, r));
        const u = this._readClientRects(l, n, c, r, s.endNode);
        return s.markDidDomLayout(), this._createHorizontalRangesFromClientRects(u, s.clientRectDeltaLeft, s.clientRectScale);
    }
};

}
