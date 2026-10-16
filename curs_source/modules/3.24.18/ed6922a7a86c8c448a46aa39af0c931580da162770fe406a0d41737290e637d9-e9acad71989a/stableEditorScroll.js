import { x } from "./tslib.es6.js";
var nRe;
export { nRe };
var __wakaru_Zpt_initialized = false;
export function Zpt() {
if (__wakaru_Zpt_initialized) return;
__wakaru_Zpt_initialized = true;
"use strict";
x(), nRe = class $Ia {
    constructor(t, n, i, r, s){
        this._initialScrollTop = t, this._initialContentHeight = n, this._visiblePosition = i, this._visiblePositionScrollDelta = r, this._cursorPosition = s;
    }
    static capture(t) {
        if (t.getScrollTop() === 0 || t.hasPendingScrollAnimation()) return new $Ia(t.getScrollTop(), t.getContentHeight(), null, 0, null);
        let n = null, i = 0;
        const r = t.getVisibleRanges();
        if (r.length > 0) {
            n = r[0].getStartPosition();
            const s = t.getTopForPosition(n.lineNumber, n.column);
            i = t.getScrollTop() - s;
        }
        return new $Ia(t.getScrollTop(), t.getContentHeight(), n, i, t.getPosition());
    }
    restore(t) {
        if (!(this._initialContentHeight === t.getContentHeight() && this._initialScrollTop === t.getScrollTop()) && this._visiblePosition) {
            const n = t.getTopForPosition(this._visiblePosition.lineNumber, this._visiblePosition.column);
            t.setScrollTop(n + this._visiblePositionScrollDelta);
        }
    }
    restoreRelativeVerticalPositionOfCursor(t) {
        if (this._initialContentHeight === t.getContentHeight() && this._initialScrollTop === t.getScrollTop()) return;
        const n = t.getPosition();
        if (!this._cursorPosition || !n) return;
        const i = t.getTopForLineNumber(n.lineNumber) - t.getTopForLineNumber(this._cursorPosition.lineNumber);
        t.setScrollTop(t.getScrollTop() + i, 1);
    }
};

}
