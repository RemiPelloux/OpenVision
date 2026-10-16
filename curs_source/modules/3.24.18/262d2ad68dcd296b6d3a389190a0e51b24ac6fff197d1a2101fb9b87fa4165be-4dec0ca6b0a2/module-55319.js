"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.callRef = exports.getValidate = void 0;
const n = require("./module-4989.js"), o = require("./module-68255.js"), s = require("./module-95183.js"), i = require("./module-44489.js"), a = require("./module-76257.js"), l = require("./module-79657.js"), c = {
    keyword: "$ref",
    schemaType: "string",
    code (e) {
        const { gen: t, schema: r, it: o } = e, { baseId: i, schemaEnv: l, validateName: c, opts: p, self: h } = o, { root: m } = l;
        if (("#" === r || "#/" === r) && i === m.baseId) return function() {
            if (l === m) return d(e, c, l, l.$async);
            const r = t.scopeValue("root", {
                ref: m
            });
            return d(e, s._`${r}.validate`, m, m.$async);
        }();
        const f = a.resolveRef.call(h, m, i, r);
        if (void 0 === f) throw new n.default(o.opts.uriResolver, i, r);
        return f instanceof a.SchemaEnv ? function(t) {
            const r = u(e, t);
            d(e, r, t, t.$async);
        }(f) : function(n) {
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
        }(f);
    }
};
function u(e, t) {
    const { gen: r } = e;
    return t.validate ? r.scopeValue("validate", {
        ref: t.validate
    }) : s._`${r.scopeValue("wrapper", {
        ref: t
    })}.validate`;
}
function d(e, t, r, n) {
    const { gen: a, it: c } = e, { allErrors: u, schemaEnv: d, opts: p } = c, h = p.passContext ? i.default.this : s.nil;
    function m(e) {
        const t = s._`${e}.errors`;
        a.assign(i.default.vErrors, s._`${i.default.vErrors} === null ? ${t} : ${i.default.vErrors}.concat(${t})`), a.assign(i.default.errors, s._`${i.default.vErrors}.length`);
    }
    function f(e) {
        var t;
        if (!c.opts.unevaluated) return;
        const n = null === (t = null == r ? void 0 : r.validate) || void 0 === t ? void 0 : t.evaluated;
        if (!0 !== c.props) if (n && !n.dynamicProps) void 0 !== n.props && (c.props = l.mergeEvaluated.props(a, n.props, c.props));
        else {
            const t = a.var("props", s._`${e}.evaluated.props`);
            c.props = l.mergeEvaluated.props(a, t, c.props, s.Name);
        }
        if (!0 !== c.items) if (n && !n.dynamicItems) void 0 !== n.items && (c.items = l.mergeEvaluated.items(a, n.items, c.items));
        else {
            const t = a.var("items", s._`${e}.evaluated.items`);
            c.items = l.mergeEvaluated.items(a, t, c.items, s.Name);
        }
    }
    n ? function() {
        if (!d.$async) throw new Error("async schema referenced by sync schema");
        const r = a.let("valid");
        a.try(()=>{
            a.code(s._`await ${(0, o.callValidateCode)(e, t, h)}`), f(t), u || a.assign(r, !0);
        }, (e)=>{
            a.if(s._`!(${e} instanceof ${c.ValidationError})`, ()=>a.throw(e)), m(e), u || a.assign(r, !1);
        }), e.ok(r);
    }() : e.result((0, o.callValidateCode)(e, t, h), ()=>f(t), ()=>m(t));
}
exports.getValidate = u, exports.callRef = d, exports.default = c;
