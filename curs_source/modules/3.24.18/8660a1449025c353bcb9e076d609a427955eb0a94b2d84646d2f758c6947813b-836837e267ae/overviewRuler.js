import { i6 } from "./fastDomNode.js";
import { S$d, k$d } from "./overviewZoneManager.js";
import { E } from "./tslib.es6.js";
import { _yt, cBt } from "./viewEventHandler.js";
import { Ew } from "./ze.js";
var w$d;
export { w$d };
var __wakaru_aDy_initialized = false;
export function aDy() {
if (__wakaru_aDy_initialized) return;
__wakaru_aDy_initialized = true;
"use strict";
E(), i6(), k$d(), cBt(), w$d = class extends _yt {
    constructor(t, e){
        super(), this._context = t;
        const n = this._context.configuration.options;
        this._domNode = Ew(document.createElement("canvas")), this._domNode.setClassName(e), this._domNode.setPosition("absolute"), this._domNode.setLayerHinting(!0), this._domNode.setContain("strict"), this._zoneManager = new S$d((i)=>this._context.viewLayout.getVerticalOffsetForLineNumber(i)), this._zoneManager.setDOMWidth(0), this._zoneManager.setDOMHeight(0), this._zoneManager.setOuterHeight(this._context.viewLayout.getScrollHeight()), this._zoneManager.setLineHeight(n.get(68)), this._zoneManager.setPixelRatio(n.get(149)), this._context.addEventHandler(this);
    }
    dispose() {
        this._context.removeEventHandler(this), super.dispose();
    }
    onConfigurationChanged(t) {
        const e = this._context.configuration.options;
        return t.hasChanged(68) && (this._zoneManager.setLineHeight(e.get(68)), this._render()), t.hasChanged(149) && (this._zoneManager.setPixelRatio(e.get(149)), this._domNode.setWidth(this._zoneManager.getDOMWidth()), this._domNode.setHeight(this._zoneManager.getDOMHeight()), this._domNode.domNode.width = this._zoneManager.getCanvasWidth(), this._domNode.domNode.height = this._zoneManager.getCanvasHeight(), this._render()), !0;
    }
    onFlushed(t) {
        return this._render(), !0;
    }
    onScrollChanged(t) {
        return t.scrollHeightChanged && (this._zoneManager.setOuterHeight(t.scrollHeight), this._render()), !0;
    }
    onZonesChanged(t) {
        return this._render(), !0;
    }
    getDomNode() {
        return this._domNode.domNode;
    }
    setLayout(t) {
        this._domNode.setTop(t.top), this._domNode.setRight(t.right);
        let e = !1;
        e = this._zoneManager.setDOMWidth(t.width) || e, e = this._zoneManager.setDOMHeight(t.height) || e, e && (this._domNode.setWidth(this._zoneManager.getDOMWidth()), this._domNode.setHeight(this._zoneManager.getDOMHeight()), this._domNode.domNode.width = this._zoneManager.getCanvasWidth(), this._domNode.domNode.height = this._zoneManager.getCanvasHeight(), this._render());
    }
    setZones(t) {
        this._zoneManager.setZones(t), this._render();
    }
    _render() {
        if (this._zoneManager.getOuterHeight() === 0) return !1;
        const t = this._zoneManager.getCanvasWidth(), e = this._zoneManager.getCanvasHeight(), n = this._zoneManager.resolveColorZones(), i = this._zoneManager.getId2Color(), r = this._domNode.domNode.getContext("2d");
        return r.clearRect(0, 0, t, e), n.length > 0 && this._renderOneLane(r, n, i, t), !0;
    }
    _renderOneLane(t, e, n, i) {
        let r = 0, s = 0, o = 0;
        for (const a of e){
            const l = a.colorId, c = a.from, u = a.to;
            l !== r ? (t.fillRect(0, s, i, o - s), r = l, t.fillStyle = n[r], s = c, o = u) : o >= c ? o = Math.max(o, u) : (t.fillRect(0, s, i, o - s), s = c, o = u);
        }
        t.fillRect(0, s, i, o - s);
    }
};

}
