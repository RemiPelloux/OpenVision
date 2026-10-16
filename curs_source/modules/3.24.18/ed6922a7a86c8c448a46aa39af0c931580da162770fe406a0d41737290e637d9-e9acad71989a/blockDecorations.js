import { Uvg } from "./blockDecorations.css";
import { Tx } from "./fastDomNode.js";
import { x_ } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { aU, mW } from "./viewPart.js";
var E9c;
export { E9c };
var __wakaru_$vg_initialized = false;
export function $vg() {
if (__wakaru_$vg_initialized) return;
__wakaru_$vg_initialized = true;
"use strict";
x(), Tx(), Uvg(), aU(), E9c = class extends mW {
    constructor(e){
        super(e), this.blocks = [], this.contentWidth = -1, this.contentLeft = 0, this.domNode = x_(document.createElement("div")), this.domNode.setAttribute("role", "presentation"), this.domNode.setAttribute("aria-hidden", "true"), this.domNode.setClassName("blockDecorations-container"), this.update();
    }
    update() {
        let e = !1;
        const n = this._context.configuration.options.get(151), i = n.contentWidth - n.verticalScrollbarWidth;
        this.contentWidth !== i && (this.contentWidth = i, e = !0);
        const r = n.contentLeft;
        return this.contentLeft !== r && (this.contentLeft = r, e = !0), e;
    }
    dispose() {
        super.dispose();
    }
    onConfigurationChanged(e) {
        return this.update();
    }
    onScrollChanged(e) {
        return e.scrollTopChanged || e.scrollLeftChanged;
    }
    onDecorationsChanged(e) {
        return !0;
    }
    onZonesChanged(e) {
        return !0;
    }
    prepareRender(e) {}
    render(e) {
        let t = 0;
        const n = e.getDecorationsInViewport();
        for (const i of n){
            if (!i.options.blockClassName) continue;
            let r = this.blocks[t];
            r || (r = this.blocks[t] = x_(document.createElement("div")), this.domNode.appendChild(r));
            let s, o;
            i.options.blockIsAfterEnd ? (s = e.getVerticalOffsetAfterLineNumber(i.range.endLineNumber, !1), o = e.getVerticalOffsetAfterLineNumber(i.range.endLineNumber, !0)) : (s = e.getVerticalOffsetForLineNumber(i.range.startLineNumber, !0), o = i.range.isEmpty() && !i.options.blockDoesNotCollapse ? e.getVerticalOffsetForLineNumber(i.range.startLineNumber, !1) : e.getVerticalOffsetAfterLineNumber(i.range.endLineNumber, !0));
            const [a, c, l, u] = i.options.blockPadding ?? [
                0,
                0,
                0,
                0
            ];
            r.setClassName("blockDecorations-block " + i.options.blockClassName), r.setLeft(this.contentLeft - u), r.setWidth(this.contentWidth + u + c), r.setTop(s - e.scrollTop - a), r.setHeight(o - s + a + l), t++;
        }
        for(let i = t; i < this.blocks.length; i++)this.blocks[i].domNode.remove();
        this.blocks.length = t;
    }
};

}
