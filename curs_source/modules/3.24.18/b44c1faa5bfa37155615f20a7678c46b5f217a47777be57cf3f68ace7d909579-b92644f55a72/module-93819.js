"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
});
const n = require("./module-95183.js"), s = require("./module-83770.js"), o = require("./module-76257.js"), i = require("./module-4989.js"), a = require("./module-79657.js"), c = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: {
        message: ({ params: { discrError: e, tagName: t } })=>e === s.DiscrError.Tag ? `tag "${t}" must be string` : `value of tag "${t}" must be in oneOf`,
        params: ({ params: { discrError: e, tag: t, tagName: r } })=>n._`{error: ${e}, tag: ${r}, tagValue: ${t}}`
    },
    code (e) {
        const { gen: t, data: r, schema: c, parentSchema: l, it: u } = e, { oneOf: d } = l;
        if (!u.opts.discriminator) throw new Error("discriminator: requires discriminator option");
        const p = c.propertyName;
        if ("string" != typeof p) throw new Error("discriminator: requires propertyName");
        if (c.mapping) throw new Error("discriminator: mapping is not supported");
        if (!d) throw new Error("discriminator: requires oneOf keyword");
        const m = t.let("valid", !1), h = t.const("tag", n._`${r}${(0, n.getProperty)(p)}`);
        function f(r) {
            const s = t.name("valid"), o = e.subschema({
                keyword: "oneOf",
                schemaProp: r
            }, s);
            return e.mergeEvaluated(o, n.Name), s;
        }
        t.if(n._`typeof ${h} == "string"`, ()=>(function() {
                const r = function() {
                    var e;
                    const t = {}, r = s(l);
                    let n = !0;
                    for(let t = 0; t < d.length; t++){
                        let l = d[t];
                        if ((null == l ? void 0 : l.$ref) && !(0, a.schemaHasRulesButRef)(l, u.self.RULES)) {
                            const e = l.$ref;
                            if (l = o.resolveRef.call(u.self, u.schemaEnv.root, u.baseId, e), l instanceof o.SchemaEnv && (l = l.schema), void 0 === l) throw new i.default(u.opts.uriResolver, u.baseId, e);
                        }
                        const m = null === (e = null == l ? void 0 : l.properties) || void 0 === e ? void 0 : e[p];
                        if ("object" != typeof m) throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${p}"`);
                        n = n && (r || s(l)), c(m, t);
                    }
                    if (!n) throw new Error(`discriminator: "${p}" must be required`);
                    return t;
                    function s({ required: e }) {
                        return Array.isArray(e) && e.includes(p);
                    }
                    function c(e, t) {
                        if (e.const) m(e.const, t);
                        else {
                            if (!e.enum) throw new Error(`discriminator: "properties/${p}" must have "const" or "enum"`);
                            for (const r of e.enum)m(r, t);
                        }
                    }
                    function m(e, r) {
                        if ("string" != typeof e || e in t) throw new Error(`discriminator: "${p}" values must be unique strings`);
                        t[e] = r;
                    }
                }();
                t.if(!1);
                for(const e in r)t.elseIf(n._`${h} === ${e}`), t.assign(m, f(r[e]));
                t.else(), e.error(!1, {
                    discrError: s.DiscrError.Mapping,
                    tag: h,
                    tagName: p
                }), t.endIf();
            })(), ()=>e.error(!1, {
                discrError: s.DiscrError.Tag,
                tag: h,
                tagName: p
            })), e.ok(m);
    }
};
exports.default = c;
