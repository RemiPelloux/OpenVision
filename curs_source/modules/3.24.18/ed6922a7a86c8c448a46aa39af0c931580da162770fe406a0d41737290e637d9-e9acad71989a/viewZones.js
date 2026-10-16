import { ns, si } from "./HVr.js";
import { Tx } from "./fastDomNode.js";
import { Yn, ya } from "./position.js";
import { E_g, x_ } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { aU, mW } from "./viewPart.js";
var q_i, v6c;
export { q_i, v6c };
var __wakaru_x_g_initialized = false;
export function x_g() {
if (__wakaru_x_g_initialized) return;
__wakaru_x_g_initialized = true;
"use strict";
x(), Tx(), si(), aU(), ya(), q_i = ()=>{
    throw new Error("Invalid change accessor");
}, v6c = class extends mW {
    constructor(e){
        super(e);
        const t = this._context.configuration.options, n = t.get(151);
        this._lineHeight = t.get(68), this._contentWidth = n.contentWidth, this._contentLeft = n.contentLeft, this.domNode = x_(document.createElement("div")), this.domNode.setClassName("view-zones"), this.domNode.setPosition("absolute"), this.domNode.setAttribute("role", "presentation"), this.domNode.setAttribute("aria-hidden", "true"), this.marginDomNode = x_(document.createElement("div")), this.marginDomNode.setClassName("margin-view-zones"), this.marginDomNode.setPosition("absolute"), this.marginDomNode.setAttribute("role", "presentation"), this.marginDomNode.setAttribute("aria-hidden", "true"), this._zones = {};
    }
    dispose() {
        super.dispose(), this._zones = {};
    }
    _recomputeWhitespacesProps() {
        const e = this._context.viewLayout.getWhitespaces(), t = new Map;
        for (const i of e)t.set(i.id, i);
        let n = !1;
        return this._context.viewModel.changeWhitespace((i)=>{
            const r = Object.keys(this._zones);
            for(let s = 0, o = r.length; s < o; s++){
                const a = r[s], c = this._zones[a], l = this._computeWhitespaceProps(c.delegate);
                c.isInHiddenArea = l.isInHiddenArea;
                const u = t.get(a);
                u && (u.afterLineNumber !== l.afterViewLineNumber || u.height !== l.heightInPx) && (i.changeOneWhitespace(a, l.afterViewLineNumber, l.heightInPx), this._safeCallOnComputedHeight(c.delegate, l.heightInPx), n = !0);
            }
        }), n;
    }
    onConfigurationChanged(e) {
        const t = this._context.configuration.options, n = t.get(151);
        return this._lineHeight = t.get(68), this._contentWidth = n.contentWidth, this._contentLeft = n.contentLeft, e.hasChanged(68) && this._recomputeWhitespacesProps(), !0;
    }
    onLineMappingChanged(e) {
        return this._recomputeWhitespacesProps();
    }
    onLinesDeleted(e) {
        return !0;
    }
    onScrollChanged(e) {
        return e.scrollTopChanged || e.scrollWidthChanged;
    }
    onZonesChanged(e) {
        return !0;
    }
    onLinesInserted(e) {
        return !0;
    }
    _getZoneOrdinal(e) {
        return e.ordinal ?? e.afterColumn ?? 1e4;
    }
    _computeWhitespaceProps(e) {
        if (e.afterLineNumber === 0) return {
            isInHiddenArea: !1,
            afterViewLineNumber: 0,
            heightInPx: this._heightInPixels(e),
            minWidthInPx: this._minWidthInPixels(e)
        };
        let t;
        if (typeof e.afterColumn < "u") t = this._context.viewModel.model.validatePosition({
            lineNumber: e.afterLineNumber,
            column: e.afterColumn
        });
        else {
            const s = this._context.viewModel.model.validatePosition({
                lineNumber: e.afterLineNumber,
                column: 1
            }).lineNumber;
            t = new Yn(s, this._context.viewModel.model.getLineMaxColumn(s));
        }
        let n;
        t.column === this._context.viewModel.model.getLineMaxColumn(t.lineNumber) ? n = this._context.viewModel.model.validatePosition({
            lineNumber: t.lineNumber + 1,
            column: 1
        }) : n = this._context.viewModel.model.validatePosition({
            lineNumber: t.lineNumber,
            column: t.column + 1
        });
        const i = this._context.viewModel.coordinatesConverter.convertModelPositionToViewPosition(t, e.afterColumnAffinity, !0), r = e.showInHiddenAreas || this._context.viewModel.coordinatesConverter.modelPositionIsVisible(n);
        return {
            isInHiddenArea: !r,
            showEvenWhenNotInViewport: e.showEvenWhenNotInViewport,
            afterViewLineNumber: i.lineNumber,
            heightInPx: r ? this._heightInPixels(e) : 0,
            minWidthInPx: this._minWidthInPixels(e)
        };
    }
    changeViewZones(e) {
        let t = !1;
        return this._context.viewModel.changeWhitespace((n)=>{
            const i = {
                addZone: (r)=>(t = !0, this._addZone(n, r)),
                removeZone: (r)=>{
                    r && (t = this._removeZone(n, r) || t);
                },
                layoutZone: (r)=>{
                    r && (t = this._layoutZone(n, r) || t);
                }
            };
            E_g(e, i), i.addZone = q_i, i.removeZone = q_i, i.layoutZone = q_i;
        }), t;
    }
    _addZone(e, t) {
        const n = this._computeWhitespaceProps(t), r = {
            whitespaceId: e.insertWhitespace(n.afterViewLineNumber, this._getZoneOrdinal(t), n.heightInPx, n.minWidthInPx),
            delegate: t,
            isInHiddenArea: n.isInHiddenArea,
            isVisible: !1,
            domNode: x_(t.domNode),
            marginDomNode: t.marginDomNode ? x_(t.marginDomNode) : null,
            showEvenWhenNotInViewport: t.showEvenWhenNotInViewport
        };
        return this._safeCallOnComputedHeight(r.delegate, n.heightInPx), r.domNode.setPosition("absolute"), r.domNode.domNode.style.width = "100%", r.domNode.setDisplay("none"), r.domNode.setAttribute("monaco-view-zone", r.whitespaceId), this.domNode.appendChild(r.domNode), r.marginDomNode && (r.marginDomNode.setPosition("absolute"), r.marginDomNode.domNode.style.width = "100%", r.marginDomNode.setDisplay("none"), r.marginDomNode.setAttribute("monaco-view-zone", r.whitespaceId), this.marginDomNode.appendChild(r.marginDomNode)), this._zones[r.whitespaceId] = r, this.setShouldRender(), r.whitespaceId;
    }
    _removeZone(e, t) {
        if (this._zones.hasOwnProperty(t)) {
            const n = this._zones[t];
            return delete this._zones[t], e.removeWhitespace(n.whitespaceId), n.domNode.removeAttribute("monaco-visible-view-zone"), n.domNode.removeAttribute("monaco-view-zone"), n.domNode.domNode.remove(), n.marginDomNode && (n.marginDomNode.removeAttribute("monaco-visible-view-zone"), n.marginDomNode.removeAttribute("monaco-view-zone"), n.marginDomNode.domNode.remove()), this.setShouldRender(), !0;
        }
        return !1;
    }
    _layoutZone(e, t) {
        if (this._zones.hasOwnProperty(t)) {
            const n = this._zones[t], i = this._computeWhitespaceProps(n.delegate);
            return n.isInHiddenArea = i.isInHiddenArea, e.changeOneWhitespace(n.whitespaceId, i.afterViewLineNumber, i.heightInPx), this._safeCallOnComputedHeight(n.delegate, i.heightInPx), this.setShouldRender(), !0;
        }
        return !1;
    }
    shouldSuppressMouseDownOnViewZone(e) {
        return this._zones.hasOwnProperty(e) ? !!this._zones[e].delegate.suppressMouseDown : !1;
    }
    _heightInPixels(e) {
        return typeof e.heightInPx == "number" ? e.heightInPx : typeof e.heightInLines == "number" ? this._lineHeight * e.heightInLines : this._lineHeight;
    }
    _minWidthInPixels(e) {
        return typeof e.minWidthInPx == "number" ? e.minWidthInPx : 0;
    }
    _safeCallOnComputedHeight(e, t) {
        if (typeof e.onComputedHeight == "function") try {
            e.onComputedHeight(t);
        } catch (n) {
            ns(n);
        }
    }
    _safeCallOnDomNodeTop(e, t) {
        if (typeof e.onDomNodeTop == "function") try {
            e.onDomNodeTop(t);
        } catch (n) {
            ns(n);
        }
    }
    prepareRender(e) {}
    render(e) {
        const t = e.viewportData.whitespaceViewportData, n = {};
        let i = !1;
        for (const s of t){
            const o = this._zones[s.id];
            o && (o.isInHiddenArea && !o.showEvenWhenNotInViewport || (n[s.id] = s, i = !0));
        }
        const r = Object.keys(this._zones);
        for(let s = 0, o = r.length; s < o; s++){
            const a = r[s], c = this._zones[a];
            if (!c || !n.hasOwnProperty(a) && c.showEvenWhenNotInViewport) continue;
            let l = 0, u = 0, h = "none";
            n.hasOwnProperty(a) ? (l = n[a].verticalOffset - e.bigNumbersDelta, u = n[a].height, h = "block", c.isVisible || (c.domNode.setAttribute("monaco-visible-view-zone", "true"), c.isVisible = !0), this._safeCallOnDomNodeTop(c.delegate, e.getScrolledTopFromAbsoluteTop(n[a].verticalOffset))) : (c.isVisible && (c.domNode.removeAttribute("monaco-visible-view-zone"), c.isVisible = !1), this._safeCallOnDomNodeTop(c.delegate, e.getScrolledTopFromAbsoluteTop(-1e6))), c.domNode.setTop(l), c.domNode.setHeight(u), c.domNode.setDisplay(h), c.marginDomNode && (c.marginDomNode.setTop(l), c.marginDomNode.setHeight(u), c.marginDomNode.setDisplay(h));
        }
        i && (this.domNode.setWidth(Math.max(e.scrollWidth, this._contentWidth)), this.marginDomNode.setWidth(this._contentLeft));
    }
};

}
