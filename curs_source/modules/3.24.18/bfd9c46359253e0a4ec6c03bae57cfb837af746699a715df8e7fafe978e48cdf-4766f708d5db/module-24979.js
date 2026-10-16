"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
});
const n = require("./module-21188.js"), s = require("./module-68255.js"), o = require("./module-79657.js"), i = require("./module-99530.js"), a = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code (e) {
        const { gen: t, schema: r, parentSchema: a, data: c, it: l } = e;
        "all" === l.opts.removeAdditional && void 0 === a.additionalProperties && i.default.code(new n.KeywordCxt(l, i.default, "additionalProperties"));
        const u = (0, s.allSchemaProperties)(r);
        for (const e of u)l.definedProperties.add(e);
        l.opts.unevaluated && u.length && !0 !== l.props && (l.props = o.mergeEvaluated.props(t, (0, o.toHash)(u), l.props));
        const d = u.filter((e)=>!(0, o.alwaysValidSchema)(l, r[e]));
        if (0 === d.length) return;
        const p = t.name("valid");
        for (const r of d)m(r) ? h(r) : (t.if((0, s.propertyInData)(t, c, r, l.opts.ownProperties)), h(r), l.allErrors || t.else().var(p, !0), t.endIf()), e.it.definedProperties.add(r), e.ok(p);
        function m(e) {
            return l.opts.useDefaults && !l.compositeRule && void 0 !== r[e].default;
        }
        function h(t) {
            e.subschema({
                keyword: "properties",
                schemaProp: t,
                dataProp: t
            }, p);
        }
    }
};
exports.default = a;
