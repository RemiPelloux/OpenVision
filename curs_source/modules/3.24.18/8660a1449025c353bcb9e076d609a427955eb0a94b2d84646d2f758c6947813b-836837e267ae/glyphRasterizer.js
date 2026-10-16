import { Di, Qe, _r, st } from "./Iwo.js";
import { SM } from "./decorators.js";
import { Obt, S7 } from "./encodedTokenAttributes.js";
import { Cyt } from "./gpuUtils.js";
import { Q$e, Z$e } from "./stringBuilder.js";
import { E } from "./tslib.es6.js";
import { Re } from "./userDataProfile.js";
import { Nfn, sl } from "./ze.js";
var O$d, Asi;
export { Asi, O$d };
var __wakaru_F$d_initialized = false;
export function F$d() {
if (__wakaru_F$d_initialized) return;
__wakaru_F$d_initialized = true;
"use strict";
E(), SM(), Qe(), Di(), Q$e(), Obt(), Cyt(), O$d = 0, Asi = class extends st {
    constructor(t, e, n, i){
        super(), this.fontSize = t, this.fontFamily = e, this.devicePixelRatio = n, this._decorationStyleCache = i, this.id = O$d++, this._workGlyph = {
            source: null,
            boundingBox: {
                left: 0,
                bottom: 0,
                right: 0,
                top: 0
            },
            originOffset: {
                x: 0,
                y: 0
            },
            fontBoundingBoxAscent: 0,
            fontBoundingBoxDescent: 0
        }, this._workGlyphConfig = {
            chars: void 0,
            tokenMetadata: 0,
            decorationStyleSetId: 0
        }, this._antiAliasing = _r ? "greyscale" : "subpixel";
        const r = Math.ceil(this.fontSize * n);
        this._canvas = new OffscreenCanvas(r * 3, r * 3), this._ctx = Nfn(this._canvas.getContext("2d", {
            willReadFrequently: !0,
            alpha: this._antiAliasing === "greyscale"
        })), this._ctx.textBaseline = "top", this._ctx.fillStyle = "#FFFFFF", this._ctx.font = `${r}px ${this.fontFamily}`, this._textMetrics = this._ctx.measureText("A");
    }
    get cacheKey() {
        return `${this.fontFamily}_${this.fontSize}px`;
    }
    rasterizeGlyph(t, e, n, i) {
        return t === "" ? {
            source: this._canvas,
            boundingBox: {
                top: 0,
                left: 0,
                bottom: -1,
                right: -1
            },
            originOffset: {
                x: 0,
                y: 0
            },
            fontBoundingBoxAscent: 0,
            fontBoundingBoxDescent: 0
        } : this._workGlyphConfig.chars === t && this._workGlyphConfig.tokenMetadata === e && this._workGlyphConfig.decorationStyleSetId === n ? this._workGlyph : (this._workGlyphConfig.chars = t, this._workGlyphConfig.tokenMetadata = e, this._workGlyphConfig.decorationStyleSetId = n, this._rasterizeGlyph(t, e, n, i));
    }
    _rasterizeGlyph(t, e, n, i) {
        const r = Math.ceil(this.fontSize * this.devicePixelRatio), s = r * 3;
        this._canvas.width !== s && (this._canvas.width = s, this._canvas.height = s), this._ctx.save();
        const o = (e & 15) / 10, a = S7.getBackground(e), l = i[a], c = this._decorationStyleCache.getStyleSet(n);
        this._antiAliasing === "subpixel" ? (this._ctx.fillStyle = l, this._ctx.fillRect(0, 0, this._canvas.width, this._canvas.height)) : this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
        const u = new Z$e(200), d = S7.getFontStyle(e);
        d & 1 && u.appendString("italic "), c?.bold !== void 0 ? c.bold && u.appendString("bold ") : d & 2 && u.appendString("bold "), u.appendString(`${r}px ${this.fontFamily}`), this._ctx.font = u.build();
        const h = r, p = r;
        c?.color !== void 0 ? this._ctx.fillStyle = `#${c.color.toString(16).padStart(8, "0")}` : this._ctx.fillStyle = i[S7.getForeground(e)], this._ctx.textBaseline = "top", c?.opacity !== void 0 && (this._ctx.globalAlpha = c.opacity), this._ctx.fillText(t, h + o, p), this._ctx.restore();
        const g = this._ctx.getImageData(0, 0, this._canvas.width, this._canvas.height);
        if (this._antiAliasing === "subpixel") {
            const f = parseInt(l.substring(1, 3), 16), _ = parseInt(l.substring(3, 5), 16), b = parseInt(l.substring(5, 7), 16);
            this._clearColor(g, f, _, b), this._ctx.putImageData(g, 0, 0);
        }
        return this._findGlyphBoundingBox(g, this._workGlyph.boundingBox), this._workGlyph.source = this._canvas, this._workGlyph.originOffset.x = this._workGlyph.boundingBox.left - h, this._workGlyph.originOffset.y = this._workGlyph.boundingBox.top - p, this._workGlyph.fontBoundingBoxAscent = this._textMetrics.fontBoundingBoxAscent, this._workGlyph.fontBoundingBoxDescent = this._textMetrics.fontBoundingBoxDescent, this._workGlyph;
    }
    _clearColor(t, e, n, i) {
        for(let r = 0; r < t.data.length; r += 4)t.data[r] === e && t.data[r + 1] === n && t.data[r + 2] === i && (t.data[r + 3] = 0);
    }
    _findGlyphBoundingBox(t, e) {
        const n = this._canvas.height, i = this._canvas.width;
        let r = !1;
        for(let s = 0; s < n; s++){
            for(let o = 0; o < i; o++){
                const a = s * i * 4 + o * 4 + 3;
                if (t.data[a] !== 0) {
                    e.top = s, r = !0;
                    break;
                }
            }
            if (r) break;
        }
        e.left = 0, r = !1;
        for(let s = 0; s < i; s++){
            for(let o = 0; o < n; o++){
                const a = o * i * 4 + s * 4 + 3;
                if (t.data[a] !== 0) {
                    e.left = s, r = !0;
                    break;
                }
            }
            if (r) break;
        }
        e.right = i, r = !1;
        for(let s = i - 1; s >= e.left; s--){
            for(let o = 0; o < n; o++){
                const a = o * i * 4 + s * 4 + 3;
                if (t.data[a] !== 0) {
                    e.right = s, r = !0;
                    break;
                }
            }
            if (r) break;
        }
        e.bottom = e.top, r = !1;
        for(let s = n - 1; s >= 0; s--){
            for(let o = 0; o < i; o++){
                const a = s * i * 4 + o * 4 + 3;
                if (t.data[a] !== 0) {
                    e.bottom = s, r = !0;
                    break;
                }
            }
            if (r) break;
        }
    }
    getTextMetrics(t) {
        return this._ctx.measureText(t);
    }
}, Re([
    sl
], Asi.prototype, "cacheKey", null);

}
