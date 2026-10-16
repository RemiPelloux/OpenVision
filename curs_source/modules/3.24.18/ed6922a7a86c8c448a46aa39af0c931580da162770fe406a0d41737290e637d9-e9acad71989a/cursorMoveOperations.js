import { Ps, Uqr, Vxc } from "./HVr.js";
import { VMc, dfi } from "./cursorAtomicMoveOperations.js";
import { _D, nre } from "./cursorColumns.js";
import { iW, ire } from "./cursorCommon.js";
import { Yn, ya } from "./position.js";
import { dt, qi } from "./range.js";
import { x } from "./tslib.es6.js";
import { eN, yy } from "./uint.js";
var hfi, vM;
export { hfi, vM };
var __wakaru_sXr_initialized = false;
export function sXr() {
if (__wakaru_sXr_initialized) return;
__wakaru_sXr_initialized = true;
"use strict";
x(), Ps(), eN(), nre(), ya(), qi(), VMc(), ire(), hfi = class {
    constructor(e, t, n){
        this._cursorPositionBrand = void 0, this.lineNumber = e, this.column = t, this.leftoverVisibleColumns = n;
    }
}, vM = class iQ {
    static leftPosition(t, n) {
        if (n.column > t.getLineMinColumn(n.lineNumber)) return n.delta(void 0, -Vxc(t.getLineContent(n.lineNumber), n.column - 1));
        if (n.lineNumber > 1) {
            const i = n.lineNumber - 1;
            return new Yn(i, t.getLineMaxColumn(i));
        } else return n;
    }
    static leftPositionAtomicSoftTabs(t, n, i) {
        if (n.column <= t.getLineIndentColumn(n.lineNumber)) {
            const r = t.getLineMinColumn(n.lineNumber), s = t.getLineContent(n.lineNumber), o = dfi.atomicPosition(s, n.column - 1, i, 0);
            if (o !== -1 && o + 1 >= r) return new Yn(n.lineNumber, o + 1);
        }
        return this.leftPosition(t, n);
    }
    static left(t, n, i) {
        const r = t.stickyTabStops ? iQ.leftPositionAtomicSoftTabs(n, i, t.tabSize) : iQ.leftPosition(n, i);
        return new hfi(r.lineNumber, r.column, 0);
    }
    static moveLeft(t, n, i, r, s) {
        let o, a;
        if (i.hasSelection() && !r) o = i.selection.startLineNumber, a = i.selection.startColumn;
        else {
            const c = i.position.delta(void 0, -(s - 1)), l = n.normalizePosition(iQ.clipPositionColumn(c, n), 0), u = iQ.left(t, n, l);
            o = u.lineNumber, a = u.column;
        }
        return i.move(r, o, a, 0);
    }
    static clipPositionColumn(t, n) {
        return new Yn(t.lineNumber, iQ.clipRange(t.column, n.getLineMinColumn(t.lineNumber), n.getLineMaxColumn(t.lineNumber)));
    }
    static clipRange(t, n, i) {
        return t < n ? n : t > i ? i : t;
    }
    static rightPosition(t, n, i) {
        return i < t.getLineMaxColumn(n) ? i = i + Uqr(t.getLineContent(n), i - 1) : n < t.getLineCount() && (n = n + 1, i = t.getLineMinColumn(n)), new Yn(n, i);
    }
    static rightPositionAtomicSoftTabs(t, n, i, r, s) {
        if (i < t.getLineIndentColumn(n)) {
            const o = t.getLineContent(n), a = dfi.atomicPosition(o, i - 1, r, 1);
            if (a !== -1) return new Yn(n, a + 1);
        }
        return this.rightPosition(t, n, i);
    }
    static right(t, n, i) {
        const r = t.stickyTabStops ? iQ.rightPositionAtomicSoftTabs(n, i.lineNumber, i.column, t.tabSize, t.indentSize) : iQ.rightPosition(n, i.lineNumber, i.column);
        return new hfi(r.lineNumber, r.column, 0);
    }
    static moveRight(t, n, i, r, s) {
        let o, a;
        if (i.hasSelection() && !r) o = i.selection.endLineNumber, a = i.selection.endColumn;
        else {
            const c = i.position.delta(void 0, s - 1), l = n.normalizePosition(iQ.clipPositionColumn(c, n), 1), u = iQ.right(t, n, l);
            o = u.lineNumber, a = u.column;
        }
        return i.move(r, o, a, 0);
    }
    static vertical(t, n, i, r, s, o, a, c) {
        const l = _D.visibleColumnFromColumn(n.getLineContent(i), r, t.tabSize) + s, u = n.getLineCount(), h = i === 1 && r === 1, p = i === u && r === n.getLineMaxColumn(i), g = o < i ? h : p;
        if (i = o, i < 1 ? (i = 1, a ? r = n.getLineMinColumn(i) : r = Math.min(n.getLineMaxColumn(i), r)) : i > u ? (i = u, a ? r = n.getLineMaxColumn(i) : r = Math.min(n.getLineMaxColumn(i), r)) : r = t.columnFromVisibleColumn(n, i, l), g ? s = 0 : s = l - _D.visibleColumnFromColumn(n.getLineContent(i), r, t.tabSize), c !== void 0) {
            const f = new Yn(i, r), v = n.normalizePosition(f, c);
            s = s + (r - v.column), i = v.lineNumber, r = v.column;
        }
        return new hfi(i, r, s);
    }
    static down(t, n, i, r, s, o, a) {
        return this.vertical(t, n, i, r, s, i + o, a, 4);
    }
    static moveDown(t, n, i, r, s) {
        let o, a;
        i.hasSelection() && !r ? (o = i.selection.endLineNumber, a = i.selection.endColumn) : (o = i.position.lineNumber, a = i.position.column);
        let c = 0, l;
        do if (l = iQ.down(t, n, o + c, a, i.leftoverVisibleColumns, s, !0), n.normalizePosition(new Yn(l.lineNumber, l.column), 2).lineNumber > o) break;
        while (c++ < 10 && o + c < n.getLineCount())
        return i.move(r, l.lineNumber, l.column, l.leftoverVisibleColumns);
    }
    static translateDown(t, n, i) {
        const r = i.selection, s = iQ.down(t, n, r.selectionStartLineNumber, r.selectionStartColumn, i.selectionStartLeftoverVisibleColumns, 1, !1), o = iQ.down(t, n, r.positionLineNumber, r.positionColumn, i.leftoverVisibleColumns, 1, !1);
        return new iW(new dt(s.lineNumber, s.column, s.lineNumber, s.column), 0, s.leftoverVisibleColumns, new Yn(o.lineNumber, o.column), o.leftoverVisibleColumns);
    }
    static up(t, n, i, r, s, o, a) {
        return this.vertical(t, n, i, r, s, i - o, a, 3);
    }
    static moveUp(t, n, i, r, s) {
        let o, a;
        i.hasSelection() && !r ? (o = i.selection.startLineNumber, a = i.selection.startColumn) : (o = i.position.lineNumber, a = i.position.column);
        const c = iQ.up(t, n, o, a, i.leftoverVisibleColumns, s, !0);
        return i.move(r, c.lineNumber, c.column, c.leftoverVisibleColumns);
    }
    static translateUp(t, n, i) {
        const r = i.selection, s = iQ.up(t, n, r.selectionStartLineNumber, r.selectionStartColumn, i.selectionStartLeftoverVisibleColumns, 1, !1), o = iQ.up(t, n, r.positionLineNumber, r.positionColumn, i.leftoverVisibleColumns, 1, !1);
        return new iW(new dt(s.lineNumber, s.column, s.lineNumber, s.column), 0, s.leftoverVisibleColumns, new Yn(o.lineNumber, o.column), o.leftoverVisibleColumns);
    }
    static _isBlankLine(t, n) {
        return t.getLineFirstNonWhitespaceColumn(n) === 0;
    }
    static moveToPrevBlankLine(t, n, i, r) {
        let s = i.position.lineNumber;
        for(; s > 1 && this._isBlankLine(n, s);)s--;
        for(; s > 1 && !this._isBlankLine(n, s);)s--;
        return i.move(r, s, n.getLineMinColumn(s), 0);
    }
    static moveToNextBlankLine(t, n, i, r) {
        const s = n.getLineCount();
        let o = i.position.lineNumber;
        for(; o < s && this._isBlankLine(n, o);)o++;
        for(; o < s && !this._isBlankLine(n, o);)o++;
        return i.move(r, o, n.getLineMinColumn(o), 0);
    }
    static moveToBeginningOfLine(t, n, i, r) {
        const s = i.position.lineNumber, o = n.getLineMinColumn(s), a = n.getLineFirstNonWhitespaceColumn(s) || o;
        let c;
        return i.position.column === a ? c = o : c = a, i.move(r, s, c, 0);
    }
    static moveToEndOfLine(t, n, i, r, s) {
        const o = i.position.lineNumber, a = n.getLineMaxColumn(o);
        return i.move(r, o, a, s ? yy.MAX_SAFE_SMALL_INTEGER - a : 0);
    }
    static moveToBeginningOfBuffer(t, n, i, r) {
        return i.move(r, 1, 1, 0);
    }
    static moveToEndOfBuffer(t, n, i, r) {
        const s = n.getLineCount(), o = n.getLineMaxColumn(s);
        return i.move(r, s, o, 0);
    }
};

}
