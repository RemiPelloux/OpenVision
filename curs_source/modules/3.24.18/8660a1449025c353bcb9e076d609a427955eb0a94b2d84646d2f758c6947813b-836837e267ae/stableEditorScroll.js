import { E } from "./tslib.es6.js";
var tnt;
export { tnt };
var __wakaru_Ufn_initialized = false;
export function Ufn() {
if (__wakaru_Ufn_initialized) return;
__wakaru_Ufn_initialized = true;
"use strict";
E(), tnt = class wJc {
    constructor(e, n, i, r, s){
        this._initialScrollTop = e, this._initialContentHeight = n, this._visiblePosition = i, this._visiblePositionScrollDelta = r, this._cursorPosition = s;
    }
    static capture(e) {
        if (e.getScrollTop() === 0 || e.hasPendingScrollAnimation()) return new wJc(e.getScrollTop(), e.getContentHeight(), null, 0, null);
        let n = null, i = 0;
        const r = e.getVisibleRanges();
        if (r.length > 0) {
            n = r[0].getStartPosition();
            const s = e.getTopForPosition(n.lineNumber, n.column);
            i = e.getScrollTop() - s;
        }
        return new wJc(e.getScrollTop(), e.getContentHeight(), n, i, e.getPosition());
    }
    restore(e) {
        if (!(this._initialContentHeight === e.getContentHeight() && this._initialScrollTop === e.getScrollTop()) && this._visiblePosition) {
            const n = e.getTopForPosition(this._visiblePosition.lineNumber, this._visiblePosition.column);
            e.setScrollTop(n + this._visiblePositionScrollDelta);
        }
    }
    restoreRelativeVerticalPositionOfCursor(e) {
        if (this._initialContentHeight === e.getContentHeight() && this._initialScrollTop === e.getScrollTop()) return;
        const n = e.getPosition();
        if (!this._cursorPosition || !n) return;
        const i = e.getTopForLineNumber(n.lineNumber) - e.getTopForLineNumber(this._cursorPosition.lineNumber);
        e.setScrollTop(e.getScrollTop() + i, 1);
    }
};

}
