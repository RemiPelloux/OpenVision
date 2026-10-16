import { dr, hge } from "./arrays.js";
import { jze, n5e } from "./dynamicViewOverlay.js";
import { Tx } from "./fastDomNode.js";
import { zvg } from "./glyphMargin.css";
import { Cb, nU } from "./model_2.js";
import { Yn, ya } from "./position.js";
import { x_ } from "./qIc.js";
import { dt, qi } from "./range.js";
import { x } from "./tslib.es6.js";
import { aU, mW } from "./viewPart.js";
var H_i, P9c, L9c, $es, N9c, O9c, F9c, B9c;
export { $es, B9c, F9c, H_i, L9c, N9c, O9c, P9c };
var __wakaru_Hes_initialized = false;
export function Hes() {
if (__wakaru_Hes_initialized) return;
__wakaru_Hes_initialized = true;
"use strict";
x(), Tx(), dr(), zvg(), jze(), aU(), ya(), qi(), Cb(), H_i = class {
    constructor(e, t, n, i, r){
        this.startLineNumber = e, this.endLineNumber = t, this.className = n, this.tooltip = i, this._decorationToRenderBrand = void 0, this.zIndex = r ?? 0;
    }
}, P9c = class {
    constructor(e, t, n){
        this.className = e, this.zIndex = t, this.tooltip = n;
    }
}, L9c = class {
    constructor(){
        this.decorations = [];
    }
    add(e) {
        this.decorations.push(e);
    }
    getDecorations() {
        return this.decorations;
    }
}, $es = class extends n5e {
    _render(e, t, n) {
        const i = [];
        for(let o = e; o <= t; o++){
            const a = o - e;
            i[a] = new L9c;
        }
        if (n.length === 0) return i;
        n.sort((o, a)=>o.className === a.className ? o.startLineNumber === a.startLineNumber ? o.endLineNumber - a.endLineNumber : o.startLineNumber - a.startLineNumber : o.className < a.className ? -1 : 1);
        let r = null, s = 0;
        for(let o = 0, a = n.length; o < a; o++){
            const c = n[o], l = c.className, u = c.zIndex;
            let h = Math.max(c.startLineNumber, e) - e;
            const p = Math.min(c.endLineNumber, t) - e;
            r === l ? (h = Math.max(s + 1, h), s = Math.max(s, p)) : (r = l, s = p);
            for(let g = h; g <= s; g++)i[g].add(new P9c(l, u, c.tooltip));
        }
        return i;
    }
}, N9c = class extends mW {
    constructor(e){
        super(e), this._widgets = {}, this._context = e;
        const t = this._context.configuration.options, n = t.get(151);
        this.domNode = x_(document.createElement("div")), this.domNode.setClassName("glyph-margin-widgets"), this.domNode.setPosition("absolute"), this.domNode.setTop(0), this._lineHeight = t.get(68), this._glyphMargin = t.get(59), this._glyphMarginLeft = n.glyphMarginLeft, this._glyphMarginWidth = n.glyphMarginWidth, this._glyphMarginDecorationLaneCount = n.glyphMarginDecorationLaneCount, this._managedDomNodes = [], this._decorationGlyphsToRender = [];
    }
    dispose() {
        this._managedDomNodes = [], this._decorationGlyphsToRender = [];
        for (const e of Object.values(this._widgets)){
            const t = e.domNode.domNode;
            t.parentElement === this.domNode.domNode && t.remove();
        }
        this._widgets = {}, super.dispose();
    }
    getWidgets() {
        return Object.values(this._widgets);
    }
    onConfigurationChanged(e) {
        const t = this._context.configuration.options, n = t.get(151);
        return this._lineHeight = t.get(68), this._glyphMargin = t.get(59), this._glyphMarginLeft = n.glyphMarginLeft, this._glyphMarginWidth = n.glyphMarginWidth, this._glyphMarginDecorationLaneCount = n.glyphMarginDecorationLaneCount, !0;
    }
    onDecorationsChanged(e) {
        return !0;
    }
    onFlushed(e) {
        return !0;
    }
    onLinesChanged(e) {
        return !0;
    }
    onLinesDeleted(e) {
        return !0;
    }
    onLinesInserted(e) {
        return !0;
    }
    onScrollChanged(e) {
        return e.scrollTopChanged;
    }
    onZonesChanged(e) {
        return !0;
    }
    addWidget(e) {
        const t = x_(e.getDomNode());
        this._widgets[e.getId()] = {
            widget: e,
            preference: e.getPosition(),
            domNode: t,
            renderInfo: null
        }, t.setPosition("absolute"), t.setDisplay("none"), t.setAttribute("widgetId", e.getId()), this.domNode.appendChild(t), this.setShouldRender();
    }
    setWidgetPosition(e, t) {
        const n = this._widgets[e.getId()];
        return n.preference.lane === t.lane && n.preference.zIndex === t.zIndex && dt.equalsRange(n.preference.range, t.range) ? !1 : (n.preference = t, this.setShouldRender(), !0);
    }
    removeWidget(e) {
        const t = e.getId();
        if (this._widgets[t]) {
            const i = this._widgets[t].domNode.domNode;
            delete this._widgets[t], i.remove(), this.setShouldRender();
        }
    }
    _collectDecorationBasedGlyphRenderRequest(e, t) {
        const n = e.visibleRange.startLineNumber, i = e.visibleRange.endLineNumber, r = e.getDecorationsInViewport();
        for (const s of r){
            const o = s.options.glyphMarginClassName;
            if (!o) continue;
            const a = Math.max(s.range.startLineNumber, n), c = Math.min(s.range.endLineNumber, i), l = s.options.glyphMargin?.position ?? nU.Center, u = s.options.zIndex ?? 0;
            for(let h = a; h <= c; h++){
                const p = this._context.viewModel.coordinatesConverter.convertViewPositionToModelPosition(new Yn(h, 0)), g = this._context.viewModel.glyphLanes.getLanesAtLine(p.lineNumber).indexOf(l);
                t.push(new O9c(h, g, u, o));
            }
        }
    }
    _collectWidgetBasedGlyphRenderRequest(e, t) {
        const n = e.visibleRange.startLineNumber, i = e.visibleRange.endLineNumber;
        for (const r of Object.values(this._widgets)){
            const s = r.preference.range, { startLineNumber: o, endLineNumber: a } = this._context.viewModel.coordinatesConverter.convertModelRangeToViewRange(dt.lift(s));
            if (!o || !a || a < n || o > i) continue;
            const c = Math.max(o, n), l = this._context.viewModel.coordinatesConverter.convertViewPositionToModelPosition(new Yn(c, 0)), u = this._context.viewModel.glyphLanes.getLanesAtLine(l.lineNumber).indexOf(r.preference.lane);
            t.push(new F9c(c, u, r.preference.zIndex, r));
        }
    }
    _collectSortedGlyphRenderRequests(e) {
        const t = [];
        return this._collectDecorationBasedGlyphRenderRequest(e, t), this._collectWidgetBasedGlyphRenderRequest(e, t), t.sort((n, i)=>n.lineNumber === i.lineNumber ? n.laneIndex === i.laneIndex ? n.zIndex === i.zIndex ? i.type === n.type ? n.type === 0 && i.type === 0 ? n.className < i.className ? -1 : 1 : 0 : i.type - n.type : i.zIndex - n.zIndex : n.laneIndex - i.laneIndex : n.lineNumber - i.lineNumber), t;
    }
    prepareRender(e) {
        if (!this._glyphMargin) {
            this._decorationGlyphsToRender = [];
            return;
        }
        for (const i of Object.values(this._widgets))i.renderInfo = null;
        const t = new hge(this._collectSortedGlyphRenderRequests(e)), n = [];
        for(; t.length > 0;){
            const i = t.peek();
            if (!i) break;
            const r = t.takeWhile((o)=>o.lineNumber === i.lineNumber && o.laneIndex === i.laneIndex);
            if (!r || r.length === 0) break;
            const s = r[0];
            if (s.type === 0) {
                const o = [];
                for (const a of r){
                    if (a.zIndex !== s.zIndex || a.type !== s.type) break;
                    (o.length === 0 || o[o.length - 1] !== a.className) && o.push(a.className);
                }
                n.push(s.accept(o.join(" ")));
            } else s.widget.renderInfo = {
                lineNumber: s.lineNumber,
                laneIndex: s.laneIndex
            };
        }
        this._decorationGlyphsToRender = n;
    }
    render(e) {
        if (!this._glyphMargin) {
            for (const n of Object.values(this._widgets))n.domNode.setDisplay("none");
            for(; this._managedDomNodes.length > 0;)this._managedDomNodes.pop()?.domNode.remove();
            return;
        }
        const t = Math.round(this._glyphMarginWidth / this._glyphMarginDecorationLaneCount);
        for (const n of Object.values(this._widgets))if (!n.renderInfo) n.domNode.setDisplay("none");
        else {
            const i = e.viewportData.relativeVerticalOffset[n.renderInfo.lineNumber - e.viewportData.startLineNumber], r = this._glyphMarginLeft + n.renderInfo.laneIndex * this._lineHeight;
            n.domNode.setDisplay("block"), n.domNode.setTop(i), n.domNode.setLeft(r), n.domNode.setWidth(t), n.domNode.setHeight(this._lineHeight);
        }
        for(let n = 0; n < this._decorationGlyphsToRender.length; n++){
            const i = this._decorationGlyphsToRender[n], r = e.viewportData.relativeVerticalOffset[i.lineNumber - e.viewportData.startLineNumber], s = this._glyphMarginLeft + i.laneIndex * this._lineHeight;
            let o;
            n < this._managedDomNodes.length ? o = this._managedDomNodes[n] : (o = x_(document.createElement("div")), this._managedDomNodes.push(o), this.domNode.appendChild(o)), o.setClassName("cgmr codicon " + i.combinedClassName), o.setPosition("absolute"), o.setTop(r), o.setLeft(s), o.setWidth(t), o.setHeight(this._lineHeight);
        }
        for(; this._managedDomNodes.length > this._decorationGlyphsToRender.length;)this._managedDomNodes.pop()?.domNode.remove();
    }
}, O9c = class {
    constructor(e, t, n, i){
        this.lineNumber = e, this.laneIndex = t, this.zIndex = n, this.className = i, this.type = 0;
    }
    accept(e) {
        return new B9c(this.lineNumber, this.laneIndex, e);
    }
}, F9c = class {
    constructor(e, t, n, i){
        this.lineNumber = e, this.laneIndex = t, this.zIndex = n, this.widget = i, this.type = 1;
    }
}, B9c = class {
    constructor(e, t, n){
        this.lineNumber = e, this.laneIndex = t, this.combinedClassName = n;
    }
};

}
