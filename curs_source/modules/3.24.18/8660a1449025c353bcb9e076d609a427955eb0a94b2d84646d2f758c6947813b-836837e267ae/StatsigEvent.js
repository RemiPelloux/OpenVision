import { dgr } from "./SZu.js";
import { E } from "./tslib.es6.js";
var XTo, ZTo, QTo, hgr, VQu, KQu, JTo, YQu, XQu;
export { JTo, KQu, QTo, VQu, XQu, XTo, YQu, ZTo, hgr };
var __wakaru_ZQu_initialized = false;
export function ZQu() {
if (__wakaru_ZQu_initialized) return;
__wakaru_ZQu_initialized = true;
"use strict";
E(), XTo = "statsig::config_exposure", ZTo = "statsig::gate_exposure", QTo = "statsig::layer_exposure", hgr = (t, e, n, i, r)=>(n.bootstrapMetadata && (i.bootstrapMetadata = n.bootstrapMetadata), {
        eventName: t,
        user: e,
        value: null,
        metadata: XQu(n, i),
        secondaryExposures: r,
        time: Date.now()
    }), VQu = ({ eventName: t })=>t === ZTo || t === XTo || t === QTo, KQu = (t, e, n)=>{
    const i = {
        gate: e.name,
        gateValue: String(e.value),
        ruleID: e.ruleID
    };
    return e.__evaluation?.version != null && (i.configVersion = e.__evaluation.version), hgr(ZTo, t, e.details, i, dgr(e.__evaluation?.secondary_exposures ?? [], n));
}, JTo = (t, e, n)=>{
    const i = {
        config: e.name,
        ruleID: e.ruleID
    };
    return e.__evaluation?.version != null && (i.configVersion = e.__evaluation.version), e.__evaluation?.passed != null && (i.rulePassed = String(e.__evaluation.passed)), hgr(XTo, t, e.details, i, dgr(e.__evaluation?.secondary_exposures ?? [], n));
}, YQu = (t, e, n, i)=>{
    const r = e.__evaluation, s = r?.explicit_parameters?.includes(n) === !0;
    let o = "", a = r?.undelegated_secondary_exposures ?? [];
    s && (o = r.allocated_experiment_name ?? "", a = r.secondary_exposures ?? []);
    const l = e.__evaluation?.parameter_rule_ids, c = {
        config: e.name,
        parameterName: n,
        ruleID: l?.[n] ?? e.ruleID,
        allocatedExperiment: o,
        isExplicitParameter: String(s)
    };
    return e.__evaluation?.version != null && (c.configVersion = e.__evaluation.version), hgr(QTo, t, e.details, c, dgr(a, i));
}, XQu = (t, e)=>(e.reason = t.reason, t.lcut && (e.lcut = String(t.lcut)), t.receivedAt && (e.receivedAt = String(t.receivedAt)), e);

}
