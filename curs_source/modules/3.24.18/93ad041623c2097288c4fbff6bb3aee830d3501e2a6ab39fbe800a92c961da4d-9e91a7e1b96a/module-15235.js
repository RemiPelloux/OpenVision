"use strict";
require.d(exports, {
    Tx: ()=>f,
    O4: ()=>h
});
var n = require("./module-93451.js"), s = require("./module-6685.js");
var i = require("./module-2979.js");
var o = require("./module-62340.js");
var a = require(67857), c = require("./module-3871.js");
const l = {
    [a.U.HTTP]: 80,
    [a.U.HTTPS]: 443
};
const u = {
    booleanEquals: (e, t)=>e === t,
    coalesce: function(...e) {
        for (const t of e)if (null != t) return t;
    },
    getAttr: i.i,
    isSet: (e)=>null != e,
    isValidHostLabel: o.X,
    ite: function(e, t, r) {
        return e ? t : r;
    },
    not: (e)=>!e,
    parseURL: (e)=>{
        const t = (()=>{
            try {
                if (e instanceof URL) return e;
                if ("object" == typeof e && "hostname" in e) {
                    const { hostname: t, port: r, protocol: n = "", path: s = "", query: i = {} } = e, o = new URL(`${n}//${t}${r ? `:${r}` : ""}${s}`);
                    return o.search = Object.entries(i).map(([e, t])=>`${e}=${t}`).join("&"), o;
                }
                return new URL(e);
            } catch (e) {
                return null;
            }
        })();
        if (!t) return console.error(`Unable to parse ${JSON.stringify(e)} as a whatwg URL.`), null;
        const r = t.href, { host: n, hostname: s, pathname: i, protocol: o, search: u } = t;
        if (u) return null;
        const d = o.slice(0, -1);
        if (!Object.values(a.U).includes(d)) return null;
        const h = (0, c.o)(s);
        return {
            scheme: d,
            authority: `${n}${r.includes(`${n}:${l[d]}`) || "string" == typeof e && e.includes(`${n}:${l[d]}`) ? `:${l[d]}` : ""}`,
            path: i,
            normalizedPath: i.endsWith("/") ? i : `${i}/`,
            isIp: h
        };
    },
    split: function(e, t, r) {
        if (1 === r) return [
            e
        ];
        if ("" === e) return [
            ""
        ];
        const n = e.split(t);
        return 0 === r ? n : n.slice(0, r - 1).concat(n.slice(1).join(t));
    },
    stringEquals: (e, t)=>e === t,
    substring: (e, t, r, n)=>null == e || t >= r || e.length < r || /[^\u0000-\u007f]/.test(e) ? null : n ? e.substring(e.length - r, e.length - t) : e.substring(t, r),
    uriEncode: (e)=>encodeURIComponent(e).replace(/[!*'()]/g, (e)=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`)
};
var d = require("./module-26713.js");
const h = (e, t, r)=>{
    if ("string" == typeof e) return (0, d.M)(e, r);
    if (e.fn) return p.callFunction(e, r);
    if (e.ref) return (({ ref: e }, t)=>t.referenceRecord[e] ?? t.endpointParams[e])(e, r);
    throw new n.c(`'${t}': ${String(e)} is not a string, function or reference.`);
}, f = ({ fn: e, argv: t }, r)=>{
    const n = Array(t.length);
    for(let e = 0; e < n.length; ++e){
        const s = t[e];
        n[e] = "boolean" == typeof s || "number" == typeof s ? s : p.evaluateExpression(s, "arg", r);
    }
    const i = e.indexOf(".");
    if (-1 !== i) {
        const t = s.m[e.slice(0, i)], r = t?.[e.slice(i + 1)];
        if ("function" == typeof r) return r(...n);
    }
    const o = u[e];
    if ("function" == typeof o) return o(...n);
    throw new Error(`function ${e} not loaded in endpointFunctions.`);
}, p = {
    evaluateExpression: h,
    callFunction: f
};
