"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
});
const n = require("./module-5183.js"), o = require("./module-9657.js"), s = {
    keyword: "if",
    schemaType: [
        "object",
        "boolean"
    ],
    trackErrors: !0,
    error: {
        message: ({ params: e })=>n.str`must match "${e.ifClause}" schema`,
        params: ({ params: e })=>n._`{failingKeyword: ${e.ifClause}}`
    },
    code (e) {
        const { gen: t, parentSchema: r, it: s } = e;
        void 0 === r.then && void 0 === r.else && (0, o.checkStrictMode)(s, '"if" without "then" and "else" is ignored');
        const a = i(s, "then"), c = i(s, "else");
        if (!a && !c) return;
        const u = t.let("valid", !0), l = t.name("_valid");
        if (function() {
            const t = e.subschema({
                keyword: "if",
                compositeRule: !0,
                createErrors: !1,
                allErrors: !1
            }, l);
            e.mergeEvaluated(t);
        }(), e.reset(), a && c) {
            const r = t.let("ifClause");
            e.setParams({
                ifClause: r
            }), t.if(l, d("then", r), d("else", r));
        } else a ? t.if(l, d("then")) : t.if((0, n.not)(l), d("else"));
        function d(r, o) {
            return ()=>{
                const s = e.subschema({
                    keyword: r
                }, l);
                t.assign(u, l), e.mergeValidEvaluated(s, u), o ? t.assign(o, n._`${r}`) : e.setParams({
                    ifClause: r
                });
            };
        }
        e.pass(u, ()=>e.error(!0));
    }
};
function i(e, t) {
    const r = e.schema[t];
    return void 0 !== r && !(0, o.alwaysValidSchema)(e, r);
}
exports.default = s;
