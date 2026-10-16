"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.extendErrors = exports.resetErrorsCount = exports.reportExtraError = exports.reportError = exports.keyword$DataError = exports.keywordError = void 0;
const n = require("./module-95183.js"), s = require("./module-79657.js"), o = require("./module-44489.js");
function i(e, t) {
    const r = e.const("err", t);
    e.if(n._`${o.default.vErrors} === null`, ()=>e.assign(o.default.vErrors, n._`[${r}]`), n._`${o.default.vErrors}.push(${r})`), e.code(n._`${o.default.errors}++`);
}
function a(e, t) {
    const { gen: r, validateName: s, schemaEnv: o } = e;
    o.$async ? r.throw(n._`new ${e.ValidationError}(${t})`) : (r.assign(n._`${s}.errors`, t), r.return(!1));
}
exports.keywordError = {
    message: ({ keyword: e })=>n.str`must pass "${e}" keyword validation`
}, exports.keyword$DataError = {
    message: ({ keyword: e, schemaType: t })=>t ? n.str`"${e}" keyword must be ${t} ($data)` : n.str`"${e}" keyword is invalid ($data)`
}, exports.reportError = function(e, r = exports.keywordError, s, o) {
    const { it: c } = e, { gen: u, compositeRule: d, allErrors: p } = c, m = l(e, r, s);
    (null != o ? o : d || p) ? i(u, m) : a(c, n._`[${m}]`);
}, exports.reportExtraError = function(e, r = exports.keywordError, n) {
    const { it: s } = e, { gen: c, compositeRule: u, allErrors: d } = s;
    i(c, l(e, r, n)), u || d || a(s, o.default.vErrors);
}, exports.resetErrorsCount = function(e, t) {
    e.assign(o.default.errors, t), e.if(n._`${o.default.vErrors} !== null`, ()=>e.if(t, ()=>e.assign(n._`${o.default.vErrors}.length`, t), ()=>e.assign(o.default.vErrors, null)));
}, exports.extendErrors = function({ gen: e, keyword: t, schemaValue: r, data: s, errsCount: i, it: a }) {
    if (void 0 === i) throw new Error("ajv implementation error");
    const c = e.name("err");
    e.forRange("i", i, o.default.errors, (i)=>{
        e.const(c, n._`${o.default.vErrors}[${i}]`), e.if(n._`${c}.instancePath === undefined`, ()=>e.assign(n._`${c}.instancePath`, (0, n.strConcat)(o.default.instancePath, a.errorPath))), e.assign(n._`${c}.schemaPath`, n.str`${a.errSchemaPath}/${t}`), a.opts.verbose && (e.assign(n._`${c}.schema`, r), e.assign(n._`${c}.data`, s));
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
function l(e, t, r) {
    const { createErrors: s } = e.it;
    return !1 === s ? n._`{}` : function(e, t, r = {}) {
        const { gen: s, it: i } = e, a = [
            u(i, r),
            d(e, r)
        ];
        return function(e, { params: t, message: r }, s) {
            const { keyword: i, data: a, schemaValue: l, it: u } = e, { opts: d, propertyName: p, topSchemaRef: m, schemaPath: h } = u;
            s.push([
                c.keyword,
                i
            ], [
                c.params,
                "function" == typeof t ? t(e) : t || n._`{}`
            ]), d.messages && s.push([
                c.message,
                "function" == typeof r ? r(e) : r
            ]);
            d.verbose && s.push([
                c.schema,
                l
            ], [
                c.parentSchema,
                n._`${m}${h}`
            ], [
                o.default.data,
                a
            ]);
            p && s.push([
                c.propertyName,
                p
            ]);
        }(e, t, a), s.object(...a);
    }(e, t, r);
}
function u({ errorPath: e }, { instancePath: t }) {
    const r = t ? n.str`${e}${(0, s.getErrorPath)(t, s.Type.Str)}` : e;
    return [
        o.default.instancePath,
        (0, n.strConcat)(o.default.instancePath, r)
    ];
}
function d({ keyword: e, it: { errSchemaPath: t } }, { schemaPath: r, parentSchema: o }) {
    let i = o ? t : n.str`${t}/${e}`;
    return r && (i = n.str`${i}${(0, s.getErrorPath)(r, s.Type.Str)}`), [
        c.schemaPath,
        i
    ];
}
