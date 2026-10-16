"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
});
const n = require("./module-8018.js"), o = require("./module-5183.js"), s = require("./module-9657.js"), i = require("./module-9244.js"), a = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: !0,
    error: {
        message: ({ params: { i: e, j: t } })=>o.str`must NOT have duplicate items (items ## ${t} and ${e} are identical)`,
        params: ({ params: { i: e, j: t } })=>o._`{i: ${e}, j: ${t}}`
    },
    code (e) {
        const { gen: t, data: r, $data: a, schema: c, parentSchema: u, schemaCode: l, it: d } = e;
        if (!a && !c) return;
        const p = t.let("valid"), f = u.items ? (0, n.getSchemaTypes)(u.items) : [];
        function h(s, i) {
            const a = t.name("item"), c = (0, n.checkDataTypes)(f, a, d.opts.strictNumbers, n.DataType.Wrong), u = t.const("indices", o._`{}`);
            t.for(o._`;${s}--;`, ()=>{
                t.let(a, o._`${r}[${s}]`), t.if(c, o._`continue`), f.length > 1 && t.if(o._`typeof ${a} == "string"`, o._`${a} += "_"`), t.if(o._`typeof ${u}[${a}] == "number"`, ()=>{
                    t.assign(i, o._`${u}[${a}]`), e.error(), t.assign(p, !1).break();
                }).code(o._`${u}[${a}] = ${s}`);
            });
        }
        function m(n, a) {
            const c = (0, s.useFunc)(t, i.default), u = t.name("outer");
            t.label(u).for(o._`;${n}--;`, ()=>t.for(o._`${a} = ${n}; ${a}--;`, ()=>t.if(o._`${c}(${r}[${n}], ${r}[${a}])`, ()=>{
                        e.error(), t.assign(p, !1).break(u);
                    })));
        }
        e.block$data(p, function() {
            const n = t.let("i", o._`${r}.length`), s = t.let("j");
            e.setParams({
                i: n,
                j: s
            }), t.assign(p, !0), t.if(o._`${n} > 1`, ()=>(f.length > 0 && !f.some((e)=>"object" === e || "array" === e) ? h : m)(n, s));
        }, o._`${l} === false`), e.ok(p);
    }
};
exports.default = a;
