import { Zu, bt, si, ve } from "./HVr.js";
import { H6c, gts } from "./baseRenderStrategy.js";
import { Ci, Sm } from "./color.js";
import { mts } from "./contentSegmenter.js";
import { _D, nre } from "./cursorColumns.js";
import { en } from "./dom_2.js";
import { W6c, fts } from "./fullFileRenderStrategy.wgsl.js";
import { Qfn, VK } from "./gpuDisposable.js";
import { qze, r5e } from "./gpuUtils.js";
import { V_g, j_g, sa, z_i } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { J1, Jfn } from "./viewGpuContext.js";
var vts, G6c;
export { G6c, vts };
var __wakaru_q_g_initialized = false;
export function q_g() {
if (__wakaru_q_g_initialized) return;
__wakaru_q_g_initialized = true;
"use strict";
x(), en(), Sm(), si(), bt(), nre(), mts(), Qfn(), r5e(), Jfn(), H6c(), W6c(), vts = class zot extends gts {
    constructor(t, n, i, r){
        super(t, n, i, r), this.type = "viewport", this.wgsl = fts, this._cellBindBufferLineCapacity = 63, this._activeDoubleBufferIndex = 0, this._visibleObjectCount = 0, this._scrollInitialized = !1, this._onDidChangeBindGroupEntries = this._register(new ve), this.onDidChangeBindGroupEntries = this._onDidChangeBindGroupEntries.event, this._rebuildCellBuffer(this._cellBindBufferLineCapacity);
        const s = 2;
        this._scrollOffsetBindBuffer = this._register(VK.createBuffer(this._device, {
            label: "Monaco scroll offset buffer",
            size: s * Float32Array.BYTES_PER_ELEMENT,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        })).object, this._scrollOffsetValueBuffer = new Float32Array(s);
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
    _rebuildCellBuffer(t) {
        this._cellBindBuffer?.destroy();
        const n = (Math.floor(t / 32) + 1) * 32, i = n * zot.maxSupportedColumns * 6 * Float32Array.BYTES_PER_ELEMENT;
        this._cellBindBuffer = this._register(VK.createBuffer(this._device, {
            label: "Monaco full file cell buffer",
            size: i,
            usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })).object, this._cellValueBuffers = [
            new ArrayBuffer(i),
            new ArrayBuffer(i)
        ], this._cellBindBufferLineCapacity = n, this._onDidChangeBindGroupEntries.fire();
    }
    onConfigurationChanged(t) {
        return !0;
    }
    onDecorationsChanged(t) {
        return !0;
    }
    onTokensChanged(t) {
        return !0;
    }
    onLinesDeleted(t) {
        return !0;
    }
    onLinesInserted(t) {
        return !0;
    }
    onLinesChanged(t) {
        return !0;
    }
    onScrollChanged(t) {
        const n = sa().devicePixelRatio;
        return this._scrollOffsetValueBuffer[0] = (t?.scrollLeft ?? this._context.viewLayout.getCurrentScrollLeft()) * n, this._scrollOffsetValueBuffer[1] = (t?.scrollTop ?? this._context.viewLayout.getCurrentScrollTop()) * n, this._device.queue.writeBuffer(this._scrollOffsetBindBuffer, 0, this._scrollOffsetValueBuffer), !0;
    }
    onThemeChanged(t) {
        return !0;
    }
    onLineMappingChanged(t) {
        return !0;
    }
    onZonesChanged(t) {
        return !0;
    }
    reset() {
        for (const t of [
            0,
            1
        ]){
            const n = new Float32Array(this._cellValueBuffers[t]);
            n.fill(0, 0, n.length), this._device.queue.writeBuffer(this._cellBindBuffer, 0, n.buffer, 0, n.byteLength);
        }
    }
    update(t, n) {
        let i = "", r, s = 0, o = 0, a = 0, c = 0, l = 0, u = 0, h, p = 0, g = 0, f = 0, v = 0, b, y, T, E, A, R = 0, D = 0, P;
        const N = sa().devicePixelRatio;
        let O;
        this._scrollInitialized || (this.onScrollChanged(), this._scrollInitialized = !0), this._cellBindBufferLineCapacity < t.endLineNumber - t.startLineNumber + 1 && this._rebuildCellBuffer(t.endLineNumber - t.startLineNumber + 1);
        const F = new Float32Array(this._cellValueBuffers[this._activeDoubleBufferIndex]);
        F.fill(0);
        const H = zot.maxSupportedColumns * 6;
        for(o = t.startLineNumber; o <= t.endLineNumber; o++)if (this._viewGpuContext.canRender(n, t, o)) {
            E = t.getViewLineRenderingData(o), u = 0, O = z_i(E, n), s = n.spaceWidth * N, c = 0, P = E.tokens, g = E.minColumn - 1, f = 0;
            for(let W = 0, G = P.getCount(); W < G; W++)if (f = P.getEndOffset(W), !(f <= g)) {
                for(v = P.getMetadata(W), a = g; a < f && !(a > zot.maxSupportedColumns); a++){
                    if (r = O.getSegmentAtIndex(a), r === void 0) continue;
                    i = r, E.isBasicASCII && n.useMonospaceOptimizations || (s = this.glyphRasterizer.getTextMetrics(i).width), y = void 0, b = void 0, T = void 0;
                    for (A of E.inlineDecorations){
                        if (o < A.range.startLineNumber || o > A.range.endLineNumber || o === A.range.startLineNumber && a < A.range.startColumn - 1 || o === A.range.endLineNumber && a >= A.range.endColumn - 1) continue;
                        const z = J1.decorationCssRuleExtractor.getStyleRules(this._viewGpuContext.canvas.domNode, A.inlineClassName);
                        for (const X of z)for (const Y of X.style){
                            const Z = X.styleMap.get(Y)?.toString() ?? "";
                            switch(Y){
                                case "color":
                                    {
                                        const K = Ci.Format.CSS.parse(Z);
                                        if (!K) throw new Zu("Invalid color format " + Z);
                                        y = K.toNumber32Bit();
                                        break;
                                    }
                                case "font-weight":
                                    {
                                        V_g(Z) >= 400 ? b = !0 : b = !1;
                                        break;
                                    }
                                case "opacity":
                                    {
                                        T = j_g(Z);
                                        break;
                                    }
                                default:
                                    throw new Zu("Unexpected inline decoration style");
                            }
                        }
                    }
                    if (i === " " || i === "	") {
                        if (p = ((o - 1) * zot.maxSupportedColumns + a) * 6, F.fill(0, p, p + 6), i === "	") {
                            const z = a + u;
                            u = _D.nextRenderTabStop(a + u, E.tabSize), c += s * (u - z), u -= a + 1;
                        } else c += s;
                        continue;
                    }
                    const q = J1.decorationStyleCache.getOrCreateEntry(y, b, T);
                    h = this._viewGpuContext.atlas.getGlyph(this.glyphRasterizer, i, v, q, c), l = Math.round(t.relativeVerticalOffset[o - t.startLineNumber] * N + Math.floor((t.lineHeight * N - (h.fontBoundingBoxAscent + h.fontBoundingBoxDescent)) / 2) + h.fontBoundingBoxAscent), p = ((o - t.startLineNumber) * zot.maxSupportedColumns + a) * 6, F[p + 0] = Math.floor(c), F[p + 1] = l, F[p + 4] = h.glyphIndex, F[p + 5] = h.pageIndex, c += s;
                }
                g = f;
            }
            R = ((o - t.startLineNumber) * zot.maxSupportedColumns + f) * 6, D = (o - t.startLineNumber) * zot.maxSupportedColumns * 6, F.fill(0, R, D);
        }
        const $ = (t.endLineNumber - t.startLineNumber + 1) * H;
        return this._device.queue.writeBuffer(this._cellBindBuffer, 0, F.buffer, 0, (t.endLineNumber - t.startLineNumber) * H * Float32Array.BYTES_PER_ELEMENT), this._activeDoubleBufferIndex = this._activeDoubleBufferIndex ? 0 : 1, this._visibleObjectCount = $, $;
    }
    draw(t, n) {
        if (this._visibleObjectCount <= 0) throw new Zu("Attempt to draw 0 objects");
        t.draw(qze.length / 2, this._visibleObjectCount);
    }
}, vts.maxSupportedColumns = 2e3, G6c = vts;

}
