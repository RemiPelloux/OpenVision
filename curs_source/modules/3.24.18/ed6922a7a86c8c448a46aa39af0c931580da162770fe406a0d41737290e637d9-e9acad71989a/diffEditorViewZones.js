import { He, Se, tl, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { dr } from "./arrays.js";
import { ac, bn } from "./async.js";
import { Hc } from "./autorun.js";
import { Yp, zu } from "./clipboardService.js";
import { Pe, _i } from "./codicons.js";
import { Yo, ka } from "./contextView.js";
import { Gns, Mvn } from "./diffEditorViewModel.js";
import { WK } from "./domFontInfo.js";
import { en } from "./dom_2.js";
import { c7c, dSg } from "./inlineDiffDeletedCodeMargin.js";
import { hA } from "./lineRange.js";
import { qa } from "./observable.js";
import { ya } from "./position.js";
import { Ds, Pvn, Ve, Xo, Xt, _8c, c2, jns, u7c, uJ } from "./qIc.js";
import { qi } from "./range.js";
import { Evn, Ins, Tvn } from "./registrations.contribution.js";
import { LFt, Lvn, PFt } from "./renderLines.js";
import { Ft, Sr } from "./themables.js";
import { x } from "./tslib.es6.js";
import { gr } from "./types_2.js";
import { qp } from "./utils_10.js";
import { Dle } from "./utils_13.js";
import { Cle, Cwe } from "./viewModel.js";
var iyi;
export { iyi };
var __wakaru_ryi_initialized = false;
export function ryi() {
if (__wakaru_ryi_initialized) return;
__wakaru_ryi_initialized = true;
"use strict";
x(), en(), dr(), bn(), _i(), Se(), qa(), Sr(), gr(), WK(), Evn(), Mvn(), dSg(), Lvn(), Dle(), hA(), ya(), Cle(), Yp(), ka(), qi(), iyi = class extends we {
    constructor(e, t, n, i, r, s, o, a, c, l){
        super(), this._targetWindow = e, this._editors = t, this._diffModel = n, this._options = i, this._diffEditorWidget = r, this._canIgnoreViewZoneUpdateEvent = s, this._origViewZonesToIgnore = o, this._modViewZonesToIgnore = a, this._clipboardService = c, this._contextMenuService = l, this._originalTopPadding = Xo(this, 0), this._originalScrollOffset = Xo(this, 0), this._originalScrollOffsetAnimated = _8c(this._targetWindow, this._originalScrollOffset, this._store), this._modifiedTopPadding = Xo(this, 0), this._modifiedScrollOffset = Xo(this, 0), this._modifiedScrollOffsetAnimated = _8c(this._targetWindow, this._modifiedScrollOffset, this._store);
        const u = Xo("invalidateAlignmentsState", 0), h = this._register(new ac(()=>{
            u.set(u.get() + 1, void 0);
        }, 0));
        this._register(this._editors.original.onDidChangeViewZones((T)=>{
            this._canIgnoreViewZoneUpdateEvent() || h.schedule();
        })), this._register(this._editors.modified.onDidChangeViewZones((T)=>{
            this._canIgnoreViewZoneUpdateEvent() || h.schedule();
        })), this._register(this._editors.original.onDidChangeConfiguration((T)=>{
            (T.hasChanged(152) || T.hasChanged(68)) && h.schedule();
        })), this._register(this._editors.modified.onDidChangeConfiguration((T)=>{
            (T.hasChanged(152) || T.hasChanged(68)) && h.schedule();
        }));
        const p = this._diffModel.map((T)=>T ? qp(this, T.model.original.onDidChangeTokens, ()=>T.model.original.tokenization.backgroundTokenizationState === 2) : void 0).map((T, E)=>T?.read(E)), g = Ds((T)=>{
            const E = this._diffModel.read(T), A = E?.diff.read(T);
            if (!E || !A) return null;
            u.read(T);
            const D = this._options.renderSideBySide.read(T);
            return u7c(this._editors.original, this._editors.modified, A.mappings, this._origViewZonesToIgnore, this._modViewZonesToIgnore, D);
        }), f = Ds((T)=>{
            const E = this._diffModel.read(T)?.movedTextToCompare.read(T);
            if (!E) return null;
            u.read(T);
            const A = E.changes.map((R)=>new Gns(R));
            return u7c(this._editors.original, this._editors.modified, A, this._origViewZonesToIgnore, this._modViewZonesToIgnore, !0);
        });
        function v() {
            const T = document.createElement("div");
            return T.className = "diagonal-fill", T;
        }
        const b = this._register(new He);
        this.viewZones = uJ(this, (T, E)=>{
            b.clear();
            const A = g.read(T) || [], R = [], D = [], P = this._modifiedTopPadding.read(T);
            P > 0 && D.push({
                afterLineNumber: 0,
                domNode: document.createElement("div"),
                heightInPx: P,
                showInHiddenAreas: !0,
                suppressMouseDown: !0
            });
            const N = this._originalTopPadding.read(T);
            N > 0 && R.push({
                afterLineNumber: 0,
                domNode: document.createElement("div"),
                heightInPx: N,
                showInHiddenAreas: !0,
                suppressMouseDown: !0
            });
            const O = this._options.renderSideBySide.read(T), F = O ? void 0 : this._editors.modified._getViewModel()?.createLineBreaksComputer();
            if (F) {
                const Z = this._editors.original.getModel();
                for (const K of A)if (K.diff) for(let J = K.originalRange.startLineNumber; J < K.originalRange.endLineNumberExclusive; J++){
                    if (J > Z.getLineCount()) return {
                        orig: R,
                        mod: D
                    };
                    F?.addRequest(Z.getLineContent(J), null, null);
                }
            }
            const H = F?.finalize() ?? [];
            let $ = 0;
            const W = this._editors.modified.getOption(68), G = this._diffModel.read(T)?.movedTextToCompare.read(T), q = this._editors.original.getModel()?.mightContainNonBasicASCII() ?? !1, z = this._editors.original.getModel()?.mightContainRTL() ?? !1, X = LFt.fromEditor(this._editors.modified);
            for (const Z of A)if (Z.diff && !O && (!this._options.useTrueInlineDiffRendering.read(T) || !jns(Z.diff))) {
                if (!Z.originalRange.isEmpty) {
                    p.read(T);
                    const J = document.createElement("div");
                    J.classList.add("view-lines", "line-delete", "monaco-mouse-cursor-text");
                    const ne = this._editors.original.getModel();
                    if (Z.originalRange.endLineNumberExclusive - 1 > ne.getLineCount()) return {
                        orig: R,
                        mod: D
                    };
                    const ee = new PFt(Z.originalRange.mapToLineArray((de)=>ne.tokenization.getLineTokens(de)), Z.originalRange.mapToLineArray((de)=>H[$++]), q, z), se = [];
                    for (const de of Z.diff.innerChanges || [])se.push(new Cwe(de.originalRange.delta(-(Z.diff.original.startLineNumber - 1)), Tvn.className, 0));
                    const re = Pvn(ee, X, se, J, !0), ue = document.createElement("div");
                    if (ue.className = "inline-deleted-margin-view-zone", c2(ue, X.fontInfo), this._options.renderIndicators.read(T)) for(let de = 0; de < re.heightInLines; de++){
                        const le = document.createElement("div");
                        le.className = `delete-sign ${Ft.asClassName(Ins)}`, le.setAttribute("style", `position:absolute;top:${de * W}px;width:${X.lineDecorationsWidth}px;height:${W}px;right:0;`), ue.appendChild(le);
                    }
                    let ce;
                    b.add(new c7c(()=>tl(ce), ue, this._editors.modified, Z.diff, this._diffEditorWidget, re.viewLineCounts, this._editors.original.getModel(), this._contextMenuService, this._clipboardService));
                    for(let de = 0; de < re.viewLineCounts.length; de++){
                        const le = re.viewLineCounts[de];
                        le > 1 && R.push({
                            afterLineNumber: Z.originalRange.startLineNumber + de,
                            domNode: v(),
                            heightInPx: (le - 1) * W,
                            showInHiddenAreas: !0,
                            suppressMouseDown: !0
                        });
                    }
                    D.push({
                        afterLineNumber: Z.modifiedRange.startLineNumber - 1,
                        domNode: J,
                        heightInPx: re.heightInLines * W,
                        minWidthInPx: re.minWidthInPx,
                        marginDomNode: ue,
                        setZoneId (de) {
                            ce = de;
                        },
                        showInHiddenAreas: !0,
                        suppressMouseDown: !0
                    });
                }
                const K = document.createElement("div");
                K.className = "gutter-delete", R.push({
                    afterLineNumber: Z.originalRange.endLineNumberExclusive - 1,
                    domNode: v(),
                    heightInPx: Z.modifiedHeightInPx,
                    marginDomNode: K,
                    showInHiddenAreas: !0,
                    suppressMouseDown: !0
                });
            } else {
                const K = Z.modifiedHeightInPx - Z.originalHeightInPx;
                if (K > 0) {
                    if (G?.lineRangeMapping.original.delta(-1).deltaLength(2).contains(Z.originalRange.endLineNumberExclusive - 1)) continue;
                    R.push({
                        afterLineNumber: Z.originalRange.endLineNumberExclusive - 1,
                        domNode: v(),
                        heightInPx: K,
                        showInHiddenAreas: !0,
                        suppressMouseDown: !0
                    });
                } else {
                    let J = function() {
                        const ee = document.createElement("div");
                        return ee.className = "arrow-revert-change " + Ft.asClassName(Pe.arrowRight), E.add(Xt(ee, "mousedown", (se)=>se.stopPropagation())), E.add(Xt(ee, "click", (se)=>{
                            se.stopPropagation(), r.revert(Z.diff);
                        })), Ve("div", {}, ee);
                    };
                    var Y = J;
                    if (G?.lineRangeMapping.modified.delta(-1).deltaLength(2).contains(Z.modifiedRange.endLineNumberExclusive - 1)) continue;
                    let ne;
                    Z.diff && Z.diff.modified.isEmpty && this._options.shouldRenderOldRevertArrows.read(T) && (ne = J()), D.push({
                        afterLineNumber: Z.modifiedRange.endLineNumberExclusive - 1,
                        domNode: v(),
                        heightInPx: -K,
                        marginDomNode: ne,
                        showInHiddenAreas: !0,
                        suppressMouseDown: !0
                    });
                }
            }
            for (const Z of f.read(T) ?? []){
                if (!G?.lineRangeMapping.original.intersect(Z.originalRange) || !G?.lineRangeMapping.modified.intersect(Z.modifiedRange)) continue;
                const K = Z.modifiedHeightInPx - Z.originalHeightInPx;
                K > 0 ? R.push({
                    afterLineNumber: Z.originalRange.endLineNumberExclusive - 1,
                    domNode: v(),
                    heightInPx: K,
                    showInHiddenAreas: !0,
                    suppressMouseDown: !0
                }) : D.push({
                    afterLineNumber: Z.modifiedRange.endLineNumberExclusive - 1,
                    domNode: v(),
                    heightInPx: -K,
                    showInHiddenAreas: !0,
                    suppressMouseDown: !0
                });
            }
            return {
                orig: R,
                mod: D
            };
        });
        let y = !1;
        this._register(this._editors.original.onDidScrollChange((T)=>{
            T.scrollLeftChanged && !y && (y = !0, this._editors.modified.setScrollLeft(T.scrollLeft), y = !1);
        })), this._register(this._editors.modified.onDidScrollChange((T)=>{
            T.scrollLeftChanged && !y && (y = !0, this._editors.original.setScrollLeft(T.scrollLeft), y = !1);
        })), this._originalScrollTop = qp(this._editors.original.onDidScrollChange, ()=>this._editors.original.getScrollTop()), this._modifiedScrollTop = qp(this._editors.modified.onDidScrollChange, ()=>this._editors.modified.getScrollTop()), this._register(Hc((T)=>{
            const E = this._originalScrollTop.read(T) - (this._originalScrollOffsetAnimated.read(void 0) - this._modifiedScrollOffsetAnimated.read(T)) - (this._originalTopPadding.read(void 0) - this._modifiedTopPadding.read(T));
            E !== this._editors.modified.getScrollTop() && this._editors.modified.setScrollTop(E, 1);
        })), this._register(Hc((T)=>{
            const E = this._modifiedScrollTop.read(T) - (this._modifiedScrollOffsetAnimated.read(void 0) - this._originalScrollOffsetAnimated.read(T)) - (this._modifiedTopPadding.read(void 0) - this._originalTopPadding.read(T));
            E !== this._editors.original.getScrollTop() && this._editors.original.setScrollTop(E, 1);
        })), this._register(Hc((T)=>{
            const E = this._diffModel.read(T)?.movedTextToCompare.read(T);
            let A = 0;
            if (E) {
                const R = this._editors.original.getTopForLineNumber(E.lineRangeMapping.original.startLineNumber, !0) - this._originalTopPadding.read(void 0);
                A = this._editors.modified.getTopForLineNumber(E.lineRangeMapping.modified.startLineNumber, !0) - this._modifiedTopPadding.read(void 0) - R;
            }
            A > 0 ? (this._modifiedTopPadding.set(0, void 0), this._originalTopPadding.set(A, void 0)) : A < 0 ? (this._modifiedTopPadding.set(-A, void 0), this._originalTopPadding.set(0, void 0)) : setTimeout(()=>{
                this._modifiedTopPadding.set(0, void 0), this._originalTopPadding.set(0, void 0);
            }, 400), this._editors.modified.hasTextFocus() ? this._originalScrollOffset.set(this._modifiedScrollOffset.read(void 0) - A, void 0, !0) : this._modifiedScrollOffset.set(this._originalScrollOffset.read(void 0) + A, void 0, !0);
        }));
    }
}, iyi = ie([
    C(8, zu),
    C(9, Yo)
], iyi);

}
