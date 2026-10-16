import { Ei, Gt, tt, xh } from "./Iwo.js";
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
import { BDy, FDy, SCr, rl } from "./ze.js";
var SWo, iHd;
export { SWo, iHd };
var __wakaru_UDy_initialized = false;
export function UDy() {
if (__wakaru_UDy_initialized) return;
__wakaru_UDy_initialized = true;
"use strict";
E(), Hn(), _b(), Ei(), Gt(), zve(), _Wo(), Rsi(), Cyt(), yCr(), tHd(), nHd(), SWo = class G3t extends bWo {
    constructor(e, n, i, r){
        super(e, n, i, r), this.type = "viewport", this.wgsl = yWo, this._cellBindBufferLineCapacity = 63, this._activeDoubleBufferIndex = 0, this._visibleObjectCount = 0, this._scrollInitialized = !1, this._onDidChangeBindGroupEntries = this._register(new tt), this.onDidChangeBindGroupEntries = this._onDidChangeBindGroupEntries.event, this._rebuildCellBuffer(this._cellBindBufferLineCapacity);
        const s = 2;
        this._scrollOffsetBindBuffer = this._register(_oe.createBuffer(this._device, {
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
    _rebuildCellBuffer(e) {
        this._cellBindBuffer?.destroy();
        const n = (Math.floor(e / 32) + 1) * 32, i = n * G3t.maxSupportedColumns * 6 * Float32Array.BYTES_PER_ELEMENT;
        this._cellBindBuffer = this._register(_oe.createBuffer(this._device, {
            label: "Monaco full file cell buffer",
            size: i,
            usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })).object, this._cellValueBuffers = [
            new ArrayBuffer(i),
            new ArrayBuffer(i)
        ], this._cellBindBufferLineCapacity = n, this._onDidChangeBindGroupEntries.fire();
    }
    onConfigurationChanged(e) {
        return !0;
    }
    onDecorationsChanged(e) {
        return !0;
    }
    onTokensChanged(e) {
        return !0;
    }
    onLinesDeleted(e) {
        return !0;
    }
    onLinesInserted(e) {
        return !0;
    }
    onLinesChanged(e) {
        return !0;
    }
    onScrollChanged(e) {
        const n = rl().devicePixelRatio;
        return this._scrollOffsetValueBuffer[0] = (e?.scrollLeft ?? this._context.viewLayout.getCurrentScrollLeft()) * n, this._scrollOffsetValueBuffer[1] = (e?.scrollTop ?? this._context.viewLayout.getCurrentScrollTop()) * n, this._device.queue.writeBuffer(this._scrollOffsetBindBuffer, 0, this._scrollOffsetValueBuffer), !0;
    }
    onThemeChanged(e) {
        return !0;
    }
    onLineMappingChanged(e) {
        return !0;
    }
    onZonesChanged(e) {
        return !0;
    }
    reset() {
        for (const e of [
            0,
            1
        ]){
            const n = new Float32Array(this._cellValueBuffers[e]);
            n.fill(0, 0, n.length), this._device.queue.writeBuffer(this._cellBindBuffer, 0, n.buffer, 0, n.byteLength);
        }
    }
    update(e, n) {
        let i = "", r, s = 0, o = 0, a = 0, l = 0, c = 0, u = 0, d, h = 0, p = 0, g = 0, f = 0, _, b, y, S, k, C = 0, T = 0, I;
        const A = rl().devicePixelRatio;
        let P;
        this._scrollInitialized || (this.onScrollChanged(), this._scrollInitialized = !0), this._cellBindBufferLineCapacity < e.endLineNumber - e.startLineNumber + 1 && this._rebuildCellBuffer(e.endLineNumber - e.startLineNumber + 1);
        const M = new Float32Array(this._cellValueBuffers[this._activeDoubleBufferIndex]);
        M.fill(0);
        const O = G3t.maxSupportedColumns * 6;
        for(o = e.startLineNumber; o <= e.endLineNumber; o++)if (this._viewGpuContext.canRender(n, e, o)) {
            S = e.getViewLineRenderingData(o), u = 0, P = SCr(S, n), s = n.spaceWidth * A, l = 0, I = S.tokens, p = S.minColumn - 1, g = 0;
            for(let U = 0, j = I.getCount(); U < j; U++)if (g = I.getEndOffset(U), !(g <= p)) {
                for(f = I.getMetadata(U), a = p; a < g && !(a > G3t.maxSupportedColumns); a++){
                    if (r = P.getSegmentAtIndex(a), r === void 0) continue;
                    i = r, S.isBasicASCII && n.useMonospaceOptimizations || (s = this.glyphRasterizer.getTextMetrics(i).width), b = void 0, _ = void 0, y = void 0;
                    for (k of S.inlineDecorations){
                        if (o < k.range.startLineNumber || o > k.range.endLineNumber || o === k.range.startLineNumber && a < k.range.startColumn - 1 || o === k.range.endLineNumber && a >= k.range.endColumn - 1) continue;
                        const H = LD.decorationCssRuleExtractor.getStyleRules(this._viewGpuContext.canvas.domNode, k.inlineClassName);
                        for (const G of H)for (const q of G.style){
                            const K = G.styleMap.get(q)?.toString() ?? "";
                            switch(q){
                                case "color":
                                    {
                                        const V = ls.Format.CSS.parse(K);
                                        if (!V) throw new xh("Invalid color format " + K);
                                        b = V.toNumber32Bit();
                                        break;
                                    }
                                case "font-weight":
                                    {
                                        FDy(K) >= 400 ? _ = !0 : _ = !1;
                                        break;
                                    }
                                case "opacity":
                                    {
                                        y = BDy(K);
                                        break;
                                    }
                                default:
                                    throw new xh("Unexpected inline decoration style");
                            }
                        }
                    }
                    if (i === " " || i === "	") {
                        if (h = ((o - 1) * G3t.maxSupportedColumns + a) * 6, M.fill(0, h, h + 6), i === "	") {
                            const H = a + u;
                            u = sL.nextRenderTabStop(a + u, S.tabSize), l += s * (u - H), u -= a + 1;
                        } else l += s;
                        continue;
                    }
                    const $ = LD.decorationStyleCache.getOrCreateEntry(b, _, y);
                    d = this._viewGpuContext.atlas.getGlyph(this.glyphRasterizer, i, f, $, l), c = Math.round(e.relativeVerticalOffset[o - e.startLineNumber] * A + Math.floor((e.lineHeight * A - (d.fontBoundingBoxAscent + d.fontBoundingBoxDescent)) / 2) + d.fontBoundingBoxAscent), h = ((o - e.startLineNumber) * G3t.maxSupportedColumns + a) * 6, M[h + 0] = Math.floor(l), M[h + 1] = c, M[h + 4] = d.glyphIndex, M[h + 5] = d.pageIndex, l += s;
                }
                p = g;
            }
            C = ((o - e.startLineNumber) * G3t.maxSupportedColumns + g) * 6, T = (o - e.startLineNumber) * G3t.maxSupportedColumns * 6, M.fill(0, C, T);
        }
        const N = (e.endLineNumber - e.startLineNumber + 1) * O;
        return this._device.queue.writeBuffer(this._cellBindBuffer, 0, M.buffer, 0, (e.endLineNumber - e.startLineNumber) * O * Float32Array.BYTES_PER_ELEMENT), this._activeDoubleBufferIndex = this._activeDoubleBufferIndex ? 0 : 1, this._visibleObjectCount = N, N;
    }
    draw(e, n) {
        if (this._visibleObjectCount <= 0) throw new xh("Attempt to draw 0 objects");
        e.draw(wyt.length / 2, this._visibleObjectCount);
    }
}, SWo.maxSupportedColumns = 2e3, iHd = SWo;

}
