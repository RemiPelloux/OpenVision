import { Md, Nt, Qe, st } from "./Iwo.js";
import { bo } from "./arrays.js";
import { Yu, qn } from "./async.js";
import { Jd } from "./autorun.js";
import { bb, hf } from "./clipboardService.js";
import { gs, yt } from "./codicons.js";
import { Mf, pf } from "./contextView.js";
import { KGo, RTr } from "./diffEditorViewModel.js";
import { she } from "./domFontInfo.js";
import { Hn } from "./dom_2.js";
import { Oqd, sLy } from "./inlineDiffDeletedCodeMargin.js";
import { DD } from "./lineRange.js";
import { Jc } from "./observable.js";
import { jc } from "./position.js";
import { Qs } from "./range.js";
import { CTr, DGo, wTr } from "./registrations.contribution.js";
import { MTr, coi, loi } from "./renderLines.js";
import { Gn, ta } from "./themables.js";
import { E } from "./tslib.es6.js";
import { To } from "./types_2.js";
import { F, Re } from "./userDataProfile.js";
import { Yv } from "./utils_10.js";
import { bwe } from "./utils_13.js";
import { pHe, zAe } from "./viewModel.js";
import { Bqd, Ii, Kde, PTr, XGo, Zo, bc, li, oB, zGd } from "./ze.js";
var NTr;
export { NTr };
var __wakaru_LTr_initialized = false;
export function LTr() {
if (__wakaru_LTr_initialized) return;
__wakaru_LTr_initialized = true;
"use strict";
E(), Hn(), bo(), qn(), gs(), Qe(), Jc(), ta(), To(), she(), CTr(), RTr(), sLy(), MTr(), bwe(), DD(), jc(), zAe(), bb(), pf(), Qs(), NTr = class extends st {
    constructor(t, e, n, i, r, s, o, a, l, c){
        super(), this._targetWindow = t, this._editors = e, this._diffModel = n, this._options = i, this._diffEditorWidget = r, this._canIgnoreViewZoneUpdateEvent = s, this._origViewZonesToIgnore = o, this._modViewZonesToIgnore = a, this._clipboardService = l, this._contextMenuService = c, this._originalTopPadding = bc(this, 0), this._originalScrollOffset = bc(this, 0), this._originalScrollOffsetAnimated = zGd(this._targetWindow, this._originalScrollOffset, this._store), this._modifiedTopPadding = bc(this, 0), this._modifiedScrollOffset = bc(this, 0), this._modifiedScrollOffsetAnimated = zGd(this._targetWindow, this._modifiedScrollOffset, this._store);
        const u = bc("invalidateAlignmentsState", 0), d = this._register(new Yu(()=>{
            u.set(u.get() + 1, void 0);
        }, 0));
        this._register(this._editors.original.onDidChangeViewZones((y)=>{
            this._canIgnoreViewZoneUpdateEvent() || d.schedule();
        })), this._register(this._editors.modified.onDidChangeViewZones((y)=>{
            this._canIgnoreViewZoneUpdateEvent() || d.schedule();
        })), this._register(this._editors.original.onDidChangeConfiguration((y)=>{
            (y.hasChanged(152) || y.hasChanged(68)) && d.schedule();
        })), this._register(this._editors.modified.onDidChangeConfiguration((y)=>{
            (y.hasChanged(152) || y.hasChanged(68)) && d.schedule();
        }));
        const h = this._diffModel.map((y)=>y ? Yv(this, y.model.original.onDidChangeTokens, ()=>y.model.original.tokenization.backgroundTokenizationState === 2) : void 0).map((y, S)=>y?.read(S)), p = Zo((y)=>{
            const S = this._diffModel.read(y), k = S?.diff.read(y);
            if (!S || !k) return null;
            u.read(y);
            const T = this._options.renderSideBySide.read(y);
            return Bqd(this._editors.original, this._editors.modified, k.mappings, this._origViewZonesToIgnore, this._modViewZonesToIgnore, T);
        }), g = Zo((y)=>{
            const S = this._diffModel.read(y)?.movedTextToCompare.read(y);
            if (!S) return null;
            u.read(y);
            const k = S.changes.map((C)=>new KGo(C));
            return Bqd(this._editors.original, this._editors.modified, k, this._origViewZonesToIgnore, this._modViewZonesToIgnore, !0);
        });
        function f() {
            const y = document.createElement("div");
            return y.className = "diagonal-fill", y;
        }
        const _ = this._register(new Nt);
        this.viewZones = Kde(this, (y, S)=>{
            _.clear();
            const k = p.read(y) || [], C = [], T = [], I = this._modifiedTopPadding.read(y);
            I > 0 && T.push({
                afterLineNumber: 0,
                domNode: document.createElement("div"),
                heightInPx: I,
                showInHiddenAreas: !0,
                suppressMouseDown: !0
            });
            const A = this._originalTopPadding.read(y);
            A > 0 && C.push({
                afterLineNumber: 0,
                domNode: document.createElement("div"),
                heightInPx: A,
                showInHiddenAreas: !0,
                suppressMouseDown: !0
            });
            const P = this._options.renderSideBySide.read(y), M = P ? void 0 : this._editors.modified._getViewModel()?.createLineBreaksComputer();
            if (M) {
                const K = this._editors.original.getModel();
                for (const V of k)if (V.diff) for(let Y = V.originalRange.startLineNumber; Y < V.originalRange.endLineNumberExclusive; Y++){
                    if (Y > K.getLineCount()) return {
                        orig: C,
                        mod: T
                    };
                    M?.addRequest(K.getLineContent(Y), null, null);
                }
            }
            const O = M?.finalize() ?? [];
            let N = 0;
            const U = this._editors.modified.getOption(68), j = this._diffModel.read(y)?.movedTextToCompare.read(y), $ = this._editors.original.getModel()?.mightContainNonBasicASCII() ?? !1, H = this._editors.original.getModel()?.mightContainRTL() ?? !1, G = coi.fromEditor(this._editors.modified);
            for (const K of k)if (K.diff && !P && (!this._options.useTrueInlineDiffRendering.read(y) || !XGo(K.diff))) {
                if (!K.originalRange.isEmpty) {
                    h.read(y);
                    const Y = document.createElement("div");
                    Y.classList.add("view-lines", "line-delete", "monaco-mouse-cursor-text");
                    const J = this._editors.original.getModel();
                    if (K.originalRange.endLineNumberExclusive - 1 > J.getLineCount()) return {
                        orig: C,
                        mod: T
                    };
                    const Q = new loi(K.originalRange.mapToLineArray((oe)=>J.tokenization.getLineTokens(oe)), K.originalRange.mapToLineArray((oe)=>O[N++]), $, H), te = [];
                    for (const oe of K.diff.innerChanges || [])te.push(new pHe(oe.originalRange.delta(-(K.diff.original.startLineNumber - 1)), wTr.className, 0));
                    const ee = PTr(Q, G, te, Y, !0), re = document.createElement("div");
                    if (re.className = "inline-deleted-margin-view-zone", oB(re, G.fontInfo), this._options.renderIndicators.read(y)) for(let oe = 0; oe < ee.heightInLines; oe++){
                        const se = document.createElement("div");
                        se.className = `delete-sign ${Gn.asClassName(DGo)}`, se.setAttribute("style", `position:absolute;top:${oe * U}px;width:${G.lineDecorationsWidth}px;height:${U}px;right:0;`), re.appendChild(se);
                    }
                    let ie;
                    _.add(new Oqd(()=>Md(ie), re, this._editors.modified, K.diff, this._diffEditorWidget, ee.viewLineCounts, this._editors.original.getModel(), this._contextMenuService, this._clipboardService));
                    for(let oe = 0; oe < ee.viewLineCounts.length; oe++){
                        const se = ee.viewLineCounts[oe];
                        se > 1 && C.push({
                            afterLineNumber: K.originalRange.startLineNumber + oe,
                            domNode: f(),
                            heightInPx: (se - 1) * U,
                            showInHiddenAreas: !0,
                            suppressMouseDown: !0
                        });
                    }
                    T.push({
                        afterLineNumber: K.modifiedRange.startLineNumber - 1,
                        domNode: Y,
                        heightInPx: ee.heightInLines * U,
                        minWidthInPx: ee.minWidthInPx,
                        marginDomNode: re,
                        setZoneId (oe) {
                            ie = oe;
                        },
                        showInHiddenAreas: !0,
                        suppressMouseDown: !0
                    });
                }
                const V = document.createElement("div");
                V.className = "gutter-delete", C.push({
                    afterLineNumber: K.originalRange.endLineNumberExclusive - 1,
                    domNode: f(),
                    heightInPx: K.modifiedHeightInPx,
                    marginDomNode: V,
                    showInHiddenAreas: !0,
                    suppressMouseDown: !0
                });
            } else {
                const V = K.modifiedHeightInPx - K.originalHeightInPx;
                if (V > 0) {
                    if (j?.lineRangeMapping.original.delta(-1).deltaLength(2).contains(K.originalRange.endLineNumberExclusive - 1)) continue;
                    C.push({
                        afterLineNumber: K.originalRange.endLineNumberExclusive - 1,
                        domNode: f(),
                        heightInPx: V,
                        showInHiddenAreas: !0,
                        suppressMouseDown: !0
                    });
                } else {
                    let Y = function() {
                        const Q = document.createElement("div");
                        return Q.className = "arrow-revert-change " + Gn.asClassName(yt.arrowRight), S.add(li(Q, "mousedown", (te)=>te.stopPropagation())), S.add(li(Q, "click", (te)=>{
                            te.stopPropagation(), r.revert(K.diff);
                        })), Ii("div", {}, Q);
                    };
                    var q = Y;
                    if (j?.lineRangeMapping.modified.delta(-1).deltaLength(2).contains(K.modifiedRange.endLineNumberExclusive - 1)) continue;
                    let J;
                    K.diff && K.diff.modified.isEmpty && this._options.shouldRenderOldRevertArrows.read(y) && (J = Y()), T.push({
                        afterLineNumber: K.modifiedRange.endLineNumberExclusive - 1,
                        domNode: f(),
                        heightInPx: -V,
                        marginDomNode: J,
                        showInHiddenAreas: !0,
                        suppressMouseDown: !0
                    });
                }
            }
            for (const K of g.read(y) ?? []){
                if (!j?.lineRangeMapping.original.intersect(K.originalRange) || !j?.lineRangeMapping.modified.intersect(K.modifiedRange)) continue;
                const V = K.modifiedHeightInPx - K.originalHeightInPx;
                V > 0 ? C.push({
                    afterLineNumber: K.originalRange.endLineNumberExclusive - 1,
                    domNode: f(),
                    heightInPx: V,
                    showInHiddenAreas: !0,
                    suppressMouseDown: !0
                }) : T.push({
                    afterLineNumber: K.modifiedRange.endLineNumberExclusive - 1,
                    domNode: f(),
                    heightInPx: -V,
                    showInHiddenAreas: !0,
                    suppressMouseDown: !0
                });
            }
            return {
                orig: C,
                mod: T
            };
        });
        let b = !1;
        this._register(this._editors.original.onDidScrollChange((y)=>{
            y.scrollLeftChanged && !b && (b = !0, this._editors.modified.setScrollLeft(y.scrollLeft), b = !1);
        })), this._register(this._editors.modified.onDidScrollChange((y)=>{
            y.scrollLeftChanged && !b && (b = !0, this._editors.original.setScrollLeft(y.scrollLeft), b = !1);
        })), this._originalScrollTop = Yv(this._editors.original.onDidScrollChange, ()=>this._editors.original.getScrollTop()), this._modifiedScrollTop = Yv(this._editors.modified.onDidScrollChange, ()=>this._editors.modified.getScrollTop()), this._register(Jd((y)=>{
            const S = this._originalScrollTop.read(y) - (this._originalScrollOffsetAnimated.read(void 0) - this._modifiedScrollOffsetAnimated.read(y)) - (this._originalTopPadding.read(void 0) - this._modifiedTopPadding.read(y));
            S !== this._editors.modified.getScrollTop() && this._editors.modified.setScrollTop(S, 1);
        })), this._register(Jd((y)=>{
            const S = this._modifiedScrollTop.read(y) - (this._modifiedScrollOffsetAnimated.read(void 0) - this._originalScrollOffsetAnimated.read(y)) - (this._modifiedTopPadding.read(void 0) - this._originalTopPadding.read(y));
            S !== this._editors.original.getScrollTop() && this._editors.original.setScrollTop(S, 1);
        })), this._register(Jd((y)=>{
            const S = this._diffModel.read(y)?.movedTextToCompare.read(y);
            let k = 0;
            if (S) {
                const C = this._editors.original.getTopForLineNumber(S.lineRangeMapping.original.startLineNumber, !0) - this._originalTopPadding.read(void 0);
                k = this._editors.modified.getTopForLineNumber(S.lineRangeMapping.modified.startLineNumber, !0) - this._modifiedTopPadding.read(void 0) - C;
            }
            k > 0 ? (this._modifiedTopPadding.set(0, void 0), this._originalTopPadding.set(k, void 0)) : k < 0 ? (this._modifiedTopPadding.set(-k, void 0), this._originalTopPadding.set(0, void 0)) : setTimeout(()=>{
                this._modifiedTopPadding.set(0, void 0), this._originalTopPadding.set(0, void 0);
            }, 400), this._editors.modified.hasTextFocus() ? this._originalScrollOffset.set(this._modifiedScrollOffset.read(void 0) - k, void 0, !0) : this._modifiedScrollOffset.set(this._originalScrollOffset.read(void 0) + k, void 0, !0);
        }));
    }
}, NTr = Re([
    F(8, hf),
    F(9, Mf)
], NTr);

}
