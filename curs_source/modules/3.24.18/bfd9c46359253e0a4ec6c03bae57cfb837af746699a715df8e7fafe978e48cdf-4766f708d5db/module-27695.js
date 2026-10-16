"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.validateKeywordUsage = exports.validSchemaType = exports.funcKeywordCode = exports.macroKeywordCode = void 0;
const n = require("./module-95183.js"), s = require("./module-44489.js"), o = require("./module-68255.js"), i = require("./module-34006.js");
function a(e) {
    const { gen: t, data: r, it: s } = e;
    t.if(s.parentData, ()=>t.assign(r, n._`${s.parentData}[${s.parentDataProperty}]`));
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
    const { gen: r, keyword: s, schema: o, parentSchema: i, it: a } = e, l = t.macro.call(a.self, o, i, a), u = c(r, s, l);
    !1 !== a.opts.validateSchema && a.self.validateSchema(l, !0);
    const d = r.name("valid");
    e.subschema({
        schema: l,
        schemaPath: n.nil,
        errSchemaPath: `${a.errSchemaPath}/${s}`,
        topSchemaRef: u,
        compositeRule: !0
    }, d), e.pass(d, ()=>e.error(!0));
}, exports.funcKeywordCode = function(e, t) {
    var r;
    const { gen: l, keyword: u, schema: d, parentSchema: p, $data: m, it: h } = e;
    !function({ schemaEnv: e }, t) {
        if (t.async && !e.$async) throw new Error("async keyword in sync schema");
    }(h, t);
    const f = !m && t.compile ? t.compile.call(h.self, d, p, h) : t.validate, g = c(l, u, f), y = l.let("valid");
    function w(r = t.async ? n._`await ` : n.nil) {
        const i = h.opts.passContext ? s.default.this : s.default.self, a = !("compile" in t && !m || !1 === t.schema);
        l.assign(y, n._`${r}${(0, o.callValidateCode)(e, g, i, a)}`, t.modifying);
    }
    function v(e) {
        var r;
        l.if((0, n.not)(null !== (r = t.valid) && void 0 !== r ? r : y), e);
    }
    e.block$data(y, function() {
        if (!1 === t.errors) w(), t.modifying && a(e), v(()=>e.error());
        else {
            const r = t.async ? function() {
                const e = l.let("ruleErrs", null);
                return l.try(()=>w(n._`await `), (t)=>l.assign(y, !1).if(n._`${t} instanceof ${h.ValidationError}`, ()=>l.assign(e, n._`${t}.errors`), ()=>l.throw(t))), e;
            }() : function() {
                const e = n._`${g}.errors`;
                return l.assign(e, null), w(n.nil), e;
            }();
            t.modifying && a(e), v(()=>(function(e, t) {
                    const { gen: r } = e;
                    r.if(n._`Array.isArray(${t})`, ()=>{
                        r.assign(s.default.vErrors, n._`${s.default.vErrors} === null ? ${t} : ${s.default.vErrors}.concat(${t})`).assign(s.default.errors, n._`${s.default.vErrors}.length`), (0, i.extendErrors)(e);
                    }, ()=>e.error());
                })(e, r));
        }
    }), e.ok(null !== (r = t.valid) && void 0 !== r ? r : y);
}, exports.validSchemaType = function(e, t, r = !1) {
    return !t.length || t.some((t)=>"array" === t ? Array.isArray(e) : "object" === t ? e && "object" == typeof e && !Array.isArray(e) : typeof e == t || r && void 0 === e);
}, exports.validateKeywordUsage = function({ schema: e, opts: t, self: r, errSchemaPath: n }, s, o) {
    if (Array.isArray(s.keyword) ? !s.keyword.includes(o) : s.keyword !== o) throw new Error("ajv implementation error");
    const i = s.dependencies;
    if (null == i ? void 0 : i.some((t)=>!Object.prototype.hasOwnProperty.call(e, t))) throw new Error(`parent schema must have dependencies of ${o}: ${i.join(",")}`);
    if (s.validateSchema) {
        if (!s.validateSchema(e[o])) {
            const e = `keyword "${o}" value is invalid at path "${n}": ` + r.errorsText(s.validateSchema.errors);
            if ("log" !== t.validateSchema) throw new Error(e);
            r.logger.error(e);
        }
    }
};
