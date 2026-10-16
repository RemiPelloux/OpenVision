import { Fa, sY } from "./Iwo.js";
import { Cw, ti } from "./charCode.js";
import { sL, zve } from "./cursorColumns.js";
import { gUo } from "./enterAction.js";
import { RD, fA } from "./languageConfigurationRegistry.js";
import { Qs, qt } from "./range.js";
import { Cy, bu } from "./selection.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { Ign, M9t } from "./ze.js";
var bwr, loe;
export { bwr, loe };
var __wakaru_Xii_initialized = false;
export function Xii() {
if (__wakaru_Xii_initialized) return;
__wakaru_Xii_initialized = true;
"use strict";
E(), Cw(), Fa(), zve(), Qs(), Cy(), gUo(), RD(), bwr = Object.create(null), loe = class {
    constructor(t, e, n){
        this._languageConfigurationService = n, this._opts = e, this._selection = t, this._selectionId = null, this._useLastEditRangeForCursorEndPosition = !1, this._selectionStartColumnStaysPut = !1;
    }
    static unshiftIndent(t, e, n, i, r) {
        const s = sL.visibleColumnFromColumn(t, e, n);
        if (r) {
            const o = M9t(" ", i), l = sL.prevIndentTabStop(s, i) / i;
            return M9t(o, l);
        } else {
            const l = sL.prevRenderTabStop(s, n) / n;
            return M9t("	", l);
        }
    }
    static shiftIndent(t, e, n, i, r) {
        const s = sL.visibleColumnFromColumn(t, e, n);
        if (r) {
            const o = M9t(" ", i), l = sL.nextIndentTabStop(s, i) / i;
            return M9t(o, l);
        } else {
            const l = sL.nextRenderTabStop(s, n) / n;
            return M9t("	", l);
        }
    }
    _addEditOperation(t, e, n) {
        this._useLastEditRangeForCursorEndPosition ? t.addTrackedEditOperation(e, n) : t.addEditOperation(e, n);
    }
    getEditOperations(t, e) {
        const n = this._selection.startLineNumber;
        let i = this._selection.endLineNumber;
        this._selection.endColumn === 1 && n !== i && (i = i - 1);
        const { tabSize: r, indentSize: s, insertSpaces: o } = this._opts, a = n === i;
        if (this._opts.useTabStops) {
            this._selection.isEmpty() && /^\s*$/.test(t.getLineContent(n)) && (this._useLastEditRangeForCursorEndPosition = !0);
            let l = 0, c = 0;
            for(let u = n; u <= i; u++, l = c){
                c = 0;
                const d = t.getLineContent(u);
                let h = sY(d);
                if (this._opts.isUnshift && (d.length === 0 || h === 0) || !a && !this._opts.isUnshift && d.length === 0) continue;
                if (h === -1 && (h = d.length), u > 1 && sL.visibleColumnFromColumn(d, h + 1, r) % s !== 0 && t.tokenization.isCheapToTokenize(u - 1)) {
                    const f = Ign(this._opts.autoIndent, t, new qt(u - 1, t.getLineMaxColumn(u - 1), u - 1, t.getLineMaxColumn(u - 1)), this._languageConfigurationService);
                    if (f) {
                        if (c = l, f.appendText) for(let _ = 0, b = f.appendText.length; _ < b && c < s && f.appendText.charCodeAt(_) === ti.Space; _++)c++;
                        f.removeText && (c = Math.max(0, c - f.removeText));
                        for(let _ = 0; _ < c && !(h === 0 || d.charCodeAt(h - 1) !== ti.Space); _++)h--;
                    }
                }
                if (this._opts.isUnshift && h === 0) continue;
                let p;
                this._opts.isUnshift ? p = loe.unshiftIndent(d, h + 1, r, s, o) : p = loe.shiftIndent(d, h + 1, r, s, o), this._addEditOperation(e, new qt(u, 1, u, h + 1), p), u === n && !this._selection.isEmpty() && (this._selectionStartColumnStaysPut = this._selection.startColumn <= h + 1);
            }
        } else {
            !this._opts.isUnshift && this._selection.isEmpty() && t.getLineLength(n) === 0 && (this._useLastEditRangeForCursorEndPosition = !0);
            const l = o ? M9t(" ", s) : "	";
            for(let c = n; c <= i; c++){
                const u = t.getLineContent(c);
                let d = sY(u);
                if (!(this._opts.isUnshift && (u.length === 0 || d === 0)) && !(!a && !this._opts.isUnshift && u.length === 0) && (d === -1 && (d = u.length), !(this._opts.isUnshift && d === 0))) if (this._opts.isUnshift) {
                    d = Math.min(d, s);
                    for(let h = 0; h < d; h++)if (u.charCodeAt(h) === ti.Tab) {
                        d = h + 1;
                        break;
                    }
                    this._addEditOperation(e, new qt(c, 1, c, d + 1), "");
                } else this._addEditOperation(e, new qt(c, 1, c, 1), l), c === n && !this._selection.isEmpty() && (this._selectionStartColumnStaysPut = this._selection.startColumn === 1);
            }
        }
        this._selectionId = e.trackSelection(this._selection);
    }
    computeCursorState(t, e) {
        if (this._useLastEditRangeForCursorEndPosition) {
            const i = e.getInverseEditOperations()[0];
            return new bu(i.range.endLineNumber, i.range.endColumn, i.range.endLineNumber, i.range.endColumn);
        }
        const n = e.getTrackedSelection(this._selectionId);
        if (this._selectionStartColumnStaysPut) {
            const i = this._selection.startColumn;
            return n.startColumn <= i ? n : n.getDirection() === 0 ? new bu(n.startLineNumber, i, n.endLineNumber, n.endColumn) : new bu(n.endLineNumber, n.endColumn, n.startLineNumber, i);
        }
        return n;
    }
}, loe = Re([
    F(2, fA)
], loe);

}
