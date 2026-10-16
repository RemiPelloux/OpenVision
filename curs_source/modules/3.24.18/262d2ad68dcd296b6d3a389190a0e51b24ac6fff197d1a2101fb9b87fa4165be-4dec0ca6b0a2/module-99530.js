"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
});
const n = require("./module-68255.js"), o = require("./module-95183.js"), s = require("./module-44489.js"), i = require("./module-79657.js"), a = {
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
        params: ({ params: e })=>o._`{additionalProperty: ${e.additionalProperty}}`
    },
    code (e) {
        const { gen: t, schema: r, parentSchema: a, data: l, errsCount: c, it: u } = e;
        if (!c) throw new Error("ajv implementation error");
        const { allErrors: d, opts: p } = u;
        if (u.props = !0, "all" !== p.removeAdditional && (0, i.alwaysValidSchema)(u, r)) return;
        const h = (0, n.allSchemaProperties)(a.properties), m = (0, n.allSchemaProperties)(a.patternProperties);
        function f(e) {
            t.code(o._`delete ${l}[${e}]`);
        }
        function g(n) {
            if ("all" === p.removeAdditional || p.removeAdditional && !1 === r) f(n);
            else {
                if (!1 === r) return e.setParams({
                    additionalProperty: n
                }), e.error(), void (d || t.break());
                if ("object" == typeof r && !(0, i.alwaysValidSchema)(u, r)) {
                    const r = t.name("valid");
                    "failing" === p.removeAdditional ? (y(n, r, !1), t.if((0, o.not)(r), ()=>{
                        e.reset(), f(n);
                    })) : (y(n, r), d || t.if((0, o.not)(r), ()=>t.break()));
                }
            }
        }
        function y(t, r, n) {
            const o = {
                keyword: "additionalProperties",
                dataProp: t,
                dataPropType: i.Type.Str
            };
            !1 === n && Object.assign(o, {
                compositeRule: !0,
                createErrors: !1,
                allErrors: !1
            }), e.subschema(o, r);
        }
        t.forIn("key", l, (r)=>{
            h.length || m.length ? t.if(function(r) {
                let s;
                if (h.length > 8) {
                    const e = (0, i.schemaRefOrVal)(u, a.properties, "properties");
                    s = (0, n.isOwnProperty)(t, e, r);
                } else s = h.length ? (0, o.or)(...h.map((e)=>o._`${r} === ${e}`)) : o.nil;
                return m.length && (s = (0, o.or)(s, ...m.map((t)=>o._`${(0, n.usePattern)(e, t)}.test(${r})`))), (0, o.not)(s);
            }(r), ()=>g(r)) : g(r);
        }), e.ok(o._`${c} === ${s.default.errors}`);
    }
};
exports.default = a;
