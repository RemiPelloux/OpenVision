import { Se, Zu, cn, si } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { Hc } from "./autorun.js";
import { mts } from "./contentSegmenter.js";
import { _D, nre } from "./cursorColumns.js";
import { en } from "./dom_2.js";
import { Y_g, sFt } from "./fullFileRenderStrategy.js";
import { lts, rFt } from "./glyphRasterizer.js";
import { Qfn, VK } from "./gpuDisposable.js";
import { qze, r5e } from "./gpuUtils.js";
import { Ze, _t } from "./instantiation.js";
import { Qn, Wn } from "./log.js";
import { qa } from "./observable.js";
import { Yn, ya } from "./position.js";
import { sa, xO, z_i } from "./qIc.js";
import { dt, qi } from "./range.js";
import { E_i, T_i, e5e, mes, pes, qOt } from "./renderingContext.js";
import { hts, qge } from "./textureAtlas.js";
import { dts, vre } from "./textureAtlasPage.js";
import { x } from "./tslib.es6.js";
import { J1, Jfn } from "./viewGpuContext.js";
import { Ves, Zfn } from "./viewLineOptions.js";
import { aU, mW } from "./viewPart.js";
import { G6c, q_g } from "./viewportRenderStrategy.js";
var Y_i;
export { Y_i };
var __wakaru_X_g_initialized = false;
export function X_g() {
if (__wakaru_X_g_initialized) return;
__wakaru_X_g_initialized = true;
"use strict";
x(), en(), si(), qa(), Ze(), Qn(), ya(), qi(), dts(), Qfn(), r5e(), Jfn(), qOt(), aU(), Ves(), nre(), hts(), mts(), q_g(), Y_g(), Se(), lts(), Y_i = class extends mW {
    constructor(e, t, n, i){
        super(e), this._viewGpuContext = t, this._instantiationService = n, this._logService = i, this._atlasGpuTextureVersions = [], this._initialized = !1, this._glyphRasterizer = this._register(new cn), this._renderStrategy = this._register(new cn), this._renderStrategyBindGroupListener = this._register(new cn), this.canvas = this._viewGpuContext.canvas.domNode, this._register(Hc((r)=>{
            this._viewGpuContext.canvasDevicePixelDimensions.read(r);
            const s = this._lastViewportData;
            s && setTimeout(()=>{
                s === this._lastViewportData && this.renderText(s);
            });
        })), this.initWebgpu();
    }
    async initWebgpu() {
        if (this._device = J1.deviceSync || await J1.device, this._store.isDisposed) return;
        const e = J1.atlas;
        this._register(e.onDidDeleteGlyphs(()=>{
            this._atlasGpuTextureVersions.length = 0, this._atlasGpuTextureVersions[0] = 0, this._atlasGpuTextureVersions[1] = 0, this._renderStrategy.value.reset();
        }));
        const t = navigator.gpu.getPreferredCanvasFormat();
        this._viewGpuContext.ctx.configure({
            device: this._device,
            format: t,
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
            const c = new Float32Array(6), l = (u = this.canvas.width, h = this.canvas.height)=>(c[0] = u, c[1] = h, c[2] = Math.ceil(this._context.configuration.options.get(151).contentLeft * sa().devicePixelRatio), c[3] = 0, c[4] = c[0] - c[2], c[5] = c[1] - c[3], c);
            n = this._register(VK.createBuffer(this._device, {
                label: "Monaco uniform buffer",
                size: 24,
                usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
            }, ()=>l())).object, this._register(xO(this._viewGpuContext.canvasDevicePixelDimensions, ({ width: u, height: h })=>{
                this._device.queue.writeBuffer(n, 0, l(u, h));
            })), this._register(xO(this._viewGpuContext.contentLeft, ()=>{
                this._device.queue.writeBuffer(n, 0, l());
            }));
        }
        let i;
        {
            let a;
            ((c)=>{
                c[c.FloatsPerEntry = 2] = "FloatsPerEntry", c[c.BytesPerEntry = 8] = "BytesPerEntry", c[c.Offset_Width_ = 0] = "Offset_Width_", c[c.Offset_Height = 1] = "Offset_Height";
            })(a || (a = {})), i = this._register(VK.createBuffer(this._device, {
                label: "Monaco atlas info uniform buffer",
                size: 8,
                usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
            }, ()=>{
                const c = new Float32Array(2);
                return c[0] = e.pageSize, c[1] = e.pageSize, c;
            })).object;
        }
        const r = this._context.configuration.options.get(51), s = this._context.configuration.options.get(54);
        this._glyphRasterizer.value = this._register(new rFt(s, r, this._viewGpuContext.devicePixelRatio.get(), J1.decorationStyleCache)), this._register(xO(this._viewGpuContext.devicePixelRatio, ()=>{
            this._refreshGlyphRasterizer();
        })), this._renderStrategy.value = this._instantiationService.createInstance(sFt, this._context, this._viewGpuContext, this._device, this._glyphRasterizer), this._glyphStorageBuffer = this._register(VK.createBuffer(this._device, {
            label: "Monaco glyph storage buffer",
            size: qge.maximumPageCount * (vre.maximumGlyphCount * 24),
            usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })).object, this._atlasGpuTextureVersions[0] = 0, this._atlasGpuTextureVersions[1] = 0, this._atlasGpuTexture = this._register(VK.createTexture(this._device, {
            label: "Monaco atlas texture",
            format: "rgba8unorm",
            size: {
                width: e.pageSize,
                height: e.pageSize,
                depthOrArrayLayers: qge.maximumPageCount
            },
            dimension: "2d",
            usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT
        })).object, this._updateAtlasStorageBufferAndTexture(), this._vertexBuffer = this._register(VK.createBuffer(this._device, {
            label: "Monaco vertex buffer",
            size: qze.byteLength,
            usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
        }, qze)).object;
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
                        format: t,
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
    _refreshRenderStrategy(e) {
        if (this._renderStrategy.value?.type === "viewport" || e.endLineNumber < sFt.maxSupportedLines && this._viewportMaxColumn(e) < sFt.maxSupportedColumns) return;
        this._logService.trace(`File is larger than ${sFt.maxSupportedLines} lines or ${sFt.maxSupportedColumns} columns, switching to viewport render strategy`);
        const t = this._instantiationService.createInstance(G6c, this._context, this._viewGpuContext, this._device, this._glyphRasterizer);
        this._renderStrategy.value = t, this._renderStrategyBindGroupListener.value = t.onDidChangeBindGroupEntries(()=>this._rebuildBindGroup?.()), this._rebuildBindGroup?.();
    }
    _viewportMaxColumn(e) {
        let t = 0, n;
        for(let i = e.startLineNumber; i <= e.endLineNumber; i++)n = e.getViewLineRenderingData(i), t = Math.max(t, n.maxColumn);
        return t;
    }
    _updateAtlasStorageBufferAndTexture() {
        for (const [e, t] of J1.atlas.pages.entries()){
            if (e >= qge.maximumPageCount) {
                console.log(`Attempt to upload atlas page [${e}], only ${qge.maximumPageCount} are supported currently`);
                continue;
            }
            if (t.version === this._atlasGpuTextureVersions[e]) continue;
            this._logService.trace("Updating atlas page[", e, "] from version ", this._atlasGpuTextureVersions[e], " to version ", t.version);
            const n = 6 * vre.maximumGlyphCount, i = new Float32Array(n);
            let r = 0;
            for (const s of t.glyphs)i[r + 0] = s.x, i[r + 0 + 1] = s.y, i[r + 2] = s.w, i[r + 2 + 1] = s.h, i[r + 4] = s.originOffsetX, i[r + 4 + 1] = s.originOffsetY, r += 6;
            if (r / 6 > vre.maximumGlyphCount) throw new Error(`Attempting to write more glyphs (${r / 6}) than the GPUBuffer can hold (${vre.maximumGlyphCount})`);
            this._device.queue.writeBuffer(this._glyphStorageBuffer, e * 6 * vre.maximumGlyphCount * Float32Array.BYTES_PER_ELEMENT, i, 0, 6 * vre.maximumGlyphCount), t.usedArea.right - t.usedArea.left > 0 && t.usedArea.bottom - t.usedArea.top > 0 && this._device.queue.copyExternalImageToTexture({
                source: t.source
            }, {
                texture: this._atlasGpuTexture,
                origin: {
                    x: t.usedArea.left,
                    y: t.usedArea.top,
                    z: e
                }
            }, {
                width: t.usedArea.right - t.usedArea.left + 1,
                height: t.usedArea.bottom - t.usedArea.top + 1
            }), this._atlasGpuTextureVersions[e] = t.version;
        }
    }
    prepareRender(e) {
        throw new Zu("Should not be called");
    }
    render(e) {
        throw new Zu("Should not be called");
    }
    onConfigurationChanged(e) {
        return this._refreshGlyphRasterizer(), !0;
    }
    onCursorStateChanged(e) {
        return !0;
    }
    onDecorationsChanged(e) {
        return !0;
    }
    onFlushed(e) {
        return !0;
    }
    onLinesChanged(e) {
        return !0;
    }
    onLinesDeleted(e) {
        return !0;
    }
    onLinesInserted(e) {
        return !0;
    }
    onLineMappingChanged(e) {
        return !0;
    }
    onRevealRangeRequest(e) {
        return !0;
    }
    onScrollChanged(e) {
        return !0;
    }
    onThemeChanged(e) {
        return !0;
    }
    onZonesChanged(e) {
        return !0;
    }
    _refreshGlyphRasterizer() {
        const e = this._glyphRasterizer.value;
        if (!e) return;
        const t = this._context.configuration.options.get(51), n = this._context.configuration.options.get(54), i = this._viewGpuContext.devicePixelRatio.get();
        (e.fontFamily !== t || e.fontSize !== n || e.devicePixelRatio !== i) && (this._glyphRasterizer.value = new rFt(n, t, i, J1.decorationStyleCache));
    }
    renderText(e) {
        if (this._initialized) return this._refreshRenderStrategy(e), this._renderText(e);
        this._initViewportData = this._initViewportData ?? [], this._initViewportData.push(e);
    }
    _renderText(e) {
        this._viewGpuContext.rectangleRenderer.draw(e);
        const t = new Zfn(this._context.configuration, this._context.theme.type);
        this._renderStrategy.value.update(e, t), this._updateAtlasStorageBufferAndTexture();
        const n = this._device.createCommandEncoder({
            label: "Monaco command encoder"
        });
        this._renderPassColorAttachment.view = this._viewGpuContext.ctx.getCurrentTexture().createView({
            label: "Monaco canvas texture view"
        });
        const i = n.beginRenderPass(this._renderPassDescriptor);
        i.setPipeline(this._pipeline), i.setVertexBuffer(0, this._vertexBuffer);
        const r = Math.ceil(this._viewGpuContext.contentLeft.get() * this._viewGpuContext.devicePixelRatio.get());
        i.setScissorRect(r, 0, this.canvas.width - r, this.canvas.height), i.setBindGroup(0, this._bindGroup), this._renderStrategy.value.draw(i, e), i.end();
        const s = n.finish();
        this._device.queue.submit([
            s
        ]), this._lastViewportData = e, this._lastViewLineOptions = t;
    }
    linesVisibleRangesForRange(e, t) {
        if (!this._lastViewportData) return null;
        const n = e.endLineNumber, i = dt.intersectRanges(e, this._lastViewportData.visibleRange);
        if (!i) return null;
        const r = this._lastViewportData.startLineNumber, s = this._lastViewportData.endLineNumber, o = this._lastViewportData, a = this._lastViewLineOptions;
        if (!o || !a) return null;
        const c = [];
        let l = 0;
        t && (l = this._context.viewModel.coordinatesConverter.convertViewPositionToModelPosition(new Yn(i.startLineNumber, 1)).lineNumber);
        for(let u = i.startLineNumber; u <= i.endLineNumber; u++){
            if (u < r || u > s) continue;
            const h = u === i.startLineNumber ? i.startColumn : 1, p = u !== i.endLineNumber, g = p ? this._context.viewModel.getLineMaxColumn(u) : i.endColumn, f = this._visibleRangesForLineRange(u, h, g);
            if (f) {
                if (t && u < n) {
                    const v = l;
                    l = this._context.viewModel.coordinatesConverter.convertViewPositionToModelPosition(new Yn(u + 1, 1)).lineNumber, v !== l && (f.ranges[f.ranges.length - 1].width += a.spaceWidth);
                }
                c.push(new pes(f.outsideRenderedLine, u, T_i.from(f.ranges), p));
            }
        }
        return c.length === 0 ? null : c;
    }
    _visibleRangesForLineRange(e, t, n) {
        if (this.shouldRender()) return null;
        const i = this._lastViewportData, r = this._lastViewLineOptions;
        if (!i || !r || e < i.startLineNumber || e > i.endLineNumber) return null;
        const s = i.getViewLineRenderingData(e), o = s.content;
        let a;
        s.isBasicASCII && r.useMonospaceOptimizations || (a = z_i(s, r));
        let c = "", l = 0, u = 0;
        for(let f = 0; f < t - 1; f++){
            if (s.isBasicASCII && r.useMonospaceOptimizations) c = o.charAt(f);
            else {
                if (c = a.getSegmentAtIndex(f), c === void 0) continue;
                u += this._renderStrategy.value.glyphRasterizer.getTextMetrics(c).width / sa().devicePixelRatio - r.spaceWidth;
            }
            c === "	" ? l = _D.nextRenderTabStop(l, s.tabSize) : l++;
        }
        let h = l, p = 0;
        for(let f = t - 1; f < n - 1; f++){
            if (s.isBasicASCII && r.useMonospaceOptimizations) c = o.charAt(f);
            else {
                if (c = a.getSegmentAtIndex(f), c === void 0) continue;
                p += this._renderStrategy.value.glyphRasterizer.getTextMetrics(c).width / sa().devicePixelRatio - r.spaceWidth;
            }
            c === "	" ? h = _D.nextRenderTabStop(h, s.tabSize) : h++;
        }
        return new E_i(!1, [
            new e5e(l * r.spaceWidth + u, (h - l) * r.spaceWidth + p)
        ]);
    }
    visibleRangeForPosition(e) {
        const t = this._visibleRangesForLineRange(e.lineNumber, e.column, e.column);
        return t ? new mes(t.outsideRenderedLine, t.ranges[0].left) : null;
    }
    getLineWidth(e) {
        if (!this._lastViewportData || !this._lastViewLineOptions || !this._viewGpuContext.canRender(this._lastViewLineOptions, this._lastViewportData, e)) return;
        const t = this._lastViewportData.getViewLineRenderingData(e), i = this._visibleRangesForLineRange(e, 1, t.maxColumn)?.ranges.at(-1);
        if (i) return i.width;
    }
    getPositionAtCoordinate(e, t) {
        if (!this._lastViewportData || !this._lastViewLineOptions || !this._viewGpuContext.canRender(this._lastViewLineOptions, this._lastViewportData, e)) return;
        const n = this._lastViewportData.getViewLineRenderingData(e), i = n.content, r = sa().devicePixelRatio, s = t * r, o = this._lastViewLineOptions.spaceWidth * r, a = z_i(n, this._lastViewLineOptions);
        let c = 0, l = 0, u = 0, h = 0;
        for(let p = 0; p < i.length; p++){
            const g = a.getSegmentAtIndex(p);
            if (g === void 0) {
                h++;
                continue;
            }
            if (g === "	") {
                const f = p + u;
                u = _D.nextRenderTabStop(p + u, n.tabSize), l = o * (u - f), u -= p + 1;
            } else n.isBasicASCII && this._lastViewLineOptions.useMonospaceOptimizations ? l = o : l = this._renderStrategy.value.glyphRasterizer.getTextMetrics(g).width;
            if (s < c + l / 2) break;
            c += l, h++;
        }
        return new Yn(e, h + 1);
    }
}, Y_i = ie([
    C(2, _t),
    C(3, Wn)
], Y_i);

}
