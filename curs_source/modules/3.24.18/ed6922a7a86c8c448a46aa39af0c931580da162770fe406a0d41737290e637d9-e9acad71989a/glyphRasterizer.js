import { Ai, Se, jn, we } from "./HVr.js";
import { ie } from "./actions_2.js";
import { sw } from "./decorators.js";
import { EBe, s2 } from "./encodedTokenAttributes.js";
import { r5e } from "./gpuUtils.js";
import { Kpt, xo } from "./qIc.js";
import { Dge, lwe } from "./stringBuilder.js";
import { x } from "./tslib.es6.js";
var w6c, rFt;
export { rFt, w6c };
var __wakaru_lts_initialized = false;
export function lts() {
if (__wakaru_lts_initialized) return;
__wakaru_lts_initialized = true;
"use strict";
x(), sw(), Se(), jn(), lwe(), EBe(), r5e(), w6c = 0, rFt = class extends we {
    constructor(e, t, n, i){
        super(), this.fontSize = e, this.fontFamily = t, this.devicePixelRatio = n, this._decorationStyleCache = i, this.id = w6c++, this._workGlyph = {
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
        }, this._antiAliasing = Ai ? "greyscale" : "subpixel";
        const r = Math.ceil(this.fontSize * n);
        this._canvas = new OffscreenCanvas(r * 3, r * 3), this._ctx = Kpt(this._canvas.getContext("2d", {
            willReadFrequently: !0,
            alpha: this._antiAliasing === "greyscale"
        })), this._ctx.textBaseline = "top", this._ctx.fillStyle = "#FFFFFF", this._ctx.font = `${r}px ${this.fontFamily}`, this._textMetrics = this._ctx.measureText("A");
    }
    get cacheKey() {
        return `${this.fontFamily}_${this.fontSize}px`;
    }
    rasterizeGlyph(e, t, n, i) {
        return e === "" ? {
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
        } : this._workGlyphConfig.chars === e && this._workGlyphConfig.tokenMetadata === t && this._workGlyphConfig.decorationStyleSetId === n ? this._workGlyph : (this._workGlyphConfig.chars = e, this._workGlyphConfig.tokenMetadata = t, this._workGlyphConfig.decorationStyleSetId = n, this._rasterizeGlyph(e, t, n, i));
    }
    _rasterizeGlyph(e, t, n, i) {
        const r = Math.ceil(this.fontSize * this.devicePixelRatio), s = r * 3;
        this._canvas.width !== s && (this._canvas.width = s, this._canvas.height = s), this._ctx.save();
        const o = (t & 15) / 10, a = s2.getBackground(t), c = i[a], l = this._decorationStyleCache.getStyleSet(n);
        this._antiAliasing === "subpixel" ? (this._ctx.fillStyle = c, this._ctx.fillRect(0, 0, this._canvas.width, this._canvas.height)) : this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
        const u = new Dge(200), h = s2.getFontStyle(t);
        h & 1 && u.appendString("italic "), l?.bold !== void 0 ? l.bold && u.appendString("bold ") : h & 2 && u.appendString("bold "), u.appendString(`${r}px ${this.fontFamily}`), this._ctx.font = u.build();
        const p = r, g = r;
        l?.color !== void 0 ? this._ctx.fillStyle = `#${l.color.toString(16).padStart(8, "0")}` : this._ctx.fillStyle = i[s2.getForeground(t)], this._ctx.textBaseline = "top", l?.opacity !== void 0 && (this._ctx.globalAlpha = l.opacity), this._ctx.fillText(e, p + o, g), this._ctx.restore();
        const f = this._ctx.getImageData(0, 0, this._canvas.width, this._canvas.height);
        if (this._antiAliasing === "subpixel") {
            const v = parseInt(c.substring(1, 3), 16), b = parseInt(c.substring(3, 5), 16), y = parseInt(c.substring(5, 7), 16);
            this._clearColor(f, v, b, y), this._ctx.putImageData(f, 0, 0);
        }
        return this._findGlyphBoundingBox(f, this._workGlyph.boundingBox), this._workGlyph.source = this._canvas, this._workGlyph.originOffset.x = this._workGlyph.boundingBox.left - p, this._workGlyph.originOffset.y = this._workGlyph.boundingBox.top - g, this._workGlyph.fontBoundingBoxAscent = this._textMetrics.fontBoundingBoxAscent, this._workGlyph.fontBoundingBoxDescent = this._textMetrics.fontBoundingBoxDescent, this._workGlyph;
    }
    _clearColor(e, t, n, i) {
        for(let r = 0; r < e.data.length; r += 4)e.data[r] === t && e.data[r + 1] === n && e.data[r + 2] === i && (e.data[r + 3] = 0);
    }
    _findGlyphBoundingBox(e, t) {
        const n = this._canvas.height, i = this._canvas.width;
        let r = !1;
        for(let s = 0; s < n; s++){
            for(let o = 0; o < i; o++){
                const a = s * i * 4 + o * 4 + 3;
                if (e.data[a] !== 0) {
                    t.top = s, r = !0;
                    break;
                }
            }
            if (r) break;
        }
        t.left = 0, r = !1;
        for(let s = 0; s < i; s++){
            for(let o = 0; o < n; o++){
                const a = o * i * 4 + s * 4 + 3;
                if (e.data[a] !== 0) {
                    t.left = s, r = !0;
                    break;
                }
            }
            if (r) break;
        }
        t.right = i, r = !1;
        for(let s = i - 1; s >= t.left; s--){
            for(let o = 0; o < n; o++){
                const a = o * i * 4 + s * 4 + 3;
                if (e.data[a] !== 0) {
                    t.right = s, r = !0;
                    break;
                }
            }
            if (r) break;
        }
        t.bottom = t.top, r = !1;
        for(let s = n - 1; s >= 0; s--){
            for(let o = 0; o < i; o++){
                const a = s * i * 4 + o * 4 + 3;
                if (e.data[a] !== 0) {
                    t.bottom = s, r = !0;
                    break;
                }
            }
            if (r) break;
        }
    }
    getTextMetrics(e) {
        return this._ctx.measureText(e);
    }
}, ie([
    xo
], rFt.prototype, "cacheKey", null);

}
