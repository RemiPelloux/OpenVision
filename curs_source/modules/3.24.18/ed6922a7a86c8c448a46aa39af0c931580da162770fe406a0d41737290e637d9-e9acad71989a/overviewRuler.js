import { Tx } from "./fastDomNode.js";
import { c6c, l6c } from "./overviewZoneManager.js";
import { x_ } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { $pt, Hze } from "./viewEventHandler.js";
var u6c;
export { u6c };
var __wakaru_m_g_initialized = false;
export function m_g() {
if (__wakaru_m_g_initialized) return;
__wakaru_m_g_initialized = true;
"use strict";
x(), Tx(), l6c(), $pt(), u6c = class extends Hze {
    constructor(e, t){
        super(), this._context = e;
        const n = this._context.configuration.options;
        this._domNode = x_(document.createElement("canvas")), this._domNode.setClassName(t), this._domNode.setPosition("absolute"), this._domNode.setLayerHinting(!0), this._domNode.setContain("strict"), this._zoneManager = new c6c((i)=>this._context.viewLayout.getVerticalOffsetForLineNumber(i)), this._zoneManager.setDOMWidth(0), this._zoneManager.setDOMHeight(0), this._zoneManager.setOuterHeight(this._context.viewLayout.getScrollHeight()), this._zoneManager.setLineHeight(n.get(68)), this._zoneManager.setPixelRatio(n.get(149)), this._context.addEventHandler(this);
    }
    dispose() {
        this._context.removeEventHandler(this), super.dispose();
    }
    onConfigurationChanged(e) {
        const t = this._context.configuration.options;
        return e.hasChanged(68) && (this._zoneManager.setLineHeight(t.get(68)), this._render()), e.hasChanged(149) && (this._zoneManager.setPixelRatio(t.get(149)), this._domNode.setWidth(this._zoneManager.getDOMWidth()), this._domNode.setHeight(this._zoneManager.getDOMHeight()), this._domNode.domNode.width = this._zoneManager.getCanvasWidth(), this._domNode.domNode.height = this._zoneManager.getCanvasHeight(), this._render()), !0;
    }
    onFlushed(e) {
        return this._render(), !0;
    }
    onScrollChanged(e) {
        return e.scrollHeightChanged && (this._zoneManager.setOuterHeight(e.scrollHeight), this._render()), !0;
    }
    onZonesChanged(e) {
        return this._render(), !0;
    }
    getDomNode() {
        return this._domNode.domNode;
    }
    setLayout(e) {
        this._domNode.setTop(e.top), this._domNode.setRight(e.right);
        let t = !1;
        t = this._zoneManager.setDOMWidth(e.width) || t, t = this._zoneManager.setDOMHeight(e.height) || t, t && (this._domNode.setWidth(this._zoneManager.getDOMWidth()), this._domNode.setHeight(this._zoneManager.getDOMHeight()), this._domNode.domNode.width = this._zoneManager.getCanvasWidth(), this._domNode.domNode.height = this._zoneManager.getCanvasHeight(), this._render());
    }
    setZones(e) {
        this._zoneManager.setZones(e), this._render();
    }
    _render() {
        if (this._zoneManager.getOuterHeight() === 0) return !1;
        const e = this._zoneManager.getCanvasWidth(), t = this._zoneManager.getCanvasHeight(), n = this._zoneManager.resolveColorZones(), i = this._zoneManager.getId2Color(), r = this._domNode.domNode.getContext("2d");
        return r.clearRect(0, 0, e, t), n.length > 0 && this._renderOneLane(r, n, i, e), !0;
    }
    _renderOneLane(e, t, n, i) {
        let r = 0, s = 0, o = 0;
        for (const a of t){
            const c = a.colorId, l = a.from, u = a.to;
            c !== r ? (e.fillRect(0, s, i, o - s), r = c, e.fillStyle = n[r], s = l, o = u) : o >= l ? o = Math.max(o, u) : (e.fillRect(0, s, i, o - s), s = l, o = u);
        }
        e.fillRect(0, s, i, o - s);
    }
};

}
