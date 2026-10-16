"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
});
const n = require("./module-68255.js"), o = require("./module-95183.js"), s = require("./module-79657.js"), i = require("./module-79657.js"), a = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code (e) {
        const { gen: t, schema: r, data: a, parentSchema: l, it: c } = e, { opts: u } = c, d = (0, n.allSchemaProperties)(r), p = d.filter((e)=>(0, s.alwaysValidSchema)(c, r[e]));
        if (0 === d.length || p.length === d.length && (!c.opts.unevaluated || !0 === c.props)) return;
        const h = u.strictSchema && !u.allowMatchingProperties && l.properties, m = t.name("valid");
        !0 === c.props || c.props instanceof o.Name || (c.props = (0, i.evaluatedPropsToName)(t, c.props));
        const { props: f } = c;
        function g(e) {
            for(const t in h)new RegExp(e).test(t) && (0, s.checkStrictMode)(c, `property ${t} matches pattern ${e} (use allowMatchingProperties)`);
        }
        function y(r) {
            t.forIn("key", a, (s)=>{
                t.if(o._`${(0, n.usePattern)(e, r)}.test(${s})`, ()=>{
                    const n = p.includes(r);
                    n || e.subschema({
                        keyword: "patternProperties",
                        schemaProp: r,
                        dataProp: s,
                        dataPropType: i.Type.Str
                    }, m), c.opts.unevaluated && !0 !== f ? t.assign(o._`${f}[${s}]`, !0) : n || c.allErrors || t.if((0, o.not)(m), ()=>t.break());
                });
            });
        }
        !function() {
            for (const e of d)h && g(e), c.allErrors ? y(e) : (t.var(m, !0), y(e), t.if(m));
        }();
    }
};
exports.default = a;
