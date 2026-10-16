"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.validateKeywordUsage = exports.validSchemaType = exports.funcKeywordCode = exports.macroKeywordCode = void 0;
const n = require("./module-5183.js"), o = require("./module-4489.js"), s = require("./module-8255.js"), i = require("./module-4006.js");
function a(e) {
    const { gen: t, data: r, it: o } = e;
    t.if(o.parentData, ()=>t.assign(r, n._`${o.parentData}[${o.parentDataProperty}]`));
}
function c(e, t, r) {
    if (void 0 === r) throw new Error(`keyword "${t}" failed to compile`);
    return e.scopeValue("keyword", "function" == typeof r ? {
        ref: r
    } : {
        ref: r,
        code: (0, n.stringify)(r)
    });
}
exports.macroKeywordCode = function(e, t) {
    const { gen: r, keyword: o, schema: s, parentSchema: i, it: a } = e, u = t.macro.call(a.self, s, i, a), l = c(r, o, u);
    !1 !== a.opts.validateSchema && a.self.validateSchema(u, !0);
    const d = r.name("valid");
    e.subschema({
        schema: u,
        schemaPath: n.nil,
        errSchemaPath: `${a.errSchemaPath}/${o}`,
        topSchemaRef: l,
        compositeRule: !0
    }, d), e.pass(d, ()=>e.error(!0));
}, exports.funcKeywordCode = function(e, t) {
    var r;
    const { gen: u, keyword: l, schema: d, parentSchema: p, $data: f, it: h } = e;
    !function({ schemaEnv: e }, t) {
        if (t.async && !e.$async) throw new Error("async keyword in sync schema");
    }(h, t);
    const m = !f && t.compile ? t.compile.call(h.self, d, p, h) : t.validate, g = c(u, l, m), y = u.let("valid");
    function _(r = t.async ? n._`await ` : n.nil) {
        const i = h.opts.passContext ? o.default.this : o.default.self, a = !("compile" in t && !f || !1 === t.schema);
        u.assign(y, n._`${r}${(0, s.callValidateCode)(e, g, i, a)}`, t.modifying);
    }
    function v(e) {
        var r;
        u.if((0, n.not)(null !== (r = t.valid) && void 0 !== r ? r : y), e);
    }
    e.block$data(y, function() {
        if (!1 === t.errors) _(), t.modifying && a(e), v(()=>e.error());
        else {
            const r = t.async ? function() {
                const e = u.let("ruleErrs", null);
                return u.try(()=>_(n._`await `), (t)=>u.assign(y, !1).if(n._`${t} instanceof ${h.ValidationError}`, ()=>u.assign(e, n._`${t}.errors`), ()=>u.throw(t))), e;
            }() : function() {
                const e = n._`${g}.errors`;
                return u.assign(e, null), _(n.nil), e;
            }();
            t.modifying && a(e), v(()=>(function(e, t) {
                    const { gen: r } = e;
                    r.if(n._`Array.isArray(${t})`, ()=>{
                        r.assign(o.default.vErrors, n._`${o.default.vErrors} === null ? ${t} : ${o.default.vErrors}.concat(${t})`).assign(o.default.errors, n._`${o.default.vErrors}.length`), (0, i.extendErrors)(e);
                    }, ()=>e.error());
                })(e, r));
        }
    }), e.ok(null !== (r = t.valid) && void 0 !== r ? r : y);
}, exports.validSchemaType = function(e, t, r = !1) {
    return !t.length || t.some((t)=>"array" === t ? Array.isArray(e) : "object" === t ? e && "object" == typeof e && !Array.isArray(e) : typeof e == t || r && void 0 === e);
}, exports.validateKeywordUsage = function({ schema: e, opts: t, self: r, errSchemaPath: n }, o, s) {
    if (Array.isArray(o.keyword) ? !o.keyword.includes(s) : o.keyword !== s) throw new Error("ajv implementation error");
    const i = o.dependencies;
    if (null == i ? void 0 : i.some((t)=>!Object.prototype.hasOwnProperty.call(e, t))) throw new Error(`parent schema must have dependencies of ${s}: ${i.join(",")}`);
    if (o.validateSchema) {
        if (!o.validateSchema(e[s])) {
            const e = `keyword "${s}" value is invalid at path "${n}": ` + r.errorsText(o.validateSchema.errors);
            if ("log" !== t.validateSchema) throw new Error(e);
            r.logger.error(e);
        }
    }
};
