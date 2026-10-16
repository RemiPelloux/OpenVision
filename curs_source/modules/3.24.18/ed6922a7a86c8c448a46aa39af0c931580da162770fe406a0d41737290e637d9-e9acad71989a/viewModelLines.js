import { dr, hge } from "./arrays.js";
import { tvg } from "./modelLineProjection.js";
import { Yn, ya } from "./position.js";
import { Opt, QJr } from "./prefixSumComputer.js";
import { YJr, nvg } from "./qIc.js";
import { dt, qi } from "./range.js";
import { Mv, Vd } from "./textModel.js";
import { QBe, xpt } from "./textModelEvents.js";
import { NQr, fOt, xze } from "./textModelGuides.js";
import { x } from "./tslib.es6.js";
import { NJr, Npt, d_i, h_i } from "./viewEvents.js";
import { Cle, v_i } from "./viewModel.js";
var s5c, ees, tes, o5c, a5c, c5c;
export { a5c, c5c, ees, o5c, s5c, tes };
var __wakaru_ivg_initialized = false;
export function ivg() {
if (__wakaru_ivg_initialized) return;
__wakaru_ivg_initialized = true;
"use strict";
x(), dr(), ya(), qi(), NQr(), Mv(), xpt(), Npt(), tvg(), Opt(), Cle(), s5c = class {
    constructor(e, t, n, i, r, s, o, a, c, l){
        this._editorId = e, this.model = t, this._validModelVersionId = -1, this._domLineBreaksComputerFactory = n, this._monospaceLineBreaksComputerFactory = i, this.fontInfo = r, this.tabSize = s, this.wrappingStrategy = o, this.wrappingColumn = a, this.wrappingIndent = c, this.wordBreak = l, this._constructLines(!0, null);
    }
    dispose() {
        this.hiddenAreasDecorationIds = this.model.deltaDecorations(this.hiddenAreasDecorationIds, []);
    }
    createCoordinatesConverter() {
        return new o5c(this);
    }
    _constructLines(e, t) {
        this.modelLineProjections = [], e && (this.hiddenAreasDecorationIds = this.model.deltaDecorations(this.hiddenAreasDecorationIds, []));
        const n = this.model.getLinesContent(), i = this.model.getInjectedTextDecorations(this._editorId), r = n.length, s = this.createLineBreaksComputer(), o = new hge(QBe.fromDecorations(i));
        for(let f = 0; f < r; f++){
            const v = o.takeWhile((b)=>b.lineNumber === f + 1);
            s.addRequest(n[f], v, t ? t[f] : null);
        }
        const a = s.finalize(), c = [], l = this.hiddenAreasDecorationIds.map((f)=>this.model.getDecorationRange(f)).sort(dt.compareRangesUsingStarts);
        let u = 1, h = 0, p = -1, g = p + 1 < l.length ? h + 1 : r + 2;
        for(let f = 0; f < r; f++){
            const v = f + 1;
            v === g && (p++, u = l[p].startLineNumber, h = l[p].endLineNumber, g = p + 1 < l.length ? h + 1 : r + 2);
            const b = v >= u && v <= h, y = YJr(a[f], !b);
            c[f] = y.getViewLineCount(), this.modelLineProjections[f] = y;
        }
        this._validModelVersionId = this.model.getVersionId(), this.projectedModelLineLineCounts = new QJr(c);
    }
    getHiddenAreas() {
        return this.hiddenAreasDecorationIds.map((e)=>this.model.getDecorationRange(e));
    }
    setHiddenAreas(e) {
        const t = e.map((h)=>this.model.validateRange(h)), n = nvg(t), i = this.hiddenAreasDecorationIds.map((h)=>this.model.getDecorationRange(h)).sort(dt.compareRangesUsingStarts);
        if (n.length === i.length) {
            let h = !1;
            for(let p = 0; p < n.length; p++)if (!n[p].equalsRange(i[p])) {
                h = !0;
                break;
            }
            if (!h) return !1;
        }
        const r = n.map((h)=>({
                range: h,
                options: Vd.EMPTY
            }));
        this.hiddenAreasDecorationIds = this.model.deltaDecorations(this.hiddenAreasDecorationIds, r);
        const s = n;
        let o = 1, a = 0, c = -1, l = c + 1 < s.length ? a + 1 : this.modelLineProjections.length + 2, u = !1;
        for(let h = 0; h < this.modelLineProjections.length; h++){
            const p = h + 1;
            p === l && (c++, o = s[c].startLineNumber, a = s[c].endLineNumber, l = c + 1 < s.length ? a + 1 : this.modelLineProjections.length + 2);
            let g = !1;
            if (p >= o && p <= a ? this.modelLineProjections[h].isVisible() && (this.modelLineProjections[h] = this.modelLineProjections[h].setVisible(!1), g = !0) : (u = !0, this.modelLineProjections[h].isVisible() || (this.modelLineProjections[h] = this.modelLineProjections[h].setVisible(!0), g = !0)), g) {
                const f = this.modelLineProjections[h].getViewLineCount();
                this.projectedModelLineLineCounts.setValue(h, f);
            }
        }
        return u || this.setHiddenAreas([]), !0;
    }
    modelPositionIsVisible(e, t) {
        return e < 1 || e > this.modelLineProjections.length ? !1 : this.modelLineProjections[e - 1].isVisible();
    }
    getModelLineViewLineCount(e) {
        return e < 1 || e > this.modelLineProjections.length ? 1 : this.modelLineProjections[e - 1].getViewLineCount();
    }
    setTabSize(e) {
        return this.tabSize === e ? !1 : (this.tabSize = e, this._constructLines(!1, null), !0);
    }
    setWrappingSettings(e, t, n, i, r) {
        const s = this.fontInfo.equals(e), o = this.wrappingStrategy === t, a = this.wrappingColumn === n, c = this.wrappingIndent === i, l = this.wordBreak === r;
        if (s && o && a && c && l) return !1;
        const u = s && o && !a && c && l;
        this.fontInfo = e, this.wrappingStrategy = t, this.wrappingColumn = n, this.wrappingIndent = i, this.wordBreak = r;
        let h = null;
        if (u) {
            h = [];
            for(let p = 0, g = this.modelLineProjections.length; p < g; p++)h[p] = this.modelLineProjections[p].getProjectionData();
        }
        return this._constructLines(!1, h), !0;
    }
    createLineBreaksComputer() {
        return (this.wrappingStrategy === "advanced" ? this._domLineBreaksComputerFactory : this._monospaceLineBreaksComputerFactory).createLineBreaksComputer(this.fontInfo, this.tabSize, this.wrappingColumn, this.wrappingIndent, this.wordBreak);
    }
    onModelFlushed() {
        this._constructLines(!0, null);
    }
    onModelLinesDeleted(e, t, n) {
        if (!e || e <= this._validModelVersionId) return null;
        const i = t === 1 ? 1 : this.projectedModelLineLineCounts.getPrefixSum(t - 1) + 1, r = this.projectedModelLineLineCounts.getPrefixSum(n);
        return this.modelLineProjections.splice(t - 1, n - t + 1), this.projectedModelLineLineCounts.removeValues(t - 1, n - t + 1), new d_i(i, r);
    }
    onModelLinesInserted(e, t, n, i) {
        if (!e || e <= this._validModelVersionId) return null;
        const r = t > 2 && !this.modelLineProjections[t - 2].isVisible(), s = t === 1 ? 1 : this.projectedModelLineLineCounts.getPrefixSum(t - 1) + 1;
        let o = 0;
        const a = [], c = [];
        for(let l = 0, u = i.length; l < u; l++){
            const h = YJr(i[l], !r);
            a.push(h);
            const p = h.getViewLineCount();
            o += p, c[l] = p;
        }
        return this.modelLineProjections = this.modelLineProjections.slice(0, t - 1).concat(a).concat(this.modelLineProjections.slice(t - 1)), this.projectedModelLineLineCounts.insertValues(t - 1, c), new h_i(s, s + o - 1);
    }
    onModelLineChanged(e, t, n) {
        if (e !== null && e <= this._validModelVersionId) return [
            !1,
            null,
            null,
            null
        ];
        const i = t - 1, r = this.modelLineProjections[i].getViewLineCount(), s = this.modelLineProjections[i].isVisible(), o = YJr(n, s);
        this.modelLineProjections[i] = o;
        const a = this.modelLineProjections[i].getViewLineCount();
        let c = !1, l = 0, u = -1, h = 0, p = -1, g = 0, f = -1;
        r > a ? (l = this.projectedModelLineLineCounts.getPrefixSum(t - 1) + 1, u = l + a - 1, g = u + 1, f = g + (r - a) - 1, c = !0) : r < a ? (l = this.projectedModelLineLineCounts.getPrefixSum(t - 1) + 1, u = l + r - 1, h = u + 1, p = h + (a - r) - 1, c = !0) : (l = this.projectedModelLineLineCounts.getPrefixSum(t - 1) + 1, u = l + a - 1), this.projectedModelLineLineCounts.setValue(i, a);
        const v = l <= u ? new NJr(l, u - l + 1) : null, b = h <= p ? new h_i(h, p) : null, y = g <= f ? new d_i(g, f) : null;
        return [
            c,
            v,
            b,
            y
        ];
    }
    acceptVersionId(e) {
        this._validModelVersionId = e, this.modelLineProjections.length === 1 && !this.modelLineProjections[0].isVisible() && this.setHiddenAreas([]);
    }
    getViewLineCount() {
        return this.projectedModelLineLineCounts.getTotalSum();
    }
    _toValidViewLineNumber(e) {
        if (e < 1) return 1;
        const t = this.getViewLineCount();
        return e > t ? t : e | 0;
    }
    getActiveIndentGuide(e, t, n) {
        e = this._toValidViewLineNumber(e), t = this._toValidViewLineNumber(t), n = this._toValidViewLineNumber(n);
        const i = this.convertViewPositionToModelPosition(e, this.getViewLineMinColumn(e)), r = this.convertViewPositionToModelPosition(t, this.getViewLineMinColumn(t)), s = this.convertViewPositionToModelPosition(n, this.getViewLineMinColumn(n)), o = this.model.guides.getActiveIndentGuide(i.lineNumber, r.lineNumber, s.lineNumber), a = this.convertModelPositionToViewPosition(o.startLineNumber, 1), c = this.convertModelPositionToViewPosition(o.endLineNumber, this.model.getLineMaxColumn(o.endLineNumber));
        return {
            startLineNumber: a.lineNumber,
            endLineNumber: c.lineNumber,
            indent: o.indent
        };
    }
    getViewLineInfo(e) {
        e = this._toValidViewLineNumber(e);
        const t = this.projectedModelLineLineCounts.getIndexOf(e - 1), n = t.index, i = t.remainder;
        return new ees(n + 1, i);
    }
    getMinColumnOfViewLine(e) {
        return this.modelLineProjections[e.modelLineNumber - 1].getViewLineMinColumn(this.model, e.modelLineNumber, e.modelLineWrappedLineIdx);
    }
    getMaxColumnOfViewLine(e) {
        return this.modelLineProjections[e.modelLineNumber - 1].getViewLineMaxColumn(this.model, e.modelLineNumber, e.modelLineWrappedLineIdx);
    }
    getModelStartPositionOfViewLine(e) {
        const t = this.modelLineProjections[e.modelLineNumber - 1], n = t.getViewLineMinColumn(this.model, e.modelLineNumber, e.modelLineWrappedLineIdx), i = t.getModelColumnOfViewPosition(e.modelLineWrappedLineIdx, n);
        return new Yn(e.modelLineNumber, i);
    }
    getModelEndPositionOfViewLine(e) {
        const t = this.modelLineProjections[e.modelLineNumber - 1], n = t.getViewLineMaxColumn(this.model, e.modelLineNumber, e.modelLineWrappedLineIdx), i = t.getModelColumnOfViewPosition(e.modelLineWrappedLineIdx, n);
        return new Yn(e.modelLineNumber, i);
    }
    getViewLineInfosGroupedByModelRanges(e, t) {
        const n = this.getViewLineInfo(e), i = this.getViewLineInfo(t), r = new Array;
        let s = this.getModelStartPositionOfViewLine(n), o = new Array;
        for(let a = n.modelLineNumber; a <= i.modelLineNumber; a++){
            const c = this.modelLineProjections[a - 1];
            if (c.isVisible()) {
                const l = a === n.modelLineNumber ? n.modelLineWrappedLineIdx : 0, u = a === i.modelLineNumber ? i.modelLineWrappedLineIdx + 1 : c.getViewLineCount();
                for(let h = l; h < u; h++)o.push(new ees(a, h));
            }
            if (!c.isVisible() && s) {
                const l = new Yn(a - 1, this.model.getLineMaxColumn(a - 1) + 1), u = dt.fromPositions(s, l);
                r.push(new tes(u, o)), o = [], s = null;
            } else c.isVisible() && !s && (s = new Yn(a, 1));
        }
        if (s) {
            const a = dt.fromPositions(s, this.getModelEndPositionOfViewLine(i));
            r.push(new tes(a, o));
        }
        return r;
    }
    getViewLinesBracketGuides(e, t, n, i) {
        const r = n ? this.convertViewPositionToModelPosition(n.lineNumber, n.column) : null, s = [];
        for (const o of this.getViewLineInfosGroupedByModelRanges(e, t)){
            const a = o.modelRange.startLineNumber, c = this.model.guides.getLinesBracketGuides(a, o.modelRange.endLineNumber, r, i);
            for (const l of o.viewLines){
                const h = c[l.modelLineNumber - a].map((p)=>{
                    if (p.forWrappedLinesAfterColumn !== -1 && this.modelLineProjections[l.modelLineNumber - 1].getViewPositionOfModelPosition(0, p.forWrappedLinesAfterColumn).lineNumber >= l.modelLineWrappedLineIdx || p.forWrappedLinesBeforeOrAtColumn !== -1 && this.modelLineProjections[l.modelLineNumber - 1].getViewPositionOfModelPosition(0, p.forWrappedLinesBeforeOrAtColumn).lineNumber < l.modelLineWrappedLineIdx) return;
                    if (!p.horizontalLine) return p;
                    let g = -1;
                    if (p.column !== -1) {
                        const b = this.modelLineProjections[l.modelLineNumber - 1].getViewPositionOfModelPosition(0, p.column);
                        if (b.lineNumber === l.modelLineWrappedLineIdx) g = b.column;
                        else if (b.lineNumber < l.modelLineWrappedLineIdx) g = this.getMinColumnOfViewLine(l);
                        else if (b.lineNumber > l.modelLineWrappedLineIdx) return;
                    }
                    const f = this.convertModelPositionToViewPosition(l.modelLineNumber, p.horizontalLine.endColumn), v = this.modelLineProjections[l.modelLineNumber - 1].getViewPositionOfModelPosition(0, p.horizontalLine.endColumn);
                    return v.lineNumber === l.modelLineWrappedLineIdx ? new xze(p.visibleColumn, g, p.className, new fOt(p.horizontalLine.top, f.column), -1, -1) : v.lineNumber < l.modelLineWrappedLineIdx || p.visibleColumn !== -1 ? void 0 : new xze(p.visibleColumn, g, p.className, new fOt(p.horizontalLine.top, this.getMaxColumnOfViewLine(l)), -1, -1);
                });
                s.push(h.filter((p)=>!!p));
            }
        }
        return s;
    }
    getViewLinesIndentGuides(e, t) {
        e = this._toValidViewLineNumber(e), t = this._toValidViewLineNumber(t);
        const n = this.convertViewPositionToModelPosition(e, this.getViewLineMinColumn(e)), i = this.convertViewPositionToModelPosition(t, this.getViewLineMaxColumn(t));
        let r = [];
        const s = [], o = [], a = n.lineNumber - 1, c = i.lineNumber - 1;
        let l = null;
        for(let g = a; g <= c; g++){
            const f = this.modelLineProjections[g];
            if (f.isVisible()) {
                const v = f.getViewLineNumberOfModelPosition(0, g === a ? n.column : 1), b = f.getViewLineNumberOfModelPosition(0, this.model.getLineMaxColumn(g + 1)), y = b - v + 1;
                let T = 0;
                y > 1 && f.getViewLineMinColumn(this.model, g + 1, b) === 1 && (T = v === 0 ? 1 : 2), s.push(y), o.push(T), l === null && (l = new Yn(g + 1, 0));
            } else l !== null && (r = r.concat(this.model.guides.getLinesIndentGuides(l.lineNumber, g)), l = null);
        }
        l !== null && (r = r.concat(this.model.guides.getLinesIndentGuides(l.lineNumber, i.lineNumber)), l = null);
        const u = t - e + 1, h = new Array(u);
        let p = 0;
        for(let g = 0, f = r.length; g < f; g++){
            let v = r[g];
            const b = Math.min(u - p, s[g]), y = o[g];
            let T;
            y === 2 ? T = 0 : y === 1 ? T = 1 : T = b;
            for(let E = 0; E < b; E++)E === T && (v = 0), h[p++] = v;
        }
        return h;
    }
    getViewLineContent(e) {
        const t = this.getViewLineInfo(e);
        return this.modelLineProjections[t.modelLineNumber - 1].getViewLineContent(this.model, t.modelLineNumber, t.modelLineWrappedLineIdx);
    }
    getViewLineLength(e) {
        const t = this.getViewLineInfo(e);
        return this.modelLineProjections[t.modelLineNumber - 1].getViewLineLength(this.model, t.modelLineNumber, t.modelLineWrappedLineIdx);
    }
    getViewLineMinColumn(e) {
        const t = this.getViewLineInfo(e);
        return this.modelLineProjections[t.modelLineNumber - 1].getViewLineMinColumn(this.model, t.modelLineNumber, t.modelLineWrappedLineIdx);
    }
    getViewLineMaxColumn(e) {
        const t = this.getViewLineInfo(e);
        return this.modelLineProjections[t.modelLineNumber - 1].getViewLineMaxColumn(this.model, t.modelLineNumber, t.modelLineWrappedLineIdx);
    }
    getViewLineData(e) {
        const t = this.getViewLineInfo(e);
        return this.modelLineProjections[t.modelLineNumber - 1].getViewLineData(this.model, t.modelLineNumber, t.modelLineWrappedLineIdx);
    }
    getViewLinesData(e, t, n) {
        e = this._toValidViewLineNumber(e), t = this._toValidViewLineNumber(t);
        const i = this.projectedModelLineLineCounts.getIndexOf(e - 1);
        let r = e;
        const s = i.index, o = i.remainder, a = [];
        for(let c = s, l = this.model.getLineCount(); c < l; c++){
            const u = this.modelLineProjections[c];
            if (!u.isVisible()) continue;
            const h = c === s ? o : 0;
            let p = u.getViewLineCount() - h, g = !1;
            if (r + p > t && (g = !0, p = t - r + 1), u.getViewLinesData(this.model, c + 1, h, p, r - e, n, a), r += p, g) break;
        }
        return a;
    }
    validateViewPosition(e, t, n) {
        e = this._toValidViewLineNumber(e);
        const i = this.projectedModelLineLineCounts.getIndexOf(e - 1), r = i.index, s = i.remainder, o = this.modelLineProjections[r], a = o.getViewLineMinColumn(this.model, r + 1, s), c = o.getViewLineMaxColumn(this.model, r + 1, s);
        t < a && (t = a), t > c && (t = c);
        const l = o.getModelColumnOfViewPosition(s, t);
        return this.model.validatePosition(new Yn(r + 1, l)).equals(n) ? new Yn(e, t) : this.convertModelPositionToViewPosition(n.lineNumber, n.column);
    }
    validateViewRange(e, t) {
        const n = this.validateViewPosition(e.startLineNumber, e.startColumn, t.getStartPosition()), i = this.validateViewPosition(e.endLineNumber, e.endColumn, t.getEndPosition());
        return new dt(n.lineNumber, n.column, i.lineNumber, i.column);
    }
    convertViewPositionToModelPosition(e, t) {
        const n = this.getViewLineInfo(e), i = this.modelLineProjections[n.modelLineNumber - 1].getModelColumnOfViewPosition(n.modelLineWrappedLineIdx, t);
        return this.model.validatePosition(new Yn(n.modelLineNumber, i));
    }
    convertViewRangeToModelRange(e) {
        const t = this.convertViewPositionToModelPosition(e.startLineNumber, e.startColumn), n = this.convertViewPositionToModelPosition(e.endLineNumber, e.endColumn);
        return new dt(t.lineNumber, t.column, n.lineNumber, n.column);
    }
    convertModelPositionToViewPosition(e, t, n = 2, i = !1, r = !1) {
        const s = this.model.validatePosition(new Yn(e, t)), o = s.lineNumber, a = s.column;
        let c = o - 1, l = !1;
        if (r) for(; c < this.modelLineProjections.length && !this.modelLineProjections[c].isVisible();)c++, l = !0;
        else for(; c > 0 && !this.modelLineProjections[c].isVisible();)c--, l = !0;
        if (c === 0 && !this.modelLineProjections[c].isVisible()) return new Yn(i ? 0 : 1, 1);
        const u = 1 + this.projectedModelLineLineCounts.getPrefixSum(c);
        let h;
        return l ? r ? h = this.modelLineProjections[c].getViewPositionOfModelPosition(u, 1, n) : h = this.modelLineProjections[c].getViewPositionOfModelPosition(u, this.model.getLineMaxColumn(c + 1), n) : h = this.modelLineProjections[o - 1].getViewPositionOfModelPosition(u, a, n), h;
    }
    convertModelRangeToViewRange(e, t = 0) {
        if (e.isEmpty()) {
            const n = this.convertModelPositionToViewPosition(e.startLineNumber, e.startColumn, t);
            return dt.fromPositions(n);
        } else {
            const n = this.convertModelPositionToViewPosition(e.startLineNumber, e.startColumn, 1), i = this.convertModelPositionToViewPosition(e.endLineNumber, e.endColumn, 0);
            return new dt(n.lineNumber, n.column, i.lineNumber, i.column);
        }
    }
    getViewLineNumberOfModelPosition(e, t) {
        let n = e - 1;
        if (this.modelLineProjections[n].isVisible()) {
            const r = 1 + this.projectedModelLineLineCounts.getPrefixSum(n);
            return this.modelLineProjections[n].getViewLineNumberOfModelPosition(r, t);
        }
        for(; n > 0 && !this.modelLineProjections[n].isVisible();)n--;
        if (n === 0 && !this.modelLineProjections[n].isVisible()) return 1;
        const i = 1 + this.projectedModelLineLineCounts.getPrefixSum(n);
        return this.modelLineProjections[n].getViewLineNumberOfModelPosition(i, this.model.getLineMaxColumn(n + 1));
    }
    getDecorationsInRange(e, t, n, i, r) {
        const s = this.convertViewPositionToModelPosition(e.startLineNumber, e.startColumn), o = this.convertViewPositionToModelPosition(e.endLineNumber, e.endColumn);
        if (o.lineNumber - s.lineNumber <= e.endLineNumber - e.startLineNumber) return this.model.getDecorationsInRange(new dt(s.lineNumber, 1, o.lineNumber, o.column), t, n, i, r);
        let a = [];
        const c = s.lineNumber - 1, l = o.lineNumber - 1;
        let u = null;
        for(let f = c; f <= l; f++)if (this.modelLineProjections[f].isVisible()) u === null && (u = new Yn(f + 1, f === c ? s.column : 1));
        else if (u !== null) {
            const b = this.model.getLineMaxColumn(f);
            a = a.concat(this.model.getDecorationsInRange(new dt(u.lineNumber, u.column, f, b), t, n, i)), u = null;
        }
        u !== null && (a = a.concat(this.model.getDecorationsInRange(new dt(u.lineNumber, u.column, o.lineNumber, o.column), t, n, i)), u = null), a.sort((f, v)=>{
            const b = dt.compareRangesUsingStarts(f.range, v.range);
            return b === 0 ? f.id < v.id ? -1 : f.id > v.id ? 1 : 0 : b;
        });
        const h = [];
        let p = 0, g = null;
        for (const f of a){
            const v = f.id;
            g !== v && (g = v, h[p++] = f);
        }
        return h;
    }
    getInjectedTextAt(e) {
        const t = this.getViewLineInfo(e.lineNumber);
        return this.modelLineProjections[t.modelLineNumber - 1].getInjectedTextAt(t.modelLineWrappedLineIdx, e.column);
    }
    normalizePosition(e, t) {
        const n = this.getViewLineInfo(e.lineNumber);
        return this.modelLineProjections[n.modelLineNumber - 1].normalizePosition(n.modelLineWrappedLineIdx, e, t);
    }
    getLineIndentColumn(e) {
        const t = this.getViewLineInfo(e);
        return t.modelLineWrappedLineIdx === 0 ? this.model.getLineIndentColumn(t.modelLineNumber) : 0;
    }
}, ees = class {
    constructor(e, t){
        this.modelLineNumber = e, this.modelLineWrappedLineIdx = t;
    }
    get isWrappedLineContinuation() {
        return this.modelLineWrappedLineIdx > 0;
    }
}, tes = class {
    constructor(e, t){
        this.modelRange = e, this.viewLines = t;
    }
}, o5c = class {
    constructor(e){
        this._lines = e;
    }
    convertViewPositionToModelPosition(e) {
        return this._lines.convertViewPositionToModelPosition(e.lineNumber, e.column);
    }
    convertViewRangeToModelRange(e) {
        return this._lines.convertViewRangeToModelRange(e);
    }
    validateViewPosition(e, t) {
        return this._lines.validateViewPosition(e.lineNumber, e.column, t);
    }
    validateViewRange(e, t) {
        return this._lines.validateViewRange(e, t);
    }
    convertModelPositionToViewPosition(e, t, n, i) {
        return this._lines.convertModelPositionToViewPosition(e.lineNumber, e.column, t, n, i);
    }
    convertModelRangeToViewRange(e, t) {
        return this._lines.convertModelRangeToViewRange(e, t);
    }
    modelPositionIsVisible(e) {
        return this._lines.modelPositionIsVisible(e.lineNumber, e.column);
    }
    getModelLineViewLineCount(e) {
        return this._lines.getModelLineViewLineCount(e);
    }
    getViewLineNumberOfModelPosition(e, t) {
        return this._lines.getViewLineNumberOfModelPosition(e, t);
    }
}, a5c = class {
    constructor(e){
        this.model = e;
    }
    dispose() {}
    createCoordinatesConverter() {
        return new c5c(this);
    }
    getHiddenAreas() {
        return [];
    }
    setHiddenAreas(e) {
        return !1;
    }
    setTabSize(e) {
        return !1;
    }
    setWrappingSettings(e, t, n, i) {
        return !1;
    }
    createLineBreaksComputer() {
        const e = [];
        return {
            addRequest: (t, n, i)=>{
                e.push(null);
            },
            finalize: ()=>e
        };
    }
    onModelFlushed() {}
    onModelLinesDeleted(e, t, n) {
        return new d_i(t, n);
    }
    onModelLinesInserted(e, t, n, i) {
        return new h_i(t, n);
    }
    onModelLineChanged(e, t, n) {
        return [
            !1,
            new NJr(t, 1),
            null,
            null
        ];
    }
    acceptVersionId(e) {}
    getViewLineCount() {
        return this.model.getLineCount();
    }
    getActiveIndentGuide(e, t, n) {
        return {
            startLineNumber: e,
            endLineNumber: e,
            indent: 0
        };
    }
    getViewLinesBracketGuides(e, t, n) {
        return new Array(t - e + 1).fill([]);
    }
    getViewLinesIndentGuides(e, t) {
        const n = t - e + 1, i = new Array(n);
        for(let r = 0; r < n; r++)i[r] = 0;
        return i;
    }
    getViewLineContent(e) {
        return this.model.getLineContent(e);
    }
    getViewLineLength(e) {
        return this.model.getLineLength(e);
    }
    getViewLineMinColumn(e) {
        return this.model.getLineMinColumn(e);
    }
    getViewLineMaxColumn(e) {
        return this.model.getLineMaxColumn(e);
    }
    getViewLineData(e) {
        const t = this.model.tokenization.getLineTokens(e), n = t.getLineContent();
        return new v_i(n, !1, 1, n.length + 1, 0, t.inflate(), null);
    }
    getViewLinesData(e, t, n) {
        const i = this.model.getLineCount();
        e = Math.min(Math.max(1, e), i), t = Math.min(Math.max(1, t), i);
        const r = [];
        for(let s = e; s <= t; s++){
            const o = s - e;
            r[o] = n[o] ? this.getViewLineData(s) : null;
        }
        return r;
    }
    getDecorationsInRange(e, t, n, i, r) {
        return this.model.getDecorationsInRange(e, t, n, i, r);
    }
    normalizePosition(e, t) {
        return this.model.normalizePosition(e, t);
    }
    getLineIndentColumn(e) {
        return this.model.getLineIndentColumn(e);
    }
    getInjectedTextAt(e) {
        return null;
    }
}, c5c = class {
    constructor(e){
        this._lines = e;
    }
    _validPosition(e) {
        return this._lines.model.validatePosition(e);
    }
    _validRange(e) {
        return this._lines.model.validateRange(e);
    }
    convertViewPositionToModelPosition(e) {
        return this._validPosition(e);
    }
    convertViewRangeToModelRange(e) {
        return this._validRange(e);
    }
    validateViewPosition(e, t) {
        return this._validPosition(t);
    }
    validateViewRange(e, t) {
        return this._validRange(t);
    }
    convertModelPositionToViewPosition(e) {
        return this._validPosition(e);
    }
    convertModelRangeToViewRange(e) {
        return this._validRange(e);
    }
    modelPositionIsVisible(e) {
        const t = this._lines.model.getLineCount();
        return !(e.lineNumber < 1 || e.lineNumber > t);
    }
    modelRangeIsVisible(e) {
        const t = this._lines.model.getLineCount();
        return !(e.startLineNumber < 1 || e.startLineNumber > t || e.endLineNumber < 1 || e.endLineNumber > t);
    }
    getModelLineViewLineCount(e) {
        return 1;
    }
    getViewLineNumberOfModelPosition(e, t) {
        return e;
    }
};

}
