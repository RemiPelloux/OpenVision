import { D, I5, Pn, Qe, S_y, dYu, st } from "./Iwo.js";
import { PT, oR } from "./actionbar.js";
import { vu, za } from "./actions.js";
import { Sj, bo, pYu } from "./arrays.js";
import { p4 } from "./arraysFind.js";
import { Jd } from "./autorun.js";
import { gs, yt } from "./codicons.js";
import { Hn } from "./dom_2.js";
import { Bt } from "./nls.js";
import { Jc } from "./observable.js";
import { Im, W3, jFd } from "./offsetRange.js";
import { Gn, ta } from "./themables.js";
import { E } from "./tslib.es6.js";
import { Yv } from "./utils_10.js";
import { CBt, bwe, uTr } from "./utils_13.js";
import { DI, Fyt, Hve, Kde, Zo, bc, cTr, dW, lgn, uE, xv } from "./ze.js";
var ZGo, uoi, jqd, QGo;
export { QGo, ZGo, jqd, uoi };
var __wakaru_$qd_initialized = false;
export function $qd() {
if (__wakaru_$qd_initialized) return;
__wakaru_$qd_initialized = true;
"use strict";
E(), Hn(), PT(), vu(), bo(), p4(), gs(), Qe(), Jc(), ta(), bwe(), W3(), Bt(), ZGo = class xJc extends st {
    constructor(e, n, i, r, s){
        super(), this._rootElement = e, this._diffModel = n, this._originalEditorLayoutInfo = i, this._modifiedEditorLayoutInfo = r, this._editors = s, this._originalScrollTop = Yv(this, this._editors.original.onDidScrollChange, ()=>this._editors.original.getScrollTop()), this._modifiedScrollTop = Yv(this, this._editors.modified.onDidScrollChange, ()=>this._editors.modified.getScrollTop()), this._viewZonesChanged = dW("onDidChangeViewZones", this._editors.modified.onDidChangeViewZones), this.width = bc(this, 0), this._modifiedViewZonesChangedSignal = dW("modified.onDidChangeViewZones", this._editors.modified.onDidChangeViewZones), this._originalViewZonesChangedSignal = dW("original.onDidChangeViewZones", this._editors.original.onDidChangeViewZones), this._state = Kde(this, (u, d)=>{
            this._element.replaceChildren();
            const h = this._diffModel.read(u), p = h?.diff.read(u)?.movedTexts;
            if (!p || p.length === 0) {
                this.width.set(0, void 0);
                return;
            }
            this._viewZonesChanged.read(u);
            const g = this._originalEditorLayoutInfo.read(u), f = this._modifiedEditorLayoutInfo.read(u);
            if (!g || !f) {
                this.width.set(0, void 0);
                return;
            }
            this._modifiedViewZonesChangedSignal.read(u), this._originalViewZonesChangedSignal.read(u);
            const _ = p.map((I)=>{
                function A(G, q) {
                    const K = q.getTopForLineNumber(G.startLineNumber, !0), V = q.getTopForLineNumber(G.endLineNumberExclusive, !0);
                    return (K + V) / 2;
                }
                const P = A(I.lineRangeMapping.original, this._editors.original), M = this._originalScrollTop.read(u), O = A(I.lineRangeMapping.modified, this._editors.modified), N = this._modifiedScrollTop.read(u), U = P - M, j = O - N, $ = Math.min(P, O), H = Math.max(P, O);
                return {
                    range: new Im($, H),
                    from: U,
                    to: j,
                    fromWithoutScroll: P,
                    toWithoutScroll: O,
                    move: I
                };
            });
            _.sort(dYu(I5((I)=>I.fromWithoutScroll > I.toWithoutScroll, pYu), I5((I)=>I.fromWithoutScroll > I.toWithoutScroll ? I.fromWithoutScroll : -I.toWithoutScroll, Sj)));
            const b = jqd.compute(_.map((I)=>I.range)), y = 10, S = g.verticalScrollbarWidth, k = (b.getTrackCount() - 1) * 10 + y * 2, C = S + k + (f.contentLeft - xJc.movedCodeBlockPadding);
            let T = 0;
            for (const I of _){
                const A = b.getTrack(T), P = S + y + A * 10, M = 15, O = 15, N = C, U = f.glyphMarginWidth + f.lineNumbersWidth, j = 18, $ = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                $.classList.add("arrow-rectangle"), $.setAttribute("x", `${N - U}`), $.setAttribute("y", `${I.to - j / 2}`), $.setAttribute("width", `${U}`), $.setAttribute("height", `${j}`), this._element.appendChild($);
                const H = document.createElementNS("http://www.w3.org/2000/svg", "g"), G = document.createElementNS("http://www.w3.org/2000/svg", "path");
                G.setAttribute("d", `M 0 ${I.from} L ${P} ${I.from} L ${P} ${I.to} L ${N - O} ${I.to}`), G.setAttribute("fill", "none"), H.appendChild(G);
                const q = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
                q.classList.add("arrow"), d.add(Jd((K)=>{
                    G.classList.toggle("currentMove", I.move === h.activeMovedText.read(K)), q.classList.toggle("currentMove", I.move === h.activeMovedText.read(K));
                })), q.setAttribute("points", `${N - O},${I.to - M / 2} ${N},${I.to} ${N - O},${I.to + M / 2}`), H.appendChild(q), this._element.appendChild(H), T++;
            }
            this.width.set(k, void 0);
        }), this._element = document.createElementNS("http://www.w3.org/2000/svg", "svg"), this._element.setAttribute("class", "moved-blocks-lines"), this._rootElement.appendChild(this._element), this._register(Pn(()=>this._element.remove())), this._register(Jd((u)=>{
            const d = this._originalEditorLayoutInfo.read(u), h = this._modifiedEditorLayoutInfo.read(u);
            !d || !h || (this._element.style.left = `${d.width - d.verticalScrollbarWidth}px`, this._element.style.height = `${d.height}px`, this._element.style.width = `${d.verticalScrollbarWidth + d.contentLeft - xJc.movedCodeBlockPadding + this.width.read(u)}px`);
        })), this._register(Hve(this._state));
        const o = Zo((u)=>{
            const h = this._diffModel.read(u)?.diff.read(u);
            return h ? h.movedTexts.map((p)=>({
                    move: p,
                    original: new CBt(uE(p.lineRangeMapping.original.startLineNumber - 1), 18),
                    modified: new CBt(uE(p.lineRangeMapping.modified.startLineNumber - 1), 18)
                })) : [];
        });
        this._register(cTr(this._editors.original, o.map((u)=>u.map((d)=>d.original)))), this._register(cTr(this._editors.modified, o.map((u)=>u.map((d)=>d.modified)))), this._register(DI((u, d)=>{
            const h = o.read(u);
            for (const p of h)d.add(new QGo(this._editors.original, p.original, p.move, "original", this._diffModel.get())), d.add(new QGo(this._editors.modified, p.modified, p.move, "modified", this._diffModel.get()));
        }));
        const a = dW("original.onDidFocusEditorWidget", (u)=>this._editors.original.onDidFocusEditorWidget(()=>setTimeout(()=>u(void 0), 0))), l = dW("modified.onDidFocusEditorWidget", (u)=>this._editors.modified.onDidFocusEditorWidget(()=>setTimeout(()=>u(void 0), 0)));
        let c = "modified";
        this._register(lgn({
            createEmptyChangeSummary: ()=>{},
            handleChange: (u, d)=>(u.didChange(a) && (c = "original"), u.didChange(l) && (c = "modified"), !0)
        }, (u)=>{
            a.read(u), l.read(u);
            const d = this._diffModel.read(u);
            if (!d) return;
            const h = d.diff.read(u);
            let p;
            if (h && c === "original") {
                const g = this._editors.originalCursor.read(u);
                g && (p = h.movedTexts.find((f)=>f.lineRangeMapping.original.contains(g.lineNumber)));
            }
            if (h && c === "modified") {
                const g = this._editors.modifiedCursor.read(u);
                g && (p = h.movedTexts.find((f)=>f.lineRangeMapping.modified.contains(g.lineNumber)));
            }
            p !== d.movedTextToCompare.read(void 0) && d.movedTextToCompare.set(void 0, void 0), d.setActiveMovedText(p);
        }));
    }
}, ZGo.movedCodeBlockPadding = 4, uoi = ZGo, jqd = class hRb {
    constructor(e, n){
        this._trackCount = e, this.trackPerLineIdx = n;
    }
    static compute(e) {
        const n = [], i = [];
        for (const r of e){
            let s = n.findIndex((o)=>!o.intersectsStrict(r));
            s === -1 && (n.length >= 6 ? s = S_y(n, I5((a)=>a.intersectWithRangeLength(r), Sj)) : (s = n.length, n.push(new jFd))), n[s].addRange(r), i.push(s);
        }
        return new hRb(n.length, i);
    }
    getTrack(e) {
        return this.trackPerLineIdx[e];
    }
    getTrackCount() {
        return this._trackCount;
    }
}, QGo = class extends uTr {
    constructor(t, e, n, i, r){
        const s = xv("div.diff-hidden-lines-widget");
        super(t, e, s.root), this._editor = t, this._move = n, this._kind = i, this._diffModel = r, this._nodes = xv("div.diff-moved-code-block", {
            style: {
                marginRight: "4px"
            }
        }, [
            xv("div.text-content@textContent"),
            xv("div.action-bar@actionBar")
        ]), s.root.appendChild(this._nodes.root);
        const o = Yv(this._editor.onDidLayoutChange, ()=>this._editor.getLayoutInfo());
        this._register(Fyt(this._nodes.root, {
            paddingRight: o.map((d)=>d.verticalScrollbarWidth)
        }));
        let a;
        n.changes.length > 0 ? a = this._kind === "original" ? D(253, null, this._move.lineRangeMapping.modified.startLineNumber, this._move.lineRangeMapping.modified.endLineNumberExclusive - 1) : D(254, null, this._move.lineRangeMapping.original.startLineNumber, this._move.lineRangeMapping.original.endLineNumberExclusive - 1) : a = this._kind === "original" ? D(255, null, this._move.lineRangeMapping.modified.startLineNumber, this._move.lineRangeMapping.modified.endLineNumberExclusive - 1) : D(256, null, this._move.lineRangeMapping.original.startLineNumber, this._move.lineRangeMapping.original.endLineNumberExclusive - 1);
        const l = this._register(new oR(this._nodes.actionBar, {
            highlightToggledItems: !0
        })), c = new za("", a, "", !1);
        l.push(c, {
            icon: !1,
            label: !0
        });
        const u = new za("", "Compare", Gn.asClassName(yt.compareChanges), !0, ()=>{
            this._editor.focus(), this._diffModel.movedTextToCompare.set(this._diffModel.movedTextToCompare.get() === n ? void 0 : this._move, void 0);
        });
        this._register(Jd((d)=>{
            const h = this._diffModel.movedTextToCompare.read(d) === n;
            u.checked = h;
        })), l.push(u, {
            icon: !1,
            label: !0
        });
    }
};

}
