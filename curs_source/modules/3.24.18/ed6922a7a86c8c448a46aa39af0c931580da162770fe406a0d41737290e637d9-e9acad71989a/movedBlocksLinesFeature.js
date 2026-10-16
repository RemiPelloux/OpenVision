import { $Ec, DP, Llg, S, Se, rn, we } from "./HVr.js";
import { Zm, cm } from "./actionbar.js";
import { Vo, er } from "./actions.js";
import { JB, WEc, dr } from "./arrays.js";
import { FT } from "./arraysFind.js";
import { Hc } from "./autorun.js";
import { Pe, _i } from "./codicons.js";
import { en } from "./dom_2.js";
import { rt } from "./nls.js";
import { qa } from "./observable.js";
import { MPc, Mh, uR } from "./offsetRange.js";
import { Ds, Fbi, Xo, cu, e2t, gBe, sKe, tw, uJ, xw, z9 } from "./qIc.js";
import { Ft, Sr } from "./themables.js";
import { x } from "./tslib.es6.js";
import { qp } from "./utils_10.js";
import { Bbi, Dle, imt } from "./utils_13.js";
var qns, Nvn, h7c, zns;
export { Nvn, h7c, qns, zns };
var __wakaru_p7c_initialized = false;
export function p7c() {
if (__wakaru_p7c_initialized) return;
__wakaru_p7c_initialized = true;
"use strict";
x(), en(), Zm(), Vo(), dr(), FT(), _i(), Se(), qa(), Sr(), Dle(), uR(), rt(), qns = class jIa extends we {
    constructor(t, n, i, r, s){
        super(), this._rootElement = t, this._diffModel = n, this._originalEditorLayoutInfo = i, this._modifiedEditorLayoutInfo = r, this._editors = s, this._originalScrollTop = qp(this, this._editors.original.onDidScrollChange, ()=>this._editors.original.getScrollTop()), this._modifiedScrollTop = qp(this, this._editors.modified.onDidScrollChange, ()=>this._editors.modified.getScrollTop()), this._viewZonesChanged = z9("onDidChangeViewZones", this._editors.modified.onDidChangeViewZones), this.width = Xo(this, 0), this._modifiedViewZonesChangedSignal = z9("modified.onDidChangeViewZones", this._editors.modified.onDidChangeViewZones), this._originalViewZonesChangedSignal = z9("original.onDidChangeViewZones", this._editors.original.onDidChangeViewZones), this._state = uJ(this, (u, h)=>{
            this._element.replaceChildren();
            const p = this._diffModel.read(u), g = p?.diff.read(u)?.movedTexts;
            if (!g || g.length === 0) {
                this.width.set(0, void 0);
                return;
            }
            this._viewZonesChanged.read(u);
            const f = this._originalEditorLayoutInfo.read(u), v = this._modifiedEditorLayoutInfo.read(u);
            if (!f || !v) {
                this.width.set(0, void 0);
                return;
            }
            this._modifiedViewZonesChangedSignal.read(u), this._originalViewZonesChangedSignal.read(u);
            const b = g.map((P)=>{
                function N(X, Y) {
                    const Z = Y.getTopForLineNumber(X.startLineNumber, !0), K = Y.getTopForLineNumber(X.endLineNumberExclusive, !0);
                    return (Z + K) / 2;
                }
                const O = N(P.lineRangeMapping.original, this._editors.original), F = this._originalScrollTop.read(u), H = N(P.lineRangeMapping.modified, this._editors.modified), $ = this._modifiedScrollTop.read(u), W = O - F, G = H - $, q = Math.min(O, H), z = Math.max(O, H);
                return {
                    range: new Mh(q, z),
                    from: W,
                    to: G,
                    fromWithoutScroll: O,
                    toWithoutScroll: H,
                    move: P
                };
            });
            b.sort($Ec(DP((P)=>P.fromWithoutScroll > P.toWithoutScroll, WEc), DP((P)=>P.fromWithoutScroll > P.toWithoutScroll ? P.fromWithoutScroll : -P.toWithoutScroll, JB)));
            const y = h7c.compute(b.map((P)=>P.range)), T = 10, E = f.verticalScrollbarWidth, A = (y.getTrackCount() - 1) * 10 + T * 2, R = E + A + (v.contentLeft - jIa.movedCodeBlockPadding);
            let D = 0;
            for (const P of b){
                const N = y.getTrack(D), O = E + T + N * 10, F = 15, H = 15, $ = R, W = v.glyphMarginWidth + v.lineNumbersWidth, G = 18, q = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                q.classList.add("arrow-rectangle"), q.setAttribute("x", `${$ - W}`), q.setAttribute("y", `${P.to - G / 2}`), q.setAttribute("width", `${W}`), q.setAttribute("height", `${G}`), this._element.appendChild(q);
                const z = document.createElementNS("http://www.w3.org/2000/svg", "g"), X = document.createElementNS("http://www.w3.org/2000/svg", "path");
                X.setAttribute("d", `M 0 ${P.from} L ${O} ${P.from} L ${O} ${P.to} L ${$ - H} ${P.to}`), X.setAttribute("fill", "none"), z.appendChild(X);
                const Y = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
                Y.classList.add("arrow"), h.add(Hc((Z)=>{
                    X.classList.toggle("currentMove", P.move === p.activeMovedText.read(Z)), Y.classList.toggle("currentMove", P.move === p.activeMovedText.read(Z));
                })), Y.setAttribute("points", `${$ - H},${P.to - F / 2} ${$},${P.to} ${$ - H},${P.to + F / 2}`), z.appendChild(Y), this._element.appendChild(z), D++;
            }
            this.width.set(A, void 0);
        }), this._element = document.createElementNS("http://www.w3.org/2000/svg", "svg"), this._element.setAttribute("class", "moved-blocks-lines"), this._rootElement.appendChild(this._element), this._register(rn(()=>this._element.remove())), this._register(Hc((u)=>{
            const h = this._originalEditorLayoutInfo.read(u), p = this._modifiedEditorLayoutInfo.read(u);
            !h || !p || (this._element.style.left = `${h.width - h.verticalScrollbarWidth}px`, this._element.style.height = `${h.height}px`, this._element.style.width = `${h.verticalScrollbarWidth + h.contentLeft - jIa.movedCodeBlockPadding + this.width.read(u)}px`);
        })), this._register(gBe(this._state));
        const o = Ds((u)=>{
            const p = this._diffModel.read(u)?.diff.read(u);
            return p ? p.movedTexts.map((g)=>({
                    move: g,
                    original: new imt(xw(g.lineRangeMapping.original.startLineNumber - 1), 18),
                    modified: new imt(xw(g.lineRangeMapping.modified.startLineNumber - 1), 18)
                })) : [];
        });
        this._register(Fbi(this._editors.original, o.map((u)=>u.map((h)=>h.original)))), this._register(Fbi(this._editors.modified, o.map((u)=>u.map((h)=>h.modified)))), this._register(tw((u, h)=>{
            const p = o.read(u);
            for (const g of p)h.add(new zns(this._editors.original, g.original, g.move, "original", this._diffModel.get())), h.add(new zns(this._editors.modified, g.modified, g.move, "modified", this._diffModel.get()));
        }));
        const a = z9("original.onDidFocusEditorWidget", (u)=>this._editors.original.onDidFocusEditorWidget(()=>setTimeout(()=>u(void 0), 0))), c = z9("modified.onDidFocusEditorWidget", (u)=>this._editors.modified.onDidFocusEditorWidget(()=>setTimeout(()=>u(void 0), 0)));
        let l = "modified";
        this._register(e2t({
            createEmptyChangeSummary: ()=>{},
            handleChange: (u, h)=>(u.didChange(a) && (l = "original"), u.didChange(c) && (l = "modified"), !0)
        }, (u)=>{
            a.read(u), c.read(u);
            const h = this._diffModel.read(u);
            if (!h) return;
            const p = h.diff.read(u);
            let g;
            if (p && l === "original") {
                const f = this._editors.originalCursor.read(u);
                f && (g = p.movedTexts.find((v)=>v.lineRangeMapping.original.contains(f.lineNumber)));
            }
            if (p && l === "modified") {
                const f = this._editors.modifiedCursor.read(u);
                f && (g = p.movedTexts.find((v)=>v.lineRangeMapping.modified.contains(f.lineNumber)));
            }
            g !== h.movedTextToCompare.read(void 0) && h.movedTextToCompare.set(void 0, void 0), h.setActiveMovedText(g);
        }));
    }
}, qns.movedCodeBlockPadding = 4, Nvn = qns, h7c = class Hkm {
    constructor(t, n){
        this._trackCount = t, this.trackPerLineIdx = n;
    }
    static compute(t) {
        const n = [], i = [];
        for (const r of t){
            let s = n.findIndex((o)=>!o.intersectsStrict(r));
            s === -1 && (n.length >= 6 ? s = Llg(n, DP((a)=>a.intersectWithRangeLength(r), JB)) : (s = n.length, n.push(new MPc))), n[s].addRange(r), i.push(s);
        }
        return new Hkm(n.length, i);
    }
    getTrack(t) {
        return this.trackPerLineIdx[t];
    }
    getTrackCount() {
        return this._trackCount;
    }
}, zns = class extends Bbi {
    constructor(e, t, n, i, r){
        const s = cu("div.diff-hidden-lines-widget");
        super(e, t, s.root), this._editor = e, this._move = n, this._kind = i, this._diffModel = r, this._nodes = cu("div.diff-moved-code-block", {
            style: {
                marginRight: "4px"
            }
        }, [
            cu("div.text-content@textContent"),
            cu("div.action-bar@actionBar")
        ]), s.root.appendChild(this._nodes.root);
        const o = qp(this._editor.onDidLayoutChange, ()=>this._editor.getLayoutInfo());
        this._register(sKe(this._nodes.root, {
            paddingRight: o.map((h)=>h.verticalScrollbarWidth)
        }));
        let a;
        n.changes.length > 0 ? a = this._kind === "original" ? S(253, null, this._move.lineRangeMapping.modified.startLineNumber, this._move.lineRangeMapping.modified.endLineNumberExclusive - 1) : S(254, null, this._move.lineRangeMapping.original.startLineNumber, this._move.lineRangeMapping.original.endLineNumberExclusive - 1) : a = this._kind === "original" ? S(255, null, this._move.lineRangeMapping.modified.startLineNumber, this._move.lineRangeMapping.modified.endLineNumberExclusive - 1) : S(256, null, this._move.lineRangeMapping.original.startLineNumber, this._move.lineRangeMapping.original.endLineNumberExclusive - 1);
        const c = this._register(new cm(this._nodes.actionBar, {
            highlightToggledItems: !0
        })), l = new er("", a, "", !1);
        c.push(l, {
            icon: !1,
            label: !0
        });
        const u = new er("", "Compare", Ft.asClassName(Pe.compareChanges), !0, ()=>{
            this._editor.focus(), this._diffModel.movedTextToCompare.set(this._diffModel.movedTextToCompare.get() === n ? void 0 : this._move, void 0);
        });
        this._register(Hc((h)=>{
            const p = this._diffModel.movedTextToCompare.read(h) === n;
            u.checked = p;
        })), c.push(u, {
            icon: !1,
            label: !0
        });
    }
};

}
