"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
});
const n = require("./module-5183.js"), o = require("./module-9657.js"), s = {
    keyword: "contains",
    type: "array",
    schemaType: [
        "object",
        "boolean"
    ],
    before: "uniqueItems",
    trackErrors: !0,
    error: {
        message: ({ params: { min: e, max: t } })=>void 0 === t ? n.str`must contain at least ${e} valid item(s)` : n.str`must contain at least ${e} and no more than ${t} valid item(s)`,
        params: ({ params: { min: e, max: t } })=>void 0 === t ? n._`{minContains: ${e}}` : n._`{minContains: ${e}, maxContains: ${t}}`
    },
    code (e) {
        const { gen: t, schema: r, parentSchema: s, data: i, it: a } = e;
        let c, u;
        const { minContains: l, maxContains: d } = s;
        a.opts.next ? (c = void 0 === l ? 1 : l, u = d) : c = 1;
        const p = t.const("len", n._`${i}.length`);
        if (e.setParams({
            min: c,
            max: u
        }), void 0 === u && 0 === c) return void (0, o.checkStrictMode)(a, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
        if (void 0 !== u && c > u) return (0, o.checkStrictMode)(a, '"minContains" > "maxContains" is always invalid'), void e.fail();
        if ((0, o.alwaysValidSchema)(a, r)) {
            let t = n._`${p} >= ${c}`;
            return void 0 !== u && (t = n._`${t} && ${p} <= ${u}`), void e.pass(t);
        }
        a.items = !0;
        const f = t.name("valid");
        function h() {
            const e = t.name("_valid"), r = t.let("count", 0);
            m(e, ()=>t.if(e, ()=>(function(e) {
                        t.code(n._`${e}++`), void 0 === u ? t.if(n._`${e} >= ${c}`, ()=>t.assign(f, !0).break()) : (t.if(n._`${e} > ${u}`, ()=>t.assign(f, !1).break()), 1 === c ? t.assign(f, !0) : t.if(n._`${e} >= ${c}`, ()=>t.assign(f, !0)));
                    })(r)));
        }
        function m(r, n) {
            t.forRange("i", 0, p, (t)=>{
                e.subschema({
                    keyword: "contains",
                    dataProp: t,
                    dataPropType: o.Type.Num,
                    compositeRule: !0
                }, r), n();
            });
        }
        void 0 === u && 1 === c ? m(f, ()=>t.if(f, ()=>t.break())) : 0 === c ? (t.let(f, !0), void 0 !== u && t.if(n._`${i}.length > 0`, h)) : (t.let(f, !1), h()), e.result(f, ()=>e.reset());
    }
};
exports.default = s;
