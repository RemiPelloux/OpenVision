"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.callRef = exports.getValidate = void 0;
const n = require("./module-4989.js"), o = require("./module-8255.js"), s = require("./module-5183.js"), i = require("./module-4489.js"), a = require("./module-6257.js"), c = require("./module-9657.js"), u = {
    keyword: "$ref",
    schemaType: "string",
    code (e) {
        const { gen: t, schema: r, it: o } = e, { baseId: i, schemaEnv: c, validateName: u, opts: p, self: f } = o, { root: h } = c;
        if (("#" === r || "#/" === r) && i === h.baseId) return function() {
            if (c === h) return d(e, u, c, c.$async);
            const r = t.scopeValue("root", {
                ref: h
            });
            return d(e, s._`${r}.validate`, h, h.$async);
        }();
        const m = a.resolveRef.call(f, h, i, r);
        if (void 0 === m) throw new n.default(o.opts.uriResolver, i, r);
        return m instanceof a.SchemaEnv ? function(t) {
            const r = l(e, t);
            d(e, r, t, t.$async);
        }(m) : function(n) {
            const o = t.scopeValue("schema", !0 === p.code.source ? {
                ref: n,
                code: (0, s.stringify)(n)
            } : {
                ref: n
            }), i = t.name("valid"), a = e.subschema({
                schema: n,
                dataTypes: [],
                schemaPath: s.nil,
                topSchemaRef: o,
                errSchemaPath: r
            }, i);
            e.mergeEvaluated(a), e.ok(i);
        }(m);
    }
};
function l(e, t) {
    const { gen: r } = e;
    return t.validate ? r.scopeValue("validate", {
        ref: t.validate
    }) : s._`${r.scopeValue("wrapper", {
        ref: t
    })}.validate`;
}
function d(e, t, r, n) {
    const { gen: a, it: u } = e, { allErrors: l, schemaEnv: d, opts: p } = u, f = p.passContext ? i.default.this : s.nil;
    function h(e) {
        const t = s._`${e}.errors`;
        a.assign(i.default.vErrors, s._`${i.default.vErrors} === null ? ${t} : ${i.default.vErrors}.concat(${t})`), a.assign(i.default.errors, s._`${i.default.vErrors}.length`);
    }
    function m(e) {
        var t;
        if (!u.opts.unevaluated) return;
        const n = null === (t = null == r ? void 0 : r.validate) || void 0 === t ? void 0 : t.evaluated;
        if (!0 !== u.props) if (n && !n.dynamicProps) void 0 !== n.props && (u.props = c.mergeEvaluated.props(a, n.props, u.props));
        else {
            const t = a.var("props", s._`${e}.evaluated.props`);
            u.props = c.mergeEvaluated.props(a, t, u.props, s.Name);
        }
        if (!0 !== u.items) if (n && !n.dynamicItems) void 0 !== n.items && (u.items = c.mergeEvaluated.items(a, n.items, u.items));
        else {
            const t = a.var("items", s._`${e}.evaluated.items`);
            u.items = c.mergeEvaluated.items(a, t, u.items, s.Name);
        }
    }
    n ? function() {
        if (!d.$async) throw new Error("async schema referenced by sync schema");
        const r = a.let("valid");
        a.try(()=>{
            a.code(s._`await ${(0, o.callValidateCode)(e, t, f)}`), m(t), l || a.assign(r, !0);
        }, (e)=>{
            a.if(s._`!(${e} instanceof ${u.ValidationError})`, ()=>a.throw(e)), h(e), l || a.assign(r, !1);
        }), e.ok(r);
    }() : e.result((0, o.callValidateCode)(e, t, f), ()=>m(t), ()=>h(t));
}
exports.getValidate = l, exports.callRef = d, exports.default = u;
