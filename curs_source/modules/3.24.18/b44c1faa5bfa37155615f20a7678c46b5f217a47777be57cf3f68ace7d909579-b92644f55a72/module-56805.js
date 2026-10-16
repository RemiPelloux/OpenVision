"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
});
const n = require("./module-95183.js"), s = require("./module-79657.js"), o = {
    keyword: "oneOf",
    schemaType: "array",
    trackErrors: !0,
    error: {
        message: "must match exactly one schema in oneOf",
        params: ({ params: e })=>n._`{passingSchemas: ${e.passing}}`
    },
    code (e) {
        const { gen: t, schema: r, parentSchema: o, it: i } = e;
        if (!Array.isArray(r)) throw new Error("ajv implementation error");
        if (i.opts.discriminator && o.discriminator) return;
        const a = r, c = t.let("valid", !1), l = t.let("passing", null), u = t.name("_valid");
        e.setParams({
            passing: l
        }), t.block(function() {
            a.forEach((r, o)=>{
                let a;
                (0, s.alwaysValidSchema)(i, r) ? t.var(u, !0) : a = e.subschema({
                    keyword: "oneOf",
                    schemaProp: o,
                    compositeRule: !0
                }, u), o > 0 && t.if(n._`${u} && ${c}`).assign(c, !1).assign(l, n._`[${l}, ${o}]`).else(), t.if(u, ()=>{
                    t.assign(c, !0), t.assign(l, o), a && e.mergeEvaluated(a, n.Name);
                });
            });
        }), e.result(c, ()=>e.reset(), ()=>e.error(!0));
    }
};
exports.default = o;
