"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
});
const n = require("./module-98018.js"), s = require("./module-95183.js"), o = require("./module-79657.js"), i = require("./module-79244.js"), a = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: !0,
    error: {
        message: ({ params: { i: e, j: t } })=>s.str`must NOT have duplicate items (items ## ${t} and ${e} are identical)`,
        params: ({ params: { i: e, j: t } })=>s._`{i: ${e}, j: ${t}}`
    },
    code (e) {
        const { gen: t, data: r, $data: a, schema: c, parentSchema: l, schemaCode: u, it: d } = e;
        if (!a && !c) return;
        const p = t.let("valid"), m = l.items ? (0, n.getSchemaTypes)(l.items) : [];
        function h(o, i) {
            const a = t.name("item"), c = (0, n.checkDataTypes)(m, a, d.opts.strictNumbers, n.DataType.Wrong), l = t.const("indices", s._`{}`);
            t.for(s._`;${o}--;`, ()=>{
                t.let(a, s._`${r}[${o}]`), t.if(c, s._`continue`), m.length > 1 && t.if(s._`typeof ${a} == "string"`, s._`${a} += "_"`), t.if(s._`typeof ${l}[${a}] == "number"`, ()=>{
                    t.assign(i, s._`${l}[${a}]`), e.error(), t.assign(p, !1).break();
                }).code(s._`${l}[${a}] = ${o}`);
            });
        }
        function f(n, a) {
            const c = (0, o.useFunc)(t, i.default), l = t.name("outer");
            t.label(l).for(s._`;${n}--;`, ()=>t.for(s._`${a} = ${n}; ${a}--;`, ()=>t.if(s._`${c}(${r}[${n}], ${r}[${a}])`, ()=>{
                        e.error(), t.assign(p, !1).break(l);
                    })));
        }
        e.block$data(p, function() {
            const n = t.let("i", s._`${r}.length`), o = t.let("j");
            e.setParams({
                i: n,
                j: o
            }), t.assign(p, !0), t.if(s._`${n} > 1`, ()=>(m.length > 0 && !m.some((e)=>"object" === e || "array" === e) ? h : f)(n, o));
        }, s._`${u} === false`), e.ok(p);
    }
};
exports.default = a;
