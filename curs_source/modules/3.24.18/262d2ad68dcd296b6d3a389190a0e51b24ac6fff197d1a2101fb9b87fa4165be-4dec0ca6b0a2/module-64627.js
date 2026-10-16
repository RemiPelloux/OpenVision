"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
});
const n = require("./module-98018.js"), o = require("./module-95183.js"), s = require("./module-79657.js"), i = require("./module-79244.js"), a = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: !0,
    error: {
        message: ({ params: { i: e, j: t } })=>o.str`must NOT have duplicate items (items ## ${t} and ${e} are identical)`,
        params: ({ params: { i: e, j: t } })=>o._`{i: ${e}, j: ${t}}`
    },
    code (e) {
        const { gen: t, data: r, $data: a, schema: l, parentSchema: c, schemaCode: u, it: d } = e;
        if (!a && !l) return;
        const p = t.let("valid"), h = c.items ? (0, n.getSchemaTypes)(c.items) : [];
        function m(s, i) {
            const a = t.name("item"), l = (0, n.checkDataTypes)(h, a, d.opts.strictNumbers, n.DataType.Wrong), c = t.const("indices", o._`{}`);
            t.for(o._`;${s}--;`, ()=>{
                t.let(a, o._`${r}[${s}]`), t.if(l, o._`continue`), h.length > 1 && t.if(o._`typeof ${a} == "string"`, o._`${a} += "_"`), t.if(o._`typeof ${c}[${a}] == "number"`, ()=>{
                    t.assign(i, o._`${c}[${a}]`), e.error(), t.assign(p, !1).break();
                }).code(o._`${c}[${a}] = ${s}`);
            });
        }
        function f(n, a) {
            const l = (0, s.useFunc)(t, i.default), c = t.name("outer");
            t.label(c).for(o._`;${n}--;`, ()=>t.for(o._`${a} = ${n}; ${a}--;`, ()=>t.if(o._`${l}(${r}[${n}], ${r}[${a}])`, ()=>{
                        e.error(), t.assign(p, !1).break(c);
                    })));
        }
        e.block$data(p, function() {
            const n = t.let("i", o._`${r}.length`), s = t.let("j");
            e.setParams({
                i: n,
                j: s
            }), t.assign(p, !0), t.if(o._`${n} > 1`, ()=>(h.length > 0 && !h.some((e)=>"object" === e || "array" === e) ? m : f)(n, s));
        }, o._`${u} === false`), e.ok(p);
    }
};
exports.default = a;
