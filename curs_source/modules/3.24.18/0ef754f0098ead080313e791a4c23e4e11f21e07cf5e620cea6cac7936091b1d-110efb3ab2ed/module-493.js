const { isexe: t, sync: s } = require("./module-9864.js"), { join: o, delimiter: r, sep: i, posix: l } = require("./module-6928.js"), d = "win32" === process.platform, m = new RegExp(`[${l.sep}${i === l.sep ? "" : i}]`.replace(/(\\)/g, "\\$1")), c = new RegExp(`^\\.${m.source}`), p = (e)=>Object.assign(new Error(`not found: ${e}`), {
        code: "ENOENT"
    }), A = (e, { path: a = process.env.PATH, pathExt: n = process.env.PATHEXT, delimiter: t = r })=>{
    const s = e.match(m) ? [
        ""
    ] : [
        ...d ? [
            process.cwd()
        ] : [],
        ...(a || "").split(t)
    ];
    if (d) {
        const a = n || [
            ".EXE",
            ".CMD",
            ".BAT",
            ".COM"
        ].join(t), o = a.split(t).flatMap((e)=>[
                e,
                e.toLowerCase()
            ]);
        return e.includes(".") && "" !== o[0] && o.unshift(""), {
            pathEnv: s,
            pathExt: o,
            pathExtExe: a
        };
    }
    return {
        pathEnv: s,
        pathExt: [
            ""
        ]
    };
}, u = (e, a)=>{
    const n = /^".*"$/.test(e) ? e.slice(1, -1) : e;
    return (!n && c.test(a) ? a.slice(0, 2) : "") + o(n, a);
}, g = async (e, a = {})=>{
    const { pathEnv: n, pathExt: s, pathExtExe: o } = A(e, a), r = [];
    for (const i of n){
        const n = u(i, e);
        for (const e of s){
            const s = n + e;
            if (await t(s, {
                pathExt: o,
                ignoreErrors: !0
            })) {
                if (!a.all) return s;
                r.push(s);
            }
        }
    }
    if (a.all && r.length) return r;
    if (a.nothrow) return null;
    throw p(e);
};
module.exports = g, g.sync = (e, a = {})=>{
    const { pathEnv: n, pathExt: t, pathExtExe: o } = A(e, a), r = [];
    for (const i of n){
        const n = u(i, e);
        for (const e of t){
            const t = n + e;
            if (s(t, {
                pathExt: o,
                ignoreErrors: !0
            })) {
                if (!a.all) return t;
                r.push(t);
            }
        }
    }
    if (a.all && r.length) return r;
    if (a.nothrow) return null;
    throw p(e);
};
