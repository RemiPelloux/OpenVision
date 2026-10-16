import { eSv, jSt } from "./A3u.js";
import { iSv } from "./EvaluationResponseDeltas.js";
import { bde } from "./NetworkConfig.js";
import { ovd } from "./NetworkCore.js";
import { Tto } from "./UrlConfiguration.js";
import { MJe } from "./index_197.js";
import { x } from "./tslib.es6.js";
var kHi;
export { kHi };
var __wakaru_gvd_initialized = false;
export function gvd() {
if (__wakaru_gvd_initialized) return;
__wakaru_gvd_initialized = true;
"use strict";
x(), MJe(), iSv(), kHi = class extends ovd {
    constructor(e, t){
        super(e, t);
        const n = e?.networkConfig;
        this._option = e, this._initializeUrlConfig = new Tto(bde._initialize, n?.initializeUrl, n?.api, n?.initializeFallbackUrls);
    }
    async fetchEvaluations(e, t, n, i, r) {
        const s = t ? jSt(t, "has_updates", "InitializeResponse") : null;
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
        return this._fetchEvaluations(e, s, o, n);
    }
    async _fetchEvaluations(e, t, n, i) {
        const r = await this.post({
            sdkKey: e,
            urlConfig: this._initializeUrlConfig,
            data: n,
            retries: 2,
            isStatsigEncodable: !0,
            priority: i
        });
        if (r?.code === 204) return '{"has_updates": false}';
        if (r?.code !== 200) return r?.body ?? null;
        if (t?.has_updates !== !0 || r.body?.includes('"is_delta":true') !== !0 || n.deltasResponseRequested !== !0) return r.body;
        const s = eSv(t, r.body);
        return typeof s == "string" ? s : this._fetchEvaluations(e, t, {
            ...n,
            ...s,
            deltasResponseRequested: !1
        }, i);
    }
};

}
