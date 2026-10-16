"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
});
const n = require("./module-1188.js"), o = require("./module-8255.js"), s = require("./module-9657.js"), i = require("./module-9530.js"), a = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code (e) {
        const { gen: t, schema: r, parentSchema: a, data: c, it: u } = e;
        "all" === u.opts.removeAdditional && void 0 === a.additionalProperties && i.default.code(new n.KeywordCxt(u, i.default, "additionalProperties"));
        const l = (0, o.allSchemaProperties)(r);
        for (const e of l)u.definedProperties.add(e);
        u.opts.unevaluated && l.length && !0 !== u.props && (u.props = s.mergeEvaluated.props(t, (0, s.toHash)(l), u.props));
        const d = l.filter((e)=>!(0, s.alwaysValidSchema)(u, r[e]));
        if (0 === d.length) return;
        const p = t.name("valid");
        for (const r of d)f(r) ? h(r) : (t.if((0, o.propertyInData)(t, c, r, u.opts.ownProperties)), h(r), u.allErrors || t.else().var(p, !0), t.endIf()), e.it.definedProperties.add(r), e.ok(p);
        function f(e) {
            return u.opts.useDefaults && !u.compositeRule && void 0 !== r[e].default;
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
