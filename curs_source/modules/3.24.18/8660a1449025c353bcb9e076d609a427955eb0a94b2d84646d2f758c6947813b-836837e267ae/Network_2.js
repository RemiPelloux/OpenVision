import { _Sy } from "./EvaluationResponseDeltas.js";
import { Dke } from "./NetworkConfig.js";
import { zJu } from "./NetworkCore.js";
import { gSy, x6t } from "./SZu.js";
import { nEo } from "./UrlConfiguration.js";
import { l_t } from "./index_12.js";
import { E } from "./tslib.es6.js";
var Igr;
export { Igr };
var __wakaru_ted_initialized = false;
export function ted() {
if (__wakaru_ted_initialized) return;
__wakaru_ted_initialized = true;
"use strict";
E(), l_t(), _Sy(), Igr = class extends zJu {
    constructor(t, e){
        super(t, e);
        const n = t?.networkConfig;
        this._option = t, this._initializeUrlConfig = new nEo(Dke._initialize, n?.initializeUrl, n?.api, n?.initializeFallbackUrls);
    }
    async fetchEvaluations(t, e, n, i, r) {
        const s = e ? x6t(e, "has_updates", "InitializeResponse") : null;
        let o = {
            user: i,
            hash: this._option?.networkConfig?.initializeHashAlgorithm ?? "djb2",
            deltasResponseRequested: !1,
            full_checksum: null
        };
        if (s?.has_updates) {
            const a = s?.hash_used !== (this._option?.networkConfig?.initializeHashAlgorithm ?? "djb2");
            o = {
                ...o,
                sinceTime: r && !a ? s.time : 0,
                previousDerivedFields: "derived_fields" in s && r ? s.derived_fields : {},
                deltasResponseRequested: !0,
                full_checksum: s.full_checksum,
                partialUserMatchSinceTime: a ? 0 : s.time
            };
        }
        return this._fetchEvaluations(t, s, o, n);
    }
    async _fetchEvaluations(t, e, n, i) {
        const r = await this.post({
            sdkKey: t,
            urlConfig: this._initializeUrlConfig,
            data: n,
            retries: 2,
            isStatsigEncodable: !0,
            priority: i
        });
        if (r?.code === 204) return '{"has_updates": false}';
        if (r?.code !== 200) return r?.body ?? null;
        if (e?.has_updates !== !0 || r.body?.includes('"is_delta":true') !== !0 || n.deltasResponseRequested !== !0) return r.body;
        const s = gSy(e, r.body);
        return typeof s == "string" ? s : this._fetchEvaluations(t, e, {
            ...n,
            ...s,
            deltasResponseRequested: !1
        }, i);
    }
};

}
