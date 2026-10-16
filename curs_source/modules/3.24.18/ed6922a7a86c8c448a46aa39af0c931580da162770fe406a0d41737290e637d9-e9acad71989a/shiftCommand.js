import { Ps, R7 } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { En, qy } from "./charCode.js";
import { _D, nre } from "./cursorColumns.js";
import { MXr } from "./enterAction.js";
import { HT, uC } from "./languageConfigurationRegistry.js";
import { D2t, Xht } from "./qIc.js";
import { dt, qi } from "./range.js";
import { _f, za } from "./selection.js";
import { x } from "./tslib.es6.js";
var Dfi, AK;
export { AK, Dfi };
var __wakaru_cgn_initialized = false;
export function cgn() {
if (__wakaru_cgn_initialized) return;
__wakaru_cgn_initialized = true;
"use strict";
x(), qy(), Ps(), nre(), qi(), _f(), MXr(), HT(), Dfi = Object.create(null), AK = class {
    constructor(e, t, n){
        this._languageConfigurationService = n, this._opts = t, this._selection = e, this._selectionId = null, this._useLastEditRangeForCursorEndPosition = !1, this._selectionStartColumnStaysPut = !1;
    }
    static unshiftIndent(e, t, n, i, r) {
        const s = _D.visibleColumnFromColumn(e, t, n);
        if (r) {
            const o = Xht(" ", i), c = _D.prevIndentTabStop(s, i) / i;
            return Xht(o, c);
        } else {
            const c = _D.prevRenderTabStop(s, n) / n;
            return Xht("	", c);
        }
    }
    static shiftIndent(e, t, n, i, r) {
        const s = _D.visibleColumnFromColumn(e, t, n);
        if (r) {
            const o = Xht(" ", i), c = _D.nextIndentTabStop(s, i) / i;
            return Xht(o, c);
        } else {
            const c = _D.nextRenderTabStop(s, n) / n;
            return Xht("	", c);
        }
    }
    _addEditOperation(e, t, n) {
        this._useLastEditRangeForCursorEndPosition ? e.addTrackedEditOperation(t, n) : e.addEditOperation(t, n);
    }
    getEditOperations(e, t) {
        const n = this._selection.startLineNumber;
        let i = this._selection.endLineNumber;
        this._selection.endColumn === 1 && n !== i && (i = i - 1);
        const { tabSize: r, indentSize: s, insertSpaces: o } = this._opts, a = n === i;
        if (this._opts.useTabStops) {
            this._selection.isEmpty() && /^\s*$/.test(e.getLineContent(n)) && (this._useLastEditRangeForCursorEndPosition = !0);
            let c = 0, l = 0;
            for(let u = n; u <= i; u++, c = l){
                l = 0;
                const h = e.getLineContent(u);
                let p = R7(h);
                if (this._opts.isUnshift && (h.length === 0 || p === 0) || !a && !this._opts.isUnshift && h.length === 0) continue;
                if (p === -1 && (p = h.length), u > 1 && _D.visibleColumnFromColumn(h, p + 1, r) % s !== 0 && e.tokenization.isCheapToTokenize(u - 1)) {
                    const v = D2t(this._opts.autoIndent, e, new dt(u - 1, e.getLineMaxColumn(u - 1), u - 1, e.getLineMaxColumn(u - 1)), this._languageConfigurationService);
                    if (v) {
                        if (l = c, v.appendText) for(let b = 0, y = v.appendText.length; b < y && l < s && v.appendText.charCodeAt(b) === En.Space; b++)l++;
                        v.removeText && (l = Math.max(0, l - v.removeText));
                        for(let b = 0; b < l && !(p === 0 || h.charCodeAt(p - 1) !== En.Space); b++)p--;
                    }
                }
                if (this._opts.isUnshift && p === 0) continue;
                let g;
                this._opts.isUnshift ? g = AK.unshiftIndent(h, p + 1, r, s, o) : g = AK.shiftIndent(h, p + 1, r, s, o), this._addEditOperation(t, new dt(u, 1, u, p + 1), g), u === n && !this._selection.isEmpty() && (this._selectionStartColumnStaysPut = this._selection.startColumn <= p + 1);
            }
        } else {
            !this._opts.isUnshift && this._selection.isEmpty() && e.getLineLength(n) === 0 && (this._useLastEditRangeForCursorEndPosition = !0);
            const c = o ? Xht(" ", s) : "	";
            for(let l = n; l <= i; l++){
                const u = e.getLineContent(l);
                let h = R7(u);
                if (!(this._opts.isUnshift && (u.length === 0 || h === 0)) && !(!a && !this._opts.isUnshift && u.length === 0) && (h === -1 && (h = u.length), !(this._opts.isUnshift && h === 0))) if (this._opts.isUnshift) {
                    h = Math.min(h, s);
                    for(let p = 0; p < h; p++)if (u.charCodeAt(p) === En.Tab) {
                        h = p + 1;
                        break;
                    }
                    this._addEditOperation(t, new dt(l, 1, l, h + 1), "");
                } else this._addEditOperation(t, new dt(l, 1, l, 1), c), l === n && !this._selection.isEmpty() && (this._selectionStartColumnStaysPut = this._selection.startColumn === 1);
            }
        }
        this._selectionId = t.trackSelection(this._selection);
    }
    computeCursorState(e, t) {
        if (this._useLastEditRangeForCursorEndPosition) {
            const i = t.getInverseEditOperations()[0];
            return new za(i.range.endLineNumber, i.range.endColumn, i.range.endLineNumber, i.range.endColumn);
        }
        const n = t.getTrackedSelection(this._selectionId);
        if (this._selectionStartColumnStaysPut) {
            const i = this._selection.startColumn;
            return n.startColumn <= i ? n : n.getDirection() === 0 ? new za(n.startLineNumber, i, n.endLineNumber, n.endColumn) : new za(n.endLineNumber, n.endColumn, n.startLineNumber, i);
        }
        return n;
    }
}, AK = ie([
    C(2, uC)
], AK);

}
