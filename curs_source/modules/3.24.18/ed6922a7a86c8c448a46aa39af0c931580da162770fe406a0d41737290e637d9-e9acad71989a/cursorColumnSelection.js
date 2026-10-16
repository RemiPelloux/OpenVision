import { iW, ire } from "./cursorCommon.js";
import { Yn, ya } from "./position.js";
import { dt, qi } from "./range.js";
import { x } from "./tslib.es6.js";
var b2t;
export { b2t };
var __wakaru_apg_initialized = false;
export function apg() {
if (__wakaru_apg_initialized) return;
__wakaru_apg_initialized = true;
"use strict";
x(), ire(), ya(), qi(), b2t = class HSm {
    static columnSelect(t, n, i, r, s, o) {
        const a = Math.abs(s - i) + 1, c = i > s, l = r > o, u = r < o, h = [];
        for(let p = 0; p < a; p++){
            const g = i + (c ? -p : p), f = t.columnFromVisibleColumn(n, g, r), v = t.columnFromVisibleColumn(n, g, o), b = t.visibleColumnFromColumn(n, new Yn(g, f)), y = t.visibleColumnFromColumn(n, new Yn(g, v));
            u && (b > o || y < r) || l && (y > r || b < o) || h.push(new iW(new dt(g, f, g, f), 0, 0, new Yn(g, v), 0));
        }
        if (h.length === 0) for(let p = 0; p < a; p++){
            const g = i + (c ? -p : p), f = n.getLineMaxColumn(g);
            h.push(new iW(new dt(g, f, g, f), 0, 0, new Yn(g, f), 0));
        }
        return {
            viewStates: h,
            reversed: c,
            fromLineNumber: i,
            fromVisualColumn: r,
            toLineNumber: s,
            toVisualColumn: o
        };
    }
    static columnSelectLeft(t, n, i) {
        let r = i.toViewVisualColumn;
        return r > 0 && r--, HSm.columnSelect(t, n, i.fromViewLineNumber, i.fromViewVisualColumn, i.toViewLineNumber, r);
    }
    static columnSelectRight(t, n, i) {
        let r = 0;
        const s = Math.min(i.fromViewLineNumber, i.toViewLineNumber), o = Math.max(i.fromViewLineNumber, i.toViewLineNumber);
        for(let c = s; c <= o; c++){
            const l = n.getLineMaxColumn(c), u = t.visibleColumnFromColumn(n, new Yn(c, l));
            r = Math.max(r, u);
        }
        let a = i.toViewVisualColumn;
        return a < r && a++, this.columnSelect(t, n, i.fromViewLineNumber, i.fromViewVisualColumn, i.toViewLineNumber, a);
    }
    static columnSelectUp(t, n, i, r) {
        const s = r ? t.pageSize : 1, o = Math.max(1, i.toViewLineNumber - s);
        return this.columnSelect(t, n, i.fromViewLineNumber, i.fromViewVisualColumn, o, i.toViewVisualColumn);
    }
    static columnSelectDown(t, n, i, r) {
        const s = r ? t.pageSize : 1, o = Math.min(n.getLineCount(), i.toViewLineNumber + s);
        return this.columnSelect(t, n, i.fromViewLineNumber, i.fromViewVisualColumn, o, i.toViewVisualColumn);
    }
};

}
