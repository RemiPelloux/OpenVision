import { Ps } from "./HVr.js";
import { XMc, _pg, bpg, fpg, gpg, vpg } from "./qIc.js";
import { dt, qi } from "./range.js";
import { lwe } from "./stringBuilder.js";
import { x } from "./tslib.es6.js";
var JMc, ePc, _fi, mle;
export { JMc, _fi, ePc, mle };
var __wakaru_bfi_initialized = false;
export function bfi() {
if (__wakaru_bfi_initialized) return;
__wakaru_bfi_initialized = true;
"use strict";
x(), Ps(), lwe(), qi(), JMc = class _Ia {
    constructor(t, n, i, r, s, o){
        this._richEditBracketBrand = void 0, this.languageId = t, this.index = n, this.open = i, this.close = r, this.forwardRegex = s, this.reversedRegex = o, this._openSet = _Ia._toSet(this.open), this._closeSet = _Ia._toSet(this.close);
    }
    isOpen(t) {
        return this._openSet.has(t);
    }
    isClose(t) {
        return this._closeSet.has(t);
    }
    static _toSet(t) {
        const n = new Set;
        for (const i of t)n.add(i);
        return n;
    }
}, ePc = class {
    constructor(e, t){
        this._richEditBracketsBrand = void 0;
        const n = gpg(t);
        this.brackets = n.map((i, r)=>new JMc(e, r, i.open, i.close, fpg(i.open, i.close, n, r), vpg(i.open, i.close, n, r))), this.forwardRegex = _pg(this.brackets), this.reversedRegex = bpg(this.brackets), this.textIsBracket = {}, this.textIsOpenBracket = {}, this.maxBracketLength = 0;
        for (const i of this.brackets){
            for (const r of i.open)this.textIsBracket[r] = i, this.textIsOpenBracket[r] = !0, this.maxBracketLength = Math.max(this.maxBracketLength, r.length);
            for (const r of i.close)this.textIsBracket[r] = i, this.textIsOpenBracket[r] = !1, this.maxBracketLength = Math.max(this.maxBracketLength, r.length);
        }
    }
}, _fi = (function() {
    function e(i) {
        const r = new Uint16Array(i.length);
        let s = 0;
        for(let o = i.length - 1; o >= 0; o--)r[s++] = i.charCodeAt(o);
        return XMc().decode(r);
    }
    let t = null, n = null;
    return function(r) {
        return t !== r && (t = r, n = e(t)), n;
    };
})(), mle = class {
    static _findPrevBracketInText(e, t, n, i) {
        const r = n.match(e);
        if (!r) return null;
        const s = n.length - (r.index || 0), o = r[0].length, a = i + s;
        return new dt(t, a - o + 1, t, a + 1);
    }
    static findPrevBracketInRange(e, t, n, i, r) {
        const o = _fi(n).substring(n.length - r, n.length - i);
        return this._findPrevBracketInText(e, t, o, i);
    }
    static findNextBracketInText(e, t, n, i) {
        const r = n.match(e);
        if (!r) return null;
        const s = r.index || 0, o = r[0].length;
        if (o === 0) return null;
        const a = i + s;
        return new dt(t, a + 1, t, a + 1 + o);
    }
    static findNextBracketInRange(e, t, n, i, r) {
        const s = n.substring(i, r);
        return this.findNextBracketInText(e, t, s, i);
    }
};

}
