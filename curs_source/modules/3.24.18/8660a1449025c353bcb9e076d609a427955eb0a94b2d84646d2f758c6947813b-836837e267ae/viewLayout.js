import { Gt, Qe, st, tt } from "./Iwo.js";
import { GPy, aUd } from "./linesLayout.js";
import { D5, coe, rHe } from "./scrollable.js";
import { E } from "./tslib.es6.js";
import { W$o, zAe } from "./viewModel.js";
import { U$o, j7d } from "./viewModelEventDispatcher.js";
var uUd, bfn, dUd, hUd;
export { bfn, dUd, hUd, uUd };
var __wakaru_qPy_initialized = false;
export function qPy() {
if (__wakaru_qPy_initialized) return;
__wakaru_qPy_initialized = true;
"use strict";
E(), Gt(), Qe(), coe(), GPy(), zAe(), U$o(), uUd = 125, bfn = class {
    constructor(t, e, n, i){
        t = t | 0, e = e | 0, n = n | 0, i = i | 0, t < 0 && (t = 0), e < 0 && (e = 0), n < 0 && (n = 0), i < 0 && (i = 0), this.width = t, this.contentWidth = e, this.scrollWidth = Math.max(t, e), this.height = n, this.contentHeight = i, this.scrollHeight = Math.max(n, i);
    }
    equals(t) {
        return this.width === t.width && this.contentWidth === t.contentWidth && this.height === t.height && this.contentHeight === t.contentHeight;
    }
}, dUd = class extends st {
    constructor(t, e){
        super(), this._onDidContentSizeChange = this._register(new tt), this.onDidContentSizeChange = this._onDidContentSizeChange.event, this._dimensions = new bfn(0, 0, 0, 0), this._scrollable = this._register(new rHe({
            forceIntegerValues: !0,
            smoothScrollDuration: t,
            scheduleAtNextAnimationFrame: e
        })), this.onDidScroll = this._scrollable.onScroll;
    }
    getScrollable() {
        return this._scrollable;
    }
    setSmoothScrollDuration(t) {
        this._scrollable.setSmoothScrollDuration(t);
    }
    validateScrollPosition(t) {
        return this._scrollable.validateScrollPosition(t);
    }
    getScrollDimensions() {
        return this._dimensions;
    }
    setScrollDimensions(t) {
        if (this._dimensions.equals(t)) return;
        const e = this._dimensions;
        this._dimensions = t, this._scrollable.setScrollDimensions({
            width: t.width,
            scrollWidth: t.scrollWidth,
            height: t.height,
            scrollHeight: t.scrollHeight
        }, !0);
        const n = e.contentWidth !== t.contentWidth, i = e.contentHeight !== t.contentHeight;
        (n || i) && this._onDidContentSizeChange.fire(new j7d(e.contentWidth, e.contentHeight, t.contentWidth, t.contentHeight));
    }
    getFutureScrollPosition() {
        return this._scrollable.getFutureScrollPosition();
    }
    getCurrentScrollPosition() {
        return this._scrollable.getCurrentScrollPosition();
    }
    setScrollPositionNow(t) {
        this._scrollable.setScrollPositionNow(t);
    }
    setScrollPositionSmooth(t) {
        this._scrollable.setScrollPositionSmooth(t);
    }
    hasPendingScrollAnimation() {
        return this._scrollable.hasPendingScrollAnimation();
    }
}, hUd = class extends st {
    constructor(t, e, n){
        super(), this._configuration = t;
        const i = this._configuration.options, r = i.get(151), s = i.get(88);
        this._linesLayout = new aUd(e, i.get(68), s.top, s.bottom), this._maxLineWidth = 0, this._overlayWidgetsMinWidth = 0, this._scrollable = this._register(new dUd(0, n)), this._configureSmoothScrollDuration(), this._scrollable.setScrollDimensions(new bfn(r.contentWidth, 0, r.height, 0)), this.onDidScroll = this._scrollable.onDidScroll, this.onDidContentSizeChange = this._scrollable.onDidContentSizeChange, this._updateHeight();
    }
    dispose() {
        super.dispose();
    }
    getScrollable() {
        return this._scrollable.getScrollable();
    }
    onHeightMaybeChanged() {
        this._updateHeight();
    }
    _configureSmoothScrollDuration() {
        this._scrollable.setSmoothScrollDuration(this._configuration.options.get(119) ? uUd : 0);
    }
    onConfigurationChanged(t) {
        const e = this._configuration.options;
        if (t.hasChanged(68) && this._linesLayout.setLineHeight(e.get(68)), t.hasChanged(88)) {
            const n = e.get(88);
            this._linesLayout.setPadding(n.top, n.bottom);
        }
        if (t.hasChanged(151)) {
            const n = e.get(151), i = n.contentWidth, r = n.height, s = this._scrollable.getScrollDimensions(), o = s.contentWidth;
            this._scrollable.setScrollDimensions(new bfn(i, s.contentWidth, r, this._getContentHeight(i, r, o)));
        } else this._updateHeight();
        t.hasChanged(119) && this._configureSmoothScrollDuration();
    }
    onFlushed(t) {
        this._linesLayout.onFlushed(t);
    }
    onLinesDeleted(t, e) {
        this._linesLayout.onLinesDeleted(t, e);
    }
    onLinesInserted(t, e) {
        this._linesLayout.onLinesInserted(t, e);
    }
    _getHorizontalScrollbarHeight(t, e) {
        const i = this._configuration.options.get(108);
        return i.horizontal === D5.Hidden || t >= e ? 0 : i.horizontalScrollbarSize;
    }
    _getContentHeight(t, e, n) {
        const i = this._configuration.options;
        let r = this._linesLayout.getLinesTotalHeight();
        return i.get(110) ? r += Math.max(0, e - i.get(68) - i.get(88).bottom) : i.get(108).ignoreHorizontalScrollbarInContentHeight || (r += this._getHorizontalScrollbarHeight(t, n)), r;
    }
    _updateHeight() {
        const t = this._scrollable.getScrollDimensions(), e = t.width, n = t.height, i = t.contentWidth;
        this._scrollable.setScrollDimensions(new bfn(e, t.contentWidth, n, this._getContentHeight(e, n, i)));
    }
    getCurrentViewport() {
        const t = this._scrollable.getScrollDimensions(), e = this._scrollable.getCurrentScrollPosition();
        return new W$o(e.scrollTop, e.scrollLeft, t.width, t.height);
    }
    getFutureViewport() {
        const t = this._scrollable.getScrollDimensions(), e = this._scrollable.getFutureScrollPosition();
        return new W$o(e.scrollTop, e.scrollLeft, t.width, t.height);
    }
    _computeContentWidth() {
        const t = this._configuration.options, e = this._maxLineWidth, n = t.get(152), i = t.get(52), r = t.get(151);
        if (n.isViewportWrapping) {
            const s = t.get(74);
            return e > r.contentWidth + i.typicalHalfwidthCharacterWidth && s.enabled && s.side === "right" ? e + r.verticalScrollbarWidth : e;
        } else {
            const s = t.get(109) * i.typicalHalfwidthCharacterWidth, o = this._linesLayout.getWhitespaceMinWidth();
            return Math.max(e + s + r.verticalScrollbarWidth, o, this._overlayWidgetsMinWidth);
        }
    }
    setMaxLineWidth(t) {
        this._maxLineWidth = t, this._updateContentWidth();
    }
    setOverlayWidgetsMinWidth(t) {
        this._overlayWidgetsMinWidth = t, this._updateContentWidth();
    }
    _updateContentWidth() {
        const t = this._scrollable.getScrollDimensions();
        this._scrollable.setScrollDimensions(new bfn(t.width, this._computeContentWidth(), t.height, t.contentHeight)), this._updateHeight();
    }
    saveState() {
        const t = this._scrollable.getFutureScrollPosition(), e = t.scrollTop, n = this._linesLayout.getLineNumberAtOrAfterVerticalOffset(e), i = this._linesLayout.getWhitespaceAccumulatedHeightBeforeLineNumber(n);
        return {
            scrollTop: e,
            scrollTopWithoutViewZones: e - i,
            scrollLeft: t.scrollLeft
        };
    }
    changeWhitespace(t) {
        const e = this._linesLayout.changeWhitespace(t);
        return e && this.onHeightMaybeChanged(), e;
    }
    getVerticalOffsetForLineNumber(t, e = !1) {
        return this._linesLayout.getVerticalOffsetForLineNumber(t, e);
    }
    getVerticalOffsetAfterLineNumber(t, e = !1) {
        return this._linesLayout.getVerticalOffsetAfterLineNumber(t, e);
    }
    isAfterLines(t) {
        return this._linesLayout.isAfterLines(t);
    }
    isInTopPadding(t) {
        return this._linesLayout.isInTopPadding(t);
    }
    isInBottomPadding(t) {
        return this._linesLayout.isInBottomPadding(t);
    }
    getLineNumberAtVerticalOffset(t) {
        return this._linesLayout.getLineNumberAtOrAfterVerticalOffset(t);
    }
    getWhitespaceAtVerticalOffset(t) {
        return this._linesLayout.getWhitespaceAtVerticalOffset(t);
    }
    getLinesViewportData() {
        const t = this.getCurrentViewport();
        return this._linesLayout.getLinesViewportData(t.top, t.top + t.height);
    }
    getLinesViewportDataAtScrollTop(t) {
        const e = this._scrollable.getScrollDimensions();
        return t + e.height > e.scrollHeight && (t = e.scrollHeight - e.height), t < 0 && (t = 0), this._linesLayout.getLinesViewportData(t, t + e.height);
    }
    getWhitespaceViewportData() {
        const t = this.getCurrentViewport();
        return this._linesLayout.getWhitespaceViewportData(t.top, t.top + t.height);
    }
    getWhitespaces() {
        return this._linesLayout.getWhitespaces();
    }
    getContentWidth() {
        return this._scrollable.getScrollDimensions().contentWidth;
    }
    getScrollWidth() {
        return this._scrollable.getScrollDimensions().scrollWidth;
    }
    getContentHeight() {
        return this._scrollable.getScrollDimensions().contentHeight;
    }
    getScrollHeight() {
        return this._scrollable.getScrollDimensions().scrollHeight;
    }
    getCurrentScrollLeft() {
        return this._scrollable.getCurrentScrollPosition().scrollLeft;
    }
    getCurrentScrollTop() {
        return this._scrollable.getCurrentScrollPosition().scrollTop;
    }
    validateScrollPosition(t) {
        return this._scrollable.validateScrollPosition(t);
    }
    setScrollPosition(t, e) {
        e === 1 ? this._scrollable.setScrollPositionNow(t) : this._scrollable.setScrollPositionSmooth(t);
    }
    hasPendingScrollAnimation() {
        return this._scrollable.hasPendingScrollAnimation();
    }
    deltaScrollNow(t, e) {
        const n = this._scrollable.getCurrentScrollPosition();
        this._scrollable.setScrollPositionNow({
            scrollLeft: n.scrollLeft + t,
            scrollTop: n.scrollTop + e
        });
    }
};

}
