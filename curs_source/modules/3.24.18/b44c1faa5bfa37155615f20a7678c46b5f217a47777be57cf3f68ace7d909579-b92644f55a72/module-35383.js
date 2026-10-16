"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
});
const n = require("./module-95183.js"), s = require("./module-79657.js"), o = {
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
        const { gen: t, schema: r, parentSchema: o, data: i, it: a } = e;
        let c, l;
        const { minContains: u, maxContains: d } = o;
        a.opts.next ? (c = void 0 === u ? 1 : u, l = d) : c = 1;
        const p = t.const("len", n._`${i}.length`);
        if (e.setParams({
            min: c,
            max: l
        }), void 0 === l && 0 === c) return void (0, s.checkStrictMode)(a, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
        if (void 0 !== l && c > l) return (0, s.checkStrictMode)(a, '"minContains" > "maxContains" is always invalid'), void e.fail();
        if ((0, s.alwaysValidSchema)(a, r)) {
            let t = n._`${p} >= ${c}`;
            return void 0 !== l && (t = n._`${t} && ${p} <= ${l}`), void e.pass(t);
        }
        a.items = !0;
        const m = t.name("valid");
        function h() {
            const e = t.name("_valid"), r = t.let("count", 0);
            f(e, ()=>t.if(e, ()=>(function(e) {
                        t.code(n._`${e}++`), void 0 === l ? t.if(n._`${e} >= ${c}`, ()=>t.assign(m, !0).break()) : (t.if(n._`${e} > ${l}`, ()=>t.assign(m, !1).break()), 1 === c ? t.assign(m, !0) : t.if(n._`${e} >= ${c}`, ()=>t.assign(m, !0)));
                    })(r)));
        }
        function f(r, n) {
            t.forRange("i", 0, p, (t)=>{
                e.subschema({
                    keyword: "contains",
                    dataProp: t,
                    dataPropType: s.Type.Num,
                    compositeRule: !0
                }, r), n();
            });
        }
        void 0 === l && 1 === c ? f(m, ()=>t.if(m, ()=>t.break())) : 0 === c ? (t.let(m, !0), void 0 !== l && t.if(n._`${i}.length > 0`, h)) : (t.let(m, !1), h()), e.result(m, ()=>e.reset());
    }
};
exports.default = o;
