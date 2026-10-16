"use strict";
require.d(exports, {
    JM: ()=>c,
    Kd: ()=>a,
    Wk: ()=>l,
    a$: ()=>i
});
var n = require("./module-47381.js"), s = require("./module-7246.js");
const o = (e, t)=>{
    e.name = "$ZodError", Object.defineProperty(e, "_zod", {
        value: e._zod,
        enumerable: !1
    }), Object.defineProperty(e, "issues", {
        value: t,
        enumerable: !1
    }), Object.defineProperty(e, "message", {
        get: ()=>JSON.stringify(t, s.k8, 2),
        enumerable: !0
    }), Object.defineProperty(e, "toString", {
        value: ()=>e.message,
        enumerable: !1
    });
}, i = (0, n.xI)("$ZodError", o), a = (0, n.xI)("$ZodError", o, {
    Parent: Error
});
function c(e, t = (e)=>e.message) {
    const r = {}, n = [];
    for (const s of e.issues)s.path.length > 0 ? (r[s.path[0]] = r[s.path[0]] || [], r[s.path[0]].push(t(s))) : n.push(t(s));
    return {
        formErrors: n,
        fieldErrors: r
    };
}
function l(e, t) {
    const r = t || function(e) {
        return e.message;
    }, n = {
        _errors: []
    }, s = (e)=>{
        for (const t of e.issues)if ("invalid_union" === t.code && t.errors.length) t.errors.map((e)=>s({
                issues: e
            }));
        else if ("invalid_key" === t.code) s({
            issues: t.issues
        });
        else if ("invalid_element" === t.code) s({
            issues: t.issues
        });
        else if (0 === t.path.length) n._errors.push(r(t));
        else {
            let e = n, s = 0;
            for(; s < t.path.length;){
                const n = t.path[s];
                s === t.path.length - 1 ? (e[n] = e[n] || {
                    _errors: []
                }, e[n]._errors.push(r(t))) : e[n] = e[n] || {
                    _errors: []
                }, e = e[n], s++;
            }
        }
    };
    return s(e), n;
}
