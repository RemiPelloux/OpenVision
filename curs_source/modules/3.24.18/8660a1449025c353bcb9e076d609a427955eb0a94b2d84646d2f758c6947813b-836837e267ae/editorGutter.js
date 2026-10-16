import { Pn, Qe, da, st } from "./Iwo.js";
import { Jd } from "./autorun.js";
import { Hn } from "./dom_2.js";
import { DD, wd } from "./lineRange.js";
import { Jc } from "./observable.js";
import { Im, W3 } from "./offsetRange.js";
import { E } from "./tslib.es6.js";
import { Yv } from "./utils_10.js";
import { bc, dW, hE, mg, nwe, xv } from "./ze.js";
var _zd, bzd;
export { _zd, bzd };
var __wakaru_ELy_initialized = false;
export function ELy() {
if (__wakaru_ELy_initialized) return;
__wakaru_ELy_initialized = true;
"use strict";
E(), Hn(), Qe(), Jc(), DD(), W3(), _zd = class extends st {
    constructor(t, e, n){
        super(), this._editor = t, this._domNode = e, this.itemProvider = n, this.scrollTop = Yv(this, this._editor.onDidScrollChange, (s)=>this._editor.getScrollTop()), this.isScrollTopZero = this.scrollTop.map((s)=>s === 0), this.modelAttached = Yv(this, this._editor.onDidChangeModel, (s)=>this._editor.hasModel()), this.editorOnDidChangeViewZones = dW("onDidChangeViewZones", this._editor.onDidChangeViewZones), this.editorOnDidContentSizeChange = dW("onDidContentSizeChange", this._editor.onDidContentSizeChange), this.domNodeSizeChanged = nwe("domNodeSizeChanged"), this.views = this._register(new da), this._domNode.className = "gutter monaco-editor";
        const i = this._domNode.appendChild(xv("div.scroll-decoration", {
            role: "presentation",
            ariaHidden: "true",
            style: {
                width: "100%"
            }
        }).root), r = new ResizeObserver(()=>{
            mg((s)=>{
                this.domNodeSizeChanged.trigger(s);
            });
        });
        r.observe(this._domNode), this._register(Pn(()=>r.disconnect())), this._register(Jd((s)=>{
            i.className = this.isScrollTopZero.read(s) ? "" : "scroll-decoration";
        })), this._register(Jd((s)=>this.render(s)));
    }
    dispose() {
        super.dispose(), hE(this._domNode);
    }
    render(t) {
        if (!this.modelAttached.read(t)) return;
        this.domNodeSizeChanged.read(t), this.editorOnDidChangeViewZones.read(t), this.editorOnDidContentSizeChange.read(t);
        const e = this.scrollTop.read(t), n = this._editor.getVisibleRanges(), i = new Set(this.views.keys()), r = Im.ofStartAndLength(0, this._domNode.clientHeight);
        if (!r.isEmpty) for (const s of n){
            const o = new wd(s.startLineNumber, s.endLineNumber + 1), a = this.itemProvider.getIntersectingGutterItems(o, t);
            mg((l)=>{
                for (const c of a){
                    if (!c.range.intersect(o)) continue;
                    i.delete(c.id);
                    let u = this.views.get(c.id);
                    if (u) u.item.set(c, l);
                    else {
                        const g = document.createElement("div");
                        this._domNode.appendChild(g);
                        const f = bc("item", c), _ = this.itemProvider.createView(f, g);
                        u = new bzd(f, _, g), this.views.set(c.id, u);
                    }
                    const d = c.range.startLineNumber <= this._editor.getModel().getLineCount() ? this._editor.getTopForLineNumber(c.range.startLineNumber, !0) - e : this._editor.getBottomForLineNumber(c.range.startLineNumber - 1, !1) - e, p = (c.range.endLineNumberExclusive === 1 ? Math.max(d, this._editor.getTopForLineNumber(c.range.startLineNumber, !1) - e) : Math.max(d, this._editor.getBottomForLineNumber(c.range.endLineNumberExclusive - 1, !0) - e)) - d;
                    u.domNode.style.top = `${d}px`, u.domNode.style.height = `${p}px`, u.gutterItemView.layout(Im.ofStartAndLength(d, p), r);
                }
            });
        }
        for (const s of i)this.views.deleteAndDispose(s);
    }
}, bzd = class {
    constructor(t, e, n){
        this.item = t, this.gutterItemView = e, this.domNode = n;
    }
    dispose() {
        this.gutterItemView.dispose(), this.domNode.remove();
    }
};

}
