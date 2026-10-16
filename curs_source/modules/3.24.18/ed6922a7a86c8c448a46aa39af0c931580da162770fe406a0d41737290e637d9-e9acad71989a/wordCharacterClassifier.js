import { En, qy } from "./charCode.js";
import { Ymn, k2t } from "./characterClassifier.js";
import { X9, nze } from "./date.js";
import { ag, oc } from "./map.js";
import { x } from "./tslib.es6.js";
var qMc, lXr;
export { lXr, qMc };
var __wakaru_Zmn_initialized = false;
export function Zmn() {
if (__wakaru_Zmn_initialized) return;
__wakaru_Zmn_initialized = true;
"use strict";
x(), qy(), X9(), oc(), k2t(), qMc = class extends Ymn {
    constructor(e, t){
        super(0), this._segmenter = null, this._cachedLine = null, this._cachedSegments = [], this.intlSegmenterLocales = t, this.intlSegmenterLocales.length > 0 ? this._segmenter = nze.Segmenter(this.intlSegmenterLocales, {
            granularity: "word"
        }) : this._segmenter = null;
        for(let n = 0, i = e.length; n < i; n++)this.set(e.charCodeAt(n), 2);
        this.set(En.Space, 1), this.set(En.Tab, 1);
    }
    findPrevIntlWordBeforeOrAtOffset(e, t) {
        let n = null;
        for (const i of this._getIntlSegmenterWordsOnLine(e)){
            if (i.index > t) break;
            n = i;
        }
        return n;
    }
    findNextIntlWordAtOrAfterOffset(e, t) {
        for (const n of this._getIntlSegmenterWordsOnLine(e))if (!(n.index < t)) return n;
        return null;
    }
    _getIntlSegmenterWordsOnLine(e) {
        return this._segmenter ? this._cachedLine === e ? this._cachedSegments : (this._cachedLine = e, this._cachedSegments = this._filterWordSegments(this._segmenter.segment(e)), this._cachedSegments) : [];
    }
    _filterWordSegments(e) {
        const t = [];
        for (const n of e)this._isWordLike(n) && t.push(n);
        return t;
    }
    _isWordLike(e) {
        return !!e.isWordLike;
    }
}, lXr = new ag(10);

}
