import { i6 } from "./fastDomNode.js";
import { uDy } from "./scrollDecoration.css";
import { E } from "./tslib.es6.js";
import { AQ, pz } from "./viewPart.js";
import { Ew } from "./ze.js";
var T$d;
export { T$d };
var __wakaru_dDy_initialized = false;
export function dDy() {
if (__wakaru_dDy_initialized) return;
__wakaru_dDy_initialized = true;
"use strict";
E(), uDy(), i6(), pz(), T$d = class extends AQ {
    constructor(t){
        super(t), this._scrollTop = 0, this._width = 0, this._updateWidth(), this._shouldShow = !1;
        const n = this._context.configuration.options.get(108);
        this._useShadows = n.useShadows, this._domNode = Ew(document.createElement("div")), this._domNode.setAttribute("role", "presentation"), this._domNode.setAttribute("aria-hidden", "true");
    }
    dispose() {
        super.dispose();
    }
    _updateShouldShow() {
        const t = this._useShadows && this._scrollTop > 0;
        return this._shouldShow !== t ? (this._shouldShow = t, !0) : !1;
    }
    getDomNode() {
        return this._domNode;
    }
    _updateWidth() {
        const e = this._context.configuration.options.get(151);
        e.minimap.renderMinimap === 0 || e.minimap.minimapWidth > 0 && e.minimap.minimapLeft === 0 ? this._width = e.width : this._width = e.width - e.verticalScrollbarWidth;
    }
    onConfigurationChanged(t) {
        const n = this._context.configuration.options.get(108);
        return this._useShadows = n.useShadows, this._updateWidth(), this._updateShouldShow(), !0;
    }
    onScrollChanged(t) {
        return this._scrollTop = t.scrollTop, this._updateShouldShow();
    }
    prepareRender(t) {}
    render(t) {
        this._domNode.setWidth(this._width), this._domNode.setClassName(this._shouldShow ? "scroll-decoration" : "");
    }
};

}
