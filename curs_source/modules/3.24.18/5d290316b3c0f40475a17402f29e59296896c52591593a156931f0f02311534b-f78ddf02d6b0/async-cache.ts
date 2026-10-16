import { h } from "./tslib.es6.js";
var gi;
export { gi };
var __wakaru_df_initialized = false;
export function df() {
if (__wakaru_df_initialized) return;
__wakaru_df_initialized = true;
"use strict";
h(), gi = class {
    constructor(e = 1e3 * 60 * 60 * 24){
        this.ttl = e, this.staleDirty = !1, this.refreshGeneration = 0;
    }
    async get(e) {
        const t = performance.now();
        if (this.state && this.state.expiresAt > t && !this.staleDirty) return this.state.value;
        if (this.staleDirty && this.state) {
            const n = this.state.value;
            if (!this.refreshInFlight) {
                const s = this.refreshGeneration;
                let i;
                i = (async ()=>{
                    try {
                        const o = await e();
                        if (s !== this.refreshGeneration) return;
                        this.state = {
                            expiresAt: performance.now() + this.ttl,
                            value: o
                        }, this.staleDirty = !1;
                    } catch  {} finally{
                        i && this.refreshInFlight === i && (this.refreshInFlight = void 0);
                    }
                })(), this.refreshInFlight = i;
            }
            return n;
        }
        const r = await e();
        return this.state = {
            expiresAt: performance.now() + this.ttl,
            value: r
        }, this.staleDirty = !1, r;
    }
    invalidate() {
        this.refreshGeneration++, this.state = void 0, this.staleDirty = !1, this.refreshInFlight = void 0;
    }
    invalidateKeepingStale() {
        this.state && (this.staleDirty = !0);
    }
};

}
