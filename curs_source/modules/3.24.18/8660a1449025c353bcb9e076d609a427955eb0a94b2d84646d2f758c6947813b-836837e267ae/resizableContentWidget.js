import { Qe, st } from "./Iwo.js";
import { Hn, nd } from "./dom_2.js";
import { er, jc } from "./position.js";
import { Ooi, wvn } from "./resizable.js";
import { E } from "./tslib.es6.js";
import { Ex, Yde } from "./ze.js";
var xVd, AVd, RVd;
export { AVd, RVd, xVd };
var __wakaru_wOy_initialized = false;
export function wOy() {
if (__wakaru_wOy_initialized) return;
__wakaru_wOy_initialized = true;
"use strict";
E(), Ooi(), Qe(), jc(), Hn(), xVd = 30, AVd = 24, RVd = class extends st {
    constructor(t, e = new nd(10, 10)){
        super(), this._editor = t, this.allowEditorOverflow = !0, this.suppressMouseDown = !1, this._resizableNode = this._register(new wvn), this._contentPosition = null, this._isResizing = !1, this._resizableNode.domNode.style.position = "absolute", this._resizableNode.minSize = nd.lift(e), this._resizableNode.layout(e.height, e.width), this._resizableNode.enableSashes(!0, !0, !0, !0), this._register(this._resizableNode.onDidResize((n)=>{
            this._resize(new nd(n.dimension.width, n.dimension.height)), n.done && (this._isResizing = !1);
        })), this._register(this._resizableNode.onDidWillResize(()=>{
            this._isResizing = !0;
        }));
    }
    get isResizing() {
        return this._isResizing;
    }
    getDomNode() {
        return this._resizableNode.domNode;
    }
    getPosition() {
        return this._contentPosition;
    }
    get position() {
        return this._contentPosition?.position ? er.lift(this._contentPosition.position) : void 0;
    }
    _availableVerticalSpaceAbove(t) {
        const e = this._editor.getDomNode(), n = this._editor.getScrolledVisiblePosition(t);
        return !e || !n ? void 0 : Ex(e).top + n.top - xVd;
    }
    _availableVerticalSpaceBelow(t) {
        const e = this._editor.getDomNode(), n = this._editor.getScrolledVisiblePosition(t);
        if (!e || !n) return;
        const i = Ex(e), r = Yde(e.ownerDocument.body), s = i.top + n.top + n.height;
        return r.height - s - AVd;
    }
    _findPositionPreference(t, e) {
        const n = Math.min(this._availableVerticalSpaceBelow(e) ?? 1 / 0, t), i = Math.min(this._availableVerticalSpaceAbove(e) ?? 1 / 0, t), r = Math.min(Math.max(i, n), t), s = Math.min(t, r);
        let o;
        return this._editor.getOption(62).above ? o = s <= i ? 1 : 2 : o = s <= n ? 2 : 1, o === 1 ? this._resizableNode.enableSashes(!0, !0, !1, !1) : this._resizableNode.enableSashes(!1, !0, !0, !1), o;
    }
    _resize(t) {
        this._resizableNode.layout(t.height, t.width);
    }
};

}
