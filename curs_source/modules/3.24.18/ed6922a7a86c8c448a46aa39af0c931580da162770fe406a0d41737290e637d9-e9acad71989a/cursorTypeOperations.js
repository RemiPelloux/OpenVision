import { ire, rW } from "./cursorCommon.js";
import { GPc, KPc, Lfi, NXr, Ofi, QPc, VPc, XPc, YPc, ZPc, hgn, jPc, qPc, zPc } from "./cursorTypeEditOperations.js";
import { Jqe, Pfi, WPc, dgn } from "./qIc.js";
import { AK, cgn } from "./shiftCommand.js";
import { FPc, OPc } from "./surroundSelectionCommand.js";
import { x } from "./tslib.es6.js";
var $Ae, tLc;
export { $Ae, tLc };
var __wakaru_Ffi_initialized = false;
export function Ffi() {
if (__wakaru_Ffi_initialized) return;
__wakaru_Ffi_initialized = true;
"use strict";
x(), cgn(), FPc(), ire(), Ofi(), $Ae = class {
    static indent(e, t, n) {
        if (t === null || n === null) return [];
        const i = [];
        for(let r = 0, s = n.length; r < s; r++)i[r] = new AK(n[r], {
            isUnshift: !1,
            tabSize: e.tabSize,
            indentSize: e.indentSize,
            insertSpaces: e.insertSpaces,
            useTabStops: e.useTabStops,
            autoIndent: e.autoIndent
        }, e.languageConfigurationService);
        return i;
    }
    static outdent(e, t, n) {
        const i = [];
        for(let r = 0, s = n.length; r < s; r++)i[r] = new AK(n[r], {
            isUnshift: !0,
            tabSize: e.tabSize,
            indentSize: e.indentSize,
            insertSpaces: e.insertSpaces,
            useTabStops: e.useTabStops,
            autoIndent: e.autoIndent
        }, e.languageConfigurationService);
        return i;
    }
    static shiftIndent(e, t, n) {
        return Pfi(e, t, n);
    }
    static unshiftIndent(e, t, n) {
        return dgn(e, t, n);
    }
    static paste(e, t, n, i, r, s) {
        return YPc.getEdits(e, t, n, i, r, s);
    }
    static tab(e, t, n) {
        return QPc.getCommands(e, t, n);
    }
    static compositionType(e, t, n, i, r, s, o, a) {
        return XPc.getEdits(e, t, n, i, r, s, o, a);
    }
    static compositionEndWithInterceptors(e, t, n, i, r, s) {
        if (!i) return null;
        let o = null;
        for (const h of i)if (o === null) o = h.insertedText;
        else if (o !== h.insertedText) return null;
        if (!o || o.length !== 1) return NXr.getEdits(t, i);
        const a = o;
        let c = !1;
        for (const h of i)if (h.deletedText.length !== 0) {
            c = !0;
            break;
        }
        if (c) {
            if (!WPc(t, a) || !t.surroundingPairs.hasOwnProperty(a)) return null;
            const h = Jqe(a);
            for (const f of i)if (f.deletedSelectionStart !== 0 || f.deletedSelectionEnd !== f.deletedText.length || /^[ \t]+$/.test(f.deletedText) || h && Jqe(f.deletedText)) return null;
            const p = [];
            for (const f of r){
                if (!f.isEmpty()) return null;
                p.push(f.getPosition());
            }
            if (p.length !== i.length) return null;
            const g = [];
            for(let f = 0, v = p.length; f < v; f++)g.push(new OPc(p[f], i[f].deletedText, t.surroundingPairs[a]));
            return new rW(4, g, {
                shouldPushStackElementBefore: !0,
                shouldPushStackElementAfter: !1
            });
        }
        const l = jPc.getEdits(t, n, r, s, a);
        if (l !== void 0) return l;
        const u = Lfi.getEdits(t, n, r, a, !0, !1);
        return u !== void 0 ? u : NXr.getEdits(t, i);
    }
    static typeWithInterceptors(e, t, n, i, r, s, o) {
        const a = hgn.getEdits(n, i, r, o, e);
        if (a !== void 0) return a;
        const c = GPc.getEdits(n, i, r, o, e);
        if (c !== void 0) return c;
        const l = VPc.getEdits(t, n, i, r, s, o);
        if (l !== void 0) return l;
        const u = Lfi.getEdits(n, i, r, o, !1, e);
        if (u !== void 0) return u;
        const h = qPc.getEdits(n, i, r, o, e);
        if (h !== void 0) return h;
        const p = zPc.getEdits(t, n, i, r, o, e);
        return p !== void 0 ? p : KPc.getEdits(n, t, r, o, e);
    }
    static typeWithoutInterceptors(e, t, n, i, r) {
        return ZPc.getEdits(e, i, r);
    }
}, tLc = class {
    constructor(e, t, n, i, r, s, o){
        this.deletedText = e, this.deletedSelectionStart = t, this.deletedSelectionEnd = n, this.insertedText = i, this.insertedSelectionStart = r, this.insertedSelectionEnd = s, this.insertedTextRange = o;
    }
};

}
