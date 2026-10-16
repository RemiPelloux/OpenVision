"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
});
const n = require("./module-5183.js"), o = require("./module-3770.js"), s = require("./module-6257.js"), i = require("./module-4989.js"), a = require("./module-9657.js"), c = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: {
        message: ({ params: { discrError: e, tagName: t } })=>e === o.DiscrError.Tag ? `tag "${t}" must be string` : `value of tag "${t}" must be in oneOf`,
        params: ({ params: { discrError: e, tag: t, tagName: r } })=>n._`{error: ${e}, tag: ${r}, tagValue: ${t}}`
    },
    code (e) {
        const { gen: t, data: r, schema: c, parentSchema: u, it: l } = e, { oneOf: d } = u;
        if (!l.opts.discriminator) throw new Error("discriminator: requires discriminator option");
        const p = c.propertyName;
        if ("string" != typeof p) throw new Error("discriminator: requires propertyName");
        if (c.mapping) throw new Error("discriminator: mapping is not supported");
        if (!d) throw new Error("discriminator: requires oneOf keyword");
        const f = t.let("valid", !1), h = t.const("tag", n._`${r}${(0, n.getProperty)(p)}`);
        function m(r) {
            const o = t.name("valid"), s = e.subschema({
                keyword: "oneOf",
                schemaProp: r
            }, o);
            return e.mergeEvaluated(s, n.Name), o;
        }
        t.if(n._`typeof ${h} == "string"`, ()=>(function() {
                const r = function() {
                    var e;
                    const t = {}, r = o(u);
                    let n = !0;
                    for(let t = 0; t < d.length; t++){
                        let u = d[t];
                        if ((null == u ? void 0 : u.$ref) && !(0, a.schemaHasRulesButRef)(u, l.self.RULES)) {
                            const e = u.$ref;
                            if (u = s.resolveRef.call(l.self, l.schemaEnv.root, l.baseId, e), u instanceof s.SchemaEnv && (u = u.schema), void 0 === u) throw new i.default(l.opts.uriResolver, l.baseId, e);
                        }
                        const f = null === (e = null == u ? void 0 : u.properties) || void 0 === e ? void 0 : e[p];
                        if ("object" != typeof f) throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${p}"`);
                        n = n && (r || o(u)), c(f, t);
                    }
                    if (!n) throw new Error(`discriminator: "${p}" must be required`);
                    return t;
                    function o({ required: e }) {
                        return Array.isArray(e) && e.includes(p);
                    }
                    function c(e, t) {
                        if (e.const) f(e.const, t);
                        else {
                            if (!e.enum) throw new Error(`discriminator: "properties/${p}" must have "const" or "enum"`);
                            for (const r of e.enum)f(r, t);
                        }
                    }
                    function f(e, r) {
                        if ("string" != typeof e || e in t) throw new Error(`discriminator: "${p}" values must be unique strings`);
                        t[e] = r;
                    }
                }();
                t.if(!1);
                for(const e in r)t.elseIf(n._`${h} === ${e}`), t.assign(f, m(r[e]));
                t.else(), e.error(!1, {
                    discrError: o.DiscrError.Mapping,
                    tag: h,
                    tagName: p
                }), t.endIf();
            })(), ()=>e.error(!1, {
                discrError: o.DiscrError.Tag,
                tag: h,
                tagName: p
            })), e.ok(f);
    }
};
exports.default = c;
