import { izS, rzS, szS } from "./ipa.js";
import { E_n, I_n } from "./trusted-types.js";
import { E } from "./tslib.es6.js";
import { Qsp, nzS } from "./vertex-shader.js";
var eop, top, lk, _0a, nop, iop;
export { _0a, eop, iop, lk, nop, top };
var __wakaru_ozS_initialized = false;
export function ozS() {
if (__wakaru_ozS_initialized) return;
__wakaru_ozS_initialized = true;
E(), I_n(), nzS(), eop = Object.defineProperty, top = (t, e, n)=>e in t ? eop(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : t[e] = n, lk = (t, e, n)=>top(t, typeof e != "symbol" ? e + "" : e, n), _0a = 1920 * 1080 * 4, nop = class {
    constructor(t, e, n, i, r = 0, s = 0, o = 2, a = _0a, l = []){
        if (lk(this, "parentElement"), lk(this, "canvasElement"), lk(this, "gl"), lk(this, "program", null), lk(this, "uniformLocations", {}), lk(this, "fragmentShader"), lk(this, "rafId", null), lk(this, "lastRenderTime", 0), lk(this, "currentFrame", 0), lk(this, "speed", 0), lk(this, "currentSpeed", 0), lk(this, "providedUniforms"), lk(this, "mipmaps", []), lk(this, "hasBeenDisposed", !1), lk(this, "resolutionChanged", !0), lk(this, "textures", new Map), lk(this, "minPixelRatio"), lk(this, "maxPixelCount"), lk(this, "isSafari", rzS()), lk(this, "uniformCache", {}), lk(this, "textureUnitMap", new Map), lk(this, "ownerDocument"), lk(this, "initProgram", ()=>{
            const d = izS(this.gl, Qsp, this.fragmentShader);
            d && (this.program = d);
        }), lk(this, "setupPositionAttribute", ()=>{
            const d = this.gl.getAttribLocation(this.program, "a_position"), h = this.gl.createBuffer();
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, h);
            const p = [
                -1,
                -1,
                1,
                -1,
                -1,
                1,
                -1,
                1,
                1,
                -1,
                1,
                1
            ];
            this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(p), this.gl.STATIC_DRAW), this.gl.enableVertexAttribArray(d), this.gl.vertexAttribPointer(d, 2, this.gl.FLOAT, !1, 0, 0);
        }), lk(this, "setupUniforms", ()=>{
            const d = {
                u_time: this.gl.getUniformLocation(this.program, "u_time"),
                u_pixelRatio: this.gl.getUniformLocation(this.program, "u_pixelRatio"),
                u_resolution: this.gl.getUniformLocation(this.program, "u_resolution")
            };
            Object.entries(this.providedUniforms).forEach(([h, p])=>{
                if (d[h] = this.gl.getUniformLocation(this.program, h), p instanceof HTMLImageElement) {
                    const g = `${h}AspectRatio`;
                    d[g] = this.gl.getUniformLocation(this.program, g);
                }
            }), this.uniformLocations = d;
        }), lk(this, "renderScale", 1), lk(this, "parentWidth", 0), lk(this, "parentHeight", 0), lk(this, "parentDevicePixelWidth", 0), lk(this, "parentDevicePixelHeight", 0), lk(this, "devicePixelsSupported", !1), lk(this, "resizeObserver", null), lk(this, "setupResizeObserver", ()=>{
            this.resizeObserver = new ResizeObserver(([d])=>{
                if (d?.borderBoxSize[0]) {
                    const h = d.devicePixelContentBoxSize?.[0];
                    h !== void 0 && (this.devicePixelsSupported = !0, this.parentDevicePixelWidth = h.inlineSize, this.parentDevicePixelHeight = h.blockSize), this.parentWidth = d.borderBoxSize[0].inlineSize, this.parentHeight = d.borderBoxSize[0].blockSize;
                }
                this.handleResize();
            }), this.resizeObserver.observe(this.parentElement);
        }), lk(this, "handleVisualViewportChange", ()=>{
            this.resizeObserver?.disconnect(), this.setupResizeObserver();
        }), lk(this, "handleResize", ()=>{
            let d = 0, h = 0;
            const p = Math.max(1, window.devicePixelRatio), g = visualViewport?.scale ?? 1;
            if (this.devicePixelsSupported) {
                const k = Math.max(1, this.minPixelRatio / p);
                d = this.parentDevicePixelWidth * k * g, h = this.parentDevicePixelHeight * k * g;
            } else {
                let k = Math.max(p, this.minPixelRatio) * g;
                if (this.isSafari) {
                    const C = szS(this.ownerDocument);
                    k *= Math.max(1, C);
                }
                d = Math.round(this.parentWidth) * k, h = Math.round(this.parentHeight) * k;
            }
            const f = Math.sqrt(this.maxPixelCount) / Math.sqrt(d * h), _ = Math.min(1, f), b = Math.round(d * _), y = Math.round(h * _), S = b / Math.round(this.parentWidth);
            (this.canvasElement.width !== b || this.canvasElement.height !== y || this.renderScale !== S) && (this.renderScale = S, this.canvasElement.width = b, this.canvasElement.height = y, this.resolutionChanged = !0, this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height), this.render(performance.now()));
        }), lk(this, "render", (d)=>{
            if (this.hasBeenDisposed) return;
            if (this.program === null) {
                console.warn("Tried to render before program or gl was initialized");
                return;
            }
            const h = d - this.lastRenderTime;
            this.lastRenderTime = d, this.currentSpeed !== 0 && (this.currentFrame += h * this.currentSpeed), this.gl.clear(this.gl.COLOR_BUFFER_BIT), this.gl.useProgram(this.program), this.gl.uniform1f(this.uniformLocations.u_time, this.currentFrame * .001), this.resolutionChanged && (this.gl.uniform2f(this.uniformLocations.u_resolution, this.gl.canvas.width, this.gl.canvas.height), this.gl.uniform1f(this.uniformLocations.u_pixelRatio, this.renderScale), this.resolutionChanged = !1), this.gl.drawArrays(this.gl.TRIANGLES, 0, 6), this.currentSpeed !== 0 ? this.requestRender() : this.rafId = null;
        }), lk(this, "requestRender", ()=>{
            this.rafId !== null && cancelAnimationFrame(this.rafId), this.rafId = requestAnimationFrame(this.render);
        }), lk(this, "setTextureUniform", (d, h)=>{
            if (!h.complete || h.naturalWidth === 0) throw new Error(`Paper Shaders: image for uniform ${d} must be fully loaded`);
            const p = this.textures.get(d);
            p && this.gl.deleteTexture(p), this.textureUnitMap.has(d) || this.textureUnitMap.set(d, this.textureUnitMap.size);
            const g = this.textureUnitMap.get(d);
            this.gl.activeTexture(this.gl.TEXTURE0 + g);
            const f = this.gl.createTexture();
            this.gl.bindTexture(this.gl.TEXTURE_2D, f), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR), this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, h), this.mipmaps.includes(d) && (this.gl.generateMipmap(this.gl.TEXTURE_2D), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR_MIPMAP_LINEAR));
            const _ = this.gl.getError();
            if (_ !== this.gl.NO_ERROR || f === null) {
                console.error("Paper Shaders: WebGL error when uploading texture:", _);
                return;
            }
            this.textures.set(d, f);
            const b = this.uniformLocations[d];
            if (b) {
                this.gl.uniform1i(b, g);
                const y = `${d}AspectRatio`, S = this.uniformLocations[y];
                if (S) {
                    const k = h.naturalWidth / h.naturalHeight;
                    this.gl.uniform1f(S, k);
                }
            }
        }), lk(this, "areUniformValuesEqual", (d, h)=>d === h ? !0 : Array.isArray(d) && Array.isArray(h) && d.length === h.length ? d.every((p, g)=>this.areUniformValuesEqual(p, h[g])) : !1), lk(this, "setUniformValues", (d)=>{
            this.gl.useProgram(this.program), Object.entries(d).forEach(([h, p])=>{
                let g = p;
                if (p instanceof HTMLImageElement && (g = `${p.src.slice(0, 200)}|${p.naturalWidth}x${p.naturalHeight}`), this.areUniformValuesEqual(this.uniformCache[h], g)) return;
                this.uniformCache[h] = g;
                const f = this.uniformLocations[h];
                if (!f) {
                    console.warn(`Uniform location for ${h} not found`);
                    return;
                }
                if (p instanceof HTMLImageElement) this.setTextureUniform(h, p);
                else if (Array.isArray(p)) {
                    let _ = null, b = null;
                    if (p[0] !== void 0 && Array.isArray(p[0])) {
                        const y = p[0].length;
                        if (p.every((S)=>S.length === y)) _ = p.flat(), b = y;
                        else {
                            console.warn(`All child arrays must be the same length for ${h}`);
                            return;
                        }
                    } else _ = p, b = _.length;
                    switch(b){
                        case 2:
                            this.gl.uniform2fv(f, _);
                            break;
                        case 3:
                            this.gl.uniform3fv(f, _);
                            break;
                        case 4:
                            this.gl.uniform4fv(f, _);
                            break;
                        case 9:
                            this.gl.uniformMatrix3fv(f, !1, _);
                            break;
                        case 16:
                            this.gl.uniformMatrix4fv(f, !1, _);
                            break;
                        default:
                            console.warn(`Unsupported uniform array length: ${b}`);
                    }
                } else typeof p == "number" ? this.gl.uniform1f(f, p) : typeof p == "boolean" ? this.gl.uniform1i(f, p ? 1 : 0) : console.warn(`Unsupported uniform type for ${h}: ${typeof p}`);
            });
        }), lk(this, "getCurrentFrame", ()=>this.currentFrame), lk(this, "setFrame", (d)=>{
            this.currentFrame = d, this.lastRenderTime = performance.now(), this.render(performance.now());
        }), lk(this, "setSpeed", (d = 1)=>{
            this.speed = d, this.setCurrentSpeed(this.ownerDocument.hidden ? 0 : d);
        }), lk(this, "setCurrentSpeed", (d)=>{
            this.currentSpeed = d, this.rafId === null && d !== 0 && (this.lastRenderTime = performance.now(), this.rafId = requestAnimationFrame(this.render)), this.rafId !== null && d === 0 && (cancelAnimationFrame(this.rafId), this.rafId = null);
        }), lk(this, "setMaxPixelCount", (d = _0a)=>{
            this.maxPixelCount = d, this.handleResize();
        }), lk(this, "setMinPixelRatio", (d = 2)=>{
            this.minPixelRatio = d, this.handleResize();
        }), lk(this, "setUniforms", (d)=>{
            this.setUniformValues(d), this.providedUniforms = {
                ...this.providedUniforms,
                ...d
            }, this.render(performance.now());
        }), lk(this, "handleDocumentVisibilityChange", ()=>{
            this.setCurrentSpeed(this.ownerDocument.hidden ? 0 : this.speed);
        }), lk(this, "dispose", ()=>{
            this.hasBeenDisposed = !0, this.rafId !== null && (cancelAnimationFrame(this.rafId), this.rafId = null), this.gl && this.program && (this.textures.forEach((d)=>{
                this.gl.deleteTexture(d);
            }), this.textures.clear(), this.gl.deleteProgram(this.program), this.program = null, this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null), this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, null), this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, null), this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null), this.gl.getError()), this.resizeObserver && (this.resizeObserver.disconnect(), this.resizeObserver = null), visualViewport?.removeEventListener("resize", this.handleVisualViewportChange), this.ownerDocument.removeEventListener("visibilitychange", this.handleDocumentVisibilityChange), this.uniformLocations = {}, this.canvasElement.remove(), delete this.parentElement.paperShaderMount;
        }), t?.nodeType === 1) this.parentElement = t;
        else throw new Error("Paper Shaders: parent element must be an HTMLElement");
        if (this.ownerDocument = t.ownerDocument, !this.ownerDocument.querySelector("style[data-paper-shader]")) {
            const d = this.ownerDocument.createElement("style");
            E_n(d, iop), d.setAttribute("data-paper-shader", ""), this.ownerDocument.head.prepend(d);
        }
        const c = this.ownerDocument.createElement("canvas");
        this.canvasElement = c, this.parentElement.prepend(c), this.fragmentShader = e, this.providedUniforms = n, this.mipmaps = l, this.currentFrame = s, this.minPixelRatio = o, this.maxPixelCount = a;
        const u = c.getContext("webgl2", i);
        if (!u) throw new Error("Paper Shaders: WebGL is not supported in this browser");
        this.gl = u, this.initProgram(), this.setupPositionAttribute(), this.setupUniforms(), this.setUniformValues(this.providedUniforms), this.setupResizeObserver(), visualViewport?.addEventListener("resize", this.handleVisualViewportChange), this.setSpeed(r), this.parentElement.setAttribute("data-paper-shader", ""), this.parentElement.paperShaderMount = this, this.ownerDocument.addEventListener("visibilitychange", this.handleDocumentVisibilityChange);
    }
}, iop = `@layer paper-shaders {
  :where([data-paper-shader]) {
    isolation: isolate;
    position: relative;

    & canvas {
      contain: strict;
      display: block;
      position: absolute;
      inset: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      corner-shape: inherit;
    }
  }
}`;

}
