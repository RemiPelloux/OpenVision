import { jSt, oLn, tHi, xfd } from "./A3u.js";
import { Dfd } from "./DataAdapterCore.js";
import { $E } from "./Log_3.js";
import { gvd, kHi } from "./Network_2.js";
import { uvd } from "./StatsigDataAdapter.js";
import { MJe } from "./index_197.js";
import { x } from "./tslib.es6.js";
var Jto;
export { Jto };
var __wakaru_vvd_initialized = false;
export function vvd() {
if (__wakaru_vvd_initialized) return;
__wakaru_vvd_initialized = true;
"use strict";
x(), MJe(), gvd(), Jto = class extends Dfd {
    constructor(){
        super("EvaluationsDataAdapter", "evaluations"), this._network = null, this._options = null;
    }
    attach(e, t, n) {
        super.attach(e, t, n), n !== null && n instanceof kHi ? this._network = n : this._network = new kHi(t ?? {});
    }
    getDataAsync(e, t, n) {
        return this._getDataAsyncImpl(e, oLn(t, this._options), n);
    }
    prefetchData(e, t) {
        return this._prefetchDataImpl(e, t);
    }
    setData(e) {
        const t = jSt(e, "has_updates", "data");
        t && "user" in t ? super.setData(e, t.user) : $E.error("StatsigUser not found. You may be using an older server SDK version. Please upgrade your SDK or use setDataLegacy.");
    }
    setDataLegacy(e, t) {
        super.setData(e, t);
    }
    async _fetchFromNetwork(e, t, n, i) {
        return await this._network?.fetchEvaluations(this._getSdkKey(), e, n?.priority, t, i) ?? null;
    }
    _getCacheKey(e) {
        const t = tHi(this._getSdkKey(), e, this._options?.customUserCacheKeyFunc);
        return `${uvd}.${this._cacheSuffix}.${t}`;
    }
    _isCachedResultValidFor204(e, t) {
        return e.fullUserHash != null && e.fullUserHash === xfd(t);
    }
};

}
