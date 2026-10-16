import { Bt } from "./nls.js";
import { Qs, qt } from "./range.js";
import { E } from "./tslib.es6.js";
var CWo;
export { CWo };
var __wakaru_lHd_initialized = false;
export function lHd() {
if (__wakaru_lHd_initialized) return;
__wakaru_lHd_initialized = true;
"use strict";
E(), Qs(), Bt(), CWo = class RZi {
    static _getPageOfLine(e, n) {
        return Math.floor((e - 1) / n);
    }
    static _getRangeForPage(e, n) {
        const i = e * n, r = i + 1, s = i + n;
        return new qt(r, 1, s + 1, 1);
    }
    static fromEditorSelection(e, n, i, r) {
        const o = RZi._getPageOfLine(n.startLineNumber, i), a = RZi._getRangeForPage(o, i), l = RZi._getPageOfLine(n.endLineNumber, i), c = RZi._getRangeForPage(l, i);
        let u = a.intersectRanges(new qt(1, 1, n.startLineNumber, n.startColumn));
        if (r && e.getValueLengthInRange(u, 1) > 500) {
            const b = e.modifyPosition(u.getEndPosition(), -500);
            u = qt.fromPositions(b, u.getEndPosition());
        }
        const d = e.getValueInRange(u, 1), h = e.getLineCount(), p = e.getLineMaxColumn(h);
        let g = c.intersectRanges(new qt(n.endLineNumber, n.endColumn, h, p));
        if (r && e.getValueLengthInRange(g, 1) > 500) {
            const b = e.modifyPosition(g.getStartPosition(), 500);
            g = qt.fromPositions(g.getStartPosition(), b);
        }
        const f = e.getValueInRange(g, 1);
        let _;
        if (o === l || o + 1 === l) _ = e.getValueInRange(n, 1);
        else {
            const b = a.intersectRanges(n), y = c.intersectRanges(n);
            _ = e.getValueInRange(b, 1) + "\u2026" + e.getValueInRange(y, 1);
        }
        return r && _.length > 2 * 500 && (_ = _.substring(0, 500) + "\u2026" + _.substring(_.length - 500, _.length)), {
            value: d + _ + f,
            selection: n,
            selectionStart: d.length,
            selectionEnd: d.length + _.length,
            startPositionWithinEditor: u.getStartPosition(),
            newlineCountBeforeSelection: u.endLineNumber - u.startLineNumber
        };
    }
};

}
