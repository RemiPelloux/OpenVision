import { Ps, R7, yug } from "./HVr.js";
import { _D, nre } from "./cursorColumns.js";
import { ire, rW } from "./cursorCommon.js";
import { sXr, vM } from "./cursorMoveOperations.js";
import { Yn, ya } from "./position.js";
import { Jqe } from "./qIc.js";
import { dt, qi } from "./range.js";
import { Y9, y2t } from "./replaceCommand.js";
import { x } from "./tslib.es6.js";
var qht;
export { qht };
var __wakaru_pfi_initialized = false;
export function pfi() {
if (__wakaru_pfi_initialized) return;
__wakaru_pfi_initialized = true;
"use strict";
x(), Ps(), y2t(), ire(), nre(), sXr(), qi(), ya(), qht = class fIa {
    static deleteRight(t, n, i, r) {
        const s = [];
        let o = t !== 3;
        for(let a = 0, c = r.length; a < c; a++){
            const l = r[a];
            let u = l;
            if (u.isEmpty()) {
                const h = l.getPosition(), p = vM.right(n, i, h);
                u = new dt(p.lineNumber, p.column, h.lineNumber, h.column);
            }
            if (u.isEmpty()) {
                s[a] = null;
                continue;
            }
            u.startLineNumber !== u.endLineNumber && (o = !0), s[a] = new Y9(u, "");
        }
        return [
            o,
            s
        ];
    }
    static isAutoClosingPairDelete(t, n, i, r, s, o, a) {
        if (n === "never" && i === "never" || t === "never") return !1;
        for(let c = 0, l = o.length; c < l; c++){
            const u = o[c], h = u.getPosition();
            if (!u.isEmpty()) return !1;
            const p = s.getLineContent(h.lineNumber);
            if (h.column < 2 || h.column >= p.length + 1) return !1;
            const g = p.charAt(h.column - 2), f = r.get(g);
            if (!f) return !1;
            if (Jqe(g)) {
                if (i === "never") return !1;
            } else if (n === "never") return !1;
            const v = p.charAt(h.column - 1);
            let b = !1;
            for (const y of f)y.open === g && y.close === v && (b = !0);
            if (!b) return !1;
            if (t === "auto") {
                let y = !1;
                for(let T = 0, E = a.length; T < E; T++){
                    const A = a[T];
                    if (h.lineNumber === A.startLineNumber && h.column === A.startColumn) {
                        y = !0;
                        break;
                    }
                }
                if (!y) return !1;
            }
        }
        return !0;
    }
    static _runAutoClosingPairDelete(t, n, i) {
        const r = [];
        for(let s = 0, o = i.length; s < o; s++){
            const a = i[s].getPosition(), c = new dt(a.lineNumber, a.column - 1, a.lineNumber, a.column + 1);
            r[s] = new Y9(c, "");
        }
        return [
            !0,
            r
        ];
    }
    static deleteLeft(t, n, i, r, s) {
        if (this.isAutoClosingPairDelete(n.autoClosingDelete, n.autoClosingBrackets, n.autoClosingQuotes, n.autoClosingPairs.autoClosingPairsOpenByEnd, i, r, s)) return this._runAutoClosingPairDelete(n, i, r);
        const o = [];
        let a = t !== 2;
        for(let c = 0, l = r.length; c < l; c++){
            const u = fIa.getDeleteRange(r[c], i, n);
            if (u.isEmpty()) {
                o[c] = null;
                continue;
            }
            u.startLineNumber !== u.endLineNumber && (a = !0), o[c] = new Y9(u, "");
        }
        return [
            a,
            o
        ];
    }
    static getDeleteRange(t, n, i) {
        if (!t.isEmpty()) return t;
        const r = t.getPosition();
        if (i.useTabStops && r.column > 1) {
            const s = n.getLineContent(r.lineNumber), o = R7(s), a = o === -1 ? s.length + 1 : o + 1;
            if (r.column <= a) {
                const c = i.visibleColumnFromColumn(n, r), l = _D.prevIndentTabStop(c, i.indentSize), u = i.columnFromVisibleColumn(n, r.lineNumber, l);
                return new dt(r.lineNumber, u, r.lineNumber, r.column);
            }
        }
        return dt.fromPositions(fIa.getPositionAfterDeleteLeft(r, n), r);
    }
    static getPositionAfterDeleteLeft(t, n) {
        if (t.column > 1) {
            const i = yug(t.column - 1, n.getLineContent(t.lineNumber));
            return t.with(void 0, i + 1);
        } else if (t.lineNumber > 1) {
            const i = t.lineNumber - 1;
            return new Yn(i, n.getLineMaxColumn(i));
        } else return t;
    }
    static cut(t, n, i) {
        const r = [];
        let s = null;
        i.sort((o, a)=>Yn.compare(o.getStartPosition(), a.getEndPosition()));
        for(let o = 0, a = i.length; o < a; o++){
            const c = i[o];
            if (c.isEmpty()) if (t.emptySelectionClipboard) {
                const l = c.getPosition();
                let u, h, p, g;
                l.lineNumber < n.getLineCount() ? (u = l.lineNumber, h = 1, p = l.lineNumber + 1, g = 1) : l.lineNumber > 1 && s?.endLineNumber !== l.lineNumber ? (u = l.lineNumber - 1, h = n.getLineMaxColumn(l.lineNumber - 1), p = l.lineNumber, g = n.getLineMaxColumn(l.lineNumber)) : (u = l.lineNumber, h = 1, p = l.lineNumber, g = n.getLineMaxColumn(l.lineNumber));
                const f = new dt(u, h, p, g);
                s = f, f.isEmpty() ? r[o] = null : r[o] = new Y9(f, "");
            } else r[o] = null;
            else r[o] = new Y9(c, "");
        }
        return new rW(0, r, {
            shouldPushStackElementBefore: !0,
            shouldPushStackElementAfter: !0
        });
    }
};

}
