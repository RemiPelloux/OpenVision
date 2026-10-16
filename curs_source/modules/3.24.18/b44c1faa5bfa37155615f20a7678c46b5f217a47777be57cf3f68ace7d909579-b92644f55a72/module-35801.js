"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
});
const n = require("./module-95183.js"), s = require("./module-79657.js"), o = {
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
        const { gen: t, parentSchema: r, it: o } = e;
        void 0 === r.then && void 0 === r.else && (0, s.checkStrictMode)(o, '"if" without "then" and "else" is ignored');
        const a = i(o, "then"), c = i(o, "else");
        if (!a && !c) return;
        const l = t.let("valid", !0), u = t.name("_valid");
        if (function() {
            const t = e.subschema({
                keyword: "if",
                compositeRule: !0,
                createErrors: !1,
                allErrors: !1
            }, u);
            e.mergeEvaluated(t);
        }(), e.reset(), a && c) {
            const r = t.let("ifClause");
            e.setParams({
                ifClause: r
            }), t.if(u, d("then", r), d("else", r));
        } else a ? t.if(u, d("then")) : t.if((0, n.not)(u), d("else"));
        function d(r, s) {
            return ()=>{
                const o = e.subschema({
                    keyword: r
                }, u);
                t.assign(l, u), e.mergeValidEvaluated(o, l), s ? t.assign(s, n._`${r}`) : e.setParams({
                    ifClause: r
                });
            };
        }
        e.pass(l, ()=>e.error(!0));
    }
};
function i(e, t) {
    const r = e.schema[t];
    return void 0 !== r && !(0, s.alwaysValidSchema)(e, r);
}
exports.default = o;
