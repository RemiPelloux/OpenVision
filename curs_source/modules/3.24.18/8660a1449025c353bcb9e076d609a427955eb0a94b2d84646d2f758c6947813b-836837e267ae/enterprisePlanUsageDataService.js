import { dWl, hEs, hWl } from "./BA.js";
import { E } from "./tslib.es6.js";
var pWl, siv;
export { pWl, siv };
var __wakaru_dKw_initialized = false;
export function dKw() {
if (__wakaru_dKw_initialized) return;
__wakaru_dKw_initialized = true;
"use strict";
E(), pWl = 300 * 1e3, siv = class {
    constructor(){
        this.baseCache = new Map, this.chartCache = new Map, this.baseInFlight = new Map, this.chartInFlight = new Map;
    }
    getCachedBaseData(t) {
        return this.baseCache.get(dWl(t))?.data;
    }
    getCachedChartData(t) {
        return this.chartCache.get(hWl(t))?.data;
    }
    isBaseDataFresh(t) {
        const e = this.baseCache.get(dWl(t));
        return e !== void 0 && Date.now() - e.fetchedAt < pWl;
    }
    isChartDataFresh(t) {
        const e = this.chartCache.get(hWl(t));
        return e !== void 0 && Date.now() - e.fetchedAt < pWl;
    }
    async refreshBaseData(t) {
        const e = dWl(t.scope), n = this.baseInFlight.get(e);
        if (n !== void 0) return n;
        const i = (async ()=>{
            const r = this.baseCache.get(e);
            try {
                const s = await t.fetchPeriod(), o = await t.fetchAggregatedUsage(s), a = {
                    periodStartMs: s.periodStartMs,
                    periodEndMs: s.periodEndMs,
                    aggregatedUsage: o,
                    fetchedAt: Date.now()
                };
                return this.baseCache.set(e, {
                    data: a,
                    fetchedAt: a.fetchedAt
                }), {
                    data: a,
                    isStale: !1
                };
            } catch (s) {
                return r !== void 0 ? {
                    data: r.data,
                    error: hEs(s),
                    isStale: !0
                } : {
                    error: hEs(s),
                    isStale: !1
                };
            }
        })();
        this.baseInFlight.set(e, i);
        try {
            return await i;
        } finally{
            this.baseInFlight.delete(e);
        }
    }
    async refreshChartData(t) {
        const e = hWl(t.key), n = this.chartInFlight.get(e);
        if (n !== void 0) return n;
        const i = (async ()=>{
            const r = this.chartCache.get(e);
            try {
                const s = await t.fetchChartData();
                return this.chartCache.set(e, {
                    data: s,
                    fetchedAt: Date.now()
                }), {
                    data: s,
                    isStale: !1
                };
            } catch (s) {
                return r !== void 0 ? {
                    data: r.data,
                    error: hEs(s),
                    isStale: !0
                } : {
                    error: hEs(s),
                    isStale: !1
                };
            }
        })();
        this.chartInFlight.set(e, i);
        try {
            return await i;
        } finally{
            this.chartInFlight.delete(e);
        }
    }
};

}
