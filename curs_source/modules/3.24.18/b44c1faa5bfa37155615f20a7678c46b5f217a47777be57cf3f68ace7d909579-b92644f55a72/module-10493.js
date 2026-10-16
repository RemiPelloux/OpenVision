const { isexe: n, sync: s } = require("./module-99864.js"), { join: o, delimiter: i, sep: a, posix: c } = require("./module-16928.js"), l = "win32" === process.platform, u = new RegExp(`[${c.sep}${a === c.sep ? "" : a}]`.replace(/(\\)/g, "\\$1")), d = new RegExp(`^\\.${u.source}`), p = (e)=>Object.assign(new Error(`not found: ${e}`), {
        code: "ENOENT"
    }), m = (e, { path: t = process.env.PATH, pathExt: r = process.env.PATHEXT, delimiter: n = i })=>{
    const s = e.match(u) ? [
        ""
    ] : [
        ...l ? [
            process.cwd()
        ] : [],
        ...(t || "").split(n)
    ];
    if (l) {
        const t = r || [
            ".EXE",
            ".CMD",
            ".BAT",
            ".COM"
        ].join(n), o = t.split(n).flatMap((e)=>[
                e,
                e.toLowerCase()
            ]);
        return e.includes(".") && "" !== o[0] && o.unshift(""), {
            pathEnv: s,
            pathExt: o,
            pathExtExe: t
        };
    }
    return {
        pathEnv: s,
        pathExt: [
            ""
        ]
    };
}, h = (e, t)=>{
    const r = /^".*"$/.test(e) ? e.slice(1, -1) : e;
    return (!r && d.test(t) ? t.slice(0, 2) : "") + o(r, t);
}, f = async (e, t = {})=>{
    const { pathEnv: r, pathExt: s, pathExtExe: o } = m(e, t), i = [];
    for (const a of r){
        const r = h(a, e);
        for (const e of s){
            const s = r + e;
            if (await n(s, {
                pathExt: o,
                ignoreErrors: !0
            })) {
                if (!t.all) return s;
                i.push(s);
            }
        }
    }
    if (t.all && i.length) return i;
    if (t.nothrow) return null;
    throw p(e);
};
module.exports = f, f.sync = (e, t = {})=>{
    const { pathEnv: r, pathExt: n, pathExtExe: o } = m(e, t), i = [];
    for (const a of r){
        const r = h(a, e);
        for (const e of n){
            const n = r + e;
            if (s(n, {
                pathExt: o,
                ignoreErrors: !0
            })) {
                if (!t.all) return n;
                i.push(n);
            }
        }
    }
    if (t.all && i.length) return i;
    if (t.nothrow) return null;
    throw p(e);
};
