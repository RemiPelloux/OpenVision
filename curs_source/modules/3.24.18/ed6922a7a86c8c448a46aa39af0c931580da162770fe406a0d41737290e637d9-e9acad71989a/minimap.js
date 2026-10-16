import { Dqe, G9, Oo, Ps, Se, jn, we } from "./HVr.js";
import { En, qy } from "./charCode.js";
import { tc } from "./colorRegistry.js";
import { Fn, en, zp } from "./dom_2.js";
import { p1 } from "./editorColors.js";
import { eQr, gwe, m1 } from "./editorOptions.js";
import { Tx } from "./fastDomNode.js";
import { nFt, zpt } from "./fonts.js";
import { E7 } from "./functional.js";
import { Upt, VOt } from "./globalPointerMoveMonitor.js";
import { ag, oc } from "./map.js";
import { o_g } from "./minimap.css";
import { Z9c, l_g } from "./minimapCharRendererFactory.js";
import { XLc, ZLc, iZr } from "./minimapColors.js";
import { JBc, jJr } from "./minimapTokensColorTracker.js";
import { Nk, Xt, x_ } from "./qIc.js";
import { dt, qi } from "./range.js";
import { QBc, Uze } from "./rgba.js";
import { _f, za } from "./selection.js";
import { Ex, ov, zT } from "./touch.js";
import { x } from "./tslib.es6.js";
import { Npt, hW } from "./viewEvents.js";
import { Les, Mes } from "./viewLayer.js";
import { Cle, GJr } from "./viewModel.js";
import { aU, jge, mW } from "./viewPart.js";
var J9c, e6c, Qes, t6c, V_i, Jes, ets, n6c, tts, i6c, r6c, nts;
export { J9c, Jes, Qes, V_i, e6c, ets, i6c, n6c, nts, r6c, t6c, tts };
var __wakaru_u_g_initialized = false;
export function u_g() {
if (__wakaru_u_g_initialized) return;
__wakaru_u_g_initialized = true;
"use strict";
x(), o_g(), en(), Tx(), VOt(), qy(), Se(), jn(), Ps(), Les(), aU(), m1(), qi(), QBc(), JBc(), Npt(), Cle(), tc(), _f(), Ex(), l_g(), E7(), oc(), zpt(), J9c = 140, e6c = 2, Qes = class p1r {
    constructor(t, n, i){
        const r = t.options, s = r.get(149), o = r.get(151), a = o.minimap, c = r.get(52), l = r.get(74);
        this.renderMinimap = a.renderMinimap, this.size = l.size, this.minimapHeightIsEditorHeight = a.minimapHeightIsEditorHeight, this.scrollBeyondLastLine = r.get(110), this.paddingTop = r.get(88).top, this.paddingBottom = r.get(88).bottom, this.showSlider = l.showSlider, this.autohide = l.autohide, this.pixelRatio = s, this.typicalHalfwidthCharacterWidth = c.typicalHalfwidthCharacterWidth, this.lineHeight = r.get(68), this.minimapLeft = a.minimapLeft, this.minimapWidth = a.minimapWidth, this.minimapHeight = o.height, this.canvasInnerWidth = a.minimapCanvasInnerWidth, this.canvasInnerHeight = a.minimapCanvasInnerHeight, this.canvasOuterWidth = a.minimapCanvasOuterWidth, this.canvasOuterHeight = a.minimapCanvasOuterHeight, this.isSampling = a.minimapIsSampling, this.editorHeight = o.height, this.fontScale = a.minimapScale, this.minimapLineHeight = a.minimapLineHeight, this.minimapCharWidth = 1 * this.fontScale, this.sectionHeaderFontFamily = nFt, this.sectionHeaderFontSize = l.sectionHeaderFontSize * s, this.sectionHeaderLetterSpacing = l.sectionHeaderLetterSpacing, this.sectionHeaderFontColor = p1r._getSectionHeaderColor(n, i.getColor(1)), this.charRenderer = G9(()=>Z9c.create(this.fontScale, c.fontFamily)), this.defaultBackgroundColor = i.getColor(2), this.backgroundColor = p1r._getMinimapBackground(n, this.defaultBackgroundColor), this.foregroundAlpha = p1r._getMinimapForegroundOpacity(n);
    }
    static _getMinimapBackground(t, n) {
        const i = t.getColor(XLc);
        return i ? new Uze(i.rgba.r, i.rgba.g, i.rgba.b, Math.round(255 * i.rgba.a)) : n;
    }
    static _getMinimapForegroundOpacity(t) {
        const n = t.getColor(ZLc);
        return n ? Uze._clamp(Math.round(255 * n.rgba.a)) : 255;
    }
    static _getSectionHeaderColor(t, n) {
        const i = t.getColor(p1);
        return i ? new Uze(i.rgba.r, i.rgba.g, i.rgba.b, Math.round(255 * i.rgba.a)) : n;
    }
    equals(t) {
        return this.renderMinimap === t.renderMinimap && this.size === t.size && this.minimapHeightIsEditorHeight === t.minimapHeightIsEditorHeight && this.scrollBeyondLastLine === t.scrollBeyondLastLine && this.paddingTop === t.paddingTop && this.paddingBottom === t.paddingBottom && this.showSlider === t.showSlider && this.autohide === t.autohide && this.pixelRatio === t.pixelRatio && this.typicalHalfwidthCharacterWidth === t.typicalHalfwidthCharacterWidth && this.lineHeight === t.lineHeight && this.minimapLeft === t.minimapLeft && this.minimapWidth === t.minimapWidth && this.minimapHeight === t.minimapHeight && this.canvasInnerWidth === t.canvasInnerWidth && this.canvasInnerHeight === t.canvasInnerHeight && this.canvasOuterWidth === t.canvasOuterWidth && this.canvasOuterHeight === t.canvasOuterHeight && this.isSampling === t.isSampling && this.editorHeight === t.editorHeight && this.fontScale === t.fontScale && this.minimapLineHeight === t.minimapLineHeight && this.minimapCharWidth === t.minimapCharWidth && this.sectionHeaderFontSize === t.sectionHeaderFontSize && this.sectionHeaderLetterSpacing === t.sectionHeaderLetterSpacing && this.defaultBackgroundColor && this.defaultBackgroundColor.equals(t.defaultBackgroundColor) && this.backgroundColor && this.backgroundColor.equals(t.backgroundColor) && this.foregroundAlpha === t.foregroundAlpha;
    }
}, t6c = class m1r {
    constructor(t, n, i, r, s, o, a, c, l){
        this.scrollTop = t, this.scrollHeight = n, this.sliderNeeded = i, this._computedSliderRatio = r, this.sliderTop = s, this.sliderHeight = o, this.topPaddingLineCount = a, this.startLineNumber = c, this.endLineNumber = l;
    }
    getDesiredScrollTopFromDelta(t) {
        return Math.round(this.scrollTop + t / this._computedSliderRatio);
    }
    getDesiredScrollTopFromTouchLocation(t) {
        return Math.round((t - this.sliderHeight / 2) / this._computedSliderRatio);
    }
    intersectWithViewport(t) {
        const n = Math.max(this.startLineNumber, t.startLineNumber), i = Math.min(this.endLineNumber, t.endLineNumber);
        return n > i ? null : [
            n,
            i
        ];
    }
    getYForLineNumber(t, n) {
        return +(t - this.startLineNumber + this.topPaddingLineCount) * n;
    }
    static create(t, n, i, r, s, o, a, c, l, u, h) {
        const p = t.pixelRatio, g = t.minimapLineHeight, f = Math.floor(t.canvasInnerHeight / g), v = t.lineHeight;
        if (t.minimapHeightIsEditorHeight) {
            let D = c * t.lineHeight + t.paddingTop + t.paddingBottom;
            t.scrollBeyondLastLine && (D += Math.max(0, s - t.lineHeight - t.paddingBottom));
            const P = Math.max(1, Math.floor(s * s / D)), N = Math.max(0, t.minimapHeight - P), O = N / (u - s), F = l * O, H = N > 0, $ = Math.floor(t.canvasInnerHeight / t.minimapLineHeight), W = Math.floor(t.paddingTop / t.lineHeight);
            return new m1r(l, u, H, O, F, P, W, 1, Math.min(a, $));
        }
        let b;
        if (o && i !== a) {
            const D = i - n + 1;
            b = Math.floor(D * g / p);
        } else {
            const D = s / v;
            b = Math.floor(D * g / p);
        }
        const y = Math.floor(t.paddingTop / v);
        let T = Math.floor(t.paddingBottom / v);
        if (t.scrollBeyondLastLine) {
            const D = s / v;
            T = Math.max(T, D - 1);
        }
        let E;
        if (T > 0) {
            const D = s / v;
            E = (y + a + T - D - 1) * g / p;
        } else E = Math.max(0, (y + a) * g / p - b);
        E = Math.min(t.minimapHeight - b, E);
        const A = E / (u - s), R = l * A;
        if (f >= y + a + T) {
            const D = E > 0;
            return new m1r(l, u, D, A, R, b, y, 1, a);
        } else {
            let D;
            n > 1 ? D = n + y : D = Math.max(1, l / v);
            let P, N = Math.max(1, Math.floor(D - R * p / g));
            N < y ? (P = y - N + 1, N = 1) : (P = 0, N = Math.max(1, N - y)), h && h.scrollHeight === u && (h.scrollTop > l && (N = Math.min(N, h.startLineNumber), P = Math.max(P, h.topPaddingLineCount)), h.scrollTop < l && (N = Math.max(N, h.startLineNumber), P = Math.min(P, h.topPaddingLineCount)));
            const O = Math.min(a, N - P + f - 1), F = (l - r) / v;
            let H;
            return l >= t.paddingTop ? H = (n - N + P + F) * g / p : H = l / t.paddingTop * (P + F) * g / p, new m1r(l, u, !0, A, H, b, P, N, O);
        }
    }
}, V_i = class {
    constructor(t){
        this.dy = t;
    }
    onContentChanged() {
        this.dy = -1;
    }
    onTokensChanged() {
        this.dy = -1;
    }
}, V_i.INVALID = new V_i(-1), Jes = V_i, ets = class {
    constructor(e, t, n){
        this.renderedLayout = e, this._imageData = t, this._renderedLines = new Mes({
            createLine: ()=>Jes.INVALID
        }), this._renderedLines._set(e.startLineNumber, n);
    }
    linesEquals(e) {
        if (!this.scrollEquals(e)) return !1;
        const n = this._renderedLines._get().lines;
        for(let i = 0, r = n.length; i < r; i++)if (n[i].dy === -1) return !1;
        return !0;
    }
    scrollEquals(e) {
        return this.renderedLayout.startLineNumber === e.startLineNumber && this.renderedLayout.endLineNumber === e.endLineNumber;
    }
    _get() {
        const e = this._renderedLines._get();
        return {
            imageData: this._imageData,
            rendLineNumberStart: e.rendLineNumberStart,
            lines: e.lines
        };
    }
    onLinesChanged(e, t) {
        return this._renderedLines.onLinesChanged(e, t);
    }
    onLinesDeleted(e, t) {
        this._renderedLines.onLinesDeleted(e, t);
    }
    onLinesInserted(e, t) {
        this._renderedLines.onLinesInserted(e, t);
    }
    onTokensChanged(e) {
        return this._renderedLines.onTokensChanged(e);
    }
}, n6c = class Dkm {
    constructor(t, n, i, r){
        this._backgroundFillData = Dkm._createBackgroundFillData(n, i, r), this._buffers = [
            t.createImageData(n, i),
            t.createImageData(n, i)
        ], this._lastUsedBuffer = 0;
    }
    getBuffer() {
        this._lastUsedBuffer = 1 - this._lastUsedBuffer;
        const t = this._buffers[this._lastUsedBuffer];
        return t.data.set(this._backgroundFillData), t;
    }
    static _createBackgroundFillData(t, n, i) {
        const r = i.r, s = i.g, o = i.b, a = i.a, c = new Uint8ClampedArray(t * n * 4);
        let l = 0;
        for(let u = 0; u < n; u++)for(let h = 0; h < t; h++)c[l] = r, c[l + 1] = s, c[l + 2] = o, c[l + 3] = a, l += 4;
        return c;
    }
}, tts = class FIa {
    constructor(t, n){
        this.samplingRatio = t, this.minimapLines = n;
    }
    static compute(t, n, i) {
        if (t.renderMinimap === 0 || !t.isSampling) return [
            null,
            []
        ];
        const { minimapLineCount: r } = eQr.computeContainedMinimapLineCount({
            viewLineCount: n,
            scrollBeyondLastLine: t.scrollBeyondLastLine,
            paddingTop: t.paddingTop,
            paddingBottom: t.paddingBottom,
            height: t.editorHeight,
            lineHeight: t.lineHeight,
            pixelRatio: t.pixelRatio
        }), s = n / r, o = s / 2;
        if (!i || i.minimapLines.length === 0) {
            const b = [];
            if (b[0] = 1, r > 1) {
                for(let y = 0, T = r - 1; y < T; y++)b[y] = Math.round(y * s + o);
                b[r - 1] = n;
            }
            return [
                new FIa(s, b),
                []
            ];
        }
        const a = i.minimapLines, c = a.length, l = [];
        let u = 0, h = 0, p = 1;
        const g = 10;
        let f = [], v = null;
        for(let b = 0; b < r; b++){
            const y = Math.max(p, Math.round(b * s)), T = Math.max(y, Math.round((b + 1) * s));
            for(; u < c && a[u] < y;){
                if (f.length < g) {
                    const A = u + 1 + h;
                    v && v.type === "deleted" && v._oldIndex === u - 1 ? v.deleteToLineNumber++ : (v = {
                        type: "deleted",
                        _oldIndex: u,
                        deleteFromLineNumber: A,
                        deleteToLineNumber: A
                    }, f.push(v)), h--;
                }
                u++;
            }
            let E;
            if (u < c && a[u] <= T) E = a[u], u++;
            else if (b === 0 ? E = 1 : b + 1 === r ? E = n : E = Math.round(b * s + o), f.length < g) {
                const A = u + 1 + h;
                v && v.type === "inserted" && v._i === b - 1 ? v.insertToLineNumber++ : (v = {
                    type: "inserted",
                    _i: b,
                    insertFromLineNumber: A,
                    insertToLineNumber: A
                }, f.push(v)), h++;
            }
            l[b] = E, p = E;
        }
        if (f.length < g) for(; u < c;){
            const b = u + 1 + h;
            v && v.type === "deleted" && v._oldIndex === u - 1 ? v.deleteToLineNumber++ : (v = {
                type: "deleted",
                _oldIndex: u,
                deleteFromLineNumber: b,
                deleteToLineNumber: b
            }, f.push(v)), h--, u++;
        }
        else f = [
            {
                type: "flush"
            }
        ];
        return [
            new FIa(s, l),
            f
        ];
    }
    modelLineToMinimapLine(t) {
        return Math.min(this.minimapLines.length, Math.max(1, Math.round(t / this.samplingRatio)));
    }
    modelLineRangeToMinimapLineRange(t, n) {
        let i = this.modelLineToMinimapLine(t) - 1;
        for(; i > 0 && this.minimapLines[i - 1] >= t;)i--;
        let r = this.modelLineToMinimapLine(n) - 1;
        for(; r + 1 < this.minimapLines.length && this.minimapLines[r + 1] <= n;)r++;
        if (i === r) {
            const s = this.minimapLines[i];
            if (s < t || s > n) return null;
        }
        return [
            i + 1,
            r + 1
        ];
    }
    decorationLineRangeToMinimapLineRange(t, n) {
        let i = this.modelLineToMinimapLine(t), r = this.modelLineToMinimapLine(n);
        return t !== n && r === i && (r === this.minimapLines.length ? i > 1 && i-- : r++), [
            i,
            r
        ];
    }
    onLinesDeleted(t) {
        const n = t.toLineNumber - t.fromLineNumber + 1;
        let i = this.minimapLines.length, r = 0;
        for(let s = this.minimapLines.length - 1; s >= 0 && !(this.minimapLines[s] < t.fromLineNumber); s--)this.minimapLines[s] <= t.toLineNumber ? (this.minimapLines[s] = Math.max(1, t.fromLineNumber - 1), i = Math.min(i, s), r = Math.max(r, s)) : this.minimapLines[s] -= n;
        return [
            i,
            r
        ];
    }
    onLinesInserted(t) {
        const n = t.toLineNumber - t.fromLineNumber + 1;
        for(let i = this.minimapLines.length - 1; i >= 0 && !(this.minimapLines[i] < t.fromLineNumber); i--)this.minimapLines[i] += n;
    }
}, i6c = class extends mW {
    constructor(e){
        super(e), this._sectionHeaderCache = new ag(10, 1.5), this.tokensColorTracker = jJr.getInstance(), this._selections = [], this._minimapSelections = null, this.options = new Qes(this._context.configuration, this._context.theme, this.tokensColorTracker);
        const [t] = tts.compute(this.options, this._context.viewModel.getLineCount(), null);
        this._samplingState = t, this._shouldCheckSampling = !1, this._actual = new r6c(e.theme, this);
    }
    dispose() {
        this._actual.dispose(), super.dispose();
    }
    getDomNode() {
        return this._actual.getDomNode();
    }
    _onOptionsMaybeChanged() {
        const e = new Qes(this._context.configuration, this._context.theme, this.tokensColorTracker);
        return this.options.equals(e) ? !1 : (this.options = e, this._recreateLineSampling(), this._actual.onDidChangeOptions(), !0);
    }
    onConfigurationChanged(e) {
        return this._onOptionsMaybeChanged();
    }
    onCursorStateChanged(e) {
        return this._selections = e.selections, this._minimapSelections = null, this._actual.onSelectionChanged();
    }
    onDecorationsChanged(e) {
        return e.affectsMinimap ? this._actual.onDecorationsChanged() : !1;
    }
    onFlushed(e) {
        return this._samplingState && (this._shouldCheckSampling = !0), this._actual.onFlushed();
    }
    onLinesChanged(e) {
        if (this._samplingState) {
            const t = this._samplingState.modelLineRangeToMinimapLineRange(e.fromLineNumber, e.fromLineNumber + e.count - 1);
            return t ? this._actual.onLinesChanged(t[0], t[1] - t[0] + 1) : !1;
        } else return this._actual.onLinesChanged(e.fromLineNumber, e.count);
    }
    onLinesDeleted(e) {
        if (this._samplingState) {
            const [t, n] = this._samplingState.onLinesDeleted(e);
            return t <= n && this._actual.onLinesChanged(t + 1, n - t + 1), this._shouldCheckSampling = !0, !0;
        } else return this._actual.onLinesDeleted(e.fromLineNumber, e.toLineNumber);
    }
    onLinesInserted(e) {
        return this._samplingState ? (this._samplingState.onLinesInserted(e), this._shouldCheckSampling = !0, !0) : this._actual.onLinesInserted(e.fromLineNumber, e.toLineNumber);
    }
    onScrollChanged(e) {
        return this._actual.onScrollChanged();
    }
    onThemeChanged(e) {
        return this._actual.onThemeChanged(), this._onOptionsMaybeChanged(), !0;
    }
    onTokensChanged(e) {
        if (this._samplingState) {
            const t = [];
            for (const n of e.ranges){
                const i = this._samplingState.modelLineRangeToMinimapLineRange(n.fromLineNumber, n.toLineNumber);
                i && t.push({
                    fromLineNumber: i[0],
                    toLineNumber: i[1]
                });
            }
            return t.length ? this._actual.onTokensChanged(t) : !1;
        } else return this._actual.onTokensChanged(e.ranges);
    }
    onTokensColorsChanged(e) {
        return this._onOptionsMaybeChanged(), this._actual.onTokensColorsChanged();
    }
    onZonesChanged(e) {
        return this._actual.onZonesChanged();
    }
    prepareRender(e) {
        this._shouldCheckSampling && (this._shouldCheckSampling = !1, this._recreateLineSampling());
    }
    render(e) {
        let t = e.visibleRange.startLineNumber, n = e.visibleRange.endLineNumber;
        this._samplingState && (t = this._samplingState.modelLineToMinimapLine(t), n = this._samplingState.modelLineToMinimapLine(n));
        const i = {
            viewportContainsWhitespaceGaps: e.viewportData.whitespaceViewportData.length > 0,
            scrollWidth: e.scrollWidth,
            scrollHeight: e.scrollHeight,
            viewportStartLineNumber: t,
            viewportEndLineNumber: n,
            viewportStartLineNumberVerticalOffset: e.getVerticalOffsetForLineNumber(t),
            scrollTop: e.scrollTop,
            scrollLeft: e.scrollLeft,
            viewportWidth: e.viewportWidth,
            viewportHeight: e.viewportHeight
        };
        this._actual.render(i);
    }
    _recreateLineSampling() {
        this._minimapSelections = null;
        const e = !!this._samplingState, [t, n] = tts.compute(this.options, this._context.viewModel.getLineCount(), this._samplingState);
        if (this._samplingState = t, e && this._samplingState) for (const i of n)switch(i.type){
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
    getLineContent(e) {
        return this._samplingState ? this._context.viewModel.getLineContent(this._samplingState.minimapLines[e - 1]) : this._context.viewModel.getLineContent(e);
    }
    getLineMaxColumn(e) {
        return this._samplingState ? this._context.viewModel.getLineMaxColumn(this._samplingState.minimapLines[e - 1]) : this._context.viewModel.getLineMaxColumn(e);
    }
    getMinimapLinesRenderingData(e, t, n) {
        if (this._samplingState) {
            const i = [];
            for(let r = 0, s = t - e + 1; r < s; r++)n[r] ? i[r] = this._context.viewModel.getViewLineData(this._samplingState.minimapLines[e + r - 1]) : i[r] = null;
            return i;
        }
        return this._context.viewModel.getMinimapLinesRenderingData(e, t, n).data;
    }
    getSelections() {
        if (this._minimapSelections === null) if (this._samplingState) {
            this._minimapSelections = [];
            for (const e of this._selections){
                const [t, n] = this._samplingState.decorationLineRangeToMinimapLineRange(e.startLineNumber, e.endLineNumber);
                this._minimapSelections.push(new za(t, e.startColumn, n, e.endColumn));
            }
        } else this._minimapSelections = this._selections;
        return this._minimapSelections;
    }
    getMinimapDecorationsInViewport(e, t) {
        return this._getMinimapDecorationsInViewport(e, t).filter((n)=>!n.options.minimap?.sectionHeaderStyle);
    }
    getSectionHeaderDecorationsInViewport(e, t) {
        const n = this.options.sectionHeaderFontSize / this.options.minimapLineHeight;
        return e = Math.floor(Math.max(1, e - n)), this._getMinimapDecorationsInViewport(e, t).filter((i)=>!!i.options.minimap?.sectionHeaderStyle);
    }
    _getMinimapDecorationsInViewport(e, t) {
        let n;
        if (this._samplingState) {
            const r = this._samplingState.minimapLines[e - 1], s = this._samplingState.minimapLines[t - 1];
            n = new dt(r, 1, s, this._context.viewModel.getLineMaxColumn(s));
        } else n = new dt(e, 1, t, this._context.viewModel.getLineMaxColumn(t));
        const i = this._context.viewModel.getMinimapDecorationsInRange(n);
        if (this._samplingState) {
            const r = [];
            for (const s of i){
                if (!s.options.minimap) continue;
                const o = s.range, a = this._samplingState.modelLineToMinimapLine(o.startLineNumber), c = this._samplingState.modelLineToMinimapLine(o.endLineNumber);
                r.push(new GJr(new dt(a, o.startColumn, c, o.endColumn), s.options));
            }
            return r;
        }
        return i;
    }
    getSectionHeaderText(e, t) {
        const n = e.options.minimap?.sectionHeaderText;
        if (!n) return null;
        const i = this._sectionHeaderCache.get(n);
        if (i) return i;
        const r = t(n);
        return this._sectionHeaderCache.set(n, r), r;
    }
    getOptions() {
        return this._context.viewModel.model.getOptions();
    }
    revealLineNumber(e) {
        this._samplingState && (e = this._samplingState.minimapLines[e - 1]), this._context.viewModel.revealRange("mouse", !1, new dt(e, 1, e, 1), hW.Center, 0);
    }
    setScrollTop(e) {
        this._context.viewModel.viewLayout.setScrollPosition({
            scrollTop: e
        }, 1);
    }
}, r6c = class qXn extends we {
    constructor(t, n){
        super(), this._renderDecorations = !1, this._gestureInProgress = !1, this._theme = t, this._model = n, this._lastRenderData = null, this._buffers = null, this._selectionColor = this._theme.getColor(iZr), this._domNode = x_(document.createElement("div")), jge.write(this._domNode, 9), this._domNode.setClassName(this._getMinimapDomNodeClassName()), this._domNode.setPosition("absolute"), this._domNode.setAttribute("role", "presentation"), this._domNode.setAttribute("aria-hidden", "true"), this._shadow = x_(document.createElement("div")), this._shadow.setClassName("minimap-shadow-hidden"), this._domNode.appendChild(this._shadow), this._canvas = x_(document.createElement("canvas")), this._canvas.setPosition("absolute"), this._canvas.setLeft(0), this._domNode.appendChild(this._canvas), this._decorationsCanvas = x_(document.createElement("canvas")), this._decorationsCanvas.setPosition("absolute"), this._decorationsCanvas.setClassName("minimap-decorations-layer"), this._decorationsCanvas.setLeft(0), this._domNode.appendChild(this._decorationsCanvas), this._slider = x_(document.createElement("div")), this._slider.setPosition("absolute"), this._slider.setClassName("minimap-slider"), this._slider.setLayerHinting(!0), this._slider.setContain("strict"), this._domNode.appendChild(this._slider), this._sliderHorizontal = x_(document.createElement("div")), this._sliderHorizontal.setPosition("absolute"), this._sliderHorizontal.setClassName("minimap-slider-horizontal"), this._slider.appendChild(this._sliderHorizontal), this._applyLayout(), this._pointerDownListener = zp(this._domNode.domNode, Fn.POINTER_DOWN, (i)=>{
            if (i.preventDefault(), this._model.options.renderMinimap === 0 || !this._lastRenderData) return;
            if (this._model.options.size !== "proportional") {
                if (i.button === 0 && this._lastRenderData) {
                    const l = Nk(this._slider.domNode), u = l.top + l.height / 2;
                    this._startSliderDragging(i, u, this._lastRenderData.renderedLayout);
                }
                return;
            }
            const s = this._model.options.minimapLineHeight, o = this._model.options.canvasInnerHeight / this._model.options.canvasOuterHeight * i.offsetY;
            let c = Math.floor(o / s) + this._lastRenderData.renderedLayout.startLineNumber - this._lastRenderData.renderedLayout.topPaddingLineCount;
            c = Math.min(c, this._model.getLineCount()), this._model.revealLineNumber(c);
        }), this._sliderPointerMoveMonitor = new Upt, this._sliderPointerDownListener = zp(this._slider.domNode, Fn.POINTER_DOWN, (i)=>{
            i.preventDefault(), i.stopPropagation(), i.button === 0 && this._lastRenderData && this._startSliderDragging(i, i.pageY, this._lastRenderData.renderedLayout);
        }), this._gestureDisposable = zT.addTarget(this._domNode.domNode), this._sliderTouchStartListener = Xt(this._domNode.domNode, ov.Start, (i)=>{
            i.preventDefault(), i.stopPropagation(), this._lastRenderData && (this._slider.toggleClassName("active", !0), this._gestureInProgress = !0, this.scrollDueToTouchEvent(i));
        }, {
            passive: !1
        }), this._sliderTouchMoveListener = Xt(this._domNode.domNode, ov.Change, (i)=>{
            i.preventDefault(), i.stopPropagation(), this._lastRenderData && this._gestureInProgress && this.scrollDueToTouchEvent(i);
        }, {
            passive: !1
        }), this._sliderTouchEndListener = zp(this._domNode.domNode, ov.End, (i)=>{
            i.preventDefault(), i.stopPropagation(), this._gestureInProgress = !1, this._slider.toggleClassName("active", !1);
        });
    }
    _startSliderDragging(t, n, i) {
        if (!t.target || !(t.target instanceof Element)) return;
        const r = t.pageX;
        this._slider.toggleClassName("active", !0);
        const s = (o, a)=>{
            const c = Nk(this._domNode.domNode), l = Math.min(Math.abs(a - r), Math.abs(a - c.left), Math.abs(a - c.left - c.width));
            if (Oo && l > J9c) {
                this._model.setScrollTop(i.scrollTop);
                return;
            }
            const u = o - n;
            this._model.setScrollTop(i.getDesiredScrollTopFromDelta(u));
        };
        t.pageY !== n && s(t.pageY, r), this._sliderPointerMoveMonitor.startMonitoring(t.target, t.pointerId, t.buttons, (o)=>s(o.pageY, o.pageX), ()=>{
            this._slider.toggleClassName("active", !1);
        });
    }
    scrollDueToTouchEvent(t) {
        const n = this._domNode.domNode.getBoundingClientRect().top, i = this._lastRenderData.renderedLayout.getDesiredScrollTopFromTouchLocation(t.pageY - n);
        this._model.setScrollTop(i);
    }
    dispose() {
        this._pointerDownListener.dispose(), this._sliderPointerMoveMonitor.dispose(), this._sliderPointerDownListener.dispose(), this._gestureDisposable.dispose(), this._sliderTouchStartListener.dispose(), this._sliderTouchMoveListener.dispose(), this._sliderTouchEndListener.dispose(), super.dispose();
    }
    _getMinimapDomNodeClassName() {
        const t = [
            "minimap"
        ];
        return this._model.options.showSlider === "always" ? t.push("slider-always") : t.push("slider-mouseover"), this._model.options.autohide && t.push("autohide"), t.join(" ");
    }
    getDomNode() {
        return this._domNode;
    }
    _applyLayout() {
        this._domNode.setLeft(this._model.options.minimapLeft), this._domNode.setWidth(this._model.options.minimapWidth), this._domNode.setHeight(this._model.options.minimapHeight), this._shadow.setHeight(this._model.options.minimapHeight), this._canvas.setWidth(this._model.options.canvasOuterWidth), this._canvas.setHeight(this._model.options.canvasOuterHeight), this._canvas.domNode.width = this._model.options.canvasInnerWidth, this._canvas.domNode.height = this._model.options.canvasInnerHeight, this._decorationsCanvas.setWidth(this._model.options.canvasOuterWidth), this._decorationsCanvas.setHeight(this._model.options.canvasOuterHeight), this._decorationsCanvas.domNode.width = this._model.options.canvasInnerWidth, this._decorationsCanvas.domNode.height = this._model.options.canvasInnerHeight, this._slider.setWidth(this._model.options.minimapWidth);
    }
    _getBuffer() {
        return this._buffers || this._model.options.canvasInnerWidth > 0 && this._model.options.canvasInnerHeight > 0 && (this._buffers = new n6c(this._canvas.domNode.getContext("2d"), this._model.options.canvasInnerWidth, this._model.options.canvasInnerHeight, this._model.options.backgroundColor)), this._buffers ? this._buffers.getBuffer() : null;
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
    onLinesChanged(t, n) {
        return this._lastRenderData ? this._lastRenderData.onLinesChanged(t, n) : !1;
    }
    onLinesDeleted(t, n) {
        return this._lastRenderData?.onLinesDeleted(t, n), !0;
    }
    onLinesInserted(t, n) {
        return this._lastRenderData?.onLinesInserted(t, n), !0;
    }
    onScrollChanged() {
        return this._renderDecorations = !0, !0;
    }
    onThemeChanged() {
        return this._selectionColor = this._theme.getColor(iZr), this._renderDecorations = !0, !0;
    }
    onTokensChanged(t) {
        return this._lastRenderData ? this._lastRenderData.onTokensChanged(t) : !1;
    }
    onTokensColorsChanged() {
        return this._lastRenderData = null, this._buffers = null, !0;
    }
    onZonesChanged() {
        return this._lastRenderData = null, !0;
    }
    render(t) {
        if (this._model.options.renderMinimap === 0) {
            this._shadow.setClassName("minimap-shadow-hidden"), this._sliderHorizontal.setWidth(0), this._sliderHorizontal.setHeight(0);
            return;
        }
        t.scrollLeft + t.viewportWidth >= t.scrollWidth ? this._shadow.setClassName("minimap-shadow-hidden") : this._shadow.setClassName("minimap-shadow-visible");
        const i = t6c.create(this._model.options, t.viewportStartLineNumber, t.viewportEndLineNumber, t.viewportStartLineNumberVerticalOffset, t.viewportHeight, t.viewportContainsWhitespaceGaps, this._model.getLineCount(), this._model.getRealLineCount(), t.scrollTop, t.scrollHeight, this._lastRenderData ? this._lastRenderData.renderedLayout : null);
        this._slider.setDisplay(i.sliderNeeded ? "block" : "none"), this._slider.setTop(i.sliderTop), this._slider.setHeight(i.sliderHeight), this._sliderHorizontal.setLeft(0), this._sliderHorizontal.setWidth(this._model.options.minimapWidth), this._sliderHorizontal.setTop(0), this._sliderHorizontal.setHeight(i.sliderHeight), this.renderDecorations(i), this._lastRenderData = this.renderLines(i);
    }
    renderDecorations(t) {
        if (this._renderDecorations) {
            this._renderDecorations = !1;
            const n = this._model.getSelections();
            n.sort(dt.compareRangesUsingStarts);
            const i = this._model.getMinimapDecorationsInViewport(t.startLineNumber, t.endLineNumber);
            i.sort((p, g)=>(p.options.zIndex || 0) - (g.options.zIndex || 0));
            const { canvasInnerWidth: r, canvasInnerHeight: s } = this._model.options, o = this._model.options.minimapLineHeight, a = this._model.options.minimapCharWidth, c = this._model.getOptions().tabSize, l = this._decorationsCanvas.domNode.getContext("2d");
            l.clearRect(0, 0, r, s);
            const u = new nts(t.startLineNumber, t.endLineNumber, !1);
            this._renderSelectionLineHighlights(l, n, u, t, o), this._renderDecorationsLineHighlights(l, i, u, t, o);
            const h = new nts(t.startLineNumber, t.endLineNumber, null);
            this._renderSelectionsHighlights(l, n, h, t, o, c, a, r), this._renderDecorationsHighlights(l, i, h, t, o, c, a, r), this._renderSectionHeaders(t);
        }
    }
    _renderSelectionLineHighlights(t, n, i, r, s) {
        if (!this._selectionColor || this._selectionColor.isTransparent()) return;
        t.fillStyle = this._selectionColor.transparent(.5).toString();
        let o = 0, a = 0;
        for (const c of n){
            const l = r.intersectWithViewport(c);
            if (!l) continue;
            const [u, h] = l;
            for(let f = u; f <= h; f++)i.set(f, !0);
            const p = r.getYForLineNumber(u, s), g = r.getYForLineNumber(h, s);
            a >= p || (a > o && t.fillRect(gwe, o, t.canvas.width, a - o), o = p), a = g;
        }
        a > o && t.fillRect(gwe, o, t.canvas.width, a - o);
    }
    _renderDecorationsLineHighlights(t, n, i, r, s) {
        const o = new Map;
        for(let a = n.length - 1; a >= 0; a--){
            const c = n[a], l = c.options.minimap;
            if (!l || l.position !== 1) continue;
            const u = r.intersectWithViewport(c.range);
            if (!u) continue;
            const [h, p] = u, g = l.getColor(this._theme.value);
            if (!g || g.isTransparent()) continue;
            let f = o.get(g.toString());
            f || (f = g.transparent(.5).toString(), o.set(g.toString(), f)), t.fillStyle = f;
            for(let v = h; v <= p; v++){
                if (i.has(v)) continue;
                i.set(v, !0);
                const b = r.getYForLineNumber(h, s);
                t.fillRect(gwe, b, t.canvas.width, s);
            }
        }
    }
    _renderSelectionsHighlights(t, n, i, r, s, o, a, c) {
        if (!(!this._selectionColor || this._selectionColor.isTransparent())) for (const l of n){
            const u = r.intersectWithViewport(l);
            if (!u) continue;
            const [h, p] = u;
            for(let g = h; g <= p; g++)this.renderDecorationOnLine(t, i, l, this._selectionColor, r, g, s, s, o, a, c);
        }
    }
    _renderDecorationsHighlights(t, n, i, r, s, o, a, c) {
        for (const l of n){
            const u = l.options.minimap;
            if (!u) continue;
            const h = r.intersectWithViewport(l.range);
            if (!h) continue;
            const [p, g] = h, f = u.getColor(this._theme.value);
            if (!(!f || f.isTransparent())) for(let v = p; v <= g; v++)switch(u.position){
                case 1:
                    this.renderDecorationOnLine(t, i, l.range, f, r, v, s, s, o, a, c);
                    continue;
                case 2:
                    {
                        const b = r.getYForLineNumber(v, s);
                        this.renderDecoration(t, f, 2, b, e6c, s);
                        continue;
                    }
            }
        }
    }
    renderDecorationOnLine(t, n, i, r, s, o, a, c, l, u, h) {
        const p = s.getYForLineNumber(o, c);
        if (p + a < 0 || p > this._model.options.canvasInnerHeight) return;
        const { startLineNumber: g, endLineNumber: f } = i, v = g === o ? i.startColumn : 1, b = f === o ? i.endColumn : this._model.getLineMaxColumn(o), y = this.getXOffsetForPosition(n, o, v, l, u, h), T = this.getXOffsetForPosition(n, o, b, l, u, h);
        this.renderDecoration(t, r, y, p, T - y, a);
    }
    getXOffsetForPosition(t, n, i, r, s, o) {
        if (i === 1) return gwe;
        if ((i - 1) * s >= o) return o;
        let c = t.get(n);
        if (!c) {
            const l = this._model.getLineContent(n);
            c = [
                gwe
            ];
            let u = gwe;
            for(let h = 1; h < l.length + 1; h++){
                const p = l.charCodeAt(h - 1), g = p === En.Tab ? r * s : Dqe(p) ? 2 * s : s, f = u + g;
                if (f >= o) {
                    c[h] = o;
                    break;
                }
                c[h] = f, u = f;
            }
            t.set(n, c);
        }
        return i - 1 < c.length ? c[i - 1] : o;
    }
    renderDecoration(t, n, i, r, s, o) {
        t.fillStyle = n && n.toString() || "", t.fillRect(i, r, s, o);
    }
    _renderSectionHeaders(t) {
        const n = this._model.options.minimapLineHeight, i = this._model.options.sectionHeaderFontSize, r = this._model.options.sectionHeaderLetterSpacing, s = i * 1.5, { canvasInnerWidth: o } = this._model.options, a = this._model.options.backgroundColor, c = `rgb(${a.r} ${a.g} ${a.b} / .7)`, l = this._model.options.sectionHeaderFontColor, u = `rgb(${l.r} ${l.g} ${l.b})`, h = u, p = this._decorationsCanvas.domNode.getContext("2d");
        p.letterSpacing = r + "px", p.font = "500 " + i + "px " + this._model.options.sectionHeaderFontFamily, p.strokeStyle = h, p.lineWidth = .2;
        const g = this._model.getSectionHeaderDecorationsInViewport(t.startLineNumber, t.endLineNumber);
        g.sort((v, b)=>v.range.startLineNumber - b.range.startLineNumber);
        const f = qXn._fitSectionHeader.bind(null, p, o - gwe);
        for (const v of g){
            const b = t.getYForLineNumber(v.range.startLineNumber, n) + i, y = b - i, T = y + 2, E = this._model.getSectionHeaderText(v, f);
            qXn._renderSectionLabel(p, E, v.options.minimap?.sectionHeaderStyle === 2, c, u, o, y, s, b, T);
        }
    }
    static _fitSectionHeader(t, n, i) {
        if (!i) return i;
        const r = "\u2026", s = t.measureText(i).width, o = t.measureText(r).width;
        if (s <= n || s <= o) return i;
        const a = i.length, c = s / i.length, l = Math.floor((n - o) / c) - 1;
        let u = Math.ceil(l / 2);
        for(; u > 0 && /\s/.test(i[u - 1]);)--u;
        return i.substring(0, u) + r + i.substring(a - (l - u));
    }
    static _renderSectionLabel(t, n, i, r, s, o, a, c, l, u) {
        n && (t.fillStyle = r, t.fillRect(0, a, o, c), t.fillStyle = s, t.fillText(n, gwe, l)), i && (t.beginPath(), t.moveTo(0, u), t.lineTo(o, u), t.closePath(), t.stroke());
    }
    renderLines(t) {
        const n = t.startLineNumber, i = t.endLineNumber, r = this._model.options.minimapLineHeight;
        if (this._lastRenderData && this._lastRenderData.linesEquals(t)) {
            const q = this._lastRenderData._get();
            return new ets(t, q.imageData, q.lines);
        }
        const s = this._getBuffer();
        if (!s) return null;
        const [o, a, c] = qXn._renderUntouchedLines(s, t.topPaddingLineCount, n, i, r, this._lastRenderData), l = this._model.getMinimapLinesRenderingData(n, i, c), u = this._model.getOptions().tabSize, h = this._model.options.defaultBackgroundColor, p = this._model.options.backgroundColor, g = this._model.options.foregroundAlpha, f = this._model.tokensColorTracker, v = f.backgroundIsLight(), b = this._model.options.renderMinimap, y = this._model.options.charRenderer(), T = this._model.options.fontScale, E = this._model.options.minimapCharWidth, R = (b === 1 ? 2 : 3) * T, D = r > R ? Math.floor((r - R) / 2) : 0, P = p.a / 255, N = new Uze(Math.round((p.r - h.r) * P + h.r), Math.round((p.g - h.g) * P + h.g), Math.round((p.b - h.b) * P + h.b), 255);
        let O = t.topPaddingLineCount * r;
        const F = [];
        for(let q = 0, z = i - n + 1; q < z; q++)c[q] && qXn._renderLine(s, N, p.a, v, b, E, f, g, y, O, D, u, l[q], T, r), F[q] = new Jes(O), O += r;
        const H = o === -1 ? 0 : o, W = (a === -1 ? s.height : a) - H;
        return this._canvas.domNode.getContext("2d").putImageData(s, 0, 0, 0, H, s.width, W), new ets(t, s, F);
    }
    static _renderUntouchedLines(t, n, i, r, s, o) {
        const a = [];
        if (!o) {
            for(let O = 0, F = r - i + 1; O < F; O++)a[O] = !0;
            return [
                -1,
                -1,
                a
            ];
        }
        const c = o._get(), l = c.imageData.data, u = c.rendLineNumberStart, h = c.lines, p = h.length, g = t.width, f = t.data, v = (r - i + 1) * s * g * 4;
        let b = -1, y = -1, T = -1, E = -1, A = -1, R = -1, D = n * s;
        for(let O = i; O <= r; O++){
            const F = O - i, H = O - u, $ = H >= 0 && H < p ? h[H].dy : -1;
            if ($ === -1) {
                a[F] = !0, D += s;
                continue;
            }
            const W = $ * g * 4, G = ($ + s) * g * 4, q = D * g * 4, z = (D + s) * g * 4;
            E === W && R === q ? (E = G, R = z) : (T !== -1 && (f.set(l.subarray(T, E), A), b === -1 && T === 0 && T === A && (b = E), y === -1 && E === v && T === A && (y = T)), T = W, E = G, A = q, R = z), a[F] = !1, D += s;
        }
        T !== -1 && (f.set(l.subarray(T, E), A), b === -1 && T === 0 && T === A && (b = E), y === -1 && E === v && T === A && (y = T));
        const P = b === -1 ? -1 : b / (g * 4), N = y === -1 ? -1 : y / (g * 4);
        return [
            P,
            N,
            a
        ];
    }
    static _renderLine(t, n, i, r, s, o, a, c, l, u, h, p, g, f, v) {
        const b = g.content, y = g.tokens, T = t.width - o, E = v === 1;
        let A = gwe, R = 0, D = 0;
        for(let P = 0, N = y.getCount(); P < N; P++){
            const O = y.getEndOffset(P), F = y.getForeground(P), H = a.getColor(F);
            for(; R < O; R++){
                if (A > T) return;
                const $ = b.charCodeAt(R);
                if ($ === En.Tab) {
                    const W = p - (R + D) % p;
                    D += W - 1, A += W * o;
                } else if ($ === En.Space) A += o;
                else {
                    const W = Dqe($) ? 2 : 1;
                    for(let G = 0; G < W; G++)if (s === 2 ? l.blockRenderChar(t, A, u + h, H, c, n, i, E) : l.renderChar(t, A, u + h, $, H, c, n, i, f, r, E), A += o, A > T) return;
                }
            }
        }
    }
}, nts = class {
    constructor(e, t, n){
        this._startLineNumber = e, this._endLineNumber = t, this._defaultValue = n, this._values = [];
        for(let i = 0, r = this._endLineNumber - this._startLineNumber + 1; i < r; i++)this._values[i] = n;
    }
    has(e) {
        return this.get(e) !== this._defaultValue;
    }
    set(e, t) {
        e < this._startLineNumber || e > this._endLineNumber || (this._values[e - this._startLineNumber] = t);
    }
    get(e) {
        return e < this._startLineNumber || e > this._endLineNumber ? this._defaultValue : this._values[e - this._startLineNumber];
    }
};

}
