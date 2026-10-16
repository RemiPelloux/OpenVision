const n = "win32" === process.platform || "cygwin" === process.env.OSTYPE || "msys" === process.env.OSTYPE, o = require("./module-16928.js"), s = n ? ";" : ":", i = require("./module-6181.js"), a = (e)=>Object.assign(new Error(`not found: ${e}`), {
        code: "ENOENT"
    }), l = (e, t)=>{
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
}, c = (e, t, r)=>{
    "function" == typeof t && (r = t, t = {}), t || (t = {});
    const { pathEnv: n, pathExt: s, pathExtExe: c } = l(e, t), u = [], d = (r)=>new Promise((s, i)=>{
            if (r === n.length) return t.all && u.length ? s(u) : i(a(e));
            const l = n[r], c = /^".*"$/.test(l) ? l.slice(1, -1) : l, d = o.join(c, e), h = !c && /^\.[\\\/]/.test(e) ? e.slice(0, 2) + d : d;
            s(p(h, r, 0));
        }), p = (e, r, n)=>new Promise((o, a)=>{
            if (n === s.length) return o(d(r + 1));
            const l = s[n];
            i(e + l, {
                pathExt: c
            }, (s, i)=>{
                if (!s && i) {
                    if (!t.all) return o(e + l);
                    u.push(e + l);
                }
                return o(p(e, r, n + 1));
            });
        });
    return r ? d(0).then((e)=>r(null, e), r) : d(0);
};
module.exports = c, c.sync = (e, t)=>{
    t = t || {};
    const { pathEnv: r, pathExt: n, pathExtExe: s } = l(e, t), c = [];
    for(let a = 0; a < r.length; a++){
        const l = r[a], u = /^".*"$/.test(l) ? l.slice(1, -1) : l, d = o.join(u, e), p = !u && /^\.[\\\/]/.test(e) ? e.slice(0, 2) + d : d;
        for(let e = 0; e < n.length; e++){
            const r = p + n[e];
            try {
                if (i.sync(r, {
                    pathExt: s
                })) {
                    if (!t.all) return r;
                    c.push(r);
                }
            } catch (e) {}
        }
    }
    if (t.all && c.length) return c;
    if (t.nothrow) return null;
    throw a(e);
};
