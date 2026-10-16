import { MMy } from "./blockDecorations.css";
import { i6 } from "./fastDomNode.js";
import { E } from "./tslib.es6.js";
import { AQ, pz } from "./viewPart.js";
import { Ew } from "./ze.js";
var jjd;
export { jjd };
var __wakaru_DMy_initialized = false;
export function DMy() {
if (__wakaru_DMy_initialized) return;
__wakaru_DMy_initialized = true;
"use strict";
E(), i6(), MMy(), pz(), jjd = class extends AQ {
    constructor(t){
        super(t), this.blocks = [], this.contentWidth = -1, this.contentLeft = 0, this.domNode = Ew(document.createElement("div")), this.domNode.setAttribute("role", "presentation"), this.domNode.setAttribute("aria-hidden", "true"), this.domNode.setClassName("blockDecorations-container"), this.update();
    }
    update() {
        let t = !1;
        const n = this._context.configuration.options.get(151), i = n.contentWidth - n.verticalScrollbarWidth;
        this.contentWidth !== i && (this.contentWidth = i, t = !0);
        const r = n.contentLeft;
        return this.contentLeft !== r && (this.contentLeft = r, t = !0), t;
    }
    dispose() {
        super.dispose();
    }
    onConfigurationChanged(t) {
        return this.update();
    }
    onScrollChanged(t) {
        return t.scrollTopChanged || t.scrollLeftChanged;
    }
    onDecorationsChanged(t) {
        return !0;
    }
    onZonesChanged(t) {
        return !0;
    }
    prepareRender(t) {}
    render(t) {
        let e = 0;
        const n = t.getDecorationsInViewport();
        for (const i of n){
            if (!i.options.blockClassName) continue;
            let r = this.blocks[e];
            r || (r = this.blocks[e] = Ew(document.createElement("div")), this.domNode.appendChild(r));
            let s, o;
            i.options.blockIsAfterEnd ? (s = t.getVerticalOffsetAfterLineNumber(i.range.endLineNumber, !1), o = t.getVerticalOffsetAfterLineNumber(i.range.endLineNumber, !0)) : (s = t.getVerticalOffsetForLineNumber(i.range.startLineNumber, !0), o = i.range.isEmpty() && !i.options.blockDoesNotCollapse ? t.getVerticalOffsetForLineNumber(i.range.startLineNumber, !1) : t.getVerticalOffsetAfterLineNumber(i.range.endLineNumber, !0));
            const [a, l, c, u] = i.options.blockPadding ?? [
                0,
                0,
                0,
                0
            ];
            r.setClassName("blockDecorations-block " + i.options.blockClassName), r.setLeft(this.contentLeft - u), r.setWidth(this.contentWidth + u + l), r.setTop(s - t.scrollTop - a), r.setHeight(o - s + a + c), e++;
        }
        for(let i = e; i < this.blocks.length; i++)this.blocks[i].domNode.remove();
        this.blocks.length = e;
    }
};

}
