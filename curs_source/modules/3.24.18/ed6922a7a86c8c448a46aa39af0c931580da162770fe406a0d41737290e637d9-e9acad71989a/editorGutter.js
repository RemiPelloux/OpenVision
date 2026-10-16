import { Se, po, rn, we } from "./HVr.js";
import { Hc } from "./autorun.js";
import { en } from "./dom_2.js";
import { Vl, hA } from "./lineRange.js";
import { qa } from "./observable.js";
import { Mh, uR } from "./offsetRange.js";
import { EK, Sp, Uh, Xo, cu, z9 } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { qp } from "./utils_10.js";
var G7c, V7c;
export { G7c, V7c };
var __wakaru_RSg_initialized = false;
export function RSg() {
if (__wakaru_RSg_initialized) return;
__wakaru_RSg_initialized = true;
"use strict";
x(), en(), Se(), qa(), hA(), uR(), G7c = class extends we {
    constructor(e, t, n){
        super(), this._editor = e, this._domNode = t, this.itemProvider = n, this.scrollTop = qp(this, this._editor.onDidScrollChange, (s)=>this._editor.getScrollTop()), this.isScrollTopZero = this.scrollTop.map((s)=>s === 0), this.modelAttached = qp(this, this._editor.onDidChangeModel, (s)=>this._editor.hasModel()), this.editorOnDidChangeViewZones = z9("onDidChangeViewZones", this._editor.onDidChangeViewZones), this.editorOnDidContentSizeChange = z9("onDidContentSizeChange", this._editor.onDidContentSizeChange), this.domNodeSizeChanged = EK("domNodeSizeChanged"), this.views = this._register(new po), this._domNode.className = "gutter monaco-editor";
        const i = this._domNode.appendChild(cu("div.scroll-decoration", {
            role: "presentation",
            ariaHidden: "true",
            style: {
                width: "100%"
            }
        }).root), r = new ResizeObserver(()=>{
            Uh((s)=>{
                this.domNodeSizeChanged.trigger(s);
            });
        });
        r.observe(this._domNode), this._register(rn(()=>r.disconnect())), this._register(Hc((s)=>{
            i.className = this.isScrollTopZero.read(s) ? "" : "scroll-decoration";
        })), this._register(Hc((s)=>this.render(s)));
    }
    dispose() {
        super.dispose(), Sp(this._domNode);
    }
    render(e) {
        if (!this.modelAttached.read(e)) return;
        this.domNodeSizeChanged.read(e), this.editorOnDidChangeViewZones.read(e), this.editorOnDidContentSizeChange.read(e);
        const t = this.scrollTop.read(e), n = this._editor.getVisibleRanges(), i = new Set(this.views.keys()), r = Mh.ofStartAndLength(0, this._domNode.clientHeight);
        if (!r.isEmpty) for (const s of n){
            const o = new Vl(s.startLineNumber, s.endLineNumber + 1), a = this.itemProvider.getIntersectingGutterItems(o, e);
            Uh((c)=>{
                for (const l of a){
                    if (!l.range.intersect(o)) continue;
                    i.delete(l.id);
                    let u = this.views.get(l.id);
                    if (u) u.item.set(l, c);
                    else {
                        const f = document.createElement("div");
                        this._domNode.appendChild(f);
                        const v = Xo("item", l), b = this.itemProvider.createView(v, f);
                        u = new V7c(v, b, f), this.views.set(l.id, u);
                    }
                    const h = l.range.startLineNumber <= this._editor.getModel().getLineCount() ? this._editor.getTopForLineNumber(l.range.startLineNumber, !0) - t : this._editor.getBottomForLineNumber(l.range.startLineNumber - 1, !1) - t, g = (l.range.endLineNumberExclusive === 1 ? Math.max(h, this._editor.getTopForLineNumber(l.range.startLineNumber, !1) - t) : Math.max(h, this._editor.getBottomForLineNumber(l.range.endLineNumberExclusive - 1, !0) - t)) - h;
                    u.domNode.style.top = `${h}px`, u.domNode.style.height = `${g}px`, u.gutterItemView.layout(Mh.ofStartAndLength(h, g), r);
                }
            });
        }
        for (const s of i)this.views.deleteAndDispose(s);
    }
}, V7c = class {
    constructor(e, t, n){
        this.item = e, this.gutterItemView = t, this.domNode = n;
    }
    dispose() {
        this.gutterItemView.dispose(), this.domNode.remove();
    }
};

}
