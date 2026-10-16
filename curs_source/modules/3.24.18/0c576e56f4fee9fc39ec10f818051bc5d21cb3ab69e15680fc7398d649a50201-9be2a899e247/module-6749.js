"use strict";
require.d(exports, {
    JM: ()=>c,
    Kd: ()=>a,
    Wk: ()=>u,
    a$: ()=>i
});
var n = require("./module-7381.js"), o = require("./module-7246.js");
const s = (e, t)=>{
    e.name = "$ZodError", Object.defineProperty(e, "_zod", {
        value: e._zod,
        enumerable: !1
    }), Object.defineProperty(e, "issues", {
        value: t,
        enumerable: !1
    }), Object.defineProperty(e, "message", {
        get: ()=>JSON.stringify(t, o.k8, 2),
        enumerable: !0
    }), Object.defineProperty(e, "toString", {
        value: ()=>e.message,
        enumerable: !1
    });
}, i = (0, n.xI)("$ZodError", s), a = (0, n.xI)("$ZodError", s, {
    Parent: Error
});
function c(e, t = (e)=>e.message) {
    const r = {}, n = [];
    for (const o of e.issues)o.path.length > 0 ? (r[o.path[0]] = r[o.path[0]] || [], r[o.path[0]].push(t(o))) : n.push(t(o));
    return {
        formErrors: n,
        fieldErrors: r
    };
}
function u(e, t) {
    const r = t || function(e) {
        return e.message;
    }, n = {
        _errors: []
    }, o = (e)=>{
        for (const t of e.issues)if ("invalid_union" === t.code && t.errors.length) t.errors.map((e)=>o({
                issues: e
            }));
        else if ("invalid_key" === t.code) o({
            issues: t.issues
        });
        else if ("invalid_element" === t.code) o({
            issues: t.issues
        });
        else if (0 === t.path.length) n._errors.push(r(t));
        else {
            let e = n, o = 0;
            for(; o < t.path.length;){
                const n = t.path[o];
                o === t.path.length - 1 ? (e[n] = e[n] || {
                    _errors: []
                }, e[n]._errors.push(r(t))) : e[n] = e[n] || {
                    _errors: []
                }, e = e[n], o++;
            }
        }
    };
    return o(e), n;
}
