import { WK } from "./domFontInfo.js";
import { Tx } from "./fastDomNode.js";
import { c2, x_ } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { Les, Pes } from "./viewLayer.js";
import { aU, mW } from "./viewPart.js";
var Nes, k9c, w9c, C9c;
export { C9c, Nes, k9c, w9c };
var __wakaru_Bvg_initialized = false;
export function Bvg() {
if (__wakaru_Bvg_initialized) return;
__wakaru_Bvg_initialized = true;
"use strict";
x(), Tx(), WK(), Les(), aU(), Nes = class extends mW {
    constructor(e){
        super(e), this._dynamicOverlays = [], this._isFocused = !1, this._visibleLines = new Pes({
            createLine: ()=>new k9c(this._dynamicOverlays)
        }), this.domNode = this._visibleLines.domNode;
        const n = this._context.configuration.options.get(52);
        c2(this.domNode, n), this.domNode.setClassName("view-overlays");
    }
    shouldRender() {
        if (super.shouldRender()) return !0;
        for(let e = 0, t = this._dynamicOverlays.length; e < t; e++)if (this._dynamicOverlays[e].shouldRender()) return !0;
        return !1;
    }
    dispose() {
        super.dispose();
        for(let e = 0, t = this._dynamicOverlays.length; e < t; e++)this._dynamicOverlays[e].dispose();
        this._dynamicOverlays = [];
    }
    getDomNode() {
        return this.domNode;
    }
    addDynamicOverlay(e) {
        this._dynamicOverlays.push(e);
    }
    onConfigurationChanged(e) {
        this._visibleLines.onConfigurationChanged(e);
        const n = this._context.configuration.options.get(52);
        return c2(this.domNode, n), !0;
    }
    onFlushed(e) {
        return this._visibleLines.onFlushed(e);
    }
    onFocusChanged(e) {
        return this._isFocused = e.isFocused, !0;
    }
    onLinesChanged(e) {
        return this._visibleLines.onLinesChanged(e);
    }
    onLinesDeleted(e) {
        return this._visibleLines.onLinesDeleted(e);
    }
    onLinesInserted(e) {
        return this._visibleLines.onLinesInserted(e);
    }
    onScrollChanged(e) {
        return this._visibleLines.onScrollChanged(e) || !0;
    }
    onTokensChanged(e) {
        return this._visibleLines.onTokensChanged(e);
    }
    onZonesChanged(e) {
        return this._visibleLines.onZonesChanged(e);
    }
    prepareRender(e) {
        const t = this._dynamicOverlays.filter((n)=>n.shouldRender());
        for(let n = 0, i = t.length; n < i; n++){
            const r = t[n];
            r.prepareRender(e), r.onDidRender();
        }
    }
    render(e) {
        this._viewOverlaysRender(e), this.domNode.toggleClassName("focused", this._isFocused);
    }
    _viewOverlaysRender(e) {
        this._visibleLines.renderLines(e.viewportData);
    }
}, k9c = class {
    constructor(e){
        this._dynamicOverlays = e, this._domNode = null, this._renderedContent = null;
    }
    getDomNode() {
        return this._domNode ? this._domNode.domNode : null;
    }
    setDomNode(e) {
        this._domNode = x_(e);
    }
    onContentChanged() {}
    onTokensChanged() {}
    renderLine(e, t, n, i, r) {
        let s = "";
        for(let o = 0, a = this._dynamicOverlays.length; o < a; o++){
            const l = this._dynamicOverlays[o].render(i.startLineNumber, e);
            s += l ?? "";
        }
        return this._renderedContent === s ? !1 : (this._renderedContent = s, r.appendString('<div style="top:'), r.appendString(String(t)), r.appendString("px;height:"), r.appendString(String(n)), r.appendString('px;">'), r.appendString(s), r.appendString("</div>"), !0);
    }
    layoutLine(e, t, n) {
        this._domNode && (this._domNode.setTop(t), this._domNode.setHeight(n));
    }
}, w9c = class extends Nes {
    constructor(e){
        super(e);
        const n = this._context.configuration.options.get(151);
        this._contentWidth = n.contentWidth, this.domNode.setHeight(0);
    }
    onConfigurationChanged(e) {
        const n = this._context.configuration.options.get(151);
        return this._contentWidth = n.contentWidth, super.onConfigurationChanged(e) || !0;
    }
    onScrollChanged(e) {
        return super.onScrollChanged(e) || e.scrollWidthChanged;
    }
    _viewOverlaysRender(e) {
        super._viewOverlaysRender(e), this.domNode.setWidth(Math.max(e.scrollWidth, this._contentWidth));
    }
}, C9c = class extends Nes {
    constructor(e){
        super(e);
        const t = this._context.configuration.options, n = t.get(151);
        this._contentLeft = n.contentLeft, this.domNode.setClassName("margin-view-overlays"), this.domNode.setWidth(1), c2(this.domNode, t.get(52));
    }
    onConfigurationChanged(e) {
        const t = this._context.configuration.options;
        c2(this.domNode, t.get(52));
        const n = t.get(151);
        return this._contentLeft = n.contentLeft, super.onConfigurationChanged(e) || !0;
    }
    onScrollChanged(e) {
        return super.onScrollChanged(e) || e.scrollHeightChanged;
    }
    _viewOverlaysRender(e) {
        super._viewOverlaysRender(e);
        const t = Math.min(e.scrollHeight, 1e6);
        this.domNode.setHeight(t), this.domNode.setWidth(this._contentLeft);
    }
};

}
