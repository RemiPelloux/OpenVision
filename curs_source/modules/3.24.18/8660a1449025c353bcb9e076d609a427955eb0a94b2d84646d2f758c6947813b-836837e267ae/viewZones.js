import { Ei, xr } from "./Iwo.js";
import { i6 } from "./fastDomNode.js";
import { er, jc } from "./position.js";
import { E } from "./tslib.es6.js";
import { AQ, pz } from "./viewPart.js";
import { Ew, bDy } from "./ze.js";
var bCr, R$d;
export { R$d, bCr };
var __wakaru_yDy_initialized = false;
export function yDy() {
if (__wakaru_yDy_initialized) return;
__wakaru_yDy_initialized = true;
"use strict";
E(), i6(), Ei(), pz(), jc(), bCr = ()=>{
    throw new Error("Invalid change accessor");
}, R$d = class extends AQ {
    constructor(t){
        super(t);
        const e = this._context.configuration.options, n = e.get(151);
        this._lineHeight = e.get(68), this._contentWidth = n.contentWidth, this._contentLeft = n.contentLeft, this.domNode = Ew(document.createElement("div")), this.domNode.setClassName("view-zones"), this.domNode.setPosition("absolute"), this.domNode.setAttribute("role", "presentation"), this.domNode.setAttribute("aria-hidden", "true"), this.marginDomNode = Ew(document.createElement("div")), this.marginDomNode.setClassName("margin-view-zones"), this.marginDomNode.setPosition("absolute"), this.marginDomNode.setAttribute("role", "presentation"), this.marginDomNode.setAttribute("aria-hidden", "true"), this._zones = {};
    }
    dispose() {
        super.dispose(), this._zones = {};
    }
    _recomputeWhitespacesProps() {
        const t = this._context.viewLayout.getWhitespaces(), e = new Map;
        for (const i of t)e.set(i.id, i);
        let n = !1;
        return this._context.viewModel.changeWhitespace((i)=>{
            const r = Object.keys(this._zones);
            for(let s = 0, o = r.length; s < o; s++){
                const a = r[s], l = this._zones[a], c = this._computeWhitespaceProps(l.delegate);
                l.isInHiddenArea = c.isInHiddenArea;
                const u = e.get(a);
                u && (u.afterLineNumber !== c.afterViewLineNumber || u.height !== c.heightInPx) && (i.changeOneWhitespace(a, c.afterViewLineNumber, c.heightInPx), this._safeCallOnComputedHeight(l.delegate, c.heightInPx), n = !0);
            }
        }), n;
    }
    onConfigurationChanged(t) {
        const e = this._context.configuration.options, n = e.get(151);
        return this._lineHeight = e.get(68), this._contentWidth = n.contentWidth, this._contentLeft = n.contentLeft, t.hasChanged(68) && this._recomputeWhitespacesProps(), !0;
    }
    onLineMappingChanged(t) {
        return this._recomputeWhitespacesProps();
    }
    onLinesDeleted(t) {
        return !0;
    }
    onScrollChanged(t) {
        return t.scrollTopChanged || t.scrollWidthChanged;
    }
    onZonesChanged(t) {
        return !0;
    }
    onLinesInserted(t) {
        return !0;
    }
    _getZoneOrdinal(t) {
        return t.ordinal ?? t.afterColumn ?? 1e4;
    }
    _computeWhitespaceProps(t) {
        if (t.afterLineNumber === 0) return {
            isInHiddenArea: !1,
            afterViewLineNumber: 0,
            heightInPx: this._heightInPixels(t),
            minWidthInPx: this._minWidthInPixels(t)
        };
        let e;
        if (typeof t.afterColumn < "u") e = this._context.viewModel.model.validatePosition({
            lineNumber: t.afterLineNumber,
            column: t.afterColumn
        });
        else {
            const s = this._context.viewModel.model.validatePosition({
                lineNumber: t.afterLineNumber,
                column: 1
            }).lineNumber;
            e = new er(s, this._context.viewModel.model.getLineMaxColumn(s));
        }
        let n;
        e.column === this._context.viewModel.model.getLineMaxColumn(e.lineNumber) ? n = this._context.viewModel.model.validatePosition({
            lineNumber: e.lineNumber + 1,
            column: 1
        }) : n = this._context.viewModel.model.validatePosition({
            lineNumber: e.lineNumber,
            column: e.column + 1
        });
        const i = this._context.viewModel.coordinatesConverter.convertModelPositionToViewPosition(e, t.afterColumnAffinity, !0), r = t.showInHiddenAreas || this._context.viewModel.coordinatesConverter.modelPositionIsVisible(n);
        return {
            isInHiddenArea: !r,
            showEvenWhenNotInViewport: t.showEvenWhenNotInViewport,
            afterViewLineNumber: i.lineNumber,
            heightInPx: r ? this._heightInPixels(t) : 0,
            minWidthInPx: this._minWidthInPixels(t)
        };
    }
    changeViewZones(t) {
        let e = !1;
        return this._context.viewModel.changeWhitespace((n)=>{
            const i = {
                addZone: (r)=>(e = !0, this._addZone(n, r)),
                removeZone: (r)=>{
                    r && (e = this._removeZone(n, r) || e);
                },
                layoutZone: (r)=>{
                    r && (e = this._layoutZone(n, r) || e);
                }
            };
            bDy(t, i), i.addZone = bCr, i.removeZone = bCr, i.layoutZone = bCr;
        }), e;
    }
    _addZone(t, e) {
        const n = this._computeWhitespaceProps(e), r = {
            whitespaceId: t.insertWhitespace(n.afterViewLineNumber, this._getZoneOrdinal(e), n.heightInPx, n.minWidthInPx),
            delegate: e,
            isInHiddenArea: n.isInHiddenArea,
            isVisible: !1,
            domNode: Ew(e.domNode),
            marginDomNode: e.marginDomNode ? Ew(e.marginDomNode) : null,
            showEvenWhenNotInViewport: e.showEvenWhenNotInViewport
        };
        return this._safeCallOnComputedHeight(r.delegate, n.heightInPx), r.domNode.setPosition("absolute"), r.domNode.domNode.style.width = "100%", r.domNode.setDisplay("none"), r.domNode.setAttribute("monaco-view-zone", r.whitespaceId), this.domNode.appendChild(r.domNode), r.marginDomNode && (r.marginDomNode.setPosition("absolute"), r.marginDomNode.domNode.style.width = "100%", r.marginDomNode.setDisplay("none"), r.marginDomNode.setAttribute("monaco-view-zone", r.whitespaceId), this.marginDomNode.appendChild(r.marginDomNode)), this._zones[r.whitespaceId] = r, this.setShouldRender(), r.whitespaceId;
    }
    _removeZone(t, e) {
        if (this._zones.hasOwnProperty(e)) {
            const n = this._zones[e];
            return delete this._zones[e], t.removeWhitespace(n.whitespaceId), n.domNode.removeAttribute("monaco-visible-view-zone"), n.domNode.removeAttribute("monaco-view-zone"), n.domNode.domNode.remove(), n.marginDomNode && (n.marginDomNode.removeAttribute("monaco-visible-view-zone"), n.marginDomNode.removeAttribute("monaco-view-zone"), n.marginDomNode.domNode.remove()), this.setShouldRender(), !0;
        }
        return !1;
    }
    _layoutZone(t, e) {
        if (this._zones.hasOwnProperty(e)) {
            const n = this._zones[e], i = this._computeWhitespaceProps(n.delegate);
            return n.isInHiddenArea = i.isInHiddenArea, t.changeOneWhitespace(n.whitespaceId, i.afterViewLineNumber, i.heightInPx), this._safeCallOnComputedHeight(n.delegate, i.heightInPx), this.setShouldRender(), !0;
        }
        return !1;
    }
    shouldSuppressMouseDownOnViewZone(t) {
        return this._zones.hasOwnProperty(t) ? !!this._zones[t].delegate.suppressMouseDown : !1;
    }
    _heightInPixels(t) {
        return typeof t.heightInPx == "number" ? t.heightInPx : typeof t.heightInLines == "number" ? this._lineHeight * t.heightInLines : this._lineHeight;
    }
    _minWidthInPixels(t) {
        return typeof t.minWidthInPx == "number" ? t.minWidthInPx : 0;
    }
    _safeCallOnComputedHeight(t, e) {
        if (typeof t.onComputedHeight == "function") try {
            t.onComputedHeight(e);
        } catch (n) {
            xr(n);
        }
    }
    _safeCallOnDomNodeTop(t, e) {
        if (typeof t.onDomNodeTop == "function") try {
            t.onDomNodeTop(e);
        } catch (n) {
            xr(n);
        }
    }
    prepareRender(t) {}
    render(t) {
        const e = t.viewportData.whitespaceViewportData, n = {};
        let i = !1;
        for (const s of e){
            const o = this._zones[s.id];
            o && (o.isInHiddenArea && !o.showEvenWhenNotInViewport || (n[s.id] = s, i = !0));
        }
        const r = Object.keys(this._zones);
        for(let s = 0, o = r.length; s < o; s++){
            const a = r[s], l = this._zones[a];
            if (!l || !n.hasOwnProperty(a) && l.showEvenWhenNotInViewport) continue;
            let c = 0, u = 0, d = "none";
            n.hasOwnProperty(a) ? (c = n[a].verticalOffset - t.bigNumbersDelta, u = n[a].height, d = "block", l.isVisible || (l.domNode.setAttribute("monaco-visible-view-zone", "true"), l.isVisible = !0), this._safeCallOnDomNodeTop(l.delegate, t.getScrolledTopFromAbsoluteTop(n[a].verticalOffset))) : (l.isVisible && (l.domNode.removeAttribute("monaco-visible-view-zone"), l.isVisible = !1), this._safeCallOnDomNodeTop(l.delegate, t.getScrolledTopFromAbsoluteTop(-1e6))), l.domNode.setTop(c), l.domNode.setHeight(u), l.domNode.setDisplay(d), l.marginDomNode && (l.marginDomNode.setTop(c), l.marginDomNode.setHeight(u), l.marginDomNode.setDisplay(d));
        }
        i && (this.domNode.setWidth(Math.max(t.scrollWidth, this._contentWidth)), this.marginDomNode.setWidth(this._contentLeft));
    }
};

}
