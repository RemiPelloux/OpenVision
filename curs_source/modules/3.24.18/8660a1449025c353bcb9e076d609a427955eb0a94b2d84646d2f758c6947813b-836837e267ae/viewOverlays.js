import { she } from "./domFontInfo.js";
import { i6 } from "./fastDomNode.js";
import { E } from "./tslib.es6.js";
import { FHo, OHo } from "./viewLayer.js";
import { AQ, pz } from "./viewPart.js";
import { Ew, oB } from "./ze.js";
var BHo, Ojd, Fjd, Bjd;
export { BHo, Bjd, Fjd, Ojd };
var __wakaru_PMy_initialized = false;
export function PMy() {
if (__wakaru_PMy_initialized) return;
__wakaru_PMy_initialized = true;
"use strict";
E(), i6(), she(), FHo(), pz(), BHo = class extends AQ {
    constructor(t){
        super(t), this._dynamicOverlays = [], this._isFocused = !1, this._visibleLines = new OHo({
            createLine: ()=>new Ojd(this._dynamicOverlays)
        }), this.domNode = this._visibleLines.domNode;
        const n = this._context.configuration.options.get(52);
        oB(this.domNode, n), this.domNode.setClassName("view-overlays");
    }
    shouldRender() {
        if (super.shouldRender()) return !0;
        for(let t = 0, e = this._dynamicOverlays.length; t < e; t++)if (this._dynamicOverlays[t].shouldRender()) return !0;
        return !1;
    }
    dispose() {
        super.dispose();
        for(let t = 0, e = this._dynamicOverlays.length; t < e; t++)this._dynamicOverlays[t].dispose();
        this._dynamicOverlays = [];
    }
    getDomNode() {
        return this.domNode;
    }
    addDynamicOverlay(t) {
        this._dynamicOverlays.push(t);
    }
    onConfigurationChanged(t) {
        this._visibleLines.onConfigurationChanged(t);
        const n = this._context.configuration.options.get(52);
        return oB(this.domNode, n), !0;
    }
    onFlushed(t) {
        return this._visibleLines.onFlushed(t);
    }
    onFocusChanged(t) {
        return this._isFocused = t.isFocused, !0;
    }
    onLinesChanged(t) {
        return this._visibleLines.onLinesChanged(t);
    }
    onLinesDeleted(t) {
        return this._visibleLines.onLinesDeleted(t);
    }
    onLinesInserted(t) {
        return this._visibleLines.onLinesInserted(t);
    }
    onScrollChanged(t) {
        return this._visibleLines.onScrollChanged(t) || !0;
    }
    onTokensChanged(t) {
        return this._visibleLines.onTokensChanged(t);
    }
    onZonesChanged(t) {
        return this._visibleLines.onZonesChanged(t);
    }
    prepareRender(t) {
        const e = this._dynamicOverlays.filter((n)=>n.shouldRender());
        for(let n = 0, i = e.length; n < i; n++){
            const r = e[n];
            r.prepareRender(t), r.onDidRender();
        }
    }
    render(t) {
        this._viewOverlaysRender(t), this.domNode.toggleClassName("focused", this._isFocused);
    }
    _viewOverlaysRender(t) {
        this._visibleLines.renderLines(t.viewportData);
    }
}, Ojd = class {
    constructor(t){
        this._dynamicOverlays = t, this._domNode = null, this._renderedContent = null;
    }
    getDomNode() {
        return this._domNode ? this._domNode.domNode : null;
    }
    setDomNode(t) {
        this._domNode = Ew(t);
    }
    onContentChanged() {}
    onTokensChanged() {}
    renderLine(t, e, n, i, r) {
        let s = "";
        for(let o = 0, a = this._dynamicOverlays.length; o < a; o++){
            const c = this._dynamicOverlays[o].render(i.startLineNumber, t);
            s += c ?? "";
        }
        return this._renderedContent === s ? !1 : (this._renderedContent = s, r.appendString('<div style="top:'), r.appendString(String(e)), r.appendString("px;height:"), r.appendString(String(n)), r.appendString('px;">'), r.appendString(s), r.appendString("</div>"), !0);
    }
    layoutLine(t, e, n) {
        this._domNode && (this._domNode.setTop(e), this._domNode.setHeight(n));
    }
}, Fjd = class extends BHo {
    constructor(t){
        super(t);
        const n = this._context.configuration.options.get(151);
        this._contentWidth = n.contentWidth, this.domNode.setHeight(0);
    }
    onConfigurationChanged(t) {
        const n = this._context.configuration.options.get(151);
        return this._contentWidth = n.contentWidth, super.onConfigurationChanged(t) || !0;
    }
    onScrollChanged(t) {
        return super.onScrollChanged(t) || t.scrollWidthChanged;
    }
    _viewOverlaysRender(t) {
        super._viewOverlaysRender(t), this.domNode.setWidth(Math.max(t.scrollWidth, this._contentWidth));
    }
}, Bjd = class extends BHo {
    constructor(t){
        super(t);
        const e = this._context.configuration.options, n = e.get(151);
        this._contentLeft = n.contentLeft, this.domNode.setClassName("margin-view-overlays"), this.domNode.setWidth(1), oB(this.domNode, e.get(52));
    }
    onConfigurationChanged(t) {
        const e = this._context.configuration.options;
        oB(this.domNode, e.get(52));
        const n = e.get(151);
        return this._contentLeft = n.contentLeft, super.onConfigurationChanged(t) || !0;
    }
    onScrollChanged(t) {
        return super.onScrollChanged(t) || t.scrollHeightChanged;
    }
    _viewOverlaysRender(t) {
        super._viewOverlaysRender(t);
        const e = Math.min(t.scrollHeight, 1e6);
        this.domNode.setHeight(e), this.domNode.setWidth(this._contentLeft);
    }
};

}
