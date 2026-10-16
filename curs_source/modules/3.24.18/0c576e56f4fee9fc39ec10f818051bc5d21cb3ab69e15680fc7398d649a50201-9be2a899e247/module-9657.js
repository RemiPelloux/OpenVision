"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.checkStrictMode = exports.getErrorPath = exports.Type = exports.useFunc = exports.setEvaluated = exports.evaluatedPropsToName = exports.mergeEvaluated = exports.eachItem = exports.unescapeJsonPointer = exports.escapeJsonPointer = exports.escapeFragment = exports.unescapeFragment = exports.schemaRefOrVal = exports.schemaHasRulesButRef = exports.schemaHasRules = exports.checkUnknownRules = exports.alwaysValidSchema = exports.toHash = void 0;
const n = require("./module-5183.js"), o = require("./module-7442.js");
function s(e, t = e.schema) {
    const { opts: r, self: n } = e;
    if (!r.strictSchema) return;
    if ("boolean" == typeof t) return;
    const o = n.RULES.keywords;
    for(const r in t)o[r] || h(e, `unknown keyword: "${r}"`);
}
function i(e, t) {
    if ("boolean" == typeof e) return !e;
    for(const r in e)if (t[r]) return !0;
    return !1;
}
function a(e) {
    return "number" == typeof e ? `${e}` : e.replace(/~/g, "~0").replace(/\//g, "~1");
}
function c(e) {
    return e.replace(/~1/g, "/").replace(/~0/g, "~");
}
function u({ mergeNames: e, mergeToName: t, mergeValues: r, resultToName: o }) {
    return (s, i, a, c)=>{
        const u = void 0 === a ? i : a instanceof n.Name ? (i instanceof n.Name ? e(s, i, a) : t(s, i, a), a) : i instanceof n.Name ? (t(s, a, i), i) : r(i, a);
        return c !== n.Name || u instanceof n.Name ? u : o(s, u);
    };
}
function l(e, t) {
    if (!0 === t) return e.var("props", !0);
    const r = e.var("props", n._`{}`);
    return void 0 !== t && d(e, r, t), r;
}
function d(e, t, r) {
    Object.keys(r).forEach((r)=>e.assign(n._`${t}${(0, n.getProperty)(r)}`, !0));
}
exports.toHash = function(e) {
    const t = {};
    for (const r of e)t[r] = !0;
    return t;
}, exports.alwaysValidSchema = function(e, t) {
    return "boolean" == typeof t ? t : 0 === Object.keys(t).length || (s(e, t), !i(t, e.self.RULES.all));
}, exports.checkUnknownRules = s, exports.schemaHasRules = i, exports.schemaHasRulesButRef = function(e, t) {
    if ("boolean" == typeof e) return !e;
    for(const r in e)if ("$ref" !== r && t.all[r]) return !0;
    return !1;
}, exports.schemaRefOrVal = function({ topSchemaRef: e, schemaPath: t }, r, o, s) {
    if (!s) {
        if ("number" == typeof r || "boolean" == typeof r) return r;
        if ("string" == typeof r) return n._`${r}`;
    }
    return n._`${e}${t}${(0, n.getProperty)(o)}`;
}, exports.unescapeFragment = function(e) {
    return c(decodeURIComponent(e));
}, exports.escapeFragment = function(e) {
    return encodeURIComponent(a(e));
}, exports.escapeJsonPointer = a, exports.unescapeJsonPointer = c, exports.eachItem = function(e, t) {
    if (Array.isArray(e)) for (const r of e)t(r);
    else t(e);
}, exports.mergeEvaluated = {
    props: u({
        mergeNames: (e, t, r)=>e.if(n._`${r} !== true && ${t} !== undefined`, ()=>{
                e.if(n._`${t} === true`, ()=>e.assign(r, !0), ()=>e.assign(r, n._`${r} || {}`).code(n._`Object.assign(${r}, ${t})`));
            }),
        mergeToName: (e, t, r)=>e.if(n._`${r} !== true`, ()=>{
                !0 === t ? e.assign(r, !0) : (e.assign(r, n._`${r} || {}`), d(e, r, t));
            }),
        mergeValues: (e, t)=>!0 === e || {
                ...e,
                ...t
            },
        resultToName: l
    }),
    items: u({
        mergeNames: (e, t, r)=>e.if(n._`${r} !== true && ${t} !== undefined`, ()=>e.assign(r, n._`${t} === true ? true : ${r} > ${t} ? ${r} : ${t}`)),
        mergeToName: (e, t, r)=>e.if(n._`${r} !== true`, ()=>e.assign(r, !0 === t || n._`${r} > ${t} ? ${r} : ${t}`)),
        mergeValues: (e, t)=>!0 === e || Math.max(e, t),
        resultToName: (e, t)=>e.var("items", t)
    })
}, exports.evaluatedPropsToName = l, exports.setEvaluated = d;
const p = {};
var f;
function h(e, t, r = e.opts.strictSchema) {
    if (r) {
        if (t = `strict mode: ${t}`, !0 === r) throw new Error(t);
        e.self.logger.warn(t);
    }
}
exports.useFunc = function(e, t) {
    return e.scopeValue("func", {
        ref: t,
        code: p[t.code] || (p[t.code] = new o._Code(t.code))
    });
}, function(e) {
    e[e.Num = 0] = "Num", e[e.Str = 1] = "Str";
}(f || (exports.Type = f = {})), exports.getErrorPath = function(e, t, r) {
    if (e instanceof n.Name) {
        const o = t === f.Num;
        return r ? o ? n._`"[" + ${e} + "]"` : n._`"['" + ${e} + "']"` : o ? n._`"/" + ${e}` : n._`"/" + ${e}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return r ? (0, n.getProperty)(e).toString() : "/" + a(e);
}, exports.checkStrictMode = h;
