"use strict";
require.d(exports, {
    K1: ()=>N,
    Oj: ()=>_,
    P9: ()=>O,
    Sh: ()=>g,
    T1: ()=>d,
    VW: ()=>v,
    WI: ()=>q,
    fg: ()=>y,
    h1: ()=>u,
    k_: ()=>M,
    sr: ()=>F,
    xL: ()=>U
});
var n = require("./module-77598.js"), s = require("./module-73024.js"), o = require("./module-76760.js"), i = require("./module-81958.js"), a = require("./module-82590.js"), c = require("./module-56215.js"), l = require("./module-28967.js");
const u = "manifest.json", d = {
    manifestBytes: 1048576,
    files: 1024,
    fileBytes: 536870912,
    name: 255,
    label: 200,
    commit: 128,
    builtAt: 64,
    mainVersion: 64,
    kind: 32,
    list: 256,
    capability: 64,
    packDepth: 8,
    packBytes: 65536,
    requiredRevision: 1e6
};
function p(e) {
    for (const t of e){
        const e = t.codePointAt(0) ?? 0;
        if (e < 32 || 127 === e) return !0;
    }
    return !1;
}
const m = /^(?:CON|PRN|AUX|NUL|COM[1-9]|LPT[1-9])(?:\.|$)/i, h = /[<>:"|?*]/;
const f = /\.(?:node|dylib|dll)$|\.so(?:\.\d+)*$/i;
class g extends Error {
    constructor(e, t){
        super(e), this.check = t, this.name = "ManifestError";
    }
}
function y(e) {
    return n.createHash("sha256").update(e).digest("hex");
}
const w = /^(\d{1,9})\.(\d{1,9})\.(\d{1,9})(?:-pre\.(\d{1,9})(?:\.patch\.(\d{1,9}))?)?$/;
function v(e) {
    const t = w.exec(e);
    if (null === t) return;
    const [, r, n, s, o, i] = t;
    return {
        major: Number(r),
        minor: Number(n),
        patch: Number(s),
        pre: void 0 === o ? void 0 : [
            Number(o),
            Number(i ?? 0)
        ]
    };
}
function _(e, t) {
    const r = e.major - t.major || e.minor - t.minor || e.patch - t.patch;
    return 0 !== r ? r : void 0 === e.pre || void 0 === t.pre ? (void 0 === e.pre ? 1 : 0) - (void 0 === t.pre ? 1 : 0) : e.pre[0] - t.pre[0] || e.pre[1] - t.pre[1];
}
function A(e) {
    return v(e.startsWith(">=") ? e.slice(2) : e);
}
const S = i.Yj().regex(/^[0-9a-f]{64}$/, "expected a sha256 hex digest"), b = i.Yj().min(1), E = (e)=>b.max(e).refine((e)=>!p(e), {
        message: "contains a control character"
    }), I = i.Yj().refine(function(e) {
    return e.length > 0 && e.length <= d.name && !p(e) && !e.includes("/") && !e.includes("\\") && "." !== e && ".." !== e && "__proto__" !== e && e !== u && !function(e) {
        return m.test(e) || h.test(e) || e.endsWith(".") || e.endsWith(" ");
    }(e);
}, {
    message: "is not a plain name"
}), C = I.refine((e)=>!function(e) {
        return f.test(e);
    }(e), {
    message: "is a native binary; a generation carries code only"
}), k = i.Yj().max(d.name).regex(/^(@[a-z0-9~-][a-z0-9._~-]*\/)?[a-z0-9~-][a-z0-9._~-]*$/, "is not a package name"), x = i.Yj().max(d.capability).regex(/^[a-z0-9][a-z0-9-]*$/, "is not a capability name"), T = (e)=>i.YO(e).max(d.list), R = (e, t)=>{
    if (void 0 === e) return;
    if (function(e, t) {
        let r = 0, n = [
            e
        ];
        for(; n.length > 0 && r < t + 1;){
            r += 1;
            const e = [];
            for (const t of n)if (Array.isArray(t)) for (const r of t)e.push(r);
            else if ("object" == typeof t && null !== t) for (const r of Object.values(t))e.push(r);
            n = e;
        }
        return r;
    }(e, d.packDepth) > d.packDepth) return void t.addIssue({
        code: a.eq.custom,
        message: `nests deeper than ${d.packDepth} levels`
    });
    const r = JSON.stringify(e);
    (void 0 === r || r.length > d.packBytes) && t.addIssue({
        code: a.eq.custom,
        message: `serializes to more than ${d.packBytes} bytes`
    });
}, B = i.L5().superRefine(R), P = i.Ik({
    algorithm: i.Yj()
}).passthrough().superRefine(R), J = i.Ik({
    schema: i.eu(1),
    generation: S,
    label: E(d.label),
    commit: E(d.commit),
    builtAt: E(d.builtAt),
    entry: I,
    workers: T(C),
    natives: T(k),
    requiredRevision: i.ai().int().min(0).max(d.requiredRevision),
    capabilities: T(x),
    engines: i.Ik({
        cursor: i.Yj().refine((e)=>void 0 !== A(e), {
            message: "is not >=X.Y.Z, >=X.Y.Z-pre.N or >=X.Y.Z-pre.N.patch.M"
        })
    }).optional(),
    files: i.g1(C, i.Ik({
        bytes: i.ai().int().min(0).max(d.fileBytes),
        sha256: S
    })).refine((e)=>Object.keys(e).length <= d.files, {
        message: `lists more than ${d.files} files`
    }),
    mainVersion: i.Yj().max(d.mainVersion).refine((e)=>void 0 !== v(e), {
        message: "is not X.Y.Z, X.Y.Z-pre.N or X.Y.Z-pre.N.patch.M"
    }).optional(),
    kind: E(d.kind).optional(),
    pack: B.optional(),
    signature: P.optional()
}).superRefine((e, t)=>{
    Object.hasOwn(e.files, e.entry) || t.addIssue({
        code: a.eq.custom,
        path: [
            "entry"
        ],
        message: `entry ${e.entry} is not in files`
    }), e.workers.forEach((r, n)=>{
        Object.hasOwn(e.files, r) || t.addIssue({
            code: a.eq.custom,
            path: [
                "workers",
                n
            ],
            message: `worker ${r} is not in files`
        });
    });
});
function M(e, t) {
    const r = "string" == typeof e ? Buffer.byteLength(e, "utf8") : e.byteLength;
    if (r > d.manifestBytes) throw new g(`${t}: ${r} bytes, more than the ${d.manifestBytes} a manifest may have`, "schema");
    let n;
    try {
        n = JSON.parse("string" == typeof e ? e : Buffer.from(e).toString("utf8"));
    } catch (e) {
        throw new g(`${t}: not JSON: ${e instanceof Error ? e.message : String(e)}`, "schema");
    }
    return function(e, t) {
        const r = J.safeParse(e);
        if (!r.success) throw new g(`${t}: ${(n = r.error.issues, n.map((e)=>0 === e.path.length ? e.message : `${e.path.join(".")}: ${e.message}`).join("; "))}`, "schema");
        var n;
        const { pack: s, signature: o, ...i } = r.data;
        return {
            ...i,
            ...void 0 === s ? {} : {
                pack: s
            },
            ...void 0 === o ? {} : {
                signature: o
            }
        };
    }(n, t);
}
function q(e) {
    const t = o.join(e, u);
    let r;
    try {
        r = D(t, d.manifestBytes);
    } catch (e) {
        throw new g(`unreadable ${t}: ${e instanceof Error ? e.message : String(e)}`, "schema");
    }
    return M(r, t);
}
function D(e, t) {
    const r = o.basename(e);
    if (!s.lstatSync(e).isFile()) throw new g(`${r}: is not a regular file`, "files");
    const n = s.openSync(e, "r");
    try {
        const e = s.fstatSync(n);
        if (!e.isFile()) throw new g(`${r}: is not a regular file`, "files");
        if (e.size > t) throw new g(`${r}: ${e.size} bytes on disk, more than the ${t} allowed`, "files");
        return s.readFileSync(n);
    } finally{
        s.closeSync(n);
    }
}
function O(e) {
    if (e.requiredRevision !== c.nl) throw new g(`built against interface revision ${e.requiredRevision}; this host requires ${c.nl}`, "revision");
    const t = c.us.filter((t)=>!e.capabilities.includes(t));
    if (t.length > 0) throw new g(`lacks required capabilities: ${t.join(", ")}`, "capabilities");
    const r = (0, l.Mt)(e.natives);
    if (r.length > 0) throw new g(`requires natives this host does not provide: ${r.join(", ")}`, "natives");
}
function N({ candidateBuiltAt: e, floorBuiltAt: t }) {
    const r = void 0 === t ? Number.NaN : Date.parse(t);
    if (Number.isNaN(r)) return;
    const n = Date.parse(e);
    return Number.isNaN(n) ? `builtAt ${JSON.stringify(e)} is not a date, so it cannot be ordered against the floor built ${t}` : n < r ? `built ${e}, before the floor built ${t}; never below the floor` : void 0;
}
function F(e, t) {
    const r = function({ range: e, clientVersion: t }) {
        const r = void 0 === e ? void 0 : A(e), n = void 0 === t ? void 0 : v(t);
        if (!(void 0 === r || void 0 === n || _(n, r) >= 0)) return `engines.cursor is ${e}; this client is ${t}`;
    }({
        range: e.engines?.cursor,
        clientVersion: t
    });
    if (void 0 !== r) throw new g(r, "client");
}
function U(e, t) {
    const r = function(e) {
        const t = n.createHash("sha256");
        for (const r of Object.keys(e).sort())t.update(`${r}\n${e[r].sha256}\n`);
        return t.digest("hex");
    }(t.files);
    if (t.generation !== r) throw new g(`generation ${t.generation.slice(0, 12)} does not match its files (${r.slice(0, 12)})`, "hash");
    for (const [r, n] of Object.entries(t.files)){
        let t;
        try {
            t = D(o.join(e, r), n.bytes);
        } catch (e) {
            if (e instanceof g) throw e;
            throw new g(`${r}: ${e instanceof Error ? e.message : String(e)}`, "files");
        }
        if (t.length !== n.bytes) throw new g(`${r}: ${t.length} bytes on disk, manifest says ${n.bytes}`, "files");
        const s = y(t);
        if (s !== n.sha256) throw new g(`${r}: sha256 ${s.slice(0, 12)} on disk, manifest says ${n.sha256.slice(0, 12)}`, "files");
    }
}
