import { Ei, xh } from "./Iwo.js";
import { Hn } from "./dom_2.js";
import { Cyt } from "./gpuUtils.js";
import { du, zXn } from "./map.js";
import { E } from "./tslib.es6.js";
import { H$d, Nfn, rl } from "./ze.js";
var W$d;
export { W$d };
var __wakaru_xDy_initialized = false;
export function xDy() {
if (__wakaru_xDy_initialized) return;
__wakaru_xDy_initialized = true;
"use strict";
E(), Hn(), Ei(), du(), Cyt(), W$d = class {
    constructor(t, e, n){
        this._canvas = t, this._textureIndex = e, this._slabs = [], this._activeSlabsByDims = new zXn, this._unusedRects = [], this._openRegionsByHeight = new Map, this._openRegionsByWidth = new Map, this._allocatedGlyphs = new Set, this._nextIndex = 0, this._ctx = Nfn(this._canvas.getContext("2d", {
            willReadFrequently: !0
        })), this._slabW = Math.min(n?.slabW ?? 64 << Math.max(Math.floor(rl().devicePixelRatio) - 1, 0), this._canvas.width), this._slabH = Math.min(n?.slabH ?? this._slabW, this._canvas.height), this._slabsPerRow = Math.floor(this._canvas.width / this._slabW), this._slabsPerColumn = Math.floor(this._canvas.height / this._slabH);
    }
    allocate(t) {
        const e = t.boundingBox.right - t.boundingBox.left + 1, n = t.boundingBox.bottom - t.boundingBox.top + 1;
        if (e > this._canvas.width || n > this._canvas.height) throw new xh("Glyph is too large for the atlas page");
        if (e > this._slabW || n > this._slabH) {
            if (this._allocatedGlyphs.size > 0) return;
            let l = this._canvas.width;
            for(; e < l / 2 && n < l / 2;)l /= 2;
            this._slabW = l, this._slabH = l, this._slabsPerRow = Math.floor(this._canvas.width / this._slabW), this._slabsPerColumn = Math.floor(this._canvas.height / this._slabH);
        }
        const i = {
            w: e,
            h: n
        };
        let r = this._activeSlabsByDims.get(i.w, i.h);
        if (r) {
            const l = Math.floor(this._slabW / r.entryW) * Math.floor(this._slabH / r.entryH);
            r.count >= l && (r = void 0);
        }
        let s, o;
        if (!r) if (e < n) {
            const l = this._openRegionsByWidth.get(e);
            if (l?.length) for(let c = l.length - 1; c >= 0; c--){
                const u = l[c];
                if (u.w >= e && u.h >= n) {
                    s = u.x, o = u.y, e < u.w && this._unusedRects.push({
                        x: u.x + e,
                        y: u.y,
                        w: u.w - e,
                        h: n
                    }), u.y += n, u.h -= n, u.h === 0 && (c === l.length - 1 ? l.pop() : this._unusedRects.splice(c, 1));
                    break;
                }
            }
        } else {
            const l = this._openRegionsByHeight.get(n);
            if (l?.length) for(let c = l.length - 1; c >= 0; c--){
                const u = l[c];
                if (u.w >= e && u.h >= n) {
                    s = u.x, o = u.y, n < u.h && this._unusedRects.push({
                        x: u.x,
                        y: u.y + n,
                        w: e,
                        h: u.h - n
                    }), u.x += e, u.w -= e, u.h === 0 && (c === l.length - 1 ? l.pop() : this._unusedRects.splice(c, 1));
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
                const c = this._slabW % r.entryW, u = this._slabH % r.entryH;
                c && H$d(this._openRegionsByWidth, c, {
                    x: r.x + this._slabW - c,
                    w: c,
                    y: r.y,
                    h: this._slabH - (u ?? 0)
                }), u && H$d(this._openRegionsByHeight, u, {
                    x: r.x,
                    w: this._slabW,
                    y: r.y + this._slabH - u,
                    h: u
                }), this._slabs.push(r), this._activeSlabsByDims.set(r, i.w, i.h);
            }
            const l = Math.floor(this._slabW / r.entryW);
            s = r.x + Math.floor(r.count % l) * r.entryW, o = r.y + Math.floor(r.count / l) * r.entryH, r.count++;
        }
        this._ctx.drawImage(t.source, t.boundingBox.left, t.boundingBox.top, e, n, s, o, e, n);
        const a = {
            pageIndex: this._textureIndex,
            glyphIndex: this._nextIndex++,
            x: s,
            y: o,
            w: e,
            h: n,
            originOffsetX: t.originOffset.x,
            originOffsetY: t.originOffset.y,
            fontBoundingBoxAscent: t.fontBoundingBoxAscent,
            fontBoundingBoxDescent: t.fontBoundingBoxDescent
        };
        return this._allocatedGlyphs.add(a), a;
    }
    getUsagePreview() {
        const t = this._canvas.width, e = this._canvas.height, n = new OffscreenCanvas(t, e), i = Nfn(n.getContext("2d"));
        i.fillStyle = "#808080", i.fillRect(0, 0, t, e);
        let r = 0, s = 0, o = 0, a = 0;
        const l = 64 << Math.floor(rl().devicePixelRatio) - 1, c = l;
        for (const d of this._slabs){
            let h = 0, p = 0;
            for(let b = 0; b < d.count; b++)h + d.entryW > l && (h = 0, p += d.entryH), i.fillStyle = "#FF0000", i.fillRect(d.x + h, d.y + p, d.entryW, d.entryH), r += d.entryW * d.entryH, h += d.entryW;
            const g = Math.floor(l / d.entryW), f = Math.floor(c / d.entryH), _ = d.entryW * g * d.entryH * f;
            o += l * c - _;
        }
        for (const d of this._allocatedGlyphs)s += d.w * d.h, i.fillStyle = "#4040FF", i.fillRect(d.x, d.y, d.w, d.h);
        const u = Array.from(this._openRegionsByWidth.values()).flat().concat(Array.from(this._openRegionsByHeight.values()).flat());
        for (const d of u)i.fillStyle = "#FF000088", i.fillRect(d.x, d.y, d.w, d.h), a += d.w * d.h;
        return i.globalAlpha = .5, i.drawImage(this._canvas, 0, 0), i.globalAlpha = 1, n.convertToBlob();
    }
    getStats() {
        const t = this._canvas.width, e = this._canvas.height;
        let n = 0, i = 0, r = 0, s = 0, o = 0;
        const a = t * e, l = 64 << Math.floor(rl().devicePixelRatio) - 1, c = l;
        for (const p of this._slabs){
            let g = 0, f = 0;
            for(let S = 0; S < p.count; S++)g + p.entryW > l && (g = 0, f += p.entryH), n += p.entryW * p.entryH, g += p.entryW;
            const _ = Math.floor(l / p.entryW), b = Math.floor(c / p.entryH), y = p.entryW * _ * p.entryH * b;
            r += l * c - y;
        }
        for (const p of this._allocatedGlyphs)i += p.w * p.h;
        const u = Array.from(this._openRegionsByWidth.values()).flat().concat(Array.from(this._openRegionsByHeight.values()).flat());
        for (const p of u)o += p.w * p.h;
        const d = r - o;
        s = n - (i - d);
        const h = i / (i + s + o);
        return [
            `page[${this._textureIndex}]:`,
            `     Total: ${a}px (${t}x${e})`,
            `      Used: ${i}px (${(i / a * 100).toFixed(2)}%)`,
            `    Wasted: ${s}px (${(s / a * 100).toFixed(2)}%)`,
            `Restricted: ${o}px (${(o / a * 100).toFixed(2)}%) (hard to allocate)`,
            `Efficiency: ${h === 1 ? "100" : (h * 100).toFixed(2)}%`,
            `     Slabs: ${this._slabs.length} of ${Math.floor(this._canvas.width / l) * Math.floor(this._canvas.height / c)}`
        ].join(`
`);
    }
};

}
