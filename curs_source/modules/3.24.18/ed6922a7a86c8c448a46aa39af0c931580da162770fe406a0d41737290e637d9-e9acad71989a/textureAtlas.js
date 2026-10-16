import { Ct, Lo, Se, Zu, bt, cn, rn, si, ve, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { En, qy } from "./charCode.js";
import { en } from "./dom_2.js";
import { lts, rFt } from "./glyphRasterizer.js";
import { Ze, _t } from "./instantiation.js";
import { Apn, oc } from "./map.js";
import { sa } from "./qIc.js";
import { E6c, P_g } from "./taskQueue.js";
import { dts, vre } from "./textureAtlasPage.js";
import { $r, as } from "./themeService.js";
import { x } from "./tslib.es6.js";
var qge;
export { qge };
var __wakaru_hts_initialized = false;
export function hts() {
if (__wakaru_hts_initialized) return;
__wakaru_hts_initialized = true;
"use strict";
x(), en(), qy(), si(), bt(), Se(), oc(), Ze(), as(), lts(), P_g(), dts(), qge = class extends we {
    constructor(e, t, n, i, r){
        super(), this._maxTextureSize = e, this._decorationStyleCache = n, this._themeService = i, this._instantiationService = r, this._warmUpTask = this._register(new cn), this._warmedUpRasterizers = new Set, this._pages = [], this._glyphPageIndex = new Apn, this._onDidDeleteGlyphs = this._register(new ve), this.onDidDeleteGlyphs = this._onDidDeleteGlyphs.event, this._allocatorType = t?.allocatorType ?? "slab", this._register(Ct.runAndSubscribe(this._themeService.onDidColorThemeChange, ()=>{
            this._colorMap && this.clear(), this._colorMap = this._themeService.getColorTheme().tokenColorMap;
        }));
        const s = Math.max(1, Math.floor(sa().devicePixelRatio));
        this.pageSize = Math.min(1024 * s, this._maxTextureSize), this._initFirstPage(), this._register(rn(()=>Lo(this._pages)));
    }
    get pages() {
        return this._pages;
    }
    _initFirstPage() {
        const e = this._instantiationService.createInstance(vre, 0, this.pageSize, this._allocatorType);
        this._pages.push(e);
        const t = new rFt(1, "", 1, this._decorationStyleCache);
        e.getGlyph(t, "", 0, 0), t.dispose();
    }
    clear() {
        for (const e of this._pages)e.dispose();
        this._pages.length = 0, this._glyphPageIndex.clear(), this._warmedUpRasterizers.clear(), this._warmUpTask.clear(), this._initFirstPage(), this._onDidDeleteGlyphs.fire();
    }
    getGlyph(e, t, n, i, r) {
        return n &= -2048, n |= Math.floor(r % 1 * 10), this._warmedUpRasterizers.has(e.id) || (this._warmUpAtlas(e), this._warmedUpRasterizers.add(e.id)), this._tryGetGlyph(this._glyphPageIndex.get(t, n, i, e.cacheKey) ?? 0, e, t, n, i);
    }
    _tryGetGlyph(e, t, n, i, r) {
        return this._glyphPageIndex.set(e, n, i, r, t.cacheKey), this._pages[e].getGlyph(t, n, i, r) ?? (e + 1 < this._pages.length ? this._tryGetGlyph(e + 1, t, n, i, r) : void 0) ?? this._getGlyphFromNewPage(t, n, i, r);
    }
    _getGlyphFromNewPage(e, t, n, i) {
        if (this._pages.length >= qge.maximumPageCount) throw new Error(`Attempt to create a texture atlas page past the limit ${qge.maximumPageCount}`);
        return this._pages.push(this._instantiationService.createInstance(vre, this._pages.length, this.pageSize, this._allocatorType)), this._glyphPageIndex.set(this._pages.length - 1, t, n, i, e.cacheKey), this._pages[this._pages.length - 1].getGlyph(e, t, n, i);
    }
    getUsagePreview() {
        return Promise.all(this._pages.map((e)=>e.getUsagePreview()));
    }
    getStats() {
        return this._pages.map((e)=>e.getStats());
    }
    _warmUpAtlas(e) {
        const t = this._colorMap;
        if (!t) throw new Zu("Cannot warm atlas without color map");
        this._warmUpTask.value?.clear();
        const n = this._warmUpTask.value = new E6c;
        for(let i = En.A; i <= En.Z; i++)for (const r of t.keys())n.enqueue(()=>{
            for(let s = 0; s < 1; s += .1)this.getGlyph(e, String.fromCharCode(i), r << 15 & 16744448, 0, s);
        });
        for(let i = En.a; i <= En.z; i++)for (const r of t.keys())n.enqueue(()=>{
            for(let s = 0; s < 1; s += .1)this.getGlyph(e, String.fromCharCode(i), r << 15 & 16744448, 0, s);
        });
        for(let i = En.ExclamationMark; i <= En.Tilde; i++)for (const r of t.keys())n.enqueue(()=>{
            for(let s = 0; s < 1; s += .1)this.getGlyph(e, String.fromCharCode(i), r << 15 & 16744448, 0, s);
        });
    }
}, qge.maximumPageCount = 16, qge = ie([
    C(3, $r),
    C(4, _t)
], qge);

}
