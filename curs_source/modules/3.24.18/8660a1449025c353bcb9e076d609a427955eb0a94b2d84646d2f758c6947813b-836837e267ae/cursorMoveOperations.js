import { Fa, TCo, yXu } from "./Iwo.js";
import { Jkr, dFd } from "./cursorAtomicMoveOperations.js";
import { sL, zve } from "./cursorColumns.js";
import { swe, wQ } from "./cursorCommon.js";
import { er, jc } from "./position.js";
import { Qs, qt } from "./range.js";
import { E } from "./tslib.es6.js";
import { eI, lz } from "./uint.js";
var ewr, mO;
export { ewr, mO };
var __wakaru_Z7o_initialized = false;
export function Z7o() {
if (__wakaru_Z7o_initialized) return;
__wakaru_Z7o_initialized = true;
"use strict";
E(), Fa(), lz(), zve(), jc(), Qs(), dFd(), swe(), ewr = class {
    constructor(t, e, n){
        this._cursorPositionBrand = void 0, this.lineNumber = t, this.column = e, this.leftoverVisibleColumns = n;
    }
}, mO = class fue {
    static leftPosition(e, n) {
        if (n.column > e.getLineMinColumn(n.lineNumber)) return n.delta(void 0, -yXu(e.getLineContent(n.lineNumber), n.column - 1));
        if (n.lineNumber > 1) {
            const i = n.lineNumber - 1;
            return new er(i, e.getLineMaxColumn(i));
        } else return n;
    }
    static leftPositionAtomicSoftTabs(e, n, i) {
        if (n.column <= e.getLineIndentColumn(n.lineNumber)) {
            const r = e.getLineMinColumn(n.lineNumber), s = e.getLineContent(n.lineNumber), o = Jkr.atomicPosition(s, n.column - 1, i, 0);
            if (o !== -1 && o + 1 >= r) return new er(n.lineNumber, o + 1);
        }
        return this.leftPosition(e, n);
    }
    static left(e, n, i) {
        const r = e.stickyTabStops ? fue.leftPositionAtomicSoftTabs(n, i, e.tabSize) : fue.leftPosition(n, i);
        return new ewr(r.lineNumber, r.column, 0);
    }
    static moveLeft(e, n, i, r, s) {
        let o, a;
        if (i.hasSelection() && !r) o = i.selection.startLineNumber, a = i.selection.startColumn;
        else {
            const l = i.position.delta(void 0, -(s - 1)), c = n.normalizePosition(fue.clipPositionColumn(l, n), 0), u = fue.left(e, n, c);
            o = u.lineNumber, a = u.column;
        }
        return i.move(r, o, a, 0);
    }
    static clipPositionColumn(e, n) {
        return new er(e.lineNumber, fue.clipRange(e.column, n.getLineMinColumn(e.lineNumber), n.getLineMaxColumn(e.lineNumber)));
    }
    static clipRange(e, n, i) {
        return e < n ? n : e > i ? i : e;
    }
    static rightPosition(e, n, i) {
        return i < e.getLineMaxColumn(n) ? i = i + TCo(e.getLineContent(n), i - 1) : n < e.getLineCount() && (n = n + 1, i = e.getLineMinColumn(n)), new er(n, i);
    }
    static rightPositionAtomicSoftTabs(e, n, i, r, s) {
        if (i < e.getLineIndentColumn(n)) {
            const o = e.getLineContent(n), a = Jkr.atomicPosition(o, i - 1, r, 1);
            if (a !== -1) return new er(n, a + 1);
        }
        return this.rightPosition(e, n, i);
    }
    static right(e, n, i) {
        const r = e.stickyTabStops ? fue.rightPositionAtomicSoftTabs(n, i.lineNumber, i.column, e.tabSize, e.indentSize) : fue.rightPosition(n, i.lineNumber, i.column);
        return new ewr(r.lineNumber, r.column, 0);
    }
    static moveRight(e, n, i, r, s) {
        let o, a;
        if (i.hasSelection() && !r) o = i.selection.endLineNumber, a = i.selection.endColumn;
        else {
            const l = i.position.delta(void 0, s - 1), c = n.normalizePosition(fue.clipPositionColumn(l, n), 1), u = fue.right(e, n, c);
            o = u.lineNumber, a = u.column;
        }
        return i.move(r, o, a, 0);
    }
    static vertical(e, n, i, r, s, o, a, l) {
        const c = sL.visibleColumnFromColumn(n.getLineContent(i), r, e.tabSize) + s, u = n.getLineCount(), d = i === 1 && r === 1, h = i === u && r === n.getLineMaxColumn(i), p = o < i ? d : h;
        if (i = o, i < 1 ? (i = 1, a ? r = n.getLineMinColumn(i) : r = Math.min(n.getLineMaxColumn(i), r)) : i > u ? (i = u, a ? r = n.getLineMaxColumn(i) : r = Math.min(n.getLineMaxColumn(i), r)) : r = e.columnFromVisibleColumn(n, i, c), p ? s = 0 : s = c - sL.visibleColumnFromColumn(n.getLineContent(i), r, e.tabSize), l !== void 0) {
            const g = new er(i, r), f = n.normalizePosition(g, l);
            s = s + (r - f.column), i = f.lineNumber, r = f.column;
        }
        return new ewr(i, r, s);
    }
    static down(e, n, i, r, s, o, a) {
        return this.vertical(e, n, i, r, s, i + o, a, 4);
    }
    static moveDown(e, n, i, r, s) {
        let o, a;
        i.hasSelection() && !r ? (o = i.selection.endLineNumber, a = i.selection.endColumn) : (o = i.position.lineNumber, a = i.position.column);
        let l = 0, c;
        do if (c = fue.down(e, n, o + l, a, i.leftoverVisibleColumns, s, !0), n.normalizePosition(new er(c.lineNumber, c.column), 2).lineNumber > o) break;
        while (l++ < 10 && o + l < n.getLineCount())
        return i.move(r, c.lineNumber, c.column, c.leftoverVisibleColumns);
    }
    static translateDown(e, n, i) {
        const r = i.selection, s = fue.down(e, n, r.selectionStartLineNumber, r.selectionStartColumn, i.selectionStartLeftoverVisibleColumns, 1, !1), o = fue.down(e, n, r.positionLineNumber, r.positionColumn, i.leftoverVisibleColumns, 1, !1);
        return new wQ(new qt(s.lineNumber, s.column, s.lineNumber, s.column), 0, s.leftoverVisibleColumns, new er(o.lineNumber, o.column), o.leftoverVisibleColumns);
    }
    static up(e, n, i, r, s, o, a) {
        return this.vertical(e, n, i, r, s, i - o, a, 3);
    }
    static moveUp(e, n, i, r, s) {
        let o, a;
        i.hasSelection() && !r ? (o = i.selection.startLineNumber, a = i.selection.startColumn) : (o = i.position.lineNumber, a = i.position.column);
        const l = fue.up(e, n, o, a, i.leftoverVisibleColumns, s, !0);
        return i.move(r, l.lineNumber, l.column, l.leftoverVisibleColumns);
    }
    static translateUp(e, n, i) {
        const r = i.selection, s = fue.up(e, n, r.selectionStartLineNumber, r.selectionStartColumn, i.selectionStartLeftoverVisibleColumns, 1, !1), o = fue.up(e, n, r.positionLineNumber, r.positionColumn, i.leftoverVisibleColumns, 1, !1);
        return new wQ(new qt(s.lineNumber, s.column, s.lineNumber, s.column), 0, s.leftoverVisibleColumns, new er(o.lineNumber, o.column), o.leftoverVisibleColumns);
    }
    static _isBlankLine(e, n) {
        return e.getLineFirstNonWhitespaceColumn(n) === 0;
    }
    static moveToPrevBlankLine(e, n, i, r) {
        let s = i.position.lineNumber;
        for(; s > 1 && this._isBlankLine(n, s);)s--;
        for(; s > 1 && !this._isBlankLine(n, s);)s--;
        return i.move(r, s, n.getLineMinColumn(s), 0);
    }
    static moveToNextBlankLine(e, n, i, r) {
        const s = n.getLineCount();
        let o = i.position.lineNumber;
        for(; o < s && this._isBlankLine(n, o);)o++;
        for(; o < s && !this._isBlankLine(n, o);)o++;
        return i.move(r, o, n.getLineMinColumn(o), 0);
    }
    static moveToBeginningOfLine(e, n, i, r) {
        const s = i.position.lineNumber, o = n.getLineMinColumn(s), a = n.getLineFirstNonWhitespaceColumn(s) || o;
        let l;
        return i.position.column === a ? l = o : l = a, i.move(r, s, l, 0);
    }
    static moveToEndOfLine(e, n, i, r, s) {
        const o = i.position.lineNumber, a = n.getLineMaxColumn(o);
        return i.move(r, o, a, s ? eI.MAX_SAFE_SMALL_INTEGER - a : 0);
    }
    static moveToBeginningOfBuffer(e, n, i, r) {
        return i.move(r, 1, 1, 0);
    }
    static moveToEndOfBuffer(e, n, i, r) {
        const s = n.getLineCount(), o = n.getLineMaxColumn(s);
        return i.move(r, s, o, 0);
    }
};

}
