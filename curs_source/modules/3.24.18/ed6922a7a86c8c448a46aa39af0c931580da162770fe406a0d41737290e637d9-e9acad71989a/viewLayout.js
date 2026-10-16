import { Se, bt, ve, we } from "./HVr.js";
import { Qfg, qBc } from "./linesLayout.js";
import { Q1, e6, mwe } from "./scrollable.js";
import { x } from "./tslib.es6.js";
import { Cle, WJr } from "./viewModel.js";
import { p_i, xBc } from "./viewModelEventDispatcher.js";
var YBc, UOt, XBc, ZBc;
export { UOt, XBc, YBc, ZBc };
var __wakaru_Jfg_initialized = false;
export function Jfg() {
if (__wakaru_Jfg_initialized) return;
__wakaru_Jfg_initialized = true;
"use strict";
x(), bt(), Se(), e6(), Qfg(), Cle(), p_i(), YBc = 125, UOt = class {
    constructor(e, t, n, i){
        e = e | 0, t = t | 0, n = n | 0, i = i | 0, e < 0 && (e = 0), t < 0 && (t = 0), n < 0 && (n = 0), i < 0 && (i = 0), this.width = e, this.contentWidth = t, this.scrollWidth = Math.max(e, t), this.height = n, this.contentHeight = i, this.scrollHeight = Math.max(n, i);
    }
    equals(e) {
        return this.width === e.width && this.contentWidth === e.contentWidth && this.height === e.height && this.contentHeight === e.contentHeight;
    }
}, XBc = class extends we {
    constructor(e, t){
        super(), this._onDidContentSizeChange = this._register(new ve), this.onDidContentSizeChange = this._onDidContentSizeChange.event, this._dimensions = new UOt(0, 0, 0, 0), this._scrollable = this._register(new mwe({
            forceIntegerValues: !0,
            smoothScrollDuration: e,
            scheduleAtNextAnimationFrame: t
        })), this.onDidScroll = this._scrollable.onScroll;
    }
    getScrollable() {
        return this._scrollable;
    }
    setSmoothScrollDuration(e) {
        this._scrollable.setSmoothScrollDuration(e);
    }
    validateScrollPosition(e) {
        return this._scrollable.validateScrollPosition(e);
    }
    getScrollDimensions() {
        return this._dimensions;
    }
    setScrollDimensions(e) {
        if (this._dimensions.equals(e)) return;
        const t = this._dimensions;
        this._dimensions = e, this._scrollable.setScrollDimensions({
            width: e.width,
            scrollWidth: e.scrollWidth,
            height: e.height,
            scrollHeight: e.scrollHeight
        }, !0);
        const n = t.contentWidth !== e.contentWidth, i = t.contentHeight !== e.contentHeight;
        (n || i) && this._onDidContentSizeChange.fire(new xBc(t.contentWidth, t.contentHeight, e.contentWidth, e.contentHeight));
    }
    getFutureScrollPosition() {
        return this._scrollable.getFutureScrollPosition();
    }
    getCurrentScrollPosition() {
        return this._scrollable.getCurrentScrollPosition();
    }
    setScrollPositionNow(e) {
        this._scrollable.setScrollPositionNow(e);
    }
    setScrollPositionSmooth(e) {
        this._scrollable.setScrollPositionSmooth(e);
    }
    hasPendingScrollAnimation() {
        return this._scrollable.hasPendingScrollAnimation();
    }
}, ZBc = class extends we {
    constructor(e, t, n){
        super(), this._configuration = e;
        const i = this._configuration.options, r = i.get(151), s = i.get(88);
        this._linesLayout = new qBc(t, i.get(68), s.top, s.bottom), this._maxLineWidth = 0, this._overlayWidgetsMinWidth = 0, this._scrollable = this._register(new XBc(0, n)), this._configureSmoothScrollDuration(), this._scrollable.setScrollDimensions(new UOt(r.contentWidth, 0, r.height, 0)), this.onDidScroll = this._scrollable.onDidScroll, this.onDidContentSizeChange = this._scrollable.onDidContentSizeChange, this._updateHeight();
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
        this._scrollable.setSmoothScrollDuration(this._configuration.options.get(119) ? YBc : 0);
    }
    onConfigurationChanged(e) {
        const t = this._configuration.options;
        if (e.hasChanged(68) && this._linesLayout.setLineHeight(t.get(68)), e.hasChanged(88)) {
            const n = t.get(88);
            this._linesLayout.setPadding(n.top, n.bottom);
        }
        if (e.hasChanged(151)) {
            const n = t.get(151), i = n.contentWidth, r = n.height, s = this._scrollable.getScrollDimensions(), o = s.contentWidth;
            this._scrollable.setScrollDimensions(new UOt(i, s.contentWidth, r, this._getContentHeight(i, r, o)));
        } else this._updateHeight();
        e.hasChanged(119) && this._configureSmoothScrollDuration();
    }
    onFlushed(e) {
        this._linesLayout.onFlushed(e);
    }
    onLinesDeleted(e, t) {
        this._linesLayout.onLinesDeleted(e, t);
    }
    onLinesInserted(e, t) {
        this._linesLayout.onLinesInserted(e, t);
    }
    _getHorizontalScrollbarHeight(e, t) {
        const i = this._configuration.options.get(108);
        return i.horizontal === Q1.Hidden || e >= t ? 0 : i.horizontalScrollbarSize;
    }
    _getContentHeight(e, t, n) {
        const i = this._configuration.options;
        let r = this._linesLayout.getLinesTotalHeight();
        return i.get(110) ? r += Math.max(0, t - i.get(68) - i.get(88).bottom) : i.get(108).ignoreHorizontalScrollbarInContentHeight || (r += this._getHorizontalScrollbarHeight(e, n)), r;
    }
    _updateHeight() {
        const e = this._scrollable.getScrollDimensions(), t = e.width, n = e.height, i = e.contentWidth;
        this._scrollable.setScrollDimensions(new UOt(t, e.contentWidth, n, this._getContentHeight(t, n, i)));
    }
    getCurrentViewport() {
        const e = this._scrollable.getScrollDimensions(), t = this._scrollable.getCurrentScrollPosition();
        return new WJr(t.scrollTop, t.scrollLeft, e.width, e.height);
    }
    getFutureViewport() {
        const e = this._scrollable.getScrollDimensions(), t = this._scrollable.getFutureScrollPosition();
        return new WJr(t.scrollTop, t.scrollLeft, e.width, e.height);
    }
    _computeContentWidth() {
        const e = this._configuration.options, t = this._maxLineWidth, n = e.get(152), i = e.get(52), r = e.get(151);
        if (n.isViewportWrapping) {
            const s = e.get(74);
            return t > r.contentWidth + i.typicalHalfwidthCharacterWidth && s.enabled && s.side === "right" ? t + r.verticalScrollbarWidth : t;
        } else {
            const s = e.get(109) * i.typicalHalfwidthCharacterWidth, o = this._linesLayout.getWhitespaceMinWidth();
            return Math.max(t + s + r.verticalScrollbarWidth, o, this._overlayWidgetsMinWidth);
        }
    }
    setMaxLineWidth(e) {
        this._maxLineWidth = e, this._updateContentWidth();
    }
    setOverlayWidgetsMinWidth(e) {
        this._overlayWidgetsMinWidth = e, this._updateContentWidth();
    }
    _updateContentWidth() {
        const e = this._scrollable.getScrollDimensions();
        this._scrollable.setScrollDimensions(new UOt(e.width, this._computeContentWidth(), e.height, e.contentHeight)), this._updateHeight();
    }
    saveState() {
        const e = this._scrollable.getFutureScrollPosition(), t = e.scrollTop, n = this._linesLayout.getLineNumberAtOrAfterVerticalOffset(t), i = this._linesLayout.getWhitespaceAccumulatedHeightBeforeLineNumber(n);
        return {
            scrollTop: t,
            scrollTopWithoutViewZones: t - i,
            scrollLeft: e.scrollLeft
        };
    }
    changeWhitespace(e) {
        const t = this._linesLayout.changeWhitespace(e);
        return t && this.onHeightMaybeChanged(), t;
    }
    getVerticalOffsetForLineNumber(e, t = !1) {
        return this._linesLayout.getVerticalOffsetForLineNumber(e, t);
    }
    getVerticalOffsetAfterLineNumber(e, t = !1) {
        return this._linesLayout.getVerticalOffsetAfterLineNumber(e, t);
    }
    isAfterLines(e) {
        return this._linesLayout.isAfterLines(e);
    }
    isInTopPadding(e) {
        return this._linesLayout.isInTopPadding(e);
    }
    isInBottomPadding(e) {
        return this._linesLayout.isInBottomPadding(e);
    }
    getLineNumberAtVerticalOffset(e) {
        return this._linesLayout.getLineNumberAtOrAfterVerticalOffset(e);
    }
    getWhitespaceAtVerticalOffset(e) {
        return this._linesLayout.getWhitespaceAtVerticalOffset(e);
    }
    getLinesViewportData() {
        const e = this.getCurrentViewport();
        return this._linesLayout.getLinesViewportData(e.top, e.top + e.height);
    }
    getLinesViewportDataAtScrollTop(e) {
        const t = this._scrollable.getScrollDimensions();
        return e + t.height > t.scrollHeight && (e = t.scrollHeight - t.height), e < 0 && (e = 0), this._linesLayout.getLinesViewportData(e, e + t.height);
    }
    getWhitespaceViewportData() {
        const e = this.getCurrentViewport();
        return this._linesLayout.getWhitespaceViewportData(e.top, e.top + e.height);
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
    validateScrollPosition(e) {
        return this._scrollable.validateScrollPosition(e);
    }
    setScrollPosition(e, t) {
        t === 1 ? this._scrollable.setScrollPositionNow(e) : this._scrollable.setScrollPositionSmooth(e);
    }
    hasPendingScrollAnimation() {
        return this._scrollable.hasPendingScrollAnimation();
    }
    deltaScrollNow(e, t) {
        const n = this._scrollable.getCurrentScrollPosition();
        this._scrollable.setScrollPositionNow({
            scrollLeft: n.scrollLeft + e,
            scrollTop: n.scrollTop + t
        });
    }
};

}
