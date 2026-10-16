"use strict";
const n = require("./module-57589.js"), o = require("./module-53993.js"), s = require("./module-68139.js"), i = require("./module-94443.js"), a = (e, t, r = !1)=>{
    if (Array.isArray(e)) {
        const n = e.map((e)=>a(e, t, r)), o = (e)=>{
            for (const t of n){
                const r = t(e);
                if (r) return r;
            }
            return !1;
        };
        return o;
    }
    const n = (o = e) && "object" == typeof o && !Array.isArray(o) && e.tokens && e.input;
    var o;
    if ("" === e || "string" != typeof e && !n) throw new TypeError("Expected pattern to be a non-empty string");
    const s = t || {}, i = s.windows, l = n ? a.compileRe(e, t) : a.makeRe(e, t, !1, !0), c = l.state;
    delete l.state;
    let u = ()=>!1;
    if (s.ignore) {
        const e = {
            ...t,
            ignore: null,
            onMatch: null,
            onResult: null
        };
        u = a(s.ignore, e, r);
    }
    const d = (r, n = !1)=>{
        const { isMatch: o, match: d, output: p } = a.test(r, l, t, {
            glob: e,
            posix: i
        }), h = {
            glob: e,
            state: c,
            regex: l,
            posix: i,
            input: r,
            output: p,
            match: d,
            isMatch: o
        };
        return "function" == typeof s.onResult && s.onResult(h), !1 === o ? (h.isMatch = !1, !!n && h) : u(r) ? ("function" == typeof s.onIgnore && s.onIgnore(h), h.isMatch = !1, !!n && h) : ("function" == typeof s.onMatch && s.onMatch(h), !n || h);
    };
    return r && (d.state = c), d;
};
a.test = (e, t, r, { glob: n, posix: o } = {})=>{
    if ("string" != typeof e) throw new TypeError("Expected input to be a string");
    if ("" === e) return {
        isMatch: !1,
        output: ""
    };
    const i = r || {}, l = i.format || (o ? s.toPosixSlashes : null);
    let c = e === n, u = c && l ? l(e) : e;
    return !1 === c && (u = l ? l(e) : e, c = u === n), !1 !== c && !0 !== i.capture || (c = !0 === i.matchBase || !0 === i.basename ? a.matchBase(e, t, r, o) : t.exec(u)), {
        isMatch: Boolean(c),
        match: c,
        output: u
    };
}, a.matchBase = (e, t, r, n = r && r.windows)=>(t instanceof RegExp ? t : a.makeRe(t, r)).test(s.basename(e, {
        windows: n
    })), a.isMatch = (e, t, r)=>a(t, r)(e), a.parse = (e, t)=>Array.isArray(e) ? e.map((e)=>a.parse(e, t)) : o(e, {
        ...t,
        fastpaths: !1
    }), a.scan = (e, t)=>n(e, t), a.compileRe = (e, t, r = !1, n = !1)=>{
    if (!0 === r) return e.output;
    const o = t || {}, s = o.contains ? "" : "^", i = o.contains ? "" : "$";
    let l = `${s}(?:${e.output})${i}`;
    e && !0 === e.negated && (l = `^(?!${l}).*$`);
    const c = a.toRegex(l, t);
    return !0 === n && (c.state = e), c;
}, a.makeRe = (e, t = {}, r = !1, n = !1)=>{
    if (!e || "string" != typeof e) throw new TypeError("Expected a non-empty string");
    let s = {
        negated: !1,
        fastpaths: !0
    };
    return !1 === t.fastpaths || "." !== e[0] && "*" !== e[0] || (s.output = o.fastpaths(e, t)), s.output || (s = o(e, t)), a.compileRe(s, t, r, n);
}, a.toRegex = (e, t)=>{
    try {
        const r = t || {};
        return new RegExp(e, r.flags || (r.nocase ? "i" : ""));
    } catch (e) {
        if (t && !0 === t.debug) throw e;
        return /$^/;
    }
}, a.constants = i, module.exports = a;
