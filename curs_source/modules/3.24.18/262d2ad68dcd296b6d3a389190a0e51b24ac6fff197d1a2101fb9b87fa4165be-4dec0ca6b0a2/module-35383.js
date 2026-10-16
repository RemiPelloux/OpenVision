"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
});
const n = require("./module-95183.js"), o = require("./module-79657.js"), s = {
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
        let l, c;
        const { minContains: u, maxContains: d } = s;
        a.opts.next ? (l = void 0 === u ? 1 : u, c = d) : l = 1;
        const p = t.const("len", n._`${i}.length`);
        if (e.setParams({
            min: l,
            max: c
        }), void 0 === c && 0 === l) return void (0, o.checkStrictMode)(a, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
        if (void 0 !== c && l > c) return (0, o.checkStrictMode)(a, '"minContains" > "maxContains" is always invalid'), void e.fail();
        if ((0, o.alwaysValidSchema)(a, r)) {
            let t = n._`${p} >= ${l}`;
            return void 0 !== c && (t = n._`${t} && ${p} <= ${c}`), void e.pass(t);
        }
        a.items = !0;
        const h = t.name("valid");
        function m() {
            const e = t.name("_valid"), r = t.let("count", 0);
            f(e, ()=>t.if(e, ()=>(function(e) {
                        t.code(n._`${e}++`), void 0 === c ? t.if(n._`${e} >= ${l}`, ()=>t.assign(h, !0).break()) : (t.if(n._`${e} > ${c}`, ()=>t.assign(h, !1).break()), 1 === l ? t.assign(h, !0) : t.if(n._`${e} >= ${l}`, ()=>t.assign(h, !0)));
                    })(r)));
        }
        function f(r, n) {
            t.forRange("i", 0, p, (t)=>{
                e.subschema({
                    keyword: "contains",
                    dataProp: t,
                    dataPropType: o.Type.Num,
                    compositeRule: !0
                }, r), n();
            });
        }
        void 0 === c && 1 === l ? f(h, ()=>t.if(h, ()=>t.break())) : 0 === l ? (t.let(h, !0), void 0 !== c && t.if(n._`${i}.length > 0`, m)) : (t.let(h, !1), m()), e.result(h, ()=>e.reset());
    }
};
exports.default = s;
