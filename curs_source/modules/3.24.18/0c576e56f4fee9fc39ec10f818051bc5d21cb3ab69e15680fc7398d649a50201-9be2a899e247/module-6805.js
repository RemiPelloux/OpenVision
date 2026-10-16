"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
});
const n = require("./module-5183.js"), o = require("./module-9657.js"), s = {
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
        const a = r, c = t.let("valid", !1), u = t.let("passing", null), l = t.name("_valid");
        e.setParams({
            passing: u
        }), t.block(function() {
            a.forEach((r, s)=>{
                let a;
                (0, o.alwaysValidSchema)(i, r) ? t.var(l, !0) : a = e.subschema({
                    keyword: "oneOf",
                    schemaProp: s,
                    compositeRule: !0
                }, l), s > 0 && t.if(n._`${l} && ${c}`).assign(c, !1).assign(u, n._`[${u}, ${s}]`).else(), t.if(l, ()=>{
                    t.assign(c, !0), t.assign(u, s), a && e.mergeEvaluated(a, n.Name);
                });
            });
        }), e.result(c, ()=>e.reset(), ()=>e.error(!0));
    }
};
exports.default = s;
