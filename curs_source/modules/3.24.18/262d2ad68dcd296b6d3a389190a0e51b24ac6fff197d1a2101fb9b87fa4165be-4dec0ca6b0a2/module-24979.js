"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
});
const n = require("./module-21188.js"), o = require("./module-68255.js"), s = require("./module-79657.js"), i = require("./module-99530.js"), a = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code (e) {
        const { gen: t, schema: r, parentSchema: a, data: l, it: c } = e;
        "all" === c.opts.removeAdditional && void 0 === a.additionalProperties && i.default.code(new n.KeywordCxt(c, i.default, "additionalProperties"));
        const u = (0, o.allSchemaProperties)(r);
        for (const e of u)c.definedProperties.add(e);
        c.opts.unevaluated && u.length && !0 !== c.props && (c.props = s.mergeEvaluated.props(t, (0, s.toHash)(u), c.props));
        const d = u.filter((e)=>!(0, s.alwaysValidSchema)(c, r[e]));
        if (0 === d.length) return;
        const p = t.name("valid");
        for (const r of d)h(r) ? m(r) : (t.if((0, o.propertyInData)(t, l, r, c.opts.ownProperties)), m(r), c.allErrors || t.else().var(p, !0), t.endIf()), e.it.definedProperties.add(r), e.ok(p);
        function h(e) {
            return c.opts.useDefaults && !c.compositeRule && void 0 !== r[e].default;
        }
        function m(t) {
            e.subschema({
                keyword: "properties",
                schemaProp: t,
                dataProp: t
            }, p);
        }
    }
};
exports.default = a;
