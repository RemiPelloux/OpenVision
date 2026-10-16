"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.extendErrors = exports.resetErrorsCount = exports.reportExtraError = exports.reportError = exports.keyword$DataError = exports.keywordError = void 0;
const n = require("./module-5183.js"), o = require("./module-9657.js"), s = require("./module-4489.js");
function i(e, t) {
    const r = e.const("err", t);
    e.if(n._`${s.default.vErrors} === null`, ()=>e.assign(s.default.vErrors, n._`[${r}]`), n._`${s.default.vErrors}.push(${r})`), e.code(n._`${s.default.errors}++`);
}
function a(e, t) {
    const { gen: r, validateName: o, schemaEnv: s } = e;
    s.$async ? r.throw(n._`new ${e.ValidationError}(${t})`) : (r.assign(n._`${o}.errors`, t), r.return(!1));
}
exports.keywordError = {
    message: ({ keyword: e })=>n.str`must pass "${e}" keyword validation`
}, exports.keyword$DataError = {
    message: ({ keyword: e, schemaType: t })=>t ? n.str`"${e}" keyword must be ${t} ($data)` : n.str`"${e}" keyword is invalid ($data)`
}, exports.reportError = function(e, r = exports.keywordError, o, s) {
    const { it: c } = e, { gen: l, compositeRule: d, allErrors: p } = c, f = u(e, r, o);
    (null != s ? s : d || p) ? i(l, f) : a(c, n._`[${f}]`);
}, exports.reportExtraError = function(e, r = exports.keywordError, n) {
    const { it: o } = e, { gen: c, compositeRule: l, allErrors: d } = o;
    i(c, u(e, r, n)), l || d || a(o, s.default.vErrors);
}, exports.resetErrorsCount = function(e, t) {
    e.assign(s.default.errors, t), e.if(n._`${s.default.vErrors} !== null`, ()=>e.if(t, ()=>e.assign(n._`${s.default.vErrors}.length`, t), ()=>e.assign(s.default.vErrors, null)));
}, exports.extendErrors = function({ gen: e, keyword: t, schemaValue: r, data: o, errsCount: i, it: a }) {
    if (void 0 === i) throw new Error("ajv implementation error");
    const c = e.name("err");
    e.forRange("i", i, s.default.errors, (i)=>{
        e.const(c, n._`${s.default.vErrors}[${i}]`), e.if(n._`${c}.instancePath === undefined`, ()=>e.assign(n._`${c}.instancePath`, (0, n.strConcat)(s.default.instancePath, a.errorPath))), e.assign(n._`${c}.schemaPath`, n.str`${a.errSchemaPath}/${t}`), a.opts.verbose && (e.assign(n._`${c}.schema`, r), e.assign(n._`${c}.data`, o));
    });
};
const c = {
    keyword: new n.Name("keyword"),
    schemaPath: new n.Name("schemaPath"),
    params: new n.Name("params"),
    propertyName: new n.Name("propertyName"),
    message: new n.Name("message"),
    schema: new n.Name("schema"),
    parentSchema: new n.Name("parentSchema")
};
function u(e, t, r) {
    const { createErrors: o } = e.it;
    return !1 === o ? n._`{}` : function(e, t, r = {}) {
        const { gen: o, it: i } = e, a = [
            l(i, r),
            d(e, r)
        ];
        return function(e, { params: t, message: r }, o) {
            const { keyword: i, data: a, schemaValue: u, it: l } = e, { opts: d, propertyName: p, topSchemaRef: f, schemaPath: h } = l;
            o.push([
                c.keyword,
                i
            ], [
                c.params,
                "function" == typeof t ? t(e) : t || n._`{}`
            ]), d.messages && o.push([
                c.message,
                "function" == typeof r ? r(e) : r
            ]);
            d.verbose && o.push([
                c.schema,
                u
            ], [
                c.parentSchema,
                n._`${f}${h}`
            ], [
                s.default.data,
                a
            ]);
            p && o.push([
                c.propertyName,
                p
            ]);
        }(e, t, a), o.object(...a);
    }(e, t, r);
}
function l({ errorPath: e }, { instancePath: t }) {
    const r = t ? n.str`${e}${(0, o.getErrorPath)(t, o.Type.Str)}` : e;
    return [
        s.default.instancePath,
        (0, n.strConcat)(s.default.instancePath, r)
    ];
}
function d({ keyword: e, it: { errSchemaPath: t } }, { schemaPath: r, parentSchema: s }) {
    let i = s ? t : n.str`${t}/${e}`;
    return r && (i = n.str`${i}${(0, o.getErrorPath)(r, o.Type.Str)}`), [
        c.schemaPath,
        i
    ];
}
