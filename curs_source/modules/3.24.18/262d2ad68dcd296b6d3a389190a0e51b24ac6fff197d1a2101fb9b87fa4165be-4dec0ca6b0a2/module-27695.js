"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.validateKeywordUsage = exports.validSchemaType = exports.funcKeywordCode = exports.macroKeywordCode = void 0;
const n = require("./module-95183.js"), o = require("./module-44489.js"), s = require("./module-68255.js"), i = require("./module-34006.js");
function a(e) {
    const { gen: t, data: r, it: o } = e;
    t.if(o.parentData, ()=>t.assign(r, n._`${o.parentData}[${o.parentDataProperty}]`));
}
function l(e, t, r) {
    if (void 0 === r) throw new Error(`keyword "${t}" failed to compile`);
    return e.scopeValue("keyword", "function" == typeof r ? {
        ref: r
    } : {
        ref: r,
        code: (0, n.stringify)(r)
    });
}
exports.macroKeywordCode = function(e, t) {
    const { gen: r, keyword: o, schema: s, parentSchema: i, it: a } = e, c = t.macro.call(a.self, s, i, a), u = l(r, o, c);
    !1 !== a.opts.validateSchema && a.self.validateSchema(c, !0);
    const d = r.name("valid");
    e.subschema({
        schema: c,
        schemaPath: n.nil,
        errSchemaPath: `${a.errSchemaPath}/${o}`,
        topSchemaRef: u,
        compositeRule: !0
    }, d), e.pass(d, ()=>e.error(!0));
}, exports.funcKeywordCode = function(e, t) {
    var r;
    const { gen: c, keyword: u, schema: d, parentSchema: p, $data: h, it: m } = e;
    !function({ schemaEnv: e }, t) {
        if (t.async && !e.$async) throw new Error("async keyword in sync schema");
    }(m, t);
    const f = !h && t.compile ? t.compile.call(m.self, d, p, m) : t.validate, g = l(c, u, f), y = c.let("valid");
    function v(r = t.async ? n._`await ` : n.nil) {
        const i = m.opts.passContext ? o.default.this : o.default.self, a = !("compile" in t && !h || !1 === t.schema);
        c.assign(y, n._`${r}${(0, s.callValidateCode)(e, g, i, a)}`, t.modifying);
    }
    function w(e) {
        var r;
        c.if((0, n.not)(null !== (r = t.valid) && void 0 !== r ? r : y), e);
    }
    e.block$data(y, function() {
        if (!1 === t.errors) v(), t.modifying && a(e), w(()=>e.error());
        else {
            const r = t.async ? function() {
                const e = c.let("ruleErrs", null);
                return c.try(()=>v(n._`await `), (t)=>c.assign(y, !1).if(n._`${t} instanceof ${m.ValidationError}`, ()=>c.assign(e, n._`${t}.errors`), ()=>c.throw(t))), e;
            }() : function() {
                const e = n._`${g}.errors`;
                return c.assign(e, null), v(n.nil), e;
            }();
            t.modifying && a(e), w(()=>(function(e, t) {
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
