"use strict";
require.d(exports, {
    Bm: ()=>m,
    Nn: ()=>u,
    O1: ()=>c,
    gO: ()=>l
});
var n = require("./module-6038.js"), s = require("./module-8032.js"), i = require("./module-328.js"), o = require("./module-6928.js"), a = function(t, e) {
    var r = {};
    for(var n in t)Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
    if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
        var s = 0;
        for(n = Object.getOwnPropertySymbols(t); s < n.length; s++)e.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[s]) && (r[n[s]] = t[n[s]]);
    }
    return r;
};
function u(t, e, r) {
    var s;
    if (e && new Headers(e).forEach((t, e)=>r.metadata.append(e, t)), "object" != typeof t || null == t || Array.isArray(t)) throw r;
    let a = r.code;
    "code" in t && "string" == typeof t.code && (a = null !== (s = (0, o.X)(t.code)) && void 0 !== s ? s : a);
    const u = t.message;
    if (null != u && "string" != typeof u) throw r;
    const c = new i.T(null != u ? u : "", a, e);
    if ("details" in t && Array.isArray(t.details)) for (const e of t.details){
        if (null === e || "object" != typeof e || Array.isArray(e) || "string" != typeof e.type || "string" != typeof e.value) throw r;
        try {
            c.details.push({
                type: e.type,
                value: n.protoBase64.dec(e.value),
                debug: e.debug
            });
        } catch (t) {
            throw r;
        }
    }
    return c;
}
function c(t, e, r) {
    let n;
    try {
        n = JSON.parse((new TextDecoder).decode(t));
    } catch (t) {
        throw r;
    }
    return u(n, e, r);
}
function l(t, e) {
    const r = {
        code: (0, o.s)(t.code)
    };
    return t.rawMessage.length > 0 && (r.message = t.rawMessage), t.details.length > 0 && (r.details = t.details.map((t)=>{
        if ("getType" in t) {
            const r = {
                type: t.getType().typeName,
                value: t.toBinary()
            };
            try {
                r.debug = t.toJson(e);
            } catch (t) {}
            return r;
        }
        return t;
    }).map((t)=>{
        var { value: e } = t, r = a(t, [
            "value"
        ]);
        return Object.assign(Object.assign({}, r), {
            value: n.protoBase64.enc(e).replace(/=+$/, "")
        });
    })), r;
}
function m(t, e) {
    const r = new TextEncoder;
    try {
        const n = l(t, e), s = JSON.stringify(n);
        return r.encode(s);
    } catch (t) {
        const e = t instanceof Error ? t.message : String(t);
        throw new i.T(`failed to serialize Connect Error: ${e}`, s.C.Internal);
    }
}
