import { qfn, zfn } from "./idGenerator.js";
import { cp } from "./objects.js";
import { E } from "./tslib.es6.js";
import { Rp } from "./ze.js";
var MKm;
export { MKm };
var __wakaru_csk_initialized = false;
export function csk() {
if (__wakaru_csk_initialized) return;
__wakaru_csk_initialized = true;
"use strict";
E(), zfn(), cp(), MKm = class {
    constructor(t, e, n, i, r = 0, s = Date.now){
        if (this.cacheQuery = t, this.loadFn = e, this.disposeFn = n, this.previousCacheState = i, this.reinitCooldownMs = r, this.now = s, this._loadedAt = 0, this._cacheKey = qfn.nextId(), this.query = this.cacheQuery(this._cacheKey), this.loadingPhase = 1, this.previousCacheState) {
            const o = Object.assign({}, this.query, {
                cacheKey: null
            }), a = Object.assign({}, this.previousCacheState.query, {
                cacheKey: null
            });
            Rp(o, a) || (this.previousCacheState.dispose(), this.previousCacheState = void 0);
        }
    }
    get cacheKey() {
        return this.loadingPhase === 3 || !this.previousCacheState ? this._cacheKey : this.previousCacheState.cacheKey;
    }
    get isLoaded() {
        const t = this.loadingPhase === 3;
        return t || !this.previousCacheState ? t : this.previousCacheState.isLoaded;
    }
    get isUpdating() {
        const t = this.loadingPhase === 2;
        return t || !this.previousCacheState ? t : this.previousCacheState.isUpdating;
    }
    get loadedAt() {
        return this.loadingPhase === 3 || !this.previousCacheState ? this._loadedAt : this.previousCacheState.loadedAt;
    }
    load() {
        return this.isUpdating ? this : this.reinitCooldownMs > 0 && this.previousCacheState?.isLoaded && this.now() - this.previousCacheState.loadedAt < this.reinitCooldownMs ? this : (this.loadingPhase = 2, this.loadPromise = (async ()=>{
            try {
                await this.loadFn(this.query), this.loadingPhase = 3, this._loadedAt = this.now(), this.previousCacheState && (this.previousCacheState.dispose(), this.previousCacheState = void 0);
            } catch (t) {
                throw this.loadingPhase = 4, t;
            }
        })(), this);
    }
    dispose() {
        this.loadPromise ? (async ()=>{
            try {
                await this.loadPromise;
            } catch  {}
            this.loadingPhase = 5, this.disposeFn(this._cacheKey);
        })() : this.loadingPhase = 5, this.previousCacheState && (this.previousCacheState.dispose(), this.previousCacheState = void 0);
    }
};

}
