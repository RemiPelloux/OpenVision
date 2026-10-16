import { Fa } from "./Iwo.js";
import { Qs, qt } from "./range.js";
import { Q$e } from "./stringBuilder.js";
import { E } from "./tslib.es6.js";
import { CAy, EAy, IAy, TAy, vFd, xAy } from "./ze.js";
var yFd, SFd, awr, awe;
export { SFd, awe, awr, yFd };
var __wakaru_lwr_initialized = false;
export function lwr() {
if (__wakaru_lwr_initialized) return;
__wakaru_lwr_initialized = true;
"use strict";
E(), Fa(), Q$e(), Qs(), yFd = class nJc {
    constructor(e, n, i, r, s, o){
        this._richEditBracketBrand = void 0, this.languageId = e, this.index = n, this.open = i, this.close = r, this.forwardRegex = s, this.reversedRegex = o, this._openSet = nJc._toSet(this.open), this._closeSet = nJc._toSet(this.close);
    }
    isOpen(e) {
        return this._openSet.has(e);
    }
    isClose(e) {
        return this._closeSet.has(e);
    }
    static _toSet(e) {
        const n = new Set;
        for (const i of e)n.add(i);
        return n;
    }
}, SFd = class {
    constructor(t, e){
        this._richEditBracketsBrand = void 0;
        const n = CAy(e);
        this.brackets = n.map((i, r)=>new yFd(t, r, i.open, i.close, TAy(i.open, i.close, n, r), EAy(i.open, i.close, n, r))), this.forwardRegex = IAy(this.brackets), this.reversedRegex = xAy(this.brackets), this.textIsBracket = {}, this.textIsOpenBracket = {}, this.maxBracketLength = 0;
        for (const i of this.brackets){
            for (const r of i.open)this.textIsBracket[r] = i, this.textIsOpenBracket[r] = !0, this.maxBracketLength = Math.max(this.maxBracketLength, r.length);
            for (const r of i.close)this.textIsBracket[r] = i, this.textIsOpenBracket[r] = !1, this.maxBracketLength = Math.max(this.maxBracketLength, r.length);
        }
    }
}, awr = (function() {
    function t(i) {
        const r = new Uint16Array(i.length);
        let s = 0;
        for(let o = i.length - 1; o >= 0; o--)r[s++] = i.charCodeAt(o);
        return vFd().decode(r);
    }
    let e = null, n = null;
    return function(r) {
        return e !== r && (e = r, n = t(e)), n;
    };
})(), awe = class {
    static _findPrevBracketInText(t, e, n, i) {
        const r = n.match(t);
        if (!r) return null;
        const s = n.length - (r.index || 0), o = r[0].length, a = i + s;
        return new qt(e, a - o + 1, e, a + 1);
    }
    static findPrevBracketInRange(t, e, n, i, r) {
        const o = awr(n).substring(n.length - r, n.length - i);
        return this._findPrevBracketInText(t, e, o, i);
    }
    static findNextBracketInText(t, e, n, i) {
        const r = n.match(t);
        if (!r) return null;
        const s = r.index || 0, o = r[0].length;
        if (o === 0) return null;
        const a = i + s;
        return new qt(e, a + 1, e, a + 1 + o);
    }
    static findNextBracketInRange(t, e, n, i, r) {
        const s = n.substring(i, r);
        return this.findNextBracketInText(t, e, s, i);
    }
};

}
