import { s_t } from "./Hashing.js";
import { bEo } from "./SDKFlags.js";
import { x6t } from "./SZu.js";
import { h$e } from "./StableID.js";
import { l_t } from "./index_12.js";
import { E } from "./tslib.es6.js";
var JJu;
export { JJu };
var __wakaru_mSy_initialized = false;
export function mSy() {
if (__wakaru_mSy_initialized) return;
__wakaru_mSy_initialized = true;
"use strict";
E(), l_t(), JJu = class {
    constructor(t){
        this._sdkKey = t, this._rawValues = null, this._values = null, this._source = "Uninitialized", this._lcut = 0, this._receivedAt = 0, this._bootstrapMetadata = null, this._warnings = new Set;
    }
    reset() {
        this._values = null, this._rawValues = null, this._source = "Loading", this._lcut = 0, this._receivedAt = 0, this._bootstrapMetadata = null;
    }
    finalize() {
        this._values || (this._source = "NoValues");
    }
    getValues() {
        return this._rawValues ? x6t(this._rawValues, "has_updates", "EvaluationStoreValues") : null;
    }
    setValues(t, e) {
        if (!t) return !1;
        const n = x6t(t.data, "has_updates", "EvaluationResponse");
        return n == null ? !1 : (this._source = t.source, n?.has_updates !== !0 || (this._rawValues = t.data, this._lcut = n.time, this._receivedAt = t.receivedAt, this._values = n, this._bootstrapMetadata = this._extractBootstrapMetadata(t.source, n), t.source && n.user && this._setWarningState(e, n), bEo.setFlags(this._sdkKey, n.sdk_flags ?? {})), !0);
    }
    getWarnings() {
        if (this._warnings.size !== 0) return Array.from(this._warnings);
    }
    getGate(t) {
        return this._getDetailedStoreResult(this._values?.feature_gates, t);
    }
    getConfig(t) {
        return this._getDetailedStoreResult(this._values?.dynamic_configs, t);
    }
    getConfigList() {
        return this._values?.dynamic_configs ? Object.values(this._values.dynamic_configs).map((t)=>t.name) : [];
    }
    getLayer(t) {
        return this._getDetailedStoreResult(this._values?.layer_configs, t);
    }
    getParamStore(t) {
        return this._getDetailedStoreResult(this._values?.param_stores, t);
    }
    getSource() {
        return this._source;
    }
    getExposureMapping() {
        return this._values?.exposures;
    }
    _extractBootstrapMetadata(t, e) {
        if (t !== "Bootstrap") return null;
        const n = {};
        return e.user && (n.user = e.user), e.sdkInfo && (n.generatorSDKInfo = e.sdkInfo), n.lcut = e.time, n;
    }
    _getDetailedStoreResult(t, e) {
        let n = null;
        return t && (n = t[e] ? t[e] : t[s_t(e)]), {
            result: n,
            details: this._getDetails(n == null)
        };
    }
    _setWarningState(t, e) {
        const n = h$e.get(this._sdkKey);
        if (t.customIDs?.stableID !== n && (t.customIDs?.stableID || n)) {
            this._warnings.add("StableIDMismatch");
            return;
        }
    }
    getCurrentSourceDetails() {
        if (this._source === "Uninitialized" || this._source === "NoValues") return {
            reason: this._source
        };
        const t = {
            reason: this._source,
            lcut: this._lcut,
            receivedAt: this._receivedAt
        };
        return this._warnings.size > 0 && (t.warnings = Array.from(this._warnings)), t;
    }
    _getDetails(t) {
        const e = this.getCurrentSourceDetails();
        let n = e.reason;
        const i = e.warnings ?? [];
        this._source === "Bootstrap" && i.length > 0 && (n = n + i[0]), n !== "Uninitialized" && n !== "NoValues" && (n = `${n}:${t ? "Unrecognized" : "Recognized"}`);
        const r = this._source === "Bootstrap" ? this._bootstrapMetadata ?? void 0 : void 0;
        return r && (e.bootstrapMetadata = r), {
            ...e,
            reason: n
        };
    }
};

}
