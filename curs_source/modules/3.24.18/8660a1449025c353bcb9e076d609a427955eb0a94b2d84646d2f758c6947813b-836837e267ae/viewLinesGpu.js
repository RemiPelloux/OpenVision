import { Ei, Qe, Vn, xh } from "./Iwo.js";
import { Jd } from "./autorun.js";
import { _Wo } from "./contentSegmenter.js";
import { sL, zve } from "./cursorColumns.js";
import { Hn } from "./dom_2.js";
import { HDy, Lfn } from "./fullFileRenderStrategy.js";
import { Asi, F$d } from "./glyphRasterizer.js";
import { Rsi, _oe } from "./gpuDisposable.js";
import { Cyt, wyt } from "./gpuUtils.js";
import { It, dn } from "./instantiation.js";
import { Ji, Li } from "./log.js";
import { Jc } from "./observable.js";
import { er, jc } from "./position.js";
import { Qs, qt } from "./range.js";
import { J0r, Ktt, Q0r, Tfn, fHo, vHo } from "./renderingContext.js";
import { XAe, fWo } from "./textureAtlas.js";
import { gWo, t_e } from "./textureAtlasPage.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { LD, yCr } from "./viewGpuContext.js";
import { Isi, KHo } from "./viewLineOptions.js";
import { AQ, pz } from "./viewPart.js";
import { UDy, iHd } from "./viewportRenderStrategy.js";
import { SCr, rl, t6 } from "./ze.js";
var wCr;
export { wCr };
var __wakaru_WDy_initialized = false;
export function WDy() {
if (__wakaru_WDy_initialized) return;
__wakaru_WDy_initialized = true;
"use strict";
E(), Hn(), Ei(), Jc(), It(), Ji(), jc(), Qs(), gWo(), Rsi(), Cyt(), yCr(), Tfn(), pz(), KHo(), zve(), fWo(), _Wo(), UDy(), HDy(), Qe(), F$d(), wCr = class extends AQ {
    constructor(t, e, n, i){
        super(t), this._viewGpuContext = e, this._instantiationService = n, this._logService = i, this._atlasGpuTextureVersions = [], this._initialized = !1, this._glyphRasterizer = this._register(new Vn), this._renderStrategy = this._register(new Vn), this._renderStrategyBindGroupListener = this._register(new Vn), this.canvas = this._viewGpuContext.canvas.domNode, this._register(Jd((r)=>{
            this._viewGpuContext.canvasDevicePixelDimensions.read(r);
            const s = this._lastViewportData;
            s && setTimeout(()=>{
                s === this._lastViewportData && this.renderText(s);
            });
        })), this.initWebgpu();
    }
    async initWebgpu() {
        if (this._device = LD.deviceSync || await LD.device, this._store.isDisposed) return;
        const t = LD.atlas;
        this._register(t.onDidDeleteGlyphs(()=>{
            this._atlasGpuTextureVersions.length = 0, this._atlasGpuTextureVersions[0] = 0, this._atlasGpuTextureVersions[1] = 0, this._renderStrategy.value.reset();
        }));
        const e = navigator.gpu.getPreferredCanvasFormat();
        this._viewGpuContext.ctx.configure({
            device: this._device,
            format: e,
            alphaMode: "premultiplied"
        }), this._renderPassColorAttachment = {
            view: null,
            loadOp: "load",
            storeOp: "store"
        }, this._renderPassDescriptor = {
            label: "Monaco render pass",
            colorAttachments: [
                this._renderPassColorAttachment
            ]
        };
        let n;
        {
            let a;
            ((u)=>{
                u[u.FloatsPerEntry = 6] = "FloatsPerEntry", u[u.BytesPerEntry = 24] = "BytesPerEntry", u[u.Offset_CanvasWidth____ = 0] = "Offset_CanvasWidth____", u[u.Offset_CanvasHeight___ = 1] = "Offset_CanvasHeight___", u[u.Offset_ViewportOffsetX = 2] = "Offset_ViewportOffsetX", u[u.Offset_ViewportOffsetY = 3] = "Offset_ViewportOffsetY", u[u.Offset_ViewportWidth__ = 4] = "Offset_ViewportWidth__", u[u.Offset_ViewportHeight_ = 5] = "Offset_ViewportHeight_";
            })(a || (a = {}));
            const l = new Float32Array(6), c = (u = this.canvas.width, d = this.canvas.height)=>(l[0] = u, l[1] = d, l[2] = Math.ceil(this._context.configuration.options.get(151).contentLeft * rl().devicePixelRatio), l[3] = 0, l[4] = l[0] - l[2], l[5] = l[1] - l[3], l);
            n = this._register(_oe.createBuffer(this._device, {
                label: "Monaco uniform buffer",
                size: 24,
                usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
            }, ()=>c())).object, this._register(t6(this._viewGpuContext.canvasDevicePixelDimensions, ({ width: u, height: d })=>{
                this._device.queue.writeBuffer(n, 0, c(u, d));
            })), this._register(t6(this._viewGpuContext.contentLeft, ()=>{
                this._device.queue.writeBuffer(n, 0, c());
            }));
        }
        let i;
        {
            let a;
            ((l)=>{
                l[l.FloatsPerEntry = 2] = "FloatsPerEntry", l[l.BytesPerEntry = 8] = "BytesPerEntry", l[l.Offset_Width_ = 0] = "Offset_Width_", l[l.Offset_Height = 1] = "Offset_Height";
            })(a || (a = {})), i = this._register(_oe.createBuffer(this._device, {
                label: "Monaco atlas info uniform buffer",
                size: 8,
                usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
            }, ()=>{
                const l = new Float32Array(2);
                return l[0] = t.pageSize, l[1] = t.pageSize, l;
            })).object;
        }
        const r = this._context.configuration.options.get(51), s = this._context.configuration.options.get(54);
        this._glyphRasterizer.value = this._register(new Asi(s, r, this._viewGpuContext.devicePixelRatio.get(), LD.decorationStyleCache)), this._register(t6(this._viewGpuContext.devicePixelRatio, ()=>{
            this._refreshGlyphRasterizer();
        })), this._renderStrategy.value = this._instantiationService.createInstance(Lfn, this._context, this._viewGpuContext, this._device, this._glyphRasterizer), this._glyphStorageBuffer = this._register(_oe.createBuffer(this._device, {
            label: "Monaco glyph storage buffer",
            size: XAe.maximumPageCount * (t_e.maximumGlyphCount * 24),
            usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })).object, this._atlasGpuTextureVersions[0] = 0, this._atlasGpuTextureVersions[1] = 0, this._atlasGpuTexture = this._register(_oe.createTexture(this._device, {
            label: "Monaco atlas texture",
            format: "rgba8unorm",
            size: {
                width: t.pageSize,
                height: t.pageSize,
                depthOrArrayLayers: XAe.maximumPageCount
            },
            dimension: "2d",
            usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT
        })).object, this._updateAtlasStorageBufferAndTexture(), this._vertexBuffer = this._register(_oe.createBuffer(this._device, {
            label: "Monaco vertex buffer",
            size: wyt.byteLength,
            usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
        }, wyt)).object;
        const o = this._device.createShaderModule({
            label: "Monaco shader module",
            code: this._renderStrategy.value.wgsl
        });
        if (this._pipeline = this._device.createRenderPipeline({
            label: "Monaco render pipeline",
            layout: "auto",
            vertex: {
                module: o,
                buffers: [
                    {
                        arrayStride: 2 * Float32Array.BYTES_PER_ELEMENT,
                        attributes: [
                            {
                                shaderLocation: 0,
                                offset: 0,
                                format: "float32x2"
                            }
                        ]
                    }
                ]
            },
            fragment: {
                module: o,
                targets: [
                    {
                        format: e,
                        blend: {
                            color: {
                                srcFactor: "src-alpha",
                                dstFactor: "one-minus-src-alpha"
                            },
                            alpha: {
                                srcFactor: "src-alpha",
                                dstFactor: "one-minus-src-alpha"
                            }
                        }
                    }
                ]
            }
        }), this._rebuildBindGroup = ()=>{
            this._bindGroup = this._device.createBindGroup({
                label: "Monaco bind group",
                layout: this._pipeline.getBindGroupLayout(0),
                entries: [
                    {
                        binding: 0,
                        resource: {
                            buffer: this._glyphStorageBuffer
                        }
                    },
                    {
                        binding: 2,
                        resource: this._device.createSampler({
                            label: "Monaco atlas sampler",
                            magFilter: "nearest",
                            minFilter: "nearest"
                        })
                    },
                    {
                        binding: 3,
                        resource: this._atlasGpuTexture.createView()
                    },
                    {
                        binding: 4,
                        resource: {
                            buffer: n
                        }
                    },
                    {
                        binding: 5,
                        resource: {
                            buffer: i
                        }
                    },
                    ...this._renderStrategy.value.bindGroupEntries
                ]
            });
        }, this._rebuildBindGroup(), this._initialized = !0, this._initViewportData) {
            for (const a of this._initViewportData)this.renderText(a);
            this._initViewportData = void 0;
        }
    }
    _refreshRenderStrategy(t) {
        if (this._renderStrategy.value?.type === "viewport" || t.endLineNumber < Lfn.maxSupportedLines && this._viewportMaxColumn(t) < Lfn.maxSupportedColumns) return;
        this._logService.trace(`File is larger than ${Lfn.maxSupportedLines} lines or ${Lfn.maxSupportedColumns} columns, switching to viewport render strategy`);
        const e = this._instantiationService.createInstance(iHd, this._context, this._viewGpuContext, this._device, this._glyphRasterizer);
        this._renderStrategy.value = e, this._renderStrategyBindGroupListener.value = e.onDidChangeBindGroupEntries(()=>this._rebuildBindGroup?.()), this._rebuildBindGroup?.();
    }
    _viewportMaxColumn(t) {
        let e = 0, n;
        for(let i = t.startLineNumber; i <= t.endLineNumber; i++)n = t.getViewLineRenderingData(i), e = Math.max(e, n.maxColumn);
        return e;
    }
    _updateAtlasStorageBufferAndTexture() {
        for (const [t, e] of LD.atlas.pages.entries()){
            if (t >= XAe.maximumPageCount) {
                console.log(`Attempt to upload atlas page [${t}], only ${XAe.maximumPageCount} are supported currently`);
                continue;
            }
            if (e.version === this._atlasGpuTextureVersions[t]) continue;
            this._logService.trace("Updating atlas page[", t, "] from version ", this._atlasGpuTextureVersions[t], " to version ", e.version);
            const n = 6 * t_e.maximumGlyphCount, i = new Float32Array(n);
            let r = 0;
            for (const s of e.glyphs)i[r + 0] = s.x, i[r + 0 + 1] = s.y, i[r + 2] = s.w, i[r + 2 + 1] = s.h, i[r + 4] = s.originOffsetX, i[r + 4 + 1] = s.originOffsetY, r += 6;
            if (r / 6 > t_e.maximumGlyphCount) throw new Error(`Attempting to write more glyphs (${r / 6}) than the GPUBuffer can hold (${t_e.maximumGlyphCount})`);
            this._device.queue.writeBuffer(this._glyphStorageBuffer, t * 6 * t_e.maximumGlyphCount * Float32Array.BYTES_PER_ELEMENT, i, 0, 6 * t_e.maximumGlyphCount), e.usedArea.right - e.usedArea.left > 0 && e.usedArea.bottom - e.usedArea.top > 0 && this._device.queue.copyExternalImageToTexture({
                source: e.source
            }, {
                texture: this._atlasGpuTexture,
                origin: {
                    x: e.usedArea.left,
                    y: e.usedArea.top,
                    z: t
                }
            }, {
                width: e.usedArea.right - e.usedArea.left + 1,
                height: e.usedArea.bottom - e.usedArea.top + 1
            }), this._atlasGpuTextureVersions[t] = e.version;
        }
    }
    prepareRender(t) {
        throw new xh("Should not be called");
    }
    render(t) {
        throw new xh("Should not be called");
    }
    onConfigurationChanged(t) {
        return this._refreshGlyphRasterizer(), !0;
    }
    onCursorStateChanged(t) {
        return !0;
    }
    onDecorationsChanged(t) {
        return !0;
    }
    onFlushed(t) {
        return !0;
    }
    onLinesChanged(t) {
        return !0;
    }
    onLinesDeleted(t) {
        return !0;
    }
    onLinesInserted(t) {
        return !0;
    }
    onLineMappingChanged(t) {
        return !0;
    }
    onRevealRangeRequest(t) {
        return !0;
    }
    onScrollChanged(t) {
        return !0;
    }
    onThemeChanged(t) {
        return !0;
    }
    onZonesChanged(t) {
        return !0;
    }
    _refreshGlyphRasterizer() {
        const t = this._glyphRasterizer.value;
        if (!t) return;
        const e = this._context.configuration.options.get(51), n = this._context.configuration.options.get(54), i = this._viewGpuContext.devicePixelRatio.get();
        (t.fontFamily !== e || t.fontSize !== n || t.devicePixelRatio !== i) && (this._glyphRasterizer.value = new Asi(n, e, i, LD.decorationStyleCache));
    }
    renderText(t) {
        if (this._initialized) return this._refreshRenderStrategy(t), this._renderText(t);
        this._initViewportData = this._initViewportData ?? [], this._initViewportData.push(t);
    }
    _renderText(t) {
        this._viewGpuContext.rectangleRenderer.draw(t);
        const e = new Isi(this._context.configuration, this._context.theme.type);
        this._renderStrategy.value.update(t, e), this._updateAtlasStorageBufferAndTexture();
        const n = this._device.createCommandEncoder({
            label: "Monaco command encoder"
        });
        this._renderPassColorAttachment.view = this._viewGpuContext.ctx.getCurrentTexture().createView({
            label: "Monaco canvas texture view"
        });
        const i = n.beginRenderPass(this._renderPassDescriptor);
        i.setPipeline(this._pipeline), i.setVertexBuffer(0, this._vertexBuffer);
        const r = Math.ceil(this._viewGpuContext.contentLeft.get() * this._viewGpuContext.devicePixelRatio.get());
        i.setScissorRect(r, 0, this.canvas.width - r, this.canvas.height), i.setBindGroup(0, this._bindGroup), this._renderStrategy.value.draw(i, t), i.end();
        const s = n.finish();
        this._device.queue.submit([
            s
        ]), this._lastViewportData = t, this._lastViewLineOptions = e;
    }
    linesVisibleRangesForRange(t, e) {
        if (!this._lastViewportData) return null;
        const n = t.endLineNumber, i = qt.intersectRanges(t, this._lastViewportData.visibleRange);
        if (!i) return null;
        const r = this._lastViewportData.startLineNumber, s = this._lastViewportData.endLineNumber, o = this._lastViewportData, a = this._lastViewLineOptions;
        if (!o || !a) return null;
        const l = [];
        let c = 0;
        e && (c = this._context.viewModel.coordinatesConverter.convertViewPositionToModelPosition(new er(i.startLineNumber, 1)).lineNumber);
        for(let u = i.startLineNumber; u <= i.endLineNumber; u++){
            if (u < r || u > s) continue;
            const d = u === i.startLineNumber ? i.startColumn : 1, h = u !== i.endLineNumber, p = h ? this._context.viewModel.getLineMaxColumn(u) : i.endColumn, g = this._visibleRangesForLineRange(u, d, p);
            if (g) {
                if (e && u < n) {
                    const f = c;
                    c = this._context.viewModel.coordinatesConverter.convertViewPositionToModelPosition(new er(u + 1, 1)).lineNumber, f !== c && (g.ranges[g.ranges.length - 1].width += a.spaceWidth);
                }
                l.push(new fHo(g.outsideRenderedLine, u, Q0r.from(g.ranges), h));
            }
        }
        return l.length === 0 ? null : l;
    }
    _visibleRangesForLineRange(t, e, n) {
        if (this.shouldRender()) return null;
        const i = this._lastViewportData, r = this._lastViewLineOptions;
        if (!i || !r || t < i.startLineNumber || t > i.endLineNumber) return null;
        const s = i.getViewLineRenderingData(t), o = s.content;
        let a;
        s.isBasicASCII && r.useMonospaceOptimizations || (a = SCr(s, r));
        let l = "", c = 0, u = 0;
        for(let g = 0; g < e - 1; g++){
            if (s.isBasicASCII && r.useMonospaceOptimizations) l = o.charAt(g);
            else {
                if (l = a.getSegmentAtIndex(g), l === void 0) continue;
                u += this._renderStrategy.value.glyphRasterizer.getTextMetrics(l).width / rl().devicePixelRatio - r.spaceWidth;
            }
            l === "	" ? c = sL.nextRenderTabStop(c, s.tabSize) : c++;
        }
        let d = c, h = 0;
        for(let g = e - 1; g < n - 1; g++){
            if (s.isBasicASCII && r.useMonospaceOptimizations) l = o.charAt(g);
            else {
                if (l = a.getSegmentAtIndex(g), l === void 0) continue;
                h += this._renderStrategy.value.glyphRasterizer.getTextMetrics(l).width / rl().devicePixelRatio - r.spaceWidth;
            }
            l === "	" ? d = sL.nextRenderTabStop(d, s.tabSize) : d++;
        }
        return new J0r(!1, [
            new Ktt(c * r.spaceWidth + u, (d - c) * r.spaceWidth + h)
        ]);
    }
    visibleRangeForPosition(t) {
        const e = this._visibleRangesForLineRange(t.lineNumber, t.column, t.column);
        return e ? new vHo(e.outsideRenderedLine, e.ranges[0].left) : null;
    }
    getLineWidth(t) {
        if (!this._lastViewportData || !this._lastViewLineOptions || !this._viewGpuContext.canRender(this._lastViewLineOptions, this._lastViewportData, t)) return;
        const e = this._lastViewportData.getViewLineRenderingData(t), i = this._visibleRangesForLineRange(t, 1, e.maxColumn)?.ranges.at(-1);
        if (i) return i.width;
    }
    getPositionAtCoordinate(t, e) {
        if (!this._lastViewportData || !this._lastViewLineOptions || !this._viewGpuContext.canRender(this._lastViewLineOptions, this._lastViewportData, t)) return;
        const n = this._lastViewportData.getViewLineRenderingData(t), i = n.content, r = rl().devicePixelRatio, s = e * r, o = this._lastViewLineOptions.spaceWidth * r, a = SCr(n, this._lastViewLineOptions);
        let l = 0, c = 0, u = 0, d = 0;
        for(let h = 0; h < i.length; h++){
            const p = a.getSegmentAtIndex(h);
            if (p === void 0) {
                d++;
                continue;
            }
            if (p === "	") {
                const g = h + u;
                u = sL.nextRenderTabStop(h + u, n.tabSize), c = o * (u - g), u -= h + 1;
            } else n.isBasicASCII && this._lastViewLineOptions.useMonospaceOptimizations ? c = o : c = this._renderStrategy.value.glyphRasterizer.getTextMetrics(p).width;
            if (s < l + c / 2) break;
            l += c, d++;
        }
        return new er(t, d + 1);
    }
}, wCr = Re([
    F(2, dn),
    F(3, Li)
], wCr);

}
