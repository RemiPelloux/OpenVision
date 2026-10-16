import { Zu, si } from "./HVr.js";
import { H6c, gts } from "./baseRenderStrategy.js";
import { Ci, Sm } from "./color.js";
import { mts } from "./contentSegmenter.js";
import { _D, nre } from "./cursorColumns.js";
import { en } from "./dom_2.js";
import { W6c, fts } from "./fullFileRenderStrategy.wgsl.js";
import { Qfn, VK } from "./gpuDisposable.js";
import { qze, r5e } from "./gpuUtils.js";
import { K_g, sa, z_g, z_i } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { J1, Jfn } from "./viewGpuContext.js";
var K_i, sFt;
export { K_i, sFt };
var __wakaru_Y_g_initialized = false;
export function Y_g() {
if (__wakaru_Y_g_initialized) return;
__wakaru_Y_g_initialized = true;
"use strict";
x(), en(), Sm(), si(), nre(), mts(), W6c(), Qfn(), r5e(), Jfn(), H6c(), K_i = class kz extends gts {
    constructor(t, n, i, r){
        super(t, n, i, r), this.type = "fullfile", this.wgsl = fts, this._activeDoubleBufferIndex = 0, this._upToDateLines = [
            new Set,
            new Set
        ], this._visibleObjectCount = 0, this._finalRenderedLine = 0, this._scrollInitialized = !1, this._queuedBufferUpdates = [
            [],
            []
        ];
        const s = kz.maxSupportedLines * kz.maxSupportedColumns * 6 * Float32Array.BYTES_PER_ELEMENT;
        this._cellBindBuffer = this._register(VK.createBuffer(this._device, {
            label: "Monaco full file cell buffer",
            size: s,
            usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })).object, this._cellValueBuffers = [
            new ArrayBuffer(s),
            new ArrayBuffer(s)
        ];
        const o = 2;
        this._scrollOffsetBindBuffer = this._register(VK.createBuffer(this._device, {
            label: "Monaco scroll offset buffer",
            size: o * Float32Array.BYTES_PER_ELEMENT,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        })).object, this._scrollOffsetValueBuffer = new Float32Array(o);
    }
    get bindGroupEntries() {
        return [
            {
                binding: 1,
                resource: {
                    buffer: this._cellBindBuffer
                }
            },
            {
                binding: 6,
                resource: {
                    buffer: this._scrollOffsetBindBuffer
                }
            }
        ];
    }
    onConfigurationChanged(t) {
        return this._invalidateAllLines(), this._queueBufferUpdate(t), !0;
    }
    onDecorationsChanged(t) {
        return this._invalidateAllLines(), !0;
    }
    onTokensChanged(t) {
        for (const n of t.ranges)this._invalidateLineRange(n.fromLineNumber, n.toLineNumber);
        return !0;
    }
    onLinesDeleted(t) {
        return this._invalidateLinesFrom(t.fromLineNumber), this._queueBufferUpdate(t), !0;
    }
    onLinesInserted(t) {
        return this._invalidateLinesFrom(t.fromLineNumber), !0;
    }
    onLinesChanged(t) {
        return this._invalidateLineRange(t.fromLineNumber, t.fromLineNumber + t.count), !0;
    }
    onScrollChanged(t) {
        const n = sa().devicePixelRatio;
        return this._scrollOffsetValueBuffer[0] = (t?.scrollLeft ?? this._context.viewLayout.getCurrentScrollLeft()) * n, this._scrollOffsetValueBuffer[1] = (t?.scrollTop ?? this._context.viewLayout.getCurrentScrollTop()) * n, this._device.queue.writeBuffer(this._scrollOffsetBindBuffer, 0, this._scrollOffsetValueBuffer), !0;
    }
    onThemeChanged(t) {
        return this._invalidateAllLines(), !0;
    }
    onLineMappingChanged(t) {
        return this._invalidateAllLines(), this._queueBufferUpdate(t), !0;
    }
    onZonesChanged(t) {
        return this._invalidateAllLines(), this._queueBufferUpdate(t), !0;
    }
    _invalidateAllLines() {
        this._upToDateLines[0].clear(), this._upToDateLines[1].clear();
    }
    _invalidateLinesFrom(t) {
        for (const n of [
            0,
            1
        ]){
            const i = this._upToDateLines[n];
            for (const r of i)r >= t && i.delete(r);
        }
    }
    _invalidateLineRange(t, n) {
        for(let i = t; i <= n; i++)this._upToDateLines[0].delete(i), this._upToDateLines[1].delete(i);
    }
    reset() {
        this._invalidateAllLines();
        for (const t of [
            0,
            1
        ]){
            const n = new Float32Array(this._cellValueBuffers[t]);
            n.fill(0, 0, n.length), this._device.queue.writeBuffer(this._cellBindBuffer, 0, n.buffer, 0, n.byteLength);
        }
        this._finalRenderedLine = 0;
    }
    update(t, n) {
        let i = "", r, s = 0, o = 0, a = 0, c = 0, l = 0, u = 0, h, p = 0, g = 0, f = 0, v = 0, b, y, T, E, A, R = 0, D = 0, P;
        const N = sa().devicePixelRatio;
        let O;
        this._scrollInitialized || (this.onScrollChanged(), this._scrollInitialized = !0);
        const F = new Float32Array(this._cellValueBuffers[this._activeDoubleBufferIndex]), H = kz.maxSupportedColumns * 6, $ = this._upToDateLines[this._activeDoubleBufferIndex];
        let W = 3e3, G = 0;
        const q = this._queuedBufferUpdates[this._activeDoubleBufferIndex];
        for(; q.length;){
            const X = q.shift();
            switch(X.type){
                case 2:
                case 8:
                case 17:
                    {
                        F.fill(0), W = 1, G = Math.max(G, this._finalRenderedLine), this._finalRenderedLine = 0;
                        break;
                    }
                case 10:
                    {
                        const Y = (X.fromLineNumber - 1) * kz.maxSupportedColumns * 6, Z = X.toLineNumber * kz.maxSupportedColumns * 6, K = (this._finalRenderedLine - (X.toLineNumber - X.fromLineNumber + 1)) * kz.maxSupportedColumns * 6;
                        F.set(F.subarray(Z), Y), F.fill(0, K), W = Math.min(W, X.fromLineNumber), G = Math.max(G, this._finalRenderedLine), this._finalRenderedLine -= X.toLineNumber - X.fromLineNumber + 1;
                        break;
                    }
            }
        }
        for(o = t.startLineNumber; o <= t.endLineNumber; o++){
            if (!this._viewGpuContext.canRender(n, t, o)) {
                R = (o - 1) * kz.maxSupportedColumns * 6, D = o * kz.maxSupportedColumns * 6, F.fill(0, R, D), W = Math.min(W, o), G = Math.max(G, o);
                continue;
            }
            if (!$.has(o)) {
                W = Math.min(W, o), G = Math.max(G, o), E = t.getViewLineRenderingData(o), u = 0, O = z_i(E, n), s = n.spaceWidth * N, c = 0, P = E.tokens, g = E.minColumn - 1, f = 0;
                for(let X = 0, Y = P.getCount(); X < Y; X++)if (f = P.getEndOffset(X), !(f <= g)) {
                    for(v = P.getMetadata(X), a = g; a < f && !(a > kz.maxSupportedColumns); a++){
                        if (r = O.getSegmentAtIndex(a), r === void 0) continue;
                        i = r, E.isBasicASCII && n.useMonospaceOptimizations || (s = this.glyphRasterizer.getTextMetrics(i).width), y = void 0, b = void 0, T = void 0;
                        for (A of E.inlineDecorations){
                            if (o < A.range.startLineNumber || o > A.range.endLineNumber || o === A.range.startLineNumber && a < A.range.startColumn - 1 || o === A.range.endLineNumber && a >= A.range.endColumn - 1) continue;
                            const K = J1.decorationCssRuleExtractor.getStyleRules(this._viewGpuContext.canvas.domNode, A.inlineClassName);
                            for (const J of K)for (const ne of J.style){
                                const ee = J.styleMap.get(ne)?.toString() ?? "";
                                switch(ne){
                                    case "color":
                                        {
                                            const se = Ci.Format.CSS.parse(ee);
                                            if (!se) throw new Zu("Invalid color format " + ee);
                                            y = se.toNumber32Bit();
                                            break;
                                        }
                                    case "font-weight":
                                        {
                                            z_g(ee) >= 400 ? b = !0 : b = !1;
                                            break;
                                        }
                                    case "opacity":
                                        {
                                            T = K_g(ee);
                                            break;
                                        }
                                    default:
                                        throw new Zu("Unexpected inline decoration style");
                                }
                            }
                        }
                        if (i === " " || i === "	") {
                            if (p = ((o - 1) * kz.maxSupportedColumns + a) * 6, F.fill(0, p, p + 6), i === "	") {
                                const K = a + u;
                                u = _D.nextRenderTabStop(a + u, E.tabSize), c += s * (u - K), u -= a + 1;
                            } else c += s;
                            continue;
                        }
                        const Z = J1.decorationStyleCache.getOrCreateEntry(y, b, T);
                        h = this._viewGpuContext.atlas.getGlyph(this.glyphRasterizer, i, v, Z, c), l = Math.round(t.relativeVerticalOffset[o - t.startLineNumber] * N + Math.floor((t.lineHeight * N - (h.fontBoundingBoxAscent + h.fontBoundingBoxDescent)) / 2) + h.fontBoundingBoxAscent), p = ((o - 1) * kz.maxSupportedColumns + a) * 6, F[p + 0] = Math.floor(c), F[p + 1] = l, F[p + 4] = h.glyphIndex, F[p + 5] = h.pageIndex, c += s;
                    }
                    g = f;
                }
                R = ((o - 1) * kz.maxSupportedColumns + f) * 6, D = o * kz.maxSupportedColumns * 6, F.fill(0, R, D), $.add(o);
            }
        }
        const z = (t.endLineNumber - t.startLineNumber + 1) * H;
        return W = Math.min(W, kz.maxSupportedLines), G = Math.min(G, kz.maxSupportedLines), W <= G && this._device.queue.writeBuffer(this._cellBindBuffer, (W - 1) * H * Float32Array.BYTES_PER_ELEMENT, F.buffer, (W - 1) * H * Float32Array.BYTES_PER_ELEMENT, (G - W + 1) * H * Float32Array.BYTES_PER_ELEMENT), this._finalRenderedLine = Math.max(this._finalRenderedLine, G), this._activeDoubleBufferIndex = this._activeDoubleBufferIndex ? 0 : 1, this._visibleObjectCount = z, z;
    }
    draw(t, n) {
        if (this._visibleObjectCount <= 0) throw new Zu("Attempt to draw 0 objects");
        t.draw(qze.length / 2, this._visibleObjectCount, void 0, (n.startLineNumber - 1) * kz.maxSupportedColumns);
    }
    _queueBufferUpdate(t) {
        this._queuedBufferUpdates[0].push(t), this._queuedBufferUpdates[1].push(t);
    }
}, K_i.maxSupportedLines = 3e3, K_i.maxSupportedColumns = 200, sFt = K_i;

}
