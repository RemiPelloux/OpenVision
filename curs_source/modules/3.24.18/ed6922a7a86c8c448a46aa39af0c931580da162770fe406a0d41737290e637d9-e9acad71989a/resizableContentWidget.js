import { Se, we } from "./HVr.js";
import { Tc, en } from "./dom_2.js";
import { Yn, ya } from "./position.js";
import { LV, Nk } from "./qIc.js";
import { Xvn, jFt } from "./resizable.js";
import { x } from "./tslib.es6.js";
var O$c, F$c, B$c;
export { B$c, F$c, O$c };
var __wakaru_WSg_initialized = false;
export function WSg() {
if (__wakaru_WSg_initialized) return;
__wakaru_WSg_initialized = true;
"use strict";
x(), Xvn(), Se(), ya(), en(), O$c = 30, F$c = 24, B$c = class extends we {
    constructor(e, t = new Tc(10, 10)){
        super(), this._editor = e, this.allowEditorOverflow = !0, this.suppressMouseDown = !1, this._resizableNode = this._register(new jFt), this._contentPosition = null, this._isResizing = !1, this._resizableNode.domNode.style.position = "absolute", this._resizableNode.minSize = Tc.lift(t), this._resizableNode.layout(t.height, t.width), this._resizableNode.enableSashes(!0, !0, !0, !0), this._register(this._resizableNode.onDidResize((n)=>{
            this._resize(new Tc(n.dimension.width, n.dimension.height)), n.done && (this._isResizing = !1);
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
        return this._contentPosition?.position ? Yn.lift(this._contentPosition.position) : void 0;
    }
    _availableVerticalSpaceAbove(e) {
        const t = this._editor.getDomNode(), n = this._editor.getScrolledVisiblePosition(e);
        return !t || !n ? void 0 : Nk(t).top + n.top - O$c;
    }
    _availableVerticalSpaceBelow(e) {
        const t = this._editor.getDomNode(), n = this._editor.getScrolledVisiblePosition(e);
        if (!t || !n) return;
        const i = Nk(t), r = LV(t.ownerDocument.body), s = i.top + n.top + n.height;
        return r.height - s - F$c;
    }
    _findPositionPreference(e, t) {
        const n = Math.min(this._availableVerticalSpaceBelow(t) ?? 1 / 0, e), i = Math.min(this._availableVerticalSpaceAbove(t) ?? 1 / 0, e), r = Math.min(Math.max(i, n), e), s = Math.min(e, r);
        let o;
        return this._editor.getOption(62).above ? o = s <= i ? 1 : 2 : o = s <= n ? 2 : 1, o === 1 ? this._resizableNode.enableSashes(!0, !0, !1, !1) : this._resizableNode.enableSashes(!1, !0, !0, !1), o;
    }
    _resize(e) {
        this._resizableNode.layout(e.height, e.width);
    }
};

}
