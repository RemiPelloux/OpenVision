"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
});
const n = require("./module-8255.js"), o = require("./module-5183.js"), s = require("./module-9657.js"), i = require("./module-9657.js"), a = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code (e) {
        const { gen: t, schema: r, data: a, parentSchema: c, it: u } = e, { opts: l } = u, d = (0, n.allSchemaProperties)(r), p = d.filter((e)=>(0, s.alwaysValidSchema)(u, r[e]));
        if (0 === d.length || p.length === d.length && (!u.opts.unevaluated || !0 === u.props)) return;
        const f = l.strictSchema && !l.allowMatchingProperties && c.properties, h = t.name("valid");
        !0 === u.props || u.props instanceof o.Name || (u.props = (0, i.evaluatedPropsToName)(t, u.props));
        const { props: m } = u;
        function g(e) {
            for(const t in f)new RegExp(e).test(t) && (0, s.checkStrictMode)(u, `property ${t} matches pattern ${e} (use allowMatchingProperties)`);
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
                    }, h), u.opts.unevaluated && !0 !== m ? t.assign(o._`${m}[${s}]`, !0) : n || u.allErrors || t.if((0, o.not)(h), ()=>t.break());
                });
            });
        }
        !function() {
            for (const e of d)f && g(e), u.allErrors ? y(e) : (t.var(h, !0), y(e), t.if(h));
        }();
    }
};
exports.default = a;
