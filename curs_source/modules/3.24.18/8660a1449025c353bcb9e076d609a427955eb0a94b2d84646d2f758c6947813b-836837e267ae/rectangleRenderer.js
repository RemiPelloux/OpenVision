import { Gt, Qe, Vn, en } from "./Iwo.js";
import { Hn } from "./dom_2.js";
import { Rsi, _oe } from "./gpuDisposable.js";
import { Cyt, wyt } from "./gpuUtils.js";
import { PDy } from "./objectCollectionBuffer.js";
import { MDy, V$d } from "./rectangleRenderer.wgsl.js";
import { E } from "./tslib.es6.js";
import { _yt, cBt } from "./viewEventHandler.js";
import { L$d, RDy, rl } from "./ze.js";
var K$d;
export { K$d };
var __wakaru_DDy_initialized = false;
export function DDy() {
if (__wakaru_DDy_initialized) return;
__wakaru_DDy_initialized = true;
"use strict";
E(), Hn(), Gt(), Qe(), cBt(), Rsi(), Cyt(), PDy(), MDy(), K$d = class extends _yt {
    constructor(t, e, n, i, r, s){
        super(), this._context = t, this._contentLeft = e, this._devicePixelRatio = n, this._canvas = i, this._ctx = r, this._shapeBindBuffer = this._register(new Vn), this._initialized = !1, this._shapeCollection = this._register(RDy([
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
    async _initWebgpu(t) {
        if (this._device = await t, this._store.isDisposed) return;
        const e = navigator.gpu.getPreferredCanvasFormat();
        this._ctx.configure({
            device: this._device,
            format: e,
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
            ((c)=>{
                c[c.FloatsPerEntry = 6] = "FloatsPerEntry", c[c.BytesPerEntry = 24] = "BytesPerEntry", c[c.Offset_CanvasWidth____ = 0] = "Offset_CanvasWidth____", c[c.Offset_CanvasHeight___ = 1] = "Offset_CanvasHeight___", c[c.Offset_ViewportOffsetX = 2] = "Offset_ViewportOffsetX", c[c.Offset_ViewportOffsetY = 3] = "Offset_ViewportOffsetY", c[c.Offset_ViewportWidth__ = 4] = "Offset_ViewportWidth__", c[c.Offset_ViewportHeight_ = 5] = "Offset_ViewportHeight_";
            })(o || (o = {}));
            const a = new Float32Array(6), l = (c = this._canvas.width, u = this._canvas.height)=>(a[0] = c, a[1] = u, a[2] = Math.ceil(this._context.configuration.options.get(151).contentLeft * rl().devicePixelRatio), a[3] = 0, a[4] = a[0] - a[2], a[5] = a[1] - a[3], a);
            n = this._register(_oe.createBuffer(this._device, {
                label: "Monaco rectangle renderer uniform buffer",
                size: 24,
                usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
            }, ()=>l())).object, this._register(L$d(this._canvas, rl(), (c, u)=>{
                this._device.queue.writeBuffer(n, 0, l(c, u));
            }));
        }
        const i = 2;
        this._scrollOffsetBindBuffer = this._register(_oe.createBuffer(this._device, {
            label: "Monaco rectangle renderer scroll offset buffer",
            size: i * Float32Array.BYTES_PER_ELEMENT,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        })).object, this._scrollOffsetValueBuffer = new Float32Array(i);
        const r = ()=>_oe.createBuffer(this._device, {
                label: "Monaco rectangle renderer shape buffer",
                size: this._shapeCollection.buffer.byteLength,
                usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
            });
        this._shapeBindBuffer.value = r(), this._register(en.runAndSubscribe(this._shapeCollection.onDidChangeBuffer, ()=>{
            this._shapeBindBuffer.value = r(), this._pipeline && this._updateBindGroup(this._pipeline, n);
        })), this._vertexBuffer = this._register(_oe.createBuffer(this._device, {
            label: "Monaco rectangle renderer vertex buffer",
            size: wyt.byteLength,
            usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
        }, wyt)).object;
        const s = this._device.createShaderModule({
            label: "Monaco rectangle renderer shader module",
            code: V$d
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
        }), this._updateBindGroup(this._pipeline, n), this._initialized = !0;
    }
    _updateBindGroup(t, e) {
        this._bindGroup = this._device.createBindGroup({
            label: "Monaco rectangle renderer bind group",
            layout: t.getBindGroupLayout(0),
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
                        buffer: e
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
    register(t, e, n, i, r, s, o, a) {
        return this._shapeCollection.createEntry({
            x: t,
            y: e,
            width: n,
            height: i,
            red: r,
            green: s,
            blue: o,
            alpha: a
        });
    }
    onScrollChanged(t) {
        if (this._device) {
            const e = rl().devicePixelRatio;
            this._scrollOffsetValueBuffer[0] = this._context.viewLayout.getCurrentScrollLeft() * e, this._scrollOffsetValueBuffer[1] = this._context.viewLayout.getCurrentScrollTop() * e, this._device.queue.writeBuffer(this._scrollOffsetBindBuffer, 0, this._scrollOffsetValueBuffer);
        }
        return !0;
    }
    _update() {
        if (!this._device) return;
        const t = this._shapeCollection;
        t.dirtyTracker.isDirty && (this._device.queue.writeBuffer(this._shapeBindBuffer.value.object, 0, t.buffer, t.dirtyTracker.dataOffset, t.dirtyTracker.dirtySize * t.view.BYTES_PER_ELEMENT), t.dirtyTracker.clear());
    }
    draw(t) {
        if (!this._initialized) return;
        this._update();
        const e = this._device.createCommandEncoder({
            label: "Monaco rectangle renderer command encoder"
        });
        this._renderPassColorAttachment.view = this._ctx.getCurrentTexture().createView();
        const n = e.beginRenderPass(this._renderPassDescriptor);
        n.setPipeline(this._pipeline), n.setVertexBuffer(0, this._vertexBuffer), n.setBindGroup(0, this._bindGroup);
        const i = Math.ceil(this._contentLeft.get() * this._devicePixelRatio.get());
        n.setScissorRect(i, 0, this._canvas.width - i, this._canvas.height), n.draw(wyt.length / 2, this._shapeCollection.entryCount), n.end();
        const r = e.finish();
        this._device.queue.submit([
            r
        ]);
    }
};

}
