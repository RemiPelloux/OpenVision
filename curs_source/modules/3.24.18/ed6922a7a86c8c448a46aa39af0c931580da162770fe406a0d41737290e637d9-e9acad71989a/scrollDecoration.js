import { Tx } from "./fastDomNode.js";
import { x_ } from "./qIc.js";
import { v_g } from "./scrollDecoration.css";
import { x } from "./tslib.es6.js";
import { aU, mW } from "./viewPart.js";
var h6c;
export { h6c };
var __wakaru___g_initialized = false;
export function __g() {
if (__wakaru___g_initialized) return;
__wakaru___g_initialized = true;
"use strict";
x(), v_g(), Tx(), aU(), h6c = class extends mW {
    constructor(e){
        super(e), this._scrollTop = 0, this._width = 0, this._updateWidth(), this._shouldShow = !1;
        const n = this._context.configuration.options.get(108);
        this._useShadows = n.useShadows, this._domNode = x_(document.createElement("div")), this._domNode.setAttribute("role", "presentation"), this._domNode.setAttribute("aria-hidden", "true");
    }
    dispose() {
        super.dispose();
    }
    _updateShouldShow() {
        const e = this._useShadows && this._scrollTop > 0;
        return this._shouldShow !== e ? (this._shouldShow = e, !0) : !1;
    }
    getDomNode() {
        return this._domNode;
    }
    _updateWidth() {
        const t = this._context.configuration.options.get(151);
        t.minimap.renderMinimap === 0 || t.minimap.minimapWidth > 0 && t.minimap.minimapLeft === 0 ? this._width = t.width : this._width = t.width - t.verticalScrollbarWidth;
    }
    onConfigurationChanged(e) {
        const n = this._context.configuration.options.get(108);
        return this._useShadows = n.useShadows, this._updateWidth(), this._updateShouldShow(), !0;
    }
    onScrollChanged(e) {
        return this._scrollTop = e.scrollTop, this._updateShouldShow();
    }
    prepareRender(e) {}
    render(e) {
        this._domNode.setWidth(this._width), this._domNode.setClassName(this._shouldShow ? "scroll-decoration" : "");
    }
};

}
