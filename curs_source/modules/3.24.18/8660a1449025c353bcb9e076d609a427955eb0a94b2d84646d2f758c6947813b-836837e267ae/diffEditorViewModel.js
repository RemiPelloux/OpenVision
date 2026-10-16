import { $m, Opr, Pn, Qe, SYu, st } from "./Iwo.js";
import { bo } from "./arrays.js";
import { YE } from "./assert.js";
import { Yu, qn } from "./async.js";
import { Jd } from "./autorun.js";
import { a0r, tyt } from "./beforeEditPositionMapper.js";
import { El, yo } from "./cancellation.js";
import { e8d } from "./combineTextEditInfos.js";
import { ATr, VGo } from "./defaultLinesDiffComputer.js";
import { TTr, _qd } from "./diffProviderFactoryService.js";
import { Nqd } from "./heuristicSequenceOptimizations.js";
import { ent } from "./hotReloadHelpers.js";
import { DD, eyt, wd } from "./lineRange.js";
import { Jc } from "./observable.js";
import { I7, Swe, ywe } from "./rangeMapping.js";
import { E } from "./tslib.es6.js";
import { To } from "./types_2.js";
import { F, Re } from "./userDataProfile.js";
import { bwe } from "./utils_13.js";
import { DI, Ibt, PNy, Zo, bc, dW, gwe, iLy, mg, nwe, p0r, qGo } from "./ze.js";
var soi, ooi, KGo, aoi;
export { KGo, aoi, ooi, soi };
var __wakaru_RTr_initialized = false;
export function RTr() {
if (__wakaru_RTr_initialized) return;
__wakaru_RTr_initialized = true;
"use strict";
E(), qn(), yo(), Qe(), Jc(), _qd(), bwe(), ent(), DD(), VGo(), Swe(), a0r(), e8d(), Nqd(), To(), bo(), YE(), soi = class extends st {
    constructor(t, e, n){
        super(), this.model = t, this._options = e, this._diffProviderFactoryService = n, this._isDiffUpToDate = bc(this, !1), this.isDiffUpToDate = this._isDiffUpToDate, this._diff = bc(this, void 0), this.diff = this._diff, this._unchangedRegions = bc(this, void 0), this.unchangedRegions = Zo(this, (o)=>this._options.hideUnchangedRegions.read(o) ? this._unchangedRegions.read(o)?.regions ?? [] : (mg((a)=>{
                for (const l of this._unchangedRegions.read(void 0)?.regions || [])l.collapseAll(a);
            }), [])), this.movedTextToCompare = bc(this, void 0), this._activeMovedText = bc(this, void 0), this._hoveredMovedText = bc(this, void 0), this.activeMovedText = Zo(this, (o)=>this.movedTextToCompare.read(o) ?? this._hoveredMovedText.read(o) ?? this._activeMovedText.read(o)), this._cancellationTokenSource = new El, this._diffProvider = Zo(this, (o)=>{
            const a = this._diffProviderFactoryService.createDiffProvider({
                diffAlgorithm: this._options.diffAlgorithm.read(o)
            }), l = dW("onDidChange", a.onDidChange);
            return {
                diffProvider: a,
                onChangeSignal: l
            };
        }), this._register(Pn(()=>this._cancellationTokenSource.cancel()));
        const i = nwe("contentChangedSignal"), r = this._register(new Yu(()=>i.trigger(void 0), 200));
        this._register(Jd((o)=>{
            const a = this._unchangedRegions.read(o);
            if (!a || a.regions.some((p)=>p.isDragged.read(o))) return;
            const l = a.originalDecorationIds.map((p)=>t.original.getDecorationRange(p)).map((p)=>p ? wd.fromRangeInclusive(p) : void 0), c = a.modifiedDecorationIds.map((p)=>t.modified.getDecorationRange(p)).map((p)=>p ? wd.fromRangeInclusive(p) : void 0), u = a.regions.map((p, g)=>!l[g] || !c[g] ? void 0 : new aoi(l[g].startLineNumber, c[g].startLineNumber, l[g].length, p.visibleLineCountTop.read(o), p.visibleLineCountBottom.read(o))).filter($m), d = [];
            let h = !1;
            for (const p of Opr(u, (g, f)=>g.getHiddenModifiedRange(o).endLineNumberExclusive === f.getHiddenModifiedRange(o).startLineNumber))if (p.length > 1) {
                h = !0;
                const g = p.reduce((_, b)=>_ + b.lineCount, 0), f = new aoi(p[0].originalLineNumber, p[0].modifiedLineNumber, g, p[0].visibleLineCountTop.read(void 0), p[p.length - 1].visibleLineCountBottom.read(void 0));
                d.push(f);
            } else d.push(p[0]);
            if (h) {
                const p = t.original.deltaDecorations(a.originalDecorationIds, d.map((f)=>({
                        range: f.originalUnchangedRange.toInclusiveRange(),
                        options: {
                            description: "unchanged"
                        }
                    }))), g = t.modified.deltaDecorations(a.modifiedDecorationIds, d.map((f)=>({
                        range: f.modifiedUnchangedRange.toInclusiveRange(),
                        options: {
                            description: "unchanged"
                        }
                    })));
                mg((f)=>{
                    this._unchangedRegions.set({
                        regions: d,
                        originalDecorationIds: p,
                        modifiedDecorationIds: g
                    }, f);
                });
            }
        }));
        const s = (o, a, l)=>{
            const c = aoi.fromDiffs(o.changes, t.original.getLineCount(), t.modified.getLineCount(), this._options.hideUnchangedRegionsMinimumLineCount.read(l), this._options.hideUnchangedRegionsContextLineCount.read(l));
            let u;
            const d = this._unchangedRegions.get();
            if (d) {
                const f = d.originalDecorationIds.map((S)=>t.original.getDecorationRange(S)).map((S)=>S ? wd.fromRangeInclusive(S) : void 0), _ = d.modifiedDecorationIds.map((S)=>t.modified.getDecorationRange(S)).map((S)=>S ? wd.fromRangeInclusive(S) : void 0);
                let y = PNy(d.regions.map((S, k)=>{
                    if (!f[k] || !_[k]) return;
                    const C = f[k].length;
                    return new aoi(f[k].startLineNumber, _[k].startLineNumber, C, Math.min(S.visibleLineCountTop.get(), C), Math.min(S.visibleLineCountBottom.get(), C - S.visibleLineCountTop.get()));
                }).filter($m), (S, k)=>!k || S.modifiedLineNumber >= k.modifiedLineNumber + k.lineCount && S.originalLineNumber >= k.originalLineNumber + k.lineCount).map((S)=>new ywe(S.getHiddenOriginalRange(l), S.getHiddenModifiedRange(l)));
                y = ywe.clip(y, wd.ofLength(1, t.original.getLineCount()), wd.ofLength(1, t.modified.getLineCount())), u = ywe.inverse(y, t.original.getLineCount(), t.modified.getLineCount());
            }
            const h = [];
            if (u) for (const f of c){
                const _ = u.filter((b)=>b.original.intersectsStrict(f.originalUnchangedRange) && b.modified.intersectsStrict(f.modifiedUnchangedRange));
                h.push(...f.setVisibleRanges(_, a));
            }
            else h.push(...c);
            const p = t.original.deltaDecorations(d?.originalDecorationIds || [], h.map((f)=>({
                    range: f.originalUnchangedRange.toInclusiveRange(),
                    options: {
                        description: "unchanged"
                    }
                }))), g = t.modified.deltaDecorations(d?.modifiedDecorationIds || [], h.map((f)=>({
                    range: f.modifiedUnchangedRange.toInclusiveRange(),
                    options: {
                        description: "unchanged"
                    }
                })));
            this._unchangedRegions.set({
                regions: h,
                originalDecorationIds: p,
                modifiedDecorationIds: g
            }, a);
        };
        this._register(t.modified.onDidChangeContent((o)=>{
            if (this._diff.get()) {
                const l = tyt.fromModelContentChanges(o.changes), c = (this._lastDiff, t.original, t.modified, void 0);
                c && (this._lastDiff = c, mg((u)=>{
                    this._diff.set(ooi.fromDiffResult(this._lastDiff), u), s(c, u);
                    const d = this.movedTextToCompare.get();
                    this.movedTextToCompare.set(d ? this._lastDiff.moves.find((h)=>h.lineRangeMapping.modified.intersect(d.lineRangeMapping.modified)) : void 0, u);
                }));
            }
            this._isDiffUpToDate.set(!1, void 0), r.schedule();
        })), this._register(t.original.onDidChangeContent((o)=>{
            if (this._diff.get()) {
                const l = tyt.fromModelContentChanges(o.changes), c = (this._lastDiff, t.original, t.modified, void 0);
                c && (this._lastDiff = c, mg((u)=>{
                    this._diff.set(ooi.fromDiffResult(this._lastDiff), u), s(c, u);
                    const d = this.movedTextToCompare.get();
                    this.movedTextToCompare.set(d ? this._lastDiff.moves.find((h)=>h.lineRangeMapping.modified.intersect(d.lineRangeMapping.modified)) : void 0, u);
                }));
            }
            this._isDiffUpToDate.set(!1, void 0), r.schedule();
        })), this._register(DI(async (o, a)=>{
            this._options.hideUnchangedRegionsMinimumLineCount.read(o), this._options.hideUnchangedRegionsContextLineCount.read(o), r.cancel(), i.read(o);
            const l = this._diffProvider.read(o);
            if (l.onChangeSignal.read(o), gwe(ATr, o), gwe(qGo, o), this._isDiffUpToDate.set(!1, void 0), t.original.isDisposed() || t.modified.isDisposed()) return;
            let c = [];
            a.add(t.original.onDidChangeContent((h)=>{
                const p = tyt.fromModelContentChanges(h.changes);
                c = p0r(c, p);
            }));
            let u = [];
            a.add(t.modified.onDidChangeContent((h)=>{
                const p = tyt.fromModelContentChanges(h.changes);
                u = p0r(u, p);
            }));
            let d = await l.diffProvider.computeDiff(t.original, t.modified, {
                ignoreTrimWhitespace: this._options.ignoreTrimWhitespace.read(o),
                maxComputationTimeMs: this._options.maxComputationTimeMs.read(o),
                computeMoves: this._options.showMoves.read(o)
            }, this._cancellationTokenSource.token);
            this._cancellationTokenSource.token.isCancellationRequested || t.original.isDisposed() || t.modified.isDisposed() || (d = iLy(d, t.original, t.modified), d = (t.original, t.modified, void 0) ?? d, d = (t.original, t.modified, void 0) ?? d, mg((h)=>{
                s(d, h), this._lastDiff = d;
                const p = ooi.fromDiffResult(d);
                this._diff.set(p, h), this._isDiffUpToDate.set(!0, h);
                const g = this.movedTextToCompare.read(void 0);
                this.movedTextToCompare.set(g ? this._lastDiff.moves.find((f)=>f.lineRangeMapping.modified.intersect(g.lineRangeMapping.modified)) : void 0, h);
            }));
        }));
    }
    setActiveMovedText(t) {
        this._activeMovedText.set(t, void 0);
    }
    setHoveredMovedText(t) {
        this._hoveredMovedText.set(t, void 0);
    }
    ensureModifiedLineIsVisible(t, e, n) {
        if (this.diff.get()?.mappings.length === 0) return;
        const i = this._unchangedRegions.get()?.regions || [];
        for (const r of i)if (r.getHiddenModifiedRange(void 0).contains(t)) {
            r.showModifiedLine(t, e, n);
            return;
        }
    }
    ensureOriginalLineIsVisible(t, e, n) {
        if (this.diff.get()?.mappings.length === 0) return;
        const i = this._unchangedRegions.get()?.regions || [];
        for (const r of i)if (r.getHiddenOriginalRange(void 0).contains(t)) {
            r.showOriginalLine(t, e, n);
            return;
        }
    }
    async waitForDiff() {
        await Ibt(this.isDiffUpToDate, (t)=>t);
    }
    serializeState() {
        return {
            collapsedRegions: this._unchangedRegions.get()?.regions.map((e)=>({
                    range: e.getHiddenModifiedRange(void 0).serialize()
                }))
        };
    }
    restoreSerializedState(t) {
        const e = t.collapsedRegions?.map((i)=>wd.deserialize(i.range)), n = this._unchangedRegions.get();
        !n || !e || mg((i)=>{
            for (const r of n.regions)for (const s of e)if (r.modifiedUnchangedRange.intersect(s)) {
                r.setHiddenModifiedRange(s, i);
                break;
            }
        });
    }
}, soi = Re([
    F(2, TTr)
], soi), ooi = class dRb {
    constructor(e, n, i, r){
        this.mappings = e, this.movedTexts = n, this.identical = i, this.quitEarly = r;
    }
    static fromDiffResult(e) {
        return new dRb(e.changes.map((n)=>new KGo(n)), e.moves || [], e.identical, e.quitEarly);
    }
}, KGo = class {
    constructor(t){
        this.lineRangeMapping = t;
    }
}, aoi = class iXs {
    constructor(e, n, i, r, s){
        this.originalLineNumber = e, this.modifiedLineNumber = n, this.lineCount = i, this._visibleLineCountTop = bc(this, 0), this.visibleLineCountTop = this._visibleLineCountTop, this._visibleLineCountBottom = bc(this, 0), this.visibleLineCountBottom = this._visibleLineCountBottom, this._shouldHideControls = Zo(this, (l)=>this.visibleLineCountTop.read(l) + this.visibleLineCountBottom.read(l) === this.lineCount && !this.isDragged.read(l)), this.isDragged = bc(this, void 0);
        const o = Math.max(Math.min(r, this.lineCount), 0), a = Math.max(Math.min(s, this.lineCount - r), 0);
        SYu(r === o), SYu(s === a), this._visibleLineCountTop.set(o, void 0), this._visibleLineCountBottom.set(a, void 0);
    }
    static fromDiffs(e, n, i, r, s) {
        const o = I7.inverse(e, n, i), a = [];
        for (const l of o){
            let c = l.original.startLineNumber, u = l.modified.startLineNumber, d = l.original.length;
            const h = c === 1 && u === 1, p = c + d === n + 1 && u + d === i + 1;
            (h || p) && d >= s + r ? (h && !p && (d -= s), p && !h && (c += s, u += s, d -= s), a.push(new iXs(c, u, d, 0, 0))) : d >= s * 2 + r && (c += s, u += s, d -= s * 2, a.push(new iXs(c, u, d, 0, 0)));
        }
        return a;
    }
    get originalUnchangedRange() {
        return wd.ofLength(this.originalLineNumber, this.lineCount);
    }
    get modifiedUnchangedRange() {
        return wd.ofLength(this.modifiedLineNumber, this.lineCount);
    }
    setVisibleRanges(e, n) {
        const i = [], r = new eyt(e.map((l)=>l.modified)).subtractFrom(this.modifiedUnchangedRange);
        let s = this.originalLineNumber, o = this.modifiedLineNumber;
        const a = this.modifiedLineNumber + this.lineCount;
        if (r.ranges.length === 0) this.showAll(n), i.push(this);
        else {
            let l = 0;
            for (const c of r.ranges){
                const u = l === r.ranges.length - 1;
                l++;
                const d = (u ? a : c.endLineNumberExclusive) - o, h = new iXs(s, o, d, 0, 0);
                h.setHiddenModifiedRange(c, n), i.push(h), s = h.originalUnchangedRange.endLineNumberExclusive, o = h.modifiedUnchangedRange.endLineNumberExclusive;
            }
        }
        return i;
    }
    shouldHideControls(e) {
        return this._shouldHideControls.read(e);
    }
    getHiddenOriginalRange(e) {
        return wd.ofLength(this.originalLineNumber + this._visibleLineCountTop.read(e), this.lineCount - this._visibleLineCountTop.read(e) - this._visibleLineCountBottom.read(e));
    }
    getHiddenModifiedRange(e) {
        return wd.ofLength(this.modifiedLineNumber + this._visibleLineCountTop.read(e), this.lineCount - this._visibleLineCountTop.read(e) - this._visibleLineCountBottom.read(e));
    }
    setHiddenModifiedRange(e, n) {
        const i = e.startLineNumber - this.modifiedLineNumber, r = this.modifiedLineNumber + this.lineCount - e.endLineNumberExclusive;
        this.setState(i, r, n);
    }
    getMaxVisibleLineCountTop() {
        return this.lineCount - this._visibleLineCountBottom.get();
    }
    getMaxVisibleLineCountBottom() {
        return this.lineCount - this._visibleLineCountTop.get();
    }
    showMoreAbove(e = 10, n) {
        const i = this.getMaxVisibleLineCountTop();
        this._visibleLineCountTop.set(Math.min(this._visibleLineCountTop.get() + e, i), n);
    }
    showMoreBelow(e = 10, n) {
        const i = this.lineCount - this._visibleLineCountTop.get();
        this._visibleLineCountBottom.set(Math.min(this._visibleLineCountBottom.get() + e, i), n);
    }
    showAll(e) {
        this._visibleLineCountBottom.set(this.lineCount - this._visibleLineCountTop.get(), e);
    }
    showModifiedLine(e, n, i) {
        const r = e + 1 - (this.modifiedLineNumber + this._visibleLineCountTop.get()), s = this.modifiedLineNumber - this._visibleLineCountBottom.get() + this.lineCount - e;
        n === 0 && r < s || n === 1 ? this._visibleLineCountTop.set(this._visibleLineCountTop.get() + r, i) : this._visibleLineCountBottom.set(this._visibleLineCountBottom.get() + s, i);
    }
    showOriginalLine(e, n, i) {
        const r = e - this.originalLineNumber, s = this.originalLineNumber + this.lineCount - e;
        n === 0 && r < s || n === 1 ? this._visibleLineCountTop.set(Math.min(this._visibleLineCountTop.get() + s - r, this.getMaxVisibleLineCountTop()), i) : this._visibleLineCountBottom.set(Math.min(this._visibleLineCountBottom.get() + r - s, this.getMaxVisibleLineCountBottom()), i);
    }
    collapseAll(e) {
        this._visibleLineCountTop.set(0, e), this._visibleLineCountBottom.set(0, e);
    }
    setState(e, n, i) {
        e = Math.max(Math.min(e, this.lineCount), 0), n = Math.max(Math.min(n, this.lineCount - e), 0), this._visibleLineCountTop.set(e, i), this._visibleLineCountBottom.set(n, i);
    }
};

}
