import { oHi } from "./A3u.js";
import { x } from "./tslib.es6.js";
var bto, yto, Sto, aHi, afd, cfd, kto, lfd, ufd;
export { Sto, aHi, afd, bto, cfd, kto, lfd, ufd, yto };
var __wakaru_dfd_initialized = false;
export function dfd() {
if (__wakaru_dfd_initialized) return;
__wakaru_dfd_initialized = true;
"use strict";
x(), bto = "statsig::config_exposure", yto = "statsig::gate_exposure", Sto = "statsig::layer_exposure", aHi = (e, t, n, i, r)=>(n.bootstrapMetadata && (i.bootstrapMetadata = n.bootstrapMetadata), {
        eventName: e,
        user: t,
        value: null,
        metadata: ufd(n, i),
        secondaryExposures: r,
        time: Date.now()
    }), afd = ({ eventName: e })=>e === yto || e === bto || e === Sto, cfd = (e, t, n)=>{
    const i = {
        gate: t.name,
        gateValue: String(t.value),
        ruleID: t.ruleID
    };
    return t.__evaluation?.version != null && (i.configVersion = t.__evaluation.version), aHi(yto, e, t.details, i, oHi(t.__evaluation?.secondary_exposures ?? [], n));
}, kto = (e, t, n)=>{
    const i = {
        config: t.name,
        ruleID: t.ruleID
    };
    return t.__evaluation?.version != null && (i.configVersion = t.__evaluation.version), t.__evaluation?.passed != null && (i.rulePassed = String(t.__evaluation.passed)), aHi(bto, e, t.details, i, oHi(t.__evaluation?.secondary_exposures ?? [], n));
}, lfd = (e, t, n, i)=>{
    const r = t.__evaluation, s = r?.explicit_parameters?.includes(n) === !0;
    let o = "", a = r?.undelegated_secondary_exposures ?? [];
    s && (o = r.allocated_experiment_name ?? "", a = r.secondary_exposures ?? []);
    const c = t.__evaluation?.parameter_rule_ids, l = {
        config: t.name,
        parameterName: n,
        ruleID: c?.[n] ?? t.ruleID,
        allocatedExperiment: o,
        isExplicitParameter: String(s)
    };
    return t.__evaluation?.version != null && (l.configVersion = t.__evaluation.version), aHi(Sto, e, t.details, l, oHi(a, i));
}, ufd = (e, t)=>(t.reason = e.reason, e.lcut && (t.lcut = String(e.lcut)), e.receivedAt && (t.receivedAt = String(e.receivedAt)), t);

}
