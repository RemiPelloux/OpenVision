import { Hn } from "./dom_2.js";
import { i6 } from "./fastDomNode.js";
import { E } from "./tslib.es6.js";
import { AQ, YAe, pz } from "./viewPart.js";
import { Ew, Ex, Yde, jHo } from "./ze.js";
var $jd, Hjd, Rfn, Pfn, $Ho;
export { $Ho, $jd, Hjd, Pfn, Rfn };
var __wakaru_NMy_initialized = false;
export function NMy() {
if (__wakaru_NMy_initialized) return;
__wakaru_NMy_initialized = true;
"use strict";
E(), Hn(), i6(), pz(), $jd = class extends AQ {
    constructor(t, e){
        super(t), this._viewDomNode = e, this._widgets = {}, this.domNode = Ew(document.createElement("div")), YAe.write(this.domNode, 1), this.domNode.setClassName("contentWidgets"), this.domNode.setPosition("absolute"), this.domNode.setTop(0), this.overflowingContentWidgetsDomNode = Ew(document.createElement("div")), YAe.write(this.overflowingContentWidgetsDomNode, 2), this.overflowingContentWidgetsDomNode.setClassName("overflowingContentWidgets");
    }
    dispose() {
        super.dispose();
        for (const t of Object.values(this._widgets)){
            const e = t.domNode.domNode;
            (e.parentElement === this.domNode.domNode || e.parentElement === this.overflowingContentWidgetsDomNode.domNode) && (e.remove(), e.removeAttribute("monaco-visible-content-widget"));
        }
        this._widgets = {};
    }
    onConfigurationChanged(t) {
        const e = Object.keys(this._widgets);
        for (const n of e)this._widgets[n].onConfigurationChanged(t);
        return !0;
    }
    onDecorationsChanged(t) {
        return !0;
    }
    onFlushed(t) {
        return !0;
    }
    onLineMappingChanged(t) {
        return this._updateAnchorsViewPositions(), !0;
    }
    onLinesChanged(t) {
        return this._updateAnchorsViewPositions(), !0;
    }
    onLinesDeleted(t) {
        return this._updateAnchorsViewPositions(), !0;
    }
    onLinesInserted(t) {
        return this._updateAnchorsViewPositions(), !0;
    }
    onScrollChanged(t) {
        return !0;
    }
    onZonesChanged(t) {
        return !0;
    }
    _updateAnchorsViewPositions() {
        const t = Object.keys(this._widgets);
        for (const e of t)this._widgets[e].updateAnchorViewPosition();
    }
    addWidget(t) {
        const e = new Hjd(this._context, this._viewDomNode, t);
        this._widgets[e.id] = e, e.allowEditorOverflow ? this.overflowingContentWidgetsDomNode.appendChild(e.domNode) : this.domNode.appendChild(e.domNode), this.setShouldRender();
    }
    setWidgetPosition(t, e, n, i, r) {
        this._widgets[t.getId()].setPosition(e, n, i, r), this.setShouldRender();
    }
    removeWidget(t) {
        const e = t.getId();
        if (this._widgets.hasOwnProperty(e)) {
            const n = this._widgets[e];
            delete this._widgets[e];
            const i = n.domNode.domNode;
            i.remove(), i.removeAttribute("monaco-visible-content-widget"), this.setShouldRender();
        }
    }
    shouldSuppressMouseDownOnWidget(t) {
        return this._widgets.hasOwnProperty(t) ? this._widgets[t].suppressMouseDown : !1;
    }
    onBeforeRender(t) {
        const e = Object.keys(this._widgets);
        for (const n of e)this._widgets[n].onBeforeRender(t);
    }
    prepareRender(t) {
        const e = Object.keys(this._widgets);
        for (const n of e)this._widgets[n].prepareRender(t);
    }
    render(t) {
        const e = Object.keys(this._widgets);
        for (const n of e)this._widgets[n].render(t);
    }
}, Hjd = class {
    constructor(t, e, n){
        this._primaryAnchor = new Rfn(null, null), this._secondaryAnchor = new Rfn(null, null), this._context = t, this._viewDomNode = e, this._actual = n, this.domNode = Ew(this._actual.getDomNode()), this.id = this._actual.getId(), this.allowEditorOverflow = this._actual.allowEditorOverflow || !1, this.suppressMouseDown = this._actual.suppressMouseDown || !1;
        const i = this._context.configuration.options, r = i.get(151);
        this._fixedOverflowWidgets = i.get(44), this._contentWidth = r.contentWidth, this._contentLeft = r.contentLeft, this._lineHeight = i.get(68), this._affinity = null, this._preference = [], this._cachedDomNodeOffsetWidth = -1, this._cachedDomNodeOffsetHeight = -1, this._maxWidth = this._getMaxWidth(), this._isVisible = !1, this._renderData = null, this.domNode.setPosition(this._fixedOverflowWidgets && this.allowEditorOverflow ? "fixed" : "absolute"), this.domNode.setDisplay("none"), this.domNode.setVisibility("hidden"), this.domNode.setAttribute("widgetId", this.id), this.domNode.setMaxWidth(this._maxWidth);
    }
    onConfigurationChanged(t) {
        const e = this._context.configuration.options;
        if (this._lineHeight = e.get(68), t.hasChanged(151)) {
            const n = e.get(151);
            this._contentLeft = n.contentLeft, this._contentWidth = n.contentWidth, this._maxWidth = this._getMaxWidth();
        }
    }
    updateAnchorViewPosition() {
        this._setPosition(this._affinity, this._primaryAnchor.modelPosition, this._secondaryAnchor.modelPosition);
    }
    _setPosition(t, e, n) {
        this._affinity = t, this._primaryAnchor = i(e, this._context.viewModel, this._affinity), this._secondaryAnchor = i(n, this._context.viewModel, this._affinity);
        function i(r, s, o) {
            if (!r) return new Rfn(null, null);
            const a = s.model.validatePosition(r);
            if (s.coordinatesConverter.modelPositionIsVisible(a)) {
                const l = s.coordinatesConverter.convertModelPositionToViewPosition(a, o ?? void 0);
                return new Rfn(r, l);
            }
            return new Rfn(r, null);
        }
    }
    _getMaxWidth() {
        const t = this.domNode.domNode.ownerDocument, e = t.defaultView;
        return this.allowEditorOverflow ? e?.innerWidth || t.documentElement.offsetWidth || t.body.offsetWidth : this._contentWidth;
    }
    setPosition(t, e, n, i) {
        this._setPosition(i, t, e), this._preference = n, this._primaryAnchor.viewPosition && this._preference && this._preference.length > 0 ? this.domNode.setDisplay("block") : this.domNode.setDisplay("none"), this._cachedDomNodeOffsetWidth = -1, this._cachedDomNodeOffsetHeight = -1;
    }
    _layoutBoxInViewport(t, e, n, i) {
        const r = t.top, s = r, o = t.top + t.height, a = i.viewportHeight - o, l = r - n, c = s >= n, u = o, d = a >= n;
        let h = t.left;
        return h + e > i.scrollLeft + i.viewportWidth && (h = i.scrollLeft + i.viewportWidth - e), h < i.scrollLeft && (h = i.scrollLeft), {
            fitsAbove: c,
            aboveTop: l,
            fitsBelow: d,
            belowTop: u,
            left: h
        };
    }
    _layoutHorizontalSegmentInPage(t, e, n, i) {
        const o = Math.max(15, e.left - i), a = Math.min(e.left + e.width + i, t.width - 15), c = this._viewDomNode.domNode.ownerDocument.defaultView;
        let u = e.left + n - (c?.scrollX ?? 0);
        if (u + i > a) {
            const d = u - (a - i);
            u -= d, n -= d;
        }
        if (u < o) {
            const d = u - o;
            u -= d, n -= d;
        }
        return [
            n,
            u
        ];
    }
    _layoutBoxInPage(t, e, n, i) {
        const r = t.top - n, s = t.top + t.height, o = Ex(this._viewDomNode.domNode), a = this._viewDomNode.domNode.ownerDocument, l = a.defaultView, c = o.top + r - (l?.scrollY ?? 0), u = o.top + s - (l?.scrollY ?? 0), d = Yde(a.body), [h, p] = this._layoutHorizontalSegmentInPage(d, o, t.left - i.scrollLeft + this._contentLeft, e), g = 22, f = 22, _ = c >= g, b = u + n <= d.height - f;
        return this._fixedOverflowWidgets ? {
            fitsAbove: _,
            aboveTop: Math.max(c, g),
            fitsBelow: b,
            belowTop: u,
            left: p
        } : {
            fitsAbove: _,
            aboveTop: r,
            fitsBelow: b,
            belowTop: s,
            left: h
        };
    }
    _prepareRenderWidgetAtExactPositionOverflowing(t) {
        return new Pfn(t.top, t.left + this._contentLeft);
    }
    _getAnchorsCoordinates(t) {
        const e = r(this._primaryAnchor.viewPosition, this._affinity, this._lineHeight), n = this._secondaryAnchor.viewPosition?.lineNumber === this._primaryAnchor.viewPosition?.lineNumber ? this._secondaryAnchor.viewPosition : null, i = r(n, this._affinity, this._lineHeight);
        return {
            primary: e,
            secondary: i
        };
        function r(s, o, a) {
            if (!s) return null;
            const l = t.visibleRangeForPosition(s);
            if (!l) return null;
            const c = s.column === 1 && o === 3 ? 0 : l.left, u = t.getVerticalOffsetForLineNumber(s.lineNumber) - t.scrollTop;
            return new $Ho(u, c, a);
        }
    }
    _reduceAnchorCoordinates(t, e, n) {
        if (!e) return t;
        const i = this._context.configuration.options.get(52);
        let r = e.left;
        return r < t.left ? r = Math.max(r, t.left - n + i.typicalFullwidthCharacterWidth) : r = Math.min(r, t.left + n - i.typicalFullwidthCharacterWidth), new $Ho(t.top, r, t.height);
    }
    _prepareRenderWidget(t) {
        if (!this._preference || this._preference.length === 0) return null;
        const { primary: e, secondary: n } = this._getAnchorsCoordinates(t);
        if (!e) return {
            kind: "offViewport",
            preserveFocus: this.domNode.domNode.contains(this.domNode.domNode.ownerDocument.activeElement)
        };
        if (this._cachedDomNodeOffsetWidth === -1 || this._cachedDomNodeOffsetHeight === -1) {
            let s = null;
            if (typeof this._actual.beforeRender == "function" && (s = jHo(this._actual.beforeRender, this._actual)), s) this._cachedDomNodeOffsetWidth = s.width, this._cachedDomNodeOffsetHeight = s.height;
            else {
                const a = this.domNode.domNode.getBoundingClientRect();
                this._cachedDomNodeOffsetWidth = Math.round(a.width), this._cachedDomNodeOffsetHeight = Math.round(a.height);
            }
        }
        const i = this._reduceAnchorCoordinates(e, n, this._cachedDomNodeOffsetWidth);
        let r;
        this.allowEditorOverflow ? r = this._layoutBoxInPage(i, this._cachedDomNodeOffsetWidth, this._cachedDomNodeOffsetHeight, t) : r = this._layoutBoxInViewport(i, this._cachedDomNodeOffsetWidth, this._cachedDomNodeOffsetHeight, t);
        for(let s = 1; s <= 2; s++)for (const o of this._preference)if (o === 1) {
            if (!r) return null;
            if (s === 2 || r.fitsAbove) return {
                kind: "inViewport",
                coordinate: new Pfn(r.aboveTop, r.left),
                position: 1
            };
        } else if (o === 2) {
            if (!r) return null;
            if (s === 2 || r.fitsBelow) return {
                kind: "inViewport",
                coordinate: new Pfn(r.belowTop, r.left),
                position: 2
            };
        } else return this.allowEditorOverflow ? {
            kind: "inViewport",
            coordinate: this._prepareRenderWidgetAtExactPositionOverflowing(new Pfn(i.top, i.left)),
            position: 0
        } : {
            kind: "inViewport",
            coordinate: new Pfn(i.top, i.left),
            position: 0
        };
        return null;
    }
    onBeforeRender(t) {
        !this._primaryAnchor.viewPosition || !this._preference || this._primaryAnchor.viewPosition.lineNumber < t.startLineNumber || this._primaryAnchor.viewPosition.lineNumber > t.endLineNumber || this.domNode.setMaxWidth(this._maxWidth);
    }
    prepareRender(t) {
        this._renderData = this._prepareRenderWidget(t);
    }
    render(t) {
        if (!this._renderData || this._renderData.kind === "offViewport") {
            this._isVisible && (this.domNode.removeAttribute("monaco-visible-content-widget"), this._isVisible = !1, this._renderData?.kind === "offViewport" && this._renderData.preserveFocus ? this.domNode.setTop(-1e3) : this.domNode.setVisibility("hidden")), typeof this._actual.afterRender == "function" && jHo(this._actual.afterRender, this._actual, null, null);
            return;
        }
        this.allowEditorOverflow ? (this.domNode.setTop(this._renderData.coordinate.top), this.domNode.setLeft(this._renderData.coordinate.left)) : (this.domNode.setTop(this._renderData.coordinate.top + t.scrollTop - t.bigNumbersDelta), this.domNode.setLeft(this._renderData.coordinate.left)), this._isVisible || (this.domNode.setVisibility("inherit"), this.domNode.setAttribute("monaco-visible-content-widget", "true"), this._isVisible = !0), typeof this._actual.afterRender == "function" && jHo(this._actual.afterRender, this._actual, this._renderData.position, this._renderData.coordinate);
    }
}, Rfn = class {
    constructor(t, e){
        this.modelPosition = t, this.viewPosition = e;
    }
}, Pfn = class {
    constructor(t, e){
        this.top = t, this.left = e, this._coordinateBrand = void 0;
    }
}, $Ho = class {
    constructor(t, e, n){
        this.top = t, this.left = e, this.height = n, this._anchorCoordinateBrand = void 0;
    }
};

}
