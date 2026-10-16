"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.validateSchemaDeps = exports.validatePropertyDeps = exports.error = void 0;
const n = require("./module-5183.js"), o = require("./module-9657.js"), s = require("./module-8255.js");
exports.error = {
    message: ({ params: { property: e, depsCount: t, deps: r } })=>{
        const o = 1 === t ? "property" : "properties";
        return n.str`must have ${o} ${r} when property ${e} is present`;
    },
    params: ({ params: { property: e, depsCount: t, deps: r, missingProperty: o } })=>n._`{property: ${e},
    missingProperty: ${o},
    depsCount: ${t},
    deps: ${r}}`
};
const i = {
    keyword: "dependencies",
    type: "object",
    schemaType: "object",
    error: exports.error,
    code (e) {
        const [t, r] = function({ schema: e }) {
            const t = {}, r = {};
            for(const n in e){
                if ("__proto__" === n) continue;
                (Array.isArray(e[n]) ? t : r)[n] = e[n];
            }
            return [
                t,
                r
            ];
        }(e);
        a(e, t), c(e, r);
    }
};
function a(e, t = e.schema) {
    const { gen: r, data: o, it: i } = e;
    if (0 === Object.keys(t).length) return;
    const a = r.let("missing");
    for(const c in t){
        const u = t[c];
        if (0 === u.length) continue;
        const l = (0, s.propertyInData)(r, o, c, i.opts.ownProperties);
        e.setParams({
            property: c,
            depsCount: u.length,
            deps: u.join(", ")
        }), i.allErrors ? r.if(l, ()=>{
            for (const t of u)(0, s.checkReportMissingProp)(e, t);
        }) : (r.if(n._`${l} && (${(0, s.checkMissingProp)(e, u, a)})`), (0, s.reportMissingProp)(e, a), r.else());
    }
}
function c(e, t = e.schema) {
    const { gen: r, data: n, keyword: i, it: a } = e, c = r.name("valid");
    for(const u in t)(0, o.alwaysValidSchema)(a, t[u]) || (r.if((0, s.propertyInData)(r, n, u, a.opts.ownProperties), ()=>{
        const t = e.subschema({
            keyword: i,
            schemaProp: u
        }, c);
        e.mergeValidEvaluated(t, c);
    }, ()=>r.var(c, !0)), e.ok(c));
}
exports.validatePropertyDeps = a, exports.validateSchemaDeps = c, exports.default = i;
