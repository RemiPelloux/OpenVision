import { CQ, swe } from "./cursorCommon.js";
import { Cwr, JFd, QFd, ZFd, _Uo, e6d, eri, i6d, kwr, n6d, o6d, r6d, s6d, t6d } from "./cursorTypeEditOperations.js";
import { Xii, loe } from "./shiftCommand.js";
import { GFd, qFd } from "./surroundSelectionCommand.js";
import { E } from "./tslib.es6.js";
import { Dbt, Jii, Swr, XFd } from "./ze.js";
var eHe, c6d;
export { c6d, eHe };
var __wakaru_Twr_initialized = false;
export function Twr() {
if (__wakaru_Twr_initialized) return;
__wakaru_Twr_initialized = true;
"use strict";
E(), Xii(), qFd(), swe(), Cwr(), eHe = class {
    static indent(t, e, n) {
        if (e === null || n === null) return [];
        const i = [];
        for(let r = 0, s = n.length; r < s; r++)i[r] = new loe(n[r], {
            isUnshift: !1,
            tabSize: t.tabSize,
            indentSize: t.indentSize,
            insertSpaces: t.insertSpaces,
            useTabStops: t.useTabStops,
            autoIndent: t.autoIndent
        }, t.languageConfigurationService);
        return i;
    }
    static outdent(t, e, n) {
        const i = [];
        for(let r = 0, s = n.length; r < s; r++)i[r] = new loe(n[r], {
            isUnshift: !0,
            tabSize: t.tabSize,
            indentSize: t.indentSize,
            insertSpaces: t.insertSpaces,
            useTabStops: t.useTabStops,
            autoIndent: t.autoIndent
        }, t.languageConfigurationService);
        return i;
    }
    static shiftIndent(t, e, n) {
        return Swr(t, e, n);
    }
    static unshiftIndent(t, e, n) {
        return Jii(t, e, n);
    }
    static paste(t, e, n, i, r, s) {
        return i6d.getEdits(t, e, n, i, r, s);
    }
    static tab(t, e, n) {
        return o6d.getCommands(t, e, n);
    }
    static compositionType(t, e, n, i, r, s, o, a) {
        return r6d.getEdits(t, e, n, i, r, s, o, a);
    }
    static compositionEndWithInterceptors(t, e, n, i, r, s) {
        if (!i) return null;
        let o = null;
        for (const d of i)if (o === null) o = d.insertedText;
        else if (o !== d.insertedText) return null;
        if (!o || o.length !== 1) return _Uo.getEdits(e, i);
        const a = o;
        let l = !1;
        for (const d of i)if (d.deletedText.length !== 0) {
            l = !0;
            break;
        }
        if (l) {
            if (!XFd(e, a) || !e.surroundingPairs.hasOwnProperty(a)) return null;
            const d = Dbt(a);
            for (const g of i)if (g.deletedSelectionStart !== 0 || g.deletedSelectionEnd !== g.deletedText.length || /^[ \t]+$/.test(g.deletedText) || d && Dbt(g.deletedText)) return null;
            const h = [];
            for (const g of r){
                if (!g.isEmpty()) return null;
                h.push(g.getPosition());
            }
            if (h.length !== i.length) return null;
            const p = [];
            for(let g = 0, f = h.length; g < f; g++)p.push(new GFd(h[g], i[g].deletedText, e.surroundingPairs[a]));
            return new CQ(4, p, {
                shouldPushStackElementBefore: !0,
                shouldPushStackElementAfter: !1
            });
        }
        const c = JFd.getEdits(e, n, r, s, a);
        if (c !== void 0) return c;
        const u = kwr.getEdits(e, n, r, a, !0, !1);
        return u !== void 0 ? u : _Uo.getEdits(e, i);
    }
    static typeWithInterceptors(t, e, n, i, r, s, o) {
        const a = eri.getEdits(n, i, r, o, t);
        if (a !== void 0) return a;
        const l = ZFd.getEdits(n, i, r, o, t);
        if (l !== void 0) return l;
        const c = QFd.getEdits(e, n, i, r, s, o);
        if (c !== void 0) return c;
        const u = kwr.getEdits(n, i, r, o, !1, t);
        if (u !== void 0) return u;
        const d = e6d.getEdits(n, i, r, o, t);
        if (d !== void 0) return d;
        const h = t6d.getEdits(e, n, i, r, o, t);
        return h !== void 0 ? h : n6d.getEdits(n, e, r, o, t);
    }
    static typeWithoutInterceptors(t, e, n, i, r) {
        return s6d.getEdits(t, i, r);
    }
}, c6d = class {
    constructor(t, e, n, i, r, s, o){
        this.deletedText = t, this.deletedSelectionStart = e, this.deletedSelectionEnd = n, this.insertedText = i, this.insertedSelectionStart = r, this.insertedSelectionEnd = s, this.insertedTextRange = o;
    }
};

}
