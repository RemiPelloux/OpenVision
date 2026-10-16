"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.validateSchemaDeps = exports.validatePropertyDeps = exports.error = void 0;
const n = require("./module-95183.js"), o = require("./module-79657.js"), s = require("./module-68255.js");
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
        a(e, t), l(e, r);
    }
};
function a(e, t = e.schema) {
    const { gen: r, data: o, it: i } = e;
    if (0 === Object.keys(t).length) return;
    const a = r.let("missing");
    for(const l in t){
        const c = t[l];
        if (0 === c.length) continue;
        const u = (0, s.propertyInData)(r, o, l, i.opts.ownProperties);
        e.setParams({
            property: l,
            depsCount: c.length,
            deps: c.join(", ")
        }), i.allErrors ? r.if(u, ()=>{
            for (const t of c)(0, s.checkReportMissingProp)(e, t);
        }) : (r.if(n._`${u} && (${(0, s.checkMissingProp)(e, c, a)})`), (0, s.reportMissingProp)(e, a), r.else());
    }
}
function l(e, t = e.schema) {
    const { gen: r, data: n, keyword: i, it: a } = e, l = r.name("valid");
    for(const c in t)(0, o.alwaysValidSchema)(a, t[c]) || (r.if((0, s.propertyInData)(r, n, c, a.opts.ownProperties), ()=>{
        const t = e.subschema({
            keyword: i,
            schemaProp: c
        }, l);
        e.mergeValidEvaluated(t, l);
    }, ()=>r.var(l, !0)), e.ok(l));
}
exports.validatePropertyDeps = a, exports.validateSchemaDeps = l, exports.default = i;
