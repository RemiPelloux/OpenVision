import { Tx } from "./fastDomNode.js";
import { i_g } from "./margin.css";
import { x_ } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { aU, mW } from "./viewPart.js";
var G_i, qes;
export { G_i, qes };
var __wakaru_q9c_initialized = false;
export function q9c() {
if (__wakaru_q9c_initialized) return;
__wakaru_q9c_initialized = true;
"use strict";
x(), i_g(), Tx(), aU(), G_i = class NIa extends mW {
    constructor(t){
        super(t);
        const n = this._context.configuration.options, i = n.get(151);
        this._canUseLayerHinting = !n.get(32), this._contentLeft = i.contentLeft, this._glyphMarginLeft = i.glyphMarginLeft, this._glyphMarginWidth = i.glyphMarginWidth, this._domNode = x_(document.createElement("div")), this._domNode.setClassName(NIa.OUTER_CLASS_NAME), this._domNode.setPosition("absolute"), this._domNode.setAttribute("role", "presentation"), this._domNode.setAttribute("aria-hidden", "true"), this._glyphMarginBackgroundDomNode = x_(document.createElement("div")), this._glyphMarginBackgroundDomNode.setClassName(NIa.CLASS_NAME), this._domNode.appendChild(this._glyphMarginBackgroundDomNode);
    }
    dispose() {
        super.dispose();
    }
    getDomNode() {
        return this._domNode;
    }
    onConfigurationChanged(t) {
        const n = this._context.configuration.options, i = n.get(151);
        return this._canUseLayerHinting = !n.get(32), this._contentLeft = i.contentLeft, this._glyphMarginLeft = i.glyphMarginLeft, this._glyphMarginWidth = i.glyphMarginWidth, !0;
    }
    onScrollChanged(t) {
        return super.onScrollChanged(t) || t.scrollTopChanged;
    }
    prepareRender(t) {}
    render(t) {
        this._domNode.setLayerHinting(this._canUseLayerHinting), this._domNode.setContain("strict");
        const n = t.scrollTop - t.bigNumbersDelta;
        this._domNode.setTop(-n);
        const i = Math.min(t.scrollHeight, 1e6);
        this._domNode.setHeight(i), this._domNode.setWidth(this._contentLeft), this._glyphMarginBackgroundDomNode.setLeft(this._glyphMarginLeft), this._glyphMarginBackgroundDomNode.setWidth(this._glyphMarginWidth), this._glyphMarginBackgroundDomNode.setHeight(i);
    }
}, G_i.CLASS_NAME = "glyph-margin", G_i.OUTER_CLASS_NAME = "margin", qes = G_i;

}
