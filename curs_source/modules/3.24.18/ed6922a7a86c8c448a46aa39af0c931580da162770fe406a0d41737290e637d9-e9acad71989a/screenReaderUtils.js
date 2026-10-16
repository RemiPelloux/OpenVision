import { rt } from "./nls.js";
import { dt, qi } from "./range.js";
import { x } from "./tslib.es6.js";
var yts;
export { yts };
var __wakaru_K6c_initialized = false;
export function K6c() {
if (__wakaru_K6c_initialized) return;
__wakaru_K6c_initialized = true;
"use strict";
x(), qi(), rt(), yts = class zXn {
    static _getPageOfLine(t, n) {
        return Math.floor((t - 1) / n);
    }
    static _getRangeForPage(t, n) {
        const i = t * n, r = i + 1, s = i + n;
        return new dt(r, 1, s + 1, 1);
    }
    static fromEditorSelection(t, n, i, r) {
        const o = zXn._getPageOfLine(n.startLineNumber, i), a = zXn._getRangeForPage(o, i), c = zXn._getPageOfLine(n.endLineNumber, i), l = zXn._getRangeForPage(c, i);
        let u = a.intersectRanges(new dt(1, 1, n.startLineNumber, n.startColumn));
        if (r && t.getValueLengthInRange(u, 1) > 500) {
            const y = t.modifyPosition(u.getEndPosition(), -500);
            u = dt.fromPositions(y, u.getEndPosition());
        }
        const h = t.getValueInRange(u, 1), p = t.getLineCount(), g = t.getLineMaxColumn(p);
        let f = l.intersectRanges(new dt(n.endLineNumber, n.endColumn, p, g));
        if (r && t.getValueLengthInRange(f, 1) > 500) {
            const y = t.modifyPosition(f.getStartPosition(), 500);
            f = dt.fromPositions(f.getStartPosition(), y);
        }
        const v = t.getValueInRange(f, 1);
        let b;
        if (o === c || o + 1 === c) b = t.getValueInRange(n, 1);
        else {
            const y = a.intersectRanges(n), T = l.intersectRanges(n);
            b = t.getValueInRange(y, 1) + "\u2026" + t.getValueInRange(T, 1);
        }
        return r && b.length > 2 * 500 && (b = b.substring(0, 500) + "\u2026" + b.substring(b.length - 500, b.length)), {
            value: h + b + v,
            selection: n,
            selectionStart: h.length,
            selectionEnd: h.length + b.length,
            startPositionWithinEditor: u.getStartPosition(),
            newlineCountBeforeSelection: u.endLineNumber - u.startLineNumber
        };
    }
};

}
