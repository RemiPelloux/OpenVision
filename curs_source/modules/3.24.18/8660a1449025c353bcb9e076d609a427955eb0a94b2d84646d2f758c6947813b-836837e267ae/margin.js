import { i6 } from "./fastDomNode.js";
import { XMy } from "./margin.css";
import { E } from "./tslib.es6.js";
import { AQ, pz } from "./viewPart.js";
import { Ew } from "./ze.js";
var fCr, XHo;
export { XHo, fCr };
var __wakaru_o$d_initialized = false;
export function o$d() {
if (__wakaru_o$d_initialized) return;
__wakaru_o$d_initialized = true;
"use strict";
E(), XMy(), i6(), pz(), fCr = class _Jc extends AQ {
    constructor(e){
        super(e);
        const n = this._context.configuration.options, i = n.get(151);
        this._canUseLayerHinting = !n.get(32), this._contentLeft = i.contentLeft, this._glyphMarginLeft = i.glyphMarginLeft, this._glyphMarginWidth = i.glyphMarginWidth, this._domNode = Ew(document.createElement("div")), this._domNode.setClassName(_Jc.OUTER_CLASS_NAME), this._domNode.setPosition("absolute"), this._domNode.setAttribute("role", "presentation"), this._domNode.setAttribute("aria-hidden", "true"), this._glyphMarginBackgroundDomNode = Ew(document.createElement("div")), this._glyphMarginBackgroundDomNode.setClassName(_Jc.CLASS_NAME), this._domNode.appendChild(this._glyphMarginBackgroundDomNode);
    }
    dispose() {
        super.dispose();
    }
    getDomNode() {
        return this._domNode;
    }
    onConfigurationChanged(e) {
        const n = this._context.configuration.options, i = n.get(151);
        return this._canUseLayerHinting = !n.get(32), this._contentLeft = i.contentLeft, this._glyphMarginLeft = i.glyphMarginLeft, this._glyphMarginWidth = i.glyphMarginWidth, !0;
    }
    onScrollChanged(e) {
        return super.onScrollChanged(e) || e.scrollTopChanged;
    }
    prepareRender(e) {}
    render(e) {
        this._domNode.setLayerHinting(this._canUseLayerHinting), this._domNode.setContain("strict");
        const n = e.scrollTop - e.bigNumbersDelta;
        this._domNode.setTop(-n);
        const i = Math.min(e.scrollHeight, 1e6);
        this._domNode.setHeight(i), this._domNode.setWidth(this._contentLeft), this._glyphMarginBackgroundDomNode.setLeft(this._glyphMarginLeft), this._glyphMarginBackgroundDomNode.setWidth(this._glyphMarginWidth), this._glyphMarginBackgroundDomNode.setHeight(i);
    }
}, fCr.CLASS_NAME = "glyph-margin", fCr.OUTER_CLASS_NAME = "margin", XHo = fCr;

}
