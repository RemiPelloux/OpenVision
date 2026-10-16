"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.validateSchemaDeps = exports.validatePropertyDeps = exports.error = void 0;
const n = require("./module-95183.js"), s = require("./module-79657.js"), o = require("./module-68255.js");
exports.error = {
    message: ({ params: { property: e, depsCount: t, deps: r } })=>{
        const s = 1 === t ? "property" : "properties";
        return n.str`must have ${s} ${r} when property ${e} is present`;
    },
    params: ({ params: { property: e, depsCount: t, deps: r, missingProperty: s } })=>n._`{property: ${e},
    missingProperty: ${s},
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
    const { gen: r, data: s, it: i } = e;
    if (0 === Object.keys(t).length) return;
    const a = r.let("missing");
    for(const c in t){
        const l = t[c];
        if (0 === l.length) continue;
        const u = (0, o.propertyInData)(r, s, c, i.opts.ownProperties);
        e.setParams({
            property: c,
            depsCount: l.length,
            deps: l.join(", ")
        }), i.allErrors ? r.if(u, ()=>{
            for (const t of l)(0, o.checkReportMissingProp)(e, t);
        }) : (r.if(n._`${u} && (${(0, o.checkMissingProp)(e, l, a)})`), (0, o.reportMissingProp)(e, a), r.else());
    }
}
function c(e, t = e.schema) {
    const { gen: r, data: n, keyword: i, it: a } = e, c = r.name("valid");
    for(const l in t)(0, s.alwaysValidSchema)(a, t[l]) || (r.if((0, o.propertyInData)(r, n, l, a.opts.ownProperties), ()=>{
        const t = e.subschema({
            keyword: i,
            schemaProp: l
        }, c);
        e.mergeValidEvaluated(t, c);
    }, ()=>r.var(c, !0)), e.ok(c));
}
exports.validatePropertyDeps = a, exports.validateSchemaDeps = c, exports.default = i;
