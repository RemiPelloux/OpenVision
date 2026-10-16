import { Di, a_ } from "./Iwo.js";
import { Yu, qn } from "./async.js";
import { she } from "./domFontInfo.js";
import { gCr, zMy } from "./domReadingContext.js";
import { VHo, gBt } from "./mouseCursor.js";
import { er, jc } from "./position.js";
import { Qs, qt } from "./range.js";
import { Q0r, Tfn, fHo, vHo } from "./renderingContext.js";
import { E } from "./tslib.es6.js";
import { eI, lz } from "./uint.js";
import { sBt, xQ } from "./viewEvents.js";
import { FHo, OHo } from "./viewLayer.js";
import { Syt, THo } from "./viewLine.js";
import { Isi, KHo } from "./viewLineOptions.js";
import { qMy } from "./viewLines.css";
import { AQ, YAe, pz } from "./viewPart.js";
import { oB } from "./ze.js";
var t$d, n$d, i$d, YHo, r$d;
export { YHo, i$d, n$d, r$d, t$d };
var __wakaru_VMy_initialized = false;
export function VMy() {
if (__wakaru_VMy_initialized) return;
__wakaru_VMy_initialized = true;
"use strict";
E(), VHo(), qn(), Di(), lz(), qMy(), she(), Tfn(), FHo(), pz(), zMy(), THo(), jc(), Qs(), sBt(), KHo(), t$d = class {
    constructor(){
        this._currentVisibleRange = new qt(1, 1, 1, 1);
    }
    getCurrentVisibleRange() {
        return this._currentVisibleRange;
    }
    setCurrentVisibleRange(t) {
        this._currentVisibleRange = t;
    }
}, n$d = class {
    constructor(t, e, n, i, r, s, o){
        this.minimalReveal = t, this.lineNumber = e, this.startColumn = n, this.endColumn = i, this.startScrollTop = r, this.stopScrollTop = s, this.scrollType = o, this.type = "range", this.minLineNumber = e, this.maxLineNumber = e;
    }
}, i$d = class {
    constructor(t, e, n, i, r){
        this.minimalReveal = t, this.selections = e, this.startScrollTop = n, this.stopScrollTop = i, this.scrollType = r, this.type = "selections";
        let s = e[0].startLineNumber, o = e[0].endLineNumber;
        for(let a = 1, l = e.length; a < l; a++){
            const c = e[a];
            s = Math.min(s, c.startLineNumber), o = Math.max(o, c.endLineNumber);
        }
        this.minLineNumber = s, this.maxLineNumber = o;
    }
}, YHo = class tRb extends AQ {
    constructor(e, n, i){
        super(e);
        const r = this._context.configuration, s = this._context.configuration.options, o = s.get(52), a = s.get(152);
        this._lineHeight = s.get(68), this._typicalHalfwidthCharacterWidth = o.typicalHalfwidthCharacterWidth, this._isViewportWrapping = a.isViewportWrapping, this._revealHorizontalRightPadding = s.get(105), this._cursorSurroundingLines = s.get(29), this._cursorSurroundingLinesStyle = s.get(30), this._canUseLayerHinting = !s.get(32), this._viewLineOptions = new Isi(r, this._context.theme.type), this._linesContent = i, this._textRangeRestingSpot = document.createElement("div"), this._visibleLines = new OHo({
            createLine: ()=>new Syt(n, this._viewLineOptions)
        }), this.domNode = this._visibleLines.domNode, YAe.write(this.domNode, 8), this.domNode.setClassName(`view-lines ${gBt}`), oB(this.domNode, o), this._maxLineWidth = 0, this._asyncUpdateLineWidths = new Yu(()=>{
            this._updateLineWidthsSlow();
        }, 200), this._asyncCheckMonospaceFontAssumptions = new Yu(()=>{
            this._checkMonospaceFontAssumptions();
        }, 2e3), this._lastRenderedData = new t$d, this._horizontalRevealRequest = null, this._stickyScrollEnabled = s.get(120).enabled, this._maxNumberStickyLines = s.get(120).maxLineCount;
    }
    dispose() {
        this._asyncUpdateLineWidths.dispose(), this._asyncCheckMonospaceFontAssumptions.dispose(), super.dispose();
    }
    getDomNode() {
        return this.domNode;
    }
    onConfigurationChanged(e) {
        this._visibleLines.onConfigurationChanged(e), e.hasChanged(152) && (this._maxLineWidth = 0);
        const n = this._context.configuration.options, i = n.get(52), r = n.get(152);
        return this._lineHeight = n.get(68), this._typicalHalfwidthCharacterWidth = i.typicalHalfwidthCharacterWidth, this._isViewportWrapping = r.isViewportWrapping, this._revealHorizontalRightPadding = n.get(105), this._cursorSurroundingLines = n.get(29), this._cursorSurroundingLinesStyle = n.get(30), this._canUseLayerHinting = !n.get(32), this._stickyScrollEnabled = n.get(120).enabled, this._maxNumberStickyLines = n.get(120).maxLineCount, oB(this.domNode, i), this._onOptionsMaybeChanged(), e.hasChanged(151) && (this._maxLineWidth = 0), !0;
    }
    _onOptionsMaybeChanged() {
        const e = this._context.configuration, n = new Isi(e, this._context.theme.type);
        if (!this._viewLineOptions.equals(n)) {
            this._viewLineOptions = n;
            const i = this._visibleLines.getStartLineNumber(), r = this._visibleLines.getEndLineNumber();
            for(let s = i; s <= r; s++)this._visibleLines.getVisibleLine(s).onOptionsChanged(this._viewLineOptions);
            return !0;
        }
        return !1;
    }
    onCursorStateChanged(e) {
        const n = this._visibleLines.getStartLineNumber(), i = this._visibleLines.getEndLineNumber();
        let r = !1;
        for(let s = n; s <= i; s++)r = this._visibleLines.getVisibleLine(s).onSelectionChanged() || r;
        return r;
    }
    onDecorationsChanged(e) {
        {
            const n = this._visibleLines.getStartLineNumber(), i = this._visibleLines.getEndLineNumber();
            for(let r = n; r <= i; r++)this._visibleLines.getVisibleLine(r).onDecorationsChanged();
        }
        return !0;
    }
    onFlushed(e) {
        const n = this._visibleLines.onFlushed(e, this._viewLineOptions.useGpu);
        return this._maxLineWidth = 0, n;
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
    onRevealRangeRequest(e) {
        const n = this._computeScrollTopToRevealRange(this._context.viewLayout.getFutureViewport(), e.source, e.minimalReveal, e.range, e.selections, e.verticalType);
        if (n === -1) return !1;
        let i = this._context.viewLayout.validateScrollPosition({
            scrollTop: n
        });
        e.revealHorizontal ? e.range && e.range.startLineNumber !== e.range.endLineNumber ? i = {
            scrollTop: i.scrollTop,
            scrollLeft: 0
        } : e.range ? this._horizontalRevealRequest = new n$d(e.minimalReveal, e.range.startLineNumber, e.range.startColumn, e.range.endColumn, this._context.viewLayout.getCurrentScrollTop(), i.scrollTop, e.scrollType) : e.selections && e.selections.length > 0 && (this._horizontalRevealRequest = new i$d(e.minimalReveal, e.selections, this._context.viewLayout.getCurrentScrollTop(), i.scrollTop, e.scrollType)) : this._horizontalRevealRequest = null;
        const s = Math.abs(this._context.viewLayout.getCurrentScrollTop() - i.scrollTop) <= this._lineHeight ? 1 : e.scrollType;
        return this._context.viewModel.viewLayout.setScrollPosition(i, s), !0;
    }
    onScrollChanged(e) {
        if (this._horizontalRevealRequest && e.scrollLeftChanged && (this._horizontalRevealRequest = null), this._horizontalRevealRequest && e.scrollTopChanged) {
            const n = Math.min(this._horizontalRevealRequest.startScrollTop, this._horizontalRevealRequest.stopScrollTop), i = Math.max(this._horizontalRevealRequest.startScrollTop, this._horizontalRevealRequest.stopScrollTop);
            (e.scrollTop < n || e.scrollTop > i) && (this._horizontalRevealRequest = null);
        }
        return this.domNode.setWidth(e.scrollWidth), this._visibleLines.onScrollChanged(e) || !0;
    }
    onTokensChanged(e) {
        return this._visibleLines.onTokensChanged(e);
    }
    onZonesChanged(e) {
        return this._context.viewModel.viewLayout.setMaxLineWidth(this._maxLineWidth), this._visibleLines.onZonesChanged(e);
    }
    onThemeChanged(e) {
        return this._onOptionsMaybeChanged();
    }
    getPositionFromDOMInfo(e, n) {
        const i = this._getViewLineDomNode(e);
        if (i === null) return null;
        const r = this._getLineNumberFor(i);
        if (r === -1 || r < 1 || r > this._context.viewModel.getLineCount()) return null;
        if (this._context.viewModel.getLineMaxColumn(r) === 1) return new er(r, 1);
        const s = this._visibleLines.getStartLineNumber(), o = this._visibleLines.getEndLineNumber();
        if (r < s || r > o) return null;
        let a = this._visibleLines.getVisibleLine(r).getColumnOfNodeOffset(e, n);
        const l = this._context.viewModel.getLineMinColumn(r);
        return a < l && (a = l), new er(r, a);
    }
    _getViewLineDomNode(e) {
        for(; e && e.nodeType === 1;){
            if (e.className === Syt.CLASS_NAME) return e;
            e = e.parentElement;
        }
        return null;
    }
    _getLineNumberFor(e) {
        const n = this._visibleLines.getStartLineNumber(), i = this._visibleLines.getEndLineNumber();
        for(let r = n; r <= i; r++){
            const s = this._visibleLines.getVisibleLine(r);
            if (e === s.getDomNode()) return r;
        }
        return -1;
    }
    getLineWidth(e) {
        const n = this._visibleLines.getStartLineNumber(), i = this._visibleLines.getEndLineNumber();
        if (e < n || e > i) return -1;
        const r = new gCr(this.domNode.domNode, this._textRangeRestingSpot), s = this._visibleLines.getVisibleLine(e).getWidth(r);
        return this._updateLineWidthsSlowIfDomDidLayout(r), s;
    }
    linesVisibleRangesForRange(e, n) {
        if (this.shouldRender()) return null;
        const i = e.endLineNumber, r = qt.intersectRanges(e, this._lastRenderedData.getCurrentVisibleRange());
        if (!r) return null;
        const s = [];
        let o = 0;
        const a = new gCr(this.domNode.domNode, this._textRangeRestingSpot);
        let l = 0;
        n && (l = this._context.viewModel.coordinatesConverter.convertViewPositionToModelPosition(new er(r.startLineNumber, 1)).lineNumber);
        const c = this._visibleLines.getStartLineNumber(), u = this._visibleLines.getEndLineNumber();
        for(let d = r.startLineNumber; d <= r.endLineNumber; d++){
            if (d < c || d > u) continue;
            const h = d === r.startLineNumber ? r.startColumn : 1, p = d !== r.endLineNumber, g = p ? this._context.viewModel.getLineMaxColumn(d) : r.endColumn, f = this._visibleLines.getVisibleLine(d).getVisibleRangesForRange(d, h, g, a);
            if (f) {
                if (n && d < i) {
                    const _ = l;
                    l = this._context.viewModel.coordinatesConverter.convertViewPositionToModelPosition(new er(d + 1, 1)).lineNumber, _ !== l && (f.ranges[f.ranges.length - 1].width += this._typicalHalfwidthCharacterWidth);
                }
                s[o++] = new fHo(f.outsideRenderedLine, d, Q0r.from(f.ranges), p);
            }
        }
        return this._updateLineWidthsSlowIfDomDidLayout(a), o === 0 ? null : s;
    }
    _visibleRangesForLineRange(e, n, i) {
        if (this.shouldRender() || e < this._visibleLines.getStartLineNumber() || e > this._visibleLines.getEndLineNumber()) return null;
        const r = new gCr(this.domNode.domNode, this._textRangeRestingSpot), s = this._visibleLines.getVisibleLine(e).getVisibleRangesForRange(e, n, i, r);
        return this._updateLineWidthsSlowIfDomDidLayout(r), s;
    }
    visibleRangeForPosition(e) {
        const n = this._visibleRangesForLineRange(e.lineNumber, e.column, e.column);
        return n ? new vHo(n.outsideRenderedLine, n.ranges[0].left) : null;
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
    _updateLineWidthsSlowIfDomDidLayout(e) {
        e.didDomLayout && (this._asyncUpdateLineWidths.isScheduled() || (this._asyncUpdateLineWidths.cancel(), this._updateLineWidthsSlow()));
    }
    _updateLineWidths(e) {
        const n = this._visibleLines.getStartLineNumber(), i = this._visibleLines.getEndLineNumber();
        let r = 1, s = !0;
        for(let o = n; o <= i; o++){
            const a = this._visibleLines.getVisibleLine(o);
            if (e && !a.getWidthIsFast()) {
                s = !1;
                continue;
            }
            r = Math.max(r, a.getWidth(null));
        }
        return s && n === 1 && i === this._context.viewModel.getLineCount() && (this._maxLineWidth = 0), this._ensureMaxLineWidth(r), s;
    }
    _checkMonospaceFontAssumptions() {
        let e = -1, n = -1;
        const i = this._visibleLines.getStartLineNumber(), r = this._visibleLines.getEndLineNumber();
        for(let s = i; s <= r; s++){
            const o = this._visibleLines.getVisibleLine(s);
            if (o.needsMonospaceFontCheck()) {
                const a = o.getWidth(null);
                a > n && (n = a, e = s);
            }
        }
        if (e !== -1 && !this._visibleLines.getVisibleLine(e).monospaceAssumptionsAreValid()) for(let s = i; s <= r; s++)this._visibleLines.getVisibleLine(s).onMonospaceAssumptionsInvalidated();
    }
    prepareRender() {
        throw new Error("Not supported");
    }
    render() {
        throw new Error("Not supported");
    }
    renderText(e) {
        if (this._visibleLines.renderLines(e), this._lastRenderedData.setCurrentVisibleRange(e.visibleRange), this.domNode.setWidth(this._context.viewLayout.getScrollWidth()), this.domNode.setHeight(Math.min(this._context.viewLayout.getScrollHeight(), 1e6)), this._horizontalRevealRequest) {
            const i = this._horizontalRevealRequest;
            if (e.startLineNumber <= i.minLineNumber && i.maxLineNumber <= e.endLineNumber) {
                this._horizontalRevealRequest = null, this.onDidRender();
                const r = this._computeScrollLeftToReveal(i);
                r && (this._isViewportWrapping || this._ensureMaxLineWidth(r.maxHorizontalOffset), this._context.viewModel.viewLayout.setScrollPosition({
                    scrollLeft: r.scrollLeft
                }, i.scrollType));
            }
        }
        if (this._updateLineWidthsFast() ? this._asyncUpdateLineWidths.cancel() : this._asyncUpdateLineWidths.schedule(), a_ && !this._asyncCheckMonospaceFontAssumptions.isScheduled()) {
            const i = this._visibleLines.getStartLineNumber(), r = this._visibleLines.getEndLineNumber();
            for(let s = i; s <= r; s++)if (this._visibleLines.getVisibleLine(s).needsMonospaceFontCheck()) {
                this._asyncCheckMonospaceFontAssumptions.schedule();
                break;
            }
        }
        this._linesContent.setLayerHinting(this._canUseLayerHinting), this._linesContent.setContain("strict");
        const n = this._context.viewLayout.getCurrentScrollTop() - e.bigNumbersDelta;
        this._linesContent.setTop(-n), this._linesContent.setLeft(-this._context.viewLayout.getCurrentScrollLeft());
    }
    _ensureMaxLineWidth(e) {
        const n = Math.ceil(e);
        this._maxLineWidth < n && (this._maxLineWidth = n, this._context.viewModel.viewLayout.setMaxLineWidth(this._maxLineWidth));
    }
    _computeScrollTopToRevealRange(e, n, i, r, s, o) {
        const a = e.top, l = e.height, c = a + l;
        let u, d, h;
        if (s && s.length > 0) {
            let b = s[0].startLineNumber, y = s[0].endLineNumber;
            for(let S = 1, k = s.length; S < k; S++){
                const C = s[S];
                b = Math.min(b, C.startLineNumber), y = Math.max(y, C.endLineNumber);
            }
            u = !1, d = this._context.viewLayout.getVerticalOffsetForLineNumber(b), h = this._context.viewLayout.getVerticalOffsetForLineNumber(y) + this._lineHeight;
        } else if (r) u = !0, d = this._context.viewLayout.getVerticalOffsetForLineNumber(r.startLineNumber), h = this._context.viewLayout.getVerticalOffsetForLineNumber(r.endLineNumber) + this._lineHeight;
        else return -1;
        const p = (n === "mouse" || i) && this._cursorSurroundingLinesStyle === "default";
        let g = 0, f = 0;
        if (p) i || (g = this._lineHeight);
        else {
            const b = l / this._lineHeight, y = Math.max(this._cursorSurroundingLines, this._stickyScrollEnabled ? this._maxNumberStickyLines : 0), S = Math.min(b / 2, y);
            g = S * this._lineHeight, f = Math.max(0, S - 1) * this._lineHeight;
        }
        i || (o === xQ.Simple || o === xQ.Bottom) && (f += this._lineHeight), d -= g, h += f;
        let _;
        if (h - d > l) {
            if (!u) return -1;
            _ = d;
        } else if (o === xQ.NearTop || o === xQ.NearTopIfOutsideViewport) if (o === xQ.NearTopIfOutsideViewport && a <= d && h <= c) _ = a;
        else {
            const b = Math.max(5 * this._lineHeight, l * .2), y = d - b, S = h - l;
            _ = Math.max(S, y);
        }
        else if (o === xQ.Center || o === xQ.CenterIfOutsideViewport) if (o === xQ.CenterIfOutsideViewport && a <= d && h <= c) _ = a;
        else {
            const b = (d + h) / 2;
            _ = Math.max(0, b - l / 2);
        }
        else _ = this._computeMinimumScrolling(a, c, d, h, o === xQ.Top, o === xQ.Bottom);
        return _;
    }
    _computeScrollLeftToReveal(e) {
        const n = this._context.viewLayout.getCurrentViewport(), i = this._context.configuration.options.get(151), r = n.left, s = r + n.width - i.verticalScrollbarWidth;
        let o = eI.MAX_SAFE_SMALL_INTEGER, a = 0;
        if (e.type === "range") {
            const c = this._visibleRangesForLineRange(e.lineNumber, e.startColumn, e.endColumn);
            if (!c) return null;
            for (const u of c.ranges)o = Math.min(o, Math.round(u.left)), a = Math.max(a, Math.round(u.left + u.width));
        } else for (const c of e.selections){
            if (c.startLineNumber !== c.endLineNumber) return null;
            const u = this._visibleRangesForLineRange(c.startLineNumber, c.startColumn, c.endColumn);
            if (!u) return null;
            for (const d of u.ranges)o = Math.min(o, Math.round(d.left)), a = Math.max(a, Math.round(d.left + d.width));
        }
        return e.minimalReveal || (o = Math.max(0, o - tRb.HORIZONTAL_EXTRA_PX), a += this._revealHorizontalRightPadding), e.type === "selections" && a - o > n.width ? null : {
            scrollLeft: this._computeMinimumScrolling(r, s, o, a),
            maxHorizontalOffset: a
        };
    }
    _computeMinimumScrolling(e, n, i, r, s, o) {
        e = e | 0, n = n | 0, i = i | 0, r = r | 0, s = !!s, o = !!o;
        const a = n - e;
        if (r - i < a) {
            if (s) return i;
            if (o) return Math.max(0, r - a);
            if (i < e) return i;
            if (r > n) return Math.max(0, r - a);
        } else return i;
        return e;
    }
}, YHo.HORIZONTAL_EXTRA_PX = 30, r$d = YHo;

}
