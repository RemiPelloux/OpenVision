import { Cw, ti } from "./charCode.js";
import { Tgn, Uii } from "./characterClassifier.js";
import { R9t, yY } from "./date.js";
import { du, kv } from "./map.js";
import { E } from "./tslib.es6.js";
var pFd, nUo;
export { nUo, pFd };
var __wakaru_$ii_initialized = false;
export function $ii() {
if (__wakaru_$ii_initialized) return;
__wakaru_$ii_initialized = true;
"use strict";
E(), Cw(), yY(), du(), Tgn(), pFd = class extends Uii {
    constructor(t, e){
        super(0), this._segmenter = null, this._cachedLine = null, this._cachedSegments = [], this.intlSegmenterLocales = e, this.intlSegmenterLocales.length > 0 ? this._segmenter = R9t.Segmenter(this.intlSegmenterLocales, {
            granularity: "word"
        }) : this._segmenter = null;
        for(let n = 0, i = t.length; n < i; n++)this.set(t.charCodeAt(n), 2);
        this.set(ti.Space, 1), this.set(ti.Tab, 1);
    }
    findPrevIntlWordBeforeOrAtOffset(t, e) {
        let n = null;
        for (const i of this._getIntlSegmenterWordsOnLine(t)){
            if (i.index > e) break;
            n = i;
        }
        return n;
    }
    findNextIntlWordAtOrAfterOffset(t, e) {
        for (const n of this._getIntlSegmenterWordsOnLine(t))if (!(n.index < e)) return n;
        return null;
    }
    _getIntlSegmenterWordsOnLine(t) {
        return this._segmenter ? this._cachedLine === t ? this._cachedSegments : (this._cachedLine = t, this._cachedSegments = this._filterWordSegments(this._segmenter.segment(t)), this._cachedSegments) : [];
    }
    _filterWordSegments(t) {
        const e = [];
        for (const n of t)this._isWordLike(n) && e.push(n);
        return e;
    }
    _isWordLike(t) {
        return !!t.isWordLike;
    }
}, nUo = new kv(10);

}
