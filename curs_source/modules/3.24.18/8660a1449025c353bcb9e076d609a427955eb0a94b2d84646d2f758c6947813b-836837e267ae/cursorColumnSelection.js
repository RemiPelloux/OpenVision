import { swe, wQ } from "./cursorCommon.js";
import { er, jc } from "./position.js";
import { Qs, qt } from "./range.js";
import { E } from "./tslib.es6.js";
var kgn;
export { kgn };
var __wakaru_fAy_initialized = false;
export function fAy() {
if (__wakaru_fAy_initialized) return;
__wakaru_fAy_initialized = true;
"use strict";
E(), swe(), jc(), Qs(), kgn = class gAb {
    static columnSelect(e, n, i, r, s, o) {
        const a = Math.abs(s - i) + 1, l = i > s, c = r > o, u = r < o, d = [];
        for(let h = 0; h < a; h++){
            const p = i + (l ? -h : h), g = e.columnFromVisibleColumn(n, p, r), f = e.columnFromVisibleColumn(n, p, o), _ = e.visibleColumnFromColumn(n, new er(p, g)), b = e.visibleColumnFromColumn(n, new er(p, f));
            u && (_ > o || b < r) || c && (b > r || _ < o) || d.push(new wQ(new qt(p, g, p, g), 0, 0, new er(p, f), 0));
        }
        if (d.length === 0) for(let h = 0; h < a; h++){
            const p = i + (l ? -h : h), g = n.getLineMaxColumn(p);
            d.push(new wQ(new qt(p, g, p, g), 0, 0, new er(p, g), 0));
        }
        return {
            viewStates: d,
            reversed: l,
            fromLineNumber: i,
            fromVisualColumn: r,
            toLineNumber: s,
            toVisualColumn: o
        };
    }
    static columnSelectLeft(e, n, i) {
        let r = i.toViewVisualColumn;
        return r > 0 && r--, gAb.columnSelect(e, n, i.fromViewLineNumber, i.fromViewVisualColumn, i.toViewLineNumber, r);
    }
    static columnSelectRight(e, n, i) {
        let r = 0;
        const s = Math.min(i.fromViewLineNumber, i.toViewLineNumber), o = Math.max(i.fromViewLineNumber, i.toViewLineNumber);
        for(let l = s; l <= o; l++){
            const c = n.getLineMaxColumn(l), u = e.visibleColumnFromColumn(n, new er(l, c));
            r = Math.max(r, u);
        }
        let a = i.toViewVisualColumn;
        return a < r && a++, this.columnSelect(e, n, i.fromViewLineNumber, i.fromViewVisualColumn, i.toViewLineNumber, a);
    }
    static columnSelectUp(e, n, i, r) {
        const s = r ? e.pageSize : 1, o = Math.max(1, i.toViewLineNumber - s);
        return this.columnSelect(e, n, i.fromViewLineNumber, i.fromViewVisualColumn, o, i.toViewVisualColumn);
    }
    static columnSelectDown(e, n, i, r) {
        const s = r ? e.pageSize : 1, o = Math.min(n.getLineCount(), i.toViewLineNumber + s);
        return this.columnSelect(e, n, i.fromViewLineNumber, i.fromViewVisualColumn, o, i.toViewVisualColumn);
    }
};

}
