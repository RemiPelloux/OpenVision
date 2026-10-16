import { Zu, si } from "./HVr.js";
import { r5e } from "./gpuUtils.js";
import { Kpt } from "./qIc.js";
import { x } from "./tslib.es6.js";
var x6c;
export { x6c };
var __wakaru_L_g_initialized = false;
export function L_g() {
if (__wakaru_L_g_initialized) return;
__wakaru_L_g_initialized = true;
"use strict";
x(), si(), r5e(), x6c = class {
    constructor(e, t){
        this._canvas = e, this._textureIndex = t, this._currentRow = {
            x: 0,
            y: 0,
            h: 0
        }, this._allocatedGlyphs = new Set, this._nextIndex = 0, this._ctx = Kpt(this._canvas.getContext("2d", {
            willReadFrequently: !0
        }));
    }
    allocate(e) {
        const t = e.boundingBox.right - e.boundingBox.left + 1, n = e.boundingBox.bottom - e.boundingBox.top + 1;
        if (t > this._canvas.width || n > this._canvas.height) throw new Zu("Glyph is too large for the atlas page");
        if (e.boundingBox.right - e.boundingBox.left + 1 > this._canvas.width - this._currentRow.x && (this._currentRow.x = 0, this._currentRow.y += this._currentRow.h, this._currentRow.h = 1), this._currentRow.y + e.boundingBox.bottom - e.boundingBox.top + 1 > this._canvas.height) return;
        this._ctx.drawImage(e.source, e.boundingBox.left, e.boundingBox.top, t, n, this._currentRow.x, this._currentRow.y, t, n);
        const i = {
            pageIndex: this._textureIndex,
            glyphIndex: this._nextIndex++,
            x: this._currentRow.x,
            y: this._currentRow.y,
            w: t,
            h: n,
            originOffsetX: e.originOffset.x,
            originOffsetY: e.originOffset.y,
            fontBoundingBoxAscent: e.fontBoundingBoxAscent,
            fontBoundingBoxDescent: e.fontBoundingBoxDescent
        };
        return this._currentRow.x += t, this._currentRow.h = Math.max(this._currentRow.h, n), this._allocatedGlyphs.add(i), i;
    }
    getUsagePreview() {
        const e = this._canvas.width, t = this._canvas.height, n = new OffscreenCanvas(e, t), i = Kpt(n.getContext("2d"));
        i.fillStyle = "#808080", i.fillRect(0, 0, e, t);
        const r = new Map, s = new Map;
        for (const o of this._allocatedGlyphs)r.set(o.y, Math.max(r.get(o.y) ?? 0, o.h)), s.set(o.y, Math.max(s.get(o.y) ?? 0, o.x + o.w));
        for (const o of this._allocatedGlyphs)i.fillStyle = "#4040FF", i.fillRect(o.x, o.y, o.w, o.h), i.fillStyle = "#FF0000", i.fillRect(o.x, o.y + o.h, o.w, r.get(o.y) - o.h);
        for (const [o, a] of s.entries())o !== this._currentRow.y && (i.fillStyle = "#FF0000", i.fillRect(a, o, e - a, r.get(o)));
        return n.convertToBlob();
    }
    getStats() {
        const e = this._canvas.width, t = this._canvas.height;
        let n = 0, i = 0;
        const r = e * t, s = new Map, o = new Map;
        for (const a of this._allocatedGlyphs)s.set(a.y, Math.max(s.get(a.y) ?? 0, a.h)), o.set(a.y, Math.max(o.get(a.y) ?? 0, a.x + a.w));
        for (const a of this._allocatedGlyphs)n += a.w * a.h, i += a.w * (s.get(a.y) - a.h);
        for (const [a, c] of o.entries())a !== this._currentRow.y && (i += (e - c) * s.get(a));
        return [
            `page${this._textureIndex}:`,
            `     Total: ${r} (${e}x${t})`,
            `      Used: ${n} (${(n / r * 100).toPrecision(2)}%)`,
            `    Wasted: ${i} (${(i / r * 100).toPrecision(2)}%)`,
            `Efficiency: ${(n / (n + i) * 100).toPrecision(2)}%`
        ].join(`
`);
    }
};

}
