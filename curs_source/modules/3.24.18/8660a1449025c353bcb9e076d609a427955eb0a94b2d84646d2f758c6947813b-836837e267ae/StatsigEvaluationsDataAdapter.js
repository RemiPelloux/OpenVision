import { vJu } from "./DataAdapterCore.js";
import { QR } from "./Log_2.js";
import { Igr, ted } from "./Network_2.js";
import { DZn, ogr, pJu, x6t } from "./SZu.js";
import { XJu } from "./StatsigDataAdapter.js";
import { l_t } from "./index_12.js";
import { E } from "./tslib.es6.js";
var REo;
export { REo };
var __wakaru_ied_initialized = false;
export function ied() {
if (__wakaru_ied_initialized) return;
__wakaru_ied_initialized = true;
"use strict";
E(), l_t(), ted(), REo = class extends vJu {
    constructor(){
        super("EvaluationsDataAdapter", "evaluations"), this._network = null, this._options = null;
    }
    attach(t, e, n) {
        super.attach(t, e, n), n !== null && n instanceof Igr ? this._network = n : this._network = new Igr(e ?? {});
    }
    getDataAsync(t, e, n) {
        return this._getDataAsyncImpl(t, DZn(e, this._options), n);
    }
    prefetchData(t, e) {
        return this._prefetchDataImpl(t, e);
    }
    setData(t) {
        const e = x6t(t, "has_updates", "data");
        e && "user" in e ? super.setData(t, e.user) : QR.error("StatsigUser not found. You may be using an older server SDK version. Please upgrade your SDK or use setDataLegacy.");
    }
    setDataLegacy(t, e) {
        super.setData(t, e);
    }
    async _fetchFromNetwork(t, e, n, i) {
        return await this._network?.fetchEvaluations(this._getSdkKey(), t, n?.priority, e, i) ?? null;
    }
    _getCacheKey(t) {
        const e = ogr(this._getSdkKey(), t, this._options?.customUserCacheKeyFunc);
        return `${XJu}.${this._cacheSuffix}.${e}`;
    }
    _isCachedResultValidFor204(t, e) {
        return t.fullUserHash != null && t.fullUserHash === pJu(e);
    }
};

}
