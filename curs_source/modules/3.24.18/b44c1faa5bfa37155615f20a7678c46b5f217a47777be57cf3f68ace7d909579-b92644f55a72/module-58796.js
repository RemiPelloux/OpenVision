const n = "win32" === process.platform || "cygwin" === process.env.OSTYPE || "msys" === process.env.OSTYPE, s = require("./module-16928.js"), o = n ? ";" : ":", i = require("./module-6181.js"), a = (e)=>Object.assign(new Error(`not found: ${e}`), {
        code: "ENOENT"
    }), c = (e, t)=>{
    const r = t.colon || o, s = e.match(/\//) || n && e.match(/\\/) ? [
        ""
    ] : [
        ...n ? [
            process.cwd()
        ] : [],
        ...(t.path || process.env.PATH || "").split(r)
    ], i = n ? t.pathExt || process.env.PATHEXT || ".EXE;.CMD;.BAT;.COM" : "", a = n ? i.split(r) : [
        ""
    ];
    return n && -1 !== e.indexOf(".") && "" !== a[0] && a.unshift(""), {
        pathEnv: s,
        pathExt: a,
        pathExtExe: i
    };
}, l = (e, t, r)=>{
    "function" == typeof t && (r = t, t = {}), t || (t = {});
    const { pathEnv: n, pathExt: o, pathExtExe: l } = c(e, t), u = [], d = (r)=>new Promise((o, i)=>{
            if (r === n.length) return t.all && u.length ? o(u) : i(a(e));
            const c = n[r], l = /^".*"$/.test(c) ? c.slice(1, -1) : c, d = s.join(l, e), m = !l && /^\.[\\\/]/.test(e) ? e.slice(0, 2) + d : d;
            o(p(m, r, 0));
        }), p = (e, r, n)=>new Promise((s, a)=>{
            if (n === o.length) return s(d(r + 1));
            const c = o[n];
            i(e + c, {
                pathExt: l
            }, (o, i)=>{
                if (!o && i) {
                    if (!t.all) return s(e + c);
                    u.push(e + c);
                }
                return s(p(e, r, n + 1));
            });
        });
    return r ? d(0).then((e)=>r(null, e), r) : d(0);
};
module.exports = l, l.sync = (e, t)=>{
    t = t || {};
    const { pathEnv: r, pathExt: n, pathExtExe: o } = c(e, t), l = [];
    for(let a = 0; a < r.length; a++){
        const c = r[a], u = /^".*"$/.test(c) ? c.slice(1, -1) : c, d = s.join(u, e), p = !u && /^\.[\\\/]/.test(e) ? e.slice(0, 2) + d : d;
        for(let e = 0; e < n.length; e++){
            const r = p + n[e];
            try {
                if (i.sync(r, {
                    pathExt: o
                })) {
                    if (!t.all) return r;
                    l.push(r);
                }
            } catch (e) {}
        }
    }
    if (t.all && l.length) return l;
    if (t.nothrow) return null;
    throw a(e);
};
