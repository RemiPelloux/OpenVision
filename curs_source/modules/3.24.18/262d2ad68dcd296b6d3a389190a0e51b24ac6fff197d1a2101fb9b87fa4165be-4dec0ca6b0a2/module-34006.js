"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.extendErrors = exports.resetErrorsCount = exports.reportExtraError = exports.reportError = exports.keyword$DataError = exports.keywordError = void 0;
const n = require("./module-95183.js"), o = require("./module-79657.js"), s = require("./module-44489.js");
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
    const { it: l } = e, { gen: u, compositeRule: d, allErrors: p } = l, h = c(e, r, o);
    (null != s ? s : d || p) ? i(u, h) : a(l, n._`[${h}]`);
}, exports.reportExtraError = function(e, r = exports.keywordError, n) {
    const { it: o } = e, { gen: l, compositeRule: u, allErrors: d } = o;
    i(l, c(e, r, n)), u || d || a(o, s.default.vErrors);
}, exports.resetErrorsCount = function(e, t) {
    e.assign(s.default.errors, t), e.if(n._`${s.default.vErrors} !== null`, ()=>e.if(t, ()=>e.assign(n._`${s.default.vErrors}.length`, t), ()=>e.assign(s.default.vErrors, null)));
}, exports.extendErrors = function({ gen: e, keyword: t, schemaValue: r, data: o, errsCount: i, it: a }) {
    if (void 0 === i) throw new Error("ajv implementation error");
    const l = e.name("err");
    e.forRange("i", i, s.default.errors, (i)=>{
        e.const(l, n._`${s.default.vErrors}[${i}]`), e.if(n._`${l}.instancePath === undefined`, ()=>e.assign(n._`${l}.instancePath`, (0, n.strConcat)(s.default.instancePath, a.errorPath))), e.assign(n._`${l}.schemaPath`, n.str`${a.errSchemaPath}/${t}`), a.opts.verbose && (e.assign(n._`${l}.schema`, r), e.assign(n._`${l}.data`, o));
    });
};
const l = {
    keyword: new n.Name("keyword"),
    schemaPath: new n.Name("schemaPath"),
    params: new n.Name("params"),
    propertyName: new n.Name("propertyName"),
    message: new n.Name("message"),
    schema: new n.Name("schema"),
    parentSchema: new n.Name("parentSchema")
};
function c(e, t, r) {
    const { createErrors: o } = e.it;
    return !1 === o ? n._`{}` : function(e, t, r = {}) {
        const { gen: o, it: i } = e, a = [
            u(i, r),
            d(e, r)
        ];
        return function(e, { params: t, message: r }, o) {
            const { keyword: i, data: a, schemaValue: c, it: u } = e, { opts: d, propertyName: p, topSchemaRef: h, schemaPath: m } = u;
            o.push([
                l.keyword,
                i
            ], [
                l.params,
                "function" == typeof t ? t(e) : t || n._`{}`
            ]), d.messages && o.push([
                l.message,
                "function" == typeof r ? r(e) : r
            ]);
            d.verbose && o.push([
                l.schema,
                c
            ], [
                l.parentSchema,
                n._`${h}${m}`
            ], [
                s.default.data,
                a
            ]);
            p && o.push([
                l.propertyName,
                p
            ]);
        }(e, t, a), o.object(...a);
    }(e, t, r);
}
function u({ errorPath: e }, { instancePath: t }) {
    const r = t ? n.str`${e}${(0, o.getErrorPath)(t, o.Type.Str)}` : e;
    return [
        s.default.instancePath,
        (0, n.strConcat)(s.default.instancePath, r)
    ];
}
function d({ keyword: e, it: { errSchemaPath: t } }, { schemaPath: r, parentSchema: s }) {
    let i = s ? t : n.str`${t}/${e}`;
    return r && (i = n.str`${i}${(0, o.getErrorPath)(r, o.Type.Str)}`), [
        l.schemaPath,
        i
    ];
}
