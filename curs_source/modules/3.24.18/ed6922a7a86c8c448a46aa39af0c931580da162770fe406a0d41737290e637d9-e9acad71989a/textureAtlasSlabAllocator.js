import { Zu, si } from "./HVr.js";
import { en } from "./dom_2.js";
import { r5e } from "./gpuUtils.js";
import { Apn, oc } from "./map.js";
import { I6c, Kpt, sa } from "./qIc.js";
import { x } from "./tslib.es6.js";
var A6c;
export { A6c };
var __wakaru_N_g_initialized = false;
export function N_g() {
if (__wakaru_N_g_initialized) return;
__wakaru_N_g_initialized = true;
"use strict";
x(), en(), si(), oc(), r5e(), A6c = class {
    constructor(e, t, n){
        this._canvas = e, this._textureIndex = t, this._slabs = [], this._activeSlabsByDims = new Apn, this._unusedRects = [], this._openRegionsByHeight = new Map, this._openRegionsByWidth = new Map, this._allocatedGlyphs = new Set, this._nextIndex = 0, this._ctx = Kpt(this._canvas.getContext("2d", {
            willReadFrequently: !0
        })), this._slabW = Math.min(n?.slabW ?? 64 << Math.max(Math.floor(sa().devicePixelRatio) - 1, 0), this._canvas.width), this._slabH = Math.min(n?.slabH ?? this._slabW, this._canvas.height), this._slabsPerRow = Math.floor(this._canvas.width / this._slabW), this._slabsPerColumn = Math.floor(this._canvas.height / this._slabH);
    }
    allocate(e) {
        const t = e.boundingBox.right - e.boundingBox.left + 1, n = e.boundingBox.bottom - e.boundingBox.top + 1;
        if (t > this._canvas.width || n > this._canvas.height) throw new Zu("Glyph is too large for the atlas page");
        if (t > this._slabW || n > this._slabH) {
            if (this._allocatedGlyphs.size > 0) return;
            let c = this._canvas.width;
            for(; t < c / 2 && n < c / 2;)c /= 2;
            this._slabW = c, this._slabH = c, this._slabsPerRow = Math.floor(this._canvas.width / this._slabW), this._slabsPerColumn = Math.floor(this._canvas.height / this._slabH);
        }
        const i = {
            w: t,
            h: n
        };
        let r = this._activeSlabsByDims.get(i.w, i.h);
        if (r) {
            const c = Math.floor(this._slabW / r.entryW) * Math.floor(this._slabH / r.entryH);
            r.count >= c && (r = void 0);
        }
        let s, o;
        if (!r) if (t < n) {
            const c = this._openRegionsByWidth.get(t);
            if (c?.length) for(let l = c.length - 1; l >= 0; l--){
                const u = c[l];
                if (u.w >= t && u.h >= n) {
                    s = u.x, o = u.y, t < u.w && this._unusedRects.push({
                        x: u.x + t,
                        y: u.y,
                        w: u.w - t,
                        h: n
                    }), u.y += n, u.h -= n, u.h === 0 && (l === c.length - 1 ? c.pop() : this._unusedRects.splice(l, 1));
                    break;
                }
            }
        } else {
            const c = this._openRegionsByHeight.get(n);
            if (c?.length) for(let l = c.length - 1; l >= 0; l--){
                const u = c[l];
                if (u.w >= t && u.h >= n) {
                    s = u.x, o = u.y, n < u.h && this._unusedRects.push({
                        x: u.x,
                        y: u.y + n,
                        w: t,
                        h: u.h - n
                    }), u.x += t, u.w -= t, u.h === 0 && (l === c.length - 1 ? c.pop() : this._unusedRects.splice(l, 1));
                    break;
                }
            }
        }
        if (s === void 0 || o === void 0) {
            if (!r) {
                if (this._slabs.length >= this._slabsPerRow * this._slabsPerColumn) return;
                r = {
                    x: Math.floor(this._slabs.length % this._slabsPerRow) * this._slabW,
                    y: Math.floor(this._slabs.length / this._slabsPerRow) * this._slabH,
                    entryW: i.w,
                    entryH: i.h,
                    count: 0
                };
                const l = this._slabW % r.entryW, u = this._slabH % r.entryH;
                l && I6c(this._openRegionsByWidth, l, {
                    x: r.x + this._slabW - l,
                    w: l,
                    y: r.y,
                    h: this._slabH - (u ?? 0)
                }), u && I6c(this._openRegionsByHeight, u, {
                    x: r.x,
                    w: this._slabW,
                    y: r.y + this._slabH - u,
                    h: u
                }), this._slabs.push(r), this._activeSlabsByDims.set(r, i.w, i.h);
            }
            const c = Math.floor(this._slabW / r.entryW);
            s = r.x + Math.floor(r.count % c) * r.entryW, o = r.y + Math.floor(r.count / c) * r.entryH, r.count++;
        }
        this._ctx.drawImage(e.source, e.boundingBox.left, e.boundingBox.top, t, n, s, o, t, n);
        const a = {
            pageIndex: this._textureIndex,
            glyphIndex: this._nextIndex++,
            x: s,
            y: o,
            w: t,
            h: n,
            originOffsetX: e.originOffset.x,
            originOffsetY: e.originOffset.y,
            fontBoundingBoxAscent: e.fontBoundingBoxAscent,
            fontBoundingBoxDescent: e.fontBoundingBoxDescent
        };
        return this._allocatedGlyphs.add(a), a;
    }
    getUsagePreview() {
        const e = this._canvas.width, t = this._canvas.height, n = new OffscreenCanvas(e, t), i = Kpt(n.getContext("2d"));
        i.fillStyle = "#808080", i.fillRect(0, 0, e, t);
        let r = 0, s = 0, o = 0, a = 0;
        const c = 64 << Math.floor(sa().devicePixelRatio) - 1, l = c;
        for (const h of this._slabs){
            let p = 0, g = 0;
            for(let y = 0; y < h.count; y++)p + h.entryW > c && (p = 0, g += h.entryH), i.fillStyle = "#FF0000", i.fillRect(h.x + p, h.y + g, h.entryW, h.entryH), r += h.entryW * h.entryH, p += h.entryW;
            const f = Math.floor(c / h.entryW), v = Math.floor(l / h.entryH), b = h.entryW * f * h.entryH * v;
            o += c * l - b;
        }
        for (const h of this._allocatedGlyphs)s += h.w * h.h, i.fillStyle = "#4040FF", i.fillRect(h.x, h.y, h.w, h.h);
        const u = Array.from(this._openRegionsByWidth.values()).flat().concat(Array.from(this._openRegionsByHeight.values()).flat());
        for (const h of u)i.fillStyle = "#FF000088", i.fillRect(h.x, h.y, h.w, h.h), a += h.w * h.h;
        return i.globalAlpha = .5, i.drawImage(this._canvas, 0, 0), i.globalAlpha = 1, n.convertToBlob();
    }
    getStats() {
        const e = this._canvas.width, t = this._canvas.height;
        let n = 0, i = 0, r = 0, s = 0, o = 0;
        const a = e * t, c = 64 << Math.floor(sa().devicePixelRatio) - 1, l = c;
        for (const g of this._slabs){
            let f = 0, v = 0;
            for(let E = 0; E < g.count; E++)f + g.entryW > c && (f = 0, v += g.entryH), n += g.entryW * g.entryH, f += g.entryW;
            const b = Math.floor(c / g.entryW), y = Math.floor(l / g.entryH), T = g.entryW * b * g.entryH * y;
            r += c * l - T;
        }
        for (const g of this._allocatedGlyphs)i += g.w * g.h;
        const u = Array.from(this._openRegionsByWidth.values()).flat().concat(Array.from(this._openRegionsByHeight.values()).flat());
        for (const g of u)o += g.w * g.h;
        const h = r - o;
        s = n - (i - h);
        const p = i / (i + s + o);
        return [
            `page[${this._textureIndex}]:`,
            `     Total: ${a}px (${e}x${t})`,
            `      Used: ${i}px (${(i / a * 100).toFixed(2)}%)`,
            `    Wasted: ${s}px (${(s / a * 100).toFixed(2)}%)`,
            `Restricted: ${o}px (${(o / a * 100).toFixed(2)}%) (hard to allocate)`,
            `Efficiency: ${p === 1 ? "100" : (p * 100).toFixed(2)}%`,
            `     Slabs: ${this._slabs.length} of ${Math.floor(this._canvas.width / c) * Math.floor(this._canvas.height / l)}`
        ].join(`
`);
    }
};

}
