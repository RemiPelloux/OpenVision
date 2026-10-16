import { Yxe, bo } from "./arrays.js";
import { VPy } from "./modelLineProjection.js";
import { er, jc } from "./position.js";
import { tHo, yUd } from "./prefixSumComputer.js";
import { Qs, qt } from "./range.js";
import { Kg, PC } from "./textModel.js";
import { iBt, ztt } from "./textModelEvents.js";
import { rfn, ryt, zjo } from "./textModelGuides.js";
import { E } from "./tslib.es6.js";
import { B0r, F$o, U0r, sBt } from "./viewEvents.js";
import { $0r, zAe } from "./viewModel.js";
import { KPy, X$o } from "./ze.js";
var SUd, nHo, iHo, kUd, wUd, CUd;
export { CUd, SUd, iHo, kUd, nHo, wUd };
var __wakaru_YPy_initialized = false;
export function YPy() {
if (__wakaru_YPy_initialized) return;
__wakaru_YPy_initialized = true;
"use strict";
E(), bo(), jc(), Qs(), zjo(), PC(), iBt(), sBt(), VPy(), tHo(), zAe(), SUd = class {
    constructor(t, e, n, i, r, s, o, a, l, c){
        this._editorId = t, this.model = e, this._validModelVersionId = -1, this._domLineBreaksComputerFactory = n, this._monospaceLineBreaksComputerFactory = i, this.fontInfo = r, this.tabSize = s, this.wrappingStrategy = o, this.wrappingColumn = a, this.wrappingIndent = l, this.wordBreak = c, this._constructLines(!0, null);
    }
    dispose() {
        this.hiddenAreasDecorationIds = this.model.deltaDecorations(this.hiddenAreasDecorationIds, []);
    }
    createCoordinatesConverter() {
        return new kUd(this);
    }
    _constructLines(t, e) {
        this.modelLineProjections = [], t && (this.hiddenAreasDecorationIds = this.model.deltaDecorations(this.hiddenAreasDecorationIds, []));
        const n = this.model.getLinesContent(), i = this.model.getInjectedTextDecorations(this._editorId), r = n.length, s = this.createLineBreaksComputer(), o = new Yxe(ztt.fromDecorations(i));
        for(let g = 0; g < r; g++){
            const f = o.takeWhile((_)=>_.lineNumber === g + 1);
            s.addRequest(n[g], f, e ? e[g] : null);
        }
        const a = s.finalize(), l = [], c = this.hiddenAreasDecorationIds.map((g)=>this.model.getDecorationRange(g)).sort(qt.compareRangesUsingStarts);
        let u = 1, d = 0, h = -1, p = h + 1 < c.length ? d + 1 : r + 2;
        for(let g = 0; g < r; g++){
            const f = g + 1;
            f === p && (h++, u = c[h].startLineNumber, d = c[h].endLineNumber, p = h + 1 < c.length ? d + 1 : r + 2);
            const _ = f >= u && f <= d, b = X$o(a[g], !_);
            l[g] = b.getViewLineCount(), this.modelLineProjections[g] = b;
        }
        this._validModelVersionId = this.model.getVersionId(), this.projectedModelLineLineCounts = new yUd(l);
    }
    getHiddenAreas() {
        return this.hiddenAreasDecorationIds.map((t)=>this.model.getDecorationRange(t));
    }
    setHiddenAreas(t) {
        const e = t.map((d)=>this.model.validateRange(d)), n = KPy(e), i = this.hiddenAreasDecorationIds.map((d)=>this.model.getDecorationRange(d)).sort(qt.compareRangesUsingStarts);
        if (n.length === i.length) {
            let d = !1;
            for(let h = 0; h < n.length; h++)if (!n[h].equalsRange(i[h])) {
                d = !0;
                break;
            }
            if (!d) return !1;
        }
        const r = n.map((d)=>({
                range: d,
                options: Kg.EMPTY
            }));
        this.hiddenAreasDecorationIds = this.model.deltaDecorations(this.hiddenAreasDecorationIds, r);
        const s = n;
        let o = 1, a = 0, l = -1, c = l + 1 < s.length ? a + 1 : this.modelLineProjections.length + 2, u = !1;
        for(let d = 0; d < this.modelLineProjections.length; d++){
            const h = d + 1;
            h === c && (l++, o = s[l].startLineNumber, a = s[l].endLineNumber, c = l + 1 < s.length ? a + 1 : this.modelLineProjections.length + 2);
            let p = !1;
            if (h >= o && h <= a ? this.modelLineProjections[d].isVisible() && (this.modelLineProjections[d] = this.modelLineProjections[d].setVisible(!1), p = !0) : (u = !0, this.modelLineProjections[d].isVisible() || (this.modelLineProjections[d] = this.modelLineProjections[d].setVisible(!0), p = !0)), p) {
                const g = this.modelLineProjections[d].getViewLineCount();
                this.projectedModelLineLineCounts.setValue(d, g);
            }
        }
        return u || this.setHiddenAreas([]), !0;
    }
    modelPositionIsVisible(t, e) {
        return t < 1 || t > this.modelLineProjections.length ? !1 : this.modelLineProjections[t - 1].isVisible();
    }
    getModelLineViewLineCount(t) {
        return t < 1 || t > this.modelLineProjections.length ? 1 : this.modelLineProjections[t - 1].getViewLineCount();
    }
    setTabSize(t) {
        return this.tabSize === t ? !1 : (this.tabSize = t, this._constructLines(!1, null), !0);
    }
    setWrappingSettings(t, e, n, i, r) {
        const s = this.fontInfo.equals(t), o = this.wrappingStrategy === e, a = this.wrappingColumn === n, l = this.wrappingIndent === i, c = this.wordBreak === r;
        if (s && o && a && l && c) return !1;
        const u = s && o && !a && l && c;
        this.fontInfo = t, this.wrappingStrategy = e, this.wrappingColumn = n, this.wrappingIndent = i, this.wordBreak = r;
        let d = null;
        if (u) {
            d = [];
            for(let h = 0, p = this.modelLineProjections.length; h < p; h++)d[h] = this.modelLineProjections[h].getProjectionData();
        }
        return this._constructLines(!1, d), !0;
    }
    createLineBreaksComputer() {
        return (this.wrappingStrategy === "advanced" ? this._domLineBreaksComputerFactory : this._monospaceLineBreaksComputerFactory).createLineBreaksComputer(this.fontInfo, this.tabSize, this.wrappingColumn, this.wrappingIndent, this.wordBreak);
    }
    onModelFlushed() {
        this._constructLines(!0, null);
    }
    onModelLinesDeleted(t, e, n) {
        if (!t || t <= this._validModelVersionId) return null;
        const i = e === 1 ? 1 : this.projectedModelLineLineCounts.getPrefixSum(e - 1) + 1, r = this.projectedModelLineLineCounts.getPrefixSum(n);
        return this.modelLineProjections.splice(e - 1, n - e + 1), this.projectedModelLineLineCounts.removeValues(e - 1, n - e + 1), new B0r(i, r);
    }
    onModelLinesInserted(t, e, n, i) {
        if (!t || t <= this._validModelVersionId) return null;
        const r = e > 2 && !this.modelLineProjections[e - 2].isVisible(), s = e === 1 ? 1 : this.projectedModelLineLineCounts.getPrefixSum(e - 1) + 1;
        let o = 0;
        const a = [], l = [];
        for(let c = 0, u = i.length; c < u; c++){
            const d = X$o(i[c], !r);
            a.push(d);
            const h = d.getViewLineCount();
            o += h, l[c] = h;
        }
        return this.modelLineProjections = this.modelLineProjections.slice(0, e - 1).concat(a).concat(this.modelLineProjections.slice(e - 1)), this.projectedModelLineLineCounts.insertValues(e - 1, l), new U0r(s, s + o - 1);
    }
    onModelLineChanged(t, e, n) {
        if (t !== null && t <= this._validModelVersionId) return [
            !1,
            null,
            null,
            null
        ];
        const i = e - 1, r = this.modelLineProjections[i].getViewLineCount(), s = this.modelLineProjections[i].isVisible(), o = X$o(n, s);
        this.modelLineProjections[i] = o;
        const a = this.modelLineProjections[i].getViewLineCount();
        let l = !1, c = 0, u = -1, d = 0, h = -1, p = 0, g = -1;
        r > a ? (c = this.projectedModelLineLineCounts.getPrefixSum(e - 1) + 1, u = c + a - 1, p = u + 1, g = p + (r - a) - 1, l = !0) : r < a ? (c = this.projectedModelLineLineCounts.getPrefixSum(e - 1) + 1, u = c + r - 1, d = u + 1, h = d + (a - r) - 1, l = !0) : (c = this.projectedModelLineLineCounts.getPrefixSum(e - 1) + 1, u = c + a - 1), this.projectedModelLineLineCounts.setValue(i, a);
        const f = c <= u ? new F$o(c, u - c + 1) : null, _ = d <= h ? new U0r(d, h) : null, b = p <= g ? new B0r(p, g) : null;
        return [
            l,
            f,
            _,
            b
        ];
    }
    acceptVersionId(t) {
        this._validModelVersionId = t, this.modelLineProjections.length === 1 && !this.modelLineProjections[0].isVisible() && this.setHiddenAreas([]);
    }
    getViewLineCount() {
        return this.projectedModelLineLineCounts.getTotalSum();
    }
    _toValidViewLineNumber(t) {
        if (t < 1) return 1;
        const e = this.getViewLineCount();
        return t > e ? e : t | 0;
    }
    getActiveIndentGuide(t, e, n) {
        t = this._toValidViewLineNumber(t), e = this._toValidViewLineNumber(e), n = this._toValidViewLineNumber(n);
        const i = this.convertViewPositionToModelPosition(t, this.getViewLineMinColumn(t)), r = this.convertViewPositionToModelPosition(e, this.getViewLineMinColumn(e)), s = this.convertViewPositionToModelPosition(n, this.getViewLineMinColumn(n)), o = this.model.guides.getActiveIndentGuide(i.lineNumber, r.lineNumber, s.lineNumber), a = this.convertModelPositionToViewPosition(o.startLineNumber, 1), l = this.convertModelPositionToViewPosition(o.endLineNumber, this.model.getLineMaxColumn(o.endLineNumber));
        return {
            startLineNumber: a.lineNumber,
            endLineNumber: l.lineNumber,
            indent: o.indent
        };
    }
    getViewLineInfo(t) {
        t = this._toValidViewLineNumber(t);
        const e = this.projectedModelLineLineCounts.getIndexOf(t - 1), n = e.index, i = e.remainder;
        return new nHo(n + 1, i);
    }
    getMinColumnOfViewLine(t) {
        return this.modelLineProjections[t.modelLineNumber - 1].getViewLineMinColumn(this.model, t.modelLineNumber, t.modelLineWrappedLineIdx);
    }
    getMaxColumnOfViewLine(t) {
        return this.modelLineProjections[t.modelLineNumber - 1].getViewLineMaxColumn(this.model, t.modelLineNumber, t.modelLineWrappedLineIdx);
    }
    getModelStartPositionOfViewLine(t) {
        const e = this.modelLineProjections[t.modelLineNumber - 1], n = e.getViewLineMinColumn(this.model, t.modelLineNumber, t.modelLineWrappedLineIdx), i = e.getModelColumnOfViewPosition(t.modelLineWrappedLineIdx, n);
        return new er(t.modelLineNumber, i);
    }
    getModelEndPositionOfViewLine(t) {
        const e = this.modelLineProjections[t.modelLineNumber - 1], n = e.getViewLineMaxColumn(this.model, t.modelLineNumber, t.modelLineWrappedLineIdx), i = e.getModelColumnOfViewPosition(t.modelLineWrappedLineIdx, n);
        return new er(t.modelLineNumber, i);
    }
    getViewLineInfosGroupedByModelRanges(t, e) {
        const n = this.getViewLineInfo(t), i = this.getViewLineInfo(e), r = new Array;
        let s = this.getModelStartPositionOfViewLine(n), o = new Array;
        for(let a = n.modelLineNumber; a <= i.modelLineNumber; a++){
            const l = this.modelLineProjections[a - 1];
            if (l.isVisible()) {
                const c = a === n.modelLineNumber ? n.modelLineWrappedLineIdx : 0, u = a === i.modelLineNumber ? i.modelLineWrappedLineIdx + 1 : l.getViewLineCount();
                for(let d = c; d < u; d++)o.push(new nHo(a, d));
            }
            if (!l.isVisible() && s) {
                const c = new er(a - 1, this.model.getLineMaxColumn(a - 1) + 1), u = qt.fromPositions(s, c);
                r.push(new iHo(u, o)), o = [], s = null;
            } else l.isVisible() && !s && (s = new er(a, 1));
        }
        if (s) {
            const a = qt.fromPositions(s, this.getModelEndPositionOfViewLine(i));
            r.push(new iHo(a, o));
        }
        return r;
    }
    getViewLinesBracketGuides(t, e, n, i) {
        const r = n ? this.convertViewPositionToModelPosition(n.lineNumber, n.column) : null, s = [];
        for (const o of this.getViewLineInfosGroupedByModelRanges(t, e)){
            const a = o.modelRange.startLineNumber, l = this.model.guides.getLinesBracketGuides(a, o.modelRange.endLineNumber, r, i);
            for (const c of o.viewLines){
                const d = l[c.modelLineNumber - a].map((h)=>{
                    if (h.forWrappedLinesAfterColumn !== -1 && this.modelLineProjections[c.modelLineNumber - 1].getViewPositionOfModelPosition(0, h.forWrappedLinesAfterColumn).lineNumber >= c.modelLineWrappedLineIdx || h.forWrappedLinesBeforeOrAtColumn !== -1 && this.modelLineProjections[c.modelLineNumber - 1].getViewPositionOfModelPosition(0, h.forWrappedLinesBeforeOrAtColumn).lineNumber < c.modelLineWrappedLineIdx) return;
                    if (!h.horizontalLine) return h;
                    let p = -1;
                    if (h.column !== -1) {
                        const _ = this.modelLineProjections[c.modelLineNumber - 1].getViewPositionOfModelPosition(0, h.column);
                        if (_.lineNumber === c.modelLineWrappedLineIdx) p = _.column;
                        else if (_.lineNumber < c.modelLineWrappedLineIdx) p = this.getMinColumnOfViewLine(c);
                        else if (_.lineNumber > c.modelLineWrappedLineIdx) return;
                    }
                    const g = this.convertModelPositionToViewPosition(c.modelLineNumber, h.horizontalLine.endColumn), f = this.modelLineProjections[c.modelLineNumber - 1].getViewPositionOfModelPosition(0, h.horizontalLine.endColumn);
                    return f.lineNumber === c.modelLineWrappedLineIdx ? new ryt(h.visibleColumn, p, h.className, new rfn(h.horizontalLine.top, g.column), -1, -1) : f.lineNumber < c.modelLineWrappedLineIdx || h.visibleColumn !== -1 ? void 0 : new ryt(h.visibleColumn, p, h.className, new rfn(h.horizontalLine.top, this.getMaxColumnOfViewLine(c)), -1, -1);
                });
                s.push(d.filter((h)=>!!h));
            }
        }
        return s;
    }
    getViewLinesIndentGuides(t, e) {
        t = this._toValidViewLineNumber(t), e = this._toValidViewLineNumber(e);
        const n = this.convertViewPositionToModelPosition(t, this.getViewLineMinColumn(t)), i = this.convertViewPositionToModelPosition(e, this.getViewLineMaxColumn(e));
        let r = [];
        const s = [], o = [], a = n.lineNumber - 1, l = i.lineNumber - 1;
        let c = null;
        for(let p = a; p <= l; p++){
            const g = this.modelLineProjections[p];
            if (g.isVisible()) {
                const f = g.getViewLineNumberOfModelPosition(0, p === a ? n.column : 1), _ = g.getViewLineNumberOfModelPosition(0, this.model.getLineMaxColumn(p + 1)), b = _ - f + 1;
                let y = 0;
                b > 1 && g.getViewLineMinColumn(this.model, p + 1, _) === 1 && (y = f === 0 ? 1 : 2), s.push(b), o.push(y), c === null && (c = new er(p + 1, 0));
            } else c !== null && (r = r.concat(this.model.guides.getLinesIndentGuides(c.lineNumber, p)), c = null);
        }
        c !== null && (r = r.concat(this.model.guides.getLinesIndentGuides(c.lineNumber, i.lineNumber)), c = null);
        const u = e - t + 1, d = new Array(u);
        let h = 0;
        for(let p = 0, g = r.length; p < g; p++){
            let f = r[p];
            const _ = Math.min(u - h, s[p]), b = o[p];
            let y;
            b === 2 ? y = 0 : b === 1 ? y = 1 : y = _;
            for(let S = 0; S < _; S++)S === y && (f = 0), d[h++] = f;
        }
        return d;
    }
    getViewLineContent(t) {
        const e = this.getViewLineInfo(t);
        return this.modelLineProjections[e.modelLineNumber - 1].getViewLineContent(this.model, e.modelLineNumber, e.modelLineWrappedLineIdx);
    }
    getViewLineLength(t) {
        const e = this.getViewLineInfo(t);
        return this.modelLineProjections[e.modelLineNumber - 1].getViewLineLength(this.model, e.modelLineNumber, e.modelLineWrappedLineIdx);
    }
    getViewLineMinColumn(t) {
        const e = this.getViewLineInfo(t);
        return this.modelLineProjections[e.modelLineNumber - 1].getViewLineMinColumn(this.model, e.modelLineNumber, e.modelLineWrappedLineIdx);
    }
    getViewLineMaxColumn(t) {
        const e = this.getViewLineInfo(t);
        return this.modelLineProjections[e.modelLineNumber - 1].getViewLineMaxColumn(this.model, e.modelLineNumber, e.modelLineWrappedLineIdx);
    }
    getViewLineData(t) {
        const e = this.getViewLineInfo(t);
        return this.modelLineProjections[e.modelLineNumber - 1].getViewLineData(this.model, e.modelLineNumber, e.modelLineWrappedLineIdx);
    }
    getViewLinesData(t, e, n) {
        t = this._toValidViewLineNumber(t), e = this._toValidViewLineNumber(e);
        const i = this.projectedModelLineLineCounts.getIndexOf(t - 1);
        let r = t;
        const s = i.index, o = i.remainder, a = [];
        for(let l = s, c = this.model.getLineCount(); l < c; l++){
            const u = this.modelLineProjections[l];
            if (!u.isVisible()) continue;
            const d = l === s ? o : 0;
            let h = u.getViewLineCount() - d, p = !1;
            if (r + h > e && (p = !0, h = e - r + 1), u.getViewLinesData(this.model, l + 1, d, h, r - t, n, a), r += h, p) break;
        }
        return a;
    }
    validateViewPosition(t, e, n) {
        t = this._toValidViewLineNumber(t);
        const i = this.projectedModelLineLineCounts.getIndexOf(t - 1), r = i.index, s = i.remainder, o = this.modelLineProjections[r], a = o.getViewLineMinColumn(this.model, r + 1, s), l = o.getViewLineMaxColumn(this.model, r + 1, s);
        e < a && (e = a), e > l && (e = l);
        const c = o.getModelColumnOfViewPosition(s, e);
        return this.model.validatePosition(new er(r + 1, c)).equals(n) ? new er(t, e) : this.convertModelPositionToViewPosition(n.lineNumber, n.column);
    }
    validateViewRange(t, e) {
        const n = this.validateViewPosition(t.startLineNumber, t.startColumn, e.getStartPosition()), i = this.validateViewPosition(t.endLineNumber, t.endColumn, e.getEndPosition());
        return new qt(n.lineNumber, n.column, i.lineNumber, i.column);
    }
    convertViewPositionToModelPosition(t, e) {
        const n = this.getViewLineInfo(t), i = this.modelLineProjections[n.modelLineNumber - 1].getModelColumnOfViewPosition(n.modelLineWrappedLineIdx, e);
        return this.model.validatePosition(new er(n.modelLineNumber, i));
    }
    convertViewRangeToModelRange(t) {
        const e = this.convertViewPositionToModelPosition(t.startLineNumber, t.startColumn), n = this.convertViewPositionToModelPosition(t.endLineNumber, t.endColumn);
        return new qt(e.lineNumber, e.column, n.lineNumber, n.column);
    }
    convertModelPositionToViewPosition(t, e, n = 2, i = !1, r = !1) {
        const s = this.model.validatePosition(new er(t, e)), o = s.lineNumber, a = s.column;
        let l = o - 1, c = !1;
        if (r) for(; l < this.modelLineProjections.length && !this.modelLineProjections[l].isVisible();)l++, c = !0;
        else for(; l > 0 && !this.modelLineProjections[l].isVisible();)l--, c = !0;
        if (l === 0 && !this.modelLineProjections[l].isVisible()) return new er(i ? 0 : 1, 1);
        const u = 1 + this.projectedModelLineLineCounts.getPrefixSum(l);
        let d;
        return c ? r ? d = this.modelLineProjections[l].getViewPositionOfModelPosition(u, 1, n) : d = this.modelLineProjections[l].getViewPositionOfModelPosition(u, this.model.getLineMaxColumn(l + 1), n) : d = this.modelLineProjections[o - 1].getViewPositionOfModelPosition(u, a, n), d;
    }
    convertModelRangeToViewRange(t, e = 0) {
        if (t.isEmpty()) {
            const n = this.convertModelPositionToViewPosition(t.startLineNumber, t.startColumn, e);
            return qt.fromPositions(n);
        } else {
            const n = this.convertModelPositionToViewPosition(t.startLineNumber, t.startColumn, 1), i = this.convertModelPositionToViewPosition(t.endLineNumber, t.endColumn, 0);
            return new qt(n.lineNumber, n.column, i.lineNumber, i.column);
        }
    }
    getViewLineNumberOfModelPosition(t, e) {
        let n = t - 1;
        if (this.modelLineProjections[n].isVisible()) {
            const r = 1 + this.projectedModelLineLineCounts.getPrefixSum(n);
            return this.modelLineProjections[n].getViewLineNumberOfModelPosition(r, e);
        }
        for(; n > 0 && !this.modelLineProjections[n].isVisible();)n--;
        if (n === 0 && !this.modelLineProjections[n].isVisible()) return 1;
        const i = 1 + this.projectedModelLineLineCounts.getPrefixSum(n);
        return this.modelLineProjections[n].getViewLineNumberOfModelPosition(i, this.model.getLineMaxColumn(n + 1));
    }
    getDecorationsInRange(t, e, n, i, r) {
        const s = this.convertViewPositionToModelPosition(t.startLineNumber, t.startColumn), o = this.convertViewPositionToModelPosition(t.endLineNumber, t.endColumn);
        if (o.lineNumber - s.lineNumber <= t.endLineNumber - t.startLineNumber) return this.model.getDecorationsInRange(new qt(s.lineNumber, 1, o.lineNumber, o.column), e, n, i, r);
        let a = [];
        const l = s.lineNumber - 1, c = o.lineNumber - 1;
        let u = null;
        for(let g = l; g <= c; g++)if (this.modelLineProjections[g].isVisible()) u === null && (u = new er(g + 1, g === l ? s.column : 1));
        else if (u !== null) {
            const _ = this.model.getLineMaxColumn(g);
            a = a.concat(this.model.getDecorationsInRange(new qt(u.lineNumber, u.column, g, _), e, n, i)), u = null;
        }
        u !== null && (a = a.concat(this.model.getDecorationsInRange(new qt(u.lineNumber, u.column, o.lineNumber, o.column), e, n, i)), u = null), a.sort((g, f)=>{
            const _ = qt.compareRangesUsingStarts(g.range, f.range);
            return _ === 0 ? g.id < f.id ? -1 : g.id > f.id ? 1 : 0 : _;
        });
        const d = [];
        let h = 0, p = null;
        for (const g of a){
            const f = g.id;
            p !== f && (p = f, d[h++] = g);
        }
        return d;
    }
    getInjectedTextAt(t) {
        const e = this.getViewLineInfo(t.lineNumber);
        return this.modelLineProjections[e.modelLineNumber - 1].getInjectedTextAt(e.modelLineWrappedLineIdx, t.column);
    }
    normalizePosition(t, e) {
        const n = this.getViewLineInfo(t.lineNumber);
        return this.modelLineProjections[n.modelLineNumber - 1].normalizePosition(n.modelLineWrappedLineIdx, t, e);
    }
    getLineIndentColumn(t) {
        const e = this.getViewLineInfo(t);
        return e.modelLineWrappedLineIdx === 0 ? this.model.getLineIndentColumn(e.modelLineNumber) : 0;
    }
}, nHo = class {
    constructor(t, e){
        this.modelLineNumber = t, this.modelLineWrappedLineIdx = e;
    }
    get isWrappedLineContinuation() {
        return this.modelLineWrappedLineIdx > 0;
    }
}, iHo = class {
    constructor(t, e){
        this.modelRange = t, this.viewLines = e;
    }
}, kUd = class {
    constructor(t){
        this._lines = t;
    }
    convertViewPositionToModelPosition(t) {
        return this._lines.convertViewPositionToModelPosition(t.lineNumber, t.column);
    }
    convertViewRangeToModelRange(t) {
        return this._lines.convertViewRangeToModelRange(t);
    }
    validateViewPosition(t, e) {
        return this._lines.validateViewPosition(t.lineNumber, t.column, e);
    }
    validateViewRange(t, e) {
        return this._lines.validateViewRange(t, e);
    }
    convertModelPositionToViewPosition(t, e, n, i) {
        return this._lines.convertModelPositionToViewPosition(t.lineNumber, t.column, e, n, i);
    }
    convertModelRangeToViewRange(t, e) {
        return this._lines.convertModelRangeToViewRange(t, e);
    }
    modelPositionIsVisible(t) {
        return this._lines.modelPositionIsVisible(t.lineNumber, t.column);
    }
    getModelLineViewLineCount(t) {
        return this._lines.getModelLineViewLineCount(t);
    }
    getViewLineNumberOfModelPosition(t, e) {
        return this._lines.getViewLineNumberOfModelPosition(t, e);
    }
}, wUd = class {
    constructor(t){
        this.model = t;
    }
    dispose() {}
    createCoordinatesConverter() {
        return new CUd(this);
    }
    getHiddenAreas() {
        return [];
    }
    setHiddenAreas(t) {
        return !1;
    }
    setTabSize(t) {
        return !1;
    }
    setWrappingSettings(t, e, n, i) {
        return !1;
    }
    createLineBreaksComputer() {
        const t = [];
        return {
            addRequest: (e, n, i)=>{
                t.push(null);
            },
            finalize: ()=>t
        };
    }
    onModelFlushed() {}
    onModelLinesDeleted(t, e, n) {
        return new B0r(e, n);
    }
    onModelLinesInserted(t, e, n, i) {
        return new U0r(e, n);
    }
    onModelLineChanged(t, e, n) {
        return [
            !1,
            new F$o(e, 1),
            null,
            null
        ];
    }
    acceptVersionId(t) {}
    getViewLineCount() {
        return this.model.getLineCount();
    }
    getActiveIndentGuide(t, e, n) {
        return {
            startLineNumber: t,
            endLineNumber: t,
            indent: 0
        };
    }
    getViewLinesBracketGuides(t, e, n) {
        return new Array(e - t + 1).fill([]);
    }
    getViewLinesIndentGuides(t, e) {
        const n = e - t + 1, i = new Array(n);
        for(let r = 0; r < n; r++)i[r] = 0;
        return i;
    }
    getViewLineContent(t) {
        return this.model.getLineContent(t);
    }
    getViewLineLength(t) {
        return this.model.getLineLength(t);
    }
    getViewLineMinColumn(t) {
        return this.model.getLineMinColumn(t);
    }
    getViewLineMaxColumn(t) {
        return this.model.getLineMaxColumn(t);
    }
    getViewLineData(t) {
        const e = this.model.tokenization.getLineTokens(t), n = e.getLineContent();
        return new $0r(n, !1, 1, n.length + 1, 0, e.inflate(), null);
    }
    getViewLinesData(t, e, n) {
        const i = this.model.getLineCount();
        t = Math.min(Math.max(1, t), i), e = Math.min(Math.max(1, e), i);
        const r = [];
        for(let s = t; s <= e; s++){
            const o = s - t;
            r[o] = n[o] ? this.getViewLineData(s) : null;
        }
        return r;
    }
    getDecorationsInRange(t, e, n, i, r) {
        return this.model.getDecorationsInRange(t, e, n, i, r);
    }
    normalizePosition(t, e) {
        return this.model.normalizePosition(t, e);
    }
    getLineIndentColumn(t) {
        return this.model.getLineIndentColumn(t);
    }
    getInjectedTextAt(t) {
        return null;
    }
}, CUd = class {
    constructor(t){
        this._lines = t;
    }
    _validPosition(t) {
        return this._lines.model.validatePosition(t);
    }
    _validRange(t) {
        return this._lines.model.validateRange(t);
    }
    convertViewPositionToModelPosition(t) {
        return this._validPosition(t);
    }
    convertViewRangeToModelRange(t) {
        return this._validRange(t);
    }
    validateViewPosition(t, e) {
        return this._validPosition(e);
    }
    validateViewRange(t, e) {
        return this._validRange(e);
    }
    convertModelPositionToViewPosition(t) {
        return this._validPosition(t);
    }
    convertModelRangeToViewRange(t) {
        return this._validRange(t);
    }
    modelPositionIsVisible(t) {
        const e = this._lines.model.getLineCount();
        return !(t.lineNumber < 1 || t.lineNumber > e);
    }
    modelRangeIsVisible(t) {
        const e = this._lines.model.getLineCount();
        return !(t.startLineNumber < 1 || t.startLineNumber > e || t.endLineNumber < 1 || t.endLineNumber > e);
    }
    getModelLineViewLineCount(t) {
        return 1;
    }
    getViewLineNumberOfModelPosition(t, e) {
        return t;
    }
};

}
