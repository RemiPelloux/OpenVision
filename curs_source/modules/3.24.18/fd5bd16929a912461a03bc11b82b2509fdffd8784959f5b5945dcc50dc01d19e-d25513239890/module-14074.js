"use strict";
require.d(exports, {
    s: ()=>m
});
var n = require("./module-12046.js"), s = require("./module-19497.js"), i = require("./module-93451.js"), o = require("./module-5090.js");
const a = (e = [], t)=>{
    const r = {}, i = {
        ...t,
        referenceRecord: {
            ...t.referenceRecord
        }
    };
    let a = !1;
    for (const c of e){
        const { result: e, toAssign: l } = (0, o.F)(c, i);
        if (!e) return {
            result: e
        };
        l && (a = !0, r[l.name] = l.value, i.referenceRecord[l.name] = l.value, t.logger?.debug?.(`${n.z} assign: ${l.name} := ${(0, s.m)(l.value)}`));
    }
    return a ? {
        result: !0,
        referenceRecord: r
    } : {
        result: !0
    };
};
var c = require("./module-20961.js"), l = require("./module-77330.js"), u = require("./module-4374.js");
const d = (e, t)=>{
    const { conditions: r, endpoint: i } = e, { result: o, referenceRecord: d } = a(r, t);
    if (!o) return;
    const h = d ? {
        ...t,
        referenceRecord: {
            ...t.referenceRecord,
            ...d
        }
    } : t, { url: f, properties: p, headers: g } = i;
    t.logger?.debug?.(`${n.z} Resolving endpoint from template: ${(0, s.m)(i)}`);
    const m = {
        url: (0, u.t)(f, h)
    };
    return null != g && (m.headers = (0, c.w)(g, h)), null != p && (m.properties = (0, l.Fb)(p, h)), m;
};
var h = require("./module-15235.js");
const f = (e, t)=>{
    const { conditions: r, error: n } = e, { result: s, referenceRecord: o } = a(r, t);
    if (!s) return;
    const c = o ? {
        ...t,
        referenceRecord: {
            ...t.referenceRecord,
            ...o
        }
    } : t;
    throw new i.c((0, h.O4)(n, "Error", c));
}, p = (e, t)=>{
    for (const r of e)if ("endpoint" === r.type) {
        const e = d(r, t);
        if (e) return e;
    } else if ("error" === r.type) f(r, t);
    else {
        if ("tree" !== r.type) throw new i.c(`Unknown endpoint rule: ${r}`);
        {
            const e = g.evaluateTreeRule(r, t);
            if (e) return e;
        }
    }
    throw new i.c("Rules evaluation failed");
}, g = {
    evaluateRules: p,
    evaluateTreeRule: (e, t)=>{
        const { conditions: r, rules: n } = e, { result: s, referenceRecord: i } = a(r, t);
        if (!s) return;
        const o = i ? {
            ...t,
            referenceRecord: {
                ...t.referenceRecord,
                ...i
            }
        } : t;
        return g.evaluateRules(n, o);
    }
}, m = (e, t)=>{
    const { endpointParams: r, logger: o } = t, { parameters: a, rules: c } = e;
    t.logger?.debug?.(`${n.z} Initial EndpointParams: ${(0, s.m)(r)}`);
    for(const e in a){
        const t = a[e], n = r[e];
        if (null != n || null == t.default) {
            if (t.required && null == n) throw new i.c(`Missing required parameter: '${e}'`);
        } else r[e] = t.default;
    }
    const l = p(c, {
        endpointParams: r,
        logger: o,
        referenceRecord: {}
    });
    return t.logger?.debug?.(`${n.z} Resolved endpoint: ${(0, s.m)(l)}`), l;
};
