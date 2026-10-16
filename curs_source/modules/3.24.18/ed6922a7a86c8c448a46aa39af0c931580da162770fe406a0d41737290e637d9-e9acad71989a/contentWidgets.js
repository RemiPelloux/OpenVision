import { en } from "./dom_2.js";
import { Tx } from "./fastDomNode.js";
import { Fes, LV, Nk, x_ } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { aU, jge, mW } from "./viewPart.js";
var x9c, I9c, QOt, JOt, Bes;
export { Bes, I9c, JOt, QOt, x9c };
var __wakaru_Hvg_initialized = false;
export function Hvg() {
if (__wakaru_Hvg_initialized) return;
__wakaru_Hvg_initialized = true;
"use strict";
x(), en(), Tx(), aU(), x9c = class extends mW {
    constructor(e, t){
        super(e), this._viewDomNode = t, this._widgets = {}, this.domNode = x_(document.createElement("div")), jge.write(this.domNode, 1), this.domNode.setClassName("contentWidgets"), this.domNode.setPosition("absolute"), this.domNode.setTop(0), this.overflowingContentWidgetsDomNode = x_(document.createElement("div")), jge.write(this.overflowingContentWidgetsDomNode, 2), this.overflowingContentWidgetsDomNode.setClassName("overflowingContentWidgets");
    }
    dispose() {
        super.dispose();
        for (const e of Object.values(this._widgets)){
            const t = e.domNode.domNode;
            (t.parentElement === this.domNode.domNode || t.parentElement === this.overflowingContentWidgetsDomNode.domNode) && (t.remove(), t.removeAttribute("monaco-visible-content-widget"));
        }
        this._widgets = {};
    }
    onConfigurationChanged(e) {
        const t = Object.keys(this._widgets);
        for (const n of t)this._widgets[n].onConfigurationChanged(e);
        return !0;
    }
    onDecorationsChanged(e) {
        return !0;
    }
    onFlushed(e) {
        return !0;
    }
    onLineMappingChanged(e) {
        return this._updateAnchorsViewPositions(), !0;
    }
    onLinesChanged(e) {
        return this._updateAnchorsViewPositions(), !0;
    }
    onLinesDeleted(e) {
        return this._updateAnchorsViewPositions(), !0;
    }
    onLinesInserted(e) {
        return this._updateAnchorsViewPositions(), !0;
    }
    onScrollChanged(e) {
        return !0;
    }
    onZonesChanged(e) {
        return !0;
    }
    _updateAnchorsViewPositions() {
        const e = Object.keys(this._widgets);
        for (const t of e)this._widgets[t].updateAnchorViewPosition();
    }
    addWidget(e) {
        const t = new I9c(this._context, this._viewDomNode, e);
        this._widgets[t.id] = t, t.allowEditorOverflow ? this.overflowingContentWidgetsDomNode.appendChild(t.domNode) : this.domNode.appendChild(t.domNode), this.setShouldRender();
    }
    setWidgetPosition(e, t, n, i, r) {
        this._widgets[e.getId()].setPosition(t, n, i, r), this.setShouldRender();
    }
    removeWidget(e) {
        const t = e.getId();
        if (this._widgets.hasOwnProperty(t)) {
            const n = this._widgets[t];
            delete this._widgets[t];
            const i = n.domNode.domNode;
            i.remove(), i.removeAttribute("monaco-visible-content-widget"), this.setShouldRender();
        }
    }
    shouldSuppressMouseDownOnWidget(e) {
        return this._widgets.hasOwnProperty(e) ? this._widgets[e].suppressMouseDown : !1;
    }
    onBeforeRender(e) {
        const t = Object.keys(this._widgets);
        for (const n of t)this._widgets[n].onBeforeRender(e);
    }
    prepareRender(e) {
        const t = Object.keys(this._widgets);
        for (const n of t)this._widgets[n].prepareRender(e);
    }
    render(e) {
        const t = Object.keys(this._widgets);
        for (const n of t)this._widgets[n].render(e);
    }
}, I9c = class {
    constructor(e, t, n){
        this._primaryAnchor = new QOt(null, null), this._secondaryAnchor = new QOt(null, null), this._context = e, this._viewDomNode = t, this._actual = n, this.domNode = x_(this._actual.getDomNode()), this.id = this._actual.getId(), this.allowEditorOverflow = this._actual.allowEditorOverflow || !1, this.suppressMouseDown = this._actual.suppressMouseDown || !1;
        const i = this._context.configuration.options, r = i.get(151);
        this._fixedOverflowWidgets = i.get(44), this._contentWidth = r.contentWidth, this._contentLeft = r.contentLeft, this._lineHeight = i.get(68), this._affinity = null, this._preference = [], this._cachedDomNodeOffsetWidth = -1, this._cachedDomNodeOffsetHeight = -1, this._maxWidth = this._getMaxWidth(), this._isVisible = !1, this._renderData = null, this.domNode.setPosition(this._fixedOverflowWidgets && this.allowEditorOverflow ? "fixed" : "absolute"), this.domNode.setDisplay("none"), this.domNode.setVisibility("hidden"), this.domNode.setAttribute("widgetId", this.id), this.domNode.setMaxWidth(this._maxWidth);
    }
    onConfigurationChanged(e) {
        const t = this._context.configuration.options;
        if (this._lineHeight = t.get(68), e.hasChanged(151)) {
            const n = t.get(151);
            this._contentLeft = n.contentLeft, this._contentWidth = n.contentWidth, this._maxWidth = this._getMaxWidth();
        }
    }
    updateAnchorViewPosition() {
        this._setPosition(this._affinity, this._primaryAnchor.modelPosition, this._secondaryAnchor.modelPosition);
    }
    _setPosition(e, t, n) {
        this._affinity = e, this._primaryAnchor = i(t, this._context.viewModel, this._affinity), this._secondaryAnchor = i(n, this._context.viewModel, this._affinity);
        function i(r, s, o) {
            if (!r) return new QOt(null, null);
            const a = s.model.validatePosition(r);
            if (s.coordinatesConverter.modelPositionIsVisible(a)) {
                const c = s.coordinatesConverter.convertModelPositionToViewPosition(a, o ?? void 0);
                return new QOt(r, c);
            }
            return new QOt(r, null);
        }
    }
    _getMaxWidth() {
        const e = this.domNode.domNode.ownerDocument, t = e.defaultView;
        return this.allowEditorOverflow ? t?.innerWidth || e.documentElement.offsetWidth || e.body.offsetWidth : this._contentWidth;
    }
    setPosition(e, t, n, i) {
        this._setPosition(i, e, t), this._preference = n, this._primaryAnchor.viewPosition && this._preference && this._preference.length > 0 ? this.domNode.setDisplay("block") : this.domNode.setDisplay("none"), this._cachedDomNodeOffsetWidth = -1, this._cachedDomNodeOffsetHeight = -1;
    }
    _layoutBoxInViewport(e, t, n, i) {
        const r = e.top, s = r, o = e.top + e.height, a = i.viewportHeight - o, c = r - n, l = s >= n, u = o, h = a >= n;
        let p = e.left;
        return p + t > i.scrollLeft + i.viewportWidth && (p = i.scrollLeft + i.viewportWidth - t), p < i.scrollLeft && (p = i.scrollLeft), {
            fitsAbove: l,
            aboveTop: c,
            fitsBelow: h,
            belowTop: u,
            left: p
        };
    }
    _layoutHorizontalSegmentInPage(e, t, n, i) {
        const o = Math.max(15, t.left - i), a = Math.min(t.left + t.width + i, e.width - 15), l = this._viewDomNode.domNode.ownerDocument.defaultView;
        let u = t.left + n - (l?.scrollX ?? 0);
        if (u + i > a) {
            const h = u - (a - i);
            u -= h, n -= h;
        }
        if (u < o) {
            const h = u - o;
            u -= h, n -= h;
        }
        return [
            n,
            u
        ];
    }
    _layoutBoxInPage(e, t, n, i) {
        const r = e.top - n, s = e.top + e.height, o = Nk(this._viewDomNode.domNode), a = this._viewDomNode.domNode.ownerDocument, c = a.defaultView, l = o.top + r - (c?.scrollY ?? 0), u = o.top + s - (c?.scrollY ?? 0), h = LV(a.body), [p, g] = this._layoutHorizontalSegmentInPage(h, o, e.left - i.scrollLeft + this._contentLeft, t), f = 22, v = 22, b = l >= f, y = u + n <= h.height - v;
        return this._fixedOverflowWidgets ? {
            fitsAbove: b,
            aboveTop: Math.max(l, f),
            fitsBelow: y,
            belowTop: u,
            left: g
        } : {
            fitsAbove: b,
            aboveTop: r,
            fitsBelow: y,
            belowTop: s,
            left: p
        };
    }
    _prepareRenderWidgetAtExactPositionOverflowing(e) {
        return new JOt(e.top, e.left + this._contentLeft);
    }
    _getAnchorsCoordinates(e) {
        const t = r(this._primaryAnchor.viewPosition, this._affinity, this._lineHeight), n = this._secondaryAnchor.viewPosition?.lineNumber === this._primaryAnchor.viewPosition?.lineNumber ? this._secondaryAnchor.viewPosition : null, i = r(n, this._affinity, this._lineHeight);
        return {
            primary: t,
            secondary: i
        };
        function r(s, o, a) {
            if (!s) return null;
            const c = e.visibleRangeForPosition(s);
            if (!c) return null;
            const l = s.column === 1 && o === 3 ? 0 : c.left, u = e.getVerticalOffsetForLineNumber(s.lineNumber) - e.scrollTop;
            return new Bes(u, l, a);
        }
    }
    _reduceAnchorCoordinates(e, t, n) {
        if (!t) return e;
        const i = this._context.configuration.options.get(52);
        let r = t.left;
        return r < e.left ? r = Math.max(r, e.left - n + i.typicalFullwidthCharacterWidth) : r = Math.min(r, e.left + n - i.typicalFullwidthCharacterWidth), new Bes(e.top, r, e.height);
    }
    _prepareRenderWidget(e) {
        if (!this._preference || this._preference.length === 0) return null;
        const { primary: t, secondary: n } = this._getAnchorsCoordinates(e);
        if (!t) return {
            kind: "offViewport",
            preserveFocus: this.domNode.domNode.contains(this.domNode.domNode.ownerDocument.activeElement)
        };
        if (this._cachedDomNodeOffsetWidth === -1 || this._cachedDomNodeOffsetHeight === -1) {
            let s = null;
            if (typeof this._actual.beforeRender == "function" && (s = Fes(this._actual.beforeRender, this._actual)), s) this._cachedDomNodeOffsetWidth = s.width, this._cachedDomNodeOffsetHeight = s.height;
            else {
                const a = this.domNode.domNode.getBoundingClientRect();
                this._cachedDomNodeOffsetWidth = Math.round(a.width), this._cachedDomNodeOffsetHeight = Math.round(a.height);
            }
        }
        const i = this._reduceAnchorCoordinates(t, n, this._cachedDomNodeOffsetWidth);
        let r;
        this.allowEditorOverflow ? r = this._layoutBoxInPage(i, this._cachedDomNodeOffsetWidth, this._cachedDomNodeOffsetHeight, e) : r = this._layoutBoxInViewport(i, this._cachedDomNodeOffsetWidth, this._cachedDomNodeOffsetHeight, e);
        for(let s = 1; s <= 2; s++)for (const o of this._preference)if (o === 1) {
            if (!r) return null;
            if (s === 2 || r.fitsAbove) return {
                kind: "inViewport",
                coordinate: new JOt(r.aboveTop, r.left),
                position: 1
            };
        } else if (o === 2) {
            if (!r) return null;
            if (s === 2 || r.fitsBelow) return {
                kind: "inViewport",
                coordinate: new JOt(r.belowTop, r.left),
                position: 2
            };
        } else return this.allowEditorOverflow ? {
            kind: "inViewport",
            coordinate: this._prepareRenderWidgetAtExactPositionOverflowing(new JOt(i.top, i.left)),
            position: 0
        } : {
            kind: "inViewport",
            coordinate: new JOt(i.top, i.left),
            position: 0
        };
        return null;
    }
    onBeforeRender(e) {
        !this._primaryAnchor.viewPosition || !this._preference || this._primaryAnchor.viewPosition.lineNumber < e.startLineNumber || this._primaryAnchor.viewPosition.lineNumber > e.endLineNumber || this.domNode.setMaxWidth(this._maxWidth);
    }
    prepareRender(e) {
        this._renderData = this._prepareRenderWidget(e);
    }
    render(e) {
        if (!this._renderData || this._renderData.kind === "offViewport") {
            this._isVisible && (this.domNode.removeAttribute("monaco-visible-content-widget"), this._isVisible = !1, this._renderData?.kind === "offViewport" && this._renderData.preserveFocus ? this.domNode.setTop(-1e3) : this.domNode.setVisibility("hidden")), typeof this._actual.afterRender == "function" && Fes(this._actual.afterRender, this._actual, null, null);
            return;
        }
        this.allowEditorOverflow ? (this.domNode.setTop(this._renderData.coordinate.top), this.domNode.setLeft(this._renderData.coordinate.left)) : (this.domNode.setTop(this._renderData.coordinate.top + e.scrollTop - e.bigNumbersDelta), this.domNode.setLeft(this._renderData.coordinate.left)), this._isVisible || (this.domNode.setVisibility("inherit"), this.domNode.setAttribute("monaco-visible-content-widget", "true"), this._isVisible = !0), typeof this._actual.afterRender == "function" && Fes(this._actual.afterRender, this._actual, this._renderData.position, this._renderData.coordinate);
    }
}, QOt = class {
    constructor(e, t){
        this.modelPosition = e, this.viewPosition = t;
    }
}, JOt = class {
    constructor(e, t){
        this.top = e, this.left = t, this._coordinateBrand = void 0;
    }
}, Bes = class {
    constructor(e, t, n){
        this.top = e, this.left = t, this.height = n, this._anchorCoordinateBrand = void 0;
    }
};

}
