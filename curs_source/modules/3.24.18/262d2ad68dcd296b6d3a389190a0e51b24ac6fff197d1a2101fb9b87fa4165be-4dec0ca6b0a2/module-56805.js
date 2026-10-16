"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
});
const n = require("./module-95183.js"), o = require("./module-79657.js"), s = {
    keyword: "oneOf",
    schemaType: "array",
    trackErrors: !0,
    error: {
        message: "must match exactly one schema in oneOf",
        params: ({ params: e })=>n._`{passingSchemas: ${e.passing}}`
    },
    code (e) {
        const { gen: t, schema: r, parentSchema: s, it: i } = e;
        if (!Array.isArray(r)) throw new Error("ajv implementation error");
        if (i.opts.discriminator && s.discriminator) return;
        const a = r, l = t.let("valid", !1), c = t.let("passing", null), u = t.name("_valid");
        e.setParams({
            passing: c
        }), t.block(function() {
            a.forEach((r, s)=>{
                let a;
                (0, o.alwaysValidSchema)(i, r) ? t.var(u, !0) : a = e.subschema({
                    keyword: "oneOf",
                    schemaProp: s,
                    compositeRule: !0
                }, u), s > 0 && t.if(n._`${u} && ${l}`).assign(l, !1).assign(c, n._`[${c}, ${s}]`).else(), t.if(u, ()=>{
                    t.assign(l, !0), t.assign(c, s), a && e.mergeEvaluated(a, n.Name);
                });
            });
        }), e.result(l, ()=>e.reset(), ()=>e.error(!0));
    }
};
exports.default = s;
