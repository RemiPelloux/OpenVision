"use strict";
require.d(exports, {
    Bm: ()=>d,
    Nn: ()=>c,
    O1: ()=>l,
    gO: ()=>u
});
var n = require("./module-36038.js"), s = require("./module-84959.js"), o = require("./module-92801.js"), i = require("./module-17819.js"), a = function(e, t) {
    var r = {};
    for(var n in e)Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
        var s = 0;
        for(n = Object.getOwnPropertySymbols(e); s < n.length; s++)t.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[s]) && (r[n[s]] = e[n[s]]);
    }
    return r;
};
function c(e, t, r) {
    var s;
    if (t && new Headers(t).forEach((e, t)=>r.metadata.append(t, e)), "object" != typeof e || null == e || Array.isArray(e)) throw r;
    let a = r.code;
    "code" in e && "string" == typeof e.code && (a = null !== (s = (0, i.X)(e.code)) && void 0 !== s ? s : a);
    const c = e.message;
    if (null != c && "string" != typeof c) throw r;
    const l = new o.T(null != c ? c : "", a, t);
    if ("details" in e && Array.isArray(e.details)) for (const t of e.details){
        if (null === t || "object" != typeof t || Array.isArray(t) || "string" != typeof t.type || "string" != typeof t.value) throw r;
        try {
            l.details.push({
                type: t.type,
                value: n.protoBase64.dec(t.value),
                debug: t.debug
            });
        } catch (e) {
            throw r;
        }
    }
    return l;
}
function l(e, t, r) {
    let n;
    try {
        n = JSON.parse((new TextDecoder).decode(e));
    } catch (e) {
        throw r;
    }
    return c(n, t, r);
}
function u(e, t) {
    const r = {
        code: (0, i.s)(e.code)
    };
    return e.rawMessage.length > 0 && (r.message = e.rawMessage), e.details.length > 0 && (r.details = e.details.map((e)=>{
        if ("getType" in e) {
            const r = {
                type: e.getType().typeName,
                value: e.toBinary()
            };
            try {
                r.debug = e.toJson(t);
            } catch (e) {}
            return r;
        }
        return e;
    }).map((e)=>{
        var { value: t } = e, r = a(e, [
            "value"
        ]);
        return Object.assign(Object.assign({}, r), {
            value: n.protoBase64.enc(t).replace(/=+$/, "")
        });
    })), r;
}
function d(e, t) {
    const r = new TextEncoder;
    try {
        const n = u(e, t), s = JSON.stringify(n);
        return r.encode(s);
    } catch (e) {
        const t = e instanceof Error ? e.message : String(e);
        throw new o.T(`failed to serialize Connect Error: ${t}`, s.C.Internal);
    }
}
