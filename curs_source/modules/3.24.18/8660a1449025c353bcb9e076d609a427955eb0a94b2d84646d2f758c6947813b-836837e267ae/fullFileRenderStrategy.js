import { Ei, xh } from "./Iwo.js";
import { bWo, tHd } from "./baseRenderStrategy.js";
import { _b, ls } from "./color.js";
import { _Wo } from "./contentSegmenter.js";
import { sL, zve } from "./cursorColumns.js";
import { Hn } from "./dom_2.js";
import { nHd, yWo } from "./fullFileRenderStrategy.wgsl.js";
import { Rsi, _oe } from "./gpuDisposable.js";
import { Cyt, wyt } from "./gpuUtils.js";
import { E } from "./tslib.es6.js";
import { LD, yCr } from "./viewGpuContext.js";
import { $Dy, SCr, jDy, rl } from "./ze.js";
var kCr, Lfn;
export { Lfn, kCr };
var __wakaru_HDy_initialized = false;
export function HDy() {
if (__wakaru_HDy_initialized) return;
__wakaru_HDy_initialized = true;
"use strict";
E(), Hn(), _b(), Ei(), zve(), _Wo(), nHd(), Rsi(), Cyt(), yCr(), tHd(), kCr = class Pre extends bWo {
    constructor(e, n, i, r){
        super(e, n, i, r), this.type = "fullfile", this.wgsl = yWo, this._activeDoubleBufferIndex = 0, this._upToDateLines = [
            new Set,
            new Set
        ], this._visibleObjectCount = 0, this._finalRenderedLine = 0, this._scrollInitialized = !1, this._queuedBufferUpdates = [
            [],
            []
        ];
        const s = Pre.maxSupportedLines * Pre.maxSupportedColumns * 6 * Float32Array.BYTES_PER_ELEMENT;
        this._cellBindBuffer = this._register(_oe.createBuffer(this._device, {
            label: "Monaco full file cell buffer",
            size: s,
            usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })).object, this._cellValueBuffers = [
            new ArrayBuffer(s),
            new ArrayBuffer(s)
        ];
        const o = 2;
        this._scrollOffsetBindBuffer = this._register(_oe.createBuffer(this._device, {
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
    onConfigurationChanged(e) {
        return this._invalidateAllLines(), this._queueBufferUpdate(e), !0;
    }
    onDecorationsChanged(e) {
        return this._invalidateAllLines(), !0;
    }
    onTokensChanged(e) {
        for (const n of e.ranges)this._invalidateLineRange(n.fromLineNumber, n.toLineNumber);
        return !0;
    }
    onLinesDeleted(e) {
        return this._invalidateLinesFrom(e.fromLineNumber), this._queueBufferUpdate(e), !0;
    }
    onLinesInserted(e) {
        return this._invalidateLinesFrom(e.fromLineNumber), !0;
    }
    onLinesChanged(e) {
        return this._invalidateLineRange(e.fromLineNumber, e.fromLineNumber + e.count), !0;
    }
    onScrollChanged(e) {
        const n = rl().devicePixelRatio;
        return this._scrollOffsetValueBuffer[0] = (e?.scrollLeft ?? this._context.viewLayout.getCurrentScrollLeft()) * n, this._scrollOffsetValueBuffer[1] = (e?.scrollTop ?? this._context.viewLayout.getCurrentScrollTop()) * n, this._device.queue.writeBuffer(this._scrollOffsetBindBuffer, 0, this._scrollOffsetValueBuffer), !0;
    }
    onThemeChanged(e) {
        return this._invalidateAllLines(), !0;
    }
    onLineMappingChanged(e) {
        return this._invalidateAllLines(), this._queueBufferUpdate(e), !0;
    }
    onZonesChanged(e) {
        return this._invalidateAllLines(), this._queueBufferUpdate(e), !0;
    }
    _invalidateAllLines() {
        this._upToDateLines[0].clear(), this._upToDateLines[1].clear();
    }
    _invalidateLinesFrom(e) {
        for (const n of [
            0,
            1
        ]){
            const i = this._upToDateLines[n];
            for (const r of i)r >= e && i.delete(r);
        }
    }
    _invalidateLineRange(e, n) {
        for(let i = e; i <= n; i++)this._upToDateLines[0].delete(i), this._upToDateLines[1].delete(i);
    }
    reset() {
        this._invalidateAllLines();
        for (const e of [
            0,
            1
        ]){
            const n = new Float32Array(this._cellValueBuffers[e]);
            n.fill(0, 0, n.length), this._device.queue.writeBuffer(this._cellBindBuffer, 0, n.buffer, 0, n.byteLength);
        }
        this._finalRenderedLine = 0;
    }
    update(e, n) {
        let i = "", r, s = 0, o = 0, a = 0, l = 0, c = 0, u = 0, d, h = 0, p = 0, g = 0, f = 0, _, b, y, S, k, C = 0, T = 0, I;
        const A = rl().devicePixelRatio;
        let P;
        this._scrollInitialized || (this.onScrollChanged(), this._scrollInitialized = !0);
        const M = new Float32Array(this._cellValueBuffers[this._activeDoubleBufferIndex]), O = Pre.maxSupportedColumns * 6, N = this._upToDateLines[this._activeDoubleBufferIndex];
        let U = 3e3, j = 0;
        const $ = this._queuedBufferUpdates[this._activeDoubleBufferIndex];
        for(; $.length;){
            const G = $.shift();
            switch(G.type){
                case 2:
                case 8:
                case 17:
                    {
                        M.fill(0), U = 1, j = Math.max(j, this._finalRenderedLine), this._finalRenderedLine = 0;
                        break;
                    }
                case 10:
                    {
                        const q = (G.fromLineNumber - 1) * Pre.maxSupportedColumns * 6, K = G.toLineNumber * Pre.maxSupportedColumns * 6, V = (this._finalRenderedLine - (G.toLineNumber - G.fromLineNumber + 1)) * Pre.maxSupportedColumns * 6;
                        M.set(M.subarray(K), q), M.fill(0, V), U = Math.min(U, G.fromLineNumber), j = Math.max(j, this._finalRenderedLine), this._finalRenderedLine -= G.toLineNumber - G.fromLineNumber + 1;
                        break;
                    }
            }
        }
        for(o = e.startLineNumber; o <= e.endLineNumber; o++){
            if (!this._viewGpuContext.canRender(n, e, o)) {
                C = (o - 1) * Pre.maxSupportedColumns * 6, T = o * Pre.maxSupportedColumns * 6, M.fill(0, C, T), U = Math.min(U, o), j = Math.max(j, o);
                continue;
            }
            if (!N.has(o)) {
                U = Math.min(U, o), j = Math.max(j, o), S = e.getViewLineRenderingData(o), u = 0, P = SCr(S, n), s = n.spaceWidth * A, l = 0, I = S.tokens, p = S.minColumn - 1, g = 0;
                for(let G = 0, q = I.getCount(); G < q; G++)if (g = I.getEndOffset(G), !(g <= p)) {
                    for(f = I.getMetadata(G), a = p; a < g && !(a > Pre.maxSupportedColumns); a++){
                        if (r = P.getSegmentAtIndex(a), r === void 0) continue;
                        i = r, S.isBasicASCII && n.useMonospaceOptimizations || (s = this.glyphRasterizer.getTextMetrics(i).width), b = void 0, _ = void 0, y = void 0;
                        for (k of S.inlineDecorations){
                            if (o < k.range.startLineNumber || o > k.range.endLineNumber || o === k.range.startLineNumber && a < k.range.startColumn - 1 || o === k.range.endLineNumber && a >= k.range.endColumn - 1) continue;
                            const V = LD.decorationCssRuleExtractor.getStyleRules(this._viewGpuContext.canvas.domNode, k.inlineClassName);
                            for (const Y of V)for (const J of Y.style){
                                const Q = Y.styleMap.get(J)?.toString() ?? "";
                                switch(J){
                                    case "color":
                                        {
                                            const te = ls.Format.CSS.parse(Q);
                                            if (!te) throw new xh("Invalid color format " + Q);
                                            b = te.toNumber32Bit();
                                            break;
                                        }
                                    case "font-weight":
                                        {
                                            jDy(Q) >= 400 ? _ = !0 : _ = !1;
                                            break;
                                        }
                                    case "opacity":
                                        {
                                            y = $Dy(Q);
                                            break;
                                        }
                                    default:
                                        throw new xh("Unexpected inline decoration style");
                                }
                            }
                        }
                        if (i === " " || i === "	") {
                            if (h = ((o - 1) * Pre.maxSupportedColumns + a) * 6, M.fill(0, h, h + 6), i === "	") {
                                const V = a + u;
                                u = sL.nextRenderTabStop(a + u, S.tabSize), l += s * (u - V), u -= a + 1;
                            } else l += s;
                            continue;
                        }
                        const K = LD.decorationStyleCache.getOrCreateEntry(b, _, y);
                        d = this._viewGpuContext.atlas.getGlyph(this.glyphRasterizer, i, f, K, l), c = Math.round(e.relativeVerticalOffset[o - e.startLineNumber] * A + Math.floor((e.lineHeight * A - (d.fontBoundingBoxAscent + d.fontBoundingBoxDescent)) / 2) + d.fontBoundingBoxAscent), h = ((o - 1) * Pre.maxSupportedColumns + a) * 6, M[h + 0] = Math.floor(l), M[h + 1] = c, M[h + 4] = d.glyphIndex, M[h + 5] = d.pageIndex, l += s;
                    }
                    p = g;
                }
                C = ((o - 1) * Pre.maxSupportedColumns + g) * 6, T = o * Pre.maxSupportedColumns * 6, M.fill(0, C, T), N.add(o);
            }
        }
        const H = (e.endLineNumber - e.startLineNumber + 1) * O;
        return U = Math.min(U, Pre.maxSupportedLines), j = Math.min(j, Pre.maxSupportedLines), U <= j && this._device.queue.writeBuffer(this._cellBindBuffer, (U - 1) * O * Float32Array.BYTES_PER_ELEMENT, M.buffer, (U - 1) * O * Float32Array.BYTES_PER_ELEMENT, (j - U + 1) * O * Float32Array.BYTES_PER_ELEMENT), this._finalRenderedLine = Math.max(this._finalRenderedLine, j), this._activeDoubleBufferIndex = this._activeDoubleBufferIndex ? 0 : 1, this._visibleObjectCount = H, H;
    }
    draw(e, n) {
        if (this._visibleObjectCount <= 0) throw new xh("Attempt to draw 0 objects");
        e.draw(wyt.length / 2, this._visibleObjectCount, void 0, (n.startLineNumber - 1) * Pre.maxSupportedColumns);
    }
    _queueBufferUpdate(e) {
        this._queuedBufferUpdates[0].push(e), this._queuedBufferUpdates[1].push(e);
    }
}, kCr.maxSupportedLines = 3e3, kCr.maxSupportedColumns = 200, Lfn = kCr;

}
