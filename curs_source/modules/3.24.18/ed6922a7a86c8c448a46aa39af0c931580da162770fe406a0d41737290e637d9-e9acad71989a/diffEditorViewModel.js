import { Hpi, Se, Tl, ZEc, rn, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { dr } from "./arrays.js";
import { C0 } from "./assert.js";
import { ac, bn } from "./async.js";
import { Hc } from "./autorun.js";
import { Cze, wvi } from "./beforeEditPositionMapper.js";
import { Ar, Eo } from "./cancellation.js";
import { TFc } from "./combineTextEditInfos.js";
import { Wns, tyi } from "./defaultLinesDiffComputer.js";
import { V8c, Zbi } from "./diffProviderFactoryService.js";
import { o7c } from "./heuristicSequenceOptimizations.js";
import { s5e } from "./hotReloadHelpers.js";
import { Vl, hA, wze } from "./lineRange.js";
import { qa } from "./observable.js";
import { $ns, Avi, Byg, Ds, EK, Uh, Xo, lSg, mBe, tw, xle, z9 } from "./qIc.js";
import { C3, Mle, Ple } from "./rangeMapping.js";
import { x } from "./tslib.es6.js";
import { gr } from "./types_2.js";
import { Dle } from "./utils_13.js";
var Rvn, Dvn, Gns, MFt;
export { Dvn, Gns, MFt, Rvn };
var __wakaru_Mvn_initialized = false;
export function Mvn() {
if (__wakaru_Mvn_initialized) return;
__wakaru_Mvn_initialized = true;
"use strict";
x(), bn(), Ar(), Se(), qa(), V8c(), Dle(), s5e(), hA(), Wns(), Ple(), wvi(), TFc(), o7c(), gr(), dr(), C0(), Rvn = class extends we {
    constructor(e, t, n){
        super(), this.model = e, this._options = t, this._diffProviderFactoryService = n, this._isDiffUpToDate = Xo(this, !1), this.isDiffUpToDate = this._isDiffUpToDate, this._diff = Xo(this, void 0), this.diff = this._diff, this._unchangedRegions = Xo(this, void 0), this.unchangedRegions = Ds(this, (o)=>this._options.hideUnchangedRegions.read(o) ? this._unchangedRegions.read(o)?.regions ?? [] : (Uh((a)=>{
                for (const c of this._unchangedRegions.read(void 0)?.regions || [])c.collapseAll(a);
            }), [])), this.movedTextToCompare = Xo(this, void 0), this._activeMovedText = Xo(this, void 0), this._hoveredMovedText = Xo(this, void 0), this.activeMovedText = Ds(this, (o)=>this.movedTextToCompare.read(o) ?? this._hoveredMovedText.read(o) ?? this._activeMovedText.read(o)), this._cancellationTokenSource = new Eo, this._diffProvider = Ds(this, (o)=>{
            const a = this._diffProviderFactoryService.createDiffProvider({
                diffAlgorithm: this._options.diffAlgorithm.read(o)
            }), c = z9("onDidChange", a.onDidChange);
            return {
                diffProvider: a,
                onChangeSignal: c
            };
        }), this._register(rn(()=>this._cancellationTokenSource.cancel()));
        const i = EK("contentChangedSignal"), r = this._register(new ac(()=>i.trigger(void 0), 200));
        this._register(Hc((o)=>{
            const a = this._unchangedRegions.read(o);
            if (!a || a.regions.some((g)=>g.isDragged.read(o))) return;
            const c = a.originalDecorationIds.map((g)=>e.original.getDecorationRange(g)).map((g)=>g ? Vl.fromRangeInclusive(g) : void 0), l = a.modifiedDecorationIds.map((g)=>e.modified.getDecorationRange(g)).map((g)=>g ? Vl.fromRangeInclusive(g) : void 0), u = a.regions.map((g, f)=>!c[f] || !l[f] ? void 0 : new MFt(c[f].startLineNumber, l[f].startLineNumber, c[f].length, g.visibleLineCountTop.read(o), g.visibleLineCountBottom.read(o))).filter(Tl), h = [];
            let p = !1;
            for (const g of Hpi(u, (f, v)=>f.getHiddenModifiedRange(o).endLineNumberExclusive === v.getHiddenModifiedRange(o).startLineNumber))if (g.length > 1) {
                p = !0;
                const f = g.reduce((b, y)=>b + y.lineCount, 0), v = new MFt(g[0].originalLineNumber, g[0].modifiedLineNumber, f, g[0].visibleLineCountTop.read(void 0), g[g.length - 1].visibleLineCountBottom.read(void 0));
                h.push(v);
            } else h.push(g[0]);
            if (p) {
                const g = e.original.deltaDecorations(a.originalDecorationIds, h.map((v)=>({
                        range: v.originalUnchangedRange.toInclusiveRange(),
                        options: {
                            description: "unchanged"
                        }
                    }))), f = e.modified.deltaDecorations(a.modifiedDecorationIds, h.map((v)=>({
                        range: v.modifiedUnchangedRange.toInclusiveRange(),
                        options: {
                            description: "unchanged"
                        }
                    })));
                Uh((v)=>{
                    this._unchangedRegions.set({
                        regions: h,
                        originalDecorationIds: g,
                        modifiedDecorationIds: f
                    }, v);
                });
            }
        }));
        const s = (o, a, c)=>{
            const l = MFt.fromDiffs(o.changes, e.original.getLineCount(), e.modified.getLineCount(), this._options.hideUnchangedRegionsMinimumLineCount.read(c), this._options.hideUnchangedRegionsContextLineCount.read(c));
            let u;
            const h = this._unchangedRegions.get();
            if (h) {
                const v = h.originalDecorationIds.map((E)=>e.original.getDecorationRange(E)).map((E)=>E ? Vl.fromRangeInclusive(E) : void 0), b = h.modifiedDecorationIds.map((E)=>e.modified.getDecorationRange(E)).map((E)=>E ? Vl.fromRangeInclusive(E) : void 0);
                let T = Byg(h.regions.map((E, A)=>{
                    if (!v[A] || !b[A]) return;
                    const R = v[A].length;
                    return new MFt(v[A].startLineNumber, b[A].startLineNumber, R, Math.min(E.visibleLineCountTop.get(), R), Math.min(E.visibleLineCountBottom.get(), R - E.visibleLineCountTop.get()));
                }).filter(Tl), (E, A)=>!A || E.modifiedLineNumber >= A.modifiedLineNumber + A.lineCount && E.originalLineNumber >= A.originalLineNumber + A.lineCount).map((E)=>new Mle(E.getHiddenOriginalRange(c), E.getHiddenModifiedRange(c)));
                T = Mle.clip(T, Vl.ofLength(1, e.original.getLineCount()), Vl.ofLength(1, e.modified.getLineCount())), u = Mle.inverse(T, e.original.getLineCount(), e.modified.getLineCount());
            }
            const p = [];
            if (u) for (const v of l){
                const b = u.filter((y)=>y.original.intersectsStrict(v.originalUnchangedRange) && y.modified.intersectsStrict(v.modifiedUnchangedRange));
                p.push(...v.setVisibleRanges(b, a));
            }
            else p.push(...l);
            const g = e.original.deltaDecorations(h?.originalDecorationIds || [], p.map((v)=>({
                    range: v.originalUnchangedRange.toInclusiveRange(),
                    options: {
                        description: "unchanged"
                    }
                }))), f = e.modified.deltaDecorations(h?.modifiedDecorationIds || [], p.map((v)=>({
                    range: v.modifiedUnchangedRange.toInclusiveRange(),
                    options: {
                        description: "unchanged"
                    }
                })));
            this._unchangedRegions.set({
                regions: p,
                originalDecorationIds: g,
                modifiedDecorationIds: f
            }, a);
        };
        this._register(e.modified.onDidChangeContent((o)=>{
            if (this._diff.get()) {
                const c = Cze.fromModelContentChanges(o.changes), l = (this._lastDiff, e.original, e.modified, void 0);
                l && (this._lastDiff = l, Uh((u)=>{
                    this._diff.set(Dvn.fromDiffResult(this._lastDiff), u), s(l, u);
                    const h = this.movedTextToCompare.get();
                    this.movedTextToCompare.set(h ? this._lastDiff.moves.find((p)=>p.lineRangeMapping.modified.intersect(h.lineRangeMapping.modified)) : void 0, u);
                }));
            }
            this._isDiffUpToDate.set(!1, void 0), r.schedule();
        })), this._register(e.original.onDidChangeContent((o)=>{
            if (this._diff.get()) {
                const c = Cze.fromModelContentChanges(o.changes), l = (this._lastDiff, e.original, e.modified, void 0);
                l && (this._lastDiff = l, Uh((u)=>{
                    this._diff.set(Dvn.fromDiffResult(this._lastDiff), u), s(l, u);
                    const h = this.movedTextToCompare.get();
                    this.movedTextToCompare.set(h ? this._lastDiff.moves.find((p)=>p.lineRangeMapping.modified.intersect(h.lineRangeMapping.modified)) : void 0, u);
                }));
            }
            this._isDiffUpToDate.set(!1, void 0), r.schedule();
        })), this._register(tw(async (o, a)=>{
            this._options.hideUnchangedRegionsMinimumLineCount.read(o), this._options.hideUnchangedRegionsContextLineCount.read(o), r.cancel(), i.read(o);
            const c = this._diffProvider.read(o);
            if (c.onChangeSignal.read(o), xle(tyi, o), xle($ns, o), this._isDiffUpToDate.set(!1, void 0), e.original.isDisposed() || e.modified.isDisposed()) return;
            let l = [];
            a.add(e.original.onDidChangeContent((p)=>{
                const g = Cze.fromModelContentChanges(p.changes);
                l = Avi(l, g);
            }));
            let u = [];
            a.add(e.modified.onDidChangeContent((p)=>{
                const g = Cze.fromModelContentChanges(p.changes);
                u = Avi(u, g);
            }));
            let h = await c.diffProvider.computeDiff(e.original, e.modified, {
                ignoreTrimWhitespace: this._options.ignoreTrimWhitespace.read(o),
                maxComputationTimeMs: this._options.maxComputationTimeMs.read(o),
                computeMoves: this._options.showMoves.read(o)
            }, this._cancellationTokenSource.token);
            this._cancellationTokenSource.token.isCancellationRequested || e.original.isDisposed() || e.modified.isDisposed() || (h = lSg(h, e.original, e.modified), h = (e.original, e.modified, void 0) ?? h, h = (e.original, e.modified, void 0) ?? h, Uh((p)=>{
                s(h, p), this._lastDiff = h;
                const g = Dvn.fromDiffResult(h);
                this._diff.set(g, p), this._isDiffUpToDate.set(!0, p);
                const f = this.movedTextToCompare.read(void 0);
                this.movedTextToCompare.set(f ? this._lastDiff.moves.find((v)=>v.lineRangeMapping.modified.intersect(f.lineRangeMapping.modified)) : void 0, p);
            }));
        }));
    }
    setActiveMovedText(e) {
        this._activeMovedText.set(e, void 0);
    }
    setHoveredMovedText(e) {
        this._hoveredMovedText.set(e, void 0);
    }
    ensureModifiedLineIsVisible(e, t, n) {
        if (this.diff.get()?.mappings.length === 0) return;
        const i = this._unchangedRegions.get()?.regions || [];
        for (const r of i)if (r.getHiddenModifiedRange(void 0).contains(e)) {
            r.showModifiedLine(e, t, n);
            return;
        }
    }
    ensureOriginalLineIsVisible(e, t, n) {
        if (this.diff.get()?.mappings.length === 0) return;
        const i = this._unchangedRegions.get()?.regions || [];
        for (const r of i)if (r.getHiddenOriginalRange(void 0).contains(e)) {
            r.showOriginalLine(e, t, n);
            return;
        }
    }
    async waitForDiff() {
        await mBe(this.isDiffUpToDate, (e)=>e);
    }
    serializeState() {
        return {
            collapsedRegions: this._unchangedRegions.get()?.regions.map((t)=>({
                    range: t.getHiddenModifiedRange(void 0).serialize()
                }))
        };
    }
    restoreSerializedState(e) {
        const t = e.collapsedRegions?.map((i)=>Vl.deserialize(i.range)), n = this._unchangedRegions.get();
        !n || !t || Uh((i)=>{
            for (const r of n.regions)for (const s of t)if (r.modifiedUnchangedRange.intersect(s)) {
                r.setHiddenModifiedRange(s, i);
                break;
            }
        });
    }
}, Rvn = ie([
    C(2, Zbi)
], Rvn), Dvn = class $km {
    constructor(t, n, i, r){
        this.mappings = t, this.movedTexts = n, this.identical = i, this.quitEarly = r;
    }
    static fromDiffResult(t) {
        return new $km(t.changes.map((n)=>new Gns(n)), t.moves || [], t.identical, t.quitEarly);
    }
}, Gns = class {
    constructor(e){
        this.lineRangeMapping = e;
    }
}, MFt = class f1r {
    constructor(t, n, i, r, s){
        this.originalLineNumber = t, this.modifiedLineNumber = n, this.lineCount = i, this._visibleLineCountTop = Xo(this, 0), this.visibleLineCountTop = this._visibleLineCountTop, this._visibleLineCountBottom = Xo(this, 0), this.visibleLineCountBottom = this._visibleLineCountBottom, this._shouldHideControls = Ds(this, (c)=>this.visibleLineCountTop.read(c) + this.visibleLineCountBottom.read(c) === this.lineCount && !this.isDragged.read(c)), this.isDragged = Xo(this, void 0);
        const o = Math.max(Math.min(r, this.lineCount), 0), a = Math.max(Math.min(s, this.lineCount - r), 0);
        ZEc(r === o), ZEc(s === a), this._visibleLineCountTop.set(o, void 0), this._visibleLineCountBottom.set(a, void 0);
    }
    static fromDiffs(t, n, i, r, s) {
        const o = C3.inverse(t, n, i), a = [];
        for (const c of o){
            let l = c.original.startLineNumber, u = c.modified.startLineNumber, h = c.original.length;
            const p = l === 1 && u === 1, g = l + h === n + 1 && u + h === i + 1;
            (p || g) && h >= s + r ? (p && !g && (h -= s), g && !p && (l += s, u += s, h -= s), a.push(new f1r(l, u, h, 0, 0))) : h >= s * 2 + r && (l += s, u += s, h -= s * 2, a.push(new f1r(l, u, h, 0, 0)));
        }
        return a;
    }
    get originalUnchangedRange() {
        return Vl.ofLength(this.originalLineNumber, this.lineCount);
    }
    get modifiedUnchangedRange() {
        return Vl.ofLength(this.modifiedLineNumber, this.lineCount);
    }
    setVisibleRanges(t, n) {
        const i = [], r = new wze(t.map((c)=>c.modified)).subtractFrom(this.modifiedUnchangedRange);
        let s = this.originalLineNumber, o = this.modifiedLineNumber;
        const a = this.modifiedLineNumber + this.lineCount;
        if (r.ranges.length === 0) this.showAll(n), i.push(this);
        else {
            let c = 0;
            for (const l of r.ranges){
                const u = c === r.ranges.length - 1;
                c++;
                const h = (u ? a : l.endLineNumberExclusive) - o, p = new f1r(s, o, h, 0, 0);
                p.setHiddenModifiedRange(l, n), i.push(p), s = p.originalUnchangedRange.endLineNumberExclusive, o = p.modifiedUnchangedRange.endLineNumberExclusive;
            }
        }
        return i;
    }
    shouldHideControls(t) {
        return this._shouldHideControls.read(t);
    }
    getHiddenOriginalRange(t) {
        return Vl.ofLength(this.originalLineNumber + this._visibleLineCountTop.read(t), this.lineCount - this._visibleLineCountTop.read(t) - this._visibleLineCountBottom.read(t));
    }
    getHiddenModifiedRange(t) {
        return Vl.ofLength(this.modifiedLineNumber + this._visibleLineCountTop.read(t), this.lineCount - this._visibleLineCountTop.read(t) - this._visibleLineCountBottom.read(t));
    }
    setHiddenModifiedRange(t, n) {
        const i = t.startLineNumber - this.modifiedLineNumber, r = this.modifiedLineNumber + this.lineCount - t.endLineNumberExclusive;
        this.setState(i, r, n);
    }
    getMaxVisibleLineCountTop() {
        return this.lineCount - this._visibleLineCountBottom.get();
    }
    getMaxVisibleLineCountBottom() {
        return this.lineCount - this._visibleLineCountTop.get();
    }
    showMoreAbove(t = 10, n) {
        const i = this.getMaxVisibleLineCountTop();
        this._visibleLineCountTop.set(Math.min(this._visibleLineCountTop.get() + t, i), n);
    }
    showMoreBelow(t = 10, n) {
        const i = this.lineCount - this._visibleLineCountTop.get();
        this._visibleLineCountBottom.set(Math.min(this._visibleLineCountBottom.get() + t, i), n);
    }
    showAll(t) {
        this._visibleLineCountBottom.set(this.lineCount - this._visibleLineCountTop.get(), t);
    }
    showModifiedLine(t, n, i) {
        const r = t + 1 - (this.modifiedLineNumber + this._visibleLineCountTop.get()), s = this.modifiedLineNumber - this._visibleLineCountBottom.get() + this.lineCount - t;
        n === 0 && r < s || n === 1 ? this._visibleLineCountTop.set(this._visibleLineCountTop.get() + r, i) : this._visibleLineCountBottom.set(this._visibleLineCountBottom.get() + s, i);
    }
    showOriginalLine(t, n, i) {
        const r = t - this.originalLineNumber, s = this.originalLineNumber + this.lineCount - t;
        n === 0 && r < s || n === 1 ? this._visibleLineCountTop.set(Math.min(this._visibleLineCountTop.get() + s - r, this.getMaxVisibleLineCountTop()), i) : this._visibleLineCountBottom.set(Math.min(this._visibleLineCountBottom.get() + r - s, this.getMaxVisibleLineCountBottom()), i);
    }
    collapseAll(t) {
        this._visibleLineCountTop.set(0, t), this._visibleLineCountBottom.set(0, t);
    }
    setState(t, n, i) {
        t = Math.max(Math.min(t, this.lineCount), 0), n = Math.max(Math.min(n, this.lineCount - t), 0), this._visibleLineCountTop.set(t, i), this._visibleLineCountBottom.set(n, i);
    }
};

}
