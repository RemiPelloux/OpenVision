"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
});
const n = require("./module-95183.js"), o = require("./module-83770.js"), s = require("./module-76257.js"), i = require("./module-4989.js"), a = require("./module-79657.js"), l = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: {
        message: ({ params: { discrError: e, tagName: t } })=>e === o.DiscrError.Tag ? `tag "${t}" must be string` : `value of tag "${t}" must be in oneOf`,
        params: ({ params: { discrError: e, tag: t, tagName: r } })=>n._`{error: ${e}, tag: ${r}, tagValue: ${t}}`
    },
    code (e) {
        const { gen: t, data: r, schema: l, parentSchema: c, it: u } = e, { oneOf: d } = c;
        if (!u.opts.discriminator) throw new Error("discriminator: requires discriminator option");
        const p = l.propertyName;
        if ("string" != typeof p) throw new Error("discriminator: requires propertyName");
        if (l.mapping) throw new Error("discriminator: mapping is not supported");
        if (!d) throw new Error("discriminator: requires oneOf keyword");
        const h = t.let("valid", !1), m = t.const("tag", n._`${r}${(0, n.getProperty)(p)}`);
        function f(r) {
            const o = t.name("valid"), s = e.subschema({
                keyword: "oneOf",
                schemaProp: r
            }, o);
            return e.mergeEvaluated(s, n.Name), o;
        }
        t.if(n._`typeof ${m} == "string"`, ()=>(function() {
                const r = function() {
                    var e;
                    const t = {}, r = o(c);
                    let n = !0;
                    for(let t = 0; t < d.length; t++){
                        let c = d[t];
                        if ((null == c ? void 0 : c.$ref) && !(0, a.schemaHasRulesButRef)(c, u.self.RULES)) {
                            const e = c.$ref;
                            if (c = s.resolveRef.call(u.self, u.schemaEnv.root, u.baseId, e), c instanceof s.SchemaEnv && (c = c.schema), void 0 === c) throw new i.default(u.opts.uriResolver, u.baseId, e);
                        }
                        const h = null === (e = null == c ? void 0 : c.properties) || void 0 === e ? void 0 : e[p];
                        if ("object" != typeof h) throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${p}"`);
                        n = n && (r || o(c)), l(h, t);
                    }
                    if (!n) throw new Error(`discriminator: "${p}" must be required`);
                    return t;
                    function o({ required: e }) {
                        return Array.isArray(e) && e.includes(p);
                    }
                    function l(e, t) {
                        if (e.const) h(e.const, t);
                        else {
                            if (!e.enum) throw new Error(`discriminator: "properties/${p}" must have "const" or "enum"`);
                            for (const r of e.enum)h(r, t);
                        }
                    }
                    function h(e, r) {
                        if ("string" != typeof e || e in t) throw new Error(`discriminator: "${p}" values must be unique strings`);
                        t[e] = r;
                    }
                }();
                t.if(!1);
                for(const e in r)t.elseIf(n._`${m} === ${e}`), t.assign(h, f(r[e]));
                t.else(), e.error(!1, {
                    discrError: o.DiscrError.Mapping,
                    tag: m,
                    tagName: p
                }), t.endIf();
            })(), ()=>e.error(!1, {
                discrError: o.DiscrError.Tag,
                tag: m,
                tagName: p
            })), e.ok(h);
    }
};
exports.default = l;
