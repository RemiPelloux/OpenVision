"use strict";
require.d(exports, {
    B: ()=>n
});
class n {
    constructor(e = 864e5){
        this.ttl = e, this.staleDirty = !1, this.refreshGeneration = 0;
    }
    async get(e) {
        const t = performance.now();
        if (this.state && this.state.expiresAt > t && !this.staleDirty) return this.state.value;
        if (this.staleDirty && this.state) {
            const t = this.state.value;
            if (!this.refreshInFlight) {
                const t = this.refreshGeneration;
                let r;
                r = (async ()=>{
                    try {
                        const r = await e();
                        if (t !== this.refreshGeneration) return;
                        this.state = {
                            expiresAt: performance.now() + this.ttl,
                            value: r
                        }, this.staleDirty = !1;
                    } catch  {} finally{
                        r && this.refreshInFlight === r && (this.refreshInFlight = void 0);
                    }
                })(), this.refreshInFlight = r;
            }
            return t;
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
}
