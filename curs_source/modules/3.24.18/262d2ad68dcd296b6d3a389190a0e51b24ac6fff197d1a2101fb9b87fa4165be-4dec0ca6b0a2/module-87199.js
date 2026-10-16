"use strict";
require.d(exports, {
    $Y: ()=>D,
    $f: ()=>C,
    A: ()=>T,
    D1: ()=>I,
    Gq: ()=>R,
    Gw: ()=>u,
    KX: ()=>q,
    N6: ()=>y,
    Vn: ()=>L,
    Zv: ()=>g,
    fK: ()=>U,
    iA: ()=>O,
    mM: ()=>A,
    qr: ()=>P,
    wr: ()=>j,
    wz: ()=>F,
    yo: ()=>M
});
var n = require("./module-77598.js"), o = require("./module-73024.js"), s = require("./module-48161.js"), i = require("./module-76760.js"), a = require("./module-57075.js");
const l = "/cursor/stores", c = "CURSOR_SPAWN_CWD_HOP", u = "cursor-fuse-cwd", d = 79, p = "cursor-fuse-cwd:cd", h = Buffer.from(p), m = 32;
function f(e) {
    return Buffer.from(Buffer.concat(e));
}
class g {
    constructor(){
        this.held = Buffer.alloc(0), this.released = !1, this.seen = 0, this.prefix = Buffer.alloc(0);
    }
    get bytes() {
        return this.seen;
    }
    get stdoutPrefix() {
        return this.prefix;
    }
    get diverged() {
        return this.released;
    }
    note(e) {
        const t = Buffer.from(e);
        if (this.seen += t.length, this.prefix.length < m) {
            const e = Math.min(t.length, m - this.prefix.length);
            this.prefix = f([
                this.prefix,
                t.subarray(0, e)
            ]);
        }
        if (this.released) return t;
        const r = f([
            this.held,
            t
        ]);
        if (!(r.length <= h.length && h.subarray(0, r.length).equals(r))) return this.released = !0, this.held = Buffer.alloc(0), r;
        this.held = r;
    }
    takeHeld() {
        if (0 === this.held.length) return void (this.released = !0);
        const e = this.held;
        return this.held = Buffer.alloc(0), this.released = !0, e;
    }
}
const y = `cd "$1" || { printf %s '${p}'; exit ${d}; }; shift; exec "$@"`;
function v() {
    try {
        return (0, o.readFileSync)("/proc/self/mountinfo", "utf8");
    } catch  {
        return;
    }
}
let w, b, _ = v;
function S(e) {
    return e.replace(/\\([0-7]{3})/g, (e, t)=>String.fromCharCode(Number.parseInt(t, 8)));
}
function x(e) {
    return "/" === e ? "/" : e.replace(/\/+$/, "");
}
function k(e, t) {
    return "/" === t || e === t || e.startsWith(`${t}/`);
}
function E(e) {
    return w === e && void 0 !== b || (w = e, b = function(e) {
        const t = [];
        for (const r of e.split("\n")){
            if (0 === r.length) continue;
            const e = r.split(" ");
            if (e.length < 10) continue;
            let n = -1;
            for(let t = 6; t < e.length; t++)if ("-" === e[t]) {
                n = t;
                break;
            }
            const o = e[4], s = -1 === n ? void 0 : e[n + 1];
            void 0 !== o && void 0 !== s && 0 !== s.length && t.push({
                mountPoint: x(S(o)),
                fstype: s
            });
        }
        return t;
    }(e)), b;
}
function T(e, t) {
    const r = (function(e) {
        return e?.readMountinfo ?? _;
    })(t)();
    if (void 0 === r) return !1;
    const n = function(e, t) {
        let r;
        for (const n of t)k(e, n.mountPoint) && (void 0 === r || n.mountPoint.length >= r.mountPoint.length) && (r = n);
        return r;
    }(i.resolve(e), E(r));
    return void 0 !== n && ("fuse" === (o = n.fstype) || "fuseblk" === o || o.startsWith("fuse."));
    var o;
}
function C(e) {
    const t = i.resolve(e);
    return t === l || t.startsWith(`${l}/`);
}
function I(e) {
    const t = e?.processCwd ?? process.cwd();
    return "linux" === (e?.platform ?? process.platform) && T(t, e) ? e?.tmpdir ?? (0, s.tmpdir)() : t;
}
function A(e, t, r, n) {
    const o = n?.platform ?? process.platform, s = r?.cwd;
    if ("linux" !== o || void 0 === s || r?.shell || !T(s, n)) return {
        command: e,
        args: [
            ...t
        ],
        options: r,
        hopped: !1
    };
    const a = i.resolve(s), l = I({
        processCwd: n?.processCwd,
        tmpdir: n?.tmpdir,
        platform: o,
        readMountinfo: n?.readMountinfo
    });
    return {
        command: "/bin/sh",
        args: [
            "-c",
            y,
            u,
            a,
            e,
            ...t
        ],
        options: {
            ...r,
            cwd: l
        },
        hopped: !0,
        hopCwd: a
    };
}
function P(e = process.env) {
    return "1" === e[c];
}
const M = "exec_daemon.spawn.cwd_hop", R = "exec_daemon.spawn.cwd_hop_cd_failed";
function O(e) {
    return {
        cwdKind: C(e) ? "agent_store_fuse" : "fuse",
        cwdHash: (0, n.createHash)("sha256").update(e, "utf8").digest("hex").slice(0, 12)
    };
}
function D(e, t = process.env) {
    return P(t) && void 0 !== e && T(e);
}
function N(e) {
    return `working directory is not accessible: ${i.resolve(e)}`;
}
function F(e) {
    return D(e.cwd, e.env) && e.exitCode === d && e.stdoutBytes === p.length && ("string" == typeof (t = e.stdoutPrefix) ? t === p : Buffer.from(t).equals(Buffer.from(p)));
    var t;
}
function L(e) {
    const t = new Error(N(e));
    return t.code = "ENOENT", t;
}
function U(e, t) {
    return e instanceof Error && "ENOENT" === e.code && e.message === N(t);
}
function B(e, t) {
    if ("object" != typeof e || null === e || !("status" in e)) return !1;
    const r = e, n = function(e) {
        if (null == e.stdout) return {
            bytes: 0,
            prefix: Buffer.alloc(0)
        };
        const t = "string" == typeof e.stdout ? Buffer.from(e.stdout) : f([
            e.stdout
        ]);
        return {
            bytes: t.length,
            prefix: t.subarray(0, m)
        };
    }(r);
    return F({
        exitCode: "number" == typeof r.status ? r.status : null,
        stdoutBytes: n.bytes,
        stdoutPrefix: n.prefix,
        cwd: t
    });
}
function $(e) {
    return "object" == typeof e && null !== e && "emit" in e && "function" == typeof e.emit && "on" in e && "function" == typeof e.on && "stdout" in e && "stdin" in e;
}
function q(e, t) {
    if (B(e, t)) throw L(t);
    throw e;
}
function j(e, t) {
    return $(e) ? (function(e, t) {
        const r = new g, n = new a.PassThrough;
        let o, s = !1;
        const i = e.stdout, l = e.emit.bind(e), c = (e)=>{
            if (e) r.takeHeld();
            else {
                const e = r.takeHeld();
                void 0 === e || n.writableEnded || n.write(e);
            }
            n.writableEnded || n.end();
        }, u = (e)=>{
            const t = e?.[0];
            return null === t || "number" == typeof t ? t : null;
        }, p = (e)=>F({
                exitCode: u(e),
                stdoutBytes: r.bytes,
                stdoutPrefix: r.stdoutPrefix,
                cwd: t
            }), h = ()=>(s = !0, c(!0), l("error", L(t))), m = ()=>{
            void 0 !== o && u(o) === d && (l("exit", ...o), o = void 0);
        };
        i && (i.on("data", (e)=>{
            if (s) return;
            const t = r.note(e);
            if (void 0 !== t) return n.write(t), void m();
            p(o) && h();
        }), i.on("error", (e)=>{
            n.destroy(e);
        }), Object.defineProperty(e, "stdout", {
            configurable: !0,
            enumerable: !0,
            get: ()=>n
        })), e.emit = (e, ...t)=>s ? "exit" !== e && "close" !== e && l(e, ...t) : "exit" === e ? (o = t, u(t) !== d ? l(e, ...t) : p(t) ? h() : !(!r.diverged && null != i) && (o = void 0, l(e, ...t))) : "close" === e ? p(t) || p(o) ? h() : (c(!1), m(), l(e, ...t)) : l(e, ...t);
    }(e, t), e) : "object" == typeof (r = e) && null !== r && !$(r) && "onData" in r && "function" == typeof r.onData && "onExit" in r && "function" == typeof r.onExit ? (function(e, t) {
        const r = new g, n = [], o = e.onData.bind(e), s = e.onExit.bind(e);
        e.onData = (e)=>(n.push(e), o((t)=>{
                const n = "string" == typeof t ? Buffer.from(t) : t, o = r.note(n);
                void 0 !== o && e("string" == typeof t ? o.toString("utf8") : o);
            })), e.onExit = (e)=>s((o)=>{
                const s = r.takeHeld();
                if (F({
                    exitCode: o.exitCode,
                    stdoutBytes: r.bytes,
                    stdoutPrefix: r.stdoutPrefix,
                    cwd: t
                })) e(o);
                else {
                    if (void 0 !== s) for (const e of n)e(s);
                    e(o);
                }
            });
    }(e, t), e) : function(e) {
        return "object" == typeof e && null !== e && "then" in e && "function" == typeof e.then;
    }(e) ? e.then((e)=>e, (e)=>q(e, t)) : e;
    var r;
}
