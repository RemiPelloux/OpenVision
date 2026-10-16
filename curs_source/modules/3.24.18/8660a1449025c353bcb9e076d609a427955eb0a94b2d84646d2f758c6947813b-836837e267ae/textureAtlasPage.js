import { Pn, Qe, st } from "./Iwo.js";
import { Ji, Li, sg } from "./log.js";
import { du, zXn } from "./map.js";
import { $$d, IDy } from "./textureAtlasShelfAllocator.js";
import { W$d, xDy } from "./textureAtlasSlabAllocator.js";
import { Dl, Ml } from "./themeService.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var t_e;
export { t_e };
var __wakaru_gWo_initialized = false;
export function gWo() {
if (__wakaru_gWo_initialized) return;
__wakaru_gWo_initialized = true;
"use strict";
E(), Qe(), du(), Ji(), Dl(), IDy(), xDy(), t_e = class extends st {
    constructor(t, e, n, i, r){
        switch(super(), this._logService = i, this._version = 0, this._usedArea = {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0
        }, this._glyphMap = new zXn, this._glyphInOrderSet = new Set, this._canvas = new OffscreenCanvas(e, e), this._colorMap = r.getColorTheme().tokenColorMap, n){
            case "shelf":
                this._allocator = new $$d(this._canvas, t);
                break;
            case "slab":
                this._allocator = new W$d(this._canvas, t);
                break;
            default:
                this._allocator = n(this._canvas, t);
                break;
        }
        this._register(Pn(()=>{
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
    getGlyph(t, e, n, i) {
        return this._glyphMap.get(e, n, i, t.cacheKey) ?? this._createGlyph(t, e, n, i);
    }
    _createGlyph(t, e, n, i) {
        if (this._glyphInOrderSet.size >= t_e.maximumGlyphCount) return;
        const r = t.rasterizeGlyph(e, n, i, this._colorMap), s = this._allocator.allocate(r);
        if (s !== void 0) return this._glyphMap.set(s, e, n, i, t.cacheKey), this._glyphInOrderSet.add(s), this._version++, this._usedArea.right = Math.max(this._usedArea.right, s.x + s.w - 1), this._usedArea.bottom = Math.max(this._usedArea.bottom, s.y + s.h - 1), this._logService.getLevel() === sg.Trace && this._logService.trace("New glyph", {
            chars: e,
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
}, t_e.maximumGlyphCount = 5e3, t_e = Re([
    F(3, Li),
    F(4, Ml)
], t_e);

}
