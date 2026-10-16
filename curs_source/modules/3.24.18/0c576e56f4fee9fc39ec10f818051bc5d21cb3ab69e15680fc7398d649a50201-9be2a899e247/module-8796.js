const n = "win32" === process.platform || "cygwin" === process.env.OSTYPE || "msys" === process.env.OSTYPE, o = require("./module-6928.js"), s = n ? ";" : ":", i = require("./module-6181.js"), a = (e)=>Object.assign(new Error(`not found: ${e}`), {
        code: "ENOENT"
    }), c = (e, t)=>{
    const r = t.colon || s, o = e.match(/\//) || n && e.match(/\\/) ? [
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
        pathEnv: o,
        pathExt: a,
        pathExtExe: i
    };
}, u = (e, t, r)=>{
    "function" == typeof t && (r = t, t = {}), t || (t = {});
    const { pathEnv: n, pathExt: s, pathExtExe: u } = c(e, t), l = [], d = (r)=>new Promise((s, i)=>{
            if (r === n.length) return t.all && l.length ? s(l) : i(a(e));
            const c = n[r], u = /^".*"$/.test(c) ? c.slice(1, -1) : c, d = o.join(u, e), f = !u && /^\.[\\\/]/.test(e) ? e.slice(0, 2) + d : d;
            s(p(f, r, 0));
        }), p = (e, r, n)=>new Promise((o, a)=>{
            if (n === s.length) return o(d(r + 1));
            const c = s[n];
            i(e + c, {
                pathExt: u
            }, (s, i)=>{
                if (!s && i) {
                    if (!t.all) return o(e + c);
                    l.push(e + c);
                }
                return o(p(e, r, n + 1));
            });
        });
    return r ? d(0).then((e)=>r(null, e), r) : d(0);
};
module.exports = u, u.sync = (e, t)=>{
    t = t || {};
    const { pathEnv: r, pathExt: n, pathExtExe: s } = c(e, t), u = [];
    for(let a = 0; a < r.length; a++){
        const c = r[a], l = /^".*"$/.test(c) ? c.slice(1, -1) : c, d = o.join(l, e), p = !l && /^\.[\\\/]/.test(e) ? e.slice(0, 2) + d : d;
        for(let e = 0; e < n.length; e++){
            const r = p + n[e];
            try {
                if (i.sync(r, {
                    pathExt: s
                })) {
                    if (!t.all) return r;
                    u.push(r);
                }
            } catch (e) {}
        }
    }
    if (t.all && u.length) return u;
    if (t.nothrow) return null;
    throw a(e);
};
