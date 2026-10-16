import { $m, D, Qe, st } from "./Iwo.js";
import { Jd } from "./autorun.js";
import { gs, yt } from "./codicons.js";
import { Hn, ws } from "./dom_2.js";
import { Eqo, Tqo, xLy, yzd } from "./hideUnchangedRegionsConstants.js";
import { Ek, zf } from "./htmlContent.js";
import { bW } from "./iconLabels_2.js";
import { It, dn } from "./instantiation.js";
import { Iy, lHe } from "./languages.js";
import { DD, wd } from "./lineRange.js";
import { Bt } from "./nls.js";
import { Jc } from "./observable.js";
import { FQ } from "./observableCodeEditor.js";
import { er, jc } from "./position.js";
import { Qs, qt } from "./range.js";
import { Gn, ta } from "./themables.js";
import { E } from "./tslib.es6.js";
import { To } from "./types_2.js";
import { F, Re } from "./userDataProfile.js";
import { CBt, bwe, uTr } from "./utils_13.js";
import { Fyt, Ii, Kde, O5, Zo, bc, hE, lTr, li, mg, n_e, twe, xv, z3 } from "./ze.js";
var qyt, Iqo, xqo, Aqo;
export { Aqo, Iqo, qyt, xqo };
var __wakaru_Szd_initialized = false;
export function Szd() {
if (__wakaru_Szd_initialized) return;
__wakaru_Szd_initialized = true;
"use strict";
E(), Hn(), bW(), gs(), Ek(), Qe(), Jc(), ta(), To(), Bt(), It(), DD(), jc(), Qs(), Iy(), FQ(), bwe(), xLy(), qyt = class extends st {
    constructor(t, e, n, i){
        super(), this._editors = t, this._diffModel = e, this._options = n, this._instantiationService = i, this._modifiedOutlineSource = twe(this, (a)=>{
            const l = this._editors.modifiedModel.read(a), c = qyt._breadcrumbsSourceFactory.read(a);
            return !l || !c ? void 0 : c(l, this._instantiationService);
        }), this._isUpdatingHiddenAreas = !1, this._register(this._editors.original.onDidChangeCursorPosition((a)=>{
            if (a.reason === 1) return;
            const l = this._diffModel.get();
            mg((c)=>{
                for (const u of this._editors.original.getSelections() || [])l?.ensureOriginalLineIsVisible(u.getStartPosition().lineNumber, 0, c), l?.ensureOriginalLineIsVisible(u.getEndPosition().lineNumber, 0, c);
            });
        })), this._register(this._editors.modified.onDidChangeCursorPosition((a)=>{
            if (a.reason === 1) return;
            const l = this._diffModel.get();
            mg((c)=>{
                for (const u of this._editors.modified.getSelections() || [])l?.ensureModifiedLineIsVisible(u.getStartPosition().lineNumber, 0, c), l?.ensureModifiedLineIsVisible(u.getEndPosition().lineNumber, 0, c);
            });
        }));
        const r = this._diffModel.map((a, l)=>{
            const c = a?.unchangedRegions.read(l) ?? [];
            return c.length === 1 && c[0].modifiedLineNumber === 1 && c[0].lineCount === this._editors.modifiedModel.read(l)?.getLineCount() ? [] : c;
        });
        this.viewZones = Kde(this, (a, l)=>{
            const c = this._modifiedOutlineSource.read(a);
            if (!c) return {
                origViewZones: [],
                modViewZones: []
            };
            const u = [], d = [], h = this._options.renderSideBySide.read(a), p = this._options.compactMode.read(a), g = this._editors.modifiedModel.read(a)?.getLineCount(), f = r.read(a);
            for(let _ = 0; _ < f.length; _++){
                const b = f[_];
                if (!b.shouldHideControls(a)) {
                    if (p) {
                        const y = b.getHiddenModifiedRange(a), S = y.startLineNumber === 1, k = g !== void 0 && y.endLineNumberExclusive === g + 1;
                        if (S || k) continue;
                    }
                    if (p) {
                        {
                            const y = Zo(this, (k)=>b.getHiddenOriginalRange(k).startLineNumber - 1), S = new CBt(y, Eqo);
                            u.push(S), l.add(new Iqo(this._editors.original, S, b, !h));
                        }
                        {
                            const y = Zo(this, (k)=>b.getHiddenModifiedRange(k).startLineNumber - 1), S = new CBt(y, Eqo);
                            d.push(S), l.add(new Iqo(this._editors.modified, S, b));
                        }
                    } else {
                        const S = _ === f.length - 1 ? 2 : 0;
                        if (h) {
                            const k = Zo(this, (T)=>b.getHiddenOriginalRange(T).startLineNumber - 1), C = new CBt(k, Tqo + S);
                            u.push(C), l.add(new Aqo(this._editors.original, C, b, b.originalUnchangedRange, !h, c, (T)=>this._diffModel.get().ensureModifiedLineIsVisible(T, 2, void 0), this._options));
                        }
                        {
                            const k = Zo(this, (I)=>b.getHiddenModifiedRange(I).startLineNumber - 1), C = h ? Tqo : yzd, T = new CBt(k, C + S);
                            d.push(T), l.add(new Aqo(this._editors.modified, T, b, b.modifiedUnchangedRange, !1, c, (I)=>this._diffModel.get().ensureModifiedLineIsVisible(I, 2, void 0), this._options));
                        }
                    }
                }
            }
            return {
                origViewZones: u,
                modViewZones: d
            };
        });
        const s = {
            description: "unchanged lines",
            className: "diff-unchanged-lines",
            isWholeLine: !0
        }, o = {
            description: "Fold Unchanged",
            glyphMarginHoverMessage: new zf(void 0, {
                isTrusted: !0,
                supportThemeIcons: !0
            }).appendMarkdown(D(243, null)),
            glyphMarginClassName: "fold-unchanged " + Gn.asClassName(yt.fold),
            zIndex: 10001
        };
        this._register(lTr(this._editors.original, Zo(this, (a)=>{
            const l = r.read(a), c = l.map((u)=>({
                    range: u.originalUnchangedRange.toInclusiveRange(),
                    options: s
                }));
            for (const u of l)u.shouldHideControls(a) && c.push({
                range: qt.fromPositions(new er(u.originalLineNumber, 1)),
                options: o
            });
            return c;
        }))), this._register(lTr(this._editors.modified, Zo(this, (a)=>{
            const l = r.read(a), c = l.map((u)=>({
                    range: u.modifiedUnchangedRange.toInclusiveRange(),
                    options: s
                }));
            for (const u of l)u.shouldHideControls(a) && c.push({
                range: wd.ofLength(u.modifiedLineNumber, 1).toInclusiveRange(),
                options: o
            });
            return c;
        }))), this._register(Jd((a)=>{
            const l = r.read(a);
            this._isUpdatingHiddenAreas = !0;
            try {
                this._editors.original.setHiddenAreas(l.map((c)=>c.getHiddenOriginalRange(a).toInclusiveRange()).filter($m)), this._editors.modified.setHiddenAreas(l.map((c)=>c.getHiddenModifiedRange(a).toInclusiveRange()).filter($m));
            } finally{
                this._isUpdatingHiddenAreas = !1;
            }
        })), this._register(this._editors.modified.onMouseUp((a)=>{
            if (!a.event.rightButton && a.target.position && a.target.element?.className.includes("fold-unchanged")) {
                const l = a.target.position.lineNumber, c = this._diffModel.get();
                if (!c) return;
                const u = c.unchangedRegions.get().find((d)=>d.modifiedUnchangedRange.includes(l));
                if (!u) return;
                u.collapseAll(void 0), a.event.stopPropagation(), a.event.preventDefault();
            }
        })), this._register(this._editors.original.onMouseUp((a)=>{
            if (!a.event.rightButton && a.target.position && a.target.element?.className.includes("fold-unchanged")) {
                const l = a.target.position.lineNumber, c = this._diffModel.get();
                if (!c) return;
                const u = c.unchangedRegions.get().find((d)=>d.originalUnchangedRange.includes(l));
                if (!u) return;
                u.collapseAll(void 0), a.event.stopPropagation(), a.event.preventDefault();
            }
        }));
    }
    static setBreadcrumbsSourceFactory(t) {
        this._breadcrumbsSourceFactory.set(t, void 0);
    }
    get isUpdatingHiddenAreas() {
        return this._isUpdatingHiddenAreas;
    }
}, qyt._breadcrumbsSourceFactory = bc(qyt, ()=>({
        dispose () {},
        getBreadcrumbItems (t, e) {
            return [];
        }
    })), qyt = Re([
    F(3, dn)
], qyt), Iqo = class extends uTr {
    constructor(t, e, n, i = !1){
        const r = xv("div.diff-hidden-lines-widget");
        super(t, e, r.root), this._unchangedRegion = n, this._hide = i, this._nodes = xv("div.diff-hidden-lines-compact", [
            xv("div.line-left", []),
            xv("div.text@text", []),
            xv("div.line-right", [])
        ]), r.root.appendChild(this._nodes.root), this._hide && this._nodes.root.replaceChildren(), this._register(Jd((s)=>{
            if (!this._hide) {
                const o = this._unchangedRegion.getHiddenModifiedRange(s).length, a = D(244, null, o);
                this._nodes.text.innerText = a;
            }
        }));
    }
}, xqo = class aXs extends uTr {
    constructor(e, n, i, r, s, o, a, l){
        const c = xv("div.diff-hidden-lines-widget");
        super(e, n, c.root), this._editor = e, this._unchangedRegion = i, this._unchangedRegionRange = r, this._hide = s, this._modifiedOutlineSource = o, this._revealModifiedHiddenLine = a, this._options = l, this._nodes = xv("div.diff-hidden-lines", [
            xv("div.top@top", {
                title: D(245, null)
            }),
            xv("div.center@content", {
                style: {
                    display: "flex"
                }
            }, [
                xv("div@first", {
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
                    Ii("a", {
                        title: D(246, null),
                        role: "button",
                        onclick: ()=>{
                            this._unchangedRegion.showMoreAbove(aXs._linesPerClick, void 0);
                        }
                    }, ...O5("$(chevron-up)")),
                    Ii("a", {
                        title: D(247, null),
                        role: "button",
                        onclick: ()=>{
                            this._unchangedRegion.showMoreBelow(aXs._linesPerClick, void 0);
                        }
                    }, ...O5("$(chevron-down)"))
                ]),
                xv("div@others", {
                    style: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }
                })
            ]),
            xv("div.bottom@bottom", {
                title: D(248, null),
                role: "button"
            })
        ]), c.root.appendChild(this._nodes.root), this._nodes.others.style.display = "flex", this._nodes.others.style.alignItems = "center", this._nodes.others.style.flexGrow = "1", this._nodes.others.style.gap = "6px";
        const u = (h)=>{
            const p = h.target;
            if (p.closest("a, .breadcrumb-item") || p.classList.contains("codicon")) return;
            const g = this._editor.getModel();
            if (!g) return;
            const f = this._unchangedRegion.visibleLineCountTop.get(), _ = this._unchangedRegion.visibleLineCountBottom.get(), b = this._unchangedRegion.lineCount - f - _;
            if (b <= 0) return;
            const y = this._unchangedRegionRange.startLineNumber, S = this._unchangedRegionRange.endLineNumberExclusive, k = g.getLineCount(), C = y > 1 || f > 0, T = S <= k || _ > 0, I = Math.min(aXs._linesPerClick, b);
            let A = 0, P = 0;
            C && T ? (A = Math.min(Math.ceil(I / 2), b), P = I - A) : C ? A = I : P = I, this._revealLinesAboveWithScrollCompensation(A), P > 0 && this._unchangedRegion.showMoreBelow(P, void 0);
        };
        this._nodes.content.addEventListener("click", u), this._register({
            dispose: ()=>{
                this._nodes.content.removeEventListener("click", u);
            }
        }), this._hide ? hE(this._nodes.first) : this._register(Fyt(this._nodes.first, {
            width: z3(this._editor).layoutInfoContentLeft
        })), this._register(Jd((h)=>{
            const p = this._unchangedRegion.visibleLineCountTop.read(h) + this._unchangedRegion.visibleLineCountBottom.read(h) === this._unchangedRegion.lineCount;
            this._nodes.bottom.classList.toggle("canMoveTop", !p), this._nodes.bottom.classList.toggle("canMoveBottom", this._unchangedRegion.visibleLineCountBottom.read(h) > 0), this._nodes.top.classList.toggle("canMoveTop", this._unchangedRegion.visibleLineCountTop.read(h) > 0), this._nodes.top.classList.toggle("canMoveBottom", !p);
            const g = this._unchangedRegion.isDragged.read(h), f = this._editor.getDomNode();
            f && (f.classList.toggle("draggingUnchangedRegion", !!g), g === "top" ? (f.classList.toggle("canMoveTop", this._unchangedRegion.visibleLineCountTop.read(h) > 0), f.classList.toggle("canMoveBottom", !p)) : g === "bottom" ? (f.classList.toggle("canMoveTop", !p), f.classList.toggle("canMoveBottom", this._unchangedRegion.visibleLineCountBottom.read(h) > 0)) : (f.classList.toggle("canMoveTop", !1), f.classList.toggle("canMoveBottom", !1)));
        }));
        const d = this._editor;
        this._register(li(this._nodes.top, "mousedown", (h)=>{
            if (h.button !== 0) return;
            this._nodes.top.classList.toggle("dragging", !0), this._nodes.root.classList.toggle("dragging", !0), h.preventDefault();
            const p = h.clientY;
            let g = !1;
            const f = this._unchangedRegion.visibleLineCountTop.get();
            this._unchangedRegion.isDragged.set("top", void 0);
            const _ = ws(this._nodes.top), b = li(_, "mousemove", (S)=>{
                const C = S.clientY - p;
                g = g || Math.abs(C) > 2;
                const T = Math.round(C / d.getOption(68)), I = Math.max(0, Math.min(f + T, this._unchangedRegion.getMaxVisibleLineCountTop()));
                this._unchangedRegion.visibleLineCountTop.set(I, void 0);
            }), y = li(_, "mouseup", (S)=>{
                g || this._revealLinesAboveWithScrollCompensation(this._options.hideUnchangedRegionsRevealLineCount.get()), this._nodes.top.classList.toggle("dragging", !1), this._nodes.root.classList.toggle("dragging", !1), this._unchangedRegion.isDragged.set(void 0, void 0), b.dispose(), y.dispose();
            });
        })), this._register(li(this._nodes.bottom, "mousedown", (h)=>{
            if (h.button !== 0) return;
            this._nodes.bottom.classList.toggle("dragging", !0), this._nodes.root.classList.toggle("dragging", !0), h.preventDefault();
            const p = h.clientY;
            let g = !1;
            const f = this._unchangedRegion.visibleLineCountBottom.get();
            this._unchangedRegion.isDragged.set("bottom", void 0);
            const _ = ws(this._nodes.bottom), b = li(_, "mousemove", (S)=>{
                const C = S.clientY - p;
                g = g || Math.abs(C) > 2;
                const T = Math.round(C / d.getOption(68)), I = Math.max(0, Math.min(f - T, this._unchangedRegion.getMaxVisibleLineCountBottom())), A = this._unchangedRegionRange.endLineNumberExclusive > d.getModel().getLineCount() ? d.getContentHeight() : d.getTopForLineNumber(this._unchangedRegionRange.endLineNumberExclusive);
                this._unchangedRegion.visibleLineCountBottom.set(I, void 0);
                const P = this._unchangedRegionRange.endLineNumberExclusive > d.getModel().getLineCount() ? d.getContentHeight() : d.getTopForLineNumber(this._unchangedRegionRange.endLineNumberExclusive);
                d.setScrollTop(d.getScrollTop() + (P - A));
            }), y = li(_, "mouseup", (S)=>{
                if (this._unchangedRegion.isDragged.set(void 0, void 0), !g) {
                    const k = d.getTopForLineNumber(this._unchangedRegionRange.endLineNumberExclusive);
                    this._unchangedRegion.showMoreBelow(this._options.hideUnchangedRegionsRevealLineCount.get(), void 0);
                    const C = d.getTopForLineNumber(this._unchangedRegionRange.endLineNumberExclusive);
                    d.setScrollTop(d.getScrollTop() + (C - k));
                }
                this._nodes.bottom.classList.toggle("dragging", !1), this._nodes.root.classList.toggle("dragging", !1), b.dispose(), y.dispose();
            });
        })), this._register(Jd((h)=>{
            const p = [];
            if (!this._hide) {
                const g = i.getHiddenModifiedRange(h).length, f = D(249, null, g), _ = Ii("span", {
                    title: D(250, null)
                }, f);
                _.classList.add("diff-hidden-lines-text"), _.style.flexGrow = "1", p.push(_);
                const b = Ii("a", {
                    class: "diff-hidden-lines-expand-all",
                    role: "button",
                    title: D(251, null)
                }, D(252, null));
                b.addEventListener("click", (k)=>{
                    k.preventDefault(), k.stopPropagation(), this._unchangedRegion.showAll(void 0);
                }), p.push(b);
                const y = this._unchangedRegion.getHiddenModifiedRange(h), S = this._modifiedOutlineSource.getBreadcrumbItems(y, h);
                if (S.length > 0) {
                    p.push(Ii("span", {
                        class: "diff-hidden-lines-separator"
                    }, "\xA0\xA0\u2022\xA0\xA0"));
                    for(let k = 0; k < S.length; k++){
                        const C = S[k], T = lHe.toIcon(C.kind), I = xv("div.breadcrumb-item", {
                            style: {
                                display: "flex",
                                alignItems: "center"
                            }
                        }, [
                            n_e(T),
                            "\xA0",
                            C.name,
                            ...k === S.length - 1 ? [] : [
                                n_e(yt.chevronRight)
                            ]
                        ]).root;
                        p.push(I), I.onclick = ()=>{
                            this._revealModifiedHiddenLine(C.startLineNumber);
                        };
                    }
                }
            }
            hE(this._nodes.others, ...p);
        }));
    }
    _revealLinesAboveWithScrollCompensation(e) {
        if (e <= 0) return;
        const n = this._unchangedRegion.getHiddenModifiedRange(void 0).startLineNumber, i = this._editor.getTopForLineNumber(n);
        this._unchangedRegion.showMoreAbove(e, void 0);
        const r = this._unchangedRegion.getHiddenModifiedRange(void 0).startLineNumber, o = this._editor.getTopForLineNumber(r) - i, a = new CustomEvent("diff-editor-scroll-compensate", {
            bubbles: !0,
            detail: {
                scrollDelta: o
            }
        });
        this._editor.getDomNode()?.dispatchEvent(a), this._editor.setScrollTop(this._editor.getScrollTop() + o);
    }
}, xqo._linesPerClick = 20, Aqo = xqo;

}
