import { jn, vf } from "./HVr.js";
import { ac, bn } from "./async.js";
import { WK } from "./domFontInfo.js";
import { Jvg, W_i } from "./domReadingContext.js";
import { Rwe, tFt } from "./mouseCursor.js";
import { Yn, ya } from "./position.js";
import { c2 } from "./qIc.js";
import { dt, qi } from "./range.js";
import { T_i, mes, pes, qOt } from "./renderingContext.js";
import { x } from "./tslib.es6.js";
import { eN, yy } from "./uint.js";
import { Npt, hW } from "./viewEvents.js";
import { Les, Pes } from "./viewLayer.js";
import { Vze, kes } from "./viewLine.js";
import { Ves, Zfn } from "./viewLineOptions.js";
import { Qvg } from "./viewLines.css";
import { aU, jge, mW } from "./viewPart.js";
var H9c, W9c, G9c, jes, V9c;
export { G9c, H9c, V9c, W9c, jes };
var __wakaru_e_g_initialized = false;
export function e_g() {
if (__wakaru_e_g_initialized) return;
__wakaru_e_g_initialized = true;
"use strict";
x(), tFt(), bn(), jn(), eN(), Qvg(), WK(), qOt(), Les(), aU(), Jvg(), kes(), ya(), qi(), Npt(), Ves(), H9c = class {
    constructor(){
        this._currentVisibleRange = new dt(1, 1, 1, 1);
    }
    getCurrentVisibleRange() {
        return this._currentVisibleRange;
    }
    setCurrentVisibleRange(e) {
        this._currentVisibleRange = e;
    }
}, W9c = class {
    constructor(e, t, n, i, r, s, o){
        this.minimalReveal = e, this.lineNumber = t, this.startColumn = n, this.endColumn = i, this.startScrollTop = r, this.stopScrollTop = s, this.scrollType = o, this.type = "range", this.minLineNumber = t, this.maxLineNumber = t;
    }
}, G9c = class {
    constructor(e, t, n, i, r){
        this.minimalReveal = e, this.selections = t, this.startScrollTop = n, this.stopScrollTop = i, this.scrollType = r, this.type = "selections";
        let s = t[0].startLineNumber, o = t[0].endLineNumber;
        for(let a = 1, c = t.length; a < c; a++){
            const l = t[a];
            s = Math.min(s, l.startLineNumber), o = Math.max(o, l.endLineNumber);
        }
        this.minLineNumber = s, this.maxLineNumber = o;
    }
}, jes = class Rkm extends mW {
    constructor(t, n, i){
        super(t);
        const r = this._context.configuration, s = this._context.configuration.options, o = s.get(52), a = s.get(152);
        this._lineHeight = s.get(68), this._typicalHalfwidthCharacterWidth = o.typicalHalfwidthCharacterWidth, this._isViewportWrapping = a.isViewportWrapping, this._revealHorizontalRightPadding = s.get(105), this._cursorSurroundingLines = s.get(29), this._cursorSurroundingLinesStyle = s.get(30), this._canUseLayerHinting = !s.get(32), this._viewLineOptions = new Zfn(r, this._context.theme.type), this._linesContent = i, this._textRangeRestingSpot = document.createElement("div"), this._visibleLines = new Pes({
            createLine: ()=>new Vze(n, this._viewLineOptions)
        }), this.domNode = this._visibleLines.domNode, jge.write(this.domNode, 8), this.domNode.setClassName(`view-lines ${Rwe}`), c2(this.domNode, o), this._maxLineWidth = 0, this._asyncUpdateLineWidths = new ac(()=>{
            this._updateLineWidthsSlow();
        }, 200), this._asyncCheckMonospaceFontAssumptions = new ac(()=>{
            this._checkMonospaceFontAssumptions();
        }, 2e3), this._lastRenderedData = new H9c, this._horizontalRevealRequest = null, this._stickyScrollEnabled = s.get(120).enabled, this._maxNumberStickyLines = s.get(120).maxLineCount;
    }
    dispose() {
        this._asyncUpdateLineWidths.dispose(), this._asyncCheckMonospaceFontAssumptions.dispose(), super.dispose();
    }
    getDomNode() {
        return this.domNode;
    }
    onConfigurationChanged(t) {
        this._visibleLines.onConfigurationChanged(t), t.hasChanged(152) && (this._maxLineWidth = 0);
        const n = this._context.configuration.options, i = n.get(52), r = n.get(152);
        return this._lineHeight = n.get(68), this._typicalHalfwidthCharacterWidth = i.typicalHalfwidthCharacterWidth, this._isViewportWrapping = r.isViewportWrapping, this._revealHorizontalRightPadding = n.get(105), this._cursorSurroundingLines = n.get(29), this._cursorSurroundingLinesStyle = n.get(30), this._canUseLayerHinting = !n.get(32), this._stickyScrollEnabled = n.get(120).enabled, this._maxNumberStickyLines = n.get(120).maxLineCount, c2(this.domNode, i), this._onOptionsMaybeChanged(), t.hasChanged(151) && (this._maxLineWidth = 0), !0;
    }
    _onOptionsMaybeChanged() {
        const t = this._context.configuration, n = new Zfn(t, this._context.theme.type);
        if (!this._viewLineOptions.equals(n)) {
            this._viewLineOptions = n;
            const i = this._visibleLines.getStartLineNumber(), r = this._visibleLines.getEndLineNumber();
            for(let s = i; s <= r; s++)this._visibleLines.getVisibleLine(s).onOptionsChanged(this._viewLineOptions);
            return !0;
        }
        return !1;
    }
    onCursorStateChanged(t) {
        const n = this._visibleLines.getStartLineNumber(), i = this._visibleLines.getEndLineNumber();
        let r = !1;
        for(let s = n; s <= i; s++)r = this._visibleLines.getVisibleLine(s).onSelectionChanged() || r;
        return r;
    }
    onDecorationsChanged(t) {
        {
            const n = this._visibleLines.getStartLineNumber(), i = this._visibleLines.getEndLineNumber();
            for(let r = n; r <= i; r++)this._visibleLines.getVisibleLine(r).onDecorationsChanged();
        }
        return !0;
    }
    onFlushed(t) {
        const n = this._visibleLines.onFlushed(t, this._viewLineOptions.useGpu);
        return this._maxLineWidth = 0, n;
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
    onRevealRangeRequest(t) {
        const n = this._computeScrollTopToRevealRange(this._context.viewLayout.getFutureViewport(), t.source, t.minimalReveal, t.range, t.selections, t.verticalType);
        if (n === -1) return !1;
        let i = this._context.viewLayout.validateScrollPosition({
            scrollTop: n
        });
        t.revealHorizontal ? t.range && t.range.startLineNumber !== t.range.endLineNumber ? i = {
            scrollTop: i.scrollTop,
            scrollLeft: 0
        } : t.range ? this._horizontalRevealRequest = new W9c(t.minimalReveal, t.range.startLineNumber, t.range.startColumn, t.range.endColumn, this._context.viewLayout.getCurrentScrollTop(), i.scrollTop, t.scrollType) : t.selections && t.selections.length > 0 && (this._horizontalRevealRequest = new G9c(t.minimalReveal, t.selections, this._context.viewLayout.getCurrentScrollTop(), i.scrollTop, t.scrollType)) : this._horizontalRevealRequest = null;
        const s = Math.abs(this._context.viewLayout.getCurrentScrollTop() - i.scrollTop) <= this._lineHeight ? 1 : t.scrollType;
        return this._context.viewModel.viewLayout.setScrollPosition(i, s), !0;
    }
    onScrollChanged(t) {
        if (this._horizontalRevealRequest && t.scrollLeftChanged && (this._horizontalRevealRequest = null), this._horizontalRevealRequest && t.scrollTopChanged) {
            const n = Math.min(this._horizontalRevealRequest.startScrollTop, this._horizontalRevealRequest.stopScrollTop), i = Math.max(this._horizontalRevealRequest.startScrollTop, this._horizontalRevealRequest.stopScrollTop);
            (t.scrollTop < n || t.scrollTop > i) && (this._horizontalRevealRequest = null);
        }
        return this.domNode.setWidth(t.scrollWidth), this._visibleLines.onScrollChanged(t) || !0;
    }
    onTokensChanged(t) {
        return this._visibleLines.onTokensChanged(t);
    }
    onZonesChanged(t) {
        return this._context.viewModel.viewLayout.setMaxLineWidth(this._maxLineWidth), this._visibleLines.onZonesChanged(t);
    }
    onThemeChanged(t) {
        return this._onOptionsMaybeChanged();
    }
    getPositionFromDOMInfo(t, n) {
        const i = this._getViewLineDomNode(t);
        if (i === null) return null;
        const r = this._getLineNumberFor(i);
        if (r === -1 || r < 1 || r > this._context.viewModel.getLineCount()) return null;
        if (this._context.viewModel.getLineMaxColumn(r) === 1) return new Yn(r, 1);
        const s = this._visibleLines.getStartLineNumber(), o = this._visibleLines.getEndLineNumber();
        if (r < s || r > o) return null;
        let a = this._visibleLines.getVisibleLine(r).getColumnOfNodeOffset(t, n);
        const c = this._context.viewModel.getLineMinColumn(r);
        return a < c && (a = c), new Yn(r, a);
    }
    _getViewLineDomNode(t) {
        for(; t && t.nodeType === 1;){
            if (t.className === Vze.CLASS_NAME) return t;
            t = t.parentElement;
        }
        return null;
    }
    _getLineNumberFor(t) {
        const n = this._visibleLines.getStartLineNumber(), i = this._visibleLines.getEndLineNumber();
        for(let r = n; r <= i; r++){
            const s = this._visibleLines.getVisibleLine(r);
            if (t === s.getDomNode()) return r;
        }
        return -1;
    }
    getLineWidth(t) {
        const n = this._visibleLines.getStartLineNumber(), i = this._visibleLines.getEndLineNumber();
        if (t < n || t > i) return -1;
        const r = new W_i(this.domNode.domNode, this._textRangeRestingSpot), s = this._visibleLines.getVisibleLine(t).getWidth(r);
        return this._updateLineWidthsSlowIfDomDidLayout(r), s;
    }
    linesVisibleRangesForRange(t, n) {
        if (this.shouldRender()) return null;
        const i = t.endLineNumber, r = dt.intersectRanges(t, this._lastRenderedData.getCurrentVisibleRange());
        if (!r) return null;
        const s = [];
        let o = 0;
        const a = new W_i(this.domNode.domNode, this._textRangeRestingSpot);
        let c = 0;
        n && (c = this._context.viewModel.coordinatesConverter.convertViewPositionToModelPosition(new Yn(r.startLineNumber, 1)).lineNumber);
        const l = this._visibleLines.getStartLineNumber(), u = this._visibleLines.getEndLineNumber();
        for(let h = r.startLineNumber; h <= r.endLineNumber; h++){
            if (h < l || h > u) continue;
            const p = h === r.startLineNumber ? r.startColumn : 1, g = h !== r.endLineNumber, f = g ? this._context.viewModel.getLineMaxColumn(h) : r.endColumn, v = this._visibleLines.getVisibleLine(h).getVisibleRangesForRange(h, p, f, a);
            if (v) {
                if (n && h < i) {
                    const b = c;
                    c = this._context.viewModel.coordinatesConverter.convertViewPositionToModelPosition(new Yn(h + 1, 1)).lineNumber, b !== c && (v.ranges[v.ranges.length - 1].width += this._typicalHalfwidthCharacterWidth);
                }
                s[o++] = new pes(v.outsideRenderedLine, h, T_i.from(v.ranges), g);
            }
        }
        return this._updateLineWidthsSlowIfDomDidLayout(a), o === 0 ? null : s;
    }
    _visibleRangesForLineRange(t, n, i) {
        if (this.shouldRender() || t < this._visibleLines.getStartLineNumber() || t > this._visibleLines.getEndLineNumber()) return null;
        const r = new W_i(this.domNode.domNode, this._textRangeRestingSpot), s = this._visibleLines.getVisibleLine(t).getVisibleRangesForRange(t, n, i, r);
        return this._updateLineWidthsSlowIfDomDidLayout(r), s;
    }
    visibleRangeForPosition(t) {
        const n = this._visibleRangesForLineRange(t.lineNumber, t.column, t.column);
        return n ? new mes(n.outsideRenderedLine, n.ranges[0].left) : null;
    }
    updateLineWidths() {
        this._updateLineWidths(!1);
    }
    _updateLineWidthsFast() {
        return this._updateLineWidths(!0);
    }
    _updateLineWidthsSlow() {
        this._updateLineWidths(!1);
    }
    _updateLineWidthsSlowIfDomDidLayout(t) {
        t.didDomLayout && (this._asyncUpdateLineWidths.isScheduled() || (this._asyncUpdateLineWidths.cancel(), this._updateLineWidthsSlow()));
    }
    _updateLineWidths(t) {
        const n = this._visibleLines.getStartLineNumber(), i = this._visibleLines.getEndLineNumber();
        let r = 1, s = !0;
        for(let o = n; o <= i; o++){
            const a = this._visibleLines.getVisibleLine(o);
            if (t && !a.getWidthIsFast()) {
                s = !1;
                continue;
            }
            r = Math.max(r, a.getWidth(null));
        }
        return s && n === 1 && i === this._context.viewModel.getLineCount() && (this._maxLineWidth = 0), this._ensureMaxLineWidth(r), s;
    }
    _checkMonospaceFontAssumptions() {
        let t = -1, n = -1;
        const i = this._visibleLines.getStartLineNumber(), r = this._visibleLines.getEndLineNumber();
        for(let s = i; s <= r; s++){
            const o = this._visibleLines.getVisibleLine(s);
            if (o.needsMonospaceFontCheck()) {
                const a = o.getWidth(null);
                a > n && (n = a, t = s);
            }
        }
        if (t !== -1 && !this._visibleLines.getVisibleLine(t).monospaceAssumptionsAreValid()) for(let s = i; s <= r; s++)this._visibleLines.getVisibleLine(s).onMonospaceAssumptionsInvalidated();
    }
    prepareRender() {
        throw new Error("Not supported");
    }
    render() {
        throw new Error("Not supported");
    }
    renderText(t) {
        if (this._visibleLines.renderLines(t), this._lastRenderedData.setCurrentVisibleRange(t.visibleRange), this.domNode.setWidth(this._context.viewLayout.getScrollWidth()), this.domNode.setHeight(Math.min(this._context.viewLayout.getScrollHeight(), 1e6)), this._horizontalRevealRequest) {
            const i = this._horizontalRevealRequest;
            if (t.startLineNumber <= i.minLineNumber && i.maxLineNumber <= t.endLineNumber) {
                this._horizontalRevealRequest = null, this.onDidRender();
                const r = this._computeScrollLeftToReveal(i);
                r && (this._isViewportWrapping || this._ensureMaxLineWidth(r.maxHorizontalOffset), this._context.viewModel.viewLayout.setScrollPosition({
                    scrollLeft: r.scrollLeft
                }, i.scrollType));
            }
        }
        if (this._updateLineWidthsFast() ? this._asyncUpdateLineWidths.cancel() : this._asyncUpdateLineWidths.schedule(), vf && !this._asyncCheckMonospaceFontAssumptions.isScheduled()) {
            const i = this._visibleLines.getStartLineNumber(), r = this._visibleLines.getEndLineNumber();
            for(let s = i; s <= r; s++)if (this._visibleLines.getVisibleLine(s).needsMonospaceFontCheck()) {
                this._asyncCheckMonospaceFontAssumptions.schedule();
                break;
            }
        }
        this._linesContent.setLayerHinting(this._canUseLayerHinting), this._linesContent.setContain("strict");
        const n = this._context.viewLayout.getCurrentScrollTop() - t.bigNumbersDelta;
        this._linesContent.setTop(-n), this._linesContent.setLeft(-this._context.viewLayout.getCurrentScrollLeft());
    }
    _ensureMaxLineWidth(t) {
        const n = Math.ceil(t);
        this._maxLineWidth < n && (this._maxLineWidth = n, this._context.viewModel.viewLayout.setMaxLineWidth(this._maxLineWidth));
    }
    _computeScrollTopToRevealRange(t, n, i, r, s, o) {
        const a = t.top, c = t.height, l = a + c;
        let u, h, p;
        if (s && s.length > 0) {
            let y = s[0].startLineNumber, T = s[0].endLineNumber;
            for(let E = 1, A = s.length; E < A; E++){
                const R = s[E];
                y = Math.min(y, R.startLineNumber), T = Math.max(T, R.endLineNumber);
            }
            u = !1, h = this._context.viewLayout.getVerticalOffsetForLineNumber(y), p = this._context.viewLayout.getVerticalOffsetForLineNumber(T) + this._lineHeight;
        } else if (r) u = !0, h = this._context.viewLayout.getVerticalOffsetForLineNumber(r.startLineNumber), p = this._context.viewLayout.getVerticalOffsetForLineNumber(r.endLineNumber) + this._lineHeight;
        else return -1;
        const g = (n === "mouse" || i) && this._cursorSurroundingLinesStyle === "default";
        let f = 0, v = 0;
        if (g) i || (f = this._lineHeight);
        else {
            const y = c / this._lineHeight, T = Math.max(this._cursorSurroundingLines, this._stickyScrollEnabled ? this._maxNumberStickyLines : 0), E = Math.min(y / 2, T);
            f = E * this._lineHeight, v = Math.max(0, E - 1) * this._lineHeight;
        }
        i || (o === hW.Simple || o === hW.Bottom) && (v += this._lineHeight), h -= f, p += v;
        let b;
        if (p - h > c) {
            if (!u) return -1;
            b = h;
        } else if (o === hW.NearTop || o === hW.NearTopIfOutsideViewport) if (o === hW.NearTopIfOutsideViewport && a <= h && p <= l) b = a;
        else {
            const y = Math.max(5 * this._lineHeight, c * .2), T = h - y, E = p - c;
            b = Math.max(E, T);
        }
        else if (o === hW.Center || o === hW.CenterIfOutsideViewport) if (o === hW.CenterIfOutsideViewport && a <= h && p <= l) b = a;
        else {
            const y = (h + p) / 2;
            b = Math.max(0, y - c / 2);
        }
        else b = this._computeMinimumScrolling(a, l, h, p, o === hW.Top, o === hW.Bottom);
        return b;
    }
    _computeScrollLeftToReveal(t) {
        const n = this._context.viewLayout.getCurrentViewport(), i = this._context.configuration.options.get(151), r = n.left, s = r + n.width - i.verticalScrollbarWidth;
        let o = yy.MAX_SAFE_SMALL_INTEGER, a = 0;
        if (t.type === "range") {
            const l = this._visibleRangesForLineRange(t.lineNumber, t.startColumn, t.endColumn);
            if (!l) return null;
            for (const u of l.ranges)o = Math.min(o, Math.round(u.left)), a = Math.max(a, Math.round(u.left + u.width));
        } else for (const l of t.selections){
            if (l.startLineNumber !== l.endLineNumber) return null;
            const u = this._visibleRangesForLineRange(l.startLineNumber, l.startColumn, l.endColumn);
            if (!u) return null;
            for (const h of u.ranges)o = Math.min(o, Math.round(h.left)), a = Math.max(a, Math.round(h.left + h.width));
        }
        return t.minimalReveal || (o = Math.max(0, o - Rkm.HORIZONTAL_EXTRA_PX), a += this._revealHorizontalRightPadding), t.type === "selections" && a - o > n.width ? null : {
            scrollLeft: this._computeMinimumScrolling(r, s, o, a),
            maxHorizontalOffset: a
        };
    }
    _computeMinimumScrolling(t, n, i, r, s, o) {
        t = t | 0, n = n | 0, i = i | 0, r = r | 0, s = !!s, o = !!o;
        const a = n - t;
        if (r - i < a) {
            if (s) return i;
            if (o) return Math.max(0, r - a);
            if (i < t) return i;
            if (r > n) return Math.max(0, r - a);
        } else return i;
        return t;
    }
}, jes.HORIZONTAL_EXTRA_PX = 30, V9c = jes;

}
