"use strict";
const n = require("./module-57589.js"), s = require("./module-53993.js"), o = require("./module-68139.js"), i = require("./module-94443.js"), a = (e, t, r = !1)=>{
    if (Array.isArray(e)) {
        const n = e.map((e)=>a(e, t, r)), s = (e)=>{
            for (const t of n){
                const r = t(e);
                if (r) return r;
            }
            return !1;
        };
        return s;
    }
    const n = (s = e) && "object" == typeof s && !Array.isArray(s) && e.tokens && e.input;
    var s;
    if ("" === e || "string" != typeof e && !n) throw new TypeError("Expected pattern to be a non-empty string");
    const o = t || {}, i = o.windows, c = n ? a.compileRe(e, t) : a.makeRe(e, t, !1, !0), l = c.state;
    delete c.state;
    let u = ()=>!1;
    if (o.ignore) {
        const e = {
            ...t,
            ignore: null,
            onMatch: null,
            onResult: null
        };
        u = a(o.ignore, e, r);
    }
    const d = (r, n = !1)=>{
        const { isMatch: s, match: d, output: p } = a.test(r, c, t, {
            glob: e,
            posix: i
        }), m = {
            glob: e,
            state: l,
            regex: c,
            posix: i,
            input: r,
            output: p,
            match: d,
            isMatch: s
        };
        return "function" == typeof o.onResult && o.onResult(m), !1 === s ? (m.isMatch = !1, !!n && m) : u(r) ? ("function" == typeof o.onIgnore && o.onIgnore(m), m.isMatch = !1, !!n && m) : ("function" == typeof o.onMatch && o.onMatch(m), !n || m);
    };
    return r && (d.state = l), d;
};
a.test = (e, t, r, { glob: n, posix: s } = {})=>{
    if ("string" != typeof e) throw new TypeError("Expected input to be a string");
    if ("" === e) return {
        isMatch: !1,
        output: ""
    };
    const i = r || {}, c = i.format || (s ? o.toPosixSlashes : null);
    let l = e === n, u = l && c ? c(e) : e;
    return !1 === l && (u = c ? c(e) : e, l = u === n), !1 !== l && !0 !== i.capture || (l = !0 === i.matchBase || !0 === i.basename ? a.matchBase(e, t, r, s) : t.exec(u)), {
        isMatch: Boolean(l),
        match: l,
        output: u
    };
}, a.matchBase = (e, t, r, n = r && r.windows)=>(t instanceof RegExp ? t : a.makeRe(t, r)).test(o.basename(e, {
        windows: n
    })), a.isMatch = (e, t, r)=>a(t, r)(e), a.parse = (e, t)=>Array.isArray(e) ? e.map((e)=>a.parse(e, t)) : s(e, {
        ...t,
        fastpaths: !1
    }), a.scan = (e, t)=>n(e, t), a.compileRe = (e, t, r = !1, n = !1)=>{
    if (!0 === r) return e.output;
    const s = t || {}, o = s.contains ? "" : "^", i = s.contains ? "" : "$";
    let c = `${o}(?:${e.output})${i}`;
    e && !0 === e.negated && (c = `^(?!${c}).*$`);
    const l = a.toRegex(c, t);
    return !0 === n && (l.state = e), l;
}, a.makeRe = (e, t = {}, r = !1, n = !1)=>{
    if (!e || "string" != typeof e) throw new TypeError("Expected a non-empty string");
    let o = {
        negated: !1,
        fastpaths: !0
    };
    return !1 === t.fastpaths || "." !== e[0] && "*" !== e[0] || (o.output = s.fastpaths(e, t)), o.output || (o = s(e, t)), a.compileRe(o, t, r, n);
}, a.toRegex = (e, t)=>{
    try {
        const r = t || {};
        return new RegExp(e, r.flags || (r.nocase ? "i" : ""));
    } catch (e) {
        if (t && !0 === t.debug) throw e;
        return /$^/;
    }
}, a.constants = i, module.exports = a;
