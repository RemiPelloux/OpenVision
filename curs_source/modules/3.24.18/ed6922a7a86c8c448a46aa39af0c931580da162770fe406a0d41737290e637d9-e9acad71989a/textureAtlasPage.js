import { Se, rn, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { Dh, Qn, Wn } from "./log.js";
import { Apn, oc } from "./map.js";
import { L_g, x6c } from "./textureAtlasShelfAllocator.js";
import { A6c, N_g } from "./textureAtlasSlabAllocator.js";
import { $r, as } from "./themeService.js";
import { x } from "./tslib.es6.js";
var vre;
export { vre };
var __wakaru_dts_initialized = false;
export function dts() {
if (__wakaru_dts_initialized) return;
__wakaru_dts_initialized = true;
"use strict";
x(), Se(), oc(), Qn(), as(), L_g(), N_g(), vre = class extends we {
    constructor(e, t, n, i, r){
        switch(super(), this._logService = i, this._version = 0, this._usedArea = {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0
        }, this._glyphMap = new Apn, this._glyphInOrderSet = new Set, this._canvas = new OffscreenCanvas(t, t), this._colorMap = r.getColorTheme().tokenColorMap, n){
            case "shelf":
                this._allocator = new x6c(this._canvas, e);
                break;
            case "slab":
                this._allocator = new A6c(this._canvas, e);
                break;
            default:
                this._allocator = n(this._canvas, e);
                break;
        }
        this._register(rn(()=>{
            this._canvas.width = 1, this._canvas.height = 1;
        }));
    }
    get version() {
        return this._version;
    }
    get usedArea() {
        return this._usedArea;
    }
    get source() {
        return this._canvas;
    }
    get glyphs() {
        return this._glyphInOrderSet.values();
    }
    getGlyph(e, t, n, i) {
        return this._glyphMap.get(t, n, i, e.cacheKey) ?? this._createGlyph(e, t, n, i);
    }
    _createGlyph(e, t, n, i) {
        if (this._glyphInOrderSet.size >= vre.maximumGlyphCount) return;
        const r = e.rasterizeGlyph(t, n, i, this._colorMap), s = this._allocator.allocate(r);
        if (s !== void 0) return this._glyphMap.set(s, t, n, i, e.cacheKey), this._glyphInOrderSet.add(s), this._version++, this._usedArea.right = Math.max(this._usedArea.right, s.x + s.w - 1), this._usedArea.bottom = Math.max(this._usedArea.bottom, s.y + s.h - 1), this._logService.getLevel() === Dh.Trace && this._logService.trace("New glyph", {
            chars: t,
            tokenMetadata: n,
            decorationStyleSetId: i,
            rasterizedGlyph: r,
            glyph: s
        }), s;
    }
    getUsagePreview() {
        return this._allocator.getUsagePreview();
    }
    getStats() {
        return this._allocator.getStats();
    }
}, vre.maximumGlyphCount = 5e3, vre = ie([
    C(3, Wn),
    C(4, $r)
], vre);

}
