"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
});
const n = require("./module-68255.js"), s = require("./module-95183.js"), o = require("./module-44489.js"), i = require("./module-79657.js"), a = {
    keyword: "additionalProperties",
    type: [
        "object"
    ],
    schemaType: [
        "boolean",
        "object"
    ],
    allowUndefined: !0,
    trackErrors: !0,
    error: {
        message: "must NOT have additional properties",
        params: ({ params: e })=>s._`{additionalProperty: ${e.additionalProperty}}`
    },
    code (e) {
        const { gen: t, schema: r, parentSchema: a, data: c, errsCount: l, it: u } = e;
        if (!l) throw new Error("ajv implementation error");
        const { allErrors: d, opts: p } = u;
        if (u.props = !0, "all" !== p.removeAdditional && (0, i.alwaysValidSchema)(u, r)) return;
        const m = (0, n.allSchemaProperties)(a.properties), h = (0, n.allSchemaProperties)(a.patternProperties);
        function f(e) {
            t.code(s._`delete ${c}[${e}]`);
        }
        function g(n) {
            if ("all" === p.removeAdditional || p.removeAdditional && !1 === r) f(n);
            else {
                if (!1 === r) return e.setParams({
                    additionalProperty: n
                }), e.error(), void (d || t.break());
                if ("object" == typeof r && !(0, i.alwaysValidSchema)(u, r)) {
                    const r = t.name("valid");
                    "failing" === p.removeAdditional ? (y(n, r, !1), t.if((0, s.not)(r), ()=>{
                        e.reset(), f(n);
                    })) : (y(n, r), d || t.if((0, s.not)(r), ()=>t.break()));
                }
            }
        }
        function y(t, r, n) {
            const s = {
                keyword: "additionalProperties",
                dataProp: t,
                dataPropType: i.Type.Str
            };
            !1 === n && Object.assign(s, {
                compositeRule: !0,
                createErrors: !1,
                allErrors: !1
            }), e.subschema(s, r);
        }
        t.forIn("key", c, (r)=>{
            m.length || h.length ? t.if(function(r) {
                let o;
                if (m.length > 8) {
                    const e = (0, i.schemaRefOrVal)(u, a.properties, "properties");
                    o = (0, n.isOwnProperty)(t, e, r);
                } else o = m.length ? (0, s.or)(...m.map((e)=>s._`${r} === ${e}`)) : s.nil;
                return h.length && (o = (0, s.or)(o, ...h.map((t)=>s._`${(0, n.usePattern)(e, t)}.test(${r})`))), (0, s.not)(o);
            }(r), ()=>g(r)) : g(r);
        }), e.ok(s._`${l} === ${o.default.errors}`);
    }
};
exports.default = a;
