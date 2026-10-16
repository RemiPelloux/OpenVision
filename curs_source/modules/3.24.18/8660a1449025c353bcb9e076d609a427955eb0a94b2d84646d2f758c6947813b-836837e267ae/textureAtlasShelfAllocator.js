import { Ei, xh } from "./Iwo.js";
import { Cyt } from "./gpuUtils.js";
import { E } from "./tslib.es6.js";
import { Nfn } from "./ze.js";
var $$d;
export { $$d };
var __wakaru_IDy_initialized = false;
export function IDy() {
if (__wakaru_IDy_initialized) return;
__wakaru_IDy_initialized = true;
"use strict";
E(), Ei(), Cyt(), $$d = class {
    constructor(t, e){
        this._canvas = t, this._textureIndex = e, this._currentRow = {
            x: 0,
            y: 0,
            h: 0
        }, this._allocatedGlyphs = new Set, this._nextIndex = 0, this._ctx = Nfn(this._canvas.getContext("2d", {
            willReadFrequently: !0
        }));
    }
    allocate(t) {
        const e = t.boundingBox.right - t.boundingBox.left + 1, n = t.boundingBox.bottom - t.boundingBox.top + 1;
        if (e > this._canvas.width || n > this._canvas.height) throw new xh("Glyph is too large for the atlas page");
        if (t.boundingBox.right - t.boundingBox.left + 1 > this._canvas.width - this._currentRow.x && (this._currentRow.x = 0, this._currentRow.y += this._currentRow.h, this._currentRow.h = 1), this._currentRow.y + t.boundingBox.bottom - t.boundingBox.top + 1 > this._canvas.height) return;
        this._ctx.drawImage(t.source, t.boundingBox.left, t.boundingBox.top, e, n, this._currentRow.x, this._currentRow.y, e, n);
        const i = {
            pageIndex: this._textureIndex,
            glyphIndex: this._nextIndex++,
            x: this._currentRow.x,
            y: this._currentRow.y,
            w: e,
            h: n,
            originOffsetX: t.originOffset.x,
            originOffsetY: t.originOffset.y,
            fontBoundingBoxAscent: t.fontBoundingBoxAscent,
            fontBoundingBoxDescent: t.fontBoundingBoxDescent
        };
        return this._currentRow.x += e, this._currentRow.h = Math.max(this._currentRow.h, n), this._allocatedGlyphs.add(i), i;
    }
    getUsagePreview() {
        const t = this._canvas.width, e = this._canvas.height, n = new OffscreenCanvas(t, e), i = Nfn(n.getContext("2d"));
        i.fillStyle = "#808080", i.fillRect(0, 0, t, e);
        const r = new Map, s = new Map;
        for (const o of this._allocatedGlyphs)r.set(o.y, Math.max(r.get(o.y) ?? 0, o.h)), s.set(o.y, Math.max(s.get(o.y) ?? 0, o.x + o.w));
        for (const o of this._allocatedGlyphs)i.fillStyle = "#4040FF", i.fillRect(o.x, o.y, o.w, o.h), i.fillStyle = "#FF0000", i.fillRect(o.x, o.y + o.h, o.w, r.get(o.y) - o.h);
        for (const [o, a] of s.entries())o !== this._currentRow.y && (i.fillStyle = "#FF0000", i.fillRect(a, o, t - a, r.get(o)));
        return n.convertToBlob();
    }
    getStats() {
        const t = this._canvas.width, e = this._canvas.height;
        let n = 0, i = 0;
        const r = t * e, s = new Map, o = new Map;
        for (const a of this._allocatedGlyphs)s.set(a.y, Math.max(s.get(a.y) ?? 0, a.h)), o.set(a.y, Math.max(o.get(a.y) ?? 0, a.x + a.w));
        for (const a of this._allocatedGlyphs)n += a.w * a.h, i += a.w * (s.get(a.y) - a.h);
        for (const [a, l] of o.entries())a !== this._currentRow.y && (i += (t - l) * s.get(a));
        return [
            `page${this._textureIndex}:`,
            `     Total: ${r} (${t}x${e})`,
            `      Used: ${n} (${(n / r * 100).toPrecision(2)}%)`,
            `    Wasted: ${i} (${(i / r * 100).toPrecision(2)}%)`,
            `Efficiency: ${(n / (n + i) * 100).toPrecision(2)}%`
        ].join(`
`);
    }
};

}
