import { Fa, sY, tby } from "./Iwo.js";
import { sL, zve } from "./cursorColumns.js";
import { CQ, swe } from "./cursorCommon.js";
import { Z7o, mO } from "./cursorMoveOperations.js";
import { er, jc } from "./position.js";
import { Qs, qt } from "./range.js";
import { mW, wgn } from "./replaceCommand.js";
import { E } from "./tslib.es6.js";
import { Dbt } from "./ze.js";
var Bii;
export { Bii };
var __wakaru_Q7o_initialized = false;
export function Q7o() {
if (__wakaru_Q7o_initialized) return;
__wakaru_Q7o_initialized = true;
"use strict";
E(), Fa(), wgn(), swe(), zve(), Z7o(), Qs(), jc(), Bii = class eJc {
    static deleteRight(e, n, i, r) {
        const s = [];
        let o = e !== 3;
        for(let a = 0, l = r.length; a < l; a++){
            const c = r[a];
            let u = c;
            if (u.isEmpty()) {
                const d = c.getPosition(), h = mO.right(n, i, d);
                u = new qt(h.lineNumber, h.column, d.lineNumber, d.column);
            }
            if (u.isEmpty()) {
                s[a] = null;
                continue;
            }
            u.startLineNumber !== u.endLineNumber && (o = !0), s[a] = new mW(u, "");
        }
        return [
            o,
            s
        ];
    }
    static isAutoClosingPairDelete(e, n, i, r, s, o, a) {
        if (n === "never" && i === "never" || e === "never") return !1;
        for(let l = 0, c = o.length; l < c; l++){
            const u = o[l], d = u.getPosition();
            if (!u.isEmpty()) return !1;
            const h = s.getLineContent(d.lineNumber);
            if (d.column < 2 || d.column >= h.length + 1) return !1;
            const p = h.charAt(d.column - 2), g = r.get(p);
            if (!g) return !1;
            if (Dbt(p)) {
                if (i === "never") return !1;
            } else if (n === "never") return !1;
            const f = h.charAt(d.column - 1);
            let _ = !1;
            for (const b of g)b.open === p && b.close === f && (_ = !0);
            if (!_) return !1;
            if (e === "auto") {
                let b = !1;
                for(let y = 0, S = a.length; y < S; y++){
                    const k = a[y];
                    if (d.lineNumber === k.startLineNumber && d.column === k.startColumn) {
                        b = !0;
                        break;
                    }
                }
                if (!b) return !1;
            }
        }
        return !0;
    }
    static _runAutoClosingPairDelete(e, n, i) {
        const r = [];
        for(let s = 0, o = i.length; s < o; s++){
            const a = i[s].getPosition(), l = new qt(a.lineNumber, a.column - 1, a.lineNumber, a.column + 1);
            r[s] = new mW(l, "");
        }
        return [
            !0,
            r
        ];
    }
    static deleteLeft(e, n, i, r, s) {
        if (this.isAutoClosingPairDelete(n.autoClosingDelete, n.autoClosingBrackets, n.autoClosingQuotes, n.autoClosingPairs.autoClosingPairsOpenByEnd, i, r, s)) return this._runAutoClosingPairDelete(n, i, r);
        const o = [];
        let a = e !== 2;
        for(let l = 0, c = r.length; l < c; l++){
            const u = eJc.getDeleteRange(r[l], i, n);
            if (u.isEmpty()) {
                o[l] = null;
                continue;
            }
            u.startLineNumber !== u.endLineNumber && (a = !0), o[l] = new mW(u, "");
        }
        return [
            a,
            o
        ];
    }
    static getDeleteRange(e, n, i) {
        if (!e.isEmpty()) return e;
        const r = e.getPosition();
        if (i.useTabStops && r.column > 1) {
            const s = n.getLineContent(r.lineNumber), o = sY(s), a = o === -1 ? s.length + 1 : o + 1;
            if (r.column <= a) {
                const l = i.visibleColumnFromColumn(n, r), c = sL.prevIndentTabStop(l, i.indentSize), u = i.columnFromVisibleColumn(n, r.lineNumber, c);
                return new qt(r.lineNumber, u, r.lineNumber, r.column);
            }
        }
        return qt.fromPositions(eJc.getPositionAfterDeleteLeft(r, n), r);
    }
    static getPositionAfterDeleteLeft(e, n) {
        if (e.column > 1) {
            const i = tby(e.column - 1, n.getLineContent(e.lineNumber));
            return e.with(void 0, i + 1);
        } else if (e.lineNumber > 1) {
            const i = e.lineNumber - 1;
            return new er(i, n.getLineMaxColumn(i));
        } else return e;
    }
    static cut(e, n, i) {
        const r = [];
        let s = null;
        i.sort((o, a)=>er.compare(o.getStartPosition(), a.getEndPosition()));
        for(let o = 0, a = i.length; o < a; o++){
            const l = i[o];
            if (l.isEmpty()) if (e.emptySelectionClipboard) {
                const c = l.getPosition();
                let u, d, h, p;
                c.lineNumber < n.getLineCount() ? (u = c.lineNumber, d = 1, h = c.lineNumber + 1, p = 1) : c.lineNumber > 1 && s?.endLineNumber !== c.lineNumber ? (u = c.lineNumber - 1, d = n.getLineMaxColumn(c.lineNumber - 1), h = c.lineNumber, p = n.getLineMaxColumn(c.lineNumber)) : (u = c.lineNumber, d = 1, h = c.lineNumber, p = n.getLineMaxColumn(c.lineNumber));
                const g = new qt(u, d, h, p);
                s = g, g.isEmpty() ? r[o] = null : r[o] = new mW(g, "");
            } else r[o] = null;
            else r[o] = new mW(l, "");
        }
        return new CQ(0, r, {
            shouldPushStackElementBefore: !0,
            shouldPushStackElementAfter: !0
        });
    }
};

}
