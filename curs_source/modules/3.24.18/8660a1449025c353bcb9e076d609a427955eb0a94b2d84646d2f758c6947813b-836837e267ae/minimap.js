import { Di, Fa, Qe, Wvt, mQ, st, xa } from "./Iwo.js";
import { Cw, ti } from "./charCode.js";
import { Ap } from "./colorRegistry.js";
import { Hn, Pr, n0 } from "./dom_2.js";
import { MD } from "./editorColors.js";
import { s2, ujo, y5e } from "./editorOptions.js";
import { i6 } from "./fastDomNode.js";
import { fBt, xsi } from "./fonts.js";
import { Mse } from "./functional.js";
import { lBt, wfn } from "./globalPointerMoveMonitor.js";
import { du, kv } from "./map.js";
import { JMy } from "./minimap.css";
import { d$d, nDy } from "./minimapCharRendererFactory.js";
import { J6d, LUo, e4d } from "./minimapColors.js";
import { mUd, z$o } from "./minimapTokensColorTracker.js";
import { Qs, qt } from "./range.js";
import { myt, pUd } from "./rgba.js";
import { Cy, bu } from "./selection.js";
import { fO, kM, mS } from "./touch.js";
import { E } from "./tslib.es6.js";
import { sBt, xQ } from "./viewEvents.js";
import { FHo, LHo } from "./viewLayer.js";
import { G$o, zAe } from "./viewModel.js";
import { AQ, YAe, pz } from "./viewPart.js";
import { Ew, Ex, li } from "./ze.js";
var h$d, p$d, iWo, m$d, vCr, rWo, sWo, g$d, oWo, f$d, v$d, aWo;
export { aWo, f$d, g$d, h$d, iWo, m$d, oWo, p$d, rWo, sWo, v$d, vCr };
var __wakaru_iDy_initialized = false;
export function iDy() {
if (__wakaru_iDy_initialized) return;
__wakaru_iDy_initialized = true;
"use strict";
E(), JMy(), Hn(), i6(), wfn(), Cw(), Qe(), Di(), Fa(), FHo(), pz(), s2(), Qs(), pUd(), mUd(), sBt(), zAe(), Ap(), Cy(), fO(), nDy(), Mse(), du(), fBt(), h$d = 140, p$d = 2, iWo = class eXs {
    constructor(e, n, i){
        const r = e.options, s = r.get(149), o = r.get(151), a = o.minimap, l = r.get(52), c = r.get(74);
        this.renderMinimap = a.renderMinimap, this.size = c.size, this.minimapHeightIsEditorHeight = a.minimapHeightIsEditorHeight, this.scrollBeyondLastLine = r.get(110), this.paddingTop = r.get(88).top, this.paddingBottom = r.get(88).bottom, this.showSlider = c.showSlider, this.autohide = c.autohide, this.pixelRatio = s, this.typicalHalfwidthCharacterWidth = l.typicalHalfwidthCharacterWidth, this.lineHeight = r.get(68), this.minimapLeft = a.minimapLeft, this.minimapWidth = a.minimapWidth, this.minimapHeight = o.height, this.canvasInnerWidth = a.minimapCanvasInnerWidth, this.canvasInnerHeight = a.minimapCanvasInnerHeight, this.canvasOuterWidth = a.minimapCanvasOuterWidth, this.canvasOuterHeight = a.minimapCanvasOuterHeight, this.isSampling = a.minimapIsSampling, this.editorHeight = o.height, this.fontScale = a.minimapScale, this.minimapLineHeight = a.minimapLineHeight, this.minimapCharWidth = 1 * this.fontScale, this.sectionHeaderFontFamily = xsi, this.sectionHeaderFontSize = c.sectionHeaderFontSize * s, this.sectionHeaderLetterSpacing = c.sectionHeaderLetterSpacing, this.sectionHeaderFontColor = eXs._getSectionHeaderColor(n, i.getColor(1)), this.charRenderer = mQ(()=>d$d.create(this.fontScale, l.fontFamily)), this.defaultBackgroundColor = i.getColor(2), this.backgroundColor = eXs._getMinimapBackground(n, this.defaultBackgroundColor), this.foregroundAlpha = eXs._getMinimapForegroundOpacity(n);
    }
    static _getMinimapBackground(e, n) {
        const i = e.getColor(J6d);
        return i ? new myt(i.rgba.r, i.rgba.g, i.rgba.b, Math.round(255 * i.rgba.a)) : n;
    }
    static _getMinimapForegroundOpacity(e) {
        const n = e.getColor(e4d);
        return n ? myt._clamp(Math.round(255 * n.rgba.a)) : 255;
    }
    static _getSectionHeaderColor(e, n) {
        const i = e.getColor(MD);
        return i ? new myt(i.rgba.r, i.rgba.g, i.rgba.b, Math.round(255 * i.rgba.a)) : n;
    }
    equals(e) {
        return this.renderMinimap === e.renderMinimap && this.size === e.size && this.minimapHeightIsEditorHeight === e.minimapHeightIsEditorHeight && this.scrollBeyondLastLine === e.scrollBeyondLastLine && this.paddingTop === e.paddingTop && this.paddingBottom === e.paddingBottom && this.showSlider === e.showSlider && this.autohide === e.autohide && this.pixelRatio === e.pixelRatio && this.typicalHalfwidthCharacterWidth === e.typicalHalfwidthCharacterWidth && this.lineHeight === e.lineHeight && this.minimapLeft === e.minimapLeft && this.minimapWidth === e.minimapWidth && this.minimapHeight === e.minimapHeight && this.canvasInnerWidth === e.canvasInnerWidth && this.canvasInnerHeight === e.canvasInnerHeight && this.canvasOuterWidth === e.canvasOuterWidth && this.canvasOuterHeight === e.canvasOuterHeight && this.isSampling === e.isSampling && this.editorHeight === e.editorHeight && this.fontScale === e.fontScale && this.minimapLineHeight === e.minimapLineHeight && this.minimapCharWidth === e.minimapCharWidth && this.sectionHeaderFontSize === e.sectionHeaderFontSize && this.sectionHeaderLetterSpacing === e.sectionHeaderLetterSpacing && this.defaultBackgroundColor && this.defaultBackgroundColor.equals(e.defaultBackgroundColor) && this.backgroundColor && this.backgroundColor.equals(e.backgroundColor) && this.foregroundAlpha === e.foregroundAlpha;
    }
}, m$d = class tXs {
    constructor(e, n, i, r, s, o, a, l, c){
        this.scrollTop = e, this.scrollHeight = n, this.sliderNeeded = i, this._computedSliderRatio = r, this.sliderTop = s, this.sliderHeight = o, this.topPaddingLineCount = a, this.startLineNumber = l, this.endLineNumber = c;
    }
    getDesiredScrollTopFromDelta(e) {
        return Math.round(this.scrollTop + e / this._computedSliderRatio);
    }
    getDesiredScrollTopFromTouchLocation(e) {
        return Math.round((e - this.sliderHeight / 2) / this._computedSliderRatio);
    }
    intersectWithViewport(e) {
        const n = Math.max(this.startLineNumber, e.startLineNumber), i = Math.min(this.endLineNumber, e.endLineNumber);
        return n > i ? null : [
            n,
            i
        ];
    }
    getYForLineNumber(e, n) {
        return +(e - this.startLineNumber + this.topPaddingLineCount) * n;
    }
    static create(e, n, i, r, s, o, a, l, c, u, d) {
        const h = e.pixelRatio, p = e.minimapLineHeight, g = Math.floor(e.canvasInnerHeight / p), f = e.lineHeight;
        if (e.minimapHeightIsEditorHeight) {
            let T = l * e.lineHeight + e.paddingTop + e.paddingBottom;
            e.scrollBeyondLastLine && (T += Math.max(0, s - e.lineHeight - e.paddingBottom));
            const I = Math.max(1, Math.floor(s * s / T)), A = Math.max(0, e.minimapHeight - I), P = A / (u - s), M = c * P, O = A > 0, N = Math.floor(e.canvasInnerHeight / e.minimapLineHeight), U = Math.floor(e.paddingTop / e.lineHeight);
            return new tXs(c, u, O, P, M, I, U, 1, Math.min(a, N));
        }
        let _;
        if (o && i !== a) {
            const T = i - n + 1;
            _ = Math.floor(T * p / h);
        } else {
            const T = s / f;
            _ = Math.floor(T * p / h);
        }
        const b = Math.floor(e.paddingTop / f);
        let y = Math.floor(e.paddingBottom / f);
        if (e.scrollBeyondLastLine) {
            const T = s / f;
            y = Math.max(y, T - 1);
        }
        let S;
        if (y > 0) {
            const T = s / f;
            S = (b + a + y - T - 1) * p / h;
        } else S = Math.max(0, (b + a) * p / h - _);
        S = Math.min(e.minimapHeight - _, S);
        const k = S / (u - s), C = c * k;
        if (g >= b + a + y) {
            const T = S > 0;
            return new tXs(c, u, T, k, C, _, b, 1, a);
        } else {
            let T;
            n > 1 ? T = n + b : T = Math.max(1, c / f);
            let I, A = Math.max(1, Math.floor(T - C * h / p));
            A < b ? (I = b - A + 1, A = 1) : (I = 0, A = Math.max(1, A - b)), d && d.scrollHeight === u && (d.scrollTop > c && (A = Math.min(A, d.startLineNumber), I = Math.max(I, d.topPaddingLineCount)), d.scrollTop < c && (A = Math.max(A, d.startLineNumber), I = Math.min(I, d.topPaddingLineCount)));
            const P = Math.min(a, A - I + g - 1), M = (c - r) / f;
            let O;
            return c >= e.paddingTop ? O = (n - A + I + M) * p / h : O = c / e.paddingTop * (I + M) * p / h, new tXs(c, u, !0, k, O, _, I, A, P);
        }
    }
}, vCr = class {
    constructor(e){
        this.dy = e;
    }
    onContentChanged() {
        this.dy = -1;
    }
    onTokensChanged() {
        this.dy = -1;
    }
}, vCr.INVALID = new vCr(-1), rWo = vCr, sWo = class {
    constructor(t, e, n){
        this.renderedLayout = t, this._imageData = e, this._renderedLines = new LHo({
            createLine: ()=>rWo.INVALID
        }), this._renderedLines._set(t.startLineNumber, n);
    }
    linesEquals(t) {
        if (!this.scrollEquals(t)) return !1;
        const n = this._renderedLines._get().lines;
        for(let i = 0, r = n.length; i < r; i++)if (n[i].dy === -1) return !1;
        return !0;
    }
    scrollEquals(t) {
        return this.renderedLayout.startLineNumber === t.startLineNumber && this.renderedLayout.endLineNumber === t.endLineNumber;
    }
    _get() {
        const t = this._renderedLines._get();
        return {
            imageData: this._imageData,
            rendLineNumberStart: t.rendLineNumberStart,
            lines: t.lines
        };
    }
    onLinesChanged(t, e) {
        return this._renderedLines.onLinesChanged(t, e);
    }
    onLinesDeleted(t, e) {
        this._renderedLines.onLinesDeleted(t, e);
    }
    onLinesInserted(t, e) {
        this._renderedLines.onLinesInserted(t, e);
    }
    onTokensChanged(t) {
        return this._renderedLines.onTokensChanged(t);
    }
}, g$d = class nRb {
    constructor(e, n, i, r){
        this._backgroundFillData = nRb._createBackgroundFillData(n, i, r), this._buffers = [
            e.createImageData(n, i),
            e.createImageData(n, i)
        ], this._lastUsedBuffer = 0;
    }
    getBuffer() {
        this._lastUsedBuffer = 1 - this._lastUsedBuffer;
        const e = this._buffers[this._lastUsedBuffer];
        return e.data.set(this._backgroundFillData), e;
    }
    static _createBackgroundFillData(e, n, i) {
        const r = i.r, s = i.g, o = i.b, a = i.a, l = new Uint8ClampedArray(e * n * 4);
        let c = 0;
        for(let u = 0; u < n; u++)for(let d = 0; d < e; d++)l[c] = r, l[c + 1] = s, l[c + 2] = o, l[c + 3] = a, c += 4;
        return l;
    }
}, oWo = class yJc {
    constructor(e, n){
        this.samplingRatio = e, this.minimapLines = n;
    }
    static compute(e, n, i) {
        if (e.renderMinimap === 0 || !e.isSampling) return [
            null,
            []
        ];
        const { minimapLineCount: r } = ujo.computeContainedMinimapLineCount({
            viewLineCount: n,
            scrollBeyondLastLine: e.scrollBeyondLastLine,
            paddingTop: e.paddingTop,
            paddingBottom: e.paddingBottom,
            height: e.editorHeight,
            lineHeight: e.lineHeight,
            pixelRatio: e.pixelRatio
        }), s = n / r, o = s / 2;
        if (!i || i.minimapLines.length === 0) {
            const _ = [];
            if (_[0] = 1, r > 1) {
                for(let b = 0, y = r - 1; b < y; b++)_[b] = Math.round(b * s + o);
                _[r - 1] = n;
            }
            return [
                new yJc(s, _),
                []
            ];
        }
        const a = i.minimapLines, l = a.length, c = [];
        let u = 0, d = 0, h = 1;
        const p = 10;
        let g = [], f = null;
        for(let _ = 0; _ < r; _++){
            const b = Math.max(h, Math.round(_ * s)), y = Math.max(b, Math.round((_ + 1) * s));
            for(; u < l && a[u] < b;){
                if (g.length < p) {
                    const k = u + 1 + d;
                    f && f.type === "deleted" && f._oldIndex === u - 1 ? f.deleteToLineNumber++ : (f = {
                        type: "deleted",
                        _oldIndex: u,
                        deleteFromLineNumber: k,
                        deleteToLineNumber: k
                    }, g.push(f)), d--;
                }
                u++;
            }
            let S;
            if (u < l && a[u] <= y) S = a[u], u++;
            else if (_ === 0 ? S = 1 : _ + 1 === r ? S = n : S = Math.round(_ * s + o), g.length < p) {
                const k = u + 1 + d;
                f && f.type === "inserted" && f._i === _ - 1 ? f.insertToLineNumber++ : (f = {
                    type: "inserted",
                    _i: _,
                    insertFromLineNumber: k,
                    insertToLineNumber: k
                }, g.push(f)), d++;
            }
            c[_] = S, h = S;
        }
        if (g.length < p) for(; u < l;){
            const _ = u + 1 + d;
            f && f.type === "deleted" && f._oldIndex === u - 1 ? f.deleteToLineNumber++ : (f = {
                type: "deleted",
                _oldIndex: u,
                deleteFromLineNumber: _,
                deleteToLineNumber: _
            }, g.push(f)), d--, u++;
        }
        else g = [
            {
                type: "flush"
            }
        ];
        return [
            new yJc(s, c),
            g
        ];
    }
    modelLineToMinimapLine(e) {
        return Math.min(this.minimapLines.length, Math.max(1, Math.round(e / this.samplingRatio)));
    }
    modelLineRangeToMinimapLineRange(e, n) {
        let i = this.modelLineToMinimapLine(e) - 1;
        for(; i > 0 && this.minimapLines[i - 1] >= e;)i--;
        let r = this.modelLineToMinimapLine(n) - 1;
        for(; r + 1 < this.minimapLines.length && this.minimapLines[r + 1] <= n;)r++;
        if (i === r) {
            const s = this.minimapLines[i];
            if (s < e || s > n) return null;
        }
        return [
            i + 1,
            r + 1
        ];
    }
    decorationLineRangeToMinimapLineRange(e, n) {
        let i = this.modelLineToMinimapLine(e), r = this.modelLineToMinimapLine(n);
        return e !== n && r === i && (r === this.minimapLines.length ? i > 1 && i-- : r++), [
            i,
            r
        ];
    }
    onLinesDeleted(e) {
        const n = e.toLineNumber - e.fromLineNumber + 1;
        let i = this.minimapLines.length, r = 0;
        for(let s = this.minimapLines.length - 1; s >= 0 && !(this.minimapLines[s] < e.fromLineNumber); s--)this.minimapLines[s] <= e.toLineNumber ? (this.minimapLines[s] = Math.max(1, e.fromLineNumber - 1), i = Math.min(i, s), r = Math.max(r, s)) : this.minimapLines[s] -= n;
        return [
            i,
            r
        ];
    }
    onLinesInserted(e) {
        const n = e.toLineNumber - e.fromLineNumber + 1;
        for(let i = this.minimapLines.length - 1; i >= 0 && !(this.minimapLines[i] < e.fromLineNumber); i--)this.minimapLines[i] += n;
    }
}, f$d = class extends AQ {
    constructor(t){
        super(t), this._sectionHeaderCache = new kv(10, 1.5), this.tokensColorTracker = z$o.getInstance(), this._selections = [], this._minimapSelections = null, this.options = new iWo(this._context.configuration, this._context.theme, this.tokensColorTracker);
        const [e] = oWo.compute(this.options, this._context.viewModel.getLineCount(), null);
        this._samplingState = e, this._shouldCheckSampling = !1, this._actual = new v$d(t.theme, this);
    }
    dispose() {
        this._actual.dispose(), super.dispose();
    }
    getDomNode() {
        return this._actual.getDomNode();
    }
    _onOptionsMaybeChanged() {
        const t = new iWo(this._context.configuration, this._context.theme, this.tokensColorTracker);
        return this.options.equals(t) ? !1 : (this.options = t, this._recreateLineSampling(), this._actual.onDidChangeOptions(), !0);
    }
    onConfigurationChanged(t) {
        return this._onOptionsMaybeChanged();
    }
    onCursorStateChanged(t) {
        return this._selections = t.selections, this._minimapSelections = null, this._actual.onSelectionChanged();
    }
    onDecorationsChanged(t) {
        return t.affectsMinimap ? this._actual.onDecorationsChanged() : !1;
    }
    onFlushed(t) {
        return this._samplingState && (this._shouldCheckSampling = !0), this._actual.onFlushed();
    }
    onLinesChanged(t) {
        if (this._samplingState) {
            const e = this._samplingState.modelLineRangeToMinimapLineRange(t.fromLineNumber, t.fromLineNumber + t.count - 1);
            return e ? this._actual.onLinesChanged(e[0], e[1] - e[0] + 1) : !1;
        } else return this._actual.onLinesChanged(t.fromLineNumber, t.count);
    }
    onLinesDeleted(t) {
        if (this._samplingState) {
            const [e, n] = this._samplingState.onLinesDeleted(t);
            return e <= n && this._actual.onLinesChanged(e + 1, n - e + 1), this._shouldCheckSampling = !0, !0;
        } else return this._actual.onLinesDeleted(t.fromLineNumber, t.toLineNumber);
    }
    onLinesInserted(t) {
        return this._samplingState ? (this._samplingState.onLinesInserted(t), this._shouldCheckSampling = !0, !0) : this._actual.onLinesInserted(t.fromLineNumber, t.toLineNumber);
    }
    onScrollChanged(t) {
        return this._actual.onScrollChanged();
    }
    onThemeChanged(t) {
        return this._actual.onThemeChanged(), this._onOptionsMaybeChanged(), !0;
    }
    onTokensChanged(t) {
        if (this._samplingState) {
            const e = [];
            for (const n of t.ranges){
                const i = this._samplingState.modelLineRangeToMinimapLineRange(n.fromLineNumber, n.toLineNumber);
                i && e.push({
                    fromLineNumber: i[0],
                    toLineNumber: i[1]
                });
            }
            return e.length ? this._actual.onTokensChanged(e) : !1;
        } else return this._actual.onTokensChanged(t.ranges);
    }
    onTokensColorsChanged(t) {
        return this._onOptionsMaybeChanged(), this._actual.onTokensColorsChanged();
    }
    onZonesChanged(t) {
        return this._actual.onZonesChanged();
    }
    prepareRender(t) {
        this._shouldCheckSampling && (this._shouldCheckSampling = !1, this._recreateLineSampling());
    }
    render(t) {
        let e = t.visibleRange.startLineNumber, n = t.visibleRange.endLineNumber;
        this._samplingState && (e = this._samplingState.modelLineToMinimapLine(e), n = this._samplingState.modelLineToMinimapLine(n));
        const i = {
            viewportContainsWhitespaceGaps: t.viewportData.whitespaceViewportData.length > 0,
            scrollWidth: t.scrollWidth,
            scrollHeight: t.scrollHeight,
            viewportStartLineNumber: e,
            viewportEndLineNumber: n,
            viewportStartLineNumberVerticalOffset: t.getVerticalOffsetForLineNumber(e),
            scrollTop: t.scrollTop,
            scrollLeft: t.scrollLeft,
            viewportWidth: t.viewportWidth,
            viewportHeight: t.viewportHeight
        };
        this._actual.render(i);
    }
    _recreateLineSampling() {
        this._minimapSelections = null;
        const t = !!this._samplingState, [e, n] = oWo.compute(this.options, this._context.viewModel.getLineCount(), this._samplingState);
        if (this._samplingState = e, t && this._samplingState) for (const i of n)switch(i.type){
            case "deleted":
                this._actual.onLinesDeleted(i.deleteFromLineNumber, i.deleteToLineNumber);
                break;
            case "inserted":
                this._actual.onLinesInserted(i.insertFromLineNumber, i.insertToLineNumber);
                break;
            case "flush":
                this._actual.onFlushed();
                break;
        }
    }
    getLineCount() {
        return this._samplingState ? this._samplingState.minimapLines.length : this._context.viewModel.getLineCount();
    }
    getRealLineCount() {
        return this._context.viewModel.getLineCount();
    }
    getLineContent(t) {
        return this._samplingState ? this._context.viewModel.getLineContent(this._samplingState.minimapLines[t - 1]) : this._context.viewModel.getLineContent(t);
    }
    getLineMaxColumn(t) {
        return this._samplingState ? this._context.viewModel.getLineMaxColumn(this._samplingState.minimapLines[t - 1]) : this._context.viewModel.getLineMaxColumn(t);
    }
    getMinimapLinesRenderingData(t, e, n) {
        if (this._samplingState) {
            const i = [];
            for(let r = 0, s = e - t + 1; r < s; r++)n[r] ? i[r] = this._context.viewModel.getViewLineData(this._samplingState.minimapLines[t + r - 1]) : i[r] = null;
            return i;
        }
        return this._context.viewModel.getMinimapLinesRenderingData(t, e, n).data;
    }
    getSelections() {
        if (this._minimapSelections === null) if (this._samplingState) {
            this._minimapSelections = [];
            for (const t of this._selections){
                const [e, n] = this._samplingState.decorationLineRangeToMinimapLineRange(t.startLineNumber, t.endLineNumber);
                this._minimapSelections.push(new bu(e, t.startColumn, n, t.endColumn));
            }
        } else this._minimapSelections = this._selections;
        return this._minimapSelections;
    }
    getMinimapDecorationsInViewport(t, e) {
        return this._getMinimapDecorationsInViewport(t, e).filter((n)=>!n.options.minimap?.sectionHeaderStyle);
    }
    getSectionHeaderDecorationsInViewport(t, e) {
        const n = this.options.sectionHeaderFontSize / this.options.minimapLineHeight;
        return t = Math.floor(Math.max(1, t - n)), this._getMinimapDecorationsInViewport(t, e).filter((i)=>!!i.options.minimap?.sectionHeaderStyle);
    }
    _getMinimapDecorationsInViewport(t, e) {
        let n;
        if (this._samplingState) {
            const r = this._samplingState.minimapLines[t - 1], s = this._samplingState.minimapLines[e - 1];
            n = new qt(r, 1, s, this._context.viewModel.getLineMaxColumn(s));
        } else n = new qt(t, 1, e, this._context.viewModel.getLineMaxColumn(e));
        const i = this._context.viewModel.getMinimapDecorationsInRange(n);
        if (this._samplingState) {
            const r = [];
            for (const s of i){
                if (!s.options.minimap) continue;
                const o = s.range, a = this._samplingState.modelLineToMinimapLine(o.startLineNumber), l = this._samplingState.modelLineToMinimapLine(o.endLineNumber);
                r.push(new G$o(new qt(a, o.startColumn, l, o.endColumn), s.options));
            }
            return r;
        }
        return i;
    }
    getSectionHeaderText(t, e) {
        const n = t.options.minimap?.sectionHeaderText;
        if (!n) return null;
        const i = this._sectionHeaderCache.get(n);
        if (i) return i;
        const r = e(n);
        return this._sectionHeaderCache.set(n, r), r;
    }
    getOptions() {
        return this._context.viewModel.model.getOptions();
    }
    revealLineNumber(t) {
        this._samplingState && (t = this._samplingState.minimapLines[t - 1]), this._context.viewModel.revealRange("mouse", !1, new qt(t, 1, t, 1), xQ.Center, 0);
    }
    setScrollTop(t) {
        this._context.viewModel.viewLayout.setScrollPosition({
            scrollTop: t
        }, 1);
    }
}, v$d = class AZi extends st {
    constructor(e, n){
        super(), this._renderDecorations = !1, this._gestureInProgress = !1, this._theme = e, this._model = n, this._lastRenderData = null, this._buffers = null, this._selectionColor = this._theme.getColor(LUo), this._domNode = Ew(document.createElement("div")), YAe.write(this._domNode, 9), this._domNode.setClassName(this._getMinimapDomNodeClassName()), this._domNode.setPosition("absolute"), this._domNode.setAttribute("role", "presentation"), this._domNode.setAttribute("aria-hidden", "true"), this._shadow = Ew(document.createElement("div")), this._shadow.setClassName("minimap-shadow-hidden"), this._domNode.appendChild(this._shadow), this._canvas = Ew(document.createElement("canvas")), this._canvas.setPosition("absolute"), this._canvas.setLeft(0), this._domNode.appendChild(this._canvas), this._decorationsCanvas = Ew(document.createElement("canvas")), this._decorationsCanvas.setPosition("absolute"), this._decorationsCanvas.setClassName("minimap-decorations-layer"), this._decorationsCanvas.setLeft(0), this._domNode.appendChild(this._decorationsCanvas), this._slider = Ew(document.createElement("div")), this._slider.setPosition("absolute"), this._slider.setClassName("minimap-slider"), this._slider.setLayerHinting(!0), this._slider.setContain("strict"), this._domNode.appendChild(this._slider), this._sliderHorizontal = Ew(document.createElement("div")), this._sliderHorizontal.setPosition("absolute"), this._sliderHorizontal.setClassName("minimap-slider-horizontal"), this._slider.appendChild(this._sliderHorizontal), this._applyLayout(), this._pointerDownListener = n0(this._domNode.domNode, Pr.POINTER_DOWN, (i)=>{
            if (i.preventDefault(), this._model.options.renderMinimap === 0 || !this._lastRenderData) return;
            if (this._model.options.size !== "proportional") {
                if (i.button === 0 && this._lastRenderData) {
                    const c = Ex(this._slider.domNode), u = c.top + c.height / 2;
                    this._startSliderDragging(i, u, this._lastRenderData.renderedLayout);
                }
                return;
            }
            const s = this._model.options.minimapLineHeight, o = this._model.options.canvasInnerHeight / this._model.options.canvasOuterHeight * i.offsetY;
            let l = Math.floor(o / s) + this._lastRenderData.renderedLayout.startLineNumber - this._lastRenderData.renderedLayout.topPaddingLineCount;
            l = Math.min(l, this._model.getLineCount()), this._model.revealLineNumber(l);
        }), this._sliderPointerMoveMonitor = new lBt, this._sliderPointerDownListener = n0(this._slider.domNode, Pr.POINTER_DOWN, (i)=>{
            i.preventDefault(), i.stopPropagation(), i.button === 0 && this._lastRenderData && this._startSliderDragging(i, i.pageY, this._lastRenderData.renderedLayout);
        }), this._gestureDisposable = kM.addTarget(this._domNode.domNode), this._sliderTouchStartListener = li(this._domNode.domNode, mS.Start, (i)=>{
            i.preventDefault(), i.stopPropagation(), this._lastRenderData && (this._slider.toggleClassName("active", !0), this._gestureInProgress = !0, this.scrollDueToTouchEvent(i));
        }, {
            passive: !1
        }), this._sliderTouchMoveListener = li(this._domNode.domNode, mS.Change, (i)=>{
            i.preventDefault(), i.stopPropagation(), this._lastRenderData && this._gestureInProgress && this.scrollDueToTouchEvent(i);
        }, {
            passive: !1
        }), this._sliderTouchEndListener = n0(this._domNode.domNode, mS.End, (i)=>{
            i.preventDefault(), i.stopPropagation(), this._gestureInProgress = !1, this._slider.toggleClassName("active", !1);
        });
    }
    _startSliderDragging(e, n, i) {
        if (!e.target || !(e.target instanceof Element)) return;
        const r = e.pageX;
        this._slider.toggleClassName("active", !0);
        const s = (o, a)=>{
            const l = Ex(this._domNode.domNode), c = Math.min(Math.abs(a - r), Math.abs(a - l.left), Math.abs(a - l.left - l.width));
            if (xa && c > h$d) {
                this._model.setScrollTop(i.scrollTop);
                return;
            }
            const u = o - n;
            this._model.setScrollTop(i.getDesiredScrollTopFromDelta(u));
        };
        e.pageY !== n && s(e.pageY, r), this._sliderPointerMoveMonitor.startMonitoring(e.target, e.pointerId, e.buttons, (o)=>s(o.pageY, o.pageX), ()=>{
            this._slider.toggleClassName("active", !1);
        });
    }
    scrollDueToTouchEvent(e) {
        const n = this._domNode.domNode.getBoundingClientRect().top, i = this._lastRenderData.renderedLayout.getDesiredScrollTopFromTouchLocation(e.pageY - n);
        this._model.setScrollTop(i);
    }
    dispose() {
        this._pointerDownListener.dispose(), this._sliderPointerMoveMonitor.dispose(), this._sliderPointerDownListener.dispose(), this._gestureDisposable.dispose(), this._sliderTouchStartListener.dispose(), this._sliderTouchMoveListener.dispose(), this._sliderTouchEndListener.dispose(), super.dispose();
    }
    _getMinimapDomNodeClassName() {
        const e = [
            "minimap"
        ];
        return this._model.options.showSlider === "always" ? e.push("slider-always") : e.push("slider-mouseover"), this._model.options.autohide && e.push("autohide"), e.join(" ");
    }
    getDomNode() {
        return this._domNode;
    }
    _applyLayout() {
        this._domNode.setLeft(this._model.options.minimapLeft), this._domNode.setWidth(this._model.options.minimapWidth), this._domNode.setHeight(this._model.options.minimapHeight), this._shadow.setHeight(this._model.options.minimapHeight), this._canvas.setWidth(this._model.options.canvasOuterWidth), this._canvas.setHeight(this._model.options.canvasOuterHeight), this._canvas.domNode.width = this._model.options.canvasInnerWidth, this._canvas.domNode.height = this._model.options.canvasInnerHeight, this._decorationsCanvas.setWidth(this._model.options.canvasOuterWidth), this._decorationsCanvas.setHeight(this._model.options.canvasOuterHeight), this._decorationsCanvas.domNode.width = this._model.options.canvasInnerWidth, this._decorationsCanvas.domNode.height = this._model.options.canvasInnerHeight, this._slider.setWidth(this._model.options.minimapWidth);
    }
    _getBuffer() {
        return this._buffers || this._model.options.canvasInnerWidth > 0 && this._model.options.canvasInnerHeight > 0 && (this._buffers = new g$d(this._canvas.domNode.getContext("2d"), this._model.options.canvasInnerWidth, this._model.options.canvasInnerHeight, this._model.options.backgroundColor)), this._buffers ? this._buffers.getBuffer() : null;
    }
    onDidChangeOptions() {
        this._lastRenderData = null, this._buffers = null, this._applyLayout(), this._domNode.setClassName(this._getMinimapDomNodeClassName());
    }
    onSelectionChanged() {
        return this._renderDecorations = !0, !0;
    }
    onDecorationsChanged() {
        return this._renderDecorations = !0, !0;
    }
    onFlushed() {
        return this._lastRenderData = null, !0;
    }
    onLinesChanged(e, n) {
        return this._lastRenderData ? this._lastRenderData.onLinesChanged(e, n) : !1;
    }
    onLinesDeleted(e, n) {
        return this._lastRenderData?.onLinesDeleted(e, n), !0;
    }
    onLinesInserted(e, n) {
        return this._lastRenderData?.onLinesInserted(e, n), !0;
    }
    onScrollChanged() {
        return this._renderDecorations = !0, !0;
    }
    onThemeChanged() {
        return this._selectionColor = this._theme.getColor(LUo), this._renderDecorations = !0, !0;
    }
    onTokensChanged(e) {
        return this._lastRenderData ? this._lastRenderData.onTokensChanged(e) : !1;
    }
    onTokensColorsChanged() {
        return this._lastRenderData = null, this._buffers = null, !0;
    }
    onZonesChanged() {
        return this._lastRenderData = null, !0;
    }
    render(e) {
        if (this._model.options.renderMinimap === 0) {
            this._shadow.setClassName("minimap-shadow-hidden"), this._sliderHorizontal.setWidth(0), this._sliderHorizontal.setHeight(0);
            return;
        }
        e.scrollLeft + e.viewportWidth >= e.scrollWidth ? this._shadow.setClassName("minimap-shadow-hidden") : this._shadow.setClassName("minimap-shadow-visible");
        const i = m$d.create(this._model.options, e.viewportStartLineNumber, e.viewportEndLineNumber, e.viewportStartLineNumberVerticalOffset, e.viewportHeight, e.viewportContainsWhitespaceGaps, this._model.getLineCount(), this._model.getRealLineCount(), e.scrollTop, e.scrollHeight, this._lastRenderData ? this._lastRenderData.renderedLayout : null);
        this._slider.setDisplay(i.sliderNeeded ? "block" : "none"), this._slider.setTop(i.sliderTop), this._slider.setHeight(i.sliderHeight), this._sliderHorizontal.setLeft(0), this._sliderHorizontal.setWidth(this._model.options.minimapWidth), this._sliderHorizontal.setTop(0), this._sliderHorizontal.setHeight(i.sliderHeight), this.renderDecorations(i), this._lastRenderData = this.renderLines(i);
    }
    renderDecorations(e) {
        if (this._renderDecorations) {
            this._renderDecorations = !1;
            const n = this._model.getSelections();
            n.sort(qt.compareRangesUsingStarts);
            const i = this._model.getMinimapDecorationsInViewport(e.startLineNumber, e.endLineNumber);
            i.sort((h, p)=>(h.options.zIndex || 0) - (p.options.zIndex || 0));
            const { canvasInnerWidth: r, canvasInnerHeight: s } = this._model.options, o = this._model.options.minimapLineHeight, a = this._model.options.minimapCharWidth, l = this._model.getOptions().tabSize, c = this._decorationsCanvas.domNode.getContext("2d");
            c.clearRect(0, 0, r, s);
            const u = new aWo(e.startLineNumber, e.endLineNumber, !1);
            this._renderSelectionLineHighlights(c, n, u, e, o), this._renderDecorationsLineHighlights(c, i, u, e, o);
            const d = new aWo(e.startLineNumber, e.endLineNumber, null);
            this._renderSelectionsHighlights(c, n, d, e, o, l, a, r), this._renderDecorationsHighlights(c, i, d, e, o, l, a, r), this._renderSectionHeaders(e);
        }
    }
    _renderSelectionLineHighlights(e, n, i, r, s) {
        if (!this._selectionColor || this._selectionColor.isTransparent()) return;
        e.fillStyle = this._selectionColor.transparent(.5).toString();
        let o = 0, a = 0;
        for (const l of n){
            const c = r.intersectWithViewport(l);
            if (!c) continue;
            const [u, d] = c;
            for(let g = u; g <= d; g++)i.set(g, !0);
            const h = r.getYForLineNumber(u, s), p = r.getYForLineNumber(d, s);
            a >= h || (a > o && e.fillRect(y5e, o, e.canvas.width, a - o), o = h), a = p;
        }
        a > o && e.fillRect(y5e, o, e.canvas.width, a - o);
    }
    _renderDecorationsLineHighlights(e, n, i, r, s) {
        const o = new Map;
        for(let a = n.length - 1; a >= 0; a--){
            const l = n[a], c = l.options.minimap;
            if (!c || c.position !== 1) continue;
            const u = r.intersectWithViewport(l.range);
            if (!u) continue;
            const [d, h] = u, p = c.getColor(this._theme.value);
            if (!p || p.isTransparent()) continue;
            let g = o.get(p.toString());
            g || (g = p.transparent(.5).toString(), o.set(p.toString(), g)), e.fillStyle = g;
            for(let f = d; f <= h; f++){
                if (i.has(f)) continue;
                i.set(f, !0);
                const _ = r.getYForLineNumber(d, s);
                e.fillRect(y5e, _, e.canvas.width, s);
            }
        }
    }
    _renderSelectionsHighlights(e, n, i, r, s, o, a, l) {
        if (!(!this._selectionColor || this._selectionColor.isTransparent())) for (const c of n){
            const u = r.intersectWithViewport(c);
            if (!u) continue;
            const [d, h] = u;
            for(let p = d; p <= h; p++)this.renderDecorationOnLine(e, i, c, this._selectionColor, r, p, s, s, o, a, l);
        }
    }
    _renderDecorationsHighlights(e, n, i, r, s, o, a, l) {
        for (const c of n){
            const u = c.options.minimap;
            if (!u) continue;
            const d = r.intersectWithViewport(c.range);
            if (!d) continue;
            const [h, p] = d, g = u.getColor(this._theme.value);
            if (!(!g || g.isTransparent())) for(let f = h; f <= p; f++)switch(u.position){
                case 1:
                    this.renderDecorationOnLine(e, i, c.range, g, r, f, s, s, o, a, l);
                    continue;
                case 2:
                    {
                        const _ = r.getYForLineNumber(f, s);
                        this.renderDecoration(e, g, 2, _, p$d, s);
                        continue;
                    }
            }
        }
    }
    renderDecorationOnLine(e, n, i, r, s, o, a, l, c, u, d) {
        const h = s.getYForLineNumber(o, l);
        if (h + a < 0 || h > this._model.options.canvasInnerHeight) return;
        const { startLineNumber: p, endLineNumber: g } = i, f = p === o ? i.startColumn : 1, _ = g === o ? i.endColumn : this._model.getLineMaxColumn(o), b = this.getXOffsetForPosition(n, o, f, c, u, d), y = this.getXOffsetForPosition(n, o, _, c, u, d);
        this.renderDecoration(e, r, b, h, y - b, a);
    }
    getXOffsetForPosition(e, n, i, r, s, o) {
        if (i === 1) return y5e;
        if ((i - 1) * s >= o) return o;
        let l = e.get(n);
        if (!l) {
            const c = this._model.getLineContent(n);
            l = [
                y5e
            ];
            let u = y5e;
            for(let d = 1; d < c.length + 1; d++){
                const h = c.charCodeAt(d - 1), p = h === ti.Tab ? r * s : Wvt(h) ? 2 * s : s, g = u + p;
                if (g >= o) {
                    l[d] = o;
                    break;
                }
                l[d] = g, u = g;
            }
            e.set(n, l);
        }
        return i - 1 < l.length ? l[i - 1] : o;
    }
    renderDecoration(e, n, i, r, s, o) {
        e.fillStyle = n && n.toString() || "", e.fillRect(i, r, s, o);
    }
    _renderSectionHeaders(e) {
        const n = this._model.options.minimapLineHeight, i = this._model.options.sectionHeaderFontSize, r = this._model.options.sectionHeaderLetterSpacing, s = i * 1.5, { canvasInnerWidth: o } = this._model.options, a = this._model.options.backgroundColor, l = `rgb(${a.r} ${a.g} ${a.b} / .7)`, c = this._model.options.sectionHeaderFontColor, u = `rgb(${c.r} ${c.g} ${c.b})`, d = u, h = this._decorationsCanvas.domNode.getContext("2d");
        h.letterSpacing = r + "px", h.font = "500 " + i + "px " + this._model.options.sectionHeaderFontFamily, h.strokeStyle = d, h.lineWidth = .2;
        const p = this._model.getSectionHeaderDecorationsInViewport(e.startLineNumber, e.endLineNumber);
        p.sort((f, _)=>f.range.startLineNumber - _.range.startLineNumber);
        const g = AZi._fitSectionHeader.bind(null, h, o - y5e);
        for (const f of p){
            const _ = e.getYForLineNumber(f.range.startLineNumber, n) + i, b = _ - i, y = b + 2, S = this._model.getSectionHeaderText(f, g);
            AZi._renderSectionLabel(h, S, f.options.minimap?.sectionHeaderStyle === 2, l, u, o, b, s, _, y);
        }
    }
    static _fitSectionHeader(e, n, i) {
        if (!i) return i;
        const r = "\u2026", s = e.measureText(i).width, o = e.measureText(r).width;
        if (s <= n || s <= o) return i;
        const a = i.length, l = s / i.length, c = Math.floor((n - o) / l) - 1;
        let u = Math.ceil(c / 2);
        for(; u > 0 && /\s/.test(i[u - 1]);)--u;
        return i.substring(0, u) + r + i.substring(a - (c - u));
    }
    static _renderSectionLabel(e, n, i, r, s, o, a, l, c, u) {
        n && (e.fillStyle = r, e.fillRect(0, a, o, l), e.fillStyle = s, e.fillText(n, y5e, c)), i && (e.beginPath(), e.moveTo(0, u), e.lineTo(o, u), e.closePath(), e.stroke());
    }
    renderLines(e) {
        const n = e.startLineNumber, i = e.endLineNumber, r = this._model.options.minimapLineHeight;
        if (this._lastRenderData && this._lastRenderData.linesEquals(e)) {
            const $ = this._lastRenderData._get();
            return new sWo(e, $.imageData, $.lines);
        }
        const s = this._getBuffer();
        if (!s) return null;
        const [o, a, l] = AZi._renderUntouchedLines(s, e.topPaddingLineCount, n, i, r, this._lastRenderData), c = this._model.getMinimapLinesRenderingData(n, i, l), u = this._model.getOptions().tabSize, d = this._model.options.defaultBackgroundColor, h = this._model.options.backgroundColor, p = this._model.options.foregroundAlpha, g = this._model.tokensColorTracker, f = g.backgroundIsLight(), _ = this._model.options.renderMinimap, b = this._model.options.charRenderer(), y = this._model.options.fontScale, S = this._model.options.minimapCharWidth, C = (_ === 1 ? 2 : 3) * y, T = r > C ? Math.floor((r - C) / 2) : 0, I = h.a / 255, A = new myt(Math.round((h.r - d.r) * I + d.r), Math.round((h.g - d.g) * I + d.g), Math.round((h.b - d.b) * I + d.b), 255);
        let P = e.topPaddingLineCount * r;
        const M = [];
        for(let $ = 0, H = i - n + 1; $ < H; $++)l[$] && AZi._renderLine(s, A, h.a, f, _, S, g, p, b, P, T, u, c[$], y, r), M[$] = new rWo(P), P += r;
        const O = o === -1 ? 0 : o, U = (a === -1 ? s.height : a) - O;
        return this._canvas.domNode.getContext("2d").putImageData(s, 0, 0, 0, O, s.width, U), new sWo(e, s, M);
    }
    static _renderUntouchedLines(e, n, i, r, s, o) {
        const a = [];
        if (!o) {
            for(let P = 0, M = r - i + 1; P < M; P++)a[P] = !0;
            return [
                -1,
                -1,
                a
            ];
        }
        const l = o._get(), c = l.imageData.data, u = l.rendLineNumberStart, d = l.lines, h = d.length, p = e.width, g = e.data, f = (r - i + 1) * s * p * 4;
        let _ = -1, b = -1, y = -1, S = -1, k = -1, C = -1, T = n * s;
        for(let P = i; P <= r; P++){
            const M = P - i, O = P - u, N = O >= 0 && O < h ? d[O].dy : -1;
            if (N === -1) {
                a[M] = !0, T += s;
                continue;
            }
            const U = N * p * 4, j = (N + s) * p * 4, $ = T * p * 4, H = (T + s) * p * 4;
            S === U && C === $ ? (S = j, C = H) : (y !== -1 && (g.set(c.subarray(y, S), k), _ === -1 && y === 0 && y === k && (_ = S), b === -1 && S === f && y === k && (b = y)), y = U, S = j, k = $, C = H), a[M] = !1, T += s;
        }
        y !== -1 && (g.set(c.subarray(y, S), k), _ === -1 && y === 0 && y === k && (_ = S), b === -1 && S === f && y === k && (b = y));
        const I = _ === -1 ? -1 : _ / (p * 4), A = b === -1 ? -1 : b / (p * 4);
        return [
            I,
            A,
            a
        ];
    }
    static _renderLine(e, n, i, r, s, o, a, l, c, u, d, h, p, g, f) {
        const _ = p.content, b = p.tokens, y = e.width - o, S = f === 1;
        let k = y5e, C = 0, T = 0;
        for(let I = 0, A = b.getCount(); I < A; I++){
            const P = b.getEndOffset(I), M = b.getForeground(I), O = a.getColor(M);
            for(; C < P; C++){
                if (k > y) return;
                const N = _.charCodeAt(C);
                if (N === ti.Tab) {
                    const U = h - (C + T) % h;
                    T += U - 1, k += U * o;
                } else if (N === ti.Space) k += o;
                else {
                    const U = Wvt(N) ? 2 : 1;
                    for(let j = 0; j < U; j++)if (s === 2 ? c.blockRenderChar(e, k, u + d, O, l, n, i, S) : c.renderChar(e, k, u + d, N, O, l, n, i, g, r, S), k += o, k > y) return;
                }
            }
        }
    }
}, aWo = class {
    constructor(t, e, n){
        this._startLineNumber = t, this._endLineNumber = e, this._defaultValue = n, this._values = [];
        for(let i = 0, r = this._endLineNumber - this._startLineNumber + 1; i < r; i++)this._values[i] = n;
    }
    has(t) {
        return this.get(t) !== this._defaultValue;
    }
    set(t, e) {
        t < this._startLineNumber || t > this._endLineNumber || (this._values[t - this._startLineNumber] = e);
    }
    get(t) {
        return t < this._startLineNumber || t > this._endLineNumber ? this._defaultValue : this._values[t - this._startLineNumber];
    }
};

}
