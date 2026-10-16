import { Ei, Gt, Nc, Pn, Qe, Vn, en, st, tt, xh } from "./Iwo.js";
import { Cw, ti } from "./charCode.js";
import { Hn } from "./dom_2.js";
import { Asi, F$d } from "./glyphRasterizer.js";
import { It, dn } from "./instantiation.js";
import { du, zXn } from "./map.js";
import { EDy, j$d } from "./taskQueue.js";
import { gWo, t_e } from "./textureAtlasPage.js";
import { Dl, Ml } from "./themeService.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { rl } from "./ze.js";
var XAe;
export { XAe };
var __wakaru_fWo_initialized = false;
export function fWo() {
if (__wakaru_fWo_initialized) return;
__wakaru_fWo_initialized = true;
"use strict";
E(), Hn(), Cw(), Ei(), Gt(), Qe(), du(), It(), Dl(), F$d(), EDy(), gWo(), XAe = class extends st {
    constructor(t, e, n, i, r){
        super(), this._maxTextureSize = t, this._decorationStyleCache = n, this._themeService = i, this._instantiationService = r, this._warmUpTask = this._register(new Vn), this._warmedUpRasterizers = new Set, this._pages = [], this._glyphPageIndex = new zXn, this._onDidDeleteGlyphs = this._register(new tt), this.onDidDeleteGlyphs = this._onDidDeleteGlyphs.event, this._allocatorType = e?.allocatorType ?? "slab", this._register(en.runAndSubscribe(this._themeService.onDidColorThemeChange, ()=>{
            this._colorMap && this.clear(), this._colorMap = this._themeService.getColorTheme().tokenColorMap;
        }));
        const s = Math.max(1, Math.floor(rl().devicePixelRatio));
        this.pageSize = Math.min(1024 * s, this._maxTextureSize), this._initFirstPage(), this._register(Pn(()=>Nc(this._pages)));
    }
    get pages() {
        return this._pages;
    }
    _initFirstPage() {
        const t = this._instantiationService.createInstance(t_e, 0, this.pageSize, this._allocatorType);
        this._pages.push(t);
        const e = new Asi(1, "", 1, this._decorationStyleCache);
        t.getGlyph(e, "", 0, 0), e.dispose();
    }
    clear() {
        for (const t of this._pages)t.dispose();
        this._pages.length = 0, this._glyphPageIndex.clear(), this._warmedUpRasterizers.clear(), this._warmUpTask.clear(), this._initFirstPage(), this._onDidDeleteGlyphs.fire();
    }
    getGlyph(t, e, n, i, r) {
        return n &= -2048, n |= Math.floor(r % 1 * 10), this._warmedUpRasterizers.has(t.id) || (this._warmUpAtlas(t), this._warmedUpRasterizers.add(t.id)), this._tryGetGlyph(this._glyphPageIndex.get(e, n, i, t.cacheKey) ?? 0, t, e, n, i);
    }
    _tryGetGlyph(t, e, n, i, r) {
        return this._glyphPageIndex.set(t, n, i, r, e.cacheKey), this._pages[t].getGlyph(e, n, i, r) ?? (t + 1 < this._pages.length ? this._tryGetGlyph(t + 1, e, n, i, r) : void 0) ?? this._getGlyphFromNewPage(e, n, i, r);
    }
    _getGlyphFromNewPage(t, e, n, i) {
        if (this._pages.length >= XAe.maximumPageCount) throw new Error(`Attempt to create a texture atlas page past the limit ${XAe.maximumPageCount}`);
        return this._pages.push(this._instantiationService.createInstance(t_e, this._pages.length, this.pageSize, this._allocatorType)), this._glyphPageIndex.set(this._pages.length - 1, e, n, i, t.cacheKey), this._pages[this._pages.length - 1].getGlyph(t, e, n, i);
    }
    getUsagePreview() {
        return Promise.all(this._pages.map((t)=>t.getUsagePreview()));
    }
    getStats() {
        return this._pages.map((t)=>t.getStats());
    }
    _warmUpAtlas(t) {
        const e = this._colorMap;
        if (!e) throw new xh("Cannot warm atlas without color map");
        this._warmUpTask.value?.clear();
        const n = this._warmUpTask.value = new j$d;
        for(let i = ti.A; i <= ti.Z; i++)for (const r of e.keys())n.enqueue(()=>{
            for(let s = 0; s < 1; s += .1)this.getGlyph(t, String.fromCharCode(i), r << 15 & 16744448, 0, s);
        });
        for(let i = ti.a; i <= ti.z; i++)for (const r of e.keys())n.enqueue(()=>{
            for(let s = 0; s < 1; s += .1)this.getGlyph(t, String.fromCharCode(i), r << 15 & 16744448, 0, s);
        });
        for(let i = ti.ExclamationMark; i <= ti.Tilde; i++)for (const r of e.keys())n.enqueue(()=>{
            for(let s = 0; s < 1; s += .1)this.getGlyph(t, String.fromCharCode(i), r << 15 & 16744448, 0, s);
        });
    }
}, XAe.maximumPageCount = 16, XAe = Re([
    F(3, Ml),
    F(4, dn)
], XAe);

}
