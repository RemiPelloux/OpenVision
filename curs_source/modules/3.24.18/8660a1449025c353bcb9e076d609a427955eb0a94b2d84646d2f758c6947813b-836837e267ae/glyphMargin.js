import { Yxe, bo } from "./arrays.js";
import { Qtt, kyt } from "./dynamicViewOverlay.js";
import { i6 } from "./fastDomNode.js";
import { jMy } from "./glyphMargin.css";
import { J0, ihe } from "./model_2.js";
import { er, jc } from "./position.js";
import { Qs, qt } from "./range.js";
import { E } from "./tslib.es6.js";
import { AQ, pz } from "./viewPart.js";
import { Ew } from "./ze.js";
var mCr, Vjd, Kjd, WHo, Yjd, Xjd, Zjd, Qjd;
export { Kjd, Qjd, Vjd, WHo, Xjd, Yjd, Zjd, mCr };
var __wakaru_GHo_initialized = false;
export function GHo() {
if (__wakaru_GHo_initialized) return;
__wakaru_GHo_initialized = true;
"use strict";
E(), i6(), bo(), jMy(), kyt(), pz(), jc(), Qs(), J0(), mCr = class {
    constructor(t, e, n, i, r){
        this.startLineNumber = t, this.endLineNumber = e, this.className = n, this.tooltip = i, this._decorationToRenderBrand = void 0, this.zIndex = r ?? 0;
    }
}, Vjd = class {
    constructor(t, e, n){
        this.className = t, this.zIndex = e, this.tooltip = n;
    }
}, Kjd = class {
    constructor(){
        this.decorations = [];
    }
    add(t) {
        this.decorations.push(t);
    }
    getDecorations() {
        return this.decorations;
    }
}, WHo = class extends Qtt {
    _render(t, e, n) {
        const i = [];
        for(let o = t; o <= e; o++){
            const a = o - t;
            i[a] = new Kjd;
        }
        if (n.length === 0) return i;
        n.sort((o, a)=>o.className === a.className ? o.startLineNumber === a.startLineNumber ? o.endLineNumber - a.endLineNumber : o.startLineNumber - a.startLineNumber : o.className < a.className ? -1 : 1);
        let r = null, s = 0;
        for(let o = 0, a = n.length; o < a; o++){
            const l = n[o], c = l.className, u = l.zIndex;
            let d = Math.max(l.startLineNumber, t) - t;
            const h = Math.min(l.endLineNumber, e) - t;
            r === c ? (d = Math.max(s + 1, d), s = Math.max(s, h)) : (r = c, s = h);
            for(let p = d; p <= s; p++)i[p].add(new Vjd(c, u, l.tooltip));
        }
        return i;
    }
}, Yjd = class extends AQ {
    constructor(t){
        super(t), this._widgets = {}, this._context = t;
        const e = this._context.configuration.options, n = e.get(151);
        this.domNode = Ew(document.createElement("div")), this.domNode.setClassName("glyph-margin-widgets"), this.domNode.setPosition("absolute"), this.domNode.setTop(0), this._lineHeight = e.get(68), this._glyphMargin = e.get(59), this._glyphMarginLeft = n.glyphMarginLeft, this._glyphMarginWidth = n.glyphMarginWidth, this._glyphMarginDecorationLaneCount = n.glyphMarginDecorationLaneCount, this._managedDomNodes = [], this._decorationGlyphsToRender = [];
    }
    dispose() {
        this._managedDomNodes = [], this._decorationGlyphsToRender = [];
        for (const t of Object.values(this._widgets)){
            const e = t.domNode.domNode;
            e.parentElement === this.domNode.domNode && e.remove();
        }
        this._widgets = {}, super.dispose();
    }
    getWidgets() {
        return Object.values(this._widgets);
    }
    onConfigurationChanged(t) {
        const e = this._context.configuration.options, n = e.get(151);
        return this._lineHeight = e.get(68), this._glyphMargin = e.get(59), this._glyphMarginLeft = n.glyphMarginLeft, this._glyphMarginWidth = n.glyphMarginWidth, this._glyphMarginDecorationLaneCount = n.glyphMarginDecorationLaneCount, !0;
    }
    onDecorationsChanged(t) {
        return !0;
    }
    onFlushed(t) {
        return !0;
    }
    onLinesChanged(t) {
        return !0;
    }
    onLinesDeleted(t) {
        return !0;
    }
    onLinesInserted(t) {
        return !0;
    }
    onScrollChanged(t) {
        return t.scrollTopChanged;
    }
    onZonesChanged(t) {
        return !0;
    }
    addWidget(t) {
        const e = Ew(t.getDomNode());
        this._widgets[t.getId()] = {
            widget: t,
            preference: t.getPosition(),
            domNode: e,
            renderInfo: null
        }, e.setPosition("absolute"), e.setDisplay("none"), e.setAttribute("widgetId", t.getId()), this.domNode.appendChild(e), this.setShouldRender();
    }
    setWidgetPosition(t, e) {
        const n = this._widgets[t.getId()];
        return n.preference.lane === e.lane && n.preference.zIndex === e.zIndex && qt.equalsRange(n.preference.range, e.range) ? !1 : (n.preference = e, this.setShouldRender(), !0);
    }
    removeWidget(t) {
        const e = t.getId();
        if (this._widgets[e]) {
            const i = this._widgets[e].domNode.domNode;
            delete this._widgets[e], i.remove(), this.setShouldRender();
        }
    }
    _collectDecorationBasedGlyphRenderRequest(t, e) {
        const n = t.visibleRange.startLineNumber, i = t.visibleRange.endLineNumber, r = t.getDecorationsInViewport();
        for (const s of r){
            const o = s.options.glyphMarginClassName;
            if (!o) continue;
            const a = Math.max(s.range.startLineNumber, n), l = Math.min(s.range.endLineNumber, i), c = s.options.glyphMargin?.position ?? ihe.Center, u = s.options.zIndex ?? 0;
            for(let d = a; d <= l; d++){
                const h = this._context.viewModel.coordinatesConverter.convertViewPositionToModelPosition(new er(d, 0)), p = this._context.viewModel.glyphLanes.getLanesAtLine(h.lineNumber).indexOf(c);
                e.push(new Xjd(d, p, u, o));
            }
        }
    }
    _collectWidgetBasedGlyphRenderRequest(t, e) {
        const n = t.visibleRange.startLineNumber, i = t.visibleRange.endLineNumber;
        for (const r of Object.values(this._widgets)){
            const s = r.preference.range, { startLineNumber: o, endLineNumber: a } = this._context.viewModel.coordinatesConverter.convertModelRangeToViewRange(qt.lift(s));
            if (!o || !a || a < n || o > i) continue;
            const l = Math.max(o, n), c = this._context.viewModel.coordinatesConverter.convertViewPositionToModelPosition(new er(l, 0)), u = this._context.viewModel.glyphLanes.getLanesAtLine(c.lineNumber).indexOf(r.preference.lane);
            e.push(new Zjd(l, u, r.preference.zIndex, r));
        }
    }
    _collectSortedGlyphRenderRequests(t) {
        const e = [];
        return this._collectDecorationBasedGlyphRenderRequest(t, e), this._collectWidgetBasedGlyphRenderRequest(t, e), e.sort((n, i)=>n.lineNumber === i.lineNumber ? n.laneIndex === i.laneIndex ? n.zIndex === i.zIndex ? i.type === n.type ? n.type === 0 && i.type === 0 ? n.className < i.className ? -1 : 1 : 0 : i.type - n.type : i.zIndex - n.zIndex : n.laneIndex - i.laneIndex : n.lineNumber - i.lineNumber), e;
    }
    prepareRender(t) {
        if (!this._glyphMargin) {
            this._decorationGlyphsToRender = [];
            return;
        }
        for (const i of Object.values(this._widgets))i.renderInfo = null;
        const e = new Yxe(this._collectSortedGlyphRenderRequests(t)), n = [];
        for(; e.length > 0;){
            const i = e.peek();
            if (!i) break;
            const r = e.takeWhile((o)=>o.lineNumber === i.lineNumber && o.laneIndex === i.laneIndex);
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
    render(t) {
        if (!this._glyphMargin) {
            for (const n of Object.values(this._widgets))n.domNode.setDisplay("none");
            for(; this._managedDomNodes.length > 0;)this._managedDomNodes.pop()?.domNode.remove();
            return;
        }
        const e = Math.round(this._glyphMarginWidth / this._glyphMarginDecorationLaneCount);
        for (const n of Object.values(this._widgets))if (!n.renderInfo) n.domNode.setDisplay("none");
        else {
            const i = t.viewportData.relativeVerticalOffset[n.renderInfo.lineNumber - t.viewportData.startLineNumber], r = this._glyphMarginLeft + n.renderInfo.laneIndex * this._lineHeight;
            n.domNode.setDisplay("block"), n.domNode.setTop(i), n.domNode.setLeft(r), n.domNode.setWidth(e), n.domNode.setHeight(this._lineHeight);
        }
        for(let n = 0; n < this._decorationGlyphsToRender.length; n++){
            const i = this._decorationGlyphsToRender[n], r = t.viewportData.relativeVerticalOffset[i.lineNumber - t.viewportData.startLineNumber], s = this._glyphMarginLeft + i.laneIndex * this._lineHeight;
            let o;
            n < this._managedDomNodes.length ? o = this._managedDomNodes[n] : (o = Ew(document.createElement("div")), this._managedDomNodes.push(o), this.domNode.appendChild(o)), o.setClassName("cgmr codicon " + i.combinedClassName), o.setPosition("absolute"), o.setTop(r), o.setLeft(s), o.setWidth(e), o.setHeight(this._lineHeight);
        }
        for(; this._managedDomNodes.length > this._decorationGlyphsToRender.length;)this._managedDomNodes.pop()?.domNode.remove();
    }
}, Xjd = class {
    constructor(t, e, n, i){
        this.lineNumber = t, this.laneIndex = e, this.zIndex = n, this.className = i, this.type = 0;
    }
    accept(t) {
        return new Qjd(this.lineNumber, this.laneIndex, t);
    }
}, Zjd = class {
    constructor(t, e, n, i){
        this.lineNumber = t, this.laneIndex = e, this.zIndex = n, this.widget = i, this.type = 1;
    }
}, Qjd = class {
    constructor(t, e, n){
        this.lineNumber = t, this.laneIndex = e, this.combinedClassName = n;
    }
};

}
