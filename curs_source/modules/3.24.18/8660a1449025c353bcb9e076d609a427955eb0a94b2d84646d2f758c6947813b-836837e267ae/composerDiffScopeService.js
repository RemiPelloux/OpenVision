import { Qe, st } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { Rn } from "./extensions.js";
import { Mt } from "./index_197.js";
import { It } from "./instantiation.js";
import { PFr, i_a, r_a } from "./ipa.js";
import { du, kv } from "./map.js";
import { Zi, ki } from "./storage_2.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var F3n, p5f, b6l, tks;
export { F3n, b6l, p5f, tks };
var __wakaru_oNi_initialized = false;
export function oNi() {
if (__wakaru_oNi_initialized) return;
__wakaru_oNi_initialized = true;
"use strict";
E(), Mt(), du(), Qe(), Rn(), It(), Zi(), F3n = jn("composerDiffScopeService"), p5f = 256, b6l = 128, tks = class extends st {
    constructor(t){
        super(), this.storageService = t, this.contentCache = new kv(p5f), this.contentInflight = new Map, this.scopeCache = new kv(b6l), this.summaryCache = new kv(b6l);
    }
    async getContent(t) {
        const e = this.contentCache.get(t);
        if (e !== void 0) return e;
        const n = this.contentInflight.get(t);
        if (n) return n;
        const i = this.storageService.cursorDiskKVGet(t).then((r)=>(this.contentInflight.delete(t), r !== void 0 && this.contentCache.set(t, r), r)).catch((r)=>{
            throw this.contentInflight.delete(t), r;
        });
        return this.contentInflight.set(t, i), i;
    }
    async hydrateOne(t) {
        const [e, n] = await Promise.all([
            t.beforeContentId ? this.getContent(t.beforeContentId) : Promise.resolve(void 0),
            t.afterContentId ? this.getContent(t.afterContentId) : Promise.resolve(void 0)
        ]);
        return {
            beforeContent: e,
            afterContent: n,
            precomputedDiff: t.precomputedDiff
        };
    }
    hydrateEditDisplay(t) {
        return this.hydrateOne(t);
    }
    async hydrateEditDisplays(t) {
        const e = await Promise.all(t.map(async (n)=>[
                n.callId,
                await this.hydrateOne(n)
            ]));
        return new Map(e);
    }
    async getContentsByIds(t) {
        const e = [
            ...new Set(t)
        ], n = await Promise.all(e.map(async (r)=>[
                r,
                await this.getContent(r)
            ])), i = new Map;
        for (const [r, s] of n)s !== void 0 && i.set(r, s);
        return i;
    }
    scopeCacheKey(t, e, n) {
        return `${t}|${e}|${PFr(n)}`;
    }
    resolveScope(t, e, n) {
        const i = this.scopeCacheKey(t, e, n), r = this.scopeCache.get(i);
        if (r) return r;
        const s = r_a(n);
        return this.scopeCache.set(i, s), s;
    }
    resolveScopeSummary(t, e, n) {
        const i = this.scopeCacheKey(t, e, n), r = this.scopeCache.get(i);
        if (r) return r.summary;
        const s = this.summaryCache.get(i);
        if (s) return s;
        const o = i_a(n);
        return this.summaryCache.set(i, o), o;
    }
    clear() {
        this.contentCache.clear(), this.contentInflight.clear(), this.scopeCache.clear(), this.summaryCache.clear();
    }
}, tks = Re([
    F(0, ki)
], tks), bn(F3n, tks, 1);

}
