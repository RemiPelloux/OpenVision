"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
});
const n = require("./module-68255.js"), s = require("./module-95183.js"), o = require("./module-79657.js"), i = require("./module-79657.js"), a = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code (e) {
        const { gen: t, schema: r, data: a, parentSchema: c, it: l } = e, { opts: u } = l, d = (0, n.allSchemaProperties)(r), p = d.filter((e)=>(0, o.alwaysValidSchema)(l, r[e]));
        if (0 === d.length || p.length === d.length && (!l.opts.unevaluated || !0 === l.props)) return;
        const m = u.strictSchema && !u.allowMatchingProperties && c.properties, h = t.name("valid");
        !0 === l.props || l.props instanceof s.Name || (l.props = (0, i.evaluatedPropsToName)(t, l.props));
        const { props: f } = l;
        function g(e) {
            for(const t in m)new RegExp(e).test(t) && (0, o.checkStrictMode)(l, `property ${t} matches pattern ${e} (use allowMatchingProperties)`);
        }
        function y(r) {
            t.forIn("key", a, (o)=>{
                t.if(s._`${(0, n.usePattern)(e, r)}.test(${o})`, ()=>{
                    const n = p.includes(r);
                    n || e.subschema({
                        keyword: "patternProperties",
                        schemaProp: r,
                        dataProp: o,
                        dataPropType: i.Type.Str
                    }, h), l.opts.unevaluated && !0 !== f ? t.assign(s._`${f}[${o}]`, !0) : n || l.allErrors || t.if((0, s.not)(h), ()=>t.break());
                });
            });
        }
        !function() {
            for (const e of d)m && g(e), l.allErrors ? y(e) : (t.var(h, !0), y(e), t.if(h));
        }();
    }
};
exports.default = a;
