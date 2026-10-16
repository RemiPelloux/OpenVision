import { Ct, Se, bt, cn } from "./HVr.js";
import { en } from "./dom_2.js";
import { Qfn, VK } from "./gpuDisposable.js";
import { qze, r5e } from "./gpuUtils.js";
import { B_g } from "./objectCollectionBuffer.js";
import { F_g, k6c, sa } from "./qIc.js";
import { P6c, U_g } from "./rectangleRenderer.wgsl.js";
import { x } from "./tslib.es6.js";
import { $pt, Hze } from "./viewEventHandler.js";
var L6c;
export { L6c };
var __wakaru_$_g_initialized = false;
export function $_g() {
if (__wakaru_$_g_initialized) return;
__wakaru_$_g_initialized = true;
"use strict";
x(), en(), bt(), Se(), $pt(), Qfn(), r5e(), B_g(), U_g(), L6c = class extends Hze {
    constructor(e, t, n, i, r, s){
        super(), this._context = e, this._contentLeft = t, this._devicePixelRatio = n, this._canvas = i, this._ctx = r, this._shapeBindBuffer = this._register(new cn), this._initialized = !1, this._shapeCollection = this._register(F_g([
            {
                name: "x"
            },
            {
                name: "y"
            },
            {
                name: "width"
            },
            {
                name: "height"
            },
            {
                name: "red"
            },
            {
                name: "green"
            },
            {
                name: "blue"
            },
            {
                name: "alpha"
            }
        ], 32)), this._context.addEventHandler(this), this._initWebgpu(s);
    }
    async _initWebgpu(e) {
        if (this._device = await e, this._store.isDisposed) return;
        const t = navigator.gpu.getPreferredCanvasFormat();
        this._ctx.configure({
            device: this._device,
            format: t,
            alphaMode: "premultiplied"
        }), this._renderPassColorAttachment = {
            view: null,
            loadOp: "load",
            storeOp: "store"
        }, this._renderPassDescriptor = {
            label: "Monaco rectangle renderer render pass",
            colorAttachments: [
                this._renderPassColorAttachment
            ]
        };
        let n;
        {
            let o;
            ((l)=>{
                l[l.FloatsPerEntry = 6] = "FloatsPerEntry", l[l.BytesPerEntry = 24] = "BytesPerEntry", l[l.Offset_CanvasWidth____ = 0] = "Offset_CanvasWidth____", l[l.Offset_CanvasHeight___ = 1] = "Offset_CanvasHeight___", l[l.Offset_ViewportOffsetX = 2] = "Offset_ViewportOffsetX", l[l.Offset_ViewportOffsetY = 3] = "Offset_ViewportOffsetY", l[l.Offset_ViewportWidth__ = 4] = "Offset_ViewportWidth__", l[l.Offset_ViewportHeight_ = 5] = "Offset_ViewportHeight_";
            })(o || (o = {}));
            const a = new Float32Array(6), c = (l = this._canvas.width, u = this._canvas.height)=>(a[0] = l, a[1] = u, a[2] = Math.ceil(this._context.configuration.options.get(151).contentLeft * sa().devicePixelRatio), a[3] = 0, a[4] = a[0] - a[2], a[5] = a[1] - a[3], a);
            n = this._register(VK.createBuffer(this._device, {
                label: "Monaco rectangle renderer uniform buffer",
                size: 24,
                usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
            }, ()=>c())).object, this._register(k6c(this._canvas, sa(), (l, u)=>{
                this._device.queue.writeBuffer(n, 0, c(l, u));
            }));
        }
        const i = 2;
        this._scrollOffsetBindBuffer = this._register(VK.createBuffer(this._device, {
            label: "Monaco rectangle renderer scroll offset buffer",
            size: i * Float32Array.BYTES_PER_ELEMENT,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        })).object, this._scrollOffsetValueBuffer = new Float32Array(i);
        const r = ()=>VK.createBuffer(this._device, {
                label: "Monaco rectangle renderer shape buffer",
                size: this._shapeCollection.buffer.byteLength,
                usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
            });
        this._shapeBindBuffer.value = r(), this._register(Ct.runAndSubscribe(this._shapeCollection.onDidChangeBuffer, ()=>{
            this._shapeBindBuffer.value = r(), this._pipeline && this._updateBindGroup(this._pipeline, n);
        })), this._vertexBuffer = this._register(VK.createBuffer(this._device, {
            label: "Monaco rectangle renderer vertex buffer",
            size: qze.byteLength,
            usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
        }, qze)).object;
        const s = this._device.createShaderModule({
            label: "Monaco rectangle renderer shader module",
            code: P6c
        });
        this._pipeline = this._device.createRenderPipeline({
            label: "Monaco rectangle renderer render pipeline",
            layout: "auto",
            vertex: {
                module: s,
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
                module: s,
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
        }), this._updateBindGroup(this._pipeline, n), this._initialized = !0;
    }
    _updateBindGroup(e, t) {
        this._bindGroup = this._device.createBindGroup({
            label: "Monaco rectangle renderer bind group",
            layout: e.getBindGroupLayout(0),
            entries: [
                {
                    binding: 0,
                    resource: {
                        buffer: this._shapeBindBuffer.value.object
                    }
                },
                {
                    binding: 1,
                    resource: {
                        buffer: t
                    }
                },
                {
                    binding: 2,
                    resource: {
                        buffer: this._scrollOffsetBindBuffer
                    }
                }
            ]
        });
    }
    register(e, t, n, i, r, s, o, a) {
        return this._shapeCollection.createEntry({
            x: e,
            y: t,
            width: n,
            height: i,
            red: r,
            green: s,
            blue: o,
            alpha: a
        });
    }
    onScrollChanged(e) {
        if (this._device) {
            const t = sa().devicePixelRatio;
            this._scrollOffsetValueBuffer[0] = this._context.viewLayout.getCurrentScrollLeft() * t, this._scrollOffsetValueBuffer[1] = this._context.viewLayout.getCurrentScrollTop() * t, this._device.queue.writeBuffer(this._scrollOffsetBindBuffer, 0, this._scrollOffsetValueBuffer);
        }
        return !0;
    }
    _update() {
        if (!this._device) return;
        const e = this._shapeCollection;
        e.dirtyTracker.isDirty && (this._device.queue.writeBuffer(this._shapeBindBuffer.value.object, 0, e.buffer, e.dirtyTracker.dataOffset, e.dirtyTracker.dirtySize * e.view.BYTES_PER_ELEMENT), e.dirtyTracker.clear());
    }
    draw(e) {
        if (!this._initialized) return;
        this._update();
        const t = this._device.createCommandEncoder({
            label: "Monaco rectangle renderer command encoder"
        });
        this._renderPassColorAttachment.view = this._ctx.getCurrentTexture().createView();
        const n = t.beginRenderPass(this._renderPassDescriptor);
        n.setPipeline(this._pipeline), n.setVertexBuffer(0, this._vertexBuffer), n.setBindGroup(0, this._bindGroup);
        const i = Math.ceil(this._contentLeft.get() * this._devicePixelRatio.get());
        n.setScissorRect(i, 0, this._canvas.width - i, this._canvas.height), n.draw(qze.length / 2, this._shapeCollection.entryCount), n.end();
        const r = t.finish();
        this._device.queue.submit([
            r
        ]);
    }
};

}
