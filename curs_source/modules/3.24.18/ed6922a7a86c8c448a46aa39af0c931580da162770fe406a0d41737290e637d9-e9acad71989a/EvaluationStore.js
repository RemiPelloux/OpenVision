import { jSt } from "./A3u.js";
import { AJe } from "./Hashing.js";
import { Wto } from "./SDKFlags.js";
import { QMe } from "./StableID.js";
import { MJe } from "./index_197.js";
import { x } from "./tslib.es6.js";
var pvd;
export { pvd };
var __wakaru_Jyv_initialized = false;
export function Jyv() {
if (__wakaru_Jyv_initialized) return;
__wakaru_Jyv_initialized = true;
"use strict";
x(), MJe(), pvd = class {
    constructor(e){
        this._sdkKey = e, this._rawValues = null, this._values = null, this._source = "Uninitialized", this._lcut = 0, this._receivedAt = 0, this._bootstrapMetadata = null, this._warnings = new Set;
    }
    reset() {
        this._values = null, this._rawValues = null, this._source = "Loading", this._lcut = 0, this._receivedAt = 0, this._bootstrapMetadata = null;
    }
    finalize() {
        this._values || (this._source = "NoValues");
    }
    getValues() {
        return this._rawValues ? jSt(this._rawValues, "has_updates", "EvaluationStoreValues") : null;
    }
    setValues(e, t) {
        if (!e) return !1;
        const n = jSt(e.data, "has_updates", "EvaluationResponse");
        return n == null ? !1 : (this._source = e.source, n?.has_updates !== !0 || (this._rawValues = e.data, this._lcut = n.time, this._receivedAt = e.receivedAt, this._values = n, this._bootstrapMetadata = this._extractBootstrapMetadata(e.source, n), e.source && n.user && this._setWarningState(t, n), Wto.setFlags(this._sdkKey, n.sdk_flags ?? {})), !0);
    }
    getWarnings() {
        if (this._warnings.size !== 0) return Array.from(this._warnings);
    }
    getGate(e) {
        return this._getDetailedStoreResult(this._values?.feature_gates, e);
    }
    getConfig(e) {
        return this._getDetailedStoreResult(this._values?.dynamic_configs, e);
    }
    getConfigList() {
        return this._values?.dynamic_configs ? Object.values(this._values.dynamic_configs).map((e)=>e.name) : [];
    }
    getLayer(e) {
        return this._getDetailedStoreResult(this._values?.layer_configs, e);
    }
    getParamStore(e) {
        return this._getDetailedStoreResult(this._values?.param_stores, e);
    }
    getSource() {
        return this._source;
    }
    getExposureMapping() {
        return this._values?.exposures;
    }
    _extractBootstrapMetadata(e, t) {
        if (e !== "Bootstrap") return null;
        const n = {};
        return t.user && (n.user = t.user), t.sdkInfo && (n.generatorSDKInfo = t.sdkInfo), n.lcut = t.time, n;
    }
    _getDetailedStoreResult(e, t) {
        let n = null;
        return e && (n = e[t] ? e[t] : e[AJe(t)]), {
            result: n,
            details: this._getDetails(n == null)
        };
    }
    _setWarningState(e, t) {
        const n = QMe.get(this._sdkKey);
        if (e.customIDs?.stableID !== n && (e.customIDs?.stableID || n)) {
            this._warnings.add("StableIDMismatch");
            return;
        }
    }
    getCurrentSourceDetails() {
        if (this._source === "Uninitialized" || this._source === "NoValues") return {
            reason: this._source
        };
        const e = {
            reason: this._source,
            lcut: this._lcut,
            receivedAt: this._receivedAt
        };
        return this._warnings.size > 0 && (e.warnings = Array.from(this._warnings)), e;
    }
    _getDetails(e) {
        const t = this.getCurrentSourceDetails();
        let n = t.reason;
        const i = t.warnings ?? [];
        this._source === "Bootstrap" && i.length > 0 && (n = n + i[0]), n !== "Uninitialized" && n !== "NoValues" && (n = `${n}:${e ? "Unrecognized" : "Recognized"}`);
        const r = this._source === "Bootstrap" ? this._bootstrapMetadata ?? void 0 : void 0;
        return r && (t.bootstrapMetadata = r), {
            ...t,
            reason: n
        };
    }
};

}
