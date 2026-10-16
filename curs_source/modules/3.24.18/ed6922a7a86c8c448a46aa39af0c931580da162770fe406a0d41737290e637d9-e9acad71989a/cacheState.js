import { gFt, mFt } from "./idGenerator.js";
import { bu } from "./objects.js";
import { yh } from "./qIc.js";
import { x } from "./tslib.es6.js";
var rlh;
export { rlh };
var __wakaru_X4v_initialized = false;
export function X4v() {
if (__wakaru_X4v_initialized) return;
__wakaru_X4v_initialized = true;
"use strict";
x(), gFt(), bu(), rlh = class {
    constructor(e, t, n, i, r = 0, s = Date.now){
        if (this.cacheQuery = e, this.loadFn = t, this.disposeFn = n, this.previousCacheState = i, this.reinitCooldownMs = r, this.now = s, this._loadedAt = 0, this._cacheKey = mFt.nextId(), this.query = this.cacheQuery(this._cacheKey), this.loadingPhase = 1, this.previousCacheState) {
            const o = Object.assign({}, this.query, {
                cacheKey: null
            }), a = Object.assign({}, this.previousCacheState.query, {
                cacheKey: null
            });
            yh(o, a) || (this.previousCacheState.dispose(), this.previousCacheState = void 0);
        }
    }
    get cacheKey() {
        return this.loadingPhase === 3 || !this.previousCacheState ? this._cacheKey : this.previousCacheState.cacheKey;
    }
    get isLoaded() {
        const e = this.loadingPhase === 3;
        return e || !this.previousCacheState ? e : this.previousCacheState.isLoaded;
    }
    get isUpdating() {
        const e = this.loadingPhase === 2;
        return e || !this.previousCacheState ? e : this.previousCacheState.isUpdating;
    }
    get loadedAt() {
        return this.loadingPhase === 3 || !this.previousCacheState ? this._loadedAt : this.previousCacheState.loadedAt;
    }
    load() {
        return this.isUpdating ? this : this.reinitCooldownMs > 0 && this.previousCacheState?.isLoaded && this.now() - this.previousCacheState.loadedAt < this.reinitCooldownMs ? this : (this.loadingPhase = 2, this.loadPromise = (async ()=>{
            try {
                await this.loadFn(this.query), this.loadingPhase = 3, this._loadedAt = this.now(), this.previousCacheState && (this.previousCacheState.dispose(), this.previousCacheState = void 0);
            } catch (e) {
                throw this.loadingPhase = 4, e;
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
