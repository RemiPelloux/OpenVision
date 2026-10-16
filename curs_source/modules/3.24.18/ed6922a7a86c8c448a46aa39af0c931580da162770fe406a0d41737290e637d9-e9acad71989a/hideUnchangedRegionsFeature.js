import { S, Se, Tl, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { Hc } from "./autorun.js";
import { Pe, _i } from "./codicons.js";
import { en, xi } from "./dom_2.js";
import { MSg, Sis, j7c, yis } from "./hideUnchangedRegionsConstants.js";
import { Ec, _g } from "./htmlContent.js";
import { DE } from "./iconLabels_2.js";
import { Ze, _t } from "./instantiation.js";
import { Wp, bwe } from "./languages.js";
import { Vl, hA } from "./lineRange.js";
import { rt } from "./nls.js";
import { qa } from "./observable.js";
import { kW } from "./observableCodeEditor.js";
import { Yn, ya } from "./position.js";
import { Ds, Obi, Sp, Uh, Ve, Xo, Xt, cu, gR, h5, sKe, uJ, ule, vS } from "./qIc.js";
import { dt, qi } from "./range.js";
import { Ft, Sr } from "./themables.js";
import { x } from "./tslib.es6.js";
import { gr } from "./types_2.js";
import { Bbi, Dle, imt } from "./utils_13.js";
var hKe, kis, wis, Cis;
export { Cis, hKe, kis, wis };
var __wakaru_q7c_initialized = false;
export function q7c() {
if (__wakaru_q7c_initialized) return;
__wakaru_q7c_initialized = true;
"use strict";
x(), en(), DE(), _i(), _g(), Se(), qa(), Sr(), gr(), rt(), Ze(), hA(), ya(), qi(), Wp(), kW(), Dle(), MSg(), hKe = class extends we {
    constructor(e, t, n, i){
        super(), this._editors = e, this._diffModel = t, this._options = n, this._instantiationService = i, this._modifiedOutlineSource = ule(this, (a)=>{
            const c = this._editors.modifiedModel.read(a), l = hKe._breadcrumbsSourceFactory.read(a);
            return !c || !l ? void 0 : l(c, this._instantiationService);
        }), this._isUpdatingHiddenAreas = !1, this._register(this._editors.original.onDidChangeCursorPosition((a)=>{
            if (a.reason === 1) return;
            const c = this._diffModel.get();
            Uh((l)=>{
                for (const u of this._editors.original.getSelections() || [])c?.ensureOriginalLineIsVisible(u.getStartPosition().lineNumber, 0, l), c?.ensureOriginalLineIsVisible(u.getEndPosition().lineNumber, 0, l);
            });
        })), this._register(this._editors.modified.onDidChangeCursorPosition((a)=>{
            if (a.reason === 1) return;
            const c = this._diffModel.get();
            Uh((l)=>{
                for (const u of this._editors.modified.getSelections() || [])c?.ensureModifiedLineIsVisible(u.getStartPosition().lineNumber, 0, l), c?.ensureModifiedLineIsVisible(u.getEndPosition().lineNumber, 0, l);
            });
        }));
        const r = this._diffModel.map((a, c)=>{
            const l = a?.unchangedRegions.read(c) ?? [];
            return l.length === 1 && l[0].modifiedLineNumber === 1 && l[0].lineCount === this._editors.modifiedModel.read(c)?.getLineCount() ? [] : l;
        });
        this.viewZones = uJ(this, (a, c)=>{
            const l = this._modifiedOutlineSource.read(a);
            if (!l) return {
                origViewZones: [],
                modViewZones: []
            };
            const u = [], h = [], p = this._options.renderSideBySide.read(a), g = this._options.compactMode.read(a), f = this._editors.modifiedModel.read(a)?.getLineCount(), v = r.read(a);
            for(let b = 0; b < v.length; b++){
                const y = v[b];
                if (!y.shouldHideControls(a)) {
                    if (g) {
                        const T = y.getHiddenModifiedRange(a), E = T.startLineNumber === 1, A = f !== void 0 && T.endLineNumberExclusive === f + 1;
                        if (E || A) continue;
                    }
                    if (g) {
                        {
                            const T = Ds(this, (A)=>y.getHiddenOriginalRange(A).startLineNumber - 1), E = new imt(T, Sis);
                            u.push(E), c.add(new kis(this._editors.original, E, y, !p));
                        }
                        {
                            const T = Ds(this, (A)=>y.getHiddenModifiedRange(A).startLineNumber - 1), E = new imt(T, Sis);
                            h.push(E), c.add(new kis(this._editors.modified, E, y));
                        }
                    } else {
                        const E = b === v.length - 1 ? 2 : 0;
                        if (p) {
                            const A = Ds(this, (D)=>y.getHiddenOriginalRange(D).startLineNumber - 1), R = new imt(A, yis + E);
                            u.push(R), c.add(new Cis(this._editors.original, R, y, y.originalUnchangedRange, !p, l, (D)=>this._diffModel.get().ensureModifiedLineIsVisible(D, 2, void 0), this._options));
                        }
                        {
                            const A = Ds(this, (P)=>y.getHiddenModifiedRange(P).startLineNumber - 1), R = p ? yis : j7c, D = new imt(A, R + E);
                            h.push(D), c.add(new Cis(this._editors.modified, D, y, y.modifiedUnchangedRange, !1, l, (P)=>this._diffModel.get().ensureModifiedLineIsVisible(P, 2, void 0), this._options));
                        }
                    }
                }
            }
            return {
                origViewZones: u,
                modViewZones: h
            };
        });
        const s = {
            description: "unchanged lines",
            className: "diff-unchanged-lines",
            isWholeLine: !0
        }, o = {
            description: "Fold Unchanged",
            glyphMarginHoverMessage: new Ec(void 0, {
                isTrusted: !0,
                supportThemeIcons: !0
            }).appendMarkdown(S(243, null)),
            glyphMarginClassName: "fold-unchanged " + Ft.asClassName(Pe.fold),
            zIndex: 10001
        };
        this._register(Obi(this._editors.original, Ds(this, (a)=>{
            const c = r.read(a), l = c.map((u)=>({
                    range: u.originalUnchangedRange.toInclusiveRange(),
                    options: s
                }));
            for (const u of c)u.shouldHideControls(a) && l.push({
                range: dt.fromPositions(new Yn(u.originalLineNumber, 1)),
                options: o
            });
            return l;
        }))), this._register(Obi(this._editors.modified, Ds(this, (a)=>{
            const c = r.read(a), l = c.map((u)=>({
                    range: u.modifiedUnchangedRange.toInclusiveRange(),
                    options: s
                }));
            for (const u of c)u.shouldHideControls(a) && l.push({
                range: Vl.ofLength(u.modifiedLineNumber, 1).toInclusiveRange(),
                options: o
            });
            return l;
        }))), this._register(Hc((a)=>{
            const c = r.read(a);
            this._isUpdatingHiddenAreas = !0;
            try {
                this._editors.original.setHiddenAreas(c.map((l)=>l.getHiddenOriginalRange(a).toInclusiveRange()).filter(Tl)), this._editors.modified.setHiddenAreas(c.map((l)=>l.getHiddenModifiedRange(a).toInclusiveRange()).filter(Tl));
            } finally{
                this._isUpdatingHiddenAreas = !1;
            }
        })), this._register(this._editors.modified.onMouseUp((a)=>{
            if (!a.event.rightButton && a.target.position && a.target.element?.className.includes("fold-unchanged")) {
                const c = a.target.position.lineNumber, l = this._diffModel.get();
                if (!l) return;
                const u = l.unchangedRegions.get().find((h)=>h.modifiedUnchangedRange.includes(c));
                if (!u) return;
                u.collapseAll(void 0), a.event.stopPropagation(), a.event.preventDefault();
            }
        })), this._register(this._editors.original.onMouseUp((a)=>{
            if (!a.event.rightButton && a.target.position && a.target.element?.className.includes("fold-unchanged")) {
                const c = a.target.position.lineNumber, l = this._diffModel.get();
                if (!l) return;
                const u = l.unchangedRegions.get().find((h)=>h.originalUnchangedRange.includes(c));
                if (!u) return;
                u.collapseAll(void 0), a.event.stopPropagation(), a.event.preventDefault();
            }
        }));
    }
    static setBreadcrumbsSourceFactory(e) {
        this._breadcrumbsSourceFactory.set(e, void 0);
    }
    get isUpdatingHiddenAreas() {
        return this._isUpdatingHiddenAreas;
    }
}, hKe._breadcrumbsSourceFactory = Xo(hKe, ()=>({
        dispose () {},
        getBreadcrumbItems (e, t) {
            return [];
        }
    })), hKe = ie([
    C(3, _t)
], hKe), kis = class extends Bbi {
    constructor(e, t, n, i = !1){
        const r = cu("div.diff-hidden-lines-widget");
        super(e, t, r.root), this._unchangedRegion = n, this._hide = i, this._nodes = cu("div.diff-hidden-lines-compact", [
            cu("div.line-left", []),
            cu("div.text@text", []),
            cu("div.line-right", [])
        ]), r.root.appendChild(this._nodes.root), this._hide && this._nodes.root.replaceChildren(), this._register(Hc((s)=>{
            if (!this._hide) {
                const o = this._unchangedRegion.getHiddenModifiedRange(s).length, a = S(244, null, o);
                this._nodes.text.innerText = a;
            }
        }));
    }
}, wis = class y1r extends Bbi {
    constructor(t, n, i, r, s, o, a, c){
        const l = cu("div.diff-hidden-lines-widget");
        super(t, n, l.root), this._editor = t, this._unchangedRegion = i, this._unchangedRegionRange = r, this._hide = s, this._modifiedOutlineSource = o, this._revealModifiedHiddenLine = a, this._options = c, this._nodes = cu("div.diff-hidden-lines", [
            cu("div.top@top", {
                title: S(245, null)
            }),
            cu("div.center@content", {
                style: {
                    display: "flex"
                }
            }, [
                cu("div@first", {
                    class: "diff-show-more-lines",
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "0px",
                        flexShrink: "0"
                    }
                }, [
                    Ve("a", {
                        title: S(246, null),
                        role: "button",
                        onclick: ()=>{
                            this._unchangedRegion.showMoreAbove(y1r._linesPerClick, void 0);
                        }
                    }, ...vS("$(chevron-up)")),
                    Ve("a", {
                        title: S(247, null),
                        role: "button",
                        onclick: ()=>{
                            this._unchangedRegion.showMoreBelow(y1r._linesPerClick, void 0);
                        }
                    }, ...vS("$(chevron-down)"))
                ]),
                cu("div@others", {
                    style: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }
                })
            ]),
            cu("div.bottom@bottom", {
                title: S(248, null),
                role: "button"
            })
        ]), l.root.appendChild(this._nodes.root), this._nodes.others.style.display = "flex", this._nodes.others.style.alignItems = "center", this._nodes.others.style.flexGrow = "1", this._nodes.others.style.gap = "6px";
        const u = (p)=>{
            const g = p.target;
            if (g.closest("a, .breadcrumb-item") || g.classList.contains("codicon")) return;
            const f = this._editor.getModel();
            if (!f) return;
            const v = this._unchangedRegion.visibleLineCountTop.get(), b = this._unchangedRegion.visibleLineCountBottom.get(), y = this._unchangedRegion.lineCount - v - b;
            if (y <= 0) return;
            const T = this._unchangedRegionRange.startLineNumber, E = this._unchangedRegionRange.endLineNumberExclusive, A = f.getLineCount(), R = T > 1 || v > 0, D = E <= A || b > 0, P = Math.min(y1r._linesPerClick, y);
            let N = 0, O = 0;
            R && D ? (N = Math.min(Math.ceil(P / 2), y), O = P - N) : R ? N = P : O = P, this._revealLinesAboveWithScrollCompensation(N), O > 0 && this._unchangedRegion.showMoreBelow(O, void 0);
        };
        this._nodes.content.addEventListener("click", u), this._register({
            dispose: ()=>{
                this._nodes.content.removeEventListener("click", u);
            }
        }), this._hide ? Sp(this._nodes.first) : this._register(sKe(this._nodes.first, {
            width: gR(this._editor).layoutInfoContentLeft
        })), this._register(Hc((p)=>{
            const g = this._unchangedRegion.visibleLineCountTop.read(p) + this._unchangedRegion.visibleLineCountBottom.read(p) === this._unchangedRegion.lineCount;
            this._nodes.bottom.classList.toggle("canMoveTop", !g), this._nodes.bottom.classList.toggle("canMoveBottom", this._unchangedRegion.visibleLineCountBottom.read(p) > 0), this._nodes.top.classList.toggle("canMoveTop", this._unchangedRegion.visibleLineCountTop.read(p) > 0), this._nodes.top.classList.toggle("canMoveBottom", !g);
            const f = this._unchangedRegion.isDragged.read(p), v = this._editor.getDomNode();
            v && (v.classList.toggle("draggingUnchangedRegion", !!f), f === "top" ? (v.classList.toggle("canMoveTop", this._unchangedRegion.visibleLineCountTop.read(p) > 0), v.classList.toggle("canMoveBottom", !g)) : f === "bottom" ? (v.classList.toggle("canMoveTop", !g), v.classList.toggle("canMoveBottom", this._unchangedRegion.visibleLineCountBottom.read(p) > 0)) : (v.classList.toggle("canMoveTop", !1), v.classList.toggle("canMoveBottom", !1)));
        }));
        const h = this._editor;
        this._register(Xt(this._nodes.top, "mousedown", (p)=>{
            if (p.button !== 0) return;
            this._nodes.top.classList.toggle("dragging", !0), this._nodes.root.classList.toggle("dragging", !0), p.preventDefault();
            const g = p.clientY;
            let f = !1;
            const v = this._unchangedRegion.visibleLineCountTop.get();
            this._unchangedRegion.isDragged.set("top", void 0);
            const b = xi(this._nodes.top), y = Xt(b, "mousemove", (E)=>{
                const R = E.clientY - g;
                f = f || Math.abs(R) > 2;
                const D = Math.round(R / h.getOption(68)), P = Math.max(0, Math.min(v + D, this._unchangedRegion.getMaxVisibleLineCountTop()));
                this._unchangedRegion.visibleLineCountTop.set(P, void 0);
            }), T = Xt(b, "mouseup", (E)=>{
                f || this._revealLinesAboveWithScrollCompensation(this._options.hideUnchangedRegionsRevealLineCount.get()), this._nodes.top.classList.toggle("dragging", !1), this._nodes.root.classList.toggle("dragging", !1), this._unchangedRegion.isDragged.set(void 0, void 0), y.dispose(), T.dispose();
            });
        })), this._register(Xt(this._nodes.bottom, "mousedown", (p)=>{
            if (p.button !== 0) return;
            this._nodes.bottom.classList.toggle("dragging", !0), this._nodes.root.classList.toggle("dragging", !0), p.preventDefault();
            const g = p.clientY;
            let f = !1;
            const v = this._unchangedRegion.visibleLineCountBottom.get();
            this._unchangedRegion.isDragged.set("bottom", void 0);
            const b = xi(this._nodes.bottom), y = Xt(b, "mousemove", (E)=>{
                const R = E.clientY - g;
                f = f || Math.abs(R) > 2;
                const D = Math.round(R / h.getOption(68)), P = Math.max(0, Math.min(v - D, this._unchangedRegion.getMaxVisibleLineCountBottom())), N = this._unchangedRegionRange.endLineNumberExclusive > h.getModel().getLineCount() ? h.getContentHeight() : h.getTopForLineNumber(this._unchangedRegionRange.endLineNumberExclusive);
                this._unchangedRegion.visibleLineCountBottom.set(P, void 0);
                const O = this._unchangedRegionRange.endLineNumberExclusive > h.getModel().getLineCount() ? h.getContentHeight() : h.getTopForLineNumber(this._unchangedRegionRange.endLineNumberExclusive);
                h.setScrollTop(h.getScrollTop() + (O - N));
            }), T = Xt(b, "mouseup", (E)=>{
                if (this._unchangedRegion.isDragged.set(void 0, void 0), !f) {
                    const A = h.getTopForLineNumber(this._unchangedRegionRange.endLineNumberExclusive);
                    this._unchangedRegion.showMoreBelow(this._options.hideUnchangedRegionsRevealLineCount.get(), void 0);
                    const R = h.getTopForLineNumber(this._unchangedRegionRange.endLineNumberExclusive);
                    h.setScrollTop(h.getScrollTop() + (R - A));
                }
                this._nodes.bottom.classList.toggle("dragging", !1), this._nodes.root.classList.toggle("dragging", !1), y.dispose(), T.dispose();
            });
        })), this._register(Hc((p)=>{
            const g = [];
            if (!this._hide) {
                const f = i.getHiddenModifiedRange(p).length, v = S(249, null, f), b = Ve("span", {
                    title: S(250, null)
                }, v);
                b.classList.add("diff-hidden-lines-text"), b.style.flexGrow = "1", g.push(b);
                const y = Ve("a", {
                    class: "diff-hidden-lines-expand-all",
                    role: "button",
                    title: S(251, null)
                }, S(252, null));
                y.addEventListener("click", (A)=>{
                    A.preventDefault(), A.stopPropagation(), this._unchangedRegion.showAll(void 0);
                }), g.push(y);
                const T = this._unchangedRegion.getHiddenModifiedRange(p), E = this._modifiedOutlineSource.getBreadcrumbItems(T, p);
                if (E.length > 0) {
                    g.push(Ve("span", {
                        class: "diff-hidden-lines-separator"
                    }, "\xA0\xA0\u2022\xA0\xA0"));
                    for(let A = 0; A < E.length; A++){
                        const R = E[A], D = bwe.toIcon(R.kind), P = cu("div.breadcrumb-item", {
                            style: {
                                display: "flex",
                                alignItems: "center"
                            }
                        }, [
                            h5(D),
                            "\xA0",
                            R.name,
                            ...A === E.length - 1 ? [] : [
                                h5(Pe.chevronRight)
                            ]
                        ]).root;
                        g.push(P), P.onclick = ()=>{
                            this._revealModifiedHiddenLine(R.startLineNumber);
                        };
                    }
                }
            }
            Sp(this._nodes.others, ...g);
        }));
    }
    _revealLinesAboveWithScrollCompensation(t) {
        if (t <= 0) return;
        const n = this._unchangedRegion.getHiddenModifiedRange(void 0).startLineNumber, i = this._editor.getTopForLineNumber(n);
        this._unchangedRegion.showMoreAbove(t, void 0);
        const r = this._unchangedRegion.getHiddenModifiedRange(void 0).startLineNumber, o = this._editor.getTopForLineNumber(r) - i, a = new CustomEvent("diff-editor-scroll-compensate", {
            bubbles: !0,
            detail: {
                scrollDelta: o
            }
        });
        this._editor.getDomNode()?.dispatchEvent(a), this._editor.setScrollTop(this._editor.getScrollTop() + o);
    }
}, wis._linesPerClick = 20, Cis = wis;

}
