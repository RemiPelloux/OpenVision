"use strict";
const t = require("./module-6928.js"), s = require("./module-519.js"), o = require("./module-3579.js"), r = require("./module-8977.js"), i = require("./module-557.js"), l = (e, a, n = !1)=>{
    if (Array.isArray(e)) {
        const t = e.map((e)=>l(e, a, n)), s = (e)=>{
            for (const a of t){
                const n = a(e);
                if (n) return n;
            }
            return !1;
        };
        return s;
    }
    const t = (s = e) && "object" == typeof s && !Array.isArray(s) && e.tokens && e.input;
    var s;
    if ("" === e || "string" != typeof e && !t) throw new TypeError("Expected pattern to be a non-empty string");
    const o = a || {}, i = r.isWindows(a), d = t ? l.compileRe(e, a) : l.makeRe(e, a, !1, !0), m = d.state;
    delete d.state;
    let c = ()=>!1;
    if (o.ignore) {
        const e = {
            ...a,
            ignore: null,
            onMatch: null,
            onResult: null
        };
        c = l(o.ignore, e, n);
    }
    const p = (n, t = !1)=>{
        const { isMatch: s, match: r, output: p } = l.test(n, d, a, {
            glob: e,
            posix: i
        }), A = {
            glob: e,
            state: m,
            regex: d,
            posix: i,
            input: n,
            output: p,
            match: r,
            isMatch: s
        };
        return "function" == typeof o.onResult && o.onResult(A), !1 === s ? (A.isMatch = !1, !!t && A) : c(n) ? ("function" == typeof o.onIgnore && o.onIgnore(A), A.isMatch = !1, !!t && A) : ("function" == typeof o.onMatch && o.onMatch(A), !t || A);
    };
    return n && (p.state = m), p;
};
l.test = (e, a, n, { glob: t, posix: s } = {})=>{
    if ("string" != typeof e) throw new TypeError("Expected input to be a string");
    if ("" === e) return {
        isMatch: !1,
        output: ""
    };
    const o = n || {}, i = o.format || (s ? r.toPosixSlashes : null);
    let d = e === t, m = d && i ? i(e) : e;
    return !1 === d && (m = i ? i(e) : e, d = m === t), !1 !== d && !0 !== o.capture || (d = !0 === o.matchBase || !0 === o.basename ? l.matchBase(e, a, n, s) : a.exec(m)), {
        isMatch: Boolean(d),
        match: d,
        output: m
    };
}, l.matchBase = (e, a, n, s = r.isWindows(n))=>(a instanceof RegExp ? a : l.makeRe(a, n)).test(t.basename(e)), l.isMatch = (e, a, n)=>l(a, n)(e), l.parse = (e, a)=>Array.isArray(e) ? e.map((e)=>l.parse(e, a)) : o(e, {
        ...a,
        fastpaths: !1
    }), l.scan = (e, a)=>s(e, a), l.compileRe = (e, a, n = !1, t = !1)=>{
    if (!0 === n) return e.output;
    const s = a || {}, o = s.contains ? "" : "^", r = s.contains ? "" : "$";
    let i = `${o}(?:${e.output})${r}`;
    e && !0 === e.negated && (i = `^(?!${i}).*$`);
    const d = l.toRegex(i, a);
    return !0 === t && (d.state = e), d;
}, l.makeRe = (e, a = {}, n = !1, t = !1)=>{
    if (!e || "string" != typeof e) throw new TypeError("Expected a non-empty string");
    let s = {
        negated: !1,
        fastpaths: !0
    };
    return !1 === a.fastpaths || "." !== e[0] && "*" !== e[0] || (s.output = o.fastpaths(e, a)), s.output || (s = o(e, a)), l.compileRe(s, a, n, t);
}, l.toRegex = (e, a)=>{
    try {
        const n = a || {};
        return new RegExp(e, n.flags || (n.nocase ? "i" : ""));
    } catch (e) {
        if (a && !0 === a.debug) throw e;
        return /$^/;
    }
}, l.constants = i, module.exports = l;
