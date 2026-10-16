"use strict";
require.d(exports, {
    O: ()=>m,
    _: ()=>l
});
var n = require("./module-6688.js"), s = require("./module-37949.js"), o = require("./module-33002.js");
const i = (0, s.h)("@anysphere/agent-host:managed-local-subagent-model-config"), a = Object.values(n.KQr), c = [
    "disabled",
    "inherit",
    "model"
];
function l(e, t, r = (0, o.q6)()) {
    const s = e.subagentModelConfig;
    if (void 0 === s) return;
    if (s.taskToolOmitted) return {
        kind: "omit-task-tool"
    };
    const c = a.find((e)=>e === s.forcePolicy);
    if (void 0 === c) return void i.warn(r, "run_ready subagent_model_config carries a force policy this build does not know; the Task props keep the parent-model pin", {
        forcePolicy: s.forcePolicy,
        resolvedModelId: t
    });
    const l = "" === s.forceModelId ? void 0 : s.forceModelId;
    if (c === n.KQr.None || void 0 !== l) return {
        kind: "config",
        config: {
            forcePolicy: c,
            forceModelId: l,
            parentMaxMode: s.parentMaxMode,
            parentRequestedModelName: "" === s.parentRequestedModelName ? void 0 : s.parentRequestedModelName,
            models: u(s),
            aliasToSlug: d(s),
            overrides: p(s, t, r)
        }
    };
    i.warn(r, "run_ready subagent_model_config forces a policy without its forced slug; the Task props keep the parent-model pin", {
        forcePolicy: c,
        resolvedModelId: t
    });
}
function u(e) {
    const t = new Map;
    for (const r of e.models)t.set(r.slug, {
        slug: r.slug,
        advertised: r.advertised,
        valid: r.valid,
        blocked: r.blocked,
        requiresMaxMode: r.requiresMaxMode,
        representativeCostDollars: r.representativeCostDollars
    });
    return t;
}
function d(e) {
    const t = new Map;
    for (const r of e.models)for (const e of r.legacyAliases)t.set(e, r.slug);
    return t;
}
function p(e, t, r) {
    const n = {};
    for (const s of e.overrides){
        const e = c.find((e)=>e === s.kind);
        if (void 0 !== e) if ("model" === e) {
            if (void 0 === s.modelId || "" === s.modelId) continue;
            n[s.subagentType] = {
                type: "model",
                modelId: s.modelId
            };
        } else n[s.subagentType] = {
            type: e
        };
        else i.warn(r, "run_ready subagent_model_config carries an override kind this build does not know; ignoring that override", {
            subagentType: s.subagentType,
            kind: s.kind,
            resolvedModelId: t
        });
    }
    return n;
}
function m(e) {
    const t = new Map;
    for (const r of e.models.values())r.advertised && t.set(r.slug, {
        slug: r.slug
    });
    return {
        modelsBySlug: t,
        normalizeSlugAlias: (t)=>e.aliasToSlug.get(t) ?? t
    };
}
