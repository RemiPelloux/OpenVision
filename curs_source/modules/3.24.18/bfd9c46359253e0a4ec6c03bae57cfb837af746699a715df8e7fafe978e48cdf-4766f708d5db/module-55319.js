"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.callRef = exports.getValidate = void 0;
const n = require("./module-4989.js"), s = require("./module-68255.js"), o = require("./module-95183.js"), i = require("./module-44489.js"), a = require("./module-76257.js"), c = require("./module-79657.js"), l = {
    keyword: "$ref",
    schemaType: "string",
    code (e) {
        const { gen: t, schema: r, it: s } = e, { baseId: i, schemaEnv: c, validateName: l, opts: p, self: m } = s, { root: h } = c;
        if (("#" === r || "#/" === r) && i === h.baseId) return function() {
            if (c === h) return d(e, l, c, c.$async);
            const r = t.scopeValue("root", {
                ref: h
            });
            return d(e, o._`${r}.validate`, h, h.$async);
        }();
        const f = a.resolveRef.call(m, h, i, r);
        if (void 0 === f) throw new n.default(s.opts.uriResolver, i, r);
        return f instanceof a.SchemaEnv ? function(t) {
            const r = u(e, t);
            d(e, r, t, t.$async);
        }(f) : function(n) {
            const s = t.scopeValue("schema", !0 === p.code.source ? {
                ref: n,
                code: (0, o.stringify)(n)
            } : {
                ref: n
            }), i = t.name("valid"), a = e.subschema({
                schema: n,
                dataTypes: [],
                schemaPath: o.nil,
                topSchemaRef: s,
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
    }) : o._`${r.scopeValue("wrapper", {
        ref: t
    })}.validate`;
}
function d(e, t, r, n) {
    const { gen: a, it: l } = e, { allErrors: u, schemaEnv: d, opts: p } = l, m = p.passContext ? i.default.this : o.nil;
    function h(e) {
        const t = o._`${e}.errors`;
        a.assign(i.default.vErrors, o._`${i.default.vErrors} === null ? ${t} : ${i.default.vErrors}.concat(${t})`), a.assign(i.default.errors, o._`${i.default.vErrors}.length`);
    }
    function f(e) {
        var t;
        if (!l.opts.unevaluated) return;
        const n = null === (t = null == r ? void 0 : r.validate) || void 0 === t ? void 0 : t.evaluated;
        if (!0 !== l.props) if (n && !n.dynamicProps) void 0 !== n.props && (l.props = c.mergeEvaluated.props(a, n.props, l.props));
        else {
            const t = a.var("props", o._`${e}.evaluated.props`);
            l.props = c.mergeEvaluated.props(a, t, l.props, o.Name);
        }
        if (!0 !== l.items) if (n && !n.dynamicItems) void 0 !== n.items && (l.items = c.mergeEvaluated.items(a, n.items, l.items));
        else {
            const t = a.var("items", o._`${e}.evaluated.items`);
            l.items = c.mergeEvaluated.items(a, t, l.items, o.Name);
        }
    }
    n ? function() {
        if (!d.$async) throw new Error("async schema referenced by sync schema");
        const r = a.let("valid");
        a.try(()=>{
            a.code(o._`await ${(0, s.callValidateCode)(e, t, m)}`), f(t), u || a.assign(r, !0);
        }, (e)=>{
            a.if(o._`!(${e} instanceof ${l.ValidationError})`, ()=>a.throw(e)), h(e), u || a.assign(r, !1);
        }), e.ok(r);
    }() : e.result((0, s.callValidateCode)(e, t, m), ()=>f(t), ()=>h(t));
}
exports.getValidate = u, exports.callRef = d, exports.default = l;
